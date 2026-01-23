import * as fs from 'fs';
import * as path from 'path';

/**
 * Simple test to verify ignore pattern parsing without VSCode dependency
 */

class SimpleIgnoreFilter {
    private patterns: string[] = [];

    constructor(workspaceRoot: string) {
        this.loadIgnorePatterns(workspaceRoot);
    }

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

        console.log(`Loaded ${this.patterns.length} ignore patterns`);
    }

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
                continue;
            }

            // Convert ignore pattern to glob pattern
            const globPattern = this.convertToGlob(trimmed);
            if (globPattern) {
                patterns.push(globPattern);
            }
        }

        return patterns;
    }

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

        // Default: wrap with ** to match at any level
        return `**/${pattern}/**`;
    }

    public getPatterns(): string[] {
        return [...this.patterns];
    }

    public shouldIgnore(filePath: string, workspaceRoot: string): boolean {
        const relativePath = path.relative(workspaceRoot, filePath);
        
        for (const pattern of this.patterns) {
            if (this.matchesPattern(relativePath, pattern)) {
                return true;
            }
        }
        
        return false;
    }

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

const workspaceRoot = process.cwd();

console.log('Testing IgnoreFilter...\n');

const filter = new SimpleIgnoreFilter(workspaceRoot);

console.log('\nLoaded patterns:');
const patterns = filter.getPatterns();
patterns.forEach((pattern, index) => {
    console.log(`  ${index + 1}. ${pattern}`);
});

console.log('\n\nTest cases:');
const testCases = [
    'node_modules/package.json',
    'dist/bundle.js',
    'build/release.wasm',
    '.vscode/settings.json',
    '.DS_Store',
    'src/vscode/provider/ChatViewProvider.ts',
    'package.json',
    'README.md',
    '.gitignore',
    '.vscodeignore',
    'replay/test.json',
    'logs/error.log',
    '.ai/context.json',
];

testCases.forEach(testPath => {
    const shouldIgnore = filter.shouldIgnore(`${workspaceRoot}/${testPath}`, workspaceRoot);
    console.log(`  ${testPath}: ${shouldIgnore ? 'IGNORED ✗' : 'INCLUDED ✓'}`);
});

console.log('\n\nSummary:');
const ignoredCount = testCases.filter(testPath => filter.shouldIgnore(`${workspaceRoot}/${testPath}`, workspaceRoot)).length;
console.log(`  Total test cases: ${testCases.length}`);
console.log(`  Ignored: ${ignoredCount}`);
console.log(`  Included: ${testCases.length - ignoredCount}`);
