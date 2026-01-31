/**
 * Diff Graded Applier - 智能三级降级应用引擎
 * 
 * 设计原则：
 * - 自动降级：从 Level 1 -> Level 2 -> Level 3 自动降级
 * - 每个级别成功即停止，不继续尝试
 * - 记录降级历史，用于分析和优化
 * - 提供详细的失败原因和决策依据
 * 
 * 三级降级体系：
 * - Level 1 (智能修复)：解析器自动修正行数统计
 * - Level 2 (模糊定位)：行号对不上就搜上下文特征（使用 LCS + Jaccard）
 * - Level 3 (手动/全量兜底)：实在不行就一键全覆盖
 */

import * as vscode from 'vscode';
import { DiffParser, DiffParseResult, DiffApplier, ApplyResult } from './diff';
import { DiffSecurityValidator } from './diffSecurityValidator';
import { normalizeLine, tokenizeLine, calculateSimilarity } from './level2Similarity';
import { selectAnchors, AnchorSelectionResult } from './anchorSelector';

/**
 * 降级级别
 */
export enum GradeLevel {
  /** Level 1: 智能修复 */
  INTELLIGENT_FIX = 'intelligent_fix',
  /** Level 2: 模糊定位 */
  FUZZY_LOCATION = 'fuzzy_location',
  /** Level 3: 全量兜底 */
  FULL_OVERRIDE = 'full_override'
}

/**
 * 降级决策
 */
export interface GradeDecision {
  /** 使用的降级级别 */
  level: GradeLevel;
  /** 是否成功 */
  success: boolean;
  /** 失败原因（如果失败） */
  reason?: string;
  /** 执行时间（毫秒） */
  duration: number;
}

/**
 * 降级历史记录
 */
export interface GradeHistory {
  /** 时间戳 */
  timestamp: number;
  /** 原始 diff 文本 */
  originalDiff: string;
  /** 决策链 */
  decisions: GradeDecision[];
  /** 最终结果 */
  finalResult: ApplyResult;
}

/**
 * 智能降级应用选项
 */
export interface DiffGradedApplyOptions {
  /** 是否启用 Level 1 智能修复（默认 true） */
  enableLevel1?: boolean;
  /** 是否启用 Level 2 模糊定位（默认 true） */
  enableLevel2?: boolean;
  /** 是否启用 Level 3 全量兜底（默认 true） */
  enableLevel3?: boolean;
  /** Level 2 搜索窗口大小（行数，默认 50） */
  fuzzySearchWindow?: number;
  /** Level 2 最少锚点匹配数（默认 2） */
  minAnchorMatches?: number;
  /** Level 3 前是否确认（默认 true） */
  confirmBeforeFullOverride?: boolean;
  /** 是否记录历史（默认 true） */
  recordHistory?: boolean;
}

/**
 * 默认选项
 */
const DEFAULT_OPTIONS: DiffGradedApplyOptions = {
  enableLevel1: true,
  enableLevel2: true,
  enableLevel3: true,
  fuzzySearchWindow: 50,
  minAnchorMatches: 2,
  confirmBeforeFullOverride: true,
  recordHistory: true
};

/**
 * 智能三级降级应用引擎
 * 
 * 这是 DiffApplier 的增强版，提供了自动降级能力
 * 
 * 使用示例：
 * ```typescript
 * const result = await DiffGradedApplier.applyWithGrades(diffText, {
 *   enableLevel1: true,
 *   enableLevel2: true,
 *   enableLevel3: true
 * });
 * 
 * if (result.success) {
 *   console.log(`成功应用，使用级别：${result.usedLevel}`);
 * } else {
 *   console.log(`所有级别都失败了：${result.error}`);
 * }
 * ```
 */
export class DiffGradedApplier {
  private history: GradeHistory[] = [];
  private securityValidator: DiffSecurityValidator;

  constructor() {
    this.securityValidator = new DiffSecurityValidator();
  }

  /**
   * 使用三级降级策略应用 diff
   * 
   * @param diffText unified diff 文本
   * @param options 应用选项
   * @returns 应用结果
   */
  async applyWithGrades(
    diffText: string,
    options: DiffGradedApplyOptions = {}
  ): Promise<ApplyResult & { usedLevel?: GradeLevel; decisions?: GradeDecision[] }> {
    const startTime = Date.now();
    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const decisions: GradeDecision[] = [];

    console.log('[DiffGradedApplier] Starting graded apply with options:', mergedOptions);

    // 1. 解析 diff
    const parseResult = DiffParser.parse(diffText);
    if (!parseResult.success) {
      console.error('[DiffGradedApplier] Diff parsing failed:', parseResult.message);
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: `Diff parsing failed: ${parseResult.message}`
      };
    }

    // 2. 安全验证（在所有级别之前）
    const securityResult = this.securityValidator.validate(parseResult);
    if (!securityResult.valid) {
      console.error('[DiffGradedApplier] Security validation failed:', securityResult.errors);
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: `Security validation failed: ${securityResult.errors.map(e => e.message).join(', ')}`
      };
    }

    // 3. 尝试 Level 1: 智能修复（默认启用）
    if (mergedOptions.enableLevel1) {
      const level1Start = Date.now();
      const level1Result = await this.tryLevel1(parseResult, mergedOptions);
      const level1Decision: GradeDecision = {
        level: GradeLevel.INTELLIGENT_FIX,
        success: level1Result.success,
        reason: level1Result.success ? undefined : level1Result.error,
        duration: Date.now() - level1Start
      };
      decisions.push(level1Decision);

      if (level1Result.success) {
        console.log('[DiffGradedApplier] ✓ Level 1 (Intelligent Fix) succeeded');
        this.recordHistory(diffText, decisions, level1Result);
        return {
          ...level1Result,
          usedLevel: GradeLevel.INTELLIGENT_FIX,
          decisions
        };
      }

      console.log('[DiffGradedApplier] ✗ Level 1 failed:', level1Result.error);
    }

    // 4. 尝试 Level 2: 模糊定位（默认启用）
    if (mergedOptions.enableLevel2) {
      const level2Start = Date.now();
      const level2Result = await this.tryLevel2(parseResult, mergedOptions);
      const level2Decision: GradeDecision = {
        level: GradeLevel.FUZZY_LOCATION,
        success: level2Result.success,
        reason: level2Result.success ? undefined : level2Result.error,
        duration: Date.now() - level2Start
      };
      decisions.push(level2Decision);

      if (level2Result.success) {
        console.log('[DiffGradedApplier] ✓ Level 2 (Fuzzy Location) succeeded');
        this.recordHistory(diffText, decisions, level2Result);
        return {
          ...level2Result,
          usedLevel: GradeLevel.FUZZY_LOCATION,
          decisions
        };
      }

      console.log('[DiffGradedApplier] ✗ Level 2 failed:', level2Result.error);
    }

    // 5. 尝试 Level 3: 全量兜底（默认启用）
    if (mergedOptions.enableLevel3) {
      const level3Start = Date.now();

      // 如果需要用户确认
      if (mergedOptions.confirmBeforeFullOverride) {
        const userChoice = await vscode.window.showWarningMessage(
          '标准补丁应用失败。是否使用全量覆盖方式？（这可能覆盖文件中的其他修改）',
          '全量覆盖',
          '取消'
        );

        if (userChoice !== '全量覆盖') {
          const level3Decision: GradeDecision = {
            level: GradeLevel.FULL_OVERRIDE,
            success: false,
            reason: 'User cancelled full override',
            duration: Date.now() - level3Start
          };
          decisions.push(level3Decision);

          console.log('[DiffGradedApplier] ✗ Level 3 cancelled by user');
          return {
            success: false,
            error: 'INVALID_DIFF',
            message: 'All application methods failed. User cancelled full override.',
            decisions
          };
        }
      }

      const level3Result = await this.tryLevel3(parseResult, mergedOptions);
      const level3Decision: GradeDecision = {
        level: GradeLevel.FULL_OVERRIDE,
        success: level3Result.success,
        reason: level3Result.success ? undefined : level3Result.error,
        duration: Date.now() - level3Start
      };
      decisions.push(level3Decision);

      if (level3Result.success) {
        console.log('[DiffGradedApplier] ✓ Level 3 (Full Override) succeeded');
        this.recordHistory(diffText, decisions, level3Result);
        return {
          ...level3Result,
          usedLevel: GradeLevel.FULL_OVERRIDE,
          decisions
        };
      }

      console.log('[DiffGradedApplier] ✗ Level 3 failed:', level3Result.error);
    }

    // 6. 所有级别都失败
    const totalDuration = Date.now() - startTime;
    console.error('[DiffGradedApplier] All levels failed');

    return {
      success: false,
      error: 'INVALID_DIFF',
      message: 'All application methods failed. No viable downgrade strategy available.',
      decisions
    };
  }

  /**
   * Level 1: 智能修复
   * 
   * 利用 DiffParser 的自动修复能力，尝试修复行数统计错误
   */
  private async tryLevel1(
    diff: DiffParseResult,
    options: DiffGradedApplyOptions
  ): Promise<ApplyResult> {
    console.log('[DiffGradedApplier] Trying Level 1: Intelligent Fix');

    try {
      // 直接使用 DiffApplier.apply（已经包含 Level 1 的智能修复）
      return await DiffApplier.apply(diff, {
        dryRun: false,
        failOnConflict: true
      });
    } catch (error) {
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: error instanceof Error ? error.message : String(error)
      };
    }
  }

  /**
   * Level 2: 模糊定位
   * 
   * 当精确行号匹配失败时，使用模糊搜索定位 hunk 位置
   * 
   * 实现策略：
   * 1. 从 hunk 的 context 行中选择信息量最高的锚点
   * 2. 使用 LCS + Jaccard 相似度在文件中搜索最佳匹配位置
   * 3. 应用 diff 到找到的位置
   */
  private async tryLevel2(
    diff: DiffParseResult,
    options: DiffGradedApplyOptions
  ): Promise<ApplyResult> {
    console.log('[DiffGradedApplier] Trying Level 2: Fuzzy Location');

    try {
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        return {
          success: false,
          error: 'INVALID_DIFF',
          message: 'No workspace folder found'
        };
      }

      const changedFiles: string[] = [];
      const edit = new vscode.WorkspaceEdit();

      // 处理每个文件
      for (const file of diff.files) {
        const filePath = file.normalizedPath;
        const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);

        // 获取当前文档
        const document = await vscode.workspace.openTextDocument(fileUri);
        const oldContent = document.getText();
        const lines = oldContent.split('\n');

        // 处理每个 hunk
        for (const hunk of file.hunks) {
          // 1. 从 hunk 的 context 行中提取锚点
          const contextLines = hunk.lines
            .filter(l => l.type === 'context')
            .map(l => l.content);

          console.log(`[DiffGradedApplier Level2] Extracting anchors from ${contextLines.length} context lines`);

          // 2. 使用锚点选择器选择最佳锚点
          const anchorSelection: AnchorSelectionResult = selectAnchors(contextLines, {
            minAnchors: options.minAnchorMatches || 2,
            maxAnchors: 5,
            infoWeight: 0.6,
            stabilityWeight: 0.4
          });

          if (!anchorSelection.success) {
            console.warn(`[DiffGradedApplier Level2] Anchor selection failed: ${anchorSelection.reason}`);
            continue; // 跳过这个 hunk，尝试下一个
          }

          console.log(`[DiffGradedApplier Level2] Selected ${anchorSelection.anchors.length} anchors`);

          // 3. 使用锚点在文件中模糊搜索
          const locatedLine = this.fuzzyLocateHunk(lines, hunk, anchorSelection.anchors, options);

          if (locatedLine === -1) {
            console.warn(`[DiffGradedApplier Level2] Cannot locate hunk in file ${filePath}`);
            continue; // 跳过这个 hunk
          }

          console.log(`[DiffGradedApplier Level2] Located hunk at line ${locatedLine + 1} (1-based)`);

          // 4. 应用 hunk 到找到的位置
          const hunkLines: string[] = [];
          let currentLine = locatedLine;

          for (const diffLine of hunk.lines) {
            if (diffLine.type === 'context') {
              currentLine++;
            } else if (diffLine.type === 'remove') {
              currentLine++;
            } else if (diffLine.type === 'add') {
              hunkLines.push(diffLine.content);
            }
          }

          // 计算删除范围
          const oldLines = hunk.stats.context + hunk.stats.removed;
          const endLine = locatedLine + oldLines;

          // 构造新内容
          const before = lines.slice(0, locatedLine);
          const after = lines.slice(endLine);
          lines.splice(0, lines.length, ...before, ...hunkLines, ...after);

          console.log(`[DiffGradedApplier Level2] Applied hunk: removed ${oldLines} lines, added ${hunkLines.length} lines`);
        }

        const newContent = lines.join('\n');

        // 应用完整替换（因为行号已经调整）
        const fullRange = new vscode.Range(
          document.lineAt(0).range.start,
          document.lineAt(document.lineCount - 1).range.end
        );

        edit.replace(fileUri, fullRange, newContent);
        changedFiles.push(filePath);
      }

      // 应用编辑
      const success = await vscode.workspace.applyEdit(edit);
      if (success && changedFiles.length > 0) {
        // 保存文件
        for (const filePath of changedFiles) {
          const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);
          const document = await vscode.workspace.openTextDocument(fileUri);
          await document.save();
        }

        return {
          success: true,
          changedFiles,
          stats: {
            filesChanged: changedFiles.length,
            hunksApplied: diff.stats.hunkCount,
            linesAdded: diff.stats.totalAdded,
            linesRemoved: diff.stats.totalRemoved
          }
        };
      } else {
        return {
          success: false,
          error: 'INVALID_DIFF',
          message: 'Failed to apply fuzzy location'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: error instanceof Error ? error.message : String(error)
      };
    }
  }

  /**
   * 使用锚点模糊定位 hunk 位置
   * 
   * @param lines 文件的所有行
   * @param hunk 要定位的 hunk
   * @param anchors 选中的锚点
   * @param options 应用选项
   * @returns 起始行号（0-based），未找到返回 -1
   */
  private fuzzyLocateHunk(
    lines: string[],
    hunk: any,
    anchors: any[],
    options: DiffGradedApplyOptions
  ): number {
    const targetLine = hunk.oldStart - 1; // 转换为 0-based

    // 1. 提取锚点的 token 列表
    const anchorTokens = anchors.map(a => a.tokens);

    // 2. 计算搜索窗口
    const searchRadius = options.fuzzySearchWindow || 50;
    const expectedStart = Math.max(0, targetLine - searchRadius);
    const expectedEnd = Math.min(lines.length, targetLine + searchRadius);

    console.log(`[DiffGradedApplier Level2] Searching window: [${expectedStart}, ${expectedEnd}]`);

    // 3. 在搜索窗口中查找最佳匹配
    let bestMatch = -1;
    let bestScore = 0;

    for (let i = expectedStart; i < expectedEnd; i++) {
      // 计算当前行的相似度
      const line = lines[i];
      if (!line) continue;

      const lineTokens = tokenizeLine(normalizeLine(line));

      // 计算与所有锚点的相似度
      let totalSimilarity = 0;
      let matchCount = 0;

      for (const anchorTokenList of anchorTokens) {
        const result = calculateSimilarity(lineTokens, anchorTokenList);
        if (result.score > 0.5) { // 相似度阈值
          totalSimilarity += result.score;
          matchCount++;
        }
      }

      // 计算平均相似度
      const avgSimilarity = matchCount > 0 ? totalSimilarity / matchCount : 0;

      // 如果匹配的锚点数量足够，并且相似度更高
      if (matchCount >= (options.minAnchorMatches || 2) && avgSimilarity > bestScore) {
        bestScore = avgSimilarity;
        bestMatch = i;
      }
    }

    if (bestMatch !== -1) {
      console.log(`[DiffGradedApplier Level2] Found best match at line ${bestMatch + 1} (score: ${bestScore.toFixed(3)})`);
    }

    return bestMatch;
  }

  /**
   * Level 3: 全量兜底
   * 
   * 当所有其他方法都失败时，直接替换整个文件
   * 
   * 注意：这是最危险的方法，需要用户明确确认
   */
  private async tryLevel3(
    diff: DiffParseResult,
    options: DiffGradedApplyOptions
  ): Promise<ApplyResult> {
    console.log('[DiffGradedApplier] Trying Level 3: Full Override');

    // 对于每个文件，尝试获取完整内容并应用
    try {
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        return {
          success: false,
          error: 'INVALID_DIFF',
          message: 'No workspace folder found'
        };
      }

      const changedFiles: string[] = [];
      const edit = new vscode.WorkspaceEdit();

      // 只处理单文件 diff（多文件情况需要特殊处理）
      if (diff.files.length === 1) {
        const file = diff.files[0];
        const filePath = file.normalizedPath;
        const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);

        // 获取当前文档
        const document = await vscode.workspace.openTextDocument(fileUri);
        const oldContent = document.getText();

        // 应用所有 hunks 来生成新内容
        let newContent = oldContent;
        const lines = newContent.split('\n');

        // 从后往前应用 hunks，避免行号偏移
        for (let i = file.hunks.length - 1; i >= 0; i--) {
          const hunk = file.hunks[i];
          
          // 尝试定位 hunk
          const startLine = this.locateHunkStart(lines, hunk, options);
          
          if (startLine === -1) {
            console.warn(`[DiffGradedApplier] Cannot locate hunk in file ${filePath}`);
            continue;
          }

          // 应用 hunk
          const hunkLines: string[] = [];
          let currentLine = startLine;

          for (const diffLine of hunk.lines) {
            if (diffLine.type === 'context') {
              currentLine++;
            } else if (diffLine.type === 'remove') {
              currentLine++;
            } else if (diffLine.type === 'add') {
              hunkLines.push(diffLine.content);
            }
          }

          // 计算删除范围
          const oldLines = hunk.stats.context + hunk.stats.removed;
          const endLine = startLine + oldLines;

          // 构造新内容
          const before = lines.slice(0, startLine);
          const after = lines.slice(endLine);
          lines.splice(0, lines.length, ...before, ...hunkLines, ...after);
        }

        newContent = lines.join('\n');

        // 应用完整替换
        const fullRange = new vscode.Range(
          document.lineAt(0).range.start,
          document.lineAt(document.lineCount - 1).range.end
        );

        edit.replace(fileUri, fullRange, newContent);
        changedFiles.push(filePath);
      } else {
        // 多文件情况，目前不支持
        return {
          success: false,
          error: 'INVALID_DIFF',
          message: 'Level 3 (Full Override) does not support multi-file diffs yet'
        };
      }

      // 应用编辑
      const success = await vscode.workspace.applyEdit(edit);
      if (success && changedFiles.length > 0) {
        // 保存文件
        for (const filePath of changedFiles) {
          const fileUri = vscode.Uri.joinPath(workspaceFolder.uri, filePath);
          const document = await vscode.workspace.openTextDocument(fileUri);
          await document.save();
        }

        return {
          success: true,
          changedFiles,
          stats: {
            filesChanged: changedFiles.length,
            hunksApplied: diff.stats.hunkCount,
            linesAdded: diff.stats.totalAdded,
            linesRemoved: diff.stats.totalRemoved
          }
        };
      } else {
        return {
          success: false,
          error: 'INVALID_DIFF',
          message: 'Failed to apply full override'
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'INVALID_DIFF',
        message: error instanceof Error ? error.message : String(error)
      };
    }
  }

  /**
   * 定位 hunk 起始位置（用于 Level 3）
   * 
   * @param lines 文件的所有行
   * @param hunk 要定位的 hunk
   * @param options 应用选项
   * @returns 起始行号（0-based），未找到返回 -1
   */
  private locateHunkStart(
    lines: string[],
    hunk: any,
    options: DiffGradedApplyOptions
  ): number {
    const targetLine = hunk.oldStart - 1; // 转换为 0-based

    // 1. 首先尝试精确行号匹配
    if (targetLine >= 0 && targetLine < lines.length) {
      const anchors = hunk.lines
        .filter((l: any) => l.type === 'context' && l.content.trim().length > 0)
        .map((l: any) => l.content.trim());

      if (anchors.length > 0 && this.isLinesMatch(lines[targetLine], anchors[0])) {
        return targetLine;
      }
    }

    // 2. 模糊搜索
    const searchRadius = options.fuzzySearchWindow || 50;
    const expectedStart = Math.max(0, targetLine - searchRadius);
    const expectedEnd = Math.min(lines.length, targetLine + searchRadius);

    for (let i = expectedStart; i < expectedEnd; i++) {
      if (this.isLinesMatch(lines[i], hunk.lines[0].content.trim())) {
        return i;
      }
    }

    return -1;
  }

  /**
   * 简单的行匹配工具函数
   */
  private isLinesMatch(fileLine: string, diffLine: string): boolean {
    if (!fileLine || !diffLine) return false;
    return fileLine.trim() === diffLine.trim();
  }

  /**
   * 记录降级历史
   */
  private recordHistory(
    originalDiff: string,
    decisions: GradeDecision[],
    finalResult: ApplyResult
  ): void {
    const history: GradeHistory = {
      timestamp: Date.now(),
      originalDiff: originalDiff.substring(0, 1000) + '...', // 只保存前 1000 字符
      decisions,
      finalResult
    };

    this.history.push(history);

    // 只保留最近 100 条记录
    if (this.history.length > 100) {
      this.history.shift();
    }
  }

  /**
   * 获取降级历史
   */
  getHistory(): GradeHistory[] {
    return [...this.history];
  }

  /**
   * 清空历史记录
   */
  clearHistory(): void {
    this.history = [];
  }

  /**
   * 获取统计信息
   */
  getStats(): {
    totalAttempts: number;
    level1Success: number;
    level2Success: number;
    level3Success: number;
    allFailed: number;
  } {
    let level1Success = 0;
    let level2Success = 0;
    let level3Success = 0;
    let allFailed = 0;

    for (const history of this.history) {
      if (history.finalResult.success) {
        const usedLevel = history.decisions.find(d => d.success)?.level;
        if (usedLevel === GradeLevel.INTELLIGENT_FIX) level1Success++;
        else if (usedLevel === GradeLevel.FUZZY_LOCATION) level2Success++;
        else if (usedLevel === GradeLevel.FULL_OVERRIDE) level3Success++;
      } else {
        allFailed++;
      }
    }

    return {
      totalAttempts: this.history.length,
      level1Success,
      level2Success,
      level3Success,
      allFailed
    };
  }
}

/**
 * 单例实例
 */
let applierInstance: DiffGradedApplier | null = null;

export function getDiffGradedApplier(): DiffGradedApplier {
  if (!applierInstance) {
    applierInstance = new DiffGradedApplier();
  }
  return applierInstance;
}

export function resetDiffGradedApplier(): void {
  applierInstance = null;
}