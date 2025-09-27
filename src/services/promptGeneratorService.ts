import { AIService } from './aiService'
import type { ProviderConfig } from '@/stores/settingsStore'
import { useSettingsStore } from '@/stores/settingsStore'
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

  // 获取流式模式设置（与settingsStore保持同步）
  private getStreamMode(): boolean {
    const settingsStore = useSettingsStore()
    return settingsStore.streamMode
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
    const variablesSection = this.formatVariablesForPrompt(variables)

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const systemContent = finalRules.THINKING_POINTS_EXTRACTION.replace('{language}', language)

    const masterPrompt = `${variablesSection}
User's Description for AI Persona:
---
${description}
---`

    const systemMessage = {
      role: 'system' as const,
      content: systemContent
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }
    
    console.log('🔍 [getSystemPromptThinkingPoints] System message:', systemMessage)
    console.log('🔍 [getSystemPromptThinkingPoints] Messages array:', [systemMessage, userMessage])

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
    
    console.log('🔍 [getSystemPromptThinkingPoints] Calling aiService.callAI with messages:', [systemMessage, userMessage])
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
    
    const systemContent = `${finalRules.SYSTEM_PROMPT_GENERATION}

---
Here are the prompt engineering rules I will follow:
${SYSTEM_PROMPT_RULES}
---`.replace('{language_display}', languageDisplay)

    const masterPrompt = `${variablesSection}
${thinkingPointsSection}
User's Original Description:
---
${description}
---`

    const systemMessage = {
      role: 'system' as const,
      content: systemContent
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
    
    // 清理markdown代码块格式
    let cleaned = response.replace(/```/g, '').trim()
    
    // 如果开头有"markdown"字符，移除它
    if (cleaned.startsWith('markdown\n')) {
      cleaned = cleaned.substring(9) // 移除"markdown\n"
    } else if (cleaned.startsWith('markdown')) {
      cleaned = cleaned.substring(8) // 移除"markdown"
    }
    
    return cleaned.trim()
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
    const variablesSection = this.formatVariablesForPrompt(variables)

    // 获取配置的最终提示词生成规则
    const finalRules = promptConfigManager.getFinalPromptGenerationRules()
    
    const promptTypeCapitalized = promptType.charAt(0).toUpperCase() + promptType.slice(1)
    
    const systemContent = finalRules.OPTIMIZATION_ADVICE_GENERATION.replace('{promptType}', promptType).replace('{language}', language)

    const masterPrompt = `${variablesSection}
${promptTypeCapitalized} Prompt to Analyze:
---
${promptToAnalyze}
---`

    const systemMessage = {
      role: 'system' as const,
      content: systemContent
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
    
    const systemContent = `${finalRules.OPTIMIZATION_APPLICATION}

---
Here are the core principles of elite prompt engineering I will follow:
${SYSTEM_PROMPT_RULES}
---`.replace('{promptType}', promptType)
      .replace('{language_display}', languageDisplay)
      .replace('{promptType_capitalized}', promptTypeCapitalized)

    const masterPrompt = `${variablesSection}
Original ${promptTypeCapitalized} Prompt:
---
${originalPrompt}
---

Optimization Suggestions to Apply:
---
${adviceSection}
---`

    const systemMessage = {
      role: 'system' as const,
      content: systemContent
    }

    const userMessage = {
      role: 'user' as const,
      content: masterPrompt
    }
    
    console.log('🔍 [applyOptimizationAdvice] System message:', systemMessage)
    console.log('🔍 [applyOptimizationAdvice] Messages array:', [systemMessage, userMessage])

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
    
    console.log('🔍 [applyOptimizationAdvice] Calling aiService.callAI with messages:', [systemMessage, userMessage])
    const response = await this.aiService.callAI([systemMessage, userMessage], provider, model, streamMode)
    
    // 清理流式回调
    if (onStreamUpdate && streamMode) {
      this.aiService.clearStreamUpdateCallback()
    }
    
    // 清理markdown代码块格式
    let cleaned = response.replace(/```/g, '').trim()
    
    // 如果开头有"markdown"字符，移除它
    if (cleaned.startsWith('markdown\n')) {
      cleaned = cleaned.substring(9) // 移除"markdown\n"
    } else if (cleaned.startsWith('markdown')) {
      cleaned = cleaned.substring(8) // 移除"markdown"
    }
    
    return cleaned.trim()
  }
}