# YPrompt 项目文档

## 项目概述

YPrompt 是一个基于 AI 对话引导挖掘用户需求的专业提示词生成系统，基于《Architecting Intelligence: A Definitive Guide to the Art and Science of Elite Prompt Engineering》理论生成高质量的 AI 提示词。

## 技术栈

- **前端框架**: Vue 3.4 + TypeScript 5.3
- **构建工具**: Vite 5.0
- **UI 框架**: Tailwind CSS 3.3
- **状态管理**: Pinia 2.1
- **图标库**: Lucide Vue Next
- **Markdown**: Marked 16.3

## 项目结构

```
src/
├── components/          # Vue 组件层（模块化架构）
│   ├── ChatInterface.vue         # 对话界面主容器
│   ├── PreviewPanel.vue          # 预览面板主容器
│   ├── SettingsModal.vue         # 设置弹窗主容器
│   ├── chat/                     # 对话模块
│   │   ├── composables/          # 业务逻辑组合式函数
│   │   └── components/           # UI 子组件
│   ├── preview/                  # 预览模块
│   │   ├── composables/          # 业务逻辑组合式函数
│   │   └── components/           # UI 子组件
│   └── settings/                 # 设置模块
│       ├── composables/          # 业务逻辑组合式函数
│       └── components/           # UI 子组件
├── stores/              # Pinia 状态管理
│   ├── promptStore.ts           # 提示词生成状态
│   ├── settingsStore.ts         # AI 配置和应用设置
│   └── notificationStore.ts     # 通知状态
├── services/            # 业务服务层（模块化架构）
│   ├── aiService.ts             # AI 服务统一入口
│   ├── aiGuideService.ts        # AI 引导式需求收集
│   ├── promptGeneratorService.ts # GPrompt 四步生成
│   ├── capabilityDetector.ts    # 模型能力检测
│   └── ai/                      # AI 服务模块化实现
│       ├── providers/           # 提供商实现 (OpenAI/Anthropic/Google)
│       ├── streaming/           # 流式处理
│       ├── multimodal/          # 多模态转换
│       ├── errors/              # 错误处理
│       └── utils/               # 工具函数
├── config/              # 配置文件
│   ├── prompts.ts              # 提示词配置管理
│   └── prompts/                # 内置提示词规则
├── utils/               # 通用工具函数
└── views/               # 页面视图
```

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 类型检查
npm run type-check

# 代码格式化
npm run lint
npm run format
```

## 核心功能模块

### 1. AI 引导式需求收集
- 通过智能对话深入挖掘用户真实需求
- 自动分析对话历史提取关键信息
- 生成结构化需求描述报告

### 2. GPrompt 四步生成流程
1. **关键指令提取** - 分析需求提取核心思考点
2. **初始提示词生成** - 基于关键指令生成初版提示词
3. **优化建议** - 分析提示词提供改进方向
4. **最终提示词** - 应用优化建议生成最终版本

### 3. 多 AI 模型支持
- **OpenAI**: GPT-3.5/GPT-4 系列
- **Anthropic**: Claude 系列
- **Google**: Gemini 系列
- **自定义提供商**: 支持自定义 API 端点

### 4. 执行模式
- **自动模式**: 一键完成四步流程
- **手动模式**: 逐步执行每个阶段

### 5. 附件支持
- 图片文件 (jpg, jpeg, png, gif, webp)
- 文档文件 (pdf, doc, docx, txt, md)
- 音频文件 (mp3, wav, ogg)
- 视频文件 (mp4, avi, mov)

## 开发规范

### 代码组织原则
1. **关注点分离**: 逻辑 (composables) 与视图 (components) 分离
2. **单一职责**: 每个 composable 只负责一个功能领域
3. **可复用性**: 通用逻辑抽取为独立模块
4. **类型安全**: 充分利用 TypeScript 类型系统

### 组件结构规范
```
模块/
├── composables/        # 业务逻辑
│   ├── useFeatureA.ts
│   └── useFeatureB.ts
└── components/         # UI 组件
    ├── ComponentA.vue
    └── ComponentB.vue
```

### 命名规范
- **组件**: PascalCase (ChatInterface.vue)
- **Composables**: use + PascalCase (useChatMessages.ts)
- **Store**: camelCase + Store (promptStore.ts)
- **Service**: camelCase + Service (aiService.ts)

## 常见开发任务

### 添加新的 AI 提供商
1. 在 `src/services/ai/providers/` 创建新的 Provider 类
2. 继承 `BaseProvider` 并实现必要方法
3. 在 `src/services/ai/providers/index.ts` 导出
4. 在 `aiService.ts` 中注册提供商

### 修改提示词生成逻辑
1. 修改 `src/config/prompts/` 下的规则文件
2. 或在设置界面的"提示词规则"标签页直接编辑

### 添加新的 Tab 到预览面板
1. 在 `src/components/preview/components/tabs/` 创建新 Tab 组件
2. 在 `PreviewPanel.vue` 中添加 Tab 按钮和内容区域
3. 在 `usePreviewTabs.ts` 中添加 Tab 逻辑
4. 在 `promptStore.ts` 的 `PromptData` 接口添加对应字段

### 调试流式输出
- 流式输出核心逻辑在 `src/services/ai/streaming/`
- SSE 解析: `SSEParser.ts`
- 流处理: `StreamProcessor.ts`
- 响应过滤: `StreamFilter.ts`

## 环境配置

### 内置提供商配置
复制 `builtin-providers.example.json` 为 `builtin-providers.json` 并修改配置：

```json
{
  "providers": [
    {
      "id": "openai-builtin",
      "name": "OpenAI (内置)",
      "type": "openai",
      "apiKey": "YOUR_API_KEY",
      "baseURL": "https://api.openai.com/v1"
    }
  ]
}
```

