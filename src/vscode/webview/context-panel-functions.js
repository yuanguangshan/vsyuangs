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
