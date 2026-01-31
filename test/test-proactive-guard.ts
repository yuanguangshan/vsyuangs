/**
 * Proactive Guard 功能测试
 */

import * as assert from 'assert';
import { QuickSecurityScanner } from '../src/core/quickSecurityScanner';
import { SecuritySeverity, IssueType } from '../src/core/securityTypes';

suite('QuickSecurityScanner Test Suite', () => {
  let scanner: QuickSecurityScanner;

  setup(() => {
    scanner = new QuickSecurityScanner();
  });

  test('Should detect AWS Access Key', async () => {
    const code = `
const apiKey = 'AKIAIOSFODNN7EXAMPLE';
console.log(apiKey);
`;
    const result = await scanner.quickScan(code, 'test.ts');

    assert.strictEqual(result.valid, false, 'Should detect AWS Access Key');
    assert.strictEqual(result.hasCriticalError, true, 'Should be Critical');
    
    const awsIssues = result.issues.filter(i => i.type === IssueType.SECURITY_LEAK);
    assert.strictEqual(awsIssues.length, 1, 'Should find 1 AWS key issue');
    assert.strictEqual(awsIssues[0].severity, SecuritySeverity.CRITICAL);
  });

  test('Should detect eval() usage', async () => {
    const code = `
const code = 'console.log("hello")';
eval(code);
`;
    const result = await scanner.quickScan(code, 'test.ts');

    assert.strictEqual(result.valid, false, 'Should detect eval()');
    assert.strictEqual(result.hasCriticalError, true, 'Should be Critical');
    
    const evalIssues = result.issues.filter(i => i.type === IssueType.DANGEROUS_FUNCTION);
    assert.strictEqual(evalIssues.length, 1, 'Should find 1 eval issue');
  });

  test('Should detect console.log', async () => {
    const code = `
function hello() {
  console.log('Hello, World!');
}
`;
    const result = await scanner.quickScan(code, 'test.ts');

    assert.strictEqual(result.valid, true, 'console.log is not critical');
    assert.strictEqual(result.hasCriticalError, false, 'No critical errors');
    
    const consoleIssues = result.issues.filter(i => i.type === IssueType.STYLE_COMMENT);
    assert.strictEqual(consoleIssues.length, 1, 'Should find 1 console.log issue');
    assert.strictEqual(consoleIssues[0].severity, SecuritySeverity.INFO);
  });

  test('Should detect path traversal', async () => {
    const code = `
const filePath = '../../../etc/passwd';
fs.readFile(filePath, 'utf8');
`;
    const result = await scanner.quickScan(code, 'test.ts');

    assert.strictEqual(result.valid, false, 'Should detect path traversal');
    
    const pathIssues = result.issues.filter(i => i.type === IssueType.SECURITY_PATH);
    assert.strictEqual(pathIssues.length > 0, 'Should find path traversal issues');
  });

  test('Should complete scan within 50ms', async () => {
    const code = `
// Large code block with various patterns
const apiKey = 'AKIAIOSFODNN7EXAMPLE';
eval('some code');
console.log('debug');
const path = '../../../etc/passwd';

function complexFunction() {
  ${Array(100).fill('  console.log("line");').join('\n')}
}
`;
    const startTime = Date.now();
    const result = await scanner.quickScan(code, 'test.ts');
    const duration = Date.now() - startTime;

    assert.strictEqual(duration < 50, true, `Scan took ${duration}ms (should be < 50ms)`);
    assert.strictEqual(result.issues.length > 0, 'Should find issues');
  });

  test('Should handle empty code', async () => {
    const code = '';
    const result = await scanner.quickScan(code, 'test.ts');

    assert.strictEqual(result.valid, true, 'Empty code should be valid');
    assert.strictEqual(result.issues.length, 0, 'No issues in empty code');
  });

  test('Should track performance stats', async () => {
    const code = `
const apiKey = 'AKIAIOSFODNN7EXAMPLE';
`;
    
    // Run multiple scans
    await scanner.quickScan(code, 'test.ts');
    await scanner.quickScan(code, 'test.ts');
    await scanner.quickScan(code, 'test.ts');

    const stats = scanner.getPerformanceStats();
    
    assert.strictEqual(stats.totalScans, 3, 'Should track 3 scans');
    assert.strictEqual(stats.averageIssuesFound > 0, true, 'Should have average issues');
    assert.strictEqual(stats.maxDuration > 0, true, 'Should have max duration');
  });

  test('Should support custom rules', async () => {
    const customRule = {
      id: 'CUSTOM_PATTERN',
      type: IssueType.STYLE_NAMING as any,
      severity: SecuritySeverity.WARNING,
      name: 'Custom Pattern',
      pattern: /TODO:|FIXME:/g,
      description: 'Custom TODO pattern',
      suggestion: 'Use issue tracker instead'
    };

    scanner.addRule(customRule);

    const code = `
// TODO: fix this bug
// FIXME: improve performance
`;
    const result = await scanner.quickScan(code, 'test.ts');

    const customIssues = result.issues.filter(i => i.ruleId === 'CUSTOM_PATTERN');
    assert.strictEqual(customIssues.length, 2, 'Should find 2 custom pattern matches');
  });

  test('Should remove custom rules', async () => {
    const customRule = {
      id: 'REMOVABLE_RULE',
      type: IssueType.STYLE_NAMING as any,
      severity: SecuritySeverity.WARNING,
      name: 'Removable Rule',
      pattern: /CUSTOM_PATTERN/g,
      description: 'This should be removable',
      suggestion: 'Remove this rule'
    };

    scanner.addRule(customRule);

    const code = `
const value = CUSTOM_PATTERN;
`;
    let result = await scanner.quickScan(code, 'test.ts');
    assert.strictEqual(result.issues.some(i => i.ruleId === 'REMOVABLE_RULE'), true);

    scanner.removeRule('REMOVABLE_RULE');

    result = await scanner.quickScan(code, 'test.ts');
    assert.strictEqual(result.issues.some(i => i.ruleId === 'REMOVABLE_RULE'), false);
  });

  test('Should calculate line and column correctly', async () => {
    const code = `
line 1
line 2
line 3
const apiKey = 'AKIAIOSFODNN7EXAMPLE';
line 5
`;
    const result = await scanner.quickScan(code, 'test.ts');
    
    const awsIssue = result.issues.find(i => i.ruleId === 'AWS_ACCESS_KEY');
    assert.strictEqual(awsIssue?.line, 3, 'Should be on line 3 (0-indexed)');
    assert.strictEqual(typeof awsIssue?.column, 'number', 'Should have column number');
  });
});