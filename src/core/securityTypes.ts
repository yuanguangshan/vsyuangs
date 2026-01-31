/**
 * v1.3 Proactive Defense & v1.4 Context Memory
 * 核心类型定义
 */

/**
 * 安全风险等级（严格映射到 VS Code DiagnosticSeverity）
 * 
 * CRITICAL: 立即阻断（必须修复才能继续）
 *   - 硬编码密钥/凭证
 *   - SQL注入/命令注入
 *   - 路径穿越攻击
 *   - eval()/危险函数调用
 * 
 * ERROR: 高危警告（强烈建议修复）
 *   - 敏感信息泄露风险
 *   - 不安全的随机数生成
 *   - 未经验证的用户输入
 * 
 * WARNING: 中等风险（建议修复）
 *   - 性能问题
 *   - 过时的 API 使用
 *   - 潜在的资源泄漏
 * 
 * INFO: 低优先级（可选）
 *   - 代码风格建议
 *   - 命名规范
 */
export enum SecuritySeverity {
  CRITICAL = 'CRITICAL',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  INFO = 'INFO'
}

/**
 * 映射到 VS Code DiagnosticSeverity
 */
export function toDiagnosticSeverity(severity: SecuritySeverity): import('vscode').DiagnosticSeverity {
  switch (severity) {
    case SecuritySeverity.CRITICAL:
      return 1; // Error
    case SecuritySeverity.ERROR:
      return 1; // Error
    case SecuritySeverity.WARNING:
      return 2; // Warning
    case SecuritySeverity.INFO:
      return 3; // Information
    default:
      return 3; // Information
  }
}

/**
 * Issue Type Taxonomy（稳定的分类体系）
 * 
 * 安全相关（必须处理）：
 * - security_leak: 敏感信息泄露（密钥、凭证等）
 * - security_injection: 注入攻击（SQL、命令注入等）
 * - security_path: 路径安全问题（穿越、绝对路径等）
 * - dangerous_function: 危险函数调用（eval、exec 等）
 * 
 * 性能相关（建议处理）：
 * - performance_loop: 循环性能问题
 * - performance_memory: 内存使用问题
 * - performance_io: I/O 性能问题
 * 
 * 代码质量（可选）：
 * - style_spacing: 代码风格（空格、缩进）
 * - style_naming: 命名规范
 * - style_comment: 注释建议
 * - general: 通用建议
 */
export enum IssueType {
  // 安全相关
  SECURITY_LEAK = 'security_leak',
  SECURITY_INJECTION = 'security_injection',
  SECURITY_PATH = 'security_path',
  DANGEROUS_FUNCTION = 'dangerous_function',
  
  // 性能相关
  PERFORMANCE_LOOP = 'performance_loop',
  PERFORMANCE_MEMORY = 'performance_memory',
  PERFORMANCE_IO = 'performance_io',
  
  // 代码质量
  STYLE_SPACING = 'style_spacing',
  STYLE_NAMING = 'style_naming',
  STYLE_COMMENT = 'style_comment',
  GENERAL = 'general'
}

/**
 * Issue Type 的显示名称（用于 UI）
 */
export const IssueTypeLabels: Record<IssueType, string> = {
  [IssueType.SECURITY_LEAK]: '安全: 敏感信息泄露',
  [IssueType.SECURITY_INJECTION]: '安全: 注入攻击',
  [IssueType.SECURITY_PATH]: '安全: 路径安全问题',
  [IssueType.DANGEROUS_FUNCTION]: '安全: 危险函数',
  [IssueType.PERFORMANCE_LOOP]: '性能: 循环问题',
  [IssueType.PERFORMANCE_MEMORY]: '性能: 内存使用',
  [IssueType.PERFORMANCE_IO]: '性能: I/O 问题',
  [IssueType.STYLE_SPACING]: '风格: 代码格式',
  [IssueType.STYLE_NAMING]: '风格: 命名规范',
  [IssueType.STYLE_COMMENT]: '风格: 注释建议',
  [IssueType.GENERAL]: '通用建议'
};

/**
 * 安全问题接口（用于快速扫描）
 */
export interface SecurityIssue {
  /** 问题类型 */
  type: IssueType;
  
  /** 严重程度 */
  severity: SecuritySeverity;
  
  /** 消息 */
  message: string;
  
  /** 文件路径 */
  filePath?: string;
  
  /** 行号（0-based） */
  line?: number;
  
  /** 列号（0-based） */
  column?: number;
  
  /** 建议修复 */
  suggestion?: string;
  
  /** 规则标识符（用于规则跟踪） */
  ruleId?: string;
}

/**
 * 快速扫描结果
 */
export interface QuickScanResult {
  /** 是否通过扫描 */
  valid: boolean;
  
  /** 发现的问题 */
  issues: SecurityIssue[];
  
  /** 是否包含 Critical 级别问题 */
  hasCriticalError: boolean;
  
  /** 扫描耗时（毫秒） */
  duration: number;
}

/**
 * 用户反馈记录
 */
export interface IssueFeedback {
  /** 问题类型 */
  issueType: IssueType;
  
  /** 用户动作 */
  action: 'applied' | 'ignored' | 'dismissed';
  
  /** 时间戳 */
  timestamp: number;
  
  /** 文件路径（可选，用于上下文） */
  filePath?: string;
}

/**
 * 用户偏好统计数据
 */
export interface IssueFeedbackStats {
  /** 每种类型的统计数据 */
  byType: Record<IssueType, {
    /** 忽略次数 */
    ignoreCount: number;
    /** 采纳次数 */
    applyCount: number;
    /** 总反馈次数 */
    totalCount: number;
    /** 忽略率（0-1） */
    ignoreRate: number;
    /** 上次反馈时间 */
    lastFeedbackTime: number;
  }>;
  
  /** 记录总数 */
  totalRecords: number;
  
  /** 数据起始时间 */
  startTime: number;
}

/**
 * 用户偏好约束（用于 Prompt 注入）
 */
export interface UserPreferenceConstraints {
  /** 黑名单（用户反感的类型） */
  blacklist: IssueType[];
  
  /** 白名单（用户关注的类型） */
  whitelist: IssueType[];
  
  /** 生成的时间戳 */
  generatedAt: number;
}

/**
 * 扫描性能指标
 */
export interface ScanMetrics {
  /** 文件大小（字节） */
  fileSize: number;
  
  /** 扫描耗时（毫秒） */
  duration: number;
  
  /** 扫描的规则数量 */
  rulesExecuted: number;
  
  /** 发现的问题数量 */
  issuesFound: number;
  
  /** 扫描时间戳 */
  timestamp: number;
  
  /** 扫描策略（git/memory/full） */
  strategy: 'git' | 'memory' | 'full';
}

/**
 * Diff Source 抽象（支持多种 diff 获取方式）
 */
export interface DiffSource {
  /** 获取 diff 文本 */
  getDiff(): Promise<string | null>;
  
  /** 获取源策略标识符 */
  getStrategy(): 'git' | 'memory' | 'full';
}

/**
 * 扫描配置
 */
export interface ScanConfig {
  /** 是否启用静默扫描 */
  enabled: boolean;
  
  /** 扫描延迟（毫秒，防抖） */
  delay: number;
  
  /** 语言白名单（空数组表示全部允许） */
  languageWhitelist: string[];
  
  /** 最小文件大小（字节，小于此值不扫描） */
  minFileSize: number;
  
  /** 最大文件大小（字节，超过此值跳过） */
  maxFileSize: number;
  
  /** 是否启用 Context Memory */
  enableContextMemory: boolean;
  
  /** 记录的最大反馈数量 */
  maxFeedbackRecords: number;
  
  /** 反馈记录的有效期（毫秒，过期后自动清理） */
  feedbackRecordTTL: number;
}

/**
 * 默认扫描配置
 */
export const DEFAULT_SCAN_CONFIG: ScanConfig = {
  enabled: true,
  delay: 500,
  languageWhitelist: ['typescript', 'javascript', 'python', 'java', 'go', 'rust', 'cpp', 'c'],
  minFileSize: 100,
  maxFileSize: 1024 * 1024, // 1MB
  enableContextMemory: true,
  maxFeedbackRecords: 1000,
  feedbackRecordTTL: 30 * 24 * 60 * 60 * 1000 // 30天
};