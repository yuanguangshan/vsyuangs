import { IgnoreFilter } from './src/vscode/utils/ignoreFilter';

/**
 * Test script to verify ignore filter functionality
 */

const workspaceRoot = process.cwd();

console.log('Testing IgnoreFilter...\n');

const filter = new IgnoreFilter(workspaceRoot);

console.log('Loaded patterns:');
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
];

testCases.forEach(testPath => {
    const shouldIgnore = filter.shouldIgnore(`${workspaceRoot}/${testPath}`, workspaceRoot);
    console.log(`  ${testPath}: ${shouldIgnore ? 'IGNORED' : 'INCLUDED'}`);
});

console.log('\n\nExclude pattern for VSCode findFiles:');
console.log(filter.getExcludePattern());
