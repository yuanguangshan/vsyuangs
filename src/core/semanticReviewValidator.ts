/**
 * Semantic Review Validator - 语义校验层
 * 
 * 目标：
 * - 在 Schema 校验之后，增加语义层面的验证
 * - 确保 ReviewResult 在语义上也是安全和合理的
 * - 防止 AI 生成的内容绕过 Schema 验证但仍有语义错误
 * 
 * 原则：
 * - Schema 校验 ≠ 安全校验 ≠ 语义校验
 * - 宁可拒绝可疑输入，也不让系统崩溃
 */

import * as vscode from 'vscode';
import { ReviewResultV1, ReviewIssue, ReviewSuggestion } from './reviewSchema';
import { DiffParser } from './diff';

/**
 * 语义校验结果
 */
export interface SemanticValidationResult {
  /** 是否通过校验 */
  valid: boolean;

  /** 语义错误列表 */
  semanticErrors: SemanticValidationError[];

  /** 警告列表（不影响使用，但需要注意） */
  warnings: SemanticValidationWarning[];
}

/**
 * 语义错误
 */
export interface SemanticValidationError {
  /** 错误类型 */
  type:
    | 'FILE_NOT_FOUND'
    | 'RANGE_OUT_OF_BOUNDS'
    | 'DIFF_MISMATCH'
    | 'SUMMARY_INCONSISTENCY'
    | 'DUPLICATE_ISSUE_ID'
    | 'DUPLICATE_SUGGESTION_ID'
    | 'INVALID_LOCATION';

  /** 错误消息 */
  message: string;

  /** 相关的 issue ID（可选） */
  issueId?: string;

  /** 相关的 suggestion ID（可选） */
  suggestionId?: string;

  /** 相关文件路径（可选） */
  filePath?: string;
}

/**
 * 语义警告
 */
export interface SemanticValidationWarning {
  /** 警告类型 */
  type:
    | 'LOW_CONFIDENCE'
    | 'MISSING_EXPLANATION'
    | 'HIGH_RISK_SUGGESTION';

  /** 警告消息 */
  message: string;

  /** 相关的 issue ID（可选） */
  issueId?: string;

  /** 相关的 suggestion ID（可选） */
  suggestionId?: string;
}

/**
 * Semantic Review Validator
 */
export class SemanticReviewValidator {
  /**
   * 验证 ReviewResult 的语义
   */
  static async validate(
    reviewResult: ReviewResultV1
  ): Promise<SemanticValidationResult> {
    const semanticErrors: SemanticValidationError[] = [];
    const warnings: SemanticValidationWarning[] = [];

    // 1. 检查 summary 统计是否自洽
    const summaryErrors = this.validateSummaryConsistency(reviewResult);
    semanticErrors.push(...summaryErrors);

    // 2. 检查 ID 唯一性
    const duplicateErrors = this.validateIdUniqueness(reviewResult);
    semanticErrors.push(...duplicateErrors);

    // 3. 验证所有 issues
    for (const issue of reviewResult.issues) {
      const issueErrors = await this.validateIssue(issue);
      const issueWarnings = this.validateIssueWarnings(issue);
      
      semanticErrors.push(...issueErrors);
      warnings.push(...issueWarnings);
    }

    // 4. 验证所有 suggestions
    if (reviewResult.suggestions) {
      for (const suggestion of reviewResult.suggestions) {
        const suggestionErrors = await this.validateSuggestion(suggestion);
        const suggestionWarnings = this.validateSuggestionWarnings(suggestion);
        
        semanticErrors.push(...suggestionErrors);
        warnings.push(...suggestionWarnings);
      }
    }

    return {
      valid: semanticErrors.length === 0,
      semanticErrors,
      warnings
    };
  }

  /**
   * 验证 summary 统计是否自洽
   */
  private static validateSummaryConsistency(
    reviewResult: ReviewResultV1
  ): SemanticValidationError[] {
    const errors: SemanticValidationError[] = [];

    // 检查 issueCount
    if (reviewResult.summary.issueCount !== reviewResult.issues.length) {
      errors.push({
        type: 'SUMMARY_INCONSISTENCY',
        message: `Summary issueCount (${reviewResult.summary.issueCount}) does not match actual issues count (${reviewResult.issues.length})`
      });
    }

    // 检查 suggestionCount
    const suggestionCount = reviewResult.suggestions?.length || 0;
    if (reviewResult.summary.suggestionCount !== suggestionCount) {
      errors.push({
        type: 'SUMMARY_INCONSISTENCY',
        message: `Summary suggestionCount (${reviewResult.summary.suggestionCount}) does not match actual suggestions count (${suggestionCount})`
      });
    }

    return errors;
  }

  /**
   * 验证 ID 唯一性
   */
  private static validateIdUniqueness(
    reviewResult: ReviewResultV1
  ): SemanticValidationError[] {
    const errors: SemanticValidationError[] = [];

    // 检查 issue ID 唯一性
    const issueIds = new Set<string>();
    for (const issue of reviewResult.issues) {
      if (issueIds.has(issue.id)) {
        errors.push({
          type: 'DUPLICATE_ISSUE_ID',
          message: `Duplicate issue ID: ${issue.id}`,
          issueId: issue.id
        });
      }
      issueIds.add(issue.id);
    }

    // 检查 suggestion ID 唯一性
    if (reviewResult.suggestions) {
      const suggestionIds = new Set<string>();
      for (const suggestion of reviewResult.suggestions) {
        if (suggestionIds.has(suggestion.id)) {
          errors.push({
            type: 'DUPLICATE_SUGGESTION_ID',
            message: `Duplicate suggestion ID: ${suggestion.id}`,
            suggestionId: suggestion.id
          });
        }
        suggestionIds.add(suggestion.id);
      }
    }

    return errors;
  }

  /**
   * 验证单个 issue
   */
  private static async validateIssue(
    issue: ReviewIssue
  ): Promise<SemanticValidationError[]> {
    const errors: SemanticValidationError[] = [];

    // 如果没有 location，跳过验证
    if (!issue.location) {
      return errors;
    }

    // 验证文件路径是否存在
    const fileExists = await this.checkFileExists(issue.location.filePath);
    if (!fileExists) {
      errors.push({
        type: 'FILE_NOT_FOUND',
        message: `File not found in workspace: ${issue.location.filePath}`,
        issueId: issue.id,
        filePath: issue.location.filePath
      });
    }

    // 验证 range 是否有效
    if (issue.location.range) {
      const rangeValid = await this.validateRange(
        issue.location.filePath,
        issue.location.range
      );

      if (!rangeValid) {
        errors.push({
          type: 'RANGE_OUT_OF_BOUNDS',
          message: `Range out of bounds in ${issue.location.filePath}: lines ${issue.location.range.startLine}-${issue.location.range.endLine}`,
          issueId: issue.id,
          filePath: issue.location.filePath
        });
      }
    }

    return errors;
  }

  /**
   * 验证单个 suggestion
   */
  private static async validateSuggestion(
    suggestion: ReviewSuggestion
  ): Promise<SemanticValidationError[]> {
    const errors: SemanticValidationError[] = [];

    // 如果没有 diff，跳过验证
    if (!suggestion.diff) {
      return errors;
    }

    // 验证 diff 内容
    const parseResult = DiffParser.parse(suggestion.diff.content);
    if (!parseResult.success) {
      errors.push({
        type: 'DIFF_MISMATCH',
        message: `Failed to parse diff in suggestion ${suggestion.id}: ${parseResult.error}`,
        suggestionId: suggestion.id
      });
      return errors;
    }

    // 验证 diff 是否只影响 appliesTo.filePath
    if (suggestion.appliesTo?.filePath) {
      const filesInDiff = new Set(
        parseResult.files.map(f => f.normalizedPath)
      );

      if (!filesInDiff.has(suggestion.appliesTo.filePath)) {
        errors.push({
          type: 'DIFF_MISMATCH',
          message: `Diff in suggestion ${suggestion.id} does not affect file ${suggestion.appliesTo.filePath}`,
          suggestionId: suggestion.id,
          filePath: suggestion.appliesTo.filePath
        });
      }

      // 如果 diff 包含多个文件，但 appliesTo 只指定了一个，警告
      if (filesInDiff.size > 1) {
        errors.push({
          type: 'DIFF_MISMATCH',
          message: `Diff in suggestion ${suggestion.id} affects ${filesInDiff.size} files, but appliesTo only specifies ${suggestion.appliesTo.filePath}`,
          suggestionId: suggestion.id
        });
      }
    }

    return errors;
  }

  /**
   * 验证 issue 的警告
   */
  private static validateIssueWarnings(issue: ReviewIssue): SemanticValidationWarning[] {
    const warnings: SemanticValidationWarning[] = [];

    // 检查低置信度
    if (issue.confidence !== undefined && issue.confidence < 0.5) {
      warnings.push({
        type: 'LOW_CONFIDENCE',
        message: `Issue ${issue.id} has low confidence: ${issue.confidence}`,
        issueId: issue.id
      });
    }

    // 检查缺少解释
    if (!issue.explanation && issue.severity === 'error') {
      warnings.push({
        type: 'MISSING_EXPLANATION',
        message: `High severity issue ${issue.id} lacks explanation`,
        issueId: issue.id
      });
    }

    return warnings;
  }

  /**
   * 验证 suggestion 的警告
   */
  private static validateSuggestionWarnings(suggestion: ReviewSuggestion): SemanticValidationWarning[] {
    const warnings: SemanticValidationWarning[] = [];

    // 检查高风险建议
    if (suggestion.safety.risk === 'high') {
      warnings.push({
        type: 'HIGH_RISK_SUGGESTION',
        message: `Suggestion ${suggestion.id} has high risk`,
        suggestionId: suggestion.id
      });
    }

    return warnings;
  }

  /**
   * 检查文件是否存在
   */
  private static async checkFileExists(
    filePath: string
  ): Promise<boolean> {
    try {
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        // 如果没有 workspace，假设文件不存在
        return false;
      }

      const uri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);
      
      try {
        await vscode.workspace.fs.stat(uri);
        return true;
      } catch {
        return false;
      }
    } catch {
      return false;
    }
  }

  /**
   * 验证 range 是否在文件行数内
   */
  private static async validateRange(
    filePath: string,
    range: {
      startLine: number;
      startChar?: number;
      endLine: number;
      endChar?: number;
    }
  ): Promise<boolean> {
    try {
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        return false;
      }

      const uri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);
      
      try {
        const document = await vscode.workspace.openTextDocument(uri);
        const lineCount = document.lineCount;

        // range 使用 0-based 索引
        if (range.startLine < 0 || range.startLine >= lineCount) {
          return false;
        }

        if (range.endLine < 0 || range.endLine >= lineCount) {
          return false;
        }

        if (range.endLine < range.startLine) {
          return false;
        }

        return true;
      } catch {
        return false;
      }
    } catch {
      return false;
    }
  }

  /**
   * 快捷函数：验证并抛出异常（如果不通过）
   */
  static async validateOrThrow(
    reviewResult: ReviewResultV1
  ): Promise<void> {
    const result = await this.validate(reviewResult);

    if (!result.valid) {
      const errorMessage = result.semanticErrors
        .map(e => e.message)
        .join('\n');
      throw new Error(`Semantic validation failed:\n${errorMessage}`);
    }
  }
}

/**
 * 快捷函数：验证 ReviewResult
 */
export async function validateSemanticReview(
  reviewResult: ReviewResultV1
): Promise<SemanticValidationResult> {
  return SemanticReviewValidator.validate(reviewResult);
}
