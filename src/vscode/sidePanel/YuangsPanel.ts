import * as vscode from 'vscode';

/**
 * 优化后的 Webview Panel
 * 特性：
 * 1. 消息驱动更新 (无闪烁)
 * 2. 自动适配 VS Code 主题
 * 3. 严格的 CSP 安全策略
 */
export class YuangsPanel {
  public static currentPanel: YuangsPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;

    // 监听 Webview 关闭事件
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // 设置 HTML 内容
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);

    // 监听来自 Webview 的消息
    this._panel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case 'applyOptimization':
            await this.handleApplyOptimization(message.args);
            break;
          case 'copyToClipboard':
            vscode.env.clipboard.writeText(message.text);
            vscode.window.showInformationMessage('已复制到剪贴板');
            break;
        }
      },
      null,
      this._disposables
    );
  }

  /**
   * 显示或创建面板
   */
  public static show(extensionUri: vscode.Uri, content: string, title: string = 'Yuangs AI') {
    const column = vscode.window.activeTextEditor
      ? vscode.ViewColumn.Beside
      : vscode.ViewColumn.One;

    // 如果面板已存在，显示它并更新内容
    if (YuangsPanel.currentPanel) {
      YuangsPanel.currentPanel._panel.reveal(column);
      YuangsPanel.currentPanel._panel.title = title;
      YuangsPanel.currentPanel.update(content);
      return;
    }

    // 否则创建新面板
    const panel = vscode.window.createWebviewPanel(
      'yuangsPanel',
      title,
      column,
      {
        enableScripts: true,
        retainContextWhenHidden: true, // 保持状态
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')] // 如果有本地资源
      }
    );

    YuangsPanel.currentPanel = new YuangsPanel(panel, extensionUri);
    YuangsPanel.currentPanel.update(content);
  }

  /**
   * 增量更新内容（通过 postMessage，避免闪烁）
   */
  public update(content: string) {
    this._panel.webview.postMessage({ command: 'updateContent', content: content });
  }

  /**
   * 销毁资源
   */
  public dispose() {
    YuangsPanel.currentPanel = undefined;
    this._panel.dispose();
    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  /**
   * 获取 HTML 内容
   */
  private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri): string {
    // 生成随机 Nonce 以增强安全性
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}' https://cdn.jsdelivr.net;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yuangs AI</title>
  <style>
    /* 使用 VS Code 原生变量实现自动主题适配 */
    :root {
      --container-padding: 20px;
      --input-padding-vertical: 6px;
      --input-padding-horizontal: 4px;
      --input-margin-vertical: 4px;
      --input-margin-horizontal: 0;
    }

    body {
      padding: var(--container-padding);
      color: var(--vscode-editor-foreground);
      background-color: var(--vscode-editor-background);
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      line-height: 1.6;
    }

    /* 链接样式 */
    a {
      color: var(--vscode-textLink-foreground);
      text-decoration: none;
    }
    a:hover {
      color: var(--vscode-textLink-activeForeground);
      text-decoration: underline;
    }

    /* 代码块样式 */
    pre {
      background-color: var(--vscode-textBlockQuote-background);
      border: 1px solid var(--vscode-widget-border);
      border-radius: 4px;
      padding: 12px;
      overflow-x: auto;
      position: relative;
    }

    code {
      font-family: var(--vscode-editor-font-family);
      font-size: 0.9em;
    }

    /* 引用块 */
    blockquote {
      background: var(--vscode-textBlockQuote-background);
      border-left: 4px solid var(--vscode-textBlockQuote-border);
      margin: 0;
      padding: 8px 16px;
    }

    /* 标题颜色 */
    h1, h2, h3, h4, h5, h6 {
      color: var(--vscode-editor-foreground);
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    
    h1 { border-bottom: 1px solid var(--vscode-widget-border); padding-bottom: 0.3em; }

    /* 表格 */
    table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 16px;
    }
    th, td {
      border: 1px solid var(--vscode-widget-border);
      padding: 6px 13px;
    }
    th {
      background-color: var(--vscode-editor-inactiveSelectionBackground);
    }

    /* 按钮 */
    button {
      background: var(--vscode-button-background);
      color: var(--vscode-button-foreground);
      border: none;
      padding: 6px 12px;
      cursor: pointer;
      border-radius: 2px;
    }
    button:hover {
      background: var(--vscode-button-hoverBackground);
    }
    
    /* 复制按钮（代码块右上角） */
    .copy-btn {
      position: absolute;
      top: 5px;
      right: 5px;
      background: var(--vscode-editor-background);
      color: var(--vscode-editor-foreground);
      border: 1px solid var(--vscode-widget-border);
      font-size: 0.8em;
      padding: 2px 6px;
      opacity: 0.6;
      transition: opacity 0.2s;
    }
    pre:hover .copy-btn {
      opacity: 1;
    }

  </style>
</head>
<body>
  <div id="content"></div>
  
  <!-- 使用 CDN 引入 marked (生产环境建议打包到本地) -->
  <script nonce="${nonce}" src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  
  <script nonce="${nonce}">
    const vscode = acquireVsCodeApi();
    const contentDiv = document.getElementById('content');

    // 监听来自扩展的消息
    window.addEventListener('message', event => {
      const message = event.data;
      switch (message.command) {
        case 'updateContent':
          render(message.content);
          break;
      }
    });

    // 渲染函数
    function render(markdown) {
      if (!markdown) return;
      contentDiv.innerHTML = marked.parse(markdown);
      addCopyButtons();
    }

    // 给代码块添加复制按钮
    function addCopyButtons() {
      document.querySelectorAll('pre').forEach(pre => {
        if (pre.querySelector('.copy-btn')) return;
        
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.onclick = () => {
          const code = pre.querySelector('code').innerText;
          vscode.postMessage({
            command: 'copyToClipboard',
            text: code
          });
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = 'Copy', 2000);
        };
        pre.appendChild(btn);
      });
    }

    // 代理点击事件（处理自定义命令链接）
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href.includes('yuangs.applyOptimization')) {
        e.preventDefault();
        try {
          const url = new URL(e.target.href);
          const args = url.searchParams.get('args');
          if (args) {
            vscode.postMessage({
              command: 'applyOptimization',
              args: JSON.parse(decodeURIComponent(args))
            });
          }
        } catch (err) {
          console.error('Invalid link args', err);
        }
      }
    });
  </script>
</body>
</html>`;
  }

  // 处理应用优化的逻辑保持不变
  private async handleApplyOptimization(args: any) {
    try {
      const { documentUri, range, optimizedCode } = args;
      const document = await vscode.workspace.openTextDocument(vscode.Uri.parse(documentUri));
      const editor = await vscode.window.showTextDocument(document);
      
      const edit = new vscode.WorkspaceEdit();
      const selectionRange = new vscode.Range(
        range.start.line, range.start.character,
        range.end.line, range.end.character
      );
      edit.replace(document.uri, selectionRange, optimizedCode);
      
      await vscode.workspace.applyEdit(edit);
      vscode.window.showInformationMessage('✅ 代码优化已应用');
    } catch (error) {
      console.error('Error applying optimization:', error);
      vscode.window.showErrorMessage('应用代码优化时发生错误: ' + (error as Error).message);
    }
  }
}

// 辅助函数：生成随机 Nonce
function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}