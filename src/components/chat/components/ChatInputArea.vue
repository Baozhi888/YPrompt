<template>
  <div ref="inputContainer" class="p-3 border-t border-gray-200 bg-white flex-shrink-0 relative z-20">
    <!-- 快速回复选项 - 绝对定位在输入框上方 -->
    <div v-if="showQuickReplies" ref="quickRepliesRef" class="absolute bottom-full left-0 right-0 px-6 py-3 bg-gray-50 border-b border-gray-200 shadow-lg">
      <div class="text-xs text-gray-500 mb-2">快速回复：</div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="reply in quickReplies"
          :key="reply"
          @click="$emit('quick-reply-select', reply)"
          class="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        >
          {{ reply }}
        </button>
      </div>
    </div>

    <input
      ref="fileInputRef"
      type="file"
      multiple
      accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.md,.csv,.json,.xml,.html,.css,.js,.ts,.py,.java,.c,.cpp,.yaml,.yml"
      @change="$emit('file-select', $event)"
      class="hidden"
    />
    
    <div v-if="attachments.length > 0" class="mb-3 p-3 bg-gray-50 rounded-lg">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm text-gray-600">已选择 {{ attachments.length }} 个附件</span>
        <button
          @click="$emit('clear-attachments')"
          class="text-xs text-red-500 hover:text-red-700"
        >
          清空全部
        </button>
      </div>
      <div class="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div
          v-for="attachment in attachments"
          :key="attachment.id"
          class="flex-shrink-0 flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200 min-w-0"
        >
          <div class="flex items-center gap-2 min-w-0">
            <div class="flex-shrink-0">
              <div v-if="attachment.type === 'image'" class="w-4 h-4 text-green-500">🖼️</div>
              <div v-else-if="attachment.type === 'document'" class="w-4 h-4 text-blue-500">📄</div>
              <div v-else-if="attachment.type === 'audio'" class="w-4 h-4 text-purple-500">🎵</div>
              <div v-else-if="attachment.type === 'video'" class="w-4 h-4 text-red-500">🎬</div>
              <div v-else class="w-4 h-4 text-gray-500">📎</div>
            </div>
            <div class="min-w-0 flex-1">
              <div class="text-xs font-medium text-gray-700 truncate max-w-24" :title="attachment.name">
                {{ attachment.name }}
              </div>
              <div class="text-xs text-gray-500">
                {{ (attachment.size / 1024).toFixed(1) }}KB
              </div>
            </div>
          </div>
          <button
            @click="$emit('remove-attachment', attachment.id)"
            class="flex-shrink-0 w-4 h-4 text-gray-400 hover:text-red-500 transition-colors"
            title="移除附件"
          >
            <X class="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
    
    <div 
      v-show="!isMobile || !isEditing"
      class="relative border border-gray-300 rounded-2xl focus-within:outline-none focus-within:border-gray-300 overflow-hidden" 
      style="height: 120px;"
    >
      <div class="absolute top-0 left-0 right-0" style="bottom: 48px;">
        <textarea
          ref="textareaRef"
          :value="userInput"
          @input="$emit('update:userInput', ($event.target as HTMLTextAreaElement).value)"
          @keydown="$emit('keydown', $event)"
          @compositionstart="$emit('composition-start')"
          @compositionend="$emit('composition-end')"
          @focus="handleFocus"
          @mousedown="handleMouseDown"
          :placeholder="placeholder"
          :disabled="isDisabled"
          class="w-full h-full px-2 pt-3 pb-1 border-0 outline-none resize-none disabled:opacity-50 text-base overflow-y-auto bg-transparent"
          rows="1"
        ></textarea>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0 h-12 flex justify-between items-center px-2 bg-transparent pointer-events-none">
        <button
          @click="$emit('trigger-file-select')"
          class="w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors flex items-center justify-center pointer-events-auto"
          title="支持拖拽上传图片、文档、音频等格式，单个文件最大25MB"
        >
          <div class="relative">
            <Paperclip class="w-4 h-4" />
            <span 
              v-if="attachments.length > 0" 
              class="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"
              style="font-size: 9px;"
            >
              {{ attachments.length }}
            </span>
          </div>
        </button>
        
        <button
          @click="$emit('send')"
          :disabled="!userInput.trim() || isDisabled"
          class="w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center pointer-events-auto"
        >
          <ArrowUp class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ArrowUp, Paperclip, X } from 'lucide-vue-next'
import type { MessageAttachment } from '@/stores/promptStore'

const props = defineProps<{
  isMobile?: boolean
  isEditing: boolean
  userInput: string
  attachments: MessageAttachment[]
  placeholder: string
  isDisabled: boolean
  textareaRef?: HTMLTextAreaElement
  fileInputRef?: HTMLInputElement
  inputContainer?: HTMLElement
  showQuickReplies?: boolean
  quickReplies?: string[]
  quickRepliesContainer?: { value: HTMLElement | undefined }
}>()

const emit = defineEmits<{
  'update:userInput': [value: string]
  'keydown': [event: KeyboardEvent]
  'composition-start': []
  'composition-end': []
  'focus': []
  'send': []
  'trigger-file-select': []
  'file-select': [event: Event]
  'remove-attachment': [id: string]
  'clear-attachments': []
  'quick-reply-select': [reply: string]
}>()

const quickRepliesRef = ref<HTMLElement>()

// 同步 quickRepliesRef 到父组件的 quickRepliesContainer
watch(quickRepliesRef, (newVal) => {
  if (props.quickRepliesContainer) {
    props.quickRepliesContainer.value = newVal
  }
})

const handleFocus = () => {
  emit('focus')
}

const handleMouseDown = (event: MouseEvent) => {
  const target = event.target as HTMLTextAreaElement
  if (document.activeElement !== target) {
    // 保存当前滚动位置
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    
    // 让默认行为执行，但立即恢复滚动位置
    setTimeout(() => {
      window.scrollTo(scrollLeft, scrollTop)
    }, 0)
  }
}
</script>
