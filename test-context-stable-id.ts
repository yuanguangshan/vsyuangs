/**
 * Context Stable ID 测试套件
 * 
 * 测试所有与 stableId 相关的功能
 */

import { ContextBuffer } from './src/engine/agent/contextBuffer';
import { ContextBank } from './src/engine/agent/contextBank';
import { ContextItem } from './src/engine/agent/contextBuffer';
import { BankContextItem } from './src/engine/agent/contextBank';
import { ContextToSkillPromotionRules } from './src/engine/agent/contextSkillPromotion';
import { Skill } from './src/engine/agent/skills';
import * as fs from 'fs';
import * as path from 'path';

async function runTests() {
  console.log('🧪 开始 Context Stable ID 测试...\n');

  // 测试 1: ContextBuffer 中的 stableId 生成
  await testContextBufferStableId();
  
  // 测试 2: ContextBank 中的 stableId 使用
  await testContextBankStableId();
  
  // 测试 3: Skill Promotion 中的 stableId 传递
  await testSkillPromotionStableId();
  
  // 测试 4: DSL 查询与 stableId
  await testDSLQueryWithStableId();
  
  console.log('\n🎉 所有测试完成！');
}

async function testContextBufferStableId() {
  console.log('📋 测试 1: ContextBuffer 中的 stableId 生成...');
  
  const buffer = new ContextBuffer();
  
  // 添加一个 ContextItem
  const item1: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("hello world");',
    semantic: 'source_code'
  };
  
  buffer.add(item1);
  
  const items = buffer.export();
  const exportedItem = items[0];
  
  // 验证 stableId 是否生成
  if (!exportedItem.stableId) {
    console.error('❌ 测试失败: stableId 未生成');
    return;
  }
  
  console.log(`✅ stableId 生成成功: ${exportedItem.stableId.substring(0, 8)}...`);
  
  // 验证相同的路径和内容产生相同的 stableId
  const item2: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("hello world");',
    semantic: 'source_code'
  };
  
  buffer.add(item2);
  const items2 = buffer.export();
  const exportedItem2 = items2[1];
  
  if (exportedItem.stableId !== exportedItem2.stableId) {
    console.error('❌ 测试失败: 相同内容应该产生相同的 stableId');
    return;
  }
  
  console.log('✅ 相同内容产生相同 stableId');
  
  // 验证不同内容产生不同的 stableId
  const item3: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/test/file1.ts',
    content: 'console.log("different content");',
    semantic: 'source_code'
  };
  
  buffer.add(item3);
  const items3 = buffer.export();
  const exportedItem3 = items3[2];
  
  if (exportedItem.stableId === exportedItem3.stableId) {
    console.error('❌ 测试失败: 不同内容应该产生不同的 stableId');
    return;
  }
  
  console.log('✅ 不同内容产生不同 stableId');
  console.log('✅ ContextBuffer stableId 测试通过\n');
}

async function testContextBankStableId() {
  console.log('🏦 测试 2: ContextBank 中的 stableId 使用...');
  
  // 创建一个临时的 ContextBank
  const bank = new ContextBank(path.join(__dirname, '.test-context-bank'));
  await bank.initialize();
  
  // 创建一个 BankContextItem
  const bankItem: BankContextItem = {
    type: 'file',
    path: '/test/bank-file.ts',
    stableId: 'test-stable-id-123',
    content: 'console.log("from bank");',
    id: 'bank-item-1',
    source: 'project',
    firstSeenAt: Date.now(),
    lastUsedAt: Date.now(),
    tokens: 10
  };
  
  // 添加到银行
  await bank.upsertItem(bankItem);
  
  // 查询银行项目
  const results = await bank.query({ limit: 10 });
  
  if (results.length === 0) {
    console.error('❌ 测试失败: 无法从银行查询项目');
    return;
  }
  
  const retrievedItem = results[0];
  
  if (retrievedItem.stableId !== 'test-stable-id-123') {
    console.error('❌ 测试失败: 从银行检索的项目 stableId 不匹配');
    return;
  }
  
  console.log('✅ ContextBank stableId 存储和检索正常');
  
  // 测试重复插入（应该更新而不是创建新项目）
  const updatedItem: BankContextItem = {
    ...bankItem,
    content: 'console.log("updated content");',
    lastUsedAt: Date.now()
  };
  
  await bank.upsertItem(updatedItem);
  const resultsAfterUpdate = await bank.query({ limit: 10 });
  
  // 应该只有一个项目，且 stableId 相同
  if (resultsAfterUpdate.length !== 1 || resultsAfterUpdate[0].stableId !== 'test-stable-id-123') {
    console.error('❌ 测试失败: 重复插入应该更新而不是创建新项目');
    return;
  }
  
  console.log('✅ ContextBank 重复插入更新正常');
  
  // 清理测试数据
  try {
    await fs.promises.rm(path.join(__dirname, '.test-context-bank'), { recursive: true, force: true });
  } catch (e) {
    // 忽略清理错误
  }
  
  console.log('✅ ContextBank stableId 测试通过\n');
}

async function testSkillPromotionStableId() {
  console.log('🚀 测试 3: Skill Promotion 中的 stableId 传递...');
  
  // 创建一个高价值的 ContextItem（满足晋升条件）
  const highValueItem: ContextItem = {
    type: 'file',
    path: '/important/config.json',
    stableId: 'config-stable-id-456',
    content: '{"important": true}',
    id: 'ctx-123',
    tokens: 10,
    importance: {
      id: 'imp-123',
      path: '/important/config.json',
      type: 'file',
      useCount: 10,
      successCount: 9,
      failureCount: 1,
      confidence: 0.9,
      createdAt: Date.now(),
      lastUsed: Date.now()
    }
  };
  
  // 尝试晋升为 Skill
  const promotedSkill = ContextToSkillPromotionRules.evaluatePromotion(highValueItem);
  
  if (!promotedSkill) {
    console.error('❌ 测试失败: 高价值 ContextItem 应该能晋升为 Skill');
    return;
  }
  
  // 检查 Skill 的 metadata 是否包含原始 Context 的 stableId
  if (!(promotedSkill as any).metadata || !(promotedSkill as any).metadata.originalContextStableId) {
    console.error('❌ 测试失败: 晋升的 Skill 应该包含原始 Context 的 stableId');
    return;
  }

  if ((promotedSkill as any).metadata.originalContextStableId !== 'config-stable-id-456') {
    console.error('❌ 测试失败: Skill 中的 originalContextStableId 不匹配');
    return;
  }
  
  console.log('✅ Skill Promotion 中的 stableId 传递正常');
  console.log('✅ Skill Promotion stableId 测试通过\n');
}

async function testDSLQueryWithStableId() {
  console.log('🔍 测试 4: DSL 查询与 stableId...');
  
  const buffer = new ContextBuffer();
  
  // 添加一些带 stableId 的 ContextItem
  const item1: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/src/main.ts',
    content: 'function main() { console.log("main"); }',
    semantic: 'source_code',
    tags: ['important', 'core']
  };
  
  const item2: Omit<ContextItem, 'tokens'> = {
    type: 'file',
    path: '/src/utils.ts',
    content: 'function helper() { console.log("helper"); }',
    semantic: 'source_code',
    tags: ['utility', 'helper']
  };
  
  buffer.add(item1);
  buffer.add(item2);
  
  const items = buffer.export();
  
  // 验证所有项目都有 stableId
  for (const item of items) {
    if (!item.stableId) {
      console.error('❌ 测试失败: DSL 查询相关的 ContextItem 应该有 stableId');
      return;
    }
  }
  
  console.log('✅ DSL 查询相关的 ContextItem 都有 stableId');
  
  // 测试 DSL 查询功能
  try {
    const dslResults = await buffer.getDSLContextForInput('type:file tag:important');
    console.log(`✅ DSL 查询返回 ${dslResults.length} 个项目`);
  } catch (error) {
    console.error('❌ DSL 查询失败:', error);
    return;
  }
  
  console.log('✅ DSL 查询与 stableId 测试通过\n');
}

// 运行测试
runTests().catch(err => {
  console.error('测试运行出错:', err);
  process.exit(1);
});