## Smart Stage Governance (v1.5)

Smart Stage does not blindly automate commits.

Every classification is:
- Multi-signal voted
- Confidence-scored
- Fully explainable

If confidence is low, Smart Stage refuses to decide and asks for human input.

This design prioritizes **trust over automation**.

### How it works
1. Each file is analyzed by multiple weak classifiers
2. Classifiers vote with weighted confidence
3. Final grouping is decided with transparency and thresholds

### Classification Confidence Levels
- **≥ 60% confidence**: Auto-grouped
- **30-60% confidence**: Suggested for this group
- **< 30% confidence**: Needs confirmation

### Human Feedback Loop
When you disagree with a classification:
1. Click "Wrong? Correct it" in the Smart Stage suggestion UI
2. Enter the correct category
3. Your correction is recorded and improves future suggestions

### Categories
- `ui`: User interface changes
- `logic`: Business logic changes
- `docs`: Documentation updates
- `test`: Test file changes
- `chore`: Configuration, refactoring, etc.
- `other`: Unclassifiable or needs confirmation