"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Debug test for .DS_Store pattern matching
 */
function testMatchesPattern(filePath, pattern) {
    console.log(`\nTesting: "${filePath}" vs "${pattern}"`);
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
    console.log(`  After conversion: ${regexPattern}`);
    // Anchor to start and end
    regexPattern = `^${regexPattern}$`;
    console.log(`  Final regex: ${regexPattern}`);
    const regex = new RegExp(regexPattern);
    const result = regex.test(filePath);
    console.log(`  Match result: ${result}`);
    return result;
}
// Test cases
console.log('=== Testing .DS_Store pattern matching ===\n');
testMatchesPattern('.DS_Store', '**/.DS_Store');
testMatchesPattern('node_modules/.DS_Store', '**/.DS_Store');
testMatchesPattern('src/.DS_Store', '**/.DS_Store');
testMatchesPattern('.DS_Store', '.DS_Store');
testMatchesPattern('folder/.DS_Store', '**/.DS_Store');
// Also test other patterns to ensure they work
console.log('\n=== Testing other patterns ===\n');
testMatchesPattern('node_modules/package.json', 'node_modules/**');
testMatchesPattern('dist/bundle.js', 'dist/**');
testMatchesPattern('package.json', '**/package.json');
//# sourceMappingURL=test-debug-dsstore.js.map