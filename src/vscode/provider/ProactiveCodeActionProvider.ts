/**
 * Proactive Code Action Provider
 * 
 * 功能：
 * - 为 ProactiveGuard 发现的安全问题提供快速修复操作
 * - 实现"一键加入偏好黑名单"功能
 * - 集成 PreferenceMemory 记录用户反馈
 * 
 * 关键特性：
 * - 按 Severity 区分操作（CRITICAL 不能被忽略）
 * - 提供"忽略此次"、"不再提示此类建议"等选项
 * - 支持撤回操作
 */

import * as vscode from 'vscode';
import {
  SecurityIssue,
  SecuritySeverity,
  IssueType,
  DEFAULT_SCAN_CONFIG
} from '../../core/securityTypes';
import { getPreferenceMemory } from '../../core/preferenceMemory';

/**
 * Proactive Code Action
 */
export class ProactiveCodeActionProvider implements vscode.CodeActionProvider {
  public preferenceMemory: any;
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
    this.preferenceMemory = getPreferenceMemory(context);
  }

  /**
   * 提供 Code Actions
   */
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range,
    context: vscode.CodeActionContext,
    token: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.CodeAction[]> {
    const actions: vscode.CodeAction[] = [];

    // 只处理 vsyuangs-proactive 来源的 diagnostics
    const proactiveDiagnostics = context.diagnostics.filter(
      d => d.source === 'vsyuangs-proactive'
    );

    if (proactiveDiagnostics.length === 0) {
      return actions;
    }

    // 为每个 diagnostic 创建操作
    for (const diagnostic of proactiveDiagnostics) {
      const issue = this.extractSecurityIssue(diagnostic);
      
      if (!issue) {
        continue;
      }

      // 1. 修复建议（如果有）
      if (issue.suggestion) {
        const fixAction = this.createFixAction(issue, diagnostic);
        actions.push(fixAction);
      }

      // 2. 查看详情
      const detailsAction = this.createDetailsAction(issue);
      actions.push(detailsAction);

      // 3. 忽略此次（不影响未来建议）
      const ignoreOnceAction = this.createIgnoreOnceAction(issue);
      actions.push(ignoreOnceAction);

      // 4. 不再提示此类建议（加入黑名单）- 仅非 CRITICAL
      if (issue.severity !== SecuritySeverity.CRITICAL) {
        const blacklistAction = this.createBlacklistAction(issue);
        actions.push(blacklistAction);
      }

      // 5. 撤回（如果已加入黑名单）
      const undoAction = this.createUndoBlacklistAction(issue);
      if (undoAction) {
        actions.push(undoAction);
      }
    }

    return actions;
  }

  /**
   * 从 diagnostic 提取 SecurityIssue
   * 
   * 从 diagnostic.data 读取元数据（使用类型断言兼容 VS Code API）
   */
  private extractSecurityIssue(diagnostic: vscode.Diagnostic): SecurityIssue | null {
    const data = (diagnostic as any).data;

    if (!data || !data.ruleId || !data.issueType || !data.severity) {
      return null;
    }

    return {
      type: data.issueType,
      severity: data.severity,
      message: diagnostic.message,
      ruleId: data.ruleId,
      line: diagnostic.range.start.line,
      column: diagnostic.range.start.character,
      suggestion: data.suggestion
    };
  }

  /**
   * 创建修复建议操作
   */
  private createFixAction(
    issue: SecurityIssue,
    diagnostic: vscode.Diagnostic
  ): vscode.CodeAction {
    const action = new vscode.CodeAction(
      `应用修复: ${issue.ruleId}`,
      vscode.CodeActionKind.QuickFix
    );

    action.diagnostics = [diagnostic];
    action.isPreferred = true;

    // 这里可以根据 issue.type 和 ruleId 提供具体的修复方案
    // 目前只显示一个提示
    action.command = {
      command: 'vsyuangs.proactive.showFixDetails',
      title: '查看修复详情',
      arguments: [issue]
    };

    return action;
  }

  /**
   * 创建查看详情操作
   */
  private createDetailsAction(issue: SecurityIssue): vscode.CodeAction {
    const action = new vscode.CodeAction(
      '查看详情',
      vscode.CodeActionKind.QuickFix
    );

    action.command = {
      command: 'vsyuangs.proactive.showIssueDetails',
      title: '查看详情',
      arguments: [issue]
    };

    return action;
  }

  /**
   * 创建忽略此次操作
   */
  private createIgnoreOnceAction(issue: SecurityIssue): vscode.CodeAction {
    const action = new vscode.CodeAction(
      '忽略此次',
      vscode.CodeActionKind.QuickFix
    );

    action.command = {
      command: 'vsyuangs.proactive.ignoreOnce',
      title: '忽略此次',
      arguments: [issue]
    };

    return action;
  }

  /**
   * 创建加入黑名单操作
   */
  private createBlacklistAction(issue: SecurityIssue): vscode.CodeAction {
    const typeName = issue.type.replace(/_/g, ' ');
    const action = new vscode.CodeAction(
      `不再提示此类建议 (${typeName})`,
      vscode.CodeActionKind.QuickFix
    );

    action.command = {
      command: 'vsyuangs.proactive.addToBlacklist',
      title: '不再提示此类建议',
      arguments: [issue]
    };

    return action;
  }

  /**
   * 创建撤回黑名单操作
   */
  private createUndoBlacklistAction(issue: SecurityIssue): vscode.CodeAction | null {
    // 检查该类型是否已在黑名单中
    // 这里需要异步调用 getBlacklist，但 provideCodeActions 是同步的
    // 所以我们简化：总是显示撤回选项，让命令处理时检查
    
    const action = new vscode.CodeAction(
      '撤回黑名单',
      vscode.CodeActionKind.QuickFix
    );

    action.command = {
      command: 'vsyuangs.proactive.removeFromBlacklist',
      title: '撤回黑名单',
      arguments: [issue]
    };

    return action;
  }

  /**
   * 记录用户反馈
   */
  async recordFeedback(
    issueType: IssueType,
    action: 'applied' | 'ignored' | 'dismissed'
  ): Promise<void> {
    await this.preferenceMemory.recordFeedback(issueType, action);
  }

  /**
   * 添加到黑名单
   */
  async addToBlacklist(issueType: IssueType): Promise<void> {
    // 记录 3 次 ignore，确保达到阈值
    for (let i = 0; i < 3; i++) {
      await this.preferenceMemory.recordFeedback(issueType, 'ignored');
    }

    vscode.window.showInformationMessage(
      `已将 "${issueType}" 加入偏好黑名单。以后将大幅减少此类建议。`
    );
  }

  /**
   * 从黑名单移除
   */
  async removeFromBlacklist(issueType: IssueType): Promise<void> {
    // 获取当前反馈记录
    const stats = await this.preferenceMemory.getStats();
    const typeStats = stats.byType[issueType];
    
    if (typeStats && typeStats.totalCount > 0) {
      // 记录 3 次 apply，抵消忽略
      for (let i = 0; i < 3; i++) {
        await this.preferenceMemory.recordFeedback(issueType, 'applied');
      }

      vscode.window.showInformationMessage(
        `已从黑名单移除 "${issueType}"。`
      );
    } else {
      vscode.window.showInformationMessage(
        `"${issueType}" 不在黑名单中。`
      );
    }
  }
}

/**
 * 单例管理器
 */
let actionProviderInstance: ProactiveCodeActionProvider | null = null;

export function getProactiveCodeActionProvider(
  context: vscode.ExtensionContext
): ProactiveCodeActionProvider {
  if (actionProviderInstance === null) {
    actionProviderInstance = new ProactiveCodeActionProvider(context);
  }
  return actionProviderInstance;
}

/**
 * 注册 Proactive 相关命令
 */
export function registerProactiveCommands(
  context: vscode.ExtensionContext
): void {
  const actionProvider = getProactiveCodeActionProvider(context);

  // 1. 显示修复详情
  const showFixDetailsCommand = vscode.commands.registerCommand(
    'vsyuangs.proactive.showFixDetails',
    async (issue: SecurityIssue) => {
      const message = `
🔧 修复建议: ${issue.ruleId}

问题描述: ${issue.message}

建议修复:
${issue.suggestion || '暂无具体建议'}

类型: ${issue.type}
严重程度: ${issue.severity}
位置: 行 ${issue.line !== undefined ? issue.line + 1 : 'N/A'}, 列 ${issue.column !== undefined ? issue.column + 1 : 'N/A'}
      `.trim();

      await vscode.window.showInformationMessage(message);
    }
  );

  // 2. 显示问题详情
  const showIssueDetailsCommand = vscode.commands.registerCommand(
    'vsyuangs.proactive.showIssueDetails',
    async (issue: SecurityIssue) => {
      const message = `
🔍 问题详情

规则 ID: ${issue.ruleId}
问题描述: ${issue.message}

类型: ${issue.type}
严重程度: ${issue.severity}
位置: 行 ${issue.line !== undefined ? issue.line + 1 : 'N/A'}, 列 ${issue.column !== undefined ? issue.column + 1 : 'N/A'}
      `.trim();

      await vscode.window.showInformationMessage(message);
    }
  );

  // 3. 忽略此次
  const ignoreOnceCommand = vscode.commands.registerCommand(
    'vsyuangs.proactive.ignoreOnce',
    async (issue: SecurityIssue) => {
      await actionProvider.recordFeedback(issue.type, 'ignored');
      
      // 清除当前 diagnostic
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);
        const filtered = diagnostics.filter(
          d => !((d as any).ruleId === issue.ruleId)
        );
        // 注意：这里不能直接修改 diagnostic，因为它们是由 ProactiveGuard 管理的
        // 我们只记录反馈，让 ProactiveGuard 在下次扫描时处理
      }

      vscode.window.showInformationMessage('已忽略此次建议');
    }
  );

  // 4. 添加到黑名单
  const addToBlacklistCommand = vscode.commands.registerCommand(
    'vsyuangs.proactive.addToBlacklist',
    async (issue: SecurityIssue) => {
      const confirm = await vscode.window.showWarningMessage(
        `确定要将 "${issue.type}" 加入黑名单吗？\n\n以后将大幅减少此类建议。`,
        '确定',
        '取消'
      );

      if (confirm === '确定') {
        await actionProvider.addToBlacklist(issue.type);
      }
    }
  );

  // 5. 从黑名单移除
  const removeFromBlacklistCommand = vscode.commands.registerCommand(
    'vsyuangs.proactive.removeFromBlacklist',
    async (issue: SecurityIssue) => {
      await actionProvider.removeFromBlacklist(issue.type);
    }
  );

  // 6. 显示偏好统计
  const showStatsCommand = vscode.commands.registerCommand(
    'vsyuangs.showScanStats',
    async () => {
      const stats = await actionProvider.preferenceMemory.getStats();
      const recordCount = await actionProvider.preferenceMemory.getRecordCount();
      const blacklist = await actionProvider.preferenceMemory.getBlacklist();
      const whitelist = await actionProvider.preferenceMemory.getWhitelist();

      let message = `
📊 扫描统计
━━━━━━━━━━━━━━━━━━━━

总反馈记录: ${stats.totalRecords}
当前记录数: ${recordCount}
统计时间段: ${new Date(stats.startTime).toLocaleDateString()} - 现在

🚫 黑名单 (${blacklist.length}):
${blacklist.length > 0 ? blacklist.map((t: string) => `  • ${t}`).join('\n') : '  (无)'}

✅ 白名单 (${whitelist.length}):
${whitelist.length > 0 ? whitelist.map((t: string) => `  • ${t}`).join('\n') : '  (无)'}

━━━━━━━━━━━━━━━━━━━━

提示: 使用 "Ctrl+Shift+P" -> "vsyuangs: 清空扫描历史" 可清空所有记录。
      `.trim();

      await vscode.window.showInformationMessage(message);
    }
  );

  // 7. 清空扫描历史
  const clearHistoryCommand = vscode.commands.registerCommand(
    'vsyuangs.clearScanHistory',
    async () => {
      const confirm = await vscode.window.showWarningMessage(
        '确定要清空所有扫描历史和偏好记录吗？\n\n此操作不可恢复。',
        '确定',
        '取消'
      );

      if (confirm === '确定') {
        await actionProvider.preferenceMemory.clear();
        vscode.window.showInformationMessage('已清空所有记录');
      }
    }
  );

  // 8. 手动触发扫描
  const triggerScanCommand = vscode.commands.registerCommand(
    'vsyuangs.triggerManualScan',
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('请先打开一个文件');
        return;
      }

      vscode.window.showInformationMessage(
        '手动扫描功能需要 ProactiveGuard 支持。\n请保存文件以触发自动扫描。'
      );
    }
  );

  context.subscriptions.push(
    showFixDetailsCommand,
    showIssueDetailsCommand,
    ignoreOnceCommand,
    addToBlacklistCommand,
    removeFromBlacklistCommand,
    showStatsCommand,
    clearHistoryCommand,
    triggerScanCommand
  );

  console.log('[ProactiveCodeActionProvider] Commands registered');
}