<template>
  <!-- 设置按钮 -->
  <button
    @click="settingsStore.showSettings = true"
    class="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    title="设置"
  >
    <Settings class="w-5 h-5 text-gray-600" />
  </button>

  <!-- 设置弹窗 -->
  <div
    v-if="settingsStore.showSettings"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
  >
    <div class="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-hidden flex flex-col">
      <!-- 头部 -->
      <div class="flex items-center justify-between p-6 border-b flex-shrink-0">
        <div class="flex items-center space-x-4">
          <h2 class="text-xl font-semibold">设置</h2>
          <div class="flex space-x-1">
            <button
              @click="activeTab = 'providers'"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition-colors',
                activeTab === 'providers' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              ]"
            >
              AI模型
            </button>
            <button
              @click="activeTab = 'prompts'"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition-colors',
                activeTab === 'prompts' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-800'
              ]"
            >
              提示词规则
            </button>
            <a
              href="https://github.com/fish2018"
              target="_blank"
              rel="noopener noreferrer"
              class="p-1 hover:bg-gray-100 rounded transition-colors"
              title="GitHub"
            >
              <svg class="w-5 h-5 text-gray-600 hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
        <button
          @click="settingsStore.showSettings = false"
          class="p-1 hover:bg-gray-100 rounded"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 内容 -->
      <div class="p-6 overflow-y-auto flex-1">
        
        <!-- AI模型配置标签页 -->
        <div v-if="activeTab === 'providers'">
          <!-- 添加新提供商 -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-medium">AI服务提供商</h3>
              <button
                @click="showAddProviderTypeDialog = true"
                class="flex items-center space-x-1 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                <Plus class="w-4 h-4" />
                <span>添加提供商</span>
              </button>
            </div>
          
            <!-- API配置说明 -->
            <div class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 class="text-sm font-medium text-blue-800 mb-2">API配置说明</h4>
              <div class="text-sm text-blue-700 space-y-2">
                <div><strong>OpenAI及兼容服务：</strong>API URL填写完整路径，如 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://api.openai.com/v1/chat/completions</code></div>
                <div><strong>Anthropic Claude：</strong>API URL填写 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://api.anthropic.com/v1/messages</code></div>
                <div><strong>Google Gemini：</strong>API URL填写 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://generativelanguage.googleapis.com/v1beta</code>（系统会自动根据模型拼接路径）</div>
                <div><strong>自定义提供商：</strong>大多数第三方服务使用OpenAI兼容格式，URL结构为 <code class="bg-blue-100 px-1 rounded break-all text-xs">https://你的域名/v1/chat/completions</code></div>
                <div class="text-xs text-blue-600 mt-2">支持代理地址、中转API等各种自定义URL</div>
              </div>
              
              <div class="mt-3 pt-3 border-t border-blue-200">
                <h4 class="text-sm font-medium text-blue-800 mb-2">附件多模态支持</h4>
                <div class="text-sm text-blue-700 space-y-1">
                  <div><strong>OpenAI：</strong>支持图片（GPT-4 Vision及更高版本）
                    <div class="text-xs text-blue-600 ml-4">• API支持格式：PNG, JPEG, WEBP, GIF</div>
                    <div class="text-xs text-blue-600 ml-4">• 注意：ChatGPT网页版支持PDF/Office文档，但API不支持</div>
                  </div>
                  <div><strong>Anthropic Claude：</strong>支持图片（Claude 3系列）
                    <div class="text-xs text-blue-600 ml-4">• 图片格式：PNG, JPEG, WEBP, GIF</div>
                    <div class="text-xs text-blue-600 ml-4">• PDF文档：Claude 3.5+（最多100页）</div>
                  </div>
                  <div><strong>Google Gemini：</strong>全面支持图片、文档（PDF/Office）、音频、视频等多模态
                    <div class="text-xs text-blue-600 ml-4">• 图片：PNG, JPEG, WEBP, GIF, BMP, TIFF, SVG, HEIC</div>
                    <div class="text-xs text-blue-600 ml-4">• 文档：PDF, Office(Word/Excel/PPT), TXT, Markdown, CSV等</div>
                    <div class="text-xs text-blue-600 ml-4">• 音频：WAV, MP3, AAC, OGG, FLAC</div>
                    <div class="text-xs text-blue-600 ml-4">• 视频：MP4, MOV, AVI, WebM等</div>
                  </div>
                  <div class="text-xs text-blue-600 mt-2">💡 如需上传表格等文档，建议使用 Google Gemini 模型</div>
                </div>
              </div>
            </div>

            <!-- 空状态 -->
            <div v-if="settingsStore.providers.length === 0" class="text-center py-8 text-gray-500">
              <Settings class="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p>还没有配置任何AI提供商</p>
              <p class="text-sm">点击上方按钮添加您的第一个AI服务</p>
            </div>

            <!-- 提供商列表 -->
            <div v-else class="space-y-4">
              <div
                v-for="provider in settingsStore.providers"
                :key="provider.id"
                class="border rounded-lg p-4"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <input
                      v-model="provider.enabled"
                      type="checkbox"
                      class="rounded"
                      @change="settingsStore.saveSettings"
                    />
                    <h4 class="font-medium">{{ provider.name }}</h4>
                    <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {{ provider.type }}
                    </span>
                    <CheckCircle v-if="provider.enabled && provider.apiKey" class="w-4 h-4 text-green-600" title="已配置" />
                    
                    <!-- 批量测试进度显示 -->
                    <div v-if="batchTestingStates[provider.id]?.isTesting" class="flex items-center space-x-2 text-sm">
                      <span class="text-blue-600">
                        {{ batchTestingStates[provider.id].isAborted ? '已停止测试' : `测试中 ${batchTestingStates[provider.id].currentModelIndex}/${batchTestingStates[provider.id].totalModels}` }}
                      </span>
                      <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          class="h-full bg-blue-500 transition-all duration-300"
                          :style="{ width: `${(batchTestingStates[provider.id].currentModelIndex / batchTestingStates[provider.id].totalModels) * 100}%` }"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button
                      @click="editProvider(provider)"
                      class="text-blue-500 hover:text-blue-700"
                      title="编辑提供商"
                    >
                      <Settings class="w-4 h-4" />
                    </button>
                    <button
                      @click="batchTestModels(provider)"
                      :disabled="!provider.apiKey || provider.models.length === 0"
                      class="text-green-500 hover:text-green-700 disabled:opacity-50 transition-colors"
                      :title="getBatchTestButtonTitle(provider)"
                    >
                      <Square v-if="batchTestingStates[provider.id]?.isTesting" class="w-4 h-4" :class="{ 'animate-pulse': testingProvider === provider.id }" />
                      <Zap v-else class="w-4 h-4" />
                    </button>
                    <button
                      @click="deleteProvider(provider.id)"
                      class="text-red-500 hover:text-red-700"
                      title="删除提供商"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <!-- API配置 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">API密钥</label>
                    <input
                      v-model="provider.apiKey"
                      type="password"
                      placeholder="输入API密钥"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      @input="settingsStore.saveSettings"
                    />
                  </div>
                  <div v-if="provider.allowCustomUrl || provider.type === 'custom'">
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      API URL
                      <span v-if="provider.type !== 'custom'" class="text-xs text-gray-500">(可选，留空使用官方完整地址)</span>
                    </label>
                    <input
                      v-model="provider.baseUrl"
                      type="url"
                      :placeholder="getDefaultBaseUrl(provider.type)"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      @input="settingsStore.saveSettings"
                    />
                  </div>
                </div>

                <!-- 模型列表 -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="text-sm font-medium text-gray-700">可用模型</label>
                    <button
                      @click="showAddModel(provider.id)"
                      class="text-sm text-blue-500 hover:text-blue-700"
                    >
                      添加模型
                    </button>
                  </div>
                  <div class="space-y-2 max-h-32 overflow-y-auto">
                    <div
                      v-for="model in provider.models"
                      :key="model.id"
                      class="relative flex items-center justify-between p-2 bg-gray-50 rounded min-w-0 overflow-x-auto"
                    >
                      <div class="flex items-center space-x-2 flex-shrink-0">
                        <input
                          v-model="model.enabled"
                          type="checkbox"
                          class="rounded flex-shrink-0"
                          @change="settingsStore.saveSettings"
                        />
                        <span class="text-sm font-medium whitespace-nowrap">{{ model.name }}</span>
                        
                        <!-- 能力指示器 - 紧凑排列 -->
                        <div class="flex items-center space-x-1 flex-shrink-0">
                          <span v-if="model.capabilities?.reasoning" 
                                class="inline-flex items-center text-xs bg-purple-100 text-purple-800 rounded-full w-4 h-4 justify-center"
                                :title="settingsStore.getReasoningTypeDescription(model.capabilities.reasoningType)">
                            🧠
                          </span>
                          <span v-if="model.capabilities?.testResult?.connected" 
                                class="inline-flex items-center text-xs bg-green-100 text-green-800 rounded-full w-4 h-4 justify-center">
                            ✅
                          </span>
                          <span v-if="model.testStatus === 'failed'" 
                                class="inline-flex items-center text-xs bg-red-100 text-red-800 rounded-full w-4 h-4 justify-center">
                            ❌
                          </span>
                        </div>
                        
                        <!-- API类型标签 - 更小 -->
                        <span 
                          v-if="model.apiType"
                          class="text-xs px-1.5 py-0.5 rounded text-white flex-shrink-0"
                          :class="getApiTypeColor(model.apiType)"
                        >
                          {{ getApiTypeLabel(model.apiType) }}
                        </span>
                      </div>
                      
                      <!-- 操作按钮 -->
                      <div class="flex items-center space-x-1 flex-shrink-0">
                        <!-- 模型级别测试按钮 -->
                        <button
                          @click="handleModelTestClick(provider.id, model.id, model.testStatus)"
                          :disabled="!provider.apiKey"
                          :class="[
                            'transition-colors text-sm',
                            model.testStatus === 'testing' ? 'text-blue-600 hover:text-blue-800' : 
                            model.testStatus === 'success' ? 'text-green-500 hover:text-green-700' :
                            model.testStatus === 'failed' ? 'text-red-500 hover:text-red-700' :
                            'text-gray-400 hover:text-blue-500'
                          ]"
                          :title="getTestButtonTitle(model)"
                        >
                          <Square v-if="model.testStatus === 'testing'" class="w-3 h-3 animate-pulse" />
                          <Zap v-else class="w-3 h-3" />
                        </button>
                        <button
                          @click="editModel(provider.id, model)"
                          class="text-blue-500 hover:text-blue-700"
                          title="编辑模型"
                        >
                          <Settings class="w-3 h-3" />
                        </button>
                        <button
                          @click="deleteModel(provider.id, model.id)"
                          class="text-red-500 hover:text-red-700"
                          title="删除模型"
                        >
                          <X class="w-3 h-3" />
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 提示词规则标签页 -->
        <div v-if="activeTab === 'prompts'">
          <div class="space-y-6">
            <!-- 系统提示词规则编辑器 -->
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
                        @change="handleSlimRulesToggle"
                        class="sr-only peer"
                      >
                      <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </div>
                  </label>
                  <button
                    @click="resetSystemPromptRules"
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

            <!-- 用户引导规则编辑器 -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-lg font-medium">用户引导规则</h3>
                <button
                  @click="resetUserPromptRules"
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

            <!-- 需求报告规则编辑器 -->
            <div>
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-lg font-medium">需求报告规则</h3>
                <button
                  @click="resetRequirementReportRules"
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

            <!-- 最终提示词生成规则编辑器 -->
            <div>
              <div class="mb-3">
                <h3 class="text-lg font-medium">最终提示词生成规则</h3>
              </div>
              <div class="space-y-4">
                <!-- 关键指令提取规则 -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-sm font-medium text-gray-700">关键指令提取</h4>
                    <button
                      @click="resetThinkingPointsExtractionPrompt"
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
                
                <!-- 系统提示词生成规则 -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-sm font-medium text-gray-700">系统提示词生成</h4>
                    <button
                      @click="resetSystemPromptGenerationPrompt"
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
                
                <!-- 优化建议生成规则 -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-sm font-medium text-gray-700">优化建议生成</h4>
                    <button
                      @click="resetOptimizationAdvicePrompt"
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
                
                <!-- 优化应用规则 -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="text-sm font-medium text-gray-700">优化应用</h4>
                    <button
                      @click="resetOptimizationApplicationPrompt"
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
        </div>
      </div>

      <!-- 底部 -->
      <div class="flex justify-end space-x-3 p-6 border-t bg-gray-50 flex-shrink-0">
        <button
          @click="settingsStore.showSettings = false"
          class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          取消
        </button>
        <button
          @click="saveAndClose"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          保存设置
        </button>
      </div>
    </div>
  </div>

  <!-- 选择提供商类型弹窗 -->
  <div
    v-if="showAddProviderTypeDialog"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"
  >
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h3 class="text-lg font-semibold mb-4">选择提供商类型</h3>
      
      <div class="space-y-3">
        <button
          v-for="providerType in availableProviderTypes"
          :key="providerType.type"
          @click="selectProviderType(providerType.type)"
          class="w-full p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 text-left transition-colors"
        >
          <div class="flex items-center space-x-3">
            <div :class="providerType.color" class="w-3 h-3 rounded-full"></div>
            <div>
              <h4 class="font-medium">{{ providerType.name }}</h4>
              <p class="text-sm text-gray-500">{{ providerType.description }}</p>
            </div>
          </div>
        </button>
      </div>

      <div class="flex justify-end space-x-3 mt-6">
        <button
          @click="showAddProviderTypeDialog = false"
          class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          取消
        </button>
      </div>
    </div>
  </div>

  <!-- 添加提供商弹窗 -->
  <div
    v-if="showAddProvider"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"
  >
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h3 class="text-lg font-semibold mb-4">{{ editingProvider ? '编辑提供商' : `添加${selectedProviderType === 'custom' ? '自定义' : ''}提供商` }}</h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">提供商名称</label>
          <input
            v-model="newProvider.name"
            type="text"
            :placeholder="selectedProviderType === 'custom' ? '例如：DeepSeek' : '可自定义名称'"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div v-if="selectedProviderType === 'custom' || (selectedProviderType && ['openai', 'anthropic', 'google'].includes(selectedProviderType) && getProviderTemplate(selectedProviderType).allowCustomUrl)">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            API URL
            <span v-if="selectedProviderType !== 'custom'" class="text-xs text-gray-500">(可选，留空使用官方完整地址)</span>
          </label>
          <input
            v-model="newProvider.baseUrl"
            type="url"
            :placeholder="getDefaultBaseUrl(selectedProviderType)"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">API密钥</label>
          <input
            v-model="newProvider.apiKey"
            type="password"
            placeholder="输入API密钥"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div class="flex justify-end space-x-3 mt-6">
        <button
          @click="closeProviderDialog"
          class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          取消
        </button>
        <button
          @click="saveProvider"
          :disabled="!newProvider.name || (selectedProviderType === 'custom' && !newProvider.baseUrl)"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {{ editingProvider ? '保存' : '添加' }}
        </button>
      </div>
    </div>
  </div>

  <!-- 添加模型弹窗 -->
  <div
    v-if="showAddModelDialog"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4"
  >
    <div class="bg-white rounded-lg max-w-md w-full p-6">
      <h3 class="text-lg font-semibold mb-4">{{ editingModel ? '编辑模型' : '添加模型' }}</h3>
      
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">模型名称</label>
          <input
            v-model="newModel.name"
            type="text"
            placeholder="例如：DeepSeek Chat"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="block text-sm font-medium text-gray-700">模型ID</label>
            <!-- 只有OpenAI、Google和自定义提供商显示获取按钮，Anthropic不支持 -->
            <button
              v-if="getProviderForModel(addingModelToProvider)?.type !== 'anthropic'"
              @click="fetchAvailableModels"
              :disabled="loadingModels"
              class="text-xs text-blue-500 hover:text-blue-700 disabled:opacity-50"
            >
              {{ loadingModels ? '获取中...' : '🔄 获取模型列表' }}
            </button>
          </div>
          <input
            v-model="newModel.id"
            type="text"
            placeholder="例如：deepseek-chat"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <!-- 可选择的模型列表 -->
          <div v-if="(providerModelsCache[addingModelToProvider] || []).length > 0" class="mt-2">
            <p class="text-xs text-gray-600 mb-2">点击选择模型：</p>
            
            <!-- 模型筛选输入框 -->
            <div class="mb-2">
              <input
                v-model="modelSearchKeyword"
                type="text"
                placeholder="🔍 输入关键词筛选模型... (支持多个关键词用空格分隔)"
                class="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
            
            <!-- 筛选结果提示 -->
            <div v-if="modelSearchKeyword.trim() && getCurrentProviderModels.length === 0" class="text-xs text-gray-500 mb-2">
              未找到包含 "{{ modelSearchKeyword }}" 的模型
            </div>
            <div v-else-if="modelSearchKeyword.trim()" class="text-xs text-gray-500 mb-2">
              找到 {{ getCurrentProviderModels.length }} 个匹配的模型
            </div>
            
            <!-- 模型列表 -->
            <div class="max-h-32 overflow-y-auto border border-gray-200 rounded">
              <div
                v-for="modelId in getCurrentProviderModels"
                :key="modelId"
                @click="selectModel(modelId)"
                class="px-3 py-2 text-sm cursor-pointer hover:bg-blue-50 border-b border-gray-100 last:border-b-0"
              >
                <span class="font-mono">{{ modelId }}</span>
              </div>
            </div>
          </div>
          
          <!-- 获取失败提示 -->
          <div v-if="modelFetchError" class="mt-2">
            <p class="text-xs text-red-600">{{ modelFetchError }}</p>
          </div>
        </div>

        <div v-if="getProviderForModel(addingModelToProvider)?.type === 'custom'">
          <label class="block text-sm font-medium text-gray-700 mb-1">API类型</label>
          <select
            v-model="newModel.apiType"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">选择API类型</option>
            <option value="openai">OpenAI 兼容</option>
            <option value="anthropic">Anthropic 兼容</option>
            <option value="google">Gemini 兼容</option>
          </select>
          <p class="text-xs text-gray-500 mt-1">
            选择此模型使用的API协议类型。大多数第三方代理服务使用OpenAI兼容格式。
          </p>
        </div>
      </div>

      <div class="flex justify-end space-x-3 mt-6">
        <button
          @click="closeAddModelDialog"
          class="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          取消
        </button>
        <button
          @click="addCustomModel"
          :disabled="!newModel.name || !newModel.id || (getProviderForModel(addingModelToProvider)?.type === 'custom' && !newModel.apiType)"
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {{ editingModel ? '保存' : '添加' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useSettingsStore } from '@/stores/settingsStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { AIService } from '@/services/aiService'
import { Settings, X, Plus, Trash2, CheckCircle, Zap, Square } from 'lucide-vue-next'

const settingsStore = useSettingsStore()
const notificationStore = useNotificationStore()
const aiService = AIService.getInstance()

// 标签页状态
const activeTab = ref('providers')

// 监听标签页切换，自动加载提示词内容
watch(activeTab, (newTab) => {
  if (newTab === 'prompts') {
    // 打开提示词编辑器并加载内容
    settingsStore.openPromptEditor('system')
  }
})

const showAddProviderTypeDialog = ref(false)
const showAddProvider = ref(false)
const showAddModelDialog = ref(false)
const testingProvider = ref<string | null>(null)
const addingModelToProvider = ref<string>('')
const editingModel = ref<any>(null)
const editingProvider = ref<any>(null) // 正在编辑的提供商
const selectedProviderType = ref<'openai' | 'anthropic' | 'google' | 'custom'>('custom')

// 批量测试相关状态
const batchTestingStates = ref<Record<string, {
  isTesting: boolean
  currentModelIndex: number
  totalModels: number
  isAborted: boolean
}>>({})
const batchAbortControllers = ref<Record<string, AbortController>>({})

const newProvider = ref({
  name: '',
  baseUrl: '',
  apiKey: ''
})

const newModel = ref({
  name: '',
  id: '',
  apiType: '' as 'openai' | 'anthropic' | 'google' | ''
})

// 模型列表获取相关状态
const loadingModels = ref(false)
const providerModelsCache = ref<Record<string, string[]>>({}) // 按提供商ID缓存模型列表
const modelFetchError = ref('')
const modelSearchKeyword = ref('') // 模型筛选关键词

// 获取当前提供商的模型列表
const getCurrentProviderModels = computed(() => {
  const allModels = providerModelsCache.value[addingModelToProvider.value] || []
  
  // 如果没有搜索关键词，返回所有模型
  if (!modelSearchKeyword.value.trim()) {
    return allModels
  }
  
  // 支持多个关键词搜索，用空格分隔
  const keywords = modelSearchKeyword.value.toLowerCase().trim().split(/\s+/)
  
  return allModels.filter(modelId => {
    const modelIdLower = modelId.toLowerCase()
    // 所有关键词都要包含
    return keywords.every(keyword => modelIdLower.includes(keyword))
  })
})

// 可用的提供商类型
const availableProviderTypes = computed(() => {
  return [
    {
      type: 'openai' as const,
      name: 'OpenAI',
      description: '官方OpenAI API或兼容服务',
      color: 'bg-green-500'
    },
    {
      type: 'anthropic' as const,
      name: 'Anthropic',
      description: '官方Claude API或兼容服务',
      color: 'bg-purple-500'
    },
    {
      type: 'google' as const,
      name: 'Gemini',
      description: '官方Gemini API或兼容服务',
      color: 'bg-blue-500'
    },
    {
      type: 'custom' as const,
      name: '自定义服务',
      description: '第三方API服务或中转代理',
      color: 'bg-gray-500'
    }
  ]
})

onMounted(() => {
  settingsStore.loadSettings()
})

// 获取模型所属的提供商
const getProviderForModel = (providerId: string) => {
  return settingsStore.providers.find(p => p.id === providerId)
}

// 获取提供商模板
const getProviderTemplate = (type: 'openai' | 'anthropic' | 'google' | 'custom') => {
  return settingsStore.getProviderTemplate(type)
}

// 获取默认完整API URL
const getDefaultBaseUrl = (type: string) => {
  switch (type) {
    case 'openai':
      return 'https://api.openai.com/v1/chat/completions'
    case 'anthropic':
      return 'https://api.anthropic.com/v1/messages'
    case 'google':
      return 'https://generativelanguage.googleapis.com/v1beta'
    case 'custom':
      return 'https://api.example.com/v1'
    default:
      return ''
  }
}

// 获取API类型颜色
const getApiTypeColor = (apiType: string) => {
  switch (apiType) {
    case 'openai':
      return 'bg-green-500'
    case 'anthropic':
      return 'bg-purple-500'
    case 'google':
      return 'bg-blue-500'
    default:
      return 'bg-gray-500'
  }
}

// 获取API类型标签
const getApiTypeLabel = (apiType: string) => {
  switch (apiType) {
    case 'openai':
      return 'OpenAI'
    case 'anthropic':
      return 'Claude'
    case 'google':
      return 'Gemini'
    default:
      return apiType
  }
}

// 选择提供商类型
const selectProviderType = (type: 'openai' | 'anthropic' | 'google' | 'custom') => {
  showAddProviderTypeDialog.value = false
  selectedProviderType.value = type
  
  // 只在添加模式下重置表单
  if (!editingProvider.value) {
    if (type === 'custom') {
      // 自定义提供商需要填写所有信息
      newProvider.value = { name: '', baseUrl: '', apiKey: '' }
    } else {
      // 官方提供商可以自定义名称
      const template = settingsStore.getProviderTemplate(type)
      newProvider.value = { 
        name: template.name, 
        baseUrl: template.baseUrl || '', 
        apiKey: '' 
      }
    }
  }
  
  showAddProvider.value = true
}

// 编辑模型
const editModel = (providerId: string, model: any) => {
  editingModel.value = model
  addingModelToProvider.value = providerId
  newModel.value = {
    name: model.name,
    id: model.id,
    apiType: model.apiType || ''
  }
  showAddModelDialog.value = true
}

// 关闭提供商弹窗
const closeProviderDialog = () => {
  showAddProvider.value = false
  editingProvider.value = null
  newProvider.value = { name: '', baseUrl: '', apiKey: '' }
}

// 编辑提供商
const editProvider = (provider: any) => {
  editingProvider.value = provider
  selectedProviderType.value = provider.type
  newProvider.value = {
    name: provider.name,
    baseUrl: provider.baseUrl || '',
    apiKey: provider.apiKey || ''
  }
  showAddProvider.value = true
}

// 删除提供商
const deleteProvider = (providerId: string) => {
  if (confirm('确定要删除这个提供商吗？这将同时删除其所有模型配置。')) {
    settingsStore.deleteProvider(providerId)
    settingsStore.saveSettings()
    notificationStore.success('提供商已删除')
  }
}

// 删除模型
const deleteModel = (providerId: string, modelId: string) => {
  if (confirm('确定要删除这个模型吗？')) {
    settingsStore.deleteModel(providerId, modelId)
    settingsStore.saveSettings()
    notificationStore.success('模型已删除')
  }
}


// 处理模型测试按钮点击
const handleModelTestClick = async (providerId: string, modelId: string, testStatus: string | undefined) => {
  if (testStatus === 'testing') {
    // 如果正在测试，停止测试
    stopModelTest(providerId, modelId)
  } else {
    // 开始测试
    testModel(providerId, modelId)
  }
}

// 正在进行的测试控制器
const activeTestControllers = new Map<string, AbortController>()

// 停止单个模型测试
const stopModelTest = (providerId: string, modelId: string) => {
  const key = `${providerId}:${modelId}`
  const controller = activeTestControllers.get(key)
  
  if (controller) {
    controller.abort()
    activeTestControllers.delete(key)
  }
  
  settingsStore.updateModelTestStatus(providerId, modelId, 'untested')
  notificationStore.warning(`已停止模型 ${modelId} 的测试`)
  settingsStore.saveSettings()
}

// 模型级别测试
const testModel = async (providerId: string, modelId: string) => {
  const provider = settingsStore.providers.find(p => p.id === providerId)
  if (!provider) {
    notificationStore.error('未找到提供商配置')
    return
  }
  
  if (!provider.apiKey) {
    notificationStore.warning('请先配置API密钥')
    return
  }

  // 创建中止控制器
  const abortController = new AbortController()
  const key = `${providerId}:${modelId}`
  activeTestControllers.set(key, abortController)

  // 1. 手动清空之前的状态
  const model = provider.models.find(m => m.id === modelId)
  if (model) {
    model.testStatus = 'untested'
    model.capabilities = undefined
    model.lastTested = undefined
  }
  
  // 2. 设置测试中状态
  settingsStore.updateModelTestStatus(providerId, modelId, 'testing')
  
  try {
    const { CapabilityDetector } = await import('@/services/capabilityDetector')
    const detector = CapabilityDetector.getInstance()
    
    // 使用优化的检测方法：快速连接 + 异步思考
    await detector.detectCapabilitiesWithCallback(
      provider, 
      modelId,
      // 连接结果回调（快速响应，立即显示✅）
      (connected: boolean, responseTime: number, error?: string) => {
        // 检查是否已被中止
        if (abortController.signal.aborted) {
          return
        }
        
        if (connected) {
          // 立即更新连接状态和测试状态
          settingsStore.updateModelConnectionStatus(providerId, modelId, true)
          settingsStore.updateModelTestStatus(providerId, modelId, 'success')
          notificationStore.success(`模型 ${modelId} 连接成功！(${responseTime}ms) 正在后台检测思考能力...`)
        } else {
          settingsStore.updateModelConnectionStatus(providerId, modelId, false, error)
          settingsStore.updateModelTestStatus(providerId, modelId, 'failed')
          notificationStore.error(`模型 ${modelId} 连接失败：${error || '未知错误'}`)
        }
        // 保存设置（连接状态）
        settingsStore.saveSettings()
      },
      // 思考能力结果回调（异步更新，可能会额外显示🧠）
      (capabilities) => {
        // 检查是否已被中止
        if (abortController.signal.aborted) {
          return
        }
        
        settingsStore.updateModelCapabilities(providerId, modelId, capabilities)
        
        if (capabilities.reasoning) {
          const thinkingType = settingsStore.getReasoningTypeDescription(capabilities.reasoningType)
          notificationStore.success(`🧠 模型 ${modelId} 思考能力检测完成：支持${thinkingType}`)
        }
        
        // 保存设置（最终结果）
        settingsStore.saveSettings()
        
        // 清理控制器
        activeTestControllers.delete(key)
      },
      true, // 强制刷新缓存，因为用户主动点击测试
      abortController // 传递中止控制器
    )
    
  } catch (error) {
    // 如果是中止错误，不显示错误消息
    if (error instanceof Error && error.name === 'AbortError') {
      return
    }
    
    settingsStore.updateModelTestStatus(providerId, modelId, 'failed')
    notificationStore.error(`模型 ${modelId} 测试出错：${(error as Error).message}`)
    settingsStore.saveSettings()
  } finally {
    // 确保清理控制器
    activeTestControllers.delete(key)
  }
}

// 获取测试按钮提示文本
const getTestButtonTitle = (model: any) => {
  switch (model.testStatus) {
    case 'testing':
      return '点击停止测试'
    case 'success':
      return '重新测试'
    case 'failed':
      return '重新测试'
    default:
      return '测试模型连接和能力'
  }
}

// 获取批量测试按钮提示文本
const getBatchTestButtonTitle = (provider: any) => {
  const state = batchTestingStates.value[provider.id]
  if (state?.isTesting && !state.isAborted) {
    return `批量测试中... (${state.currentModelIndex}/${state.totalModels}) 点击中断`
  } else if (state?.isTesting && state.isAborted) {
    return '正在中断测试...'
  } else if (provider.models.length === 0) {
    return '没有可测试的模型'
  }
  return '批量测试模型'
}

// 批量测试模型
const batchTestModels = async (provider: any) => {
  const providerId = provider.id
  const state = batchTestingStates.value[providerId]
  
  // 如果正在测试，则中断测试
  if (state?.isTesting) {
    abortBatchTest(providerId)
    return
  }
  
  if (!provider.apiKey) {
    notificationStore.warning('请先配置API密钥')
    return
  }

  const enabledModels = provider.models.filter((m: any) => m.enabled)
  if (enabledModels.length === 0) {
    notificationStore.warning('请先启用至少一个模型')
    return
  }

  // 初始化批量测试状态
  batchTestingStates.value[providerId] = {
    isTesting: true,
    currentModelIndex: 0,
    totalModels: enabledModels.length,
    isAborted: false
  }
  
  // 创建中断控制器
  batchAbortControllers.value[providerId] = new AbortController()
  
  testingProvider.value = providerId
  
  let successCount = 0
  let failCount = 0
  
  try {
    notificationStore.success(`开始批量测试 ${enabledModels.length} 个模型...`)
    
    for (let i = 0; i < enabledModels.length; i++) {
      const currentState = batchTestingStates.value[providerId]
      if (currentState?.isAborted) {
        notificationStore.warning('批量测试已中断')
        break
      }
      
      const model = enabledModels[i]
      
      // 更新当前测试进度
      batchTestingStates.value[providerId].currentModelIndex = i + 1
      
      try {
        // 检查是否被中断
        if (batchAbortControllers.value[providerId]?.signal.aborted) {
          break
        }
        
        // 手动清空之前的状态
        model.testStatus = 'untested'
        model.capabilities = undefined
        model.lastTested = undefined
        
        // 设置测试中状态
        settingsStore.updateModelTestStatus(providerId, model.id, 'testing')
        
        const { CapabilityDetector } = await import('@/services/capabilityDetector')
        const detector = CapabilityDetector.getInstance()
        
        // 使用优化的检测方法：快速连接 + 异步思考
        await detector.detectCapabilitiesWithCallback(
          provider, 
          model.id,
          // 连接结果回调
          (connected: boolean, _responseTime: number, error?: string) => {
            if (connected) {
              settingsStore.updateModelConnectionStatus(providerId, model.id, true)
              settingsStore.updateModelTestStatus(providerId, model.id, 'success')
              successCount++
            } else {
              settingsStore.updateModelConnectionStatus(providerId, model.id, false, error)
              settingsStore.updateModelTestStatus(providerId, model.id, 'failed')
              failCount++
            }
            settingsStore.saveSettings()
          },
          // 思考能力结果回调
          (capabilities) => {
            settingsStore.updateModelCapabilities(providerId, model.id, capabilities)
            settingsStore.saveSettings()
          },
          true, // 强制刷新缓存
          batchAbortControllers.value[providerId] // 传递中断控制器
        )
        
        // 检查是否被中断
        if (batchAbortControllers.value[providerId]?.signal.aborted) {
          break
        }
        
      } catch (error) {
        settingsStore.updateModelTestStatus(providerId, model.id, 'failed')
        failCount++
        settingsStore.saveSettings()
      }
    }
    
    const currentState = batchTestingStates.value[providerId]
    if (!currentState?.isAborted) {
      notificationStore.success(`批量测试完成！成功: ${successCount}, 失败: ${failCount}`)
    }
    
  } catch (error) {
    notificationStore.error(`批量测试出错：${(error as Error).message}`)
  } finally {
    // 重置所有模型的测试状态（防止卡在testing状态）
    const provider = settingsStore.providers.find(p => p.id === providerId)
    if (provider) {
      provider.models.forEach(model => {
        if (model.testStatus === 'testing') {
          // 如果有连接结果，使用连接结果；否则标记为未测试
          if (model.capabilities?.testResult?.connected !== undefined) {
            model.testStatus = model.capabilities.testResult.connected ? 'success' : 'failed'
          } else {
            model.testStatus = 'untested'
          }
        }
      })
      settingsStore.saveSettings()
    }
    
    // 清理状态
    delete batchTestingStates.value[providerId]
    delete batchAbortControllers.value[providerId]
    if (testingProvider.value === providerId) {
      testingProvider.value = null
    }
  }
}

// 中断批量测试
const abortBatchTest = (providerId: string) => {
  const state = batchTestingStates.value[providerId]
  if (state?.isTesting) {
    // 标记为中断状态
    state.isAborted = true
    
    // 触发中断信号
    batchAbortControllers.value[providerId]?.abort()
    
    notificationStore.warning('正在中断批量测试...')
    
    // 2秒后自动清理状态，让"已停止测试"消息短暂显示
    setTimeout(() => {
      // 重置所有模型的测试状态（防止卡在testing状态）
      const provider = settingsStore.providers.find(p => p.id === providerId)
      if (provider) {
        provider.models.forEach(model => {
          if (model.testStatus === 'testing') {
            // 如果有连接结果，使用连接结果；否则标记为未测试
            if (model.capabilities?.testResult?.connected !== undefined) {
              model.testStatus = model.capabilities.testResult.connected ? 'success' : 'failed'
            } else {
              model.testStatus = 'untested'
            }
          }
        })
        settingsStore.saveSettings()
      }
      
      delete batchTestingStates.value[providerId]
      delete batchAbortControllers.value[providerId]
      if (testingProvider.value === providerId) {
        testingProvider.value = null
      }
    }, 2000)
  }
}


// 保存提供商（添加或编辑）
const saveProvider = () => {
  try {
    if (editingProvider.value) {
      // 编辑模式
      const provider = settingsStore.providers.find(p => p.id === editingProvider.value.id)
      if (provider) {
        provider.name = newProvider.value.name
        provider.apiKey = newProvider.value.apiKey
        if (provider.allowCustomUrl || provider.type === 'custom') {
          provider.baseUrl = newProvider.value.baseUrl
        }
      }
      editingProvider.value = null
    } else {
      // 添加模式
      settingsStore.addProvider(selectedProviderType.value, {
        name: newProvider.value.name,
        baseUrl: newProvider.value.baseUrl,
        apiKey: newProvider.value.apiKey
      })
    }
    
    newProvider.value = { name: '', baseUrl: '', apiKey: '' }
    showAddProvider.value = false
    settingsStore.saveSettings()
    notificationStore.success(editingProvider.value ? '提供商已更新' : '提供商已添加')
  } catch (error) {
    notificationStore.error(`保存失败: ${error}`)
  }
}

// 添加/编辑模型
const addCustomModel = () => {
  const provider = settingsStore.providers.find(p => p.id === addingModelToProvider.value)
  if (!provider) return
  
  // 对于官方提供商，使用固定的API类型，对于自定义提供商，使用选择的类型
  let apiType = newModel.value.apiType
  if (provider.type !== 'custom') {
    apiType = provider.type
  }
  
  if (editingModel.value) {
    // 编辑模式
    if (provider) {
      const modelIndex = provider.models.findIndex(m => m.id === editingModel.value.id)
      if (modelIndex > -1) {
        provider.models[modelIndex] = {
          ...provider.models[modelIndex],
          name: newModel.value.name,
          id: newModel.value.id,
          apiType: apiType as 'openai' | 'anthropic' | 'google'
        }
      }
    }
    editingModel.value = null
  } else {
    // 添加模式
    settingsStore.addModel(addingModelToProvider.value, {
      id: newModel.value.id,
      name: newModel.value.name,
      enabled: true,
      apiType: apiType as 'openai' | 'anthropic' | 'google'
    })
  }
  
  newModel.value = { name: '', id: '', apiType: '' }
  showAddModelDialog.value = false
  addingModelToProvider.value = ''
  settingsStore.saveSettings()
}

// 关闭添加模型弹窗
const closeAddModelDialog = () => {
  showAddModelDialog.value = false
  modelSearchKeyword.value = '' // 清空搜索关键词
  addingModelToProvider.value = ''
  modelFetchError.value = ''
  editingModel.value = null
}

// 显示添加模型弹窗
const showAddModel = (providerId: string) => {
  editingModel.value = null
  addingModelToProvider.value = providerId
  
  // 重置状态（但保留缓存的模型列表）
  loadingModels.value = false
  modelFetchError.value = ''
  modelSearchKeyword.value = '' // 清空搜索关键词
  
  // 为提供商预设API类型
  const provider = getProviderForModel(providerId)
  let defaultApiType = ''
  
  if (provider?.type === 'custom') {
    // 自定义提供商默认使用OpenAI兼容
    defaultApiType = 'openai'
  } else if (provider?.type && provider.type in ['openai', 'anthropic', 'google']) {
    // 官方提供商使用对应的类型
    defaultApiType = provider.type
  }
  
  newModel.value = { name: '', id: '', apiType: defaultApiType as 'openai' | 'anthropic' | 'google' | '' }
  showAddModelDialog.value = true
}

// 获取可用模型列表
const fetchAvailableModels = async () => {
  try {
    loadingModels.value = true
    modelFetchError.value = ''
    
    const providerId = addingModelToProvider.value
    
    // 获取当前提供商信息
    const provider = getProviderForModel(providerId)
    if (!provider) {
      throw new Error('未找到提供商信息')
    }
    
    // 检查是否有必要的信息
    if (!provider.apiKey || !provider.baseUrl) {
      throw new Error('请先配置提供商的API密钥和基础URL')
    }
    
    // 获取模型列表，优先使用用户选择的API类型
    const preferredApiType = newModel.value.apiType as 'openai' | 'anthropic' | 'google' | undefined
    const models = await aiService.getAvailableModels(provider, preferredApiType)
    
    // 将模型列表缓存到对应的提供商
    providerModelsCache.value[providerId] = models
    
    if (models.length === 0) {
      modelFetchError.value = '未找到可用模型'
    }
  } catch (error: any) {
    modelFetchError.value = error.message || '获取模型列表失败，请手动输入模型ID'
  } finally {
    loadingModels.value = false
  }
}

// 选择模型
const selectModel = (modelId: string) => {
  newModel.value.id = modelId
  // 如果模型名称为空，使用模型ID作为默认名称
  if (!newModel.value.name) {
    newModel.value.name = modelId
  }
}

// 重置系统提示词规则
const resetSystemPromptRules = () => {
  if (confirm('确定要重置系统提示词规则为默认值吗？')) {
    settingsStore.resetSystemPromptRules()
  }
}

// 重置用户引导规则
const resetUserPromptRules = () => {
  if (confirm('确定要重置用户引导规则为默认值吗？')) {
    settingsStore.resetUserPromptRules()
  }
}

// 重置需求报告规则
const resetRequirementReportRules = () => {
  if (confirm('确定要重置需求报告规则为默认值吗？')) {
    settingsStore.resetRequirementReportRules()
  }
}

// 重置独立的最终提示词生成规则
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
  // 切换精简版开关时，重新加载提示词规则
  settingsStore.loadPromptRules()
  // 保存设置
  settingsStore.saveSettings()
}

const saveAndClose = () => {
  // 保存提示词规则（如果有修改的话）
  if (settingsStore.editingSystemRules || settingsStore.editingUserRules || settingsStore.editingRequirementReportRules || settingsStore.editingFinalPromptRules) {
    settingsStore.savePromptRules()
  }
  // 保存其他设置
  settingsStore.saveSettings()
  settingsStore.showSettings = false
}
</script>