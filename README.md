# Yuangs AI Agent (VS Code Edition) 🤖

Yuangs AI Agent 是一款深度集成在 VS Code 中的新一代 AI 辅助开发工具。不同于普通的 Chat 插件，它具备完整的 **“治理-执行” (Think-Govern-Execute)** 闭环能力，能够感知项目上下文，并在安全沙箱的监管下执行真实的任务。

---

## ✨ 核心特性

- **🧠 思考 (Think)**: 基于先进的 LLM，自动拆解复杂任务。
- **🛡️ 治理 (Govern)**: 
    - **WASM 物理沙箱**: 所有的命令执行前都会通过编译成 WebAssembly 的规则引擎进行物理隔离验证。
    - **策略热加载**: 通过项目根目录的 `policy.yaml` 自定义 Agent 的权限边界。
    - **人类介入**: 关键动作（如删除文件、执行危险脚本）会自动触发 VS Code 原生弹窗请求审批。
- **⚙️ 执行 (Execute)**: 
    - **自动改码**: 通过 VS Code API 直接应用代码变更。
    - **终端驱动**: 可以在集成终端中运行编译、测试等指令。
    - **文件发现**: 能够主动浏览、读取项目中的任何文件。
- **💎 极致体验 (Premium UI)**: 
    - 采用玻璃拟态 (Glassmorphism) 设计的侧边栏。
    - 完整的 Markdown 渲染支持。
    - 交互式加载指示器与自适应输入框。
    - **智能文本选择**: 在聊天记录中选中文本后自动填入输入框，一键发送。

---

## 🚀 快速开始

### 1. 安装与设置
1. 克隆本仓库并进入目录。
2. 安装依赖:
   ```bash
   npm install
   ```
3. 配置 AI PROXY URL (如果需要):
   创建 `~/.yuangs.json` 并配置路径或在插件设置中调整。

### 2. 治理策略设置
在项目根目录创建或编辑 `policy.yaml`：
```yaml
rules:
  - id: "no-rm-rf"
    pattern: "rm -rf .*"
    effect: "deny"
    reason: "禁止在 Agent 中执行递归强制删除命令"
```

### 3. 开始对话
点击活动栏上的机器人图标，打开 **Yuangs** 侧边栏。直接提问即可，例如：
- *"帮我分析这个项目的目录结构"* (自动触发 `list_files`)
- *"帮我把 README 改成英文版"* (自动触发 `read_file` -> `write_file`)

### 4. 💡 使用技巧

#### 智能文本选择
在聊天记录中选中任意文本，松开鼠标后会自动填入输入框，方便：
- 📝 重新发送之前的问题
- 💬 引用 AI 的回答继续提问
- 📋 快速复制代码片段进行修改

#### 文件与符号引用
在输入框中输入：
- `@` - 触发文件建议，快速引用项目文件
- `#` - 触发符号建议，快速引用当前文件的函数/类

#### 聊天管理
- 🗑️ **清除聊天**: 点击顶部清除按钮
- 💾 **导出聊天**: 点击导出按钮，保存为 Markdown 文件
- 📜 **历史记录**: 聊天记录会自动保存，重启 VS Code 后恢复

---

## 🛠 开发指南

### 编译扩展
```bash
# 🚀 推荐方式：一键编译（自动查找 npm）
./c

# 或使用详细版本（显示完整编译过程）
./compile.sh

# 传统方式：
# 模式一：完整构建（含 WASM 和 TS）
npm run build

# 模式二：仅编译 TypeScript
npm run compile

# 模式三：仅编译 AssemblyScript (WASM 沙箱核心)
npm run asbuild
```

> 💡 **提示**: `./c` 脚本会自动查找系统中的 Node.js 和 npm，支持 Homebrew、NVM、Volta、FNM 等多种安装方式，无需配置环境变量。

### 调试
1. 在 VS Code 中打开本项目。
2. 按 `F5` 启动 **Extension Development Host**。
3. 在新窗口的侧边栏中即可体验 Yuangs。

---

## 📁 项目结构

- `src/vscode/`: 插件壳逻辑与 Provider 实现。
- `src/engine/`: AI Agent 核心逻辑（与运行平台无关）。
- `src/runtime/`: 针对 VS Code 的运行环境适配器。
- `policy.yaml`: 默认的治理规则配置文件。

---

## ⚖️ 许可证
MIT License.
