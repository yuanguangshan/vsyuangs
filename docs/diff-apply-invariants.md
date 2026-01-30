# Diff Apply Engine - 不变式清单

**版本：** v2.1+  
**目的：** 定义 Apply Engine 的硬性约束，确保安全性和正确性  
**适用范围：** 当前 Strict Mode 和未来 Fuzzy Matching

> **核心理念：** 这些不变式是**不可违反的硬约束**，无论实现如何演进，都必须成立。

---

## 📜 不变式规范地位声明

### 不变式级别说明

| 图标 | 级别 | 规范地位 | 违反后果 |
|------|------|---------|---------|
| 🔴 **红线** | 安全规范（MUST） | 法律级约束 | 违反即为 bug / 安全漏洞，必须拒绝合并 |
| ⚠️ **重要** | 语义规范（SHOULD） | 默认实现必须满足 | 违反会导致严重问题，需要强理由和 review |
| 💡 **建议** | 参考实现约束（REFERENCE） | 仅对文档和示例生效 | 违反会影响代码质量，但允许替代方案 |

**关键原则：**

1. **🔴 红线**属于**安全规范（MUST）**：
   - 任何违反都是安全漏洞
   - 没有例外，没有协商空间
   - PR review 时，违反红线必须直接拒绝

2. **⚠️ 重要**属于**语义规范（SHOULD）**：
   - 默认实现必须满足
   - 违反需要提供强理由和详细分析
   - 需要经过安全审查

3. **💡 建议**属于**参考实现约束（REFERENCE）**：
   - 仅对文档和示例中的参考实现生效
   - 允许等价的替代实现方案
   - 不强制所有实现必须遵循

> **重要：** 这一步非常关键，它决定了文档是"法律"还是"注释"。

---

## 📋 速查表（Invariant Map）

| ID | 名称 | 适用阶段 | 失败责任层级 | 优先级 |
|----|------|---------|-------------|--------|
| **G1** | Safety First（安全优先） | 全局 | 最高 | 🔴 红线 |
| **G2** | Determinism（确定性） | 全局 | 高 | ⚠️ 重要 |
| **G3** | Locality（局部性） | 全局 | 高 | ⚠️ 重要 |
| **A1** | Context Authority（上下文权威） | Match | 最高 | 🔴 红线 |
| **A2** | Remove Exactness（删除精确性） | Match | 最高 | 🔴 红线 |
| **A3** | Single Anchor（唯一锚点） | Match | 高 | ⚠️ 重要 |
| **A4** | Monotonic State（单调状态变更） | Apply | 中 | 💡 建议 |
| **A5** | No Side Effects（无副作用） | Apply | 高 | ⚠️ 重要 |
| **P1** | Line Count Conservation（行数守恒） | Parse | 中 | 💡 建议 |
| **P2** | Raw Preservation（原始行保留） | Parse | 中 | 💡 建议 |
| **L1** | Line Numbers Are Hints（行号是提示） | Match | 高 | ⚠️ 重要 |
| **F1** | Fuzzy Disabled = Strict | Match | 中 | 💡 建议 |
| **F2** | Remove Lines Never Fuzzy | Match | 最高 | 🔴 红线 |
| **F3** | Multiple Candidates = Fail | Match | 高 | ⚠️ 重要 |
| **F4** | No Cross-Hunk Matching | Match | 高 | ⚠️ 重要 |
| **S1** | Limits Are Hard Constraints | Parse | 最高 | 🔴 红线 |
| **S2** | Limits Are Not Performance Optimizations | Parse | 中 | 💡 建议 |

**图例：**
- 🔴 **红线**：绝对不能违反，任何尝试都是安全漏洞
- ⚠️ **重要**：违反会导致严重问题，必须修复
- 💡 **建议**：违反会影响代码质量，但可能容忍

---

## ⚠️ 重要声明

### 不变式完备性说明

> **警告：** 本不变式列表**并非完备安全证明**。

本不变式列表是：
- ✅ 当前已知的关键约束
- ✅ 基于实际应用场景总结的最佳实践
- ✅ 适用于当前 Strict Mode 和未来 Fuzzy Matching

本不变式列表**不是**：
- ❌ 逻辑上完备的安全证明
- ❌ 所有可能风险的完整列表
- ❌ 替代代码审查的自动化工具

**关键原则：**

> 任何未被明确允许的行为，仍需遵循 **G1（Safety First）** 原则进行保守处理。

**这意味着：**
- 新贡献者不应认为"只要满足这 17 条，就一定安全"
- 审查者不应认为"没有违反任何 ID，就可以合并"
- 在遇到未涵盖的场景时，必须保守处理，宁可失败也不冒险

这是安全工程中非常常见、但极其重要的一句话。
---

---

## 🎯 决策流程图

> **说明：** 该流程图描述的是**逻辑优先级**，而非强制的实现阶段划分。实现可以重排或交错执行，只要语义结果等价。

```
开始应用 diff
    ↓
┌─────────────────────────────┐
│ G1: Safety First          │ ← 最高优先级
├─────────────────────────────┤
│ 不确定 → FAIL              │
│ 宁可失败，也不误改          │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│ G2: Determinism           │ ← 确定性保证
├─────────────────────────────┤
│ 多个候选 → FAIL            │
│ 顺序依赖 → FAIL            │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│ A1: Context Authority      │ ← Match 阶段
├─────────────────────────────┤
│ Context 不匹配 → FAIL       │
│ 即使行号正确也 FAIL         │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│ A2: Remove Exactness      │ ← 🔴 红线
├─────────────────────────────┤
│ Remove 不匹配 → FAIL        │
│ 永远不能 fuzzy            │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│ A3: Single Anchor         │ ← 唯一性
├─────────────────────────────┤
│ 0 或多个候选 → FAIL        │
│ 必须恰好 1 个              │
└─────────────────────────────┘
    ↓
┌─────────────────────────────┐
│ M1: Sequential Mutation    │ ← Apply 阶段
├─────────────────────────────┤
│ 顺序应用 hunks            │
│ 禁止预计算所有 edits       │
└─────────────────────────────┘
    ↓
成功应用
```

**实现灵活性：**

- ✅ 允许：交错执行（如 fuzzy 决策依赖 remove exactness）
- ✅ 允许：limits 在 parse/match/apply 任一阶段触发
- ✅ 允许：context authority 回看 parse 产物
- ✅ 允许：重排逻辑顺序，只要语义结果等价

**关键原则：**

> 流程图展示的是**决策的优先级**和**逻辑的约束**，而非强制的代码结构。

---

## 📚 不变式详细说明

---

## 全局不变式

### G1. Safety First（安全优先）

**最高优先级不变式**

> 宁可失败，也不误改

**形式化表达：**
```
If any uncertainty exists → FAIL
```

**具体约束：**
- ❌ 不允许 best-effort
- ❌ 不允许 fallback 到"最接近匹配"
- ❌ 不允许 silent success
- ❌ 不允许忽略任何校验失败

**违反示例（禁止）：**
```typescript
// ❌ 错误：context 不匹配后尝试 fallback
if (!contextMatches) {
  if (lineNumberValid) {
    applyAt(lineNumber); // 违反 G1
  }
}

// ✅ 正确：立即失败
if (!contextMatches) {
  return FAILURE;
}
```

---

### G2. Determinism（确定性）

**不变式：**
> 同一个 diff + 同一个文档状态 ⇒ 结果唯一

**约束：**
- 不允许有多个候选匹配
- 不允许顺序依赖随机性
- 不允许基于时间/环境的行为差异

**形式化表达：**
```
∀ d, s: apply(d, s) == apply(d, s)
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：多个匹配时选择第一个（顺序依赖）
const candidates = findAllMatches();
if (candidates.length > 0) {
  applyAt(candidates[0]); // 违反 G2
}

// ✅ 正确：多个匹配时必须失败
const candidates = findAllMatches();
if (candidates.length !== 1) {
  return FAILURE; // 0 或多个都失败
}
```

---

### G3. Locality（局部性）

**不变式：**
> 一个 hunk 只能影响其匹配区域

**约束：**
- 不能跨 hunk 边界
- 不能跨文件
- 不能合并 hunks

**违反示例（禁止）：**
```typescript
// ❌ 错误：跳到其他函数
if (!contextMatchesAt(line)) {
  const nextMatch = findContextInOtherFunction();
  applyAt(nextMatch); // 违反 G3
}

// ✅ 正确：只在原始位置 apply
if (!contextMatchesAt(line)) {
  return FAILURE;
}
```

---

## Apply 阶段不变式

### A1. Context Authority Invariant（上下文权威性）

**最高优先级不变式**

> Context 是 apply 的最高权威

**优先级（严格顺序）：**
1. **Exact Context Match**（权威）
2. **Exact Remove Match**
3. **Line Number**（非权威提示，不可单独决定成功）

**形式化表达：**
```
if (!contextMatchesExactly) {
  FAIL; // 即使行号 100% 正确
}
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：context 不匹配但相信行号
if (!contextMatches(line)) {
  if (lineNumber === hunk.oldStart) {
    applyAt(lineNumber); // 违反 A1
  }
}

// ✅ 正确：context 不匹配立即失败
if (!contextMatches(line)) {
  return FAILURE;
}
```

**关键规则：**
> **行号永远不能单独决定 apply 成功**

---

### A2. Remove Exactness Invariant（删除精确性）

**不变式：**
> 所有 remove 行必须逐字匹配

**约束：**
- 字符级一致（包括空格）
- 行顺序一致
- 行数量一致

**形式化表达：**
```
∀ r ∈ removedLines: document[r.line] == r.content
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：fuzzy remove matching
if (documentLine === "  const x=1;") {
  if (removeLine === "const x = 1;") { // 忽略空格
    remove(); // 违反 A2（这是红线！）
  }
}

// ✅ 正确：逐字匹配
if (documentLine === removeLine) {
  remove();
} else {
  return FAILURE;
}
```

**红线警告：**
> Remove 永远不能 fuzzy，这是不可逾越的红线。

---

### A3. Single Anchor Invariant（唯一锚点）

**不变式：**
> 每个 hunk 在文档中最多只能找到一个合法锚点

**锚点定义：**
- 完整 context block
- 顺序一致
- 无歧义

**形式化表达：**
```
matches = findAllAnchors(hunk, document)
if (matches === 0) → FAIL
if (matches > 1) → FAIL
if (matches === 1) → OK
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：多个匹配时选择第一个
const anchors = findAllAnchors();
if (anchors.length > 0) {
  applyAt(anchors[0]); // 违反 A3
}

// ✅ 正确：多个匹配时必须失败
const anchors = findAllAnchors();
if (anchors.length !== 1) {
  return FAILURE;
}
```

---

### A4. Monotonic State Mutation（单调状态变更）

**不变式：**
> Hunks 必须顺序应用在已变更文档上

**禁止行为：**
- 基于原始 snapshot 计算所有 edits
- 批量 apply 后统一提交
- 预计算所有行号偏移

**形式化表达：**
```
doc₀ --hunk₁--> doc₁ --hunk₂--> doc₂ --hunk₃--> doc₃
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：基于原始文档计算所有 edits
const allEdits = calculateAllEditsFromOriginal(doc₀);
batchApply(allEdits); // 违反 A4

// ✅ 正确：顺序应用
let currentDoc = doc₀;
for (const hunk of hunks) {
  currentDoc = applyHunk(currentDoc, hunk);
}
```

**实现建议：**
- 不要预计算所有 edits
- 使用 streaming / cursor-based apply
- 每个 hunk 后重新计算行号

---

**⚠️ A4 不禁止：**

为了防止本不变式被误读为"反性能"，明确说明以下行为是**允许的**：

1. **只读分析的预扫描**
   ```typescript
   // ✅ 允许：预扫描所有 hunks 进行只读分析
   const analysis = analyzeHunks(hunks); // 只读，不修改文档
   if (!analysis.isSafe) {
     return FAILURE;
   }
   // 实际应用时仍然顺序执行
   ```

2. **可回滚的事务式 apply**
   ```typescript
   // ✅ 允许：使用事务模式，每个 hunk 独立回滚
   const transaction = new Transaction();
   for (const hunk of hunks) {
     const snapshot = transaction.snapshot();
     const result = transaction.applyHunk(hunk);
     if (!result.success) {
       transaction.rollback(snapshot);
       return FAILURE;
     }
   }
   transaction.commit();
   ```

3. **在等价语义下的并行准备阶段**
   ```typescript
   // ✅ 允许：并行准备资源（但不能并行应用）
   const [resources1, resources2] = await Promise.all([
     prepareForHunk(hunk1),
     prepareForHunk(hunk2)
   ]);
   // 应用时仍然顺序执行
   await applyHunk(hunk1, resources1);
   await applyHunk(hunk2, resources2);
   ```

**关键原则：**

> A4 的核心约束是**每个 hunk 必须基于前一个 hunk 的结果状态应用**，而不是禁止任何形式的性能优化。
>
> 只要最终语义等价于顺序应用，任何优化都是允许的。

**与 S1、S2 的关系：**

- A4 + S1 + S2 组合确实"保守"，但不应该抑制合法的大规模优化
- 对超大 diff（例如 monorepo 自动化 refactor），允许：
  - 只读预扫描（检查安全性）
  - 事务式 apply（可回滚）
  - 并行准备资源（但不能并行应用）
- 禁止的是：
  - 基于原始文档预计算所有 edits
  - 并行应用多个 hunks
  - 跳过中间状态的完整性检查

---

### A5. No Side Effects Invariant（无副作用）

**不变式：**
> Apply 过程不能产生 diff 外的修改

**约束：**
- 不允许 formatter
- 不允许 normalize whitespace
- 不允许 auto-fix
- 不允许自动格式化

**形式化表达：**
```
outputDocument = apply(inputDocument, diff)
modifiedLines = linesChanged(inputDocument, outputDocument)
modifiedLines ⊆ (diff.adds ∪ diff.removes)
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：自动格式化
function applyHunk(hunk) {
  formatter.format(document); // 违反 A5
  applyDiff(hunk);
}

// ✅ 正确：只应用 diff
function applyHunk(hunk) {
  applyDiff(hunk); // 不修改 diff 外的内容
}
```

---

## Parse + Apply 交叉不变式

### P1. Line Count Conservation（行数守恒）

**不变式：**
> Hunk header 的行数必须等于实际行数统计

**形式化表达：**
```
oldCount == context + removed
newCount == context + added
```

**违反处理：**
- Parser 阶段直接失败
- 返回 `LINE_COUNT_MISMATCH` 错误

---

### P2. Raw Preservation Invariant（原始行保留）

**不变式：**
> Raw 行必须 100% 保留，用于错误报告、审计、重放

**用途：**
- 错误报告（显示原始 diff 行）
- 审计日志（记录完整的 diff）
- 重放测试（重现 apply 过程）

**形式化表达：**
```
∀ line ∈ parsedLines: line.raw == originalDiffLine
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：修改 raw 行
line.raw = line.raw.trim(); // 违反 P2

// ✅ 正确：保留 raw，使用 content
const content = line.content; // 已去除 +/- 前缀
```

---

## 行号约束（关键）

### L1. Line Numbers Are Hints（行号是提示）

**约束：**
> 行号是非权威提示（non-authoritative hint）

**允许用途：**
- 快速定位起始位置
- 错误报告
- UI 显示

**禁止用途：**
- 单独决定 apply 成功
- Context 不匹配时的 fallback 搜索
- Remove 不匹配时的定位

**硬约束：**
> **If context or remove matching fails, line numbers MUST NOT be used to search for alternative apply locations.**

---

## 模糊匹配约束

### F1. Fuzzy Disabled = Strict Mode（模糊关闭 = 严格模式）

**不变式：**
> 当 `config.fuzzy = false` 时，任何差异都必须失败

**形式化表达：**
```
if (!config.fuzzy && anyWhitespaceDiff) {
  FAIL;
}
```

---

### F2. Remove Lines Never Fuzzy（删除行永不模糊）

**不变式：**
> Remove 行永远不能使用 fuzzy matching

**形式化表达：**
```
∀ r ∈ removedLines: fuzzyMatch(r) === FALSE
```

**红线警告：**
> 这是不可逾越的红线，任何尝试都是安全漏洞。

---

### F3. Multiple Candidates = Fail（多个候选 = 失败）

**不变式：**
> 当存在多个匹配候选时，必须失败

**形式化表达：**
```
candidates = findMatches()
if (candidates.length !== 1) {
  FAIL;
}
```

**违反示例（禁止）：**
```typescript
// ❌ 错误：选择"最相似"的
const bestMatch = findBestMatch(candidates);
applyAt(bestMatch); // 违反 F3

// ✅ 正确：多个匹配时必须失败
if (candidates.length !== 1) {
  return FAILURE;
}
```

---

### F4. No Cross-Hunk Matching（无跨 Hunk 匹配）

**不变式：**
> Fuzzy matching 不能跨越 hunk 边界

**约束：**
- 不能搜索到其他 hunk 的区域
- 不能跳过其他 hunks
- 搜索窗口必须限制在合理范围内

**形式化表达：**
```
searchWindow = [oldStart - N, oldStart + N]
candidatePositions ∈ searchWindow
```

---

## 安全限制约束

### S1. Limits Are Hard Constraints（限制是硬约束）

**不变式：**
> 超过安全限制必须立即失败，不能"尽力而为"

**限制项：**
- Max context lines per hunk: 200
- Max line length: 4KB
- Max hunks per file: 50
- Max files per diff: 20

**违反处理：**
- Parser 阶段立即失败
- 返回 `LIMIT_EXCEEDED` 错误
- 提供结构化信息：`{ type, actual, max }`

---

### S2. Limits Are Not Performance Optimizations（限制不是性能优化）

**不变式：**
> 这些限制是安全工程，不是性能优化

**含义：**
- 即使未来优化性能，限制仍应保持
- 不能因为"很快"就移除限制
- 安全性优于性能

---

## 实现检查清单

在实现或修改 Apply Engine 时，必须检查：

- [ ] 是否违反 G1（安全优先）？
- [ ] 是否违反 G2（确定性）？
- [ ] 是否违反 G3（局部性）？
- [ ] 是否违反 A1（Context 权威性）？
- [ ] 是否违反 A2（Remove 精确性）？**这是红线**
- [ ] 是否违反 A3（唯一锚点）？
- [ ] 是否违反 A4（单调状态变更）？
- [ ] 是否违反 A5（无副作用）？
- [ ] 是否违反 P1（行数守恒）？
- [ ] 是否违反 P2（原始行保留）？
- [ ] 是否违反 L1（行号是提示）？
- [ ] 是否违反 F1-F4（模糊匹配约束）？
- [ ] 是否违反 S1-S2（安全限制）？

如果任何一项为"是"，则实现存在安全风险，必须重新设计。

---

## Property-Based Tests 参考文档

详见：`docs/diff-property-based-tests.md`

不变式应该通过 Property-Based Tests 来验证，而不是通过示例测试。

---

## 版本历史

### v2.1 (2026-01-31)
- ✅ 初始版本，定义所有核心不变式
- ✅ 明确安全边界和红线
- ✅ 区分规范级保证（MUST）和实现建议（SHOULD）

---

## 贡献

**修改不变式：**
- 必须经过安全审查
- 必须提供形式化表达
- 必须更新 Property-Based Tests

**添加新不变式：**
- 必须确保与现有不变式一致
- 必须提供违反示例
- 必须添加测试验证