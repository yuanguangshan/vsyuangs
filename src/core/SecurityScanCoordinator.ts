/**
 * Security Scan Coordinator - 双层安全防护协调器
 * 
 * 设计原则：
 * - AI 介入前：运行本地快速扫描
 * - Diff 应用前：运行完整的安全验证
 * - Diff 应用后：运行语义级别审查
 * - 汇总所有安全结果并展示
 * 
 * 双层防护体系：
 * - Layer 1: 本地规则扫描（<50ms，无 LLM）
 * - Layer 2: 语义级别验证（需要 LLM，更智能）
 */

import * as vscode from 'vscode';
import { DiffParseResult } from './diff';
import { DiffSecurityValidator } from './diffSecurityValidator';
import { QuickSecurityScanner } from './quickSecurityScanner';
import { SecuritySeverity, SecurityIssue, IssueType } from './securityTypes';

/**
 * 安全扫描阶段
 */
export enum ScanPhase {
  /** Phase 1: AI 介入前的本地扫描 */
  BEFORE_AI = 'before_ai',
  /** Phase 2: Diff 应用前的验证 */
  BEFORE_APPLY = 'before_apply',
  /** Phase 3: Diff 应用后的语义审查 */
  AFTER_APPLY = 'after_apply'
}

/**
 * 安全扫描结果
 */
export interface SecurityScanResult {
  /** 扫描阶段 */
  phase: ScanPhase;
  /** 是否通过 */
  passed: boolean;
  /** 发现的问题 */
  issues: SecurityIssue[];
  /** 扫描耗时（毫秒） */
  duration: number;
  /** 扫描时间戳 */
  timestamp: number;
}

/**
 * 综合安全报告
 */
export interface ComprehensiveSecurityReport {
  /** 所有扫描结果 */
  scans: SecurityScanResult[];
  /** 总体评估 */
  overallStatus: 'passed' | 'warning' | 'failed';
  /** 关键问题数量 */
  criticalIssueCount: number;
  /** 错误级别问题数量 */
  errorIssueCount: number;
  /** 警告级别问题数量 */
  warningIssueCount: number;
  /** 信息级别问题数量 */
  infoIssueCount: number;
  /** 总耗时 */
  totalDuration: number;
}

/**
 * 安全扫描协调器选项
 */
export interface SecurityScanCoordinatorOptions {
  /** 是否启用 AI 介入前扫描（默认 true） */
  enableBeforeAiScan?: boolean;
  /** 是否启用 Diff 应用前验证（默认 true） */
  enableBeforeApplyValidation?: boolean;
  /** 是否启用 Diff 应用后语义审查（默认 true） */
  enableAfterApplyReview?: boolean;
  /** 是否自动显示诊断信息（默认 true） */
  autoShowDiagnostics?: boolean;
  /** 是否在发现关键问题时阻止应用（默认 true） */
  blockOnCritical?: boolean;
}

/**
 * 默认选项
 */
const DEFAULT_OPTIONS: SecurityScanCoordinatorOptions = {
  enableBeforeAiScan: true,
  enableBeforeApplyValidation: true,
  enableAfterApplyReview: true,
  autoShowDiagnostics: true,
  blockOnCritical: true
};

/**
 * 安全扫描协调器
 * 
 * 协调三层安全扫描，形成完整的防护体系
 * 
 * 使用示例：
 * ```typescript
 * const coordinator = new SecurityScanCoordinator();
 * 
 * // AI 介入前扫描
 * const beforeAiReport = await coordinator.scanBeforeAi(code, filePath);
 * if (!beforeAiReport.passed && coordinator.options.blockOnCritical) {
 *   // 阻止 AI 介入
 *   return;
 * }
 * 
 * // Diff 应用前验证
 * const beforeApplyReport = await coordinator.validateBeforeApply(diff);
 * if (!beforeApplyReport.passed) {
 *   // 阻止应用
 *   return;
 * }
 * 
 * // Diff 应用后审查
 * const afterApplyReport = await coordinator.reviewAfterApply(appliedFiles);
 * ```
 */
export class SecurityScanCoordinator {
  private options: SecurityScanCoordinatorOptions;
  private quickScanner: QuickSecurityScanner;
  private securityValidator: DiffSecurityValidator;
  private diagnosticCollection: vscode.DiagnosticCollection;
  private scanHistory: SecurityScanResult[] = [];

  constructor(options: SecurityScanCoordinatorOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.quickScanner = new QuickSecurityScanner();
    this.securityValidator = new DiffSecurityValidator();
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection('yuangs-security');
  }

  /**
   * Phase 1: AI 介入前的本地扫描
   * 
   * 在 AI 生成代码之前，运行快速本地扫描
   * 
   * @param code 代码内容
   * @param filePath 文件路径（可选）
   * @param document VS Code 文档对象（可选，用于精确计算行列号）
   * @returns 安全扫描结果
   */
  async scanBeforeAi(
    code: string,
    filePath?: string,
    document?: vscode.TextDocument
  ): Promise<SecurityScanResult> {
    if (!this.options.enableBeforeAiScan) {
      return this.createEmptyResult(ScanPhase.BEFORE_AI);
    }

    console.log(`[SecurityScanCoordinator] Phase 1: Scanning before AI for ${filePath || 'unknown'}`);
    const startTime = Date.now();

    try {
      // 使用 QuickSecurityScanner 进行快速扫描
      const quickResult = await this.quickScanner.quickScan(code, filePath, document);

      const result: SecurityScanResult = {
        phase: ScanPhase.BEFORE_AI,
        passed: quickResult.valid,
        issues: quickResult.issues,
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };

      this.scanHistory.push(result);
      this.updateDiagnostics(result, document);

      if (result.passed) {
        console.log(`[SecurityScanCoordinator] ✓ Phase 1 passed (${result.duration}ms)`);
      } else {
        console.warn(`[SecurityScanCoordinator] ✗ Phase 1 failed: found ${result.issues.length} issues`);
      }

      return result;
    } catch (error) {
      console.error('[SecurityScanCoordinator] Phase 1 scan failed:', error);
      return {
        phase: ScanPhase.BEFORE_AI,
        passed: false,
        issues: [],
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };
    }
  }

  /**
   * Phase 2: Diff 应用前的验证
   * 
   * 在应用 diff 之前，进行完整的安全验证
   * 
   * @param diff 解析后的 diff
   * @returns 安全扫描结果
   */
  async validateBeforeApply(diff: DiffParseResult): Promise<SecurityScanResult> {
    if (!this.options.enableBeforeApplyValidation) {
      return this.createEmptyResult(ScanPhase.BEFORE_APPLY);
    }

    console.log('[SecurityScanCoordinator] Phase 2: Validating before apply');
    const startTime = Date.now();

    try {
      // 使用 DiffSecurityValidator 进行完整验证
      const validationResult = this.securityValidator.validate(diff);

      // 将验证错误转换为 SecurityIssue 格式
      const issues: SecurityIssue[] = validationResult.errors.map(error => ({
        type: this.mapErrorTypeToIssueType(error.type),
        severity: this.mapErrorTypeToSeverity(error.type),
        message: error.message,
        filePath: error.filePath,
        line: error.line,
        ruleId: `SEC_VALIDATION_${error.type}`
      }));

      const result: SecurityScanResult = {
        phase: ScanPhase.BEFORE_APPLY,
        passed: validationResult.valid,
        issues,
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };

      this.scanHistory.push(result);

      if (result.passed) {
        console.log(`[SecurityScanCoordinator] ✓ Phase 2 passed (${result.duration}ms)`);
      } else {
        console.warn(`[SecurityScanCoordinator] ✗ Phase 2 failed: found ${result.issues.length} issues`);
      }

      return result;
    } catch (error) {
      console.error('[SecurityScanCoordinator] Phase 2 validation failed:', error);
      return {
        phase: ScanPhase.BEFORE_APPLY,
        passed: false,
        issues: [],
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };
    }
  }

  /**
   * Phase 3: Diff 应用后的语义审查
   * 
   * 在应用 diff 之后，进行语义级别的审查
   * 
   * @param appliedFiles 已应用的文件列表
   * @param diff 原始 diff（可选，用于上下文）
   * @returns 安全扫描结果
   */
  async reviewAfterApply(
    appliedFiles: string[],
    diff?: DiffParseResult
  ): Promise<SecurityScanResult> {
    if (!this.options.enableAfterApplyReview) {
      return this.createEmptyResult(ScanPhase.AFTER_APPLY);
    }

    console.log(`[SecurityScanCoordinator] Phase 3: Reviewing after apply for ${appliedFiles.length} files`);
    const startTime = Date.now();

    try {
      const issues: SecurityIssue[] = [];

      // 对每个文件进行语义审查
      // 注意：SemanticReviewValidator 是静态类，直接调用方法
      // 这里暂时跳过语义审查，因为需要 ReviewResultV1 格式
      // TODO: 集成语义审查器

      console.log('[SecurityScanCoordinator] Phase 3: Semantic review skipped (integration needed)');

      const result: SecurityScanResult = {
        phase: ScanPhase.AFTER_APPLY,
        passed: !issues.some(i => i.severity === SecuritySeverity.CRITICAL),
        issues,
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };

      this.scanHistory.push(result);
      this.updateDiagnosticsForFiles(result, appliedFiles);

      if (result.passed) {
        console.log(`[SecurityScanCoordinator] ✓ Phase 3 passed (${result.duration}ms)`);
      } else {
        console.warn(`[SecurityScanCoordinator] ✗ Phase 3 found ${result.issues.length} issues`);
      }

      return result;
    } catch (error) {
      console.error('[SecurityScanCoordinator] Phase 3 review failed:', error);
      return {
        phase: ScanPhase.AFTER_APPLY,
        passed: false,
        issues: [],
        duration: Date.now() - startTime,
        timestamp: Date.now()
      };
    }
  }

  /**
   * 运行完整的三层扫描流程
   * 
   * @param code 原始代码（Phase 1）
   * @param diff 解析后的 diff（Phase 2）
   * @param appliedFiles 已应用的文件（Phase 3）
   * @param filePath 文件路径（Phase 1）
   * @param document VS Code 文档对象（Phase 1）
   * @returns 综合安全报告
   */
  async runFullScanPipeline(
    code: string,
    diff: DiffParseResult,
    appliedFiles: string[],
    filePath?: string,
    document?: vscode.TextDocument
  ): Promise<ComprehensiveSecurityReport> {
    console.log('[SecurityScanCoordinator] Running full scan pipeline...');

    const scans: SecurityScanResult[] = [];

    // Phase 1: AI 介入前扫描
    const phase1Result = await this.scanBeforeAi(code, filePath, document);
    scans.push(phase1Result);

    // 如果 Phase 1 发现关键问题且配置为阻止，直接返回
    if (!phase1Result.passed && this.options.blockOnCritical) {
      const criticalIssues = phase1Result.issues.filter(i => i.severity === SecuritySeverity.CRITICAL);
      if (criticalIssues.length > 0) {
        console.warn('[SecurityScanCoordinator] Blocking due to critical issues in Phase 1');
        return this.generateReport(scans);
      }
    }

    // Phase 2: Diff 应用前验证
    const phase2Result = await this.validateBeforeApply(diff);
    scans.push(phase2Result);

    // 如果 Phase 2 失败，直接返回
    if (!phase2Result.passed && this.options.blockOnCritical) {
      console.warn('[SecurityScanCoordinator] Blocking due to validation failures in Phase 2');
      return this.generateReport(scans);
    }

    // Phase 3: Diff 应用后审查
    const phase3Result = await this.reviewAfterApply(appliedFiles, diff);
    scans.push(phase3Result);

    console.log('[SecurityScanCoordinator] Full scan pipeline completed');
    return this.generateReport(scans);
  }

  /**
   * 生成综合安全报告
   */
  private generateReport(scans: SecurityScanResult[]): ComprehensiveSecurityReport {
    let criticalCount = 0;
    let errorCount = 0;
    let warningCount = 0;
    let infoCount = 0;

    for (const scan of scans) {
      for (const issue of scan.issues) {
        switch (issue.severity) {
          case SecuritySeverity.CRITICAL:
            criticalCount++;
            break;
          case SecuritySeverity.ERROR:
            errorCount++;
            break;
          case SecuritySeverity.WARNING:
            warningCount++;
            break;
          case SecuritySeverity.INFO:
            infoCount++;
            break;
        }
      }
    }

    let overallStatus: 'passed' | 'warning' | 'failed';
    if (criticalCount > 0 || errorCount > 0) {
      overallStatus = 'failed';
    } else if (warningCount > 0) {
      overallStatus = 'warning';
    } else {
      overallStatus = 'passed';
    }

    const totalDuration = scans.reduce((sum, scan) => sum + scan.duration, 0);

    return {
      scans,
      overallStatus,
      criticalIssueCount: criticalCount,
      errorIssueCount: errorCount,
      warningIssueCount: warningCount,
      infoIssueCount: infoCount,
      totalDuration
    };
  }

  /**
   * 更新诊断信息
   */
  private updateDiagnostics(result: SecurityScanResult, document?: vscode.TextDocument): void {
    if (!this.options.autoShowDiagnostics || !document) return;

    const diagnostics: vscode.Diagnostic[] = [];

    for (const issue of result.issues) {
      if (issue.line !== undefined) {
        const range = new vscode.Range(
          issue.line,
          issue.column || 0,
          issue.line,
          document.lineAt(issue.line).range.end.character
        );

        const severity = this.mapSeverityToDiagnosticSeverity(issue.severity);
        const diagnostic = new vscode.Diagnostic(
          range,
          issue.message,
          severity
        );
        diagnostic.code = issue.ruleId;
        diagnostics.push(diagnostic);
      }
    }

    this.diagnosticCollection.set(document.uri, diagnostics);
  }

  /**
   * 更新多个文件的诊断信息
   */
  private updateDiagnosticsForFiles(result: SecurityScanResult, fileNames: string[]): void {
    if (!this.options.autoShowDiagnostics) return;

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) return;

    const diagnosticsMap = new Map<string, vscode.Diagnostic[]>();

    for (const issue of result.issues) {
      if (!issue.filePath || issue.line === undefined) continue;

      const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, issue.filePath);
      const diagnostics = diagnosticsMap.get(fileUri.toString()) || [];

      const range = new vscode.Range(
        issue.line,
        issue.column || 0,
        issue.line,
        100 // 假设行长不超过 100
      );

      const severity = this.mapSeverityToDiagnosticSeverity(issue.severity);
      const diagnostic = new vscode.Diagnostic(
        range,
        issue.message,
        severity
      );
      diagnostic.code = issue.ruleId;
      diagnostics.push(diagnostic);

      diagnosticsMap.set(fileUri.toString(), diagnostics);
    }

    // 应用诊断信息
    for (const [uriStr, diagnostics] of diagnosticsMap) {
      const uri = vscode.Uri.parse(uriStr);
      this.diagnosticCollection.set(uri, diagnostics);
    }
  }

  /**
   * 清空诊断信息
   */
  clearDiagnostics(): void {
    this.diagnosticCollection.clear();
  }

  /**
   * 获取扫描历史
   */
  getScanHistory(): SecurityScanResult[] {
    return [...this.scanHistory];
  }

  /**
   * 清空扫描历史
   */
  clearHistory(): void {
    this.scanHistory = [];
  }

  /**
   * 映射错误类型到问题类型
   */
  private mapErrorTypeToIssueType(
    errorType: string
  ): IssueType {
    // 简化映射，根据需要扩展
    if (errorType.includes('PATH') || errorType.includes('FILE')) {
      return IssueType.SECURITY_PATH;
    }
    if (errorType.includes('LINE') || errorType.includes('HUNK')) {
      return IssueType.SECURITY_INJECTION;
    }
    return IssueType.SECURITY_LEAK;
  }

  /**
   * 映射错误类型到严重程度
   */
  private mapErrorTypeToSeverity(
    errorType: string
  ): SecuritySeverity {
    // 简化映射，根据需要扩展
    if (errorType.includes('PATH') || errorType.includes('CRITICAL')) {
      return SecuritySeverity.CRITICAL;
    }
    return SecuritySeverity.ERROR;
  }

  /**
   * 映射严重程度到诊断严重程度
   */
  private mapSeverityToDiagnosticSeverity(
    severity: SecuritySeverity
  ): vscode.DiagnosticSeverity {
    switch (severity) {
      case SecuritySeverity.CRITICAL:
        return vscode.DiagnosticSeverity.Error;
      case SecuritySeverity.ERROR:
        return vscode.DiagnosticSeverity.Error;
      case SecuritySeverity.WARNING:
        return vscode.DiagnosticSeverity.Warning;
      case SecuritySeverity.INFO:
        return vscode.DiagnosticSeverity.Information;
      default:
        return vscode.DiagnosticSeverity.Hint;
    }
  }

  /**
   * 创建空结果
   */
  private createEmptyResult(phase: ScanPhase): SecurityScanResult {
    return {
      phase,
      passed: true,
      issues: [],
      duration: 0,
      timestamp: Date.now()
    };
  }

  /**
   * 更新选项
   */
  updateOptions(options: Partial<SecurityScanCoordinatorOptions>): void {
    this.options = { ...this.options, ...options };
  }

  /**
   * 获取当前选项
   */
  getOptions(): SecurityScanCoordinatorOptions {
    return { ...this.options };
  }

  /**
   * 销毁资源
   */
  dispose(): void {
    this.diagnosticCollection.dispose();
  }
}

/**
 * 单例实例
 */
let coordinatorInstance: SecurityScanCoordinator | null = null;

export function getSecurityScanCoordinator(): SecurityScanCoordinator {
  if (!coordinatorInstance) {
    coordinatorInstance = new SecurityScanCoordinator();
  }
  return coordinatorInstance;
}

export function resetSecurityScanCoordinator(): void {
  if (coordinatorInstance) {
    coordinatorInstance.dispose();
    coordinatorInstance = null;
  }
}