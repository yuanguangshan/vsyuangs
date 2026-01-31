import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { DiffParser } from '../src/core/diff';

describe('Diff Path Normalization', () => {
  describe('flexibleNormalizePath', () => {
    // 由于flexibleNormalizePath是DiffParser的私有静态方法，
    // 我们通过测试整个解析过程来验证路径处理功能
    
    it('should handle normal paths correctly', () => {
      const diffText = `--- a/src/example.ts
+++ b/src/example.ts
@@ -1,3 +1,4 @@
 line1
 line2
+new line
 line3
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files).to.have.length(1);
        expect(result.files[0].normalizedPath).to.equal('src/example.ts');
      }
    });

    it('should handle paths with a/ and b/ prefixes', () => {
      const diffText = `--- a/path/to/file.js
+++ b/path/to/file.js
@@ -1,2 +1,3 @@
 old line
+new line
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files[0].normalizedPath).to.equal('path/to/file.js');
      }
    });

    it('should handle paths with leading slashes', () => {
      const diffText = `--- /absolute/path/file.py
+++ /absolute/path/file.py
@@ -1,1 +1,2 @@
 old
+new
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files[0].normalizedPath).to.equal('absolute/path/file.py');
      }
    });

    it('should handle quoted paths', () => {
      const diffText = `--- "a/spaced file.ts"
+++ "b/spaced file.ts"
@@ -1,1 +1,2 @@
 old
+new
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files[0].normalizedPath).to.equal('spaced file.ts');
      }
    });

    it('should handle mixed prefix and slash scenarios', () => {
      const diffText = `--- a/subdir/file.txt
+++ b/subdir/file.txt
@@ -1,1 +1,2 @@
 content
+added
`;
      const result = DiffParser.parse(diffText);
      expect(result.success).to.be.true;
      if (result.success) {
        expect(result.files[0].normalizedPath).to.equal('subdir/file.txt');
      }
    });
  });
});