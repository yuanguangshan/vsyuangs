# 模型切换功能配置指南

## 概述
模型切换功能已经实现，并且**不再在前端硬编码模型列表**。现在所有模型配置都从配置文件中读取，方便维护和定制。

## 配置文件位置

### 主配置文件
**文件路径:** `src/engine/core/models.config.json`

这是项目的主模型配置文件，定义了所有可用的AI模型及其默认选项。

### 配置文件格式

```json
{
  "availableModels": [
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o Mini",
      "description": "快速且高效"
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "description": "平衡性能"
    }
  ],
  "defaultModel": "gpt-4o-mini"
}
```

### 配置项说明

#### `availableModels` (数组)
定义侧边栏下拉菜单中显示的模型列表。

每个模型对象包含：
- `id`: 模型的唯一标识符（用于API调用）
- `name`: 在UI中显示的模型名称
- `description`: 模型的简短描述

#### `defaultModel` (字符串)
指定默认使用的模型ID，必须是 `availableModels` 中定义的某个模型的 `id`。

## 如何修改模型配置

### 1. 添加新模型

编辑 `src/engine/core/models.config.json`，在 `availableModels` 数组中添加新模型：

```json
{
  "availableModels": [
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o Mini",
      "description": "快速且高效"
    },
    {
      "id": "custom-model-id",
      "name": "Custom Model",
      "description": "自定义模型"
    }
  ],
  "defaultModel": "gpt-4o-mini"
}
```

### 2. 修改默认模型

修改 `defaultModel` 字段为你想要的模型ID：

```json
{
  "availableModels": [...],
  "defaultModel": "gpt-4o"  // 修改这里
}
```

### 3. 删除模型

从 `availableModels` 数组中移除不需要的模型即可。

**注意:** 如果删除了当前设为默认的模型，请确保同时更新 `defaultModel` 字段。

### 4. 完全自定义模型列表

你可以根据需要完全重写 `availableModels` 数组：

```json
{
  "availableModels": [
    {
      "id": "claude-3-opus",
      "name": "Claude 3 Opus",
      "description": "最强大的模型"
    },
    {
      "id": "claude-3-sonnet",
      "name": "Claude 3 Sonnet",
      "description": "平衡的选择"
    }
  ],
  "defaultModel": "claude-3-sonnet"
}
```

## 配置加载机制

### 前端加载流程
1. Webview 初始化时发送 `getModelsConfig` 消息到扩展
2. ChatViewProvider 读取 `models.config.json` 文件
3. 将配置文件内容发送回 Webview
4. Webview 动态渲染模型选择器下拉菜单

### 后端加载流程
1. ChatViewProvider 初始化时调用 `getModelsConfig()` 方法
2. 从 `src/engine/core/models.config.json` 读取配置
3. 如果文件不存在，使用硬编码的默认值
4. 提取默认模型用于初始化

### 默认值回退
如果配置文件不存在或读取失败，系统会使用以下硬编码的默认值：

```javascript
{
  availableModels: [
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', description: '快速且高效' },
    { id: 'gpt-4o', name: 'GPT-4o', description: '平衡性能' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', description: '高性能' },
    { id: 'gpt-4', name: 'GPT-4', description: '最强能力' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: '经济实惠' }
  ],
  defaultModel: 'gpt-4o-mini'
}
```

## 用户偏好持久化

用户选择的模型会自动保存到 VS Code 的 workspaceState 中，重启 VS Code 后会自动恢复上次选择的模型。

### 存储位置
- **Key:** `currentModel`
- **Value:** 用户选择的模型ID（字符串）
- **生命周期:** 与工作区绑定，不跨项目共享

## 重新编译

修改配置文件后，需要重新编译项目：

```bash
npm run compile
```

或者在 VS Code 中按 `Ctrl+Shift+B` (Mac: `Cmd+Shift+B`) 运行编译任务。

## 注意事项

1. **模型ID必须有效**: 确保配置的 `id` 能被后端API识别和使用
2. **描述要简洁**: `description` 会显示在下拉菜单中，建议不超过20个字符
3. **默认模型必须存在**: `defaultModel` 必须是 `availableModels` 中定义的某个模型的 `id`
4. **JSON格式正确**: 确保配置文件是有效的JSON格式，可以使用JSON验证工具检查
5. **编译后生效**: 修改配置后必须重新编译才能生效

## 故障排查

### 问题1: 模型列表没有显示
**可能原因:** 配置文件格式错误或路径不正确  
**解决方法:** 检查 `src/engine/core/models.config.json` 文件是否存在且格式正确

### 问题2: 选择了模型但仍然使用默认模型
**可能原因:** 模型ID无效或后端不支持  
**解决方法:** 检查浏览器控制台和 VS Code 开发者工具的错误日志

### 问题3: 默认模型不是我想要的
**可能原因:** 配置文件中的 `defaultModel` 字段不正确  
**解决方法:** 确认 `defaultModel` 的值与 `availableModels` 中某个模型的 `id` 完全一致

## 相关文件

- `src/engine/core/models.config.json` - 模型配置文件（主配置）
- `src/vscode/provider/ChatViewProvider.ts` - 模型选择器后端逻辑
- `src/vscode/webview/sidebar.html` - 模型选择器UI
- `src/engine/core/validation.ts` - 默认模型加载逻辑

## 技术实现细节

### 消息流
```
用户点击模型选择器
  ↓
Webview: initModelSelector() → 发送 { type: 'getModelsConfig' }
  ↓
ChatViewProvider: getModelsConfig() → 读取配置文件
  ↓
ChatViewProvider: 发送 { type: 'modelsConfig', value: {...} }
  ↓
Webview: 渲染下拉菜单
  ↓
用户选择模型
  ↓
Webview: 发送 { type: 'changeModel', value: 'gpt-4o' }
  ↓
ChatViewProvider: 更新 _currentModel 并保存到 workspaceState
  ↓
后续AI请求使用新模型
```

### 配置文件读取优先级
1. 扩展安装目录: `__dirname/models.config.json`
2. 项目源码目录: `src/engine/core/models.config.json`
3. 硬编码默认值（如果都不存在）
