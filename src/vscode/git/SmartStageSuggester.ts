/**
 * Smart Stage Suggester - 智能 Stage 建议
 * 
 * 功能：
 * - 分析暂存区的文件变更
 * - 按照逻辑分组（UI、逻辑、文档、测试等）
 * - 提供分组建议和 Commit 消息
 * 
 * 用户体验：
 * - AI 分析 10 个文件，建议分 2 次 Commit
 * - 让 Git 提交记录像艺术品一样整洁
 */

import * as vscode from 'vscode';
import { GitManager } from './GitManager';
import { DiffParser } from '../../core/diff';
import { CommitSuggestion, FileGroup } from '../../core/reviewSchema';

/**
 * 文件类型
 */
type FileType = 'ui' | 'logic' | 'docs' | 'test' | 'config' | 'other';

/**
 * 文件分类规则
 */
const FILE_TYPE_RULES: Record<FileType, RegExp[]> = {
  ui: [
    /\.css$/, /\.scss$/, /\.less$/,
    /\.html$/, /\.vue$/, /\.svelte$/,
    /\.(png|jpg|jpeg|gif|svg|ico)$/i,
    /components\//i, /styles\//i, /assets\//i
  ],
  logic: [
    /\.ts$/, /\.js$/,
    /\.tsx$/, /\.jsx$/,
    /\.go$/, /\.rs$/, /\.java$/, /\.cpp$/, /\.c$/,
    /src\//, /lib\//, /app\//
  ],
  docs: [
    /\.md$/, /\.txt$/,
    /docs\//i, /readme/i, /changelog/i
  ],
  test: [
    /\.test\.(ts|js)$/, /\.spec\.(ts|js)$/,
    /test\//i, /tests\//i, /__tests__\//i
  ],
  config: [
    /\.json$/, /\.yaml$/, /\.yml$/,
    /package\.json$/, /tsconfig\.json$/,
    /\.eslintrc$/, /\.prettierrc$/,
    /config\//i, /\.env/
  ],
  other: []
};

/**
 * 分组建议
 */
export interface GroupingSuggestion {
  /** 分组列表 */
  groups: FileGroup[];

  /** 分组理由 */
  rationale: string;

  /** 每个分组的 Commit 消息建议 */
  commitMessages: Array<{
    /** 分组 ID */
    groupId: string;
    /** Commit 消息 */
    message: {
      title: string;
      body?: string;
      type?: "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore";
    };
  }>;
}

/**
 * Smart Stage Suggester
 */
export class SmartStageSuggester {
  /**
   * 分析暂存区并生成分组建议
   */
  static async analyzeStagedFiles(): Promise<GroupingSuggestion | null> {
    // 获取暂存区 diff
    const diffText = await GitManager.getStagedDiff();
    if (!diffText) {
      return null;
    }

    // 解析 diff
    const parseResult = DiffParser.parse(diffText);
    if (!parseResult.success) {
      console.error('[SmartStageSuggester] Failed to parse staged diff');
      return null;
    }

    // 分析每个文件
    const fileGroups = this.groupFiles(parseResult.files);

    // 如果只有一个分组，不需要分多次 commit
    if (fileGroups.length <= 1) {
      return {
        groups: fileGroups,
        rationale: 'All changes are logically related and can be committed together.',
        commitMessages: this.generateCommitMessages(fileGroups)
      };
    }

    // 生成建议
    return {
      groups: fileGroups,
      rationale: this.generateRationale(fileGroups),
      commitMessages: this.generateCommitMessages(fileGroups)
    };
  }

  /**
   * 将文件分组
   */
  private static groupFiles(files: import('../../core/diff').DiffFile[]): FileGroup[] {
    const groups = new Map<FileType, FileGroup>();

    // 初始化分组
    for (const type of Object.keys(FILE_TYPE_RULES) as FileType[]) {
      groups.set(type, {
        id: `group-${type}`,
        name: this.getGroupDisplayName(type),
        type,
        files: [],
        stats: { added: 0, removed: 0, context: 0 }
      });
    }

    // 分类每个文件
    for (const file of files) {
      const fileType = this.classifyFile(file.normalizedPath);
      const group = groups.get(fileType)!;

      group.files.push(file.normalizedPath);
      group.stats.added += file.stats.added;
      group.stats.removed += file.stats.removed;
      group.stats.context += file.stats.context;
    }

    // 过滤空分组
    const nonEmptyGroups = Array.from(groups.values()).filter(g => g.files.length > 0);

    // 如果有多个非空分组，尝试进一步合并小分组
    return this.mergeSmallGroups(nonEmptyGroups);
  }

  /**
   * 分类文件类型
   */
  private static classifyFile(filePath: string): FileType {
    for (const [type, patterns] of Object.entries(FILE_TYPE_RULES)) {
      for (const pattern of patterns) {
        if (pattern.test(filePath)) {
          return type as FileType;
        }
      }
    }
    return 'other';
  }

  /**
   * 获取分组显示名称
   */
  private static getGroupDisplayName(type: FileType): string {
    const names: Record<FileType, string> = {
      ui: 'UI Changes',
      logic: 'Logic Updates',
      docs: 'Documentation',
      test: 'Tests',
      config: 'Configuration',
      other: 'Other Changes'
    };
    return names[type];
  }

  /**
   * 合并小分组（文件数 < 3 的分组）
   */
  private static mergeSmallGroups(groups: FileGroup[]): FileGroup[] {
    const smallGroups: FileGroup[] = [];
    const largeGroups: FileGroup[] = [];

    // 分离大小分组
    for (const group of groups) {
      if (group.files.length < 3) {
        smallGroups.push(group);
      } else {
        largeGroups.push(group);
      }
    }

    // 如果没有小分组，直接返回
    if (smallGroups.length === 0) {
      return groups;
    }

    // 合并所有小分组到 "other" 分组
    const mergedOther: FileGroup = {
      id: 'group-other-merged',
      name: 'Miscellaneous Changes',
      type: 'other',
      files: [],
      stats: { added: 0, removed: 0, context: 0 }
    };

    for (const group of smallGroups) {
      mergedOther.files.push(...group.files);
      mergedOther.stats.added += group.stats.added;
      mergedOther.stats.removed += group.stats.removed;
      mergedOther.stats.context += group.stats.context;
    }

    return [...largeGroups, mergedOther].filter(g => g.files.length > 0);
  }

  /**
   * 生成分组理由
   */
  private static generateRationale(groups: FileGroup[]): string {
    const parts: string[] = [];

    if (groups.length === 1) {
      return `All changes (${groups[0].files.length} files) are related to ${groups[0].name.toLowerCase()} and can be committed together.`;
    }

    parts.push(`I found ${groups.length} distinct change groups:`);

    for (const group of groups) {
      const changeSummary = this.getChangeSummary(group.stats);
      parts.push(`\n  • ${group.name}: ${group.files.length} files (${changeSummary})`);
    }

    parts.push('\n\nThese changes are logically independent and should be committed separately for better history organization.');

    return parts.join('');
  }

  /**
   * 获取变更摘要
   */
  private static getChangeSummary(stats: FileGroup['stats']): string {
    const parts: string[] = [];
    if (stats.added > 0) parts.push(`+${stats.added}`);
    if (stats.removed > 0) parts.push(`-${stats.removed}`);
    return parts.join(' ') || 'no changes';
  }

  /**
   * 生成 Commit 消息
   */
  private static generateCommitMessages(groups: FileGroup[]): Array<{
    groupId: string;
    message: {
      title: string;
      body?: string;
      type?: "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore";
    };
  }> {
    return groups.map(group => ({
      groupId: group.id,
      message: this.generateCommitMessageForGroup(group)
    }));
  }

  /**
   * 为单个分组生成 Commit 消息
   */
  private static generateCommitMessageForGroup(group: FileGroup): {
    title: string;
    body?: string;
    type?: "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore";
  } {
    const commitType = this.getCommitType(group.type);
    const fileCount = group.files.length;
    const changeSummary = this.getChangeSummary(group.stats);

    let title: string;
    let body: string | undefined;

    switch (group.type) {
      case 'ui':
        title = fileCount === 1 
          ? `Update ${this.getFileName(group.files[0])}` 
          : `Update ${group.name.toLowerCase()}`;
        body = `Updated ${fileCount} UI-related ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;

      case 'logic':
        title = fileCount === 1
          ? `Update ${this.getFileName(group.files[0])}`
          : `Update ${group.name.toLowerCase()}`;
        body = `Updated ${fileCount} logic ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;

      case 'docs':
        title = 'Update documentation';
        body = `Updated ${fileCount} documentation ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;

      case 'test':
        title = 'Update tests';
        body = `Updated ${fileCount} test ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;

      case 'config':
        title = 'Update configuration';
        body = `Updated ${fileCount} configuration ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;

      case 'other':
        title = 'Update miscellaneous files';
        body = `Updated ${fileCount} ${fileCount === 1 ? 'file' : 'files'} (${changeSummary})`;
        break;
    }

    return { title, body, type: commitType };
  }

  /**
   * 获取 Commit 类型
   */
  private static getCommitType(fileType: FileType): "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore" {
    const typeMap: Record<FileType, "feat" | "fix" | "docs" | "style" | "refactor" | "test" | "chore"> = {
      ui: 'feat',
      logic: 'feat',
      docs: 'docs',
      test: 'test',
      config: 'chore',
      other: 'chore'
    };
    return typeMap[fileType];
  }

  /**
   * 从路径获取文件名
   */
  private static getFileName(filePath: string): string {
    const parts = filePath.split('/');
    return parts[parts.length - 1];
  }

  /**
   * 显示分组建议
   */
  static async showGroupingSuggestion(suggestion: GroupingSuggestion): Promise<void> {
    const message = `
${suggestion.rationale}

Suggested commits:
${suggestion.commitMessages.map(cm => `• ${cm.message.type}: ${cm.message.title}`).join('\n')}
    `.trim();

    const result = await vscode.window.showInformationMessage(
      'Smart Stage Suggestion: Split changes into ' + suggestion.groups.length + ' commits?',
      { modal: true },
      'View Details',
      'Apply Suggestions',
      'Dismiss'
    );

    if (result === 'View Details') {
      await this.showDetailedSuggestion(suggestion);
    } else if (result === 'Apply Suggestions') {
      // TODO: 实现应用建议的逻辑
      vscode.window.showInformationMessage('Apply suggestions feature coming soon!');
    }
  }

  /**
   * 显示详细建议
   */
  private static async showDetailedSuggestion(suggestion: GroupingSuggestion): Promise<void> {
    const panel = vscode.window.createWebviewPanel(
      'smartStageSuggestion',
      'Smart Stage Suggestion',
      vscode.ViewColumn.Two,
      { enableScripts: true }
    );

    panel.webview.html = this.getWebviewContent(suggestion);
  }

  /**
   * 生成 Webview 内容
   */
  private static getWebviewContent(suggestion: GroupingSuggestion): string {
    const groupsHtml = suggestion.groups.map(group => `
      <div class="group" style="margin: 10px 0; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <h3 style="margin: 0 0 10px 0; color: #333;">${group.name} (${group.files.length} files)</h3>
        <p style="margin: 0 0 10px 0; color: #666;">${this.getChangeSummary(group.stats)}</p>
        <ul style="margin: 0; padding-left: 20px;">
          ${group.files.map(file => `<li style="margin: 2px 0;">${file}</li>`).join('')}
        </ul>
        <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 3px;">
          <strong>Suggested commit:</strong><br/>
          <code>${suggestion.commitMessages.find(cm => cm.groupId === group.id)?.message.title}</code>
        </div>
      </div>
    `).join('');

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Smart Stage Suggestion</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
        <h1 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">Smart Stage Suggestion</h1>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; margin: 20px 0;">
          <h2 style="margin: 0 0 10px 0; color: #333;">Rationale</h2>
          <p style="margin: 0; color: #666; white-space: pre-wrap;">${suggestion.rationale}</p>
        </div>

        <h2 style="color: #333; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Grouped Changes</h2>
        ${groupsHtml}

        <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 4px; border-left: 4px solid #007acc;">
          <strong>Tip:</strong> You can apply these commits one by one using the Git Source Control panel.
        </div>
      </body>
      </html>
    `;
  }
}