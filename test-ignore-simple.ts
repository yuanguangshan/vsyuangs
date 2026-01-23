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

            patterns.push(trimmed);
        }

        return patterns;
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
