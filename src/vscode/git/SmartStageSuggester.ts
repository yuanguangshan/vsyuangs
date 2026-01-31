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
import { VotingFileClassifier } from '../guard/VotingFileClassifier';
import { GroupExplanation, CommitGroup } from '../guard/types';
import { PreferenceMemory, DisagreementRecord } from '../guard/preferences';

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
  private static readonly CONFIDENCE_THRESHOLD_HIGH = 0.6;
  private static readonly CONFIDENCE_THRESHOLD_MEDIUM = 0.3;
  private static classifier = new VotingFileClassifier();
  private static preferenceMemory = new PreferenceMemory();
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
    const groups = new Map<string, FileGroup>();

    // 使用新的投票分类器对每个文件进行分类
    for (const file of files) {
      // Extract diff content from hunks to pass to classifier
      const diffContent = this.extractDiffContent(file);
      const explanation = this.classifier.classify(file.normalizedPath, diffContent);

      // 根据置信度决定处理方式
      let groupId: string;
      let groupName: string;
      let fileType: FileType;

      if (explanation.confidence < this.CONFIDENCE_THRESHOLD_MEDIUM) {
        // 低置信度，放入需要确认的分组
        groupId = 'group-needs-confirmation';
        groupName = 'Needs Confirmation';
        fileType = 'other';
      } else {
        // 高置信度，使用预测的类别
        groupId = `group-${explanation.category}`;
        groupName = this.getGroupDisplayName(explanation.category as FileType);
        fileType = explanation.category as FileType;
      }

      // 获取或创建分组
      if (!groups.has(groupId)) {
        groups.set(groupId, {
          id: groupId,
          name: groupName,
          type: fileType,
          files: [],
          stats: { added: 0, removed: 0, context: 0 },
          explanation: explanation // 添加解释信息
        });
      }

      const group = groups.get(groupId)!;
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
   * 从 DiffFile 中提取 diff 内容
   */
  private static extractDiffContent(file: import('../../core/diff').DiffFile): string {
    const contentParts: string[] = [];

    for (const hunk of file.hunks) {
      for (const line of hunk.lines) {
        contentParts.push(line.raw); // 使用原始行内容
      }
    }

    return contentParts.join('\n');
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
  private static getGroupDisplayName(type: FileType | CommitGroup): string {
    const names: Record<FileType | CommitGroup, string> = {
      ui: 'UI Changes',
      logic: 'Logic Updates',
      docs: 'Documentation',
      test: 'Tests',
      config: 'Configuration',
      chore: 'Chore',
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

    // Handle messages from the webview
    panel.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case 'correction-request':
          // Get the group that was corrected
          const group = suggestion.groups.find(g => g.id === message.groupId);
          if (group && group.explanation) {
            // Validate the new category
            const validCategories = ['ui', 'logic', 'docs', 'test', 'chore', 'other'];
            if (validCategories.includes(message.newCategory)) {
              // Record the correction
              for (const file of group.files) {
                this.recordUserCorrection(
                  message.groupId,
                  file,
                  group.explanation!.category as CommitGroup,
                  message.newCategory as CommitGroup,
                  group.explanation!.confidence
                );
              }

              // Show confirmation
              vscode.window.showInformationMessage(
                `Correction recorded: ${group.name} -> ${message.newCategory}. This will improve future suggestions.`
              );
            } else {
              vscode.window.showErrorMessage(
                `Invalid category: ${message.newCategory}. Valid categories are: ${validCategories.join(', ')}`
              );
            }
          }
          break;
      }
    }, undefined);
  }

  /**
   * 生成 Webview 内容
   */
  private static getWebviewContent(suggestion: GroupingSuggestion): string {
    const groupsHtml = suggestion.groups.map(group => {
      // Add explanation if available
      let explanationHtml = '';
      if (group.explanation) {
        const confidencePercentage = Math.round(group.explanation.confidence * 100);
        explanationHtml = `
          <div style="margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 3px; border-left: 3px solid #007acc;">
            <strong>Classification:</strong> ${group.explanation.category} (${confidencePercentage}% confidence)<br/>
            <strong>Reasons:</strong> ${group.explanation.reasons.join(', ')}<br/>
            <button onclick="requestCorrection('${group.id}', '${group.name}')" style="margin-top: 5px; padding: 5px 10px; background: #ff6b6b; color: white; border: none; border-radius: 3px; cursor: pointer;">Wrong? Correct it</button>
          </div>
        `;
      }

      return `
        <div class="group" style="margin: 10px 0; padding: 15px; border: 1px solid #ddd; border-radius: 4px;" id="group-${group.id}">
          <h3 style="margin: 0 0 10px 0; color: #333;">${group.name} (${group.files.length} files)</h3>
          <p style="margin: 0 0 10px 0; color: #666;">${this.getChangeSummary(group.stats)}</p>
          <ul style="margin: 0; padding-left: 20px;">
            ${group.files.map(file => `<li style="margin: 2px 0;">${file}</li>`).join('')}
          </ul>
          <div style="margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 3px;">
            <strong>Suggested commit:</strong><br/>
            <code>${suggestion.commitMessages.find(cm => cm.groupId === group.id)?.message.title}</code>
          </div>
          ${explanationHtml}
        </div>
      `;
    }).join('');

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

        <script>
          function requestCorrection(groupId, currentGroupName) {
            const newCategory = prompt('What category should this group belong to? (ui, logic, docs, test, chore, other)');
            if (newCategory) {
              // Send message back to extension
              const message = {
                command: 'correction-request',
                groupId: groupId,
                newCategory: newCategory
              };
              vscode.postMessage(message);
            }
          }

          // Handle messages from the extension
          window.addEventListener('message', event => {
            const message = event.data;
            switch (message.command) {
              case 'update-group':
                document.getElementById('group-' + message.groupId).innerHTML = message.updatedHtml;
                break;
            }
          });
        </script>
      </body>
      </html>
    `;
  }

  /**
   * 记录用户对分类的纠正
   */
  static recordUserCorrection(groupId: string, file: string, predictedCategory: CommitGroup, userSelectedCategory: CommitGroup, confidence: number): void {
    const record: DisagreementRecord = {
      file,
      predicted: predictedCategory,
      confidence,
      userChoice: userSelectedCategory as CommitGroup,
      timestamp: Date.now()
    };

    this.preferenceMemory.recordDisagreement(record);
  }
}