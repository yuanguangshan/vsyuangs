"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
/**
 * Simple test to verify ignore pattern parsing without VSCode dependency
 */
class SimpleIgnoreFilter {
    patterns = [];
    constructor(workspaceRoot) {
        this.loadIgnorePatterns(workspaceRoot);
    }
    loadIgnorePatterns(workspaceRoot) {
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
    parseIgnoreFile(content) {
        const lines = content.split('\n');
        const patterns = [];
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
    convertToGlob(pattern) {
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
        // We can detect this by checking if of last part has an extension or is a specific name
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
    getPatterns() {
        return [...this.patterns];
    }
    shouldIgnore(filePath, workspaceRoot) {
        const relativePath = path.relative(workspaceRoot, filePath);
        for (const pattern of this.patterns) {
            if (this.matchesPattern(relativePath, pattern)) {
                return true;
            }
        }
        return false;
    }
    matchesPattern(filePath, pattern) {
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
//# sourceMappingURL=test-ignore-simple.js.map