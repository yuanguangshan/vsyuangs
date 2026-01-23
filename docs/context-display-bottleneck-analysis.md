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
