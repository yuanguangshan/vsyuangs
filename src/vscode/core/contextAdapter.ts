import * as vscode from 'vscode';
import { ContextManager } from '../../engine/agent/contextManager';
import { ContextItem } from '../../engine/agent/contextBuffer';
import * as path from 'path';

/**
 * VS Code → ContextBuffer 适配器
 * 将 VS Code 环境中的上下文信息收集并注入到 ContextBuffer 中
 * 
 * 职责：
 * - 收集 VS Code 环境上下文（编辑器、选择、Git diff、诊断等）
 * - 将上下文注入到 ContextManager
 * - 设置 VS Code 事件监听器
 */
export class VSCodeContextAdapter {
  private contextManager: ContextManager;

  constructor(contextManager: ContextManager) {
    console.log('[ContextAdapter] Initializing...');
    this.contextManager = contextManager;
  }

  /**
   * 解析用户输入中的引用 (@filename) 并加载到上下文
   */
  async resolveUserReferences(userInput: string): Promise<void> {
    const references = userInput.match(/@[^\s]+/g);
    if (!references) return;

    console.log(`[ContextAdapter] Found references: ${references.join(', ')}`);
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) return;

    for (const ref of references) {
      // 移除 @ 前缀
      const relPath = ref.substring(1);
      
      // 尝试找到文件
      // 1. 直接匹配
      let fileUri = vscode.Uri.joinPath(workspaceFolder.uri, relPath);
      let exists = false;
      
      try {
        await vscode.workspace.fs.stat(fileUri);
        exists = true;
      } catch {
        // 2. 尝试模糊匹配 (简化的，实际可能需要更复杂的查找)
        const files = await vscode.workspace.findFiles(`**/${relPath}`, '**/node_modules/**', 1);
        if (files.length > 0) {
          fileUri = files[0];
          exists = true;
        }
      }

      if (exists) {
        try {
          const document = await vscode.workspace.openTextDocument(fileUri);
          const content = document.getText();
          
          await this.contextManager.addContextItemAsync({
             type: 'file',
             path: fileUri.fsPath,
             content: content,
             semantic: 'source_code',
             summary: `User referenced file: ${path.basename(fileUri.fsPath)}`,
             summarized: true,
             summaryQuality: 1.0, 
             alias: `@${relPath}`,
             tags: ['user-referenced', 'explicit'],
             // 强制高重要性
             importance: {
                 id: fileUri.fsPath,
                 path: fileUri.fsPath,
                 type: 'file',
                 useCount: 1,
                 successCount: 1,
                 failureCount: 0,
                 lastUsed: Date.now(),
                 createdAt: Date.now(),
                 confidence: 1.0 
             }
          });
          console.log(`[ContextAdapter] ✅ Added referenced file: ${fileUri.fsPath}`);
        } catch (e) {
          console.warn(`[ContextAdapter] ⚠️ Failed to read referenced file ${relPath}: ${e}`);
        }
      } else {
        console.warn(`[ContextAdapter] ⚠️ Referenced file not found: ${relPath}`);
        vscode.window.showWarningMessage(`Yuangs AI: Could not find referenced file '${relPath}'. Please check the path.`);
      }
    }
  }

  /**
   * 收集当前 VS Code 环境中的上下文信息
   */
  async collectContext(): Promise<void> {
    console.log('[ContextAdapter] Collecting VS Code context...');
    // 收集活动编辑器内容
    await this.collectActiveEditor();
    
    // 收集选中文本
    await this.collectSelection();
    
    // 收集 Git 差异
    await this.collectGitDiff();
    
    // 收集工作区诊断信息
    await this.collectDiagnostics();
    
    // 收集工作区文件结构
    await this.collectWorkspaceStructure();
  }

  /**
   * 收集活动编辑器内容
   */
  private async collectActiveEditor(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const document = editor.document;
    const content = document.getText();
    const filePath = document.uri.fsPath;

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: filePath,
      content,
      semantic: 'source_code',
      summary: `Current active file: ${path.basename(filePath)}`,
      summarized: true,
      summaryQuality: 0.8,
      alias: path.basename(filePath),
      tags: ['active', 'current'],
      projectScope: vscode.workspace.getWorkspaceFolder(document.uri)?.uri.fsPath || process.cwd(),
      // 增加 active editor 的重要性
      importance: {
          id: filePath,
          path: filePath,
          type: 'file',
          useCount: 1,
          successCount: 1,
          failureCount: 0,
          confidence: 0.9,
          lastUsed: Date.now(),
          createdAt: Date.now()
      }
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added active editor: ${filePath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add active editor: ${error}`);
    }
  }

  /**
   * 收集选中文本
   */
  private async collectSelection(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.selection.isEmpty) return;

    const selection = editor.document.getText(editor.selection);
    const filePath = editor.document.uri.fsPath;
    const selectionStart = editor.selection.start.line + 1;
    const selectionEnd = editor.selection.end.line + 1;

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: filePath,
      content: selection,
      semantic: 'source_code',
      summary: `Selected code from ${path.basename(filePath)} (lines ${selectionStart}-${selectionEnd})`,
      summarized: true,
      summaryQuality: 0.9,
      alias: `selection-${path.basename(filePath)}-${selectionStart}-${selectionEnd}`,
      tags: ['selection', 'highlighted'],
      projectScope: vscode.workspace.getWorkspaceFolder(editor.document.uri)?.uri.fsPath || process.cwd(),
      // 强制 Selection 为最高重要性
      importance: {
          id: `selection-${filePath}`,
          path: filePath,
          type: 'file',
          useCount: 1,
          successCount: 1,
          failureCount: 0,
          confidence: 1.0,
          lastUsed: Date.now(),
          createdAt: Date.now()
      }
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added selection: ${filePath} (lines ${selectionStart}-${selectionEnd})`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add selection: ${error}`);
    }
  }

  /**
   * 收集 Git 差异
   */
  private async collectGitDiff(): Promise<void> {
    try {
      // 检查是否安装了 Git 扩展
      const gitExtension = vscode.extensions.getExtension('vscode.git');
      if (!gitExtension) {
        console.log('[ContextAdapter] ⚠️ Git extension not found, skipping git diff');
        return;
      }

      // 获取 Git API
      const git = gitExtension.exports.getAPI(1);
      if (!git.repositories.length) {
        console.log('[ContextAdapter] ⚠️ No Git repositories found, skipping git diff');
        return;
      }

      const repository = git.repositories[0]; // 使用第一个仓库
      const diff = await repository.diff(true); // 获取暂存和未暂存的更改

      if (diff && diff.length > 0) {
        const contextItem: Omit<ContextItem, 'tokens'> = {
          type: 'file',
          path: `${repository.rootUri.fsPath}/git-diff`,
          content: diff,
          semantic: 'evidence',
          summary: 'Current Git diff showing changes in the repository',
          summarized: true,
          summaryQuality: 0.8,
          alias: 'git-diff',
          tags: ['git', 'diff', 'changes'],
          projectScope: repository.rootUri.fsPath
        };

        try {
          await this.contextManager.addContextItem(contextItem);
          console.log(`[ContextAdapter] ✅ Added git diff: ${repository.rootUri.fsPath}`);
        } catch (error) {
          console.warn(`[ContextAdapter] ⚠️ Failed to add git diff: ${error}`);
        }
      }
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to collect git diff: ${error}`);
    }
  }

  /**
   * 收集工作区诊断信息
   */
  private async collectDiagnostics(): Promise<void> {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) return;

    const documentUri = activeEditor.document.uri;
    const diagnostics = vscode.languages.getDiagnostics(documentUri);

    if (diagnostics.length > 0) {
      const diagnosticText = diagnostics.map(diag => 
        `[${diag.severity}] Line ${diag.range.start.line + 1}: ${diag.message}`
      ).join('\n');

      const contextItem: Omit<ContextItem, 'tokens'> = {
        type: 'file',
        path: `${documentUri.fsPath}.diagnostics`,
        content: diagnosticText,
        semantic: 'log',
        summary: `Diagnostics for ${path.basename(documentUri.fsPath)}`,
        summarized: true,
        summaryQuality: 0.7,
        alias: `diagnostics-${path.basename(documentUri.fsPath)}`,
        tags: ['diagnostics', 'errors', 'warnings'],
        projectScope: vscode.workspace.getWorkspaceFolder(documentUri)?.uri.fsPath || process.cwd()
      };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added diagnostics: ${documentUri.fsPath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add diagnostics: ${error}`);
    }
    }
  }

  /**
   * 收集工作区文件结构
   */
  private async collectWorkspaceStructure(): Promise<void> {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) return;

    const rootFolder = workspaceFolders[0]; // 使用第一个工作区文件夹
    const files = await vscode.workspace.findFiles('**/*', '**/node_modules/**', 1000); // 限制数量

    const structure = files
      .map(uri => {
        const relativePath = path.relative(rootFolder.uri.fsPath, uri.fsPath);
        return relativePath;
      })
      .sort()
      .join('\n');

    const contextItem: Omit<ContextItem, 'tokens'> = {
      type: 'file',
      path: `${rootFolder.uri.fsPath}/workspace-structure`,
      content: structure,
      semantic: 'documentation',
      summary: 'Project structure showing all files in the workspace',
      summarized: true,
      summaryQuality: 0.6,
      alias: 'workspace-structure',
      tags: ['structure', 'files', 'project'],
      projectScope: rootFolder.uri.fsPath
    };

    try {
      await this.contextManager.addContextItem(contextItem);
      console.log(`[ContextAdapter] ✅ Added workspace structure: ${rootFolder.uri.fsPath}`);
    } catch (error) {
      console.warn(`[ContextAdapter] ⚠️ Failed to add workspace structure: ${error}`);
    }
  }

  /**
   * 监听 VS Code 事件以动态更新上下文
   */
  setupEventListeners(): void {
    console.log('[ContextAdapter] Setting up event listeners...');
    
    // 监听文档更改
    vscode.workspace.onDidChangeTextDocument(async (event) => {
      // 可以在此处添加逻辑来处理文档更改
      // 例如，更新相关上下文项或标记为已更改
      console.log(`[ContextAdapter] 📝 Document changed: ${event.document.fileName}`);
    });

    // 监听编辑器更改
    vscode.window.onDidChangeActiveTextEditor(async (editor) => {
      if (editor) {
        // 当编辑器改变时，可以考虑重新收集上下文
        console.log(`[ContextAdapter] ✏️ Active editor changed: ${editor.document.fileName}`);
      }
    });

    // 监听选择更改
    vscode.window.onDidChangeTextEditorSelection(async (event) => {
      // 当选择改变时，可以考虑重新收集选择上下文
      console.log(`[ContextAdapter] ✂️ Selection changed in: ${event.textEditor.document.fileName}`);
    });
  }
}
