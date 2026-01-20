# Yuangs AI Agent - 快速参考

## 🚀 快速开始

### 安装
```bash
# 克隆仓库
git clone <repository-url>
cd yuangs-vscode

# 安装依赖
npm install

# 一键编译
./c
```

### 启动调试
按 `F5` 启动扩展开发主机，在新窗口中测试扩展。

---

## ✨ 核心功能

### 1. 智能对话
- 在侧边栏中直接与 AI 对话
- 自动感知项目上下文
- 支持 Markdown 格式的回答

### 2. 智能文本选择 ⭐ NEW
**使用方法**：
1. 在聊天记录中用鼠标选中任意文本
2. 松开鼠标，文本自动填入输入框
3. 按 Enter 一键发送

**适用场景**：
- 📝 重新发送之前的问题
- 💬 引用 AI 的回答继续提问
- 📋 快速复制代码片段进行修改
- 🔄 迭代优化提示词

### 3. 智能 Diff 应用 ⭐ NEW
**使用方法**：
1. 鼠标悬停在 AI 生成的 Diff 代码块上
2. 点击右上角的 `✓ Apply` 按钮
3. 变更自动应用到文件

**支持格式**：
- 标准 Unified Diff (`---`, `+++`, `@@`)
- 简单 Diff (`+`, `-`)

### 4. 文件与符号引用
在输入框中输入特殊字符触发智能建议：

| 触发符 | 功能 | 示例 |
|--------|------|------|
| `@` | 文件建议 | `@README.md` |
| `#` | 符号建议 | `#handleSend` |

**键盘操作**：
- `↑` `↓` - 选择建议
- `Enter` / `Tab` - 确认选择
- `Esc` - 关闭建议列表

### 4. 聊天管理
| 功能 | 操作 |
|------|------|
| 清除聊天 | 点击顶部 🗑️ 按钮 |
| 导出聊天 | 点击顶部 📄 按钮 |
| 历史记录 | 自动保存，重启恢复 |

---

## 🛠 开发命令

### 编译
```bash
# 推荐：一键编译（自动查找 npm）
./c

# 详细版本（显示完整过程）
./compile.sh

# 传统方式
npm run compile      # 仅编译 TypeScript
npm run asbuild      # 仅编译 WASM
npm run build        # 完整构建
```

### 调试
```bash
# 启动扩展开发主机
按 F5

# 监听模式（自动重新编译）
npm run watch
```

---

## 🎨 界面特性

### Premium UI 设计
- ✨ 玻璃拟态 (Glassmorphism) 视觉效果
- 🌈 动态渐变装饰线
- 💫 平滑的消息淡入动画
- ⌨️ 自适应多行输入框
- 📱 响应式布局

### Markdown 支持
完整支持 Markdown 渲染：
- 代码块（带语法高亮）
- 列表（有序/无序）
- 标题、粗体、斜体
- 链接、引用等

---

## 🛡️ 治理与安全

### WASM 沙箱
所有命令执行前都会通过 WebAssembly 沙箱验证。

### 策略配置
在项目根目录创建 `policy.yaml`：
```yaml
rules:
  - id: "no-rm-rf"
    pattern: "rm -rf .*"
    effect: "deny"
    reason: "禁止递归删除"
```

### 人类审批
危险操作会自动触发 VS Code 弹窗请求审批。

---

## 📁 项目结构

```
yuangs-vscode/
├── src/
│   ├── vscode/              # VS Code 插件逻辑
│   │   ├── extension.ts     # 插件入口
│   │   ├── provider/        # Webview Provider
│   │   └── webview/         # 前端界面
│   │       └── sidebar.html # 聊天界面
│   ├── engine/              # AI Agent 核心
│   │   ├── agent/           # Agent 运行时
│   │   └── ai/              # AI 客户端
│   └── runtime/             # 运行环境适配
├── compile.sh               # 一键编译脚本
├── c                        # 快捷编译脚本
├── package.json             # 项目配置
├── tsconfig.json            # TypeScript 配置
└── policy.yaml              # 治理策略配置
```

---

## 🔧 常见问题

### Q: 编译失败，提示找不到 npm？
**A**: 使用 `./c` 或 `./compile.sh` 脚本，会自动查找 npm。

### Q: 如何配置 AI 服务？
**A**: 创建 `~/.yuangs.json` 并配置 API 端点。

### Q: 聊天记录保存在哪里？
**A**: 保存在 VS Code 的 workspace state 中，自动持久化。

### Q: 如何自定义治理规则？
**A**: 在项目根目录创建或编辑 `policy.yaml`。

---

## 📚 更多资源

- [完整文档](./README.md)
- [更新日志](./CHANGELOG.md)
- [问题反馈](https://github.com/your-repo/issues)

---

**版本**: 1.0.3  
**更新时间**: 2026-01-21
