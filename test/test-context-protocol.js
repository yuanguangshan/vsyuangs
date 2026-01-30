"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contextBuffer_1 = require("./src/engine/agent/contextBuffer");
const contextProtocol_1 = require("./src/engine/agent/contextProtocol");
async function testContextProtocol() {
    console.log('🧪 Testing Context Reference Protocol v1...\n');
    // 创建一个ContextBuffer实例
    const buffer = new contextBuffer_1.ContextBuffer();
    // 添加一些测试ContextItems
    await buffer.addAsync({
        type: 'file',
        path: 'src/main.ts',
        content: 'console.log("Hello World");',
        semantic: 'source_code'
    });
    await buffer.addAsync({
        type: 'file',
        path: 'README.md',
        content: '# My Project\nThis is a sample project.',
        semantic: 'documentation'
    });
    await buffer.addAsync({
        type: 'file',
        path: 'config.json',
        content: '{"port": 3000, "debug": true}',
        semantic: 'config'
    });
    console.log('✅ Added test context items');
    console.log(`📊 Buffer contains ${buffer.export().length} items\n`);
    // 测试Context引用解析
    console.log('🔍 Testing Context Reference Parsing...');
    const testResponse1 = `
I analyzed the code and found that [Reference] file: src/main.ts (src/main.ts) contains the main entry point.
The configuration in [Reference] file: config.json (config.json) sets the port to 3000.
`;
    const references1 = (0, contextProtocol_1.parseContextReferences)(testResponse1);
    console.log('Parsed references:', references1.referencedItems.map(r => r.path));
    // 验证引用
    const validation = (0, contextProtocol_1.validateContextReferences)(references1.referencedItems, buffer.export());
    console.log('Valid references:', validation.valid.map(v => v.path));
    console.log('Invalid references:', validation.invalid.map(v => v.path));
    console.log('');
    // 测试JSON格式的引用解析
    console.log('🔍 Testing JSON Format Reference Parsing...');
    const testResponse2 = `
\`\`\`json
{
  "action_type": "answer",
  "reasoning": "Used information from source code and config",
  "content": "The app runs on port 3000",
  "used_context": ["src/main.ts", "config.json"]
}
\`\`\`
`;
    const references2 = (0, contextProtocol_1.parseContextReferences)(testResponse2);
    console.log('Parsed JSON references:', references2.referencedItems.map(r => r.path));
    console.log('');
    // 记录一些显式引用以测试引用跟踪
    console.log('📈 Testing Explicit Reference Tracking...');
    buffer.recordExplicitReference('src/main.ts', 'test-response-1');
    buffer.recordExplicitReference('config.json', 'test-response-1');
    buffer.recordExplicitReference('src/main.ts', 'test-response-2');
    // 验证引用的有效性
    buffer.validateReference('src/main.ts', true); // 标记为有用
    buffer.validateReference('README.md', false); // 标记为无用
    // 显示更新后的统计信息
    const items = buffer.export();
    for (const item of items) {
        console.log(`${item.path}: referenced ${item.usageStats?.referencedCount || 0} times, useful: ${item.usageStats?.verifiedUseful || 0}, not useful: ${item.usageStats?.verifiedNotUseful || 0}`);
    }
    console.log('');
    // 生成回溯报告
    console.log('📋 Generating Retrospective Report...');
    const report = (0, contextProtocol_1.generateReferenceRetrospective)(buffer, 'test-execution-1', 'What does the main file do?', testResponse1);
    console.log(report);
    console.log('');
    // 分析Context生命周期
    console.log('🔄 Analyzing Context Lifecycle...');
    const lifecycleAnalysis = (0, contextProtocol_1.analyzeContextLifecycle)(buffer);
    for (const analysis of lifecycleAnalysis) {
        console.log(`${analysis.path}: trend=${analysis.usageTrend}, quality=${analysis.qualityScore.toFixed(2)}, relevance=${analysis.relevanceScore.toFixed(2)}, recommendation=${analysis.recommendation}`);
    }
}
// 运行测试
testContextProtocol().catch(console.error);
//# sourceMappingURL=test-context-protocol.js.map