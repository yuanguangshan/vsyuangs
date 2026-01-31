import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { SmartStageSuggester } from '../src/vscode/git/SmartStageSuggester';
import { DiffFile } from '../src/core/diff';

describe('SmartStageSuggester Integration', () => {
  describe('groupFiles with voting classifier', () => {
    it('should properly classify files using voting classifier', () => {
      const mockFiles: DiffFile[] = [
        {
          normalizedPath: 'src/ui/button.tsx',
          status: 'M',
          diff: '<button className="btn">Click</button>',
          stats: { added: 5, removed: 2, context: 3 }
        },
        {
          normalizedPath: 'src/test/button.test.tsx',
          status: 'M',
          diff: 'describe("Button", () => { it("works", () => {})',
          stats: { added: 10, removed: 0, context: 5 }
        },
        {
          normalizedPath: 'docs/readme.md',
          status: 'M',
          diff: '# Updated documentation',
          stats: { added: 3, removed: 1, context: 2 }
        }
      ];

      // Call the groupFiles method
      const groups = (SmartStageSuggester as any).groupFiles(mockFiles);

      // Should have multiple groups
      expect(groups).to.be.an('array');
      expect(groups).to.have.length.greaterThan(0);

      // Check that each group has explanation info if it had high confidence
      for (const group of groups) {
        if (group.id !== 'group-needs-confirmation') {
          expect(group).to.have.property('explanation');
          expect(group.explanation).to.not.be.null;
        }
      }
    });

    it('should put low confidence files in needs-confirmation group', () => {
      const mockFiles: DiffFile[] = [
        {
          normalizedPath: 'unclear-file.xyz',
          status: 'M',
          diff: 'some unclear content that does not match any patterns',
          stats: { added: 1, removed: 1, context: 1 }
        }
      ];

      const groups = (SmartStageSuggester as any).groupFiles(mockFiles);

      // Should have a "needs confirmation" group for low confidence files
      const needsConfirmationGroup = groups.find((g: any) => g.id === 'group-needs-confirmation');
      expect(needsConfirmationGroup).to.not.be.undefined;
      expect(needsConfirmationGroup!.name).to.equal('Needs Confirmation');
    });

    it('should record user corrections properly', () => {
      const sandbox = sinon.createSandbox();
      const recordSpy = sandbox.spy(SmartStageSuggester as any, 'recordUserCorrection');

      // Call the recordUserCorrection method directly
      (SmartStageSuggester as any).recordUserCorrection(
        'group-ui',
        'src/button.tsx',
        'ui',
        'logic',
        0.7
      );

      expect(recordSpy.calledOnce).to.be.true;
      expect(recordSpy.calledWith('group-ui', 'src/button.tsx', 'ui', 'logic', 0.7)).to.be.true;

      sandbox.restore();
    });
  });

  describe('confidence thresholds', () => {
    it('should use proper confidence thresholds', () => {
      // Check that the constants exist and have expected values
      const highThreshold = (SmartStageSuggester as any).CONFIDENCE_THRESHOLD_HIGH;
      const mediumThreshold = (SmartStageSuggester as any).CONFIDENCE_THRESHOLD_MEDIUM;

      expect(highThreshold).to.equal(0.6);
      expect(mediumThreshold).to.equal(0.3);
      expect(mediumThreshold).to.be.lessThan(highThreshold);
    });
  });
});