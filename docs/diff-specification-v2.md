# Diff Parser v2 - Unified Diff 规范

## 概述

Diff Parser v2 是一个类型安全、带校验的 unified diff 解析器，专为 AI 驱动的代码修改场景设计。

**核心原则：**
- ✅ 语义不可变：一个 block = 一个 hunk
- ✅ 类型安全：不使用 union 类型
- ✅ Parser 阶段完成校验
- ✅ 为 Safe Apply Engine 打基础
- ✅ **Unified Diff 被视为受限的 DSL（能力受限输出语言），而非文本补丁**

**安全边界（不可逾越的红线）：**
- 🚫 行号永远不能单独决定 apply 成功
- 🚫 任何不匹配立即失败（宁可失败，也不误改）
- 🚫 不允许自动偏移或模糊匹配（除非显式配置）
- 🚫 拒绝超过安全限制的 diff（DoS 防御）

---

## 支持的 Diff 格式

### 严格 Unified Diff 子集

我们支持标准的 unified diff 格式的一个严格子集，以确保 AI 输出的可预测性和安全性。

#### 必需元素

```diff
--- a/path/to/file.ts
+++ b/path/to/file.ts
@@ -oldStart,oldCount +newStart,newCount @@ optional context
- removed line
+ added line
  unchanged line (context)
```

#### 文件头

```diff
--- a/path/to/file.ts    # 旧文件路径
+++ b/path/to/file.ts    # 新文件路径
```

**规则：**
- `a/` 和 `b/` 前缀会被自动去除
- 路径必须有效且可访问
- 支持相对路径和绝对路径

#### Hunk 头

```diff
@@ -10,5 +10,7 @@ function name
```

**格式：**
- `@@` 固定标记
- `-oldStart,oldCount` 旧文件的起始行和行数
- `+newStart,newCount` 新文件的起始行和行数
- `@@` 结束标记
- 可选的 context 描述（如 `function name`）

#### Diff 行

| 行类型 | 前缀 | 说明 | 示例 |
|--------|--------|------|--------|
| Context | ` ` | 空格开头，表示未修改的行 | `  const x = 1;` |
| Add | `+` | 加号开头，表示新增的行 | `+ const y = 2;` |
| Remove | `-` | 减号开头，表示删除的行 | `- const z = 3;` |

**规则：**
- 保留左侧空格（缩进）
- **完全保留原始行（包括右侧空格）**
- **空行语义明确区分**（见"行内容语义"章节）
- 以 `\` 开头的行会被跳过（diff 元数据），但不影响行号统计

---

## 行内容语义（v2.1+）

### 三态模型（必须精确定义）

| 类型 | content 值 | 原始表示 | Apply 行为 |
|------|-----------|---------|-----------|
| **空行** | `""` | ` `（空格） | 完全匹配空行 |
| **空白行** | `/^\s+$/` | `  `（多个空格/制表符） | 完全匹配空白（保留缩进） |
| **普通行** | 非空字符串 | `  code` | 逐字匹配 |

### 空行在 diff 中的表示

```diff
- old line
- 
+ new line
+ 
  context line
```

**关键规则：**
- Context 空行：` ` + `""`（必须保留空格前缀）
- Remove 空行：`-` + `""`（必须保留减号前缀）
- Add 空行：`+` + `""`（必须保留加号前缀）

**Parser 约束：**
- ✅ 记录 content.length（包括空行）
- ✅ 不要 normalize 空白
- ❌ 禁止自动 trim（任何方向）

---

## Line Ending 和 Whitespace 规范（v2.1+）

### Line Ending 规范

**Parser 阶段：**
- ✅ 统一使用 `\n` 作为行分隔符（Unix 风格）
- ✅ 自动将 `\r\n`（Windows）转换为 `\n`
- ✅ 保留原始行的 line ending 信息在 `raw` 字段中

**Apply 阶段：**
- ✅ 使用编辑器的当前 line ending（保持一致性）
- ✅ 不强制转换 line ending（避免破坏文件格式）
- ✅ 添加新行时使用编辑器默认

**示例：**

```diff
# Windows CRLF diff（Parser 会转换）
-old line\r\n
+new line\r\n

# Unix LF diff
-old line\n
+new line\n
```

**处理规则：**
```typescript
// Parser 阶段
const lines = text.split('\n'); // 使用 \n 分割
// \r\n 会被自然处理：line.endsWith('\r') → 去除 trailing \r

// Apply 阶段
edit.insert(uri, pos, diffLine.content + '\n'); // 使用编辑器默认
```

---

### Whitespace 规范

**Parser 阶段：**
- ✅ 完全保留原始行（包括所有空格、制表符）
- ✅ 不执行任何 trim 或 normalize
- ✅ `content` 字段去除前缀后保持原样
- ✅ `raw` 字段保持 100% 原始

**Apply 阶段：**
- ✅ 逐字匹配（包括所有空白字符）
- ❌ 不忽略空格差异
- ❌ 不自动格式化
- ❌ 不智能缩进

**示例：**

```typescript
// 正确处理（逐字匹配）
diffLine.content = "  const x = 1;";
documentLine = "  const x = 1;";
// ✅ 匹配成功

diffLine.content = "  const x=1;";
documentLine = "  const x = 1;";
// ❌ 匹配失败（空格差异）
```

**关键约束：**
> **Whitespace 是内容的一部分，不是可忽略的格式。**

**违反示例（禁止）：**
```typescript
// ❌ 错误：自动 trim
const content = line.trim();

// ❌ 错误：normalize 空格
const normalized = content.replace(/\s+/g, ' ');

// ❌ 错误：智能缩进
const indented = applySmartIndent(content);

// ✅ 正确：完全保留
const content = line;
```

---

### Line Ending 和 Whitespace 的一致性保证

**Parser → Apply 流程：**

```
原始 diff（CRLF/LF 混合）
  ↓ Parser
统一转换为 \n，保留 raw
  ↓ Apply
使用编辑器当前 line ending
  ↓ 最终结果
保持文件原有 line ending 风格
```

**验证规则：**

1. **Parser 阶段：**
   ```typescript
   // 验证 raw 和 content 的关系
   raw.startsWith('+') || raw.startsWith('-') || raw.startsWith(' ')
   content === raw.substring(1)  // 只去除前缀
   ```

2. **Apply 阶段：**
   ```typescript
   // 验证逐字匹配
   documentLine === diffLine.content
   // 不做任何 normalize
   ```

**测试覆盖：**
- ✅ Windows CRLF diff
- ✅ Unix LF diff
- ✅ 混合 line ending diff
- ✅ 制表符 vs 空格
- ✅ 尾随空格
- ✅ 前导空格（缩进）

---

## Apply 语义优先级（关键）

**Semantic Priority (Apply Phase):**
1. **Exact context line match** (权威)
2. **Remove line exact match**
3. **Line number** (非权威提示，不可单独决定成功)

**硬约束：**
> 行号永远不能单独决定 apply 成功

这意味着：
- 即使行号匹配，如果 context/remove 不匹配，依然失败
- oldStart/newStart 只是 hint，不是 authority
- 未来引入 fuzzy matching 时，必须遵循此优先级

---

## 多 Hunk 应用语义

**Hunks are applied sequentially against mutated document state, not against original snapshot.**

**正确语义：**
- 第 1 个 hunk：基于原始文档
- 第 2 个 hunk：基于第 1 个 hunk 已应用后的状态
- 第 N 个 hunk：基于前 N-1 个 hunk 已应用后的状态

**实现建议：**
- 不要预计算所有 edits
- 使用 streaming / cursor-based apply
- 任何失败立即停止（fail fast）

---

## 不支持的格式

以下格式**明确不支持**，Parser 会拒绝：

### ❌ Binary Diff
```diff
Binary files a/image.png and b/image.png differ
```

### ❌ Rename/Copy Operations
```diff
rename from old.txt
rename to new.txt
```

### ❌ Index Metadata
```diff
index abc123..def456 100644
```

### ❌ 裸 Diff（无 hunk 头）
```diff
-old line
+new line
```

---

## AI Prompt 模板

### 强约束 Prompt（推荐）

当让 AI 生成 diff 时，使用以下模板确保输出符合规范：

```text
You must output a unified diff in the strict format below.

Format Rules:
1. Start with --- a/path/to/file
2. Follow with +++ b/path/to/file
3. Use @@ -old,count +new,count @@ for hunk headers
4. Include sufficient context lines (at least 3 lines before/after changes)
5. Use '-' for removed lines, '+' for added lines
6. Use ' ' (space) for context lines
7. Do not include explanations outside the diff
8. Do not omit any lines
9. Do not modify files not mentioned in the task

If you are unsure, output nothing.

Example:
--- a/src/utils.ts
+++ b/src/utils.ts
@@ -5,7 +5,9 @@
 function calculate(x: number, y: number): number {
-  return x + y;
+  const result = x + y;
+  return result;
 }
```

### 宽松 Prompt（仅用于测试）

```text
Generate a unified diff for the requested changes.
Use standard @@ hunk headers with context lines.
```

**警告：** 宽松 prompt 可能导致 AI 输出不符合规范，增加解析失败风险。

---

## 校验规则

### Parser 阶段校验

Parser 在解析时会进行以下校验：

| 校验项 | 说明 | 失败行为 |
|--------|------|----------|
| 文件头存在 | 必须有 `---` 和 `+++` | 返回 `INVALID_FORMAT` |
| Hunk 头有效 | 必须匹配 `@@ -a,b +c,d @@` | 返回 `INVALID_FORMAT` |
| 行数统计 | 实际统计必须与 hunk 头一致 | 返回 `LINE_COUNT_MISMATCH` |
| 至少一个文件 | diff 不能为空 | 返回 `INVALID_FORMAT` |
| 至少一个 hunk | 文件必须有修改 | 返回 `INVALID_FORMAT` |
| **安全限制** | 超过上下文行数/行长度限制 | 返回 `INVALID_FORMAT` |

### 安全限制（DoS 防御）

为了防止 AI 生成的恶意 diff 导致性能问题，Parser 会强制执行以下硬限制：

| 限制项 | 默认值 | 说明 |
|--------|--------|------|
| Max context lines per hunk | 200 | 单个 hunk 最多 context 行数 |
| Max line length | 4KB | 单行最大长度（包括空格） |
| Max hunks per file | 50 | 单个文件最多 hunk 数量 |
| Max files per diff | 20 | 单个 diff 最多文件数量 |

**超过限制的行为：**
- 解析立即失败
- 返回 `INVALID_FORMAT` 错误
- 错误消息包含限制详情

**注意：** 这些限制是安全工程，不是性能优化。即使未来优化性能，限制仍应保持。

### Apply 阶段校验

DiffApplier 在应用时会进行以下校验：

| 校验项 | 说明 | 失败行为 |
|--------|------|----------|
| 文件存在 | 文件必须在工作区中打开 | 返回 `FILE_NOT_FOUND` |
| Context 匹配 | Context 行必须逐字匹配 | 返回 `CONTEXT_MISMATCH` |
| Remove 匹配 | Remove 行必须逐字匹配 | 返回 `REMOVE_MISMATCH` |
| 行号范围 | 行号必须在文档范围内 | 返回 `CONTEXT_MISMATCH` |

---

## 类型系统

### 核心类型

```typescript
interface DiffLine {
  type: 'context' | 'add' | 'remove';
  content: string;     // 去除 +/- 后的内容
  raw: string;         // 原始 diff 行（保留）
  lineNumber: number;   // 在 diff 中的行号
}

interface DiffHunk {
  filePath: string;    // 已规范化，无 a/ 或 b/ 前缀
  /** 
   * 语言类型（推断）
   * 
   * **重要：** language 字段仅用于提示和显示，
   * **MUST NOT** 影响解析或 apply 语义。
   * 
   * 示例用途：
   * - IDE 高亮显示
   * - 语法检查集成
   * - 日志分类
   * 
   * 禁止用途：
   * - ❌ 基于 language 开启 fuzzy matching
   * - ❌ 进行 formatter-aware apply
   * - ❌ 修改 context 匹配规则
   */
  language?: string;
  header: string;      // @@ -oldStart,oldCount +newStart,newCount @@
  /**
   * 旧文件起始行号
   * 
   * **语义：** 非权威提示（non-authoritative hint）
   * 
   * **优先级：** 低于 context/remove 精确匹配
   * 
   * **用途：** 
   * - 快速定位起始位置
   * - 错误报告
   * - UI 显示
   */
  oldStart: number;
  oldCount: number;
  /**
   * 新文件起始行号
   * 
   * **语义：** 非权威提示（non-authoritative hint）
   * 
   * **优先级：** 低于 context/remove 精确匹配
   */
  newStart: number;
  newCount: number;
  lines: DiffLine[];
  stats: {
    added: number;
    removed: number;
    context: number;
  };
}

interface DiffFile {
  oldPath: string;
  newPath: string;
  normalizedPath: string;
  hunks: DiffHunk[];
  stats: {
    added: number;
    removed: number;
    context: number;
    hunkCount: number;
  };
}
```

### 结果类型

```typescript
type DiffResult = DiffParseResult | DiffParseError;

interface DiffParseResult {
  success: true;
  files: DiffFile[];
  stats: {
    fileCount: number;
    hunkCount: number;
    totalAdded: number;
    totalRemoved: number;
  };
}

interface DiffParseError {
  success: false;
  error: 'INVALID_FORMAT' | 'HUNK_MISMATCH' | 'INVALID_PATH' | 
          'MISSING_CONTEXT' | 'LINE_COUNT_MISMATCH' | 'LIMIT_EXCEEDED';
  message: string;
  line?: number;
  hunkIndex?: number;
}

/**
 * **类型边界说明：**
 * 
 * 虽然 `DiffResult` 使用了 union 类型：
 * ```typescript
 * type DiffResult = DiffParseResult | DiffParseError;
 * ```
 * 
 * 但通过 discriminator 字段 `success: true | false` 实现了类型安全。
 * 
 * **使用模式：**
 * ```typescript
 * const result = DiffParser.parse(diff);
 * 
 * if (result.success) {
 *   // TypeScript 自动推断为 DiffParseResult
 *   console.log(result.files);
 * } else {
 *   // TypeScript 自动推断为 DiffParseError
 *   console.log(result.error);
 * }
 * ```
 * 
 * **注意：** `success` 是状态标识，不是类型边界本身。
 * 真正的类型安全依赖于运行时值的 narrowing。
 */
export type DiffResult = DiffParseResult | DiffParseError;
```

---

## 使用示例

### 基础用法

```typescript
import { DiffParser, DiffApplier } from './core/diff';

// 1. 解析 diff
const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,3 +1,3 @@
 function hello() {
-  console.log("old");
+  console.log("new");
   return true;
 }
`;

const result = DiffParser.parse(diffText);

if (!result.success) {
  console.error('Parse failed:', result.message);
  return;
}

console.log('Parsed:', result.stats);
// { fileCount: 1, hunkCount: 1, totalAdded: 1, totalRemoved: 1 }

// 2. 应用 diff（带 dry run）
const applyResult = await DiffApplier.apply(result, { dryRun: true });

if (!applyResult.success) {
  console.error('Apply failed:', applyResult.message);
  return;
}

console.log('Would apply:', applyResult.stats);
// { filesChanged: 1, hunksApplied: 1, linesAdded: 1, linesRemoved: 1 }

// 3. 实际应用
const finalResult = await DiffApplier.apply(result);
```

### 错误处理

```typescript
const result = DiffParser.parse(aiGeneratedDiff);

if (!result.success) {
  switch (result.error) {
    case 'LINE_COUNT_MISMATCH':
      console.error('AI hallucinated line counts:', result.message);
      break;
    case 'INVALID_FORMAT':
      console.error('Invalid diff format:', result.message);
      break;
    default:
      console.error('Unknown error:', result.message);
  }
  
  // 请求 AI 重新生成
  return await retryGenerateDiff();
}
```

---

## 最佳实践

### ✅ DO

1. **使用强约束 prompt**
   - 明确要求 unified diff 格式
   - 提供示例
   - 禁止解释文本

2. **包含足够的 context**
   - 至少 3 行上下文
   - 避免只有 +/- 行的 diff
   - Context 行确保精确匹配

3. **校验后再应用**
   - 先 dry run
   - 检查错误信息
   - 让用户预览 diff

4. **处理错误**
   - 捕获所有可能的错误类型
   - 提供清晰的错误消息
   - 实现重试机制

### ❌ DON'T

1. **不要覆盖整个文件**
   ```typescript
   // ❌ 错误
   edit.replace(doc.uri, fullRange, newContent);
   
   // ✅ 正确
   await DiffApplier.apply(diff);
   ```

2. **不要使用宽松 prompt**
   ```text
   // ❌ 危险
   "Make the changes"
   
   // ✅ 安全
   "Generate a unified diff with @@ hunks and context"
   ```

3. **不要忽略校验错误**
   ```typescript
   // ❌ 危险
   if (!result.success) {
     // 静默失败
     return;
   }
   
   // ✅ 安全
   if (!result.success) {
     throw new Error(`Diff parse failed: ${result.message}`);
   }
   ```

4. **不要在 diff 外应用**
   - 只应用 diff 中明确指定的文件
   - 不要修改未提及的文件

---

## 性能考虑

### Parser 性能

- **时间复杂度：** O(n)，n = diff 行数
- **空间复杂度：** O(n)
- **优化：** 单次遍历，即时校验

### Apply 性能

- **时间复杂度：** O(m)，m = hunks 总数
- **空间复杂度：** O(k)，k = 单次修改的行数
- **优化：** 批量编辑，最小化 workspace edit 次数

---

## 安全性

### 安全原则

1. **宁可失败，也不误改**
   - 任何不匹配立即失败
   - 不允许模糊匹配
   - 不自动偏移行号

2. **完全可追溯**
   - 每个错误带行号和 hunk 索引
   - 保留原始 diff 行
   - 详细的应用日志

3. **用户可控**
   - 干运行模式
   - 失败时的详细错误信息
   - 可选的 fail-on-conflict

### 安全边界

| 场景 | 行为 |
|--------|------|
| 文件未打开 | 失败（`FILE_NOT_FOUND`） |
| Context 不匹配 | 失败（`CONTEXT_MISMATCH`） |
| Remove 不匹配 | 失败（`REMOVE_MISMATCH`） |
| 行号越界 | 失败（`CONTEXT_MISMATCH`） |
| 多个 hunk | 顺序应用，任何失败立即停止 |

---

## 未来扩展

### 计划中的功能（带约束）

1. **模糊匹配**（带不可逾越的红线）
   
   **允许：**
   - 可选的空格/缩进忽略（必须显式配置）
   - 可配置的严格级别（strict / moderate / lenient）
   
   **禁止：**
   - ❌ Never ignore removed lines（删除行必须精确匹配）
   - ❌ Never cross hunk boundaries（不能跨越 hunk 边界）
   - ❌ Never apply if multiple candidate matches exist（多个匹配时拒绝）
   
   **设计原则：**
   - 宁可失败，也不误改
   - 模糊匹配只能提高容错率，不能降低安全性

2. **上下文搜索**
   - 当行号不准确时搜索 context
   - 提高容错性

3. **Undo 支持**
   - 自动创建编辑前快照
   - 一键回滚

4. **冲突检测**
   - 检测潜在的合并冲突
   - 提供冲突解决建议

5. **Diff 预览 UI**
   - 高亮显示即将应用的修改
   - 交互式确认

---

## 参考资料

- [Unified Diff Format](https://www.gnu.org/software/diffutils/manual/html_node/Unified-Format.html)
- [Git Diff Documentation](https://git-scm.com/docs/git-diff)
- [VS Code WorkspaceEdit API](https://code.visualstudio.com/api/references/vscode-api#WorkspaceEdit)

---

## 版本历史

### v2.1 (2026-01-31)
- ✅ 修复 unified diff 行数语义（oldCount = context + removed）
- ✅ 移除 trimRight()（完全保留原始行）
- ✅ 修复文件切换时未清空 currentHunk
- ✅ 添加行内容语义（三态模型）
- ✅ 明确 Apply 语义优先级（context > line number）
- ✅ 明确多 hunk 顺序应用语义
- ✅ 添加安全限制（DoS 防御）
- ✅ 添加 fuzzy matching 红线约束

### v2.0 (2026-01-31)
- ✅ 完全重写类型系统（移除 union）
- ✅ 添加 Parser 阶段校验
- ✅ 实现 Safe Apply Engine
- ✅ 添加详细的错误信息
- ✅ 支持多文件 diff
- ✅ 添加干运行模式

### v1.0 (2026-01-30)
- ✅ 基础 unified diff 解析
- ✅ 简单的代码审查解析

---

## 贡献

欢迎提交 Issue 和 Pull Request！

**开发流程：**
1. Fork 仓库
2. 创建特性分支
3. 添加测试用例
4. 确保所有测试通过
5. 提交 PR

**测试要求：**
- 所有现有测试必须通过
- 新功能必须包含测试
- 测试覆盖率 > 80%

---

## 许可证

MIT License - 详见 LICENSE 文件