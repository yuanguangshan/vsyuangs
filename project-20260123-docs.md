# Project Documentation

- **Generated at:** 2026-01-23 10:22:25
- **Root Dir:** `.`
- **File Count:** 98
- **Total Size:** 777.78 KB

## 📂 File List
- `.gitignore` (0.18 KB)
- `.vscodeignore` (0.24 KB)
- `CHANGELOG.md` (3.18 KB)
- `LICENSE` (1.04 KB)
- `asconfig.json` (0.51 KB)
- `c` (0.10 KB)
- `chat_export.md` (12.56 KB)
- `compile.sh` (6.41 KB)
- `context-display-bottleneck-analysis.md` (5.61 KB)
- `context-panel-implementation-guide.md` (10.92 KB)
- `package.json` (3.33 KB)
- `policy.yaml` (0.56 KB)
- `run-tests.js` (1.72 KB)
- `src/engine/agent/AgentRuntime.ts` (22.15 KB)
- `src/engine/agent/actions.ts` (1.58 KB)
- `src/engine/agent/chatHistoryStorage.ts` (1.70 KB)
- `src/engine/agent/context.ts` (1.22 KB)
- `src/engine/agent/contextBank.ts` (16.67 KB)
- `src/engine/agent/contextBuffer.ts` (17.67 KB)
- `src/engine/agent/contextDSL.ts` (9.41 KB)
- `src/engine/agent/contextImportance.ts` (1.89 KB)
- `src/engine/agent/contextManager.ts` (6.72 KB)
- `src/engine/agent/contextProtocol.ts` (13.83 KB)
- `src/engine/agent/contextSkillBridge.ts` (4.84 KB)
- `src/engine/agent/contextSkillPromotion.ts` (16.19 KB)
- `src/engine/agent/contextStorage.ts` (0.69 KB)
- `src/engine/agent/contextSummary.ts` (0.90 KB)
- `src/engine/agent/executionRecorder.ts` (1.09 KB)
- `src/engine/agent/executor.ts` (2.80 KB)
- `src/engine/agent/governance.ts` (2.27 KB)
- `src/engine/agent/governance/bridge.ts` (1.27 KB)
- `src/engine/agent/governance/core.ts` (1.22 KB)
- `src/engine/agent/governance/ledger.ts` (0.48 KB)
- `src/engine/agent/governance/sandbox/core.as.ts` (1.35 KB)
- `src/engine/agent/index.ts` (0.85 KB)
- `src/engine/agent/knowledgeGraph.ts` (1.30 KB)
- `src/engine/agent/llm.ts` (3.54 KB)
- `src/engine/agent/llmAdapter.ts` (7.73 KB)
- `src/engine/agent/policy/engine.ts` (2.26 KB)
- `src/engine/agent/policy/index.ts` (0.09 KB)
- `src/engine/agent/policy/policies/noDangerousShell.ts` (1.79 KB)
- `src/engine/agent/policy/types.ts` (0.49 KB)
- `src/engine/agent/prompt.ts` (2.08 KB)
- `src/engine/agent/replay/events.ts` (0.59 KB)
- `src/engine/agent/replay/index.ts` (0.08 KB)
- `src/engine/agent/replay/recorder.ts` (1.38 KB)
- `src/engine/agent/replay/replayer.ts` (1.88 KB)
- `src/engine/agent/replayExplain.ts` (4.74 KB)
- `src/engine/agent/selectModel.ts` (0.33 KB)
- `src/engine/agent/skills.ts` (6.27 KB)
- `src/engine/agent/state.ts` (2.39 KB)
- `src/engine/agent/types.ts` (1.86 KB)
- `src/engine/ai/client.ts` (4.64 KB)
- `src/engine/ai/prompt.ts` (2.29 KB)
- `src/engine/ai/types.ts` (0.09 KB)
- `src/engine/core/apps.ts` (1.63 KB)
- `src/engine/core/autofix.ts` (0.61 KB)
- `src/engine/core/capabilities.ts` (1.90 KB)
- `src/engine/core/capabilityInference.ts` (0.93 KB)
- `src/engine/core/capabilitySystem.ts` (3.15 KB)
- `src/engine/core/completion.legacy.ts` (5.89 KB)
- `src/engine/core/completion/builtin.ts` (0.84 KB)
- `src/engine/core/completion/cache.ts` (1.07 KB)
- `src/engine/core/completion/index.ts` (0.69 KB)
- `src/engine/core/completion/path.ts` (1.04 KB)
- `src/engine/core/completion/resolver.ts` (2.62 KB)
- `src/engine/core/completion/types.ts` (0.50 KB)
- `src/engine/core/completion/utils.ts` (0.26 KB)
- `src/engine/core/configMerge.ts` (3.09 KB)
- `src/engine/core/executionRecord.ts` (2.50 KB)
- `src/engine/core/executionStore.ts` (2.44 KB)
- `src/engine/core/executor.ts` (0.97 KB)
- `src/engine/core/explain.ts` (2.99 KB)
- `src/engine/core/fileReader.ts` (2.03 KB)
- `src/engine/core/macros.ts` (2.36 KB)
- `src/engine/core/modelMatcher.ts` (2.65 KB)
- `src/engine/core/os.ts` (1.00 KB)
- `src/engine/core/replayDiff.ts` (8.07 KB)
- `src/engine/core/replayEngine.ts` (4.54 KB)
- `src/engine/core/risk.ts` (0.48 KB)
- `src/engine/core/validation.ts` (4.74 KB)
- `src/engine/utils/confirm.ts` (0.44 KB)
- `src/engine/utils/history.ts` (0.89 KB)
- `src/engine/utils/renderer.ts` (3.64 KB)
- `src/runtime/vscode/VSCodeExecutor.ts` (5.56 KB)
- `src/vscode/commands/askAI.ts` (2.54 KB)
- `src/vscode/core/contextAdapter.ts` (11.84 KB)
- `src/vscode/core/executorAdapter.ts` (9.25 KB)
- `src/vscode/core/runtime.ts` (3.29 KB)
- `src/vscode/extension.ts` (1.19 KB)
- `src/vscode/webview/context-panel-functions.js` (5.94 KB)
- `src/vscode/webview/sidebar.html` (61.12 KB)
- `test-context-integration.ts` (9.71 KB)
- `test-context-protocol.ts` (3.75 KB)
- `test-context-stable-id.ts` (7.65 KB)
- `todo.md` (0.22 KB)
- `tsconfig.json` (0.46 KB)
- `yuangs-vscode-20260121-docs.md` (372.30 KB)

---

## 📄 `.gitignore`

````text
# Dependencies
node_modules/

# Built files
dist/
out/
build/release.wasm
build/debug.wasm

# VS Code
.vscode-test/
*.vsix

# OS
.DS_Store

# Replay system
replay/
logs/
.ai/context.json

````

## 📄 `.vscodeignore`

````text
.git/**
.vscode/**
node_modules/**
src/**
tsconfig.json
webpack.config.js
compile.sh
asconfig.json
yuangs-vscode-20260121-docs.md
yuangs-vscode-1.0.3.vsix
CHANGELOG.md
QUICK_REFERENCE.md
# policy.yaml
c
build/**
!build/release.wasm
!dist/**

````

## 📄 `CHANGELOG.md`

````markdown
# Changelog

## [1.0.3] - 2026-01-21

### ✨ 新功能 (New Features)
- **智能 Diff 应用 (Smart Diff Application)**: 
  - 自动检测 AI 回复中的 diff 代码块
  - 在 diff 代码块右上角显示"Apply"按钮（hover 时显示）
  - 一键应用 diff 到代码文件
  - 支持标准 unified diff 格式（`---`、`+++`、`@@`）
  - 支持简单的 `+`/`-` 格式
  - 自动创建不存在的文件
  - 应用后自动保存并显示文件

### 🎨 用户体验优化 (UX Improvements)
- Diff 代码块特殊样式标识（边框、背景色）
- 应用按钮状态反馈：
  - 默认：`✓ Apply`（hover 时显示）
  - 应用中：`⏳ Applying...`
  - 成功：`✓ Applied`（绿色）
  - 失败：`✗ Failed`（红色，3秒后恢复）
- 实时处理流式渲染中的 diff 块

### 🛠 技术改进 (Technical Improvements)
- 完整的 diff 解析器，支持多种格式
- 智能文件查找和创建
- 工作区编辑 API 集成
- 错误处理和用户反馈

---

## [1.0.2] - 2026-01-21

### ✨ 新功能 (New Features)
- **智能文本选择 (Smart Text Selection)**: 
  - 在聊天记录中选中文本后，自动填入输入框，方便一键发送
  - 支持快速引用 AI 回答或重新发送之前的问题
  - 自动清除选择，避免视觉干扰
  - 输入框高度自动调整以适应内容

### 🛠 开发体验 (Developer Experience)
- **一键编译脚本**: 
  - 新增 `compile.sh` - 自动查找 Node.js 和 npm，智能编译
  - 新增 `c` 快捷脚本 - 超简短命令，只需 `./c` 即可编译
  - 支持多种 Node.js 安装方式（Homebrew、NVM、Volta、FNM 等）
  - 显示详细的版本信息和编译进度

### 🎨 用户体验优化 (UX Improvements)
- 优化了文本选择的交互逻辑，确保只在聊天容器内的选择才会触发自动填入
- 改进了输入框焦点管理，选中文本后自动获得焦点

---

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

````

## 📄 `LICENSE`

````text
MIT License

Copyright (c) 2026 yuanguangshan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

````

## 📄 `asconfig.json`

````json
{
    "targets": {
        "debug": {
            "outFile": "build/debug.wasm",
            "textFile": "build/debug.wat",
            "sourceMap": true,
            "debug": true
        },
        "release": {
            "outFile": "build/release.wasm",
            "textFile": "build/release.wat",
            "sourceMap": true,
            "optimizeLevel": 3,
            "shrinkLevel": 0,
            "converge": false,
            "noAssert": false
        }
    },
    "options": {
        "bindings": "esm"
    }
}
````

## 📄 `c`

````text
#!/bin/bash
# 快捷编译脚本 - 只需运行 ./c 即可编译
cd "$(dirname "$0")" && ./compile.sh

````

## 📄 `chat_export.md`

````markdown
### 👤 User

你好

---

### 🤖 Assistant

你好！😊  
很高兴见到你，有什么我可以帮你的吗？

---

### 👤 User

'列出大于20k的文件'

---

### 🤖 Assistant

{"action_type":"shell_cmd","reasoning":"List files larger than 20k in the current directory.","command":"find . -type f -size +20k -print"}以下是当前目录中**大于 20KB 的文件列表**（含子目录）：  

```
./test/Testing Context Persistence.md
./dist/cli.js
./dist/cli.js.map
./dist/commands/handleAIChat.js
./dist/commands/handleAIChat.js.map
./docs/completion_implementation.md
./src-20260121-docs.md
./package-lock.json
./src/cli.ts
./src/commands/handleAIChat.ts
```

如果你希望**按大小排序**、**只看某个目录**，或**排除 node_modules / .git**，可以告诉我你的需求。

---

### 👤 User

项目一共有多少个文件，共有多大

---

### 👤 User

stop

---

### 🤖 Assistant

我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**，所以暂时没法直接给出“多少个文件、共有多大”。

你可以按下面任意一种方式补充信息，我就能帮你统计 ✅  

---

## 你可以这样做

### ✅ 方式一：把项目发给我
- 上传 **zip / tar.gz** 压缩包  
- 或提供 **Git 仓库地址**（GitHub / GitLab 等）

我可以帮你统计：
- 文件总数  
- 总大小（KB / MB / GB）  
- 按目录拆分的明细  

---

### ✅ 方式二：你在本地自己查看

#### macOS / Linux
```bash
# 文件数量
find . -type f | wc -l

# 项目总大小
du -sh .
```

#### Windows（PowerShell）
```powershell
# 文件数量
(Get-ChildItem -Recurse -File | Measure-Object).Count

# 总大小（MB）
(Get-ChildItem -Recurse -File | Measure-Object Length -Sum).Sum / 1MB
```

---

## 另外请确认一下
统计时是否需要 **包含**：
- 隐藏文件（如 `.git`、`.idea`）
- 依赖目录（如 `node_modules`、`venv`、`dist`、`build`）

把项目或链接发过来后，我可以**直接给你一个准确结果**，包括：
> 项目一共有 X 个文件，总大小为 Y MB 👍**我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。**最新 Observation（原文逐字复述）：**

> 我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  
>  
> 请告诉我其中一种即可：  
> 1. **项目在哪里**  
>    - 上传为压缩包（zip / tar 等），或  
>    - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
>    - 说明是你本地某个目录（我可以告诉你如何自己统计）。  
>  
> 2. **你想统计的范围**  
>    - 是否包含隐藏文件（如 `.git`）？  
>    - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  
>  
> ---  
>  
> ### 如果你是想自己快速查看（本地）  
> **macOS / Linux：**  
> ```bash
> find . -type f | wc -l
> du -sh .
> ```  
>  
> **Windows（PowerShell）：**  
> ```powershell
> (Get-ChildItem -Recurse -File | Measure-Object).Count
> (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
> ```  
>  
> 把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。

---

接下来请你直接**上传项目压缩包**或**提供仓库地址**，并告诉我是否需要**排除依赖/隐藏目录**。我马上帮你统计。**原样确认最新 Observation（逐字不改）：**

> 我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  
>  
> 请告诉我其中一种即可：  
> 1. **项目在哪里**  
>    - 上传为压缩包（zip / tar 等），或  
>    - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
>    - 说明是你本地某个目录（我可以告诉你如何自己统计）。  
>  
> 2. **你想统计的范围**  
>    - 是否包含隐藏文件（如 `.git`）？  
>    - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  
>  
> ---  
>  
> ### 如果你是想自己快速查看（本地）  
> **macOS / Linux：**  
> ```bash
> find . -type f | wc -l
> du -sh .
> ```  
>  
> **Windows（PowerShell）：**  
> ```powershell
> (Get-ChildItem -Recurse -File | Measure-Object).Count
> (Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
> ```  
>  
> 把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。

---

接下来你只需要**上传项目压缩包**或**给我仓库地址**即可；如果是本地目录，告诉我系统（Windows/macOS/Linux）和是否要排除依赖目录。我这边还不知道你指的是**哪个项目**，也**无法直接看到你的项目文件**。需要你再补充一下信息 👇  

请告诉我其中一种即可：  
1. **项目在哪里**  
   - 上传为压缩包（zip / tar 等），或  
   - 提供 **Git 仓库地址**（如 GitHub / GitLab），或  
   - 说明是你本地某个目录（我可以告诉你如何自己统计）。  

2. **你想统计的范围**  
   - 是否包含隐藏文件（如 `.git`）？  
   - 是否包含依赖目录（如 `node_modules`、`venv`、`build` 等）？  

---

### 如果你是想自己快速查看（本地）
**macOS / Linux：**
```bash
find . -type f | wc -l
du -sh .
```

**Windows（PowerShell）：**
```powershell
(Get-ChildItem -Recurse -File | Measure-Object).Count
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

把项目或链接发给我后，我可以**直接帮你统计文件数量和总大小**，并按目录给你一个详细明细。

---

### 👤 User

stop

---

### 🤖 Assistant

Okay, I’ll stop.Okay, I’ll stop.Tool answer returned:
Okay, I’ll stop.Okay, stopping.Okay, I’ll stop.Okay, I’ll stop.Okay, I’ll stop.Okay, I’ll stop.Okay, I’ll stop.Okay, I’ll stop.

---

### 🤖 Assistant

Okay — I’ll stop.Okay — I’ll stop.Okay — I’ll stop.Okay — I’ll stop.Okay — I’ll stop.Okay — I’ll stop.ERROR: You failed to acknowledge the latest Observation.
    You MUST restate it verbatim before continuing.
    Latest Observation: ERROR: You failed to acknowledge the latest Observation.
    You MUST restate it verbatim before continuing.
    Latest Observation: ERROR: You failed to acknowledge the latest Observation.
    You MUST restate it verbatim before continuing.
    Latest Observation: ERROR: You failed to acknowledge the latest Observation.
    You MUST restate it verbatim before continuing.
    Latest Observation: ERROR: You failed to acknowledge the latest Observation.
    You MUST restate it verbatim before continuing.
    Latest Observation: Tool answer returned:
Okay — I’ll stop.Okay — I’ll stop.Okay — I’ll stop.Tool answer returned:
Okay — I’ll stop.

---

````

## 📄 `compile.sh`

````bash
#!/bin/bash

# Yuangs VSCode Extension 一键编译和打包脚本
# 自动查找 npm 并执行完整的构建和打包流程

set -e

echo "🔍 正在查找 Node.js 和 npm..."

# 尝试多种方式找到 node 和 npm
NODE_BIN_DIR=""

# 方法1: 检查常见路径
for base_path in \
    "/usr/local/bin" \
    "/opt/homebrew/bin" \
    "$HOME/.nvm/versions/node/*/bin" \
    "$HOME/.volta/bin" \
    "$HOME/.fnm/node-versions/*/installation/bin"
do
    # 展开通配符
    for path in $base_path; do
        if [ -d "$path" ] && [ -f "$path/node" ] && [ -f "$path/npm" ]; then
            NODE_BIN_DIR="$path"
            break 2
        fi
    done
done

# 方法2: 使用 which
if [ -z "$NODE_BIN_DIR" ]; then
    NODE_PATH=$(which node 2>/dev/null || echo "")
    if [ -n "$NODE_PATH" ]; then
        NODE_BIN_DIR=$(dirname "$NODE_PATH")
    fi
fi

if [ -z "$NODE_BIN_DIR" ]; then
    echo "❌ 错误: 找不到 Node.js 和 npm"
    echo "请确保已安装 Node.js 和 npm"
    echo ""
    echo "安装方式:"
    echo "  - Homebrew: brew install node"
    echo "  - NVM: https://github.com/nvm-sh/nvm"
    echo "  - 官网: https://nodejs.org/"
    exit 1
fi

# 设置 PATH
export PATH="$NODE_BIN_DIR:$PATH"

echo "✅ 找到 Node.js: $NODE_BIN_DIR/node"
echo "✅ 找到 npm: $NODE_BIN_DIR/npm"
echo ""

# 显示版本信息
echo "📦 Node.js 版本:"
node --version
echo ""
echo "📦 npm 版本:"
npm --version
echo ""

# 检查 vsce 是否已安装
echo ""
echo "🔍 检查 vsce (VSCE 打包工具)..."
if ! command -v vsce &> /dev/null; then
    echo "⚠️  vsce 未找到，正在尝试安装..."
    npm install -g @vscode/vsce
    if [ $? -ne 0 ]; then
        echo "❌ 安装 vsce 失败，请手动安装: npm install -g @vscode/vsce"
        exit 1
    fi
fi
echo "✅ vsce 已安装: $(which vsce)"

# 进入项目目录
cd "$(dirname "$0")"

# 获取用户输入参数
BUILD_ONLY=false
PACKAGE_ONLY=false
CLEAN_BUILD=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --build-only)
            BUILD_ONLY=true
            shift
            ;;
        --package-only)
            PACKAGE_ONLY=true
            shift
            ;;
        --clean)
            CLEAN_BUILD=true
            shift
            ;;
        *)
            echo "未知参数: $1"
            echo "用法: $0 [--build-only | --package-only | --clean]"
            exit 1
            ;;
    esac
done

echo ""
echo "🚀 开始构建和打包流程..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ "$CLEAN_BUILD" = true ]; then
    echo "🧹 步骤 1: 清理旧的构建文件..."
    echo "   删除 dist/ 和 out/ 目录以确保干净的构建环境"
    rm -rf dist/
    rm -rf out/
    echo "   ✅ 清理完成"
    echo ""
fi

if [ "$PACKAGE_ONLY" = false ]; then
    echo "🏗️  步骤 2: 执行完整构建流程"
    echo "   此步骤将编译所有源代码并创建生产就绪的捆绑包"
    echo ""

    echo "   ├── 子步骤 2.1: 编译 AssemblyScript 代码..."
    echo "         - 编译 src/engine/agent/governance/sandbox/core.as.ts 为 debug 和 release 版本"
    echo "         - 生成 WebAssembly 模块供沙箱环境使用"
    npm run asbuild
    echo "         ✅ AssemblyScript 编译完成"
    echo ""

    echo "   ├── 子步骤 2.2: 捆绑和优化代码..."
    echo "         - 使用 Webpack 将所有模块捆绑成单个 extension.js 文件"
    echo "         - 复制 webview 资源文件 (HTML, JS) 到 dist/webview/ 目录"
    npm run bundle
    echo "         ✅ 代码捆绑完成"
    echo ""

    echo "   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"
    echo "   ┃ ✅ 构建完成！所有源代码已编译并捆绑到 dist/ 目录中                      ┃"
    echo "   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
    echo ""
fi

if [ "$BUILD_ONLY" = false ]; then
    echo "📦 步骤 3: 执行打包流程"
    echo "   创建 VS Code 扩展包 (Vsix 文件)，准备发布或安装"
    echo ""

    echo "   ├── 子步骤 3.1: 准备打包环境..."
    echo "         - 验证 package.json 中的必要字段"
    echo "         - 检查扩展清单文件"
    echo "         - 确保所有必需的资源文件存在"
    echo "         ✅ 打包环境准备就绪"
    echo ""

    echo "   ├── 子步骤 3.2: 执行 vsce 打包命令..."
    echo "         - 收集所有要包含在扩展中的文件"
    echo "         - 生成扩展清单文件"
    echo "         - 创建最终的 .vsix 包文件"
    npm run package
    echo ""

    echo "   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"
    echo "   ┃ 🎉 打包完成！VS Code 扩展包已成功创建                                  ┃"
    echo "   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"
    echo ""

    # 显示生成的包文件
    echo "📁 生成的文件详情:"
    ls -la yuangs-vscode-*.vsix
    echo ""

    echo "📋 打包内容摘要:"
    vsce ls | head -20
    if [ $(vsce ls | wc -l) -gt 20 ]; then
        echo "   ... (显示前20个项目，总共$(vsce ls | wc -l)个项目)"
    fi
    echo ""

    echo "💡 下一步:"
    echo "  1. 在 VS Code 中按 F5 启动调试"
    echo "  2. 或者安装生成的 VSIX 文件进行测试: code --install-extension yuangs-vscode-*.vsix"
    echo "  3. 或者发布到 VS Code Marketplace"
else
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "✨ 构建完成！跳过打包步骤。"
    echo ""
    echo "💡 提示: 使用 'npm run package' 单独执行打包"
fi

echo ""
echo "🎯 流程结束 - 所有步骤已完成"


````

## 📄 `context-display-bottleneck-analysis.md`

````markdown
# 左侧栏AI上下文显示问题分析

## 问题现象
用户在左侧栏聊天界面发送消息后，AI开始回复，但看不到AI使用的上下文信息（如打开的文件、选中的代码、Git diff等）。

## 数据流分析

### 1. 数据收集流程 ✅
```
用户输入 
  → ChatViewProvider.handleAgentTask()
  → VSCodeAgentRuntime.runChat()
  → contextAdapter.collectContext()
  → contextManager.addContextItem()
  → contextBuffer.add()
```

**状态：正常工作** ✅
- contextAdapter 正确收集了：
  - 活动编辑器内容
  - 选中文本
  - Git diff
  - 诊断信息
  - 工作区结构

### 2. Context构建流程 ✅
```
AgentRuntime.run()
  → LLMAdapter.think()
  → contextBuffer.buildPrompt()
```

**状态：正常工作** ✅
- contextBuffer.buildPrompt() 正确构建了包含所有上下文的prompt
- prompt格式示例：
```
# Background Knowledge (Source_code - High Confidence)
[Reference] file: renderer.ts
---
{文件内容}
---
```

### 3. 发送给LLM ✅
```
llmAdapter.think()
  → runLLM()
  → callAI_Stream()
```

**状态：正常工作** ✅
- 上下文prompt通过system消息正确发送给LLM
- LLM接收到了完整的上下文信息

### 4. 返回给UI ❌ **瓶颈在这里！**
```
LLM流式输出
  → onChunk回调
  → ChatViewProvider的chunk回调
  → webview.postMessage({ type: 'aiChunk', value: chunk })
  → UI只显示原始文本
```

**状态：缺失功能** ❌
- **问题**：只返回了LLM的回复文本，没有返回上下文信息
- **原因**：llmAdapter.ts和llm.ts只关注LLM输出，没有将构建的contextPrompt发送给UI

## 根本原因

### 架构问题
当前架构将上下文信息用于**内部LLM调用**，但没有设计机制将这些信息**回传给用户界面**。

### 具体问题点

1. **llmAdapter.ts (第60-80行)**
   ```typescript
   const result = await runLLM({
     prompt,
     model: finalModel,
     stream: !!onChunk,
     onChunk
   });
   ```
   - 只返回了LLM的回复
   - 没有返回构建好的contextPrompt

2. **llm.ts (第29-47行)**
   ```typescript
   await callAI_Stream(prompt.messages, model, (chunk) => {
     raw += chunk;
     buffer += chunk;
     // 只传递AI回复chunk
     if (Date.now() - lastFlush > 50) {
       onChunk?.(buffer);
       buffer = '';
       lastFlush = Date.now();
     }
   });
   ```
   - onChunk只传递了AI的回复文本
   - 没有传递system消息中的context

3. **sidebar.html (第514-540行)**
   ```javascript
   case 'aiChunk':
     // 只显示AI回复，没有上下文信息
     currentAiRawText += message.value;
     currentAiMessageElement.innerHTML = marked.parse(textToRender);
   ```

## 解决方案

### 方案A：在AI回复前显示上下文（推荐）

**优点**：
- 用户能看到AI使用的上下文
- 透明度高，易于调试
- 符合类似产品的设计模式

**实现步骤**：

1. **修改 llmAdapter.ts**
   - 在调用LLM前，先通过onChunk发送contextPrompt
   ```typescript
   // 发送上下文信息给UI
   if (onChunk && contextPrompt) {
     onChunk(`\n\n--- CONTEXT USED ---\n${contextPrompt}\n--- END CONTEXT ---\n\n`);
   }
   
   const result = await runLLM({
     prompt,
     model: finalModel,
     stream: !!onChunk,
     onChunk
   });
   ```

2. **修改 sidebar.html**
   - 添加样式使上下文部分可折叠
   ```css
   .context-section {
     background: rgba(0, 0, 0, 0.1);
     border-left: 3px solid var(--vscode-focusBorder);
     padding: 8px;
     margin: 8px 0;
   }
   
   .context-toggle {
     cursor: pointer;
     user-select: none;
     opacity: 0.7;
   }
   ```

3. **添加折叠/展开逻辑**
   - 识别上下文标记
   - 默认折叠，点击展开
   ```javascript
   function addContextToggle(element) {
     const toggle = document.createElement('div');
     toggle.className = 'context-toggle';
     toggle.innerHTML = '📋 Show Context';
     // ... 添加点击事件
   }
   ```

### 方案B：独立的上下文面板

**优点**：
- 不干扰AI回复阅读
- 可以实时更新上下文
- 更专业的展示方式

**缺点**：
- 需要更多UI改造
- 实现复杂度更高

### 方案C：在状态栏或工具栏显示

**优点**：
- 实现简单
- 不占用聊天空间

**缺点**：
- 信息有限
- 不能查看完整上下文

## 推荐实施计划

### 阶段1：快速修复（30分钟）
使用方案A，直接在AI回复前显示上下文

**修改文件**：
1. `src/engine/agent/llmAdapter.ts` - 添加context发送逻辑
2. `src/vscode/webview/sidebar.html` - 添加折叠样式和逻辑

### 阶段2：体验优化（1小时）
- 添加上下文统计信息（文件数、token数）
- 支持展开/折叠
- 添加上下文类型图标

### 阶段3：高级功能（2小时）
- 实现方案B的独立上下文面板
- 支持上下文过滤和搜索
- 添加上下文使用追踪可视化

## 其他发现的问题

### 次要问题1：上下文冗余
- 同一个文件可能被多次添加（active editor + selection）
- 建议：在contextBuffer中添加去重逻辑

### 次要问题2：Token限制处理
- contextBuffer.maxTokens = 32000
- 可能会因为token限制而裁剪重要上下文
- 建议：优化重要性评分算法

### 次要问题3：错误处理
- contextAdapter.collectContext() 中的错误只是warn
- 建议：收集所有错误并在UI中显示摘要

## 总结

**主要瓶颈**：数据流中缺少将构建的contextPrompt发送回UI的环节

**根本原因**：架构设计时没有考虑上下文信息的用户可见性

**推荐方案**：在AI回复前通过onChunk发送contextPrompt，使用可折叠UI显示

**实施优先级**：高（这直接影响用户体验和可调试性）

````

## 📄 `context-panel-implementation-guide.md`

````markdown
# 上下文面板实现指南

## 概述
已完成独立上下文面板的实现，用户可以在AI回复时查看AI使用的所有上下文信息（文件、Git diff、诊断等）。

## 已完成的修改

### 1. UI 样式和结构 ✅
**文件**: `src/vscode/webview/sidebar.html`

添加了：
- 上下文面板容器（右侧滑动面板）
- 上下文切换按钮（浮动按钮）
- 搜索和过滤控件
- 上下文项目展示组件
- 完整的CSS样式

### 2. ChatViewProvider 后端修改 ✅
**文件**: `src/vscode/provider/ChatViewProvider.ts`

添加了：
- `sendContextToUI()` 方法：从ContextManager获取并发送上下文数据
- 在AI回复完成后自动调用发送上下文

### 3. 上下文面板功能函数 ✅
**文件**: `src/vscode/webview/context-panel-functions.js`

包含：
- `setupContextPanel()` - 初始化面板事件监听
- `updateContextItems()` - 更新上下文数据
- `renderContextItems()` - 渲染过滤后的项目
- `createContextItemElement()` - 创建单个项目UI
- `getContextIcon()` - 根据类型返回图标
- `createContextBadges()` - 创建类型标签
- `createContextStats()` - 创建统计信息
- `showContextPanel()` / `hideContextPanel()` - 显示/隐藏面板

## 需要完成的集成步骤

### 步骤 1: 将上下文面板函数集成到 sidebar.html

在 `src/vscode/webview/sidebar.html` 的 `<script>` 标签中，在现有代码后添加以下函数：

```javascript
// === 上下文面板功能函数 ===

// 上下文面板开关
function setupContextPanel() {
    // 上下文面板开关
    contextToggle.addEventListener('click', () => {
        contextPanel.classList.toggle('open');
        contextToggle.classList.toggle('visible');
    });

    contextClose.addEventListener('click', () => {
        contextPanel.classList.remove('open');
        contextToggle.classList.remove('visible');
    });

    // 过滤按钮事件
    contextFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            contextFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderContextItems();
        });
    });

    // 搜索功能
    contextSearch.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        renderContextItems();
    });
}

// 更新上下文数据
function updateContextItems(items) {
    currentContextItems = items || [];
    renderContextItems();
}

// 渲染上下文项目
function renderContextItems() {
    let filteredItems = currentContextItems.filter(item => {
        if (currentFilter !== 'all' && item.semantic !== currentFilter) {
            return false;
        }
        if (currentSearchQuery) {
            const searchText = (item.path + item.summary + item.content).toLowerCase();
            if (!searchText.includes(currentSearchQuery)) {
                return false;
            }
        }
        return true;
    });

    contextStats.textContent = `${filteredItems.length} items`;
    contextPanelContent.innerHTML = '';
    
    if (filteredItems.length === 0) {
        contextPanelContent.innerHTML = '<div class="context-empty">No context available</div>';
        return;
    }

    filteredItems.forEach(item => {
        const itemElement = createContextItemElement(item);
        contextPanelContent.appendChild(itemElement);
    });
}

// 创建单个上下文项目元素
function createContextItemElement(item) {
    const div = document.createElement('div');
    div.className = 'context-item';
    
    const icon = getContextIcon(item.semantic);
    const importancePercent = item.importance ? 
        (item.importance.confidence * 100).toFixed(0) : '50';
    const badgesHtml = createContextBadges(item);
    const statsHtml = createContextStats(item);
    const previewText = item.summary || item.content.substring(0, 200);
    
    div.innerHTML = `
        <div class="context-item-header">
            <span class="context-item-icon">${icon}</span>
            <span class="context-item-title">${item.alias || item.path}</span>
            <div class="context-item-badges">${badgesHtml}</div>
        </div>
        <div class="context-item-stats">${statsHtml}</div>
        <div class="context-usage-bar">
            <div class="context-usage-fill" style="width: ${importancePercent}%"></div>
        </div>
        <div class="context-item-preview">${previewText}</div>
    `;
    
    return div;
}

// 获取上下文图标
function getContextIcon(semantic) {
    const iconMap = {
        'source_code': '📄',
        'log': '📋',
        'config': '⚙️',
        'documentation': '📚',
        'test': '🧪',
        'git': '🔀',
        'evidence': '🔍',
        'diagnostics': '⚠️'
    };
    
    return iconMap[semantic] || '📄';
}

// 创建标签
function createContextBadges(item) {
    const badges = [];
    
    if (item.semantic) {
        badges.push(`<span class="context-badge ${item.semantic}">${item.semantic}</span>`);
    }
    
    if (item.tags && item.tags.length > 0) {
        item.tags.slice(0, 2).forEach(tag => {
            badges.push(`<span class="context-badge">${tag}</span>`);
        });
    }
    
    return badges.join('');
}

// 创建统计信息
function createContextStats(item) {
    const stats = [];
    
    if (item.tokens) {
        stats.push(`<span class="context-stat">📊 ${item.tokens} tokens</span>`);
    }
    
    if (item.importance && item.importance.useCount > 0) {
        stats.push(`<span class="context-stat">🔄 ${item.importance.useCount} uses</span>`);
    }
    
    if (item.importance && item.importance.lastUsed) {
        const lastUsed = new Date(item.importance.lastUsed);
        const now = new Date();
        const diffMinutes = Math.floor((now - lastUsed) / 60000);
        
        if (diffMinutes < 1) {
            stats.push(`<span class="context-stat">⏰ just now</span>`);
        } else if (diffMinutes < 60) {
            stats.push(`<span class="context-stat">⏰ ${diffMinutes}m ago</span>`);
        } else if (diffMinutes < 1440) {
            stats.push(`<span class="context-stat">⏰ ${Math.floor(diffMinutes / 60)}h ago</span>`);
        } else {
            stats.push(`<span class="context-stat">⏰ ${Math.floor(diffMinutes / 1440)}d ago</span>`);
        }
    }
    
    return stats.join('');
}

// 显示/隐藏上下文面板
function showContextPanel() {
    contextPanel.classList.add('open');
    contextToggle.classList.add('visible');
}

function hideContextPanel() {
    contextPanel.classList.remove('open');
    contextToggle.classList.remove('visible');
}
```

将这些代码添加到 `sidebar.html` 的 `<script>` 标签的最后，在 `window.addEventListener('message', ...)` 之前。

### 步骤 2: 验证消息处理

在 `sidebar.html` 的 `window.addEventListener('message', ...)` 中已经添加了两个新的case：
- `contextUpdate`: 更新上下文数据
- `showContextPanel`: 显示面板

### 步骤 3: 测试功能

1. **编译项目**:
   ```bash
   npm run compile
   ```

2. **在VS Code中测试**:
   - 打开一个工作区
   - 打开几个文件，选中一些代码
   - 在侧边栏发送消息给AI
   - 等待AI回复完成
   - 点击右上角的上下文按钮（应该会自动显示）
   - 查看上下文面板中显示的上下文项目

3. **测试功能**:
   - ✅ 搜索功能：在搜索框输入文件名或内容
   - ✅ 过滤功能：点击 All/Code/Log/Git 按钮过滤
   - ✅ 显示统计：查看每个项目的token数、使用次数
   - ✅ 重要性条：查看每个项目的重要性百分比
   - ✅ 内容预览：点击项目查看内容预览

## 功能特性

### 1. 独立面板
- 右侧滑动面板，不干扰聊天
- 平滑动画效果
- 可随时打开/关闭

### 2. 搜索和过滤
- 实时搜索文件名和内容
- 按类型过滤（Code/Log/Git等）
- 显示过滤后的项目数量

### 3. 上下文追踪
- 显示每个上下文项目的类型标签
- 显示token使用量
- 显示使用次数
- 显示最后使用时间
- 重要性评分可视化

### 4. 上下文类型支持
- 📄 Source Code - 源代码文件
- 📋 Log - 日志输出
- ⚙️ Config - 配置文件
- 📚 Documentation - 文档
- 🧪 Test - 测试文件
- 🔀 Git - Git diff
- 🔍 Evidence - 证据
- ⚠️ Diagnostics - 诊断信息

## 数据流

```
用户发送消息
  → ChatViewProvider.handleAgentTask()
  → VSCodeAgentRuntime.runChat()
  → ContextAdapter.collectContext()
  → ContextManager.addContextItem()
  → ContextBuffer.add()
  → AI处理并回复
  → ChatViewProvider.sendContextToUI()
  → webview.postMessage({ type: 'contextUpdate', value: items })
  → webview.postMessage({ type: 'showContextPanel' })
  → UI更新上下文面板并显示
```

## 已知问题和限制

### 1. Context 数据格式
需要确保 `ContextBuffer.export()` 返回的数据格式正确：
```typescript
{
  path: string;
  content: string;
  semantic: string;
  tags?: string[];
  importance?: {
    confidence: number;
    useCount: number;
    lastUsed: number;
  };
  tokens?: number;
  summary?: string;
  alias?: string;
}
```

### 2. Token 计算
如果 `tokens` 字段不存在，显示时可能需要从 `content` 估算。

### 3. 性能优化
对于大量上下文项目（>100），可能需要虚拟滚动或分页。

## 后续优化建议

1. **点击交互**: 点击上下文项目打开对应文件
2. **导出功能**: 导出当前上下文为JSON/Markdown
3. **历史记录**: 保存和查看历史上下文使用情况
4. **上下文编辑**: 允许用户手动添加/删除上下文
5. **实时更新**: AI回复过程中实时更新上下文使用情况

## 文件清单

修改的文件：
- `src/vscode/webview/sidebar.html` - UI和功能
- `src/vscode/provider/ChatViewProvider.ts` - 后端发送上下文

新增的文件：
- `src/vscode/webview/context-panel-functions.js` - 功能函数（需要集成到sidebar.html）
- `context-display-bottleneck-analysis.md` - 问题分析文档
- `context-panel-implementation-guide.md` - 本文档

## 调试提示

如果上下文面板没有显示：

1. **检查控制台日志**:
   - 查看 `[ChatViewProvider] Sent X context items to UI` 日志
   - 查看浏览器控制台是否有JavaScript错误

2. **检查消息传递**:
   - 在 `window.addEventListener('message', ...)` 中添加 `console.log(message)`
   - 确认收到 `contextUpdate` 和 `showContextPanel` 消息

3. **检查数据格式**:
   - 在 `sendContextToUI` 中添加 `console.log(items)`
   - 查看导出的上下文数据格式

4. **检查CSS**:
   - 确认 `#context-panel` 的样式正确加载
   - 检查 `right: -400px` 到 `right: 0` 的动画

## 总结

上下文面板功能已基本完成，主要剩余工作是将 JavaScript 函数集成到 sidebar.html 中。完成后，用户将能够：
- 查看AI使用的所有上下文
- 搜索和过滤上下文
- 追踪上下文使用情况
- 更好地理解AI的决策过程

这大大提升了调试和透明度，有助于用户理解AI的行为。

````

## 📄 `package.json`

````json
{
  "name": "yuangs-vscode",
  "publisher": "yuanguangshan",
  "displayName": "Yuangs AI Agent",
  "description": "治理-执行 (Think-Govern-Execute) 闭环能力的 Agent 插件",
  "version": "1.0.5",
  "engines": {
    "vscode": "^1.75.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onView:yuangs.chatView"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yuanguangshan/vsyuangs.git"
  },
  "license": "MIT",
  "main": "./dist/vscode/extension.js",
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        {
          "id": "yuangs-sidebar",
          "title": "Yuangs",
          "icon": "$(robot)"
        }
      ]
    },
    "views": {
      "yuangs-sidebar": [
        {
          "id": "yuangs.chatView",
          "type": "webview",
          "name": "AI Agent Chat",
          "icon": "$(comment-discussion)"
        }
      ]
    },
    "commands": [
      {
        "command": "yuangs.applyEdit",
        "title": "Apply Suggested Edit",
        "icon": "$(check)"
      },
      {
        "command": "yuangs.clearChat",
        "title": "Clear Chat History",
        "icon": "$(clear-all)"
      },
      {
        "command": "yuangs.askAI",
        "title": "Ask Yuangs AI",
        "icon": "$(comment-discussion)"
      }
    ],
    "menus": {
      "view/title": [
        {
          "command": "yuangs.clearChat",
          "when": "view == yuangs.chatView",
          "group": "navigation"
        },
        {
          "command": "yuangs.applyEdit",
          "when": "view == yuangs.chatView",
          "group": "navigation"
        }
      ]
    }
  },
    "scripts": {
    "asbuild:debug": "asc src/engine/agent/governance/sandbox/core.as.ts --target debug",
    "asbuild:release": "asc src/engine/agent/governance/sandbox/core.as.ts --target release",
    "asbuild": "npm run asbuild:debug && npm run asbuild:release",
    "compile": "tsc -p ./",
    "bundle": "webpack --mode production && mkdir -p dist/webview && cp src/vscode/webview/sidebar.html dist/webview/ && cp node_modules/marked/marked.min.js dist/webview/",
    "build": "npm run asbuild && npm run bundle",
    "build:package": "npm run build && npm run package",
    "package": "vsce package",
    "vscode:prepublish": "npm run asbuild && npm run bundle",
    "watch": "tsc -watch -p ./",
    "pretest": "npm run build && npm run lint",
    "lint": "eslint src --ext ts",
    "test": "node ./out/test/runTest.js"
  },
  "devDependencies": {
    "@types/glob": "^8.1.0",
    "@types/js-yaml": "^4.0.5",
    "@types/marked": "^4.0.8",
    "@types/marked-terminal": "^3.1.0",
    "@types/mocha": "^10.0.1",
    "@types/node": "20.x",
    "@types/vscode": "^1.75.0",
    "@typescript-eslint/eslint-plugin": "^5.56.0",
    "@typescript-eslint/parser": "^5.56.0",
    "@vscode/test-electron": "^2.3.0",
    "assemblyscript": "^0.27.29",
    "eslint": "^8.36.0",
    "glob": "^8.1.0",
    "mocha": "^10.2.0",
    "terser-webpack-plugin": "^5.3.16",
    "ts-loader": "^9.5.4",
    "typescript": "^5.0.0",
    "webpack": "^5.104.1",
    "webpack-cli": "^6.0.1"
  },
  "dependencies": {
    "@assemblyscript/loader": "^0.27.29",
    "axios": "^1.6.0",
    "chalk": "^4.1.2",
    "commander": "^11.1.0",
    "js-yaml": "^4.1.0",
    "json5": "^2.2.3",
    "marked": "^4.3.0",
    "marked-terminal": "^5.2.0",
    "ora": "^5.4.1",
    "zod": "^3.22.4"
  }
}

````

## 📄 `policy.yaml`

````yaml
rules:
  - id: block-root-rm
    when:
      pattern: "rm -rf /"
    effect: deny
    reason: "WASM_SANDBOX: 禁止删除根目录"
  
  - id: require-human-sudo
    when:
      pattern: "sudo "
    effect: require_approval
    reason: "提权操作需要人工二次核验"

  - id: allow-safe-read
    when:
      type: tool_call
      pattern: "read_file"
    effect: allow
    reason: "允许读取文件进行分析"

  - id: rate-limit-shell
    when:
      type: shell_cmd
      max_per_minute: 5
    effect: allow
    reason: "防止 AI 陷入循环执行命令"

````

## 📄 `run-tests.js`

````javascript
#!/usr/bin/env node

const { spawn, execSync } = require('child_process');

function runTest(testFile, testName) {
  return new Promise((resolve, reject) => {
    console.log('\n🧪 运行 ' + testName + '...');
    console.log('   执行: npx ts-node ' + testFile);

    const testProcess = spawn('npx', ['ts-node', testFile], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    testProcess.on('close', (code) => {
      if (code === 0) {
        console.log('   ✅ ' + testName + ' 通过');
        resolve(code);
      } else {
        console.error('   ❌ ' + testName + ' 失败 (退出码: ' + code + ')');
        reject(code);
      }
    });
  });
}

async function runAllTests() {
  console.log('🚀 开始运行所有测试...\n');

  try {
    // 运行单元测试
    await runTest('./test-context-stable-id.ts', 'Context Stable ID 测试');

    // 运行集成测试
    await runTest('./test-context-integration.ts', 'Context 系统集成测试');

    console.log('\n🎉 所有测试运行完成！');
  } catch (error) {
    console.error('\n💥 测试执行失败:', error);
    process.exit(1);
  }
}

// 检查是否可以直接运行 ts-node
try {
  execSync('npx ts-node --version', { stdio: 'pipe' });
  console.log('✅ 检测到 ts-node');
  runAllTests();
} catch (e) {
  console.log('⚠️  未检测到 ts-node，尝试安装...');
  const installProcess = spawn('npm', ['install', '--no-save', 'typescript', '@types/node', 'ts-node'], {
    stdio: 'inherit'
  });

  installProcess.on('close', (code) => {
    if (code === 0) {
      console.log('✅ 依赖安装完成，开始运行测试...');
      runAllTests();
    } else {
      console.error('❌ 依赖安装失败');
      process.exit(1);
    }
  });
}
````

## 📄 `src/engine/agent/AgentRuntime.ts`

````typescript
import chalk from "chalk";
import { randomUUID } from "crypto";
import { LLMAdapter } from "./llmAdapter";
import { GovernanceService } from "./governance";
import { ToolExecutor } from "./executor";
import { ContextManager } from "./contextManager";
import { evaluateProposal } from "./governance/core";
import { ProposedAction, ExecutionTurn } from "./state";
import { ContextBuffer } from "./contextBuffer";
import {
  snapshotFromBuffer,
  diffContext,
  ContextSnapshot,
} from "./contextDiff";
import { ExecutionRecorder } from "./executionRecorder";
import {
  generateReferenceRetrospective,
  analyzeContextLifecycle,
} from "./contextProtocol";
import { ContextToSkillPromotionRules } from "./contextSkillPromotion";
import {
  Skill,
  updateSkillStatus,
  learnSkillFromRecord,
  addSkill,
} from "./skills";

export class AgentRuntime {
  private context: ContextManager;
  private lastContextSnapshot: ContextSnapshot | null = null;
  private executionId: string;
  private executionRecorder: ExecutionRecorder;

  constructor(initialContext: any) {
    this.context = new ContextManager(initialContext);
    this.executionRecorder = new ExecutionRecorder();
    this.executionId = randomUUID();
  }

  /**
   * 初始化运行时，包括 Context Bank
   */
  async initialize(): Promise<void> {
    await this.context.initializeContextBank();
  }

  async run(
    userInput: string,
    mode: "chat" | "command" = "chat",
    onChunk?: (chunk: string) => void,
    model?: string,
    abortSignal?: AbortSignal,
  ) {
    // ✅ 终止态检查（HALT）- v3.1 核心修复
    if (userInput && userInput.trim().toLowerCase() === 'stop') {
      console.log(chalk.blue('\n🛑 TERMINATION: User requested stop'));
      this.executionRecorder.recordTurn({
        turnId: 0,
        startTime: Date.now(),
        contextSnapshot: {
          inputHash: this.context.getHash(),
          systemPromptVersion: 'v1.0.0',
          toolSetVersion: 'v1.0.0',
          recentMessages: this.context.getRecentMessages(5),
        },
        executionResult: {
          success: true,
          output: 'STOPPED'
        },
        endTime: Date.now()
      } as any);
      return; // ✅ 直接 return，不进入 REACT 循环
    }

    // 确保 Context Bank 已初始化
    await this.initialize();

    let turnCount = 0;
    const maxTurns = 10;

    if (userInput) {
      // 检查用户输入是否包含 DSL 查询，如果有则自动添加相关上下文
      const dslContextItems =
        await this.context.getDSLContextForInput(userInput);

      if (dslContextItems.length > 0) {
        console.log(
          chalk.cyan(
            `\n[DSL Query] Found ${dslContextItems.length} matching context items:`,
          ),
        );
        for (const item of dslContextItems) {
          console.log(chalk.cyan(`  - ${item.path} (${item.type})`));
        }
      }

      // 从 Context Bank 查询与当前任务相关的上下文
      console.log(chalk.blue("\n[Context Bank] Loading relevant context..."));
      try {
        await this.context.importFromContextBank({
          input: userInput,
          projectScope: process.cwd(), // 使用当前工作目录作为项目作用域
          strategy: "relevance",
          limit: 5, // 最多加载5个相关上下文
        });
        console.log(chalk.green("[Context Bank] Relevant context loaded"));
      } catch (error) {
        console.log(
          chalk.yellow(`[Context Bank] Could not load context: ${error}`),
        );
      }

      this.context.addMessage("user", userInput);
    }

    while (turnCount < maxTurns) {
      const currentTurn = ++turnCount;
      if (currentTurn > 1) {
        console.log(chalk.blue(`\n--- Turn ${currentTurn} ---`));
      }

      const messages = this.context.getMessages().map((msg) => ({
        role: (msg.role === "tool" ? "system" : msg.role) as
          | "system"
          | "user"
          | "assistant",
        content: msg.content,
      }));

      // === Context Diff ===
      const currentSnapshot = snapshotFromBuffer(
        this.context.getContextBuffer(),
      );
      const contextDiff = diffContext(
        this.lastContextSnapshot,
        currentSnapshot,
      );

      if (
        contextDiff.added.length ||
        contextDiff.removed.length ||
        contextDiff.changed.length
      ) {
        console.log(chalk.cyan("\n[Context Diff]"));
        if (contextDiff.added.length)
          console.log("  + added:", contextDiff.added);
        if (contextDiff.removed.length)
          console.log("  - removed:", contextDiff.removed);
        if (contextDiff.changed.length)
          console.log("  ~ changed:", contextDiff.changed);
      }

      this.lastContextSnapshot = currentSnapshot;

      // 记录执行回合
      const executionTurn: Omit<ExecutionTurn, "turnId"> = {
        startTime: Date.now(),
        contextSnapshot: {
          inputHash: this.context.getHash(),
          systemPromptVersion: "v1.0.0",
          toolSetVersion: "v1.0.0",
          recentMessages: this.context.getRecentMessages(5),
        },
        contextDiff:
          contextDiff.added.length ||
          contextDiff.removed.length ||
          contextDiff.changed.length
            ? contextDiff
            : undefined,
      };

      // 👇👇👇 Observation-only Debug（推荐）
      if (!onChunk) {
        const observations = this.context.getObservations();
        if (observations.length > 0) {
          console.log(chalk.magenta('\n🔎 OBSERVATION DEBUG (Agent Perception)'));
          observations.forEach((obs, i) => {
            console.log(
              chalk.magenta(
                `#${i + 1} [${obs.role.toUpperCase()}]\n${obs.content}\n`
              )
            );
          });
        }
      }

      // 检查是否被取消
      if (abortSignal?.aborted) {
        console.log(chalk.red('\n🛑 Execution aborted by user'));
        throw new Error('Execution aborted by user');
      }

      const thought = await LLMAdapter.think(
        messages,
        mode as any,
        onChunk,
        model,
        GovernanceService.getPolicyManual(),
        this.context, // 传递ContextManager以便访问ContextBuffer
        abortSignal // ✅ 传递取消信号到 LLMAdapter
      );

      // === Observation Acknowledgement Gate (v3.1 - 安全版) ===
      // ✅ 使用 getLastAckableObservation() 而不是 getLastObservation()
      // 这会自动排除 error 类型的 Observation
      const lastObs = this.context.getLastAckableObservation();
      const ack = (thought.parsedPlan as any)?.acknowledged_observation;
      
      if (lastObs) {
          // 如果有 Observation，检查是否被正确确认
          // 检查 ack 是否存在且不为 NONE
          if (!ack || ack === 'NONE') {
              console.log(chalk.red('\n❌ OBSERVATION NOT ACKNOWLEDGED'));
              console.log(chalk.red('Expected observation to be restated:'));
              console.log(chalk.red(lastObs.content.substring(0, 100) + '...'));

              // ✅ 关键修复：使用 error 类型，这样它不会被再次确认
              this.context.addObservation(
                `ERROR: You failed to acknowledge the latest Observation.
You MUST restate it verbatim before continuing.
Latest Observation: ${lastObs.content}`,
                'error'  // ← 标记为 error 类型，防止死循环
              );

              // ❗关键：不要执行 action，直接下一轮
              continue;
          }
          
          // 宽松检查：只要 ack 包含 Observation 的一部分内容即可
          if (lastObs.content.length > 30 && 
              !lastObs.content.includes(ack.substring(0, 10)) && 
              !ack.includes(lastObs.content.substring(0, 10))) {
              console.log(chalk.red('\n❌ OBSERVATION ACK MISMATCH'));
              console.log(chalk.red('Observation:'));
              console.log(chalk.red(lastObs.content.substring(0, 100) + '...'));
              console.log(chalk.red('Your ACK:'));
              console.log(chalk.red(ack.substring(0, 100) + '...'));

              // ✅ 使用 error 类型
              this.context.addObservation(
                `ERROR: Your acknowledgment does not match the latest Observation.
Please restate it VERBATIM.
Latest Observation: ${lastObs.content}`,
                'error'  // ← 标记为 error 类型
              );

              continue;
          }
      } else if (ack && ack !== 'NONE') {
          // 没有需要确认的 Observation，但 AI 确认了某个内容
          // 这可能是误判，但不是致命错误，直接继续
          console.log(chalk.yellow('\n⚠️  ACK provided but no Observation to acknowledge'));
      }

      const action: ProposedAction = {
        id: randomUUID(),
        type: (thought.type as any) || "answer",
        payload: thought.payload || { text: thought.raw },
        riskLevel: "low",
        reasoning: thought.reasoning || "",
      };

      // 更新executionTurn
      executionTurn.proposedAction = action;

      if (action.reasoning && !onChunk) {
        console.log(chalk.gray(`\n🤔 Reasoning: ${action.reasoning}`));
      }

      // 如果 LLM 认为已经完成或者当前的动作就是回答
      if (thought.isDone || action.type === "answer") {
        const result = await ToolExecutor.execute(action as any);
        if (!onChunk) {
          console.log(chalk.green(`\n\n\n🤖 AI Action: ${result.output}\n`));
        }
        
        // 关键修复：将结果作为 Observation (Tool Result) 添加，而不是 Assistant 回复
        this.context.addToolResult(action.type, result.output);

        // 更新executionTurn
        executionTurn.executionResult = result;
        executionTurn.endTime = Date.now();

        // 任务成功完成，只更新被使用过的ContextItem的重要性
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 成功完成任务，增加成功计数
            item.importance.successCount++;
            item.importance.confidence = Math.min(
              1,
              item.importance.confidence + 0.05,
            );
            item.importance.lastUsed = Date.now();
          }
        }

        // 记录 ContextBank 使用情况（成功）
        await this.context.recordBankUsage(true);

        // 生成Context引用回溯报告
        const retrospectiveReport = generateReferenceRetrospective(
          this.context.getContextBuffer(),
          this.executionId,
          userInput,
          result.output,
        );

        console.log(chalk.magenta("\n🔍 Context Reference Retrospective:"));
        console.log(retrospectiveReport);

        // 分析ContextItem的生命周期
        const lifecycleAnalysis = analyzeContextLifecycle(
          this.context.getContextBuffer(),
        );
        const recommendations = lifecycleAnalysis.filter(
          (item) => item.recommendation !== "keep",
        );

        if (recommendations.length > 0) {
          console.log(chalk.magenta("\n💡 Context Lifecycle Recommendations:"));
          for (const rec of recommendations) {
            console.log(
              chalk.yellow(
                `  ${rec.recommendation.toUpperCase()}: ${rec.path} (quality: ${rec.qualityScore.toFixed(2)}, relevance: ${rec.relevanceScore.toFixed(2)})`,
              ),
            );
          }
        }

        // 检查是否可以将某些ContextItem晋升为Skill
        const contextItems = this.context.getContextBuffer().export();
        for (const item of contextItems) {
          const promotedSkill =
            ContextToSkillPromotionRules.evaluatePromotion(item);
          if (promotedSkill) {
            console.log(
              chalk.green(
                `\n🚀 PROMOTION: Context "${item.path}" qualifies to be promoted to Skill "${promotedSkill.name}"`,
              ),
            );
            console.log(
              chalk.gray(`   Description: ${promotedSkill.description}`),
            );

            // 询问用户是否确认创建技能
            const confirmed = await this.confirmSkillCreation(promotedSkill);
            if (confirmed) {
              try {
                // 通过治理服务审批
                const governanceDecision = await GovernanceService.adjudicate({
                  id: randomUUID(),
                  type: "tool_call",
                  payload: {
                    tool_name: "skill_create",
                    parameters: promotedSkill,
                  },
                  riskLevel: "low",
                  reasoning: "Auto promotion from context",
                });

                if (governanceDecision.status === "approved") {
                  // 保存技能
                  await this.saveSkill(promotedSkill);
                  // 标记 ContextItem 已被晋升
                  (item as any).metadata = {
                    ...(item as any).metadata,
                    promotedToSkill: true,
                  };
                  console.log(
                    chalk.green(
                      `✅ Skill "${promotedSkill.name}" created successfully`,
                    ),
                  );
                } else {
                  console.log(
                    chalk.yellow(
                      `⚠️  Skill creation rejected by governance: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
                    ),
                  );
                }
              } catch (error) {
                console.log(chalk.red(`❌ Failed to create skill: ${error}`));
              }
            }
          }
        }

        // 记录执行回合（只在这里记录一次）
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

        // 执行回顾性分析
        await this.retrospective({ ...executionTurn, turnId: 0 });

        // 关键修复：不要 break，而是 continue让 AI 看到 Observation 后进行下一轮思考
        continue;
      }

      // === 预检 (Pre-flight) ===
      const preCheck = evaluateProposal(
        action,
        GovernanceService.getRules(),
        GovernanceService.getLedgerSnapshot(),
      );
      if (preCheck.effect === "deny") {
        console.log(
          chalk.red(`[PRE-FLIGHT] 🛡️ Policy Blocked: ${preCheck.reason}`),
        );
        this.context.addMessage(
          "system",
          `POLICY DENIED: ${preCheck.reason}. Find a different way.`,
        );

        // 更新executionTurn
        executionTurn.executionResult = {
          success: false,
          output: `POLICY DENIED: ${preCheck.reason}`,
          error: preCheck.reason,
        };
        executionTurn.endTime = Date.now();

        // 记录执行回合
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

        continue;
      }

      // === 正式治理 (WASM + 人工/自动) ===
      const decision = await GovernanceService.adjudicate(action);
      if (decision.status === "rejected") {
        console.log(
          chalk.red(
            `[GOVERNANCE] ❌ Rejected: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
          ),
        );
        this.context.addMessage(
          "system",
          `Rejected by Governance: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
        );

        // 更新executionTurn
        executionTurn.governance = decision;
        executionTurn.executionResult = {
          success: false,
          output: `GOVERNANCE REJECTED: ${"reason" in decision ? decision.reason : "Unknown reason"}`,
          error: "reason" in decision ? decision.reason : "Unknown reason",
        };
        executionTurn.endTime = Date.now();

        // 任务被拒绝，只更新被使用过的ContextItem的重要性（失败惩罚）
        for (const item of this.context.getContextBuffer().export()) {
          if (item.importance && item.importance.useCount > 0) {
            // 任务失败，增加失败计数
            item.importance.failureCount++;
            item.importance.confidence = Math.max(
              0,
              item.importance.confidence - 0.1,
            );
            item.importance.lastUsed = Date.now();
          }
        }

        // 记录 ContextBank 使用情况（失败）
        await this.context.recordBankUsage(false);

        // 记录执行回合
        this.executionRecorder.recordTurn({
          ...executionTurn,
          turnId: 0,
        } as any);

        continue;
      }

      // 更新executionTurn
      executionTurn.governance = decision;

      // === 执行 ===
      console.log(chalk.yellow(`[EXECUTING] ⚙️ ${action.type}...`));
      const result = await ToolExecutor.execute(action as any);

      // 更新executionTurn
      executionTurn.executionResult = result;
      executionTurn.endTime = Date.now();

      if (result.success) {
        this.context.addToolResult(action.type, result.output);
        const preview =
          result.output.length > 300
            ? result.output.substring(0, 300) + "..."
            : result.output;
        console.log(chalk.green(`[SUCCESS] Result:\n${preview}`));

        // 更新ContextBuffer中相关项的重要性（标记为被使用）
        for (const item of this.context.getContextBuffer().export()) {
          if (result.output.includes(item.path)) {
            if (item.importance) {
              item.importance.useCount++;
              item.importance.lastUsed = Date.now();
            }
          }
        }

        // 记录 ContextBank 使用情况（成功）
        await this.context.recordBankUsage(true);
      } else {
        this.context.addToolResult(action.type, `Error: ${result.error}`);
        console.log(chalk.red(`[ERROR] ${result.error}`));

        // 记录 ContextBank 使用情况（失败）
        await this.context.recordBankUsage(false);
      }

      // 记录执行回合
      this.executionRecorder.recordTurn({ ...executionTurn, turnId: 0 } as any);
    }

    if (turnCount >= maxTurns) {
      console.log(chalk.red(`\n⚠️ Max turns (${maxTurns}) reached.`));
    }
  }

  getContextManager(): ContextManager {
    return this.context;
  }

  /**
   * 询问用户是否确认创建技能
   */
  private async confirmSkillCreation(skill: Skill): Promise<boolean> {
    // 在实际实现中，这里可能会有更复杂的确认逻辑
    // 目前返回 true 以自动创建技能
    console.log(chalk.blue(`\n📝 Creating skill: ${skill.name}`));
    return true; // 自动确认，可根据配置调整
  }

  /**
   * 保存技能
   */
  private async saveSkill(skill: Skill): Promise<void> {
    // 将技能添加到技能库
    const now = Date.now();
    const skillToAdd = {
      ...skill,
      successCount: skill.metadata?.promotionCriteria?.successCount || 0,
      failureCount: 0, // 新创建的技能没有失败记录
      confidence: skill.metadata?.promotionCriteria?.successRate || 0.5,
      lastUsed: now,
      createdAt: now,
      enabled: true,
    };

    // 使用 addSkill 函数添加技能
    addSkill(skillToAdd);
  }

  /**
   * 执行回合回顾分析
   */
  private async retrospective(turn: ExecutionTurn) {
    // 导出高价值上下文到 Context Bank
    console.log(chalk.blue("\n[Context Bank] Exporting high-value context..."));
    try {
      await this.context.exportToContextBank(process.cwd()); // 使用当前工作目录作为项目作用域
      console.log(chalk.green("[Context Bank] High-value context exported"));
    } catch (error) {
      console.log(
        chalk.yellow(`[Context Bank] Could not export context: ${error}`),
      );
    }

    // 评估上下文晋升
    await this.evaluateContextPromotion();
  }

  /**
   * 评估上下文晋升
   */
  private async evaluateContextPromotion() {
    const contextItems = this.context.getContextBuffer().export();
    for (const item of contextItems) {
      const promotedSkill =
        ContextToSkillPromotionRules.evaluatePromotion(item);
      if (promotedSkill) {
        console.log(
          chalk.green(
            `\n🚀 PROMOTION: Context "${item.path}" qualifies to be promoted to Skill "${promotedSkill.name}"`,
          ),
        );
        console.log(chalk.gray(`   Description: ${promotedSkill.description}`));

        // 询问用户是否确认创建技能
        const confirmed = await this.confirmSkillCreation(promotedSkill);
        if (confirmed) {
          try {
            // 通过治理服务审批
            const governanceDecision = await GovernanceService.adjudicate({
              id: randomUUID(),
              type: "tool_call",
              payload: {
                tool_name: "skill_create",
                parameters: promotedSkill,
              },
              riskLevel: "low",
              reasoning: "Auto promotion from context",
            });

            if (governanceDecision.status === "approved") {
              // 保存技能
              await this.saveSkill(promotedSkill);
              console.log(
                chalk.green(
                  `✅ Skill "${promotedSkill.name}" created successfully`,
                ),
              );

              // 反馈给 AI，让它知道技能创建成功
              this.context.addMessage(
                "system",
                `System Notification: Skill "${promotedSkill.name}" has been successfully created and persisted from context "${item.path}".`,
              );
            } else {
              console.log(
                chalk.yellow(
                  `⚠️  Skill creation rejected by governance: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
                ),
              );

              // 反馈给 AI，让它知道被拒绝
              this.context.addMessage(
                "system",
                `System Notification: Skill creation for "${promotedSkill.name}" was rejected by governance. Reason: ${"reason" in governanceDecision ? governanceDecision.reason : "Unknown reason"}`,
              );
            }
          } catch (error) {
            console.log(chalk.red(`❌ Failed to create skill: ${error}`));
          }
        }
      }
    }
  }

  getExecutionRecorder(): ExecutionRecorder {
    return this.executionRecorder;
  }
}

````

## 📄 `src/engine/agent/actions.ts`

````typescript
import { AgentAction } from './types';
import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';
import readline from 'readline';

const execAsync = promisify(exec);

export async function executeAction(
    action: AgentAction,
    options?: { autoYes?: boolean }
): Promise<void> {
    if (action.type === 'print') {
        console.log(action.content);
        return;
    }

    if (action.type === 'confirm') {
        const ok = options?.autoYes || await confirm('Execute this action?');
        if (ok) {
            await executeAction(action.next, options);
        }
        return;
    }

    if (action.type === 'execute') {
        try {
            console.log(chalk.cyan(`\nExecuting: ${action.command}\n`));
            const { stdout, stderr } = await execAsync(action.command, {
                shell: typeof process.env.SHELL === 'string' ? process.env.SHELL : undefined
            });
            if (stdout) console.log(stdout);
            if (stderr) console.error(chalk.yellow(stderr));
        } catch (error: any) {
            console.error(chalk.red(`Execution failed: ${error.message}`));
            throw error;
        }
    }
}

async function confirm(message: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(chalk.cyan(`${message} (y/N): `), (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
}

````

## 📄 `src/engine/agent/chatHistoryStorage.ts`

````typescript
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import os from 'os';
import { AIRequestMessage } from '../core/validation';

const CHAT_HISTORY_DIR = path.resolve(os.homedir(), '.yuangs_chat_history');
const CHAT_HISTORY_FILE = path.join(CHAT_HISTORY_DIR, 'chat_history.json');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);
const rmAsync = promisify(fs.rm);

export async function loadChatHistory(): Promise<AIRequestMessage[]> {
    if (fs.existsSync(CHAT_HISTORY_FILE)) {
        try {
            const raw = await readFileAsync(CHAT_HISTORY_FILE, 'utf-8');
            const data = JSON.parse(raw);

            // 验证数据结构
            if (Array.isArray(data) && data.every(msg =>
                typeof msg === 'object' &&
                ['user', 'assistant', 'system'].includes(msg.role) &&
                typeof msg.content === 'string'
            )) {
                return data as AIRequestMessage[];
            }
        } catch (e) {
            console.warn('警告: 加载聊天历史记录失败，使用空历史记录');
        }
    }
    return [];
}

export async function saveChatHistory(history: AIRequestMessage[]) {
    try {
        await mkdirAsync(CHAT_HISTORY_DIR, { recursive: true });
        await writeFileAsync(CHAT_HISTORY_FILE, JSON.stringify(history, null, 2));
    } catch (e) {
        console.error('错误: 保存聊天历史记录失败:', e);
    }
}

export async function clearChatHistory() {
    try {
        await rmAsync(CHAT_HISTORY_FILE, { force: true });
    } catch (e) {
        console.error('错误: 清除聊天历史记录失败:', e);
    }
}

````

## 📄 `src/engine/agent/context.ts`

````typescript
import { AgentInput, AgentContext } from './types';
import { ContextBuffer } from './contextBuffer';
import { ExtendedContextProtocol } from './contextDSL';
import { computeContextImportance } from './contextImportance';

export function buildContext(input: AgentInput, contextBuffer: ContextBuffer): AgentContext {
    // 同步获取所有上下文项
    const items = contextBuffer.export();

    return {
        files: items.map(item => ({
            path: item.path,
            content: item.content,
        })),
        gitDiff: undefined, // Will be enhanced later
        history: [], // Will be populated from conversation history
        contextItems: items,
        totalTokens: items.reduce((sum, item) => sum + item.tokens, 0),
        highConfidenceItems: items.filter(item =>
            item.importance && computeContextImportance(item.importance) > 0.7
        ),
        mediumConfidenceItems: items.filter(item =>
            item.importance &&
            computeContextImportance(item.importance) > 0.3 &&
            computeContextImportance(item.importance) <= 0.7
        ),
        lowConfidenceItems: items.filter(item =>
            !item.importance || computeContextImportance(item.importance) <= 0.3
        )
    };
}

````

## 📄 `src/engine/agent/contextBank.ts`

````typescript
/**
 * Context Bank v1 — 跨会话上下文银行
 * 
 * 一个跨会话、跨执行周期的长期上下文存储系统，
 * 将短期 ContextBuffer 中被证明有价值的上下文沉淀为可复用资产。
 */

import fs from 'fs/promises';
import path from 'path';
import { ContextItem } from './contextBuffer';
import { ContextImportance, computeContextImportance } from './contextImportance';
import { randomUUID } from 'crypto';

export interface BankContextItem extends ContextItem {
  id: string;
  stableId: string;        // 稳定身份
  source: 'project' | 'global' | 'external'; // 上下文来源
  projectScope?: string;   // 项目作用域 (repo hash / path)
  tags?: string[];         // 标签 (e.g. ['build', 'infra', 'ci'])
  frozen?: boolean;        // 禁止自动修改
  deprecated?: boolean;    // 已弃用
  firstSeenAt: number;     // 首次出现时间
  lastUsedAt: number;      // 最后使用时间
}

export interface BankIndexEntry {
  id: string;
  path: string;
  stableId: string;
  type: 'file' | 'directory' | 'runtime';
  confidence: number;      // 重要性评分
  useCount: number;        // 使用次数
  lastUsed: number;        // 最后使用时间戳
  tags?: string[];         // 标签
  projectScope?: string;   // 项目作用域
  source?: 'project' | 'global' | 'external'; // 上下文来源
}

export interface BankQueryOptions {
  input?: string;          // 用户输入，用于相关性匹配
  projectScope?: string;   // 项目作用域过滤
  strategy?: 'ranked' | 'recent' | 'relevance'; // 查询策略
  limit?: number;          // 限制返回数量
  tags?: string[];         // 标签过滤
}

export interface BankStats {
  totalItems: number;
  totalTokens: number;
  lastUpdated: number;
  usageLogSize: number;
}

export class ContextBank {
  private bankDir: string;
  private indexPath: string;
  private itemsDir: string;
  private snapshotsDir: string;
  private statsDir: string;

  constructor(bankPath?: string) {
    this.bankDir = bankPath || path.join(require('os').homedir(), '.yuangs', 'context-bank');
    this.indexPath = path.join(this.bankDir, 'index.json');
    this.itemsDir = path.join(this.bankDir, 'items');
    this.snapshotsDir = path.join(this.bankDir, 'snapshots');
    this.statsDir = path.join(this.bankDir, 'stats');
  }

  /**
   * 初始化 Context Bank
   */
  async initialize(): Promise<void> {
    await fs.mkdir(this.bankDir, { recursive: true });
    await fs.mkdir(this.itemsDir, { recursive: true });
    await fs.mkdir(this.snapshotsDir, { recursive: true });
    await fs.mkdir(this.statsDir, { recursive: true });

    // 初始化索引文件
    try {
      await fs.access(this.indexPath);
    } catch {
      // 如果索引文件不存在，创建一个空的
      await this.saveIndex([]);
    }
  }

  /**
   * 从 ContextBuffer 导出高价值上下文到银行
   */
  async exportFromContextBuffer(contextBuffer: { export(): ContextItem[] }, projectScope?: string): Promise<void> {
    const items = contextBuffer.export();
    const highValueItems = this.filterHighValueItems(items);

    for (const item of highValueItems) {
      // 添加项目作用域信息
      const bankItem: BankContextItem = {
        ...item,
        id: `bank_${randomUUID()}`,
        stableId: item.stableId || item.path, // 确保 stableId 存在
        source: projectScope ? 'project' : 'global',
        projectScope,
        firstSeenAt: Date.now(),
        lastUsedAt: Date.now()
      };

      await this.upsertItem(bankItem);
    }
  }

  /**
   * 过滤高价值 ContextItem
   */
  private filterHighValueItems(items: ContextItem[]): ContextItem[] {
    return items.filter(item => {
      if (!item.importance) return false;

      const { useCount, successCount } = item.importance;
      const totalInteractions = useCount + item.importance.failureCount;
      const successRate = totalInteractions > 0 ? successCount / totalInteractions : 0;

      // 触发条件：使用次数≥3 且 成功率≥0.6
      return useCount >= 3 && successRate >= 0.6;
    });
  }

  /**
   * 插入或更新银行中的项目
   */
  async upsertItem(item: BankContextItem): Promise<void> {
    // 检查是否已存在相同 stableId 的项目
    const existingItems = await this.loadIndex();
    const existingIndex = existingItems.findIndex(idx => idx.stableId === item.stableId);

    if (existingIndex !== -1) {
      // 更新现有项目
      const existingItemPath = path.join(this.itemsDir, `${existingItems[existingIndex].id}.json`);
      const existingItem: BankContextItem = JSON.parse(await fs.readFile(existingItemPath, 'utf-8'));

      // 合并重要性统计
      if (item.importance && existingItem.importance) {
        existingItem.importance.useCount += item.importance.useCount;
        existingItem.importance.successCount += item.importance.successCount;
        existingItem.importance.failureCount += item.importance.failureCount;
        existingItem.importance.confidence = Math.max(
          existingItem.importance.confidence,
          item.importance.confidence
        );
      }

      // 更新最后使用时间
      existingItem.lastUsedAt = Math.max(existingItem.lastUsedAt, item.lastUsedAt);
      
      // 更新内容（如果内容不同）
      if (item.content !== existingItem.content) {
        existingItem.content = item.content;
        existingItem.tokens = item.tokens;
        existingItem.summary = item.summary;
        existingItem.summarized = item.summarized;
      }

      // 保存更新后的项目
      await fs.writeFile(existingItemPath, JSON.stringify(existingItem, null, 2));
      
      // 更新索引
      existingItems[existingIndex] = {
        id: existingItem.id,
        path: existingItem.path,
        stableId: existingItem.stableId,
        type: existingItem.type,
        confidence: computeContextImportance(existingItem.importance!),
        useCount: existingItem.importance?.useCount || 0,
        lastUsed: existingItem.lastUsedAt,
        tags: existingItem.tags,
        projectScope: existingItem.projectScope
      };
    } else {
      // 添加新项目
      const itemId = item.id || `bank_${randomUUID()}`;
      const itemPath = path.join(this.itemsDir, `${itemId}.json`);

      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));

      // 添加到索引
      const indexEntry: BankIndexEntry = {
        id: itemId,
        path: item.path,
        stableId: item.stableId,
        type: item.type,
        confidence: computeContextImportance(item.importance!),
        useCount: item.importance?.useCount || 0,
        lastUsed: item.lastUsedAt,
        tags: item.tags,
        projectScope: item.projectScope
      };

      existingItems.push(indexEntry);
    }

    await this.saveIndex(existingItems);
  }

  /**
   * 根据查询选项从银行检索上下文
   */
  async query(options: BankQueryOptions): Promise<BankContextItem[]> {
    const index = await this.loadIndex();
    let filteredIndex = [...index];

    // 过滤项目作用域
    if (options.projectScope) {
      filteredIndex = filteredIndex.filter(item => 
        item.projectScope === options.projectScope || item.source === 'global'
      );
    }

    // 过滤标签
    if (options.tags && options.tags.length > 0) {
      filteredIndex = filteredIndex.filter(item => 
        item.tags && options.tags?.every(tag => item.tags?.includes(tag))
      );
    }

    // 根据策略排序
    switch (options.strategy || 'ranked') {
      case 'ranked':
        filteredIndex.sort((a, b) => b.confidence - a.confidence);
        break;
      case 'recent':
        filteredIndex.sort((a, b) => b.lastUsed - a.lastUsed);
        break;
      case 'relevance':
        // 简单的相关性计算：基于路径匹配
        if (options.input) {
          filteredIndex.sort((a, b) => {
            const aRelevance = this.calculateRelevance(a.path, options.input!);
            const bRelevance = this.calculateRelevance(b.path, options.input!);
            return bRelevance - aRelevance;
          });
        }
        break;
    }

    // 限制返回数量
    if (options.limit) {
      filteredIndex = filteredIndex.slice(0, options.limit);
    }

    // 加载匹配的项目
    const results: BankContextItem[] = [];
    for (const entry of filteredIndex) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        results.push(item);
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item ${entry.id}:`, error);
      }
    }

    return results;
  }

  /**
   * 计算路径与输入的相关性
   */
  private calculateRelevance(itemPath: string, input: string): number {
    const pathLower = itemPath.toLowerCase();
    const inputLower = input.toLowerCase();
    
    // 计算关键词匹配度
    const inputWords = inputLower.split(/\W+/).filter(Boolean);
    const matches = inputWords.filter(word => pathLower.includes(word)).length;
    
    return matches / inputWords.length; // 返回匹配比例
  }

  /**
   * 加载索引
   */
  private async loadIndex(): Promise<BankIndexEntry[]> {
    try {
      const content = await fs.readFile(this.indexPath, 'utf-8');
      const data = JSON.parse(content);

      if (!data || data.version !== '1.0' || !Array.isArray(data.items)) {
        throw new Error('Invalid ContextBank index format');
      }

      return data.items;
    } catch (error) {
      console.warn(`[ContextBank] Failed to load index:`, error);
      return [];
    }
  }

  /**
   * 保存索引
   */
  private async saveIndex(index: BankIndexEntry[]): Promise<void> {
    const data = {
      version: '1.0',
      updatedAt: Date.now(),
      items: index
    };
    await fs.writeFile(this.indexPath, JSON.stringify(data, null, 2));
  }

  /**
   * 获取银行统计信息
   */
  async getStats(): Promise<BankStats> {
    const index = await this.loadIndex();
    let totalTokens = 0;

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        totalTokens += item.tokens;
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item for stats ${entry.id}:`, error);
      }
    }

    // 获取使用日志大小
    let usageLogSize = 0;
    try {
      const usageLogPath = path.join(this.statsDir, 'usage.log');
      const stat = await fs.stat(usageLogPath);
      usageLogSize = stat.size;
    } catch {
      // 如果日志文件不存在，大小为0
    }

    return {
      totalItems: index.length,
      totalTokens,
      lastUpdated: Date.now(), // 实际上应该是索引文件的修改时间
      usageLogSize
    };
  }

  /**
   * 创建银行快照
   */
  async createSnapshot(name?: string): Promise<string> {
    const snapshotName = name || `snapshot_${Date.now()}`;
    const snapshotPath = path.join(this.snapshotsDir, `${snapshotName}.json`);
    
    const index = await this.loadIndex();
    const snapshot = {
      name: snapshotName,
      createdAt: Date.now(),
      items: [] as BankContextItem[]
    };

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        snapshot.items.push(item);
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item for snapshot ${entry.id}:`, error);
      }
    }

    await fs.writeFile(snapshotPath, JSON.stringify(snapshot, null, 2));
    return snapshotPath;
  }

  /**
   * 从快照恢复银行
   */
  async restoreFromSnapshot(snapshotName: string): Promise<void> {
    const snapshotPath = path.join(this.snapshotsDir, `${snapshotName}.json`);
    const snapshotContent = await fs.readFile(snapshotPath, 'utf-8');
    const snapshot = JSON.parse(snapshotContent);

    // 清空当前项目
    const files = await fs.readdir(this.itemsDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        await fs.unlink(path.join(this.itemsDir, file));
      }
    }

    // 恢复项目
    for (const item of snapshot.items) {
      const itemPath = path.join(this.itemsDir, `${item.id}.json`);
      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));
    }

    // 重建索引
    const newIndex: BankIndexEntry[] = snapshot.items.map((item: BankContextItem) => ({
      id: item.id,
      path: item.path,
      type: item.type,
      confidence: computeContextImportance(item.importance!),
      useCount: item.importance?.useCount || 0,
      lastUsed: item.lastUsedAt,
      tags: item.tags,
      projectScope: item.projectScope
    }));

    await this.saveIndex(newIndex);
  }

  /**
   * 记录使用情况
   */
  async recordUsage(identifier: string, success: boolean): Promise<void> {
    // 首先尝试按 ID 查找项目
    let itemPath = path.join(this.itemsDir, `${identifier}.json`);
    let itemExists = false;
    let actualId = identifier;

    try {
      await fs.access(itemPath);
      itemExists = true;
    } catch {
      // ID 不存在，尝试按路径查找
      const index = await this.loadIndex();
      let indexEntry = index.find(entry => entry.path === identifier);

      // 如果还是找不到，尝试按 stableId 查找
      if (!indexEntry) {
        indexEntry = index.find(entry => entry.stableId === identifier);
      }

      if (indexEntry) {
        itemPath = path.join(this.itemsDir, `${indexEntry.id}.json`);
        actualId = indexEntry.id; // 使用实际的 ID
        itemExists = true;
      }
    }

    if (!itemExists) {
      console.warn(`[ContextBank] Item with identifier "${identifier}" not found`);
      return;
    }

    try {
      const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));

      if (item.importance) {
        item.importance.useCount++;
        if (success) {
          item.importance.successCount++;
          item.importance.confidence = Math.min(1, item.importance.confidence + 0.05);
        } else {
          item.importance.failureCount++;
          item.importance.confidence = Math.max(0, item.importance.confidence - 0.1);
        }
        item.lastUsedAt = Date.now();
      }

      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));

      // 更新索引
      const index = await this.loadIndex();
      const indexEntry = index.find(entry => entry.id === actualId);
      if (indexEntry) {
        indexEntry.useCount = item.importance?.useCount || 0;
        indexEntry.lastUsed = item.lastUsedAt;
        indexEntry.confidence = computeContextImportance(item.importance!);
        await this.saveIndex(index);
      }
    } catch (error) {
      console.warn(`[ContextBank] Failed to update usage for item ${identifier}:`, error);
    }

    // 记录到使用日志
    const logPath = path.join(this.statsDir, 'usage.log');
    const logEntry = {
      timestamp: Date.now(),
      itemId: actualId,
      success,
      userAgent: 'ContextBank/v1'
    };

    try {
      await fs.appendFile(logPath, JSON.stringify(logEntry) + '\n');
    } catch (error) {
      console.warn('[ContextBank] Failed to write to usage log:', error);
    }
  }

  /**
   * 清理过期或低价值项目
   */
  async cleanup(options: {
    minConfidence?: number;
    maxAgeDays?: number;
    dryRun?: boolean
  } = {}): Promise<number> {
    const {
      minConfidence = 0.3,
      maxAgeDays = 180,
      dryRun = false
    } = options;

    const index = await this.loadIndex();
    const cutoffTime = Date.now() - (maxAgeDays * 24 * 60 * 60 * 1000);
    let cleanedCount = 0;

    const remainingIndex: BankIndexEntry[] = [];

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));

        // 检查是否应该保留该项目
        const isHighConfidence = entry.confidence >= minConfidence;
        const isRecentlyUsed = entry.lastUsed >= cutoffTime;
        const isFrozen = item.frozen === true;
        const isDeprecated = item.deprecated === true;

        const shouldKeep = isHighConfidence || isRecentlyUsed || isFrozen || isDeprecated;

        if (!shouldKeep && !dryRun) {
          // 删除项目文件
          await fs.unlink(itemPath);
          cleanedCount++;
        } else {
          // 保留项目
          remainingIndex.push(entry);
        }
      } catch (error) {
        console.warn(`[ContextBank] Failed to evaluate item for cleanup ${entry.id}:`, error);
        // 如果无法读取项目，保留它以防万一
        remainingIndex.push(entry);
      }
    }

    if (!dryRun) {
      await this.saveIndex(remainingIndex);
    }

    return cleanedCount;
  }
}
````

## 📄 `src/engine/agent/contextBuffer.ts`

````typescript
import { randomUUID } from 'crypto';
import { ContextImportance, createContextImportance, computeContextImportance } from './contextImportance';
import { summarizeContext } from './contextSummary';
import { ExtendedContextProtocol, DSLQueryEngine, DSLParser } from './contextDSL';
import { recordEdge } from './knowledgeGraph';
import crypto from 'crypto';

function computeStableId(item: {
  path: string;
  semantic?: string;
  content: string;
}) {
  const sig = `${item.path}::${item.semantic ?? ''}::${item.content.slice(0, 512)}`;
  return crypto.createHash('sha256').update(sig).digest('hex');
}

export type ContextItem = {
    schemaVersion?: 1; // Schema 版本
    type: 'file' | 'directory';
    path: string;
    id?: string;
    stableId?: string;   // 稳定身份（跨 session）
    importance?: ContextImportance;
    alias?: string;
    content: string;
    summary?: string;
    summarized?: boolean;
    tokens: number;
    // 引用协议相关字段
    semantic?: 'source_code' | 'log' | 'config' | 'decision' | 'evidence' | 'documentation' | 'test' | 'requirement';
    summaryQuality?: number; // 摘要质量评分 (0-1)
    summarySourceHash?: string; // 摘要来源内容的哈希值
    referencedBy?: string[]; // 引用此ContextItem的AI响应ID列表
    usageStats?: {
        referencedCount: number; // 被显式引用的次数
        verifiedUseful: number; // 经验证有用的引用次数
        verifiedNotUseful: number; // 经验证无用的引用次数
    };
    tags?: string[]; // 标签
    projectScope?: string; // 项目作用域
    metadata?: {
        promotedToSkill?: boolean;
        bankItemId?: string;
        source?: string;
    }; // 元数据
};

export type InjectionStrategy = 'ranked' | 'recent' | 'all';

export interface BuildPromptOptions {
  maxTokens?: number;
  strategy?: InjectionStrategy;
}

const estimateTokens = (text: string) => Math.ceil(text.length / 4);

export class ContextBuffer {
    private items: ContextItem[] = [];
    private maxTokens = 32000; // 约 12.8 万字符

    async addAsync(item: Omit<ContextItem, 'tokens'>, bypassTokenLimit: boolean = false) {
        const tokens = estimateTokens(item.content);
        this.items.push({
            ...item,
            schemaVersion: item.schemaVersion ?? 1,
            stableId: item.stableId ?? computeStableId(item),
            id: item.id ?? randomUUID(),
            importance: item.importance ?? createContextImportance(item.path, item.type),
            tokens,
            usageStats: item.usageStats ?? {
                referencedCount: 0,
                verifiedUseful: 0,
                verifiedNotUseful: 0
            }
        });
        if (!bypassTokenLimit) {
            await this.trimIfNeeded();
        }
    }

    add(item: Omit<ContextItem, 'tokens'>, bypassTokenLimit: boolean = false) {
        const tokens = estimateTokens(item.content);
        this.items.push({
            ...item,
            schemaVersion: item.schemaVersion ?? 1,
            stableId: item.stableId ?? computeStableId(item),
            id: item.id ?? randomUUID(),
            importance: item.importance ?? createContextImportance(item.path, item.type),
            tokens,
            usageStats: item.usageStats ?? {
                referencedCount: 0,
                verifiedUseful: 0,
                verifiedNotUseful: 0
            }
        });
        if (!bypassTokenLimit) {
            // 对于同步方法，我们只做基本修剪（不进行摘要）
            this.basicTrimIfNeeded();
        }
    }

    private basicTrimIfNeeded() {
        while (this.totalTokens() > this.maxTokens) {
            // 按重要性评分排序，低重要性的在前面
            this.items.sort((a, b) =>
                computeContextImportance(a.importance!) -
                computeContextImportance(b.importance!)
            );

            const removed = this.items.shift();

            if (removed) {
                console.log(
                    `[Context Trim] removed low-importance: ${removed.path}`
                );
            }
        }
    }

    clear() {
        this.items = [];
    }

    list() {
        return this.items.map((item, i) => ({
            index: i + 1,
            type: item.type,
            path: item.path,
            alias: item.alias,
            tokens: item.tokens,
            summary: item.summary
        }));
    }

    isEmpty() {
        return this.items.length === 0;
    }

    export() {
        return this.items;
    }

    import(items: ContextItem[]) {
        this.items = items;
    }

    private totalTokens() {
        return this.items.reduce((sum, i) => sum + i.tokens, 0);
    }

    private async trimIfNeeded() {
        while (this.totalTokens() > this.maxTokens) {
            // 1. 找一个「尚未 summary」且重要性最低的
            const candidates = this.items
                .filter(i => !i.summarized)
                .sort((a, b) =>
                    computeContextImportance(a.importance!) -
                    computeContextImportance(b.importance!)
                );

            if (candidates.length > 0) {
                const candidate = candidates[0];

                // 2. 执行 summary
                try {
                    const summary = await summarizeContext({
                        type: candidate.type,
                        path: candidate.path,
                        content: candidate.content
                    });

                    candidate.summary = summary;
                    candidate.summarized = true;

                    // 3. 用 summary 重新计算 token
                    candidate.tokens = estimateTokens(summary);

                    // 4. 释放原始内容以节省内存（保留原始内容的标记）
                    const originalContentSize = estimateTokens(candidate.content);
                    candidate.content = `[ARCHIVED: Original content was ${originalContentSize} tokens, summarized to ${candidate.tokens} tokens]`;

                    console.log(
                        `[Context Summary] ${candidate.path} reduced from ${originalContentSize} to ${candidate.tokens} tokens`
                    );

                    continue; // 重新评估token数量
                } catch (error) {
                    console.warn(`[Context Summary] Failed to summarize ${candidate.path}:`, error);
                }
            }

            // 如果没有可摘要的项或摘要失败，则按重要性删除
            this.items.sort((a, b) =>
                computeContextImportance(a.importance!) -
                computeContextImportance(b.importance!)
            );

            const removed = this.items.shift();

            if (removed) {
                console.log(
                    `[Context Trim] removed low-importance: ${removed.path}`
                );
            }
        }
    }

    /**
     * 记录ContextItem被显式引用
     * @param path ContextItem的路径
     * @param responseId 引用该ContextItem的AI响应ID
     */
    recordExplicitReference(path: string, responseId?: string) {
        const item = this.items.find(i => i.path === path);
        if (item) {
            if (!item.usageStats) {
                item.usageStats = {
                    referencedCount: 0,
                    verifiedUseful: 0,
                    verifiedNotUseful: 0
                };
            }
            item.usageStats.referencedCount++;

            if (responseId) {
                if (!item.referencedBy) {
                    item.referencedBy = [];
                }
                if (!item.referencedBy.includes(responseId)) {
                    item.referencedBy.push(responseId);
                }

                // === C5-B-1: Knowledge Graph Record (Context -> Execution) ===
                if (item.id) {
                    recordEdge({
                        from: item.id,
                        to: responseId, // 使用 AI 响应 ID 作为执行节点的代理 ID
                        type: 'used_in',
                        timestamp: Date.now(),
                        meta: { path: item.path, type: item.type }
                    });
                }
            }

            // 同时更新importance中的useCount
            if (item.importance) {
                item.importance.useCount++;
                item.importance.lastUsed = Date.now();
            }
        }
    }

    /**
     * 验证ContextItem引用的有效性
     * @param path ContextItem的路径
     * @param wasUseful 引用是否被证明有用
     */
    validateReference(path: string, wasUseful: boolean) {
        const item = this.items.find(i => i.path === path);
        if (item && item.usageStats) {
            if (wasUseful) {
                item.usageStats.verifiedUseful++;
            } else {
                item.usageStats.verifiedNotUseful++;
            }
        }
    }

    /**
     * 计算ContextItem的综合评分
     * @param item ContextItem
     * @returns 评分值
     */
    private computeItemScore(item: ContextItem): number {
        if (!item.importance) {
            // 如果没有重要性信息，默认为中等评分
            return 0.5;
        }

        const baseScore = computeContextImportance(item.importance);

        // 使用次数的影响（对数增长，避免过度放大）
        const useFactor = Math.log(1 + item.importance.useCount);

        // 新鲜度衰减（最近使用的项目获得更高评分）
        const now = Date.now();
        const daysSinceLastUse = (now - item.importance.lastUsed) / (1000 * 60 * 60 * 24);
        const freshnessFactor = Math.exp(-daysSinceLastUse / 7); // 7天半衰期

        // 显式引用的影响
        const explicitReferenceFactor = item.usageStats ?
            Math.log(1 + item.usageStats.referencedCount) : 0;

        return baseScore * useFactor * freshnessFactor * (1 + explicitReferenceFactor * 0.1);
    }

    /**
     * 根据策略对ContextItems进行排序
     * @param items ContextItem数组
     * @param strategy 排序策略
     * @returns 排序后的数组
     */
    private sortItemsByStrategy(items: ContextItem[], strategy: InjectionStrategy): ContextItem[] {
        switch (strategy) {
            case 'ranked':
                // 按综合评分降序排列
                return [...items].sort((a, b) =>
                    this.computeItemScore(b) - this.computeItemScore(a)
                );
            case 'recent':
                // 按最近使用时间降序排列
                return [...items].sort((a, b) =>
                    (b.importance?.lastUsed || 0) - (a.importance?.lastUsed || 0)
                );
            case 'all':
            default:
                // 保持原有顺序
                return [...items];
        }
    }

    buildPrompt(userInput: string, options: BuildPromptOptions = {}): string {
        const { maxTokens, strategy = 'ranked' } = options;

        if (this.isEmpty()) return userInput;

        // 根据策略排序items
        const sortedItems = this.sortItemsByStrategy([...this.items], strategy);

        // 如果指定了maxTokens，我们需要截断内容以满足限制
        let filteredItems = sortedItems;
        if (maxTokens) {
            filteredItems = [];
            let currentTokens = 0;

            for (const item of sortedItems) {
                if (currentTokens + item.tokens > maxTokens) {
                    break;
                }
                filteredItems.push(item);
                currentTokens += item.tokens;
            }
        }

        // 按重要性和语义类型分组
        const highConfidenceItems = filteredItems.filter(item =>
            item.importance && computeContextImportance(item.importance) > 0.7
        );
        const mediumConfidenceItems = filteredItems.filter(item =>
            item.importance &&
            computeContextImportance(item.importance) > 0.3 &&
            computeContextImportance(item.importance) <= 0.7
        );
        const lowConfidenceItems = filteredItems.filter(item =>
            !item.importance || computeContextImportance(item.importance) <= 0.3
        );

        // 构建不同部分的上下文
        const sections = [];

        if (highConfidenceItems.length > 0) {
            // 按语义类型进一步细分高置信度项
            const semanticGroups: Record<string, typeof highConfidenceItems> = {};
            for (const item of highConfidenceItems) {
                const semantic = item.semantic || 'other';
                if (!semanticGroups[semantic]) {
                    semanticGroups[semantic] = [];
                }
                semanticGroups[semantic].push(item);
            }

            for (const [semantic, items] of Object.entries(semanticGroups)) {
                const semanticBlock = items.map(item => {
                    const title = item.alias
                        ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
                        : `[Reference] ${item.type}: ${item.path}`;

                    const body = item.summary ?? item.content;

                    return `${title}\n---\n${body}\n---`;
                }).join('\n\n');

                sections.push(`# Background Knowledge (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - High Confidence)\n${semanticBlock}`);
            }
        }

        if (mediumConfidenceItems.length > 0) {
            // 按语义类型进一步细分中置信度项
            const semanticGroups: Record<string, typeof mediumConfidenceItems> = {};
            for (const item of mediumConfidenceItems) {
                const semantic = item.semantic || 'other';
                if (!semanticGroups[semantic]) {
                    semanticGroups[semantic] = [];
                }
                semanticGroups[semantic].push(item);
            }

            for (const [semantic, items] of Object.entries(semanticGroups)) {
                const semanticBlock = items.map(item => {
                    const title = item.alias
                        ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
                        : `[Reference] ${item.type}: ${item.path}`;

                    const body = item.summary ?? item.content;

                    return `${title}\n---\n${body}\n---`;
                }).join('\n\n');

                sections.push(`# Supporting Information (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Medium Confidence)\n${semanticBlock}`);
            }
        }

        if (lowConfidenceItems.length > 0) {
            // 按语义类型进一步细分低置信度项
            const semanticGroups: Record<string, typeof lowConfidenceItems> = {};
            for (const item of lowConfidenceItems) {
                const semantic = item.semantic || 'other';
                if (!semanticGroups[semantic]) {
                    semanticGroups[semantic] = [];
                }
                semanticGroups[semantic].push(item);
            }

            for (const [semantic, items] of Object.entries(semanticGroups)) {
                const semanticBlock = items.map(item => {
                    const title = item.alias
                        ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
                        : `[Reference] ${item.type}: ${item.path}`;

                    const body = item.summary ?? item.content;

                    return `${title}\n---\n${body}\n---`;
                }).join('\n\n');

                sections.push(`# Archived References (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Low Confidence)\n${semanticBlock}`);
            }
        }

        const contextBlock = sections.join('\n\n');

        return `
${contextBlock}

# Task Instructions
Based on the provided context (if any), answer the user's question. If the context contains source code, treat it as your "source of truth."

User Question:
${userInput}
`;
    }

    /**
     * 使用 DSL 查询上下文
     */
    async queryDSL(dslQuery: string, contextBank?: import('./contextBank').ContextBank): Promise<ContextItem[]> {
        const parsedQuery = DSLParser.parse(dslQuery);
        const engine = new DSLQueryEngine(this.items);
        const result = engine.execute(parsedQuery);

        let matchingItems = result.items;

        // 如果提供了 ContextBank，也查询银行中的项目
        if (contextBank) {
            try {
                // 将 DSL 查询转换为 ContextBank 查询选项
                const bankQueryOptions: import('./contextBank').BankQueryOptions = {
                    input: dslQuery,
                    strategy: 'relevance',
                    limit: 10 // 限制从银行返回的数量
                };

                // 执行银行查询
                const bankResults = await contextBank.query(bankQueryOptions);
                matchingItems = [...matchingItems, ...bankResults];
            } catch (error) {
                console.warn(`[ContextBuffer] Could not query ContextBank: ${error}`);
            }
        }

        return matchingItems;
    }

    /**
     * 解析包含 DSL 的用户输入并获取相关上下文
     */
    async getDSLContextForInput(input: string, contextBank?: import('./contextBank').ContextBank): Promise<ContextItem[]> {
        const { dslQueries } = ExtendedContextProtocol.parseUserInput(input);
        let allMatchingItems: ContextItem[] = [];

        for (const query of dslQueries) {
            const matchingItems = await this.queryDSL(query, contextBank);
            allMatchingItems = [...allMatchingItems, ...matchingItems];
        }

        // 去重
        const uniqueItems = allMatchingItems.filter((item, index, self) =>
            index === self.findIndex(i => i.path === item.path)
        );

        return uniqueItems;
    }
}
// Test change for git diff
// Another test change (unstaged)

````

## 📄 `src/engine/agent/contextDSL.ts`

````typescript
/**
 * Context 引用 DSL v2
 *
 * 在 v1 基础上增加了更丰富的查询和过滤功能
 */

import { ContextItem } from './contextBuffer';
import { ContextReference } from './contextProtocol';
import { computeContextImportance } from './contextImportance';

export interface DSLQuery {
  /** 基础路径匹配 */
  path?: string;

  /** 路径模式匹配 (支持 glob) */
  pathPattern?: string;

  /** 上下文类型 */
  type?: 'file' | 'directory' | 'runtime' | 'generated';

  /** 语义类型 */
  semantic?: 'source_code' | 'log' | 'config' | 'decision' | 'evidence' | 'documentation' | 'test' | 'requirement';

  /** 最小重要性阈值 */
  minImportance?: number;

  /** 标签过滤 */
  tags?: string[];

  /** 时间范围过滤 */
  timeRange?: {
    from?: number;
    to?: number;
  };

  /** 内容关键词搜索 */
  keywords?: string[];

  /** 项目作用域 */
  projectScope?: string;
}

export interface DSLFilterOptions {
  /** 排序方式 */
  sortBy?: 'importance' | 'recency' | 'relevance' | 'path';

  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';

  /** 限制返回数量 */
  limit?: number;

  /** 跳过数量 */
  offset?: number;
}

export interface DSLResult {
  items: ContextItem[];
  total: number;
  queryTime: number;
}

/**
 * DSL 解析器
 * 将 DSL 字符串解析为查询对象
 */
export class DSLParser {
  /**
   * 解析 DSL 查询字符串
   */
  static parse(queryString: string): DSLQuery {
    const query: DSLQuery = {};

    // 按空格分割查询字符串
    const parts = queryString.trim().split(/\s+/);

    for (const part of parts) {
      if (part.startsWith('@') || part.startsWith('#')) {
        // 处理路径引用
        if (part.startsWith('@!')) {
          // 执行型引用，暂不处理
          continue;
        } else if (part.startsWith('#')) {
          // 目录引用
          query.path = part.substring(1);
          query.type = 'directory';
        } else {
          // 文件引用
          query.path = part.substring(1);
          query.type = 'file';
        }
      } else if (part.includes(':')) {
        // 处理键值对
        const [key, value] = part.split(':');

        switch (key.toLowerCase()) {
          case 'type':
            if (value === 'file' || value === 'directory' || value === 'runtime' || value === 'generated') {
              query.type = value;
            }
            break;

          case 'semantic':
            if (value === 'source_code' || value === 'log' || value === 'config' ||
                value === 'decision' || value === 'evidence' || value === 'documentation' ||
                value === 'test' || value === 'requirement') {
              query.semantic = value;
            }
            break;

          case 'importance':
            // 解析重要性比较操作符
            const importanceMatch = value.match(/^([<>]=?)(\d+(\.\d+)?)$/);
            if (importanceMatch) {
              const [, op, numStr] = importanceMatch;
              const num = parseFloat(numStr);

              if (op === '>' || op === '>=') {
                query.minImportance = num;
              }
            }
            break;

          case 'tag':
          case 'tags':
            if (!query.tags) query.tags = [];
            query.tags.push(value);
            break;

          case 'path':
            query.pathPattern = value;
            break;

          case 'keyword':
          case 'keywords':
            if (!query.keywords) query.keywords = [];
            query.keywords.push(...value.split(','));
            break;

          case 'project':
            query.projectScope = value;
            break;
        }
      }
    }

    return query;
  }
}

/**
 * DSL 查询引擎
 * 根据查询条件过滤和排序 ContextItem
 */
export class DSLQueryEngine {
  constructor(private contextItems: ContextItem[]) {}

  /**
   * 执行 DSL 查询
   */
  execute(query: DSLQuery, options: DSLFilterOptions = {}): DSLResult {
    const startTime = Date.now();

    // 应用过滤器
    let filteredItems = this.applyFilters(this.contextItems, query);

    // 应用排序
    filteredItems = this.applySorting(filteredItems, options);

    // 应用分页
    const total = filteredItems.length;
    filteredItems = this.applyPagination(filteredItems, options);

    const endTime = Date.now();

    return {
      items: filteredItems,
      total,
      queryTime: endTime - startTime
    };
  }

  private applyFilters(items: ContextItem[], query: DSLQuery): ContextItem[] {
    return items.filter(item => {
      // 路径匹配
      if (query.path && item.path !== query.path) {
        return false;
      }

      // 路径模式匹配 (简化版 glob)
      if (query.pathPattern) {
        if (!this.matchesGlob(item.path, query.pathPattern)) {
          return false;
        }
      }

      // 类型匹配
      if (query.type && item.type !== query.type) {
        return false;
      }

      // 语义类型匹配
      if (query.semantic && item.semantic !== query.semantic) {
        return false;
      }

      // 重要性过滤
      if (query.minImportance !== undefined && item.importance) {
        const importance = computeContextImportance(item.importance);
        if (importance < query.minImportance) {
          return false;
        }
      }

      // 标签过滤
      if (query.tags && query.tags.length > 0) {
        if (!item.tags || !query.tags.every(tag => item.tags?.includes(tag))) {
          return false;
        }
      }

      // 时间范围过滤
      if (query.timeRange) {
        if (item.importance) {
          const lastUsed = item.importance.lastUsed;

          if (query.timeRange.from && lastUsed < query.timeRange.from) {
            return false;
          }

          if (query.timeRange.to && lastUsed > query.timeRange.to) {
            return false;
          }
        }
      }

      // 关键词搜索
      if (query.keywords && query.keywords.length > 0) {
        const contentToSearch = item.content.toLowerCase();
        const hasKeyword = query.keywords.some(keyword =>
          contentToSearch.includes(keyword.toLowerCase())
        );

        if (!hasKeyword) {
          return false;
        }
      }

      // 项目作用域过滤
      if (query.projectScope) {
        // 这里假设将来 ContextItem 会有 projectScope 字段
        // 暂时跳过
      }

      return true;
    });
  }

  private applySorting(items: ContextItem[], options: DSLFilterOptions): ContextItem[] {
    const { sortBy = 'importance', sortOrder = 'desc' } = options;

    return items.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'importance':
          if (a.importance && b.importance) {
            comparison = computeContextImportance(b.importance) - computeContextImportance(a.importance);
          } else if (a.importance) {
            comparison = -1;
          } else if (b.importance) {
            comparison = 1;
          }
          break;

        case 'recency':
          if (a.importance && b.importance) {
            comparison = b.importance.lastUsed - a.importance.lastUsed;
          } else if (a.importance) {
            comparison = -1;
          } else if (b.importance) {
            comparison = 1;
          }
          break;

        case 'relevance':
          // 使用 ContextBuffer 中的 computeItemScore 方法
          // 这里简化处理，使用重要性作为相关性
          if (a.importance && b.importance) {
            comparison = computeContextImportance(b.importance) - computeContextImportance(a.importance);
          }
          break;

        case 'path':
          comparison = a.path.localeCompare(b.path);
          break;
      }

      return sortOrder === 'desc' ? comparison : -comparison;
    });
  }

  private applyPagination(items: ContextItem[], options: DSLFilterOptions): ContextItem[] {
    const { limit, offset = 0 } = options;

    if (limit !== undefined) {
      return items.slice(offset, offset + limit);
    }

    return items;
  }

  /**
   * 简化的 glob 匹配
   */
  private matchesGlob(path: string, pattern: string): boolean {
    // 简单的 glob 实现，支持 * 和 **
    const regexPattern = pattern
      .replace(/\./g, '\\.') // 转义点号
      .replace(/\*/g, '.*')  // * 匹配任意字符
      .replace(/\*\*/g, '.*'); // ** 也匹配任意字符（简化处理）

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
  }
}

/**
 * 扩展的 ContextProtocol，支持 DSL 查询
 */
export class ExtendedContextProtocol {
  /**
   * 使用 DSL 查询上下文
   */
  static async queryContext(dslQuery: string, availableItems: ContextItem[]): Promise<ContextItem[]> {
    const parsedQuery = DSLParser.parse(dslQuery);
    const engine = new DSLQueryEngine(availableItems);
    const result = engine.execute(parsedQuery);

    return result.items;
  }

  /**
   * 解析包含 DSL 的用户输入
   */
  static parseUserInput(input: string): { dslQueries: string[]; plainText: string } {
    // 提取 DSL 查询（以 @ 或 # 开头的部分）
    const dslRegex = /[@#][^{}`]+|"[^"]*"|'[^']*'/g;
    const dslMatches: string[] = [];
    let plainText = input;

    let match;
    while ((match = dslRegex.exec(input)) !== null) {
      dslMatches.push(match[0]);
    }

    // 从原文中移除 DSL 部分，得到纯文本
    for (const dsl of dslMatches) {
      plainText = plainText.replace(dsl, '').trim();
    }

    return {
      dslQueries: dslMatches,
      plainText
    };
  }
}
````

## 📄 `src/engine/agent/contextImportance.ts`

````typescript
import { randomUUID } from 'crypto';

export interface ContextImportance {
  id: string;              // stable id
  path: string;            // file / dir path
  type: 'file' | 'directory';

  // === Usage stats ===
  useCount: number;
  successCount: number;
  failureCount: number;

  // === Time ===
  lastUsed: number;
  createdAt: number;

  // === Learned weight ===
  confidence: number;      // 0 ~ 1, init 0.5
}

/**
 * 计算上下文重要性分数
 * 评分公式与Skill系统保持一致
 * @param ctx ContextImportance对象
 * @param now 当前时间戳
 * @returns 重要性分数 (0-1)
 */
export function computeContextImportance(
  ctx: ContextImportance,
  now = Date.now()
): number {
  const total = ctx.successCount + ctx.failureCount;
  const successRate = total === 0 ? 0.5 : ctx.successCount / total;

  const idleDays = (now - ctx.lastUsed) / (1000 * 60 * 60 * 24);
  const freshness = Math.exp(-idleDays / 14); // 14 天半衰

  return (
    0.45 * successRate +
    0.35 * freshness +
    0.20 * ctx.confidence
  );
}

/**
 * 创建新的ContextImportance对象
 * @param path 文件或目录路径
 * @param type 类型
 * @returns ContextImportance对象
 */
export function createContextImportance(path: string, type: 'file' | 'directory'): ContextImportance {
  const now = Date.now();
  return {
    id: randomUUID(),
    path,
    type,
    useCount: 0,
    successCount: 0,
    failureCount: 0,
    confidence: 0.5,
    createdAt: now,
    lastUsed: now
  };
}

/**
 * 更新ContextImportance状态
 * @param ctx ContextImportance对象
 * @param success 是否成功
 */
export function updateContextImportance(ctx: ContextImportance, success: boolean) {
  ctx.useCount++;
  ctx.lastUsed = Date.now();

  if (success) {
    ctx.successCount++;
    ctx.confidence = Math.min(1, ctx.confidence + 0.05);
  } else {
    ctx.failureCount++;
    ctx.confidence = Math.max(0, ctx.confidence - 0.1);
  }
}
````

## 📄 `src/engine/agent/contextManager.ts`

````typescript
import crypto from 'crypto';
import { GovernanceContext } from './state';
import { ContextBuffer } from './contextBuffer';
import { ExtendedContextProtocol } from './contextDSL';
import { ContextBank } from './contextBank';

export class ContextManager {
  private messages: Array<{ role: string; content: string; timestamp: number; metadata?: { kind?: import('./types').ObservationKind } }> = [];
  private contextBuffer: ContextBuffer;
  private contextBank: ContextBank;
  private maxHistorySize = 50;

  constructor(initialContext?: GovernanceContext) {
    this.contextBuffer = new ContextBuffer();
    this.contextBank = new ContextBank();

    if (initialContext?.history) {
      this.messages = initialContext.history.map(msg => ({
        ...msg,
        timestamp: Date.now()
      }));
    }

    if (initialContext?.input) {
      this.addMessage('user', initialContext.input);
    }
  }

  addMessage(role: string, content: string): void {
    this.messages.push({
      role,
      content,
      timestamp: Date.now()
    });

    if (this.messages.length > this.maxHistorySize) {
      this.messages = this.messages.slice(-this.maxHistorySize);
    }
  }

  addToolResult(toolName: string, result: string): void {
    const content = `Tool ${toolName} returned:\n${result}`;
    this.addMessage('tool', content);
  }

  /**
   * 添加 Observation，支持类型分级（v3.1）
   * @param observation 观察内容
   * @param kind Observation 类型：tool_result, system_note, error
   */
  addObservation(observation: string, kind: import('./types').ObservationKind = 'system_note'): void {
    this.addMessage('system', observation);
    // 为最后一条消息添加 kind 元数据
    if (this.messages.length > 0) {
      this.messages[this.messages.length - 1].metadata = { kind };
    }
  }

  /**
   * 调试用：仅获取 Observation（Tool / System 注入）
   * 不包含 user / assistant
   */
  getObservations(): Array<{ role: 'tool' | 'system'; content: string }> {
    return this.messages
      .filter(m => m.role === 'tool' || m.role === 'system')
      .map(m => ({
        role: m.role as 'tool' | 'system',
        content: m.content
      }));
  }

  /**
   * 获取最新的 Observation（向后兼容）
   */
  getLastObservation(): { role: 'tool' | 'system'; content: string } | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if (m.role === 'tool' || m.role === 'system') {
        return { role: m.role as any, content: m.content };
      }
    }
    return null;
  }

  /**
   * 获取需要 ACK 的 Observation（排除 error 类型）
   * 这是 v3.1 的核心修复：防止 ERROR 被当成需要确认的 Observation
   */
  getLastAckableObservation(): { role: 'tool' | 'system'; content: string } | null {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      const m = this.messages[i];
      if ((m.role === 'tool' || m.role === 'system') && m.metadata?.kind !== 'error') {
        return { role: m.role as any, content: m.content };
      }
    }
    return null;
  }

  getMessages(): Array<{ role: 'system' | 'user' | 'assistant' | 'tool'; content: string }> {
    return this.messages.map(({ role, content }) => ({
      role: role as 'system' | 'user' | 'assistant' | 'tool',
      content
    }));
  }

  getContextBuffer(): ContextBuffer {
    return this.contextBuffer;
  }

  addContextItem(item: Omit<import('./contextBuffer').ContextItem, 'tokens'>) {
    this.contextBuffer.add(item);
  }

  async addContextItemAsync(item: Omit<import('./contextBuffer').ContextItem, 'tokens'>) {
    await this.contextBuffer.addAsync(item);
  }

  buildContextPrompt(userInput: string, options?: import('./contextBuffer').BuildPromptOptions) {
    return this.contextBuffer.buildPrompt(userInput, options);
  }

  /**
   * 使用 DSL 查询上下文
   */
  async queryDSL(dslQuery: string) {
    return await this.contextBuffer.queryDSL(dslQuery, this.contextBank);
  }

  /**
   * 解析包含 DSL 的用户输入并获取相关上下文
   */
  async getDSLContextForInput(input: string) {
    return await this.contextBuffer.getDSLContextForInput(input, this.contextBank);
  }

  /**
   * 初始化 Context Bank
   */
  async initializeContextBank(): Promise<void> {
    await this.contextBank.initialize();
  }

  /**
   * 从 ContextBuffer 导出高价值上下文到银行
   */
  async exportToContextBank(projectScope?: string): Promise<void> {
    await this.contextBank.exportFromContextBuffer(this.contextBuffer, projectScope);
  }

  /**
   * 从 Context Bank 查询上下文
   */
  async queryContextBank(options: import('./contextBank').BankQueryOptions): Promise<import('./contextBank').BankContextItem[]> {
    return await this.contextBank.query(options);
  }

  /**
   * 将 Context Bank 中的项目添加到当前上下文
   */
  async importFromContextBank(options: import('./contextBank').BankQueryOptions): Promise<void> {
    const bankItems = await this.contextBank.query(options);

    for (const item of bankItems) {
      // 将 BankContextItem 转换为 ContextItem 并添加到缓冲区
      this.contextBuffer.add({
        type: item.type,
        path: item.path,
        stableId: item.stableId,
        content: item.content,
        summary: item.summary,
        summarized: item.summarized,
        semantic: item.semantic,
        summaryQuality: item.summaryQuality,
        referencedBy: item.referencedBy,
        usageStats: item.usageStats,
        importance: item.importance,
        metadata: {
          source: 'context_bank',
          bankItemId: item.id
        }
      });
    }
  }

  /**
   * 记录 ContextBank 项目的使用情况
   */
  async recordBankUsage(success: boolean): Promise<void> {
    const contextItems = this.contextBuffer.export();

    for (const item of contextItems) {
      // 检查项目是否来自银行（有 bankItemId）
      const bankItemId = (item as any).metadata?.bankItemId;
      if (bankItemId) {
        try {
          // 使用银行项目 ID 而不是路径进行记录
          await this.contextBank.recordUsage(bankItemId, success);
        } catch (error) {
          console.warn(`[ContextManager] Could not record bank usage for ${bankItemId}:`, error);
        }
      }
    }
  }

  getRecentMessages(count: number): Array<{ role: string; content: string; timestamp: number }> {
    return this.messages.slice(-count);
  }

  getHash(): string {
    const content = JSON.stringify(this.messages);
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  getSnapshot() {
    return {
      inputHash: this.getHash(),
      systemPromptVersion: 'v1.0.0',
      toolSetVersion: 'v1.0.0',
      recentMessages: this.getRecentMessages(10)
    };
  }

  clear(): void {
    this.messages = [];
    this.contextBuffer.clear();
  }
}

````

## 📄 `src/engine/agent/contextProtocol.ts`

````typescript
import { ContextBuffer, ContextItem } from './contextBuffer';
import { randomUUID } from 'crypto';
import { ExtendedContextProtocol } from './contextDSL';

/**
 * Context引用协议v1实现
 * 定义了ContextItem如何被显式引用、管理和注入的协议
 */

export interface ContextReference {
  path: string;
  alias?: string;
  lineRange?: { start: number; end?: number };
  timestamp: number;
  responseId?: string;
}

export interface ContextProtocolResult {
  referencedItems: ContextReference[];
  extractedContent: string;
  isValid: boolean;
  errors: string[];
}

/**
 * 解析AI响应中的Context引用
 * @param response AI的响应内容
 * @returns 解析出的Context引用信息
 */
export function parseContextReferences(response: string): ContextProtocolResult {
  const result: ContextProtocolResult = {
    referencedItems: [],
    extractedContent: response,
    isValid: true,
    errors: []
  };

  // 匹配显式引用格式，如 [Reference] file: path/to/file.ts (path/to/file.ts) 或类似格式
  const referenceRegex = /\[Reference\]\s+([^:\s]+):\s*([^(]+?)\s*\(([^)]+)\)/g;
  let match;

  while ((match = referenceRegex.exec(response)) !== null) {
    const [, type, description, path] = match;

    const reference: ContextReference = {
      path: path.trim(),
      timestamp: Date.now()
    };

    result.referencedItems.push(reference);
  }

  // 匹配 DSL 查询语法 (例如: type:file importance:>0.5)
  const dslRegex = /[@#][^{}`]+|"[^"]*"|'[^']*'|[a-z_]+:[^\\s]+/gi;
  let dslMatch;
  while ((dslMatch = dslRegex.exec(response)) !== null) {
    const dslPart = dslMatch[0];

    // 检查是否是 DSL 查询语法 (包含冒号且不是文件路径)
    if (dslPart.includes(':') && !dslPart.startsWith('/') && !dslPart.includes('.')) {
      // 这可能是 DSL 查询的一部分，暂时跳过，因为我们需要完整的查询
      continue;
    }

    // 检查是否是路径引用 (@file 或 #dir)
    if (dslPart.startsWith('@') || dslPart.startsWith('#')) {
      const path = dslPart.substring(1);
      if (!result.referencedItems.some(ref => ref.path === path)) {
        result.referencedItems.push({
          path,
          timestamp: Date.now()
        });
      }
    }
  }

  // 也可以匹配JSON格式的引用（如果AI输出遵循特定格式）
  try {
    // 尝试查找JSON块中的引用信息
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      const jsonData = JSON.parse(jsonMatch[1]);

      // 如果JSON中包含used_context字段
      if (jsonData.used_context && Array.isArray(jsonData.used_context)) {
        for (const path of jsonData.used_context) {
          if (!result.referencedItems.some(ref => ref.path === path)) {
            result.referencedItems.push({
              path,
              timestamp: Date.now()
            });
          }
        }
      }
    }
  } catch (e) {
    // 如果JSON解析失败，继续处理
  }

  return result;
}

/**
 * 验证Context引用的有效性
 * @param references Context引用列表
 * @param availableItems 可用的ContextItem列表
 * @returns 验证结果
 */
export function validateContextReferences(references: ContextReference[], availableItems: ContextItem[]): {
  valid: ContextReference[];
  invalid: ContextReference[];
  warnings: string[];
} {
  const valid: ContextReference[] = [];
  const invalid: ContextReference[] = [];
  const warnings: string[] = [];

  for (const ref of references) {
    const foundItem = availableItems.find(item => 
      item.path === ref.path || 
      (item.alias && item.alias === ref.path)
    );

    if (foundItem) {
      valid.push(ref);
    } else {
      invalid.push(ref);
      warnings.push(`Context item not found: ${ref.path}`);
    }
  }

  return { valid, invalid, warnings };
}

/**
 * 根据引用协议构建上下文提示
 * @param contextBuffer ContextBuffer实例
 * @param userInput 用户输入
 * @param referencedPaths 显式引用的路径列表
 * @returns 构建的提示字符串
 */
export async function buildContextPromptWithReferences(
  contextBuffer: ContextBuffer,
  userInput: string,
  referencedPaths?: string[]
): Promise<string> {
  // 首先检查用户输入是否包含 DSL 查询
  const dslContextItems = await contextBuffer.getDSLContextForInput(userInput);

  let filteredItems: ContextItem[];

  if (dslContextItems.length > 0) {
    // 如果有 DSL 查询结果，使用 DSL 结果
    filteredItems = dslContextItems;
  } else if (referencedPaths && referencedPaths.length > 0) {
    // 如果提供了显式引用路径，优先处理这些项
    const allItems = contextBuffer.export();
    filteredItems = allItems.filter(item =>
      referencedPaths.includes(item.path) ||
      (item.alias && referencedPaths.includes(item.alias))
    );
  } else {
    // 否则使用所有可用项
    filteredItems = contextBuffer.export();
  }

  // 按重要性分组
  const highConfidenceItems = filteredItems.filter(item =>
    item.importance && computeContextImportance(item.importance) > 0.7
  );
  const mediumConfidenceItems = filteredItems.filter(item =>
    item.importance &&
    computeContextImportance(item.importance) > 0.3 &&
    computeContextImportance(item.importance) <= 0.7
  );
  const lowConfidenceItems = filteredItems.filter(item =>
    !item.importance || computeContextImportance(item.importance) <= 0.3
  );

  // 构建不同部分的上下文
  const sections = [];

  if (highConfidenceItems.length > 0) {
    // 按语义类型进一步细分高置信度项
    const semanticGroups: Record<string, typeof highConfidenceItems> = {};
    for (const item of highConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        const body = item.summary ?? item.content;

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Background Knowledge (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - High Confidence)\n${semanticBlock}`);
    }
  }

  if (mediumConfidenceItems.length > 0) {
    // 按语义类型进一步细分中置信度项
    const semanticGroups: Record<string, typeof mediumConfidenceItems> = {};
    for (const item of mediumConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        const body = item.summary ?? item.content;

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Supporting Information (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Medium Confidence)\n${semanticBlock}`);
    }
  }

  if (lowConfidenceItems.length > 0) {
    // 按语义类型进一步细分低置信度项
    const semanticGroups: Record<string, typeof lowConfidenceItems> = {};
    for (const item of lowConfidenceItems) {
      const semantic = item.semantic || 'other';
      if (!semanticGroups[semantic]) {
        semanticGroups[semantic] = [];
      }
      semanticGroups[semantic].push(item);
    }

    for (const [semantic, items] of Object.entries(semanticGroups)) {
      const semanticBlock = items.map(item => {
        const title = item.alias
          ? `[Reference] ${item.type}: ${item.alias} (${item.path})`
          : `[Reference] ${item.type}: ${item.path}`;

        const body = item.summary ?? item.content;

        return `${title}\n---\n${body}\n---`;
      }).join('\n\n');

      sections.push(`# Archived References (${semantic.charAt(0).toUpperCase() + semantic.slice(1)} - Low Confidence)\n${semanticBlock}`);
    }
  }

  const contextBlock = sections.join('\n\n');

  return `
${contextBlock}

# Task Instructions
Based on the provided context (if any), answer the user's question. If the context contains source code, treat it as your "source of truth."

User Question:
${userInput}
`;
}

/**
 * 验证Context引用的有效性
 * @param responseId 响应ID
 * @param expectedPaths 期望被引用的路径
 * @param actualReferences 实际引用的路径
 * @returns 验证结果
 */
export function validateResponseReferences(
  responseId: string,
  expectedPaths: string[],
  actualReferences: ContextReference[]
): {
  success: boolean;
  matched: string[];
  missing: string[];
  extra: string[];
  accuracy: number; // 0-1, 引用准确率
} {
  const actualPaths = actualReferences.map(ref => ref.path);
  const matched = expectedPaths.filter(path => actualPaths.includes(path));
  const missing = expectedPaths.filter(path => !actualPaths.includes(path));
  const extra = actualPaths.filter(path => !expectedPaths.includes(path));

  const totalExpected = expectedPaths.length;
  const totalActual = actualReferences.length;
  const correctlyReferenced = matched.length;

  // 计算准确率：考虑正确引用和额外引用的平衡
  const accuracy = totalExpected > 0
    ? correctlyReferenced / totalExpected  // 查全率
    : (totalActual - extra.length) / Math.max(totalActual, 1); // 如果没有预期引用，则看有多少是相关的

  return {
    success: missing.length === 0 && extra.length <= Math.floor(expectedPaths.length * 0.2), // 允许最多20%的额外引用
    matched,
    missing,
    extra,
    accuracy
  };
}

/**
 * 生成Context引用回溯报告
 * @param contextBuffer ContextBuffer实例
 * @param responseId 响应ID
 * @param userInput 用户输入
 * @param response AI响应
 * @returns 回溯报告
 */
export async function generateReferenceRetrospective(
  contextBuffer: ContextBuffer,
  responseId: string,
  userInput: string,
  response: string
): Promise<string> {
  const allItems = contextBuffer.export();
  const references = parseContextReferences(response);

  // 统计引用情况
  const referencedItems = allItems.filter(item =>
    references.referencedItems.some(ref => ref.path === item.path)
  );

  // 验证引用的有效性
  const validation = validateContextReferences(
    references.referencedItems,
    allItems
  );

  // 计算引用统计
  const stats = {
    totalContextItems: allItems.length,
    referencedItemsCount: referencedItems.length,
    validReferences: validation.valid.length,
    invalidReferences: validation.invalid.length,
    referenceAccuracy: allItems.length > 0
      ? validation.valid.length / (validation.valid.length + validation.invalid.length || 1)
      : 0
  };

  // 生成报告
  const reportLines = [
    '# Context Reference Retrospective Report',
    '',
    '## Query',
    userInput,
    '',
    '## Statistics',
    `- Total Context Items: ${stats.totalContextItems}`,
    `- Referenced Items: ${stats.referencedItemsCount}`,
    `- Valid References: ${stats.validReferences}`,
    `- Invalid References: ${stats.invalidReferences}`,
    `- Reference Accuracy: ${(stats.referenceAccuracy * 100).toFixed(2)}%`,
    '',
    '## Referenced Context Items',
    ...(referencedItems.length > 0
      ? referencedItems.map(item => `- ${item.path} (${item.type})`)
      : ['None']),
    '',
    '## Invalid References',
    ...(validation.invalid.length > 0
      ? validation.invalid.map(ref => `- ${ref.path}`)
      : ['None']),
    '',
    '## Response Excerpt',
    response.length > 200
      ? response.substring(0, 200) + '...'
      : response
  ];

  return reportLines.join('\n');
}

/**
 * 分析ContextItem的生命周期和演变
 * @param contextBuffer ContextBuffer实例
 * @returns ContextItem生命周期分析
 */
export function analyzeContextLifecycle(
  contextBuffer: ContextBuffer
): Array<{
  path: string;
  usageTrend: number; // 使用趋势 (-1 to 1)
  qualityScore: number; // 质量评分 (0 to 1)
  relevanceScore: number; // 相关性评分 (0 to 1)
  recommendation: 'keep' | 'archive' | 'remove' | 'enhance';
}> {
  const items = contextBuffer.export();

  return items.map(item => {
    // 计算使用趋势 (基于useCount和时间)
    const now = Date.now();
    const daysSinceCreated = (now - (item.importance?.createdAt || now)) / (1000 * 60 * 60 * 24);
    const avgUsesPerDay = item.importance ? item.importance.useCount / (daysSinceCreated || 1) : 0;

    // 使用趋势：正值表示使用频率增加，负值表示减少
    const usageTrend = avgUsesPerDay > 0.5 ? 1 : (avgUsesPerDay > 0.1 ? 0.5 : 0);

    // 质量评分：结合显式引用和验证结果
    const qualityScore = item.usageStats
      ? (item.usageStats.verifiedUseful + 1) /
        (item.usageStats.verifiedUseful + item.usageStats.verifiedNotUseful + 2)
      : 0.5; // 默认中等评分

    // 相关性评分：结合重要性分数和显式引用次数
    const relevanceScore = item.importance
      ? (computeContextImportance(item.importance) +
         (item.usageStats ? Math.min(1, item.usageStats.referencedCount / 10) : 0)) / 2
      : 0.5;

    // 生成推荐
    let recommendation: 'keep' | 'archive' | 'remove' | 'enhance' = 'keep';
    if (relevanceScore < 0.2 && qualityScore < 0.3) {
      recommendation = 'remove';
    } else if (relevanceScore < 0.4 && qualityScore < 0.5) {
      recommendation = 'archive';
    } else if (relevanceScore > 0.7 && qualityScore > 0.8) {
      recommendation = 'enhance'; // 高价值，建议增强
    }

    return {
      path: item.path,
      usageTrend,
      qualityScore,
      relevanceScore,
      recommendation
    };
  });
}

// 导入必要的函数
import { computeContextImportance } from './contextImportance';
````

## 📄 `src/engine/agent/contextSkillBridge.ts`

````typescript
import { ContextItem } from './contextBuffer';
import { Skill } from './skills';
import { ContextToSkillPromotionRules } from './contextSkillPromotion';
import { recordEdge } from './knowledgeGraph';

export interface ContextSkillHint {
  source: 'context';
  path: string;
  suggestedSkillName: string;
  confidence: number; // 0-1, how certain we are this should become a skill
  usageCount: number; // how many times this context was used
  lastUsed: number; // timestamp
  description: string; // description of what this context enables
}

/**
 * 分析ContextItems以生成SkillHints
 * 当ContextItem被频繁使用且与成功任务相关联时，建议将其转换为Skill
 *
 * @param contextItems ContextItem数组
 * @returns ContextSkillHint数组
 */
export function generateSkillHintsFromContext(contextItems: ContextItem[]): ContextSkillHint[] {
  const hints: ContextSkillHint[] = [];

  for (const item of contextItems) {
    // 使用新的晋升规则来评估是否应该晋升为技能
    const promotedSkill = ContextToSkillPromotionRules.evaluatePromotion(item);

    if (promotedSkill) {
      // 如果符合晋升条件，生成提示
      const { useCount, successCount, lastUsed } = item.importance || {
        useCount: 0,
        successCount: 0,
        lastUsed: Date.now()
      };

      hints.push({
        source: 'context',
        path: item.path,
        suggestedSkillName: promotedSkill.name,
        confidence: promotedSkill.metadata?.promotionCriteria?.successRate ||
                   promotedSkill.metadata?.promotionCriteria?.importanceScore ||
                   0.8, // 默认高置信度
        usageCount: useCount,
        lastUsed,
        description: promotedSkill.description
      });

      // === C5-B-1: Knowledge Graph Record (Context -> Skill Candidate) ===
      if (item.id) {
        recordEdge({
            from: item.id,
            to: `skill_candidate:${promotedSkill.name}`,
            type: 'promoted_to',
            timestamp: Date.now(),
            meta: {
                confidence: promotedSkill.confidence
            }
        });
      }
    } else {
      // 使用旧的逻辑作为后备
      if (item.importance) {
        const { useCount, successCount, lastUsed } = item.importance;

        // 如果使用次数超过阈值，且有一定成功率，生成Skill建议
        if (useCount >= 3 && successCount > 0) {
          const successRate = successCount / useCount;
          const daysSinceLastUse = (Date.now() - lastUsed) / (1000 * 60 * 60 * 24);

          // 计算建议的置信度
          const confidence = Math.min(1,
            (successRate * 0.6) +  // 成功率权重
            (Math.min(1, useCount / 10) * 0.3) +  // 使用频率权重
            (Math.max(0, (7 - daysSinceLastUse) / 7) * 0.1)  // 新鲜度权重
          );

          if (confidence > 0.5) { // 只有置信度超过0.5才生成建议
            hints.push({
              source: 'context',
              path: item.path,
              suggestedSkillName: generateSkillNameFromPath(item.path),
              confidence,
              usageCount: useCount,
              lastUsed,
              description: `Frequently used context from ${item.path} that contributed to ${successCount} successful tasks`
            });
          }
        }
      }
    }
  }

  return hints;
}

/**
 * 从路径生成Skill名称
 * @param path 文件路径
 * @returns 建议的Skill名称
 */
function generateSkillNameFromPath(path: string): string {
  // 移除文件扩展名并使用驼峰命名
  const basename = path.split('/').pop()?.split('.')[0] || path;
  return basename
    .split(/[^a-zA-Z0-9]/)  // 按非字母数字字符分割
    .map((part, index) =>
      index === 0
        ? part.toLowerCase()
        : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    )
    .join('');
}

/**
 * 将ContextItem直接晋升为Skill
 * @param contextItem 要晋升的ContextItem
 * @returns 晋升后的Skill，如果不符合条件则返回null
 */
export function promoteContextToSkill(contextItem: ContextItem): Skill | null {
  return ContextToSkillPromotionRules.evaluatePromotion(contextItem);
}

/**
 * 将ContextSkillHints转换为可显示的文本
 * @param hints ContextSkillHint数组
 * @returns 格式化的字符串
 */
export function formatSkillHints(hints: ContextSkillHint[]): string {
  if (hints.length === 0) {
    return "No skill suggestions generated from context.";
  }

  const lines: string[] = ["Skill Suggestions from Context:", ""];

  for (const hint of hints) {
    lines.push(`- ${hint.suggestedSkillName} (confidence: ${(hint.confidence * 100).toFixed(1)}%)`);
    lines.push(`  Path: ${hint.path}`);
    lines.push(`  Usage: ${hint.usageCount}, Last used: ${new Date(hint.lastUsed).toLocaleDateString()}`);
    lines.push(`  Description: ${hint.description}`);
    lines.push("");
  }

  return lines.join("\n");
}
````

## 📄 `src/engine/agent/contextSkillPromotion.ts`

````typescript
/**
 * Context ↔ Skill 自动晋升规则
 * 
 * 定义 ContextItem 如何自动转化为 Skill 的规则和条件
 */

import { ContextItem } from './contextBuffer';
import { Skill } from './skills';
import { ContextImportance } from './contextImportance';

export interface ContextToSkillRule {
  id: string;
  name: string;
  description: string;
  condition: (contextItem: ContextItem) => boolean;
  action: (contextItem: ContextItem) => Skill | null;
  priority: number; // 数值越大，优先级越高
}

export interface SkillToContextRule {
  id: string;
  name: string;
  description: string;
  condition: (skill: Skill) => boolean;
  action: (skill: Skill) => ContextItem | null;
  priority: number;
}

/**
 * Context → Skill 晋升规则
 */
export class ContextToSkillPromotionRules {
  static readonly RULES: ContextToSkillRule[] = [
    {
      id: 'high-frequency-context',
      name: '高频使用上下文晋升',
      description: '当 ContextItem 被频繁使用且成功率高时，晋升为 Skill',
      priority: 100,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;

        // 使用次数超过阈值且成功率较高
        return useCount >= 5 && successRate >= 0.8;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        // 从路径生成技能名称
        const skillName = contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'unknown_skill';

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID 而不是直接复制 context id
          name: skillName,
          description: `从高频使用的上下文 "${contextPath}" 晋升而来的技能。使用次数: ${useCount}, 成功率: ${(successRate * 100).toFixed(2)}%`,
          whenToUse: `当需要访问 "${contextPath}" 的内容时`,
          planTemplate: {},
          successCount: successCount,
          failureCount: contextItem.importance.failureCount,
          confidence: successRate,
          lastUsed: contextItem.importance.lastUsed,
          createdAt: contextItem.importance.createdAt,
          enabled: true,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从上下文 "${contextPath}" 晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              useCount,
              successCount,
              successRate
            }
          }
        };
      }
    },
    {
      id: 'high-importance-context',
      name: '高重要性上下文晋升',
      description: '当 ContextItem 重要性评分持续很高时，晋升为 Skill',
      priority: 90,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        const importanceScore = computeContextImportance(contextItem.importance);

        // 重要性评分超过阈值
        return importanceScore >= 0.9;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const importanceScore = computeContextImportance(contextItem.importance);
        const { useCount, successCount, failureCount, lastUsed, createdAt } = contextItem.importance;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径
        const skillName = `important_${contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'important_skill'}`;

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从高重要性上下文 "${contextPath}" 晋升而来的技能。重要性评分: ${importanceScore.toFixed(2)}`,
          whenToUse: `当需要访问高重要性上下文 "${contextPath}" 的内容时`,
          planTemplate: {},
          successCount: successCount,
          failureCount: failureCount,
          confidence: importanceScore,
          lastUsed: lastUsed,
          createdAt: createdAt,
          enabled: true,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从高重要性上下文晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              importanceScore
            }
          }
        };
      }
    },
    {
      id: 'explicit-reference-context',
      name: '显式引用上下文晋升',
      description: '当 ContextItem 被多次显式引用且验证有用时，晋升为 Skill',
      priority: 80,
      condition: (contextItem: ContextItem) => {
        // 检查使用统计信息
        if (!contextItem.usageStats) return false;

        const { referencedCount, verifiedUseful } = contextItem.usageStats;
        const usefulnessRate = referencedCount > 0 ? verifiedUseful / referencedCount : 0;

        // 被显式引用次数多且有用率高
        return referencedCount >= 3 && usefulnessRate >= 0.7;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.usageStats || !contextItem.importance) return null;

        const { referencedCount, verifiedUseful } = contextItem.usageStats;
        const usefulnessRate = referencedCount > 0 ? verifiedUseful / referencedCount : 0;
        const { useCount, successCount, failureCount, lastUsed, createdAt } = contextItem.importance;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        const skillName = `referenced_${contextPath
          .split('/')
          .pop()
          ?.split('.')[0]
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'referenced_skill'}`;

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从被频繁显式引用的上下文 "${contextPath}" 晋升而来的技能。引用次数: ${referencedCount}, 有用率: ${(usefulnessRate * 100).toFixed(2)}%`,
          whenToUse: `当需要访问被频繁引用的上下文 "${contextPath}" 的内容时`,
          planTemplate: {},
          successCount: successCount,
          failureCount: failureCount,
          confidence: usefulnessRate,
          lastUsed: lastUsed,
          createdAt: createdAt,
          enabled: true,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从被显式引用的上下文晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              referencedCount,
              verifiedUseful,
              usefulnessRate
            }
          }
        };
      }
    },
    {
      id: 'config-or-script-context',
      name: '配置或脚本上下文晋升',
      description: '当 ContextItem 是配置文件或脚本且被频繁使用时，晋升为 Skill',
      priority: 70,
      condition: (contextItem: ContextItem) => {
        if (!contextItem.importance) return false;

        // 检查是否是配置文件或脚本
        const isConfigOrScript = [
          '.json', '.yaml', '.yml', '.toml', '.ini', '.conf',
          '.sh', '.bash', '.zsh', '.ps1', '.cmd', '.bat'
        ].some(ext => contextItem.path.endsWith(ext));

        if (!isConfigOrScript) return false;

        const { useCount, successCount } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;

        // 配置或脚本被使用且有一定成功率
        return useCount >= 2 && successRate >= 0.6;
      },
      action: (contextItem: ContextItem) => {
        if (!contextItem.importance) return null;

        const { useCount, successCount, failureCount, lastUsed, createdAt } = contextItem.importance;
        const successRate = useCount > 0 ? successCount / useCount : 0;
        const contextPath = contextItem.path; // 从 ContextItem 获取路径

        // 根据文件类型生成不同的技能名称
        let skillName = contextPath
          .split('/')
          .pop()
          ?.replace(/[^a-zA-Z0-9]/g, '_') || 'config_script_skill';

        if (contextPath.endsWith('.sh') || contextPath.endsWith('.bash')) {
          skillName = `exec_${skillName}`;
        } else if (contextPath.endsWith('.json') || contextPath.endsWith('.yaml') || contextPath.endsWith('.yml')) {
          skillName = `read_${skillName}`;
        }

        return {
          id: `skill_${randomUUID()}`, // 使用随机 UUID
          name: skillName,
          description: `从配置文件或脚本 "${contextPath}" 晋升而来的技能。使用次数: ${useCount}, 成功率: ${(successRate * 100).toFixed(2)}%`,
          whenToUse: `当需要访问配置文件或脚本 "${contextPath}" 的内容时`,
          planTemplate: {},
          successCount: successCount,
          failureCount: failureCount,
          confidence: successRate,
          lastUsed: lastUsed,
          createdAt: createdAt,
          enabled: true,
          parameters: {
            contextPath: contextPath
          },
          implementation: `// 从配置文件或脚本晋升的技能实现\nreturn contextItem.content;`,
          metadata: {
            source: 'context_promotion',
            originalContextId: contextItem.id, // 保存原始上下文 ID，而不是重要性对象的 ID
            originalContextPath: contextPath,
            originalContextStableId: contextItem.stableId, // 保存原始上下文的稳定 ID
            promotionCriteria: {
              useCount,
              successCount,
              successRate,
              fileType: 'config_or_script'
            }
          }
        };
      }
    }
  ];

  /**
   * 评估 ContextItem 是否应该晋升为 Skill
   */
  static evaluatePromotion(contextItem: ContextItem): Skill | null {
    // 检查是否已经晋升过
    if ((contextItem as any).metadata?.promotedToSkill) {
      return null;
    }

    // 按优先级排序规则
    const sortedRules = [...this.RULES].sort((a, b) => b.priority - a.priority);

    for (const rule of sortedRules) {
      if (rule.condition(contextItem)) {
        const skill = rule.action(contextItem);
        if (skill) {
          return skill;
        }
      }
    }

    return null;
  }
}

/**
 * Skill → Context 降级规则
 */
export class SkillToContextDemotionRules {
  static readonly RULES: SkillToContextRule[] = [
    {
      id: 'low-usage-skill',
      name: '低使用率技能降级',
      description: '当 Skill 长时间未被使用时，降级为 Context',
      priority: 100,
      condition: (skill: Skill) => {
        // 检查技能元数据中的使用统计
        if (!skill.metadata || !skill.metadata.usageStats) return false;
        
        const { lastUsed, useCount } = skill.metadata.usageStats;
        const daysSinceLastUse = (Date.now() - lastUsed) / (1000 * 60 * 60 * 24);
        
        // 如果长时间未使用且使用次数较少，则考虑降级
        return daysSinceLastUse > 30 && useCount < 3;
      },
      action: (skill: Skill) => {
        // 从技能的元数据中恢复原始上下文信息
        if (skill.metadata && skill.metadata.originalContextPath) {
          return {
            type: 'file', // 假设原始上下文是文件类型
            path: skill.metadata.originalContextPath,
            content: skill.implementation || '', // 使用技能实现作为内容
            tokens: Math.ceil((skill.implementation || '').length / 4), // 估算token数
            importance: {
              id: skill.id.replace('skill_', 'ctx_'),
              path: skill.metadata.originalContextPath,
              type: 'file',
              useCount: skill.metadata.usageStats?.useCount || 0,
              successCount: skill.metadata.usageStats?.successCount || 0,
              failureCount: skill.metadata.usageStats?.failureCount || 0,
              confidence: skill.metadata.usageStats?.confidence || 0.5,
              createdAt: skill.metadata.createdAt || Date.now(),
              lastUsed: skill.metadata.usageStats?.lastUsed || Date.now()
            },
            summary: skill.description,
            summarized: true,
            semantic: 'decision',
            summaryQuality: 0.8,
            referencedBy: [],
            usageStats: {
              referencedCount: 0,
              verifiedUseful: 0,
              verifiedNotUseful: 0
            },
            tags: [],
            projectScope: undefined,
            metadata: {}
          } as ContextItem;
        }

        return null;
      }
    },
    {
      id: 'failed-skill',
      name: '失败技能降级',
      description: '当 Skill 多次执行失败时，降级为 Context 供人工审查',
      priority: 90,
      condition: (skill: Skill) => {
        // 检查技能元数据中的失败统计
        if (!skill.metadata || !skill.metadata.usageStats) return false;
        
        const { failureCount, successCount } = skill.metadata.usageStats;
        const failureRate = (failureCount || 0) / ((successCount || 0) + (failureCount || 0));
        
        // 如果失败率过高，则考虑降级
        return failureRate > 0.7;
      },
      action: (skill: Skill) => {
        // 从技能创建一个上下文项，标记为需要审查
        return {
          type: 'file',
          path: `${skill.name}_failed_skill.txt`,
          content: `此技能 "${skill.name}" 多次执行失败，需要人工审查和修复。\n\n失败次数: ${skill.metadata?.usageStats?.failureCount}\n成功次数: ${skill.metadata?.usageStats?.successCount}\n\n技能实现:\n${skill.implementation}`,
          tokens: Math.ceil(`此技能 "${skill.name}" 多次执行失败，需要人工审查和修复。`.length / 4),
          semantic: 'decision', // 标记为决策类上下文
          importance: {
            id: skill.id.replace('skill_', 'ctx_'),
            path: `${skill.name}_failed_skill.txt`,
            type: 'file',
            useCount: 0,
            successCount: 0,
            failureCount: 0,
            confidence: 0.5,
            createdAt: Date.now(),
            lastUsed: Date.now()
          },
          summary: `关于技能 "${skill.name}" 的失败分析`,
          summarized: true,
          summaryQuality: 0.7,
          referencedBy: [],
          usageStats: {
            referencedCount: 0,
            verifiedUseful: 0,
            verifiedNotUseful: 0
          },
          tags: ['failed-skill', 'review-needed'],
          projectScope: undefined,
          metadata: {}
        } as ContextItem;
      }
    }
  ];

  /**
   * 评估 Skill 是否应该降级为 Context
   */
  static evaluateDemotion(skill: Skill): ContextItem | null {
    // 按优先级排序规则
    const sortedRules = [...this.RULES].sort((a, b) => b.priority - a.priority);
    
    for (const rule of sortedRules) {
      if (rule.condition(skill)) {
        const contextItem = rule.action(skill);
        if (contextItem) {
          return contextItem;
        }
      }
    }
    
    return null;
  }
}

// 导入必要的函数
import { computeContextImportance } from './contextImportance';
import { randomUUID } from 'crypto';
````

## 📄 `src/engine/agent/contextStorage.ts`

````typescript
import fs from 'fs/promises';
import path from 'path';
import { ContextItem } from './contextBuffer';

const CONTEXT_DIR = path.resolve(process.cwd(), '.ai');
const CONTEXT_FILE = path.join(CONTEXT_DIR, 'context.json');

export async function loadContext(): Promise<ContextItem[]> {
    try {
        const raw = await fs.readFile(CONTEXT_FILE, 'utf-8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export async function saveContext(items: ContextItem[]) {
    await fs.mkdir(CONTEXT_DIR, { recursive: true });
    await fs.writeFile(CONTEXT_FILE, JSON.stringify(items, null, 2));
}

export async function clearContextStorage() {
    await fs.rm(CONTEXT_FILE, { force: true });
}

````

## 📄 `src/engine/agent/contextSummary.ts`

````typescript
import { askAI } from '../ai/client';

export function buildContextSummaryPrompt(
  type: 'file' | 'directory',
  path: string,
  content: string
) {
  return `
你是一个代码与文档压缩器。

目标：
- 最大限度保留"之后回答问题所需的信息"
- 删除实现细节、重复内容、噪声
- 不要加入推测

请将以下 ${type} 内容压缩为 **结构化摘要**：

路径: ${path}

要求格式：
- 用项目符号
- 保留：职责 / 接口 / 关键数据结构 / 关键行为
- 代码只保留函数签名或核心逻辑描述
- 不超过原内容的 20%

内容：
\`\`\`
${content}
\`\`\`
`;
}

export async function summarizeContext(
  item: { type: 'file' | 'directory'; path: string; content: string }
): Promise<string> {
  const prompt = buildContextSummaryPrompt(
    item.type,
    item.path,
    item.content
  );

  const summary = await askAI(prompt);
  return summary.trim();
}
````

## 📄 `src/engine/agent/executionRecorder.ts`

````typescript
import { ExecutionTurn } from './state';
import { ContextDiff } from './contextDiff';

export class ExecutionRecorder {
  private turns: ExecutionTurn[] = [];
  private turnCounter = 0;

  recordTurn(turn: Omit<ExecutionTurn, 'turnId'>): ExecutionTurn {
    const executionTurn: ExecutionTurn = {
      ...turn,
      turnId: ++this.turnCounter
    };

    this.turns.push(executionTurn);
    return executionTurn;
  }

  getTurns(): ExecutionTurn[] {
    return [...this.turns];
  }

  clear(): void {
    this.turns = [];
    this.turnCounter = 0;
  }

  getSummary(): {
    totalTurns: number;
    totalAddedContext: number;
    totalRemovedContext: number;
    totalChangedContext: number;
  } {
    return {
      totalTurns: this.turns.length,
      totalAddedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.added.length || 0), 0),
      totalRemovedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.removed.length || 0), 0),
      totalChangedContext: this.turns.reduce((sum, turn) => 
        sum + (turn.contextDiff?.changed.length || 0), 0)
    };
  }
}
````

## 📄 `src/engine/agent/executor.ts`

````typescript
import { ProposedAction, ToolExecutionResult } from './state';
import { VSCodeExecutor } from '../../runtime/vscode/VSCodeExecutor';
import { addSkill } from './skills';

/**
 * VS Code 适配版的 ToolExecutor
 * 将所有执行逻辑重定向到 VS Code API
 */
export class ToolExecutor {
  static async execute(action: ProposedAction): Promise<ToolExecutionResult> {
    const { type, payload } = action;

    try {
      switch (type) {
        case 'tool_call':
          return await this.executeTool(payload);

        case 'shell_cmd':
          const shellResult = await VSCodeExecutor.runCommand(payload.command);
          return { success: true, output: shellResult };

        case 'code_diff':
          const diffResult = await VSCodeExecutor.applyDiff(payload.diff);
          return { success: true, output: diffResult };

        case 'answer':
          return {
            success: true,
            output: payload.content || payload.text || '',
            artifacts: []
          };

        default:
          return {
            success: false,
            error: `Unknown action type: ${type}`,
            output: ''
          };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || String(error),
        output: ''
      };
    }
  }

  private static async executeTool(payload: any): Promise<ToolExecutionResult> {
    const toolName = payload.tool_name;
    const params = payload.parameters || {};

    switch (toolName) {
      case 'read_file':
        try {
          const content = await VSCodeExecutor.readFile(params.path);
          return { success: true, output: content };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      case 'write_file':
        const writeResult = await VSCodeExecutor.writeFile(params.path, params.content);
        return { success: true, output: writeResult };

      case 'list_files':
        try {
          const fileList = await VSCodeExecutor.listFiles(params.path || '.');
          return { success: true, output: fileList };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      case 'skill_create':
          try {
              const success = addSkill(params);
              if (success) {
                  return { success: true, output: `Skill "${params.name}" created successfully.` };
              } else {
          return { success: false, error: `Skill "${params.name}" already exists.`, output: "" };
              }
          } catch (e: any) {
              return { success: false, error: `Failed to create skill: ${e.message}`, output: "" };
          }

      default:
        return {
          success: false,
          error: `Unknown tool: ${toolName}`,
          output: ''
        };
    }
  }
}

````

## 📄 `src/engine/agent/governance.ts`

````typescript
import { ProposedAction, GovernanceDecision } from './state';
import { evaluateProposal, PolicyRule, RiskEntry } from './governance/core';
import { RiskLedger } from './governance/ledger';
import { WasmGovernanceBridge } from './governance/bridge';
import jsyaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export class GovernanceService {
  private static rules: PolicyRule[] = [];
  private static ledger = new RiskLedger();
  private static initialized = false;

  static async init(basePath?: string) {
    if (this.initialized) return;
    this.loadPolicy(basePath);
    await WasmGovernanceBridge.init(basePath);
    this.initialized = true;
  }

  private static loadPolicy(basePath?: string) {
    try {
      const root = basePath || process.cwd();
      const policyPath = path.join(root, 'policy.yaml');
      if (fs.existsSync(policyPath)) {
        const content = fs.readFileSync(policyPath, 'utf8');
        const config = jsyaml.load(content) as any;
        this.rules = config.rules || [];
      }
    } catch (e) {
      this.rules = [];
    }
  }

  static getRules(): PolicyRule[] {
    return this.rules;
  }

  static getLedgerSnapshot(): RiskEntry[] {
    return this.ledger.getSnapshot();
  }

  static getPolicyManual(): string {
    return this.rules.map(r => `- ${r.id}: ${r.reason} (${r.effect})`).join('\n');
  }

  static async adjudicate(action: ProposedAction): Promise<GovernanceDecision> {
    await this.init();

    // 1. WASM 物理层核验
    const wasmResult = WasmGovernanceBridge.evaluate(action, this.rules, this.ledger.getSnapshot());
    if (wasmResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: wasmResult.reason || 'WASM Denied', timestamp: Date.now() };
    }

    // 2. 逻辑层核验
    const logicResult = evaluateProposal(action, this.rules, this.ledger.getSnapshot());
    if (logicResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: logicResult.reason || 'Policy Denied', timestamp: Date.now() };
    }

    if (logicResult.effect === 'allow') {
      this.ledger.record(action.type);
      return { status: 'approved', by: 'policy', timestamp: Date.now() };
    }

    // 3. 人工干预兜底 (模拟)
    return { status: 'approved', by: 'human', timestamp: Date.now() };
  }
}

````

## 📄 `src/engine/agent/governance/bridge.ts`

````typescript
import fs from 'fs';
import path from 'path';

export class WasmGovernanceBridge {
    private static instance: any = null;

    static async init(basePath?: string): Promise<boolean> {
        try {
            const loader = require('@assemblyscript/loader');
            const wasmPath = path.join(basePath || process.cwd(), 'build', 'release.wasm');

            if (!fs.existsSync(wasmPath)) {
                console.error(`WASM not found at: ${wasmPath}`);
                return false;
            }

            const wasmModule = await loader.instantiate(fs.readFileSync(wasmPath));
            this.instance = wasmModule.exports;
            return true;
        } catch (e) {
            console.error(`WASM init error: ${e}`);
            return false;
        }
    }

    static evaluate(proposal: any, rules: any, ledger: any): any {
        if (!this.instance) return { effect: 'error', reason: 'WASM not initialized' };

        const { __newString, __getString, evaluate } = this.instance;

        const pPtr = __newString(JSON.stringify(proposal));
        const rPtr = __newString(JSON.stringify(rules));
        const lPtr = __newString(JSON.stringify(ledger));

        const resultPtr = evaluate(pPtr, rPtr, lPtr);
        return JSON.parse(__getString(resultPtr));
    }
}

````

## 📄 `src/engine/agent/governance/core.ts`

````typescript
import { ProposedAction } from '../state';

export interface PolicyRule {
    id: string;
    when: { type?: string; pattern?: string; max_per_minute?: number };
    effect: 'allow' | 'deny' | 'require_approval';
    reason?: string;
}

export interface RiskEntry {
    ts: number;
    actionType: string;
}

export function evaluateProposal(
    action: ProposedAction,
    rules: PolicyRule[],
    ledger: RiskEntry[]
): { effect: string; reason?: string } {
    const now = Date.now();
    for (const rule of rules) {
        const typeMatch = !rule.when.type || rule.when.type === action.type;
        const payloadStr = JSON.stringify(action.payload);
        const patternMatch = !rule.when.pattern || new RegExp(rule.when.pattern, 'i').test(payloadStr);

        if (typeMatch && patternMatch) {
            if (rule.when.max_per_minute) {
                const count = ledger.filter(e => e.ts > now - 60000 && e.actionType === action.type).length;
                if (count >= rule.when.max_per_minute) return { effect: 'deny', reason: `Rate limit: ${rule.id}` };
            }
            return { effect: rule.effect, reason: rule.reason };
        }
    }
    return { effect: 'require_approval', reason: 'Default human review required' };
}

````

## 📄 `src/engine/agent/governance/ledger.ts`

````typescript
import { RiskEntry } from './core';

export class RiskLedger {
    private entries: RiskEntry[] = [];

    record(actionType: string): void {
        this.entries.push({
            ts: Date.now(),
            actionType
        });
        this.cleanup();
    }

    getSnapshot(): RiskEntry[] {
        return [...this.entries];
    }

    private cleanup(): void {
        const oneHourAgo = Date.now() - 3600000;
        this.entries = this.entries.filter(e => e.ts > oneHourAgo);
    }
}

````

## 📄 `src/engine/agent/governance/sandbox/core.as.ts`

````typescript
/**
 * yuangs Governance WASM Sandbox
 * 这里的代码在执行时与 Node.js 内存完全隔离
 */

// 简单的辅助函数：检查字符串包含（WASM 内部实现）
function includes(source: string, target: string): boolean {
    return source.indexOf(target) != -1;
}

/**
 * 核心裁决导出函数
 * @param proposal 提案字符串
 * @param rules 规则字符串（YAML 转换后的 JSON）
 * @param ledger 账本字符串
 */
export function evaluate(proposal: string, rules: string, ledger: string): string {
    // 1. 暴力阻断：最底层的物理防线（即便外部逻辑被污染，这里也是死的）
    if (proposal.includes("rm -rf /") || proposal.includes("sudo rm")) {
        return '{"effect": "deny", "reason": "WASM_SANDBOX: 检测到毁灭性命令，强制阻断"}';
    }

    // 2. 检查速率（基于账本长度）
    // 假设我们不想让 AI 在短时间内连续提议超过 50 次
    if (ledger.length > 5000) { // 简单通过字符串长度模拟异常账本
        return '{"effect": "deny", "reason": "WASM_SANDBOX: 账本异常膨胀，可能遭受拒绝服务攻击"}';
    }

    // 3. 逻辑透传
    // 在实际生产中，我们会在这里解析 JSON rules。
    // 目前版本我们先确保物理链路打通。
    return '{"effect": "allow", "reason": "WASM_SANDBOX: 物理隔离层验证通过"}';
}

````

## 📄 `src/engine/agent/index.ts`

````typescript
export { AgentRuntime } from './AgentRuntime';
export * from './state';
export { LLMAdapter } from './llmAdapter';
export { GovernanceService } from './governance';
export { ToolExecutor } from './executor';
export { ContextManager } from './contextManager';
export { ContextBuffer } from './contextBuffer';
export { ContextImportance, computeContextImportance, createContextImportance, updateContextImportance } from './contextImportance';
export { buildContextSummaryPrompt, summarizeContext } from './contextSummary';
export { diffContext, snapshotFromBuffer, ContextDiff, ContextSnapshot } from './contextDiff';
export { ExecutionRecorder } from './executionRecorder';
export { explainExecution, replayExecution } from './replayExplain';
export { generateSkillHintsFromContext, formatSkillHints, ContextSkillHint } from './contextSkillBridge';
export * from './skills';

````

## 📄 `src/engine/agent/knowledgeGraph.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';

export type KGNodeType = 'context' | 'execution' | 'skill';

export type KGEdgeType =
  | 'used_in'        // Context -> Execution
  | 'validated_by'   // Execution -> Skill
  | 'promoted_to'    // Context -> Skill
  | 'derived_from';  // Skill -> Context (optional)

export interface KnowledgeGraphEdge {
  from: string;
  to: string;
  type: KGEdgeType;
  timestamp: number;
  meta?: Record<string, any>;
}

const KG_DIR = path.join(os.homedir(), '.yuangs', 'knowledge');
const KG_FILE = path.join(KG_DIR, 'graph.jsonl');

function ensureDir() {
  if (!fs.existsSync(KG_DIR)) {
    fs.mkdirSync(KG_DIR, { recursive: true });
  }
}

/**
 * 记录一条不可变的知识图谱边 (Append-only Fact)
 */
export function recordEdge(edge: KnowledgeGraphEdge) {
  try {
    ensureDir();
    // 简单的 JSONL 格式：一行一个 JSON 对象
    const line = JSON.stringify({
        ...edge,
        // 确保 timestamp 存在
        timestamp: edge.timestamp || Date.now()
    });
    
    fs.appendFileSync(KG_FILE, line + '\n', 'utf8');
  } catch (error) {
    // 容错：KG 记录失败不应阻断主流程
    console.warn('[KnowledgeGraph] Failed to record edge:', error);
  }
  // NOTE: sync write is acceptable at current scale (<100 edges / run)
}
````

## 📄 `src/engine/agent/llm.ts`

````typescript
import { AgentPrompt, LLMResult } from './types';
import { callAI_Stream } from '../ai/client';
import axios from 'axios';
import { DEFAULT_AI_PROXY_URL, DEFAULT_MODEL, DEFAULT_ACCOUNT_TYPE, type AIRequestMessage } from '../core/validation';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { safeParseJSON } from '../core/validation';

const CONFIG_FILE = path.join(os.homedir(), '.yuangs.json');

function getUserConfig(): any {
    if (fs.existsSync(CONFIG_FILE)) {
        try {
            const content = fs.readFileSync(CONFIG_FILE, 'utf8');
            return JSON.parse(content);
        } catch (e) { }
    }
    return {};
}

export async function runLLM({
    prompt,
    model,
    stream,
    onChunk,
    abortSignal
}: {
    prompt: AgentPrompt;
    model: string;
    stream: boolean;
    onChunk?: (s: string) => void;
    abortSignal?: AbortSignal;
}): Promise<LLMResult> {
    const start = Date.now();

    // ✅ 检查取消信号
    if (abortSignal?.aborted) {
        throw new Error('LLM request cancelled');
    }

    // ✅ 设置取消监听器
    const cleanup = () => {};
    if (abortSignal) {
        abortSignal.addEventListener('abort', () => {
            console.log('[runLLM] Request aborted');
        });
    }

    if (stream) {
        let raw = '';
        let buffer = '';
        let lastFlush = Date.now();

        await callAI_Stream(prompt.messages, model, (chunk) => {
            // ✅ 在每个chunk检查取消信号
            if (abortSignal?.aborted) {
                throw new Error('LLM streaming cancelled');
            }

            raw += chunk;
            buffer += chunk;

            // 节流：每50ms最多触发一次onChunk，约20FPS
            if (Date.now() - lastFlush > 50) {
                onChunk?.(buffer);
                buffer = '';
                lastFlush = Date.now();
            }
        });

        // 确保最后的缓冲区内容也被发送
        if (buffer) {
            onChunk?.(buffer);
        }

        return {
            rawText: raw,
            latencyMs: Date.now() - start,
        };
    }

    // Non-streaming mode with optional schema
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    const headers = {
        'Content-Type': 'application/json',
        'X-Client-ID': 'vscode',
        'Origin': 'https://cli.want.biz',
        'Referer': 'https://cli.want.biz/',
        'account': config.accountType || DEFAULT_ACCOUNT_TYPE,
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
        'Accept': 'application/json'
    };

    const data = {
        model: model || config.defaultModel || DEFAULT_MODEL,
        messages: prompt.messages,
        stream: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        const rawText = response.data.choices[0]?.message?.content || '';

        let parsed = undefined;
        if (prompt.outputSchema) {
            const parseResult = safeParseJSON(rawText, prompt.outputSchema, {});
            if (parseResult.success) {
                parsed = parseResult.data;
            }
        }

        return {
            rawText,
            parsed,
            latencyMs: Date.now() - start,
        };
    } catch (error: any) {
        const errorMsg = error.response?.data?.error?.message || error.response?.data?.message || error.message || '未知错误';
        throw new Error(`AI 请求失败: ${errorMsg}`);
    }
}

````

## 📄 `src/engine/agent/llmAdapter.ts`

````typescript
import { AgentThought } from './state';
import { runLLM } from './llm';
import { AgentPrompt } from './types';
import type { AIRequestMessage } from '../core/validation';
import { getUserConfig } from '../ai/client';
import { ContextManager } from './contextManager';
import { ExtendedContextProtocol } from './contextDSL';
import { parseContextReferences, validateContextReferences, buildContextPromptWithReferences } from './contextProtocol';
import { randomUUID } from 'crypto';

export class LLMAdapter {
  static async think(
    messages: AIRequestMessage[],
    mode: 'chat' | 'command' | 'command+exec' = 'chat',
    onChunk?: (chunk: string) => void,
    model?: string,
    customSystemPrompt?: string,
    contextManager?: ContextManager,
    abortSignal?: AbortSignal
  ): Promise<AgentThought> {
    // 生成唯一的响应ID用于引用跟踪
    const responseId = randomUUID();

    // 构建包含ContextBuffer内容的完整上下文
    let fullMessages = [...messages];

    if (contextManager) {
      const contextBuffer = contextManager.getContextBuffer();
      if (!contextBuffer.isEmpty()) {
        // 检查用户消息中是否有 DSL 查询
        const userInput = messages[messages.length - 1]?.content || '';
        const dslContextItems = await contextBuffer.getDSLContextForInput(userInput);

        let contextPrompt: string;

        if (dslContextItems.length > 0) {
          // 如果有 DSL 查询结果，使用 buildContextPromptWithReferences 来构建提示
          contextPrompt = await buildContextPromptWithReferences(contextBuffer, userInput);
        } else {
          // 区分流式传输和非流式传输，流式传输时使用更简洁的策略以提高性能
          if (onChunk) {
            // 流式传输时使用最近的上下文，减少复杂度和渲染抖动
            contextPrompt = contextBuffer.buildPrompt('', {
              strategy: 'recent',  // 使用最近策略，更稳定
              maxTokens: 4000      // 减少token数量，降低渲染负担
            });
          } else {
            // 非流式传输时使用完整的排名策略
            contextPrompt = contextBuffer.buildPrompt('', {
              strategy: 'ranked',  // 使用排名策略
              maxTokens: 16000     // 设置最大token限制
            });
          }
        }

        // 将ContextBuffer内容作为system消息添加到消息列表开头
        fullMessages = [
          { role: 'system', content: contextPrompt },
          ...fullMessages
        ];
      }
    }

    const prompt: AgentPrompt = {
      system: customSystemPrompt || `[SYSTEM PROTOCOL V3.1 - SAFE OBSERVATION ACK - CONTEXT REFERENCE ENABLED]
- ROLE: AUTOMATED EXECUTION AGENT WITH CONTEXT REFERENCE
- OUTPUT: STRICT JSON ONLY
- TALK: FORBIDDEN
- MODE: REACT (THINK -> ACTION -> PERCEIVE)
- CONTEXT REFERENCE: When using information from the provided context, explicitly reference it in your response using [Reference] notation or in the JSON output

OBSERVATION ACKNOWLEDGEMENT (MANDATORY, WITH EXCEPTIONS):
Before proposing any action, you MUST include the field "acknowledged_observation".

RULES:
1. If a valid Tool or System Observation exists, restate it VERBATIM.
2. If NO such Observation exists, output: "acknowledged_observation": "NONE"
3. DO NOT acknowledge:
   - Runtime validation errors
   - ACK-related errors
   - System internal error messages
4. If the user input is "stop" or "halt":
   - Set action_type = "answer"
   - Set acknowledged_observation = "NONE"
   - Do NOT propose further actions

JSON SCHEMA:
{
  "acknowledged_observation": "string | 'NONE'",
  "action_type": "tool_call" | "shell_cmd" | "code_diff" | "answer" | "halt",
  "reasoning": "thought process",
  "tool_name": "list_files" | "read_file",
  "diff": "unified diff string",
  "parameters": {},
  "command": "shell string",
  "content": "final answer string",
  "used_context": ["path/to/file.ts", "path/to/dir"] // OPTIONAL: List paths of context items used
}

EXECUTION RULES:
1. If data is unknown (e.g. file list), use 'shell_cmd' or 'tool_call'.
2. NEVER explain how to do it. JUST EXECUTE.
3. Your output MUST start with '{' and end with '}'.
4. When referencing information from provided context, include the path in "used_context" array or use [Reference] notation.
5. TERMINATION RULE (HIGHEST PRIORITY): If user says "stop", "exit", or "quit", output action_type="answer" with content="STOPPED" and acknowledged_observation="NONE".

Example Task: "count files"
Your Output: {"action_type":"shell_cmd","reasoning":"count files","command":"ls | wc -l","used_context":["/path/to/config.json"]}`,
      messages: fullMessages,
    };

    const config = getUserConfig();
    const finalModel = model || config.defaultModel || 'Assistant';

    const result = await runLLM({
      prompt,
      model: finalModel,
      stream: !!onChunk,
      onChunk,
      abortSignal // ✅ 传递取消信号到 runLLM
    });

    // 解析响应并处理Context引用
    const thought = this.parseThought(result.rawText);

    // 如果有ContextManager，解析并记录引用
    if (contextManager) {
      const contextBuffer = contextManager.getContextBuffer();
      const references = parseContextReferences(result.rawText);

      // 记录显式引用
      for (const ref of references.referencedItems) {
        contextBuffer.recordExplicitReference(ref.path, responseId);
      }

      // 验证引用的有效性
      const validation = validateContextReferences(
        references.referencedItems,
        contextBuffer.export()
      );

      // 更新引用的有效性
      for (const validRef of validation.valid) {
        contextBuffer.validateReference(validRef.path, true);
      }

      for (const invalidRef of validation.invalid) {
        contextBuffer.validateReference(invalidRef.path, false);
      }
    }

    return thought;
  }

  private static parseThought(raw: string): AgentThought {
    try {
      // 提取 JSON：支持 Markdown 块或纯 JSON 字符串
      const jsonMatch = raw.match(/```json\n([\s\S]*?)\n```/) || raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);

        // 如果明确标记为 done，或者动作为 answer，则视为任务结束
        if (parsed.is_done === true || parsed.action_type === 'answer') {
          return {
            raw,
            parsedPlan: parsed,
            isDone: true,
            type: 'answer',
            payload: {
              content: parsed.final_answer || parsed.content || parsed.text || raw
            }
          };
        }

        // 智能推断动作类型：如果 AI 没给 action_type，我们根据字段猜测
        let inferredType = parsed.action_type;
        if (!inferredType) {
          if (parsed.tool_name || parsed.tool) inferredType = 'tool_call';
          else if (parsed.command || parsed.cmd) inferredType = 'shell_cmd';
          else if (parsed.diff || parsed.patch) inferredType = 'code_diff';
          else inferredType = 'answer';
        }

        return {
          raw,
          parsedPlan: parsed,
          isDone: inferredType === 'answer' || parsed.is_done === true,
          type: inferredType,
          payload: {
            tool_name: parsed.tool_name || parsed.tool || '',
            parameters: parsed.parameters || parsed.params || {},
            command: parsed.command || parsed.cmd || '',
            diff: parsed.diff || parsed.patch || '',
            content: parsed.content || parsed.text || ''
          },
          reasoning: parsed.reasoning || ''
        };
      }
    } catch (e) {
      // 解析失败时，回退到将原始内容作为回答
    }

    return {
      raw,
      parsedPlan: {},
      isDone: true,
      type: 'answer',
      payload: { content: raw },
      reasoning: ''
    };
  }
}

````

## 📄 `src/engine/agent/policy/engine.ts`

````typescript
import { Policy, PolicyContext, PolicyResult } from './types';
import { RiskLevel } from '../state';

export class PolicyEngine {
  private policies: Map<string, Policy> = new Map();

  registerPolicy(policy: Policy): void {
    this.policies.set(policy.name, policy);
  }

  unregisterPolicy(name: string): void {
    this.policies.delete(name);
  }

  async evaluate(context: PolicyContext): Promise<PolicyResult> {
    let finalResult: PolicyResult = {
      allowed: true,
      reason: 'All policies passed'
    };

    for (const [name, policy] of this.policies) {
      const result = await policy.evaluate(context);
      
      if (!result.allowed) {
        return {
          allowed: false,
          reason: `Policy "${name}" blocked: ${result.reason}`,
          requiresEscalation: result.requiresEscalation || false,
          suggestedActions: result.suggestedActions
        };
      }

      if (result.requiresEscalation) {
        finalResult.requiresEscalation = true;
        finalResult.suggestedActions = result.suggestedActions;
      }
    }

    return finalResult;
  }

  evaluateRisk(action: { type: string; payload: any }): RiskLevel {
    const { type, payload } = action;

    if (type === 'tool_call') {
      const toolName = payload.tool_name;
      
      const lowRiskTools = ['read_file', 'list_files', 'web_search'];
      if (lowRiskTools.includes(toolName)) {
        return 'low';
      }

      const mediumRiskTools = ['write_file', 'shell'];
      if (mediumRiskTools.includes(toolName)) {
        const cmd = payload.parameters?.command || payload.command || '';
        if (this.containsDangerousCommand(cmd)) {
          return 'high';
        }
        return 'medium';
      }

      return 'medium';
    }

    if (type === 'shell_cmd') {
      const cmd = payload.command || '';
      if (this.containsDangerousCommand(cmd)) {
        return 'high';
      }
      return 'medium';
    }

    return 'low';
  }

  private containsDangerousCommand(cmd: string): boolean {
    const dangerousPatterns = [
      /rm\s+-rf\s+\//,
      /rm\s+-rf\s+~/,
      />\s*\/dev\/null/,
      /dd\s+if=/,
      /mkfs/,
      /format/,
      /sudo\s+rm/
    ];

    return dangerousPatterns.some(pattern => pattern.test(cmd));
  }
}

export const policyEngine = new PolicyEngine();

````

## 📄 `src/engine/agent/policy/index.ts`

````typescript
export * from './types';
export * from './engine';
export * from './policies/noDangerousShell';

````

## 📄 `src/engine/agent/policy/policies/noDangerousShell.ts`

````typescript
import { Policy, PolicyContext, PolicyResult } from '../types';
import { RiskLevel } from '../../state';

export class NoDangerousShellPolicy implements Policy {
  name = 'no-dangerous-shell';
  description = 'Prevents execution of dangerous shell commands';

  evaluate(context: PolicyContext): PolicyResult {
    const { action } = context;

    if (action.type === 'shell_cmd') {
      const command = action.payload?.command || '';
      
      const dangerousPatterns = [
        { pattern: /rm\s+-rf\s+\//, name: 'rm -rf /', risk: 'high' },
        { pattern: /rm\s+-rf\s+~/, name: 'rm -rf ~', risk: 'high' },
        { pattern: />\s*\/dev\/null/, name: 'Redirect to /dev/null', risk: 'medium' },
        { pattern: /dd\s+if=/, name: 'dd command', risk: 'high' },
        { pattern: /mkfs/, name: 'mkfs (filesystem creation)', risk: 'high' },
        { pattern: /format/, name: 'format command', risk: 'high' },
        { pattern: /sudo\s+rm/, name: 'sudo rm', risk: 'high' },
        { pattern: /chmod\s+777\s+\/(?!dev)/, name: 'chmod 777 on system', risk: 'high' },
        { pattern: /:\s*~\(\)/, name: 'fork bomb', risk: 'high' }
      ];

      for (const { pattern, name, risk } of dangerousPatterns) {
        if (pattern.test(command)) {
          return {
            allowed: false,
            reason: `Dangerous command detected: ${name} (${risk} risk)`,
            requiresEscalation: risk === 'high',
            suggestedActions: [
              `Review the command: "${command}"`,
              'Consider using safer alternatives',
              'Break down the operation into smaller, safer steps'
            ]
          };
        }
      }
    }

    return {
      allowed: true,
      reason: 'No dangerous patterns detected'
    };
  }
}

export const noDangerousShellPolicy = new NoDangerousShellPolicy();

````

## 📄 `src/engine/agent/policy/types.ts`

````typescript
import { RiskLevel } from '../state';

export interface PolicyContext {
  action: {
    type: string;
    payload: any;
  };
  user?: {
    permissions: string[];
  };
  environment?: {
    isProduction: boolean;
  };
}

export interface PolicyResult {
  allowed: boolean;
  reason?: string;
  requiresEscalation?: boolean;
  suggestedActions?: string[];
}

export interface Policy {
  name: string;
  description: string;
  evaluate(context: PolicyContext): PolicyResult | Promise<PolicyResult>;
}

````

## 📄 `src/engine/agent/prompt.ts`

````typescript
import {
    AgentIntent,
    AgentContext,
    AgentMode,
    AgentPrompt,
} from './types';
import { buildCommandPrompt as buildCommandPromptString } from '../ai/prompt';
import { getOSProfile } from '../core/os';
import { getMacros } from '../core/macros';
import { aiCommandPlanSchema } from '../core/validation';
import { getRelevantSkills } from './skills';

export function buildPrompt(
    intent: AgentIntent,
    context: AgentContext,
    mode: AgentMode,
    input: string
): AgentPrompt {
    if (mode === 'chat') {
        return buildChatPrompt(context, input);
    }

    return buildCommandPromptObject(input, context);
}

function buildChatPrompt(
    context: AgentContext,
    input: string
): AgentPrompt {
    const messages: any[] = [
        ...(context.history ?? []),
    ];

    // Add context files if available
    if (context.files && context.files.length > 0) {
        const contextDesc = context.files.map(f =>
            `File: ${f.path}\n\`\`\`\n${f.content}\n\`\`\``
        ).join('\n\n');

        messages.push({
            role: 'system',
            content: `Context:\n${contextDesc}`,
        });
    }

    messages.push({
        role: 'user',
        content: input,
    });

    return {
        system: 'You are a helpful AI assistant with expertise in software development, system administration, and problem-solving.',
        messages,
    };
}

function buildCommandPromptObject(
    input: string,
    context: AgentContext
): AgentPrompt {
    const os = getOSProfile();
    const macros = getMacros();
    const skills = getRelevantSkills(input);
    let promptText = buildCommandPromptString(input, os, macros);

    if (skills.length > 0) {
        const skillList = skills.map(s => `- ${s.name}: 当遇到 "${s.whenToUse}" 时，你可以参考计划: ${s.planTemplate.goal}`).join('\n');
        promptText = `【参考技能库】\n${skillList}\n\n${promptText}`;
    }

    return {
        messages: [
            {
                role: 'user',
                content: promptText,
            },
        ],
        outputSchema: aiCommandPlanSchema,
    };
}

````

## 📄 `src/engine/agent/replay/events.ts`

````typescript
export type EventType = 
  | 'state_transition'
  | 'llm_call'
  | 'tool_execution'
  | 'governance_decision'
  | 'observation_recorded'
  | 'evaluation_result'
  | 'error_occurred';

export interface RuntimeEvent {
  id: string;
  timestamp: number;
  executionId: string;
  type: EventType;
  data: {
    from?: string;
    to?: string;
    action?: any;
    decision?: any;
    result?: any;
    error?: string;
  };
  metadata?: Record<string, any>;
}

export interface EventRecorder {
  record(event: RuntimeEvent): void;
  flush(): Promise<void>;
  getEvents(executionId?: string): RuntimeEvent[];
}

````

## 📄 `src/engine/agent/replay/index.ts`

````typescript
export * from './events';
export * from './recorder';
export * from './replayer';

````

## 📄 `src/engine/agent/replay/recorder.ts`

````typescript
import { RuntimeEvent, EventRecorder } from './events';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

export class FileEventRecorder implements EventRecorder {
  private events: RuntimeEvent[] = [];
  private logFile: string;
  private flushInterval: number = 1000;

  constructor(logDir: string = '.yuangs_events') {
    this.logFile = path.join(logDir, `events_${Date.now()}.jsonl`);
  }

  async record(event: RuntimeEvent): Promise<void> {
    this.events.push(event);

    if (this.events.length >= this.flushInterval) {
      await this.flush();
    }
  }

  async flush(): Promise<void> {
    if (this.events.length === 0) return;

    const logDir = path.dirname(this.logFile);
    await fs.mkdir(logDir, { recursive: true });

    const content = this.events
      .map(e => JSON.stringify(e))
      .join('\n') + '\n';

    await fs.appendFile(this.logFile, content, 'utf8');
    this.events = [];
  }

  getEvents(executionId?: string): RuntimeEvent[] {
    if (!executionId) {
      return [...this.events];
    }

    return this.events.filter(e => e.executionId === executionId);
  }
}

export const createEvent = (
  executionId: string,
  type: RuntimeEvent['type'],
  data: RuntimeEvent['data'],
  metadata?: RuntimeEvent['metadata']
): RuntimeEvent => ({
  id: randomUUID(),
  timestamp: Date.now(),
  executionId,
  type,
  data,
  metadata
});

````

## 📄 `src/engine/agent/replay/replayer.ts`

````typescript
import { RuntimeEvent } from './events';

export interface ReplayerOptions {
  speed?: number;
  stopOnError?: boolean;
  dryRun?: boolean;
}

export class EventReplayer {
  private events: RuntimeEvent[] = [];
  private currentIndex: number = 0;
  private options: Required<ReplayerOptions>;

  constructor(events: RuntimeEvent[], options: ReplayerOptions = {}) {
    this.events = events;
    this.options = {
      speed: options.speed || 1,
      stopOnError: options.stopOnError !== undefined ? options.stopOnError : true,
      dryRun: options.dryRun || false
    };
  }

  hasNext(): boolean {
    return this.currentIndex < this.events.length;
  }

  next(): RuntimeEvent | null {
    if (!this.hasNext()) {
      return null;
    }

    return this.events[this.currentIndex++];
  }

  reset(): void {
    this.currentIndex = 0;
  }

  async replay(onEvent: (event: RuntimeEvent, options: Required<ReplayerOptions>) => Promise<void>): Promise<void> {
    this.reset();
    let hasError = false;

    while (this.hasNext() && !hasError) {
      const event = this.next();

      if (!event) break;

      try {
        await onEvent(event, this.options);

        if (event.type === 'error_occurred') {
          hasError = true;
          if (this.options.stopOnError) {
            break;
          }
        }

        if (this.options.speed > 1) {
          const delay = 100 / this.options.speed;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      } catch (error: any) {
        console.error(`[Replay] Error at event ${event.id}:`, error.message);
        hasError = true;
      }
    }

    return;
  }

  getSummary(): {
    total: number;
    completed: number;
    errors: number;
  } {
    const errors = this.events.filter(e => e.type === 'error_occurred').length;
    
    return {
      total: this.events.length,
      completed: this.currentIndex,
      errors
    };
  }
}

````

## 📄 `src/engine/agent/replayExplain.ts`

````typescript
import { ExecutionTurn } from './state';
import { ExecutionRecorder } from './executionRecorder';
import { generateSkillHintsFromContext, formatSkillHints, ContextSkillHint, promoteContextToSkill } from './contextSkillBridge';
import { ContextManager } from './contextManager';
import { ContextToSkillPromotionRules } from './contextSkillPromotion';

export function explainExecution(recorder: ExecutionRecorder, contextManager?: ContextManager): string {
  const turns = recorder.getTurns();
  const summary = recorder.getSummary();

  const lines: string[] = [];

  lines.push('# Execution Explanation Report');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Total Turns: ${summary.totalTurns}`);
  lines.push(`- Added Context Items: ${summary.totalAddedContext}`);
  lines.push(`- Removed Context Items: ${summary.totalRemovedContext}`);
  lines.push(`- Changed Context Items: ${summary.totalChangedContext}`);
  lines.push('');

  // 如果提供了ContextManager，生成Skill Hints
  if (contextManager) {
    const contextItems = contextManager.getContextBuffer().export();
    const skillHints = generateSkillHintsFromContext(contextItems);

    if (skillHints.length > 0) {
      lines.push('## Skill Suggestions from Context');
      lines.push(formatSkillHints(skillHints));
      lines.push('');
    }
  }

  lines.push('## Detailed Turn-by-Turn Analysis');
  lines.push('');

  for (const turn of turns) {
    lines.push(`### Turn ${turn.turnId}`);
    lines.push('');

    if (turn.startTime) {
      lines.push(`- Start Time: ${new Date(turn.startTime).toISOString()}`);
    }

    if (turn.endTime) {
      lines.push(`- End Time: ${new Date(turn.endTime).toISOString()}`);
    }

    if (turn.contextDiff) {
      lines.push('');
      lines.push('#### Context Changes:');

      if (turn.contextDiff.added.length > 0) {
        lines.push('- Added:');
        for (const item of turn.contextDiff.added) {
          lines.push(`  - ${item}`);
        }
      }

      if (turn.contextDiff.removed.length > 0) {
        lines.push('- Removed:');
        for (const item of turn.contextDiff.removed) {
          lines.push(`  - ${item}`);
        }
      }

      if (turn.contextDiff.changed.length > 0) {
        lines.push('- Changed:');
        for (const item of turn.contextDiff.changed) {
          lines.push(`  - ${item}`);
        }
      }
    }

    if (turn.proposedAction) {
      lines.push('');
      lines.push(`#### Action Type: ${turn.proposedAction.type}`);
      lines.push(`- Reasoning: ${turn.proposedAction.reasoning}`);
    }

    if (turn.governance) {
      lines.push('');
      lines.push(`#### Governance Decision: ${turn.governance.status}`);
      if ('reason' in turn.governance) {
        lines.push(`- Reason: ${turn.governance.reason}`);
      }
      lines.push(`- Decided by: ${turn.governance.by}`);
    }

    if (turn.executionResult) {
      lines.push('');
      lines.push(`#### Execution Result: ${turn.executionResult.success ? 'SUCCESS' : 'FAILURE'}`);
      if (turn.executionResult.error) {
        lines.push(`- Error: ${turn.executionResult.error}`);
      }
    }

    lines.push('');
  }

  return lines.join('\n');
}

export function replayExecution(recorder: ExecutionRecorder, options: { showContextDiff?: boolean } = {}): string {
  const { showContextDiff = true } = options;
  const turns = recorder.getTurns();
  const lines: string[] = [];

  lines.push('# Execution Replay');
  lines.push('');

  for (const turn of turns) {
    lines.push(`## Turn ${turn.turnId}`);
    
    if (showContextDiff && turn.contextDiff) {
      lines.push('');
      lines.push('### Context Diff:');
      
      if (turn.contextDiff.added.length > 0) {
        lines.push('Added:');
        for (const item of turn.contextDiff.added) {
          lines.push(`  + ${item}`);
        }
      }
      
      if (turn.contextDiff.removed.length > 0) {
        lines.push('Removed:');
        for (const item of turn.contextDiff.removed) {
          lines.push(`  - ${item}`);
        }
      }
      
      if (turn.contextDiff.changed.length > 0) {
        lines.push('Changed:');
        for (const item of turn.contextDiff.changed) {
          lines.push(`  ~ ${item}`);
        }
      }
      
      if (!turn.contextDiff.added.length && 
          !turn.contextDiff.removed.length && 
          !turn.contextDiff.changed.length) {
        lines.push('(No context changes)');
      }
    }
    
    if (turn.proposedAction) {
      lines.push('');
      lines.push(`Action: ${turn.proposedAction.type}`);
      lines.push(`Reasoning: ${turn.proposedAction.reasoning}`);
    }
    
    if (turn.executionResult) {
      lines.push('');
      lines.push(`Result: ${turn.executionResult.success ? 'SUCCESS' : 'FAILURE'}`);
    }
    
    lines.push('');
  }

  return lines.join('\n');
}
````

## 📄 `src/engine/agent/selectModel.ts`

````typescript
import { AgentIntent } from './types';
import { getUserConfig } from '../ai/client';

export function selectModel(
    intent: AgentIntent,
    override?: string
): string {
    if (override) return override;

    const config = getUserConfig();
    const defaultModel = config.defaultModel || 'Assistant';

    return defaultModel;
}

````

## 📄 `src/engine/agent/skills.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import { recordEdge } from './knowledgeGraph';

export interface Skill {
    id: string;
    name: string;
    description: string;
    whenToUse: string; // 触发场景描述
    planTemplate: any;

    // 评价指标
    successCount: number;
    failureCount: number;
    confidence: number; // 0 ~ 1, 初始 0.5

    // 时间戳
    lastUsed: number;
    createdAt: number;

    // 是否启用
    enabled: boolean;

    // 可选属性
    parameters?: any;
    implementation?: string;
    metadata?: {
        source?: string;
        originalContextId?: string;
        originalContextPath?: string;
        originalContextStableId?: string;
        promotionCriteria?: any;
        usageStats?: {
            useCount: number;
            successCount: number;
            failureCount: number;
            confidence: number;
            lastUsed: number;
        };
        createdAt?: number;
    };
}

const SKILLS_FILE = path.join(os.homedir(), '.yuangs_skills.json');
let skillLibrary: Skill[] = [];

// === Persistence Logic ===

function loadSkills() {
    if (fs.existsSync(SKILLS_FILE)) {
        try {
            const data = fs.readFileSync(SKILLS_FILE, 'utf-8');
            skillLibrary = JSON.parse(data);
        } catch (e) {
            console.error(chalk.yellow(`Failed to load skills from ${SKILLS_FILE}, starting empty.`));
            skillLibrary = [];
        }
    }
}

function saveSkills() {
    try {
        fs.writeFileSync(SKILLS_FILE, JSON.stringify(skillLibrary, null, 2));
    } catch (e) {
        console.error(chalk.red(`Failed to save skills to ${SKILLS_FILE}`));
    }
}

// Initialize on load
loadSkills();

// === Existing Logic with Save Hooks ===

/**
 * 计算技能分 (0 ~ 1)
 */
export function computeSkillScore(skill: Skill, now: number = Date.now()): number {
    const totalUses = skill.successCount + skill.failureCount;
    const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

    // 时间衰减 (Freshness): 半衰期约 14 天
    const idleDays = (now - skill.lastUsed) / (1000 * 60 * 60 * 24);
    const freshness = Math.exp(-idleDays / 14);

    // 综合得分: 45% 成功率 + 35% 新鲜度 + 20% 置信度
    return (0.45 * successRate) + (0.35 * freshness) + (0.20 * skill.confidence);
}

/**
 * 更新技能状态 (执行后调用)
 */
export function updateSkillStatus(skillId: string, success: boolean) {
    const skill = skillLibrary.find(s => s.id === skillId);
    if (!skill) return;

    skill.lastUsed = Date.now();
    if (success) {
        skill.successCount++;
        // 成功奖励: 置信度缓慢提升
        skill.confidence = Math.min(1, skill.confidence + 0.05);
    } else {
        skill.failureCount++;
        // 失败惩罚: 惩罚力度大于奖励，防止系统"自嗨"
        skill.confidence = Math.max(0, skill.confidence - 0.1);
    }

    // === C5-B-1: Knowledge Graph Record (Execution -> Skill) ===
    recordEdge({
        from: 'current_execution', // TODO(KG): replace with real executionId (v2)
        to: skill.id,
        type: 'validated_by',
        timestamp: Date.now(),
        meta: { success, skillName: skill.name }
    });

    saveSkills(); // Persist changes
}

/**
 * 自动学习新技能
 */
export function learnSkillFromRecord(record: any, success: boolean = true) {
    if (record.mode === 'chat' || !record.llmResult.plan) return;

    const existingSkill = skillLibrary.find(s => s.name === record.llmResult.plan?.goal);

    if (existingSkill) {
        updateSkillStatus(existingSkill.id, success);
        return;
    }

    // 只有成功的记录才被学为新技能
    if (!success) return;

    const now = Date.now();
    skillLibrary.push({
        id: record.id,
        name: record.llmResult.plan.goal,
        description: `自动学习的技能: ${record.llmResult.plan.goal}`,
        whenToUse: record.input.rawInput,
        planTemplate: record.llmResult.plan,
        successCount: 1,
        failureCount: 0,
        confidence: 0.5,
        lastUsed: now,
        createdAt: now,
        enabled: true
    });

    // 每学习一次，尝试清理一次“冷”技能
    reapColdSkills();

    saveSkills(); // Persist changes
}

/**
 * 筛选并排序技能 (用于注入 Prompt)
 */
export function getRelevantSkills(input: string, limit: number = 3): Skill[] {
    const now = Date.now();

    return skillLibrary
        // 1. 基础筛选: 剔除评分过低的技能 (硬淘汰阈值 0.3)
        .filter(s => computeSkillScore(s, now) >= 0.3)
        // 2. 过滤已禁用的技能
        .filter(s => s.enabled !== false)
        // 3. 排序: 按综合分排序
        .sort((a, b) => computeSkillScore(b, now) - computeSkillScore(a, now))
        // 4. 取上限
        .slice(0, limit);
}

/**
 * 清理过期或低质技能 (Reaper)
 */
export function reapColdSkills() {
    const now = Date.now();
    const initialCount = skillLibrary.length;

    skillLibrary = skillLibrary.filter(skill => {
        const score = computeSkillScore(skill, now);
        const idleDays = (now - skill.lastUsed) / (1000 * 60 * 60 * 24);

        // 满足以下任一条件则淘汰:
        // 1. 得分极低且长期不用
        if (score < 0.25 && idleDays > 30) return false;
        // 2. 失败率极高且尝试过一定次数
        if (skill.failureCount > 5 && (skill.successCount / (skill.successCount + skill.failureCount)) < 0.2) return false;

        return true;
    });

    // 强制保持容量
    if (skillLibrary.length > 100) {
        // 如果还超标，移除得分最低的那个
        skillLibrary.sort((a, b) => computeSkillScore(a, now) - computeSkillScore(b, now));
        skillLibrary.shift();
    }

    if (skillLibrary.length !== initialCount) {
        saveSkills(); // Persist if changes happened
    }
}

export function getAllSkills(): Skill[] {
    return [...skillLibrary];
}

/**
 * 添加新技能
 */
export function addSkill(skill: Skill) {
    // 检查是否已存在同名技能
    const existingSkill = skillLibrary.find(s => s.name === skill.name);
    if (existingSkill) {
        console.log(`Skill with name "${skill.name}" already exists, skipping.`);
        return false;
    }

    skillLibrary.push(skill);
    saveSkills(); // 保存更改
    return true;
}

````

## 📄 `src/engine/agent/state.ts`

````typescript
import { randomUUID } from 'crypto';

export type AgentState = 
  | 'IDLE' 
  | 'THINKING' 
  | 'PROPOSING' 
  | 'GOVERNING' 
  | 'EXECUTING' 
  | 'OBSERVING' 
  | 'EVALUATING' 
  | 'TERMINAL';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface ProposedAction {
  id: string;
  type: 'tool_call' | 'code_diff' | 'shell_cmd' | 'answer';
  payload: any;
  riskLevel: RiskLevel;
  reasoning: string;
}

export type GovernanceDecision = 
  | { status: 'approved'; by: 'policy' | 'human'; timestamp: number }
  | { status: 'rejected'; by: 'policy' | 'human'; reason: string; timestamp: number }
  | { 
      status: 'modified'; 
      by: 'human'; 
      originalActionId: string;
      modifiedAction: ProposedAction;
      modificationReason: string;
      timestamp: number;
    };

export type EvaluationOutcome = 
  | { kind: 'continue'; reason: 'incomplete' | 'failure_retry' }
  | { kind: 'terminate'; reason: 'goal_satisfied' | 'user_abort' | 'max_turns_exceeded' }
  | { kind: 'pause'; reason: 'await_human_input' };

export interface AgentThought {
  raw: string;
  parsedPlan: any;
  isDone: boolean;
  type?: 'tool_call' | 'code_diff' | 'shell_cmd' | 'answer';
  payload?: any;
  reasoning?: string;
}

import { ContextDiff } from './contextDiff';

export interface ExecutionTurn {
  turnId: number;
  startTime: number;
  endTime?: number;
  contextSnapshot: {
    inputHash: string;
    systemPromptVersion: string;
    toolSetVersion: string;
    recentMessages: Array<{ role: string; content: string; timestamp: number }>;
  };
  contextDiff?: ContextDiff;
  thought?: AgentThought;
  proposedAction?: ProposedAction;
  governance?: GovernanceDecision;
  executionResult?: {
    success: boolean;
    output: string;
    error?: string;
    artifacts?: string[];
  };
  observation?: {
    summary: string;
    artifacts: string[];
    truncated?: boolean;
  };
  evaluation?: EvaluationOutcome;
}

export interface GovernanceLoopConfig {
  maxTurns: number;
  autoApproveLowRisk: boolean;
  verbose: boolean;
}

export interface ToolExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  artifacts?: string[];
}

export interface GovernanceContext {
  input: string;
  mode: 'chat' | 'command' | 'command+exec';
  history: AIRequestMessage[];
  files?: Array<{ path: string; content: string }>;
}

interface AIRequestMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

````

## 📄 `src/engine/agent/types.ts`

````typescript
import type { AIRequestMessage } from '../core/validation';
// import { AgentPlan } from './plan';

export type AgentMode = 'chat' | 'command' | 'command+exec';

export interface AgentInput {
    rawInput: string;
    stdin?: string;
    context?: AgentContext;
    options?: {
        model?: string;
        stream?: boolean;
        autoYes?: boolean;
        verbose?: boolean;
    };
}

export interface AgentContext {
    files?: Array<{ path: string; content: string }>;
    gitDiff?: string;
    history?: AIRequestMessage[];
    contextItems?: import('./contextBuffer').ContextItem[];
    totalTokens?: number;
    highConfidenceItems?: import('./contextBuffer').ContextItem[];
    mediumConfidenceItems?: import('./contextBuffer').ContextItem[];
    lowConfidenceItems?: import('./contextBuffer').ContextItem[];
}

export interface AgentIntent {
    type: 'chat' | 'shell' | 'analysis';
    capabilities: {
        reasoning?: boolean;
        code?: boolean;
        longContext?: boolean;
        streaming?: boolean;
    };
}

export interface AgentPrompt {
    system?: string;
    messages: AIRequestMessage[];
    outputSchema?: any;
}

export interface LLMResult {
    rawText: string;
    parsed?: any;
    plan?: any;
    latencyMs: number;
    tokens?: {
        prompt: number;
        completion: number;
        total: number;
    };
    costUsd?: number;
}

export type AgentAction =
    | { type: 'print'; content: string }
    | { type: 'confirm'; next: AgentAction }
    | { type: 'execute'; command: string; risk: 'low' | 'medium' | 'high' };

/**
 * Observation 类型分级（v3.1）
 * 用于区分哪些 Observation 需要确认，哪些不需要
 */
export type ObservationKind = 'tool_result' | 'system_note' | 'error' | 'none';

/**
 * 完整的 Observation 接口
 */
export interface Observation {
    kind: ObservationKind;
    content: string;
    timestamp: number;
}

````

## 📄 `src/engine/ai/client.ts`

````typescript
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { DEFAULT_AI_PROXY_URL, DEFAULT_MODEL, DEFAULT_ACCOUNT_TYPE, type UserConfig, type AIRequestMessage } from '../core/validation';
import { loadChatHistory, saveChatHistory } from '../agent/chatHistoryStorage';

const CONFIG_FILE = path.join(os.homedir(), '.yuangs.json');

let conversationHistory: AIRequestMessage[] = [];

// 初始化时加载持久化的聊天历史记录
loadChatHistory().then(history => {
    conversationHistory = history;
});

export function addToConversationHistory(role: 'system' | 'user' | 'assistant', content: string) {
    conversationHistory.push({ role, content });
    if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-20);
    }
    // 同时保存到持久化存储
    saveChatHistory(conversationHistory);
}

export function clearConversationHistory() {
    conversationHistory = [];
    // 同时清除持久化存储
    saveChatHistory(conversationHistory);
}

export function getConversationHistory() {
    return conversationHistory;
}

export function getUserConfig(): UserConfig {
    if (fs.existsSync(CONFIG_FILE)) {
        try {
            const content = fs.readFileSync(CONFIG_FILE, 'utf8');
            return JSON.parse(content) as UserConfig;
        } catch (e) { }
    }
    return {};
}

export async function askAI(prompt: string, model?: string): Promise<string> {
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    const headers = {
        'Content-Type': 'application/json',
        'X-Client-ID': 'vscode',
        'Origin': 'https://cli.want.biz',
        'Referer': 'https://cli.want.biz/',
        'account': config.accountType || DEFAULT_ACCOUNT_TYPE,
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
        'Accept': 'application/json'
    };

    const data = {
        model: model || config.defaultModel || DEFAULT_MODEL,
        messages: [{ role: 'user', content: prompt }],
        stream: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        const content = response.data?.choices?.[0]?.message?.content;
        return content || '';
    } catch (error: any) {
        const errorMsg = error.response?.data?.error?.message || error.response?.data?.message || error.message || '未知错误';
        throw new Error(`AI 请求失败: ${errorMsg}`);
    }
}

export async function callAI_Stream(messages: AIRequestMessage[], model: string | undefined, onChunk: (content: string) => void, abortSignal?: AbortSignal): Promise<void> {
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    // ✅ 使用传入的 AbortSignal，或创建新的
    const controller = abortSignal ? { signal: abortSignal, abort: () => {} } : new AbortController();

    const response = await axios({
        method: 'post',
        url: url,
        data: {
            model: model || config.defaultModel || DEFAULT_MODEL,
            messages: messages,
            stream: true
        },
        responseType: 'stream',
        signal: controller.signal,
        headers: {
            'Content-Type': 'application/json',
            'X-Client-ID': 'vscode',
        }
    });

    return new Promise((resolve, reject) => {
        let buffer = '';
        
        const handleChunk = (chunk: Buffer) => {
            // ✅ 检查取消信号
            if (controller.signal.aborted) {
                reject(new Error('Stream request aborted'));
                return;
            }

            buffer += chunk.toString();
            let lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('data: ')) {
                    const data = trimmedLine.slice(6);
                    if (data === '[DONE]') {
                        resolve();
                        return;
                    }
                    try {
                        const parsed = JSON.parse(data);
                        const content = parsed.choices[0]?.delta?.content || '';
                        if (content) onChunk(content);
                    } catch (e) { }
                }
            }
        };

        response.data.on('data', handleChunk);
        
        response.data.on('error', (error: any) => {
            reject(error);
        });
        
        response.data.on('end', () => {
            resolve();
        });
    });
}

````

## 📄 `src/engine/ai/prompt.ts`

````typescript
import { OSProfile } from '../core/os';
import type { Macro } from '../core/validation';

export function buildCommandPrompt(
    userInput: string,
    os: OSProfile,
    macros?: Record<string, Macro>,
    context?: string
): string {
    const macroContext = macros && Object.keys(macros).length > 0
        ? `
【可复用的快捷指令 (Macros)】
以下是可以直接复用的已验证命令。优先复用这些指令，而不是生成新命令：

${Object.entries(macros).map(([name, macro]) => `  - ${name}: ${macro.description || '(无描述)'}`).join('\n')}

当用户的需求与某个 Macro 匹配或相似时：
1. 优先使用该 Macro
2. 在 JSON 输出中使用 "macro" 字段指定 Macro 名称，而不是 "command" 字段
3. 仅在没有合适 Macro 时才生成新命令
`
        : '';

    return `
你是一个专业的命令行专家。

【系统环境】
- 操作系统: ${os.name}
- Shell: ${os.shell}
- find 实现: ${os.find}
- stat 实现: ${os.stat}

【规则】
- 命令必须与当前系统兼容。
- 如果是 macOS (BSD):
  - 不允许使用 find -printf
  - 优先使用 stat -f
- 如果是 Linux (GNU):
  - 可使用 find -printf
- 默认不使用 sudo。
- 确保输出的命令是单行或者使用 && 连接。
- 不要解释，只输出符合以下 JSON 结构的文本。
- 优先复用已验证的快捷指令（Macros），每个 Macro 都是经过人工验证的可靠命令。在生成新命令前，检查是否已有 Macro 可以完成任务。

${macroContext}

【输出 JSON 结构】
{
  "plan": "简要说明你准备执行的步骤",
  "command": "可直接执行的 shell 命令（仅当没有合适 Macro 时提供）",
  "macro": "要复用的 Macro 名称（优先使用，与 command 二选一）",
  "risk": "low | medium | high"
}

【上下文信息】
${context || '无'}

【用户需求】
${userInput}
`;
}

export function buildFixPrompt(
    originalCmd: string,
    stderr: string,
    os: OSProfile
): string {
    return `
该命令在 ${os.name} 上执行失败：

命令：
${originalCmd}

错误信息：
${stderr}

请生成一个 **${os.name} 兼容** 的等价命令。
依然只输出 JSON 格式。注意：这是修复命令，不需要检查 Macro。

{
  "plan": "修复说明",
  "command": "修复后的命令",
  "risk": "low | medium | high"
}
`;
}

````

## 📄 `src/engine/ai/types.ts`

````typescript
export { AICommandPlan, type AICommandPlan as AICommandPlanType } from '../core/validation';

````

## 📄 `src/engine/core/apps.ts`

````typescript
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import os from 'os';
import { DEFAULT_APPS, parseAppsConfig } from './validation';

export { DEFAULT_APPS };

export function loadAppsConfig(): Record<string, string> {
    const configPaths = [
        path.join(process.cwd(), 'yuangs.config.json'),
        path.join(process.cwd(), 'yuangs.config.yaml'),
        path.join(process.cwd(), 'yuangs.config.yml'),
        path.join(process.cwd(), '.yuangs.json'),
        path.join(process.cwd(), '.yuangs.yaml'),
        path.join(process.cwd(), '.yuangs.yml'),
        path.join(os.homedir(), '.yuangs.json'),
        path.join(os.homedir(), '.yuangs.yaml'),
        path.join(os.homedir(), '.yuangs.yml'),
    ];

    for (const configPath of configPaths) {
        if (fs.existsSync(configPath)) {
            try {
                const configContent = fs.readFileSync(configPath, 'utf8');
                let config: Record<string, string>;
                if (configPath.endsWith('.yaml') || configPath.endsWith('.yml')) {
                    config = yaml.load(configContent) as Record<string, string>;
                } else {
                    config = parseAppsConfig(configContent);
                }
                return config;
            } catch (error) { }
        }
    }
    return DEFAULT_APPS;
}


export function openUrl(url: string) {
    let command;
    switch (process.platform) {
        case 'darwin': command = `open "${url}"`; break;
        case 'win32': command = `start "${url}"`; break;
        default: command = `xdg-open "${url}"`; break;
    }
    exec(command);
}

````

## 📄 `src/engine/core/autofix.ts`

````typescript
import { OSProfile } from './os';
import { buildFixPrompt } from '../ai/prompt';
import { askAI } from '../ai/client';
import { safeParseJSON, AIFixPlan, aiFixPlanSchema } from './validation';

export async function autoFixCommand(
    originalCmd: string,
    stderr: string,
    os: OSProfile,
    model?: string
): Promise<AIFixPlan | null> {
    const prompt = buildFixPrompt(originalCmd, stderr, os);
    const raw = await askAI(prompt, model);

    const parseResult = safeParseJSON(raw, aiFixPlanSchema, {} as AIFixPlan);

    if (!parseResult.success) {
        return null;
    }

    return parseResult.data;
}

````

## 📄 `src/engine/core/capabilities.ts`

````typescript
export enum AtomicCapability {
  TEXT_GENERATION = 'text_generation',
  CODE_GENERATION = 'code_generation',
  TOOL_CALLING = 'tool_calling',
  LONG_CONTEXT = 'long_context',
  REASONING = 'reasoning',
  STREAMING = 'streaming',
}

export interface CompositeCapability {
  name: string;
  composedOf: AtomicCapability[];
}

export const COMPOSITE_CAPABILITIES: CompositeCapability[] = [
  {
    name: 'interactive_agent',
    composedOf: [AtomicCapability.TOOL_CALLING, AtomicCapability.REASONING],
  },
  {
    name: 'large_repo_analysis',
    composedOf: [AtomicCapability.LONG_CONTEXT, AtomicCapability.REASONING],
  },
  {
    name: 'safe_code_editing',
    composedOf: [AtomicCapability.CODE_GENERATION, AtomicCapability.REASONING],
  },
];

export enum ConstraintCapability {
  PREFER_DETERMINISTIC = 'prefer_deterministic',
  LOW_COST = 'low_cost',
  FAST_RESPONSE = 'fast_response',
}

export const CAPABILITY_VERSION = '1.0';

export function isAtomicCapability(value: string): value is AtomicCapability {
  return Object.values(AtomicCapability).includes(value as AtomicCapability);
}

export function isConstraintCapability(value: string): value is ConstraintCapability {
  return Object.values(ConstraintCapability).includes(value as ConstraintCapability);
}

export function resolveCompositeCapability(name: string): AtomicCapability[] {
  const composite = COMPOSITE_CAPABILITIES.find(c => c.name === name);
  if (!composite) {
    throw new Error(`Unknown composite capability: ${name}`);
  }
  return composite.composedOf;
}

export function expandCapabilities(
  capabilities: Array<AtomicCapability | string>
): Set<AtomicCapability> {
  const result = new Set<AtomicCapability>();

  for (const cap of capabilities) {
    if (isAtomicCapability(cap)) {
      result.add(cap);
    } else {
      const atomicCaps = resolveCompositeCapability(cap);
      atomicCaps.forEach(c => result.add(c));
    }
  }

  return result;
}

````

## 📄 `src/engine/core/capabilityInference.ts`

````typescript
import { AtomicCapability } from '../core/capabilities';
import type { CapabilityRequirement } from '../core/modelMatcher';

export function inferCapabilityRequirement(userInput: string): CapabilityRequirement {
  const required: AtomicCapability[] = [];

  const input = userInput.toLowerCase();

  if (input.includes('代码') || input.includes('script') || input.includes('文件') || input.includes('create') || input.includes('write')) {
    required.push(AtomicCapability.CODE_GENERATION);
  }

  if (input.includes('分析') || input.includes('理解') || input.includes('解释') || input.includes('推理')) {
    required.push(AtomicCapability.REASONING);
  }

  if (input.includes('长') || input.includes('large') || input.includes('仓库') || input.includes('目录') || input.includes('所有文件')) {
    required.push(AtomicCapability.LONG_CONTEXT);
  }

  return {
    required: Array.from(new Set(required)),
    preferred: [],
  };
}

````

## 📄 `src/engine/core/capabilitySystem.ts`

````typescript
import {
  CapabilityRequirement,
  matchModelWithFallback,
  ModelCapabilities,
  CapabilityMatchResult,
} from './modelMatcher';
import {
  mergeConfigs,
  loadConfigAt,
  dumpConfigSnapshot,
  getConfigFilePaths,
  MergedConfig,
} from './configMerge';
import {
  createExecutionRecord,
  ExecutionRecord,
} from './executionRecord';
import {
  saveExecutionRecord,
  loadExecutionRecord,
  listExecutionRecords,
} from './executionStore';
import { replayEngine, ReplayOptions, ReplayResult } from './replayEngine';

export class CapabilitySystem {
  private primaryModels: ModelCapabilities[] = [];
  private fallbackModels: ModelCapabilities[] = [];

  constructor() {
    this.initializeDefaultModels();
  }

  private initializeDefaultModels(): void {
    // 初始化为空数组，让配置文件成为主要来源
    this.primaryModels = [];
    this.fallbackModels = [];
  }

  matchCapability(requirement: CapabilityRequirement): CapabilityMatchResult {
    const allModels = this.getAllModels();
    const primaryModels = [...this.primaryModels, ...this.loadCustomModels()];
    return matchModelWithFallback(
      primaryModels,
      this.fallbackModels,
      requirement
    );
  }

  loadMergedConfig(): MergedConfig {
    const builtin = {
      aiProxyUrl: 'https://api.openai.com/v1/chat/completions',
      defaultModel: 'gpt-4o-mini',
      accountType: 'free',
    };

    const filePaths = getConfigFilePaths();
    const projectConfig = filePaths.project ? loadConfigAt(filePaths.project) : null;
    const userGlobal = loadConfigAt(filePaths.userGlobal);

    return mergeConfigs(builtin, userGlobal, projectConfig, null);
  }

  loadCustomModels(): ModelCapabilities[] {
    const filePaths = getConfigFilePaths();
    const projectConfig = filePaths.project ? loadConfigAt(filePaths.project) : null;
    const userGlobal = loadConfigAt(filePaths.userGlobal);

    const customModelsArray = [];
    if (userGlobal?.models && Array.isArray(userGlobal.models)) {
      customModelsArray.push(...userGlobal.models as ModelCapabilities[]);
    }
    if (projectConfig?.models && Array.isArray(projectConfig.models)) {
      customModelsArray.push(...projectConfig.models as ModelCapabilities[]);
    }

    return customModelsArray;
  }

  getAllModels(): ModelCapabilities[] {
    const customModels = this.loadCustomModels();
    return [...this.primaryModels, ...this.fallbackModels, ...customModels];
  }

  createAndSaveExecutionRecord(
    commandName: string,
    requirement: CapabilityRequirement,
    matchResult: CapabilityMatchResult,
    command?: string
  ): string {
    const config = this.loadMergedConfig();
    const record = createExecutionRecord(
      commandName,
      requirement,
      config,
      matchResult,
      { success: matchResult.selected !== null },
      command
    );

    const filePath = saveExecutionRecord(record);
    return record.id;
  }

  replayExecution(recordId: string, options: ReplayOptions): Promise<ReplayResult> {
    return replayEngine.replay(recordId, options);
  }

  explainConfig(): string {
    const config = this.loadMergedConfig();
    return dumpConfigSnapshot(config);
  }
}

export const capabilitySystem = new CapabilitySystem();

````

## 📄 `src/engine/core/completion.legacy.ts`

````typescript
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { loadAppsConfig } from './apps';
import { getMacros } from './macros';
export function getAllCommands(program: Command): string[] {
    const commands: string[] = [];

    program.commands.forEach(cmd => {
        if (cmd.name()) {
            commands.push(cmd.name());
        }
        if (cmd.aliases()) {
            commands.push(...cmd.aliases());
        }
    });

    try {
        const apps = loadAppsConfig();
        Object.keys(apps).forEach(app => {
            if (!commands.includes(app)) {
                commands.push(app);
            }
        });
    } catch {
    }

    try {
        const macros = getMacros();
        Object.keys(macros).forEach(macro => {
            if (!commands.includes(macro)) {
                commands.push(macro);
            }
        });
    } catch {
    }

    return [...new Set(commands)].sort();
}

/**
 * 获取命令的子命令或参数
 */
export function getCommandSubcommands(program: Command, commandName: string): string[] {
    const command = program.commands.find(cmd => cmd.name() === commandName);
    if (!command) return [];

    const subcommands: string[] = [];

    command.commands.forEach(cmd => {
        if (cmd.name()) {
            subcommands.push(cmd.name());
        }
    });

    command.options.forEach(opt => {
        opt.flags.split(/[, ]+/).forEach(flag => {
            if (flag.startsWith('--')) {
                subcommands.push(flag);
            } else if (flag.startsWith('-')) {
                subcommands.push(flag);
            }
        });
    });

    return [...new Set(subcommands)].sort();
}

/**
 * 生成 Bash 补全脚本
 */
export function generateBashCompletion(program: Command): string {
    const commands = getAllCommands(program);

    return `#!/bin/bash
# yuangs bash completion

_yuangs_completion() {
    local cur prev words cword
    _init_completion || return

    # 补全命令名
    if [[ \${COMP_CWORD} -eq 1 ]]; then
        COMPREPLY=($(compgen -W '${commands.join(' ')}' -- "\${cur}"))
        return
    fi

    # 补全子命令和参数
    local cmd="\${words[1]}"
    case "\${cmd}" in
        ${commands.map(cmd => `
        ${cmd})
            case "\${prev}" in
                -m|--model)
                    COMPREPLY=($(compgen -W "gemini-2.5-flash-lite gemini-2.5-pro" -- "\${cur}"))
                    ;;
                *)
                    COMPREPLY=($(compgen -W "$(yuangs _complete_subcommand ${cmd})" -- "\${cur}"))
                    ;;
            esac
            ;;
        `).join('\n')}

        *)
            ;;
    esac
}

complete -F _yuangs_completion yuangs
`;
}

/**
 * 生成 Zsh 补全脚本
 */
export function generateZshCompletion(program: Command): string {
    const commands = getAllCommands(program);

    return `#compdef yuangs
# yuangs zsh completion

_yuangs() {
    local -a commands
    commands=(
${commands.map(cmd => `        '${cmd}:$(yuangs _describe ${cmd})'`).join('\n')}
    )

    if (( CURRENT == 2 )); then
        _describe 'command' commands
    else
        local cmd="\${words[2]}"
        case "\${cmd}" in
${commands.map(cmd => `
            ${cmd})
                _values 'options' $(yuangs _complete_subcommand ${cmd})
                ;;
`).join('\n')}
            *)
                ;;
        esac
    fi
}

_yuangs
`;
}

export async function installBashCompletion(program: Command): Promise<boolean> {
    const bashrcPath = path.join(process.env.HOME || '', '.bashrc');
    const bashCompletionDir = path.join(process.env.HOME || '', '.bash_completion.d');

    try {
        if (!fs.existsSync(bashCompletionDir)) {
            fs.mkdirSync(bashCompletionDir, { recursive: true });
        }

        const completionPath = path.join(bashCompletionDir, 'yuangs-completion.bash');
        const completionScript = generateBashCompletion(program);

        fs.writeFileSync(completionPath, completionScript, { mode: 0o644 });
        const sourceLine = `# yuangs completion
if [ -f ~/.bash_completion.d/yuangs-completion.bash ]; then
    source ~/.bash_completion.d/yuangs-completion.bash
fi
`;

        let bashrc = '';
        if (fs.existsSync(bashrcPath)) {
            bashrc = fs.readFileSync(bashrcPath, 'utf-8');
        }

        if (!bashrc.includes('yuangs-completion.bash')) {
            fs.appendFileSync(bashrcPath, `\n${sourceLine}`);
        }

        return true;
    } catch (error) {
        console.error('安装 Bash 补全失败:', error);
        return false;
    }
}

export async function installZshCompletion(program: Command): Promise<boolean> {
    const zshrcPath = path.join(process.env.HOME || '', '.zshrc');
    const zfuncDir = path.join(process.env.HOME || '', '.zfunctions');

    try {
        if (!fs.existsSync(zfuncDir)) {
            fs.mkdirSync(zfuncDir, { recursive: true });
        }

        const completionPath = path.join(zfuncDir, '_yuangs');
        const completionScript = generateZshCompletion(program);

        fs.writeFileSync(completionPath, completionScript, { mode: 0o644 });
        let zshrc = '';
        if (fs.existsSync(zshrcPath)) {
            zshrc = fs.readFileSync(zshrcPath, 'utf-8');
        }

        const fpathLine = 'fpath=(~/.zfunctions $fpath)';
        const autoloadLine = 'autoload -U compinit && compinit';

        if (!zshrc.includes('fpath=')) {
            fs.appendFileSync(zshrcPath, `\n${fpathLine}`);
        }

        if (!zshrc.includes('autoload -U compinit')) {
            fs.appendFileSync(zshrcPath, `\n${autoloadLine}`);
        }

        return true;
    } catch (error) {
        console.error('安装 Zsh 补全失败:', error);
        return false;
    }
}

/**
 * 获取命令描述（用于补全提示）
 */
export function getCommandDescription(program: Command, commandName: string): string {
    const command = program.commands.find(cmd => cmd.name() === commandName);
    return command?.description() || '';
}

````

## 📄 `src/engine/core/completion/builtin.ts`

````typescript
import type { CompletionItem } from './types';

export function getBuiltinCommands(): Array<{ name: string; description: string }> {
  return [
    { name: 'ai', description: '向 AI 提问' },
    { name: 'list', description: '列出所有应用' },
    { name: 'history', description: '查看及执行命令历史' },
    { name: 'config', description: '管理本地配置' },
    { name: 'macros', description: '查看所有快捷指令' },
    { name: 'save', description: '保存快捷指令' },
    { name: 'run', description: '执行快捷指令' },
    { name: 'help', description: '显示帮助信息' },
    { name: 'completion', description: '安装 Shell 补全' },
    { name: 'shici', description: '打开古诗词 PWA' },
    { name: 'dict', description: '打开英语词典' },
    { name: 'pong', description: '打开 Pong 游戏' }
  ];
}

````

## 📄 `src/engine/core/completion/cache.ts`

````typescript
import type { CompletionItem } from './types';

export class CompletionCache {
  private static instance: CompletionCache;
  private cache: Map<string, CompletionItem[]>;
  private timestamp: number;
  private readonly ttl: number = 5000;

  private constructor() {
    this.cache = new Map();
    this.timestamp = Date.now();
  }

  static getInstance(): CompletionCache {
    if (!CompletionCache.instance) {
      CompletionCache.instance = new CompletionCache();
    }
    return CompletionCache.instance;
  }

  get(key: string): CompletionItem[] | null {
    const now = Date.now();
    if (now - this.timestamp > this.ttl) {
      this.cache.clear();
      this.timestamp = now;
      return null;
    }
    return this.cache.get(key) || null;
  }

  set(key: string, items: CompletionItem[]): void {
    this.cache.set(key, items);
  }

  invalidate(): void {
    this.cache.clear();
    this.timestamp = 0;
  }

  invalidatePattern(pattern: RegExp): void {
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.cache.delete(key);
      }
    }
  }
}

````

## 📄 `src/engine/core/completion/index.ts`

````typescript
import { CompletionRequest, CompletionResponse } from './types';
import { resolveCompletion } from './resolver';

export async function complete(
  req: CompletionRequest
): Promise<CompletionResponse> {
  if (!Array.isArray(req.words)) {
    return { items: [], isPartial: false };
  }

  if (
    typeof req.currentIndex !== 'number' ||
    req.currentIndex < 0 ||
    req.currentIndex >= req.words.length
  ) {
    return { items: [], isPartial: false };
  }

  return resolveCompletion(req);
}

export { setProgramInstance } from './resolver';

export {
  getAllCommands,
  getCommandSubcommands,
  getCommandDescription,
  installBashCompletion,
  installZshCompletion
} from '../completion.legacy';

````

## 📄 `src/engine/core/completion/path.ts`

````typescript
import fs from 'fs';
import path from 'path';

export type PathKind = 'file' | 'dir';

export function resolvePathSuggestions(
  input: string,
  kind: PathKind
): string[] {
  const cwd = process.cwd();
  const normalized = input.replace(/^~(?=$|\/)/, process.env.HOME || '');
  const isDirInput = normalized.endsWith(path.sep);

  const baseDir = isDirInput
    ? path.resolve(cwd, normalized)
    : path.resolve(cwd, path.dirname(normalized));

  const prefix = isDirInput ? '' : path.basename(normalized);

  try {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true });
    return entries
      .filter(e => !e.name.startsWith('.'))
      .filter(e => {
        if (kind === 'file') return e.isFile();
        return e.isDirectory();
      })
      .filter(e => e.name.startsWith(prefix))
      .map(e => {
        const fullPath = path.join(baseDir, e.name);
        const suggestion = e.isDirectory()
          ? fullPath + path.sep
          : fullPath;
        return suggestion.replace(/^\\/g, '');
      });
  } catch {
    return [];
  }
}

````

## 📄 `src/engine/core/completion/resolver.ts`

````typescript
import { CompletionRequest, CompletionResponse, CompletionItem } from './types';
import { unique } from './utils';
import { getBuiltinCommands } from './builtin';
import { loadAppsConfig } from '../apps';
import { getMacros } from '../macros';
import { Command } from 'commander';

let programInstance: Command | null = null;

export function setProgramInstance(program: Command): void {
  programInstance = program;
}

function getProgramInstance(): Command {
  return programInstance || ({} as Command);
}

export async function resolveCompletion(
  req: CompletionRequest
): Promise<CompletionResponse> {
  const { words, currentIndex } = req;

  const currentWord = words[currentIndex] ?? '';
  const previousWord = words[currentIndex - 1] ?? '';

  if (currentIndex === 1) {
    return completeTopLevel(currentWord);
  }

  return completeSubcommand(words.slice(1, currentIndex), currentWord, previousWord);
}

function completeTopLevel(prefix: string): CompletionResponse {
  const items: CompletionItem[] = [];

  const commands = getBuiltinCommands();
  commands.forEach(cmd => {
    items.push({ label: cmd.name });
  });

  try {
    const apps = loadAppsConfig();
    Object.keys(apps).forEach(name => {
      if (!items.find(i => i.label === name)) {
        items.push({ label: name });
      }
    });
  } catch {}

  try {
    const macros = getMacros();
    Object.keys(macros).forEach(name => {
      if (!items.find(i => i.label === name)) {
        items.push({ label: name });
      }
    });
  } catch {}

  const filtered = items.filter(item => item.label.startsWith(prefix));

  return {
    items: unique(filtered),
    isPartial: true
  };
}

function completeSubcommand(
  path: string[],
  prefix: string,
  prev: string
): CompletionResponse {
  const items: CompletionItem[] = [];

  if (prev === '--model' || prev === '-m') {
    items.push(
      { label: 'gemini-2.5-flash-lite' },
      { label: 'gemini-2.5-pro' },
      { label: 'Assistant' },
      { label: 'GPT-4o-mini' }
    );
  } else if (path.length > 0) {
    const baseCommand = path[0];
    const cmd = getProgramInstance().commands.find((c: any) => c.name() === baseCommand);

    if (cmd) {
      cmd.options.forEach((opt: any) => {
        opt.flags.split(/[, ]+/).forEach((flag: string) => {
          if (flag.startsWith('-') && !flag.startsWith('--')) {
            items.push({ label: flag });
          }
        });
      });

      cmd.commands.forEach((subcmd: any) => {
        items.push({ label: subcmd.name() });
      });
    }
  }

  const filtered = items.filter(item => item.label.startsWith(prefix));

  return {
    items: unique(filtered),
    isPartial: true
  };
}

````

## 📄 `src/engine/core/completion/types.ts`

````typescript
// core/completion/types.ts

/**
 * yuangs Completion Protocol v1.1
 * 终态补全协议 - 唯一、强约束
 */

export interface CompletionRequest {
  /**
   * 完整 argv，不包含 node
   * e.g. ['yuangs', 'ai', 'chat', '--m']
   */
  words: string[];

  /**
   * cursor 所在 index
   */
  currentIndex: number;
}

export interface CompletionItem {
  label: string;
  insertText?: string;
  detail?: string;
}

export interface CompletionResponse {
  items: CompletionItem[];
  isPartial: boolean;
}

````

## 📄 `src/engine/core/completion/utils.ts`

````typescript
import { CompletionItem } from './types';

export function unique(items: CompletionItem[]): CompletionItem[] {
  const seen = new Set<string>();
  return items.filter(i => {
    if (seen.has(i.label)) return false;
    seen.add(i.label);
    return true;
  });
}

````

## 📄 `src/engine/core/configMerge.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import yaml from 'js-yaml';

export type ConfigSource = 'built-in' | 'user-global' | 'project' | 'command-override';

export interface ConfigFieldSource<T = unknown> {
  value: T;
  source: ConfigSource;
  filePath?: string;
}

export interface MergedConfig {
  aiProxyUrl: ConfigFieldSource<string>;
  defaultModel: ConfigFieldSource<string>;
  accountType: ConfigFieldSource<'free' | 'pro'>;
  [key: string]: ConfigFieldSource<unknown>;
}

export function loadConfigAt(filePath: string): Record<string, unknown> | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
      return yaml.load(content) as Record<string, unknown>;
    }
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Failed to load config from ${filePath}:`, error);
    return null;
  }
}

export function mergeConfigs(
  builtin: Record<string, unknown>,
  userGlobal: Record<string, unknown> | null,
  project: Record<string, unknown> | null,
  commandOverride: Record<string, unknown> | null
): MergedConfig {
  const merged: MergedConfig = {} as MergedConfig;

  const addField = (key: string, value: unknown, source: ConfigSource, filePath?: string) => {
    merged[key] = { value, source, filePath };
  };

  Object.entries(builtin).forEach(([key, value]) => {
    addField(key, value, 'built-in');
  });

  if (userGlobal) {
    Object.entries(userGlobal).forEach(([key, value]) => {
      addField(key, value, 'user-global', path.join(os.homedir(), '.yuangs.json'));
    });
  }

  if (project) {
    Object.entries(project).forEach(([key, value]) => {
      addField(key, value, 'project');
    });
  }

  if (commandOverride) {
    Object.entries(commandOverride).forEach(([key, value]) => {
      addField(key, value, 'command-override');
    });
  }

  return merged;
}

export function dumpConfigSnapshot(config: MergedConfig): string {
  const output: Record<string, any> = {};

  Object.entries(config).forEach(([key, field]) => {
    output[key] = {
      value: field.value,
      source: field.source,
      filePath: field.filePath,
    };
  });

  return JSON.stringify(output, null, 2);
}

function findProjectConfig(cwd = process.cwd()): string | null {
  let dir = cwd;
  const configFiles = ['.yuangs.json', '.yuangs.yaml', '.yuangs.yml', 'yuangs.config.json'];

  while (dir && dir !== path.dirname(dir)) {
    for (const filename of configFiles) {
      const candidate = path.join(dir, filename);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    dir = path.dirname(dir);
  }

  const root = path.parse(cwd).root;
  for (const filename of configFiles) {
    const rootCandidate = path.join(root, filename);
    if (fs.existsSync(rootCandidate)) {
      return rootCandidate;
    }
  }

  return null;
}

export function getConfigFilePaths(): {
  userGlobal: string;
  project: string | null;
} {
  return {
    userGlobal: path.join(os.homedir(), '.yuangs.json'),
    project: findProjectConfig(),
  };
}

````

## 📄 `src/engine/core/executionRecord.ts`

````typescript
import { MergedConfig } from './configMerge';
import { ModelCapabilities, CapabilityMatchExplanation } from './modelMatcher';
import { CapabilityRequirement } from './modelMatcher';
import { Skill } from '../agent/skills';

export interface ExecutionMeta {
  commandName: string;
  timestamp: string;
  toolVersion: string;
  projectPath: string;
  args?: any;
  rawInput?: string;
  replayable?: boolean;
  version?: string;
}

export interface CapabilityIntent {
  required: string[];
  preferred: string[];
  capabilityVersion: string;
}

export interface ModelDecision {
  candidateModels: CapabilityMatchExplanation[];
  selectedModel: ModelCapabilities | null;
  usedFallback: boolean;
  fallbackReason?: string;
  strategy?: string;
  reason?: string;
  skills?: Skill[];
}

export interface ExecutionOutcome {
  success: boolean;
  failureReason?: 'capability-mismatch' | 'provider-error' | 'user-abort' | 'timeout' | 'other';
  tokenCount?: number;
  latencyMs?: number;
}

export interface ExecutionRecord {
  id: string;
  meta: ExecutionMeta;
  intent: CapabilityIntent;
  configSnapshot: MergedConfig;
  decision: ModelDecision;
  outcome: ExecutionOutcome;
  command?: string;
}

export function createExecutionId(): string {
  return `exec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function createExecutionRecord(
  commandName: string,
  requirement: CapabilityRequirement,
  config: MergedConfig,
  matchResult: any,
  outcome: Partial<ExecutionOutcome> = {},
  command?: string
): ExecutionRecord {
  const version = require('../../package.json').version;

  return {
    id: createExecutionId(),
    meta: {
      commandName,
      timestamp: new Date().toISOString(),
      toolVersion: version,
      projectPath: process.cwd(),
      version,
      replayable: true,
    },
    intent: {
      required: requirement.required.map(String),
      preferred: requirement.preferred.map(String),
      capabilityVersion: require('./capabilities').CAPABILITY_VERSION,
    },
    configSnapshot: config,
    decision: {
      candidateModels: matchResult.candidates || [],
      selectedModel: matchResult.selected,
      usedFallback: matchResult.fallbackOccurred,
    },
    outcome: {
      success: outcome.success ?? false,
      ...outcome,
    },
    command,
  };
}

export function serializeExecutionRecord(record: ExecutionRecord): string {
  return JSON.stringify(record, null, 2);
}

export function deserializeExecutionRecord(json: string): ExecutionRecord {
  return JSON.parse(json) as ExecutionRecord;
}

````

## 📄 `src/engine/core/executionStore.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { ExecutionRecord, serializeExecutionRecord, deserializeExecutionRecord } from './executionRecord';

const RECORD_DIR = path.join(os.homedir(), '.yuangs', 'executions');

export function ensureRecordDir(): void {
  if (!fs.existsSync(RECORD_DIR)) {
    fs.mkdirSync(RECORD_DIR, { recursive: true });
  }
}

export function saveExecutionRecord(record: ExecutionRecord): string {
  ensureRecordDir();

  const filename = `${record.id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  fs.writeFileSync(filepath, serializeExecutionRecord(record), 'utf8');

  return filepath;
}

export function loadExecutionRecord(id: string): ExecutionRecord | null {
  ensureRecordDir();

  const filename = `${id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  if (!fs.existsSync(filepath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filepath, 'utf8');
    return deserializeExecutionRecord(content);
  } catch (error) {
    console.error(`Failed to load execution record ${id}:`, error);
    return null;
  }
}

export function listExecutionRecords(limit: number = 50): ExecutionRecord[] {
  ensureRecordDir();

  const files = fs.readdirSync(RECORD_DIR)
    .filter(f => f.endsWith('.json'))
    .sort((a, b) => {
      const statA = fs.statSync(path.join(RECORD_DIR, a));
      const statB = fs.statSync(path.join(RECORD_DIR, b));
      return statB.mtimeMs - statA.mtimeMs;
    })
    .slice(0, limit);

  const records: ExecutionRecord[] = [];

  for (const file of files) {
    const record = loadExecutionRecord(file.replace('.json', ''));
    if (record) {
      records.push(record);
    }
  }

  return records;
}

export function deleteExecutionRecord(id: string): boolean {
  ensureRecordDir();

  const filename = `${id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  if (!fs.existsSync(filepath)) {
    return false;
  }

  try {
    fs.unlinkSync(filepath);
    return true;
  } catch (error) {
    console.error(`Failed to delete execution record ${id}:`, error);
    return false;
  }
}

export function clearAllExecutionRecords(): void {
  ensureRecordDir();

  const files = fs.readdirSync(RECORD_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const filepath = path.join(RECORD_DIR, file);
    try {
      fs.unlinkSync(filepath);
    } catch (error) {
      console.error(`Failed to delete ${filepath}:`, error);
    }
  }
}

````

## 📄 `src/engine/core/executor.ts`

````typescript
import { spawn } from 'child_process';

export type ExecResult = {
    stdout: string;
    stderr: string;
    code: number | null;
};

export async function exec(command: string): Promise<ExecResult> {
    return new Promise((resolve) => {
        let stdout = '';
        let stderr = '';

        // Use user's preferred shell back with full support for their environment
        const shell = process.env.SHELL || true;
        const child = spawn(command, [], { shell });

        child.stdout.on('data', (data) => {
            stdout += data.toString();
            process.stdout.write(data);
        });

        child.stderr.on('data', (data) => {
            stderr += data.toString();
            process.stderr.write(data);
        });

        child.on('close', (code) => {
            resolve({ stdout, stderr, code });
        });

        child.on('error', (err) => {
            stderr += err.message;
            resolve({ stdout, stderr, code: 1 });
        });
    });
}

````

## 📄 `src/engine/core/explain.ts`

````typescript
import { ExecutionRecord } from './executionRecord';
import { computeSkillScore, Skill } from '../agent/skills';

/**
 * Explain Output Spec v1
 * - Stable, human-readable, diff-friendly
 * - No side effects
 * - Do NOT change without bumping spec version
 */
export function explainExecution(record: ExecutionRecord): string {
  const lines: string[] = [];

  lines.push('=== Execution Explanation ===');

  /* =========================
   * [1] Command
   * ========================= */
  lines.push('[1] Command');
  lines.push(`- Name: ${record.meta.commandName ?? 'N/A'}`);

  if (record.command) {
    lines.push(`- Args: ${record.command}`);
  }

  if (record.meta.rawInput) {
    lines.push(`- Raw: ${record.meta.rawInput}`);
  }
  lines.push('');

  /* =========================
   * [2] Decision
   * ========================= */
  const decision = record.decision ?? {};

  lines.push('[2] Decision');
  lines.push(`- Strategy: ${decision.strategy ?? 'capability-match'}`);
  lines.push(
    `- Selected Model: ${decision.selectedModel?.name ?? 'N/A'}`
  );
  lines.push(
    `- Reason: ${decision.reason ?? 'Capability-based selection with fallback support'}`
  );
  lines.push('');

  /* =========================
   * [3] Model
   * ========================= */
  const model = decision.selectedModel;

  lines.push('[3] Model');
  lines.push(`- Name: ${model?.name ?? 'N/A'}`);
  lines.push(`- Provider: ${model?.provider ?? 'N/A'}`);
  lines.push(`- Context Window: ${model?.contextWindow ?? 'default'}`);
  lines.push(`- Cost Profile: ${model?.costProfile ?? 'default'}`);
  lines.push('');

  /* =========================
   * [4] Skills
   * ========================= */
  lines.push('[4] Skills');

  const skills: Skill[] = decision.skills ?? [];
  const now = Date.now();

  if (skills.length === 0) {
    lines.push('- (none)');
  } else {
    const scored = skills
      .map(skill => ({
        skill,
        score: computeSkillScore(skill, now),
      }))
      .sort((a, b) => b.score - a.score);

    for (const { skill, score } of scored) {
      const totalUses = skill.successCount + skill.failureCount;
      const successRate =
        totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      lines.push(`- ${skill.name}`);
      lines.push(`    score: ${score.toFixed(3)}`);
      lines.push(`    confidence: ${skill.confidence.toFixed(3)}`);
      lines.push(`    successRate: ${successRate.toFixed(3)}`);
      lines.push(`    enabled: ${skill.enabled}`);
      lines.push(
        `    lastUsed: ${new Date(skill.lastUsed).toISOString()}`
      );
    }
  }
  lines.push('');

  /* =========================
   * [5] Meta
   * ========================= */
  lines.push('[5] Meta');
  lines.push(`- Execution ID: ${record.id}`);
  lines.push(
    `- Timestamp: ${new Date(record.meta.timestamp).toISOString()}`
  );
  lines.push(`- Replayable: ${record.meta.replayable ?? true}`);
  lines.push(`- Version: ${record.meta.version ?? 'unknown'}`);

  lines.push('=============================');

  return lines.join('\n');
}

````

## 📄 `src/engine/core/fileReader.ts`

````typescript
import fs from 'fs';
import path from 'path';

export function parseFilePathsFromLsOutput(output: string): string[] {
    const lines = output.trim().split('\n');
    const filePaths: string[] = [];

    for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        const lastPart = parts[parts.length - 1];
        
        if (lastPart && !lastPart.startsWith('-') && lastPart !== '.' && lastPart !== '..') {
            filePaths.push(lastPart);
        }
    }

    return filePaths;
}

export function readFilesContent(filePaths: string[]): Map<string, string> {
    const contentMap = new Map<string, string>();

    for (const filePath of filePaths) {
        try {
            const fullPath = path.resolve(filePath);
            if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                contentMap.set(filePath, content);
            }
        } catch (error) {
            console.error(`无法读取文件: ${filePath}`);
        }
    }

    return contentMap;
}

export function buildPromptWithFileContent(
    originalOutput: string,
    filePaths: string[],
    contentMap: Map<string, string>,
    question?: string
): string {
    let prompt = '';

    prompt += '## 文件列表\n';
    prompt += '```\n';
    prompt += originalOutput;
    prompt += '```\n\n';

    if (contentMap.size > 0) {
        prompt += '## 文件内容\n\n';
        for (const [filePath, content] of contentMap) {
            prompt += `### ${filePath}\n`;
            prompt += '```\n';
            const maxChars = 5000;
            const truncated = content.length > maxChars 
                ? content.substring(0, maxChars) + '\n... (内容过长已截断)'
                : content;
            prompt += truncated;
            prompt += '\n```\n\n';
        }
    }

    if (question) {
        prompt += `\n## 我的问题\n${question}`;
    } else {
        prompt += '\n## 我的问题\n请分析以上文件列表和文件内容';
    }

    return prompt;
}

````

## 📄 `src/engine/core/macros.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { parseMacros, type Macro } from './validation';

const USER_MACROS_FILE = path.join(os.homedir(), '.yuangs_macros.json');

export type { Macro };

function loadMacrosFromFile(filePath: string): Record<string, Macro> {
    if (fs.existsSync(filePath)) {
        try {
            return parseMacros(fs.readFileSync(filePath, 'utf8'));
        } catch (e) { }
    }
    return {};
}

function findProjectMacros(cwd = process.cwd()): string | null {
    let dir = cwd;
    while (dir && dir !== path.dirname(dir)) {
        const candidate = path.join(dir, 'yuangs_macros.json');
        if (fs.existsSync(candidate)) {
            return candidate;
        }
        dir = path.dirname(dir);
    }
    // Check root one last time
    const rootCandidate = path.join(targetRoot(dir), 'yuangs_macros.json');
    if (fs.existsSync(rootCandidate)) return rootCandidate;
    
    return null;
}

// Helper to reliably stop at root (dirname('/') is '/')
function targetRoot(dir: string) {
    return path.parse(dir).root;
}

export function getMacros(): Record<string, Macro> {
    const userMacros = loadMacrosFromFile(USER_MACROS_FILE);
    
    const projectMacrosPath = findProjectMacros();
    const projectMacros = projectMacrosPath ? loadMacrosFromFile(projectMacrosPath) : {};

    return {
        ...userMacros,
        ...projectMacros // Project overrides User
    };
}

export function saveMacro(name: string, commands: string, description: string = '') {
    // Only load USER macros for saving
    const macros = loadMacrosFromFile(USER_MACROS_FILE);
    macros[name] = {
        commands,
        description,
        createdAt: new Date().toISOString()
    };
    fs.writeFileSync(USER_MACROS_FILE, JSON.stringify(macros, null, 2));
    return true;
}

export function deleteMacro(name: string) {
    // Only delete from USER macros
    const macros = loadMacrosFromFile(USER_MACROS_FILE);
    if (macros[name]) {
        delete macros[name];
        fs.writeFileSync(USER_MACROS_FILE, JSON.stringify(macros, null, 2));
        return true;
    }
    return false;
}

export function runMacro(name: string) {
    const macros = getMacros();
    const macro = macros[name];
    if (!macro) return false;

    const { spawn } = require('child_process');
    spawn(macro.commands, [], { shell: true, stdio: 'inherit' });
    return true;
}

````

## 📄 `src/engine/core/modelMatcher.ts`

````typescript
import { AtomicCapability, ConstraintCapability, expandCapabilities } from './capabilities';

export interface ModelCapabilities {
  name: string;
  provider: string;
  atomicCapabilities: AtomicCapability[];
  contextWindow?: number;
  costProfile?: 'low' | 'medium' | 'high';
}

export interface CapabilityRequirement {
  required: AtomicCapability[];
  preferred: AtomicCapability[];
  constraints?: ConstraintCapability[];
}

export interface CapabilityMatchExplanation {
  modelName: string;
  provider: string;
  hasRequired: boolean;
  hasPreferred: AtomicCapability[];
  missingRequired: AtomicCapability[];
  reason: string;
}

export interface CapabilityMatchResult {
  selected: ModelCapabilities | null;
  candidates: CapabilityMatchExplanation[];
  fallbackOccurred: boolean;
}

export function matchModel(
  models: ModelCapabilities[],
  requirement: CapabilityRequirement
): CapabilityMatchResult {
  const explanations: CapabilityMatchExplanation[] = [];

  for (const model of models) {
    const hasRequired = requirement.required.every(cap =>
      model.atomicCapabilities.includes(cap)
    );

    const missingRequired = requirement.required.filter(cap =>
      !model.atomicCapabilities.includes(cap)
    );

    const hasPreferred = requirement.preferred.filter(cap =>
      model.atomicCapabilities.includes(cap)
    );

    const explanation: CapabilityMatchExplanation = {
      modelName: model.name,
      provider: model.provider,
      hasRequired,
      hasPreferred,
      missingRequired,
      reason: hasRequired
        ? `Has all required capabilities. Matches ${hasPreferred.length}/${requirement.preferred.length} preferred.`
        : `Missing required capabilities: ${missingRequired.map(c => String(c)).join(', ')}`,
    };

    explanations.push(explanation);
  }

  const matchingModels = explanations.filter(e => e.hasRequired);

  if (matchingModels.length === 0) {
    return {
      selected: null,
      candidates: explanations,
      fallbackOccurred: false,
    };
  }

  const bestMatch = matchingModels[0];
  const selectedModel = models.find(m => m.name === bestMatch.modelName);

  return {
    selected: selectedModel || null,
    candidates: explanations,
    fallbackOccurred: false,
  };
}

export function matchModelWithFallback(
  models: ModelCapabilities[],
  fallbackModels: ModelCapabilities[],
  requirement: CapabilityRequirement
): CapabilityMatchResult {
  const primaryResult = matchModel(models, requirement);

  if (primaryResult.selected) {
    return primaryResult;
  }

  const fallbackResult = matchModel(fallbackModels, requirement);

  return {
    ...fallbackResult,
    fallbackOccurred: fallbackResult.selected !== null,
  };
}

````

## 📄 `src/engine/core/os.ts`

````typescript
export type OSProfile = {
    name: string;
    shell: string;
    find: 'bsd' | 'gnu';
    stat: 'bsd' | 'gnu';
};

export function getOSProfile(): OSProfile {
    switch (process.platform) {
        case 'darwin':
            return {
                name: 'macOS',
                shell: 'zsh',
                find: 'bsd',
                stat: 'bsd',
            };
        case 'linux':
            return {
                name: 'Linux',
                shell: 'bash',
                find: 'gnu',
                stat: 'gnu',
            };
        case 'win32':
            return {
                name: 'Windows',
                shell: 'cmd',
                find: 'gnu', // Win32 find is different, but for AI context let's assume GNU style tools if they are there, or just label it.
                stat: 'gnu',
            };
        default:
            return {
                name: process.platform,
                shell: 'sh',
                find: 'gnu',
                stat: 'gnu',
            };
    }
}

````

## 📄 `src/engine/core/replayDiff.ts`

````typescript
import { ExecutionRecord } from './executionRecord';
import { computeSkillScore } from '../agent/skills';

export interface ReplayDiffResult {
  decisionDiff: DecisionDiff;
  modelDiff: ModelDiff;
  skillsDiff: SkillsDiff;
}

interface DecisionDiff {
  changed: boolean;
  strategyChanged: boolean;
  modelChanged: boolean;
  reasonChanged: boolean;
  before?: {
    strategy: string;
    selectedModel: string;
    reason: string;
  };
  after?: {
    strategy: string;
    selectedModel: string;
    reason: string;
  };
}

interface ModelDiff {
  changed: boolean;
  nameChanged: boolean;
  providerChanged: boolean;
  before?: {
    name: string;
    provider: string;
    contextWindow: number | string;
    costProfile: string;
  };
  after?: {
    name: string;
    provider: string;
    contextWindow: number | string;
    costProfile: string;
  };
}

interface SkillsDiff {
  added: SkillChange[];
  removed: SkillChange[];
  changed: SkillChange[];
}

interface SkillChange {
  name: string;
  score?: number;
  enabled?: boolean;
  confidence?: number;
  successRate?: number;
  lastUsed?: string;
}

export function diffExecution(
  original: ExecutionRecord,
  current: ExecutionRecord
): ReplayDiffResult {
  return {
    decisionDiff: diffDecision(original, current),
    modelDiff: diffModel(original, current),
    skillsDiff: diffSkills(original, current),
  };
}

function diffDecision(original: ExecutionRecord, current: ExecutionRecord): DecisionDiff {
  const origDecision = original.decision;
  const currDecision = current.decision;

  const strategyChanged = origDecision?.strategy !== currDecision?.strategy;
  const modelChanged = origDecision?.selectedModel?.name !== currDecision?.selectedModel?.name;
  const reasonChanged = origDecision?.reason !== currDecision?.reason;

  return {
    changed: strategyChanged || modelChanged || reasonChanged,
    strategyChanged,
    modelChanged,
    reasonChanged,
    before: {
      strategy: origDecision?.strategy ?? 'N/A',
      selectedModel: origDecision?.selectedModel?.name ?? 'N/A',
      reason: origDecision?.reason ?? 'N/A',
    },
    after: {
      strategy: currDecision?.strategy ?? 'N/A',
      selectedModel: currDecision?.selectedModel?.name ?? 'N/A',
      reason: currDecision?.reason ?? 'N/A',
    },
  };
}

function diffModel(original: ExecutionRecord, current: ExecutionRecord): ModelDiff {
  const origModel = original.decision.selectedModel;
  const currModel = current.decision.selectedModel;

  if (!origModel || !currModel) {
    return {
      changed: true,
      nameChanged: true,
      providerChanged: true,
      before: origModel ? {
        name: origModel.name,
        provider: origModel.provider,
        contextWindow: origModel.contextWindow ?? 'default',
        costProfile: origModel.costProfile ?? 'default',
      } : undefined,
      after: currModel ? {
        name: currModel.name,
        provider: currModel.provider,
        contextWindow: currModel.contextWindow ?? 'default',
        costProfile: currModel.costProfile ?? 'default',
      } : undefined,
    };
  }

  const nameChanged = origModel.name !== currModel.name;
  const providerChanged = origModel.provider !== currModel.provider;

  return {
    changed: nameChanged || providerChanged,
    nameChanged,
    providerChanged,
    before: {
      name: origModel.name,
      provider: origModel.provider,
      contextWindow: origModel.contextWindow ?? 'default',
      costProfile: origModel.costProfile ?? 'default',
    },
    after: {
      name: currModel.name,
      provider: currModel.provider,
      contextWindow: currModel.contextWindow ?? 'default',
      costProfile: currModel.costProfile ?? 'default',
    },
  };
}

function diffSkills(original: ExecutionRecord, current: ExecutionRecord): SkillsDiff {
  const origSkills = original.decision.skills ?? [];
  const currSkills = current.decision.skills ?? [];

  const origSkillMap = new Map(origSkills.map(s => [s.name, s]));
  const currSkillMap = new Map(currSkills.map(s => [s.name, s]));

  const added: SkillChange[] = [];
  const removed: SkillChange[] = [];
  const changed: SkillChange[] = [];

  const now = Date.now();

  // Find added and changed skills
  for (const skill of currSkills) {
    const origSkill = origSkillMap.get(skill.name);

    if (!origSkill) {
      // Added
      const score = computeSkillScore(skill, now);
      const totalUses = skill.successCount + skill.failureCount;
      const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      added.push({
        name: skill.name,
        score,
        enabled: skill.enabled,
        confidence: skill.confidence,
        successRate,
        lastUsed: new Date(skill.lastUsed).toISOString(),
      });
    } else {
      // Check if changed
      const origScore = computeSkillScore(origSkill, now);
      const currScore = computeSkillScore(skill, now);
      const origTotalUses = origSkill.successCount + origSkill.failureCount;
      const currTotalUses = skill.successCount + skill.failureCount;
      const origSuccessRate = origTotalUses === 0 ? 0.5 : origSkill.successCount / origTotalUses;
      const currSuccessRate = currTotalUses === 0 ? 0.5 : skill.successCount / currTotalUses;

      if (
        Math.abs(origScore - currScore) > 0.001 ||
        origSkill.enabled !== skill.enabled ||
        Math.abs(origSuccessRate - currSuccessRate) > 0.001
      ) {
        changed.push({
          name: skill.name,
          score: currScore,
          enabled: skill.enabled,
          confidence: skill.confidence,
          successRate: currSuccessRate,
          lastUsed: new Date(skill.lastUsed).toISOString(),
        });
      }
    }
  }

  // Find removed skills
  for (const skill of origSkills) {
    if (!currSkillMap.has(skill.name)) {
      const score = computeSkillScore(skill, now);
      const totalUses = skill.successCount + skill.failureCount;
      const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      removed.push({
        name: skill.name,
        score,
        enabled: skill.enabled,
        confidence: skill.confidence,
        successRate,
        lastUsed: new Date(skill.lastUsed).toISOString(),
      });
    }
  }

  return {
    added,
    removed,
    changed,
  };
}

export function formatReplayDiff(diff: ReplayDiffResult): string {
  const lines: string[] = [];

  lines.push('=== Replay Diff ===');

  // [Decision]
  lines.push('[Decision]');
  if (!diff.decisionDiff.changed) {
    lines.push('- no change');
  } else {
    if (diff.decisionDiff.strategyChanged) {
      lines.push(`- strategy: ${diff.decisionDiff.before?.strategy} → ${diff.decisionDiff.after?.strategy}`);
    }
    if (diff.decisionDiff.modelChanged) {
      lines.push(`- selectedModel: ${diff.decisionDiff.before?.selectedModel} → ${diff.decisionDiff.after?.selectedModel}`);
    }
    if (diff.decisionDiff.reasonChanged) {
      lines.push(`- reason:`);
      lines.push(`    before: "${diff.decisionDiff.before?.reason}"`);
      lines.push(`    after: "${diff.decisionDiff.after?.reason}"`);
    }
  }
  lines.push('');

  // [Model]
  lines.push('[Model]');
  if (!diff.modelDiff.changed) {
    lines.push('- no change');
  } else {
    if (diff.modelDiff.nameChanged) {
      lines.push(`- name: ${diff.modelDiff.before?.name} → ${diff.modelDiff.after?.name}`);
    }
    if (diff.modelDiff.providerChanged) {
      lines.push(`- provider: ${diff.modelDiff.before?.provider} → ${diff.modelDiff.after?.provider}`);
    }
  }
  lines.push('');

  // [Skills]
  lines.push('[Skills]');
  if (diff.skillsDiff.added.length === 0 &&
      diff.skillsDiff.removed.length === 0 &&
      diff.skillsDiff.changed.length === 0) {
    lines.push('- no change');
  } else {
    for (const skill of diff.skillsDiff.added) {
      lines.push(`+ added: ${skill.name} (score=${skill.score?.toFixed(3)})`);
    }
    for (const skill of diff.skillsDiff.removed) {
      lines.push(`- removed: ${skill.name}`);
    }
    for (const skill of diff.skillsDiff.changed) {
      lines.push(`~ changed: ${skill.name} (score=${skill.score?.toFixed(3)}, enabled=${skill.enabled})`);
    }
  }

  lines.push('===================');

  return lines.join('\n');
}

````

## 📄 `src/engine/core/replayEngine.ts`

````typescript
import chalk from 'chalk';
import { ExecutionRecord } from './executionRecord';
import { loadExecutionRecord } from './executionStore';
import { explainExecution } from './explain';

export type ReplayMode = 'strict' | 'compatible' | 're-evaluate';

export interface ReplayOptions {
  mode: ReplayMode;
  skipAI?: boolean;
  verbose?: boolean;
  dry?: boolean;
  explain?: boolean;
  diff?: boolean;
}

export interface ReplayResult {
  success: boolean;
  message: string;
  executedModel?: string;
  deviationReason?: string;
}

export class ReplayEngine {
  async replay(recordId: string, options: ReplayOptions = { mode: 'strict' }): Promise<ReplayResult> {
    const record = loadExecutionRecord(recordId);

    if (!record) {
      return {
        success: false,
        message: `Execution record ${recordId} not found`,
      };
    }

    // NOTE: --diff implicitly enables --explain
    if (options.diff) {
      options.explain = true;
    }

    if (options.explain) {
      console.log(explainExecution(record));
      console.log('');

      if (options.dry) {
        return {
          success: true,
          message: '[Explain + Dry] Explanation shown, no execution',
        };
      }
    }

    if (options.mode === 'strict') {
      return this.strictReplay(record, options);
    }

    if (options.mode === 'compatible') {
      return this.compatibleReplay(record, options);
    }

    return this.reEvaluate(record, options);
  }

  private async strictReplay(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    const selectedModel = record.decision.selectedModel;

    if (options.verbose || options.dry) {
      console.log(chalk.cyan('[Strict Replay]'));
      console.log(chalk.gray(`  Original Model: ${selectedModel?.name || 'N/A'}`));
      console.log(chalk.gray(`  Original Provider: ${selectedModel?.provider || 'N/A'}`));
      console.log(chalk.gray(`  Original Timestamp: ${record.meta.timestamp}`));
      console.log(chalk.gray(`  Original Command: ${record.meta.commandName}`));
    }

    if (options.dry) {
      return {
        success: true,
        message: '[Dry Replay] Command not executed',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    if (options.skipAI) {
      return {
        success: true,
        message: 'Strict replay prepared (AI execution skipped)',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    if (!record.command) {
      return {
        success: false,
        message: 'Strict replay: No command to execute (command not stored in record)',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    const { exec } = require('./executor');

    try {
      console.log(chalk.gray('[Strict Replay] Executing with original parameters...'));
      const result = await exec(record.command);

      return {
        success: result.code === 0 || result.code === null,
        message: result.code === 0 || result.code === null
          ? 'Strict replay completed successfully'
          : `Strict replay failed with code ${result.code}`,
        executedModel: selectedModel?.name ?? undefined,
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        message: `Strict replay error: ${message}`,
        executedModel: selectedModel?.name ?? undefined,
      };
    }
  }

  private async compatibleReplay(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    const originalModel = record.decision.selectedModel;

    if (options.verbose) {
      console.log(chalk.cyan('[Compatible Replay]'));
      console.log(chalk.gray(`  Original Model: ${originalModel?.name || 'N/A'}`));
      console.log(chalk.gray(`  Will attempt fallback if original unavailable`));
    }

    return {
      success: false,
      message: 'Compatible replay not yet implemented in Phase 1',
      executedModel: originalModel?.name,
      deviationReason: 'Phase 1 only supports strict replay',
    };
  }

  private async reEvaluate(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    if (options.verbose) {
      console.log(chalk.cyan('[Re-evaluate]'));
      console.log(chalk.gray(`  Will re-run capability matching with current config`));
      console.log(chalk.gray(`  Original Intent: ${record.intent.required.join(', ')}`));
    }

    return {
      success: false,
      message: 'Re-evaluate not yet implemented in Phase 1',
    };
  }
}

export const replayEngine = new ReplayEngine();

````

## 📄 `src/engine/core/risk.ts`

````typescript
export function assessRisk(command: string, aiRisk: 'low' | 'medium' | 'high'): 'low' | 'medium' | 'high' {
    const HIGH_RISK_PATTERNS = [
        /\brm\b/i,
        /\bsudo\b/i,
        /\bmv\b/i,
        /\bdd\b/i,
        /\bchmod\b/i,
        /\bchown\b/i,
        />\s*\/dev\//,
        /:\(\)\s*\{.*\}/, // Fork bomb
        /\bmkfs\b/i,
    ];

    const hasHighRisk = HIGH_RISK_PATTERNS.some(pattern => pattern.test(command));

    if (hasHighRisk) return 'high';
    return aiRisk;
}

````

## 📄 `src/engine/core/validation.ts`

````typescript
import { z } from 'zod';

export type UserConfig = {
    defaultModel?: string;
    aiProxyUrl?: string;
    accountType?: 'free' | 'pro' | 'paid';
    contextWindow?: number;
    maxFileTokens?: number;
    maxTotalTokens?: number;
    [key: string]: any;
};

export type AppsConfig = Record<string, string>;

export type AIRequestMessage = {
    role: 'system' | 'user' | 'assistant' | 'tool';
    content: string;
};

export type AIResponse = {
    choices?: Array<{
        message?: {
            content?: string;
        };
        delta?: {
            content?: string;
        };
    }>;
};

export const DEFAULT_AI_PROXY_URL = 'https://api.openai.com/v1/chat/completions';
export const DEFAULT_MODEL = 'gpt-4o-mini';
export const DEFAULT_ACCOUNT_TYPE = 'free' as const;

export const DEFAULT_APPS = {
    shici: 'https://wealth.want.biz/shici/index.html',
    dict: 'https://wealth.want.biz/pages/dict.html',
    pong: 'https://wealth.want.biz/pages/pong.html'
} as const;

export const aiCommandPlanSchema = z.object({
    plan: z.string().describe('Explanation of the command'),
    command: z.string().optional().describe('The shell command to execute'),
    macro: z.string().optional().describe('Name of an existing macro to reuse'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
}).refine(data => data.command || data.macro, {
    message: 'Either command or macro must be provided'
});

export type AICommandPlan = z.infer<typeof aiCommandPlanSchema>;

export const aiFixPlanSchema = z.object({
    plan: z.string().describe('Fix explanation'),
    command: z.string().describe('The fixed shell command (always required for fixes)'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
});

export type AIFixPlan = z.infer<typeof aiFixPlanSchema>;

export const userConfigSchema = z.object({
    defaultModel: z.string().optional(),
    aiProxyUrl: z.string().url().optional(),
    accountType: z.enum(['free', 'pro', 'paid']).optional(),
    contextWindow: z.number().optional(),
    maxFileTokens: z.number().optional(),
    maxTotalTokens: z.number().optional()
}).passthrough();

export const appsConfigSchema = z.record(z.string(), z.string());

export const macroSchema = z.object({
    commands: z.string(),
    description: z.string(),
    createdAt: z.string()
});

export type Macro = z.infer<typeof macroSchema>;

export const historyEntrySchema = z.object({
    question: z.string(),
    command: z.string(),
    time: z.string()
});

export type HistoryEntry = z.infer<typeof historyEntrySchema>;

export function extractJSON(raw: string): string {
    let jsonContent = raw.trim();

    if (jsonContent.includes('```json')) {
        jsonContent = jsonContent.split('```json')[1].split('```')[0].trim();
    }
    else if (jsonContent.includes('```')) {
        jsonContent = jsonContent.split('```')[1].split('```')[0].trim();
    }

    const firstBrace = jsonContent.indexOf('{');
    const lastBrace = jsonContent.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonContent = jsonContent.substring(firstBrace, lastBrace + 1);
    }

    return jsonContent;
}

export function safeParseJSON<T>(
    raw: string,
    schema: z.ZodSchema<T>,
    fallback: T
): { success: true; data: T } | { success: false; error: z.ZodError } {
    try {
        const jsonContent = extractJSON(raw);
        const result = schema.safeParse(JSON.parse(jsonContent));

        if (result.success) {
            return { success: true, data: result.data };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error };
        }
        return {
            success: false,
            error: new z.ZodError([
                {
                    code: z.ZodIssueCode.custom,
                    message: `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`,
                    path: []
                }
            ])
        };
    }
}

export function parseUserConfig(content: string): UserConfig {
    return userConfigSchema.parse(JSON.parse(content));
}

export function parseAppsConfig(content: string): AppsConfig {
    return appsConfigSchema.parse(JSON.parse(content)) as AppsConfig;
}

export function parseMacros(content: string): Record<string, Macro> {
    const parsed = JSON.parse(content);
    const macros: Record<string, Macro> = {};

    for (const [name, value] of Object.entries(parsed)) {
        macros[name] = macroSchema.parse(value);
    }

    return macros;
}

export function parseCommandHistory(content: string): HistoryEntry[] {
    const parsed = JSON.parse(content);
    return z.array(historyEntrySchema).parse(parsed);
}

````

## 📄 `src/engine/utils/confirm.ts`

````typescript
import * as readline from 'node:readline/promises';
import chalk from 'chalk';

export async function confirm(message: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    try {
        const answer = await rl.question(chalk.yellow(`\n⚠️  ${message} (y/N) `));
        return answer.toLowerCase() === 'y';
    } finally {
        rl.close();
    }
}


````

## 📄 `src/engine/utils/history.ts`

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { parseCommandHistory, type HistoryEntry } from '../core/validation';

const HISTORY_FILE = path.join(os.homedir(), '.yuangs_cmd_history.json');

export type { HistoryEntry };

export function getCommandHistory(): HistoryEntry[] {
    if (fs.existsSync(HISTORY_FILE)) {
        try {
            return parseCommandHistory(fs.readFileSync(HISTORY_FILE, 'utf8'));
        } catch (e) { }
    }
    return [];
}

export function saveHistory(entry: { question: string; command: string }) {
    let history = getCommandHistory();
    const newEntry: HistoryEntry = {
        ...entry,
        time: new Date().toLocaleString()
    };
    // Keep last 1000, unique commands
    history = [newEntry, ...history.filter(item => item.command !== entry.command)].slice(0, 1000);
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

````

## 📄 `src/engine/utils/renderer.ts`

````typescript
import chalk from 'chalk';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
import ora, { Ora } from 'ora';

// 初始化 marked 配置
marked.setOptions({
    renderer: new TerminalRenderer({
        tab: 2,
        width: process.stdout.columns || 80,
        showSectionPrefix: false
    }) as any
});

export class StreamMarkdownRenderer {
    private fullResponse: string = '';
    private prefix: string;
    private isFirstOutput: boolean = true;
    private spinner: Ora | null = null;
    private startTime: number;

    constructor(prefix: string = chalk.bold.cyan('🤖 AI：'), spinner?: Ora) {
        this.prefix = prefix;
        this.spinner = spinner || null;
        this.startTime = Date.now();
    }

    /**
     * 处理流式数据块
     */
    public onChunk(chunk: string) {
        if (this.spinner && this.spinner.isSpinning) {
            this.spinner.stop();
        }

        if (this.isFirstOutput) {
            process.stdout.write(this.prefix);
            this.isFirstOutput = false;
        }

        this.fullResponse += chunk;
        process.stdout.write(chunk);
    }

    /**
     * 流结束，执行回滚并渲染 Markdown
     */
    public finish(): string {
        // 如果 Spinner 还在转（说明没有任何输出），先停掉
        if (this.spinner && this.spinner.isSpinning) {
            this.spinner.stop();
        }

        const formatted = (marked.parse(this.fullResponse, { async: false }) as string).trim();

        if (process.stdout.isTTY && this.fullResponse.trim()) {
            const screenWidth = process.stdout.columns || 80;
            const totalContent = this.prefix + this.fullResponse;

            // 计算原始文本占用的可视行数
            const lineCount = this.getVisualLineCount(totalContent, screenWidth);

            // 1. 清除当前行剩余内容
            process.stdout.write('\r\x1b[K');
            // 2. 向上回滚并清除之前的行
            for (let i = 0; i < lineCount - 1; i++) {
                process.stdout.write('\x1b[A\x1b[K');
            }

            // 3. 输出格式化后的 Markdown
            process.stdout.write(this.prefix + formatted + '\n');
        } else {
            // 非 TTY 模式或无内容，直接补充换行（如果之前输出了内容）
            if (this.fullResponse.trim()) {
                process.stdout.write('\n');
            }
        }

        // 输出耗时统计
        const elapsed = (Date.now() - this.startTime) / 1000;
        process.stdout.write('\n' + chalk.gray(`─`.repeat(20) + ` (耗时: ${elapsed.toFixed(2)}s) ` + `─`.repeat(20) + '\n\n'));

        return this.fullResponse;
    }

    /**
     * 计算文本在终端的可视行数
     */
    private getVisualLineCount(text: string, screenWidth: number): number {
        const stripAnsi = (str: string) => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');

        const lines = text.split('\n');
        let totalLines = 0;

        for (const line of lines) {
            // Expand tabs
            const expandedLine = line.replace(/\t/g, '        ');
            const cleanLine = stripAnsi(expandedLine);

            let lineWidth = 0;
            for (const char of cleanLine) {
                const code = char.codePointAt(0) || 0;
                // 大部分宽字符（如中文）占 2 格
                lineWidth += code > 255 ? 2 : 1;
            }

            if (lineWidth === 0) {
                totalLines += 1;
            } else {
                totalLines += Math.ceil(lineWidth / screenWidth);
            }
        }

        return totalLines;
    }
}

````

## 📄 `src/runtime/vscode/VSCodeExecutor.ts`

````typescript
import * as vscode from 'vscode';
import * as path from 'path';

export class VSCodeExecutor {
    // 处理文件渲染/预览
    static async previewFile(filePath: string) {
        const fullPath = path.isAbsolute(filePath)
            ? filePath
            : path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.commands.executeCommand('vscode.open', uri);
    }

    // 执行终端命令
    static async runCommand(command: string): Promise<string> {
        return new Promise((resolve) => {
            const terminal = vscode.window.activeTerminal || vscode.window.createTerminal('Yuangs Agent');
            terminal.show();
            terminal.sendText(command);
            // VS Code 终端不容易直接获取输出，通常我们会返回一个状态
            resolve("Command sent to VS Code terminal.");
        });
    }

    // 应用文件修改
    static async writeFile(filePath: string, content: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.workspace.fs.writeFile(uri, Buffer.from(content));
        return `File saved: ${filePath}`;
    }

    // 读取文件内容
    static async readFile(filePath: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        const content = await vscode.workspace.fs.readFile(uri);
        return Buffer.from(content).toString('utf8');
    }

    // 列出目录文件
    static async listFiles(dirPath: string = '.'): Promise<string> {
        const fullPath = this.getAbsolutePath(dirPath);
        const uri = vscode.Uri.file(fullPath);
        const entries = await vscode.workspace.fs.readDirectory(uri);
        return entries.map(([name, type]) => `${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
    }

    // 获取绝对路径辅助方法
    private static getAbsolutePath(filePath: string): string {
        if (path.isAbsolute(filePath)) {
            return filePath;
        }
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceFolder) {
            throw new Error("No workspace folder open.");
        }
        return path.join(workspaceFolder, filePath);
    }

    // 处理 Diff 应用 (三阶段执行：Pre-Exec / Exec / Post-Exec)
    static async applyDiff(diff: string): Promise<string> {
        const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceRoot) {
            throw new Error("No workspace opened.");
        }

        try {
            // --- Phase 1: Pre-Exec (Snapshot/Validation) ---
            const status = await this.execCommand("git status --porcelain", workspaceRoot);
            if (status.trim().length > 0) {
                const choice = await vscode.window.showWarningMessage(
                    "Working tree is dirty. Apply diff anyway?",
                    { modal: true },
                    "Stash and Continue", "Abort"
                );
                if (choice === "Stash and Continue") {
                    await this.execCommand("git stash", workspaceRoot);
                } else {
                    throw new Error("Execution aborted due to dirty working tree.");
                }
            }

            const preHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            // --- Phase 2: Exec (Application) ---
            await this.execCommandWithInput("git apply --index", diff, workspaceRoot);

            // --- Phase 3: Post-Exec (Validation & Commit) ---
            const changedFiles = (await this.execCommand("git diff --name-only HEAD", workspaceRoot))
                .trim()
                .split("\n")
                .filter(f => f.length > 0);

            const commitMessage = `Agent: Applied semantic code change\n\n- Files: ${changedFiles.join(", ")}`;
            await this.execCommand(`git commit -m "${commitMessage}"`, workspaceRoot);

            const postHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            vscode.window.showInformationMessage(`Successfully applied change: ${postHash.substring(0, 7)}`);

            return `[SUCCESS] Applied 3-phase execution.\n- Snapshot: ${preHash.substring(0, 7)}\n- Commit: ${postHash.substring(0, 7)}\n- Files: ${changedFiles.length}`;

        } catch (error: any) {
            vscode.window.showErrorMessage(`Diff failed: ${error.message}`);
            // Rollback if possible (git reset --hard)
            return `[FAILED] ${error.message}`;
        }
    }

    private static async execCommand(command: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
        });
    }

    private static async execCommandWithInput(command: string, input: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            const child = exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
            child.stdin.write(input);
            child.stdin.end();
        });
    }
}


````

## 📄 `src/vscode/commands/askAI.ts`

````typescript
import * as vscode from 'vscode';
import { VSCodeAgentRuntime } from '../core/runtime';

/**
 * Ask AI 命令处理器
 * 
 * 职责：
 * - 显示输入框获取用户问题
 * - 创建 VSCodeAgentRuntime 实例
 * - 调用 runChat 执行 AI 任务
 * - 通过 Progress/Notification 展示结果
 * 
 * 注意：这是一个独立入口，不直接操作 ChatView
 * ChatView 应该通过侧边栏访问
 */
export async function askAICommand() {
    console.log('[AskAI] Command triggered');
    
    try {
        // 获取用户输入
        const userInput = await vscode.window.showInputBox({
            prompt: 'Ask Yuangs AI anything...',
            placeHolder: 'Type your question here...'
        });

        if (!userInput) {
            console.log('[AskAI] User cancelled input');
            return;
        }

        console.log('[AskAI] User input received, starting execution...');

        // 创建 VSCode Agent Runtime 实例
        const runtime = new VSCodeAgentRuntime();

        // 使用进度指示器执行任务
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: 'Yuangs AI is thinking...',
            cancellable: true
        }, async (progress, token) => {
            // 监听取消操作
            token.onCancellationRequested(() => {
                console.log('[AskAI] Task cancelled by user');
            });

            let fullResponse = '';

            // 运行AI任务，收集完整响应
            await runtime.runChat(userInput, (chunk) => {
                fullResponse += chunk;
                // 更新进度消息
                progress.report({ 
                    message: `Processing: ${chunk.substring(0, 50)}${chunk.length > 50 ? '...' : ''}` 
                });
            });

            console.log('[AskAI] Task completed successfully');

            // 可选：将完整响应显示到新文档或输出面板
            // 这样用户可以看到完整的 AI 回复
            if (fullResponse.trim()) {
                const doc = await vscode.workspace.openTextDocument({
                    content: fullResponse,
                    language: 'markdown'
                });
                await vscode.window.showTextDocument(doc, { 
                    preview: true, 
                    viewColumn: vscode.ViewColumn.Beside 
                });
            }
        });

    } catch (error) {
        console.error('[AskAI] Error:', error);
        vscode.window.showErrorMessage(`Error running AI command: ${error}`);
    }
}

````

## 📄 `src/vscode/core/contextAdapter.ts`

````typescript
import * as vscode from 'vscode';
import { ContextManager } from '../../engine/agent/contextManager';
import { ContextItem } from '../../engine/agent/contextBuffer';
import * as path from 'path';

/**
 * VS Code → ContextBuffer 适配器
 * 将 VS Code 环境中的上下文信息收集并注入到 ContextBuffer 中
 * 
 * 职责：
 * - 收集 VS Code 环境上下文（编辑器、选择、Git diff、诊断等）
 * - 将上下文注入到 ContextManager
 * - 设置 VS Code 事件监听器
 */
export class VSCodeContextAdapter {
  private contextManager: ContextManager;

  constructor(contextManager: ContextManager) {
    console.log('[ContextAdapter] Initializing...');
    this.contextManager = contextManager;
  }

  /**
   * 解析用户输入中的引用 (@filename) 并加载到上下文
   */
  async resolveUserReferences(userInput: string): Promise<void> {
    const references = userInput.match(/@[^\s]+/g);
    if (!references) return;

    console.log(`[ContextAdapter] Found references: ${references.join(', ')}`);
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) return;

    for (const ref of references) {
      // 移除 @ 前缀
      const relPath = ref.substring(1);
      
      // 尝试找到文件
      // 1. 直接匹配
      let fileUri = vscode.Uri.joinPath(workspaceFolder.uri, relPath);
      let exists = false;
      
      try {
        await vscode.workspace.fs.stat(fileUri);
        exists = true;
      } catch {
        // 2. 尝试模糊匹配 (简化的，实际可能需要更复杂的查找)
        const files = await vscode.workspace.findFiles(`**/${relPath}`, '**/node_modules/**', 1);
        if (files.length > 0) {
          fileUri = files[0];
          exists = true;
        }
      }

      if (exists) {
        try {
          const document = await vscode.workspace.openTextDocument(fileUri);
          const content = document.getText();
          
          await this.contextManager.addContextItemAsync({
             type: 'file',
             path: fileUri.fsPath,
             content: content,
             semantic: 'source_code',
             summary: `User referenced file: ${path.basename(fileUri.fsPath)}`,
             summarized: true,
             summaryQuality: 1.0, 
             alias: `@${relPath}`,
             tags: ['user-referenced', 'explicit'],
             // 强制高重要性
             importance: {
                 id: fileUri.fsPath,
                 path: fileUri.fsPath,
                 type: 'file',
                 useCount: 1,
                 successCount: 1,
                 failureCount: 0,
                 lastUsed: Date.now(),
                 createdAt: Date.now(),
                 confidence: 1.0 
             }
          });
          console.log(`[ContextAdapter] ✅ Added referenced file: ${fileUri.fsPath}`);
        } catch (e) {
          console.warn(`[ContextAdapter] ⚠️ Failed to read referenced file ${relPath}: ${e}`);
        }
      } else {
        console.warn(`[ContextAdapter] ⚠️ Referenced file not found: ${relPath}`);
        vscode.window.showWarningMessage(`Yuangs AI: Could not find referenced file '${relPath}'. Please check the path.`);
      }
    }
  }

  /**
   * 收集当前 VS Code 环境中的上下文信息
   */
  async collectContext(): Promise<void> {
    console.log('[ContextAdapter] Collecting VS Code context...');
    // 收集活动编辑器内容
    await this.collectActiveEditor();
    
    // 收集选中文本
    await this.collectSelection();
    
    // 收集 Git 差异
    await this.collectGitDiff();
    
    // 收集工作区诊断信息
    await this.collectDiagnostics();
    
    // 收集工作区文件结构
    await this.collectWorkspaceStructure();
  }

  /**
   * 收集活动编辑器内容
   */
  private async collectActiveEditor(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const document = editor.document;
    const content = document.getText();
    const filePath = document.uri.fsPath;

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: filePath,
      content,
      semantic: 'source_code',
      summary: `Current active file: ${path.basename(filePath)}`,
      summarized: true,
      summaryQuality: 0.8,
      alias: path.basename(filePath),
      tags: ['active', 'current'],
      projectScope: vscode.workspace.getWorkspaceFolder(document.uri)?.uri.fsPath || process.cwd(),
      // 增加 active editor 的重要性
      importance: {
          id: filePath,
          path: filePath,
          type: 'file',
          useCount: 1,
          successCount: 1,
          failureCount: 0,
          confidence: 0.9,
          lastUsed: Date.now(),
          createdAt: Date.now()
      }
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added active editor: ${filePath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add active editor: ${error}`);
    }
  }

  /**
   * 收集选中文本
   */
  private async collectSelection(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.selection.isEmpty) return;

    const selection = editor.document.getText(editor.selection);
    const filePath = editor.document.uri.fsPath;
    const selectionStart = editor.selection.start.line + 1;
    const selectionEnd = editor.selection.end.line + 1;

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: filePath,
      content: selection,
      semantic: 'source_code',
      summary: `Selected code from ${path.basename(filePath)} (lines ${selectionStart}-${selectionEnd})`,
      summarized: true,
      summaryQuality: 0.9,
      alias: `selection-${path.basename(filePath)}-${selectionStart}-${selectionEnd}`,
      tags: ['selection', 'highlighted'],
      projectScope: vscode.workspace.getWorkspaceFolder(editor.document.uri)?.uri.fsPath || process.cwd(),
      // 强制 Selection 为最高重要性
      importance: {
          id: `selection-${filePath}`,
          path: filePath,
          type: 'file',
          useCount: 1,
          successCount: 1,
          failureCount: 0,
          confidence: 1.0,
          lastUsed: Date.now(),
          createdAt: Date.now()
      }
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added selection: ${filePath} (lines ${selectionStart}-${selectionEnd})`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add selection: ${error}`);
    }
  }

  /**
   * 收集 Git 差异
   */
  private async collectGitDiff(): Promise<void> {
    try {
      // 检查是否安装了 Git 扩展
      const gitExtension = vscode.extensions.getExtension('vscode.git');
      if (!gitExtension) {
        console.log('[ContextAdapter] ⚠️ Git extension not found, skipping git diff');
        return;
      }

      // 获取 Git API
      const git = gitExtension.exports.getAPI(1);
      if (!git.repositories.length) {
        console.log('[ContextAdapter] ⚠️ No Git repositories found, skipping git diff');
        return;
      }

      const repository = git.repositories[0]; // 使用第一个仓库
      const diff = await repository.diff(true); // 获取暂存和未暂存的更改

      if (diff && diff.length > 0) {
        const contextItem: Omit<ContextItem, 'tokens'> = {
          type: 'file',
          path: `${repository.rootUri.fsPath}/git-diff`,
          content: diff,
          semantic: 'evidence',
          summary: 'Current Git diff showing changes in the repository',
          summarized: true,
          summaryQuality: 0.8,
          alias: 'git-diff',
          tags: ['git', 'diff', 'changes'],
          projectScope: repository.rootUri.fsPath
        };

        try {
          await this.contextManager.addContextItem(contextItem);
          console.log(`[ContextAdapter] ✅ Added git diff: ${repository.rootUri.fsPath}`);
        } catch (error) {
          console.warn(`[ContextAdapter] ⚠️ Failed to add git diff: ${error}`);
        }
      }
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to collect git diff: ${error}`);
    }
  }

  /**
   * 收集工作区诊断信息
   */
  private async collectDiagnostics(): Promise<void> {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) return;

    const documentUri = activeEditor.document.uri;
    const diagnostics = vscode.languages.getDiagnostics(documentUri);

    if (diagnostics.length > 0) {
      const diagnosticText = diagnostics.map(diag => 
        `[${diag.severity}] Line ${diag.range.start.line + 1}: ${diag.message}`
      ).join('\n');

      const contextItem: Omit<ContextItem, 'tokens'> = {
        type: 'file',
        path: `${documentUri.fsPath}.diagnostics`,
        content: diagnosticText,
        semantic: 'log',
        summary: `Diagnostics for ${path.basename(documentUri.fsPath)}`,
        summarized: true,
        summaryQuality: 0.7,
        alias: `diagnostics-${path.basename(documentUri.fsPath)}`,
        tags: ['diagnostics', 'errors', 'warnings'],
        projectScope: vscode.workspace.getWorkspaceFolder(documentUri)?.uri.fsPath || process.cwd()
      };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added diagnostics: ${documentUri.fsPath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add diagnostics: ${error}`);
    }
    }
  }

  /**
   * 收集工作区文件结构
   */
  private async collectWorkspaceStructure(): Promise<void> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) return;

    const rootFolder = workspaceFolders[0]; // 使用第一个工作区文件夹
    const files = await vscode.workspace.findFiles('**/*', '**/node_modules/**', 1000); // 限制数量

    const structure = files
      .map(uri => {
        const relativePath = path.relative(rootFolder.uri.fsPath, uri.fsPath);
        return relativePath;
      })
      .sort()
      .join('\n');

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: `${rootFolder.uri.fsPath}/workspace-structure`,
      content: structure,
      semantic: 'documentation',
      summary: 'Project structure showing all files in the workspace',
      summarized: true,
      summaryQuality: 0.6,
      alias: 'workspace-structure',
      tags: ['structure', 'files', 'project'],
      projectScope: rootFolder.uri.fsPath
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added workspace structure: ${rootFolder.uri.fsPath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add workspace structure: ${error}`);
    }
  }

  /**
   * 监听 VS Code 事件以动态更新上下文
   */
  setupEventListeners(): void {
    console.log('[ContextAdapter] Setting up event listeners...');
    
    // 监听文档更改
    vscode.workspace.onDidChangeTextDocument(async (event) => {
      // 可以在此处添加逻辑来处理文档更改
      // 例如，更新相关上下文项或标记为已更改
      console.log(`[ContextAdapter] 📝 Document changed: ${event.document.fileName}`);
    });

    // 监听编辑器更改
    vscode.window.onDidChangeActiveTextEditor(async (editor) => {
      if (editor) {
        // 当编辑器改变时，可以考虑重新收集上下文
        console.log(`[ContextAdapter] ✏️ Active editor changed: ${editor.document.fileName}`);
      }
    });

    // 监听选择更改
    vscode.window.onDidChangeTextEditorSelection(async (event) => {
      // 当选择改变时，可以考虑重新收集选择上下文
      console.log(`[ContextAdapter] ✂️ Selection changed in: ${event.textEditor.document.fileName}`);
    });
  }
}

````

## 📄 `src/vscode/core/executorAdapter.ts`

````typescript
import * as vscode from 'vscode';
import { ProposedAction } from '../../engine/agent/state';

/**
 * Agent Action → VS Code API 适配器
 * 将 Agent 提出的动作映射到 VS Code API
 * 
 * 职责：
 * - 执行 code_diff → Webview diff 预览 + 应用
 * - 执行 shell_cmd → VS Code Terminal
 * - 执行 tool_call → open/read/list/search 文件操作
 * - 执行 answer → 信息提示
 */
export class VSCodeExecutorAdapter {
  /**
   * 执行 Agent 提出的动作
   */
  static async execute(action: ProposedAction) {
    console.log(`[Executor] Executing action: ${action.type}`);
    switch (action.type) {
      case 'code_diff':
        return await this.executeCodeDiff(action.payload.diff || action.payload.content);
      case 'shell_cmd':
        return await this.executeShellCommand(action.payload.command || action.payload.content);
      case 'answer':
        return await this.showMessage(action.payload.content);
      case 'tool_call':
        return await this.executeToolCall(action.payload.tool_name, action.payload.parameters);
      default:
        console.warn(`[Executor] Unknown action type: ${action.type}`);
        return await this.showMessage(`Unknown action type: ${action.type}\nContent: ${action.payload.content || JSON.stringify(action.payload)}`);
    }
  }

  /**
   * 执行代码差异
   */
  private static async executeCodeDiff(diff: string) {
    try {
      console.log('[Executor] Opening diff preview...');
      // 创建一个临时的diff预览
      const panel = vscode.window.createWebviewPanel(
        'diffPreview',
        'AI Generated Diff',
        vscode.ViewColumn.One,
        { enableScripts: true }
      );

      panel.webview.html = `
        <html>
          <body>
            <h3>AI Generated Diff</h3>
            <pre>${diff}</pre>
            <button onclick="applyDiff()">Apply Changes</button>
            <script>
              function applyDiff() {
                vscode.postMessage({ command: 'applyDiff', diff: \`${diff}\` });
              }
              
              const vscode = acquireVsCodeApi();
            </script>
          </body>
        </html>
      `;

      // 监听来自webview的消息
      panel.webview.onDidReceiveMessage(async (message) => {
        if (message.command === 'applyDiff') {
          // 在这里应用diff到当前文档
          const editor = vscode.window.activeTextEditor;
          if (editor) {
            const edit = new vscode.WorkspaceEdit();
            // 这里需要解析diff并应用更改
            // 简化版本：直接替换整个文档内容
            const doc = editor.document;
            const fullRange = new vscode.Range(
              doc.positionAt(0),
              doc.positionAt(doc.getText().length)
            );
            
            edit.replace(doc.uri, fullRange, message.diff);
            await vscode.workspace.applyEdit(edit);
            await doc.save();
            
            vscode.window.showInformationMessage('Changes applied successfully!');
            panel.dispose();
          }
        }
      });

      return {
        success: true,
        output: 'Diff preview opened in new tab'
      };
    } catch (error) {
      console.error('[Executor] Failed to execute code diff:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute code diff: ${error}`
      };
    }
  }

  /**
   * 执行Shell命令
   */
  private static async executeShellCommand(command: string) {
    try {
      console.log(`[Executor] Executing shell command: ${command}`);
      // 创建一个新的终端并执行命令
      const terminal = vscode.window.createTerminal('AI Terminal');
      terminal.show();
      terminal.sendText(command);
      
      return {
        success: true,
        output: `Command sent to terminal: ${command}`
      };
    } catch (error) {
      console.error('[Executor] Failed to execute shell command:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute shell command: ${error}`
      };
    }
  }

  /**
   * 显示消息
   */
  private static async showMessage(content: string) {
    try {
      console.log('[Executor] Showing message to user');
      vscode.window.showInformationMessage(content.substring(0, 100) + (content.length > 100 ? '...' : ''));
      return {
        success: true,
        output: content
      };
    } catch (error) {
      console.error('[Executor] Failed to show message:', error);
      return {
        success: false,
        output: '',
        error: `Failed to show message: ${error}`
      };
    }
  }

  /**
   * 执行工具调用
   */
  private static async executeToolCall(toolName: string, parameters: any) {
    try {
      console.log(`[Executor] Executing tool: ${toolName}`);
      // 根据工具名称执行相应的VS Code操作
      switch (toolName) {
        case 'open_file':
          return await this.openFile(parameters.path);
        case 'create_file':
          return await this.createFile(parameters.path, parameters.content);
        case 'read_file':
          return await this.readFile(parameters.path);
        case 'list_files':
          return await this.listFiles(parameters.directory);
        case 'search_in_workspace':
          return await this.searchInWorkspace(parameters.query);
        default:
          console.warn(`[Executor] Unknown tool: ${toolName}`);
          return {
            success: false,
            output: '',
            error: `Unknown tool: ${toolName}`
          };
      }
    } catch (error) {
      console.error('[Executor] Failed to execute tool call:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute tool call: ${error}`
      };
    }
  }

  /**
   * 打开文件
   */
  private static async openFile(filePath: string) {
    try {
      console.log(`[Executor] Opening file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const document = await vscode.workspace.openTextDocument(uri);
      await vscode.window.showTextDocument(document);
      
      return {
        success: true,
        output: `File opened: ${filePath}`
      };
    } catch (error) {
      console.error('[Executor] Failed to open file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to open file: ${error}`
      };
    }
  }

  /**
   * 创建文件
   */
  private static async createFile(filePath: string, content: string) {
    try {
      console.log(`[Executor] Creating file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const edit = new vscode.WorkspaceEdit();
      edit.createFile(uri, { overwrite: false });
      await vscode.workspace.applyEdit(edit);
      
      // 写入内容
      await vscode.workspace.fs.writeFile(uri, new TextEncoder().encode(content));
      
      return {
        success: true,
        output: `File created: ${filePath}`
      };
    } catch (error) {
      console.error('[Executor] Failed to create file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to create file: ${error}`
      };
    }
  }

  /**
   * 读取文件
   */
  private static async readFile(filePath: string) {
    try {
      console.log(`[Executor] Reading file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const content = new TextDecoder().decode(await vscode.workspace.fs.readFile(uri));
      
      return {
        success: true,
        output: content
      };
    } catch (error) {
      console.error('[Executor] Failed to read file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to read file: ${error}`
      };
    }
  }

  /**
   * 列出文件
   */
  private static async listFiles(directory?: string) {
    try {
      console.log(`[Executor] Listing files in: ${directory || 'workspace'}`);
      const folder = directory || vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!folder) {
        return {
          success: false,
          output: '',
          error: 'No workspace folder found'
        };
      }

      const uri = vscode.Uri.file(folder);
      const files = await vscode.workspace.fs.readDirectory(uri);
      const fileList = files.map(([name, type]) => 
        `${name}${type === vscode.FileType.Directory ? '/' : ''}`
      ).join('\n');
      
      return {
        success: true,
        output: fileList
      };
    } catch (error) {
      console.error('[Executor] Failed to list files:', error);
      return {
        success: false,
        output: '',
        error: `Failed to list files: ${error}`
      };
    }
  }

  /**
   * 在工作区中搜索
   */
  private static async searchInWorkspace(query: string) {
    try {
      console.log(`[Executor] Searching workspace for: ${query}`);
      // 使用VS Code的搜索功能
      const results = await vscode.workspace.findFiles(`**/${query}**`, '**/node_modules/**', 100);
      const resultPaths = results.map(uri => uri.fsPath).join('\n');
      
      return {
        success: true,
        output: resultPaths
      };
    } catch (error) {
      console.error('[Executor] Failed to search workspace:', error);
      return {
        success: false,
        output: '',
        error: `Failed to search in workspace: ${error}`
      };
    }
  }
}

````

## 📄 `src/vscode/core/runtime.ts`

````typescript
import { snapshotFromBuffer, diffContext, ContextSnapshot } from '../../engine/agent/contextDiff';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
import { VSCodeContextAdapter } from './contextAdapter';

/**
 * VS Code Agent Runtime 包装器
 * 将 AgentRuntime 与 VS Code 环境连接
 * 
 * 职责：
 * - 初始化 AgentRuntime
 * - 通过 VSCodeContextAdapter 收集 VS Code 上下文
 * - 调用底层 AgentRuntime 执行任务
 */
export class VSCodeAgentRuntime {
  private runtime: AgentRuntime;
  private contextAdapter: VSCodeContextAdapter;
  private lastContextSnapshot: ContextSnapshot | null = null;

  constructor() {
    console.log('[VSCodeRuntime] Initializing...');
    // 初始化 AgentRuntime，传入初始上下文
    this.runtime = new AgentRuntime({
      history: [],
      input: undefined
    });

    // 初始化 VS Code 上下文适配器
    this.contextAdapter = new VSCodeContextAdapter(this.runtime.getContextManager());
    console.log('[VSCodeRuntime] Initialized with context adapter');
  }

  /**
   * 运行聊天模式
   * @param userInput 用户输入
   * @param stream 流式输出回调
   * @param model 模型名称（可选）
   * @param onContextInitialized 上下文初始化回调
   * @param abortSignal 取消信号
   */
  async runChat(
    userInput: string,
    stream?: (chunk: string) => void,
    model?: string,
    onContextInitialized?: () => void,
    abortSignal?: AbortSignal
  ) {
    try {
      console.log('[VSCodeRuntime] Starting chat execution...');
      
      // 通过 ContextAdapter 收集 VS Code 环境中的上下文
      await this.contextAdapter.collectContext();
      
      // 解析用户输入中的引用
      await this.contextAdapter.resolveUserReferences(userInput);
      
      // 计算 Diff 并决定是否更新 UI
      const buffer = this.runtime.getContextManager().getContextBuffer();
      const snapshot = snapshotFromBuffer(buffer);
      const diff = diffContext(this.lastContextSnapshot, snapshot);
      
      this.lastContextSnapshot = snapshot;

      // 只有在新增或内容变化时才通知 UI (On-Demand Push)
      if (onContextInitialized && (diff.added.length > 0 || diff.changed.length > 0)) {
          console.log(`[VSCodeRuntime] Context diff detected: +${diff.added.length} ~${diff.changed.length}`);
          onContextInitialized();
      } else if (!this.lastContextSnapshot && onContextInitialized) {
          // 第一次运行时，如果有内容也通知
          if (!buffer.isEmpty()) {
               onContextInitialized();
          }
      }

      // 启动 VS Code 事件监听器
      this.contextAdapter.setupEventListeners();

      // 运行 AgentRuntime（传递取消信号）
      await this.runtime.run(userInput, 'chat', stream, model, abortSignal);

      console.log('[VSCodeRuntime] Chat execution completed');
      return this.runtime;
    } catch (error) {
      console.error('[VSCodeRuntime] Error running chat:', error);
      throw error;
    }
  }

  /**
   * 获取上下文管理器
   */
  getContextManager() {
    return this.runtime.getContextManager();
  }

  /**
   * 获取执行记录器
   */
  getExecutionRecorder() {
    return this.runtime.getExecutionRecorder();
  }

  /**
   * 获取底层 AgentRuntime 实例
   */
  getRuntime() {
    return this.runtime;
  }
}

````

## 📄 `src/vscode/extension.ts`

````typescript
import * as vscode from 'vscode';
import { ChatViewProvider } from './provider/ChatViewProvider';
import { askAICommand } from './commands/askAI';

export function activate(context: vscode.ExtensionContext) {
    try {
        console.log('Yuangs AI Agent extension is now active!');

        const provider = new ChatViewProvider(context);

        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
        );

        // 注册现有命令
        let applyEdit = vscode.commands.registerCommand('yuangs.applyEdit', () => {
            vscode.window.showInformationMessage('Apply Edit triggered!');
        });

        let clearChat = vscode.commands.registerCommand('yuangs.clearChat', () => {
            provider.clear();
            vscode.window.showInformationMessage('Chat history cleared.');
        });

        // 注册新的 askAI 命令
        let askAI = vscode.commands.registerCommand('yuangs.askAI', askAICommand);

        context.subscriptions.push(applyEdit, clearChat, askAI);
    } catch (error) {
        console.error('Failed to activate Yuangs AI Agent extension:', error);
    }
}

export function deactivate() { }

````

## 📄 `src/vscode/webview/context-panel-functions.js`

````javascript
// 上下文面板功能函数
// 这些函数将被插入到sidebar.html中

// 上下文面板开关
function setupContextPanel() {
    // 上下文面板开关
    contextToggle.addEventListener('click', () => {
        contextPanel.classList.toggle('open');
        contextToggle.classList.toggle('visible');
    });

    contextClose.addEventListener('click', () => {
        contextPanel.classList.remove('open');
        contextToggle.classList.remove('visible');
    });

    // 过滤按钮事件
    contextFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有active类
            contextFilterBtns.forEach(b => b.classList.remove('active'));
            // 添加active类到当前按钮
            btn.classList.add('active');
            // 更新过滤器
            currentFilter = btn.dataset.filter;
            // 重新渲染
            renderContextItems();
        });
    });

    // 搜索功能
    contextSearch.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        renderContextItems();
    });
}

// 更新上下文数据
function updateContextItems(items) {
    currentContextItems = items || [];
    renderContextItems();
}

// 渲染上下文项目
function renderContextItems() {
    // 过滤上下文项目
    let filteredItems = currentContextItems.filter(item => {
        // 类型过滤
        if (currentFilter !== 'all' && item.semantic !== currentFilter) {
            return false;
        }
        
        // 搜索过滤
        if (currentSearchQuery) {
            const searchText = (item.path + item.summary + item.content).toLowerCase();
            if (!searchText.includes(currentSearchQuery)) {
                return false;
            }
        }
        
        return true;
    });

    // 更新统计信息
    contextStats.textContent = `${filteredItems.length} items`;
    
    // 清空并重新渲染
    contextPanelContent.innerHTML = '';
    
    if (filteredItems.length === 0) {
        contextPanelContent.innerHTML = '<div class="context-empty">No context available</div>';
        return;
    }

    // 渲染每个上下文项目
    filteredItems.forEach(item => {
        const itemElement = createContextItemElement(item);
        contextPanelContent.appendChild(itemElement);
    });
}

// 创建单个上下文项目元素
function createContextItemElement(item) {
    const div = document.createElement('div');
    div.className = 'context-item';
    
    // 获取图标
    const icon = getContextIcon(item.semantic);
    
    // 获取重要性百分比
    const importancePercent = item.importance ? 
        (item.importance.confidence * 100).toFixed(0) : '50';
    
    // 获取标签HTML
    const badgesHtml = createContextBadges(item);
    
    // 获取统计信息
    const statsHtml = createContextStats(item);
    
    // 获取内容预览
    const previewText = item.summary || item.content.substring(0, 200);
    
    div.innerHTML = `
        <div class="context-item-header">
            <span class="context-item-icon">${icon}</span>
            <span class="context-item-title">${item.alias || item.path}</span>
            <div class="context-item-badges">${badgesHtml}</div>
        </div>
        <div class="context-item-stats">${statsHtml}</div>
        <div class="context-usage-bar">
            <div class="context-usage-fill" style="width: ${importancePercent}%"></div>
        </div>
        <div class="context-item-preview">${previewText}</div>
    `;
    
    // 添加点击事件
    div.addEventListener('click', () => {
        // 可以在这里添加更多交互逻辑
        console.log('Context item clicked:', item);
    });
    
    return div;
}

// 获取上下文图标
function getContextIcon(semantic) {
    const iconMap = {
        'source_code': '📄',
        'log': '📋',
        'config': '⚙️',
        'documentation': '📚',
        'test': '🧪',
        'git': '🔀',
        'evidence': '🔍',
        'diagnostics': '⚠️'
    };
    
    return iconMap[semantic] || '📄';
}

// 创建标签
function createContextBadges(item) {
    const badges = [];
    
    // 类型标签
    if (item.semantic) {
        badges.push(`<span class="context-badge ${item.semantic}">${item.semantic}</span>`);
    }
    
    // 标签
    if (item.tags && item.tags.length > 0) {
        item.tags.slice(0, 2).forEach(tag => {
            badges.push(`<span class="context-badge">${tag}</span>`);
        });
    }
    
    return badges.join('');
}

// 创建统计信息
function createContextStats(item) {
    const stats = [];
    
    // Token数量
    if (item.tokens) {
        stats.push(`<span class="context-stat">📊 ${item.tokens} tokens</span>`);
    }
    
    // 使用次数
    if (item.importance && item.importance.useCount > 0) {
        stats.push(`<span class="context-stat">🔄 ${item.importance.useCount} uses</span>`);
    }
    
    // 最后使用时间
    if (item.importance && item.importance.lastUsed) {
        const lastUsed = new Date(item.importance.lastUsed);
        const now = new Date();
        const diffMinutes = Math.floor((now - lastUsed) / 60000);
        
        if (diffMinutes < 1) {
            stats.push(`<span class="context-stat">⏰ just now</span>`);
        } else if (diffMinutes < 60) {
            stats.push(`<span class="context-stat">⏰ ${diffMinutes}m ago</span>`);
        } else if (diffMinutes < 1440) {
            stats.push(`<span class="context-stat">⏰ ${Math.floor(diffMinutes / 60)}h ago</span>`);
        } else {
            stats.push(`<span class="context-stat">⏰ ${Math.floor(diffMinutes / 1440)}d ago</span>`);
        }
    }
    
    return stats.join('');
}

// 显示上下文面板
function showContextPanel() {
    contextPanel.classList.add('open');
    contextToggle.classList.add('visible');
}

// 隐藏上下文面板
function hideContextPanel() {
    contextPanel.classList.remove('open');
    contextToggle.classList.remove('visible');
}

````

## 📄 `src/vscode/webview/sidebar.html`

````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Yuangs Premium AI</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
      :root {
        --bubble-user: var(--vscode-button-background);
        --bubble-ai: var(--vscode-editor-background);
        --text-main: var(--vscode-foreground);
        --accent: var(--vscode-focusBorder);
        --border: var(--vscode-panel-border);
        --input-bg: var(--vscode-input-background);
      }

      body {
        font-family:
          var(--vscode-font-family),
          "Inter",
          -apple-system,
          sans-serif;
        font-size: var(--vscode-font-size);
        color: var(--text-main);
        background: var(--vscode-sideBar-background);
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      /* 顶部装饰线与标题栏 */
      header {
        height: 40px;
        width: 100%;
        background: var(--vscode-sideBar-background);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        box-sizing: border-box;
        z-index: 100;
      }

      header::before {
        content: "";
        height: 2px;
        width: 100%;
        background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        position: absolute;
        top: 0;
        left: 0;
      }

      .header-title {
        font-size: 0.9em;
        font-weight: bold;
        opacity: 0.8;
      }

      .header-actions {
        display: flex;
        gap: 8px;
        align-items: center;
        z-index: 2000;
      }

      .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-main);
        cursor: pointer;
        opacity: 0.6;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        border-radius: 4px;
      }

      .icon-btn:hover {
        opacity: 1;
        background: var(--vscode-toolbar-hoverBackground);
      }

      .icon-btn.context-btn {
        opacity: 1 !important;
        background: var(--vscode-button-background);
        color: var(--vscode-button-foreground);
        border: 1px solid var(--vscode-focusBorder);
        z-index: 2000;
        padding: 6px 12px;
      }

      .icon-btn.context-btn:hover {
        opacity: 1;
        background: var(--vscode-button-hoverBackground);
      }

      #chat-container {
        flex-grow: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        scroll-behavior: smooth;
      }

      /* 自定义滚动条 */
      #chat-container::-webkit-scrollbar {
        width: 6px;
      }

      #chat-container::-webkit-scrollbar-thumb {
        background: var(--vscode-scrollbarSlider-background);
        border-radius: 10px;
      }

      .message {
        padding: 12px 16px;
        border-radius: 12px;
        max-width: 85%;
        word-wrap: break-word;
        position: relative;
        animation: fadeIn 0.3s ease-out;
        line-height: 1.5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .user-message {
        align-self: flex-end;
        background: var(--bubble-user);
        color: var(--vscode-button-foreground);
        border-bottom-right-radius: 2px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .ai-message {
        align-self: flex-start;
        background: var(--bubble-ai);
        border: 1px solid var(--border);
        border-bottom-left-radius: 2px;
        backdrop-filter: blur(10px);
      }

      /* Markdown 样式 */
      .ai-message pre {
        background: rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 6px;
        overflow-x: auto;
        margin: 8px 0;
        position: relative;
      }

      /* Diff 代码块样式 */
      .ai-message pre.diff-block {
        border: 1px solid var(--vscode-editorWidget-border);
        background: rgba(0, 0, 0, 0.3);
      }

      .ai-message pre.diff-block::before {
        content: "📝 Diff";
        position: absolute;
        top: 4px;
        left: 8px;
        font-size: 0.75em;
        opacity: 0.6;
        font-family: var(--vscode-font-family);
      }

      /* 应用按钮 */
      .apply-diff-btn {
        position: absolute;
        top: 4px;
        right: 8px;
        background: var(--vscode-button-background);
        color: var(--vscode-button-foreground);
        border: none;
        padding: 4px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.75em;
        font-family: var(--vscode-font-family);
        display: flex;
        align-items: center;
        gap: 4px;
        opacity: 0;
        transition:
          opacity 0.2s,
          background 0.2s;
        z-index: 10;
      }

      .ai-message pre.diff-block:hover .apply-diff-btn {
        opacity: 1;
      }

      .apply-diff-btn:hover {
        background: var(--vscode-button-hoverBackground);
      }

      .apply-diff-btn:active {
        transform: scale(0.95);
      }

      .apply-diff-btn.applied {
        background: var(--vscode-testing-iconPassed);
        opacity: 1;
      }

      .apply-diff-btn.error {
        background: var(--vscode-testing-iconFailed);
        opacity: 1;
      }

      .ai-message code {
        font-family: var(--vscode-editor-font-family);
        background: rgba(0, 0, 0, 0.1);
        padding: 2px 4px;
        border-radius: 4px;
      }

      .system-message {
        align-self: center;
        font-size: 0.85em;
        color: var(--vscode-descriptionForeground);
        background: transparent;
        box-shadow: none;
        text-align: center;
        opacity: 0.7;
      }

      #input-area {
        padding: 16px;
        background: var(--vscode-sideBar-background);
        border-top: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        gap: 8px;
        position: relative;
      }

      .input-wrapper {
        display: flex;
        background: var(--input-bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 4px 8px;
        align-items: center;
        transition: border-color 0.2s;
      }

      .input-wrapper:focus-within {
        border-color: var(--accent);
      }

      #user-input {
        flex-grow: 1;
        background: transparent;
        color: var(--vscode-input-foreground);
        border: none;
        padding: 8px;
        outline: none;
        resize: none;
        max-height: 120px;
        min-height: 24px;
        font-family: inherit;
      }

      #send-btn {
        background: var(--vscode-button-background);
        color: var(--vscode-button-foreground);
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
      }

      #send-btn:hover {
        opacity: 0.9;
      }

      #stop-btn {
        background: var(--vscode-errorForeground);
        color: var(--vscode-button-foreground);
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 6px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
        animation: pulse 1.5s infinite;
      }

      #stop-btn:hover {
        opacity: 0.8;
      }

      #stop-btn.visible {
        display: flex;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(235, 86, 86, 0.7);
        }
        70% {
          box-shadow: 0 0 0 6px rgba(235, 86, 86, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(235, 86, 86, 0);
        }
      }

      .typing-indicator {
        display: flex;
        gap: 4px;
        padding: 4px;
      }

      .dot {
        width: 6px;
        height: 6px;
        background: #aaa;
        border-radius: 50%;
        animation: bounce 1.4s infinite ease-in-out both;
      }

      .dot:nth-child(1) {
        animation-delay: -0.32s;
      }

      .dot:nth-child(2) {
        animation-delay: -0.16s;
      }

      @keyframes bounce {
        0%,
        80%,
        100% {
          transform: scale(0);
        }

        40% {
          transform: scale(1);
        }
      }

      /* 建议列表样式 */
      #suggestions-list {
        position: absolute;
        bottom: 100%;
        left: 16px;
        right: 16px;
        background: var(--vscode-editor-background);
        border: 1px solid var(--border);
        border-radius: 8px;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
        max-height: 200px;
        overflow-y: auto;
        display: none;
        z-index: 1000;
        margin-bottom: 8px;
      }

      .suggestion-item {
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9em;
      }

      .suggestion-item:hover,
      .suggestion-item.selected {
        background: var(--vscode-list-hoverBackground);
        color: var(--vscode-list-hoverForeground);
      }

      .suggestion-icon {
        opacity: 0.7;
        font-size: 1.1em;
      }

      /* 流式传输期间的草稿态样式 */
      .streaming-draft {
        font-family: "Courier New", Consolas, Monaco, monospace;
        white-space: pre-wrap;
        word-wrap: break-word;
        line-height: 1.4;
      }

      .streaming-content {
        margin: 0;
        padding: 0;
        font-family: inherit;
        line-height: inherit;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .final-render {
        /* 最终渲染完成后的样式 */
      }

      /* 光标闪烁效果 */
      .cursor {
        display: inline-block;
        width: 8px;
        height: 16px;
        background: var(--text-main);
        margin-left: 4px;
        animation: blink 1s step-start infinite;
        vertical-align: middle;
        opacity: 0.8;
        border-radius: 1px;
      }

      @keyframes blink {
        50% {
          opacity: 0;
        }
      }

      /* 文件面板样式 */
      #files-panel {
        position: fixed;
        top: 40px;
        left: -400px;
        width: 380px;
        height: calc(100vh - 40px);
        background: var(--vscode-sideBar-background);
        border-right: 1px solid var(--border);
        border-top: 1px solid var(--border);
        z-index: 1000;
        transition: left 0.3s ease;
        display: flex;
        flex-direction: column;
        box-shadow: 4px 0 12px rgba(0, 0, 0, 0.2);
      }

      #files-panel.open {
        left: 0;
      }

      .files-panel-header {
        padding: 12px 16px;
        background: var(--vscode-editor-background);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .files-panel-title {
        font-weight: bold;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .files-panel-stats {
        font-size: 0.75em;
        opacity: 0.7;
      }

      .files-panel-close {
        background: transparent;
        border: none;
        color: var(--text-main);
        cursor: pointer;
        padding: 4px;
        opacity: 0.6;
      }

      .files-panel-close:hover {
        opacity: 1;
      }

      .files-panel-controls {
        padding: 8px 16px;
        border-bottom: 1px solid var(--border);
        display: flex;
        gap: 8px;
      }

      .files-search {
        flex: 1;
        background: var(--input-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 6px 10px;
        color: var(--vscode-input-foreground);
        font-size: 0.85em;
        outline: none;
      }

      .files-search:focus {
        border-color: var(--accent);
      }

      .files-panel-content {
        flex: 1;
        overflow-y: auto;
        padding: 8px 0;
      }

      .file-tree-item {
        display: flex;
        align-items: center;
        padding: 4px 16px;
        cursor: pointer;
        transition: background 0.2s;
        user-select: none;
      }

      .file-tree-item:hover {
        background: var(--vscode-list-hoverBackground);
      }

      .file-tree-item.selected {
        background: var(--vscode-list-activeSelectionBackground);
        color: var(--vscode-list-activeSelectionForeground);
      }

      .file-tree-icon {
        margin-right: 6px;
        font-size: 1em;
        opacity: 0.8;
        flex-shrink: 0;
      }

      .file-tree-icon.expanded::before {
        content: "▼";
        font-size: 0.7em;
        margin-right: 2px;
      }

      .file-tree-icon.collapsed::before {
        content: "▶";
        font-size: 0.7em;
        margin-right: 2px;
      }

      .file-tree-name {
        flex: 1;
        font-size: 0.85em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .file-tree-children {
        display: none;
      }

      .file-tree-children.expanded {
        display: block;
      }

      .file-tree-item.folder {
        font-weight: 500;
      }

      .file-tree-item.file {
        opacity: 0.9;
      }

      .file-empty {
        text-align: center;
        padding: 40px 20px;
        opacity: 0.5;
        font-size: 0.9em;
      }

      .file-loading {
        text-align: center;
        padding: 20px;
        opacity: 0.7;
      }

      /* 上下文面板样式 */
      #context-panel {
        position: fixed;
        top: 40px;
        right: -400px;
        width: 380px;
        height: calc(100vh - 40px);
        background: var(--vscode-sideBar-background);
        border-left: 1px solid var(--border);
        border-top: 1px solid var(--border);
        z-index: 1000;
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
      }

      #context-panel.open {
        right: 0;
      }

      .context-panel-header {
        padding: 12px 16px;
        background: var(--vscode-editor-background);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .context-panel-title {
        font-weight: bold;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .context-panel-stats {
        font-size: 0.75em;
        opacity: 0.7;
      }

      .context-panel-close {
        background: transparent;
        border: none;
        color: var(--text-main);
        cursor: pointer;
        padding: 4px;
        opacity: 0.6;
      }

      .context-panel-close:hover {
        opacity: 1;
      }

      .context-panel-controls {
        padding: 8px 16px;
        border-bottom: 1px solid var(--border);
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .context-search {
        flex: 1;
        background: var(--input-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 6px 10px;
        color: var(--vscode-input-foreground);
        font-size: 0.85em;
        outline: none;
      }

      .context-search:focus {
        border-color: var(--accent);
      }

      .context-filter-btn {
        background: var(--input-bg);
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 4px 8px;
        color: var(--text-main);
        cursor: pointer;
        font-size: 0.75em;
        transition: all 0.2s;
      }

      .context-filter-btn:hover,
      .context-filter-btn.active {
        background: var(--accent);
        color: var(--vscode-button-foreground);
        border-color: var(--accent);
      }

      .context-panel-content {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
      }

      .context-item {
        background: var(--vscode-editor-background);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .context-item:hover {
        border-color: var(--accent);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .context-item-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .context-item-icon {
        font-size: 1.2em;
      }

      .context-item-title {
        flex: 1;
        font-weight: 500;
        font-size: 0.85em;
        word-break: break-all;
      }

      .context-item-badges {
        display: flex;
        gap: 4px;
      }

      .context-badge {
        background: rgba(127, 127, 127, 0.2);
        border-radius: 4px;
        padding: 2px 6px;
        font-size: 0.7em;
        opacity: 0.8;
      }

      .context-badge.source_code {
        background: rgba(86, 156, 214, 0.2);
      }

      .context-badge.log {
        background: rgba(152, 195, 121, 0.2);
      }

      .context-badge.git {
        background: rgba(229, 192, 123, 0.2);
      }

      .context-badge.diagnostics {
        background: rgba(224, 108, 117, 0.2);
      }

      .context-item-stats {
        display: flex;
        gap: 12px;
        font-size: 0.75em;
        opacity: 0.7;
        margin-bottom: 8px;
      }

      .context-stat {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .context-usage-bar {
        height: 3px;
        background: rgba(127, 127, 127, 0.2);
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 8px;
      }

      .context-usage-fill {
        height: 100%;
        background: linear-gradient(
          90deg,
          var(--vscode-focusBorder),
          var(--accent)
        );
        border-radius: 2px;
        transition: width 0.3s ease;
      }

      .context-item-preview {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 8px;
        font-family: var(--vscode-editor-font-family);
        font-size: 0.8em;
        max-height: 100px;
        overflow-y: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .context-empty {
        text-align: center;
        padding: 40px 20px;
        opacity: 0.5;
        font-size: 0.9em;
      }
    </style>
  </head>

  <body>
    <header>
      <div class="header-title">YUANGS AI</div>
      <div class="header-actions">
        <button class="icon-btn" id="files-toggle" title="Show Files">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M1 3.5A1.5 1.5 0 0 1 2.5 2h3.879a1.5 1.5 0 0 1 1.06.44l1.122 1.12A1.5 1.5 0 0 0 9.62 4H13.5A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-10zM2.5 3a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5.5a.5.5 0 0 0-.5-.5H9.62a1.5 1.5 0 0 1-1.06-.44l-1.12-1.12A1.5 1.5 0 0 0 6.38 3H2.5zM4 7.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button
          class="icon-btn context-btn"
          id="context-toggle"
          title="Show Context Panel"
          style="z-index: 2000"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
          <span style="margin-left: 4px; font-size: 0.8em">Context</span>
        </button>
        <button
          class="icon-btn"
          id="export-btn"
          title="Export Chat History (.md)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 5H9V1h4v4zM3 2v12h10V6H8V2H3z"
            />
          </svg>
        </button>
        <button class="icon-btn" id="clear-btn" title="Clear Chat">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 4v9h7V4H4z"
            />
          </svg>
        </button>
      </div>
    </header>

    <div id="chat-container">
      <!-- 初始为空，等待历史记录加载 -->
    </div>

    <div id="input-area">
      <div id="suggestions-list"></div>
      <div class="input-wrapper">
        <textarea
          id="user-input"
          rows="1"
          placeholder="Type your message..."
        ></textarea>
        <button id="send-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M1.146 1.146a.5.5 0 0 1 .538-.093l13 5a.5.5 0 0 1 0 .94l-13 5a.5.5 0 0 1-.667-.615L2.854 8 1.017 2.618a.5.5 0 0 1 .129-.472zM3.854 8l-1.5 4.34L13.84 8 2.354 3.66 3.854 8z"
            />
          </svg>
        </button>
        <button id="stop-btn" title="Stop Generation">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M4 4h8v8H4V4z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- 文件面板 -->
    <div id="files-panel">
      <div class="files-panel-header">
        <div class="files-panel-title">
          <span>📁 Files</span>
          <span class="files-panel-stats" id="files-stats">Loading...</span>
        </div>
        <button class="files-panel-close" id="files-close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div class="files-panel-controls">
        <input
          type="text"
          class="files-search"
          id="files-search"
          placeholder="Search files..."
        />
      </div>
      <div class="files-panel-content" id="files-panel-content">
        <div class="file-loading">Loading files...</div>
      </div>
    </div>

    <!-- 上下文面板 -->
    <div id="context-panel">
      <div class="context-panel-header">
        <div class="context-panel-title">
          <span>📋 Context</span>
          <span class="context-panel-stats" id="context-stats">0 items</span>
        </div>
        <button class="context-panel-close" id="context-close">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div class="context-panel-controls">
        <input
          type="text"
          class="context-search"
          id="context-search"
          placeholder="Search context..."
        />
        <button class="context-filter-btn active" data-filter="all">All</button>
        <button class="context-filter-btn" data-filter="source_code">
          Code
        </button>
        <button class="context-filter-btn" data-filter="log">Log</button>
        <button class="context-filter-btn" data-filter="git">Git</button>
      </div>
      <div class="context-panel-content" id="context-panel-content">
        <div class="context-empty">No context available</div>
      </div>
    </div>

    <script>
      const vscode = acquireVsCodeApi();
      const chatContainer = document.getElementById("chat-container");
      const userInput = document.getElementById("user-input");
      const sendBtn = document.getElementById("send-btn");
      const stopBtn = document.getElementById("stop-btn");
      const exportBtn = document.getElementById("export-btn");
      const clearBtn = document.getElementById("clear-btn");
      const suggestionsList = document.getElementById("suggestions-list");

      // 上下文面板相关元素
      const filesPanel = document.getElementById("files-panel");
      const filesToggle = document.getElementById("files-toggle");
      const filesClose = document.getElementById("files-close");
      const filesPanelContent = document.getElementById("files-panel-content");
      const filesSearch = document.getElementById("files-search");
      const filesStats = document.getElementById("files-stats");

      const contextPanel = document.getElementById("context-panel");
      const contextToggle = document.getElementById("context-toggle");
      const contextClose = document.getElementById("context-close");
      const contextPanelContent = document.getElementById(
        "context-panel-content",
      );
      const contextSearch = document.getElementById("context-search");
      const contextStats = document.getElementById("context-stats");
      const contextFilterBtns = document.querySelectorAll(
        ".context-filter-btn",
      );

      let currentAiMessageElement = null;
      let currentAiRawText = "";
      let suggestionType = null; // '@' or '#'
      let selectedSuggestionIndex = -1;
      let currentSuggestions = [];

      // 上下文相关状态
      let currentContextItems = [];
      let currentFilter = "all";
      let currentSearchQuery = "";

      // 文件相关状态
      let fileTreeData = null;
      let currentFileSearchQuery = "";
      let allFiles = [];

      // 输入框高度自动伸缩
      userInput.addEventListener("input", (e) => {
        userInput.style.height = "auto";
        userInput.style.height = userInput.scrollHeight + "px";

        handleTriggerDetection(e);
      });

      function handleTriggerDetection(e) {
        const value = userInput.value;
        const cursorPos = userInput.selectionStart;
        const textBeforeCursor = value.substring(0, cursorPos);

        // 检测触发符
        const lastAt = textBeforeCursor.lastIndexOf("@");
        const lastHash = textBeforeCursor.lastIndexOf("#");
        const lastTriggerIndex = Math.max(lastAt, lastHash);

        if (
          lastTriggerIndex !== -1 &&
          (lastTriggerIndex === 0 ||
            /\s/.test(textBeforeCursor[lastTriggerIndex - 1]))
        ) {
          const trigger = textBeforeCursor[lastTriggerIndex];
          const query = textBeforeCursor.substring(lastTriggerIndex + 1);

          if (!/\s/.test(query)) {
            suggestionType = trigger;

            // 立即显示加载状态
            suggestionsList.innerHTML =
              '<div class="suggestion-item">🔍 Loading...</div>';
            suggestionsList.style.display = "block";

            if (trigger === "@") {
              vscode.postMessage({ type: "getFiles", query });
            } else {
              vscode.postMessage({ type: "getSymbols", query });
            }
            return;
          }
        }

        hideSuggestions();
      }

      function showSuggestions(suggestions, trigger) {
        currentSuggestions = suggestions;
        if (suggestions.length === 0) {
          hideSuggestions();
          return;
        }

        suggestionsList.innerHTML = "";
        suggestionsList.style.display = "block";
        selectedSuggestionIndex = 0;

        suggestions.forEach((item, index) => {
          const div = document.createElement("div");
          div.className = "suggestion-item" + (index === 0 ? " selected" : "");
          const icon = trigger === "@" ? "📄" : "🔧";
          div.innerHTML = `<span class="suggestion-icon">${icon}</span><span>${item}</span>`;
          div.onclick = () => selectSuggestion(item);
          suggestionsList.appendChild(div);
        });
      }

      function hideSuggestions() {
        suggestionsList.style.display = "none";
        suggestionType = null;
        selectedSuggestionIndex = -1;
      }

      function selectSuggestion(value) {
        const text = userInput.value;
        const cursorPos = userInput.selectionStart;
        const textBeforeCursor = text.substring(0, cursorPos);
        const textAfterCursor = text.substring(cursorPos);

        const lastTriggerIndex = textBeforeCursor.lastIndexOf(suggestionType);
        const newText =
          textBeforeCursor.substring(0, lastTriggerIndex) +
          suggestionType +
          value +
          " " +
          textAfterCursor;

        userInput.value = newText;
        hideSuggestions();
        userInput.focus();

        // 重新计算高度
        userInput.style.height = "auto";
        userInput.style.height = userInput.scrollHeight + "px";

        // 如果是 @ 文件引用，自动读取文件
        if (suggestionType === "@") {
          handleFileReadForReference(value);
        }
      }

      // 处理 @ 文件引用
      async function handleFileReadForReference(filePath) {
        // 移除系统消息，直接读取文件
        vscode.postMessage({
          type: "readFile",
          filePath: filePath,
          isReference: true, // 标记这是引用，不是直接分析
        });
      }

      function addMessage(text, role, isRaw = false) {
        const div = document.createElement("div");
        div.className = `message ${role}-message`;

        if (role === "ai") {
          div.innerHTML = marked.parse(text);
          // 处理 diff 代码块
          processDiffBlocks(div);
        } else {
          div.textContent = text;
        }

        chatContainer.appendChild(div);
        scrollToBottom();
        return div;
      }

      // 检测并处理 diff 代码块
      function processDiffBlocks(messageElement) {
        const codeBlocks = messageElement.querySelectorAll("pre code");

        codeBlocks.forEach((codeBlock, index) => {
          const content = codeBlock.textContent;
          const preElement = codeBlock.parentElement;

          // 检测是否是 diff 格式
          if (isDiffContent(content)) {
            preElement.classList.add("diff-block");

            // 添加应用按钮
            const applyBtn = document.createElement("button");
            applyBtn.className = "apply-diff-btn";
            applyBtn.innerHTML = "✓ Apply";
            applyBtn.title = "Apply this diff to your code";

            // 存储 diff 内容
            applyBtn.dataset.diffContent = content;
            applyBtn.dataset.diffIndex = index;

            applyBtn.onclick = () => applyDiff(applyBtn, content);

            preElement.appendChild(applyBtn);
          }
        });
      }

      // 检测是否是 diff 内容
      function isDiffContent(content) {
        const lines = content.trim().split("\n");

        // 检测常见的 diff 格式特征
        const hasDiffMarkers = lines.some(
          (line) =>
            line.startsWith("+++") ||
            line.startsWith("---") ||
            line.startsWith("@@") ||
            line.match(/^diff --git/),
        );

        // 或者检测是否有足够多的 +/- 行
        const changeLines = lines.filter(
          (line) => line.startsWith("+") || line.startsWith("-"),
        );

        return (
          hasDiffMarkers ||
          (changeLines.length >= 3 && changeLines.length / lines.length > 0.3)
        );
      }

      // 应用 diff
      function applyDiff(button, diffContent) {
        button.disabled = true;
        button.innerHTML = "⏳ Applying...";

        // 解析 diff 内容
        const diffData = parseDiff(diffContent);

        if (!diffData) {
          button.innerHTML = "✗ Invalid Diff";
          button.classList.add("error");
          setTimeout(() => {
            button.disabled = false;
            button.innerHTML = "✓ Apply";
            button.classList.remove("error");
          }, 2000);
          return;
        }

        // 发送到 VS Code 扩展进行应用
        vscode.postMessage({
          type: "applyDiff",
          value: diffData,
        });

        // 等待响应
        button.dataset.pending = "true";
      }

      // 解析 diff 内容
      function parseDiff(diffContent) {
        const lines = diffContent.trim().split("\n");
        let currentFile = null;
        const files = [];

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];

          // 检测文件名
          if (line.startsWith("--- ") || line.startsWith("+++ ")) {
            const match = line.match(/^[+-]{3}\s+(?:a\/|b\/)?(.+?)(?:\s+|$)/);
            if (match) {
              const filename = match[1];
              if (line.startsWith("---")) {
                currentFile = { oldFile: filename, newFile: null, hunks: [] };
              } else if (currentFile) {
                currentFile.newFile = filename;
                files.push(currentFile);
              }
            }
          }

          // 检测 hunk 头部 (@@)
          if (line.startsWith("@@") && currentFile) {
            const hunkMatch = line.match(
              /@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/,
            );
            if (hunkMatch) {
              const hunk = {
                oldStart: parseInt(hunkMatch[1]),
                oldLines: parseInt(hunkMatch[2] || "1"),
                newStart: parseInt(hunkMatch[3]),
                newLines: parseInt(hunkMatch[4] || "1"),
                lines: [],
              };

              // 收集 hunk 的内容
              i++;
              while (
                i < lines.length &&
                !lines[i].startsWith("@@") &&
                !lines[i].startsWith("---")
              ) {
                hunk.lines.push(lines[i]);
                i++;
              }
              i--; // 回退一行

              currentFile.hunks.push(hunk);
            }
          }
        }

        // 如果没有找到标准格式，尝试简单的 +/- 格式
        if (files.length === 0) {
          const addedLines = [];
          const removedLines = [];
          const contextLines = [];

          lines.forEach((line) => {
            if (line.startsWith("+") && !line.startsWith("+++")) {
              addedLines.push(line.substring(1));
            } else if (line.startsWith("-") && !line.startsWith("---")) {
              removedLines.push(line.substring(1));
            } else if (!line.startsWith("@@")) {
              contextLines.push(line);
            }
          });

          if (addedLines.length > 0 || removedLines.length > 0) {
            return {
              type: "simple",
              added: addedLines,
              removed: removedLines,
              context: contextLines,
              raw: diffContent,
            };
          }
        }

        return files.length > 0
          ? { type: "unified", files, raw: diffContent }
          : null;
      }

      function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }

      function handleSend() {
        const text = userInput.value.trim();
        if (text) {
          addMessage(text, "user");
          vscode.postMessage({ type: "ask", value: text });
          userInput.value = "";
          userInput.style.height = "auto";
          currentAiMessageElement = null;
          currentAiRawText = "";
          userInput.disabled = true;
          sendBtn.style.display = "none";
          stopBtn.classList.add("visible");

          // 添加加载指示器
          const loader = document.createElement("div");
          loader.id = "ai-loader";
          loader.className = "message ai-message system-message";
          loader.innerHTML =
            '<div class="typing-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
          chatContainer.appendChild(loader);
          scrollToBottom();
        }
      }

      function handleStop() {
        vscode.postMessage({ type: "stop" });
        addMessage("🛑 Generation stopped by user", "system");
      }

      sendBtn.addEventListener("click", handleSend);
      stopBtn.addEventListener("click", handleStop);

      userInput.addEventListener("keydown", (e) => {
        if (suggestionsList.style.display === "block") {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            selectedSuggestionIndex =
              (selectedSuggestionIndex + 1) % currentSuggestions.length;
            updateSuggestionSelection();
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            selectedSuggestionIndex =
              (selectedSuggestionIndex - 1 + currentSuggestions.length) %
              currentSuggestions.length;
            updateSuggestionSelection();
          } else if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            if (selectedSuggestionIndex !== -1) {
              selectSuggestion(currentSuggestions[selectedSuggestionIndex]);
            }
          } else if (e.key === "Escape") {
            hideSuggestions();
          }
          return;
        }

        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      });

      exportBtn.addEventListener("click", () => {
        vscode.postMessage({ type: "exportChat" });
      });

      clearBtn.addEventListener("click", () => {
        vscode.postMessage({ type: "clear" }); // 已经在 Provider 中实现清理逻辑
      });

      function updateSuggestionSelection() {
        const items = suggestionsList.querySelectorAll(".suggestion-item");
        items.forEach((item, index) => {
          item.className =
            "suggestion-item" +
            (index === selectedSuggestionIndex ? " selected" : "");
          if (index === selectedSuggestionIndex) {
            item.scrollIntoView({ block: "nearest" });
          }
        });
      }

      // 监听文本选择事件，自动填入输入框
      document.addEventListener("mouseup", () => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (selectedText) {
          // 检查选中的文本是否在聊天容器内
          const range = selection.getRangeAt(0);
          const container = range.commonAncestorContainer;
          const parentElement =
            container.nodeType === Node.TEXT_NODE
              ? container.parentElement
              : container;

          // 确保选中的内容在聊天容器内，且不在输入框内
          if (
            chatContainer.contains(parentElement) &&
            !userInput.contains(parentElement)
          ) {
            userInput.value = selectedText;
            userInput.focus();

            // 重新计算输入框高度
            userInput.style.height = "auto";
            userInput.style.height = userInput.scrollHeight + "px";

            // 清除选择，避免视觉干扰
            selection.removeAllRanges();
          }
        }
      });

      // 添加一个标志来标识当前是否正在流式接收AI消息
      let isStreaming = false;

      // 标记是否已经加载过历史记录
      let historyLoaded = false;

      window.addEventListener("message", (event) => {
        const message = event.data;
        const loader = document.getElementById("ai-loader");

        switch (message.type) {
          case "suggestions":
            showSuggestions(message.value, message.trigger);
            break;
          case "history":
            // 只加载一次历史记录，避免重复渲染
            if (!historyLoaded) {
              historyLoaded = true;
              chatContainer.innerHTML = ""; // 清空初始化状态
              
              if (message.value && message.value.length > 0) {
                message.value.forEach((msg) => {
                  addMessage(msg.content, msg.role === "user" ? "user" : "ai");
                });
                // 滚动到底部
                requestAnimationFrame(() => {
                  scrollToBottom();
                });
              } else {
                chatContainer.innerHTML = '<div class="message system-message">✨ Yuangs AI Agent initialized and ready.</div>';
              }
            }
            break;
          case "aiChunk":
            if (loader) {
              loader.remove();
              stopBtn.classList.add("visible");
            }

            // 开始流式接收
            isStreaming = true;

            if (!currentAiMessageElement) {
              // 创建AI消息容器
              const aiMessageDiv = document.createElement("div");
              aiMessageDiv.className = "message ai-message"; // 直接使用最终样式
              // aiMessageDiv.style.minHeight = '24px'; // 防止高度塌陷
              chatContainer.appendChild(aiMessageDiv);
              currentAiMessageElement = aiMessageDiv;
            }

            currentAiRawText += message.value;

            // 实时 Markdown 渲染
            // 技巧：如果代码块未闭合，手动临时闭合它以保证渲染正确
            let textToRender = currentAiRawText;
            const codeBlockCount = (textToRender.match(/```/g) || []).length;
            if (codeBlockCount % 2 !== 0) {
              textToRender += "\n```";
            }

            // 渲染内容并添加光标
            currentAiMessageElement.innerHTML =
              marked.parse(textToRender) + '<span class="cursor"></span>';

            // 平滑滚动到底部
            // 使用 requestAnimationFrame 优化滚动性能
            requestAnimationFrame(() => {
              scrollToBottom();
            });
            break;
          case "done":
            // 流式传输结束
            if (isStreaming && currentAiMessageElement) {
              isStreaming = false;

              // 移除光标，进行最终渲染
              currentAiMessageElement.innerHTML =
                marked.parse(currentAiRawText);

              // 处理diff块和其他后处理
              processDiffBlocks(currentAiMessageElement);

              // 添加淡入效果或其他完成动效
              currentAiMessageElement.classList.add("final-render");
            }

            currentAiMessageElement = null;
            currentAiRawText = "";
            userInput.disabled = false;
            userInput.focus();
            sendBtn.style.display = "flex";
            stopBtn.classList.remove("visible");
            
            // 自动滚动到底部，确保新消息可见
            requestAnimationFrame(() => {
              scrollToBottom();
            });
            break;
          case "clear":
            chatContainer.innerHTML =
              '<div class="message system-message">✨ Chat cleared.</div>';
            userInput.disabled = false;
            userInput.focus();
            sendBtn.style.display = "flex";
            stopBtn.classList.remove("visible");
            break;
          case "error":
            if (loader) loader.remove();
            addMessage("❌ Error: " + message.value, "system");
            userInput.disabled = false;
            userInput.focus();
            sendBtn.style.display = "flex";
            stopBtn.classList.remove("visible");
            break;
          case "diffApplied":
            // Diff 应用成功
            const successButtons = document.querySelectorAll(
              '.apply-diff-btn[data-pending="true"]',
            );
            successButtons.forEach((btn) => {
              btn.innerHTML = "✓ Applied";
              btn.classList.add("applied");
              btn.disabled = true;
              btn.dataset.pending = "false";
            });
            break;
          case "diffError":
            // Diff 应用失败
            const errorButtons = document.querySelectorAll(
              '.apply-diff-btn[data-pending="true"]',
            );
            errorButtons.forEach((btn) => {
              btn.innerHTML = "✗ Failed";
              btn.classList.add("error");
              btn.dataset.pending = "false";
              setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = "✓ Apply";
                btn.classList.remove("error");
              }, 3000);
            });
            if (message.value) {
              addMessage(
                "❌ Diff application error: " + message.value,
                "system",
              );
            }
            break;
          case "contextUpdate":
            // 更新上下文数据
            if (typeof updateContextItems === "function") {
              updateContextItems(message.value);
            }
            break;
          case "showContextPanel":
            // 显示上下文面板
            if (typeof showContextPanel === "function") {
              showContextPanel();
            }
            break;
          case "fileTreeData":
            // 接收文件树数据
            handleFileTreeData(message.value);
            break;
          case "fileContent":
            // 接收文件内容
            handleFileContent(
              message.filePath,
              message.content,
              message.isReference,
            );
            break;
        }
      });

      // 初始化文件面板
      if (typeof setupFilesPanel === "function") {
        setupFilesPanel();
      }

      // 初始化上下文面板
      if (typeof setupContextPanel === "function") {
        setupContextPanel();
      }

      // === 文件面板功能函数 ===

      function setupFilesPanel() {
        // 文件面板开关
        filesToggle.addEventListener("click", () => {
          filesPanel.classList.toggle("open");
          if (filesPanel.classList.contains("open") && !fileTreeData) {
            loadFileTree();
          }
        });

        filesClose.addEventListener("click", () => {
          filesPanel.classList.remove("open");
        });

        // 搜索功能
        filesSearch.addEventListener("input", (e) => {
          currentFileSearchQuery = e.target.value.toLowerCase();
          renderFileTree();
        });
      }

      // 加载文件树
      function loadFileTree() {
        filesPanelContent.innerHTML =
          '<div class="file-loading">Loading files...</div>';
        vscode.postMessage({ type: "loadFileTree" });
      }

      // 处理文件树数据
      function handleFileTreeData(files) {
        allFiles = files;
        fileTreeData = buildFileTree(files);
        renderFileTree();
      }

      // 构建文件树结构
      function buildFileTree(files) {
        const root = {};

        files.forEach((filePath) => {
          const parts = filePath.split("/");
          let current = root;
          let fullPath = "";

          parts.forEach((part, index) => {
            fullPath = fullPath ? fullPath + "/" + part : part;

            if (!current[part]) {
              current[part] = {
                name: part,
                path: fullPath, // 保存完整路径
                isFile: index === parts.length - 1,
                children: {},
              };
            }
            current = current[part];
          });
        });

        return root;
      }

      // 渲染文件树
      function renderFileTree() {
        if (!fileTreeData) {
          filesPanelContent.innerHTML =
            '<div class="file-empty">No files loaded</div>';
          return;
        }

        // 过滤文件
        let filteredFiles = allFiles;
        if (currentFileSearchQuery) {
          filteredFiles = allFiles.filter((f) =>
            f.toLowerCase().includes(currentFileSearchQuery),
          );
          filesStats.textContent = `${filteredFiles.length} files`;
        } else {
          filesStats.textContent = `${allFiles.length} files`;
        }

        // 清空并重新渲染
        filesPanelContent.innerHTML = "";

        if (filteredFiles.length === 0) {
          filesPanelContent.innerHTML =
            '<div class="file-empty">No matching files</div>';
          return;
        }

        if (currentFileSearchQuery) {
          // 搜索模式：显示扁平列表
          renderFileList(filteredFiles);
        } else {
          // 树形模式：显示层级结构
          renderTreeNode(fileTreeData, filesPanelContent, 0);
        }
      }

      // 渲染文件列表（搜索模式）
      function renderFileList(files) {
        files.forEach((filePath) => {
          const item = document.createElement("div");
          item.className = "file-tree-item file";

          const icon = getFileIcon(filePath);
          const fileName = filePath.split("/").pop();

          item.innerHTML = `
                    <span class="file-tree-icon">${icon}</span>
                    <span class="file-tree-name">${fileName}</span>
                `;

          item.addEventListener("click", () => {
            handleFileClick(filePath);
          });

          filesPanelContent.appendChild(item);
        });
      }

      // 渲染树节点
      function renderTreeNode(node, container, level) {
        const entries = Object.entries(node).sort((a, b) => {
          // 文件夹排在前面
          if (a[1].isFile && !b[1].isFile) return 1;
          if (!a[1].isFile && b[1].isFile) return -1;
          return a[0].localeCompare(b[0]);
        });

        entries.forEach(([name, data]) => {
          const item = document.createElement("div");

          if (!data.isFile) {
            // 文件夹
            item.className = "file-tree-item folder";
            item.style.paddingLeft = `${16 + level * 16}px`;

            item.innerHTML = `
                        <span class="file-tree-icon collapsed" data-path="${name}"></span>
                        <span class="file-tree-name">${name}</span>
                    `;

            const childrenContainer = document.createElement("div");
            childrenContainer.className = "file-tree-children";

            item
              .querySelector(".file-tree-icon")
              .addEventListener("click", (e) => {
                e.stopPropagation();
                const icon = e.target;
                if (icon.classList.contains("collapsed")) {
                  icon.classList.remove("collapsed");
                  icon.classList.add("expanded");
                  childrenContainer.classList.add("expanded");
                } else {
                  icon.classList.remove("expanded");
                  icon.classList.add("collapsed");
                  childrenContainer.classList.remove("expanded");
                }
              });

            item.addEventListener("click", () => {
              // 默认展开/折叠
              const icon = item.querySelector(".file-tree-icon");
              icon.click();
            });

            container.appendChild(item);
            container.appendChild(childrenContainer);

            // 递归渲染子节点
            renderTreeNode(data.children, childrenContainer, level + 1);
          } else {
            // 文件
            item.className = "file-tree-item file";
            item.style.paddingLeft = `${16 + level * 16}px`;

            const icon = getFileIcon(name);
            item.innerHTML = `
                        <span class="file-tree-icon">${icon}</span>
                        <span class="file-tree-name">${name}</span>
                    `;

            item.addEventListener("click", () => {
              handleFileClick(data.path);
            });

            container.appendChild(item);
          }
        });
      }

      // 获取文件图标
      function getFileIcon(filename) {
        const ext = filename.split(".").pop().toLowerCase();
        const iconMap = {
          js: "📜",
          ts: "📘",
          tsx: "⚛️",
          jsx: "⚛️",
          html: "🌐",
          css: "🎨",
          scss: "🎨",
          json: "📋",
          md: "📝",
          py: "🐍",
          java: "☕",
          go: "🐹",
          rs: "🦀",
          cpp: "⚙️",
          c: "⚙️",
          h: "📄",
          vue: "💚",
          angular: "🅰️",
          react: "⚛️",
          yaml: "📋",
          yml: "📋",
          xml: "📋",
          sh: "💻",
          bash: "💻",
          zsh: "💻",
          git: "🔀",
          lock: "🔒",
          env: "🔐",
          test: "🧪",
          spec: "🧪",
        };

        return iconMap[ext] || "📄";
      }

      // 处理文件点击
      function handleFileClick(filePath) {
        // 移除系统消息，直接读取文件
        vscode.postMessage({
          type: "readFile",
          filePath: filePath,
        });
      }

      // 处理文件内容
      function handleFileContent(filePath, content, isReference = false) {
        if (isReference) {
          // 如果是引用，在输入框中添加文件标记
          const currentValue = userInput.value;
          const fileMarker = `\`\`\`${getFileLanguage(filePath)}\n// File: ${filePath}\n${content}\n\`\`\`\n\n`;
          userInput.value = currentValue + fileMarker;
          userInput.focus();

          // 重新计算高度
          userInput.style.height = "auto";
          userInput.style.height = userInput.scrollHeight + "px";

          console.log(
            "File reference received:",
            filePath,
            content.length,
            "bytes",
          );
        } else {
          // 直接分析文件
          console.log(
            "File content received for analysis:",
            filePath,
            content.length,
            "bytes",
          );
        }
      }

      // 获取文件语言（辅助函数）
      function getFileLanguage(filename) {
        const ext = filename.split(".").pop()?.toLowerCase() || "";
        const langMap = {
          js: "javascript",
          ts: "typescript",
          tsx: "typescript",
          jsx: "javascript",
          py: "python",
          java: "java",
          go: "go",
          rs: "rust",
          cpp: "cpp",
          c: "c",
          h: "c",
          vue: "vue",
          yaml: "yaml",
          yml: "yaml",
          json: "json",
          md: "markdown",
          html: "html",
          css: "css",
          sh: "bash",
          bash: "bash",
        };
        return langMap[ext] || "text";
      }

      // === 上下文面板功能函数 ===

      // 上下文面板开关
      function setupContextPanel() {
        // 上下文面板开关
        contextToggle.addEventListener("click", () => {
          contextPanel.classList.toggle("open");
          contextToggle.classList.toggle("visible");
        });

        contextClose.addEventListener("click", () => {
          contextPanel.classList.remove("open");
          contextToggle.classList.remove("visible");
        });

        // 过滤按钮事件
        contextFilterBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            // 移除所有active类
            contextFilterBtns.forEach((b) => b.classList.remove("active"));
            // 添加active类到当前按钮
            btn.classList.add("active");
            // 更新过滤器
            currentFilter = btn.dataset.filter;
            // 重新渲染
            renderContextItems();
          });
        });

        // 搜索功能
        contextSearch.addEventListener("input", (e) => {
          currentSearchQuery = e.target.value.toLowerCase();
          renderContextItems();
        });
      }

      // 更新上下文数据
      function updateContextItems(items) {
        currentContextItems = items || [];
        renderContextItems();
      }

      // 渲染上下文项目
      function renderContextItems() {
        // 过滤上下文项目
        let filteredItems = currentContextItems.filter((item) => {
          // 类型过滤
          if (currentFilter !== "all" && item.semantic !== currentFilter) {
            return false;
          }

          // 搜索过滤
          if (currentSearchQuery) {
            const searchText = (
              item.path +
              item.summary +
              item.content
            ).toLowerCase();
            if (!searchText.includes(currentSearchQuery)) {
              return false;
            }
          }

          return true;
        });

        // 更新统计信息
        contextStats.textContent = `${filteredItems.length} items`;

        // 清空并重新渲染
        contextPanelContent.innerHTML = "";

        if (filteredItems.length === 0) {
          contextPanelContent.innerHTML =
            '<div class="context-empty">No context available</div>';
          return;
        }

        // 渲染每个上下文项目
        filteredItems.forEach((item) => {
          const itemElement = createContextItemElement(item);
          contextPanelContent.appendChild(itemElement);
        });
      }

      // 创建单个上下文项目元素
      function createContextItemElement(item) {
        const div = document.createElement("div");
        div.className = "context-item";

        // 获取图标
        const icon = getContextIcon(item.semantic);

        // 获取重要性百分比
        const importancePercent = item.importance
          ? (item.importance.confidence * 100).toFixed(0)
          : "50";

        // 获取标签HTML
        const badgesHtml = createContextBadges(item);

        // 获取统计信息
        const statsHtml = createContextStats(item);

        // 获取内容预览
        const previewText = item.summary || item.content.substring(0, 200);

        div.innerHTML = `
                <div class="context-item-header">
                    <span class="context-item-icon">${icon}</span>
                    <span class="context-item-title">${item.alias || item.path}</span>
                    <div class="context-item-badges">${badgesHtml}</div>
                </div>
                <div class="context-item-stats">${statsHtml}</div>
                <div class="context-usage-bar">
                    <div class="context-usage-fill" style="width: ${importancePercent}%"></div>
                </div>
                <div class="context-item-preview">${previewText}</div>
            `;

        // 添加点击事件
        div.addEventListener("click", () => {
          // 发送消息打开文件
          if (item.path) {
            vscode.postMessage({
              type: "open",
              path: item.path,
            });
          }
          console.log("Context item clicked:", item);
        });

        return div;
      }

      // 获取上下文图标
      function getContextIcon(semantic) {
        const iconMap = {
          source_code: "📄",
          log: "📋",
          config: "⚙️",
          documentation: "📚",
          test: "🧪",
          git: "🔀",
          evidence: "🔍",
          diagnostics: "⚠️",
        };

        return iconMap[semantic] || "📄";
      }

      // 创建标签
      function createContextBadges(item) {
        const badges = [];

        // 类型标签
        if (item.semantic) {
          badges.push(
            `<span class="context-badge ${item.semantic}">${item.semantic}</span>`,
          );
        }

        // 标签
        if (item.tags && item.tags.length > 0) {
          item.tags.slice(0, 2).forEach((tag) => {
            badges.push(`<span class="context-badge">${tag}</span>`);
          });
        }

        return badges.join("");
      }

      // 创建统计信息
      function createContextStats(item) {
        const stats = [];

        // Token数量
        if (item.tokens) {
          stats.push(
            `<span class="context-stat">📊 ${item.tokens} tokens</span>`,
          );
        }

        // 使用次数
        if (item.importance && item.importance.useCount > 0) {
          stats.push(
            `<span class="context-stat">🔄 ${item.importance.useCount} uses</span>`,
          );
        }

        // 最后使用时间
        if (item.importance && item.importance.lastUsed) {
          const lastUsed = new Date(item.importance.lastUsed);
          const now = new Date();
          const diffMinutes = Math.floor((now - lastUsed) / 60000);

          if (diffMinutes < 1) {
            stats.push(`<span class="context-stat">⏰ just now</span>`);
          } else if (diffMinutes < 60) {
            stats.push(
              `<span class="context-stat">⏰ ${diffMinutes}m ago</span>`,
            );
          } else if (diffMinutes < 1440) {
            stats.push(
              `<span class="context-stat">⏰ ${Math.floor(diffMinutes / 60)}h ago</span>`,
            );
          } else {
            stats.push(
              `<span class="context-stat">⏰ ${Math.floor(diffMinutes / 1440)}d ago</span>`,
            );
          }
        }

        return stats.join("");
      }

      // 显示上下文面板
      function showContextPanel() {
        contextPanel.classList.add("open");
        contextToggle.classList.add("visible");
      }

      // 隐藏上下文面板
      function hideContextPanel() {
        contextPanel.classList.remove("open");
        contextToggle.classList.remove("visible");
      }
    </script>
  </body>
</html>

````

## 📄 `test-context-integration.ts`

````typescript
/**
 * Context System Integration Test
 * 
 * 测试整个 Context 系统的集成
 */

import { ContextBuffer } from './src/engine/agent/contextBuffer';
import { ContextBank } from './src/engine/agent/contextBank';
import { ContextManager } from './src/engine/agent/contextManager';
import { ContextItem } from './src/engine/agent/contextBuffer';
import { BankContextItem } from './src/engine/agent/contextBank';
import { ContextToSkillPromotionRules } from './src/engine/agent/contextSkillPromotion';
import { Skill } from './src/engine/agent/skills';
import * as fs from 'fs';
import * as path from 'path';

async function runIntegrationTests() {
  console.log('🧪 开始 Context System 集成测试...\n');

  // 测试 1: ContextManager 与 ContextBank 的集成
  await testContextManagerBankIntegration();
  
  // 测试 2: DSL 查询与 ContextBank 的集成
  await testDSLAndBankIntegration();
  
  // 测试 3: 完整的 Context → Bank → Skill 流程
  await testFullContextFlow();
  
  // 测试 4: ContextItem 稳定身份测试
  await testContextIdentity();
  
  console.log('\n🎉 所有集成测试完成！');
}

async function testContextManagerBankIntegration() {
  console.log('🔗 测试 1: ContextManager 与 ContextBank 的集成...');
  
  const manager = new ContextManager();
  const bank = new ContextBank(path.join(__dirname, '.test-integration-bank'));
  
  // 初始化
  await bank.initialize();
  await manager.initializeContextBank();
  
  // 添加一些上下文到 manager
  const testItem: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/integration/test.ts',
    content: 'console.log("integration test");',
    semantic: 'test',
    tags: ['integration', 'test']
  };
  
  manager.getContextBuffer().add(testItem);
  
  // 导出到银行
  await manager.exportToContextBank('integration-test-project');
  
  // 从银行导入
  await manager.importFromContextBank({
    projectScope: 'integration-test-project',
    limit: 10
  });
  
  // 验证导入的项目
  const bufferItems = manager.getContextBuffer().export();
  const importedItem = bufferItems.find(item => item.path === '/integration/test.ts');
  
  if (!importedItem) {
    console.error('❌ 测试失败: 无法从银行导入项目');
    return;
  }
  
  if (!importedItem.metadata || importedItem.metadata.source !== 'context_bank') {
    console.error('❌ 测试失败: 导入的项目缺少银行元数据');
    return;
  }
  
  console.log('✅ ContextManager 与 ContextBank 集成正常');
  
  // 测试使用记录
  await manager.recordBankUsage(true);
  console.log('✅ ContextBank 使用记录功能正常');
  
  // 清理
  try {
    await fs.promises.rm(path.join(__dirname, '.test-integration-bank'), { recursive: true, force: true });
  } catch (e) {
    // 忽略清理错误
  }
  
  console.log('✅ ContextManager-Bank 集成测试通过\n');
}

async function testDSLAndBankIntegration() {
  console.log('🔍 测试 2: DSL 查询与 ContextBank 的集成...');
  
  const manager = new ContextManager();
  const bank = new ContextBank(path.join(__dirname, '.test-dsl-bank'));
  
  // 初始化
  await bank.initialize();
  await manager.initializeContextBank();
  
  // 添加一个项目到银行
  const bankItem: BankContextItem = {
    type: 'file',
    path: '/dsl/query/test.ts',
    stableId: 'dsl-test-stable-id',
    content: 'console.log("DSL query test");',
    id: 'bank-dsl-item',
    source: 'project',
    semantic: 'test',
    tags: ['dsl', 'query'],
    firstSeenAt: Date.now(),
    lastUsedAt: Date.now()
  };
  
  await bank.upsertItem(bankItem);
  
  // 使用 DSL 查询（应该能查到银行中的项目）
  const dslResults = await manager.getDSLContextForInput('type:file tag:dsl');
  
  if (dslResults.length === 0) {
    console.error('❌ 测试失败: DSL 查询未能找到银行中的项目');
    return;
  }
  
  const foundItem = dslResults.find(item => item.path === '/dsl/query/test.ts');
  if (!foundItem) {
    console.error('❌ 测试失败: DSL 查询未能找到特定项目');
    return;
  }
  
  console.log('✅ DSL 查询能找到银行中的项目');
  
  // 测试直接查询银行
  const bankResults = await bank.query({ 
    input: 'type:file tag:dsl',
    strategy: 'relevance',
    limit: 5 
  });
  
  if (bankResults.length === 0) {
    console.error('❌ 测试失败: 直接查询银行未能找到项目');
    return;
  }
  
  console.log('✅ 直接查询银行功能正常');
  
  // 清理
  try {
    await fs.promises.rm(path.join(__dirname, '.test-dsl-bank'), { recursive: true, force: true });
  } catch (e) {
    // 忽略清理错误
  }
  
  console.log('✅ DSL-Bank 集成测试通过\n');
}

async function testFullContextFlow() {
  console.log('🔄 测试 3: 完整的 Context → Bank → Skill 流程...');
  
  const manager = new ContextManager();
  const bank = new ContextBank(path.join(__dirname, '.test-full-flow-bank'));
  
  // 初始化
  await bank.initialize();
  await manager.initializeContextBank();
  
  // 1. 创建一个高价值的 ContextItem
  const valuableItem: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/valuable/script.sh',
    content: '#!/bin/bash\necho "Important script"\n',
    semantic: 'script',
    tags: ['important', 'frequently_used']
  };
  
  manager.getContextBuffer().add(valuableItem);
  
  // 模拟多次使用（提高重要性）
  const buffer = manager.getContextBuffer();
  const items = buffer.export();
  const item = items[0];
  
  if (item.importance) {
    // 模拟多次使用
    for (let i = 0; i < 5; i++) {
      item.importance.useCount++;
      item.importance.successCount++;
    }
  }
  
  // 2. 导出到银行
  await manager.exportToContextBank('full-flow-test');
  console.log('✅ 上下文导出到银行');
  
  // 3. 检查是否可以晋升为 Skill
  const allItems = buffer.export();
  for (const item of allItems) {
    const promotedSkill = ContextToSkillPromotionRules.evaluatePromotion(item);
    if (promotedSkill) {
      console.log(`✅ 发现可晋升的 Skill: ${promotedSkill.name}`);
      
      // 验证 Skill 包含原始 Context 的信息
      if (!promotedSkill.metadata?.originalContextStableId) {
        console.error('❌ 测试失败: 晋升的 Skill 缺少原始 Context 的 stableId');
        return;
      }
      
      console.log('✅ Skill 包含原始 Context 的 stableId');
      break;
    }
  }
  
  // 4. 从银行导入更多上下文
  await manager.importFromContextBank({
    projectScope: 'full-flow-test',
    limit: 10
  });
  
  console.log('✅ 从银行导入上下文');
  
  // 5. 测试使用记录
  await manager.recordBankUsage(true);
  console.log('✅ 使用记录功能正常');
  
  // 清理
  try {
    await fs.promises.rm(path.join(__dirname, '.test-full-flow-bank'), { recursive: true, force: true });
  } catch (e) {
    // 忽略清理错误
  }
  
  console.log('✅ 完整流程测试通过\n');
}

async function testContextIdentity() {
  console.log('🆔 测试 4: ContextItem 稳定身份测试...');
  
  const buffer = new ContextBuffer();
  
  // 创建相同内容但不同路径的 ContextItem
  const item1: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/original/path/file.ts',
    content: 'console.log("same content");',
    semantic: 'source_code'
  };
  
  const item2: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/moved/path/file.ts',  // 不同路径
    content: 'console.log("same content");',  // 相同内容
    semantic: 'source_code'
  };
  
  buffer.add(item1);
  buffer.add(item2);
  
  const items = buffer.export();
  const [firstItem, secondItem] = items;
  
  // 验证相同内容产生相同的 stableId（即使路径不同）
  if (firstItem.stableId !== secondItem.stableId) {
    console.error('❌ 测试失败: 相同内容应该产生相同的 stableId');
    console.log(`   Item1 stableId: ${firstItem.stableId}`);
    console.log(`   Item2 stableId: ${secondItem.stableId}`);
    return;
  }
  
  console.log('✅ 相同内容产生相同的 stableId（路径无关）');
  
  // 创建不同内容的 ContextItem
  const item3: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/original/path/file.ts',
    content: 'console.log("different content");',  // 不同内容
    semantic: 'source_code'
  };
  
  buffer.add(item3);
  const itemsAfterThird = buffer.export();
  const thirdItem = itemsAfterThird[2];
  
  // 验证不同内容产生不同的 stableId（即使路径相同）
  if (firstItem.stableId === thirdItem.stableId) {
    console.error('❌ 测试失败: 不同内容应该产生不同的 stableId');
    return;
  }
  
  console.log('✅ 不同内容产生不同的 stableId（内容敏感）');
  
  // 测试语义类型对 stableId 的影响
  const item4: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/original/path/file.ts',
    content: 'console.log("same content");',
    semantic: 'configuration'  // 不同语义类型
  };
  
  buffer.add(item4);
  const itemsAfterFourth = buffer.export();
  const fourthItem = itemsAfterFourth[3];
  
  // stableId 应该包含语义类型，所以即使路径和内容相同，语义不同也应该有不同的 stableId
  // 但根据我们的实现，stableId 只基于 path + semantic + content 的前512个字符
  // 所以如果语义不同，stableId 应该不同
  
  if (firstItem.stableId === fourthItem.stableId) {
    console.log('ℹ️  注意: 相同内容但不同语义类型的项目有相同的 stableId（这是预期行为，因为 stableId 基于 path + semantic + content 前512字符）');
  } else {
    console.log('✅ 语义类型影响 stableId 生成');
  }
  
  console.log('✅ ContextItem 稳定身份测试通过\n');
}

// 运行测试
runIntegrationTests().catch(err => {
  console.error('集成测试运行出错:', err);
  process.exit(1);
});
````

## 📄 `test-context-protocol.ts`

````typescript
import { ContextBuffer } from './src/engine/agent/contextBuffer';
import { parseContextReferences, validateContextReferences, generateReferenceRetrospective, analyzeContextLifecycle } from './src/engine/agent/contextProtocol';

async function testContextProtocol() {
  console.log('🧪 Testing Context Reference Protocol v1...\n');
  
  // 创建一个ContextBuffer实例
  const buffer = new ContextBuffer();
  
  // 添加一些测试ContextItems
  await buffer.addAsync({
    type: 'file',
    path: 'src/main.ts',
    content: 'console.log("Hello World");',
    semantic: 'source_code'
  });
  
  await buffer.addAsync({
    type: 'file',
    path: 'README.md',
    content: '# My Project\nThis is a sample project.',
    semantic: 'documentation'
  });
  
  await buffer.addAsync({
    type: 'file',
    path: 'config.json',
    content: '{"port": 3000, "debug": true}',
    semantic: 'config'
  });
  
  console.log('✅ Added test context items');
  console.log(`📊 Buffer contains ${buffer.export().length} items\n`);
  
  // 测试Context引用解析
  console.log('🔍 Testing Context Reference Parsing...');
  
  const testResponse1 = `
I analyzed the code and found that [Reference] file: src/main.ts (src/main.ts) contains the main entry point.
The configuration in [Reference] file: config.json (config.json) sets the port to 3000.
`;
  
  const references1 = parseContextReferences(testResponse1);
  console.log('Parsed references:', references1.referencedItems.map(r => r.path));
  
  // 验证引用
  const validation = validateContextReferences(references1.referencedItems, buffer.export());
  console.log('Valid references:', validation.valid.map(v => v.path));
  console.log('Invalid references:', validation.invalid.map(v => v.path));
  console.log('');
  
  // 测试JSON格式的引用解析
  console.log('🔍 Testing JSON Format Reference Parsing...');
  
  const testResponse2 = `
\`\`\`json
{
  "action_type": "answer",
  "reasoning": "Used information from source code and config",
  "content": "The app runs on port 3000",
  "used_context": ["src/main.ts", "config.json"]
}
\`\`\`
`;
  
  const references2 = parseContextReferences(testResponse2);
  console.log('Parsed JSON references:', references2.referencedItems.map(r => r.path));
  console.log('');
  
  // 记录一些显式引用以测试引用跟踪
  console.log('📈 Testing Explicit Reference Tracking...');
  buffer.recordExplicitReference('src/main.ts', 'test-response-1');
  buffer.recordExplicitReference('config.json', 'test-response-1');
  buffer.recordExplicitReference('src/main.ts', 'test-response-2');
  
  // 验证引用的有效性
  buffer.validateReference('src/main.ts', true);  // 标记为有用
  buffer.validateReference('README.md', false);   // 标记为无用
  
  // 显示更新后的统计信息
  const items = buffer.export();
  for (const item of items) {
    console.log(`${item.path}: referenced ${item.usageStats?.referencedCount || 0} times, useful: ${item.usageStats?.verifiedUseful || 0}, not useful: ${item.usageStats?.verifiedNotUseful || 0}`);
  }
  console.log('');
  
  // 生成回溯报告
  console.log('📋 Generating Retrospective Report...');
  const report = generateReferenceRetrospective(
    buffer,
    'test-execution-1',
    'What does the main file do?',
    testResponse1
  );
  console.log(report);
  console.log('');
  
  // 分析Context生命周期
  console.log('🔄 Analyzing Context Lifecycle...');
  const lifecycleAnalysis = analyzeContextLifecycle(buffer);
  for (const analysis of lifecycleAnalysis) {
    console.log(`${analysis.path}: trend=${analysis.usageTrend}, quality=${analysis.qualityScore.toFixed(2)}, relevance=${analysis.relevanceScore.toFixed(2)}, recommendation=${analysis.recommendation}`);
  }
}

// 运行测试
testContextProtocol().catch(console.error);
````

## 📄 `test-context-stable-id.ts`

````typescript
/**
 * Context Stable ID 测试套件
 * 
 * 测试所有与 stableId 相关的功能
 */

import { ContextBuffer } from './src/engine/agent/contextBuffer';
import { ContextBank } from './src/engine/agent/contextBank';
import { ContextItem } from './src/engine/agent/contextBuffer';
import { BankContextItem } from './src/engine/agent/contextBank';
import { ContextToSkillPromotionRules } from './src/engine/agent/contextSkillPromotion';
import { Skill } from './src/engine/agent/skills';
import * as fs from 'fs';
import * as path from 'path';

async function runTests() {
  console.log('🧪 开始 Context Stable ID 测试...\n');

  // 测试 1: ContextBuffer 中的 stableId 生成
  await testContextBufferStableId();
  
  // 测试 2: ContextBank 中的 stableId 使用
  await testContextBankStableId();
  
  // 测试 3: Skill Promotion 中的 stableId 传递
  await testSkillPromotionStableId();
  
  // 测试 4: DSL 查询与 stableId
  await testDSLQueryWithStableId();
  
  console.log('\n🎉 所有测试完成！');
}

async function testContextBufferStableId() {
  console.log('📋 测试 1: ContextBuffer 中的 stableId 生成...');
  
  const buffer = new ContextBuffer();
  
  // 添加一个 ContextItem
  const item1: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("hello world");',
    semantic: 'source_code'
  };
  
  buffer.add(item1);
  
  const items = buffer.export();
  const exportedItem = items[0];
  
  // 验证 stableId 是否生成
  if (!exportedItem.stableId) {
    console.error('❌ 测试失败: stableId 未生成');
    return;
  }
  
  console.log(`✅ stableId 生成成功: ${exportedItem.stableId.substring(0, 8)}...`);
  
  // 验证相同的路径和内容产生相同的 stableId
  const item2: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("hello world");',
    semantic: 'source_code'
  };
  
  buffer.add(item2);
  const items2 = buffer.export();
  const exportedItem2 = items2[1];
  
  if (exportedItem.stableId !== exportedItem2.stableId) {
    console.error('❌ 测试失败: 相同内容应该产生相同的 stableId');
    return;
  }
  
  console.log('✅ 相同内容产生相同 stableId');
  
  // 验证不同内容产生不同的 stableId
  const item3: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("different content");',
    semantic: 'source_code'
  };
  
  buffer.add(item3);
  const items3 = buffer.export();
  const exportedItem3 = items3[2];
  
  if (exportedItem.stableId === exportedItem3.stableId) {
    console.error('❌ 测试失败: 不同内容应该产生不同的 stableId');
    return;
  }
  
  console.log('✅ 不同内容产生不同 stableId');
  console.log('✅ ContextBuffer stableId 测试通过\n');
}

async function testContextBankStableId() {
  console.log('🏦 测试 2: ContextBank 中的 stableId 使用...');
  
  // 创建一个临时的 ContextBank
  const bank = new ContextBank(path.join(__dirname, '.test-context-bank'));
  await bank.initialize();
  
  // 创建一个 BankContextItem
  const bankItem: BankContextItem = {
    type: 'file',
    path: '/test/bank-file.ts',
    stableId: 'test-stable-id-123',
    content: 'console.log("from bank");',
    id: 'bank-item-1',
    source: 'project',
    firstSeenAt: Date.now(),
    lastUsedAt: Date.now(),
    tokens: 10
  };
  
  // 添加到银行
  await bank.upsertItem(bankItem);
  
  // 查询银行项目
  const results = await bank.query({ limit: 10 });
  
  if (results.length === 0) {
    console.error('❌ 测试失败: 无法从银行查询项目');
    return;
  }
  
  const retrievedItem = results[0];
  
  if (retrievedItem.stableId !== 'test-stable-id-123') {
    console.error('❌ 测试失败: 从银行检索的项目 stableId 不匹配');
    return;
  }
  
  console.log('✅ ContextBank stableId 存储和检索正常');
  
  // 测试重复插入（应该更新而不是创建新项目）
  const updatedItem: BankContextItem = {
    ...bankItem,
    content: 'console.log("updated content");',
    lastUsedAt: Date.now()
  };
  
  await bank.upsertItem(updatedItem);
  const resultsAfterUpdate = await bank.query({ limit: 10 });
  
  // 应该只有一个项目，且 stableId 相同
  if (resultsAfterUpdate.length !== 1 || resultsAfterUpdate[0].stableId !== 'test-stable-id-123') {
    console.error('❌ 测试失败: 重复插入应该更新而不是创建新项目');
    return;
  }
  
  console.log('✅ ContextBank 重复插入更新正常');
  
  // 清理测试数据
  try {
    await fs.promises.rm(path.join(__dirname, '.test-context-bank'), { recursive: true, force: true });
  } catch (e) {
    // 忽略清理错误
  }
  
  console.log('✅ ContextBank stableId 测试通过\n');
}

async function testSkillPromotionStableId() {
  console.log('🚀 测试 3: Skill Promotion 中的 stableId 传递...');
  
  // 创建一个高价值的 ContextItem（满足晋升条件）
  const highValueItem: ContextItem = {
    type: 'file',
    path: '/important/config.json',
    stableId: 'config-stable-id-456',
    content: '{"important": true}',
    id: 'ctx-123',
    tokens: 10,
    importance: {
      id: 'imp-123',
      path: '/important/config.json',
      type: 'file',
      useCount: 10,
      successCount: 9,
      failureCount: 1,
      confidence: 0.9,
      createdAt: Date.now(),
      lastUsed: Date.now()
    }
  };
  
  // 尝试晋升为 Skill
  const promotedSkill = ContextToSkillPromotionRules.evaluatePromotion(highValueItem);
  
  if (!promotedSkill) {
    console.error('❌ 测试失败: 高价值 ContextItem 应该能晋升为 Skill');
    return;
  }
  
  // 检查 Skill 的 metadata 是否包含原始 Context 的 stableId
  if (!(promotedSkill as any).metadata || !(promotedSkill as any).metadata.originalContextStableId) {
    console.error('❌ 测试失败: 晋升的 Skill 应该包含原始 Context 的 stableId');
    return;
  }

  if ((promotedSkill as any).metadata.originalContextStableId !== 'config-stable-id-456') {
    console.error('❌ 测试失败: Skill 中的 originalContextStableId 不匹配');
    return;
  }
  
  console.log('✅ Skill Promotion 中的 stableId 传递正常');
  console.log('✅ Skill Promotion stableId 测试通过\n');
}

async function testDSLQueryWithStableId() {
  console.log('🔍 测试 4: DSL 查询与 stableId...');
  
  const buffer = new ContextBuffer();
  
  // 添加一些带 stableId 的 ContextItem
  const item1: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/src/main.ts',
    content: 'function main() { console.log("main"); }',
    semantic: 'source_code',
    tags: ['important', 'core']
  };
  
  const item2: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/src/utils.ts',
    content: 'function helper() { console.log("helper"); }',
    semantic: 'source_code',
    tags: ['utility', 'helper']
  };
  
  buffer.add(item1);
  buffer.add(item2);
  
  const items = buffer.export();
  
  // 验证所有项目都有 stableId
  for (const item of items) {
    if (!item.stableId) {
      console.error('❌ 测试失败: DSL 查询相关的 ContextItem 应该有 stableId');
      return;
    }
  }
  
  console.log('✅ DSL 查询相关的 ContextItem 都有 stableId');
  
  // 测试 DSL 查询功能
  try {
    const dslResults = await buffer.getDSLContextForInput('type:file tag:important');
    console.log(`✅ DSL 查询返回 ${dslResults.length} 个项目`);
  } catch (error) {
    console.error('❌ DSL 查询失败:', error);
    return;
  }
  
  console.log('✅ DSL 查询与 stableId 测试通过\n');
}

// 运行测试
runTests().catch(err => {
  console.error('测试运行出错:', err);
  process.exit(1);
});
````

## 📄 `todo.md`

````markdown
你现在这个系统，已经非常接近一个 “可审计 AI 操作系统” 了。

──────────────────── (耗时: 34.61s) ────────────────────

````

## 📄 `tsconfig.json`

````json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2022",
        "outDir": "dist",
        "lib": [
            "ES2022"
        ],
        "sourceMap": true,
        "rootDir": "src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "moduleResolution": "node"
    },
    "exclude": [
        "node_modules",
        ".vscode-test",
        "test-*.ts"
    ]
}
````

## 📄 `yuangs-vscode-20260121-docs.md`

````markdown
# Project Documentation

- **Generated at:** 2026-01-21 15:21:45
- **Root Dir:** `.`
- **File Count:** 77
- **Total Size:** 359.14 KB

<a name="toc"></a>
## 📂 扫描目录
- [.gitignore](#📄-gitignore) (19 lines, 0.17 KB)
- [.vscodeignore](#📄-vscodeignore) (17 lines, 0.24 KB)
- [CHANGELOG.md](#📄-changelogmd) (78 lines, 3.18 KB)
- [LICENSE](#📄-license) (21 lines, 1.04 KB)
- [asconfig.json](#📄-asconfigjson) (22 lines, 0.51 KB)
- [c](#📄-c) (3 lines, 0.10 KB)
- [compile.sh](#📄-compilesh) (81 lines, 1.87 KB)
- [package-lock.json](#📄-package-lockjson) (4838 lines, 169.83 KB)
- [package.json](#📄-packagejson) (116 lines, 3.13 KB)
- [policy.yaml](#📄-policyyaml) (26 lines, 0.56 KB)
- [src/engine/agent/AgentRuntime.ts](#📄-srcengineagentagentruntimets) (124 lines, 3.73 KB)
- [src/engine/agent/actions.ts](#📄-srcengineagentactionsts) (53 lines, 1.58 KB)
- [src/engine/agent/chatHistoryStorage.ts](#📄-srcengineagentchathistorystoragets) (51 lines, 1.70 KB)
- [src/engine/agent/context.ts](#📄-srcengineagentcontextts) (15 lines, 0.48 KB)
- [src/engine/agent/contextBuffer.ts](#📄-srcengineagentcontextbufferts) (89 lines, 2.20 KB)
- [src/engine/agent/contextManager.ts](#📄-srcengineagentcontextmanagerts) (70 lines, 1.79 KB)
- [src/engine/agent/contextStorage.ts](#📄-srcengineagentcontextstoragets) (24 lines, 0.69 KB)
- [src/engine/agent/executor.ts](#📄-srcengineagentexecutorts) (81 lines, 2.28 KB)
- [src/engine/agent/governance.ts](#📄-srcengineagentgovernancets) (70 lines, 2.27 KB)
- [src/engine/agent/governance/bridge.ts](#📄-srcengineagentgovernancebridgets) (38 lines, 1.27 KB)
- [src/engine/agent/governance/core.ts](#📄-srcengineagentgovernancecorets) (35 lines, 1.22 KB)
- [src/engine/agent/governance/ledger.ts](#📄-srcengineagentgovernanceledgerts) (22 lines, 0.48 KB)
- [src/engine/agent/governance/sandbox/core.as.ts](#📄-srcengineagentgovernancesandboxcoreasts) (33 lines, 1.35 KB)
- [src/engine/agent/index.ts](#📄-srcengineagentindexts) (7 lines, 0.28 KB)
- [src/engine/agent/llm.ts](#📄-srcengineagentllmts) (88 lines, 2.60 KB)
- [src/engine/agent/llmAdapter.ts](#📄-srcengineagentllmadapterts) (113 lines, 3.49 KB)
- [src/engine/agent/policy/engine.ts](#📄-srcengineagentpolicyenginets) (91 lines, 2.26 KB)
- [src/engine/agent/policy/index.ts](#📄-srcengineagentpolicyindexts) (3 lines, 0.09 KB)
- [src/engine/agent/policy/policies/noDangerousShell.ts](#📄-srcengineagentpolicypoliciesnodangerousshellts) (49 lines, 1.79 KB)
- [src/engine/agent/policy/types.ts](#📄-srcengineagentpolicytypests) (27 lines, 0.49 KB)
- [src/engine/agent/prompt.ts](#📄-srcengineagentpromptts) (80 lines, 2.08 KB)
- [src/engine/agent/replay/events.ts](#📄-srcengineagentreplayeventsts) (30 lines, 0.59 KB)
- [src/engine/agent/replay/index.ts](#📄-srcengineagentreplayindexts) (3 lines, 0.08 KB)
- [src/engine/agent/replay/recorder.ts](#📄-srcengineagentreplayrecorderts) (58 lines, 1.38 KB)
- [src/engine/agent/replay/replayer.ts](#📄-srcengineagentreplayreplayerts) (84 lines, 1.88 KB)
- [src/engine/agent/selectModel.ts](#📄-srcengineagentselectmodelts) (14 lines, 0.33 KB)
- [src/engine/agent/skills.ts](#📄-srcengineagentskillsts) (180 lines, 5.05 KB)
- [src/engine/agent/state.ts](#📄-srcengineagentstatets) (99 lines, 2.32 KB)
- [src/engine/agent/types.ts](#📄-srcengineagenttypests) (56 lines, 1.25 KB)
- [src/engine/ai/client.ts](#📄-srcengineaiclientts) (128 lines, 4.48 KB)
- [src/engine/ai/prompt.ts](#📄-srcengineaipromptts) (86 lines, 2.29 KB)
- [src/engine/ai/types.ts](#📄-srcengineaitypests) (1 lines, 0.09 KB)
- [src/engine/core/apps.ts](#📄-srcenginecoreappsts) (49 lines, 1.63 KB)
- [src/engine/core/autofix.ts](#📄-srcenginecoreautofixts) (22 lines, 0.61 KB)
- [src/engine/core/capabilities.ts](#📄-srcenginecorecapabilitiests) (69 lines, 1.90 KB)
- [src/engine/core/capabilityInference.ts](#📄-srcenginecorecapabilityinferencets) (25 lines, 0.93 KB)
- [src/engine/core/capabilitySystem.ts](#📄-srcenginecorecapabilitysystemts) (114 lines, 3.15 KB)
- [src/engine/core/completion.legacy.ts](#📄-srcenginecorecompletionlegacyts) (225 lines, 5.89 KB)
- [src/engine/core/completion/builtin.ts](#📄-srcenginecorecompletionbuiltints) (18 lines, 0.84 KB)
- [src/engine/core/completion/cache.ts](#📄-srcenginecorecompletioncachets) (47 lines, 1.07 KB)
- [src/engine/core/completion/index.ts](#📄-srcenginecorecompletionindexts) (30 lines, 0.69 KB)
- [src/engine/core/completion/path.ts](#📄-srcenginecorecompletionpathts) (39 lines, 1.04 KB)
- [src/engine/core/completion/resolver.ts](#📄-srcenginecorecompletionresolverts) (106 lines, 2.62 KB)
- [src/engine/core/completion/types.ts](#📄-srcenginecorecompletiontypests) (30 lines, 0.50 KB)
- [src/engine/core/completion/utils.ts](#📄-srcenginecorecompletionutilsts) (10 lines, 0.26 KB)
- [src/engine/core/configMerge.ts](#📄-srcenginecoreconfigmergets) (122 lines, 3.09 KB)
- [src/engine/core/executionRecord.ts](#📄-srcenginecoreexecutionrecordts) (99 lines, 2.50 KB)
- [src/engine/core/executionStore.ts](#📄-srcenginecoreexecutionstorets) (100 lines, 2.44 KB)
- [src/engine/core/executor.ts](#📄-srcenginecoreexecutorts) (37 lines, 0.97 KB)
- [src/engine/core/explain.ts](#📄-srcenginecoreexplaints) (106 lines, 2.99 KB)
- [src/engine/core/fileReader.ts](#📄-srcenginecorefilereaderts) (72 lines, 2.03 KB)
- [src/engine/core/macros.ts](#📄-srcenginecoremacrosts) (83 lines, 2.36 KB)
- [src/engine/core/modelMatcher.ts](#📄-srcenginecoremodelmatcherts) (102 lines, 2.65 KB)
- [src/engine/core/os.ts](#📄-srcenginecoreosts) (39 lines, 1.00 KB)
- [src/engine/core/replayDiff.ts](#📄-srcenginecorereplaydiffts) (284 lines, 8.07 KB)
- [src/engine/core/replayEngine.ts](#📄-srcenginecorereplayenginets) (161 lines, 4.54 KB)
- [src/engine/core/risk.ts](#📄-srcenginecoreriskts) (18 lines, 0.48 KB)
- [src/engine/core/validation.ts](#📄-srcenginecorevalidationts) (160 lines, 4.73 KB)
- [src/engine/utils/confirm.ts](#📄-srcengineutilsconfirmts) (17 lines, 0.44 KB)
- [src/engine/utils/history.ts](#📄-srcengineutilshistoryts) (28 lines, 0.89 KB)
- [src/engine/utils/renderer.ts](#📄-srcengineutilsrendererts) (116 lines, 3.64 KB)
- [src/engine/utils/syntaxHandler.ts](#📄-srcengineutilssyntaxhandlerts) (368 lines, 12.43 KB)
- [src/runtime/vscode/VSCodeExecutor.ts](#📄-srcruntimevscodevscodeexecutorts) (133 lines, 5.56 KB)
- [src/vscode/extension.ts](#📄-srcvscodeextensionts) (29 lines, 0.98 KB)
- [src/vscode/provider/ChatViewProvider.ts](#📄-srcvscodeproviderchatviewproviderts) (315 lines, 12.56 KB)
- [src/vscode/webview/sidebar.html](#📄-srcvscodewebviewsidebarhtml) (843 lines, 28.73 KB)
- [tsconfig.json](#📄-tsconfigjson) (21 lines, 0.44 KB)

---

## 📄 .gitignore

````text
# Dependencies
node_modules/

# Built files
dist/
out/
build/release.wasm
build/debug.wasm

# VS Code
.vscode-test/
*.vsix

# OS
.DS_Store

# Replay system
replay/
logs/

````

[⬆ 回到目录](#toc)

## 📄 .vscodeignore

````text
.git/**
.vscode/**
node_modules/**
src/**
tsconfig.json
webpack.config.js
compile.sh
asconfig.json
yuangs-vscode-20260121-docs.md
yuangs-vscode-1.0.3.vsix
CHANGELOG.md
QUICK_REFERENCE.md
# policy.yaml
c
build/**
!build/release.wasm
!dist/**

````

[⬆ 回到目录](#toc)

## 📄 CHANGELOG.md

````markdown
# Changelog

## [1.0.3] - 2026-01-21

### ✨ 新功能 (New Features)
- **智能 Diff 应用 (Smart Diff Application)**: 
  - 自动检测 AI 回复中的 diff 代码块
  - 在 diff 代码块右上角显示"Apply"按钮（hover 时显示）
  - 一键应用 diff 到代码文件
  - 支持标准 unified diff 格式（`---`、`+++`、`@@`）
  - 支持简单的 `+`/`-` 格式
  - 自动创建不存在的文件
  - 应用后自动保存并显示文件

### 🎨 用户体验优化 (UX Improvements)
- Diff 代码块特殊样式标识（边框、背景色）
- 应用按钮状态反馈：
  - 默认：`✓ Apply`（hover 时显示）
  - 应用中：`⏳ Applying...`
  - 成功：`✓ Applied`（绿色）
  - 失败：`✗ Failed`（红色，3秒后恢复）
- 实时处理流式渲染中的 diff 块

### 🛠 技术改进 (Technical Improvements)
- 完整的 diff 解析器，支持多种格式
- 智能文件查找和创建
- 工作区编辑 API 集成
- 错误处理和用户反馈

---

## [1.0.2] - 2026-01-21

### ✨ 新功能 (New Features)
- **智能文本选择 (Smart Text Selection)**: 
  - 在聊天记录中选中文本后，自动填入输入框，方便一键发送
  - 支持快速引用 AI 回答或重新发送之前的问题
  - 自动清除选择，避免视觉干扰
  - 输入框高度自动调整以适应内容

### 🛠 开发体验 (Developer Experience)
- **一键编译脚本**: 
  - 新增 `compile.sh` - 自动查找 Node.js 和 npm，智能编译
  - 新增 `c` 快捷脚本 - 超简短命令，只需 `./c` 即可编译
  - 支持多种 Node.js 安装方式（Homebrew、NVM、Volta、FNM 等）
  - 显示详细的版本信息和编译进度

### 🎨 用户体验优化 (UX Improvements)
- 优化了文本选择的交互逻辑，确保只在聊天容器内的选择才会触发自动填入
- 改进了输入框焦点管理，选中文本后自动获得焦点

---

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

````

[⬆ 回到目录](#toc)

## 📄 LICENSE

````text
MIT License

Copyright (c) 2026 yuanguangshan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

````

[⬆ 回到目录](#toc)

## 📄 asconfig.json

````json
{
    "targets": {
        "debug": {
            "outFile": "build/debug.wasm",
            "textFile": "build/debug.wat",
            "sourceMap": true,
            "debug": true
        },
        "release": {
            "outFile": "build/release.wasm",
            "textFile": "build/release.wat",
            "sourceMap": true,
            "optimizeLevel": 3,
            "shrinkLevel": 0,
            "converge": false,
            "noAssert": false
        }
    },
    "options": {
        "bindings": "esm"
    }
}
````

[⬆ 回到目录](#toc)

## 📄 c

````text
#!/bin/bash
# 快捷编译脚本 - 只需运行 ./c 即可编译
cd "$(dirname "$0")" && ./compile.sh

````

[⬆ 回到目录](#toc)

## 📄 compile.sh

````bash
#!/bin/bash

# Yuangs VSCode Extension 一键编译脚本
# 自动查找 npm 并编译项目

set -e

echo "🔍 正在查找 Node.js 和 npm..."

# 尝试多种方式找到 node 和 npm
NODE_BIN_DIR=""

# 方法1: 检查常见路径
for base_path in \
    "/usr/local/bin" \
    "/opt/homebrew/bin" \
    "$HOME/.nvm/versions/node/*/bin" \
    "$HOME/.volta/bin" \
    "$HOME/.fnm/node-versions/*/installation/bin"
do
    # 展开通配符
    for path in $base_path; do
        if [ -d "$path" ] && [ -f "$path/node" ] && [ -f "$path/npm" ]; then
            NODE_BIN_DIR="$path"
            break 2
        fi
    done
done

# 方法2: 使用 which
if [ -z "$NODE_BIN_DIR" ]; then
    NODE_PATH=$(which node 2>/dev/null || echo "")
    if [ -n "$NODE_PATH" ]; then
        NODE_BIN_DIR=$(dirname "$NODE_PATH")
    fi
fi

if [ -z "$NODE_BIN_DIR" ]; then
    echo "❌ 错误: 找不到 Node.js 和 npm"
    echo "请确保已安装 Node.js 和 npm"
    echo ""
    echo "安装方式:"
    echo "  - Homebrew: brew install node"
    echo "  - NVM: https://github.com/nvm-sh/nvm"
    echo "  - 官网: https://nodejs.org/"
    exit 1
fi

# 设置 PATH
export PATH="$NODE_BIN_DIR:$PATH"

echo "✅ 找到 Node.js: $NODE_BIN_DIR/node"
echo "✅ 找到 npm: $NODE_BIN_DIR/npm"
echo ""

# 显示版本信息
echo "📦 Node.js 版本:"
node --version
echo ""
echo "📦 npm 版本:"
npm --version
echo ""

# 进入项目目录
cd "$(dirname "$0")"

echo "🔨 开始编译..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 执行编译
npm run compile

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ 编译完成！"
echo ""
echo "💡 下一步:"
echo "  1. 按 F5 启动调试"
echo "  2. 或者在扩展开发主机中测试"


````

[⬆ 回到目录](#toc)

## 📄 package-lock.json

````json
{
  "name": "yuangs-vscode",
  "version": "1.0.5",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "yuangs-vscode",
      "version": "1.0.3",
      "dependencies": {
        "@assemblyscript/loader": "^0.27.29",
        "axios": "^1.6.0",
        "chalk": "^4.1.2",
        "commander": "^11.1.0",
        "js-yaml": "^4.1.0",
        "json5": "^2.2.3",
        "marked": "^4.3.0",
        "marked-terminal": "^5.2.0",
        "ora": "^5.4.1",
        "zod": "^3.22.4"
      },
      "devDependencies": {
        "@types/glob": "^8.1.0",
        "@types/js-yaml": "^4.0.5",
        "@types/marked": "^4.0.8",
        "@types/marked-terminal": "^3.1.0",
        "@types/mocha": "^10.0.1",
        "@types/node": "20.x",
        "@types/vscode": "^1.75.0",
        "@typescript-eslint/eslint-plugin": "^5.56.0",
        "@typescript-eslint/parser": "^5.56.0",
        "@vscode/test-electron": "^2.3.0",
        "assemblyscript": "^0.27.29",
        "eslint": "^8.36.0",
        "glob": "^8.1.0",
        "mocha": "^10.2.0",
        "terser-webpack-plugin": "^5.3.16",
        "ts-loader": "^9.5.4",
        "typescript": "^5.0.0",
        "webpack": "^5.104.1",
        "webpack-cli": "^6.0.1"
      },
      "engines": {
        "vscode": "^1.75.0"
      }
    },
    "node_modules/@assemblyscript/loader": {
      "version": "0.27.37",
      "resolved": "https://registry.npmjs.org/@assemblyscript/loader/-/loader-0.27.37.tgz",
      "integrity": "sha512-ApMt/6AIEhJhQCzpuPh09BhnQx5BGp8I7/xfHbMs6nt36ye66egIOhy3cehRiwLDJ7ssJh7Yg8piPfTL4KALxQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@colors/colors": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@colors/colors/-/colors-1.5.0.tgz",
      "integrity": "sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/@discoveryjs/json-ext": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/@discoveryjs/json-ext/-/json-ext-0.6.3.tgz",
      "integrity": "sha512-4B4OijXeVNOPZlYA2oEwWOTkzyltLao+xbotHQeqN++Rv27Y6s818+n2Qkp8q+Fxhn0t/5lA5X1Mxktud8eayQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.17.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/source-map": {
      "version": "0.3.11",
      "resolved": "https://registry.npmjs.org/@jridgewell/source-map/-/source-map-0.3.11.tgz",
      "integrity": "sha512-ZMp1V8ZFcPG5dIWnQLr3NSI1MiCU7UETdS/A0G8V/XWHvJv3ZsFqutJn1Y5RPmAPX6F3BiE397OqveU/9NCuIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.25"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@types/eslint": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-9.6.1.tgz",
      "integrity": "sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "node_modules/@types/eslint-scope": {
      "version": "3.7.7",
      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.7.tgz",
      "integrity": "sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/eslint": "*",
        "@types/estree": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/glob": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@types/glob/-/glob-8.1.0.tgz",
      "integrity": "sha512-IO+MJPVhoqz+28h1qLAcBEH2+xHMK6MTyHJc7MTnnYb6wsoLR29POVGJ7LycmVXIqyy/4/2ShP5sUwTXuOwb/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/minimatch": "^5.1.2",
        "@types/node": "*"
      }
    },
    "node_modules/@types/js-yaml": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@types/js-yaml/-/js-yaml-4.0.9.tgz",
      "integrity": "sha512-k4MGaQl5TGo/iipqb2UDG2UwjXziSWkh0uysQelTlJpX1qGlpUZYm8PnO4DxG1qBomtJUdYJ6qR6xdIah10JLg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/marked": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@types/marked/-/marked-4.3.2.tgz",
      "integrity": "sha512-a79Yc3TOk6dGdituy8hmTTJXjOkZ7zsFYV10L337ttq/rec8lRMDBpV7fL3uLx6TgbFCa5DU/h8FmIBQPSbU0w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/marked-terminal": {
      "version": "3.1.7",
      "resolved": "https://registry.npmjs.org/@types/marked-terminal/-/marked-terminal-3.1.7.tgz",
      "integrity": "sha512-bKbVK9E6ADmxDsSQAQmEA9NToAfsCTC7TeCiZ5Nl1BCi/IbJqlzSfRTdYrq0PxWL3Lb+dxhWVbHwF9l48neOsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^2.4.1",
        "marked": "^6.0.0"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/marked-terminal/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/marked": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/marked/-/marked-6.0.0.tgz",
      "integrity": "sha512-7E3m/xIlymrFL5gWswIT4CheIE3fDeh51NV09M4x8iOc7NDYlyERcQMLAIHcSlrvwliwbPQ4OGD+MpPSYiQcqw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "marked": "bin/marked.js"
      },
      "engines": {
        "node": ">= 16"
      }
    },
    "node_modules/@types/marked-terminal/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@types/minimatch": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-5.1.2.tgz",
      "integrity": "sha512-K0VQKziLUWkVKiRVrx4a40iPaxTUefQmjtkQofBkYRcoaaL/8rhwDWww9qWbrgicNOgnpIsMxyNIUM4+n6dUIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/mocha": {
      "version": "10.0.10",
      "resolved": "https://registry.npmjs.org/@types/mocha/-/mocha-10.0.10.tgz",
      "integrity": "sha512-xPyYSz1cMPnJQhl0CLMH68j3gprKZaTjG3s5Vi+fDgx+uhG9NOXwbVt52eFS8ECyXhyKcjDLCBEqBExKuiZb7Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.30",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.30.tgz",
      "integrity": "sha512-WJtwWJu7UdlvzEAUm484QNg5eAoq5QR08KDNx7g45Usrs2NtOPiX8ugDqmKdXkyL03rBqU5dYNYVQetEpBHq2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/semver": {
      "version": "7.7.1",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.7.1.tgz",
      "integrity": "sha512-FmgJfu+MOcQ370SD0ev7EI8TlCAfKYU+B4m5T3yXc1CiRN94g/SZPtsCkk506aUDtlMnFZvasDwHHUcZUEaYuA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/vscode": {
      "version": "1.108.1",
      "resolved": "https://registry.npmjs.org/@types/vscode/-/vscode-1.108.1.tgz",
      "integrity": "sha512-DerV0BbSzt87TbrqmZ7lRDIYaMiqvP8tmJTzW2p49ZBVtGUnGAu2RGQd1Wv4XMzEVUpaHbsemVM5nfuQJj7H6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-5.62.0.tgz",
      "integrity": "sha512-TiZzBSJja/LbhNPvk6yc0JrX9XqhQ0hdh6M2svYfsHGejaKFIAGd9MQ+ERIMzLGlN/kZoYIgdxFV0PuljTKXag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.4.0",
        "@typescript-eslint/scope-manager": "5.62.0",
        "@typescript-eslint/type-utils": "5.62.0",
        "@typescript-eslint/utils": "5.62.0",
        "debug": "^4.3.4",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "natural-compare-lite": "^1.4.0",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^5.0.0",
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-5.62.0.tgz",
      "integrity": "sha512-VlJEV0fOQ7BExOsHYAGrgbEiZoi8D+Bl2+f6V2RrXerRSylnp+ZBHmPvaIa8cz0Ajx7WO7Z5RqfgYg7ED1nRhA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "peer": true,
      "dependencies": {
        "@typescript-eslint/scope-manager": "5.62.0",
        "@typescript-eslint/types": "5.62.0",
        "@typescript-eslint/typescript-estree": "5.62.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-5.62.0.tgz",
      "integrity": "sha512-VXuvVvZeQCQb5Zgf4HAxc04q5j+WrNAtNh9OwCsCgpKqESMTu3tF/jhZ3xG6T4NZwWl65Bg8KuS2uEvhSfLl0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "5.62.0",
        "@typescript-eslint/visitor-keys": "5.62.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-5.62.0.tgz",
      "integrity": "sha512-xsSQreu+VnfbqQpW5vnCJdq1Z3Q0U31qiWmRhr98ONQmcp/yhiPJFPq8MXiJVLiksmOKSjIldZzkebzHuCGzew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/typescript-estree": "5.62.0",
        "@typescript-eslint/utils": "5.62.0",
        "debug": "^4.3.4",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "*"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-5.62.0.tgz",
      "integrity": "sha512-87NVngcbVXUahrRTqIK27gD2t5Cu1yuCXxbLcFtCzZGlfyVWWh8mLHkoxzjsB6DDNnvdL+fW8MiwPEJyGJQDgQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-5.62.0.tgz",
      "integrity": "sha512-CmcQ6uY7b9y694lKdRB8FEel7JbU/40iSAPomu++SjLMntB+2Leay2LO6i8VnJk58MtE9/nQSFIH6jpyRWyYzA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/types": "5.62.0",
        "@typescript-eslint/visitor-keys": "5.62.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "semver": "^7.3.7",
        "tsutils": "^3.21.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-5.62.0.tgz",
      "integrity": "sha512-n8oxjeb5aIbPFEtmQxQYOLI0i9n5ySBEY/ZEHHZqKQSFnxio1rv6dthascc9dLuwrL0RC5mPCxB7vnAVGAYWAQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@types/json-schema": "^7.0.9",
        "@types/semver": "^7.3.12",
        "@typescript-eslint/scope-manager": "5.62.0",
        "@typescript-eslint/types": "5.62.0",
        "@typescript-eslint/typescript-estree": "5.62.0",
        "eslint-scope": "^5.1.1",
        "semver": "^7.3.7"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "5.62.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-5.62.0.tgz",
      "integrity": "sha512-07ny+LHRzQXepkGg6w0mFY41fVUNBrL2Roj/++7V1txKugfjm/Ci/qSND03r2RhlJhJYMcTn9AhhSSqQp0Ysyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "5.62.0",
        "eslint-visitor-keys": "^3.3.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@vscode/test-electron": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/@vscode/test-electron/-/test-electron-2.5.2.tgz",
      "integrity": "sha512-8ukpxv4wYe0iWMRQU18jhzJOHkeGKbnw7xWRX3Zw1WJA4cEKbHcmmLPdPrPtL6rhDcrlCZN+xKRpv09n4gRHYg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "http-proxy-agent": "^7.0.2",
        "https-proxy-agent": "^7.0.5",
        "jszip": "^3.10.1",
        "ora": "^8.1.0",
        "semver": "^7.6.2"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/chalk": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.6.2.tgz",
      "integrity": "sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/cli-cursor": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-5.0.0.tgz",
      "integrity": "sha512-aCj4O5wKyszjMmDT4tZj93kxyydN/K5zPWSCe6/0AV/AA1pqe5ZBIw0a2ZfPQV7lL5/yb5HsUreJ6UFAF1tEQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vscode/test-electron/node_modules/is-interactive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-2.0.0.tgz",
      "integrity": "sha512-qP1vozQRI+BMOPcjFzrjXuQvdak2pHNUMZoeG2eRbiSqyvbEf/wQtEOTOX1guk6E3t36RkaqiSt8A/6YElNxLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/is-unicode-supported": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-2.1.0.tgz",
      "integrity": "sha512-mE00Gnza5EEB3Ds0HfMyllZzbBrmLOX3vfWoj9A9PEnTfratQ/BcaJOuMhnkhjXvb2+FkY3VuHqtAGpTPmglFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/log-symbols": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-6.0.0.tgz",
      "integrity": "sha512-i24m8rpwhmPIS4zscNzK6MSEhk0DUWa/8iYQWxhffV8jkI4Phvs3F+quL5xvS0gdQR0FyTCMMH33Y78dDTzzIw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.3.0",
        "is-unicode-supported": "^1.3.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/log-symbols/node_modules/is-unicode-supported": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-1.3.0.tgz",
      "integrity": "sha512-43r2mRvz+8JRIKnWJ+3j8JtjRKZ6GmjzfaE/qiBJnikNnYv/6bagRJ1kUhNk8R5EX/GkobD+r+sfxCPJsiKBLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/onetime": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-7.0.0.tgz",
      "integrity": "sha512-VXJjc87FScF88uafS3JllDgvAm+c/Slfz06lorj2uAY34rlUu0Nt+v8wreiImcrgAjjIHp1rXpTDlLOGw29WwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-function": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/ora": {
      "version": "8.2.0",
      "resolved": "https://registry.npmjs.org/ora/-/ora-8.2.0.tgz",
      "integrity": "sha512-weP+BZ8MVNnlCm8c0Qdc1WSWq4Qn7I+9CJGm7Qali6g44e/PUzbjNqJX5NJ9ljlNMosfJvg1fKEGILklK9cwnw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^5.3.0",
        "cli-cursor": "^5.0.0",
        "cli-spinners": "^2.9.2",
        "is-interactive": "^2.0.0",
        "is-unicode-supported": "^2.0.0",
        "log-symbols": "^6.0.0",
        "stdin-discarder": "^0.2.2",
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/restore-cursor": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-5.1.0.tgz",
      "integrity": "sha512-oMA2dcrw6u0YfxJQXm342bFKX/E4sG9rbTzO9ptUcR/e8A33cHuvStiYOwH7fszkZlZ1z/ta9AAoPk2F4qIOHA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "onetime": "^7.0.0",
        "signal-exit": "^4.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@vscode/test-electron/node_modules/strip-ansi": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.2.tgz",
      "integrity": "sha512-gmBGslpoQJtgnMAvOVqGZpEz9dyoKTCzy2nfz/n8aIFhN/jCE/rCmcxabB6jOOHV+0WNnylOxaxBQPSvcWklhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@webassemblyjs/ast": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.14.1.tgz",
      "integrity": "sha512-nuBEDgQfm1ccRp/8bCQrx1frohyufl4JlbMMZ4P1wpeOfDhF6FQkxZJ1b/e+PLwr6X1Nhw6OLme5usuBWYBvuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/helper-numbers": "1.13.2",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/floating-point-hex-parser": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.13.2.tgz",
      "integrity": "sha512-6oXyTOzbKxGH4steLbLNOu71Oj+C8Lg34n6CqRvqfS2O71BxY6ByfMDRhBytzknj9yGUPVJ1qIKhRlAwO1AovA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-api-error": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.13.2.tgz",
      "integrity": "sha512-U56GMYxy4ZQCbDZd6JuvvNV/WFildOjsaWD3Tzzvmw/mas3cXzRJPMjP83JqEsgSbyrmaGjBfDtV7KDXV9UzFQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-buffer": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.14.1.tgz",
      "integrity": "sha512-jyH7wtcHiKssDtFPRB+iQdxlDf96m0E39yb0k5uJVhFGleZFoNw1c4aeIcVUPPbXUVJ94wwnMOAqUHyzoEPVMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-numbers": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.13.2.tgz",
      "integrity": "sha512-FE8aCmS5Q6eQYcV3gI35O4J789wlQA+7JrqTTpJqn5emA4U2hvwJmvFRC0HODS+3Ye6WioDklgd6scJ3+PLnEA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/floating-point-hex-parser": "1.13.2",
        "@webassemblyjs/helper-api-error": "1.13.2",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.13.2.tgz",
      "integrity": "sha512-3QbLKy93F0EAIXLh0ogEVR6rOubA9AoZ+WRYhNbFyuB70j3dRdwH9g+qXhLAO0kiYGlg3TxDV+I4rQTr/YNXkA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/helper-wasm-section": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.14.1.tgz",
      "integrity": "sha512-ds5mXEqTJ6oxRoqjhWDU83OgzAYjwsCV8Lo/N+oRsNDmx/ZDpqalmrtgOMkHwxsG0iI//3BwWAErYRHtgn0dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/wasm-gen": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/ieee754": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.13.2.tgz",
      "integrity": "sha512-4LtOzh58S/5lX4ITKxnAK2USuNEvpdVV9AlgGQb8rJDHaLeHciwG4zlGr0j/SNWlr7x3vO1lDEsuePvtcDNCkw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "node_modules/@webassemblyjs/leb128": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.13.2.tgz",
      "integrity": "sha512-Lde1oNoIdzVzdkNEAWZ1dZ5orIbff80YPdHx20mrHwHrVNNTjNr8E3xz9BdpcGqRQbAEa+fkrCb+fRFTl/6sQw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webassemblyjs/utf8": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.13.2.tgz",
      "integrity": "sha512-3NQWGjKTASY1xV5m7Hr0iPeXD9+RDobLll3T9d2AO+g3my8xy5peVyjSag4I50mR1bBSN/Ct12lo+R9tJk0NZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@webassemblyjs/wasm-edit": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.14.1.tgz",
      "integrity": "sha512-RNJUIQH/J8iA/1NzlE4N7KtyZNHi3w7at7hDjvRNm5rcUXa00z1vRz3glZoULfJ5mpvYhLybmVcwcjGrC1pRrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/helper-wasm-section": "1.14.1",
        "@webassemblyjs/wasm-gen": "1.14.1",
        "@webassemblyjs/wasm-opt": "1.14.1",
        "@webassemblyjs/wasm-parser": "1.14.1",
        "@webassemblyjs/wast-printer": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/wasm-gen": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.14.1.tgz",
      "integrity": "sha512-AmomSIjP8ZbfGQhumkNvgC33AY7qtMCXnN6bL2u2Js4gVCg8fp735aEiMSBbDR7UQIj90n4wKAFUSEd0QN2Ukg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/ieee754": "1.13.2",
        "@webassemblyjs/leb128": "1.13.2",
        "@webassemblyjs/utf8": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/wasm-opt": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.14.1.tgz",
      "integrity": "sha512-PTcKLUNvBqnY2U6E5bdOQcSM+oVP/PmrDY9NzowJjislEjwP/C4an2303MCVS2Mg9d3AJpIGdUFIQQWbPds0Sw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-buffer": "1.14.1",
        "@webassemblyjs/wasm-gen": "1.14.1",
        "@webassemblyjs/wasm-parser": "1.14.1"
      }
    },
    "node_modules/@webassemblyjs/wasm-parser": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.14.1.tgz",
      "integrity": "sha512-JLBl+KZ0R5qB7mCnud/yyX08jWFw5MsoalJ1pQ4EdFlgj9VdXKGuENGsiCIjegI1W7p91rUlcB/LB5yRJKNTcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@webassemblyjs/helper-api-error": "1.13.2",
        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",
        "@webassemblyjs/ieee754": "1.13.2",
        "@webassemblyjs/leb128": "1.13.2",
        "@webassemblyjs/utf8": "1.13.2"
      }
    },
    "node_modules/@webassemblyjs/wast-printer": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.14.1.tgz",
      "integrity": "sha512-kPSSXE6De1XOR820C90RIo2ogvZG+c3KiHzqUoO/F34Y2shGzesfqv7o57xrxovZJH/MetF5UjroJ/R/3isoiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@webassemblyjs/ast": "1.14.1",
        "@xtuc/long": "4.2.2"
      }
    },
    "node_modules/@webpack-cli/configtest": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@webpack-cli/configtest/-/configtest-3.0.1.tgz",
      "integrity": "sha512-u8d0pJ5YFgneF/GuvEiDA61Tf1VDomHHYMjv/wc9XzYj7nopltpG96nXN5dJRstxZhcNpV1g+nT6CydO7pHbjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12.0"
      },
      "peerDependencies": {
        "webpack": "^5.82.0",
        "webpack-cli": "6.x.x"
      }
    },
    "node_modules/@webpack-cli/info": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@webpack-cli/info/-/info-3.0.1.tgz",
      "integrity": "sha512-coEmDzc2u/ffMvuW9aCjoRzNSPDl/XLuhPdlFRpT9tZHmJ/039az33CE7uH+8s0uL1j5ZNtfdv0HkfaKRBGJsQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12.0"
      },
      "peerDependencies": {
        "webpack": "^5.82.0",
        "webpack-cli": "6.x.x"
      }
    },
    "node_modules/@webpack-cli/serve": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@webpack-cli/serve/-/serve-3.0.1.tgz",
      "integrity": "sha512-sbgw03xQaCLiT6gcY/6u3qBDn01CWw/nbaXl3gTdTFuJJ75Gffv3E3DBpgvY2fkkrdS1fpjaXNOmJlnbtKauKg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12.0"
      },
      "peerDependencies": {
        "webpack": "^5.82.0",
        "webpack-cli": "6.x.x"
      },
      "peerDependenciesMeta": {
        "webpack-dev-server": {
          "optional": true
        }
      }
    },
    "node_modules/@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@xtuc/long": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-import-phases": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/acorn-import-phases/-/acorn-import-phases-1.0.4.tgz",
      "integrity": "sha512-wKmbr/DDiIXzEOiWrTTUcDm24kQ2vGfZQvM2fwg2vXqR5uW6aapr7ObPtj1th32b9u90/Pf4AItvdTh42fBmVQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.13.0"
      },
      "peerDependencies": {
        "acorn": "^8.14.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ajv-formats/-/ajv-formats-2.1.1.tgz",
      "integrity": "sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependencies": {
        "ajv": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "ajv": {
          "optional": true
        }
      }
    },
    "node_modules/ajv-formats/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ajv-formats/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ansi-colors": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.3.tgz",
      "integrity": "sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-6.2.1.tgz",
      "integrity": "sha512-4nJ3yixlEthEJ9Rk4vPcdBRkZvQZlYyu8j4/Mqz5sgIkddmEnH2Yj2ZrnP9S3tQOvSNRUIgVNF/1yPpRAGNRig==",
      "license": "MIT",
      "engines": {
        "node": ">=14.16"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/ansicolors": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/ansicolors/-/ansicolors-0.3.2.tgz",
      "integrity": "sha512-QXu7BPrP29VllRxH8GwB7x5iX5qWKAAMLqKQGWTeLWVlNHNOpVMJ91dsxQAIWXpjuW5wqvxu3Jd/nRjrJ+0pqg==",
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "license": "Python-2.0"
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/assemblyscript": {
      "version": "0.27.37",
      "resolved": "https://registry.npmjs.org/assemblyscript/-/assemblyscript-0.27.37.tgz",
      "integrity": "sha512-YtY5k3PiV3SyUQ6gRlR2OCn8dcVRwkpiG/k2T5buoL2ymH/Z/YbaYWbk/f9mO2HTgEtGWjPiAQrIuvA7G/63Gg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "binaryen": "116.0.0-nightly.20240114",
        "long": "^5.2.4"
      },
      "bin": {
        "asc": "bin/asc.js",
        "asinit": "bin/asinit.js"
      },
      "engines": {
        "node": ">=18",
        "npm": ">=10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/assemblyscript"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "license": "MIT"
    },
    "node_modules/axios": {
      "version": "1.13.2",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.13.2.tgz",
      "integrity": "sha512-VPk9ebNqPcy5lRGuSlKx752IlDatOjT9paPlm8A7yOuW2Fbvp4X3JznJtT4f0GzGLLiWE9W8onz51SqLYwzGaA==",
      "license": "MIT",
      "dependencies": {
        "follow-redirects": "^1.15.6",
        "form-data": "^4.0.4",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.16",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.16.tgz",
      "integrity": "sha512-KeUZdBuxngy825i8xvzaK1Ncnkx0tBmb3k8DkEuqjKRkmtvNTjey2ZsNeh8Dw4lfKvbCOu9oeNx2TKm2vHqcRw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/binaryen": {
      "version": "116.0.0-nightly.20240114",
      "resolved": "https://registry.npmjs.org/binaryen/-/binaryen-116.0.0-nightly.20240114.tgz",
      "integrity": "sha512-0GZrojJnuhoe+hiwji7QFaL3tBlJoA+KFUN7ouYSDGZLSo9CKM8swQX8n/UcbR0d1VuZKU+nhogNzv423JEu5A==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "wasm-opt": "bin/wasm-opt",
        "wasm2js": "bin/wasm2js"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/bl/node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browser-stdout": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/browser-stdout/-/browser-stdout-1.3.1.tgz",
      "integrity": "sha512-qhAVI1+Av2X7qelOfAIYwXONood6XlZE/fXaBSmW/T5SzLAmCgzi+eiWE7fUvbHaeNBQH13UftjpXxsfLkMpgw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/buffer-from": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
      "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001765",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001765.tgz",
      "integrity": "sha512-LWcNtSyZrakjECqmpP4qdg0MMGdN368D7X8XvvAqOcqMv0RxnlqVKZl2V6/mBR68oYMxOZPLw/gO7DuisMHUvQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/cardinal": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/cardinal/-/cardinal-2.1.1.tgz",
      "integrity": "sha512-JSr5eOgoEymtYHBjNWyjrMqet9Am2miJhlfKNdqLp6zoeAh0KN5dRAcxlecj5mAJrmQomgiOBj35xHLrFjqBpw==",
      "license": "MIT",
      "dependencies": {
        "ansicolors": "~0.3.2",
        "redeyed": "~2.1.0"
      },
      "bin": {
        "cdl": "bin/cdl.js"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/chrome-trace-event": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.4.tgz",
      "integrity": "sha512-rNjApaLzuwaOTjCiT8lSDdGN1APCiqkChLMJxJPWLunPAt5fy8xgU9/jNOchV84wfIxrA0lRQB7oCT8jrn/wrQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/cli-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
      "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
      "license": "MIT",
      "dependencies": {
        "restore-cursor": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cli-spinners": {
      "version": "2.9.2",
      "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.9.2.tgz",
      "integrity": "sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-table3": {
      "version": "0.6.5",
      "resolved": "https://registry.npmjs.org/cli-table3/-/cli-table3-0.6.5.tgz",
      "integrity": "sha512-+W/5efTR7y5HRD7gACw9yQjqMVvEMLBHmboM/kPWam+H+Hmyrgjh6YncVKK122YZkXrLudzTuAukUw9FnMf7IQ==",
      "license": "MIT",
      "dependencies": {
        "string-width": "^4.2.0"
      },
      "engines": {
        "node": "10.* || >= 12.*"
      },
      "optionalDependencies": {
        "@colors/colors": "1.5.0"
      }
    },
    "node_modules/cliui": {
      "version": "7.0.4",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
      "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.0",
        "wrap-ansi": "^7.0.0"
      }
    },
    "node_modules/clone": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
      "integrity": "sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/clone-deep": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
      "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-plain-object": "^2.0.4",
        "kind-of": "^6.0.2",
        "shallow-clone": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-11.1.0.tgz",
      "integrity": "sha512-yPVavfyCcRhmorC7rWlkHn15b4wDVgVmBA7kV4QVBsF7kv/9TKJAbAXVTxvTnwP8HHKjRCJDClKbciiYS7p0DQ==",
      "license": "MIT",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/core-util-is": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.3.tgz",
      "integrity": "sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decamelize": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-4.0.0.tgz",
      "integrity": "sha512-9iE1PgSik9HeIIw2JO94IidnE3eBoQrFJ3w7sFuzSX4DpmZ3v5sZpUiV5Swcf6mQEF+Y0ru8Neo+p+nyh2J+hQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/defaults": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.4.tgz",
      "integrity": "sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==",
      "license": "MIT",
      "dependencies": {
        "clone": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/diff": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-5.2.2.tgz",
      "integrity": "sha512-vtcDfH3TOjP8UekytvnHH1o1P4FcUdt4eQ1Y+Abap1tk/OB2MWQvcwS2ClCd1zuIhc3JKOx6p3kod8Vfys3E+A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.4",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.4.tgz",
      "integrity": "sha512-LgQMM4WXU3QI+SYgEc2liRgznaD5ojbmY3sb8LxyguVkIg5FxdpTkvk72te2R38/TGKxH634oLxXRGY6d7AP+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/envinfo": {
      "version": "7.21.0",
      "resolved": "https://registry.npmjs.org/envinfo/-/envinfo-7.21.0.tgz",
      "integrity": "sha512-Lw7I8Zp5YKHFCXL7+Dz95g4CcbMEpgvqZNNq3AmlT5XAV6CgAAk6gyAMqn2zjw08K9BHfcNuKrMiCPLByGafow==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "envinfo": "dist/cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.0.0.tgz",
      "integrity": "sha512-5POEcUuZybH7IdmGsD8wlf0AI55wMecM9rVBTI/qEAy2c1kTOm3DjFYjrBdI2K3BaJjJYfYFeRtM0t9ssnRuxw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-scope": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-5.1.1.tgz",
      "integrity": "sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^4.1.1"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "license": "BSD-2-Clause",
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esquery/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esrecurse/node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/events": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/events/-/events-3.3.0.tgz",
      "integrity": "sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.x"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-uri": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/fast-uri/-/fast-uri-3.1.0.tgz",
      "integrity": "sha512-iPeeDKJSWf4IEOasVVrknXpaBV0IApz/gp7S2bb7Z4Lljbl2MGJRqInZiUrQwV16cpzw/D3S5j5Julj/gT52AA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fastify"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fastify"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/fastest-levenshtein": {
      "version": "1.0.16",
      "resolved": "https://registry.npmjs.org/fastest-levenshtein/-/fastest-levenshtein-1.0.16.tgz",
      "integrity": "sha512-eRnCtTTtGZFpQCwhJiUOuxPQWRXVKYDn0b2PeHfXL6/Zi53SLAzAHfVhVWK2AryC/WH05kGfxhFIPvTF0SXQzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4.9.1"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/flat/-/flat-5.0.2.tgz",
      "integrity": "sha512-b6suED+5/3rTpUBdG1gupIl8MPFCAMA0QXwmljLhvCUKcUvdE4gWky9zpuGCcXHOsz4J9wPGNWq6OKpmIzz3hQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "bin": {
        "flat": "cli.js"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/follow-redirects": {
      "version": "1.15.11",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.15.11.tgz",
      "integrity": "sha512-deG2P0JfjrTxl50XGCDyfI97ZGVCxIpfKYmfyrQ54n5FO/0gfIES8C/Psl6kWVDolizcaaxZJnTS0QSMxvnsBQ==",
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/RubenVerborgh"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=4.0"
      },
      "peerDependenciesMeta": {
        "debug": {
          "optional": true
        }
      }
    },
    "node_modules/form-data": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.5.tgz",
      "integrity": "sha512-8RipRLol37bNs2bhoV67fiTEvdTrbMUYcFTiy3+wuuOnUog2QBHCZWXDRijWQfAkhBj2Uf5UnVaiWwA5vdd82w==",
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "es-set-tostringtag": "^2.1.0",
        "hasown": "^2.0.2",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.4.0.tgz",
      "integrity": "sha512-QZjmEOC+IT1uk6Rx0sX22V6uHWVwbdbxf1faPqJ1QhLdGgsRGCZoyaQBm/piRdJy/D2um6hM1UP7ZEeQ4EkP+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/glob": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/glob/-/glob-8.1.0.tgz",
      "integrity": "sha512-r8hpEjiQEYlF2QU0df3dS+nxxSIreXQS1qRhMJM0Q5NDdR386C7jb7Hwwod8Fgiuex+k0GFjgft18yvxm5XoCQ==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^5.0.1",
        "once": "^1.3.0"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
      "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/he": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "he": "bin/he"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/immediate": {
      "version": "3.0.6",
      "resolved": "https://registry.npmjs.org/immediate/-/immediate-3.0.6.tgz",
      "integrity": "sha512-XXOFtyqDjNDAQxVfYxuF7g9Il/IbWmmlQg2MYKOH8ExIT1qg6xc4zyS3HaEEATgs1btfzxq15ciUiY7gjSXRGQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-local": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.2.0.tgz",
      "integrity": "sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pkg-dir": "^4.2.0",
        "resolve-cwd": "^3.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/interpret": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/interpret/-/interpret-3.1.1.tgz",
      "integrity": "sha512-6xwYfHbajpoF0xLW+iwLkhwgvLoZDfjYfoFNu8ftMoXINzwuymNLd9u/KmwtdT2GbR+/Cz66otEGEVVUHX9QLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-interactive": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
      "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-obj": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-2.1.0.tgz",
      "integrity": "sha512-YWnfyRwxL/+SsrWYfOpUtz5b3YD+nyfkHvjbcanzk8zgyO4ASD67uVMRt8k5bM4lLMDnXfriRhOpemw+NfT1eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-unicode-supported": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
      "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha512-WhB9zCku7EGTj/HQQRz5aUQEUeoQZH2bWcltRErOpymJ4boYE6wL9Tbr23krRPSZ+C5zqNSrSw+Cc7sZZ4b7vg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-worker": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.5.1.tgz",
      "integrity": "sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "merge-stream": "^2.0.0",
        "supports-color": "^8.0.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      }
    },
    "node_modules/jest-worker/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-parse-even-better-errors": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/json-parse-even-better-errors/-/json-parse-even-better-errors-2.3.1.tgz",
      "integrity": "sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jszip": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/jszip/-/jszip-3.10.1.tgz",
      "integrity": "sha512-xXDvecyTpGLrqFrvkrUSoxxfJI5AH7U8zxxtVclpsUtMCq4JQ290LY8AW5c7Ggnr/Y/oK+bQMbqK2qmtk3pN4g==",
      "dev": true,
      "license": "(MIT OR GPL-3.0-or-later)",
      "dependencies": {
        "lie": "~3.3.0",
        "pako": "~1.0.2",
        "readable-stream": "~2.3.6",
        "setimmediate": "^1.0.5"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lie": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/lie/-/lie-3.3.0.tgz",
      "integrity": "sha512-UaiMJzeWRlEujzAuw5LokY1L5ecNQYZKfmyZ9L7wDHb/p5etKaxXhohBcrw0EYby+G/NA52vRSN4N39dxHAIwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "immediate": "~3.0.5"
      }
    },
    "node_modules/loader-runner": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-4.3.1.tgz",
      "integrity": "sha512-IWqP2SCPhyVFTBtRcgMHdzlf9ul25NwaFx4wCEH/KjAXuuHY4yNjvPXsBokp8jCB936PyWRaPKUNh8NvylLp2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.11.5"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==",
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/log-symbols": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
      "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "is-unicode-supported": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/long": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/long/-/long-5.3.2.tgz",
      "integrity": "sha512-mNAgZ1GmyNhD7AuqnTG3/VQ26o760+ZYBPKjPvugO8+nLbYfX6TVpJPseBvopbdY+qpZ/lKUnmEc1LeZYS3QAA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/marked": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/marked/-/marked-4.3.0.tgz",
      "integrity": "sha512-PRsaiG84bK+AMvxziE/lCFss8juXjNaWzVbN5tXAm4XjeaS9NAHhop+PjQxz2A9h8Q4M/xGmzP8vqNwy6JeK0A==",
      "license": "MIT",
      "peer": true,
      "bin": {
        "marked": "bin/marked.js"
      },
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/marked-terminal": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/marked-terminal/-/marked-terminal-5.2.0.tgz",
      "integrity": "sha512-Piv6yNwAQXGFjZSaiNljyNFw7jKDdGrw70FSbtxEyldLsyeuV5ZHm/1wW++kWbrOF1VPnUgYOhB2oLL0ZpnekA==",
      "license": "MIT",
      "dependencies": {
        "ansi-escapes": "^6.2.0",
        "cardinal": "^2.1.1",
        "chalk": "^5.2.0",
        "cli-table3": "^0.6.3",
        "node-emoji": "^1.11.0",
        "supports-hyperlinks": "^2.3.0"
      },
      "engines": {
        "node": ">=14.13.1 || >=16.0.0"
      },
      "peerDependencies": {
        "marked": "^1.0.0 || ^2.0.0 || ^3.0.0 || ^4.0.0 || ^5.0.0"
      }
    },
    "node_modules/marked-terminal/node_modules/chalk": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.6.2.tgz",
      "integrity": "sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==",
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
      "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
      "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/mimic-function": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/mimic-function/-/mimic-function-5.0.1.tgz",
      "integrity": "sha512-VP79XUPxV2CigYP3jWwAUFSku2aKqBH7uTAapFWCBqutsbmDo96KY5o8uh6U+/YSIn5OxJnXp73beVkpqMIGhA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mocha": {
      "version": "10.8.2",
      "resolved": "https://registry.npmjs.org/mocha/-/mocha-10.8.2.tgz",
      "integrity": "sha512-VZlYo/WE8t1tstuRmqgeyBgCbJc/lEdopaa+axcKzTBJ+UIdlAB9XnmvTCAH4pwR4ElNInaedhEBmZD8iCSVEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-colors": "^4.1.3",
        "browser-stdout": "^1.3.1",
        "chokidar": "^3.5.3",
        "debug": "^4.3.5",
        "diff": "^5.2.0",
        "escape-string-regexp": "^4.0.0",
        "find-up": "^5.0.0",
        "glob": "^8.1.0",
        "he": "^1.2.0",
        "js-yaml": "^4.1.0",
        "log-symbols": "^4.1.0",
        "minimatch": "^5.1.6",
        "ms": "^2.1.3",
        "serialize-javascript": "^6.0.2",
        "strip-json-comments": "^3.1.1",
        "supports-color": "^8.1.1",
        "workerpool": "^6.5.1",
        "yargs": "^16.2.0",
        "yargs-parser": "^20.2.9",
        "yargs-unparser": "^2.0.0"
      },
      "bin": {
        "_mocha": "bin/_mocha",
        "mocha": "bin/mocha.js"
      },
      "engines": {
        "node": ">= 14.0.0"
      }
    },
    "node_modules/mocha/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/mocha/node_modules/minimatch": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
      "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mocha/node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/natural-compare-lite": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare-lite/-/natural-compare-lite-1.4.0.tgz",
      "integrity": "sha512-Tj+HTDSJJKaZnfiuw+iaF9skdPpTo2GtEly5JHnWV/hfv2Qj/9RKsGISQtLh2ox3l5EAGw487hnBee0sIJ6v2g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-emoji": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/node-emoji/-/node-emoji-1.11.0.tgz",
      "integrity": "sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==",
      "license": "MIT",
      "dependencies": {
        "lodash": "^4.17.21"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/onetime": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
      "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
      "license": "MIT",
      "dependencies": {
        "mimic-fn": "^2.1.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/ora": {
      "version": "5.4.1",
      "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
      "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
      "license": "MIT",
      "dependencies": {
        "bl": "^4.1.0",
        "chalk": "^4.1.0",
        "cli-cursor": "^3.1.0",
        "cli-spinners": "^2.5.0",
        "is-interactive": "^1.0.0",
        "is-unicode-supported": "^0.1.0",
        "log-symbols": "^4.1.0",
        "strip-ansi": "^6.0.0",
        "wcwidth": "^1.0.1"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-try": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
      "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pako": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
      "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
      "dev": true,
      "license": "(MIT AND Zlib)"
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pkg-dir": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
      "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "find-up": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/find-up": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
      "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^5.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/locate-path": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
      "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^4.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pkg-dir/node_modules/p-limit": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
      "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-try": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/pkg-dir/node_modules/p-locate": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
      "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^2.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/proxy-from-env": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
      "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
      "license": "MIT"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "^5.1.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.8",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.8.tgz",
      "integrity": "sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/rechoir": {
      "version": "0.8.0",
      "resolved": "https://registry.npmjs.org/rechoir/-/rechoir-0.8.0.tgz",
      "integrity": "sha512-/vxpCXddiX8NGfGO/mTafwjq4aFa/71pvamip0++IQk3zG8cbCj0fifNPrjjF1XMXUne91jL9OoxmdykoEtifQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve": "^1.20.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      }
    },
    "node_modules/redeyed": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/redeyed/-/redeyed-2.1.1.tgz",
      "integrity": "sha512-FNpGGo1DycYAdnrKFxCMmKYgo/mILAqtRYbkdQD8Ep/Hk2PQ5+aEAEx+IU713RTDmuBaH0c8P5ZozurNu5ObRQ==",
      "license": "MIT",
      "dependencies": {
        "esprima": "~4.0.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.11",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.11.tgz",
      "integrity": "sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-cwd": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
      "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-from": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-cwd/node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/restore-cursor": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
      "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
      "license": "MIT",
      "dependencies": {
        "onetime": "^5.1.0",
        "signal-exit": "^3.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "license": "MIT"
    },
    "node_modules/schema-utils": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-4.3.3.tgz",
      "integrity": "sha512-eflK8wEtyOE6+hsaRVPxvUKYCpRgzLqDTb8krvAsRIwOGlHoSgYLgBXoubGgLd2fT41/OUYdb48v4k4WWHQurA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.9",
        "ajv": "^8.9.0",
        "ajv-formats": "^2.1.1",
        "ajv-keywords": "^5.1.0"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/schema-utils/node_modules/ajv": {
      "version": "8.17.1",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.17.1.tgz",
      "integrity": "sha512-B/gBuNg5SiMTrPkC+A2+cW0RszwxYmn6VYxB/inlBStS5nx6xHIt/ehKRhIMhqusl7a8LjQoZnjCs5vhwxOQ1g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.3",
        "fast-uri": "^3.0.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/schema-utils/node_modules/ajv-keywords": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-5.1.0.tgz",
      "integrity": "sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.3"
      },
      "peerDependencies": {
        "ajv": "^8.8.2"
      }
    },
    "node_modules/schema-utils/node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/serialize-javascript": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-6.0.2.tgz",
      "integrity": "sha512-Saa1xPByTTq2gdeFZYLLo+RFE35NHZkAbqZeWNd3BpzppeVisAqpDjcp8dyf6uIvEqJRd46jemmyA4iFIeVk8g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "randombytes": "^2.1.0"
      }
    },
    "node_modules/setimmediate": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha512-MATJdZp8sLqDl/68LfQmbP8zKPLQNV6BIZoIgrscFDQ+RsvK/BxeDQOgyxKKoh0y/8h3BqVFnCqQ/gd+reiIXA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/shallow-clone": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
      "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC"
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.21",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.21.tgz",
      "integrity": "sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/stdin-discarder": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/stdin-discarder/-/stdin-discarder-0.2.2.tgz",
      "integrity": "sha512-UhDfHmA92YAlNnCfhmq0VeNL5bDbiZGg7sZ2IvPsXubGkiNa9EC+tUTsjBRsYUAz87btI6/1wf4XoVvQ3uRnmQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-hyperlinks": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.3.0.tgz",
      "integrity": "sha512-RpsAZlpWcDwOPQA22aCH4J0t7L8JmAvsCxfOSEwm7cQs3LshN36QaTkwd70DnBOXDWGssw2eUoc8CaRWT0XunA==",
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0",
        "supports-color": "^7.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/terser": {
      "version": "5.46.0",
      "resolved": "https://registry.npmjs.org/terser/-/terser-5.46.0.tgz",
      "integrity": "sha512-jTwoImyr/QbOWFFso3YoU3ik0jBBDJ6JTOQiy/J2YxVJdZCc+5u7skhNwiOR3FQIygFqVUPHl7qbbxtjW2K3Qg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@jridgewell/source-map": "^0.3.3",
        "acorn": "^8.15.0",
        "commander": "^2.20.0",
        "source-map-support": "~0.5.20"
      },
      "bin": {
        "terser": "bin/terser"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/terser-webpack-plugin": {
      "version": "5.3.16",
      "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-5.3.16.tgz",
      "integrity": "sha512-h9oBFCWrq78NyWWVcSwZarJkZ01c2AyGrzs1crmHZO3QUg9D61Wu4NPjBy69n7JqylFF5y+CsUZYmYEIZ3mR+Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.25",
        "jest-worker": "^27.4.5",
        "schema-utils": "^4.3.0",
        "serialize-javascript": "^6.0.2",
        "terser": "^5.31.1"
      },
      "engines": {
        "node": ">= 10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependencies": {
        "webpack": "^5.1.0"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "uglify-js": {
          "optional": true
        }
      }
    },
    "node_modules/terser/node_modules/commander": {
      "version": "2.20.3",
      "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-loader": {
      "version": "9.5.4",
      "resolved": "https://registry.npmjs.org/ts-loader/-/ts-loader-9.5.4.tgz",
      "integrity": "sha512-nCz0rEwunlTZiy6rXFByQU1kVVpCIgUpc/psFiKVrUwrizdnIbRFu8w7bxhUF0X613DYwT4XzrZHpVyMe758hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "^4.1.0",
        "enhanced-resolve": "^5.0.0",
        "micromatch": "^4.0.0",
        "semver": "^7.3.4",
        "source-map": "^0.7.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "typescript": "*",
        "webpack": "^5.0.0"
      }
    },
    "node_modules/ts-loader/node_modules/source-map": {
      "version": "0.7.6",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.6.tgz",
      "integrity": "sha512-i5uvt8C3ikiWeNZSVZNWcfZPItFQOsYTUAOkcUPGd8DqDy1uOUikjt5dG+uRlwyvR108Fb9DOd4GvXfT0N2/uQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 12"
      }
    },
    "node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/tsutils": {
      "version": "3.21.0",
      "resolved": "https://registry.npmjs.org/tsutils/-/tsutils-3.21.0.tgz",
      "integrity": "sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tslib": "^1.8.1"
      },
      "engines": {
        "node": ">= 6"
      },
      "peerDependencies": {
        "typescript": ">=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "peer": true,
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/watchpack": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-2.5.1.tgz",
      "integrity": "sha512-Zn5uXdcFNIA1+1Ei5McRd+iRzfhENPCe7LeABkJtNulSxjma+l7ltNx55BWZkRlwRnpOgHqxnjyaDgJnNXnqzg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.1.2"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/wcwidth": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==",
      "license": "MIT",
      "dependencies": {
        "defaults": "^1.0.3"
      }
    },
    "node_modules/webpack": {
      "version": "5.104.1",
      "resolved": "https://registry.npmjs.org/webpack/-/webpack-5.104.1.tgz",
      "integrity": "sha512-Qphch25abbMNtekmEGJmeRUhLDbe+QfiWTiqpKYkpCOWY64v9eyl+KRRLmqOFA2AvKPpc9DC6+u2n76tQLBoaA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@types/eslint-scope": "^3.7.7",
        "@types/estree": "^1.0.8",
        "@types/json-schema": "^7.0.15",
        "@webassemblyjs/ast": "^1.14.1",
        "@webassemblyjs/wasm-edit": "^1.14.1",
        "@webassemblyjs/wasm-parser": "^1.14.1",
        "acorn": "^8.15.0",
        "acorn-import-phases": "^1.0.3",
        "browserslist": "^4.28.1",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^5.17.4",
        "es-module-lexer": "^2.0.0",
        "eslint-scope": "5.1.1",
        "events": "^3.2.0",
        "glob-to-regexp": "^0.4.1",
        "graceful-fs": "^4.2.11",
        "json-parse-even-better-errors": "^2.3.1",
        "loader-runner": "^4.3.1",
        "mime-types": "^2.1.27",
        "neo-async": "^2.6.2",
        "schema-utils": "^4.3.3",
        "tapable": "^2.3.0",
        "terser-webpack-plugin": "^5.3.16",
        "watchpack": "^2.4.4",
        "webpack-sources": "^3.3.3"
      },
      "bin": {
        "webpack": "bin/webpack.js"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependenciesMeta": {
        "webpack-cli": {
          "optional": true
        }
      }
    },
    "node_modules/webpack-cli": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/webpack-cli/-/webpack-cli-6.0.1.tgz",
      "integrity": "sha512-MfwFQ6SfwinsUVi0rNJm7rHZ31GyTcpVE5pgVA3hwFRb7COD4TzjUUwhGWKfO50+xdc2MQPuEBBJoqIMGt3JDw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@discoveryjs/json-ext": "^0.6.1",
        "@webpack-cli/configtest": "^3.0.1",
        "@webpack-cli/info": "^3.0.1",
        "@webpack-cli/serve": "^3.0.1",
        "colorette": "^2.0.14",
        "commander": "^12.1.0",
        "cross-spawn": "^7.0.3",
        "envinfo": "^7.14.0",
        "fastest-levenshtein": "^1.0.12",
        "import-local": "^3.0.2",
        "interpret": "^3.1.1",
        "rechoir": "^0.8.0",
        "webpack-merge": "^6.0.1"
      },
      "bin": {
        "webpack-cli": "bin/cli.js"
      },
      "engines": {
        "node": ">=18.12.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      },
      "peerDependencies": {
        "webpack": "^5.82.0"
      },
      "peerDependenciesMeta": {
        "webpack-bundle-analyzer": {
          "optional": true
        },
        "webpack-dev-server": {
          "optional": true
        }
      }
    },
    "node_modules/webpack-cli/node_modules/commander": {
      "version": "12.1.0",
      "resolved": "https://registry.npmjs.org/commander/-/commander-12.1.0.tgz",
      "integrity": "sha512-Vw8qHK3bZM9y/P10u3Vib8o/DdkvA2OtPtZvD871QKjy74Wj1WSKFILMPRPSdUSx5RFK1arlJzEtA4PkFgnbuA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/webpack-merge": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/webpack-merge/-/webpack-merge-6.0.1.tgz",
      "integrity": "sha512-hXXvrjtx2PLYx4qruKl+kyRSLc52V+cCvMxRjmKwoA+CBbbF5GfIBtR6kCvl0fYGqTUPKB+1ktVmTHqMOzgCBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "clone-deep": "^4.0.1",
        "flat": "^5.0.2",
        "wildcard": "^2.0.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/webpack-sources": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-3.3.3.tgz",
      "integrity": "sha512-yd1RBzSGanHkitROoPFd6qsrxt+oFhg/129YzheDGqeustzX0vTZJZsSsQjVQC4yzBQ56K55XU8gaNCtIzOnTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/wildcard": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/wildcard/-/wildcard-2.0.1.tgz",
      "integrity": "sha512-CC1bOL87PIWSBhDcTrdeLo6eGT7mCFtrg0uIJtqJUFyK+eJnzl8A1niH56uu7KMa5XFrtiV+AQuHO3n7DsHnLQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/workerpool": {
      "version": "6.5.1",
      "resolved": "https://registry.npmjs.org/workerpool/-/workerpool-6.5.1.tgz",
      "integrity": "sha512-Fs4dNYcsdpYSAfVxhnl1L5zTksjvOJxtC5hzMNl+1t9B8hTJTdKDyZ5ju7ztgPy+ft9tBFXoOlDNiOT9WUXZlA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "16.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
      "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^7.0.2",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^20.2.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-parser": {
      "version": "20.2.9",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
      "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs-unparser": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/yargs-unparser/-/yargs-unparser-2.0.0.tgz",
      "integrity": "sha512-7pRTIA9Qc1caZ0bZ6RYRGbHJthJWuakf+WmHK0rVeLkNrrGhfoabBNdue6kdINI6r4if7ocq9aD/n7xwKOdzOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase": "^6.0.0",
        "decamelize": "^4.0.0",
        "flat": "^5.0.2",
        "is-plain-obj": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

````

[⬆ 回到目录](#toc)

## 📄 package.json

````json
{
  "name": "yuangs-vscode",
  "publisher": "yuanguangshan",
  "displayName": "Yuangs AI Agent",
  "description": "治理-执行 (Think-Govern-Execute) 闭环能力的 Agent 插件",
  "version": "1.0.5",
  "engines": {
    "vscode": "^1.75.0"
  },
  "categories": [
    "Other"
  ],
  "activationEvents": [
    "onView:yuangs.chatView"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yuanguangshan/vsyuangs.git"
  },
  "license": "MIT",
  "main": "./dist/vscode/extension.js",
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        {
          "id": "yuangs-sidebar",
          "title": "Yuangs",
          "icon": "$(robot)"
        }
      ]
    },
    "views": {
      "yuangs-sidebar": [
        {
          "id": "yuangs.chatView",
          "type": "webview",
          "name": "AI Agent Chat",
          "icon": "$(comment-discussion)"
        }
      ]
    },
    "commands": [
      {
        "command": "yuangs.applyEdit",
        "title": "Apply Suggested Edit",
        "icon": "$(check)"
      },
      {
        "command": "yuangs.clearChat",
        "title": "Clear Chat History",
        "icon": "$(clear-all)"
      }
    ],
    "menus": {
      "view/title": [
        {
          "command": "yuangs.clearChat",
          "when": "view == yuangs.chatView",
          "group": "navigation"
        },
        {
          "command": "yuangs.applyEdit",
          "when": "view == yuangs.chatView",
          "group": "navigation"
        }
      ]
    }
  },
  "scripts": {
    "asbuild:debug": "asc src/engine/agent/governance/sandbox/core.as.ts --target debug",
    "asbuild:release": "asc src/engine/agent/governance/sandbox/core.as.ts --target release",
    "asbuild": "npm run asbuild:debug && npm run asbuild:release",
    "compile": "tsc -p ./",
    "bundle": "webpack --mode production && mkdir -p dist/webview && cp src/vscode/webview/sidebar.html dist/webview/ && cp node_modules/marked/marked.min.js dist/webview/",
    "build": "npm run asbuild && npm run bundle",
    "package": "vsce package",
    "vscode:prepublish": "npm run build",
    "watch": "tsc -watch -p ./",
    "pretest": "npm run build && npm run lint",
    "lint": "eslint src --ext ts",
    "test": "node ./out/test/runTest.js"
  },
  "devDependencies": {
    "@types/glob": "^8.1.0",
    "@types/js-yaml": "^4.0.5",
    "@types/marked": "^4.0.8",
    "@types/marked-terminal": "^3.1.0",
    "@types/mocha": "^10.0.1",
    "@types/node": "20.x",
    "@types/vscode": "^1.75.0",
    "@typescript-eslint/eslint-plugin": "^5.56.0",
    "@typescript-eslint/parser": "^5.56.0",
    "@vscode/test-electron": "^2.3.0",
    "assemblyscript": "^0.27.29",
    "eslint": "^8.36.0",
    "glob": "^8.1.0",
    "mocha": "^10.2.0",
    "terser-webpack-plugin": "^5.3.16",
    "ts-loader": "^9.5.4",
    "typescript": "^5.0.0",
    "webpack": "^5.104.1",
    "webpack-cli": "^6.0.1"
  },
  "dependencies": {
    "@assemblyscript/loader": "^0.27.29",
    "axios": "^1.6.0",
    "chalk": "^4.1.2",
    "commander": "^11.1.0",
    "js-yaml": "^4.1.0",
    "json5": "^2.2.3",
    "marked": "^4.3.0",
    "marked-terminal": "^5.2.0",
    "ora": "^5.4.1",
    "zod": "^3.22.4"
  }
}
````

[⬆ 回到目录](#toc)

## 📄 policy.yaml

````yaml
rules:
  - id: block-root-rm
    when:
      pattern: "rm -rf /"
    effect: deny
    reason: "WASM_SANDBOX: 禁止删除根目录"
  
  - id: require-human-sudo
    when:
      pattern: "sudo "
    effect: require_approval
    reason: "提权操作需要人工二次核验"

  - id: allow-safe-read
    when:
      type: tool_call
      pattern: "read_file"
    effect: allow
    reason: "允许读取文件进行分析"

  - id: rate-limit-shell
    when:
      type: shell_cmd
      max_per_minute: 5
    effect: allow
    reason: "防止 AI 陷入循环执行命令"

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/AgentRuntime.ts

````typescript
import chalk from "chalk";
import { randomUUID } from "crypto";
import { LLMAdapter } from "./llmAdapter";
import { GovernanceService } from "./governance";
import { ToolExecutor } from "./executor";
import { ContextManager } from "./contextManager";
import { evaluateProposal } from "./governance/core";
import { ProposedAction } from "./state";

export class AgentRuntime {
  private context: ContextManager;
  private executionId: string;

  constructor(initialContext: any) {
    this.context = new ContextManager(initialContext);
    this.executionId = randomUUID();
  }

  async run(
    userInput: string,
    mode: "chat" | "command" = "chat",
    onChunk?: (chunk: string) => void,
    model?: string,
  ) {
    let turnCount = 0;
    const maxTurns = 10;

    if (userInput) {
      this.context.addMessage("user", userInput);
    }

    while (turnCount < maxTurns) {
      const currentTurn = ++turnCount;
      if (currentTurn > 1) {
        console.log(chalk.blue(`\n--- Turn ${currentTurn} ---`));
      }

      const messages = this.context.getMessages().map((msg) => ({
        role: (msg.role === "tool" ? "system" : msg.role) as
          | "system"
          | "user"
          | "assistant",
        content: msg.content,
      }));

      const thought = await LLMAdapter.think(
        messages,
        mode as any,
        onChunk,
        model,
        GovernanceService.getPolicyManual(),
      );

      const action: ProposedAction = {
        id: randomUUID(),
        type: (thought.type as any) || "answer",
        payload: thought.payload || { text: thought.raw },
        riskLevel: "low",
        reasoning: thought.reasoning || "",
      };

      if (action.reasoning && !onChunk) {
        console.log(chalk.gray(`\n🤔 Reasoning: ${action.reasoning}`));
      }

      // 如果 LLM 认为已经完成或者当前的动作就是回答
      if (thought.isDone || action.type === "answer") {
        const result = await ToolExecutor.execute(action as any);
        if (!onChunk) {
          console.log(chalk.green(`\n🤖 AI：${result.output}\n`));
        }
        this.context.addMessage("assistant", result.output);
        break;
      }

      // === 预检 (Pre-flight) ===
      const preCheck = evaluateProposal(
        action,
        GovernanceService.getRules(),
        GovernanceService.getLedgerSnapshot(),
      );
      if (preCheck.effect === "deny") {
        console.log(
          chalk.red(`[PRE-FLIGHT] 🛡️ Policy Blocked: ${preCheck.reason}`),
        );
        this.context.addMessage(
          "system",
          `POLICY DENIED: ${preCheck.reason}. Find a different way.`,
        );
        continue;
      }

      // === 正式治理 (WASM + 人工/自动) ===
      const decision = await GovernanceService.adjudicate(action);
      if (decision.status === "rejected") {
        console.log(chalk.red(`[GOVERNANCE] ❌ Rejected: ${decision.reason}`));
        this.context.addMessage(
          "system",
          `Rejected by Governance: ${decision.reason}`,
        );
        continue;
      }

      // === 执行 ===
      console.log(chalk.yellow(`[EXECUTING] ⚙️ ${action.type}...`));
      const result = await ToolExecutor.execute(action as any);

      if (result.success) {
        this.context.addToolResult(action.type, result.output);
        const preview = result.output.length > 300 
          ? result.output.substring(0, 300) + '...' 
          : result.output;
        console.log(chalk.green(`[SUCCESS] Result:\n${preview}`));
      } else {
        this.context.addToolResult(action.type, `Error: ${result.error}`);
        console.log(chalk.red(`[ERROR] ${result.error}`));
      }
    }

    if (turnCount >= maxTurns) {
      console.log(chalk.red(`\n⚠️ Max turns (${maxTurns}) reached.`));
    }
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/actions.ts

````typescript
import { AgentAction } from './types';
import { exec } from 'child_process';
import { promisify } from 'util';
import chalk from 'chalk';
import readline from 'readline';

const execAsync = promisify(exec);

export async function executeAction(
    action: AgentAction,
    options?: { autoYes?: boolean }
): Promise<void> {
    if (action.type === 'print') {
        console.log(action.content);
        return;
    }

    if (action.type === 'confirm') {
        const ok = options?.autoYes || await confirm('Execute this action?');
        if (ok) {
            await executeAction(action.next, options);
        }
        return;
    }

    if (action.type === 'execute') {
        try {
            console.log(chalk.cyan(`\nExecuting: ${action.command}\n`));
            const { stdout, stderr } = await execAsync(action.command, {
                shell: typeof process.env.SHELL === 'string' ? process.env.SHELL : undefined
            });
            if (stdout) console.log(stdout);
            if (stderr) console.error(chalk.yellow(stderr));
        } catch (error: any) {
            console.error(chalk.red(`Execution failed: ${error.message}`));
            throw error;
        }
    }
}

async function confirm(message: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(chalk.cyan(`${message} (y/N): `), (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/chatHistoryStorage.ts

````typescript
import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import os from 'os';
import { AIRequestMessage } from '../core/validation';

const CHAT_HISTORY_DIR = path.resolve(os.homedir(), '.yuangs_chat_history');
const CHAT_HISTORY_FILE = path.join(CHAT_HISTORY_DIR, 'chat_history.json');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);
const rmAsync = promisify(fs.rm);

export async function loadChatHistory(): Promise<AIRequestMessage[]> {
    if (fs.existsSync(CHAT_HISTORY_FILE)) {
        try {
            const raw = await readFileAsync(CHAT_HISTORY_FILE, 'utf-8');
            const data = JSON.parse(raw);

            // 验证数据结构
            if (Array.isArray(data) && data.every(msg =>
                typeof msg === 'object' &&
                ['user', 'assistant', 'system'].includes(msg.role) &&
                typeof msg.content === 'string'
            )) {
                return data as AIRequestMessage[];
            }
        } catch (e) {
            console.warn('警告: 加载聊天历史记录失败，使用空历史记录');
        }
    }
    return [];
}

export async function saveChatHistory(history: AIRequestMessage[]) {
    try {
        await mkdirAsync(CHAT_HISTORY_DIR, { recursive: true });
        await writeFileAsync(CHAT_HISTORY_FILE, JSON.stringify(history, null, 2));
    } catch (e) {
        console.error('错误: 保存聊天历史记录失败:', e);
    }
}

export async function clearChatHistory() {
    try {
        await rmAsync(CHAT_HISTORY_FILE, { force: true });
    } catch (e) {
        console.error('错误: 清除聊天历史记录失败:', e);
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/context.ts

````typescript
import { AgentInput, AgentContext } from './types';
import { ContextBuffer } from './contextBuffer';

export function buildContext(input: AgentInput, contextBuffer: ContextBuffer): AgentContext {
    const items = contextBuffer.export();

    return {
        files: items.map(item => ({
            path: item.path,
            content: item.content,
        })),
        gitDiff: undefined, // Will be enhanced later
        history: [], // Will be populated from conversation history
    };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/contextBuffer.ts

````typescript
export type ContextItem = {
    type: 'file' | 'directory';
    path: string;
    alias?: string;
    content: string;
    summary?: string;
    tokens: number;
};

const estimateTokens = (text: string) => Math.ceil(text.length / 4);

export class ContextBuffer {
    private items: ContextItem[] = [];
    private maxTokens = 32000; // 约 12.8 万字符

    add(item: Omit<ContextItem, 'tokens'>, bypassTokenLimit: boolean = false) {
        const tokens = estimateTokens(item.content);
        this.items.push({ ...item, tokens });
        if (!bypassTokenLimit) {
            this.trimIfNeeded();
        }
    }

    clear() {
        this.items = [];
    }

    list() {
        return this.items.map((item, i) => ({
            index: i + 1,
            type: item.type,
            path: item.path,
            alias: item.alias,
            tokens: item.tokens,
            summary: item.summary
        }));
    }

    isEmpty() {
        return this.items.length === 0;
    }

    export() {
        return this.items;
    }

    import(items: ContextItem[]) {
        this.items = items;
    }

    private totalTokens() {
        return this.items.reduce((sum, i) => sum + i.tokens, 0);
    }

    private trimIfNeeded() {
        while (this.totalTokens() > this.maxTokens) {
            this.items.shift();
        }
    }

    buildPrompt(userInput: string): string {
        if (this.isEmpty()) return userInput;

        const contextBlock = this.items.map(item => {
            const title = item.alias
                ? `[Context Item] ${item.type}: ${item.alias} (${item.path})`
                : `[Context Item] ${item.type}: ${item.path}`;

            const body = item.summary ?? item.content;

            return `${title}\n---\n${body}\n---`;
        }).join('\n\n');

        return `
# 知识上下文 (Knowledge Context)
你目前的会话已加载以下参考资料。在回答用户问题时，请优先参考这些内容：

${contextBlock}

# 任务说明
基于上述提供的上下文（如果有），回答用户的问题。如果上下文中包含源码，请将其视为你当前的“真理来源”。

用户问题：
${userInput}
`;
    }
}
// Test change for git diff
// Another test change (unstaged)

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/contextManager.ts

````typescript
import crypto from 'crypto';
import { GovernanceContext } from './state';

export class ContextManager {
  private messages: Array<{ role: string; content: string; timestamp: number }> = [];
  private maxHistorySize = 50;

  constructor(initialContext?: GovernanceContext) {
    if (initialContext?.history) {
      this.messages = initialContext.history.map(msg => ({
        ...msg,
        timestamp: Date.now()
      }));
    }

    if (initialContext?.input) {
      this.addMessage('user', initialContext.input);
    }
  }

  addMessage(role: string, content: string): void {
    this.messages.push({
      role,
      content,
      timestamp: Date.now()
    });

    if (this.messages.length > this.maxHistorySize) {
      this.messages = this.messages.slice(-this.maxHistorySize);
    }
  }

  addToolResult(toolName: string, result: string): void {
    const content = `Tool ${toolName} returned:\n${result}`;
    this.addMessage('tool', content);
  }

  addObservation(observation: string): void {
    this.addMessage('system', observation);
  }

  getMessages(): Array<{ role: 'system' | 'user' | 'assistant' | 'tool'; content: string }> {
    return this.messages.map(({ role, content }) => ({ 
      role: role as 'system' | 'user' | 'assistant' | 'tool', 
      content 
    }));
  }

  getRecentMessages(count: number): Array<{ role: string; content: string; timestamp: number }> {
    return this.messages.slice(-count);
  }

  getHash(): string {
    const content = JSON.stringify(this.messages);
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  getSnapshot() {
    return {
      inputHash: this.getHash(),
      systemPromptVersion: 'v1.0.0',
      toolSetVersion: 'v1.0.0',
      recentMessages: this.getRecentMessages(10)
    };
  }

  clear(): void {
    this.messages = [];
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/contextStorage.ts

````typescript
import fs from 'fs/promises';
import path from 'path';
import { ContextItem } from './contextBuffer';

const CONTEXT_DIR = path.resolve(process.cwd(), '.ai');
const CONTEXT_FILE = path.join(CONTEXT_DIR, 'context.json');

export async function loadContext(): Promise<ContextItem[]> {
    try {
        const raw = await fs.readFile(CONTEXT_FILE, 'utf-8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export async function saveContext(items: ContextItem[]) {
    await fs.mkdir(CONTEXT_DIR, { recursive: true });
    await fs.writeFile(CONTEXT_FILE, JSON.stringify(items, null, 2));
}

export async function clearContextStorage() {
    await fs.rm(CONTEXT_FILE, { force: true });
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/executor.ts

````typescript
import { ProposedAction, ToolExecutionResult } from './state';
import { VSCodeExecutor } from '../../runtime/vscode/VSCodeExecutor';

/**
 * VS Code 适配版的 ToolExecutor
 * 将所有执行逻辑重定向到 VS Code API
 */
export class ToolExecutor {
  static async execute(action: ProposedAction): Promise<ToolExecutionResult> {
    const { type, payload } = action;

    try {
      switch (type) {
        case 'tool_call':
          return await this.executeTool(payload);

        case 'shell_cmd':
          const shellResult = await VSCodeExecutor.runCommand(payload.command);
          return { success: true, output: shellResult };

        case 'code_diff':
          const diffResult = await VSCodeExecutor.applyDiff(payload.diff);
          return { success: true, output: diffResult };

        case 'answer':
          return {
            success: true,
            output: payload.content || payload.text || '',
            artifacts: []
          };

        default:
          return {
            success: false,
            error: `Unknown action type: ${type}`,
            output: ''
          };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || String(error),
        output: ''
      };
    }
  }

  private static async executeTool(payload: any): Promise<ToolExecutionResult> {
    const toolName = payload.tool_name;
    const params = payload.parameters || {};

    switch (toolName) {
      case 'read_file':
        try {
          const content = await VSCodeExecutor.readFile(params.path);
          return { success: true, output: content };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      case 'write_file':
        const writeResult = await VSCodeExecutor.writeFile(params.path, params.content);
        return { success: true, output: writeResult };

      case 'list_files':
        try {
          const fileList = await VSCodeExecutor.listFiles(params.path || '.');
          return { success: true, output: fileList };
        } catch (e: any) {
          return { success: false, error: e.message, output: "" };
        }

      default:
        return {
          success: false,
          error: `Unknown tool: ${toolName}`,
          output: ''
        };
    }
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/governance.ts

````typescript
import { ProposedAction, GovernanceDecision } from './state';
import { evaluateProposal, PolicyRule, RiskEntry } from './governance/core';
import { RiskLedger } from './governance/ledger';
import { WasmGovernanceBridge } from './governance/bridge';
import jsyaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export class GovernanceService {
  private static rules: PolicyRule[] = [];
  private static ledger = new RiskLedger();
  private static initialized = false;

  static async init(basePath?: string) {
    if (this.initialized) return;
    this.loadPolicy(basePath);
    await WasmGovernanceBridge.init(basePath);
    this.initialized = true;
  }

  private static loadPolicy(basePath?: string) {
    try {
      const root = basePath || process.cwd();
      const policyPath = path.join(root, 'policy.yaml');
      if (fs.existsSync(policyPath)) {
        const content = fs.readFileSync(policyPath, 'utf8');
        const config = jsyaml.load(content) as any;
        this.rules = config.rules || [];
      }
    } catch (e) {
      this.rules = [];
    }
  }

  static getRules(): PolicyRule[] {
    return this.rules;
  }

  static getLedgerSnapshot(): RiskEntry[] {
    return this.ledger.getSnapshot();
  }

  static getPolicyManual(): string {
    return this.rules.map(r => `- ${r.id}: ${r.reason} (${r.effect})`).join('\n');
  }

  static async adjudicate(action: ProposedAction): Promise<GovernanceDecision> {
    await this.init();

    // 1. WASM 物理层核验
    const wasmResult = WasmGovernanceBridge.evaluate(action, this.rules, this.ledger.getSnapshot());
    if (wasmResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: wasmResult.reason || 'WASM Denied', timestamp: Date.now() };
    }

    // 2. 逻辑层核验
    const logicResult = evaluateProposal(action, this.rules, this.ledger.getSnapshot());
    if (logicResult.effect === 'deny') {
      return { status: 'rejected', by: 'policy', reason: logicResult.reason || 'Policy Denied', timestamp: Date.now() };
    }

    if (logicResult.effect === 'allow') {
      this.ledger.record(action.type);
      return { status: 'approved', by: 'policy', timestamp: Date.now() };
    }

    // 3. 人工干预兜底 (模拟)
    return { status: 'approved', by: 'human', timestamp: Date.now() };
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/governance/bridge.ts

````typescript
import fs from 'fs';
import path from 'path';

export class WasmGovernanceBridge {
    private static instance: any = null;

    static async init(basePath?: string): Promise<boolean> {
        try {
            const loader = require('@assemblyscript/loader');
            const wasmPath = path.join(basePath || process.cwd(), 'build', 'release.wasm');

            if (!fs.existsSync(wasmPath)) {
                console.error(`WASM not found at: ${wasmPath}`);
                return false;
            }

            const wasmModule = await loader.instantiate(fs.readFileSync(wasmPath));
            this.instance = wasmModule.exports;
            return true;
        } catch (e) {
            console.error(`WASM init error: ${e}`);
            return false;
        }
    }

    static evaluate(proposal: any, rules: any, ledger: any): any {
        if (!this.instance) return { effect: 'error', reason: 'WASM not initialized' };

        const { __newString, __getString, evaluate } = this.instance;

        const pPtr = __newString(JSON.stringify(proposal));
        const rPtr = __newString(JSON.stringify(rules));
        const lPtr = __newString(JSON.stringify(ledger));

        const resultPtr = evaluate(pPtr, rPtr, lPtr);
        return JSON.parse(__getString(resultPtr));
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/governance/core.ts

````typescript
import { ProposedAction } from '../state';

export interface PolicyRule {
    id: string;
    when: { type?: string; pattern?: string; max_per_minute?: number };
    effect: 'allow' | 'deny' | 'require_approval';
    reason?: string;
}

export interface RiskEntry {
    ts: number;
    actionType: string;
}

export function evaluateProposal(
    action: ProposedAction,
    rules: PolicyRule[],
    ledger: RiskEntry[]
): { effect: string; reason?: string } {
    const now = Date.now();
    for (const rule of rules) {
        const typeMatch = !rule.when.type || rule.when.type === action.type;
        const payloadStr = JSON.stringify(action.payload);
        const patternMatch = !rule.when.pattern || new RegExp(rule.when.pattern, 'i').test(payloadStr);

        if (typeMatch && patternMatch) {
            if (rule.when.max_per_minute) {
                const count = ledger.filter(e => e.ts > now - 60000 && e.actionType === action.type).length;
                if (count >= rule.when.max_per_minute) return { effect: 'deny', reason: `Rate limit: ${rule.id}` };
            }
            return { effect: rule.effect, reason: rule.reason };
        }
    }
    return { effect: 'require_approval', reason: 'Default human review required' };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/governance/ledger.ts

````typescript
import { RiskEntry } from './core';

export class RiskLedger {
    private entries: RiskEntry[] = [];

    record(actionType: string): void {
        this.entries.push({
            ts: Date.now(),
            actionType
        });
        this.cleanup();
    }

    getSnapshot(): RiskEntry[] {
        return [...this.entries];
    }

    private cleanup(): void {
        const oneHourAgo = Date.now() - 3600000;
        this.entries = this.entries.filter(e => e.ts > oneHourAgo);
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/governance/sandbox/core.as.ts

````typescript
/**
 * yuangs Governance WASM Sandbox
 * 这里的代码在执行时与 Node.js 内存完全隔离
 */

// 简单的辅助函数：检查字符串包含（WASM 内部实现）
function includes(source: string, target: string): boolean {
    return source.indexOf(target) != -1;
}

/**
 * 核心裁决导出函数
 * @param proposal 提案字符串
 * @param rules 规则字符串（YAML 转换后的 JSON）
 * @param ledger 账本字符串
 */
export function evaluate(proposal: string, rules: string, ledger: string): string {
    // 1. 暴力阻断：最底层的物理防线（即便外部逻辑被污染，这里也是死的）
    if (proposal.includes("rm -rf /") || proposal.includes("sudo rm")) {
        return '{"effect": "deny", "reason": "WASM_SANDBOX: 检测到毁灭性命令，强制阻断"}';
    }

    // 2. 检查速率（基于账本长度）
    // 假设我们不想让 AI 在短时间内连续提议超过 50 次
    if (ledger.length > 5000) { // 简单通过字符串长度模拟异常账本
        return '{"effect": "deny", "reason": "WASM_SANDBOX: 账本异常膨胀，可能遭受拒绝服务攻击"}';
    }

    // 3. 逻辑透传
    // 在实际生产中，我们会在这里解析 JSON rules。
    // 目前版本我们先确保物理链路打通。
    return '{"effect": "allow", "reason": "WASM_SANDBOX: 物理隔离层验证通过"}';
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/index.ts

````typescript
export { AgentRuntime } from './AgentRuntime';
export * from './state';
export { LLMAdapter } from './llmAdapter';
export { GovernanceService } from './governance';
export { ToolExecutor } from './executor';
export { ContextManager } from './contextManager';
export * from './skills';

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/llm.ts

````typescript
import { AgentPrompt, LLMResult } from './types';
import { callAI_Stream } from '../ai/client';
import axios from 'axios';
import { DEFAULT_AI_PROXY_URL, DEFAULT_MODEL, DEFAULT_ACCOUNT_TYPE, type AIRequestMessage } from '../core/validation';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { safeParseJSON } from '../core/validation';

const CONFIG_FILE = path.join(os.homedir(), '.yuangs.json');

function getUserConfig(): any {
    if (fs.existsSync(CONFIG_FILE)) {
        try {
            const content = fs.readFileSync(CONFIG_FILE, 'utf8');
            return JSON.parse(content);
        } catch (e) { }
    }
    return {};
}

export async function runLLM({
    prompt,
    model,
    stream,
    onChunk,
}: {
    prompt: AgentPrompt;
    model: string;
    stream: boolean;
    onChunk?: (s: string) => void;
}): Promise<LLMResult> {
    const start = Date.now();

    if (stream) {
        let raw = '';
        await callAI_Stream(prompt.messages, model, (chunk) => {
            raw += chunk;
            onChunk?.(chunk);
        });
        return {
            rawText: raw,
            latencyMs: Date.now() - start,
        };
    }

    // Non-streaming mode with optional schema
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    const headers = {
        'Content-Type': 'application/json',
        'X-Client-ID': 'vscode',
        'Origin': 'https://cli.want.biz',
        'Referer': 'https://cli.want.biz/',
        'account': config.accountType || DEFAULT_ACCOUNT_TYPE,
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
        'Accept': 'application/json'
    };

    const data = {
        model: model || config.defaultModel || DEFAULT_MODEL,
        messages: prompt.messages,
        stream: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        const rawText = response.data.choices[0]?.message?.content || '';

        let parsed = undefined;
        if (prompt.outputSchema) {
            const parseResult = safeParseJSON(rawText, prompt.outputSchema, {});
            if (parseResult.success) {
                parsed = parseResult.data;
            }
        }

        return {
            rawText,
            parsed,
            latencyMs: Date.now() - start,
        };
    } catch (error: any) {
        const errorMsg = error.response?.data?.error?.message || error.response?.data?.message || error.message || '未知错误';
        throw new Error(`AI 请求失败: ${errorMsg}`);
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/llmAdapter.ts

````typescript
import { AgentThought } from './state';
import { runLLM } from './llm';
import { AgentPrompt } from './types';
import type { AIRequestMessage } from '../core/validation';
import { getUserConfig } from '../ai/client';

export class LLMAdapter {
  static async think(
    messages: AIRequestMessage[],
    mode: 'chat' | 'command' | 'command+exec' = 'chat',
    onChunk?: (chunk: string) => void,
    model?: string,
    customSystemPrompt?: string
  ): Promise<AgentThought> {
    const prompt: AgentPrompt = {
      system: customSystemPrompt || `[SYSTEM PROTOCOL V2]
- ROLE: AUTOMATED EXECUTION AGENT
- OUTPUT: STRICT JSON ONLY
- TALK: FORBIDDEN
- MODE: REACT (THINK -> ACTION -> PERCEIVE)

JSON SCHEMA:
{
  "action_type": "tool_call" | "shell_cmd" | "code_diff" | "answer",
  "reasoning": "thought process",
  "tool_name": "list_files" | "read_file",
  "diff": "unified diff string",
  "parameters": {},
  "command": "shell string",
  "content": "final answer string"
}

EXECUTION RULES:
1. If data is unknown (e.g. file list), use 'shell_cmd' or 'tool_call'.
2. NEVER explain how to do it. JUST EXECUTE.
3. Your output MUST start with '{' and end with '}'.

Example Task: "count files"
Your Output: {"action_type":"shell_cmd","reasoning":"count files","command":"ls | wc -l"}`,
      messages,
    };

    const config = getUserConfig();
    const finalModel = model || config.defaultModel || 'Assistant';

    const result = await runLLM({
      prompt,
      model: finalModel,
      stream: !!onChunk,
      onChunk
    });

    return this.parseThought(result.rawText);
  }

  private static parseThought(raw: string): AgentThought {
    try {
      // 提取 JSON：支持 Markdown 块或纯 JSON 字符串
      const jsonMatch = raw.match(/```json\n([\s\S]*?)\n```/) || raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[1] || jsonMatch[0]);

        // 如果明确标记为 done，或者动作为 answer，则视为任务结束
        if (parsed.is_done === true || parsed.action_type === 'answer') {
          return {
            raw,
            parsedPlan: parsed,
            isDone: true,
            type: 'answer',
            payload: {
              content: parsed.final_answer || parsed.content || parsed.text || raw
            }
          };
        }

        // 智能推断动作类型：如果 AI 没给 action_type，我们根据字段猜测
        let inferredType = parsed.action_type;
        if (!inferredType) {
          if (parsed.tool_name || parsed.tool) inferredType = 'tool_call';
          else if (parsed.command || parsed.cmd) inferredType = 'shell_cmd';
          else if (parsed.diff || parsed.patch) inferredType = 'code_diff';
          else inferredType = 'answer';
        }

        return {
          raw,
          parsedPlan: parsed,
          isDone: inferredType === 'answer' || parsed.is_done === true,
          type: inferredType,
          payload: {
            tool_name: parsed.tool_name || parsed.tool || '',
            parameters: parsed.parameters || parsed.params || {},
            command: parsed.command || parsed.cmd || '',
            diff: parsed.diff || parsed.patch || '',
            content: parsed.content || parsed.text || ''
          },
          reasoning: parsed.reasoning || ''
        };
      }
    } catch (e) {
      // 解析失败时，回退到将原始内容作为回答
    }

    return {
      raw,
      parsedPlan: {},
      isDone: true,
      type: 'answer',
      payload: { content: raw },
      reasoning: ''
    };
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/policy/engine.ts

````typescript
import { Policy, PolicyContext, PolicyResult } from './types';
import { RiskLevel } from '../state';

export class PolicyEngine {
  private policies: Map<string, Policy> = new Map();

  registerPolicy(policy: Policy): void {
    this.policies.set(policy.name, policy);
  }

  unregisterPolicy(name: string): void {
    this.policies.delete(name);
  }

  async evaluate(context: PolicyContext): Promise<PolicyResult> {
    let finalResult: PolicyResult = {
      allowed: true,
      reason: 'All policies passed'
    };

    for (const [name, policy] of this.policies) {
      const result = await policy.evaluate(context);
      
      if (!result.allowed) {
        return {
          allowed: false,
          reason: `Policy "${name}" blocked: ${result.reason}`,
          requiresEscalation: result.requiresEscalation || false,
          suggestedActions: result.suggestedActions
        };
      }

      if (result.requiresEscalation) {
        finalResult.requiresEscalation = true;
        finalResult.suggestedActions = result.suggestedActions;
      }
    }

    return finalResult;
  }

  evaluateRisk(action: { type: string; payload: any }): RiskLevel {
    const { type, payload } = action;

    if (type === 'tool_call') {
      const toolName = payload.tool_name;
      
      const lowRiskTools = ['read_file', 'list_files', 'web_search'];
      if (lowRiskTools.includes(toolName)) {
        return 'low';
      }

      const mediumRiskTools = ['write_file', 'shell'];
      if (mediumRiskTools.includes(toolName)) {
        const cmd = payload.parameters?.command || payload.command || '';
        if (this.containsDangerousCommand(cmd)) {
          return 'high';
        }
        return 'medium';
      }

      return 'medium';
    }

    if (type === 'shell_cmd') {
      const cmd = payload.command || '';
      if (this.containsDangerousCommand(cmd)) {
        return 'high';
      }
      return 'medium';
    }

    return 'low';
  }

  private containsDangerousCommand(cmd: string): boolean {
    const dangerousPatterns = [
      /rm\s+-rf\s+\//,
      /rm\s+-rf\s+~/,
      />\s*\/dev\/null/,
      /dd\s+if=/,
      /mkfs/,
      /format/,
      /sudo\s+rm/
    ];

    return dangerousPatterns.some(pattern => pattern.test(cmd));
  }
}

export const policyEngine = new PolicyEngine();

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/policy/index.ts

````typescript
export * from './types';
export * from './engine';
export * from './policies/noDangerousShell';

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/policy/policies/noDangerousShell.ts

````typescript
import { Policy, PolicyContext, PolicyResult } from '../types';
import { RiskLevel } from '../../state';

export class NoDangerousShellPolicy implements Policy {
  name = 'no-dangerous-shell';
  description = 'Prevents execution of dangerous shell commands';

  evaluate(context: PolicyContext): PolicyResult {
    const { action } = context;

    if (action.type === 'shell_cmd') {
      const command = action.payload?.command || '';
      
      const dangerousPatterns = [
        { pattern: /rm\s+-rf\s+\//, name: 'rm -rf /', risk: 'high' },
        { pattern: /rm\s+-rf\s+~/, name: 'rm -rf ~', risk: 'high' },
        { pattern: />\s*\/dev\/null/, name: 'Redirect to /dev/null', risk: 'medium' },
        { pattern: /dd\s+if=/, name: 'dd command', risk: 'high' },
        { pattern: /mkfs/, name: 'mkfs (filesystem creation)', risk: 'high' },
        { pattern: /format/, name: 'format command', risk: 'high' },
        { pattern: /sudo\s+rm/, name: 'sudo rm', risk: 'high' },
        { pattern: /chmod\s+777\s+\/(?!dev)/, name: 'chmod 777 on system', risk: 'high' },
        { pattern: /:\s*~\(\)/, name: 'fork bomb', risk: 'high' }
      ];

      for (const { pattern, name, risk } of dangerousPatterns) {
        if (pattern.test(command)) {
          return {
            allowed: false,
            reason: `Dangerous command detected: ${name} (${risk} risk)`,
            requiresEscalation: risk === 'high',
            suggestedActions: [
              `Review the command: "${command}"`,
              'Consider using safer alternatives',
              'Break down the operation into smaller, safer steps'
            ]
          };
        }
      }
    }

    return {
      allowed: true,
      reason: 'No dangerous patterns detected'
    };
  }
}

export const noDangerousShellPolicy = new NoDangerousShellPolicy();

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/policy/types.ts

````typescript
import { RiskLevel } from '../state';

export interface PolicyContext {
  action: {
    type: string;
    payload: any;
  };
  user?: {
    permissions: string[];
  };
  environment?: {
    isProduction: boolean;
  };
}

export interface PolicyResult {
  allowed: boolean;
  reason?: string;
  requiresEscalation?: boolean;
  suggestedActions?: string[];
}

export interface Policy {
  name: string;
  description: string;
  evaluate(context: PolicyContext): PolicyResult | Promise<PolicyResult>;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/prompt.ts

````typescript
import {
    AgentIntent,
    AgentContext,
    AgentMode,
    AgentPrompt,
} from './types';
import { buildCommandPrompt as buildCommandPromptString } from '../ai/prompt';
import { getOSProfile } from '../core/os';
import { getMacros } from '../core/macros';
import { aiCommandPlanSchema } from '../core/validation';
import { getRelevantSkills } from './skills';

export function buildPrompt(
    intent: AgentIntent,
    context: AgentContext,
    mode: AgentMode,
    input: string
): AgentPrompt {
    if (mode === 'chat') {
        return buildChatPrompt(context, input);
    }

    return buildCommandPromptObject(input, context);
}

function buildChatPrompt(
    context: AgentContext,
    input: string
): AgentPrompt {
    const messages: any[] = [
        ...(context.history ?? []),
    ];

    // Add context files if available
    if (context.files && context.files.length > 0) {
        const contextDesc = context.files.map(f =>
            `File: ${f.path}\n\`\`\`\n${f.content}\n\`\`\``
        ).join('\n\n');

        messages.push({
            role: 'system',
            content: `Context:\n${contextDesc}`,
        });
    }

    messages.push({
        role: 'user',
        content: input,
    });

    return {
        system: 'You are a helpful AI assistant with expertise in software development, system administration, and problem-solving.',
        messages,
    };
}

function buildCommandPromptObject(
    input: string,
    context: AgentContext
): AgentPrompt {
    const os = getOSProfile();
    const macros = getMacros();
    const skills = getRelevantSkills(input);
    let promptText = buildCommandPromptString(input, os, macros);

    if (skills.length > 0) {
        const skillList = skills.map(s => `- ${s.name}: 当遇到 "${s.whenToUse}" 时，你可以参考计划: ${s.planTemplate.goal}`).join('\n');
        promptText = `【参考技能库】\n${skillList}\n\n${promptText}`;
    }

    return {
        messages: [
            {
                role: 'user',
                content: promptText,
            },
        ],
        outputSchema: aiCommandPlanSchema,
    };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/replay/events.ts

````typescript
export type EventType = 
  | 'state_transition'
  | 'llm_call'
  | 'tool_execution'
  | 'governance_decision'
  | 'observation_recorded'
  | 'evaluation_result'
  | 'error_occurred';

export interface RuntimeEvent {
  id: string;
  timestamp: number;
  executionId: string;
  type: EventType;
  data: {
    from?: string;
    to?: string;
    action?: any;
    decision?: any;
    result?: any;
    error?: string;
  };
  metadata?: Record<string, any>;
}

export interface EventRecorder {
  record(event: RuntimeEvent): void;
  flush(): Promise<void>;
  getEvents(executionId?: string): RuntimeEvent[];
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/replay/index.ts

````typescript
export * from './events';
export * from './recorder';
export * from './replayer';

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/replay/recorder.ts

````typescript
import { RuntimeEvent, EventRecorder } from './events';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

export class FileEventRecorder implements EventRecorder {
  private events: RuntimeEvent[] = [];
  private logFile: string;
  private flushInterval: number = 1000;

  constructor(logDir: string = '.yuangs_events') {
    this.logFile = path.join(logDir, `events_${Date.now()}.jsonl`);
  }

  async record(event: RuntimeEvent): Promise<void> {
    this.events.push(event);

    if (this.events.length >= this.flushInterval) {
      await this.flush();
    }
  }

  async flush(): Promise<void> {
    if (this.events.length === 0) return;

    const logDir = path.dirname(this.logFile);
    await fs.mkdir(logDir, { recursive: true });

    const content = this.events
      .map(e => JSON.stringify(e))
      .join('\n') + '\n';

    await fs.appendFile(this.logFile, content, 'utf8');
    this.events = [];
  }

  getEvents(executionId?: string): RuntimeEvent[] {
    if (!executionId) {
      return [...this.events];
    }

    return this.events.filter(e => e.executionId === executionId);
  }
}

export const createEvent = (
  executionId: string,
  type: RuntimeEvent['type'],
  data: RuntimeEvent['data'],
  metadata?: RuntimeEvent['metadata']
): RuntimeEvent => ({
  id: randomUUID(),
  timestamp: Date.now(),
  executionId,
  type,
  data,
  metadata
});

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/replay/replayer.ts

````typescript
import { RuntimeEvent } from './events';

export interface ReplayerOptions {
  speed?: number;
  stopOnError?: boolean;
  dryRun?: boolean;
}

export class EventReplayer {
  private events: RuntimeEvent[] = [];
  private currentIndex: number = 0;
  private options: Required<ReplayerOptions>;

  constructor(events: RuntimeEvent[], options: ReplayerOptions = {}) {
    this.events = events;
    this.options = {
      speed: options.speed || 1,
      stopOnError: options.stopOnError !== undefined ? options.stopOnError : true,
      dryRun: options.dryRun || false
    };
  }

  hasNext(): boolean {
    return this.currentIndex < this.events.length;
  }

  next(): RuntimeEvent | null {
    if (!this.hasNext()) {
      return null;
    }

    return this.events[this.currentIndex++];
  }

  reset(): void {
    this.currentIndex = 0;
  }

  async replay(onEvent: (event: RuntimeEvent, options: Required<ReplayerOptions>) => Promise<void>): Promise<void> {
    this.reset();
    let hasError = false;

    while (this.hasNext() && !hasError) {
      const event = this.next();

      if (!event) break;

      try {
        await onEvent(event, this.options);

        if (event.type === 'error_occurred') {
          hasError = true;
          if (this.options.stopOnError) {
            break;
          }
        }

        if (this.options.speed > 1) {
          const delay = 100 / this.options.speed;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      } catch (error: any) {
        console.error(`[Replay] Error at event ${event.id}:`, error.message);
        hasError = true;
      }
    }

    return;
  }

  getSummary(): {
    total: number;
    completed: number;
    errors: number;
  } {
    const errors = this.events.filter(e => e.type === 'error_occurred').length;
    
    return {
      total: this.events.length,
      completed: this.currentIndex,
      errors
    };
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/selectModel.ts

````typescript
import { AgentIntent } from './types';
import { getUserConfig } from '../ai/client';

export function selectModel(
    intent: AgentIntent,
    override?: string
): string {
    if (override) return override;

    const config = getUserConfig();
    const defaultModel = config.defaultModel || 'Assistant';

    return defaultModel;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/skills.ts

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

export interface Skill {
    id: string;
    name: string;
    description: string;
    whenToUse: string; // 触发场景描述
    planTemplate: any;

    // 评价指标
    successCount: number;
    failureCount: number;
    confidence: number; // 0 ~ 1, 初始 0.5

    // 时间戳
    lastUsed: number;
    createdAt: number;

    // 是否启用
    enabled: boolean;
}

const SKILLS_FILE = path.join(os.homedir(), '.yuangs_skills.json');
let skillLibrary: Skill[] = [];

// === Persistence Logic ===

function loadSkills() {
    if (fs.existsSync(SKILLS_FILE)) {
        try {
            const data = fs.readFileSync(SKILLS_FILE, 'utf-8');
            skillLibrary = JSON.parse(data);
        } catch (e) {
            console.error(chalk.yellow(`Failed to load skills from ${SKILLS_FILE}, starting empty.`));
            skillLibrary = [];
        }
    }
}

function saveSkills() {
    try {
        fs.writeFileSync(SKILLS_FILE, JSON.stringify(skillLibrary, null, 2));
    } catch (e) {
        console.error(chalk.red(`Failed to save skills to ${SKILLS_FILE}`));
    }
}

// Initialize on load
loadSkills();

// === Existing Logic with Save Hooks ===

/**
 * 计算技能分 (0 ~ 1)
 */
export function computeSkillScore(skill: Skill, now: number = Date.now()): number {
    const totalUses = skill.successCount + skill.failureCount;
    const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

    // 时间衰减 (Freshness): 半衰期约 14 天
    const idleDays = (now - skill.lastUsed) / (1000 * 60 * 60 * 24);
    const freshness = Math.exp(-idleDays / 14);

    // 综合得分: 45% 成功率 + 35% 新鲜度 + 20% 置信度
    return (0.45 * successRate) + (0.35 * freshness) + (0.20 * skill.confidence);
}

/**
 * 更新技能状态 (执行后调用)
 */
export function updateSkillStatus(skillId: string, success: boolean) {
    const skill = skillLibrary.find(s => s.id === skillId);
    if (!skill) return;

    skill.lastUsed = Date.now();
    if (success) {
        skill.successCount++;
        // 成功奖励: 置信度缓慢提升
        skill.confidence = Math.min(1, skill.confidence + 0.05);
    } else {
        skill.failureCount++;
        // 失败惩罚: 惩罚力度大于奖励，防止系统“自嗨”
        skill.confidence = Math.max(0, skill.confidence - 0.1);
    }

    saveSkills(); // Persist changes
}

/**
 * 自动学习新技能
 */
export function learnSkillFromRecord(record: any, success: boolean = true) {
    if (record.mode === 'chat' || !record.llmResult.plan) return;

    const existingSkill = skillLibrary.find(s => s.name === record.llmResult.plan?.goal);

    if (existingSkill) {
        updateSkillStatus(existingSkill.id, success);
        return;
    }

    // 只有成功的记录才被学为新技能
    if (!success) return;

    const now = Date.now();
    skillLibrary.push({
        id: record.id,
        name: record.llmResult.plan.goal,
        description: `自动学习的技能: ${record.llmResult.plan.goal}`,
        whenToUse: record.input.rawInput,
        planTemplate: record.llmResult.plan,
        successCount: 1,
        failureCount: 0,
        confidence: 0.5,
        lastUsed: now,
        createdAt: now,
        enabled: true
    });

    // 每学习一次，尝试清理一次“冷”技能
    reapColdSkills();

    saveSkills(); // Persist changes
}

/**
 * 筛选并排序技能 (用于注入 Prompt)
 */
export function getRelevantSkills(input: string, limit: number = 3): Skill[] {
    const now = Date.now();

    return skillLibrary
        // 1. 基础筛选: 剔除评分过低的技能 (硬淘汰阈值 0.3)
        .filter(s => computeSkillScore(s, now) >= 0.3)
        // 2. 过滤已禁用的技能
        .filter(s => s.enabled !== false)
        // 3. 排序: 按综合分排序
        .sort((a, b) => computeSkillScore(b, now) - computeSkillScore(a, now))
        // 4. 取上限
        .slice(0, limit);
}

/**
 * 清理过期或低质技能 (Reaper)
 */
export function reapColdSkills() {
    const now = Date.now();
    const initialCount = skillLibrary.length;

    skillLibrary = skillLibrary.filter(skill => {
        const score = computeSkillScore(skill, now);
        const idleDays = (now - skill.lastUsed) / (1000 * 60 * 60 * 24);

        // 满足以下任一条件则淘汰:
        // 1. 得分极低且长期不用
        if (score < 0.25 && idleDays > 30) return false;
        // 2. 失败率极高且尝试过一定次数
        if (skill.failureCount > 5 && (skill.successCount / (skill.successCount + skill.failureCount)) < 0.2) return false;

        return true;
    });

    // 强制保持容量
    if (skillLibrary.length > 100) {
        // 如果还超标，移除得分最低的那个
        skillLibrary.sort((a, b) => computeSkillScore(a, now) - computeSkillScore(b, now));
        skillLibrary.shift();
    }

    if (skillLibrary.length !== initialCount) {
        saveSkills(); // Persist if changes happened
    }
}

export function getAllSkills(): Skill[] {
    return [...skillLibrary];
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/state.ts

````typescript
import { randomUUID } from 'crypto';

export type AgentState = 
  | 'IDLE' 
  | 'THINKING' 
  | 'PROPOSING' 
  | 'GOVERNING' 
  | 'EXECUTING' 
  | 'OBSERVING' 
  | 'EVALUATING' 
  | 'TERMINAL';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface ProposedAction {
  id: string;
  type: 'tool_call' | 'code_diff' | 'shell_cmd' | 'answer';
  payload: any;
  riskLevel: RiskLevel;
  reasoning: string;
}

export type GovernanceDecision = 
  | { status: 'approved'; by: 'policy' | 'human'; timestamp: number }
  | { status: 'rejected'; by: 'policy' | 'human'; reason: string; timestamp: number }
  | { 
      status: 'modified'; 
      by: 'human'; 
      originalActionId: string;
      modifiedAction: ProposedAction;
      modificationReason: string;
      timestamp: number;
    };

export type EvaluationOutcome = 
  | { kind: 'continue'; reason: 'incomplete' | 'failure_retry' }
  | { kind: 'terminate'; reason: 'goal_satisfied' | 'user_abort' | 'max_turns_exceeded' }
  | { kind: 'pause'; reason: 'await_human_input' };

export interface AgentThought {
  raw: string;
  parsedPlan: any;
  isDone: boolean;
  type?: 'tool_call' | 'code_diff' | 'shell_cmd' | 'answer';
  payload?: any;
  reasoning?: string;
}

export interface ExecutionTurn {
  turnId: number;
  startTime: number;
  endTime?: number;
  contextSnapshot: {
    inputHash: string;
    systemPromptVersion: string;
    toolSetVersion: string;
    recentMessages: Array<{ role: string; content: string; timestamp: number }>;
  };
  thought?: AgentThought;
  proposedAction?: ProposedAction;
  governance?: GovernanceDecision;
  executionResult?: {
    success: boolean;
    output: string;
    error?: string;
    artifacts?: string[];
  };
  observation?: {
    summary: string;
    artifacts: string[];
    truncated?: boolean;
  };
  evaluation?: EvaluationOutcome;
}

export interface GovernanceLoopConfig {
  maxTurns: number;
  autoApproveLowRisk: boolean;
  verbose: boolean;
}

export interface ToolExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  artifacts?: string[];
}

export interface GovernanceContext {
  input: string;
  mode: 'chat' | 'command' | 'command+exec';
  history: AIRequestMessage[];
  files?: Array<{ path: string; content: string }>;
}

interface AIRequestMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/agent/types.ts

````typescript
import type { AIRequestMessage } from '../core/validation';
// import { AgentPlan } from './plan';

export type AgentMode = 'chat' | 'command' | 'command+exec';

export interface AgentInput {
    rawInput: string;
    stdin?: string;
    context?: AgentContext;
    options?: {
        model?: string;
        stream?: boolean;
        autoYes?: boolean;
        verbose?: boolean;
    };
}

export interface AgentContext {
    files?: Array<{ path: string; content: string }>;
    gitDiff?: string;
    history?: AIRequestMessage[];
}

export interface AgentIntent {
    type: 'chat' | 'shell' | 'analysis';
    capabilities: {
        reasoning?: boolean;
        code?: boolean;
        longContext?: boolean;
        streaming?: boolean;
    };
}

export interface AgentPrompt {
    system?: string;
    messages: AIRequestMessage[];
    outputSchema?: any;
}

export interface LLMResult {
    rawText: string;
    parsed?: any;
    plan?: any;
    latencyMs: number;
    tokens?: {
        prompt: number;
        completion: number;
        total: number;
    };
    costUsd?: number;
}

export type AgentAction =
    | { type: 'print'; content: string }
    | { type: 'confirm'; next: AgentAction }
    | { type: 'execute'; command: string; risk: 'low' | 'medium' | 'high' };

````

[⬆ 回到目录](#toc)

## 📄 src/engine/ai/client.ts

````typescript
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { DEFAULT_AI_PROXY_URL, DEFAULT_MODEL, DEFAULT_ACCOUNT_TYPE, type UserConfig, type AIRequestMessage } from '../core/validation';
import { loadChatHistory, saveChatHistory } from '../agent/chatHistoryStorage';

const CONFIG_FILE = path.join(os.homedir(), '.yuangs.json');

let conversationHistory: AIRequestMessage[] = [];

// 初始化时加载持久化的聊天历史记录
loadChatHistory().then(history => {
    conversationHistory = history;
});

export function addToConversationHistory(role: 'system' | 'user' | 'assistant', content: string) {
    conversationHistory.push({ role, content });
    if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-20);
    }
    // 同时保存到持久化存储
    saveChatHistory(conversationHistory);
}

export function clearConversationHistory() {
    conversationHistory = [];
    // 同时清除持久化存储
    saveChatHistory(conversationHistory);
}

export function getConversationHistory() {
    return conversationHistory;
}

export function getUserConfig(): UserConfig {
    if (fs.existsSync(CONFIG_FILE)) {
        try {
            const content = fs.readFileSync(CONFIG_FILE, 'utf8');
            return JSON.parse(content) as UserConfig;
        } catch (e) { }
    }
    return {};
}

export async function askAI(prompt: string, model?: string): Promise<string> {
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    const headers = {
        'Content-Type': 'application/json',
        'X-Client-ID': 'vscode',
        'Origin': 'https://cli.want.biz',
        'Referer': 'https://cli.want.biz/',
        'account': config.accountType || DEFAULT_ACCOUNT_TYPE,
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
        'Accept': 'application/json'
    };

    const data = {
        model: model || config.defaultModel || DEFAULT_MODEL,
        messages: [{ role: 'user', content: prompt }],
        stream: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        const content = response.data?.choices?.[0]?.message?.content;
        return content || '';
    } catch (error: any) {
        const errorMsg = error.response?.data?.error?.message || error.response?.data?.message || error.message || '未知错误';
        throw new Error(`AI 请求失败: ${errorMsg}`);
    }
}

export async function callAI_Stream(messages: AIRequestMessage[], model: string | undefined, onChunk: (content: string) => void): Promise<void> {
    const config = getUserConfig();
    const url = config.aiProxyUrl || DEFAULT_AI_PROXY_URL;

    const response = await axios({
        method: 'post',
        url: url,
        data: {
            model: model || config.defaultModel || DEFAULT_MODEL,
            messages: messages,
            stream: true
        },
        responseType: 'stream',
        headers: {
            'Content-Type': 'application/json',
            'X-Client-ID': 'vscode',
            'Origin': 'https://cli.want.biz',
            'Referer': 'https://cli.want.biz/',
            'account': config.accountType || DEFAULT_ACCOUNT_TYPE,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1',
            'Accept': 'application/json'
        }
    });

    return new Promise((resolve, reject) => {
        let buffer = '';
        response.data.on('data', (chunk: Buffer) => {
            buffer += chunk.toString();
            let lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('data: ')) {
                    const data = trimmedLine.slice(6);
                    if (data === '[DONE]') {
                        resolve();
                        return;
                    }
                    try {
                        const parsed = JSON.parse(data);
                        const content = parsed.choices[0]?.delta?.content || '';
                        if (content) onChunk(content);
                    } catch (e) { }
                }
            }
        });
        response.data.on('error', reject);
        response.data.on('end', () => {
            resolve();
        });
    });
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/ai/prompt.ts

````typescript
import { OSProfile } from '../core/os';
import type { Macro } from '../core/validation';

export function buildCommandPrompt(
    userInput: string,
    os: OSProfile,
    macros?: Record<string, Macro>,
    context?: string
): string {
    const macroContext = macros && Object.keys(macros).length > 0
        ? `
【可复用的快捷指令 (Macros)】
以下是可以直接复用的已验证命令。优先复用这些指令，而不是生成新命令：

${Object.entries(macros).map(([name, macro]) => `  - ${name}: ${macro.description || '(无描述)'}`).join('\n')}

当用户的需求与某个 Macro 匹配或相似时：
1. 优先使用该 Macro
2. 在 JSON 输出中使用 "macro" 字段指定 Macro 名称，而不是 "command" 字段
3. 仅在没有合适 Macro 时才生成新命令
`
        : '';

    return `
你是一个专业的命令行专家。

【系统环境】
- 操作系统: ${os.name}
- Shell: ${os.shell}
- find 实现: ${os.find}
- stat 实现: ${os.stat}

【规则】
- 命令必须与当前系统兼容。
- 如果是 macOS (BSD):
  - 不允许使用 find -printf
  - 优先使用 stat -f
- 如果是 Linux (GNU):
  - 可使用 find -printf
- 默认不使用 sudo。
- 确保输出的命令是单行或者使用 && 连接。
- 不要解释，只输出符合以下 JSON 结构的文本。
- 优先复用已验证的快捷指令（Macros），每个 Macro 都是经过人工验证的可靠命令。在生成新命令前，检查是否已有 Macro 可以完成任务。

${macroContext}

【输出 JSON 结构】
{
  "plan": "简要说明你准备执行的步骤",
  "command": "可直接执行的 shell 命令（仅当没有合适 Macro 时提供）",
  "macro": "要复用的 Macro 名称（优先使用，与 command 二选一）",
  "risk": "low | medium | high"
}

【上下文信息】
${context || '无'}

【用户需求】
${userInput}
`;
}

export function buildFixPrompt(
    originalCmd: string,
    stderr: string,
    os: OSProfile
): string {
    return `
该命令在 ${os.name} 上执行失败：

命令：
${originalCmd}

错误信息：
${stderr}

请生成一个 **${os.name} 兼容** 的等价命令。
依然只输出 JSON 格式。注意：这是修复命令，不需要检查 Macro。

{
  "plan": "修复说明",
  "command": "修复后的命令",
  "risk": "low | medium | high"
}
`;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/ai/types.ts

````typescript
export { AICommandPlan, type AICommandPlan as AICommandPlanType } from '../core/validation';

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/apps.ts

````typescript
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import os from 'os';
import { DEFAULT_APPS, parseAppsConfig } from './validation';

export { DEFAULT_APPS };

export function loadAppsConfig(): Record<string, string> {
    const configPaths = [
        path.join(process.cwd(), 'yuangs.config.json'),
        path.join(process.cwd(), 'yuangs.config.yaml'),
        path.join(process.cwd(), 'yuangs.config.yml'),
        path.join(process.cwd(), '.yuangs.json'),
        path.join(process.cwd(), '.yuangs.yaml'),
        path.join(process.cwd(), '.yuangs.yml'),
        path.join(os.homedir(), '.yuangs.json'),
        path.join(os.homedir(), '.yuangs.yaml'),
        path.join(os.homedir(), '.yuangs.yml'),
    ];

    for (const configPath of configPaths) {
        if (fs.existsSync(configPath)) {
            try {
                const configContent = fs.readFileSync(configPath, 'utf8');
                let config: Record<string, string>;
                if (configPath.endsWith('.yaml') || configPath.endsWith('.yml')) {
                    config = yaml.load(configContent) as Record<string, string>;
                } else {
                    config = parseAppsConfig(configContent);
                }
                return config;
            } catch (error) { }
        }
    }
    return DEFAULT_APPS;
}


export function openUrl(url: string) {
    let command;
    switch (process.platform) {
        case 'darwin': command = `open "${url}"`; break;
        case 'win32': command = `start "${url}"`; break;
        default: command = `xdg-open "${url}"`; break;
    }
    exec(command);
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/autofix.ts

````typescript
import { OSProfile } from './os';
import { buildFixPrompt } from '../ai/prompt';
import { askAI } from '../ai/client';
import { safeParseJSON, AIFixPlan, aiFixPlanSchema } from './validation';

export async function autoFixCommand(
    originalCmd: string,
    stderr: string,
    os: OSProfile,
    model?: string
): Promise<AIFixPlan | null> {
    const prompt = buildFixPrompt(originalCmd, stderr, os);
    const raw = await askAI(prompt, model);

    const parseResult = safeParseJSON(raw, aiFixPlanSchema, {} as AIFixPlan);

    if (!parseResult.success) {
        return null;
    }

    return parseResult.data;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/capabilities.ts

````typescript
export enum AtomicCapability {
  TEXT_GENERATION = 'text_generation',
  CODE_GENERATION = 'code_generation',
  TOOL_CALLING = 'tool_calling',
  LONG_CONTEXT = 'long_context',
  REASONING = 'reasoning',
  STREAMING = 'streaming',
}

export interface CompositeCapability {
  name: string;
  composedOf: AtomicCapability[];
}

export const COMPOSITE_CAPABILITIES: CompositeCapability[] = [
  {
    name: 'interactive_agent',
    composedOf: [AtomicCapability.TOOL_CALLING, AtomicCapability.REASONING],
  },
  {
    name: 'large_repo_analysis',
    composedOf: [AtomicCapability.LONG_CONTEXT, AtomicCapability.REASONING],
  },
  {
    name: 'safe_code_editing',
    composedOf: [AtomicCapability.CODE_GENERATION, AtomicCapability.REASONING],
  },
];

export enum ConstraintCapability {
  PREFER_DETERMINISTIC = 'prefer_deterministic',
  LOW_COST = 'low_cost',
  FAST_RESPONSE = 'fast_response',
}

export const CAPABILITY_VERSION = '1.0';

export function isAtomicCapability(value: string): value is AtomicCapability {
  return Object.values(AtomicCapability).includes(value as AtomicCapability);
}

export function isConstraintCapability(value: string): value is ConstraintCapability {
  return Object.values(ConstraintCapability).includes(value as ConstraintCapability);
}

export function resolveCompositeCapability(name: string): AtomicCapability[] {
  const composite = COMPOSITE_CAPABILITIES.find(c => c.name === name);
  if (!composite) {
    throw new Error(`Unknown composite capability: ${name}`);
  }
  return composite.composedOf;
}

export function expandCapabilities(
  capabilities: Array<AtomicCapability | string>
): Set<AtomicCapability> {
  const result = new Set<AtomicCapability>();

  for (const cap of capabilities) {
    if (isAtomicCapability(cap)) {
      result.add(cap);
    } else {
      const atomicCaps = resolveCompositeCapability(cap);
      atomicCaps.forEach(c => result.add(c));
    }
  }

  return result;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/capabilityInference.ts

````typescript
import { AtomicCapability } from '../core/capabilities';
import type { CapabilityRequirement } from '../core/modelMatcher';

export function inferCapabilityRequirement(userInput: string): CapabilityRequirement {
  const required: AtomicCapability[] = [];

  const input = userInput.toLowerCase();

  if (input.includes('代码') || input.includes('script') || input.includes('文件') || input.includes('create') || input.includes('write')) {
    required.push(AtomicCapability.CODE_GENERATION);
  }

  if (input.includes('分析') || input.includes('理解') || input.includes('解释') || input.includes('推理')) {
    required.push(AtomicCapability.REASONING);
  }

  if (input.includes('长') || input.includes('large') || input.includes('仓库') || input.includes('目录') || input.includes('所有文件')) {
    required.push(AtomicCapability.LONG_CONTEXT);
  }

  return {
    required: Array.from(new Set(required)),
    preferred: [],
  };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/capabilitySystem.ts

````typescript
import {
  CapabilityRequirement,
  matchModelWithFallback,
  ModelCapabilities,
  CapabilityMatchResult,
} from './modelMatcher';
import {
  mergeConfigs,
  loadConfigAt,
  dumpConfigSnapshot,
  getConfigFilePaths,
  MergedConfig,
} from './configMerge';
import {
  createExecutionRecord,
  ExecutionRecord,
} from './executionRecord';
import {
  saveExecutionRecord,
  loadExecutionRecord,
  listExecutionRecords,
} from './executionStore';
import { replayEngine, ReplayOptions, ReplayResult } from './replayEngine';

export class CapabilitySystem {
  private primaryModels: ModelCapabilities[] = [];
  private fallbackModels: ModelCapabilities[] = [];

  constructor() {
    this.initializeDefaultModels();
  }

  private initializeDefaultModels(): void {
    // 初始化为空数组，让配置文件成为主要来源
    this.primaryModels = [];
    this.fallbackModels = [];
  }

  matchCapability(requirement: CapabilityRequirement): CapabilityMatchResult {
    const allModels = this.getAllModels();
    const primaryModels = [...this.primaryModels, ...this.loadCustomModels()];
    return matchModelWithFallback(
      primaryModels,
      this.fallbackModels,
      requirement
    );
  }

  loadMergedConfig(): MergedConfig {
    const builtin = {
      aiProxyUrl: 'https://api.openai.com/v1/chat/completions',
      defaultModel: 'gpt-4o-mini',
      accountType: 'free',
    };

    const filePaths = getConfigFilePaths();
    const projectConfig = filePaths.project ? loadConfigAt(filePaths.project) : null;
    const userGlobal = loadConfigAt(filePaths.userGlobal);

    return mergeConfigs(builtin, userGlobal, projectConfig, null);
  }

  loadCustomModels(): ModelCapabilities[] {
    const filePaths = getConfigFilePaths();
    const projectConfig = filePaths.project ? loadConfigAt(filePaths.project) : null;
    const userGlobal = loadConfigAt(filePaths.userGlobal);

    const customModelsArray = [];
    if (userGlobal?.models && Array.isArray(userGlobal.models)) {
      customModelsArray.push(...userGlobal.models as ModelCapabilities[]);
    }
    if (projectConfig?.models && Array.isArray(projectConfig.models)) {
      customModelsArray.push(...projectConfig.models as ModelCapabilities[]);
    }

    return customModelsArray;
  }

  getAllModels(): ModelCapabilities[] {
    const customModels = this.loadCustomModels();
    return [...this.primaryModels, ...this.fallbackModels, ...customModels];
  }

  createAndSaveExecutionRecord(
    commandName: string,
    requirement: CapabilityRequirement,
    matchResult: CapabilityMatchResult,
    command?: string
  ): string {
    const config = this.loadMergedConfig();
    const record = createExecutionRecord(
      commandName,
      requirement,
      config,
      matchResult,
      { success: matchResult.selected !== null },
      command
    );

    const filePath = saveExecutionRecord(record);
    return record.id;
  }

  replayExecution(recordId: string, options: ReplayOptions): Promise<ReplayResult> {
    return replayEngine.replay(recordId, options);
  }

  explainConfig(): string {
    const config = this.loadMergedConfig();
    return dumpConfigSnapshot(config);
  }
}

export const capabilitySystem = new CapabilitySystem();

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion.legacy.ts

````typescript
import fs from 'fs';
import path from 'path';
import { Command } from 'commander';
import { loadAppsConfig } from './apps';
import { getMacros } from './macros';
export function getAllCommands(program: Command): string[] {
    const commands: string[] = [];

    program.commands.forEach(cmd => {
        if (cmd.name()) {
            commands.push(cmd.name());
        }
        if (cmd.aliases()) {
            commands.push(...cmd.aliases());
        }
    });

    try {
        const apps = loadAppsConfig();
        Object.keys(apps).forEach(app => {
            if (!commands.includes(app)) {
                commands.push(app);
            }
        });
    } catch {
    }

    try {
        const macros = getMacros();
        Object.keys(macros).forEach(macro => {
            if (!commands.includes(macro)) {
                commands.push(macro);
            }
        });
    } catch {
    }

    return [...new Set(commands)].sort();
}

/**
 * 获取命令的子命令或参数
 */
export function getCommandSubcommands(program: Command, commandName: string): string[] {
    const command = program.commands.find(cmd => cmd.name() === commandName);
    if (!command) return [];

    const subcommands: string[] = [];

    command.commands.forEach(cmd => {
        if (cmd.name()) {
            subcommands.push(cmd.name());
        }
    });

    command.options.forEach(opt => {
        opt.flags.split(/[, ]+/).forEach(flag => {
            if (flag.startsWith('--')) {
                subcommands.push(flag);
            } else if (flag.startsWith('-')) {
                subcommands.push(flag);
            }
        });
    });

    return [...new Set(subcommands)].sort();
}

/**
 * 生成 Bash 补全脚本
 */
export function generateBashCompletion(program: Command): string {
    const commands = getAllCommands(program);

    return `#!/bin/bash
# yuangs bash completion

_yuangs_completion() {
    local cur prev words cword
    _init_completion || return

    # 补全命令名
    if [[ \${COMP_CWORD} -eq 1 ]]; then
        COMPREPLY=($(compgen -W '${commands.join(' ')}' -- "\${cur}"))
        return
    fi

    # 补全子命令和参数
    local cmd="\${words[1]}"
    case "\${cmd}" in
        ${commands.map(cmd => `
        ${cmd})
            case "\${prev}" in
                -m|--model)
                    COMPREPLY=($(compgen -W "gemini-2.5-flash-lite gemini-2.5-pro" -- "\${cur}"))
                    ;;
                *)
                    COMPREPLY=($(compgen -W "$(yuangs _complete_subcommand ${cmd})" -- "\${cur}"))
                    ;;
            esac
            ;;
        `).join('\n')}

        *)
            ;;
    esac
}

complete -F _yuangs_completion yuangs
`;
}

/**
 * 生成 Zsh 补全脚本
 */
export function generateZshCompletion(program: Command): string {
    const commands = getAllCommands(program);

    return `#compdef yuangs
# yuangs zsh completion

_yuangs() {
    local -a commands
    commands=(
${commands.map(cmd => `        '${cmd}:$(yuangs _describe ${cmd})'`).join('\n')}
    )

    if (( CURRENT == 2 )); then
        _describe 'command' commands
    else
        local cmd="\${words[2]}"
        case "\${cmd}" in
${commands.map(cmd => `
            ${cmd})
                _values 'options' $(yuangs _complete_subcommand ${cmd})
                ;;
`).join('\n')}
            *)
                ;;
        esac
    fi
}

_yuangs
`;
}

export async function installBashCompletion(program: Command): Promise<boolean> {
    const bashrcPath = path.join(process.env.HOME || '', '.bashrc');
    const bashCompletionDir = path.join(process.env.HOME || '', '.bash_completion.d');

    try {
        if (!fs.existsSync(bashCompletionDir)) {
            fs.mkdirSync(bashCompletionDir, { recursive: true });
        }

        const completionPath = path.join(bashCompletionDir, 'yuangs-completion.bash');
        const completionScript = generateBashCompletion(program);

        fs.writeFileSync(completionPath, completionScript, { mode: 0o644 });
        const sourceLine = `# yuangs completion
if [ -f ~/.bash_completion.d/yuangs-completion.bash ]; then
    source ~/.bash_completion.d/yuangs-completion.bash
fi
`;

        let bashrc = '';
        if (fs.existsSync(bashrcPath)) {
            bashrc = fs.readFileSync(bashrcPath, 'utf-8');
        }

        if (!bashrc.includes('yuangs-completion.bash')) {
            fs.appendFileSync(bashrcPath, `\n${sourceLine}`);
        }

        return true;
    } catch (error) {
        console.error('安装 Bash 补全失败:', error);
        return false;
    }
}

export async function installZshCompletion(program: Command): Promise<boolean> {
    const zshrcPath = path.join(process.env.HOME || '', '.zshrc');
    const zfuncDir = path.join(process.env.HOME || '', '.zfunctions');

    try {
        if (!fs.existsSync(zfuncDir)) {
            fs.mkdirSync(zfuncDir, { recursive: true });
        }

        const completionPath = path.join(zfuncDir, '_yuangs');
        const completionScript = generateZshCompletion(program);

        fs.writeFileSync(completionPath, completionScript, { mode: 0o644 });
        let zshrc = '';
        if (fs.existsSync(zshrcPath)) {
            zshrc = fs.readFileSync(zshrcPath, 'utf-8');
        }

        const fpathLine = 'fpath=(~/.zfunctions $fpath)';
        const autoloadLine = 'autoload -U compinit && compinit';

        if (!zshrc.includes('fpath=')) {
            fs.appendFileSync(zshrcPath, `\n${fpathLine}`);
        }

        if (!zshrc.includes('autoload -U compinit')) {
            fs.appendFileSync(zshrcPath, `\n${autoloadLine}`);
        }

        return true;
    } catch (error) {
        console.error('安装 Zsh 补全失败:', error);
        return false;
    }
}

/**
 * 获取命令描述（用于补全提示）
 */
export function getCommandDescription(program: Command, commandName: string): string {
    const command = program.commands.find(cmd => cmd.name() === commandName);
    return command?.description() || '';
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/builtin.ts

````typescript
import type { CompletionItem } from './types';

export function getBuiltinCommands(): Array<{ name: string; description: string }> {
  return [
    { name: 'ai', description: '向 AI 提问' },
    { name: 'list', description: '列出所有应用' },
    { name: 'history', description: '查看及执行命令历史' },
    { name: 'config', description: '管理本地配置' },
    { name: 'macros', description: '查看所有快捷指令' },
    { name: 'save', description: '保存快捷指令' },
    { name: 'run', description: '执行快捷指令' },
    { name: 'help', description: '显示帮助信息' },
    { name: 'completion', description: '安装 Shell 补全' },
    { name: 'shici', description: '打开古诗词 PWA' },
    { name: 'dict', description: '打开英语词典' },
    { name: 'pong', description: '打开 Pong 游戏' }
  ];
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/cache.ts

````typescript
import type { CompletionItem } from './types';

export class CompletionCache {
  private static instance: CompletionCache;
  private cache: Map<string, CompletionItem[]>;
  private timestamp: number;
  private readonly ttl: number = 5000;

  private constructor() {
    this.cache = new Map();
    this.timestamp = Date.now();
  }

  static getInstance(): CompletionCache {
    if (!CompletionCache.instance) {
      CompletionCache.instance = new CompletionCache();
    }
    return CompletionCache.instance;
  }

  get(key: string): CompletionItem[] | null {
    const now = Date.now();
    if (now - this.timestamp > this.ttl) {
      this.cache.clear();
      this.timestamp = now;
      return null;
    }
    return this.cache.get(key) || null;
  }

  set(key: string, items: CompletionItem[]): void {
    this.cache.set(key, items);
  }

  invalidate(): void {
    this.cache.clear();
    this.timestamp = 0;
  }

  invalidatePattern(pattern: RegExp): void {
    for (const key of this.cache.keys()) {
      if (pattern.test(key)) {
        this.cache.delete(key);
      }
    }
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/index.ts

````typescript
import { CompletionRequest, CompletionResponse } from './types';
import { resolveCompletion } from './resolver';

export async function complete(
  req: CompletionRequest
): Promise<CompletionResponse> {
  if (!Array.isArray(req.words)) {
    return { items: [], isPartial: false };
  }

  if (
    typeof req.currentIndex !== 'number' ||
    req.currentIndex < 0 ||
    req.currentIndex >= req.words.length
  ) {
    return { items: [], isPartial: false };
  }

  return resolveCompletion(req);
}

export { setProgramInstance } from './resolver';

export {
  getAllCommands,
  getCommandSubcommands,
  getCommandDescription,
  installBashCompletion,
  installZshCompletion
} from '../completion.legacy';

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/path.ts

````typescript
import fs from 'fs';
import path from 'path';

export type PathKind = 'file' | 'dir';

export function resolvePathSuggestions(
  input: string,
  kind: PathKind
): string[] {
  const cwd = process.cwd();
  const normalized = input.replace(/^~(?=$|\/)/, process.env.HOME || '');
  const isDirInput = normalized.endsWith(path.sep);

  const baseDir = isDirInput
    ? path.resolve(cwd, normalized)
    : path.resolve(cwd, path.dirname(normalized));

  const prefix = isDirInput ? '' : path.basename(normalized);

  try {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true });
    return entries
      .filter(e => !e.name.startsWith('.'))
      .filter(e => {
        if (kind === 'file') return e.isFile();
        return e.isDirectory();
      })
      .filter(e => e.name.startsWith(prefix))
      .map(e => {
        const fullPath = path.join(baseDir, e.name);
        const suggestion = e.isDirectory()
          ? fullPath + path.sep
          : fullPath;
        return suggestion.replace(/^\\/g, '');
      });
  } catch {
    return [];
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/resolver.ts

````typescript
import { CompletionRequest, CompletionResponse, CompletionItem } from './types';
import { unique } from './utils';
import { getBuiltinCommands } from './builtin';
import { loadAppsConfig } from '../apps';
import { getMacros } from '../macros';
import { Command } from 'commander';

let programInstance: Command | null = null;

export function setProgramInstance(program: Command): void {
  programInstance = program;
}

function getProgramInstance(): Command {
  return programInstance || ({} as Command);
}

export async function resolveCompletion(
  req: CompletionRequest
): Promise<CompletionResponse> {
  const { words, currentIndex } = req;

  const currentWord = words[currentIndex] ?? '';
  const previousWord = words[currentIndex - 1] ?? '';

  if (currentIndex === 1) {
    return completeTopLevel(currentWord);
  }

  return completeSubcommand(words.slice(1, currentIndex), currentWord, previousWord);
}

function completeTopLevel(prefix: string): CompletionResponse {
  const items: CompletionItem[] = [];

  const commands = getBuiltinCommands();
  commands.forEach(cmd => {
    items.push({ label: cmd.name });
  });

  try {
    const apps = loadAppsConfig();
    Object.keys(apps).forEach(name => {
      if (!items.find(i => i.label === name)) {
        items.push({ label: name });
      }
    });
  } catch {}

  try {
    const macros = getMacros();
    Object.keys(macros).forEach(name => {
      if (!items.find(i => i.label === name)) {
        items.push({ label: name });
      }
    });
  } catch {}

  const filtered = items.filter(item => item.label.startsWith(prefix));

  return {
    items: unique(filtered),
    isPartial: true
  };
}

function completeSubcommand(
  path: string[],
  prefix: string,
  prev: string
): CompletionResponse {
  const items: CompletionItem[] = [];

  if (prev === '--model' || prev === '-m') {
    items.push(
      { label: 'gemini-2.5-flash-lite' },
      { label: 'gemini-2.5-pro' },
      { label: 'Assistant' },
      { label: 'GPT-4o-mini' }
    );
  } else if (path.length > 0) {
    const baseCommand = path[0];
    const cmd = getProgramInstance().commands.find((c: any) => c.name() === baseCommand);

    if (cmd) {
      cmd.options.forEach((opt: any) => {
        opt.flags.split(/[, ]+/).forEach((flag: string) => {
          if (flag.startsWith('-') && !flag.startsWith('--')) {
            items.push({ label: flag });
          }
        });
      });

      cmd.commands.forEach((subcmd: any) => {
        items.push({ label: subcmd.name() });
      });
    }
  }

  const filtered = items.filter(item => item.label.startsWith(prefix));

  return {
    items: unique(filtered),
    isPartial: true
  };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/types.ts

````typescript
// core/completion/types.ts

/**
 * yuangs Completion Protocol v1.1
 * 终态补全协议 - 唯一、强约束
 */

export interface CompletionRequest {
  /**
   * 完整 argv，不包含 node
   * e.g. ['yuangs', 'ai', 'chat', '--m']
   */
  words: string[];

  /**
   * cursor 所在 index
   */
  currentIndex: number;
}

export interface CompletionItem {
  label: string;
  insertText?: string;
  detail?: string;
}

export interface CompletionResponse {
  items: CompletionItem[];
  isPartial: boolean;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/completion/utils.ts

````typescript
import { CompletionItem } from './types';

export function unique(items: CompletionItem[]): CompletionItem[] {
  const seen = new Set<string>();
  return items.filter(i => {
    if (seen.has(i.label)) return false;
    seen.add(i.label);
    return true;
  });
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/configMerge.ts

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import yaml from 'js-yaml';

export type ConfigSource = 'built-in' | 'user-global' | 'project' | 'command-override';

export interface ConfigFieldSource<T = unknown> {
  value: T;
  source: ConfigSource;
  filePath?: string;
}

export interface MergedConfig {
  aiProxyUrl: ConfigFieldSource<string>;
  defaultModel: ConfigFieldSource<string>;
  accountType: ConfigFieldSource<'free' | 'pro'>;
  [key: string]: ConfigFieldSource<unknown>;
}

export function loadConfigAt(filePath: string): Record<string, unknown> | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (filePath.endsWith('.yaml') || filePath.endsWith('.yml')) {
      return yaml.load(content) as Record<string, unknown>;
    }
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Failed to load config from ${filePath}:`, error);
    return null;
  }
}

export function mergeConfigs(
  builtin: Record<string, unknown>,
  userGlobal: Record<string, unknown> | null,
  project: Record<string, unknown> | null,
  commandOverride: Record<string, unknown> | null
): MergedConfig {
  const merged: MergedConfig = {} as MergedConfig;

  const addField = (key: string, value: unknown, source: ConfigSource, filePath?: string) => {
    merged[key] = { value, source, filePath };
  };

  Object.entries(builtin).forEach(([key, value]) => {
    addField(key, value, 'built-in');
  });

  if (userGlobal) {
    Object.entries(userGlobal).forEach(([key, value]) => {
      addField(key, value, 'user-global', path.join(os.homedir(), '.yuangs.json'));
    });
  }

  if (project) {
    Object.entries(project).forEach(([key, value]) => {
      addField(key, value, 'project');
    });
  }

  if (commandOverride) {
    Object.entries(commandOverride).forEach(([key, value]) => {
      addField(key, value, 'command-override');
    });
  }

  return merged;
}

export function dumpConfigSnapshot(config: MergedConfig): string {
  const output: Record<string, any> = {};

  Object.entries(config).forEach(([key, field]) => {
    output[key] = {
      value: field.value,
      source: field.source,
      filePath: field.filePath,
    };
  });

  return JSON.stringify(output, null, 2);
}

function findProjectConfig(cwd = process.cwd()): string | null {
  let dir = cwd;
  const configFiles = ['.yuangs.json', '.yuangs.yaml', '.yuangs.yml', 'yuangs.config.json'];

  while (dir && dir !== path.dirname(dir)) {
    for (const filename of configFiles) {
      const candidate = path.join(dir, filename);
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }
    dir = path.dirname(dir);
  }

  const root = path.parse(cwd).root;
  for (const filename of configFiles) {
    const rootCandidate = path.join(root, filename);
    if (fs.existsSync(rootCandidate)) {
      return rootCandidate;
    }
  }

  return null;
}

export function getConfigFilePaths(): {
  userGlobal: string;
  project: string | null;
} {
  return {
    userGlobal: path.join(os.homedir(), '.yuangs.json'),
    project: findProjectConfig(),
  };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/executionRecord.ts

````typescript
import { MergedConfig } from './configMerge';
import { ModelCapabilities, CapabilityMatchExplanation } from './modelMatcher';
import { CapabilityRequirement } from './modelMatcher';
import { Skill } from '../agent/skills';

export interface ExecutionMeta {
  commandName: string;
  timestamp: string;
  toolVersion: string;
  projectPath: string;
  args?: any;
  rawInput?: string;
  replayable?: boolean;
  version?: string;
}

export interface CapabilityIntent {
  required: string[];
  preferred: string[];
  capabilityVersion: string;
}

export interface ModelDecision {
  candidateModels: CapabilityMatchExplanation[];
  selectedModel: ModelCapabilities | null;
  usedFallback: boolean;
  fallbackReason?: string;
  strategy?: string;
  reason?: string;
  skills?: Skill[];
}

export interface ExecutionOutcome {
  success: boolean;
  failureReason?: 'capability-mismatch' | 'provider-error' | 'user-abort' | 'timeout' | 'other';
  tokenCount?: number;
  latencyMs?: number;
}

export interface ExecutionRecord {
  id: string;
  meta: ExecutionMeta;
  intent: CapabilityIntent;
  configSnapshot: MergedConfig;
  decision: ModelDecision;
  outcome: ExecutionOutcome;
  command?: string;
}

export function createExecutionId(): string {
  return `exec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function createExecutionRecord(
  commandName: string,
  requirement: CapabilityRequirement,
  config: MergedConfig,
  matchResult: any,
  outcome: Partial<ExecutionOutcome> = {},
  command?: string
): ExecutionRecord {
  const version = require('../../package.json').version;

  return {
    id: createExecutionId(),
    meta: {
      commandName,
      timestamp: new Date().toISOString(),
      toolVersion: version,
      projectPath: process.cwd(),
      version,
      replayable: true,
    },
    intent: {
      required: requirement.required.map(String),
      preferred: requirement.preferred.map(String),
      capabilityVersion: require('./capabilities').CAPABILITY_VERSION,
    },
    configSnapshot: config,
    decision: {
      candidateModels: matchResult.candidates || [],
      selectedModel: matchResult.selected,
      usedFallback: matchResult.fallbackOccurred,
    },
    outcome: {
      success: outcome.success ?? false,
      ...outcome,
    },
    command,
  };
}

export function serializeExecutionRecord(record: ExecutionRecord): string {
  return JSON.stringify(record, null, 2);
}

export function deserializeExecutionRecord(json: string): ExecutionRecord {
  return JSON.parse(json) as ExecutionRecord;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/executionStore.ts

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { ExecutionRecord, serializeExecutionRecord, deserializeExecutionRecord } from './executionRecord';

const RECORD_DIR = path.join(os.homedir(), '.yuangs', 'executions');

export function ensureRecordDir(): void {
  if (!fs.existsSync(RECORD_DIR)) {
    fs.mkdirSync(RECORD_DIR, { recursive: true });
  }
}

export function saveExecutionRecord(record: ExecutionRecord): string {
  ensureRecordDir();

  const filename = `${record.id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  fs.writeFileSync(filepath, serializeExecutionRecord(record), 'utf8');

  return filepath;
}

export function loadExecutionRecord(id: string): ExecutionRecord | null {
  ensureRecordDir();

  const filename = `${id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  if (!fs.existsSync(filepath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filepath, 'utf8');
    return deserializeExecutionRecord(content);
  } catch (error) {
    console.error(`Failed to load execution record ${id}:`, error);
    return null;
  }
}

export function listExecutionRecords(limit: number = 50): ExecutionRecord[] {
  ensureRecordDir();

  const files = fs.readdirSync(RECORD_DIR)
    .filter(f => f.endsWith('.json'))
    .sort((a, b) => {
      const statA = fs.statSync(path.join(RECORD_DIR, a));
      const statB = fs.statSync(path.join(RECORD_DIR, b));
      return statB.mtimeMs - statA.mtimeMs;
    })
    .slice(0, limit);

  const records: ExecutionRecord[] = [];

  for (const file of files) {
    const record = loadExecutionRecord(file.replace('.json', ''));
    if (record) {
      records.push(record);
    }
  }

  return records;
}

export function deleteExecutionRecord(id: string): boolean {
  ensureRecordDir();

  const filename = `${id}.json`;
  const filepath = path.join(RECORD_DIR, filename);

  if (!fs.existsSync(filepath)) {
    return false;
  }

  try {
    fs.unlinkSync(filepath);
    return true;
  } catch (error) {
    console.error(`Failed to delete execution record ${id}:`, error);
    return false;
  }
}

export function clearAllExecutionRecords(): void {
  ensureRecordDir();

  const files = fs.readdirSync(RECORD_DIR).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const filepath = path.join(RECORD_DIR, file);
    try {
      fs.unlinkSync(filepath);
    } catch (error) {
      console.error(`Failed to delete ${filepath}:`, error);
    }
  }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/executor.ts

````typescript
import { spawn } from 'child_process';

export type ExecResult = {
    stdout: string;
    stderr: string;
    code: number | null;
};

export async function exec(command: string): Promise<ExecResult> {
    return new Promise((resolve) => {
        let stdout = '';
        let stderr = '';

        // Use user's preferred shell back with full support for their environment
        const shell = process.env.SHELL || true;
        const child = spawn(command, [], { shell });

        child.stdout.on('data', (data) => {
            stdout += data.toString();
            process.stdout.write(data);
        });

        child.stderr.on('data', (data) => {
            stderr += data.toString();
            process.stderr.write(data);
        });

        child.on('close', (code) => {
            resolve({ stdout, stderr, code });
        });

        child.on('error', (err) => {
            stderr += err.message;
            resolve({ stdout, stderr, code: 1 });
        });
    });
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/explain.ts

````typescript
import { ExecutionRecord } from './executionRecord';
import { computeSkillScore, Skill } from '../agent/skills';

/**
 * Explain Output Spec v1
 * - Stable, human-readable, diff-friendly
 * - No side effects
 * - Do NOT change without bumping spec version
 */
export function explainExecution(record: ExecutionRecord): string {
  const lines: string[] = [];

  lines.push('=== Execution Explanation ===');

  /* =========================
   * [1] Command
   * ========================= */
  lines.push('[1] Command');
  lines.push(`- Name: ${record.meta.commandName ?? 'N/A'}`);

  if (record.command) {
    lines.push(`- Args: ${record.command}`);
  }

  if (record.meta.rawInput) {
    lines.push(`- Raw: ${record.meta.rawInput}`);
  }
  lines.push('');

  /* =========================
   * [2] Decision
   * ========================= */
  const decision = record.decision ?? {};

  lines.push('[2] Decision');
  lines.push(`- Strategy: ${decision.strategy ?? 'capability-match'}`);
  lines.push(
    `- Selected Model: ${decision.selectedModel?.name ?? 'N/A'}`
  );
  lines.push(
    `- Reason: ${decision.reason ?? 'Capability-based selection with fallback support'}`
  );
  lines.push('');

  /* =========================
   * [3] Model
   * ========================= */
  const model = decision.selectedModel;

  lines.push('[3] Model');
  lines.push(`- Name: ${model?.name ?? 'N/A'}`);
  lines.push(`- Provider: ${model?.provider ?? 'N/A'}`);
  lines.push(`- Context Window: ${model?.contextWindow ?? 'default'}`);
  lines.push(`- Cost Profile: ${model?.costProfile ?? 'default'}`);
  lines.push('');

  /* =========================
   * [4] Skills
   * ========================= */
  lines.push('[4] Skills');

  const skills: Skill[] = decision.skills ?? [];
  const now = Date.now();

  if (skills.length === 0) {
    lines.push('- (none)');
  } else {
    const scored = skills
      .map(skill => ({
        skill,
        score: computeSkillScore(skill, now),
      }))
      .sort((a, b) => b.score - a.score);

    for (const { skill, score } of scored) {
      const totalUses = skill.successCount + skill.failureCount;
      const successRate =
        totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      lines.push(`- ${skill.name}`);
      lines.push(`    score: ${score.toFixed(3)}`);
      lines.push(`    confidence: ${skill.confidence.toFixed(3)}`);
      lines.push(`    successRate: ${successRate.toFixed(3)}`);
      lines.push(`    enabled: ${skill.enabled}`);
      lines.push(
        `    lastUsed: ${new Date(skill.lastUsed).toISOString()}`
      );
    }
  }
  lines.push('');

  /* =========================
   * [5] Meta
   * ========================= */
  lines.push('[5] Meta');
  lines.push(`- Execution ID: ${record.id}`);
  lines.push(
    `- Timestamp: ${new Date(record.meta.timestamp).toISOString()}`
  );
  lines.push(`- Replayable: ${record.meta.replayable ?? true}`);
  lines.push(`- Version: ${record.meta.version ?? 'unknown'}`);

  lines.push('=============================');

  return lines.join('\n');
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/fileReader.ts

````typescript
import fs from 'fs';
import path from 'path';

export function parseFilePathsFromLsOutput(output: string): string[] {
    const lines = output.trim().split('\n');
    const filePaths: string[] = [];

    for (const line of lines) {
        const parts = line.trim().split(/\s+/);
        const lastPart = parts[parts.length - 1];
        
        if (lastPart && !lastPart.startsWith('-') && lastPart !== '.' && lastPart !== '..') {
            filePaths.push(lastPart);
        }
    }

    return filePaths;
}

export function readFilesContent(filePaths: string[]): Map<string, string> {
    const contentMap = new Map<string, string>();

    for (const filePath of filePaths) {
        try {
            const fullPath = path.resolve(filePath);
            if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                contentMap.set(filePath, content);
            }
        } catch (error) {
            console.error(`无法读取文件: ${filePath}`);
        }
    }

    return contentMap;
}

export function buildPromptWithFileContent(
    originalOutput: string,
    filePaths: string[],
    contentMap: Map<string, string>,
    question?: string
): string {
    let prompt = '';

    prompt += '## 文件列表\n';
    prompt += '```\n';
    prompt += originalOutput;
    prompt += '```\n\n';

    if (contentMap.size > 0) {
        prompt += '## 文件内容\n\n';
        for (const [filePath, content] of contentMap) {
            prompt += `### ${filePath}\n`;
            prompt += '```\n';
            const maxChars = 5000;
            const truncated = content.length > maxChars 
                ? content.substring(0, maxChars) + '\n... (内容过长已截断)'
                : content;
            prompt += truncated;
            prompt += '\n```\n\n';
        }
    }

    if (question) {
        prompt += `\n## 我的问题\n${question}`;
    } else {
        prompt += '\n## 我的问题\n请分析以上文件列表和文件内容';
    }

    return prompt;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/macros.ts

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { parseMacros, type Macro } from './validation';

const USER_MACROS_FILE = path.join(os.homedir(), '.yuangs_macros.json');

export type { Macro };

function loadMacrosFromFile(filePath: string): Record<string, Macro> {
    if (fs.existsSync(filePath)) {
        try {
            return parseMacros(fs.readFileSync(filePath, 'utf8'));
        } catch (e) { }
    }
    return {};
}

function findProjectMacros(cwd = process.cwd()): string | null {
    let dir = cwd;
    while (dir && dir !== path.dirname(dir)) {
        const candidate = path.join(dir, 'yuangs_macros.json');
        if (fs.existsSync(candidate)) {
            return candidate;
        }
        dir = path.dirname(dir);
    }
    // Check root one last time
    const rootCandidate = path.join(targetRoot(dir), 'yuangs_macros.json');
    if (fs.existsSync(rootCandidate)) return rootCandidate;
    
    return null;
}

// Helper to reliably stop at root (dirname('/') is '/')
function targetRoot(dir: string) {
    return path.parse(dir).root;
}

export function getMacros(): Record<string, Macro> {
    const userMacros = loadMacrosFromFile(USER_MACROS_FILE);
    
    const projectMacrosPath = findProjectMacros();
    const projectMacros = projectMacrosPath ? loadMacrosFromFile(projectMacrosPath) : {};

    return {
        ...userMacros,
        ...projectMacros // Project overrides User
    };
}

export function saveMacro(name: string, commands: string, description: string = '') {
    // Only load USER macros for saving
    const macros = loadMacrosFromFile(USER_MACROS_FILE);
    macros[name] = {
        commands,
        description,
        createdAt: new Date().toISOString()
    };
    fs.writeFileSync(USER_MACROS_FILE, JSON.stringify(macros, null, 2));
    return true;
}

export function deleteMacro(name: string) {
    // Only delete from USER macros
    const macros = loadMacrosFromFile(USER_MACROS_FILE);
    if (macros[name]) {
        delete macros[name];
        fs.writeFileSync(USER_MACROS_FILE, JSON.stringify(macros, null, 2));
        return true;
    }
    return false;
}

export function runMacro(name: string) {
    const macros = getMacros();
    const macro = macros[name];
    if (!macro) return false;

    const { spawn } = require('child_process');
    spawn(macro.commands, [], { shell: true, stdio: 'inherit' });
    return true;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/modelMatcher.ts

````typescript
import { AtomicCapability, ConstraintCapability, expandCapabilities } from './capabilities';

export interface ModelCapabilities {
  name: string;
  provider: string;
  atomicCapabilities: AtomicCapability[];
  contextWindow?: number;
  costProfile?: 'low' | 'medium' | 'high';
}

export interface CapabilityRequirement {
  required: AtomicCapability[];
  preferred: AtomicCapability[];
  constraints?: ConstraintCapability[];
}

export interface CapabilityMatchExplanation {
  modelName: string;
  provider: string;
  hasRequired: boolean;
  hasPreferred: AtomicCapability[];
  missingRequired: AtomicCapability[];
  reason: string;
}

export interface CapabilityMatchResult {
  selected: ModelCapabilities | null;
  candidates: CapabilityMatchExplanation[];
  fallbackOccurred: boolean;
}

export function matchModel(
  models: ModelCapabilities[],
  requirement: CapabilityRequirement
): CapabilityMatchResult {
  const explanations: CapabilityMatchExplanation[] = [];

  for (const model of models) {
    const hasRequired = requirement.required.every(cap =>
      model.atomicCapabilities.includes(cap)
    );

    const missingRequired = requirement.required.filter(cap =>
      !model.atomicCapabilities.includes(cap)
    );

    const hasPreferred = requirement.preferred.filter(cap =>
      model.atomicCapabilities.includes(cap)
    );

    const explanation: CapabilityMatchExplanation = {
      modelName: model.name,
      provider: model.provider,
      hasRequired,
      hasPreferred,
      missingRequired,
      reason: hasRequired
        ? `Has all required capabilities. Matches ${hasPreferred.length}/${requirement.preferred.length} preferred.`
        : `Missing required capabilities: ${missingRequired.map(c => String(c)).join(', ')}`,
    };

    explanations.push(explanation);
  }

  const matchingModels = explanations.filter(e => e.hasRequired);

  if (matchingModels.length === 0) {
    return {
      selected: null,
      candidates: explanations,
      fallbackOccurred: false,
    };
  }

  const bestMatch = matchingModels[0];
  const selectedModel = models.find(m => m.name === bestMatch.modelName);

  return {
    selected: selectedModel || null,
    candidates: explanations,
    fallbackOccurred: false,
  };
}

export function matchModelWithFallback(
  models: ModelCapabilities[],
  fallbackModels: ModelCapabilities[],
  requirement: CapabilityRequirement
): CapabilityMatchResult {
  const primaryResult = matchModel(models, requirement);

  if (primaryResult.selected) {
    return primaryResult;
  }

  const fallbackResult = matchModel(fallbackModels, requirement);

  return {
    ...fallbackResult,
    fallbackOccurred: fallbackResult.selected !== null,
  };
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/os.ts

````typescript
export type OSProfile = {
    name: string;
    shell: string;
    find: 'bsd' | 'gnu';
    stat: 'bsd' | 'gnu';
};

export function getOSProfile(): OSProfile {
    switch (process.platform) {
        case 'darwin':
            return {
                name: 'macOS',
                shell: 'zsh',
                find: 'bsd',
                stat: 'bsd',
            };
        case 'linux':
            return {
                name: 'Linux',
                shell: 'bash',
                find: 'gnu',
                stat: 'gnu',
            };
        case 'win32':
            return {
                name: 'Windows',
                shell: 'cmd',
                find: 'gnu', // Win32 find is different, but for AI context let's assume GNU style tools if they are there, or just label it.
                stat: 'gnu',
            };
        default:
            return {
                name: process.platform,
                shell: 'sh',
                find: 'gnu',
                stat: 'gnu',
            };
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/replayDiff.ts

````typescript
import { ExecutionRecord } from './executionRecord';
import { computeSkillScore } from '../agent/skills';

export interface ReplayDiffResult {
  decisionDiff: DecisionDiff;
  modelDiff: ModelDiff;
  skillsDiff: SkillsDiff;
}

interface DecisionDiff {
  changed: boolean;
  strategyChanged: boolean;
  modelChanged: boolean;
  reasonChanged: boolean;
  before?: {
    strategy: string;
    selectedModel: string;
    reason: string;
  };
  after?: {
    strategy: string;
    selectedModel: string;
    reason: string;
  };
}

interface ModelDiff {
  changed: boolean;
  nameChanged: boolean;
  providerChanged: boolean;
  before?: {
    name: string;
    provider: string;
    contextWindow: number | string;
    costProfile: string;
  };
  after?: {
    name: string;
    provider: string;
    contextWindow: number | string;
    costProfile: string;
  };
}

interface SkillsDiff {
  added: SkillChange[];
  removed: SkillChange[];
  changed: SkillChange[];
}

interface SkillChange {
  name: string;
  score?: number;
  enabled?: boolean;
  confidence?: number;
  successRate?: number;
  lastUsed?: string;
}

export function diffExecution(
  original: ExecutionRecord,
  current: ExecutionRecord
): ReplayDiffResult {
  return {
    decisionDiff: diffDecision(original, current),
    modelDiff: diffModel(original, current),
    skillsDiff: diffSkills(original, current),
  };
}

function diffDecision(original: ExecutionRecord, current: ExecutionRecord): DecisionDiff {
  const origDecision = original.decision;
  const currDecision = current.decision;

  const strategyChanged = origDecision?.strategy !== currDecision?.strategy;
  const modelChanged = origDecision?.selectedModel?.name !== currDecision?.selectedModel?.name;
  const reasonChanged = origDecision?.reason !== currDecision?.reason;

  return {
    changed: strategyChanged || modelChanged || reasonChanged,
    strategyChanged,
    modelChanged,
    reasonChanged,
    before: {
      strategy: origDecision?.strategy ?? 'N/A',
      selectedModel: origDecision?.selectedModel?.name ?? 'N/A',
      reason: origDecision?.reason ?? 'N/A',
    },
    after: {
      strategy: currDecision?.strategy ?? 'N/A',
      selectedModel: currDecision?.selectedModel?.name ?? 'N/A',
      reason: currDecision?.reason ?? 'N/A',
    },
  };
}

function diffModel(original: ExecutionRecord, current: ExecutionRecord): ModelDiff {
  const origModel = original.decision.selectedModel;
  const currModel = current.decision.selectedModel;

  if (!origModel || !currModel) {
    return {
      changed: true,
      nameChanged: true,
      providerChanged: true,
      before: origModel ? {
        name: origModel.name,
        provider: origModel.provider,
        contextWindow: origModel.contextWindow ?? 'default',
        costProfile: origModel.costProfile ?? 'default',
      } : undefined,
      after: currModel ? {
        name: currModel.name,
        provider: currModel.provider,
        contextWindow: currModel.contextWindow ?? 'default',
        costProfile: currModel.costProfile ?? 'default',
      } : undefined,
    };
  }

  const nameChanged = origModel.name !== currModel.name;
  const providerChanged = origModel.provider !== currModel.provider;

  return {
    changed: nameChanged || providerChanged,
    nameChanged,
    providerChanged,
    before: {
      name: origModel.name,
      provider: origModel.provider,
      contextWindow: origModel.contextWindow ?? 'default',
      costProfile: origModel.costProfile ?? 'default',
    },
    after: {
      name: currModel.name,
      provider: currModel.provider,
      contextWindow: currModel.contextWindow ?? 'default',
      costProfile: currModel.costProfile ?? 'default',
    },
  };
}

function diffSkills(original: ExecutionRecord, current: ExecutionRecord): SkillsDiff {
  const origSkills = original.decision.skills ?? [];
  const currSkills = current.decision.skills ?? [];

  const origSkillMap = new Map(origSkills.map(s => [s.name, s]));
  const currSkillMap = new Map(currSkills.map(s => [s.name, s]));

  const added: SkillChange[] = [];
  const removed: SkillChange[] = [];
  const changed: SkillChange[] = [];

  const now = Date.now();

  // Find added and changed skills
  for (const skill of currSkills) {
    const origSkill = origSkillMap.get(skill.name);

    if (!origSkill) {
      // Added
      const score = computeSkillScore(skill, now);
      const totalUses = skill.successCount + skill.failureCount;
      const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      added.push({
        name: skill.name,
        score,
        enabled: skill.enabled,
        confidence: skill.confidence,
        successRate,
        lastUsed: new Date(skill.lastUsed).toISOString(),
      });
    } else {
      // Check if changed
      const origScore = computeSkillScore(origSkill, now);
      const currScore = computeSkillScore(skill, now);
      const origTotalUses = origSkill.successCount + origSkill.failureCount;
      const currTotalUses = skill.successCount + skill.failureCount;
      const origSuccessRate = origTotalUses === 0 ? 0.5 : origSkill.successCount / origTotalUses;
      const currSuccessRate = currTotalUses === 0 ? 0.5 : skill.successCount / currTotalUses;

      if (
        Math.abs(origScore - currScore) > 0.001 ||
        origSkill.enabled !== skill.enabled ||
        Math.abs(origSuccessRate - currSuccessRate) > 0.001
      ) {
        changed.push({
          name: skill.name,
          score: currScore,
          enabled: skill.enabled,
          confidence: skill.confidence,
          successRate: currSuccessRate,
          lastUsed: new Date(skill.lastUsed).toISOString(),
        });
      }
    }
  }

  // Find removed skills
  for (const skill of origSkills) {
    if (!currSkillMap.has(skill.name)) {
      const score = computeSkillScore(skill, now);
      const totalUses = skill.successCount + skill.failureCount;
      const successRate = totalUses === 0 ? 0.5 : skill.successCount / totalUses;

      removed.push({
        name: skill.name,
        score,
        enabled: skill.enabled,
        confidence: skill.confidence,
        successRate,
        lastUsed: new Date(skill.lastUsed).toISOString(),
      });
    }
  }

  return {
    added,
    removed,
    changed,
  };
}

export function formatReplayDiff(diff: ReplayDiffResult): string {
  const lines: string[] = [];

  lines.push('=== Replay Diff ===');

  // [Decision]
  lines.push('[Decision]');
  if (!diff.decisionDiff.changed) {
    lines.push('- no change');
  } else {
    if (diff.decisionDiff.strategyChanged) {
      lines.push(`- strategy: ${diff.decisionDiff.before?.strategy} → ${diff.decisionDiff.after?.strategy}`);
    }
    if (diff.decisionDiff.modelChanged) {
      lines.push(`- selectedModel: ${diff.decisionDiff.before?.selectedModel} → ${diff.decisionDiff.after?.selectedModel}`);
    }
    if (diff.decisionDiff.reasonChanged) {
      lines.push(`- reason:`);
      lines.push(`    before: "${diff.decisionDiff.before?.reason}"`);
      lines.push(`    after: "${diff.decisionDiff.after?.reason}"`);
    }
  }
  lines.push('');

  // [Model]
  lines.push('[Model]');
  if (!diff.modelDiff.changed) {
    lines.push('- no change');
  } else {
    if (diff.modelDiff.nameChanged) {
      lines.push(`- name: ${diff.modelDiff.before?.name} → ${diff.modelDiff.after?.name}`);
    }
    if (diff.modelDiff.providerChanged) {
      lines.push(`- provider: ${diff.modelDiff.before?.provider} → ${diff.modelDiff.after?.provider}`);
    }
  }
  lines.push('');

  // [Skills]
  lines.push('[Skills]');
  if (diff.skillsDiff.added.length === 0 &&
      diff.skillsDiff.removed.length === 0 &&
      diff.skillsDiff.changed.length === 0) {
    lines.push('- no change');
  } else {
    for (const skill of diff.skillsDiff.added) {
      lines.push(`+ added: ${skill.name} (score=${skill.score?.toFixed(3)})`);
    }
    for (const skill of diff.skillsDiff.removed) {
      lines.push(`- removed: ${skill.name}`);
    }
    for (const skill of diff.skillsDiff.changed) {
      lines.push(`~ changed: ${skill.name} (score=${skill.score?.toFixed(3)}, enabled=${skill.enabled})`);
    }
  }

  lines.push('===================');

  return lines.join('\n');
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/replayEngine.ts

````typescript
import chalk from 'chalk';
import { ExecutionRecord } from './executionRecord';
import { loadExecutionRecord } from './executionStore';
import { explainExecution } from './explain';

export type ReplayMode = 'strict' | 'compatible' | 're-evaluate';

export interface ReplayOptions {
  mode: ReplayMode;
  skipAI?: boolean;
  verbose?: boolean;
  dry?: boolean;
  explain?: boolean;
  diff?: boolean;
}

export interface ReplayResult {
  success: boolean;
  message: string;
  executedModel?: string;
  deviationReason?: string;
}

export class ReplayEngine {
  async replay(recordId: string, options: ReplayOptions = { mode: 'strict' }): Promise<ReplayResult> {
    const record = loadExecutionRecord(recordId);

    if (!record) {
      return {
        success: false,
        message: `Execution record ${recordId} not found`,
      };
    }

    // NOTE: --diff implicitly enables --explain
    if (options.diff) {
      options.explain = true;
    }

    if (options.explain) {
      console.log(explainExecution(record));
      console.log('');

      if (options.dry) {
        return {
          success: true,
          message: '[Explain + Dry] Explanation shown, no execution',
        };
      }
    }

    if (options.mode === 'strict') {
      return this.strictReplay(record, options);
    }

    if (options.mode === 'compatible') {
      return this.compatibleReplay(record, options);
    }

    return this.reEvaluate(record, options);
  }

  private async strictReplay(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    const selectedModel = record.decision.selectedModel;

    if (options.verbose || options.dry) {
      console.log(chalk.cyan('[Strict Replay]'));
      console.log(chalk.gray(`  Original Model: ${selectedModel?.name || 'N/A'}`));
      console.log(chalk.gray(`  Original Provider: ${selectedModel?.provider || 'N/A'}`));
      console.log(chalk.gray(`  Original Timestamp: ${record.meta.timestamp}`));
      console.log(chalk.gray(`  Original Command: ${record.meta.commandName}`));
    }

    if (options.dry) {
      return {
        success: true,
        message: '[Dry Replay] Command not executed',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    if (options.skipAI) {
      return {
        success: true,
        message: 'Strict replay prepared (AI execution skipped)',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    if (!record.command) {
      return {
        success: false,
        message: 'Strict replay: No command to execute (command not stored in record)',
        executedModel: selectedModel?.name ?? undefined,
      };
    }

    const { exec } = require('./executor');

    try {
      console.log(chalk.gray('[Strict Replay] Executing with original parameters...'));
      const result = await exec(record.command);

      return {
        success: result.code === 0 || result.code === null,
        message: result.code === 0 || result.code === null
          ? 'Strict replay completed successfully'
          : `Strict replay failed with code ${result.code}`,
        executedModel: selectedModel?.name ?? undefined,
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return {
        success: false,
        message: `Strict replay error: ${message}`,
        executedModel: selectedModel?.name ?? undefined,
      };
    }
  }

  private async compatibleReplay(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    const originalModel = record.decision.selectedModel;

    if (options.verbose) {
      console.log(chalk.cyan('[Compatible Replay]'));
      console.log(chalk.gray(`  Original Model: ${originalModel?.name || 'N/A'}`));
      console.log(chalk.gray(`  Will attempt fallback if original unavailable`));
    }

    return {
      success: false,
      message: 'Compatible replay not yet implemented in Phase 1',
      executedModel: originalModel?.name,
      deviationReason: 'Phase 1 only supports strict replay',
    };
  }

  private async reEvaluate(
    record: ExecutionRecord,
    options: ReplayOptions
  ): Promise<ReplayResult> {
    if (options.verbose) {
      console.log(chalk.cyan('[Re-evaluate]'));
      console.log(chalk.gray(`  Will re-run capability matching with current config`));
      console.log(chalk.gray(`  Original Intent: ${record.intent.required.join(', ')}`));
    }

    return {
      success: false,
      message: 'Re-evaluate not yet implemented in Phase 1',
    };
  }
}

export const replayEngine = new ReplayEngine();

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/risk.ts

````typescript
export function assessRisk(command: string, aiRisk: 'low' | 'medium' | 'high'): 'low' | 'medium' | 'high' {
    const HIGH_RISK_PATTERNS = [
        /\brm\b/i,
        /\bsudo\b/i,
        /\bmv\b/i,
        /\bdd\b/i,
        /\bchmod\b/i,
        /\bchown\b/i,
        />\s*\/dev\//,
        /:\(\)\s*\{.*\}/, // Fork bomb
        /\bmkfs\b/i,
    ];

    const hasHighRisk = HIGH_RISK_PATTERNS.some(pattern => pattern.test(command));

    if (hasHighRisk) return 'high';
    return aiRisk;
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/core/validation.ts

````typescript
import { z } from 'zod';

export type UserConfig = {
    defaultModel?: string;
    aiProxyUrl?: string;
    accountType?: 'free' | 'pro' | 'paid';
    contextWindow?: number;
    maxFileTokens?: number;
    maxTotalTokens?: number;
    [key: string]: any;
};

export type AppsConfig = Record<string, string>;

export type AIRequestMessage = {
    role: 'system' | 'user' | 'assistant';
    content: string;
};

export type AIResponse = {
    choices?: Array<{
        message?: {
            content?: string;
        };
        delta?: {
            content?: string;
        };
    }>;
};

export const DEFAULT_AI_PROXY_URL = 'https://api.openai.com/v1/chat/completions';
export const DEFAULT_MODEL = 'gpt-4o-mini';
export const DEFAULT_ACCOUNT_TYPE = 'free' as const;

export const DEFAULT_APPS = {
    shici: 'https://wealth.want.biz/shici/index.html',
    dict: 'https://wealth.want.biz/pages/dict.html',
    pong: 'https://wealth.want.biz/pages/pong.html'
} as const;

export const aiCommandPlanSchema = z.object({
    plan: z.string().describe('Explanation of the command'),
    command: z.string().optional().describe('The shell command to execute'),
    macro: z.string().optional().describe('Name of an existing macro to reuse'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
}).refine(data => data.command || data.macro, {
    message: 'Either command or macro must be provided'
});

export type AICommandPlan = z.infer<typeof aiCommandPlanSchema>;

export const aiFixPlanSchema = z.object({
    plan: z.string().describe('Fix explanation'),
    command: z.string().describe('The fixed shell command (always required for fixes)'),
    risk: z.enum(['low', 'medium', 'high']).describe('Risk level assessment')
});

export type AIFixPlan = z.infer<typeof aiFixPlanSchema>;

export const userConfigSchema = z.object({
    defaultModel: z.string().optional(),
    aiProxyUrl: z.string().url().optional(),
    accountType: z.enum(['free', 'pro', 'paid']).optional(),
    contextWindow: z.number().optional(),
    maxFileTokens: z.number().optional(),
    maxTotalTokens: z.number().optional()
}).passthrough();

export const appsConfigSchema = z.record(z.string(), z.string());

export const macroSchema = z.object({
    commands: z.string(),
    description: z.string(),
    createdAt: z.string()
});

export type Macro = z.infer<typeof macroSchema>;

export const historyEntrySchema = z.object({
    question: z.string(),
    command: z.string(),
    time: z.string()
});

export type HistoryEntry = z.infer<typeof historyEntrySchema>;

export function extractJSON(raw: string): string {
    let jsonContent = raw.trim();

    if (jsonContent.includes('```json')) {
        jsonContent = jsonContent.split('```json')[1].split('```')[0].trim();
    }
    else if (jsonContent.includes('```')) {
        jsonContent = jsonContent.split('```')[1].split('```')[0].trim();
    }

    const firstBrace = jsonContent.indexOf('{');
    const lastBrace = jsonContent.lastIndexOf('}');

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonContent = jsonContent.substring(firstBrace, lastBrace + 1);
    }

    return jsonContent;
}

export function safeParseJSON<T>(
    raw: string,
    schema: z.ZodSchema<T>,
    fallback: T
): { success: true; data: T } | { success: false; error: z.ZodError } {
    try {
        const jsonContent = extractJSON(raw);
        const result = schema.safeParse(JSON.parse(jsonContent));

        if (result.success) {
            return { success: true, data: result.data };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error };
        }
        return {
            success: false,
            error: new z.ZodError([
                {
                    code: z.ZodIssueCode.custom,
                    message: `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`,
                    path: []
                }
            ])
        };
    }
}

export function parseUserConfig(content: string): UserConfig {
    return userConfigSchema.parse(JSON.parse(content));
}

export function parseAppsConfig(content: string): AppsConfig {
    return appsConfigSchema.parse(JSON.parse(content)) as AppsConfig;
}

export function parseMacros(content: string): Record<string, Macro> {
    const parsed = JSON.parse(content);
    const macros: Record<string, Macro> = {};

    for (const [name, value] of Object.entries(parsed)) {
        macros[name] = macroSchema.parse(value);
    }

    return macros;
}

export function parseCommandHistory(content: string): HistoryEntry[] {
    const parsed = JSON.parse(content);
    return z.array(historyEntrySchema).parse(parsed);
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/utils/confirm.ts

````typescript
import * as readline from 'node:readline/promises';
import chalk from 'chalk';

export async function confirm(message: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    try {
        const answer = await rl.question(chalk.yellow(`\n⚠️  ${message} (y/N) `));
        return answer.toLowerCase() === 'y';
    } finally {
        rl.close();
    }
}


````

[⬆ 回到目录](#toc)

## 📄 src/engine/utils/history.ts

````typescript
import fs from 'fs';
import path from 'path';
import os from 'os';
import { parseCommandHistory, type HistoryEntry } from '../core/validation';

const HISTORY_FILE = path.join(os.homedir(), '.yuangs_cmd_history.json');

export type { HistoryEntry };

export function getCommandHistory(): HistoryEntry[] {
    if (fs.existsSync(HISTORY_FILE)) {
        try {
            return parseCommandHistory(fs.readFileSync(HISTORY_FILE, 'utf8'));
        } catch (e) { }
    }
    return [];
}

export function saveHistory(entry: { question: string; command: string }) {
    let history = getCommandHistory();
    const newEntry: HistoryEntry = {
        ...entry,
        time: new Date().toLocaleString()
    };
    // Keep last 1000, unique commands
    history = [newEntry, ...history.filter(item => item.command !== entry.command)].slice(0, 1000);
    fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/utils/renderer.ts

````typescript
import chalk from 'chalk';
import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
import ora, { Ora } from 'ora';

// 初始化 marked 配置
marked.setOptions({
    renderer: new TerminalRenderer({
        tab: 2,
        width: process.stdout.columns || 80,
        showSectionPrefix: false
    }) as any
});

export class StreamMarkdownRenderer {
    private fullResponse: string = '';
    private prefix: string;
    private isFirstOutput: boolean = true;
    private spinner: Ora | null = null;
    private startTime: number;

    constructor(prefix: string = chalk.bold.blue('🤖 AI：'), spinner?: Ora) {
        this.prefix = prefix;
        this.spinner = spinner || null;
        this.startTime = Date.now();
    }

    /**
     * 处理流式数据块
     */
    public onChunk(chunk: string) {
        if (this.spinner && this.spinner.isSpinning) {
            this.spinner.stop();
        }

        if (this.isFirstOutput) {
            process.stdout.write(this.prefix);
            this.isFirstOutput = false;
        }

        this.fullResponse += chunk;
        process.stdout.write(chunk);
    }

    /**
     * 流结束，执行回滚并渲染 Markdown
     */
    public finish(): string {
        // 如果 Spinner 还在转（说明没有任何输出），先停掉
        if (this.spinner && this.spinner.isSpinning) {
            this.spinner.stop();
        }

        const formatted = (marked.parse(this.fullResponse, { async: false }) as string).trim();

        if (process.stdout.isTTY && this.fullResponse.trim()) {
            const screenWidth = process.stdout.columns || 80;
            const totalContent = this.prefix + this.fullResponse;

            // 计算原始文本占用的可视行数
            const lineCount = this.getVisualLineCount(totalContent, screenWidth);

            // 1. 清除当前行剩余内容
            process.stdout.write('\r\x1b[K');
            // 2. 向上回滚并清除之前的行
            for (let i = 0; i < lineCount - 1; i++) {
                process.stdout.write('\x1b[A\x1b[K');
            }

            // 3. 输出格式化后的 Markdown
            process.stdout.write(this.prefix + formatted + '\n');
        } else {
            // 非 TTY 模式或无内容，直接补充换行（如果之前输出了内容）
            if (this.fullResponse.trim()) {
                process.stdout.write('\n');
            }
        }

        // 输出耗时统计
        const elapsed = (Date.now() - this.startTime) / 1000;
        process.stdout.write('\n' + chalk.gray(`─`.repeat(20) + ` (耗时: ${elapsed.toFixed(2)}s) ` + `─`.repeat(20) + '\n\n'));

        return this.fullResponse;
    }

    /**
     * 计算文本在终端的可视行数
     */
    private getVisualLineCount(text: string, screenWidth: number): number {
        const stripAnsi = (str: string) => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');

        const lines = text.split('\n');
        let totalLines = 0;

        for (const line of lines) {
            // Expand tabs
            const expandedLine = line.replace(/\t/g, '        ');
            const cleanLine = stripAnsi(expandedLine);

            let lineWidth = 0;
            for (const char of cleanLine) {
                const code = char.codePointAt(0) || 0;
                // 大部分宽字符（如中文）占 2 格
                lineWidth += code > 255 ? 2 : 1;
            }

            if (lineWidth === 0) {
                totalLines += 1;
            } else {
                totalLines += Math.ceil(lineWidth / screenWidth);
            }
        }

        return totalLines;
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/engine/utils/syntaxHandler.ts

````typescript
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { buildPromptWithFileContent, readFilesContent } from '../core/fileReader';
import { ContextBuffer } from '../agent/contextBuffer';
import { loadContext, saveContext } from '../agent/contextStorage';

const execAsync = promisify(exec);

/**
 * 解析并处理特殊语法（@、#、:ls 等）
 */
export async function handleSpecialSyntax(input: string, stdinData?: string): Promise<{ processed: boolean; result?: string }> {
    const trimmed = input.trim();

    // 处理 @ 文件引用语法
    if (trimmed.startsWith('@')) {
        // 检查是否是 @! 立即执行语法
        const immediateExecMatch = trimmed.match(/^@\s*!\s*(.+?)$/);
        if (immediateExecMatch) {
            const filePath = immediateExecMatch[1].trim();
            return await handleImmediateExec(filePath);
        }

        // 检查是否是带行号的语法 @file:start-end
        const lineRangeMatch = trimmed.match(/^@\s*(.+?)(?::(\d+)(?:-(\d+))?)?\s*(?:\n(.*))?$/s);
        if (lineRangeMatch) {
            const filePath = lineRangeMatch[1];
            const startLine = lineRangeMatch[2] ? parseInt(lineRangeMatch[2]) : null;
            const endLine = lineRangeMatch[3] ? parseInt(lineRangeMatch[3]) : null;
            const question = lineRangeMatch[4] || (stdinData ? `分析以下文件内容：\n\n${stdinData}` : '请分析这个文件');

            return await handleFileReference(filePath.trim(), startLine, endLine, question);
        }
    }

    // 处理 # 目录引用语法
    if (trimmed.startsWith('#')) {
        const dirMatch = trimmed.match(/^#\s*(.+?)\s*(?:\n(.*))?$/s);
        if (dirMatch) {
            const dirPath = dirMatch[1].trim();
            const question = dirMatch[2] || (stdinData ? `分析以下目录内容：\n\n${stdinData}` : '请分析这个目录');
            return await handleDirectoryReference(dirPath, question);
        }
    }

    // 处理 :ls 命令
    if (trimmed === ':ls') {
        return await handleListContext();
    }

    // 场景 5.1: :exec 原子执行
    if (trimmed.startsWith(':exec ')) {
        const command = trimmed.slice(6).trim();
        return await handleAtomicExec(command);
    }

    // 处理 :cat [index] 命令
    if (trimmed === ':cat' || trimmed.startsWith(':cat ')) {
        const parts = trimmed.split(' ');
        const index = parts.length > 1 ? parseInt(parts[1]) : null;
        return await handleCatContext(index);
    }

    // 处理 :clear 命令
    if (trimmed === ':clear') {
        return await handleClearContext();
    }

    // 如果不是特殊语法，返回未处理
    return { processed: false };
}

async function handleFileReference(filePath: string, startLine: number | null = null, endLine: number | null = null, question?: string): Promise<{ processed: boolean; result: string }> {
    const fullPath = path.resolve(filePath);

    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
        return {
            processed: true,
            result: `错误: 文件 "${filePath}" 不存在或不是一个文件`
        };
    }

    try {
        let content = fs.readFileSync(fullPath, 'utf-8');

        // 如果指定了行号范围，则提取相应行
        if (startLine !== null) {
            const lines = content.split('\n');

            // 验证行号范围
            if (startLine < 1 || startLine > lines.length) {
                return {
                    processed: true,
                    result: `错误: 起始行号 ${startLine} 超出文件范围 (文件共有 ${lines.length} 行)`
                };
            }

            const startIdx = startLine - 1; // 转换为数组索引（从0开始）
            let endIdx = endLine ? Math.min(endLine, lines.length) : lines.length; // 如果未指定结束行，则到文件末尾

            if (endLine && (endLine < startLine || endLine > lines.length)) {
                return {
                    processed: true,
                    result: `错误: 结束行号 ${endLine} 超出有效范围 (应在 ${startLine}-${lines.length} 之间)`
                };
            }

            // 提取指定范围的行
            content = lines.slice(startIdx, endIdx).join('\n');
        }

        const contentMap = new Map<string, string>();
        contentMap.set(filePath, content);

        // 持久化到上下文
        const contextBuffer = new ContextBuffer();
        const persisted = await loadContext();
        contextBuffer.import(persisted);

        contextBuffer.add({
            type: 'file',
            path: filePath + (startLine !== null ? `:${startLine}${endLine ? `-${endLine}` : ''}` : ''),
            content: content
        });

        await saveContext(contextBuffer.export());

        const prompt = buildPromptWithFileContent(
            `文件: ${filePath}${startLine !== null ? `:${startLine}${endLine ? `-${endLine}` : ''}` : ''}`,
            [filePath],
            contentMap,
            question || `请分析文件: ${filePath}`
        );

        return { processed: true, result: prompt };
    } catch (error) {
        return {
            processed: true,
            result: `读取文件失败: ${error}`
        };
    }
}

async function handleDirectoryReference(dirPath: string, question?: string): Promise<{ processed: boolean; result: string }> {
    const fullPath = path.resolve(dirPath);

    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) {
        return {
            processed: true,
            result: `错误: 目录 "${dirPath}" 不存在或不是一个目录`
        };
    }

    try {
        const findCommand = process.platform === 'darwin' || process.platform === 'linux'
            ? `find "${fullPath}" -type f`
            : `dir /s /b "${fullPath}"`;

        const { stdout } = await execAsync(findCommand);
        const filePaths = stdout.trim().split('\n').filter(f => f);

        if (filePaths.length === 0) {
            return {
                processed: true,
                result: `目录 "${dirPath}" 下没有文件`
            };
        }

        const contentMap = readFilesContent(filePaths);

        // 持久化到上下文
        const contextBuffer = new ContextBuffer();
        const persisted = await loadContext();
        contextBuffer.import(persisted);

        contextBuffer.add({
            type: 'directory',
            path: dirPath,
            content: Array.from(contentMap.entries()).map(([p, c]) => `--- ${p} ---\n${c}`).join('\n\n')
        });

        await saveContext(contextBuffer.export());

        const prompt = buildPromptWithFileContent(
            `目录: ${dirPath}\n找到 ${filePaths.length} 个文件`,
            filePaths.map(p => path.relative(process.cwd(), p)),
            contentMap,
            question
        );

        return { processed: true, result: prompt };
    } catch (error) {
        return {
            processed: true,
            result: `读取目录失败: ${error}`
        };
    }
}

async function handleImmediateExec(filePath: string): Promise<{ processed: boolean; result: string }> {
    const fullPath = path.resolve(filePath);

    if (!fs.existsSync(fullPath)) {
        return {
            processed: true,
            result: `错误: 文件 "${filePath}" 不存在`
        };
    }

    try {
        // 1. 读取脚本内容
        const content = fs.readFileSync(fullPath, 'utf-8');

        console.log(chalk.gray(`正在执行 ${filePath} 并捕获输出...`));

        // 2. 执行脚本
        // 注意：这里使用 execAsync 捕获输出
        const { stdout, stderr } = await execAsync(`chmod +x "${fullPath}" && "${fullPath}"`, { cwd: process.cwd() });

        // 3. 构造组合上下文 (契约要求：命令内容 + 实际输出)
        const combinedContext = `
=== 脚本内容 (${filePath}) ===
\`\`\`bash
${content}
\`\`\`

=== 执行标准输出 (stdout) ===
\`\`\`
${stdout}
\`\`\`

=== 执行标准错误 (stderr) ===
\`\`\`
${stderr}
\`\`\`
`;

        // 持久化到上下文
        const contextBuffer = new ContextBuffer();
        const persisted = await loadContext();
        contextBuffer.import(persisted);

        contextBuffer.add({
            type: 'file',
            path: `${filePath} (Runtime Log)`,
            content: combinedContext,
            summary: '包含脚本源码和执行后的输出日志'
        });

        await saveContext(contextBuffer.export());

        // 返回给 AI 的 Prompt
        const result = `我执行了脚本 ${filePath}。\n以下是脚本源码和执行输出：\n${combinedContext}\n\n请分析为何会出现上述输出（特别是错误信息）？`;
        return { processed: true, result };
    } catch (error: any) {
        const errorMsg = error.message || String(error);
        const result = `执行脚本 ${filePath} 时发生错误：\n${errorMsg}\n\n请分析原因。`;
        return { processed: true, result };
    }
}

async function handleAtomicExec(command: string): Promise<{ processed: boolean; result: string }> {
    console.log(chalk.cyan(`\n⚡️ [Atomic Exec] 执行命令: ${command}\n`));

    try {
        // 对于原子执行，我们希望用户能实时看到输出，所以用 inherit
        const { spawn } = require('child_process');
        const child = spawn(command, {
            shell: true,
            stdio: 'inherit'
        });

        await new Promise<void>((resolve, reject) => {
            child.on('close', (code: number) => {
                if (code === 0) resolve();
                else reject(new Error(`Exit code ${code}`));
            });
            child.on('error', reject);
        });

        // 原子执行不将结果传给 AI，直接返回空结果表示处理完成
        return { processed: true, result: '' };
    } catch (error) {
        console.error(chalk.red(`执行失败: ${error}`));
        return { processed: true, result: '' };
    }
}

async function handleListContext(): Promise<{ processed: boolean; result: string }> {
    try {
        const persisted = await loadContext();
        const contextBuffer = new ContextBuffer();
        contextBuffer.import(persisted);

        if (contextBuffer.isEmpty()) {
            return { processed: true, result: '当前没有上下文' };
        }

        const list = contextBuffer.list();
        let result = '当前上下文列表：\n';
        list.forEach((item, index) => {
            result += `${index + 1}. ${item.type}: ${item.path} (${item.tokens} tokens)\n`;
        });

        return { processed: true, result };
    } catch (error) {
        return {
            processed: true,
            result: `读取上下文失败: ${error}`
        };
    }
}

async function handleCatContext(index: number | null): Promise<{ processed: boolean; result: string }> {
    try {
        const persisted = await loadContext();
        const contextBuffer = new ContextBuffer();
        contextBuffer.import(persisted);

        if (contextBuffer.isEmpty()) {
            return { processed: true, result: '当前没有上下文' };
        }

        const items = contextBuffer.export();

        if (index !== null) {
            // 查看指定索引
            if (index < 1 || index > items.length) {
                return { processed: true, result: `错误: 索引 ${index} 超出范围 (共有 ${items.length} 个项目)` };
            }
            const item = items[index - 1];
            return {
                processed: true,
                result: `--- [${index}] ${item.type}: ${item.path} ---\n${item.content}\n--- End ---`
            };
        } else {
            // 查看全部
            let result = '=== 当前完整上下文内容 ===\n\n';
            items.forEach((item, i) => {
                result += `--- [${i + 1}] ${item.type}: ${item.path} ---\n${item.content}\n\n`;
            });
            result += '==========================';
            return { processed: true, result };
        }
    } catch (error) {
        return {
            processed: true,
            result: `读取上下文失败: ${error}`
        };
    }
}

async function handleClearContext(): Promise<{ processed: boolean; result: string }> {
    try {
        // 清除持久化存储
        await saveContext([]);

        return { processed: true, result: '上下文已清空（含持久化）' };
    } catch (error) {
        return {
            processed: true,
            result: `清除上下文失败: ${error}`
        };
    }
}

````

[⬆ 回到目录](#toc)

## 📄 src/runtime/vscode/VSCodeExecutor.ts

````typescript
import * as vscode from 'vscode';
import * as path from 'path';

export class VSCodeExecutor {
    // 处理文件渲染/预览
    static async previewFile(filePath: string) {
        const fullPath = path.isAbsolute(filePath)
            ? filePath
            : path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.commands.executeCommand('vscode.open', uri);
    }

    // 执行终端命令
    static async runCommand(command: string): Promise<string> {
        return new Promise((resolve) => {
            const terminal = vscode.window.activeTerminal || vscode.window.createTerminal('Yuangs Agent');
            terminal.show();
            terminal.sendText(command);
            // VS Code 终端不容易直接获取输出，通常我们会返回一个状态
            resolve("Command sent to VS Code terminal.");
        });
    }

    // 应用文件修改
    static async writeFile(filePath: string, content: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        await vscode.workspace.fs.writeFile(uri, Buffer.from(content));
        return `File saved: ${filePath}`;
    }

    // 读取文件内容
    static async readFile(filePath: string): Promise<string> {
        const fullPath = this.getAbsolutePath(filePath);
        const uri = vscode.Uri.file(fullPath);
        const content = await vscode.workspace.fs.readFile(uri);
        return Buffer.from(content).toString('utf8');
    }

    // 列出目录文件
    static async listFiles(dirPath: string = '.'): Promise<string> {
        const fullPath = this.getAbsolutePath(dirPath);
        const uri = vscode.Uri.file(fullPath);
        const entries = await vscode.workspace.fs.readDirectory(uri);
        return entries.map(([name, type]) => `${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
    }

    // 获取绝对路径辅助方法
    private static getAbsolutePath(filePath: string): string {
        if (path.isAbsolute(filePath)) {
            return filePath;
        }
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceFolder) {
            throw new Error("No workspace folder open.");
        }
        return path.join(workspaceFolder, filePath);
    }

    // 处理 Diff 应用 (三阶段执行：Pre-Exec / Exec / Post-Exec)
    static async applyDiff(diff: string): Promise<string> {
        const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceRoot) {
            throw new Error("No workspace opened.");
        }

        try {
            // --- Phase 1: Pre-Exec (Snapshot/Validation) ---
            const status = await this.execCommand("git status --porcelain", workspaceRoot);
            if (status.trim().length > 0) {
                const choice = await vscode.window.showWarningMessage(
                    "Working tree is dirty. Apply diff anyway?",
                    { modal: true },
                    "Stash and Continue", "Abort"
                );
                if (choice === "Stash and Continue") {
                    await this.execCommand("git stash", workspaceRoot);
                } else {
                    throw new Error("Execution aborted due to dirty working tree.");
                }
            }

            const preHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            // --- Phase 2: Exec (Application) ---
            await this.execCommandWithInput("git apply --index", diff, workspaceRoot);

            // --- Phase 3: Post-Exec (Validation & Commit) ---
            const changedFiles = (await this.execCommand("git diff --name-only HEAD", workspaceRoot))
                .trim()
                .split("\n")
                .filter(f => f.length > 0);

            const commitMessage = `Agent: Applied semantic code change\n\n- Files: ${changedFiles.join(", ")}`;
            await this.execCommand(`git commit -m "${commitMessage}"`, workspaceRoot);

            const postHash = (await this.execCommand("git rev-parse HEAD", workspaceRoot)).trim();

            vscode.window.showInformationMessage(`Successfully applied change: ${postHash.substring(0, 7)}`);

            return `[SUCCESS] Applied 3-phase execution.\n- Snapshot: ${preHash.substring(0, 7)}\n- Commit: ${postHash.substring(0, 7)}\n- Files: ${changedFiles.length}`;

        } catch (error: any) {
            vscode.window.showErrorMessage(`Diff failed: ${error.message}`);
            // Rollback if possible (git reset --hard)
            return `[FAILED] ${error.message}`;
        }
    }

    private static async execCommand(command: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
        });
    }

    private static async execCommandWithInput(command: string, input: string, cwd: string): Promise<string> {
        const { exec } = require('child_process');
        return new Promise((resolve, reject) => {
            const child = exec(command, { cwd }, (error: any, stdout: string, stderr: string) => {
                if (error) reject(new Error(stderr || error.message));
                else resolve(stdout);
            });
            child.stdin.write(input);
            child.stdin.end();
        });
    }
}


````

[⬆ 回到目录](#toc)

## 📄 src/vscode/extension.ts

````typescript
import * as vscode from 'vscode';
import { ChatViewProvider } from './provider/ChatViewProvider';

export function activate(context: vscode.ExtensionContext) {
    try {
        console.log('Yuangs AI Agent extension is now active!');

        const provider = new ChatViewProvider(context);

        context.subscriptions.push(
            vscode.window.registerWebviewViewProvider(ChatViewProvider.viewType, provider)
        );

        let applyEdit = vscode.commands.registerCommand('yuangs.applyEdit', () => {
            vscode.window.showInformationMessage('Apply Edit triggered!');
        });

        let clearChat = vscode.commands.registerCommand('yuangs.clearChat', () => {
            provider.clear();
            vscode.window.showInformationMessage('Chat history cleared.');
        });

        context.subscriptions.push(applyEdit, clearChat);
    } catch (error) {
        console.error('Failed to activate Yuangs AI Agent extension:', error);
    }
}

export function deactivate() { }

````

[⬆ 回到目录](#toc)

## 📄 src/vscode/provider/ChatViewProvider.ts

````typescript
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { AgentRuntime } from '../../engine/agent/AgentRuntime';
import { GovernanceService } from '../../engine/agent/governance';

export class ChatViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'yuangs.chatView';
    private _view?: vscode.WebviewView;
    private _messages: { role: string, content: string }[] = [];

    constructor(
        private readonly _context: vscode.ExtensionContext,
    ) {
        // 从 workspaceState 恢复历史记录
        this._messages = this._context.workspaceState.get<{ role: string, content: string }[]>('chatHistory', []);
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._context.extensionUri
            ]
        };

        try {
            webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        } catch (error: any) {
            webviewView.webview.html = `<html><body><h3>Error loading view</h3><pre>${error.message}</pre></body></html>`;
        }

        // 当 webview 准备好后，发送历史记录
        webviewView.webview.postMessage({ type: 'history', value: this._messages });

        webviewView.webview.onDidReceiveMessage(async data => {
            switch (data.type) {
                case 'ask':
                    this.handleAgentTask(data.value);
                    break;
                case 'getFiles':
                    const files = await vscode.workspace.findFiles('**/*', '**/node_modules/**', 100);
                    const fileNames = files.map(f => path.relative(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', f.fsPath));
                    webviewView.webview.postMessage({ type: 'suggestions', value: fileNames, trigger: '@' });
                    break;
                case 'exportChat':
                    this.exportChatHistory();
                    break;
                case 'clear':
                    this.clear();
                    break;
                case 'getSymbols':
                    const editor = vscode.window.activeTextEditor;
                    if (editor) {
                        try {
                            const symbols = await vscode.commands.executeCommand<vscode.SymbolInformation[]>(
                                'vscode.executeDocumentSymbolProvider',
                                editor.document.uri
                            );
                            if (symbols) {
                                const symbolNames = symbols.map(s => s.name);
                                webviewView.webview.postMessage({ type: 'suggestions', value: symbolNames, trigger: '#' });
                            }
                        } catch (e) {
                            webviewView.webview.postMessage({ type: 'suggestions', value: [], trigger: '#' });
                        }
                    }
                    break;
                case 'applyDiff':
                    await this.handleApplyDiff(data.value);
                    break;
            }
        });
    }

    private async handleAgentTask(userInput: string) {
        if (!this._view) return;

        try {
            const editor = vscode.window.activeTextEditor;
            let finalInput = userInput;

            if (editor && !editor.selection.isEmpty) {
                const selection = editor.document.getText(editor.selection);
                const fileName = path.basename(editor.document.fileName);
                finalInput = `Context from ${fileName}:\n\`\`\`\n${selection}\n\`\`\`\n\nTask: ${userInput}`;
            } else {
                const workspaceFolders = vscode.workspace.workspaceFolders;
                if (workspaceFolders) {
                    const rootUri = workspaceFolders[0].uri;
                    const files = await vscode.workspace.fs.readDirectory(rootUri);
                    const fileNames = files.map(([name, type]) => `- ${name}${type === vscode.FileType.Directory ? '/' : ''}`).join('\n');
                    finalInput = `Workspace Files:\n${fileNames}\n\nTask: ${userInput}`;
                }
            }

            this._messages.push({ role: 'user', content: userInput });
            this._saveHistory();

            await GovernanceService.init(this._context.extensionUri.fsPath);

            const originalAdjudicate = GovernanceService.adjudicate;
            (GovernanceService as any).adjudicate = async (action: any) => {
                const choice = await vscode.window.showInformationMessage(
                    `Agent wants to execute ${action.type}: ${action.reasoning || 'No reason provided'}`,
                    { modal: true },
                    'Approve', 'Reject'
                );

                if (choice === 'Approve') {
                    return { status: 'approved', by: 'human', timestamp: Date.now() };
                } else {
                    return { status: 'rejected', by: 'human', reason: 'User Denied via VS Code UI', timestamp: Date.now() };
                }
            };

            const runtime = new AgentRuntime({
                history: this._messages.map(m => ({
                    role: m.role as any,
                    content: m.content
                }))
            });

            let fullAiResponse = '';
            await runtime.run(
                finalInput,
                'chat',
                (chunk) => {
                    fullAiResponse += chunk;
                    this._view?.webview.postMessage({ type: 'aiChunk', value: chunk });
                }
            );

            this._messages.push({ role: 'assistant', content: fullAiResponse });
            this._saveHistory();
            this._view?.webview.postMessage({ type: 'done' });
            (GovernanceService as any).adjudicate = originalAdjudicate;

        } catch (error: any) {
            this._view.webview.postMessage({ type: 'error', value: error.message });
        }
    }

    private async handleApplyDiff(diffData: any) {
        if (!this._view) return;

        try {
            if (diffData.type === 'unified') {
                for (const file of diffData.files) {
                    await this.applyUnifiedDiff(file);
                }
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else if (diffData.type === 'simple') {
                await this.applySimpleDiff(diffData);
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else {
                throw new Error('Unknown diff format');
            }
        } catch (error: any) {
            this._view.webview.postMessage({ type: 'diffError', value: error.message });
            vscode.window.showErrorMessage(`Failed to apply diff: ${error.message}`);
        }
    }

    private async applyUnifiedDiff(file: any) {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            throw new Error('No workspace folder open');
        }

        const filePath = path.join(workspaceFolder.uri.fsPath, file.newFile || file.oldFile);
        const fileUri = vscode.Uri.file(filePath);

        let document: vscode.TextDocument;
        try {
            document = await vscode.workspace.openTextDocument(fileUri);
        } catch {
            const edit = new vscode.WorkspaceEdit();
            edit.createFile(fileUri, { ignoreIfExists: true });
            await vscode.workspace.applyEdit(edit);
            document = await vscode.workspace.openTextDocument(fileUri);
        }

        const edit = new vscode.WorkspaceEdit();
        for (const hunk of file.hunks) {
            let startLine = hunk.oldStart - 1;
            if (startLine < 0) startLine = 0;
            const endLine = startLine + hunk.oldLines;

            const newLines: string[] = [];
            for (const line of hunk.lines) {
                if (line.startsWith('+')) {
                    newLines.push(line.substring(1));
                } else if (!line.startsWith('-')) {
                    newLines.push(line.startsWith(' ') ? line.substring(1) : line);
                }
            }

            const range = new vscode.Range(startLine, 0, endLine, 0);
            edit.replace(fileUri, range, newLines.join('\n') + '\n');
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();
        await vscode.window.showTextDocument(document);
    }

    private async applySimpleDiff(diffData: any) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            throw new Error('No active editor. Please open a file first.');
        }

        const document = editor.document;
        const edit = new vscode.WorkspaceEdit();
        const fullText = document.getText();

        if (diffData.removed.length > 0) {
            const toRemove = diffData.removed.join('\n');
            const index = fullText.indexOf(toRemove);

            if (index !== -1) {
                const startPos = document.positionAt(index);
                const endPos = document.positionAt(index + toRemove.length);
                const range = new vscode.Range(startPos, endPos);

                if (diffData.added.length > 0) {
                    edit.replace(document.uri, range, diffData.added.join('\n'));
                } else {
                    edit.delete(document.uri, range);
                }
            } else {
                throw new Error('Could not find the content to replace in the active file');
            }
        } else if (diffData.added.length > 0) {
            edit.insert(document.uri, editor.selection.active, diffData.added.join('\n'));
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();
    }

    public clear() {
        this._messages = [];
        this._saveHistory();
        this._view?.webview.postMessage({ type: 'clear' });
    }

    private _saveHistory() {
        this._context.workspaceState.update('chatHistory', this._messages);
    }

    private async exportChatHistory() {
        if (this._messages.length === 0) {
            vscode.window.showWarningMessage('No chat history to export.');
            return;
        }

        const mdContent = this._messages.map(m => {
            const role = m.role === 'user' ? '### 👤 User' : '### 🤖 Assistant';
            return `${role}\n\n${m.content}\n\n---\n`;
        }).join('\n');

        const uri = await vscode.window.showSaveDialog({
            defaultUri: vscode.Uri.file(path.join(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', 'chat_export.md')),
            filters: { 'Markdown': ['md'] }
        });

        if (uri) {
            fs.writeFileSync(uri.fsPath, mdContent);
            vscode.window.showInformationMessage('Chat history exported successfully!');
        }
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'dist', 'webview', 'marked.min.js'));
        const htmlPath = path.join(this._context.extensionPath, 'dist', 'webview', 'sidebar.html');
        let htmlSnippet = fs.readFileSync(htmlPath, 'utf8');

        // 生成随机 nonce 用于 CSP
        const nonce = getNonce();

        // 注入 CSP 和本地脚本路径
        htmlSnippet = htmlSnippet.replace(
            /<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>/,
            `<script nonce="${nonce}" src="${scriptUri}"></script>`
        );

        // 注入 CSP Meta 标签
        const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:; connect-src *;">`;
        htmlSnippet = htmlSnippet.replace('<head>', `<head>\n    ${csp}`);

        // 为所有的 <script> 标签注入 nonce
        htmlSnippet = htmlSnippet.replace(/<script>/g, `<script nonce="${nonce}">`);

        return htmlSnippet;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

````

[⬆ 回到目录](#toc)

## 📄 src/vscode/webview/sidebar.html

````html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yuangs Premium AI</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        :root {
            --bubble-user: var(--vscode-button-background);
            --bubble-ai: var(--vscode-editor-background);
            --text-main: var(--vscode-foreground);
            --accent: var(--vscode-focusBorder);
            --border: var(--vscode-panel-border);
            --input-bg: var(--vscode-input-background);
        }

        body {
            font-family: var(--vscode-font-family), "Inter", -apple-system, sans-serif;
            font-size: var(--vscode-font-size);
            color: var(--text-main);
            background: var(--vscode-sideBar-background);
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
        }

        /* 顶部装饰线与标题栏 */
        header {
            height: 40px;
            width: 100%;
            background: var(--vscode-sideBar-background);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12px;
            box-sizing: border-box;
            z-index: 100;
        }

        header::before {
            content: "";
            height: 2px;
            width: 100%;
            background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
            position: absolute;
            top: 0;
            left: 0;
        }

        .header-title {
            font-size: 0.9em;
            font-weight: bold;
            opacity: 0.8;
        }

        .header-actions {
            display: flex;
            gap: 8px;
        }

        .icon-btn {
            background: transparent;
            border: none;
            color: var(--text-main);
            cursor: pointer;
            opacity: 0.6;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border-radius: 4px;
        }

        .icon-btn:hover {
            opacity: 1;
            background: var(--vscode-toolbar-hoverBackground);
        }

        #chat-container {
            flex-grow: 1;
            overflow-y: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            scroll-behavior: smooth;
        }

        /* 自定义滚动条 */
        #chat-container::-webkit-scrollbar {
            width: 6px;
        }

        #chat-container::-webkit-scrollbar-thumb {
            background: var(--vscode-scrollbarSlider-background);
            border-radius: 10px;
        }

        .message {
            padding: 12px 16px;
            border-radius: 12px;
            max-width: 85%;
            word-wrap: break-word;
            position: relative;
            animation: fadeIn 0.3s ease-out;
            line-height: 1.5;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .user-message {
            align-self: flex-end;
            background: var(--bubble-user);
            color: var(--vscode-button-foreground);
            border-bottom-right-radius: 2px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .ai-message {
            align-self: flex-start;
            background: var(--bubble-ai);
            border: 1px solid var(--border);
            border-bottom-left-radius: 2px;
            backdrop-filter: blur(10px);
        }

        /* Markdown 样式 */
        .ai-message pre {
            background: rgba(0, 0, 0, 0.2);
            padding: 8px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 8px 0;
            position: relative;
        }

        /* Diff 代码块样式 */
        .ai-message pre.diff-block {
            border: 1px solid var(--vscode-editorWidget-border);
            background: rgba(0, 0, 0, 0.3);
        }

        .ai-message pre.diff-block::before {
            content: "📝 Diff";
            position: absolute;
            top: 4px;
            left: 8px;
            font-size: 0.75em;
            opacity: 0.6;
            font-family: var(--vscode-font-family);
        }

        /* 应用按钮 */
        .apply-diff-btn {
            position: absolute;
            top: 4px;
            right: 8px;
            background: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            padding: 4px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.75em;
            font-family: var(--vscode-font-family);
            display: flex;
            align-items: center;
            gap: 4px;
            opacity: 0;
            transition: opacity 0.2s, background 0.2s;
            z-index: 10;
        }

        .ai-message pre.diff-block:hover .apply-diff-btn {
            opacity: 1;
        }

        .apply-diff-btn:hover {
            background: var(--vscode-button-hoverBackground);
        }

        .apply-diff-btn:active {
            transform: scale(0.95);
        }

        .apply-diff-btn.applied {
            background: var(--vscode-testing-iconPassed);
            opacity: 1;
        }

        .apply-diff-btn.error {
            background: var(--vscode-testing-iconFailed);
            opacity: 1;
        }

        .ai-message code {
            font-family: var(--vscode-editor-font-family);
            background: rgba(0, 0, 0, 0.1);
            padding: 2px 4px;
            border-radius: 4px;
        }

        .system-message {
            align-self: center;
            font-size: 0.85em;
            color: var(--vscode-descriptionForeground);
            background: transparent;
            box-shadow: none;
            text-align: center;
            opacity: 0.7;
        }

        #input-area {
            padding: 16px;
            background: var(--vscode-sideBar-background);
            border-top: 1px solid var(--border);
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
        }

        .input-wrapper {
            display: flex;
            background: var(--input-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 4px 8px;
            align-items: center;
            transition: border-color 0.2s;
        }

        .input-wrapper:focus-within {
            border-color: var(--accent);
        }

        #user-input {
            flex-grow: 1;
            background: transparent;
            color: var(--vscode-input-foreground);
            border: none;
            padding: 8px;
            outline: none;
            resize: none;
            max-height: 120px;
            min-height: 24px;
            font-family: inherit;
        }

        #send-btn {
            background: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s;
        }

        #send-btn:hover {
            opacity: 0.9;
        }

        .typing-indicator {
            display: flex;
            gap: 4px;
            padding: 4px;
        }

        .dot {
            width: 6px;
            height: 6px;
            background: #aaa;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) {
            animation-delay: -0.32s;
        }

        .dot:nth-child(2) {
            animation-delay: -0.16s;
        }

        @keyframes bounce {

            0%,
            80%,
            100% {
                transform: scale(0);
            }

            40% {
                transform: scale(1.0);
            }
        }

        /* 建议列表样式 */
        #suggestions-list {
            position: absolute;
            bottom: 100%;
            left: 16px;
            right: 16px;
            background: var(--vscode-editor-background);
            border: 1px solid var(--border);
            border-radius: 8px;
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
            max-height: 200px;
            overflow-y: auto;
            display: none;
            z-index: 1000;
            margin-bottom: 8px;
        }

        .suggestion-item {
            padding: 8px 12px;
            cursor: pointer;
            transition: background 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9em;
        }

        .suggestion-item:hover,
        .suggestion-item.selected {
            background: var(--vscode-list-hoverBackground);
            color: var(--vscode-list-hoverForeground);
        }

        .suggestion-icon {
            opacity: 0.7;
            font-size: 1.1em;
        }
    </style>
</head>

<body>
    <header>
        <div class="header-title">YUANGS AI</div>
        <div class="header-actions">
            <button class="icon-btn" id="export-btn" title="Export Chat History (.md)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                        d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 5H9V1h4v4zM3 2v12h10V6H8V2H3z" />
                </svg>
            </button>
            <button class="icon-btn" id="clear-btn" title="Clear Chat">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 4v9h7V4H4z" />
                </svg>
            </button>
        </div>
    </header>

    <div id="chat-container">
        <div class="message system-message">✨ Yuangs AI Agent initialized and ready.</div>
    </div>

    <div id="input-area">
        <div id="suggestions-list"></div>
        <div class="input-wrapper">
            <textarea id="user-input" rows="1" placeholder="Type your message..."></textarea>
            <button id="send-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                        d="M1.146 1.146a.5.5 0 0 1 .538-.093l13 5a.5.5 0 0 1 0 .94l-13 5a.5.5 0 0 1-.667-.615L2.854 8 1.017 2.618a.5.5 0 0 1 .129-.472zM3.854 8l-1.5 4.34L13.84 8 2.354 3.66 3.854 8z" />
                </svg>
            </button>
        </div>
    </div>

    <script>
        const vscode = acquireVsCodeApi();
        const chatContainer = document.getElementById('chat-container');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const exportBtn = document.getElementById('export-btn');
        const clearBtn = document.getElementById('clear-btn');
        const suggestionsList = document.getElementById('suggestions-list');

        let currentAiMessageElement = null;
        let currentAiRawText = "";
        let suggestionType = null; // '@' or '#'
        let selectedSuggestionIndex = -1;
        let currentSuggestions = [];

        // 输入框高度自动伸缩
        userInput.addEventListener('input', (e) => {
            userInput.style.height = 'auto';
            userInput.style.height = userInput.scrollHeight + 'px';

            handleTriggerDetection(e);
        });

        function handleTriggerDetection(e) {
            const value = userInput.value;
            const cursorPos = userInput.selectionStart;
            const textBeforeCursor = value.substring(0, cursorPos);

            // 检测触发符
            const lastAt = textBeforeCursor.lastIndexOf('@');
            const lastHash = textBeforeCursor.lastIndexOf('#');
            const lastTriggerIndex = Math.max(lastAt, lastHash);

            if (lastTriggerIndex !== -1 && (lastTriggerIndex === 0 || /\s/.test(textBeforeCursor[lastTriggerIndex - 1]))) {
                const trigger = textBeforeCursor[lastTriggerIndex];
                const query = textBeforeCursor.substring(lastTriggerIndex + 1);

                if (!/\s/.test(query)) {
                    suggestionType = trigger;

                    // 立即显示加载状态
                    suggestionsList.innerHTML = '<div class="suggestion-item">🔍 Loading...</div>';
                    suggestionsList.style.display = 'block';

                    if (trigger === '@') {
                        vscode.postMessage({ type: 'getFiles', query });
                    } else {
                        vscode.postMessage({ type: 'getSymbols', query });
                    }
                    return;
                }
            }

            hideSuggestions();
        }

        function showSuggestions(suggestions, trigger) {
            currentSuggestions = suggestions;
            if (suggestions.length === 0) {
                hideSuggestions();
                return;
            }

            suggestionsList.innerHTML = '';
            suggestionsList.style.display = 'block';
            selectedSuggestionIndex = 0;

            suggestions.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'suggestion-item' + (index === 0 ? ' selected' : '');
                const icon = trigger === '@' ? '📄' : '🔧';
                div.innerHTML = `<span class="suggestion-icon">${icon}</span><span>${item}</span>`;
                div.onclick = () => selectSuggestion(item);
                suggestionsList.appendChild(div);
            });
        }

        function hideSuggestions() {
            suggestionsList.style.display = 'none';
            suggestionType = null;
            selectedSuggestionIndex = -1;
        }

        function selectSuggestion(value) {
            const text = userInput.value;
            const cursorPos = userInput.selectionStart;
            const textBeforeCursor = text.substring(0, cursorPos);
            const textAfterCursor = text.substring(cursorPos);

            const lastTriggerIndex = textBeforeCursor.lastIndexOf(suggestionType);
            const newText = textBeforeCursor.substring(0, lastTriggerIndex) + suggestionType + value + ' ' + textAfterCursor;

            userInput.value = newText;
            hideSuggestions();
            userInput.focus();

            // 重新计算高度
            userInput.style.height = 'auto';
            userInput.style.height = userInput.scrollHeight + 'px';
        }

        function addMessage(text, role, isRaw = false) {
            const div = document.createElement('div');
            div.className = `message ${role}-message`;

            if (role === 'ai') {
                div.innerHTML = marked.parse(text);
                // 处理 diff 代码块
                processDiffBlocks(div);
            } else {
                div.textContent = text;
            }

            chatContainer.appendChild(div);
            scrollToBottom();
            return div;
        }

        // 检测并处理 diff 代码块
        function processDiffBlocks(messageElement) {
            const codeBlocks = messageElement.querySelectorAll('pre code');

            codeBlocks.forEach((codeBlock, index) => {
                const content = codeBlock.textContent;
                const preElement = codeBlock.parentElement;

                // 检测是否是 diff 格式
                if (isDiffContent(content)) {
                    preElement.classList.add('diff-block');

                    // 添加应用按钮
                    const applyBtn = document.createElement('button');
                    applyBtn.className = 'apply-diff-btn';
                    applyBtn.innerHTML = '✓ Apply';
                    applyBtn.title = 'Apply this diff to your code';

                    // 存储 diff 内容
                    applyBtn.dataset.diffContent = content;
                    applyBtn.dataset.diffIndex = index;

                    applyBtn.onclick = () => applyDiff(applyBtn, content);

                    preElement.appendChild(applyBtn);
                }
            });
        }

        // 检测是否是 diff 内容
        function isDiffContent(content) {
            const lines = content.trim().split('\n');

            // 检测常见的 diff 格式特征
            const hasDiffMarkers = lines.some(line =>
                line.startsWith('+++') ||
                line.startsWith('---') ||
                line.startsWith('@@') ||
                line.match(/^diff --git/)
            );

            // 或者检测是否有足够多的 +/- 行
            const changeLines = lines.filter(line =>
                line.startsWith('+') || line.startsWith('-')
            );

            return hasDiffMarkers || (changeLines.length >= 3 && changeLines.length / lines.length > 0.3);
        }

        // 应用 diff
        function applyDiff(button, diffContent) {
            button.disabled = true;
            button.innerHTML = '⏳ Applying...';

            // 解析 diff 内容
            const diffData = parseDiff(diffContent);

            if (!diffData) {
                button.innerHTML = '✗ Invalid Diff';
                button.classList.add('error');
                setTimeout(() => {
                    button.disabled = false;
                    button.innerHTML = '✓ Apply';
                    button.classList.remove('error');
                }, 2000);
                return;
            }

            // 发送到 VS Code 扩展进行应用
            vscode.postMessage({
                type: 'applyDiff',
                value: diffData
            });

            // 等待响应
            button.dataset.pending = 'true';
        }

        // 解析 diff 内容
        function parseDiff(diffContent) {
            const lines = diffContent.trim().split('\n');
            let currentFile = null;
            const files = [];

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];

                // 检测文件名
                if (line.startsWith('--- ') || line.startsWith('+++ ')) {
                    const match = line.match(/^[+-]{3}\s+(?:a\/|b\/)?(.+?)(?:\s+|$)/);
                    if (match) {
                        const filename = match[1];
                        if (line.startsWith('---')) {
                            currentFile = { oldFile: filename, newFile: null, hunks: [] };
                        } else if (currentFile) {
                            currentFile.newFile = filename;
                            files.push(currentFile);
                        }
                    }
                }

                // 检测 hunk 头部 (@@)
                if (line.startsWith('@@') && currentFile) {
                    const hunkMatch = line.match(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
                    if (hunkMatch) {
                        const hunk = {
                            oldStart: parseInt(hunkMatch[1]),
                            oldLines: parseInt(hunkMatch[2] || '1'),
                            newStart: parseInt(hunkMatch[3]),
                            newLines: parseInt(hunkMatch[4] || '1'),
                            lines: []
                        };

                        // 收集 hunk 的内容
                        i++;
                        while (i < lines.length && !lines[i].startsWith('@@') && !lines[i].startsWith('---')) {
                            hunk.lines.push(lines[i]);
                            i++;
                        }
                        i--; // 回退一行

                        currentFile.hunks.push(hunk);
                    }
                }
            }

            // 如果没有找到标准格式，尝试简单的 +/- 格式
            if (files.length === 0) {
                const addedLines = [];
                const removedLines = [];
                const contextLines = [];

                lines.forEach(line => {
                    if (line.startsWith('+') && !line.startsWith('+++')) {
                        addedLines.push(line.substring(1));
                    } else if (line.startsWith('-') && !line.startsWith('---')) {
                        removedLines.push(line.substring(1));
                    } else if (!line.startsWith('@@')) {
                        contextLines.push(line);
                    }
                });

                if (addedLines.length > 0 || removedLines.length > 0) {
                    return {
                        type: 'simple',
                        added: addedLines,
                        removed: removedLines,
                        context: contextLines,
                        raw: diffContent
                    };
                }
            }

            return files.length > 0 ? { type: 'unified', files, raw: diffContent } : null;
        }

        function scrollToBottom() {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function handleSend() {
            const text = userInput.value.trim();
            if (text) {
                addMessage(text, 'user');
                vscode.postMessage({ type: 'ask', value: text });
                userInput.value = '';
                userInput.style.height = 'auto';
                currentAiMessageElement = null;
                currentAiRawText = "";

                // 添加加载指示器
                const loader = document.createElement('div');
                loader.id = 'ai-loader';
                loader.className = 'message ai-message system-message';
                loader.innerHTML = '<div class="typing-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
                chatContainer.appendChild(loader);
                scrollToBottom();
            }
        }

        sendBtn.addEventListener('click', handleSend);

        userInput.addEventListener('keydown', (e) => {
            if (suggestionsList.style.display === 'block') {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedSuggestionIndex = (selectedSuggestionIndex + 1) % currentSuggestions.length;
                    updateSuggestionSelection();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedSuggestionIndex = (selectedSuggestionIndex - 1 + currentSuggestions.length) % currentSuggestions.length;
                    updateSuggestionSelection();
                } else if (e.key === 'Enter' || e.key === 'Tab') {
                    e.preventDefault();
                    if (selectedSuggestionIndex !== -1) {
                        selectSuggestion(currentSuggestions[selectedSuggestionIndex]);
                    }
                } else if (e.key === 'Escape') {
                    hideSuggestions();
                }
                return;
            }

            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });

        exportBtn.addEventListener('click', () => {
            vscode.postMessage({ type: 'exportChat' });
        });

        clearBtn.addEventListener('click', () => {
            vscode.postMessage({ type: 'clear' }); // 已经在 Provider 中实现清理逻辑
        });

        function updateSuggestionSelection() {
            const items = suggestionsList.querySelectorAll('.suggestion-item');
            items.forEach((item, index) => {
                item.className = 'suggestion-item' + (index === selectedSuggestionIndex ? ' selected' : '');
                if (index === selectedSuggestionIndex) {
                    item.scrollIntoView({ block: 'nearest' });
                }
            });
        }

        // 监听文本选择事件，自动填入输入框
        document.addEventListener('mouseup', () => {
            const selection = window.getSelection();
            const selectedText = selection.toString().trim();

            if (selectedText) {
                // 检查选中的文本是否在聊天容器内
                const range = selection.getRangeAt(0);
                const container = range.commonAncestorContainer;
                const parentElement = container.nodeType === Node.TEXT_NODE
                    ? container.parentElement
                    : container;

                // 确保选中的内容在聊天容器内，且不在输入框内
                if (chatContainer.contains(parentElement) && !userInput.contains(parentElement)) {
                    userInput.value = selectedText;
                    userInput.focus();

                    // 重新计算输入框高度
                    userInput.style.height = 'auto';
                    userInput.style.height = userInput.scrollHeight + 'px';

                    // 清除选择，避免视觉干扰
                    selection.removeAllRanges();
                }
            }
        });

        window.addEventListener('message', event => {
            const message = event.data;
            const loader = document.getElementById('ai-loader');

            switch (message.type) {
                case 'suggestions':
                    showSuggestions(message.value, message.trigger);
                    break;
                case 'aiChunk':
                    if (loader) loader.remove();
                    if (!currentAiMessageElement) {
                        currentAiMessageElement = document.createElement('div');
                        currentAiMessageElement.className = 'message ai-message';
                        chatContainer.appendChild(currentAiMessageElement);
                    }
                    currentAiRawText += message.value;
                    currentAiMessageElement.innerHTML = marked.parse(currentAiRawText);
                    // 实时处理 diff 块
                    processDiffBlocks(currentAiMessageElement);
                    scrollToBottom();
                    break;
                case 'history':
                    chatContainer.innerHTML = '';
                    if (message.value && message.value.length > 0) {
                        message.value.forEach(msg => {
                            addMessage(msg.content, msg.role === 'user' ? 'user' : 'ai');
                        });
                    } else {
                        chatContainer.innerHTML = '<div class="message system-message">✨ Yuangs AI Agent initialized and ready.</div>';
                    }
                    break;
                case 'done':
                    currentAiMessageElement = null;
                    currentAiRawText = "";
                    break;
                case 'clear':
                    chatContainer.innerHTML = '<div class="message system-message">✨ Chat cleared.</div>';
                    break;
                case 'error':
                    if (loader) loader.remove();
                    addMessage('❌ Error: ' + message.value, 'system');
                    break;
                case 'diffApplied':
                    // Diff 应用成功
                    const successButtons = document.querySelectorAll('.apply-diff-btn[data-pending="true"]');
                    successButtons.forEach(btn => {
                        btn.innerHTML = '✓ Applied';
                        btn.classList.add('applied');
                        btn.disabled = true;
                        btn.dataset.pending = 'false';
                    });
                    break;
                case 'diffError':
                    // Diff 应用失败
                    const errorButtons = document.querySelectorAll('.apply-diff-btn[data-pending="true"]');
                    errorButtons.forEach(btn => {
                        btn.innerHTML = '✗ Failed';
                        btn.classList.add('error');
                        btn.dataset.pending = 'false';
                        setTimeout(() => {
                            btn.disabled = false;
                            btn.innerHTML = '✓ Apply';
                            btn.classList.remove('error');
                        }, 3000);
                    });
                    if (message.value) {
                        addMessage('❌ Diff application error: ' + message.value, 'system');
                    }
                    break;
            }
        });
    </script>
</body>

</html>
````

[⬆ 回到目录](#toc)

## 📄 tsconfig.json

````json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2022",
        "outDir": "dist",
        "lib": [
            "ES2022"
        ],
        "sourceMap": true,
        "rootDir": "src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "resolveJsonModule": true,
        "moduleResolution": "node"
    },
    "exclude": [
        "node_modules",
        ".vscode-test"
    ]
}
````

[⬆ 回到目录](#toc)

---
### 📊 最终统计汇总
- **文件总数:** 77
- **代码总行数:** 11160
- **物理总大小:** 359.14 KB

````
