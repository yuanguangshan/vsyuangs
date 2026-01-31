/**
 * Diff Source 实现
 * 
 * 提供多种策略获取 Diff 内容：
 * - GitDiff: 从 Git 获取增量 diff
 * - MemoryDiff: 从 VS Code 内存获取（用于未保存的修改）
 * - FullFileDiff: 全文件内容（降级策略）
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { DiffSource } from './securityTypes';

/**
 * Git Diff Source
 * 从 Git 获取相对于 HEAD 的 diff
 * 
 * 返回值说明：
 * - null: 无法获取 diff（非 Git 目录、Git 扩展不可用）
 * - "": Git 仓库可用，但没有未提交的更改（空 diff）
 * - "xxx...": 实际的 diff 内容
 */
export class GitDiffSource implements DiffSource {
  constructor(private filePath: string) {}

  async getDiff(): Promise<string | null> {
    try {
      // 检查是否在 Git 仓库中
      const gitExtension = vscode.extensions.getExtension('vscode.git');
      if (!gitExtension) {
        console.warn('[GitDiffSource] Git extension not available');
        return null;
      }

      const gitApi = await gitExtension.activate();
      if (!gitApi) {
        return null;
      }

      const repository = gitApi.getRepository(vscode.Uri.file(this.filePath));
      if (!repository) {
        console.warn(`[GitDiffSource] No repository found for ${this.filePath}`);
        return null;
      }

      // 获取相对于 HEAD 的 diff
      const diffText = await repository.diffIndexWithHEAD(this.filePath);
      
      // 关键修复：空字符串表示 Git 可用但没有更改，null 表示 Git 不可用
      return diffText !== null ? diffText : null;
    } catch (error) {
      console.error(`[GitDiffSource] Error getting diff for ${this.filePath}:`, error);
      return null;
    }
  }

  getStrategy(): 'git' | 'memory' | 'full' {
    return 'git';
  }
}

/**
 * Memory Diff Source
 * 从 VS Code 文档内存获取未保存的修改
 * 
 * 注意：此 Source 仅用于安全扫描，不适用于增量 Code Review
 * 因为它会生成伪造的全量新增 diff，而不是真实的增量
 */
export class MemoryDiffSource implements DiffSource {
  constructor(private document: vscode.TextDocument) {}

  async getDiff(): Promise<string | null> {
    try {
      const content = this.document.getText();
      
      // 生成一个简单的 unified diff 格式
      // 注意：这只是一个降级策略，不是真正的 diff
      const fileName = path.basename(this.document.fileName);
      const timestamp = new Date().toISOString();
      
      const diffHeader = `diff --git a/${fileName} b/${fileName}
index 0000000..1111111 100644
--- a/${fileName}
+++ b/${fileName}
@@ -0,0 +1,${content.split('\n').length} @@
${content.split('\n').map(line => `+${line}`).join('\n')}
`;

      return diffHeader;
    } catch (error) {
      console.error(`[MemoryDiffSource] Error getting diff:`, error);
      return null;
    }
  }

  getStrategy(): 'git' | 'memory' | 'full' {
    return 'memory';
  }
}

/**
 * Full File Diff Source
 * 直接返回文件完整内容（最底层的降级策略）
 * 
 * 优化：对于大文件（> 5000 行），仅扫描编辑区域（上下 50 行）
 */
export class FullFileDiffSource implements DiffSource {
  constructor(private filePath: string) {}

  async getDiff(): Promise<string | null> {
    try {
      const content = fs.readFileSync(this.filePath, 'utf-8');
      const lines = content.split('\n');
      
      // 性能优化：大文件仅读取部分内容
      let contentToScan = content;
      if (lines.length > 5000) {
        // 获取 VS Code 活动编辑器的选择范围
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.fileName === this.filePath) {
          const selection = editor.selection;
          const startLine = Math.max(0, selection.start.line - 50);
          const endLine = Math.min(lines.length, selection.end.line + 50);
          contentToScan = lines.slice(startLine, endLine).join('\n');
          
          console.log(`[FullFileDiffSource] Large file (${lines.length} lines), scanning window [${startLine}:${endLine}]`);
        } else {
          // 如果没有活动编辑器，只读取前 1000 行
          contentToScan = lines.slice(0, 1000).join('\n');
          console.log(`[FullFileDiffSource] Large file (${lines.length} lines), scanning first 1000 lines`);
        }
      }
      
      // 生成 unified diff 格式
      const fileName = path.basename(this.filePath);
      const timestamp = new Date().toISOString();
      
      const diffHeader = `diff --git a/${fileName} b/${fileName}
index 0000000..1111111 100644
--- a/${fileName}
+++ b/${fileName}
@@ -0,0 +1,${contentToScan.split('\n').length} @@
${contentToScan.split('\n').map(line => `+${line}`).join('\n')}
`;

      return diffHeader;
    } catch (error) {
      console.error(`[FullFileDiffSource] Error reading file ${this.filePath}:`, error);
      return null;
    }
  }

  getStrategy(): 'git' | 'memory' | 'full' {
    return 'full';
  }
}

/**
 * Diff Source Factory
 * 根据优先级策略创建 Diff Source
 */
export class DiffSourceFactory {
  /**
   * 创建 Diff Source（优先级：Git -> Memory -> Full）
   */
  static create(document: vscode.TextDocument): DiffSource[] {
    const sources: DiffSource[] = [];

    // 1. Git Diff Source（最高优先级）
    sources.push(new GitDiffSource(document.fileName));

    // 2. Memory Diff Source（降级策略）
    sources.push(new MemoryDiffSource(document));

    // 3. Full File Diff Source（最底层降级）
    sources.push(new FullFileDiffSource(document.fileName));

    return sources;
  }

  /**
   * 尝试获取 Diff（按优先级尝试）
   * 
   * 策略优先级：Git -> Memory -> Full
   * 
   * 返回值说明：
   * - null: 所有策略都失败
   * - { diff: "", strategy: "git" }: Git 可用但无更改
   * - { diff: "xxx...", strategy: "..." }: 获取到 diff
   */
  static async tryGetDiff(document: vscode.TextDocument): Promise<{ diff: string; strategy: 'git' | 'memory' | 'full' } | null> {
    const sources = this.create(document);

    for (const source of sources) {
      const diff = await source.getDiff();
      
      // 关键修复：只要不是 null，就说明该策略生效了
      // diff 可以为空字符串（表示没有更改），但策略是成功的
      if (diff !== null) {
        return {
          diff,
          strategy: source.getStrategy()
        };
      }
    }

    return null;
  }
}