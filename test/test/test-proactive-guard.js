"use strict";
/**
 * Proactive Guard 功能测试
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
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var quickSecurityScanner_1 = require("../src/core/quickSecurityScanner");
var securityTypes_1 = require("../src/core/securityTypes");
suite('QuickSecurityScanner Test Suite', function () {
    var scanner;
    setup(function () {
        scanner = new quickSecurityScanner_1.QuickSecurityScanner();
    });
    test('Should detect AWS Access Key', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result, awsIssues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nconst apiKey = 'AKIAIOSFODNN7EXAMPLE';\nconsole.log(apiKey);\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.valid, false, 'Should detect AWS Access Key');
                    assert.strictEqual(result.hasCriticalError, true, 'Should be Critical');
                    awsIssues = result.issues.filter(function (i) { return i.type === securityTypes_1.IssueType.SECURITY_LEAK; });
                    assert.strictEqual(awsIssues.length, 1, 'Should find 1 AWS key issue');
                    assert.strictEqual(awsIssues[0].severity, securityTypes_1.SecuritySeverity.CRITICAL);
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should detect eval() usage', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result, evalIssues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nconst code = 'console.log(\"hello\")';\neval(code);\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.valid, false, 'Should detect eval()');
                    assert.strictEqual(result.hasCriticalError, true, 'Should be Critical');
                    evalIssues = result.issues.filter(function (i) { return i.type === securityTypes_1.IssueType.DANGEROUS_FUNCTION; });
                    assert.strictEqual(evalIssues.length, 1, 'Should find 1 eval issue');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should detect console.log', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result, consoleIssues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nfunction hello() {\n  console.log('Hello, World!');\n}\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.valid, true, 'console.log is not critical');
                    assert.strictEqual(result.hasCriticalError, false, 'No critical errors');
                    consoleIssues = result.issues.filter(function (i) { return i.type === securityTypes_1.IssueType.STYLE_COMMENT; });
                    assert.strictEqual(consoleIssues.length, 1, 'Should find 1 console.log issue');
                    assert.strictEqual(consoleIssues[0].severity, securityTypes_1.SecuritySeverity.INFO);
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should detect path traversal', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result, pathIssues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nconst filePath = '../../../etc/passwd';\nfs.readFile(filePath, 'utf8');\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.valid, false, 'Should detect path traversal');
                    pathIssues = result.issues.filter(function (i) { return i.type === securityTypes_1.IssueType.SECURITY_PATH; });
                    assert.strictEqual(pathIssues.length > 0, 'Should find path traversal issues');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should complete scan within 50ms', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, startTime, result, duration;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\n// Large code block with various patterns\nconst apiKey = 'AKIAIOSFODNN7EXAMPLE';\neval('some code');\nconsole.log('debug');\nconst path = '../../../etc/passwd';\n\nfunction complexFunction() {\n  ".concat(Array(100).fill('  console.log("line");').join('\n'), "\n}\n");
                    startTime = Date.now();
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    duration = Date.now() - startTime;
                    assert.strictEqual(duration < 50, true, "Scan took ".concat(duration, "ms (should be < 50ms)"));
                    assert.strictEqual(result.issues.length > 0, 'Should find issues');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should handle empty code', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = '';
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.valid, true, 'Empty code should be valid');
                    assert.strictEqual(result.issues.length, 0, 'No issues in empty code');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should track performance stats', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, stats;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nconst apiKey = 'AKIAIOSFODNN7EXAMPLE';\n";
                    // Run multiple scans
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    // Run multiple scans
                    _a.sent();
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 3:
                    _a.sent();
                    stats = scanner.getPerformanceStats();
                    assert.strictEqual(stats.totalScans, 3, 'Should track 3 scans');
                    assert.strictEqual(stats.averageIssuesFound > 0, true, 'Should have average issues');
                    assert.strictEqual(stats.maxDuration > 0, true, 'Should have max duration');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should support custom rules', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customRule, code, result, customIssues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customRule = {
                        id: 'CUSTOM_PATTERN',
                        type: securityTypes_1.IssueType.STYLE_NAMING,
                        severity: securityTypes_1.SecuritySeverity.WARNING,
                        name: 'Custom Pattern',
                        pattern: /TODO:|FIXME:/g,
                        description: 'Custom TODO pattern',
                        suggestion: 'Use issue tracker instead'
                    };
                    scanner.addRule(customRule);
                    code = "\n// TODO: fix this bug\n// FIXME: improve performance\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    customIssues = result.issues.filter(function (i) { return i.ruleId === 'CUSTOM_PATTERN'; });
                    assert.strictEqual(customIssues.length, 2, 'Should find 2 custom pattern matches');
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should remove custom rules', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customRule, code, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customRule = {
                        id: 'REMOVABLE_RULE',
                        type: securityTypes_1.IssueType.STYLE_NAMING,
                        severity: securityTypes_1.SecuritySeverity.WARNING,
                        name: 'Removable Rule',
                        pattern: /CUSTOM_PATTERN/g,
                        description: 'This should be removable',
                        suggestion: 'Remove this rule'
                    };
                    scanner.addRule(customRule);
                    code = "\nconst value = CUSTOM_PATTERN;\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    assert.strictEqual(result.issues.some(function (i) { return i.ruleId === 'REMOVABLE_RULE'; }), true);
                    scanner.removeRule('REMOVABLE_RULE');
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 2:
                    result = _a.sent();
                    assert.strictEqual(result.issues.some(function (i) { return i.ruleId === 'REMOVABLE_RULE'; }), false);
                    return [2 /*return*/];
            }
        });
    }); });
    test('Should calculate line and column correctly', function () { return __awaiter(void 0, void 0, void 0, function () {
        var code, result, awsIssue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    code = "\nline 1\nline 2\nline 3\nconst apiKey = 'AKIAIOSFODNN7EXAMPLE';\nline 5\n";
                    return [4 /*yield*/, scanner.quickScan(code, 'test.ts')];
                case 1:
                    result = _a.sent();
                    awsIssue = result.issues.find(function (i) { return i.ruleId === 'AWS_ACCESS_KEY'; });
                    assert.strictEqual(awsIssue === null || awsIssue === void 0 ? void 0 : awsIssue.line, 3, 'Should be on line 3 (0-indexed)');
                    assert.strictEqual(typeof (awsIssue === null || awsIssue === void 0 ? void 0 : awsIssue.column), 'number', 'Should have column number');
                    return [2 /*return*/];
            }
        });
    }); });
});
