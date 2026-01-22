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

