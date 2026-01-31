"use strict";
/**
 * 快速安全扫描引擎
 *
 * 用于在文件保存时进行 <50ms 的快速安全检查
 * 仅包含本地规则，不调用 LLM
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickSecurityScanner = void 0;
exports.getQuickSecurityScanner = getQuickSecurityScanner;
exports.resetQuickSecurityScanner = resetQuickSecurityScanner;
var securityTypes_1 = require("./securityTypes");
/**
 * 安全规则库
 */
var SECURITY_RULES = [
    // ========== CRITICAL: 敏感信息泄露 ==========
    {
        id: 'AWS_ACCESS_KEY',
        type: securityTypes_1.IssueType.SECURITY_LEAK,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'AWS Access Key',
        pattern: /AKIA[0-9A-Z]{16}/g,
        description: '检测到硬编码的 AWS Access Key',
        suggestion: '使用环境变量或密钥管理服务存储凭证'
    },
    {
        id: 'AWS_SECRET_KEY',
        type: securityTypes_1.IssueType.SECURITY_LEAK,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'AWS Secret Key',
        pattern: /aws_secret_access_key\s*[:=]\s*["']?([A-Za-z0-9+/=]{40})["']?/gi,
        description: '检测到硬编码的 AWS Secret Key',
        suggestion: '使用环境变量或密钥管理服务存储凭证'
    },
    {
        id: 'GITHUB_TOKEN',
        type: securityTypes_1.IssueType.SECURITY_LEAK,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'GitHub Token',
        pattern: /ghp_[a-zA-Z0-9]{36}/g,
        description: '检测到硬编码的 GitHub Token',
        suggestion: '使用 GitHub Secrets 环境变量存储凭证'
    },
    {
        id: 'PRIVATE_KEY',
        type: securityTypes_1.IssueType.SECURITY_LEAK,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'Private Key',
        pattern: /-----BEGIN\s+(RSA\s+)?PRIVATE\s+KEY-----/g,
        description: '检测到私钥内容',
        suggestion: '永远不要将私钥提交到代码仓库'
    },
    {
        id: 'API_KEY',
        type: securityTypes_1.IssueType.SECURITY_LEAK,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'API Key',
        pattern: /(api[_-]?key|apikey)\s*[:=]\s*["']?[a-zA-Z0-9_-]{20,}["']?/gi,
        description: '检测到可能的 API Key',
        suggestion: '使用环境变量或密钥管理服务存储凭证'
    },
    // ========== CRITICAL: 危险函数 ==========
    {
        id: 'EVAL_CALL',
        type: securityTypes_1.IssueType.DANGEROUS_FUNCTION,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: 'eval() 调用',
        pattern: /\beval\s*\(/g,
        description: '检测到 eval() 函数调用',
        suggestion: '避免使用 eval()，改用更安全的替代方案'
    },
    {
        id: 'DANGEROUS_SHELL_EXEC',
        type: securityTypes_1.IssueType.DANGEROUS_FUNCTION,
        severity: securityTypes_1.SecuritySeverity.CRITICAL,
        name: '危险 Shell 执行',
        pattern: /(exec|spawn)\s*\(/g,
        description: '检测到危险的 Shell 执行函数',
        suggestion: '确保对输入进行严格的验证和转义'
    },
    // ========== ERROR: 注入攻击风险 ==========
    {
        id: 'SQL_INJECTION_RISK',
        type: securityTypes_1.IssueType.SECURITY_INJECTION,
        severity: securityTypes_1.SecuritySeverity.ERROR,
        name: 'SQL 注入风险',
        pattern: /SELECT\s+.*\s+FROM\s+.*WHERE\s+.*[+].*/gi,
        description: '检测到可能的 SQL 注入风险（字符串拼接）',
        suggestion: '使用参数化查询或 ORM 框架'
    },
    {
        id: 'COMMAND_INJECTION_RISK',
        type: securityTypes_1.IssueType.SECURITY_INJECTION,
        severity: securityTypes_1.SecuritySeverity.ERROR,
        name: '命令注入风险',
        pattern: /(child_process|exec|spawn)\s*\(\s*`[^`]*\$\{[^}]+\}[^`]*`\)/g,
        description: '检测到可能的命令注入风险（模板字符串）',
        suggestion: '对用户输入进行严格的验证和转义'
    },
    // ========== ERROR: 路径安全问题 ==========
    {
        id: 'PATH_TRAVERSAL_RISK',
        type: securityTypes_1.IssueType.SECURITY_PATH,
        severity: securityTypes_1.SecuritySeverity.ERROR,
        name: '路径穿越风险',
        pattern: /\.\.\/|\.\.\\/g,
        description: '检测到可能的路径穿越攻击',
        suggestion: '使用 path.resolve() 或 path.join() 并验证路径'
    },
    {
        id: 'ABSOLUTE_PATH_USER_INPUT',
        type: securityTypes_1.IssueType.SECURITY_PATH,
        severity: securityTypes_1.SecuritySeverity.ERROR,
        name: '绝对路径用户输入',
        pattern: /(fs\.readFile|fs\.writeFile)\s*\(\s*["']\/[^"']*["']/g,
        description: '检测到硬编码的绝对路径',
        suggestion: '使用相对路径或配置文件'
    },
    // ========== WARNING: 性能问题 ==========
    {
        id: 'SYNC_FS_OPERATION',
        type: securityTypes_1.IssueType.PERFORMANCE_IO,
        severity: securityTypes_1.SecuritySeverity.WARNING,
        name: '同步文件操作',
        pattern: /fs\.(readFileSync|writeFileSync|existsSync)\s*\(/g,
        description: '检测到同步文件操作',
        suggestion: '使用异步版本 (readFile, writeFile) 避免阻塞事件循环'
    },
    {
        id: 'HEAVY_SYNC_OPERATION',
        type: securityTypes_1.IssueType.PERFORMANCE_LOOP,
        severity: securityTypes_1.SecuritySeverity.WARNING,
        name: '同步 JSON 解析',
        pattern: /JSON\.(parse|stringify)\s*\(\s*(?:fs\.readFileSync|require\()/g,
        description: '检测到同步读取并解析大文件',
        suggestion: '使用流式解析或异步操作'
    },
    // ========== INFO: 代码风格 ==========
    {
        id: 'TODO_COMMENT',
        type: securityTypes_1.IssueType.STYLE_COMMENT,
        severity: securityTypes_1.SecuritySeverity.INFO,
        name: 'TODO 注释',
        pattern: /TODO|FIXME|HACK|XXX/gi,
        description: '检测到 TODO/FIXME 注释',
        suggestion: '考虑创建 issue 跟踪这些待办事项'
    },
    {
        id: 'CONSOLE_LOG',
        type: securityTypes_1.IssueType.STYLE_COMMENT,
        severity: securityTypes_1.SecuritySeverity.INFO,
        name: 'console.log',
        pattern: /console\.(log|debug|info|warn|error)\s*\(/g,
        description: '检测到 console.log',
        suggestion: '生产环境中移除或使用专业的日志库'
    }
];
/**
 * 快速安全扫描器
 */
var QuickSecurityScanner = /** @class */ (function () {
    function QuickSecurityScanner(customRules) {
        this.performanceHistory = [];
        this.rules = customRules || SECURITY_RULES;
    }
    /**
     * 快速扫描代码内容
     *
     * @param code 代码内容
     * @param filePath 文件路径（可选）
     * @returns 扫描结果
     */
    QuickSecurityScanner.prototype.quickScan = function (code, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, issues, lines, _i, _a, rule, matches, _b, matches_1, match, matchIndex, lineIndex, column, charCount, i, duration;
            return __generator(this, function (_c) {
                startTime = Date.now();
                issues = [];
                lines = code.split('\n');
                // 遍历所有规则
                for (_i = 0, _a = this.rules; _i < _a.length; _i++) {
                    rule = _a[_i];
                    matches = code.matchAll(rule.pattern);
                    for (_b = 0, matches_1 = matches; _b < matches_1.length; _b++) {
                        match = matches_1[_b];
                        matchIndex = match.index || 0;
                        lineIndex = 0;
                        column = matchIndex;
                        charCount = 0;
                        for (i = 0; i < lines.length; i++) {
                            if (charCount + lines[i].length > matchIndex) {
                                lineIndex = i;
                                column = matchIndex - charCount;
                                break;
                            }
                            charCount += lines[i].length + 1; // +1 for newline
                        }
                        issues.push({
                            type: rule.type,
                            severity: rule.severity,
                            message: rule.description,
                            filePath: filePath,
                            line: lineIndex,
                            column: column,
                            suggestion: rule.suggestion,
                            ruleId: rule.id
                        });
                    }
                }
                duration = Date.now() - startTime;
                // 记录性能指标
                this.recordMetrics({
                    fileSize: code.length,
                    duration: duration,
                    rulesExecuted: this.rules.length,
                    issuesFound: issues.length,
                    timestamp: Date.now(),
                    strategy: 'full'
                });
                // 性能警告
                if (duration > 50) {
                    console.warn("[QuickSecurityScanner] Scan took ".concat(duration, "ms (should be < 50ms)"));
                }
                return [2 /*return*/, {
                        valid: issues.filter(function (i) { return i.severity === securityTypes_1.SecuritySeverity.CRITICAL; }).length === 0,
                        issues: issues,
                        hasCriticalError: issues.some(function (i) { return i.severity === securityTypes_1.SecuritySeverity.CRITICAL; }),
                        duration: duration
                    }];
            });
        });
    };
    /**
     * 记录性能指标
     */
    QuickSecurityScanner.prototype.recordMetrics = function (metrics) {
        this.performanceHistory.push(metrics);
        // 只保留最近 100 条记录
        if (this.performanceHistory.length > 100) {
            this.performanceHistory.shift();
        }
    };
    /**
     * 获取平均扫描耗时
     */
    QuickSecurityScanner.prototype.getAverageDuration = function () {
        if (this.performanceHistory.length === 0)
            return 0;
        var total = this.performanceHistory.reduce(function (sum, m) { return sum + m.duration; }, 0);
        return total / this.performanceHistory.length;
    };
    /**
     * 获取性能统计
     */
    QuickSecurityScanner.prototype.getPerformanceStats = function () {
        if (this.performanceHistory.length === 0) {
            return {
                averageDuration: 0,
                maxDuration: 0,
                totalScans: 0,
                averageIssuesFound: 0
            };
        }
        var durations = this.performanceHistory.map(function (m) { return m.duration; });
        var totalIssues = this.performanceHistory.reduce(function (sum, m) { return sum + m.issuesFound; }, 0);
        return {
            averageDuration: durations.reduce(function (a, b) { return a + b; }, 0) / durations.length,
            maxDuration: Math.max.apply(Math, durations),
            totalScans: this.performanceHistory.length,
            averageIssuesFound: totalIssues / this.performanceHistory.length
        };
    };
    /**
     * 添加自定义规则
     */
    QuickSecurityScanner.prototype.addRule = function (rule) {
        this.rules.push(rule);
    };
    /**
     * 移除规则
     */
    QuickSecurityScanner.prototype.removeRule = function (ruleId) {
        this.rules = this.rules.filter(function (r) { return r.id !== ruleId; });
    };
    /**
     * 获取所有规则
     */
    QuickSecurityScanner.prototype.getRules = function () {
        return __spreadArray([], this.rules, true);
    };
    /**
     * 清空性能历史
     */
    QuickSecurityScanner.prototype.clearPerformanceHistory = function () {
        this.performanceHistory = [];
    };
    return QuickSecurityScanner;
}());
exports.QuickSecurityScanner = QuickSecurityScanner;
/**
 * 单例实例
 */
var scannerInstance = null;
function getQuickSecurityScanner() {
    if (!scannerInstance) {
        scannerInstance = new QuickSecurityScanner();
    }
    return scannerInstance;
}
function resetQuickSecurityScanner() {
    scannerInstance = null;
}
