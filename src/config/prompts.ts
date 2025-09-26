// 内置系统提示词配置
// 保持独立性，便于修改和维护
// 提示词规则已拆分到 prompts/ 目录下的独立文件中

import { 
  SYSTEM_PROMPT_RULES, 
  USER_GUIDED_PROMPT_RULES,
  REQUIREMENT_REPORT_RULES,
  FINAL_PROMPT_GENERATION_RULES,
  FINAL_PROMPT_SYSTEM_MESSAGES
} from './prompts/index'

export interface PromptConfig {
  systemPromptRules: string
  userGuidedPromptRules: string
  requirementReportRules: string
  finalPromptGenerationRules: typeof FINAL_PROMPT_GENERATION_RULES
  finalPromptSystemMessages: typeof FINAL_PROMPT_SYSTEM_MESSAGES
}

// 提示词配置管理类
export class PromptConfigManager {
  private static instance: PromptConfigManager
  private config: PromptConfig
  
  private constructor() {
    this.config = {
      systemPromptRules: SYSTEM_PROMPT_RULES,
      userGuidedPromptRules: USER_GUIDED_PROMPT_RULES,
      requirementReportRules: REQUIREMENT_REPORT_RULES,
      finalPromptGenerationRules: FINAL_PROMPT_GENERATION_RULES,
      finalPromptSystemMessages: FINAL_PROMPT_SYSTEM_MESSAGES
    }
    this.loadFromStorage()
  }

  public static getInstance(): PromptConfigManager {
    if (!PromptConfigManager.instance) {
      PromptConfigManager.instance = new PromptConfigManager()
    }
    return PromptConfigManager.instance
  }

  public getSystemPromptRules(): string {
    return this.config.systemPromptRules
  }

  public getUserGuidedPromptRules(): string {
    return this.config.userGuidedPromptRules
  }

  public updateSystemPromptRules(rules: string): void {
    this.config.systemPromptRules = rules
    this.saveToStorage()
  }

  public updateUserGuidedPromptRules(rules: string): void {
    this.config.userGuidedPromptRules = rules
    this.saveToStorage()
  }

  public getRequirementReportRules(): string {
    return this.config.requirementReportRules
  }

  public updateRequirementReportRules(rules: string): void {
    this.config.requirementReportRules = rules
    this.saveToStorage()
  }

  public getFinalPromptGenerationRules(): typeof FINAL_PROMPT_GENERATION_RULES {
    return this.config.finalPromptGenerationRules
  }

  public updateFinalPromptGenerationRules(rules: typeof FINAL_PROMPT_GENERATION_RULES): void {
    this.config.finalPromptGenerationRules = rules
    this.saveToStorage()
  }

  public getFinalPromptSystemMessages(): typeof FINAL_PROMPT_SYSTEM_MESSAGES {
    return this.config.finalPromptSystemMessages
  }

  public updateFinalPromptSystemMessages(messages: typeof FINAL_PROMPT_SYSTEM_MESSAGES): void {
    this.config.finalPromptSystemMessages = messages
    this.saveToStorage()
  }

  public resetToDefaults(): void {
    this.config.systemPromptRules = SYSTEM_PROMPT_RULES
    this.config.userGuidedPromptRules = USER_GUIDED_PROMPT_RULES
    this.config.requirementReportRules = REQUIREMENT_REPORT_RULES
    this.config.finalPromptGenerationRules = FINAL_PROMPT_GENERATION_RULES
    this.config.finalPromptSystemMessages = FINAL_PROMPT_SYSTEM_MESSAGES
    this.saveToStorage()
  }

  // 重置系统提示词规则为默认值
  public resetSystemPromptRules(): void {
    this.config.systemPromptRules = SYSTEM_PROMPT_RULES
    this.saveToStorage()
  }

  // 重置用户引导规则为默认值
  public resetUserGuidedPromptRules(): void {
    this.config.userGuidedPromptRules = USER_GUIDED_PROMPT_RULES
    this.saveToStorage()
  }

  // 重置需求报告规则为默认值
  public resetRequirementReportRules(): void {
    this.config.requirementReportRules = REQUIREMENT_REPORT_RULES
    this.saveToStorage()
  }

  // 重置最终提示词生成规则为默认值
  public resetFinalPromptGenerationRules(): void {
    this.config.finalPromptGenerationRules = FINAL_PROMPT_GENERATION_RULES
    this.saveToStorage()
  }

  // 重置最终提示词系统消息为默认值
  public resetFinalPromptSystemMessages(): void {
    this.config.finalPromptSystemMessages = FINAL_PROMPT_SYSTEM_MESSAGES
    this.saveToStorage()
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem('yprompt_config', JSON.stringify(this.config))
    } catch (error) {
      console.error('Failed to save prompt config to localStorage:', error)
    }
  }

  private loadFromStorage(): void {
    try {
      const saved = localStorage.getItem('yprompt_config')
      if (saved) {
        const parsed = JSON.parse(saved)
        // 只加载用户自定义的内容，如果不存在则使用默认值
        this.config.systemPromptRules = parsed.systemPromptRules || SYSTEM_PROMPT_RULES
        this.config.userGuidedPromptRules = parsed.userGuidedPromptRules || USER_GUIDED_PROMPT_RULES
        this.config.requirementReportRules = parsed.requirementReportRules || REQUIREMENT_REPORT_RULES
        this.config.finalPromptGenerationRules = parsed.finalPromptGenerationRules || FINAL_PROMPT_GENERATION_RULES
        this.config.finalPromptSystemMessages = parsed.finalPromptSystemMessages || FINAL_PROMPT_SYSTEM_MESSAGES
      }
    } catch (error) {
      // 加载失败时使用默认配置
      this.config = {
        systemPromptRules: SYSTEM_PROMPT_RULES,
        userGuidedPromptRules: USER_GUIDED_PROMPT_RULES,
        requirementReportRules: REQUIREMENT_REPORT_RULES,
        finalPromptGenerationRules: FINAL_PROMPT_GENERATION_RULES,
        finalPromptSystemMessages: FINAL_PROMPT_SYSTEM_MESSAGES
      }
    }
  }
}

// 单例实例导出
export const promptConfigManager = PromptConfigManager.getInstance()