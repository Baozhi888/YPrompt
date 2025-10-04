import type { ProviderConfig } from '@/stores/settingsStore'
import type { ChatMessage as PromptChatMessage, MessageAttachment } from '@/stores/promptStore'
import { 
  OpenAIProvider, 
  AnthropicProvider, 
  GoogleProvider,
  StreamProcessor,
  AIErrorHandler,
  ModelFetcher,
  ResponseCleaner,
  type ChatMessage as AIChatMessage,
  type BaseProvider,
  type MessageContent
} from './ai'

export type { MessageContent } from './ai/types'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string | MessageContent[]
  attachments?: MessageAttachment[]
}

export class AIService {
  private static instance: AIService
  private providers: Map<string, BaseProvider> = new Map()
  private streamProcessor: StreamProcessor
  private onStreamUpdate?: (content: string) => void

  private constructor() {
    this.streamProcessor = new StreamProcessor()
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService()
    }
    return AIService.instance
  }

  private getProvider(provider: ProviderConfig, modelId: string): BaseProvider {
    const key = `${provider.type}-${provider.baseUrl}-${modelId}`
    
    if (this.providers.has(key)) {
      return this.providers.get(key)!
    }

    const model = provider.models.find(m => m.id === modelId)
    const apiType = model?.apiType || provider.type

    let providerInstance: BaseProvider

    switch (apiType) {
      case 'openai':
        providerInstance = new OpenAIProvider(provider, modelId)
        break
      case 'anthropic':
        providerInstance = new AnthropicProvider(provider, modelId)
        break
      case 'google':
        providerInstance = new GoogleProvider(provider, modelId)
        break
      default:
        providerInstance = new OpenAIProvider(provider, modelId)
    }

    this.providers.set(key, providerInstance)
    return providerInstance
  }

  private convertMessagesToAI(messages: ChatMessage[] | PromptChatMessage[]): AIChatMessage[] {
    return messages.map(msg => {
      if ('role' in msg) {
        return {
          role: msg.role,
          content: msg.content,
          attachments: msg.attachments
        } as AIChatMessage
      } else {
        const role = msg.type === 'ai' ? 'assistant' : 'user'
        return {
          role,
          content: msg.content,
          attachments: msg.attachments
        } as AIChatMessage
      }
    })
  }

  async callAI(
    messages: ChatMessage[] | PromptChatMessage[], 
    provider: ProviderConfig, 
    modelId: string, 
    stream: boolean = false
  ): Promise<string> {
    const model = provider.models.find(m => m.id === modelId)
    const apiType = model?.apiType || provider.type

    try {
      const convertedMessages = this.convertMessagesToAI(messages)
      const providerInstance = this.getProvider(provider, modelId)

      if (stream) {
        return await this.callWithStream(providerInstance, convertedMessages)
      } else {
        const response = await providerInstance.callAPI(convertedMessages, false)
        if (typeof response !== 'object' || !('content' in response)) {
          throw new Error('Expected AIResponse object')
        }
        let content = response.content
        content = ResponseCleaner.cleanResponse(content)
        content = ResponseCleaner.cleanThinkTags(content)
        return content
      }
    } catch (error) {
      const friendlyErrorMessage = AIErrorHandler.parseError(error, apiType)
      throw new Error(friendlyErrorMessage)
    }
  }

  private async callWithStream(provider: BaseProvider, messages: AIChatMessage[]): Promise<string> {
    const hasCallback = !!this.onStreamUpdate

    try {
      const stream = await provider.callAPI(messages, true)
      if (typeof stream === 'string' || !('getReader' in stream)) {
        throw new Error('Expected ReadableStream for streaming')
      }

      let fullContent = ''
      this.streamProcessor.reset()

      const parseChunk = provider.parseStreamChunk.bind(provider)

      for await (const chunk of this.streamProcessor.processStream(stream, parseChunk)) {
        fullContent += chunk
        if (this.onStreamUpdate) {
          this.onStreamUpdate(chunk)
        }
      }

      if (!fullContent || fullContent.trim() === '') {
        throw new Error('API返回空内容')
      }

      let result = ResponseCleaner.cleanResponse(fullContent)
      result = ResponseCleaner.cleanThinkTags(result)

      return result
    } finally {
      if (hasCallback) {
        this.clearStreamUpdateCallback()
      }
    }
  }

  setStreamUpdateCallback(callback: (content: string) => void) {
    this.onStreamUpdate = callback
  }

  clearStreamUpdateCallback() {
    this.onStreamUpdate = undefined
  }

  async getAvailableModels(
    provider: ProviderConfig, 
    preferredApiType?: 'openai' | 'anthropic' | 'google'
  ): Promise<string[]> {
    return await ModelFetcher.getModels(provider, preferredApiType)
  }

  async testConnection(provider: ProviderConfig, modelId: string): Promise<boolean> {
    try {
      const testMessages: PromptChatMessage[] = [
        { type: 'user', content: 'test', timestamp: new Date().toISOString() }
      ]
      await this.callAI(testMessages, provider, modelId, false)
      return true
    } catch (error) {
      return false
    }
  }
}
