import { useSettingsStore } from '@/stores/settingsStore'

export function usePromptRules() {
  const settingsStore = useSettingsStore()

  const resetSystemPromptRules = () => {
    if (confirm('确定要重置系统提示词规则为默认值吗？')) {
      settingsStore.resetSystemPromptRules()
    }
  }

  const resetUserPromptRules = () => {
    if (confirm('确定要重置用户引导规则为默认值吗？')) {
      settingsStore.resetUserPromptRules()
    }
  }

  const resetRequirementReportRules = () => {
    if (confirm('确定要重置需求报告规则为默认值吗？')) {
      settingsStore.resetRequirementReportRules()
    }
  }

  const resetThinkingPointsExtractionPrompt = () => {
    if (confirm('确定要重置关键指令提取规则为默认值吗？')) {
      settingsStore.resetThinkingPointsExtractionPrompt()
    }
  }

  const resetSystemPromptGenerationPrompt = () => {
    if (confirm('确定要重置系统提示词生成规则为默认值吗？')) {
      settingsStore.resetSystemPromptGenerationPrompt()
    }
  }

  const resetOptimizationAdvicePrompt = () => {
    if (confirm('确定要重置优化建议生成规则为默认值吗？')) {
      settingsStore.resetOptimizationAdvicePrompt()
    }
  }

  const resetOptimizationApplicationPrompt = () => {
    if (confirm('确定要重置优化应用规则为默认值吗？')) {
      settingsStore.resetOptimizationApplicationPrompt()
    }
  }

  const handleSlimRulesToggle = () => {
    settingsStore.loadPromptRules()
    settingsStore.saveSettings()
  }

  const saveAndClose = () => {
    if (settingsStore.editingSystemRules || settingsStore.editingUserRules || 
        settingsStore.editingRequirementReportRules || settingsStore.editingFinalPromptRules) {
      settingsStore.savePromptRules()
    }
    settingsStore.saveSettings()
    settingsStore.showSettings = false
  }

  return {
    resetSystemPromptRules,
    resetUserPromptRules,
    resetRequirementReportRules,
    resetThinkingPointsExtractionPrompt,
    resetSystemPromptGenerationPrompt,
    resetOptimizationAdvicePrompt,
    resetOptimizationApplicationPrompt,
    handleSlimRulesToggle,
    saveAndClose
  }
}
