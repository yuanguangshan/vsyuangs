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
