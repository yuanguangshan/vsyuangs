/**
 * Diff Security Validator - 恶意 Diff 防御层
 * 
 * 目标：
 * - 防止路径穿越攻击
 * - 防止绝对路径攻击
 * - 防止大文件 DoS 攻击
 * - 防止上下文模糊攻击
 * - 防止 Hunk Header 伪造
 * 
 * 原则：
 * - 宁可失败，也不误改
 * - 任何不匹配立即失败
 * - 不允许模糊匹配
 * - 不自动偏移行号
 */

import { DiffParseResult, DiffFile, DiffHunk } from './diff';

/**
 * 安全限制配置
 */
export interface SecurityLimits {
  /** 最大单行长度（字节） */
  maxLineLength: number;
  /** 最大上下文行数 */
  maxContextLines: number;
  /** 每个 hunk 的最大行数 */
  maxHunkLines: number;
  /** 每个文件的最大 hunk 数 */
  maxHunksPerFile: number;
  /** 每个 diff 的最大文件数 */
  maxFilesPerDiff: number;
  /** 允许的文件扩展名（空数组表示全部允许） */
  allowedExtensions: string[];
  /** 禁止的路径模式（正则表达式数组） */
  forbiddenPathPatterns: RegExp[];
}

/**
 * 默认安全限制
 */
export const DEFAULT_SECURITY_LIMITS: SecurityLimits = {
  maxLineLength: 4096,        // 4KB
  maxContextLines: 200,       // 200 行上下文
  maxHunkLines: 1000,         // 每个 hunk 最多 1000 行
  maxHunksPerFile: 50,        // 每个文件最多 50 个 hunks
  maxFilesPerDiff: 20,        // 每个 diff 最多 20 个文件
  allowedExtensions: [],      // 允许所有扩展名
  forbiddenPathPatterns: [
    /\.\./,                   // 禁止路径穿越
    /^\/.*/,                  // 禁止绝对路径
    /^[A-Za-z]:\\/            // 禁止 Windows 驱动器路径
  ]
};

/**
 * 验证结果
 */
export interface SecurityValidationResult {
  /** 是否通过验证 */
  valid: boolean;
  /** 错误信息（如果验证失败） */
  errors: SecurityValidationError[];
}

/**
 * 验证错误
 */
export interface SecurityValidationError {
  /** 错误类型 */
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
  
  /** 错误消息 */
  message: string;
  
  /** 相关文件路径（可选） */
  filePath?: string;
  
  /** 相关 hunk 索引（可选） */
  hunkIndex?: number;
  
  /** 相关行号（可选） */
  line?: number;
  
  /** 实际值（可选） */
  actual?: number;
  
  /** 最大允许值（可选） */
  max?: number;
}

/**
 * Diff Security Validator
 */
export class DiffSecurityValidator {
  private limits: SecurityLimits;

  constructor(limits: Partial<SecurityLimits> = {}) {
    this.limits = { ...DEFAULT_SECURITY_LIMITS, ...limits };
  }

  /**
   * 验证整个 Diff
   */
  validate(diff: DiffParseResult): SecurityValidationResult {
    const errors: SecurityValidationError[] = [];

    if (!diff.success) {
      return {
        valid: false,
        errors: [{
          type: 'INVALID_UNIFIED_DIFF',
          message: 'Diff parsing failed, cannot validate'
        }]
      };
    }

    // 检查文件数量
    if (diff.files.length > this.limits.maxFilesPerDiff) {
      errors.push({
        type: 'TOO_MANY_FILES',
        message: `Too many files in diff: ${diff.files.length} (max: ${this.limits.maxFilesPerDiff})`,
        actual: diff.files.length,
        max: this.limits.maxFilesPerDiff
      });
    }

    // 检查每个文件
    for (const file of diff.files) {
      const fileErrors = this.validateFile(file);
      errors.push(...fileErrors);
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * 验证单个文件
   */
  private validateFile(file: DiffFile): SecurityValidationError[] {
    const errors: SecurityValidationError[] = [];

    // 检查路径安全性
    const pathErrors = this.validatePath(file.normalizedPath);
    errors.push(...pathErrors.map(e => ({ ...e, filePath: file.normalizedPath })));

    // 检查文件扩展名
    const extErrors = this.validateFileExtension(file.normalizedPath);
    errors.push(...extErrors.map(e => ({ ...e, filePath: file.normalizedPath })));

    // 检查 hunk 数量
    if (file.hunks.length > this.limits.maxHunksPerFile) {
      errors.push({
        type: 'TOO_MANY_HUNKS',
        message: `Too many hunks in file ${file.normalizedPath}: ${file.hunks.length} (max: ${this.limits.maxHunksPerFile})`,
        filePath: file.normalizedPath,
        actual: file.hunks.length,
        max: this.limits.maxHunksPerFile
      });
    }

    // 检查每个 hunk
    for (let i = 0; i < file.hunks.length; i++) {
      const hunkErrors = this.validateHunk(file.hunks[i], i);
      errors.push(...hunkErrors);
    }

    return errors;
  }

  /**
   * 验证路径安全性
   */
  private validatePath(path: string): SecurityValidationError[] {
    const errors: SecurityValidationError[] = [];

    // 检查路径穿越
    if (path.includes('..')) {
      errors.push({
        type: 'PATH_TRAVERSAL',
        message: `Path traversal detected in ${path}`
      });
    }

    // 检查绝对路径
    if (path.startsWith('/') || /^[A-Za-z]:/.test(path)) {
      errors.push({
        type: 'ABSOLUTE_PATH',
        message: `Absolute path detected: ${path}`
      });
    }

    // 检查禁止的模式
    for (const pattern of this.limits.forbiddenPathPatterns) {
      if (pattern.test(path)) {
        errors.push({
          type: 'FORBIDDEN_PATH_PATTERN',
          message: `Forbidden path pattern detected in ${path}`
        });
      }
    }

    return errors;
  }

  /**
   * 验证文件扩展名
   */
  private validateFileExtension(path: string): SecurityValidationError[] {
    const errors: SecurityValidationError[] = [];

    if (this.limits.allowedExtensions.length > 0) {
      const ext = path.split('.').pop()?.toLowerCase() || '';
      if (!this.limits.allowedExtensions.includes(ext)) {
        errors.push({
          type: 'EXTENSION_NOT_ALLOWED',
          message: `File extension not allowed: .${ext} in ${path}`
        });
      }
    }

    return errors;
  }

  /**
   * 验证单个 Hunk
   */
  private validateHunk(hunk: DiffHunk, hunkIndex: number): SecurityValidationError[] {
    const errors: SecurityValidationError[] = [];

    // 检查上下文行数
    if (hunk.stats.context > this.limits.maxContextLines) {
      errors.push({
        type: 'CONTEXT_TOO_LARGE',
        message: `Too many context lines in hunk at ${hunk.filePath}:${hunk.oldStart}: ${hunk.stats.context} (max: ${this.limits.maxContextLines})`,
        filePath: hunk.filePath,
        hunkIndex,
        actual: hunk.stats.context,
        max: this.limits.maxContextLines
      });
    }

    // 检查 hunk 总行数
    const totalLines = hunk.lines.length;
    if (totalLines > this.limits.maxHunkLines) {
      errors.push({
        type: 'HUNK_TOO_LARGE',
        message: `Hunk too large at ${hunk.filePath}:${hunk.oldStart}: ${totalLines} lines (max: ${this.limits.maxHunkLines})`,
        filePath: hunk.filePath,
        hunkIndex,
        actual: totalLines,
        max: this.limits.maxHunkLines
      });
    }

    // 检查每行长度
    for (let i = 0; i < hunk.lines.length; i++) {
      const line = hunk.lines[i];
      if (line.content.length > this.limits.maxLineLength) {
        errors.push({
          type: 'LINE_TOO_LONG',
          message: `Line too long in ${hunk.filePath} (diff line ${line.lineNumber}): ${line.content.length} bytes (max: ${this.limits.maxLineLength})`,
          filePath: hunk.filePath,
          hunkIndex,
          line: line.lineNumber,
          actual: line.content.length,
          max: this.limits.maxLineLength
        });
      }
    }

    // 检查 Hunk Header 伪造（行数统计匹配）
    const headerValidation = this.validateHunkHeader(hunk);
    if (!headerValidation.valid) {
      errors.push({
        type: 'HUNK_HEADER_FORGERY',
        message: headerValidation.error,
        filePath: hunk.filePath,
        hunkIndex
      });
    }

    return errors;
  }

  /**
   * 验证 Hunk Header 的行数统计
   */
  private validateHunkHeader(hunk: DiffHunk): { valid: boolean; error?: string } {
    // Unified diff 语义：
    // - oldCount = context + removed
    // - newCount = context + added

    const oldLines = hunk.stats.context + hunk.stats.removed;
    const newLines = hunk.stats.context + hunk.stats.added;

    if (oldLines !== hunk.oldCount) {
      return {
        valid: false,
        error: `Hunk header forgery detected at ${hunk.filePath}:${hunk.oldStart}: expected ${hunk.oldCount} old lines (context+removed), found ${oldLines}`
      };
    }

    if (newLines !== hunk.newCount) {
      return {
        valid: false,
        error: `Hunk header forgery detected at ${hunk.filePath}:${hunk.oldStart}: expected ${hunk.newCount} new lines (context+added), found ${newLines}`
      };
    }

    return { valid: true };
  }

  /**
   * 验证 Diff 内容（原始文本）
   * 
   * 重要：此方法会在内部解析 diff 并在 DiffParseResult 上进行完整的安全验证
   * 这样可以确保所有安全检查都落在同一个数据结构上，避免"安全策略分叉"
   */
  validateDiffText(diffText: string): SecurityValidationResult {
    // 导入 DiffParser（延迟导入避免循环依赖）
    const { DiffParser } = require('./diff');
    
    // 必须先解析 diff
    const parseResult = DiffParser.parse(diffText);
    
    // 如果解析失败，立即返回无效
    if (!parseResult.success) {
      return {
        valid: false,
        errors: [{
          type: 'INVALID_UNIFIED_DIFF',
          message: 'Diff parsing failed: ' + (parseResult.error || 'Unknown error')
        }]
      };
    }
    
    // 然后在解析后的 diff 上进行完整的安全验证
    // 这样确保 validateDiffText 和 validate 的安全策略完全一致
    return this.validate(parseResult);
  }

  /**
   * 更新安全限制
   */
  updateLimits(limits: Partial<SecurityLimits>): void {
    this.limits = { ...this.limits, ...limits };
  }

  /**
   * 获取当前安全限制
   */
  getLimits(): SecurityLimits {
    return { ...this.limits };
  }
}

/**
 * 快捷函数：使用默认限制验证 Diff
 */
export function validateDiffSecurity(diff: DiffParseResult): SecurityValidationResult {
  const validator = new DiffSecurityValidator();
  return validator.validate(diff);
}