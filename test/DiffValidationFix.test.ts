import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { DiffParser } from '../src/core/diff';

describe('Diff Validation and Fix', () => {
  describe('validateAndFixHunkLineCount', () => {
    // 由于validateAndFixHunkLineCount是DiffParser的私有静态方法，
    // 我们通过测试整个解析过程来验证行数修复功能
    
    it('should auto-fix hunk line count mismatches', () => {
      // 创建一个故意行数不匹配的diff
      const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,5 +1,3 @@ // 声明5行，但实际上只有3行（1 context + 1 remove + 1 add）
 old line
-new line 1
+new line 2
 final line
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        const file = result.files[0];
        expect(file.hunks).to.have.length(1);
        const hunk = file.hunks[0];
        
        // 验证行数已经被修复
        // 实际应该是 oldCount=2 (1 context + 1 remove), newCount=2 (1 context + 1 add)
        expect(hunk.oldCount).to.equal(2);
        expect(hunk.newCount).to.equal(2);
      }
    });

    it('should preserve correct hunk line counts', () => {
      const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,3 +1,3 @@
 line1
-line2
+NEW_LINE
 line3
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        const file = result.files[0];
        expect(file.hunks).to.have.length(1);
        const hunk = file.hunks[0];
        
        // 验证正确的行数没有被修改
        // oldCount=3 (1 context + 1 remove + 1 context), newCount=3 (1 context + 1 add + 1 context)
        expect(hunk.oldCount).to.equal(3);
        expect(hunk.newCount).to.equal(3);
      }
    });

    it('should handle multiple hunks with mixed validity', () => {
      const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,2 +1,2 @@ // 正确的hunk
 line1
-line2
+line2_modified

@@ -5,10 +5,4 @@ // 错误的hunk，声明10行但实际只有4行
 old_context
-old_line1
-old_line2
+new_line1
+new_line2
 final_context
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        const file = result.files[0];
        expect(file.hunks).to.have.length(2);
        
        // 第一个hunk应该保持原有计数
        const hunk1 = file.hunks[0];
        expect(hunk1.oldCount).to.equal(2);
        expect(hunk1.newCount).to.equal(2);
        
        // 第二个hunk应该被修复
        const hunk2 = file.hunks[1];
        expect(hunk2.oldCount).to.equal(4); // 修复后的值
        expect(hunk2.newCount).to.equal(4); // 修复后的值
      }
    });
  });
});