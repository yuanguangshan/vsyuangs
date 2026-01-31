/**
 * 测试新模块：DiffGradedApplier 和 SecurityScanCoordinator
 * 
 * 运行方式：npx ts-node test/test-new-modules.ts
 */

import { DiffGradedApplier } from '../src/core/DiffGradedApplier';
import { SecurityScanCoordinator } from '../src/core/SecurityScanCoordinator';

console.log('====================================');
console.log('测试新模块：DiffGradedApplier');
console.log('====================================\n');

// 测试 1: DiffGradedApplier 实例化
console.log('测试 1: DiffGradedApplier 实例化');
try {
  const applier = new DiffGradedApplier();
  console.log('✅ DiffGradedApplier 实例化成功');
  
  // 测试获取统计信息
  const stats = applier.getStats();
  console.log('✅ 获取统计信息成功:', stats);
} catch (error) {
  console.error('❌ DiffGradedApplier 实例化失败:', error);
}

// 测试 2: DiffGradedApplier 单例模式
console.log('\n测试 2: DiffGradedApplier 单例模式');
try {
  const { getDiffGradedApplier } = require('../src/core/DiffGradedApplier');
  const applier1 = getDiffGradedApplier();
  const applier2 = getDiffGradedApplier();
  
  if (applier1 === applier2) {
    console.log('✅ 单例模式工作正常');
  } else {
    console.error('❌ 单例模式失败');
  }
} catch (error) {
  console.error('❌ 单例模式测试失败:', error);
}

console.log('\n====================================');
console.log('测试新模块：SecurityScanCoordinator');
console.log('====================================\n');

// 测试 3: SecurityScanCoordinator 实例化
console.log('测试 3: SecurityScanCoordinator 实例化');
try {
  const coordinator = new SecurityScanCoordinator();
  console.log('✅ SecurityScanCoordinator 实例化成功');
  
  // 测试获取选项
  const options = coordinator.getOptions();
  console.log('✅ 获取选项成功:', options);
} catch (error) {
  console.error('❌ SecurityScanCoordinator 实例化失败:', error);
}

// 测试 4: SecurityScanCoordinator 单例模式
console.log('\n测试 4: SecurityScanCoordinator 单例模式');
try {
  const { getSecurityScanCoordinator } = require('../src/core/SecurityScanCoordinator');
  const coordinator1 = getSecurityScanCoordinator();
  const coordinator2 = getSecurityScanCoordinator();
  
  if (coordinator1 === coordinator2) {
    console.log('✅ 单例模式工作正常');
  } else {
    console.error('❌ 单例模式失败');
  }
} catch (error) {
  console.error('❌ 单例模式测试失败:', error);
}

// 测试 5: 简单的 diff 解析和应用测试
console.log('\n====================================');
console.log('测试 5: 简单的 diff 解析和应用');
console.log('====================================\n');

try {
  const { DiffParser } = require('../src/core/diff');
  
  // 创建一个简单的 unified diff
  const simpleDiff = `--- a/test.txt
+++ b/test.txt
@@ -1,1 +1,1 @@
-old line
+new line
`;

  console.log('测试 diff 文本:');
  console.log(simpleDiff);
  
  // 解析 diff
  const parseResult = DiffParser.parse(simpleDiff);
  
  if (parseResult.success) {
    console.log('✅ Diff 解析成功');
    console.log('   文件数:', parseResult.stats.fileCount);
    console.log('   Hunk 数:', parseResult.stats.hunkCount);
    console.log('   添加行数:', parseResult.stats.totalAdded);
    console.log('   删除行数:', parseResult.stats.totalRemoved);
  } else {
    console.error('❌ Diff 解析失败:', parseResult.message);
  }
} catch (error) {
  console.error('❌ Diff 解析测试失败:', error);
}

// 测试 6: 快速安全扫描测试
async function testSecurityScan() {
  console.log('\n====================================');
  console.log('测试 6: 快速安全扫描');
  console.log('====================================\n');

  try {
    const { QuickSecurityScanner } = require('../src/core/quickSecurityScanner');
    
    const scanner = new QuickSecurityScanner();
    
    // 测试代码（包含一些安全问题）
    const testCode = `
const apiKey = 'AKIAIOSFODNN7EXAMPLE';
eval('malicious code');
console.log('debug output');
  `;
    
    console.log('测试代码:');
    console.log(testCode);
    
    const result = await scanner.quickScan(testCode, 'test.js');
    
    if (result.valid) {
      console.log('✅ 安全扫描通过（无关键问题）');
    } else {
      console.log('❌ 安全扫描发现问题');
      console.log('   问题数:', result.issues.length);
      console.log('   耗时:', result.duration, 'ms');
      
      if (result.issues.length > 0) {
        console.log('\n   发现的问题:');
        result.issues.forEach((issue: any, index: number) => {
          console.log(`   ${index + 1}. [${issue.severity}] ${issue.message}`);
          if (issue.suggestion) {
            console.log(`      建议: ${issue.suggestion}`);
          }
        });
      }
    }
  } catch (error) {
    console.error('❌ 安全扫描测试失败:', error);
  }

  console.log('\n====================================');
  console.log('测试完成！');
  console.log('====================================\n');
}

// 运行所有测试
async function runAllTests() {
  await testSecurityScan();
}

runAllTests().catch(console.error);
