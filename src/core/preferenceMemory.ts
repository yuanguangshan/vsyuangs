/**
 * Preference Memory - 知识继承模块
 * 
 * 记录用户对 AI 建议的反馈，并动态调整 AI 的行为
 * 
 * 核心功能：
 * 1. 记录用户对各类建议的采纳/忽略行为
 * 2. 计算用户对各类问题的"反感度"（annoyanceScore）
 * 3. 生成个性化 Prompt 约束（黑名单/白名单）
 * 4. 支持时间衰减（旧反馈权重降低）
 */

import * as vscode from 'vscode';
import {
  IssueType,
  IssueFeedback,
  IssueFeedbackStats,
  UserPreferenceConstraints,
  DEFAULT_SCAN_CONFIG
} from './securityTypes';

/**
 * 反馈记录配置
 */
interface FeedbackConfig {
  /** 记录的最大数量 */
  maxRecords: number;
  
  /** 记录的有效期（毫秒） */
  recordTTL: number;
  
  /** 忽略阈值（忽略次数超过此值且忽略率 > 80% 才计入黑名单） */
  ignoreThreshold: number;
  
  /** 忽略率阈值（0-1） */
  ignoreRateThreshold: number;
  
  /** 时间衰减半衰期（毫秒） */
  halfLife: number;
}

/**
 * 默认反馈配置
 */
const DEFAULT_FEEDBACK_CONFIG: FeedbackConfig = {
  maxRecords: 1000,
  recordTTL: 30 * 24 * 60 * 60 * 1000, // 30天
  ignoreThreshold: 3,
  ignoreRateThreshold: 0.8,
  halfLife: 7 * 24 * 60 * 60 * 1000 // 7天半衰期
};

/**
 * Preference Memory
 */
export class PreferenceMemory {
  private context: vscode.ExtensionContext;
  private config: FeedbackConfig;
  private storageKey: string = 'vsyuangs_preference_feedback';

  constructor(context: vscode.ExtensionContext, config?: Partial<FeedbackConfig>) {
    this.context = context;
    this.config = { ...DEFAULT_FEEDBACK_CONFIG, ...config };
  }

  /**
   * 记录用户反馈
   */
  async recordFeedback(
    issueType: IssueType,
    action: 'applied' | 'ignored' | 'dismissed',
    filePath?: string
  ): Promise<void> {
    const feedback: IssueFeedback = {
      issueType,
      action,
      timestamp: Date.now(),
      filePath
    };

    // 获取现有记录
    const records = this.getFeedbackRecords();
    
    // 添加新记录
    records.push(feedback);
    
    // 清理过期记录
    const validRecords = this.cleanupRecords(records);
    
    // 限制记录数量
    const limitedRecords = validRecords.slice(-this.config.maxRecords);
    
    // 保存
    await this.context.globalState.update(this.storageKey, limitedRecords);
    
    console.log(`[PreferenceMemory] Recorded feedback: ${issueType} - ${action}`);
  }

  /**
   * 获取反馈记录
   */
  private getFeedbackRecords(): IssueFeedback[] {
    const records = this.context.globalState.get<IssueFeedback[]>(this.storageKey, []);
    return records || [];
  }

  /**
   * 清理过期记录
   */
  private cleanupRecords(records: IssueFeedback[]): IssueFeedback[] {
    const now = Date.now();
    const cutoff = now - this.config.recordTTL;
    
    return records.filter(r => r.timestamp >= cutoff);
  }

  /**
   * 计算统计数据
   */
  async getStats(): Promise<IssueFeedbackStats> {
    const records = this.cleanupRecords(this.getFeedbackRecords());
    
    // 初始化统计
    const statsMap: Record<IssueType, {
      ignoreCount: number;
      applyCount: number;
      totalCount: number;
      ignoreRate: number;
      lastFeedbackTime: number;
    }> = {} as any;
    
    // 初始化所有 IssueType
    Object.values(IssueType).forEach(type => {
      statsMap[type] = {
        ignoreCount: 0,
        applyCount: 0,
        totalCount: 0,
        ignoreRate: 0,
        lastFeedbackTime: 0
      };
    });
    
    // 统计
    for (const record of records) {
      const type = record.issueType;
      
      if (record.action === 'ignored' || record.action === 'dismissed') {
        statsMap[type].ignoreCount++;
      } else if (record.action === 'applied') {
        statsMap[type].applyCount++;
      }
      
      statsMap[type].totalCount++;
      statsMap[type].lastFeedbackTime = Math.max(
        statsMap[type].lastFeedbackTime,
        record.timestamp
      );
    }
    
    // 计算忽略率
    for (const type of Object.values(IssueType)) {
      const stats = statsMap[type];
      if (stats.totalCount > 0) {
        stats.ignoreRate = stats.ignoreCount / stats.totalCount;
      }
    }
    
    // 计算起始时间
    const startTime = records.length > 0 
      ? records[0].timestamp 
      : Date.now();
    
    return {
      byType: statsMap,
      totalRecords: records.length,
      startTime
    };
  }

  /**
   * 计算某个 IssueType 的反感度（annoyanceScore）
   * 
   * 考虑因素：
   * 1. 忽略次数（越多越反感）
   * 2. 忽略率（越高越反感）
   * 3. 时间衰减（旧反馈权重降低）
   * 
   * 评分标准（优化版）：
   * - applied: -1.0 (强正向，用户采纳建议）
   * - dismissed: 0.2 (轻微负向，用户只是暂时不想看）
   * - ignored: 1.0 (强负向，用户明确拒绝此类建议）
   */
  async calculateAnnoyanceScore(issueType: IssueType): Promise<number> {
    const records = this.cleanupRecords(this.getFeedbackRecords());
    const typeRecords = records.filter(r => r.issueType === issueType);
    
    if (typeRecords.length === 0) {
      return 0;
    }
    
    let weightedScore = 0;
    const now = Date.now();
    
    for (const record of typeRecords) {
      // 计算时间衰减因子（0-1）
      const age = now - record.timestamp;
      const decay = Math.exp(-age / this.config.halfLife);
      
      // 计算单次反馈的分数（优化版）
      let score: number;
      switch (record.action) {
        case 'applied':
          score = -1.0; // 强正向
          break;
        case 'dismissed':
          score = 0.2; // 轻微负向
          break;
        case 'ignored':
          score = 1.0; // 强负向
          break;
        default:
          score = 0.5; // 默认值
      }
      
      // 加权累加
      weightedScore += score * decay;
    }
    
    return Math.max(0, weightedScore);
  }

  /**
   * 获取黑名单（用户反感的类型）
   */
  async getBlacklist(): Promise<IssueType[]> {
    const stats = await this.getStats();
    const blacklist: IssueType[] = [];
    
    for (const type of Object.values(IssueType)) {
      const typeStats = stats.byType[type];
      
      // 检查是否达到阈值
      if (typeStats.totalCount >= this.config.ignoreThreshold) {
        if (typeStats.ignoreRate >= this.config.ignoreRateThreshold) {
          blacklist.push(type);
        }
      }
    }
    
    return blacklist;
  }

  /**
   * 获取白名单（用户关注的类型）
   * 
   * 逻辑：用户经常采纳的类型
   */
  async getWhitelist(): Promise<IssueType[]> {
    const stats = await this.getStats();
    const whitelist: IssueType[] = [];
    
    for (const type of Object.values(IssueType)) {
      const typeStats = stats.byType[type];
      
      // 采纳率 > 60% 且 总反馈次数 >= 3
      if (typeStats.totalCount >= 3) {
        const applyRate = typeStats.applyCount / typeStats.totalCount;
        if (applyRate > 0.6) {
          whitelist.push(type);
        }
      }
    }
    
    return whitelist;
  }

  /**
   * 生成个性化 Prompt 约束
   */
  async getPromptConstraints(): Promise<UserPreferenceConstraints> {
    const [blacklist, whitelist] = await Promise.all([
      this.getBlacklist(),
      this.getWhitelist()
    ]);
    
    return {
      blacklist,
      whitelist,
      generatedAt: Date.now()
    };
  }

  /**
   * 生成个性化 Prompt 文本（用于注入到 LLM）
   */
  async getPromptText(): Promise<string> {
    const constraints = await this.getPromptConstraints();
    
    const parts: string[] = [];
    
    // 黑名单
    if (constraints.blacklist.length > 0) {
      const types = constraints.blacklist.map(t => t.replace(/_/g, ' ')).join(', ');
      parts.push(
        `[用户偏好约束]: 请避免或大幅减少关于以下类型的建议（用户已多次明确忽略）：${types}。`
      );
    }
    
    // 白名单
    if (constraints.whitelist.length > 0) {
      const types = constraints.whitelist.map(t => t.replace(/_/g, ' ')).join(', ');
      parts.push(
        `[用户关注点]: 请优先关注以下类型的问题（用户经常采纳建议）：${types}。`
      );
    }
    
    if (parts.length === 0) {
      return '';
    }
    
    return '\n\n' + parts.join('\n');
  }

  /**
   * 清空所有记录
   */
  async clear(): Promise<void> {
    await this.context.globalState.update(this.storageKey, []);
    console.log('[PreferenceMemory] All records cleared');
  }

  /**
   * 获取记录数量
   */
  async getRecordCount(): Promise<number> {
    const records = this.cleanupRecords(this.getFeedbackRecords());
    return records.length;
  }

  /**
   * 导出数据（用于备份或分析）
   */
  async exportData(): Promise<string> {
    const records = this.getFeedbackRecords();
    return JSON.stringify(records, null, 2);
  }

  /**
   * 导入数据
   */
  async importData(jsonData: string): Promise<void> {
    try {
      const records = JSON.parse(jsonData) as IssueFeedback[];
      
      // 验证数据格式
      if (!Array.isArray(records)) {
        throw new Error('Invalid data format: expected array');
      }
      
      // 清理并保存
      const validRecords = this.cleanupRecords(records);
      const limitedRecords = validRecords.slice(-this.config.maxRecords);
      
      await this.context.globalState.update(this.storageKey, limitedRecords);
      
      console.log(`[PreferenceMemory] Imported ${limitedRecords.length} records`);
    } catch (error) {
      console.error('[PreferenceMemory] Failed to import data:', error);
      throw error;
    }
  }
}

/**
 * 单例管理器
 */
let memoryInstance: PreferenceMemory | null = null;

export function getPreferenceMemory(context: vscode.ExtensionContext): PreferenceMemory {
  if (!memoryInstance) {
    memoryInstance = new PreferenceMemory(context);
  }
  return memoryInstance;
}

export function resetPreferenceMemory(): void {
  memoryInstance = null;
}