# YPrompt 项目指南

## 项目概述
YPrompt 是一个基于AI对话引导挖掘用户需求的专业提示词生成系统，基于《Architecting Intelligence》理论生成高质量的AI提示词。

## 技术栈
- Vue 3 + TypeScript
- Vite
- Tailwind CSS
- Pinia (状态管理)
- Lucide Vue Next (图标)
- Marked (Markdown渲染)

## 项目结构
```
src/
├── components/          # Vue组件层
│   ├── ChatInterface.vue       # 对话界面
│   ├── PreviewPanel.vue        # 预览面板
│   ├── PromptGenerator.vue     # 提示词生成器
│   ├── SettingsModal.vue       # 设置弹窗
│   └── NotificationContainer.vue
├── stores/              # Pinia状态管理
│   ├── promptStore.ts           # 提示词生成状态
│   ├── settingsStore.ts        # AI配置和应用设置
│   └── notificationStore.ts
├── services/            # 业务服务层
│   ├── aiService.ts             # AI服务核心(多模态、流式)
│   ├── aiGuideService.ts        # AI引导式需求收集
│   ├── promptGeneratorService.ts # GPrompt四步生成
│   └── capabilityDetector.ts   # 模型能力检测
├── config/              # 配置文件
│   ├── prompts.ts              # 提示词配置管理
│   └── prompts/                # 内置提示词规则
│       ├── systemPromptRules.ts
│       ├── thinkingPointsExtraction.ts
│       ├── optimizationAdvice.ts
│       └── userGuidedRules.ts
├── utils/               # 工具函数
│   ├── aiResponseUtils.ts
│   └── fileUtils.ts
└── views/
    └── HomeView.vue
```

## 开发命令
```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本(类型检查 + 构建)
npm run type-check   # 仅类型检查
npm run lint         # ESLint检查并自动修复
npm run format       # Prettier格式化
```

## 核心工作流程

### 1. AI引导式需求收集 (6步)
1. 任务定义 - 明确AI助手的核心任务
2. 使用场景 - 了解使用环境和目标用户
3. 输出格式 - 定义回答的结构和风格
4. 质量要求 - 确定成功标准
5. 工作方式 - 设定思考方式和互动风格
6. 最终确认 - 确认信息完整性

### 2. GPrompt四步生成
1. 关键指令提取 - 从需求中提取核心要点
2. 初始提示词生成 - 基于规则生成初始版本
3. 优化建议生成 - AI分析并提供改进建议
4. 最终提示词优化 - 应用建议生成最终版本

## 关键技术实现

### AI服务 (aiService.ts)
- 统一的AI提供商接口 (OpenAI/Anthropic/Google/自定义)
- 多模态支持 (文本/图片/文档/音频/视频)
- 流式和非流式API调用
- `<think></think>` 标签过滤
- 智能错误处理

### 状态管理 (stores/)
- **promptStore**: 对话消息、生成步骤、提示词数据
- **settingsStore**: AI提供商配置、API密钥、模型选择
- **notificationStore**: 用户通知管理

### 多模态能力检测 (capabilityDetector.ts)
- OpenAI: 主要支持图片
- Anthropic: 主要支持图片
- Google Gemini: 支持图片/文档/音频/视频等全面多模态

## 开发注意事项

### 新增AI提供商
1. 在 `settingsStore.ts` 添加提供商配置
2. 在 `aiService.ts` 实现API调用逻辑
3. 在 `capabilityDetector.ts` 添加能力检测

### 自定义提示词规则
修改 `config/prompts/` 目录下的相关文件

### 组件开发规范
- 遵循现有组件结构和命名
- 使用 TypeScript 类型安全
- 响应式设计考虑移动端

### 代码风格
- 提交前运行 `npm run lint` 和 `npm run type-check`
- 使用 Prettier 格式化代码

## 构建与部署
- **本地开发**: `npm run dev`
- **生产构建**: `npm run build` (输出到 `dist/`)
- **Vercel部署**: 配置构建命令为 `npm run build`，输出目录为 `dist`

## 重要文件说明
- `builtin-providers.example.json`: 内置提供商配置示例
- `docs/项目理解文档.md`: 详细的项目架构文档
- `vite.config.ts`: Vite构建配置
- `tailwind.config.js`: Tailwind CSS配置
