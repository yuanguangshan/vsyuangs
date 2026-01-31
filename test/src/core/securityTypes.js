"use strict";
/**
 * v1.3 Proactive Defense & v1.4 Context Memory
 * 核心类型定义
 */
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SCAN_CONFIG = exports.IssueTypeLabels = exports.IssueType = exports.SecuritySeverity = void 0;
exports.toDiagnosticSeverity = toDiagnosticSeverity;
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
var SecuritySeverity;
(function (SecuritySeverity) {
    SecuritySeverity["CRITICAL"] = "CRITICAL";
    SecuritySeverity["ERROR"] = "ERROR";
    SecuritySeverity["WARNING"] = "WARNING";
    SecuritySeverity["INFO"] = "INFO";
})(SecuritySeverity || (exports.SecuritySeverity = SecuritySeverity = {}));
/**
 * 映射到 VS Code DiagnosticSeverity
 */
function toDiagnosticSeverity(severity) {
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
var IssueType;
(function (IssueType) {
    // 安全相关
    IssueType["SECURITY_LEAK"] = "security_leak";
    IssueType["SECURITY_INJECTION"] = "security_injection";
    IssueType["SECURITY_PATH"] = "security_path";
    IssueType["DANGEROUS_FUNCTION"] = "dangerous_function";
    // 性能相关
    IssueType["PERFORMANCE_LOOP"] = "performance_loop";
    IssueType["PERFORMANCE_MEMORY"] = "performance_memory";
    IssueType["PERFORMANCE_IO"] = "performance_io";
    // 代码质量
    IssueType["STYLE_SPACING"] = "style_spacing";
    IssueType["STYLE_NAMING"] = "style_naming";
    IssueType["STYLE_COMMENT"] = "style_comment";
    IssueType["GENERAL"] = "general";
})(IssueType || (exports.IssueType = IssueType = {}));
/**
 * Issue Type 的显示名称（用于 UI）
 */
exports.IssueTypeLabels = (_a = {},
    _a[IssueType.SECURITY_LEAK] = '安全: 敏感信息泄露',
    _a[IssueType.SECURITY_INJECTION] = '安全: 注入攻击',
    _a[IssueType.SECURITY_PATH] = '安全: 路径安全问题',
    _a[IssueType.DANGEROUS_FUNCTION] = '安全: 危险函数',
    _a[IssueType.PERFORMANCE_LOOP] = '性能: 循环问题',
    _a[IssueType.PERFORMANCE_MEMORY] = '性能: 内存使用',
    _a[IssueType.PERFORMANCE_IO] = '性能: I/O 问题',
    _a[IssueType.STYLE_SPACING] = '风格: 代码格式',
    _a[IssueType.STYLE_NAMING] = '风格: 命名规范',
    _a[IssueType.STYLE_COMMENT] = '风格: 注释建议',
    _a[IssueType.GENERAL] = '通用建议',
    _a);
/**
 * 默认扫描配置
 */
exports.DEFAULT_SCAN_CONFIG = {
    enabled: true,
    delay: 500,
    languageWhitelist: ['typescript', 'javascript', 'python', 'java', 'go', 'rust', 'cpp', 'c'],
    minFileSize: 100,
    maxFileSize: 1024 * 1024, // 1MB
    enableContextMemory: true,
    maxFeedbackRecords: 1000,
    feedbackRecordTTL: 30 * 24 * 60 * 60 * 1000 // 30天
};
