/**
 * 快速安全扫描引擎
 * 
 * 用于在文件保存时进行 <50ms 的快速安全检查
 * 仅包含本地规则，不调用 LLM
 */

import * as vscode from 'vscode';
import {
  SecurityIssue,
  SecuritySeverity,
  IssueType,
  QuickScanResult,
  ScanMetrics
} from './securityTypes';

/**
 * 安全规则定义
 */
interface SecurityRule {
  id: string;
  type: IssueType;
  severity: SecuritySeverity;
  name: string;
  pattern: RegExp;
  description: string;
  suggestion?: string;
}

/**
 * 安全规则库
 */
const SECURITY_RULES: SecurityRule[] = [
  // ========== CRITICAL: 敏感信息泄露 ==========
  {
    id: 'AWS_ACCESS_KEY',
    type: IssueType.SECURITY_LEAK,
    severity: SecuritySeverity.CRITICAL,
    name: 'AWS Access Key',
    pattern: /AKIA[0-9A-Z]{16}/g,
    description: '检测到硬编码的 AWS Access Key',
    suggestion: '使用环境变量或密钥管理服务存储凭证'
  },
  {
    id: 'AWS_SECRET_KEY',
    type: IssueType.SECURITY_LEAK,
    severity: SecuritySeverity.CRITICAL,
    name: 'AWS Secret Key',
    pattern: /aws_secret_access_key\s*[:=]\s*["']?([A-Za-z0-9+/=]{40})["']?/gi,
    description: '检测到硬编码的 AWS Secret Key',
    suggestion: '使用环境变量或密钥管理服务存储凭证'
  },
  {
    id: 'GITHUB_TOKEN',
    type: IssueType.SECURITY_LEAK,
    severity: SecuritySeverity.CRITICAL,
    name: 'GitHub Token',
    pattern: /ghp_[a-zA-Z0-9]{36}/g,
    description: '检测到硬编码的 GitHub Token',
    suggestion: '使用 GitHub Secrets 环境变量存储凭证'
  },
  {
    id: 'PRIVATE_KEY',
    type: IssueType.SECURITY_LEAK,
    severity: SecuritySeverity.CRITICAL,
    name: 'Private Key',
    pattern: /-----BEGIN\s+(RSA\s+)?PRIVATE\s+KEY-----/g,
    description: '检测到私钥内容',
    suggestion: '永远不要将私钥提交到代码仓库'
  },
  {
    id: 'API_KEY',
    type: IssueType.SECURITY_LEAK,
    severity: SecuritySeverity.CRITICAL,
    name: 'API Key',
    pattern: /(api[_-]?key|apikey)\s*[:=]\s*["']?[a-zA-Z0-9_-]{20,}["']?/gi,
    description: '检测到可能的 API Key',
    suggestion: '使用环境变量或密钥管理服务存储凭证'
  },

  // ========== CRITICAL: 危险函数 ==========
  {
    id: 'EVAL_CALL',
    type: IssueType.DANGEROUS_FUNCTION,
    severity: SecuritySeverity.CRITICAL,
    name: 'eval() 调用',
    pattern: /\beval\s*\(/g,
    description: '检测到 eval() 函数调用',
    suggestion: '避免使用 eval()，改用更安全的替代方案'
  },
  {
    id: 'DANGEROUS_SHELL_EXEC',
    type: IssueType.DANGEROUS_FUNCTION,
    severity: SecuritySeverity.CRITICAL,
    name: '危险 Shell 执行',
    pattern: /(exec|spawn)\s*\(/g,
    description: '检测到危险的 Shell 执行函数',
    suggestion: '确保对输入进行严格的验证和转义'
  },

  // ========== ERROR: 注入攻击风险 ==========
  {
    id: 'SQL_INJECTION_RISK',
    type: IssueType.SECURITY_INJECTION,
    severity: SecuritySeverity.ERROR,
    name: 'SQL 注入风险',
    pattern: /SELECT\s+.*\s+FROM\s+.*WHERE\s+.*[+].*/gi,
    description: '检测到可能的 SQL 注入风险（字符串拼接）',
    suggestion: '使用参数化查询或 ORM 框架'
  },
  {
    id: 'COMMAND_INJECTION_RISK',
    type: IssueType.SECURITY_INJECTION,
    severity: SecuritySeverity.ERROR,
    name: '命令注入风险',
    pattern: /(child_process|exec|spawn)\s*\(\s*`[^`]*\$\{[^}]+\}[^`]*`\)/g,
    description: '检测到可能的命令注入风险（模板字符串）',
    suggestion: '对用户输入进行严格的验证和转义'
  },

  // ========== ERROR: 路径安全问题 ==========
  {
    id: 'PATH_TRAVERSAL_RISK',
    type: IssueType.SECURITY_PATH,
    severity: SecuritySeverity.ERROR,
    name: '路径穿越风险',
    pattern: /\.\.\/|\.\.\\/g,
    description: '检测到可能的路径穿越攻击',
    suggestion: '使用 path.resolve() 或 path.join() 并验证路径'
  },
  {
    id: 'ABSOLUTE_PATH_USER_INPUT',
    type: IssueType.SECURITY_PATH,
    severity: SecuritySeverity.ERROR,
    name: '绝对路径用户输入',
    pattern: /(fs\.readFile|fs\.writeFile)\s*\(\s*["']\/[^"']*["']/g,
    description: '检测到硬编码的绝对路径',
    suggestion: '使用相对路径或配置文件'
  },

  // ========== WARNING: 性能问题 ==========
  {
    id: 'SYNC_FS_OPERATION',
    type: IssueType.PERFORMANCE_IO,
    severity: SecuritySeverity.WARNING,
    name: '同步文件操作',
    pattern: /fs\.(readFileSync|writeFileSync|existsSync)\s*\(/g,
    description: '检测到同步文件操作',
    suggestion: '使用异步版本 (readFile, writeFile) 避免阻塞事件循环'
  },
  {
    id: 'HEAVY_SYNC_OPERATION',
    type: IssueType.PERFORMANCE_LOOP,
    severity: SecuritySeverity.WARNING,
    name: '同步 JSON 解析',
    pattern: /JSON\.(parse|stringify)\s*\(\s*(?:fs\.readFileSync|require\()/g,
    description: '检测到同步读取并解析大文件',
    suggestion: '使用流式解析或异步操作'
  },

  // ========== INFO: 代码风格 ==========
  {
    id: 'TODO_COMMENT',
    type: IssueType.STYLE_COMMENT,
    severity: SecuritySeverity.INFO,
    name: 'TODO 注释',
    pattern: /TODO|FIXME|HACK|XXX/gi,
    description: '检测到 TODO/FIXME 注释',
    suggestion: '考虑创建 issue 跟踪这些待办事项'
  },
  {
    id: 'CONSOLE_LOG',
    type: IssueType.STYLE_COMMENT,
    severity: SecuritySeverity.INFO,
    name: 'console.log',
    pattern: /console\.(log|debug|info|warn|error)\s*\(/g,
    description: '检测到 console.log',
    suggestion: '生产环境中移除或使用专业的日志库'
  }
];

/**
 * 快速安全扫描器
 */
export class QuickSecurityScanner {
  private rules: SecurityRule[];
  private performanceHistory: ScanMetrics[] = [];

  constructor(customRules?: SecurityRule[]) {
    this.rules = customRules || SECURITY_RULES;
  }

  /**
   * 快速扫描代码内容
   * 
   * @param code 代码内容
   * @param filePath 文件路径（可选）
   * @param document VS Code 文档对象（可选，用于精确计算行列号）
   * @returns 扫描结果
   * 
   * 注意：行列号计算兼容 CRLF 和 LF 换行符
   * 如果提供了 document 参数，使用 VS Code API 精确计算
   * 否则使用手动计算（可能对 CRLF 有轻微偏差）
   */
  async quickScan(code: string, filePath?: string, document?: vscode.TextDocument): Promise<QuickScanResult> {
    const startTime = Date.now();
    const issues: SecurityIssue[] = [];

    // 遍历所有规则
    for (const rule of this.rules) {
      const matches = code.matchAll(rule.pattern);
      const matchArray = Array.from(matches);

      for (const match of matchArray) {
        const matchIndex = match.index || 0;
        let lineIndex = 0;
        let column = 0;

        // 如果提供了文档对象，使用 VS Code API 精确计算（推荐）
        if (document) {
          const position = document.positionAt(matchIndex);
          lineIndex = position.line;
          column = position.character;
        } else {
          // 手动计算行列号（兼容 CRLF 和 LF）
          const lines = code.split('\n');
          let charCount = 0;
          
          for (let i = 0; i < lines.length; i++) {
            // 检测当前行的换行符类型
            const lineWithBreak = lines[i];
            const hasCRLF = i < lines.length - 1 && code[charCount + lineWithBreak.length] === '\r';
            const breakLength = hasCRLF ? 2 : 1;
            
            if (charCount + lineWithBreak.length >= matchIndex) {
              lineIndex = i;
              column = matchIndex - charCount;
              break;
            }
            charCount += lineWithBreak.length + breakLength;
          }
        }

        issues.push({
          type: rule.type,
          severity: rule.severity,
          message: rule.description,
          filePath,
          line: lineIndex,
          column,
          suggestion: rule.suggestion,
          ruleId: rule.id
        });
      }
    }

    const duration = Date.now() - startTime;

    // 记录性能指标
    this.recordMetrics({
      fileSize: code.length,
      duration,
      rulesExecuted: this.rules.length,
      issuesFound: issues.length,
      timestamp: Date.now(),
      strategy: 'full'
    });

    // 性能警告
    if (duration > 50) {
      console.warn(`[QuickSecurityScanner] Scan took ${duration}ms (should be < 50ms)`);
    }

    return {
      valid: issues.filter(i => i.severity === SecuritySeverity.CRITICAL).length === 0,
      issues,
      hasCriticalError: issues.some(i => i.severity === SecuritySeverity.CRITICAL),
      duration
    };
  }

  /**
   * 记录性能指标
   */
  private recordMetrics(metrics: ScanMetrics): void {
    this.performanceHistory.push(metrics);

    // 只保留最近 100 条记录
    if (this.performanceHistory.length > 100) {
      this.performanceHistory.shift();
    }
  }

  /**
   * 获取平均扫描耗时
   */
  getAverageDuration(): number {
    if (this.performanceHistory.length === 0) return 0;

    const total = this.performanceHistory.reduce((sum, m) => sum + m.duration, 0);
    return total / this.performanceHistory.length;
  }

  /**
   * 获取性能统计
   */
  getPerformanceStats(): {
    averageDuration: number;
    maxDuration: number;
    totalScans: number;
    averageIssuesFound: number;
  } {
    if (this.performanceHistory.length === 0) {
      return {
        averageDuration: 0,
        maxDuration: 0,
        totalScans: 0,
        averageIssuesFound: 0
      };
    }

    const durations = this.performanceHistory.map(m => m.duration);
    const totalIssues = this.performanceHistory.reduce((sum, m) => sum + m.issuesFound, 0);

    return {
      averageDuration: durations.reduce((a, b) => a + b, 0) / durations.length,
      maxDuration: Math.max(...durations),
      totalScans: this.performanceHistory.length,
      averageIssuesFound: totalIssues / this.performanceHistory.length
    };
  }

  /**
   * 添加自定义规则
   */
  addRule(rule: SecurityRule): void {
    this.rules.push(rule);
  }

  /**
   * 移除规则
   */
  removeRule(ruleId: string): void {
    this.rules = this.rules.filter(r => r.id !== ruleId);
  }

  /**
   * 获取所有规则
   */
  getRules(): SecurityRule[] {
    return [...this.rules];
  }

  /**
   * 清空性能历史
   */
  clearPerformanceHistory(): void {
    this.performanceHistory = [];
  }
}

/**
 * 单例实例
 */
let scannerInstance: QuickSecurityScanner | null = null;

export function getQuickSecurityScanner(): QuickSecurityScanner {
  if (!scannerInstance) {
    scannerInstance = new QuickSecurityScanner();
  }
  return scannerInstance;
}

export function resetQuickSecurityScanner(): void {
  scannerInstance = null;
}