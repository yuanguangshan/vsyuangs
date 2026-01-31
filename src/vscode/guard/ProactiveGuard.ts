/**
 * Proactive Guard - 主动防御模块
 * 
 * 在文件保存时自动进行安全扫描，提供实时防护
 */

import * as vscode from 'vscode';
import { getQuickSecurityScanner, QuickSecurityScanner } from '../../core/quickSecurityScanner';
import { ScanConfig, DEFAULT_SCAN_CONFIG, SecurityIssue, toDiagnosticSeverity } from '../../core/securityTypes';
import { DiffSourceFactory } from '../../core/diffSource';

/**
 * Proactive Guard 配置
 */
interface ProactiveGuardConfig extends ScanConfig {
  /** 是否启用 Modal 弹窗（用于 Critical 错误） */
  enableModalForCritical: boolean;
  
  /** 是否在状态栏显示扫描状态 */
  showStatusInStatusBar: boolean;
}

/**
 * Proactive Guard 状态
 */
interface GuardState {
  /** 扫描进行中的文件 */
  scanningFiles: Set<string>;
  
  /** 上次扫描结果 */
  lastScanResults: Map<string, SecurityIssue[]>;
  
  /** 定时器映射（用于防抖） */
  timers: Map<string, NodeJS.Timeout>;
  
  /** 是否正在显示 Modal 弹窗（互斥锁） */
  isShowingModal: boolean;
}

/**
 * Proactive Guard
 * 
 * 核心功能：
 * 1. 监听文件保存事件
 * 2. 防抖处理（避免高频保存导致的性能问题）
 * 3. 快速安全扫描（< 50ms）
 * 4. 根据严重程度显示不同提示
 * 5. 自动更新诊断信息
 */
export class ProactiveGuard {
  private static instance: ProactiveGuard;
  private scanner: QuickSecurityScanner;
  private config: ProactiveGuardConfig;
  private state: GuardState;
  private diagnosticCollection: vscode.DiagnosticCollection;
  private statusBarItem: vscode.StatusBarItem | null = null;

  private constructor() {
    this.scanner = getQuickSecurityScanner();
    this.config = {
      ...DEFAULT_SCAN_CONFIG,
      enableModalForCritical: true,
      showStatusInStatusBar: true
    };
    this.state = {
      scanningFiles: new Set(),
      lastScanResults: new Map(),
      timers: new Map(),
      isShowingModal: false
    };
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('vsyuangs-proactive');
  }

  /**
   * 获取单例实例
   */
  static getInstance(): ProactiveGuard {
    if (!ProactiveGuard.instance) {
      ProactiveGuard.instance = new ProactiveGuard();
    }
    return ProactiveGuard.instance;
  }

  /**
   * 初始化（在 activate 中调用）
   */
  initialize(context: vscode.ExtensionContext): void {
    // 1. 监听文件保存事件
    context.subscriptions.push(
      vscode.workspace.onDidSaveTextDocument(doc => this.onDocumentSave(doc))
    );

    // 2. 监听文档关闭事件，清理定时器和诊断
    context.subscriptions.push(
      vscode.workspace.onDidCloseTextDocument(doc => this.onDocumentClose(doc))
    );

    // 3. 注册配置变更监听
    context.subscriptions.push(
      vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('vsyuangs.proactiveScan')) {
          this.updateConfig();
        }
      })
    );

    // 4. 创建状态栏项（如果启用）
    if (this.config.showStatusInStatusBar) {
      this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
      this.statusBarItem.command = 'vsyuangs.showScanStats';
      this.statusBarItem.show();
      context.subscriptions.push(this.statusBarItem);
    }

    // 5. 注册命令
    this.registerCommands(context);

    console.log('[ProactiveGuard] Initialized');
  }

  /**
   * 文档保存事件处理
   */
  private onDocumentSave(doc: vscode.TextDocument): void {
    // 检查是否启用
    if (!this.config.enabled) return;

    // 检查语言白名单
    if (this.config.languageWhitelist.length > 0) {
      if (!this.config.languageWhitelist.includes(doc.languageId)) {
        return;
      }
    }

    // 检查文件大小
    const fileSize = doc.getText().length;
    if (fileSize < this.config.minFileSize || fileSize > this.config.maxFileSize) {
      return;
    }

    // 防抖处理
    const uri = doc.uri.toString();
    const existingTimer = this.state.timers.get(uri);
    
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const timer = setTimeout(() => {
      this.performScan(doc);
      this.state.timers.delete(uri);
    }, this.config.delay);

    this.state.timers.set(uri, timer);
  }

  /**
   * 执行扫描
   * 
   * 注意：虽然实现了 DiffSourceFactory，但 ProactiveGuard 故意选择全量扫描
   * 原因：安全扫描（Secrets/Eval）需要检查存量代码，不能只看增量
   * 
   * 未来优化：
   * - 可以在配置中增加 "scanOnlyDiff" 选项
   * - 增量 Code Review 功能可以复用 DiffSource
   */
  private async performScan(doc: vscode.TextDocument): Promise<void> {
    const uri = doc.uri.toString();
    
    // 防止重复扫描
    if (this.state.scanningFiles.has(uri)) {
      return;
    }

    try {
      this.state.scanningFiles.add(uri);
      this.updateStatusBar('扫描中...');

      // 使用 DiffSourceFactory 获取代码（保持 API 一致性）
      // 注意：目前全量扫描所有内容，因为安全检查需要检查存量代码
      const diffResult = await DiffSourceFactory.tryGetDiff(doc);
      const code = diffResult ? doc.getText() : doc.getText(); // 如果获取失败，降级到全量
      
      // 传递 document 参数以使用 VS Code API 精确计算行列号（兼容 CRLF/LF）
      const result = await this.scanner.quickScan(code, doc.fileName, doc);

      // 保存结果
      this.state.lastScanResults.set(uri, result.issues);

      // 更新诊断信息
      this.updateDiagnostics(doc.uri, result.issues);

      // 处理 Critical 错误
      if (result.hasCriticalError && this.config.enableModalForCritical) {
        this.handleCriticalError(doc, result.issues);
      }

      // 更新状态栏
      const issueCount = result.issues.filter(i => i.severity !== 'INFO').length;
      this.updateStatusBar(issueCount > 0 ? `发现 ${issueCount} 个问题` : '扫描完成', issueCount > 0);

      console.log(`[ProactiveGuard] Scan completed for ${doc.fileName}: ${result.duration}ms, ${result.issues.length} issues`);
    } catch (error) {
      console.error(`[ProactiveGuard] Scan failed for ${doc.fileName}:`, error);
      this.updateStatusBar('扫描失败');
    } finally {
      this.state.scanningFiles.delete(uri);
    }
  }

  /**
   * 更新诊断信息
   */
  private updateDiagnostics(uri: vscode.Uri, issues: SecurityIssue[]): void {
    const diagnostics: vscode.Diagnostic[] = [];

    for (const issue of issues) {
      if (issue.line === undefined) continue;

      const range = new vscode.Range(
        new vscode.Position(issue.line, issue.column || 0),
        new vscode.Position(issue.line, (issue.column || 0) + 50)
      );

      const diagnostic = new vscode.Diagnostic(
        range,
        `[${issue.type}] ${issue.message}${issue.suggestion ? `\n建议: ${issue.suggestion}` : ''}`,
        toDiagnosticSeverity(issue.severity)
      );

      diagnostic.source = 'vsyuangs-proactive';
      diagnostic.code = issue.ruleId;
      // 使用 diagnostic.data 存储元数据（VS Code 官方推荐）
      (diagnostic as any).data = {
        ruleId: issue.ruleId,
        issueType: issue.type,
        severity: issue.severity,
        suggestion: issue.suggestion
      };
      diagnostics.push(diagnostic);
    }

    this.diagnosticCollection.set(uri, diagnostics.length > 0 ? diagnostics : undefined);
  }

  /**
   * 处理 Critical 错误
   * 
   * 防止 Modal Spam（弹窗轰炸）：
   * 如果已有弹窗在显示，降级为普通消息或状态栏提示
   */
  private async handleCriticalError(doc: vscode.TextDocument, issues: SecurityIssue[]): Promise<void> {
    const criticalIssues = issues.filter(i => i.severity === 'CRITICAL');

    // 互斥锁：如果已有弹窗在显示，降级为状态栏提示
    if (this.state.isShowingModal) {
      this.updateStatusBar(`🚨 ${doc.fileName} 检测到 ${criticalIssues.length} 个高危风险`, true);
      return;
    }

    // 设置互斥锁
    this.state.isShowingModal = true;

    try {
      const selection = await vscode.window.showErrorMessage(
        `🚨 vsyuangs 检测到 ${criticalIssues.length} 个高危安全风险！`,
        { modal: true },
        '查看详情',
        '忽略警告'
      );

      if (selection === '查看详情') {
        // 跳转到第一个问题
        const firstIssue = criticalIssues[0];
        if (firstIssue.line !== undefined) {
          const editor = vscode.window.activeTextEditor;
          if (editor && editor.document.uri.toString() === doc.uri.toString()) {
            const range = new vscode.Range(firstIssue.line, 0, firstIssue.line, 0);
            editor.revealRange(range, vscode.TextEditorRevealType.InCenter);
          }
        }
      }
    } finally {
      // 释放互斥锁
      this.state.isShowingModal = false;
    }
  }

  /**
   * 文档关闭事件处理
   */
  private onDocumentClose(doc: vscode.TextDocument): void {
    const uri = doc.uri.toString();

    // 清理定时器
    const timer = this.state.timers.get(uri);
    if (timer) {
      clearTimeout(timer);
      this.state.timers.delete(uri);
    }

    // 清理扫描结果
    this.state.lastScanResults.delete(uri);

    // 清理诊断信息
    this.diagnosticCollection.delete(doc.uri);
  }

  /**
   * 更新状态栏
   */
  private updateStatusBar(text: string, isError: boolean = false): void {
    if (this.statusBarItem) {
      this.statusBarItem.text = `$(shield) ${text}`;
      this.statusBarItem.color = isError ? new vscode.ThemeColor('errorForeground') : undefined;
    }
  }

  /**
   * 更新配置
   */
  private updateConfig(): void {
    const config = vscode.workspace.getConfiguration('vsyuangs.proactiveScan');

    this.config.enabled = config.get('enabled', true);
    this.config.delay = config.get('delay', 500);
    this.config.languageWhitelist = config.get('languageWhitelist', []);
    this.config.minFileSize = config.get('minFileSize', 100);
    this.config.maxFileSize = config.get('maxFileSize', 1024 * 1024);
    this.config.enableModalForCritical = config.get('enableModalForCritical', true);
  }

  /**
   * 注册命令
   */
  private registerCommands(context: vscode.ExtensionContext): void {
    // 显示扫描统计
    context.subscriptions.push(
      vscode.commands.registerCommand('vsyuangs.showScanStats', () => {
        const stats = this.scanner.getPerformanceStats();
        const message = `
扫描统计:
- 总扫描次数: ${stats.totalScans}
- 平均耗时: ${stats.averageDuration.toFixed(2)}ms
- 最大耗时: ${stats.maxDuration}ms
- 平均发现的问题: ${stats.averageIssuesFound.toFixed(2)}
        `.trim();
        
        vscode.window.showInformationMessage(message);
      })
    );

    // 清空扫描历史
    context.subscriptions.push(
      vscode.commands.registerCommand('vsyuangs.clearScanHistory', () => {
        this.scanner.clearPerformanceHistory();
        vscode.window.showInformationMessage('扫描历史已清空');
      })
    );

    // 手动触发扫描
    context.subscriptions.push(
      vscode.commands.registerCommand('vsyuangs.triggerManualScan', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
          await this.performScan(editor.document);
        }
      })
    );
  }

  /**
   * 获取当前配置
   */
  getConfig(): Readonly<ProactiveGuardConfig> {
    return { ...this.config };
  }

  /**
   * 获取扫描性能统计
   */
  getPerformanceStats() {
    return this.scanner.getPerformanceStats();
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.diagnosticCollection.dispose();
    if (this.statusBarItem) {
      this.statusBarItem.dispose();
    }
    
    // 清理所有定时器
    for (const timer of this.state.timers.values()) {
      clearTimeout(timer);
    }
    this.state.timers.clear();
  }
}