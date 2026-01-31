# 模型配置修复指南

## 问题说明

之前打包后配置文件没有被复制到 `dist` 目录，导致扩展无法读取自定义的模型配置。

## 已完成的修复

### 1. 更新了构建脚本
修改了 `package.json` 中的 `bundle` 命令，现在会自动复制配置文件：

```json
"bundle": "webpack --mode production && mkdir -p dist/webview && cp src/vscode/webview/sidebar.html dist/webview/ && cp node_modules/marked/marked.min.js dist/webview/ && mkdir -p dist/engine/core && cp src/engine/core/models.config.json dist/engine/core/"
```

### 2. 更新了配置文件读取逻辑
ChatViewProvider 现在会按以下优先级查找配置文件：
1. `dist/engine/core/models.config.json` (打包后的位置)
2. `src/engine/core/models.config.json` (源码位置)
3. 硬编码默认值（回退）

### 3. 当前配置状态
您的配置文件 `src/engine/core/models.config.json` 已包含：
- ✅ GPT-4o Mini
- ✅ GPT-4o  
- ✅ Gemini 2.5 Flash Latest
- ✅ Gemini 2.5 Flash
- ✅ **Assistant** (默认模型)

配置文件已复制到 `dist/engine/core/models.config.json`

## 测试步骤

### 方式1：使用 F5 调试（推荐）

1. 在 VS Code 中打开项目
2. 按 `F5` 启动调试
3. 会打开一个新的 VS Code 窗口（扩展开发主机）
4. 点击左侧侧边栏的 "Yuangs" 图标
5. 查看模型选择器，应该显示您的自定义模型列表
6. 默认模型应该是 "Assistant"

### 方式2：重新打包并安装

1. 运行打包命令：
   ```bash
   npm run build:package
   ```
   或者使用脚本：
   ```bash
   ./c
   ```

2. 安装新生成的扩展：
   ```bash
   code --install-extension yuangs-vscode-1.0.5.vsix
   ```

3. 重新加载 VS Code 窗口：
   - 按 `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`)
   - 输入 "Reload Window"
   - 按 Enter

4. 打开 Yuangs AI 侧边栏，验证模型列表

## 验证配置是否生效

### 检查控制台日志

1. 打开 VS Code 开发者工具：
   - `Ctrl+Shift+I` (Mac: `Cmd+Option+I`)

2. 切换到 "Console" 标签

3. 查找以下日志：
   ```
   [ChatViewProvider] Found config file at: ...
   [ChatViewProvider] Loaded config with 5 models, default: Assistant
   ```

4. 如果看到这些日志，说明配置已正确加载

### 测试模型切换

1. 点击模型选择器（侧边栏顶部）
2. 应该看到下拉菜单包含：
   - GPT-4o Mini
   - GPT-4o
   - Gemini 2.5 Flash Latest
   - Gemini 2.5 Flash
   - Assistant ✅ (有对勾标记，表示当前选中)

3. 尝试切换到其他模型
4. 刷新页面，应该记住上次的选择

### 测试默认模型

重启 VS Code 后：
- 打开 Yuangs 侧边栏
- 模型选择器应该显示 "Assistant"
- 控制台应该显示默认模型日志

## 如果仍然不工作

### 检查配置文件是否存在

```bash
ls -la dist/engine/core/models.config.json
```

如果文件不存在，手动复制：
```bash
mkdir -p dist/engine/core
cp src/engine/core/models.config.json dist/engine/core/
```

### 检查 TypeScript 编译

```bash
npm run compile
```

确保没有编译错误。

### 检查是否使用了缓存的扩展

VS Code 可能会使用缓存的扩展。确保：
1. 完全关闭 VS Code
2. 重新安装扩展
3. 再次打开 VS Code

### 查看完整错误信息

在开发者工具的 Console 标签中查找错误信息：
- 红色文字表示错误
- 黄色文字表示警告

常见错误：
- `Models config file not found` - 配置文件未找到
- `Failed to parse models config` - JSON 格式错误
- `Failed to read default model` - 读取默认模型失败

## 未来修改配置

修改 `src/engine/core/models.config.json` 后：

1. 如果使用 F5 调试：
   - 无需额外步骤，直接运行即可（因为修改的是源文件）

2. 如果重新打包：
   ```bash
   npm run build:package
   # 新的 bundle 命令会自动复制配置文件
   ```

## 相关文件

- `src/engine/core/models.config.json` - 源配置文件
- `dist/engine/core/models.config.json` - 打包后的配置文件
- `src/vscode/provider/ChatViewProvider.ts` - 配置读取逻辑
- `package.json` - 构建脚本
- `MODEL_SWITCHING_CONFIG_GUIDE.md` - 完整配置指南
