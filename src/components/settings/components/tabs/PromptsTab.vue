<template>
  <div class="space-y-6">
    <div>
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-medium">系统提示词规则</h3>
        <div class="flex items-center space-x-3">
          <label class="flex items-center space-x-2 cursor-pointer">
            <span class="text-sm text-gray-600">精简版</span>
            <div class="relative">
              <input 
                type="checkbox" 
                v-model="settingsStore.useSlimRules"
                @change="$emit('toggle-slim-rules')"
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </div>
          </label>
          <button
            @click="$emit('reset-system')"
            class="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"
          >
            重置为默认
          </button>
        </div>
      </div>
      <textarea
        v-model="settingsStore.editingSystemRules"
        placeholder="输入系统提示词规则..."
        class="w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
      ></textarea>
      <p class="text-xs text-gray-500 mt-1">系统提示词包含AI提示词工程的完整指南，用于生成高质量的提示词。</p>
    </div>

    <div>
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-medium">用户引导规则</h3>
        <button
          @click="$emit('reset-user')"
          class="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"
        >
          重置为默认
        </button>
      </div>
      <textarea
        v-model="settingsStore.editingUserRules"
        placeholder="输入用户引导规则..."
        class="w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
      ></textarea>
      <p class="text-xs text-gray-500 mt-1">用户引导规则定义AI助手在对话中的行为方式，包括智能判断和对话终止机制。</p>
    </div>

    <div>
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-medium">需求报告规则</h3>
        <button
          @click="$emit('reset-requirement')"
          class="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"
        >
          重置为默认
        </button>
      </div>
      <textarea
        v-model="settingsStore.editingRequirementReportRules"
        placeholder="输入需求报告生成规则..."
        class="w-full h-48 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
      ></textarea>
      <p class="text-xs text-gray-500 mt-1">需求报告规则用于基于用户对话历史生成完整的需求总结报告。</p>
    </div>

    <div>
      <div class="mb-3">
        <h3 class="text-lg font-medium">最终提示词生成规则</h3>
      </div>
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-medium text-gray-700">关键指令提取</h4>
            <button
              @click="$emit('reset-thinking')"
              class="text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"
            >
              重置为默认
            </button>
          </div>
          <textarea
            v-model="settingsStore.editingFinalPromptRules.THINKING_POINTS_EXTRACTION"
            placeholder="输入关键指令提取规则..."
            class="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
          ></textarea>
        </div>
        
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-medium text-gray-700">系统提示词生成</h4>
            <button
              @click="$emit('reset-generation')"
              class="text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"
            >
              重置为默认
            </button>
          </div>
          <textarea
            v-model="settingsStore.editingFinalPromptRules.SYSTEM_PROMPT_GENERATION"
            placeholder="输入系统提示词生成规则..."
            class="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
          ></textarea>
        </div>
        
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-medium text-gray-700">优化建议生成</h4>
            <button
              @click="$emit('reset-advice')"
              class="text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"
            >
              重置为默认
            </button>
          </div>
          <textarea
            v-model="settingsStore.editingFinalPromptRules.OPTIMIZATION_ADVICE_GENERATION"
            placeholder="输入优化建议生成规则..."
            class="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
          ></textarea>
        </div>
        
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-sm font-medium text-gray-700">优化应用</h4>
            <button
              @click="$emit('reset-application')"
              class="text-xs text-gray-400 hover:text-gray-600 px-1 py-0.5 border border-gray-200 rounded"
            >
              重置为默认
            </button>
          </div>
          <textarea
            v-model="settingsStore.editingFinalPromptRules.OPTIMIZATION_APPLICATION"
            placeholder="输入优化应用规则..."
            class="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xs"
          ></textarea>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-1">最终提示词生成规则用于控制提示词生成器的各个步骤的系统提示词。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from '@/stores/settingsStore'

const settingsStore = useSettingsStore()

defineEmits<{
  'reset-system': []
  'reset-user': []
  'reset-requirement': []
  'reset-thinking': []
  'reset-generation': []
  'reset-advice': []
  'reset-application': []
  'toggle-slim-rules': []
}>()
</script>
