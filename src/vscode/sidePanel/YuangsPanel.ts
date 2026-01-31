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
    }
    pre {
      background: #f6f8fa;
      padding: 12px;
      border-radius: 6px;
      overflow: auto;
      font-size: 13px;
    }
    code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
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
  <div id="content">${this.escapeHtml(content)}</div>
  <script>
    const vscode = acquireVsCodeApi();
    
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