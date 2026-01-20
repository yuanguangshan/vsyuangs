# Changelog

## [1.0.1] - 2026-01-21

### ✨ 核心功能增强 (Core Enhancements)
- **上下文感知 (Context Awareness)**: 
  - 实现了基于 VS Code API 的 `read_file` 和 `list_files` 执行器。
  - 优化了对话启动逻辑：未选中代码时自动注入工作区文件列表，让 Agent 能“看见”整个项目。
  - 完善了 `ToolExecutor` 对 VS Code 环境的深度适配。

### 🎨 界面与体验 (UI & UX)
- **Premium UI 重构**: 
  - 引入玻璃拟态 (Glassmorphism) 视觉系统。
  - 支持完整的 Markdown 渲染（包含代码块、列表等）。
  - 新增动态渐变装饰线与平滑的消息淡入动画。
  - 增加了“正在输入”动画指示器 (Typing Indicator)。
  - 优化了输入框，支持多行自适应伸缩。
- **操作栏增强**: 
  - 在侧边栏顶部增加了“清除聊天”与“应用建议”按钮。
  - 修复了按钮图标不可见的问题。

### 🛠 稳定性与治理 (Stability & Governance)
- **路径解析修复**: 解决了插件环境下 `process.cwd()` 导致的 `policy.yaml` 和 WASM 加载失败问题。
- **Git 初始化**: 为项目配置了标准的 `.gitignore` 规则，并完成了向 GitHub 仓库的初始清理提交。

### 📝 文档 (Documentation)
- 重写并完善了 `README.md`，提供了更清晰的安装、开发与治理策略说明。
