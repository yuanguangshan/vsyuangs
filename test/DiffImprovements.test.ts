import { describe, it } from 'mocha';
import { expect } from 'chai';
import { DiffParser, DiffApplier } from '../src/core/diff';

describe('Diff Parser and Applier Improvements', () => {
  describe('Performance and Safety Improvements', () => {
    it('should handle large files with limited search range', () => {
      // 创建一个大文件内容
      const largeFileContent = Array(1000).fill('line of code').join('\n');
      const diffText = `--- a/large.ts
+++ b/large.ts
@@ -499,5 +499,5 @@
 line of code
-line to be replaced
+new line of code
 line of code
 line of code
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
    });

    it('should maintain accurate statistics after hunk fixes', () => {
      const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,10 +1,5 @@ // Intentionally wrong line counts
 context_line
-remove_line1
-remove_line2
+add_line1
 final_context
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        const file = result.files[0];
        expect(file.hunks).to.have.length(1);
        const hunk = file.hunks[0];
        
        // 验证统计信息的一致性
        const computedAdded = hunk.lines.filter(l => l.type === 'add').length;
        const computedRemoved = hunk.lines.filter(l => l.type === 'remove').length;
        const computedContext = hunk.lines.filter(l => l.type === 'context').length;
        
        expect(computedAdded).to.equal(hunk.stats.added);
        expect(computedRemoved).to.equal(hunk.stats.removed);
        expect(computedContext).to.equal(hunk.stats.context);
      }
    });

    it('should validate content before full replacement', async () => {
      // 这个测试验证applyFullContent的基本内容校验
      const result = await DiffApplier.applyFullContent('dummy.ts', '');
      expect(result.success).to.be.false;
      expect(result.error).to.equal('INVALID_DIFF');
    });

    it('should handle edge cases in path normalization', () => {
      const diffText = `--- "a/file with spaces.ts"
+++ "b/file with spaces.ts"
@@ -1,1 +1,2 @@
 old
+new
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files[0].normalizedPath).to.equal('file with spaces.ts');
      }
    });

    it('should properly handle mixed valid and invalid hunks', () => {
      const diffText = `--- a/test.ts
+++ b/test.ts
@@ -1,3 +1,3 @@ // Valid hunk
 line1
-line2
+line2_new
 line3

@@ -10,20 +10,5 @@ // Invalid hunk - wrong line count
 context
-old_long_line
+new_short
 final
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        expect(result.files[0].hunks).to.have.length(2);
        
        // 验证第一个hunk保持原计数
        expect(result.files[0].hunks[0].oldCount).to.equal(3);
        expect(result.files[0].hunks[0].newCount).to.equal(3);
        
        // 验证第二个hunk被修复
        expect(result.files[0].hunks[1].oldCount).to.equal(3); // 修复后的值
        expect(result.files[0].hunks[1].newCount).to.equal(3); // 修复后的值
      }
    });
  });
});