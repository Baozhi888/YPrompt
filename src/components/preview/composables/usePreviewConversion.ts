import { ref, computed } from 'vue'
import { usePromptStore } from '@/stores/promptStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { AIService, type ChatMessage } from '@/services/aiService'
import { cleanAIResponseForFormatting } from '@/utils/aiResponseUtils'

export function usePreviewConversion() {
  const promptStore = usePromptStore()
  const settingsStore = useSettingsStore()
  const notificationStore = useNotificationStore()
  const aiService = AIService.getInstance()

  const isConvertingFormat = ref(false)
  const isConvertingLanguage = ref(false)
  const formatState = ref<'markdown' | 'xml'>('markdown')
  const languageState = ref<'zh' | 'en'>('zh')

  // 获取当前生成的提示词
  const currentGeneratedPrompt = computed({
    get: () => {
      if (typeof promptStore.promptData.generatedPrompt === 'string') {
        return promptStore.promptData.generatedPrompt
      }
      return languageState.value === 'zh' 
        ? promptStore.promptData.generatedPrompt.zh 
        : promptStore.promptData.generatedPrompt.en
    },
    set: (value: string) => {
      if (typeof promptStore.promptData.generatedPrompt === 'string') {
        promptStore.promptData.generatedPrompt = value
      } else if (languageState.value === 'zh') {
        promptStore.promptData.generatedPrompt.zh = value
      } else {
        promptStore.promptData.generatedPrompt.en = value
      }
    }
  })

  // 切换格式（Markdown <-> XML）
  const toggleFormat = async () => {
    if (!currentGeneratedPrompt.value || isConvertingFormat.value || isConvertingLanguage.value) {
      return
    }

    const provider = settingsStore.getCurrentProvider()
    const model = settingsStore.getCurrentModel()

    if (!provider || !model) {
      notificationStore.error('请先配置AI模型')
      return
    }

    try {
      isConvertingFormat.value = true
      const targetFormat = formatState.value === 'markdown' ? 'XML' : 'Markdown'
      const currentFormat = formatState.value === 'markdown' ? 'Markdown' : 'XML'

      // 清理内容中可能的 AI 思考标签
      const cleanedContent = cleanAIResponseForFormatting(currentGeneratedPrompt.value)

      const messages: ChatMessage[] = [
        {
          role: 'system',
          content: `你是一个专业的提示词格式转换助手。你的任务是将提示词从${currentFormat}格式转换为${targetFormat}格式，保持内容完全一致，只改变格式样式。

**重要规则**：
1. **绝对不能添加、删除或修改任何实质性内容**
2. **只能改变格式标记（如 Markdown 的 # 标题改为 XML 的 <section> 标签）**
3. **必须保留原文的所有信息和语义**
4. **不要添加任何解释、说明或额外的文字**
5. **直接输出转换后的结果，不要包含任何前言或后记**

${targetFormat === 'XML' 
  ? '使用 <prompt>, <section>, <rule>, <example> 等 XML 标签组织内容。'
  : '使用 Markdown 语法：# 标题，- 列表，**粗体** 等组织内容。'
}`
        },
        {
          role: 'user',
          content: `请将以下提示词从${currentFormat}格式转换为${targetFormat}格式：

${cleanedContent}`
        }
      ]

      const response = await aiService.callAI(
        messages,
        provider,
        model.id,
        false
      )

      if (response && response.trim()) {
        currentGeneratedPrompt.value = response.trim()
        formatState.value = formatState.value === 'markdown' ? 'xml' : 'markdown'
        notificationStore.success(`已转换为${targetFormat}格式`)
      } else {
        notificationStore.error('格式转换失败：返回内容为空')
      }
    } catch (error) {
      notificationStore.error('格式转换失败，请重试')
    } finally {
      isConvertingFormat.value = false
    }
  }

  // 切换语言（中文 <-> 英文）
  const toggleLanguage = async () => {
    if (!currentGeneratedPrompt.value || isConvertingFormat.value || isConvertingLanguage.value) {
      return
    }

    const provider = settingsStore.getCurrentProvider()
    const model = settingsStore.getCurrentModel()

    if (!provider || !model) {
      notificationStore.error('请先配置AI模型')
      return
    }

    try {
      isConvertingLanguage.value = true
      const targetLanguage = languageState.value === 'zh' ? '英文' : '中文'
      const targetLangCode = languageState.value === 'zh' ? 'en' : 'zh'

      // 清理内容中可能的 AI 思考标签
      const cleanedContent = cleanAIResponseForFormatting(currentGeneratedPrompt.value)

      const messages: ChatMessage[] = [
        {
          role: 'system',
          content: `你是一个专业的AI提示词翻译助手。你的任务是将提示词翻译为${targetLanguage}，同时保持提示词的专业性、准确性和完整性。

**重要规则**：
1. **必须保留所有原有的格式标记**（如 Markdown 的 #、- 或 XML 的标签）
2. **翻译必须准确传达原意**，特别是技术术语和指令
3. **保持提示词的专业语气和结构**
4. **不要添加任何额外的解释或说明**
5. **直接输出翻译结果，不要包含任何前言或后记**
6. **对于专有名词、技术术语，要使用行业标准译法**`
        },
        {
          role: 'user',
          content: `请将以下AI提示词翻译为${targetLanguage}：

${cleanedContent}`
        }
      ]

      const response = await aiService.callAI(
        messages,
        provider,
        model.id,
        false
      )

      if (response && response.trim()) {
        // 将翻译结果保存到对应语言
        if (typeof promptStore.promptData.generatedPrompt === 'string') {
          // 如果是旧格式（字符串），转换为对象格式
          const oldContent = promptStore.promptData.generatedPrompt
          promptStore.promptData.generatedPrompt = {
            zh: languageState.value === 'zh' ? oldContent : response.trim(),
            en: languageState.value === 'en' ? oldContent : response.trim()
          }
        } else {
          // 直接保存到对应语言
          if (targetLangCode === 'en') {
            promptStore.promptData.generatedPrompt.en = response.trim()
          } else {
            promptStore.promptData.generatedPrompt.zh = response.trim()
          }
        }
        
        // 切换语言状态
        languageState.value = targetLangCode
        notificationStore.success(`已转换为${targetLanguage}版本`)
      } else {
        notificationStore.error('语言转换失败：返回内容为空')
      }
    } catch (error) {
      notificationStore.error('语言转换失败，请重试')
    } finally {
      isConvertingLanguage.value = false
    }
  }

  return {
    isConvertingFormat,
    isConvertingLanguage,
    formatState,
    languageState,
    currentGeneratedPrompt,
    toggleFormat,
    toggleLanguage
  }
}
