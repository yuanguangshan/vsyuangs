# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [v1.5.0] - 2026-01-31

### ✨ New Features
- **Governed Smart Stage**: Voting-based file classification for Smart Stage
- **Confidence Scoring**: Every commit group now has a confidence score (0.0-1.0)
- **Explainable AI**: Each classification includes reasons for the decision
- **Human Feedback Loop**: Users can correct wrong classifications, improving future accuracy
- **Safety Thresholds**: 
  - ≥ 60% confidence → auto-group
  - 30-60% confidence → suggest
  - < 30% confidence → needs-confirmation

### 🛡️ Safety Improvements
- Smart Stage will no longer auto-commit when confidence < 0.3
- Reduced risk of incorrect Git history generation
- Added "Needs Confirmation" group for low-confidence cases

### 🧠 Learning Enhancements
- User corrections are recorded and used to adjust future grouping behavior
- Weight adjustment system based on human feedback
- Preference memory with time-based decay

### 💬 UX Improvements
- Commit preview and Sidebar Chat now display grouping confidence and rationale
- Added "Wrong? Correct it" button in Smart Stage UI
- Visual indicators for classification confidence levels

### 🏗️ Architecture Changes
- Introduced VotingFileClassifier with multi-signal analysis
- Added GroupExplanation type with detailed reasoning
- Created PreferenceMemory system for learning from corrections
- Extended FileGroup interface to include explanation data

### 📚 Documentation
- Added SMART_STAGE_GOVERNANCE.md with detailed feature explanation
- Updated README with Smart Stage governance features
- Documented confidence threshold behavior

## [v1.4.0] - YYYY-MM-DD

### ✨ New Features
- Initial release of Yuangs AI Agent
- Basic AI chat functionality
- WASM sandbox for secure command execution
- Policy engine with configurable rules
- Smart diff application
- File and symbol reference system