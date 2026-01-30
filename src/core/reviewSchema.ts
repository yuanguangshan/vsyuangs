/**
 * Review JSON Schema v1
 * 
 * 设计目标：
 * - 人类可读（调试、日志）
 * - 机器可执行（Diagnostics / CodeAction）
 * - 安全可审计（Malicious Diff Defense）
 * - 向前兼容 v2 / v3
 */

/**
 * Review 结果 v1
 */
export interface ReviewResultV1 {
  /** Schema 版本 */
  schemaVersion: "1.0";

  /** 元数据 */
  meta: {
    /** 模型名称 */
    model: string;
    /** 生成时间（ISO Date） */
    generatedAt: string;
    /** 审查类型 */
    reviewType: "commit" | "diff" | "file";
  };

  /** 摘要 */
  summary: {
    /** 风险级别 */
    riskLevel: "low" | "medium" | "high";
    /** 问题数量 */
    issueCount: number;
    /** 建议数量 */
    suggestionCount: number;
  };

  /** 问题列表 */
  issues: ReviewIssue[];

  /** 建议列表（可选） */
  suggestions?: ReviewSuggestion[];
}

/**
 * Review Issue（Diagnostics 的核心）
 */
export interface ReviewIssue {
  /** 唯一标识符（UUID） */
  id: string;

  /** 问题类型 */
  type: "bug" | "security" | "performance" | "style" | "logic" | "best_practice";

  /** 严重程度 */
  severity: "info" | "warning" | "error";

  /** 问题消息 */
  message: string;

  /** 位置信息（可选，允许跨文件/语义级问题） */
  location?: {
    /** 文件路径 */
    filePath: string;
    /** 代码范围 */
    range?: {
      /** 起始行号（0-based） */
      startLine: number;
      /** 起始字符位置（可选） */
      startChar?: number;
      /** 结束行号（0-based） */
      endLine: number;
      /** 结束字符位置（可选） */
      endChar?: number;
    };
  };

  /** 详细解释（可选） */
  explanation?: string;

  /** 置信度（0~1，用于 UI 透明度或过滤） */
  confidence?: number;

  /** 相关代码片段（可选） */
  codeSnippet?: string;
}

/**
 * Review Suggestion（CodeAction 的桥梁）
 */
export interface ReviewSuggestion {
  /** 唯一标识符（UUID） */
  id: string;

  /** 建议标题（CodeAction 标题） */
  title: string;

  /** 建议描述（可选） */
  description?: string;

  /** 应用范围（可选） */
  appliesTo?: {
    /** 文件路径 */
    filePath: string;
    /** 代码范围 */
    range?: {
      /** 起始行号（0-based） */
      startLine: number;
      /** 结束行号（0-based） */
      endLine: number;
    };
  };

  /** Diff 内容（可选） */
  diff?: {
    /** Diff 类型 */
    type: "unified";
    /** Diff 内容 */
    content: string;
  };

  /** 安全信息 */
  safety: {
    /** 风险级别 */
    risk: "low" | "medium" | "high";
    /** 是否需要用户确认 */
    requiresConfirmation?: boolean;
  };
}

/**
 * Commit Suggestion（智能 Stage 建议）
 */
export interface CommitSuggestion {
  /** 唯一标识符 */
  id: string;

  /** Commit 消息建议 */
  commitMessage: {
    /** 标题 */
    title: string;
    /** 详细描述（可选） */
    body?: string;
    /** 类型（可选） */
    type?: "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore";
  };

  /** 文件分组 */
  fileGroups: FileGroup[];

  /** 分组理由 */
  rationale: string;
}

/**
 * 文件分组（用于智能 Stage 建议）
 */
export interface FileGroup {
  /** 分组 ID */
  id: string;

  /** 分组名称（如 "UI Changes", "Logic Updates"） */
  name: string;

  /** 分组类型 */
  type: "ui" | "logic" | "docs" | "test" | "config" | "other";

  /** 文件列表 */
  files: string[];

  /** 变更统计 */
  stats: {
    /** 添加行数 */
    added: number;
    /** 删除行数 */
    removed: number;
    /** 上下文行数 */
    context: number;
  };
}

/**
 * Review Schema 验证器
 */
export class ReviewSchemaValidator {
  /**
   * 验证 ReviewResultV1 对象
   */
  static validate(result: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!result) {
      return { valid: false, errors: ['Review result is null or undefined'] };
    }

    // 验证 schemaVersion
    if (result.schemaVersion !== "1.0") {
      errors.push(`Invalid schemaVersion: ${result.schemaVersion}, expected "1.0"`);
    }

    // 验证 meta
    if (!result.meta) {
      errors.push('Missing meta field');
    } else {
      if (!result.meta.model) {
        errors.push('Missing meta.model field');
      }
      if (!result.meta.generatedAt) {
        errors.push('Missing meta.generatedAt field');
      }
    }

    // 验证 summary
    if (!result.summary) {
      errors.push('Missing summary field');
    } else {
      const validRiskLevels = ['low', 'medium', 'high'];
      if (!validRiskLevels.includes(result.summary.riskLevel)) {
        errors.push(`Invalid summary.riskLevel: ${result.summary.riskLevel}`);
      }
      if (typeof result.summary.issueCount !== 'number') {
        errors.push('summary.issueCount must be a number');
      }
      if (typeof result.summary.suggestionCount !== 'number') {
        errors.push('summary.suggestionCount must be a number');
      }
    }

    // 验证 issues
    if (!Array.isArray(result.issues)) {
      errors.push('issues must be an array');
    } else {
      for (let i = 0; i < result.issues.length; i++) {
        const issueErrors = this.validateIssue(result.issues[i]);
        errors.push(...issueErrors.map(e => `issues[${i}]: ${e}`));
      }
    }

    // 验证 suggestions（如果存在）
    if (result.suggestions && !Array.isArray(result.suggestions)) {
      errors.push('suggestions must be an array');
    } else if (result.suggestions) {
      for (let i = 0; i < result.suggestions.length; i++) {
        const suggestionErrors = this.validateSuggestion(result.suggestions[i]);
        errors.push(...suggestionErrors.map(e => `suggestions[${i}]: ${e}`));
      }
    }

    return { valid: errors.length === 0, errors };
  }

  /**
   * 验证单个 Issue
   */
  private static validateIssue(issue: any): string[] {
    const errors: string[] = [];

    if (!issue.id) {
      errors.push('Missing id field');
    }

    const validTypes = ['bug', 'security', 'performance', 'style', 'logic', 'best_practice'];
    if (!validTypes.includes(issue.type)) {
      errors.push(`Invalid type: ${issue.type}`);
    }

    const validSeverities = ['info', 'warning', 'error'];
    if (!validSeverities.includes(issue.severity)) {
      errors.push(`Invalid severity: ${issue.severity}`);
    }

    if (!issue.message) {
      errors.push('Missing message field');
    }

    if (issue.confidence !== undefined && (issue.confidence < 0 || issue.confidence > 1)) {
      errors.push('Confidence must be between 0 and 1');
    }

    return errors;
  }

  /**
   * 验证单个 Suggestion
   */
  private static validateSuggestion(suggestion: any): string[] {
    const errors: string[] = [];

    if (!suggestion.id) {
      errors.push('Missing id field');
    }

    if (!suggestion.title) {
      errors.push('Missing title field');
    }

    if (!suggestion.safety) {
      errors.push('Missing safety field');
    } else {
      const validRisks = ['low', 'medium', 'high'];
      if (!validRisks.includes(suggestion.safety.risk)) {
        errors.push(`Invalid safety.risk: ${suggestion.safety.risk}`);
      }
    }

    return errors;
  }
}