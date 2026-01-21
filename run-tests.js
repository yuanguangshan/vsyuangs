#!/usr/bin/env node

const { spawn, execSync } = require('child_process');

function runTest(testFile, testName) {
  return new Promise((resolve, reject) => {
    console.log('\n🧪 运行 ' + testName + '...');
    console.log('   执行: npx ts-node ' + testFile);

    const testProcess = spawn('npx', ['ts-node', testFile], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    testProcess.on('close', (code) => {
      if (code === 0) {
        console.log('   ✅ ' + testName + ' 通过');
        resolve(code);
      } else {
        console.error('   ❌ ' + testName + ' 失败 (退出码: ' + code + ')');
        reject(code);
      }
    });
  });
}

async function runAllTests() {
  console.log('🚀 开始运行所有测试...\n');

  try {
    // 运行单元测试
    await runTest('./test-context-stable-id.ts', 'Context Stable ID 测试');

    // 运行集成测试
    await runTest('./test-context-integration.ts', 'Context 系统集成测试');

    console.log('\n🎉 所有测试运行完成！');
  } catch (error) {
    console.error('\n💥 测试执行失败:', error);
    process.exit(1);
  }
}

// 检查是否可以直接运行 ts-node
try {
  execSync('npx ts-node --version', { stdio: 'pipe' });
  console.log('✅ 检测到 ts-node');
  runAllTests();
} catch (e) {
  console.log('⚠️  未检测到 ts-node，尝试安装...');
  const installProcess = spawn('npm', ['install', '--no-save', 'typescript', '@types/node', 'ts-node'], {
    stdio: 'inherit'
  });

  installProcess.on('close', (code) => {
    if (code === 0) {
      console.log('✅ 依赖安装完成，开始运行测试...');
      runAllTests();
    } else {
      console.error('❌ 依赖安装失败');
      process.exit(1);
    }
  });
}