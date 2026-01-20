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

