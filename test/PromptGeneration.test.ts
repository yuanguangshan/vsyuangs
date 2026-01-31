import { describe, it } from 'mocha';
import { expect } from 'chai';
import { buildCodeModificationPrompt } from '../src/engine/ai/prompt';

describe('Prompt Generation', () => {
  describe('buildCodeModificationPrompt', () => {
    it('should generate consistent code modification prompt', () => {
      const userInput = 'Add a new function to calculate sum';
      const context = 'Current file contains math utilities';
      
      const prompt = buildCodeModificationPrompt(userInput, context);
      
      // 验证prompt包含必要元素
      expect(prompt).to.include('标准的 Unified Diff 格式');
      expect(prompt).to.include('至少提供 3 行上下文');
      expect(prompt).to.include('严禁使用 "..." 省略');
      expect(prompt).to.include(userInput);
      expect(prompt).to.include(context || '');
      
      // 验证prompt结构
      expect(prompt).to.include('用户需求');
      expect(prompt).to.include('请直接输出符合标准 Unified Diff 格式的修改内容');
    });

    it('should handle missing context', () => {
      const userInput = 'Fix the bug in login function';
      
      const prompt = buildCodeModificationPrompt(userInput);
      
      expect(prompt).to.include(userInput);
      expect(prompt).to.include('无'); // 因为context为空时会显示'无'
    });

    it('should enforce diff format rules', () => {
      const prompt = buildCodeModificationPrompt('Modify the API endpoint');
      
      expect(prompt).to.include('必须使用标准的 Unified Diff 格式');
      expect(prompt).to.include('保持 Diff 行数准确');
      expect(prompt).to.include('提供足够的上下文行');
    });
  });
});