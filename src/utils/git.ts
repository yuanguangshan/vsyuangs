/**
 * Git 适配器 - 扩展版本
 *
 * 基于 GitManager.ts 的功能进行增强
 * 使用 VS Code Git Extension API 替代命令行
 */

import * as vscode from 'vscode';
import type {
    GitCommitResult,
    GitReviewResult,
    GitReviewIssue,
    GitStatus,
    GitBranch,
    GitCommitHistory,
    DiffApplyOptions
} from '../core/types';

export class GitAdapter {
    /**
     * 提交更改
     * 
     * @param message 提交消息
     * @returns Promise<GitCommitResult> 提交结果
     * @throws Error 如果 Git 操作失败
     */
    async commit(message: string): Promise<GitCommitResult> {
        throw new Error('Git commit not yet implemented. Please use Git extension API or command line to commit changes.');
    }
}
