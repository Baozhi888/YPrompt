import { AIService } from './aiService'
import type { ProviderConfig } from '@/stores/settingsStore'
import { promptConfigManager } from '@/config/prompts'

export class PromptGeneratorService {
  private static instance: PromptGeneratorService
  private aiService: AIService

  private constructor() {
    this.aiService = AIService.getInstance()
  }

  public static getInstance(): PromptGeneratorService {
    if (!PromptGeneratorService.instance) {
      PromptGeneratorService.instance = new PromptGeneratorService()
    }
    return PromptGeneratorService.instance
  }

  // 格式化变量为提示词部分
  private formatVariablesForPrompt(variables: string[]): string {
    if (!variables || variables.length === 0 || variables.every(v => v.trim() === '')) {
      return ''
    }
    const nonEmptyVariables = variables.filter(v => v.trim() !== '')
    if (nonEmptyVariables.length === 0) {
      return ''
    }
    
    return `
---
Variable Integration:
The final prompt must be designed to be used in a programmatic context. As such, it needs to include specific placeholders or variables. You must incorporate the following variables into the generated prompt where it makes logical sense to do so.

Variable List:
${nonEmptyVariables.map(v => `- \`${v}\``).join('\n')}

For example, if a variable is \`{{user_topic}}\`, you might include a sentence like "The user will provide the \`{{user_topic}}\` for you to write about."
---
    `
  }

  // 获取流式模式设置（与ChatInterface保持同步）
  private getStreamMode(): boolean {
    try {
      const savedStreamMode = localStorage.getItem('yprompt_stream_mode')
      return savedStreamMode ? JSON.parse(savedStreamMode) : true // 默认为true
    } catch (error) {
      return true // 默认为流式模式
    }
  }

  // 获取系统提示词关键指令
  public async getSystemPromptThinkingPoints(
    description: string,
    model: string,
    language: string,
    variables: string[],
    provider?: ProviderConfig,
    onStreamUpdate?: (content: string) => void
  ): Promise<string[]> {
    // 使用内置的系统提示词规则
    const SYSTEM_PROMPT_RULES = promptConfigManager.getSystemPromptRules()

    const variablesSection = this.formatVariablesForPrompt(variables)

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const masterPrompt = `
${finalRules.THINKING_POINTS_EXTRACTION}

---
Here are the principles I will follow (THE GENERATED PROMPT MUST FULLY FOLLOW THIS RULES):
${SYSTEM_PROMPT_RULES}
---
${variablesSection}
User's Description for AI Persona:
---
${description}
---
    `.replace('{language}', language)

    // 获取配置的系统消息
    const systemMessages = promptConfigManager.getFinalPromptSystemMessages()
    
    const systemMessage = {
      role: 'system' as const,
      content: systemMessages.THINKING_POINTS_SYSTEM
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }

    if (!provider) {
      throw new Error('请先配置AI提供商')
    }

    const streamMode = this.getStreamMode()
    
    // 如果有流式回调且启用流式模式，设置流式更新
    if (onStreamUpdate && streamMode) {
      this.aiService.setStreamUpdateCallback((chunk: string) => {
        onStreamUpdate(chunk)
      })
    }
    
    const response = await this.aiService.callAI([systemMessage, userMessage], provider, model, streamMode)
    
    // 清理流式回调
    if (onStreamUpdate && streamMode) {
      this.aiService.clearStreamUpdateCallback()
    }
    
    // 解析结果
    const points = response
      .split('\n')
      .map(s => s.replace(/^[*-]\s*/, '').trim())
      .filter(Boolean)
    
    return points
  }

  // 生成系统提示词
  public async generateSystemPrompt(
    description: string,
    model: string,
    language: string,
    variables: string[],
    thinkingPoints?: string[],
    provider?: ProviderConfig,
    onStreamUpdate?: (content: string) => void
  ): Promise<string> {
    // 使用内置的系统提示词规则
    const SYSTEM_PROMPT_RULES = promptConfigManager.getSystemPromptRules()

    const variablesSection = this.formatVariablesForPrompt(variables)
    const thinkingPointsSection = (thinkingPoints && thinkingPoints.length > 0 && thinkingPoints.some(p => p.trim() !== ''))
      ? `
---
Key Directives to Incorporate:
You must intelligently integrate the following specific directives into the final System Prompt. These are non-negotiable and should guide the core logic and personality of the AI.

Directives:
${thinkingPoints.filter(p => p.trim() !== '').map(p => `- ${p}`).join('\n')}
---
      `
      : ''

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const languageDisplay = language === 'zh' ? '中文' : 'English'
    
    const masterPrompt = `
${finalRules.SYSTEM_PROMPT_GENERATION}

---
Here are the prompt engineering rules I will follow:
${SYSTEM_PROMPT_RULES}
---
${variablesSection}
${thinkingPointsSection}
User's Original Description:
---
${description}
---
    `.replace('{language_display}', languageDisplay)

    // 获取配置的系统消息
    const systemMessages = promptConfigManager.getFinalPromptSystemMessages()
    
    const systemMessage = {
      role: 'system' as const,
      content: systemMessages.SYSTEM_PROMPT_SYSTEM
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }

    if (!provider) {
      throw new Error('请先配置AI提供商')
    }

    const streamMode = this.getStreamMode()
    
    // 如果有流式回调且启用流式模式，设置流式更新
    if (onStreamUpdate && streamMode) {
      this.aiService.setStreamUpdateCallback((chunk: string) => {
        onStreamUpdate(chunk)
      })
    }
    
    const response = await this.aiService.callAI([systemMessage, userMessage], provider, model, streamMode)
    
    // 清理流式回调
    if (onStreamUpdate && streamMode) {
      this.aiService.clearStreamUpdateCallback()
    }
    
    // 清理markdown格式
    return response.replace(/```/g, '').trim()
  }

  // 获取优化建议
  public async getOptimizationAdvice(
    promptToAnalyze: string,
    promptType: 'system' | 'user',
    model: string,
    language: string,
    variables: string[],
    provider?: ProviderConfig,
    onStreamUpdate?: (content: string) => void
  ): Promise<string[]> {
    // 使用内置的系统提示词规则
    const SYSTEM_PROMPT_RULES = promptConfigManager.getSystemPromptRules()

    const variablesSection = this.formatVariablesForPrompt(variables)

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const promptTypeCapitalized = promptType.charAt(0).toUpperCase() + promptType.slice(1)
    
    const masterPrompt = `
${finalRules.OPTIMIZATION_ADVICE_GENERATION}

---
Here are the prompt engineering principles I will follow:
${SYSTEM_PROMPT_RULES}
---
${variablesSection}
${promptTypeCapitalized} Prompt to Analyze:
---
${promptToAnalyze}
---
    `.replace('{promptType}', promptType).replace('{language}', language)

    // 获取配置的系统消息
    const systemMessages = promptConfigManager.getFinalPromptSystemMessages()
    
    const systemMessage = {
      role: 'system' as const,
      content: systemMessages.OPTIMIZATION_ADVICE_SYSTEM
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }

    if (!provider) {
      throw new Error('请先配置AI提供商')
    }

    const streamMode = this.getStreamMode()
    
    // 如果有流式回调且启用流式模式，设置流式更新
    if (onStreamUpdate && streamMode) {
      this.aiService.setStreamUpdateCallback((chunk: string) => {
        onStreamUpdate(chunk)
      })
    }
    
    const response = await this.aiService.callAI([systemMessage, userMessage], provider, model, streamMode)
    
    // 清理流式回调
    if (onStreamUpdate && streamMode) {
      this.aiService.clearStreamUpdateCallback()
    }
    
    // 解析结果
    const advice = response
      .split('\n')
      .map(s => s.replace(/^[*-]\s*/, '').trim())
      .filter(Boolean)
    
    return advice
  }

  // 应用优化建议
  public async applyOptimizationAdvice(
    originalPrompt: string,
    advice: string[],
    promptType: 'system' | 'user',
    model: string,
    language: string,
    variables: string[],
    provider?: ProviderConfig,
    onStreamUpdate?: (content: string) => void
  ): Promise<string> {
    // 使用内置的系统提示词规则
    const SYSTEM_PROMPT_RULES = promptConfigManager.getSystemPromptRules()

    const variablesSection = this.formatVariablesForPrompt(variables)
    const adviceSection = advice.map(a => `- ${a}`).join('\n')

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const languageDisplay = language === 'zh' ? '中文' : 'English'
    const promptTypeCapitalized = promptType.charAt(0).toUpperCase() + promptType.slice(1)
    
    const masterPrompt = `
${finalRules.OPTIMIZATION_APPLICATION}

---
Here are the core principles of elite prompt engineering I will follow:
${SYSTEM_PROMPT_RULES}
---
${variablesSection}
Original ${promptTypeCapitalized} Prompt:
---
${originalPrompt}
---

Optimization Suggestions to Apply:
---
${adviceSection}
---
    `.replace('{promptType}', promptType)
      .replace('{language_display}', languageDisplay)
      .replace('{promptType_capitalized}', promptTypeCapitalized)

    // 获取配置的系统消息
    const systemMessages = promptConfigManager.getFinalPromptSystemMessages()
    
    const systemMessage = {
      role: 'system' as const,
      content: systemMessages.OPTIMIZATION_APPLICATION_SYSTEM
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }

    if (!provider) {
      throw new Error('请先配置AI提供商')
    }

    const streamMode = this.getStreamMode()
    
    // 如果有流式回调且启用流式模式，设置流式更新
    if (onStreamUpdate && streamMode) {
      this.aiService.setStreamUpdateCallback((chunk: string) => {
        onStreamUpdate(chunk)
      })
    }
    
    const response = await this.aiService.callAI([systemMessage, userMessage], provider, model, streamMode)
    
    // 清理流式回调
    if (onStreamUpdate && streamMode) {
      this.aiService.clearStreamUpdateCallback()
    }
    
    // 清理markdown格式
    return response.replace(/```/g, '').trim()
  }
}