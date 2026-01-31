import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { VotingFileClassifier } from '../src/vscode/guard/VotingFileClassifier';
import { GroupExplanation } from '../src/vscode/guard/types';

describe('VotingFileClassifier', () => {
  let classifier: VotingFileClassifier;

  beforeEach(() => {
    classifier = new VotingFileClassifier();
  });

  describe('classify', () => {
    it('should classify UI files correctly', () => {
      const filePath = 'src/ui/Button.tsx';
      const diff = '<div className="button">Click me</div>';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.equal('ui');
      expect(result.confidence).to.be.a('number');
      expect(result.reasons).to.be.an('array');
      expect(result.votes).to.be.an('array');
    });

    it('should classify test files correctly', () => {
      const filePath = 'src/components/Button.test.tsx';
      const diff = 'describe("Button", () => { it("renders", () => {}) })';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.equal('test');
      expect(result.confidence).to.be.a('number');
      expect(result.reasons).to.include('Test file path');
    });

    it('should classify documentation files correctly', () => {
      const filePath = 'README.md';
      const diff = '# Project Title\nThis is a documentation file.';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.equal('docs');
      expect(result.confidence).to.be.a('number');
      expect(result.reasons).to.include('Documentation file');
    });

    it('should return "other" for low confidence cases', () => {
      const filePath = 'random.file';
      const diff = 'some random content';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.equal('other');
      expect(result.confidence).to.be.lessThan(0.3);
      expect(result.reasons).to.include('Low confidence, human confirmation required');
    });

    it('should handle empty diff gracefully', () => {
      const filePath = 'src/logic/utils.ts';
      const diff = '';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.be.oneOf(['ui', 'logic', 'docs', 'test', 'chore', 'other']);
      expect(result.confidence).to.be.a('number');
    });

    it('should handle files with no classification signals', () => {
      const filePath = 'unknown.xyz';
      const diff = 'completely unknown content';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      expect(result.category).to.equal('other');
      expect(result.confidence).to.equal(0);
      expect(result.reasons).to.include('No classification signals detected');
    });
  });

  describe('aggregate', () => {
    it('should calculate confidence based on vote differences', () => {
      // This test verifies the internal aggregation logic indirectly
      const filePath = 'src/ui/component.jsx';
      const diff = '<Component /> some jsx content';
      
      const result: GroupExplanation = classifier.classify(filePath, diff);
      
      // Should have high confidence for clear UI signals
      expect(result.confidence).to.be.greaterThan(0.3);
      expect(result.category).to.equal('ui');
    });
  });
});