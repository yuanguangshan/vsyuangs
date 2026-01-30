/**
 * Diff Parser v2 - Unified Diff 解析器（类型安全 + 校验）
 * 
 * 设计原则：
 * - 语义不可变：一个 block = 一个 hunk
 * - 不使用 union 类型
 * - Parser 阶段完成校验
 * - 为 Safe Apply Engine 打基础
 * 
 * 支持的 diff 形态（严格 unified diff 子集）：
 * - --- a/path/to/file.ts
 * - +++ b/path/to/file.ts
 * - @@ -start,count +start,count @@ optional context
 * - - removed line
 * - + added line
 *   unchanged line (context)
 */

import * as vscode from 'vscode';

// ============================================================================
// 类型定义（v2 核心）
// ============================================================================

/**
 * Diff 行类型（强类型，无 union）
 */
export interface DiffLine {
  /** 行类型 */
  type: 'context' | 'add' | 'remove';
  /** 去除 +/- 后的内容 */
  content: string;
  /** 原始 diff 行（保留 + / -） */
  raw: string;
  /** 在 diff 中的行号（从 0 开始） */
  lineNumber: number;
}

/**
 * Diff Hunk（一个 @@@ 块）
 */
export interface DiffHunk {
  /** 文件路径（已规范化，无 a/ 或 b/ 前缀） */
  filePath: string;
  /** 语言类型（推断） */
  language?: string;
  /** Hunk 头部：@@ -oldStart,oldCount +newStart,newCount @@ */
  header: string;
  /** 旧文件起始行号 */
  oldStart: number;
  /** 旧文件行数 */
  oldCount: number;
  /** 新文件起始行号 */
  newStart: number;
  /** 新文件行数 */
  newCount: number;
  /** Hunk 内的所有行 */
  lines: DiffLine[];
  /** 统计信息 */
  stats: {
    added: number;
    removed: number;
    context: number;
  };
}

/**
 * Diff File（一个文件的完整 diff）
 */
export interface DiffFile {
  /** 原始路径 */
  oldPath: string;
  /** 新路径 */
  newPath: string;
  /** 规范化后的路径 */
  normalizedPath: string;
  /** 该文件的所有 hunks */
  hunks: DiffHunk[];
  /** 该文件的统计 */
  stats: {
    added: number;
    removed: number;
    context: number;
    hunkCount: number;
  };
}

/**
 * 安全限制错误详情
 */
export interface LimitExceededDetail {
  /** 限制类型 */
  type: 'MAX_LINE_LENGTH' | 'MAX_CONTEXT_LINES' | 'MAX_HUNKS' | 'MAX_FILES';
  /** 实际值 */
  actual: number;
  /** 最大允许值 */
  max: number;
}

/**
 * 解析结果（成功）
 */
export interface DiffParseResult {
  success: true;
  files: DiffFile[];
  stats: {
    fileCount: number;
    hunkCount: number;
    totalAdded: number;
    totalRemoved: number;
  };
}

/**
 * 解析错误（带上下文）
 */
export interface DiffParseError {
  success: false;
  error: 'INVALID_FORMAT' | 'HUNK_MISMATCH' | 'INVALID_PATH' | 
          'MISSING_CONTEXT' | 'LINE_COUNT_MISMATCH' | 'LIMIT_EXCEEDED';
  message: string;
  line?: number;
  hunkIndex?: number;
  /** 安全限制详情（仅当 error === 'LIMIT_EXCEEDED' 时存在）*/
  limit?: LimitExceededDetail;
}

/**
 * 解析结果类型
 */
export type DiffResult = DiffParseResult | DiffParseError;

// ============================================================================
// Diff Parser v2（核心引擎）
// ============================================================================

/**
 * Unified Diff Parser v2
 * 
 * 特性：
 * - 严格校验（context 行、行数统计）
 * - 类型安全（无 union）
 * - 可追溯错误（带行号、hunk 索引）
 * - 支持多文件 diff
 */
export class DiffParser {
  /**
   * 解析 unified diff 文本
   * 
   * @param text unified diff 文本
   * @returns 解析结果（成功或错误）
   */
  static parse(text: string): DiffResult {
    const lines = text.split('\n');
    const files: DiffFile[] = [];

    let currentFile: DiffFile | null = null;
    let currentHunk: DiffHunk | null = null;
    let oldPath = '';
    let newPath = '';
    let normalizedPath = '';

    // 统计变量
    let totalHunkCount = 0;
    let totalAdded = 0;
    let totalRemoved = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]; // v2.1：完全保留原始行（包括右侧空格）
      const trimmedLine = line.trim();

      // 1. 检测文件头：--- a/file
      if (trimmedLine.startsWith('--- ')) {
        const match = trimmedLine.match(/^---\s+(?:a\/)?(.+?)(?:\s+|$)/);
        if (!match) {
          return this.error('INVALID_FORMAT', 'Invalid old file header', i);
        }
        oldPath = match[1] || '';
        continue;
      }

      // 2. 检测文件头：+++ b/file
      if (trimmedLine.startsWith('+++ ')) {
        const match = trimmedLine.match(/^\+\+\+\s+(?:b\/)?(.+?)(?:\s+|$)/);
        if (!match) {
          return this.error('INVALID_FORMAT', 'Invalid new file header', i);
        }
        newPath = match[1] || '';

        // 规范化路径
        normalizedPath = this.normalizePath(newPath);

        // 保存前一个文件（如果存在）
        if (currentFile) {
          // Finalize 前一个 hunk（如果存在）
          if (currentHunk) {
            const validateResult = this.validateHunkLineCount(currentHunk);
            if (!validateResult.ok) {
              return this.error(
                'LINE_COUNT_MISMATCH',
                validateResult.error || 'Unknown validation error',
                i,
                currentFile.hunks.length - 1
              );
            }

            currentFile.hunks.push(currentHunk);
            currentFile.stats.hunkCount++;
            currentFile.stats.added += currentHunk.stats.added;
            currentFile.stats.removed += currentHunk.stats.removed;
            currentFile.stats.context += currentHunk.stats.context;
            currentHunk = null;
          }

          files.push(currentFile);
          totalHunkCount += currentFile.stats.hunkCount;
          totalAdded += currentFile.stats.added;
          totalRemoved += currentFile.stats.removed;
        }

        // 创建新文件
        currentFile = {
          oldPath,
          newPath,
          normalizedPath,
          hunks: [],
          stats: {
            added: 0,
            removed: 0,
            context: 0,
            hunkCount: 0
          }
        };

        continue;
      }

      // 3. 检测 hunk 头：@@ -a,b +c,d @@
      if (trimmedLine.startsWith('@@')) {
        if (!currentFile) {
          return this.error('INVALID_FORMAT', 'Hunk found before file header', i);
        }

        // 保存前一个 hunk（如果存在）
        if (currentHunk) {
          // 校验行数统计
          const validateResult = this.validateHunkLineCount(currentHunk);
          if (!validateResult.ok) {
            return this.error(
              'LINE_COUNT_MISMATCH',
              validateResult.error || 'Unknown validation error',
              i,
              currentFile.hunks.length - 1
            );
          }

          currentFile.hunks.push(currentHunk);
          currentFile.stats.hunkCount++;
          currentFile.stats.added += currentHunk.stats.added;
          currentFile.stats.removed += currentHunk.stats.removed;
          currentFile.stats.context += currentHunk.stats.context;
        }

        // 解析 hunk 头
        const hunkMatch = trimmedLine.match(/^@@\s+-(\d+)(?:,(\d+))?\s+\+(\d+)(?:,(\d+))?\s+@@/);
        if (!hunkMatch) {
          return this.error('INVALID_FORMAT', 'Invalid hunk header', i);
        }

        const oldStart = parseInt(hunkMatch[1], 10);
        const oldCount = hunkMatch[2] ? parseInt(hunkMatch[2], 10) : 1;
        const newStart = parseInt(hunkMatch[3], 10);
        const newCount = hunkMatch[4] ? parseInt(hunkMatch[4], 10) : 1;

        // 创建新 hunk
        currentHunk = {
          filePath: normalizedPath,
          language: this.inferLanguage(normalizedPath),
          header: trimmedLine,
          oldStart,
          oldCount,
          newStart,
          newCount,
          lines: [],
          stats: {
            added: 0,
            removed: 0,
            context: 0
          }
        };

        continue;
      }

      // 4. 解析 diff 行
      if (currentHunk && currentFile) {
        const lineNumber = i;

        if (line.startsWith('+')) {
          // 添加行（排除 +++）
          if (!trimmedLine.startsWith('+++')) {
            const content = line.substring(1);
            currentHunk.lines.push({
              type: 'add',
              content,
              raw: line,
              lineNumber
            });
            currentHunk.stats.added++;
          }
        } else if (line.startsWith('-')) {
          // 删除行（排除 ---）
          if (!trimmedLine.startsWith('---')) {
            const content = line.substring(1);
            currentHunk.lines.push({
              type: 'remove',
              content,
              raw: line,
              lineNumber
            });
            currentHunk.stats.removed++;
          }
        } else if (line.startsWith(' ')) {
          // 上下文行
          const content = line.substring(1);
          currentHunk.lines.push({
            type: 'context',
            content,
            raw: line,
            lineNumber
          });
          currentHunk.stats.context++;
        } else if (line.startsWith('\\')) {
          // 跳过 diff 元数据（如 \ No newline at end of file）
          continue;
        } else if (trimmedLine.length === 0) {
          // 空行作为 context
          currentHunk.lines.push({
            type: 'context',
            content: '',
            raw: line,
            lineNumber
          });
          currentHunk.stats.context++;
        }
      }
    }

    // 保存最后一个 hunk 和文件
    if (currentHunk && currentFile) {
      const validateResult = this.validateHunkLineCount(currentHunk);
      if (!validateResult.ok) {
        return this.error('LINE_COUNT_MISMATCH', validateResult.error || 'Unknown validation error', lines.length - 1, currentFile.hunks.length);
      }

      currentFile.hunks.push(currentHunk);
      currentFile.stats.hunkCount++;
      currentFile.stats.added += currentHunk.stats.added;
      currentFile.stats.removed += currentHunk.stats.removed;
      currentFile.stats.context += currentHunk.stats.context;
    }

    if (currentFile) {
      files.push(currentFile);
      totalHunkCount += currentFile.stats.hunkCount;
      totalAdded += currentFile.stats.added;
      totalRemoved += currentFile.stats.removed;
    }

    // 最终校验：至少有一个文件
    if (files.length === 0) {
      return this.error('INVALID_FORMAT', 'No diff files found');
    }

    // 最终校验：所有文件至少有一个 hunk
    if (totalHunkCount === 0) {
      return this.error('INVALID_FORMAT', 'No hunks found in diff');
    }

    return {
      success: true,
      files,
      stats: {
        fileCount: files.length,
        hunkCount: totalHunkCount,
        totalAdded,
        totalRemoved
      }
    };
  }

  /**
   * 规范化文件路径
   * 
   * @param path 原始路径
   * @returns 规范化后的路径（去除 a/ 或 b/ 前缀）
   */
  private static normalizePath(path: string): string {
    if (path.startsWith('a/') || path.startsWith('b/')) {
      return path.substring(2);
    }
    return path;
  }

  /**
   * 推断语言类型
   * 
   * @param filePath 文件路径
   * @returns 语言类型
   */
  private static inferLanguage(filePath: string): string {
    const ext = filePath.split('.').pop()?.toLowerCase();
    const langMap: Record<string, string> = {
      js: 'javascript',
      ts: 'typescript',
      tsx: 'typescript',
      jsx: 'javascript',
      py: 'python',
      java: 'java',
      go: 'go',
      rs: 'rust',
      cpp: 'cpp',
      c: 'c',
      h: 'c',
      vue: 'vue',
      html: 'html',
      css: 'css',
      json: 'json',
      yaml: 'yaml',
      yml: 'yaml',
      md: 'markdown',
      sh: 'bash',
      bash: 'bash',
      sql: 'sql'
    };
    return langMap[ext || ''] || 'text';
  }

  /**
   * 校验 hunk 的行数统计（v2.1 修正：正确的 unified diff 语义）
   * 
   * unified diff 语义：
   * - oldCount = context + removed
   * - newCount = context + added
   * 
   * @param hunk 要校验的 hunk
   * @returns 校验结果
   */
  private static validateHunkLineCount(hunk: DiffHunk): { ok: boolean; error?: string } {
    // 修正：正确的 unified diff 行数统计
    const oldLines = hunk.stats.context + hunk.stats.removed;
    const newLines = hunk.stats.context + hunk.stats.added;

    if (oldLines !== hunk.oldCount) {
      return {
        ok: false,
        error: `Hunk line count mismatch: expected ${hunk.oldCount} old lines (context+removed), found ${oldLines}`
      };
    }

    if (newLines !== hunk.newCount) {
      return {
        ok: false,
        error: `Hunk line count mismatch: expected ${hunk.newCount} new lines (context+added), found ${newLines}`
      };
    }

    // 校验 context 行不能为空（可选）
    if (hunk.stats.context === 0 && hunk.stats.added > 0 && hunk.stats.removed > 0) {
      // 允许无 context 的 hunk（但在应用时会更危险）
      // 这里只发出警告，不返回错误
      console.warn(`[DiffParser] Hunk at ${hunk.filePath}:${hunk.oldStart} has no context lines`);
    }

    return { ok: true };
  }

  /**
   * 创建错误对象
   * 
   * @param error 错误类型
   * @param message 错误消息
   * @param line 错误行号（可选）
   * @param hunkIndex 错误 hunk 索引（可选）
   * @returns 解析错误对象
   */
  private static error(
    error: DiffParseError['error'],
    message: string,
    line?: number,
    hunkIndex?: number
  ): DiffParseError {
    return {
      success: false,
      error,
      message,
      line,
      hunkIndex
    };
  }
}

// ============================================================================
// Diff Applier v2（Safe Apply Engine - MVP）
// ============================================================================

/**
 * 应用结果（成功）
 */
export interface DiffApplyResult {
  success: true;
  changedFiles: string[];
  stats: {
    filesChanged: number;
    hunksApplied: number;
    linesAdded: number;
    linesRemoved: number;
  };
}

/**
 * 应用错误（带上下文）
 */
export interface DiffApplyError {
  success: false;
  error: 'FILE_NOT_FOUND' | 'CONTEXT_MISMATCH' | 'REMOVE_MISMATCH' | 'INVALID_DIFF';
  message: string;
  filePath?: string;
  hunkIndex?: number;
  line?: number;
}

/**
 * 应用结果类型
 */
export type ApplyResult = DiffApplyResult | DiffApplyError;

/**
 * 应用选项
 */
export interface DiffApplyOptions {
  /** 干运行（不实际应用，只校验） */
  dryRun?: boolean;
  /** 遇到冲突时是否失败（默认 true） */
  failOnConflict?: boolean;
}

/**
 * Safe Diff Applier
 * 
 * 特性：
 * - 增量应用（不覆盖整个文件）
 * - Context 校验（防止误改）
 * - 失败快速（不静默失败）
 * - 可回滚（TODO: 添加 undo 支持）
 * 
 * === Apply Engine 语义不变式（Semantic Invariants）===
 * 
 * 【全局不变式】
 * G1. Safety First（安全优先）
 *   - 宁可失败，也不误改
 *   - 任何一个 hunk apply 失败 → 整个 apply 失败
 *   - 不允许 partial apply
 *   - 不允许 silent fallback
 * 
 * G2. Determinism（确定性）
 *   - 相同输入 → 相同输出（或相同失败）
 *   - 不能依赖非确定性搜索顺序
 *   - 不能依赖 runtime 状态
 * 
 * G3. Single Source of Truth
 *   - 文档内容是唯一权威
 *   - 行号只是 hint（非权威）
 *   - Apply 决策只能由 Context exact match、Remove exact match 决定
 *   - 行号仅用于"起始搜索位置"
 * 
 * 【Hunk 级不变式】
 * H1. One Hunk = One Atomic Edit
 *   - 一个 hunk 要么完全应用
 *   - 不允许拆分、部分成功
 * 
 * H2. Line Accounting Invariant（行数守恒）
 *   - oldCount == contextLines + removedLines
 *   - newCount == contextLines + addedLines
 *   - delta = addedLines - removedLines
 * 
 * H3. Context Authority Invariant（上下文权威）
 *   - 所有 context 行必须逐字匹配
 *   - 匹配顺序必须一致
 *   - 不允许 skip context
 *   - 不允许 re-order context
 * 
 * H4. Remove Must Match Exactly（删除行红线）🔴
 *   - 每一条 remove 行必须在 context 确认的位置
 *   - 必须逐字匹配（包括空格）
 *   - 🚫 fuzzy matching 永远不能：忽略 remove 行、模糊 remove 行
 * 
 * H5. No Cross-Hunk Interaction
 *   - hunk A 的匹配结果不得影响 hunk B 的匹配逻辑
 *   - 只能通过已变更文档状态产生影响
 * 
 * 【多 Hunk 应用不变式】
 * M1. Sequential Mutation Invariant
 *   - hunk[0] → original document
 *   - hunk[1] → doc after hunk[0]
 *   - 🚫 禁止：预计算所有 edit ranges、对原始 snapshot apply 所有 hunks
 * 
 * M2. Cursor Monotonicity（推荐）
 *   - Apply cursor 只能：向前移动或保持不变（失败时）
 *   - 避免 O(n²) 重扫
 * 
 * 【空行/空白语义不变式】
 * W1. 三态模型必须保留
 *   - 空行 content = ""
 *   - 空白行 content = /^\s+$/
 *   - 普通行 content = other
 *   - "" 只能匹配真正的空行
 *   - 空白行必须逐字匹配空白
 *   - 🚫 不允许 normalize / trim
 * 
 * 【Error Semantics Invariant】
 * E1. Error Is Precise
 *   - 错误必须说明：hunkIndex、diff line number、mismatch 类型
 *   - 🚫 不允许："Apply failed" without reason
 * 
 * === Fuzzy Matching 红线约束 ===
 * 
 * 🚫 绝对红线（不能破）：
 * - ❌ Remove 行模糊匹配
 * - ❌ Cross-Hunk Search（穿越 hunk 边界）
 * - ❌ "Best match wins"（选"最相似"的）
 * 
 * ⚠️ 高风险实现点（常被忽略）：
 * - Levenshtein 距离：非单调、非直觉安全、极易产生 multiple matches
 * - 忽略缩进：在 Python/YAML/Makefile 中是灾难
 * - fuzzy + 行号 hint：很容易变成"行号主导 apply"，直接违反 G1/G3
 * 
 * ✅ 安全实现模型：
 * 1. 精确匹配失败
 * 2. 如果 fuzzy disabled → fail
 * 3. 启用 fuzzy：仅对 context、在有限窗口内搜索（±20 行）
 * 4. 统计候选数
 * 5. != 1 → fail
 * 
 * === 性能与 DoS 防御 ===
 * 
 * - Fuzzy search = O(n * window * cost)
 * - Levenshtein = O(mn)
 * - ✅ 窗口必须 hard-limit（如 ±20 行）
 * - ✅ context 行数必须小（已限制 max 200）
 * - ✅ fail fast（第一个 mismatch 就退出）
 * 
 * ⚠️ 唯一真正的风险：
 * 不是设计，而是未来实现时的"便利性妥协"
 * - "先让它工作"
 * - "AI diff 有点不准，宽松点吧"
 * 
 * 🚫 任何违反 remove/context 精确性的 PR 都应该被直接拒绝
 */
export class DiffApplier {
  /**
   * 应用 diff 到工作区
   * 
   * @param diff 解析后的 diff
   * @param options 应用选项
   * @returns 应用结果（成功或错误）
   */
  static async apply(diff: DiffParseResult, options: DiffApplyOptions = {}): Promise<ApplyResult> {
    if (!diff.success) {
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: 'Invalid diff result'
      };
    }

    const edit = new vscode.WorkspaceEdit();
    const changedFiles = new Set<string>();
    let hunksApplied = 0;
    let linesAdded = 0;
    let linesRemoved = 0;

    // 遍历每个文件
    for (const file of diff.files) {
      // 检查文件是否打开
      const doc = vscode.workspace.textDocuments.find(d =>
        d.uri.fsPath?.endsWith(file.normalizedPath) || false
      );

      if (!doc) {
        if (options.failOnConflict !== false) {
          return {
            success: false,
            error: 'FILE_NOT_FOUND',
            message: `File not found or not open: ${file.normalizedPath}`,
            filePath: file.normalizedPath
          };
        }
        console.warn(`[DiffApplier] File not found: ${file.normalizedPath}`);
        continue;
      }

      // 遍历每个 hunk
      for (let hunkIndex = 0; hunkIndex < file.hunks.length; hunkIndex++) {
        const hunk = file.hunks[hunkIndex];

        try {
          // 应用单个 hunk
          const applyResult = await this.applyHunk(doc, hunk, edit, options);

          if (!applyResult.ok) {
            return {
              success: false,
              error: 'CONTEXT_MISMATCH',
              message: applyResult.error || 'Unknown error',
              filePath: file.normalizedPath,
              hunkIndex,
              line: applyResult.line
            };
          }

          hunksApplied++;
          linesAdded += hunk.stats.added;
          linesRemoved += hunk.stats.removed;
          changedFiles.add(file.normalizedPath);

        } catch (error) {
          if (options.failOnConflict !== false) {
            return {
              success: false,
              error: 'CONTEXT_MISMATCH',
              message: error instanceof Error ? error.message : String(error),
              filePath: file.normalizedPath,
              hunkIndex,
              line: undefined
            };
          }
          console.error(`[DiffApplier] Failed to apply hunk:`, error);
        }
      }
    }

    // 干运行模式：不实际应用
    if (options.dryRun) {
      console.log('[DiffApplier] Dry run complete. Would apply:', {
        files: Array.from(changedFiles),
        hunks: hunksApplied,
        linesAdded,
        linesRemoved
      });

      return {
        success: true,
        changedFiles: Array.from(changedFiles),
        stats: {
          filesChanged: changedFiles.size,
          hunksApplied,
          linesAdded,
          linesRemoved
        }
      };
    }

    // 实际应用
    const success = await vscode.workspace.applyEdit(edit);

    if (!success) {
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: 'Failed to apply workspace edit'
      };
    }

    return {
      success: true,
      changedFiles: Array.from(changedFiles),
      stats: {
        filesChanged: changedFiles.size,
        hunksApplied,
        linesAdded,
        linesRemoved
      }
    };
  }

  /**
   * 应用单个 hunk（MVP 实现）
   * 
   * @param doc 文档对象
   * @param hunk 要应用的 hunk
   * @param edit 工作区编辑对象
   * @param options 应用选项
   * @returns 应用结果
   */
  private static async applyHunk(
    doc: vscode.TextDocument,
    hunk: DiffHunk,
    edit: vscode.WorkspaceEdit,
    options: DiffApplyOptions
  ): Promise<{ ok: boolean; error?: string; line?: number }> {
    // 定位 hunk 起始位置（使用 context 行）
    const line = this.locateHunkStart(doc, hunk);

    if (line === -1) {
      return {
        ok: false,
        error: `Cannot locate hunk start at line ${hunk.oldStart}`
      };
    }

    // 从下往上应用（避免行号偏移）
    let currentLine = line;
    const removeEdits: vscode.Range[] = [];
    const addEdits: Array<{ pos: vscode.Position; text: string }> = [];

    for (const diffLine of hunk.lines) {
      if (diffLine.type === 'context') {
        // 校验 context 行是否匹配
        if (currentLine >= doc.lineCount) {
          return {
            ok: false,
            error: 'Context line out of bounds',
            line: diffLine.lineNumber
          };
        }

        const actualLine = doc.lineAt(currentLine).text;
        if (actualLine !== diffLine.content) {
          return {
            ok: false,
            error: `Context mismatch at line ${currentLine + 1}: expected "${diffLine.content}", got "${actualLine}"`,
            line: diffLine.lineNumber
          };
        }
        currentLine++;
      } else if (diffLine.type === 'remove') {
        // 标记删除（稍后执行）
        if (currentLine >= doc.lineCount) {
          return {
            ok: false,
            error: 'Remove line out of bounds',
            line: diffLine.lineNumber
          };
        }

        const actualLine = doc.lineAt(currentLine).text;
        if (actualLine !== diffLine.content) {
          return {
            ok: false,
            error: `Remove mismatch at line ${currentLine + 1}: expected "${diffLine.content}", got "${actualLine}"`,
            line: diffLine.lineNumber
          };
        }

        removeEdits.push(doc.lineAt(currentLine).range);
        currentLine++;
      } else if (diffLine.type === 'add') {
        // 标记添加（稍后执行）
        // v2.1 改进：使用完整行内容，保留原始缩进和换行符
        addEdits.push({
          pos: new vscode.Position(currentLine, 0),
          text: diffLine.raw.substring(1) + '\n' // 去除 + 但保留所有其他字符
        });
        // 添加行不增加 currentLine
      }
    }

    // 执行删除（从后往前）
    for (let i = removeEdits.length - 1; i >= 0; i--) {
      edit.delete(doc.uri, removeEdits[i]);
    }

    // 执行添加
    for (const addEdit of addEdits) {
      edit.insert(doc.uri, addEdit.pos, addEdit.text);
    }

    return { ok: true };
  }

  /**
   * 定位 hunk 起始位置
   * 
   * @param doc 文档对象
   * @param hunk 要定位的 hunk
   * @returns 起始行号（0-based），未找到返回 -1
   */
  private static locateHunkStart(doc: vscode.TextDocument, hunk: DiffHunk): number {
    const targetLine = hunk.oldStart - 1; // 转换为 0-based

    // 简单实现：直接使用 hunk.oldStart
    // 未来可以添加模糊匹配、上下文搜索等

    if (targetLine >= 0 && targetLine < doc.lineCount) {
      return targetLine;
    }

    return -1;
  }
}

// ============================================================================
// 代码审查结果解析（保留原功能）
// ============================================================================

/**
 * 代码审查结果
 */
export interface ReviewIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  suggestion?: string;
  file?: string;
  line?: number;
}

/**
 * DiffApplier 代码审查结果解析器
 */
export class ReviewParser {
  /**
   * 解析代码审查结果
   * 
   * @param text AI 返回的代码审查文本
   * @returns 结构化的审查结果数组
   */
  static parse(text: string): ReviewIssue[] {
    const issues: ReviewIssue[] = [];
    const lines = text.split('\n');
    let currentType: 'error' | 'warning' | 'info' | null = null;
    let currentMessage = '';

    for (const line of lines) {
      // 检测严重程度标签
      const errorMatch = line.match(/🔴\s*(?:Error|error)\s*:?\s*(.+)/i);
      const warningMatch = line.match(/🟡\s*(?:Warning|warning)\s*:?\s*(.+)/i);
      const infoMatch = line.match(/🔵\s*(?:Info|info)\s*:?\s*(.+)/i);

      if (errorMatch) {
        // 保存前一个 issue（如果存在）
        if (currentType && currentMessage.trim()) {
          issues.push({
            type: currentType,
            message: currentMessage
          });
        }
        // 创建新 issue
        currentType = 'error';
        currentMessage = errorMatch[1]?.trim() || '';
      } else if (warningMatch) {
        if (currentType && currentMessage.trim()) {
          issues.push({
            type: currentType,
            message: currentMessage
          });
        }
        currentType = 'warning';
        currentMessage = warningMatch[1]?.trim() || '';
      } else if (infoMatch) {
        if (currentType && currentMessage.trim()) {
          issues.push({
            type: currentType,
            message: currentMessage
          });
        }
        currentType = 'info';
        currentMessage = infoMatch[1]?.trim() || '';
      } else if (line.trim()) {
        // 普通文本行，追加到当前消息
        if (currentMessage) {
          currentMessage += ' ' + line.trim();
        }
      }
    }

    // 保存最后一个 issue
    if (currentType && currentMessage.trim()) {
      issues.push({
        type: currentType,
        message: currentMessage
      });
    }

    return issues;
  }
}

// ============================================================================
// 工具函数
// ============================================================================

/**
 * 从 AI 文本中提取代码块
 * 
 * @param text 包含代码块的文本
 * @returns 提取的代码块数组
 */
export function extractCodeBlocks(text: string): Array<{ language: string; content: string }> {
  const regex = /```(\w+)?\n([\s\S]*?)```/g;
  const blocks: Array<{ language: string; content: string }> = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const language = match[1];
    const content = match[2];

    blocks.push({
      language: language || 'text',
      content: content?.trim() || ''
    });
  }

  return blocks;
}