/**
 * Git 相关类型定义
 */

export interface GitCommitResult {
    success: boolean;
    hash?: string;
    message?: string;
    error?: string;
}

export interface GitReviewResult {
    success: boolean;
    issues: GitReviewIssue[];
    summary?: string;
}

export interface GitReviewIssue {
    type: 'error' | 'warning' | 'info';
    message: string;
    file?: string;
    line?: number;
    suggestion?: string;
}

export interface GitStatus {
    branch: string;
    ahead: number;
    behind: number;
    changed: number;
    staged: number;
}

export interface GitBranch {
    name: string;
    current: boolean;
    remote?: string;
}

export interface GitCommitHistory {
    hash: string;
    message: string;
    author: string;
    date: string;
}

export interface DiffApplyOptions {
    dryRun?: boolean;
    createBackup?: boolean;
}
