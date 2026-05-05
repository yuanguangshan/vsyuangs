import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { VSCodeAgentRuntime } from '../core/runtime';
import { GovernanceService } from '../../engine/agent/governance';
import * as chatHistoryStorage from '../../engine/agent/chatHistoryStorage';
import { createIgnoreFilter, IgnoreFilter } from '../utils/ignoreFilter';
import { GitManager } from '../git/GitManager';
import { DiffParser, DiffApplier } from '../../core/diff';
import { getDiffGradedApplier } from '../../core/DiffGradedApplier';
import { getSecurityScanCoordinator } from '../../core/SecurityScanCoordinator';
import { getComponentLogger, getLogger } from '../../utils/logger';

// 模型配置接口
interface ModelConfig {
    id: string;
    name: string;
    description: string;
}

interface ModelsConfigFile {
    availableModels: ModelConfig[];
    defaultModel: string;
}

/**
 * ChatView Provider - 侧边栏聊天视图提供者
 * 
 * 职责：
 * - 管理 Webview UI 的生命周期
 * - 维护聊天历史记录
 * - 提供用户输入流式展示
 * - 通过 VSCodeAgentRuntime 执行 AI 任务
 * 
 * 注意：不负责 context 构造，只负责 UI 层
 */
export class ChatViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'yuangs.chatView';
    private _view?: vscode.WebviewView;
    private _messages: { role: string, content: string }[] = [];
    private _abortController: AbortController | null = null;
    private _ignoreFilter: IgnoreFilter | null = null;
    private _currentModel: string = 'gpt-4o-mini';
    private _runtime: VSCodeAgentRuntime | null = null;
    private _logger = getComponentLogger('ChatViewProvider');
    private _uiCallback?: (message: string) => void;

    constructor(
        private readonly _context: vscode.ExtensionContext,
    ) {
        this._logger.info('Initializing ChatViewProvider');
        // Initialize ignore filter for file selection
        this._ignoreFilter = createIgnoreFilter();
        this._logger.info('Ignore filter initialized', { patternCount: this._ignoreFilter?.getPatterns?.()?.length || 0 });
        // 从 workspaceState 加载保存的模型
        this._currentModel = this._context.workspaceState.get('currentModel', this.getDefaultModel());
        this._logger.info('Current model loaded', { model: this._currentModel });
        // 优先从文件系统恢复历史记录，否则从 workspaceState 恢复
        this.loadHistory();

        // ✅ 初始化时创建 runtime 并设置回调（避免每次请求重复设置）
        this._runtime = new VSCodeAgentRuntime();
        const contextAdapter = this._runtime.getContextAdapter();
        contextAdapter.setOnFileLoadedCallback((fileName: string) => {
            this._view?.webview.postMessage({
                type: 'success',
                value: `📄 Referenced file: ${fileName}`
            });
            this._logger.info('UI notified of loaded file', { fileName });
        });
        this._logger.info('File loaded callback initialized');

        // ✅ 设置日志UI输出回调
        this.setupLogUICallback();
    }

    /**
     * 设置日志UI输出回调，将日志消息转发到Webview界面
     */
    private setupLogUICallback(): void {
        try {
            const logger = getLogger();
            logger.enableUIOutput();

            // 创建UI回调函数
            const uiCallback = (message: string) => {
                // 检查webview是否可用
                if (!this._view || !this._view.webview) {
                    console.warn('[Logger] Webview not available for UI log output');
                    return;
                }

                try {
                    this._view.webview.postMessage({
                        type: 'log',
                        value: message
                    });
                } catch (error) {
                    console.error('[Logger] Failed to post log message to webview:', error);
                }
            };

            // 保存回调引用以便后续清理
            this._uiCallback = uiCallback;
            logger.setUICallback(uiCallback);

            this._logger.info('Log UI callback initialized');
        } catch (error) {
            this._logger.error('Failed to setup log UI callback', { error });
        }
    }

    /**
     * 获取默认模型
     */
    private getDefaultModel(): string {
        try {
            const config = this.getModelsConfig();
            return config.defaultModel;
        } catch (error) {
            console.warn('[ChatViewProvider] Failed to read default model from config, using fallback');
            return 'gpt-4o-mini';
        }
    }

    /**
     * 读取模型配置文件
     */
    private getModelsConfig(): ModelsConfigFile {
        // 优先从 dist 目录读取（打包后的位置）
        const possiblePaths = [
            path.join(this._context.extensionPath, 'dist', 'engine', 'core', 'models.config.json'),
            path.join(this._context.extensionPath, 'src', 'engine', 'core', 'models.config.json')
        ];

        let configPath: string | null = null;
        for (const testPath of possiblePaths) {
            if (fs.existsSync(testPath)) {
                configPath = testPath;
                console.log(`[ChatViewProvider] Found config file at: ${configPath}`);
                break;
            }
        }

        if (!configPath) {
            console.warn('[ChatViewProvider] Models config file not found at any location, using defaults');
            return {
                availableModels: [
                    { id: 'gpt-5.4-mini', name: 'GPT-5.4 Mini', description: '快速且高效' },
                    { id: 'glm-5.1', name: 'GLM-5.1', description: '平衡性能' },
                    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', description: '高性能' },
                    { id: 'gpt-4', name: 'GPT-4', description: '最强能力' },
                    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: '经济实惠' }
                ],
                defaultModel: 'gpt-4o-mini'
            };
        }

        try {
            const content = fs.readFileSync(configPath, 'utf-8');
            const config = JSON.parse(content) as ModelsConfigFile;
            console.log(`[ChatViewProvider] Loaded config with ${config.availableModels.length} models, default: ${config.defaultModel}`);
            return config;
        } catch (error) {
            console.error('[ChatViewProvider] Failed to parse models config:', error);
            throw error;
        }
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        console.log('[ChatViewProvider] Resolving webview view...');
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._context.extensionUri
            ]
        };

        try {
            webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        } catch (error: any) {
            console.error('[ChatViewProvider] Error loading view:', error);
            webviewView.webview.html = `<html><body><h3>Error loading view</h3><pre>${error.message}</pre></body></html>`;
        }

        // 监听 webview 可见性变化
        webviewView.onDidChangeVisibility(() => {
            console.log(`[ChatViewProvider] Webview visibility changed. Visible: ${webviewView.visible}`);
            // 每次 webview 变为可见时，确保发送历史记录
            if (webviewView.visible && this._view) {
                this._view.webview.postMessage({ type: 'history', value: this._messages });
            }
        });

        // 监听 webview 销毁
        webviewView.onDidDispose(() => {
            console.log('[ChatViewProvider] Webview disposed');
            this._view = undefined;
        });

        // 当 webview 准备好后，发送历史记录
        // 使用 setTimeout 确保 webview 完全初始化
        setTimeout(() => {
            if (this._view) {
                console.log(`[ChatViewProvider] Sending ${this._messages.length} messages to UI`);
                this._view.webview.postMessage({ type: 'history', value: this._messages });
            }
        }, 100);

        webviewView.webview.onDidReceiveMessage(async data => {
            switch (data.type) {
                case 'ask':
                    console.log('[ChatViewProvider] User asked question');
                    await this.handleAgentTask(data.value);
                    break;
                case 'stop':
                    console.log('[ChatViewProvider] User requested stop');
                    if (this._abortController) {
                        this._abortController.abort();
                        this._abortController = null;
                    }
                    break;
                case 'getFiles':
                    const excludePattern = this._ignoreFilter?.getExcludePattern() || '**/node_modules/**';
                    // 增加文件数量限制，确保能获取到更多文件
                    const files = await vscode.workspace.findFiles('**/*', excludePattern, 1000);

                    // 获取相对路径
                    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
                    let fileNames = files.map(f =>
                        workspaceFolder
                            ? path.relative(workspaceFolder.uri.fsPath, f.fsPath)
                            : f.fsPath
                    );

                    // 如果有查询词，进行模糊匹配过滤
                    if (data.query && data.query.trim()) {
                        const queryLower = data.query.toLowerCase();
                        fileNames = fileNames.filter(name =>
                            name.toLowerCase().includes(queryLower)
                        );
                    }

                    // 限制返回数量，避免列表太长影响性能
                    fileNames = fileNames.slice(0, 50);

                    webviewView.webview.postMessage({
                        type: 'suggestions',
                        value: fileNames,
                        trigger: '@'
                    });
                    console.log(`[ChatViewProvider] Returned ${fileNames.length} files for query: "${data.query}"`);
                    break;
                case 'loadFileTree':
                    const allExcludePattern = this._ignoreFilter?.getExcludePattern() || '**/node_modules/**';
                    const allFiles = await vscode.workspace.findFiles('**/*', allExcludePattern, 500);
                    const allFileNames = allFiles.map(f => path.relative(vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', f.fsPath));
                    webviewView.webview.postMessage({ type: 'fileTreeData', value: allFileNames });
                    break;
                case 'readFile':
                    // 读取文件内容并添加到上下文
                    if (data.path) {
                        try {
                            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
                            const fsPath = (workspaceFolder && !path.isAbsolute(data.path))
                                ? path.join(workspaceFolder.uri.fsPath, data.path)
                                : data.path;
                            const uri = vscode.Uri.file(fsPath);
                            const doc = await vscode.workspace.openTextDocument(uri);
                            const content = doc.getText();

                            // 获取或创建 VSCodeAgentRuntime 实例
                            if (!this._runtime) {
                                this._runtime = new VSCodeAgentRuntime();
                            }
                            const contextManager = this._runtime.getContextManager();

                            // 将文件内容添加到上下文
                            const relativePath = workspaceFolder ? path.relative(workspaceFolder.uri.fsPath, uri.fsPath) : path.basename(uri.fsPath);

                            await contextManager.addContextItemAsync({
                                type: 'file',
                                path: uri.fsPath,
                                content: content,
                                semantic: 'source_code',
                                summary: `User selected file: ${path.basename(uri.fsPath)}`,
                                summarized: true,
                                summaryQuality: 1.0,
                                alias: relativePath, // 使用相对路径 (e.g., "src/components/Button.tsx")
                                tags: ['user-selected', 'explicit', 'file-panel'],
                                importance: {
                                    id: uri.fsPath,
                                    path: uri.fsPath,
                                    type: 'file',
                                    useCount: 1,
                                    successCount: 1,
                                    failureCount: 0,
                                    lastUsed: Date.now(),
                                    createdAt: Date.now(),
                                    confidence: 1.0
                                }
                            });

                            console.log(`[ChatViewProvider] ✅ File added to context: ${data.path}`);

                            // 发送成功消息到 UI
                            webviewView.webview.postMessage({
                                type: 'success',
                                value: `📄 File loaded: ${path.basename(uri.fsPath)}`
                            });

                            // 同时打开文件供用户查看
                            await vscode.window.showTextDocument(doc, { preview: true });

                            // 关闭文件面板
                            webviewView.webview.postMessage({ type: 'closeFilesPanel' });

                            // ✅ 修复：不再自动触发 AI 分析
                            // 现在文件选择器使用 @ 引用方式，文件内容会通过 resolveUserReferences 正确加载
                            // 保留此 readFile 处理器是为了将来可能的其他用途
                        } catch (error: any) {
                            console.error(`[ChatViewProvider] Failed to read file ${data.path}:`, error);
                            webviewView.webview.postMessage({
                                type: 'error',
                                value: `Failed to read file: ${error.message}`
                            });
                        }
                    }
                    break;
                case 'exportChat':
                    this.exportChatHistory();
                    break;
                case 'clear':
                    this.clear();
                    break;
                case 'getSymbols':
                    const editor = vscode.window.activeTextEditor;
                    if (editor) {
                        try {
                            const symbols = await vscode.commands.executeCommand<vscode.SymbolInformation[]>(
                                'vscode.executeDocumentSymbolProvider',
                                editor.document.uri
                            );
                            if (symbols) {
                                const symbolNames = symbols.map(s => s.name);
                                webviewView.webview.postMessage({ type: 'suggestions', value: symbolNames, trigger: '#' });
                            }
                        } catch (e) {
                            webviewView.webview.postMessage({ type: 'suggestions', value: [], trigger: '#' });
                        }
                    }
                    break;
                case 'applyDiff':
                    await this.handleApplyDiff(data.value);
                    break;
                case 'applyFullRewrite':
                    await this.handleApplyFullRewrite(data.path, data.content);
                    break;
                case 'open':
                    if (data.path) {
                        try {
                            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
                            const fsPath = (workspaceFolder && !path.isAbsolute(data.path))
                                ? path.join(workspaceFolder.uri.fsPath, data.path)
                                : data.path;
                            const uri = vscode.Uri.file(fsPath);
                            const doc = await vscode.workspace.openTextDocument(uri);
                            await vscode.window.showTextDocument(doc, { preview: true });
                        } catch (e) {
                            vscode.window.showErrorMessage(`Failed to open file: ${data.path}`);
                        }
                    }
                    break;
                case 'getCurrentModel':
                    // 发送当前模型到 UI
                    webviewView.webview.postMessage({ type: 'currentModel', value: this._currentModel });
                    break;
                case 'getModelsConfig':
                    // 发送模型配置到 UI
                    try {
                        const config = this.getModelsConfig();
                        webviewView.webview.postMessage({
                            type: 'modelsConfig',
                            value: config
                        });
                    } catch (error: any) {
                        console.error('[ChatViewProvider] Failed to send models config:', error);
                        webviewView.webview.postMessage({
                            type: 'error',
                            value: `Failed to load models config: ${error.message}`
                        });
                    }
                    break;
                case 'changeModel':
                    // 更新当前模型
                    this._currentModel = data.value;
                    console.log(`[ChatViewProvider] Model changed to: ${this._currentModel}`);
                    // 保存到 workspaceState
                    this._context.workspaceState.update('currentModel', this._currentModel);
                    break;
                case 'gitAction':
                    await this.handleGitAction(data.action);
                    break;
                case 'applyCommitMessage':
                    try {
                        await GitManager.setCommitMessage(data.value);
                        vscode.window.setStatusBarMessage("已更新 Git 提交信息", 3000);
                    } catch (err) {
                        this._view?.webview.postMessage({ type: 'error', value: "无法访问 Git 仓库" });
                    }
                    break;
                case 'performCommit':
                    await this.handlePerformCommit(data.value);
                    break;
                case 'generatePatch':
                    await this.handleGeneratePatch(data.value);
                    break;
            }
        });
    }

    /**
     * 从 UI 触发的聊天执行
     * 
     * 这是 ChatViewProvider 的主要公共 API
     * 未来 AskAI 命令也可以通过事件机制调用此方法
     */
    public async runChatFromUI(userInput: string) {
        console.log(`[ChatViewProvider] Running chat from UI: ${userInput.substring(0, 50)}...`);
        await this.handleAgentTask(userInput);
    }

    private async handleAgentTask(userInput: string) {
        if (!this._view) {
            console.warn('[ChatViewProvider] No webview available');
            return;
        }
        if (!this._runtime) {
            console.warn('[ChatViewProvider] No runtime available');
            return;
        }

        // 保存 view 引用以避免后续 null 检查
        const view = this._view!;

        // 创建新的 AbortController
        this._abortController = new AbortController();
        const signal = this._abortController.signal;

        try {
            console.log('[ChatViewProvider] Starting AI task...');
            this._messages.push({ role: 'user', content: userInput });
            this._saveHistory();

            await GovernanceService.init(this._context.extensionUri.fsPath);

            const originalAdjudicate = GovernanceService.adjudicate;
            (GovernanceService as any).adjudicate = async (action: any) => {
                let details = '';
                let summary = '';
                let engineWarning = '';
                let valueScore = 1.0;

                // 🌟 集成 Trusted-Engine 深度审计 (Day 24 Integration)
                try {
                    const { TrustedGuard, parseUnifiedDiff } = require('trusted-agent-engine');
                    const root = vscode.workspace.workspaceFolders?.[0].uri.fsPath || process.cwd();

                    let files: string[] = [];
                    let diff = '';
                    if (action.type === 'code_diff' && action.payload?.diff) {
                        diff = action.payload.diff;
                        const analysis = parseUnifiedDiff(diff);
                        files = analysis.filesTouched;
                    }

                    const proposal = {
                        id: action.id,
                        timestamp: Date.now(),
                        author: 'vsyuangs-agent',
                        reasoning: action.reasoning,
                        files: files,
                        diff: diff
                    };

                    const decision = await TrustedGuard.evaluate(root, proposal);
                    valueScore = decision.valueScore;

                    if (!decision.allowed) {
                        engineWarning = `\n\n⚠️ 【治理阻断预警】\n${decision.violations.map((v: any) => `• ${v.description}`).join('\n')}`;
                    }
                    if (decision.anomalyReport?.isAnomaly) {
                        engineWarning += `\n🚨 【异常感知】: ${decision.anomalyReport.reasons.join('; ')}`;
                    }
                } catch (e) {
                    console.warn('[Governance] TrustedGuard audit skipped:', e);
                }

                if (action.type === 'tool_call') {
                    const toolName = action.payload.tool_name;
                    const params = action.payload.parameters;
                    // ... (existing tool info logic)
                    if (toolName === 'skill_create' && params) {
                        summary = `📋 Create New Skill: ${params.name || 'Unnamed Skill'}`;
                        details = `\n📝 Description: ${params.description || 'No description'}`;
                        if (details.length > 300) details = details.substring(0, 300) + '...';
                        details += `\n\n💡 Use when: ${params.whenToUse || 'Not specified'}`;
                        if (params.confidence) details += `\n📊 Confidence: ${(params.confidence * 100).toFixed(1)}%`;
                    } else {
                        details = `\nTool: ${toolName}`;
                        const paramsStr = JSON.stringify(params, null, 2);
                        details += `\nParams: ${paramsStr.length > 200 ? paramsStr.substring(0, 200) + '...' : paramsStr}`;
                    }
                } else if (action.type === 'shell_cmd') {
                    details = `\nCommand: ${action.payload.command}`;
                }

                let reasoning = action.reasoning || 'No reason provided';
                if (reasoning.length > 200) reasoning = reasoning.substring(0, 200) + '...';

                const valueLabel = `✨ 项目价值对齐度: ${(valueScore * 100).toFixed(0)}%`;
                const message = `${summary || `Agent wants to execute ${action.type}`}${details}\n\n${valueLabel}${engineWarning}\n\nReason: ${reasoning}`;

                // Auto-approve skill creation (Low risk policy)
                if (action.type === 'tool_call' && action.payload.tool_name === 'skill_create') {
                    return { status: 'approved', by: 'auto-policy', timestamp: Date.now() };
                }

                const choice = await vscode.window.showInformationMessage(
                    message,
                    { modal: true },
                    'Approve (主人授权)', 'Reject (拒绝执行)'
                );

                if (choice === 'Approve (主人授权)') {
                    return { status: 'approved', by: 'human', timestamp: Date.now() };
                } else {
                    return { status: 'rejected', by: 'human', reason: 'User Denied via VS Code UI', timestamp: Date.now() };
                }
            };

            // ✅ 修复：直接传递原始 userInput，让 VSCodeAgentRuntime 和 LLMAdapter 处理上下文
            // VSCodeAgentRuntime.runChat() 会：
            // 1. 调用 resolveUserReferences() 解析 @ 引用
            // 2. 调用 flush() 等待所有异步上下文添加完成
            // 3. 调用 collectContext() 收集其他上下文
            // 4. LLMAdapter.think() 会从 ContextBuffer 构建上下文提示

            const contextManager = this._runtime.getContextManager();

            let fullAiResponse = '';
            await this._runtime.runChat(
                userInput,  // ✅ 传递原始输入，让底层处理上下文
                (chunk: string) => {
                    fullAiResponse += chunk;
                    this._view!.webview.postMessage({ type: 'aiChunk', value: chunk });
                },
                this._currentModel, // 使用当前选中的模型
                () => {
                    // Context initialized callback
                    console.log('[ChatViewProvider] Context initialized, sending to UI...');
                    this.sendContextToUI(contextManager);
                },
                signal // ✅ 传递取消信号
            );

            // 发送上下文信息到UI（但不自动弹出面板）
            this.sendContextToUI(contextManager);

            // 只保存有意义的 AI 回复，过滤空内容
            if (fullAiResponse && fullAiResponse.trim()) {
                this._messages.push({ role: 'assistant', content: fullAiResponse });
            }
            this._saveHistory();
            this._view!.webview.postMessage({ type: 'done' });
            (GovernanceService as any).adjudicate = originalAdjudicate;

        } catch (error: any) {
            // 检查是否是取消操作
            if (signal.aborted) {
                console.log('[ChatViewProvider] Task was aborted');
                this._view!.webview.postMessage({
                    type: 'error',
                    value: 'Generation stopped by user'
                });
            } else {
                this._view!.webview.postMessage({ type: 'error', value: error.message });
            }
        } finally {
            // 清理 AbortController
            this._abortController = null;
        }
    }

    /**
     * 发送上下文信息到UI
     */
    private sendContextToUI(contextManager: any) {
        if (!this._view) return;

        try {
            const contextBuffer = contextManager.getContextBuffer();
            const items = contextBuffer.export();

            const high: any[] = [];
            const medium: any[] = [];
            const low: any[] = [];

            for (const item of items) {
                const confidence = item.importance?.confidence ?? 0.5;
                // 确保 tags 存在
                const tags = item.tags || [];

                // 将 item 转换为 UI 需要的轻量级对象
                const payload = {
                    ...item,
                    tags: tags // 确保传递处理后的 tags
                };

                if (confidence >= 0.8) high.push(payload);
                else if (confidence >= 0.4) medium.push(payload);
                else low.push(payload);
            }

            // 发送分组后的上下文数据到webview
            this._view.webview.postMessage({
                type: 'contextUpdate',
                value: [...high, ...medium, ...low], // 暂时保持扁平列表以兼容现有UI，后续可升级为分组显示
                groups: { high, medium, low }, // 同时发送分组数据供未来使用
                count: items.length // 发送总数到UI
            });

            console.log(`[ChatViewProvider] Sent context: High(${high.length}) Med(${medium.length}) Low(${low.length}) Total(${items.length})`);
        } catch (error) {
            console.error('[ChatViewProvider] Error sending context to UI:', error);
        }
    }

    private getFileLanguage(filePath: string): string {
        const ext = filePath.split('.').pop()?.toLowerCase() || '';
        const langMap: Record<string, string> = {
            'js': 'javascript',
            'ts': 'typescript',
            'tsx': 'typescript',
            'jsx': 'javascript',
            'py': 'python',
            'java': 'java',
            'go': 'go',
            'rs': 'rust',
            'cpp': 'cpp',
            'c': 'c',
            'h': 'c',
            'vue': 'vue',
            'yaml': 'yaml',
            'yml': 'yaml',
            'json': 'json',
            'md': 'markdown',
            'html': 'html',
            'css': 'css',
            'sh': 'bash',
            'bash': 'bash'
        };
        return langMap[ext] || 'text';
    }

    private async handleApplyDiff(diffData: any) {
        if (!this._view) return;

        try {
            if (diffData.type === 'unified') {
                console.log('[ChatViewProvider] Applying unified diff with graded applier...');

                // 转换为标准 unified diff 格式
                const diffText = this.convertToUnifiedDiffFormat(diffData);
                console.log(`[ChatViewProvider] Diff text (${diffText.length} chars):`, diffText.substring(0, 200) + '...');

                // 获取原始代码（用于 Phase 1 安全扫描）
                const originalCode = await this.getOriginalCodeForDiff(diffData);

                // 解析 diff
                const parseResult = DiffParser.parse(diffText);

                if (!parseResult.success) {
                    console.warn('[ChatViewProvider] Diff parsing failed:', parseResult.message);
                    throw new Error(`Diff 解析失败: ${parseResult.message}`);
                }

                console.log('[ChatViewProvider] Diff parsed successfully:', {
                    fileCount: parseResult.stats.fileCount,
                    hunkCount: parseResult.stats.hunkCount,
                    totalAdded: parseResult.stats.totalAdded,
                    totalRemoved: parseResult.stats.totalRemoved
                });

                // 使用新的 DiffGradedApplier 应用 diff
                const applier = getDiffGradedApplier();
                const startTime = Date.now();
                const applyResult = await applier.applyWithGrades(diffText, {
                    enableLevel1: true,
                    enableLevel2: true,
                    enableLevel3: true,
                    confirmBeforeFullOverride: true
                });
                const duration = Date.now() - startTime;

                if (!applyResult.success) {
                    console.error('[ChatViewProvider] All grades failed:', applyResult.error);
                    throw new Error(`补丁应用失败（所有级别都失败了）: ${applyResult.message}`);
                }

                console.log('[ChatViewProvider] Diff applied successfully:', {
                    usedLevel: applyResult.usedLevel,
                    changedFiles: applyResult.changedFiles,
                    duration
                });

                // 使用 SecurityScanCoordinator 运行三层安全扫描
                const coordinator = getSecurityScanCoordinator();
                const report = await coordinator.runFullScanPipeline(
                    originalCode,
                    parseResult,
                    applyResult.changedFiles
                );

                console.log('[ChatViewProvider] Security scan completed:', {
                    overallStatus: report.overallStatus,
                    criticalIssues: report.criticalIssueCount,
                    errorIssues: report.errorIssueCount,
                    warningIssues: report.warningIssueCount,
                    totalDuration: report.totalDuration
                });

                // 根据安全扫描结果采取行动
                if (report.overallStatus === 'failed') {
                    const choice = await vscode.window.showWarningMessage(
                        `安全扫描发现 ${report.criticalIssueCount + report.errorIssueCount} 个严重问题！\n建议查看 Problems 面板。是否继续？`,
                        '继续（不推荐）', '取消'
                    );

                    if (choice !== '继续（不推荐）') {
                        // 回滚更改
                        vscode.window.showWarningMessage('已取消应用，更改已回滚');
                        return;
                    }
                } else if (report.overallStatus === 'warning') {
                    vscode.window.showInformationMessage(
                        `✓ Diff 已应用（${applyResult.usedLevel}）\n⚠️ 发现 ${report.warningIssueCount} 个警告，请查看 Problems 面板`
                    );
                } else {
                    vscode.window.showInformationMessage(
                        `✓ Diff 已应用（${applyResult.usedLevel}）\n✅ 安全扫描通过`
                    );
                }

                // 发送成功消息到 UI
                this._view.webview.postMessage({ type: 'diffApplied' });

                // 记录降级信息到 UI
                if (applyResult.usedLevel && applyResult.usedLevel !== 'intelligent_fix') {
                    const levelNames: Record<string, string> = {
                        'fuzzy_location': 'Level 2',
                        'full_override': 'Level 3'
                    };
                    this._view.webview.postMessage({
                        type: 'info',
                        value: `使用了 ${levelNames[applyResult.usedLevel] || applyResult.usedLevel}（降级）`
                    });
                }

            } else if (diffData.type === 'simple') {
                await this.applySimpleDiff(diffData);
                this._view.webview.postMessage({ type: 'diffApplied' });
                vscode.window.showInformationMessage('✓ Diff applied successfully!');
            } else {
                throw new Error('Unknown diff format');
            }
        } catch (error: any) {
            console.error('[ChatViewProvider] Diff application failed:', error);
            this._view.webview.postMessage({ type: 'diffError', value: error.message });
            vscode.window.showErrorMessage(`Failed to apply diff: ${error.message}`);
        }
    }

    /**
     * 获取 diff 涉及的原始代码
     */
    private async getOriginalCodeForDiff(diffData: any): Promise<string> {
        try {
            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
            if (!workspaceFolder) {
                return '';
            }

            // 获取第一个文件的原始内容
            const firstFile = diffData.files[0];
            if (!firstFile) {
                return '';
            }

            const filePath = path.join(
                workspaceFolder.uri.fsPath,
                firstFile.oldFile || firstFile.newFile
            );

            const uri = vscode.Uri.file(filePath);
            const document = await vscode.workspace.openTextDocument(uri);
            return document.getText();
        } catch (error) {
            console.warn('[ChatViewProvider] Failed to get original code:', error);
            return '';
        }
    }

    /**
     * 将diffData转换为标准的unified diff格式
     */
    private convertToUnifiedDiffFormat(diffData: any): string {
        let diffString = '';

        for (const file of diffData.files) {
            diffString += `--- a/${file.oldFile || 'original'}\n`;
            diffString += `+++ b/${file.newFile || 'modified'}\n`;

            for (const hunk of file.hunks) {
                diffString += `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`;

                for (const line of hunk.lines) {
                    if (line.startsWith('+')) {
                        diffString += line + '\n';
                    } else if (line.startsWith('-')) {
                        diffString += line + '\n';
                    } else {
                        diffString += ` ${line}\n`;
                    }
                }
            }
        }

        return diffString;
    }

    /**
     * 请求AI提供完整代码
     */
    private async requestFullCodeFromAI() {
        // 这里可以实现向AI请求完整代码的逻辑
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('请先打开一个文件');
            return;
        }

        const document = editor.document;
        const fileName = path.basename(document.fileName);

        // 向AI发送请求，要求提供完整的文件内容
        const prompt = `由于补丁应用失败，我需要您提供完整的 ${fileName} 文件内容。请直接输出完整的代码，不要包含任何解释。`;

        // 发送消息到UI，触发AI请求
        this._view?.webview.postMessage({
            type: 'appendMessage',
            value: { role: 'user', content: prompt }
        });

        await this.handleAgentTask(prompt);
    }

    /**
     * 处理全量内容替换
     */
    private async handleApplyFullRewrite(filePath: string, content: string) {
        try {
            let actualFilePath = filePath;

            // 如果没有提供路径，使用当前活动文件
            if (!actualFilePath) {
                const editor = vscode.window.activeTextEditor;
                if (!editor) {
                    throw new Error('没有打开的文件可供替换，请先打开一个文件');
                }
                actualFilePath = path.relative(
                    vscode.workspace.workspaceFolders?.[0].uri.fsPath || '',
                    editor.document.uri.fsPath
                );
            }

            // 使用新的DiffApplier的全量替换功能
            const result = await DiffApplier.applyFullContent(actualFilePath, content);

            if (result.success) {
                vscode.window.showInformationMessage(`已成功替换文件: ${actualFilePath}`);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('[ChatViewProvider] Full rewrite failed:', error);
            vscode.window.showErrorMessage(`替换失败: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    private async applyUnifiedDiff(file: any) {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            throw new Error('No workspace folder open');
        }

        const filePath = path.join(workspaceFolder.uri.fsPath, file.newFile || file.oldFile);
        const fileUri = vscode.Uri.file(filePath);

        let document: vscode.TextDocument;
        try {
            document = await vscode.workspace.openTextDocument(fileUri);
        } catch {
            const edit = new vscode.WorkspaceEdit();
            edit.createFile(fileUri, { ignoreIfExists: true });
            await vscode.workspace.applyEdit(edit);
            document = await vscode.workspace.openTextDocument(fileUri);
        }

        const edit = new vscode.WorkspaceEdit();
        for (const hunk of file.hunks) {
            let startLine = hunk.oldStart - 1;
            if (startLine < 0) startLine = 0;
            const endLine = startLine + hunk.oldLines;

            const newLines: string[] = [];
            for (const line of hunk.lines) {
                if (line.startsWith('+')) {
                    newLines.push(line.substring(1));
                } else if (!line.startsWith('-')) {
                    newLines.push(line.startsWith(' ') ? line.substring(1) : line);
                }
            }

            const range = new vscode.Range(startLine, 0, endLine, 0);
            edit.replace(fileUri, range, newLines.join('\n') + '\n');
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();
        await vscode.window.showTextDocument(document);
    }

    private async applySimpleDiff(diffData: any) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            throw new Error('No active editor. Please open a file first.');
        }

        const document = editor.document;
        const edit = new vscode.WorkspaceEdit();
        const fullText = document.getText();

        if (diffData.removed.length > 0) {
            const toRemove = diffData.removed.join('\n');
            const index = fullText.indexOf(toRemove);

            if (index !== -1) {
                const startPos = document.positionAt(index);
                const endPos = document.positionAt(index + toRemove.length);
                const range = new vscode.Range(startPos, endPos);

                if (diffData.added.length > 0) {
                    edit.replace(document.uri, range, diffData.added.join('\n'));
                } else {
                    edit.delete(document.uri, range);
                }
            } else {
                throw new Error('Could not find the content to replace in the active file');
            }
        } else if (diffData.added.length > 0) {
            edit.insert(document.uri, editor.selection.active, diffData.added.join('\n'));
        }

        await vscode.workspace.applyEdit(edit);
        await document.save();
    }

    /**
     * 辅助方法：尝试根据路径将文件加载到上下文
     */
    private async autoLoadFileToContext(relativePath: string) {
        try {
            const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
            if (!workspaceFolder) return;

            // 尝试解析绝对路径
            const fullPath = path.isAbsolute(relativePath)
                ? relativePath
                : path.join(workspaceFolder.uri.fsPath, relativePath);

            if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isFile()) {
                const content = fs.readFileSync(fullPath, 'utf-8');

                if (!this._runtime) this._runtime = new VSCodeAgentRuntime();
                const contextManager = this._runtime.getContextManager();

                const relativePathForAlias = workspaceFolder ? path.relative(workspaceFolder.uri.fsPath, fullPath) : path.basename(fullPath);

                await contextManager.addContextItemAsync({
                    type: 'file',
                    path: fullPath,
                    content: content,
                    semantic: 'source_code',
                    alias: relativePathForAlias,
                    importance: {
                        id: path.basename(fullPath) + '-' + Date.now(), // 生成唯一ID
                        path: fullPath,
                        type: 'file',
                        useCount: 1,
                        successCount: 1,
                        failureCount: 0,
                        lastUsed: Date.now(),
                        createdAt: Date.now(),
                        confidence: 1.0 // 显式引用给最高权重
                    }
                });
                console.log(`[ChatViewProvider] Auto-loaded @ reference: ${relativePath}`);
            }
        } catch (e) {
            console.warn(`[ChatViewProvider] Failed to auto-load @ reference: ${relativePath}`, e);
        }
    }

    public async clear() {
        this._messages = [];
        await this._saveHistory();
        await chatHistoryStorage.clearChatHistory();
        this._view?.webview.postMessage({ type: 'clear' });
    }

    private async loadHistory() {
        // 优先尝试从文件系统加载
        try {
            const fileHistory = await chatHistoryStorage.loadChatHistory();
            if (fileHistory && fileHistory.length > 0) {
                // 将 AIRequestMessage 转换为内部格式
                this._messages = fileHistory.map(msg => ({
                    role: msg.role,
                    content: msg.content
                }));
                console.log(`[ChatViewProvider] Loaded ${this._messages.length} messages from file storage`);
                return;
            }
        } catch (e) {
            console.warn('[ChatViewProvider] Failed to load from file storage, falling back to workspaceState:', e);
        }

        // 回退到 workspaceState
        this._messages = this._context.workspaceState.get<{ role: string, content: string }[]>('chatHistory', []);
        console.log(`[ChatViewProvider] Restored ${this._messages.length} messages from workspaceState`);
    }

    private _saveHistory() {
        // 保存到文件系统（持久化）
        const historyForFile = this._messages.map(msg => ({
            role: msg.role as 'system' | 'user' | 'assistant',
            content: msg.content
        }));
        chatHistoryStorage.saveChatHistory(historyForFile);

        // 同时保存到 workspaceState（作为备份）
        this._context.workspaceState.update('chatHistory', this._messages);
    }

    private formatTimestamp(date: Date): string {
        const pad = (n: number) => String(n).padStart(2, '0');
        return [
            date.getFullYear(),
            pad(date.getMonth() + 1),
            pad(date.getDate()),
            pad(date.getHours()),
            pad(date.getMinutes()),
            pad(date.getSeconds()),
        ].join('');
    }

    private async exportChatHistory() {
        if (this._messages.length === 0) {
            vscode.window.showWarningMessage('No chat history to export.');
            return;
        }

        const now = new Date();
        const timestamp = this.formatTimestamp(now);
        const filename = `yuangs_chat_${timestamp}.md`;

        // 优化：处理无工作区或多工作区的边界情况
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        const defaultUri = workspaceFolder
            ? vscode.Uri.file(path.join(workspaceFolder.uri.fsPath, filename))
            : undefined;

        const uri = await vscode.window.showSaveDialog({
            defaultUri,
            filters: { 'Markdown': ['md'] },
            title: 'Export Chat History'
        });

        if (uri) {
            try {
                const mdContent = this._messages.map(m => {
                    const role = m.role === 'user' ? '### 👤 User' : '### 🤖 Assistant';
                    return `${role}\n\n${m.content}\n\n---\n`;
                }).join('\n');

                await vscode.workspace.fs.writeFile(uri, Buffer.from(mdContent));
                vscode.window.showInformationMessage(`Chat history exported to ${path.basename(uri.fsPath)}`);
            } catch (e: any) {
                vscode.window.showErrorMessage(`Failed to export chat history: ${e.message}`);
            }
        }
    }

    /**
     * 处理提交请求 (Service Layer 逻辑下沉)
     */
    private async handlePerformCommit(message: string) {
        try {
            await GitManager.commit(message);

            // 1. 通知前端成功
            this._view?.webview.postMessage({ type: 'success', value: 'Git Commit 成功' });

            // 2. VS Code 原生提示
            vscode.window.showInformationMessage(`✅ 代码已提交: ${message.trim().split('\n')[0]}`);

            // 3. 清理状态 (清空输入框)
            await GitManager.setCommitMessage('');

        } catch (error: any) {
            console.error('[ChatViewProvider] Commit failed:', error);

            // 4. 错误分级处理 (安全 & UX)
            const errorMessage = error instanceof Error ? error.message : '未知错误';

            // 发送给前端的错误消息 (用于 Toast 或 状态栏)
            this._view?.webview.postMessage({
                type: 'error',
                value: errorMessage
            });

            // VS Code 弹窗提示 (对于严重错误)
            if (errorMessage.includes('暂存区为空') || errorMessage.includes('Git 仓库')) {
                vscode.window.showWarningMessage(errorMessage);
            } else {
                vscode.window.showErrorMessage(`提交中断: ${errorMessage}`);
            }
        }
    }

    /**
     * 处理生成 Patch 请求
     */
    private async handleGeneratePatch(type: 'staged' | 'unstaged' | 'last') {
        try {
            const patch = await GitManager.generatePatch(type);

            // 发送 patch 内容到前端，显示为 AI 消息
            const typeNames = {
                'staged': '暂存区 Patch',
                'unstaged': '工作区 Patch',
                'last': '最后一次提交 Patch'
            };

            const message = `# ${typeNames[type]}\n\n\`\`\`diff\n${patch}\n\`\`\``;

            this._view?.webview.postMessage({
                type: 'appendMessage',
                value: {
                    role: 'assistant',
                    content: message
                }
            });

            vscode.window.showInformationMessage(`✅ ${typeNames[type]} 生成成功`);

        } catch (error: any) {
            console.error('[ChatViewProvider] Generate patch failed:', error);

            const errorMessage = error instanceof Error ? error.message : '未知错误';

            this._view?.webview.postMessage({
                type: 'error',
                value: errorMessage
            });

            vscode.window.showErrorMessage(`生成 patch 失败: ${errorMessage}`);
        }
    }

    private async handleGitAction(action: 'commit' | 'review') {
        // 获取暂存区 Diff
        const changes = await GitManager.getStagedDiff();
        if (!changes) {
            this._view?.webview.postMessage({ type: 'error', value: "未检测到暂存区变更或 Git 仓库不可用" });
            return;
        }


        // 构建提示词
        const prompt = action === 'commit'
            ? `你是一位资深开发者。请根据以下代码变更生成一条简洁、符合 Conventional Commits 规范的提交消息。只需返回消息内容本身：\n\n${changes}`
            : `你是一位代码审查专家。请对以下变更进行语义级别的审查，指出潜在风险、性能问题和最佳实践建议：\n\n${changes}`;

        // 发送给 AI 处理
        await this.handleAgentTask(prompt);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'dist', 'webview', 'marked.min.js'));
        const htmlPath = path.join(this._context.extensionPath, 'dist', 'webview', 'sidebar.html');
        let htmlSnippet = fs.readFileSync(htmlPath, 'utf8');

        // 生成随机 nonce 用于 CSP
        const nonce = getNonce();

        // 注入 CSP 和本地脚本路径
        htmlSnippet = htmlSnippet.replace(
            /<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>/,
            `<script nonce="${nonce}" src="${scriptUri}"></script>`
        );

        // 注入 CSP Meta 标签
        const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:; connect-src *;">`;
        htmlSnippet = htmlSnippet.replace('<head>', `<head>\n    ${csp}`);

        // 为所有的 <script> 标签注入 nonce
        htmlSnippet = htmlSnippet.replace(/<script>/g, `<script nonce="${nonce}">`);

        return htmlSnippet;
    }

    /**
     * 清理日志UI回调
     */
    private cleanupLogUICallback(): void {
        try {
            const logger = getLogger();
            if (this._uiCallback) {
                logger.removeUICallback(this._uiCallback);
                this._uiCallback = undefined;
            }
            logger.disableUIOutput();
        } catch (error) {
            console.error('[ChatViewProvider] Failed to cleanup log UI callback:', error);
        }
    }

    /**
     * 清理资源
     */
    dispose(): void {
        this.cleanupLogUICallback();
        this._abortController = null;
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567899';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
