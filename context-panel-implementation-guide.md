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
