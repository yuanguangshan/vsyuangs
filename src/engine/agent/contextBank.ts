/**
 * Context Bank v1 — 跨会话上下文银行
 * 
 * 一个跨会话、跨执行周期的长期上下文存储系统，
 * 将短期 ContextBuffer 中被证明有价值的上下文沉淀为可复用资产。
 */

import fs from 'fs/promises';
import path from 'path';
import { ContextItem } from './contextBuffer';
import { ContextImportance, computeContextImportance } from './contextImportance';
import { randomUUID } from 'crypto';

export interface BankContextItem extends ContextItem {
  id: string;
  stableId: string;        // 稳定身份
  source: 'project' | 'global' | 'external'; // 上下文来源
  projectScope?: string;   // 项目作用域 (repo hash / path)
  tags?: string[];         // 标签 (e.g. ['build', 'infra', 'ci'])
  frozen?: boolean;        // 禁止自动修改
  deprecated?: boolean;    // 已弃用
  firstSeenAt: number;     // 首次出现时间
  lastUsedAt: number;      // 最后使用时间
}

export interface BankIndexEntry {
  id: string;
  path: string;
  stableId: string;
  type: 'file' | 'directory' | 'runtime';
  confidence: number;      // 重要性评分
  useCount: number;        // 使用次数
  lastUsed: number;        // 最后使用时间戳
  tags?: string[];         // 标签
  projectScope?: string;   // 项目作用域
}

export interface BankQueryOptions {
  input?: string;          // 用户输入，用于相关性匹配
  projectScope?: string;   // 项目作用域过滤
  strategy?: 'ranked' | 'recent' | 'relevance'; // 查询策略
  limit?: number;          // 限制返回数量
  tags?: string[];         // 标签过滤
}

export interface BankStats {
  totalItems: number;
  totalTokens: number;
  lastUpdated: number;
  usageLogSize: number;
}

export class ContextBank {
  private bankDir: string;
  private indexPath: string;
  private itemsDir: string;
  private snapshotsDir: string;
  private statsDir: string;

  constructor(bankPath?: string) {
    this.bankDir = bankPath || path.join(require('os').homedir(), '.yuangs', 'context-bank');
    this.indexPath = path.join(this.bankDir, 'index.json');
    this.itemsDir = path.join(this.bankDir, 'items');
    this.snapshotsDir = path.join(this.bankDir, 'snapshots');
    this.statsDir = path.join(this.bankDir, 'stats');
  }

  /**
   * 初始化 Context Bank
   */
  async initialize(): Promise<void> {
    await fs.mkdir(this.bankDir, { recursive: true });
    await fs.mkdir(this.itemsDir, { recursive: true });
    await fs.mkdir(this.snapshotsDir, { recursive: true });
    await fs.mkdir(this.statsDir, { recursive: true });

    // 初始化索引文件
    try {
      await fs.access(this.indexPath);
    } catch {
      // 如果索引文件不存在，创建一个空的
      await this.saveIndex([]);
    }
  }

  /**
   * 从 ContextBuffer 导出高价值上下文到银行
   */
  async exportFromContextBuffer(contextBuffer: { export(): ContextItem[] }, projectScope?: string): Promise<void> {
    const items = contextBuffer.export();
    const highValueItems = this.filterHighValueItems(items);

    for (const item of highValueItems) {
      // 添加项目作用域信息
      const bankItem: BankContextItem = {
        ...item,
        id: `bank_${randomUUID()}`,
        source: projectScope ? 'project' : 'global',
        projectScope,
        firstSeenAt: Date.now(),
        lastUsedAt: Date.now()
      };

      await this.upsertItem(bankItem);
    }
  }

  /**
   * 过滤高价值 ContextItem
   */
  private filterHighValueItems(items: ContextItem[]): ContextItem[] {
    return items.filter(item => {
      if (!item.importance) return false;

      const { useCount, successCount } = item.importance;
      const totalInteractions = useCount + item.importance.failureCount;
      const successRate = totalInteractions > 0 ? successCount / totalInteractions : 0;

      // 触发条件：使用次数≥3 且 成功率≥0.6
      return useCount >= 3 && successRate >= 0.6;
    });
  }

  /**
   * 插入或更新银行中的项目
   */
  async upsertItem(item: BankContextItem): Promise<void> {
    // 检查是否已存在相同 stableId 的项目
    const existingItems = await this.loadIndex();
    const existingIndex = existingItems.findIndex(idx => idx.stableId === item.stableId);

    if (existingIndex !== -1) {
      // 更新现有项目
      const existingItemPath = path.join(this.itemsDir, `${existingItems[existingIndex].id}.json`);
      const existingItem: BankContextItem = JSON.parse(await fs.readFile(existingItemPath, 'utf-8'));

      // 合并重要性统计
      if (item.importance && existingItem.importance) {
        existingItem.importance.useCount += item.importance.useCount;
        existingItem.importance.successCount += item.importance.successCount;
        existingItem.importance.failureCount += item.importance.failureCount;
        existingItem.importance.confidence = Math.max(
          existingItem.importance.confidence,
          item.importance.confidence
        );
      }

      // 更新最后使用时间
      existingItem.lastUsedAt = Math.max(existingItem.lastUsedAt, item.lastUsedAt);
      
      // 更新内容（如果内容不同）
      if (item.content !== existingItem.content) {
        existingItem.content = item.content;
        existingItem.tokens = item.tokens;
        existingItem.summary = item.summary;
        existingItem.summarized = item.summarized;
      }

      // 保存更新后的项目
      await fs.writeFile(existingItemPath, JSON.stringify(existingItem, null, 2));
      
      // 更新索引
      existingItems[existingIndex] = {
        id: existingItem.id,
        path: existingItem.path,
        stableId: existingItem.stableId,
        type: existingItem.type,
        confidence: computeContextImportance(existingItem.importance!),
        useCount: existingItem.importance?.useCount || 0,
        lastUsed: existingItem.lastUsedAt,
        tags: existingItem.tags,
        projectScope: existingItem.projectScope
      };
    } else {
      // 添加新项目
      const itemId = item.id || `bank_${randomUUID()}`;
      const itemPath = path.join(this.itemsDir, `${itemId}.json`);

      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));

      // 添加到索引
      const indexEntry: BankIndexEntry = {
        id: itemId,
        path: item.path,
        stableId: item.stableId,
        type: item.type,
        confidence: computeContextImportance(item.importance!),
        useCount: item.importance?.useCount || 0,
        lastUsed: item.lastUsedAt,
        tags: item.tags,
        projectScope: item.projectScope
      };

      existingItems.push(indexEntry);
    }

    await this.saveIndex(existingItems);
  }

  /**
   * 根据查询选项从银行检索上下文
   */
  async query(options: BankQueryOptions): Promise<BankContextItem[]> {
    const index = await this.loadIndex();
    let filteredIndex = [...index];

    // 过滤项目作用域
    if (options.projectScope) {
      filteredIndex = filteredIndex.filter(item => 
        item.projectScope === options.projectScope || item.source === 'global'
      );
    }

    // 过滤标签
    if (options.tags && options.tags.length > 0) {
      filteredIndex = filteredIndex.filter(item => 
        item.tags && options.tags?.every(tag => item.tags?.includes(tag))
      );
    }

    // 根据策略排序
    switch (options.strategy || 'ranked') {
      case 'ranked':
        filteredIndex.sort((a, b) => b.confidence - a.confidence);
        break;
      case 'recent':
        filteredIndex.sort((a, b) => b.lastUsed - a.lastUsed);
        break;
      case 'relevance':
        // 简单的相关性计算：基于路径匹配
        if (options.input) {
          filteredIndex.sort((a, b) => {
            const aRelevance = this.calculateRelevance(a.path, options.input);
            const bRelevance = this.calculateRelevance(b.path, options.input);
            return bRelevance - aRelevance;
          });
        }
        break;
    }

    // 限制返回数量
    if (options.limit) {
      filteredIndex = filteredIndex.slice(0, options.limit);
    }

    // 加载匹配的项目
    const results: BankContextItem[] = [];
    for (const entry of filteredIndex) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        results.push(item);
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item ${entry.id}:`, error);
      }
    }

    return results;
  }

  /**
   * 计算路径与输入的相关性
   */
  private calculateRelevance(itemPath: string, input: string): number {
    const pathLower = itemPath.toLowerCase();
    const inputLower = input.toLowerCase();
    
    // 计算关键词匹配度
    const inputWords = inputLower.split(/\W+/).filter(Boolean);
    const matches = inputWords.filter(word => pathLower.includes(word)).length;
    
    return matches / inputWords.length; // 返回匹配比例
  }

  /**
   * 加载索引
   */
  private async loadIndex(): Promise<BankIndexEntry[]> {
    try {
      const content = await fs.readFile(this.indexPath, 'utf-8');
      const data = JSON.parse(content);

      if (!data || data.version !== '1.0' || !Array.isArray(data.items)) {
        throw new Error('Invalid ContextBank index format');
      }

      return data.items;
    } catch (error) {
      console.warn(`[ContextBank] Failed to load index:`, error);
      return [];
    }
  }

  /**
   * 保存索引
   */
  private async saveIndex(index: BankIndexEntry[]): Promise<void> {
    const data = {
      version: '1.0',
      updatedAt: Date.now(),
      items: index
    };
    await fs.writeFile(this.indexPath, JSON.stringify(data, null, 2));
  }

  /**
   * 获取银行统计信息
   */
  async getStats(): Promise<BankStats> {
    const index = await this.loadIndex();
    let totalTokens = 0;

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        totalTokens += item.tokens;
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item for stats ${entry.id}:`, error);
      }
    }

    // 获取使用日志大小
    let usageLogSize = 0;
    try {
      const usageLogPath = path.join(this.statsDir, 'usage.log');
      const stat = await fs.stat(usageLogPath);
      usageLogSize = stat.size;
    } catch {
      // 如果日志文件不存在，大小为0
    }

    return {
      totalItems: index.length,
      totalTokens,
      lastUpdated: Date.now(), // 实际上应该是索引文件的修改时间
      usageLogSize
    };
  }

  /**
   * 创建银行快照
   */
  async createSnapshot(name?: string): Promise<string> {
    const snapshotName = name || `snapshot_${Date.now()}`;
    const snapshotPath = path.join(this.snapshotsDir, `${snapshotName}.json`);
    
    const index = await this.loadIndex();
    const snapshot = {
      name: snapshotName,
      createdAt: Date.now(),
      items: [] as BankContextItem[]
    };

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));
        snapshot.items.push(item);
      } catch (error) {
        console.warn(`[ContextBank] Failed to load item for snapshot ${entry.id}:`, error);
      }
    }

    await fs.writeFile(snapshotPath, JSON.stringify(snapshot, null, 2));
    return snapshotPath;
  }

  /**
   * 从快照恢复银行
   */
  async restoreFromSnapshot(snapshotName: string): Promise<void> {
    const snapshotPath = path.join(this.snapshotsDir, `${snapshotName}.json`);
    const snapshotContent = await fs.readFile(snapshotPath, 'utf-8');
    const snapshot = JSON.parse(snapshotContent);

    // 清空当前项目
    const files = await fs.readdir(this.itemsDir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        await fs.unlink(path.join(this.itemsDir, file));
      }
    }

    // 恢复项目
    for (const item of snapshot.items) {
      const itemPath = path.join(this.itemsDir, `${item.id}.json`);
      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));
    }

    // 重建索引
    const newIndex: BankIndexEntry[] = snapshot.items.map((item: BankContextItem) => ({
      id: item.id,
      path: item.path,
      type: item.type,
      confidence: computeContextImportance(item.importance!),
      useCount: item.importance?.useCount || 0,
      lastUsed: item.lastUsedAt,
      tags: item.tags,
      projectScope: item.projectScope
    }));

    await this.saveIndex(newIndex);
  }

  /**
   * 记录使用情况
   */
  async recordUsage(identifier: string, success: boolean): Promise<void> {
    // 首先尝试按 ID 查找项目
    let itemPath = path.join(this.itemsDir, `${identifier}.json`);
    let itemExists = false;
    let actualId = identifier;

    try {
      await fs.access(itemPath);
      itemExists = true;
    } catch {
      // ID 不存在，尝试按路径查找
      const index = await this.loadIndex();
      let indexEntry = index.find(entry => entry.path === identifier);

      // 如果还是找不到，尝试按 stableId 查找
      if (!indexEntry) {
        indexEntry = index.find(entry => entry.stableId === identifier);
      }

      if (indexEntry) {
        itemPath = path.join(this.itemsDir, `${indexEntry.id}.json`);
        actualId = indexEntry.id; // 使用实际的 ID
        itemExists = true;
      }
    }

    if (!itemExists) {
      console.warn(`[ContextBank] Item with identifier "${identifier}" not found`);
      return;
    }

    try {
      const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));

      if (item.importance) {
        item.importance.useCount++;
        if (success) {
          item.importance.successCount++;
          item.importance.confidence = Math.min(1, item.importance.confidence + 0.05);
        } else {
          item.importance.failureCount++;
          item.importance.confidence = Math.max(0, item.importance.confidence - 0.1);
        }
        item.lastUsedAt = Date.now();
      }

      await fs.writeFile(itemPath, JSON.stringify(item, null, 2));

      // 更新索引
      const index = await this.loadIndex();
      const indexEntry = index.find(entry => entry.id === actualId);
      if (indexEntry) {
        indexEntry.useCount = item.importance?.useCount || 0;
        indexEntry.lastUsed = item.lastUsedAt;
        indexEntry.confidence = computeContextImportance(item.importance!);
        await this.saveIndex(index);
      }
    } catch (error) {
      console.warn(`[ContextBank] Failed to update usage for item ${identifier}:`, error);
    }

    // 记录到使用日志
    const logPath = path.join(this.statsDir, 'usage.log');
    const logEntry = {
      timestamp: Date.now(),
      itemId: actualId,
      success,
      userAgent: 'ContextBank/v1'
    };

    try {
      await fs.appendFile(logPath, JSON.stringify(logEntry) + '\n');
    } catch (error) {
      console.warn('[ContextBank] Failed to write to usage log:', error);
    }
  }

  /**
   * 清理过期或低价值项目
   */
  async cleanup(options: {
    minConfidence?: number;
    maxAgeDays?: number;
    dryRun?: boolean
  } = {}): Promise<number> {
    const {
      minConfidence = 0.3,
      maxAgeDays = 180,
      dryRun = false
    } = options;

    const index = await this.loadIndex();
    const cutoffTime = Date.now() - (maxAgeDays * 24 * 60 * 60 * 1000);
    let cleanedCount = 0;

    const remainingIndex: BankIndexEntry[] = [];

    for (const entry of index) {
      try {
        const itemPath = path.join(this.itemsDir, `${entry.id}.json`);
        const item: BankContextItem = JSON.parse(await fs.readFile(itemPath, 'utf-8'));

        // 检查是否应该保留该项目
        const isHighConfidence = entry.confidence >= minConfidence;
        const isRecentlyUsed = entry.lastUsed >= cutoffTime;
        const isFrozen = item.frozen === true;
        const isDeprecated = item.deprecated === true;

        const shouldKeep = isHighConfidence || isRecentlyUsed || isFrozen || isDeprecated;

        if (!shouldKeep && !dryRun) {
          // 删除项目文件
          await fs.unlink(itemPath);
          cleanedCount++;
        } else {
          // 保留项目
          remainingIndex.push(entry);
        }
      } catch (error) {
        console.warn(`[ContextBank] Failed to evaluate item for cleanup ${entry.id}:`, error);
        // 如果无法读取项目，保留它以防万一
        remainingIndex.push(entry);
      }
    }

    if (!dryRun) {
      await this.saveIndex(remainingIndex);
    }

    return cleanedCount;
  }
}