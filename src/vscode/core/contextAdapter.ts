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
   * ✅ 改进版：添加去重、性能优化和更好的用户反馈
   */
  async resolveUserReferences(userInput: string): Promise<void> {
    console.log(`[ContextAdapter] 🔍 Parsing user input for @ references: "${userInput.substring(0, 100)}"`);
    
    // 改进正则表达式：支持路径中的特殊字符，如 . / - _
    const references = userInput.match(/@[a-zA-Z0-9_\-./\\]+/g);
    
    if (!references) {
      console.log(`[ContextAdapter] ❌ No @ references found in input`);
      return;
    }

    // ✅ 去重：防止同一文件被多次引用
    const uniqueRefs = [...new Set(references)];
    
    console.log(`[ContextAdapter] ✅ Found ${references.length} references (${uniqueRefs.length} unique): ${uniqueRefs.join(', ')}`);
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      vscode.window.showWarningMessage('Yuangs AI: No workspace folder open');
      return;
    }

    // ✅ 跟踪已解析的文件路径，防止重复加载
    const resolvedPaths = new Set<string>();
    const loadedFiles: string[] = [];
    const failedFiles: string[] = [];

    for (const ref of uniqueRefs) {
      // 移除 @ 前缀
      const relPath = ref.substring(1);
      console.log(`[ContextAdapter] 📄 Processing reference: "${relPath}"`);
      
      // ✅ 性能优化：只在文件名不含路径分隔符时才进行模糊搜索
      const useFuzzySearch = !relPath.includes('/') && !relPath.includes('\\');
      
      // 尝试找到文件
      let fileUri: vscode.Uri | null = null;
      
      // 1. 先尝试直接路径匹配
      try {
        fileUri = vscode.Uri.joinPath(workspaceFolder.uri, relPath);
        const stat = await vscode.workspace.fs.stat(fileUri);
        console.log(`[ContextAdapter] ✅ Direct path match found: ${fileUri.fsPath}`);
      } catch (directPathError) {
        console.log(`[ContextAdapter] ⚠️ Direct path failed for "${relPath}": ${directPathError}`);
        
        // 2. 只在文件名时才进行模糊搜索（避免扫描整个 workspace）
        if (useFuzzySearch) {
          try {
            const files = await vscode.workspace.findFiles(`**/${relPath}`, '**/node_modules/**', 5);
            if (files.length > 0) {
              fileUri = files[0];
              console.log(`[ContextAdapter] 🔍 Fuzzy search found ${files.length} match(es) for "${relPath}", using: ${fileUri.fsPath}`);
            } else {
              console.log(`[ContextAdapter] ❌ Fuzzy search found 0 matches for "${relPath}"`);
            }
          } catch (searchError) {
            console.warn(`[ContextAdapter] ⚠️ Fuzzy search failed for "${relPath}":`, searchError);
          }
        }
      }

      if (fileUri) {
        // ✅ 去重检查：防止同一文件被多次加载
        const fileFsPath = fileUri.fsPath;
        if (resolvedPaths.has(fileFsPath)) {
          console.log(`[ContextAdapter] ⚠️ Skipping duplicate file: ${fileFsPath}`);
          continue;
        }
        resolvedPaths.add(fileFsPath);

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
          
          loadedFiles.push(path.basename(fileUri.fsPath));
          console.log(`[ContextAdapter] ✅ Added referenced file to context: ${fileUri.fsPath} (${content.length} chars)`);
          
        } catch (e) {
          console.warn(`[ContextAdapter] ⚠️ Failed to read referenced file ${relPath}: ${e}`);
          failedFiles.push(relPath);
        }
      } else {
        console.warn(`[ContextAdapter] ⚠️ Referenced file not found: ${relPath}`);
        failedFiles.push(relPath);
      }
    }

    // ✅ 批量反馈加载结果（避免多个弹窗打扰用户）
    if (loadedFiles.length > 0) {
      const msg = loadedFiles.length === 1 
        ? `Loaded file: ${loadedFiles[0]}`
        : `Loaded ${loadedFiles.length} files: ${loadedFiles.join(', ')}`;
      vscode.window.setStatusBarMessage(`Yuangs AI: ${msg}`, 5000);
      console.log(`[ContextAdapter] ✅ Successfully loaded: ${msg}`);
    }
    
    if (failedFiles.length > 0) {
      const errorMsg = failedFiles.length === 1
        ? `Could not load: "${failedFiles[0]}"`
        : `Could not load ${failedFiles.length} files: ${failedFiles.map(f => `"${f}"`).join(', ')}`;
      // ✅ 使用非 modal 的 toast，不打断用户输入流
      vscode.window.showWarningMessage(`Yuangs AI: ${errorMsg}`, { modal: false });
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
          summary: 'Current Git diff showing changes in repository',
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