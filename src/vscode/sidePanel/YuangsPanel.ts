import * as vscode from 'vscode';

export class YuangsPanel {
  private static panel: vscode.WebviewPanel | undefined;
  private static disposables: vscode.Disposable[] = [];

  static show(content: string, title: string = 'Yuangs AI') {
    if (this.panel) {
      // If panel exists, update its content
      this.panel.title = title;
      this.panel.reveal(vscode.ViewColumn.One);
      this.updateContent(content);
    } else {
      // Create new panel
      this.panel = vscode.window.createWebviewPanel(
        'yuangsPanel',
        title,
        vscode.ViewColumn.Beside,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );

      this.panel.webview.html = this.getWebviewContent(content);

      this.panel.onDidDispose(() => {
        this.panel = undefined;
        while (this.disposables.length) {
          const disposable = this.disposables.pop();
          if (disposable) {
            disposable.dispose();
          }
        }
      }, null, this.disposables);

      // Handle messages from the webview
      this.panel.webview.onDidReceiveMessage(async (message) => {
        switch (message.command) {
          case 'applyOptimization':
            await this.handleApplyOptimization(message.args);
            break;
        }
      }, null, this.disposables);
    }
  }

  private static updateContent(content: string) {
    if (this.panel) {
      this.panel.webview.html = this.getWebviewContent(content);
    }
  }

  private static getWebviewContent(content: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yuangs AI</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
      padding: 20px;
      line-height: 1.6;
      color: #333;
    }
    
    /* Markdown styles */
    #content h1, #content h2, #content h3, #content h4, #content h5, #content h6 {
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 600;
      line-height: 1.25;
    }
    #content h1 {
      font-size: 2em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid #eaecef;
    }
    #content h2 {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid #eaecef;
    }
    #content h3 {
      font-size: 1.25em;
    }
    #content p {
      margin-top: 0;
      margin-bottom: 16px;
    }
    #content ul, #content ol {
      padding-left: 2em;
      margin-bottom: 16px;
    }
    #content li {
      margin-bottom: 4px;
    }
    #content blockquote {
      padding: 0 1em;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
      margin-bottom: 16px;
    }
    #content pre {
      background: #f6f8fa;
      padding: 16px;
      border-radius: 6px;
      overflow: auto;
      font-size: 13px;
      margin-bottom: 16px;
    }
    #content code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      background: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 3px;
      font-size: 85%;
    }
    #content pre code {
      background: transparent;
      padding: 0;
      font-size: inherit;
    }
    #content strong {
      font-weight: 600;
    }
    #content em {
      font-style: italic;
    }
    #content hr {
      height: 0.25em;
      padding: 0;
      margin: 24px 0;
      background-color: #e1e4e8;
      border: 0;
    }
    #content table {
      border-spacing: 0;
      border-collapse: collapse;
      margin-bottom: 16px;
      width: 100%;
    }
    #content table th, #content table td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
    #content table th {
      font-weight: 600;
      background: #f6f8fa;
    }
    #content a {
      color: #0366d6;
      text-decoration: none;
    }
    #content a:hover {
      text-decoration: underline;
    }
    
    .button {
      background: #007acc;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
    }
    .button:hover {
      background: #005a9e;
    }
  </style>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    const vscode = acquireVsCodeApi();
    
    // Parse and render markdown content
    const content = ${JSON.stringify(content)};
    document.getElementById('content').innerHTML = marked.parse(content);

    // Handle apply optimization link
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.href.includes('yuangs.applyOptimization')) {
        e.preventDefault();
        const url = new URL(e.target.href);
        const args = url.searchParams.get('args');
        if (args) {
          vscode.postMessage({
            command: 'applyOptimization',
            args: JSON.parse(decodeURIComponent(args))
          });
        }
      }
    });
  </script>
</body>
</html>`;
  }

  private static escapeHtml(text: string): string {
    // Escape HTML entities manually to avoid using 'document' in webview context
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  private static async handleApplyOptimization(args: any) {
    try {
      const { documentUri, range, optimizedCode } = args;
      
      // Get the document
      const document = await vscode.workspace.openTextDocument(vscode.Uri.parse(documentUri));
      const editor = await vscode.window.showTextDocument(document);
      
      // Apply the optimization
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