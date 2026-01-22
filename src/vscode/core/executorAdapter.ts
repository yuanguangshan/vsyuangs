import * as vscode from 'vscode';
import { ProposedAction } from '../../engine/agent/state';

/**
 * Agent Action → VS Code API 适配器
 * 将 Agent 提出的动作映射到 VS Code API
 * 
 * 职责：
 * - 执行 code_diff → Webview diff 预览 + 应用
 * - 执行 shell_cmd → VS Code Terminal
 * - 执行 tool_call → open/read/list/search 文件操作
 * - 执行 answer → 信息提示
 */
export class VSCodeExecutorAdapter {
  /**
   * 执行 Agent 提出的动作
   */
  static async execute(action: ProposedAction) {
    console.log(`[Executor] Executing action: ${action.type}`);
    switch (action.type) {
      case 'code_diff':
        return await this.executeCodeDiff(action.payload.diff || action.payload.content);
      case 'shell_cmd':
        return await this.executeShellCommand(action.payload.command || action.payload.content);
      case 'answer':
        return await this.showMessage(action.payload.content);
      case 'tool_call':
        return await this.executeToolCall(action.payload.tool_name, action.payload.parameters);
      default:
        console.warn(`[Executor] Unknown action type: ${action.type}`);
        return await this.showMessage(`Unknown action type: ${action.type}\nContent: ${action.payload.content || JSON.stringify(action.payload)}`);
    }
  }

  /**
   * 执行代码差异
   */
  private static async executeCodeDiff(diff: string) {
    try {
      console.log('[Executor] Opening diff preview...');
      // 创建一个临时的diff预览
      const panel = vscode.window.createWebviewPanel(
        'diffPreview',
        'AI Generated Diff',
        vscode.ViewColumn.One,
        { enableScripts: true }
      );

      panel.webview.html = `
        <html>
          <body>
            <h3>AI Generated Diff</h3>
            <pre>${diff}</pre>
            <button onclick="applyDiff()">Apply Changes</button>
            <script>
              function applyDiff() {
                vscode.postMessage({ command: 'applyDiff', diff: \`${diff}\` });
              }
              
              const vscode = acquireVsCodeApi();
            </script>
          </body>
        </html>
      `;

      // 监听来自webview的消息
      panel.webview.onDidReceiveMessage(async (message) => {
        if (message.command === 'applyDiff') {
          // 在这里应用diff到当前文档
          const editor = vscode.window.activeTextEditor;
          if (editor) {
            const edit = new vscode.WorkspaceEdit();
            // 这里需要解析diff并应用更改
            // 简化版本：直接替换整个文档内容
            const doc = editor.document;
            const fullRange = new vscode.Range(
              doc.positionAt(0),
              doc.positionAt(doc.getText().length)
            );
            
            edit.replace(doc.uri, fullRange, message.diff);
            await vscode.workspace.applyEdit(edit);
            await doc.save();
            
            vscode.window.showInformationMessage('Changes applied successfully!');
            panel.dispose();
          }
        }
      });

      return {
        success: true,
        output: 'Diff preview opened in new tab'
      };
    } catch (error) {
      console.error('[Executor] Failed to execute code diff:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute code diff: ${error}`
      };
    }
  }

  /**
   * 执行Shell命令
   */
  private static async executeShellCommand(command: string) {
    try {
      console.log(`[Executor] Executing shell command: ${command}`);
      // 创建一个新的终端并执行命令
      const terminal = vscode.window.createTerminal('AI Terminal');
      terminal.show();
      terminal.sendText(command);
      
      return {
        success: true,
        output: `Command sent to terminal: ${command}`
      };
    } catch (error) {
      console.error('[Executor] Failed to execute shell command:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute shell command: ${error}`
      };
    }
  }

  /**
   * 显示消息
   */
  private static async showMessage(content: string) {
    try {
      console.log('[Executor] Showing message to user');
      vscode.window.showInformationMessage(content.substring(0, 100) + (content.length > 100 ? '...' : ''));
      return {
        success: true,
        output: content
      };
    } catch (error) {
      console.error('[Executor] Failed to show message:', error);
      return {
        success: false,
        output: '',
        error: `Failed to show message: ${error}`
      };
    }
  }

  /**
   * 执行工具调用
   */
  private static async executeToolCall(toolName: string, parameters: any) {
    try {
      console.log(`[Executor] Executing tool: ${toolName}`);
      // 根据工具名称执行相应的VS Code操作
      switch (toolName) {
        case 'open_file':
          return await this.openFile(parameters.path);
        case 'create_file':
          return await this.createFile(parameters.path, parameters.content);
        case 'read_file':
          return await this.readFile(parameters.path);
        case 'list_files':
          return await this.listFiles(parameters.directory);
        case 'search_in_workspace':
          return await this.searchInWorkspace(parameters.query);
        default:
          console.warn(`[Executor] Unknown tool: ${toolName}`);
          return {
            success: false,
            output: '',
            error: `Unknown tool: ${toolName}`
          };
      }
    } catch (error) {
      console.error('[Executor] Failed to execute tool call:', error);
      return {
        success: false,
        output: '',
        error: `Failed to execute tool call: ${error}`
      };
    }
  }

  /**
   * 打开文件
   */
  private static async openFile(filePath: string) {
    try {
      console.log(`[Executor] Opening file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const document = await vscode.workspace.openTextDocument(uri);
      await vscode.window.showTextDocument(document);
      
      return {
        success: true,
        output: `File opened: ${filePath}`
      };
    } catch (error) {
      console.error('[Executor] Failed to open file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to open file: ${error}`
      };
    }
  }

  /**
   * 创建文件
   */
  private static async createFile(filePath: string, content: string) {
    try {
      console.log(`[Executor] Creating file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const edit = new vscode.WorkspaceEdit();
      edit.createFile(uri, { overwrite: false });
      await vscode.workspace.applyEdit(edit);
      
      // 写入内容
      await vscode.workspace.fs.writeFile(uri, new TextEncoder().encode(content));
      
      return {
        success: true,
        output: `File created: ${filePath}`
      };
    } catch (error) {
      console.error('[Executor] Failed to create file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to create file: ${error}`
      };
    }
  }

  /**
   * 读取文件
   */
  private static async readFile(filePath: string) {
    try {
      console.log(`[Executor] Reading file: ${filePath}`);
      const uri = vscode.Uri.file(filePath);
      const content = new TextDecoder().decode(await vscode.workspace.fs.readFile(uri));
      
      return {
        success: true,
        output: content
      };
    } catch (error) {
      console.error('[Executor] Failed to read file:', error);
      return {
        success: false,
        output: '',
        error: `Failed to read file: ${error}`
      };
    }
  }

  /**
   * 列出文件
   */
  private static async listFiles(directory?: string) {
    try {
      console.log(`[Executor] Listing files in: ${directory || 'workspace'}`);
      const folder = directory || vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      if (!folder) {
        return {
          success: false,
          output: '',
          error: 'No workspace folder found'
        };
      }

      const uri = vscode.Uri.file(folder);
      const files = await vscode.workspace.fs.readDirectory(uri);
      const fileList = files.map(([name, type]) => 
        `${name}${type === vscode.FileType.Directory ? '/' : ''}`
      ).join('\n');
      
      return {
        success: true,
        output: fileList
      };
    } catch (error) {
      console.error('[Executor] Failed to list files:', error);
      return {
        success: false,
        output: '',
        error: `Failed to list files: ${error}`
      };
    }
  }

  /**
   * 在工作区中搜索
   */
  private static async searchInWorkspace(query: string) {
    try {
      console.log(`[Executor] Searching workspace for: ${query}`);
      // 使用VS Code的搜索功能
      const results = await vscode.workspace.findFiles(`**/${query}**`, '**/node_modules/**', 100);
      const resultPaths = results.map(uri => uri.fsPath).join('\n');
      
      return {
        success: true,
        output: resultPaths
      };
    } catch (error) {
      console.error('[Executor] Failed to search workspace:', error);
      return {
        success: false,
        output: '',
        error: `Failed to search in workspace: ${error}`
      };
    }
  }
}
