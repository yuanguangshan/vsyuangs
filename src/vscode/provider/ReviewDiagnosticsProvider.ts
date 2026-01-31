/**
 * Review Diagnostics Provider
 * 
 * 功能：
 * - 将 AI Review 结果转换为 VS Code Diagnostics（波浪线标注）
 * - 在编辑器中直接显示审查建议
 * - 提供 Code Action（快速修复）
 * 
 * 用户体验：
 * - 不需要看侧边栏，直接在代码行旁边看到 AI 提示
 * - 一键应用修复建议
 */

import * as vscode from 'vscode';
import { ReviewResultV1, ReviewIssue, ReviewSuggestion } from '../../core/reviewSchema';
import { DiffParser } from '../../core/diff';
import { DiffSecurityValidator } from '../../core/diffSecurityValidator';
import { DiffApplier } from '../../core/diff';

/**
 * Diagnostics 管理
 */
export class ReviewDiagnosticsProvider {
  private diagnosticCollection: vscode.DiagnosticCollection;
  private codeActionProvider: ReviewCodeActionProvider;
  private securityValidator: DiffSecurityValidator;

  constructor() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('vsyuangs-review');
    this.codeActionProvider = new ReviewCodeActionProvider();
    this.securityValidator = new DiffSecurityValidator();

    // 注册 Code Action Provider
    vscode.languages.registerCodeActionsProvider('*', this.codeActionProvider);
  }

  /**
   * 更新 Diagnostics（从 ReviewResultV1）
   */
  updateDiagnostics(reviewResult: ReviewResultV1): void {
    // 清空之前的 diagnostics
    this.diagnosticCollection.clear();

    // 转换每个 issue 为 diagnostic
    const diagnosticsMap = new Map<string, vscode.Diagnostic[]>();

    for (const issue of reviewResult.issues) {
      if (!issue.location) {
        // 没有位置的 issue，跳过（或者可以显示为 workspace-wide问题）
        continue;
      }

      const diagnostic = this.createDiagnostic(issue);
      
      // 按 URI 分组
      const uri = this.getFileUri(issue.location.filePath);
      if (!diagnosticsMap.has(uri.toString())) {
        diagnosticsMap.set(uri.toString(), []);
      }
      diagnosticsMap.get(uri.toString())!.push(diagnostic);
    }

    // 设置 diagnostics
    for (const [uriString, diagnostics] of diagnosticsMap) {
      const uri = vscode.Uri.parse(uriString);
      this.diagnosticCollection.set(uri, diagnostics);
    }
  }

  /**
   * 创建单个 Diagnostic
   */
  private createDiagnostic(issue: ReviewIssue): vscode.Diagnostic {
    const range = issue.location?.range 
      ? new vscode.Range(
          issue.location.range.startLine,
          issue.location.range.startChar || 0,
          issue.location.range.endLine,
          issue.location.range.endChar || Number.MAX_SAFE_INTEGER
        )
      : new vscode.Range(0, 0, 0, 0);

    const severity = this.mapSeverity(issue.severity);

    const diagnostic = new vscode.Diagnostic(
      range,
      issue.message,
      severity
    );

    // 添加元数据
    diagnostic.source = 'AI Review';
    diagnostic.code = issue.type;
    
    // 添加相关信息
    if (issue.explanation) {
      diagnostic.relatedInformation = [
        new vscode.DiagnosticRelatedInformation(
          new vscode.Location(
            this.getFileUri(issue.location!.filePath),
            range
          ),
          issue.explanation
        )
      ];
    }

    // 根据置信度设置标签（可选）
    if (issue.confidence !== undefined && issue.confidence < 0.5) {
      diagnostic.tags = [vscode.DiagnosticTag.Unnecessary];
    }

    // 将 issue ID 存储在 data 字段中，供 CodeAction 使用
    (diagnostic as any).issueId = issue.id;

    return diagnostic;
  }

  /**
   * 映射严重程度
   */
  private mapSeverity(severity: ReviewIssue['severity']): vscode.DiagnosticSeverity {
    switch (severity) {
      case 'error':
        return vscode.DiagnosticSeverity.Error;
      case 'warning':
        return vscode.DiagnosticSeverity.Warning;
      case 'info':
        return vscode.DiagnosticSeverity.Information;
      default:
        return vscode.DiagnosticSeverity.Hint;
    }
  }

  /**
   * 获取文件 URI
   */
  private getFileUri(filePath: string): vscode.Uri {
    // 尝试在 workspace 中查找文件
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (workspaceFolder) {
      const uri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);
      return uri;
    }
    
    // 如果没有 workspace，直接使用文件路径
    return vscode.Uri.file(filePath);
  }

  /**
   * 清除所有 Diagnostics
   */
  clear(): void {
    this.diagnosticCollection.clear();
    this.codeActionProvider.clearSuggestions();
  }

  /**
   * 应用修复建议
   */
  async applySuggestion(suggestion: ReviewSuggestion): Promise<boolean> {
    if (!suggestion.diff) {
      vscode.window.showErrorMessage('Suggestion does not contain a diff');
      return false;
    }

    // 安全验证
    const parseResult = DiffParser.parse(suggestion.diff.content);
    if (!parseResult.success) {
      vscode.window.showErrorMessage('Failed to parse diff');
      return false;
    }

    const securityCheck = this.securityValidator.validate(parseResult);
    if (!securityCheck.valid) {
      const errorMessages = securityCheck.errors.map(e => e.message).join('\n');
      vscode.window.showErrorMessage(`Security validation failed:\n${errorMessages}`);
      return false;
    }

    // 检查是否需要用户确认
    if (suggestion.safety.requiresConfirmation) {
      const confirm = await vscode.window.showWarningMessage(
        `This change has ${suggestion.safety.risk} risk. Apply anyway?`,
        'Apply',
        'Cancel'
      );
      if (confirm !== 'Apply') {
        return false;
      }
    }

    // 应用 diff
    const applyResult = await DiffApplier.apply(parseResult);
    if (applyResult.success) {
      vscode.window.showInformationMessage(
        `Successfully applied: ${applyResult.stats.hunksApplied} hunks, ${applyResult.stats.linesAdded} lines added, ${applyResult.stats.linesRemoved} lines removed`
      );
      return true;
    } else {
      vscode.window.showErrorMessage(`Failed to apply diff: ${applyResult.message}`);
      return false;
    }
  }

  /**
   * 显示 Review 摘要
   */
  showReviewSummary(reviewResult: ReviewResultV1): void {
    const message = `
AI Review Summary:
- Risk Level: ${reviewResult.summary.riskLevel.toUpperCase()}
- Issues: ${reviewResult.summary.issueCount}
- Suggestions: ${reviewResult.summary.suggestionCount}
    `.trim();

    vscode.window.showInformationMessage(message);
  }
}

/**
 * Code Action Provider（快速修复）
 */
class ReviewCodeActionProvider implements vscode.CodeActionProvider {
  private suggestions: Map<string, ReviewSuggestion> = new Map();

  /**
   * 更新可用建议
   */
  updateSuggestions(suggestions: ReviewSuggestion[]): void {
    this.suggestions.clear();
    for (const suggestion of suggestions) {
      this.suggestions.set(suggestion.id, suggestion);
    }
  }

  /**
   * 清除建议
   */
  clearSuggestions(): void {
    this.suggestions.clear();
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

    // 查找相关的 diagnostics
    for (const diagnostic of context.diagnostics) {
      if (diagnostic.source !== 'AI Review') {
        continue;
      }

      const issueId = (diagnostic as any).issueId;
      if (!issueId) {
        continue;
      }

      // 查找对应的 suggestion
      for (const [id, suggestion] of this.suggestions) {
        // 这里可以根据 issueId 和 suggestion 的关系来匹配
        // 简化实现：所有 suggestions 都可以作为 code action
        
        const action = new vscode.CodeAction(
          suggestion.title,
          vscode.CodeActionKind.QuickFix
        );

        action.diagnostics = [diagnostic];
        
        // 添加 Command
        action.command = {
          command: 'vsyuangs.applyReviewSuggestion',
          title: suggestion.title,
          arguments: [suggestion]
        };

        // 标记是否首选
        if (suggestion.safety.risk === 'low') {
          action.isPreferred = true;
        }

        actions.push(action);
      }
    }

    return actions;
  }
}

/**
 * 单例管理器（用于 ProactiveGuard 集成）
 */
let providerInstance: ReviewDiagnosticsProvider | null = null;

export function getReviewDiagnosticsProvider(): ReviewDiagnosticsProvider {
  if (!providerInstance) {
    providerInstance = new ReviewDiagnosticsProvider();
  }
  return providerInstance;
}

/**
 * 注册命令
 */
export function registerReviewCommands(
  provider: ReviewDiagnosticsProvider,
  context: vscode.ExtensionContext
): void {
  // 应用 Review 建议
  const applyCommand = vscode.commands.registerCommand(
    'vsyuangs.applyReviewSuggestion',
    async (suggestion: ReviewSuggestion) => {
      await provider.applySuggestion(suggestion);
    }
  );

  context.subscriptions.push(applyCommand);
}
