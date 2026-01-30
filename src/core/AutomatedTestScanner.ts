/**
 * Automated Test Scanner - 自动化测试扫描
 * 
 * 功能：
 * - 在 AI 生成代码后自动运行静态扫描
 * - 执行恶意 Diff 防御测试
 * - 提供安全检查报告
 * 
 * 用户体验：
 * - AI 生成代码后，自动运行一套基础的静态扫描
 * - 确保生成的代码安全可靠
 * 
 * 职责边界：
 * - Validator (DiffSecurityValidator) = 决策层，是否允许进入系统
 * - Scanner (AutomatedTestScanner) = 建议层，是否存在风险模式/是否建议优化
 * 
 * 原则：
 * - Validator 必须通过，系统才能继续
 * - Scanner 的警告和建议是可选的
 */

import * as vscode from 'vscode';
import { DiffParser } from './diff';
import { DiffSecurityValidator, SecurityValidationResult } from './diffSecurityValidator';
import { ReviewResultV1, ReviewSuggestion } from './reviewSchema';

/**
 * 扫描结果
 */
export interface ScanResult {
  /** 是否通过扫描 */
  passed: boolean;

  /** 扫描时间 */
  timestamp: Date;

  /** 扫描类型 */
  scanType: 'security' | 'quality' | 'full';

  /** 安全检查结果 */
  securityCheck: SecurityCheckResult;

  /** 质量检查结果（可选） */
  qualityCheck?: QualityCheckResult;

  /** 总体建议 */
  recommendations: string[];
}

/**
 * 安全检查结果
 */
export interface SecurityCheckResult {
  /** 是否通过安全检查 */
  passed: boolean;

  /** Diff 解析结果 */
  parseResult: {
    success: boolean;
    fileCount: number;
    hunkCount: number;
  };

  /** 安全验证结果 */
  validationResult: SecurityValidationResult;

  /** 发现的安全问题 */
  securityIssues: SecurityIssue[];
}

/**
 * 质量检查结果
 */
export interface QualityCheckResult {
  /** 是否通过质量检查 */
  passed: boolean;

  /** 代码复杂度（可选） */
  complexity?: {
    avg: number;
    max: number;
  };

  /** 代码重复率（可选） */
  duplication?: {
    percentage: number;
    duplicatedLines: number;
  };

  /** 其他质量指标 */
  metrics: {
    [key: string]: number | string;
  };
}

/**
 * 安全问题
 */
export interface SecurityIssue {
  /** 问题类型 */
  type: 
    | 'PATH_TRAVERSAL' 
    | 'ABSOLUTE_PATH' 
    | 'LINE_TOO_LONG' 
    | 'CONTEXT_TOO_LARGE' 
    | 'HUNK_TOO_LARGE' 
    | 'TOO_MANY_HUNKS' 
    | 'TOO_MANY_FILES' 
    | 'EXTENSION_NOT_ALLOWED'
    | 'FORBIDDEN_PATH_PATTERN'
    | 'HUNK_HEADER_FORGERY'
    | 'INVALID_UNIFIED_DIFF';

  /** 严重程度 */
  severity: 'low' | 'medium' | 'high' | 'critical';

  /** 问题描述 */
  message: string;

  /** 相关文件路径（可选） */
  filePath?: string;

  /** 相关 hunk 索引（可选） */
  hunkIndex?: number;

  /** 建议修复 */
  suggestion?: string;
}

/**
 * Automated Test Scanner
 */
export class AutomatedTestScanner {
  private securityValidator: DiffSecurityValidator;
  private outputChannel: vscode.OutputChannel;

  constructor() {
    this.securityValidator = new DiffSecurityValidator();
    this.outputChannel = vscode.window.createOutputChannel('VS Yuangs Security Scanner');
  }

  /**
   * 扫描 AI 生成的代码（Diff 格式）
   * 
   * 注意：这是建议层扫描，不是决策层验证
   * 决策层验证应该使用 DiffSecurityValidator.validate()
   */
  async scanGeneratedCode(
    diffText: string,
    options?: {
      scanType?: 'security' | 'quality' | 'full';
      runTests?: boolean;
    }
  ): Promise<ScanResult> {
    const scanType = options?.scanType || 'security';
    const timestamp = new Date();

    this.outputChannel.appendLine(`[Scanner] Starting ${scanType} scan at ${timestamp.toISOString()}`);
    this.outputChannel.appendLine(`[Scanner] Diff length: ${diffText.length} bytes`);
    this.outputChannel.appendLine(`[Scanner] Mode: advisory (suggestions only)`);

    // 1. 解析 Diff
    const parseResult = DiffParser.parse(diffText);
    
    this.outputChannel.appendLine(
      `[Scanner] Parse result: ${parseResult.success ? 'SUCCESS' : 'FAILED'}` +
      (parseResult.success ? ` (${parseResult.files.length} files, ${parseResult.stats.hunkCount} hunks)` : '')
    );

    // 2. 安全检查（建议层）
    // 注意：这里只是扫描和提供建议，不是决策层验证
    // 决策层验证应该由 DiffSecurityValidator.validate() 完成
    const securityCheck = await this.performSecurityCheck(parseResult, diffText);

    // 3. 质量检查（如果需要）
    let qualityCheck: QualityCheckResult | undefined;
    if (scanType === 'quality' || scanType === 'full') {
      qualityCheck = await this.performQualityCheck(parseResult);
    }

    // 4. 生成建议（这是 Scanner 的核心价值）
    const recommendations = this.generateRecommendations(securityCheck, qualityCheck);

    // 5. 构建结果
    // Scanner 的 passed 表示"没有严重警告"，不代表"可以安全执行"
    // 安全执行需要先通过 DiffSecurityValidator.validate()
    const passed = securityCheck.passed && (!qualityCheck || qualityCheck.passed);

    const result: ScanResult = {
      passed,
      timestamp,
      scanType,
      securityCheck,
      qualityCheck,
      recommendations
    };

    // 6. 显示结果
    this.displayScanResult(result);

    // 7. 运行测试（如果需要）
    if (options?.runTests) {
      await this.runMaliciousDiffTests();
    }

    return result;
  }

  /**
   * 执行安全检查（建议层）
   * 
   * 重要：这是 Scanner 的安全检查，提供警告和建议
   * 决策层的安全验证应该使用 DiffSecurityValidator.validate()
   * 
   * 区别：
   * - DiffSecurityValidator.validate() = 必须通过，否则阻断
   * - Scanner.performSecurityCheck() = 建议和警告，可配置
   */
  private async performSecurityCheck(
    parseResult: import('./diff').DiffResult,
    diffText: string
  ): Promise<SecurityCheckResult> {
    this.outputChannel.appendLine('[Scanner] Performing security check (advisory mode)...');

    // 注意：这里使用 validator 进行检查，但这是建议层的检查
    // 决策层的验证应该在调用 Scanner 之前完成
    const textValidation = this.securityValidator.validateDiffText(diffText);
    const structureValidation = parseResult.success 
      ? this.securityValidator.validate(parseResult)
      : { valid: false, errors: [] };

    // 合并错误
    const allErrors = [
      ...textValidation.errors,
      ...structureValidation.errors
    ];

    // 转换为安全问题描述
    const securityIssues = allErrors.map(error => ({
      type: error.type,
      severity: this.mapErrorToSeverity(error.type),
      message: error.message,
      filePath: error.filePath,
      hunkIndex: error.hunkIndex,
      suggestion: this.generateSuggestionForError(error)
    }));

    const passed = parseResult.success && allErrors.length === 0;

    this.outputChannel.appendLine(
      `[Scanner] Security check: ${passed ? 'PASSED' : 'FAILED'} (${allErrors.length} issues)`
    );
    this.outputChannel.appendLine(
      `[Scanner] Note: This is advisory. Use DiffSecurityValidator.validate() for authoritative validation.`
    );

    return {
      passed,
      parseResult: {
        success: parseResult.success,
        fileCount: parseResult.success ? parseResult.files.length : 0,
        hunkCount: parseResult.success ? parseResult.stats.hunkCount : 0
      },
      validationResult: {
        valid: allErrors.length === 0,
        errors: allErrors
      },
      securityIssues
    };
  }

  /**
   * 执行质量检查
   */
  private async performQualityCheck(
    parseResult: import('./diff').DiffResult
  ): Promise<QualityCheckResult> {
    this.outputChannel.appendLine('[Scanner] Performing quality check...');

    if (!parseResult.success) {
      return {
        passed: false,
        metrics: {}
      };
    }

    // 计算基本指标
    const totalLines = parseResult.stats.totalAdded + parseResult.stats.totalRemoved;
    const avgLinesPerFile = parseResult.files.length > 0 
      ? totalLines / parseResult.files.length 
      : 0;

    // 检查 hunk 复杂度
    const totalHunks = parseResult.stats.hunkCount;
    const avgHunksPerFile = parseResult.files.length > 0
      ? totalHunks / parseResult.files.length
      : 0;

    const metrics: Record<string, number | string> = {
      totalFiles: parseResult.files.length,
      totalLines,
      totalHunks,
      avgLinesPerFile: Math.round(avgLinesPerFile * 100) / 100,
      avgHunksPerFile: Math.round(avgHunksPerFile * 100) / 100,
      linesAdded: parseResult.stats.totalAdded,
      linesRemoved: parseResult.stats.totalRemoved
    };

    // 简单的质量规则
    const passed = 
      avgLinesPerFile < 500 && // 每个文件平均不超过 500 行
      avgHunksPerFile < 20;  // 每个文件平均不超过 20 个 hunks

    this.outputChannel.appendLine(
      `[Scanner] Quality check: ${passed ? 'PASSED' : 'FAILED'}`
    );

    return {
      passed,
      metrics
    };
  }

  /**
   * 生成建议
   */
  private generateRecommendations(
    securityCheck: SecurityCheckResult,
    qualityCheck?: QualityCheckResult
  ): string[] {
    const recommendations: string[] = [];

    // 安全建议
    if (!securityCheck.passed) {
      recommendations.push('Security issues detected. Review and fix before applying.');
      
      const criticalIssues = securityCheck.securityIssues.filter(i => i.severity === 'critical');
      const highIssues = securityCheck.securityIssues.filter(i => i.severity === 'high');
      
      if (criticalIssues.length > 0) {
        recommendations.push(`${criticalIssues.length} critical security issue(s) found.`);
      }
      if (highIssues.length > 0) {
        recommendations.push(`${highIssues.length} high-severity security issue(s) found.`);
      }
    } else {
      recommendations.push('No security issues detected.');
    }

    // 质量建议
    if (qualityCheck && !qualityCheck.passed) {
      recommendations.push('Quality issues detected. Consider refactoring.');
      
      const avgLinesPerFile = typeof qualityCheck.metrics.avgLinesPerFile === 'number' 
        ? qualityCheck.metrics.avgLinesPerFile 
        : 0;
      const avgHunksPerFile = typeof qualityCheck.metrics.avgHunksPerFile === 'number' 
        ? qualityCheck.metrics.avgHunksPerFile 
        : 0;
      
      if (avgLinesPerFile > 500) {
        recommendations.push('Consider splitting large files into smaller modules.');
      }
      if (avgHunksPerFile > 20) {
        recommendations.push('Consider organizing changes into logical groups.');
      }
    } else if (qualityCheck) {
      recommendations.push('Code quality checks passed.');
    }

    return recommendations;
  }

  /**
   * 映射错误类型到严重程度
   */
  private mapErrorToSeverity(
    errorType: SecurityIssue['type']
  ): 'low' | 'medium' | 'high' | 'critical' {
    const severityMap: Record<SecurityIssue['type'], 'low' | 'medium' | 'high' | 'critical'> = {
      PATH_TRAVERSAL: 'critical',
      ABSOLUTE_PATH: 'critical',
      FORBIDDEN_PATH_PATTERN: 'critical',
      HUNK_HEADER_FORGERY: 'high',
      INVALID_UNIFIED_DIFF: 'high',
      LINE_TOO_LONG: 'medium',
      CONTEXT_TOO_LARGE: 'low',
      HUNK_TOO_LARGE: 'medium',
      TOO_MANY_HUNKS: 'low',
      TOO_MANY_FILES: 'low',
      EXTENSION_NOT_ALLOWED: 'high'
    };

    return severityMap[errorType] || 'medium';
  }

  /**
   * 为错误生成建议
   */
  private generateSuggestionForError(error: import('./diffSecurityValidator').SecurityValidationError): string {
    switch (error.type) {
      case 'PATH_TRAVERSAL':
        return 'Remove ".." from file paths and use relative paths within the workspace.';
      case 'ABSOLUTE_PATH':
        return 'Use relative paths instead of absolute paths.';
      case 'FORBIDDEN_PATH_PATTERN':
        return 'Avoid modifying system files or sensitive directories.';
      case 'HUNK_HEADER_FORGERY':
        return 'Ensure hunk headers match the actual line counts in the diff.';
      case 'LINE_TOO_LONG':
        return 'Break long lines into multiple lines for better readability.';
      case 'CONTEXT_TOO_LARGE':
        return 'Reduce the amount of context lines in the diff.';
      case 'HUNK_TOO_LARGE':
        return 'Split large hunks into smaller, more focused changes.';
      case 'TOO_MANY_HUNKS':
        return 'Consider organizing changes into separate commits.';
      case 'TOO_MANY_FILES':
        return 'Consider splitting changes into multiple logical commits.';
      case 'EXTENSION_NOT_ALLOWED':
        return 'File extension is not allowed in the current security policy.';
      default:
        return 'Review and fix the identified issue.';
    }
  }

  /**
   * 显示扫描结果
   */
  private displayScanResult(result: ScanResult): void {
    const message = result.passed 
      ? '✅ Security and quality checks passed'
      : '⚠️ Security or quality issues detected';

    const details = `
Scan Summary:
- Type: ${result.scanType.toUpperCase()}
- Status: ${result.passed ? 'PASSED' : 'FAILED'}
- Security: ${result.securityCheck.passed ? '✅' : '❌'} (${result.securityCheck.securityIssues.length} issues)
${result.qualityCheck ? `- Quality: ${result.qualityCheck.passed ? '✅' : '❌'}` : ''}

Recommendations:
${result.recommendations.map(r => `• ${r}`).join('\n')}
    `.trim();

    // 显示到输出面板
    this.outputChannel.appendLine('\n' + '='.repeat(60));
    this.outputChannel.appendLine(details);
    this.outputChannel.appendLine('='.repeat(60));
    this.outputChannel.show(true);

    // 显示通知
    if (result.passed) {
      vscode.window.showInformationMessage(message, 'View Details').then(selection => {
        if (selection === 'View Details') {
          this.outputChannel.show(true);
        }
      });
    } else {
      vscode.window.showWarningMessage(message, 'View Details', 'Ignore').then(selection => {
        if (selection === 'View Details') {
          this.outputChannel.show(true);
        }
      });
    }
  }

  /**
   * 运行恶意 Diff 防御测试
   */
  private async runMaliciousDiffTests(): Promise<void> {
    this.outputChannel.appendLine('\n[Scanner] Running malicious diff defense tests...');

    try {
      // 注意：由于 TypeScript 的 rootDir 限制，无法直接从 src/ 导入 test/ 目录
      // 这个功能需要通过外部命令或编译后的测试模块来实现
      // 这里我们只记录日志，实际测试应该通过命令行运行
      
      this.outputChannel.appendLine('[Scanner] ⚠️ Test integration requires external test runner');
      this.outputChannel.appendLine('[Scanner] Tip: Run "npm test" to execute malicious diff defense tests');
      
      // TODO: 可以通过 vscode.commands.executeCommand 调用外部测试命令
      // const testCommand = vscode.commands.executeCommand('vsyuangs.runMaliciousDiffTests');
    } catch (error) {
      this.outputChannel.appendLine(`[Scanner] ❌ Failed to run tests: ${error}`);
    }
  }

  /**
   * 扫描 Review 建议中的 Diff
   */
  async scanReviewSuggestion(suggestion: ReviewSuggestion): Promise<ScanResult> {
    if (!suggestion.diff) {
      vscode.window.showWarningMessage('Suggestion does not contain a diff to scan');
      return {
        passed: false,
        timestamp: new Date(),
        scanType: 'security',
        securityCheck: {
          passed: false,
          parseResult: { success: false, fileCount: 0, hunkCount: 0 },
          validationResult: { valid: false, errors: [] },
          securityIssues: []
        },
        recommendations: ['No diff content to scan']
      };
    }

    return await this.scanGeneratedCode(suggestion.diff.content, {
      scanType: 'security',
      runTests: false
    });
  }

  /**
   * 清理资源
   */
  dispose(): void {
    this.outputChannel.dispose();
  }
}

/**
 * 全局扫描器实例
 */
let globalScanner: AutomatedTestScanner | null = null;

/**
 * 获取全局扫描器实例
 */
export function getScanner(): AutomatedTestScanner {
  if (!globalScanner) {
    globalScanner = new AutomatedTestScanner();
  }
  return globalScanner;
}

/**
 * 清理全局扫描器
 */
export function disposeScanner(): void {
  if (globalScanner) {
    globalScanner.dispose();
    globalScanner = null;
  }
}