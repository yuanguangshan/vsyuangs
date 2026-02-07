import { ContextBuffer } from '../src/engine/agent/contextBuffer';
import { parseContextReferences, buildContextPromptWithReferences } from '../src/engine/agent/contextProtocol';
import { ExtendedContextProtocol } from '../src/engine/agent/contextDSL';

async function testFixVerification() {
    console.log('🧪 Verifying Fixes for @Reference and Context Building...\n');

    const buffer = new ContextBuffer();

    // 1. 添加测试文件
    await buffer.addAsync({
        type: 'file',
        path: '/abs/path/src/core/types.ts',
        content: 'export type AgentState = "idle" | "busy";',
        semantic: 'source_code',
        alias: 'src/core/types.ts',
        tags: ['user-referenced', 'explicit']
    });

    await buffer.addAsync({
        type: 'file',
        path: '/abs/path/package.json',
        content: '{"name": "test-project", "version": "1.0.0"}',
        semantic: 'config',
        alias: 'package.json',
        tags: ['user-referenced', 'explicit']
    });

    console.log('✅ Added context items with "user-referenced" tags');

    // 2. 测试 parseUserInput (DSL)
    console.log('\n🔍 Testing ExtendedContextProtocol.parseUserInput...');
    const inputs = [
        'Analyze @package.json please',
        'What is in @"src/core/types.ts"?',
        'Check @src/core/types.ts and @package.json'
    ];

    for (const input of inputs) {
        const result = ExtendedContextProtocol.parseUserInput(input);
        console.log(`Input: "${input}"`);
        console.log(`  DSL Queries: ${JSON.stringify(result.dslQueries)}`);
        console.log(`  Plain Text: "${result.plainText}"`);
    }

    // 3. 测试 buildContextPromptWithReferences (Content vs Summary)
    console.log('\n🔍 Testing buildContextPromptWithReferences body selection...');

    // 给 package.json 添加摘要
    const items = buffer.export();
    const pkgJson = items.find(i => i.alias === 'package.json');
    if (pkgJson) {
        pkgJson.summarized = true;
        pkgJson.summary = 'THIS IS A SUMMARY OF PACKAGE.JSON';
    }

    const prompt = await buildContextPromptWithReferences(buffer, 'Analyze @package.json');

    const hasContent = prompt.includes('{"name": "test-project"');
    const hasSummary = prompt.includes('THIS IS A SUMMARY');

    if (hasContent && !hasSummary) {
        console.log('✅ SUCCESS: Prompt contains full content instead of summary for user-referenced file');
    } else {
        console.log('❌ FAILURE: Prompt does not prioritize full content for user-referenced file');
        if (hasSummary) console.log('   (Found summary instead)');
    }

    // 4. 测试 parseContextReferences (Quotes and paths)
    console.log('\n🔍 Testing parseContextReferences for quoted paths...');
    const aiResponse = 'I have reviewed @"src/core/types.ts" and it looks good.';
    const refs = parseContextReferences(aiResponse);
    console.log(`AI Response: "${aiResponse}"`);
    console.log(`Parsed Paths: ${JSON.stringify(refs.referencedItems.map(r => r.path))}`);

    if (refs.referencedItems.some(r => r.path === 'src/core/types.ts')) {
        console.log('✅ SUCCESS: Parsed quoted path correctly (quotes removed)');
    } else {
        console.log('❌ FAILURE: Could not parse quoted path');
    }
}

testFixVerification().catch(console.error);
