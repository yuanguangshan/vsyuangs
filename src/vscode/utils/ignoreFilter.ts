import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Parses ignore files (.gitignore, .vscodeignore) and returns exclude patterns
 * for use with vscode.workspace.findFiles
 */
export class IgnoreFilter {
    private patterns: string[] = [];

    constructor(workspaceRoot: string) {
        this.loadIgnorePatterns(workspaceRoot);
    }

    /**
     * Load and parse ignore files from the workspace
     */
    private loadIgnorePatterns(workspaceRoot: string) {
        const gitignorePath = path.join(workspaceRoot, '.gitignore');
        const vscodeignorePath = path.join(workspaceRoot, '.vscodeignore');

        // Load .gitignore patterns
        if (fs.existsSync(gitignorePath)) {
            const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
            this.patterns.push(...this.parseIgnoreFile(gitignoreContent));
        }

        // Load .vscodeignore patterns
        if (fs.existsSync(vscodeignorePath)) {
            const vscodeignoreContent = fs.readFileSync(vscodeignorePath, 'utf-8');
            this.patterns.push(...this.parseIgnoreFile(vscodeignoreContent));
        }

        // Always exclude node_modules if not already present
        if (!this.patterns.some(p => p.includes('node_modules'))) {
            this.patterns.push('**/node_modules/**');
        }

        console.log(`[IgnoreFilter] Loaded ${this.patterns.length} ignore patterns`);
    }

    /**
     * Parse ignore file content and return patterns
     */
    private parseIgnoreFile(content: string): string[] {
        const lines = content.split('\n');
        const patterns: string[] = [];

        for (const line of lines) {
            const trimmed = line.trim();

            // Skip empty lines and comments
            if (!trimmed || trimmed.startsWith('#')) {
                continue;
            }

            // Handle negation patterns (lines starting with !)
            if (trimmed.startsWith('!')) {
                // Negation patterns are handled differently in VSCode's findFiles
                // We'll skip them for now as findFiles doesn't support negation
                continue;
            }

            // Convert ignore pattern to VSCode glob pattern
            const globPattern = this.convertToGlob(trimmed);
            if (globPattern) {
                patterns.push(globPattern);
            }
        }

        return patterns;
    }

    /**
     * Convert ignore pattern to VSCode glob pattern
     */
    private convertToGlob(pattern: string): string | null {
        // If pattern already starts with **, keep it
        if (pattern.startsWith('**')) {
            return pattern;
        }

        // If pattern ends with /**, keep it
        if (pattern.endsWith('/**')) {
            return pattern;
        }

        // If pattern ends with /, it's a directory pattern - match all files in that directory
        if (pattern.endsWith('/')) {
            return `${pattern}**`;
        }

        // If pattern doesn't contain /, it's a filename pattern in any directory
        if (!pattern.includes('/')) {
            // For wildcard patterns like *.js, use them as-is with ** prefix
            if (pattern.includes('*')) {
                return `**/${pattern}`;
            }
            // For specific filenames, match the file itself (not a directory)
            return `**/${pattern}`;
        }

        // If pattern starts with /, it's relative to root
        if (pattern.startsWith('/')) {
            const subPattern = pattern.substring(1);
            // If it ends with /, match all files in that directory
            if (subPattern.endsWith('/')) {
                return `${subPattern}**`;
            }
            return subPattern;
        }

        // If pattern ends with *, keep it
        if (pattern.endsWith('*')) {
            return pattern;
        }

        // Check if this is a file path (contains a filename, not a directory)
        // We can detect this by checking if the last part has an extension or is a specific name
        const parts = pattern.split('/');
        const lastPart = parts[parts.length - 1];

        // If it looks like a file (has extension or is a specific filename), don't add /**
        if (lastPart.includes('.') && !lastPart.includes('*')) {
            return `**/${pattern}`;
        }

        // Also check if it's a known file pattern like .DS_Store, .gitignore, etc.
        if (lastPart.startsWith('.') && !lastPart.includes('*')) {
            return `**/${pattern}`;
        }

        // Default: treat as directory pattern, wrap with ** to match at any level
        return `**/${pattern}/**`;
    }

    /**
     * Get the combined exclude pattern for findFiles
     * Returns a comma-separated string of patterns
     */
    public getExcludePattern(): string {
        return this.patterns.join(',');
    }

    /**
     * Get all ignore patterns as an array
     */
    public getPatterns(): string[] {
        return [...this.patterns];
    }

    /**
     * Check if a file path should be ignored
     */
    public shouldIgnore(filePath: string, workspaceRoot: string): boolean {
        const relativePath = path.relative(workspaceRoot, filePath);

        for (const pattern of this.patterns) {
            if (this.matchesPattern(relativePath, pattern)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if a path matches a glob pattern
     */
    private matchesPattern(filePath: string, pattern: string): boolean {
        // Convert glob to regex
        let regexPattern = pattern
            // Escape special regex characters except *, ?, /
            .replace(/[.+^${}()|[\]\\]/g, '\\$&')
            // Convert ** to .*
            .replace(/\*\*/g, '.*')
            // Convert * to [^/]* (don't match across directories)
            .replace(/(?<!\.)\*/g, '[^/]*')
            // Convert ? to .
            .replace(/\?/g, '.');

        // Anchor to start and end
        regexPattern = `^${regexPattern}$`;

        const regex = new RegExp(regexPattern);
        return regex.test(filePath);
    }
}

/**
 * Create an IgnoreFilter instance for the current workspace
 */
export function createIgnoreFilter(): IgnoreFilter | null {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        console.warn('[IgnoreFilter] No workspace folder found');
        return null;
    }

    return new IgnoreFilter(workspaceFolder.uri.fsPath);
}
