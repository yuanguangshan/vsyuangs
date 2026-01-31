import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import { VotingFileClassifier } from '../src/vscode/guard/VotingFileClassifier';
import { GroupExplanation } from '../src/vscode/guard/types';
import { PreferenceMemory } from '../src/vscode/guard/preferences';

describe('VotingFileClassifier', () => {
  let classifier: VotingFileClassifier;

  beforeEach(() => {
    const preferenceMemory = new PreferenceMemory();
    classifier = new VotingFileClassifier(preferenceMemory);
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
      const filePath = 'src/test/Button.test.tsx';  // Use path that matches /test/ pattern
      const diff = 'describe("Button", () => { it("renders", () => {}) })';

      const result: GroupExplanation = classifier.classify(filePath, diff);

      // The file path should trigger test classification
      expect(result.category).to.equal('test');
      expect(result.confidence).to.be.a('number');
      // At least one reason should be related to test file path
      expect(result.reasons.some(r => r.includes('Test'))).to.be.true;
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
      const diff = ''; // Empty diff will have no signals

      const result: GroupExplanation = classifier.classify(filePath, diff);

      expect(result.category).to.equal('other');
      expect(result.confidence).to.equal(0); // Should be 0 when no signals
      // Check that the reasons contain a no signals indicator
      expect(result.reasons.some(r => r.includes('No classification signals'))).to.be.true;
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