<template>
  <div class="bg-white rounded-lg shadow-sm flex flex-col h-full">
    <PreviewHeader
      :is-mobile="props.isMobile"
      :is-expanded="props.isExpanded"
      :is-auto-mode="promptStore.isAutoMode"
      :current-execution-step="promptStore.currentExecutionStep"
      :is-generating="promptStore.isGenerating"
      @toggle="$emit('toggle')"
      @update:is-auto-mode="promptStore.isAutoMode = $event"
    />

    <LoadingState v-if="promptStore.isGenerating && !helpers.hasAnyContent.value" />

    <div v-if="helpers.hasAnyContent.value" class="flex-1 flex flex-col overflow-hidden p-4">
      <TabContainer 
        :is-generating="promptStore.isGenerating"
        @mounted="tabs.setTabRefs({ tabContainer: $event })"
      >
        <TabButton
          :is-active="tabs.activeTab.value === 'report'"
          active-class="bg-orange-500 text-white"
          @click="tabs.handleTabChange('report')"
          @mounted="(el) => tabs.setTabRefs({ reportTab: el })"
        >
          需求描述
        </TabButton>

        <TabButton
          v-if="promptStore.promptData.thinkingPoints"
          :is-active="tabs.activeTab.value === 'thinking'"
          active-class="bg-purple-500 text-white"
          @click="tabs.handleTabChange('thinking')"
          @mounted="(el) => tabs.setTabRefs({ thinkingTab: el })"
        >
          关键指令
        </TabButton>

        <TabButton
          v-if="promptStore.promptData.initialPrompt"
          :is-active="tabs.activeTab.value === 'initial'"
          active-class="bg-green-500 text-white"
          @click="tabs.handleTabChange('initial')"
          @mounted="(el) => tabs.setTabRefs({ initialTab: el })"
        >
          初始提示词
        </TabButton>

        <TabButton
          v-if="promptStore.promptData.advice"
          :is-active="tabs.activeTab.value === 'advice'"
          active-class="bg-yellow-500 text-white"
          @click="tabs.handleTabChange('advice')"
          @mounted="(el) => tabs.setTabRefs({ adviceTab: el })"
        >
          优化建议
        </TabButton>

        <TabButton
          v-if="conversion.currentGeneratedPrompt.value"
          :is-active="tabs.activeTab.value === 'zh'"
          active-class="bg-blue-500 text-white"
          @click="tabs.handleTabChange('zh')"
          @mounted="(el) => tabs.setTabRefs({ zhTab: el })"
        >
          最终提示词
        </TabButton>
      </TabContainer>

      <ReportTab
        v-if="tabs.activeTab.value === 'report'"
        v-model:requirement-report="promptStore.promptData.requirementReport"
        :has-conversation-data="helpers.hasConversationData.value"
        :is-auto-mode="promptStore.isAutoMode"
        :is-executing="execution.isExecuting.value"
        :is-generating="promptStore.isGenerating"
        :current-execution-step="promptStore.currentExecutionStep"
        :is-copied="clipboard.copyStatus.value['report']"
        @regenerate="execution.regenerateRequirementReport"
        @copy="clipboard.copyToClipboard(promptStore.promptData.requirementReport, 'report')"
        @execute-full="execution.executeFullWorkflow"
        @execute-thinking="execution.executeThinkingPoints"
        @scroll-mounted="(el) => scrollSync.setScrollContainerRefs({ reportScrollContainer: el })"
      />

      <ThinkingTab
        v-if="tabs.activeTab.value === 'thinking'"
        :thinking-points="promptStore.promptData.thinkingPoints || []"
        :is-mobile="props.isMobile"
        :is-auto-mode="promptStore.isAutoMode"
        :is-executing="execution.isExecuting.value"
        :is-generating="promptStore.isGenerating"
        :current-execution-step="promptStore.currentExecutionStep"
        :is-copied="clipboard.copyStatus.value['thinking']"
        @regenerate="execution.regenerateThinkingPoints"
        @copy="clipboard.copyToClipboard(promptStore.promptData.thinkingPoints?.join('\n') || '', 'thinking')"
        @add-point="listOps.addThinkingPoint"
        @remove-point="listOps.removeThinkingPoint"
        @update-point="(index, value) => { if (promptStore.promptData.thinkingPoints) promptStore.promptData.thinkingPoints[index] = value }"
        @execute-initial="execution.executeInitialPrompt"
        @scroll-mounted="(el) => scrollSync.setScrollContainerRefs({ thinkingScrollContainer: el })"
      />

      <InitialTab
        v-if="tabs.activeTab.value === 'initial'"
        v-model:initial-prompt="promptStore.promptData.initialPrompt!"
        :is-auto-mode="promptStore.isAutoMode"
        :is-executing="execution.isExecuting.value"
        :is-generating="promptStore.isGenerating"
        :current-execution-step="promptStore.currentExecutionStep"
        :is-copied="clipboard.copyStatus.value['initial']"
        @regenerate="execution.regenerateInitialPrompt"
        @copy="clipboard.copyToClipboard(promptStore.promptData.initialPrompt || '', 'initial')"
        @execute-advice="execution.executeAdvice"
        @scroll-mounted="(el) => scrollSync.setScrollContainerRefs({ initialScrollContainer: el })"
      />

      <AdviceTab
        v-if="tabs.activeTab.value === 'advice'"
        :advice="promptStore.promptData.advice || []"
        :is-mobile="props.isMobile"
        :is-auto-mode="promptStore.isAutoMode"
        :is-executing="execution.isExecuting.value"
        :is-generating="promptStore.isGenerating"
        :current-execution-step="promptStore.currentExecutionStep"
        :is-copied="clipboard.copyStatus.value['advice']"
        @regenerate="execution.regenerateAdvice"
        @copy="clipboard.copyToClipboard(promptStore.promptData.advice?.join('\n') || '', 'advice')"
        @add-item="listOps.addAdviceItem"
        @remove-item="listOps.removeAdviceItem"
        @update-item="(index, value) => { if (promptStore.promptData.advice) promptStore.promptData.advice[index] = value }"
        @execute-final="execution.executeFinalPrompt"
        @scroll-mounted="(el) => scrollSync.setScrollContainerRefs({ adviceScrollContainer: el })"
      />

      <FinalTab
        v-if="tabs.activeTab.value === 'zh'"
        v-model:generated-prompt="conversion.currentGeneratedPrompt.value"
        :is-executing="execution.isExecuting.value"
        :is-generating="promptStore.isGenerating"
        :current-execution-step="promptStore.currentExecutionStep"
        :is-copied="clipboard.copyStatus.value['final']"
        :is-converting-format="conversion.isConvertingFormat.value"
        :is-converting-language="conversion.isConvertingLanguage.value"
        :format-state="conversion.formatState.value"
        :language-state="conversion.languageState.value"
        @regenerate="execution.regenerateFinalPrompt"
        @copy="clipboard.copyToClipboard(conversion.currentGeneratedPrompt.value, 'final')"
        @toggle-format="conversion.toggleFormat"
        @toggle-language="conversion.toggleLanguage"
        @scroll-mounted="(el) => scrollSync.setScrollContainerRefs({ finalScrollContainer: el })"
      />
    </div>

    <EmptyState v-if="!helpers.hasAnyContent.value && !promptStore.isGenerating" />
  </div>
</template>

<script setup lang="ts">
import { watch, nextTick } from 'vue'
import { usePromptStore } from '@/stores/promptStore'

import PreviewHeader from './preview/components/common/PreviewHeader.vue'
import TabContainer from './preview/components/common/TabContainer.vue'
import TabButton from './preview/components/common/TabButton.vue'
import EmptyState from './preview/components/common/EmptyState.vue'
import LoadingState from './preview/components/common/LoadingState.vue'

import ReportTab from './preview/components/tabs/ReportTab.vue'
import ThinkingTab from './preview/components/tabs/ThinkingTab.vue'
import InitialTab from './preview/components/tabs/InitialTab.vue'
import AdviceTab from './preview/components/tabs/AdviceTab.vue'
import FinalTab from './preview/components/tabs/FinalTab.vue'

import { usePreviewTabs } from './preview/composables/usePreviewTabs'
import { usePreviewExecution } from './preview/composables/usePreviewExecution'
import { usePreviewConversion } from './preview/composables/usePreviewConversion'
import { usePreviewScrollSync } from './preview/composables/usePreviewScrollSync'
import { usePreviewClipboard } from './preview/composables/usePreviewClipboard'
import { usePreviewListOperations } from './preview/composables/usePreviewListOperations'
import { usePreviewHelpers } from './preview/composables/usePreviewHelpers'

const props = defineProps<{
  isMobile?: boolean
  isExpanded?: boolean
}>()

defineEmits<{
  toggle: []
}>()

const promptStore = usePromptStore()

const tabs = usePreviewTabs()
const scrollSync = usePreviewScrollSync()
const conversion = usePreviewConversion()
const clipboard = usePreviewClipboard()
const listOps = usePreviewListOperations()
const helpers = usePreviewHelpers()

const execution = usePreviewExecution(
  tabs.switchToTabWithScroll,
  scrollSync.scrollToBottomOfContent
)

watch(() => promptStore.chatMessages.length, (newLength) => {
  if (newLength === 0) {
    tabs.switchToTabWithScroll('report')
    tabs.newContentTabs.value.clear()
  }
})

watch(() => promptStore.promptData.requirementReport, (newVal) => {
  if (newVal && newVal.trim().length > 0) {
    tabs.newContentTabs.value.add('report')
    tabs.switchToTabWithScroll('report')
  }
})

watch(() => promptStore.promptData.thinkingPoints, (newVal) => {
  if (newVal && newVal.length > 0) {
    tabs.newContentTabs.value.add('thinking')
    tabs.switchToTabWithScroll('thinking')
  }
})

watch(() => promptStore.promptData.initialPrompt, (newVal) => {
  if (newVal && newVal.trim().length > 0) {
    tabs.newContentTabs.value.add('initial')
    tabs.switchToTabWithScroll('initial')
  }
})

watch(() => promptStore.promptData.advice, (newVal) => {
  if (newVal && newVal.length > 0) {
    tabs.newContentTabs.value.add('advice')
    tabs.switchToTabWithScroll('advice')
  }
})

watch(() => promptStore.promptData.generatedPrompt, (newVal) => {
  if (newVal) {
    let hasContent = false
    if (typeof newVal === 'string') {
      hasContent = newVal.trim().length > 0
    } else if (typeof newVal === 'object') {
      hasContent = Boolean((newVal.zh && newVal.zh.trim().length > 0) || (newVal.en && newVal.en.trim().length > 0))
    }
    
    if (hasContent) {
      tabs.newContentTabs.value.add('zh')
      tabs.switchToTabWithScroll('zh')
    }
  }
})

// 流式输出时自动滚动 - 需求描述
watch(() => promptStore.promptData.requirementReport, () => {
  if (promptStore.isGenerating && tabs.activeTab.value === 'report') {
    nextTick(() => {
      scrollSync.scrollContainerToBottom('reportScrollContainer')
    })
  }
}, { flush: 'post' })

// 流式输出时自动滚动 - 关键指令
watch(() => promptStore.promptData.thinkingPoints, () => {
  if (promptStore.isGenerating && tabs.activeTab.value === 'thinking') {
    nextTick(() => {
      scrollSync.scrollContainerToBottom('thinkingScrollContainer')
    })
  }
}, { flush: 'post' })

// 流式输出时自动滚动 - 初始提示词
watch(() => promptStore.promptData.initialPrompt, () => {
  if (promptStore.isGenerating && tabs.activeTab.value === 'initial') {
    nextTick(() => {
      scrollSync.scrollContainerToBottom('initialScrollContainer')
    })
  }
}, { flush: 'post' })

// 流式输出时自动滚动 - 优化建议
watch(() => promptStore.promptData.advice, () => {
  if (promptStore.isGenerating && tabs.activeTab.value === 'advice') {
    nextTick(() => {
      scrollSync.scrollContainerToBottom('adviceScrollContainer')
    })
  }
}, { flush: 'post' })

// 流式输出时自动滚动 - 最终提示词
watch(() => promptStore.promptData.generatedPrompt, () => {
  if (promptStore.isGenerating && tabs.activeTab.value === 'zh') {
    nextTick(() => {
      scrollSync.scrollContainerToBottom('finalScrollContainer')
    })
  }
}, { flush: 'post' })
</script>
