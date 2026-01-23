# Model Switching Feature

## Overview
A model selector has been added to the sidebar that allows users to switch between different AI models during their chat sessions.

## Features

### Model Selector UI
- Located in the sidebar header (top-right area)
- Displays the currently selected model name
- Dropdown menu shows available models with descriptions
- Visual indicator (✓) shows the active model

### Available Models
- **GPT-4o Mini** (default) - Fast and efficient
- **GPT-4o** - Balanced performance
- **GPT-4 Turbo** - High performance
- **GPT-4** - Maximum capability
- **GPT-3.5 Turbo** - Cost-effective option

### Persistence
- Selected model is automatically saved to workspace state
- Model preference persists across VS Code sessions
- Loads the previously selected model on startup

## Usage

### Switching Models
1. Click the model selector in the sidebar header (next to the Files button)
2. Select a model from the dropdown menu
3. The model will be switched immediately
4. A system message confirms the model change
5. Subsequent chat messages will use the new model

### Technical Details

#### Frontend (sidebar.html)
- Model selector UI with dropdown menu
- JavaScript handlers for model selection
- Message passing to extension via `postMessage`
- Events: `getCurrentModel`, `changeModel`, `currentModel`

#### Backend (ChatViewProvider.ts)
- `_currentModel` property stores the active model
- Loads saved model from `workspaceState` on initialization
- Sends current model to webview on request
- Passes model to `VSCodeAgentRuntime` for AI generation
- Saves model changes to `workspaceState`

#### Model Integration
- The selected model is passed to `runtime.runChat()` as the third parameter
- The runtime uses this model for all subsequent AI requests
- Model changes take effect immediately for new messages

## Implementation Details

### Files Modified
1. `src/vscode/webview/sidebar.html`
   - Added model selector UI components
   - Added CSS styling for model selector
   - Implemented JavaScript model switching logic

2. `src/vscode/provider/ChatViewProvider.ts`
   - Added `_currentModel` property
   - Added model loading/saving logic
   - Added message handlers for model operations
   - Passes model to runtime during chat execution

### Message Flow
```
User Action (click model selector)
  ↓
Webview sends: { type: 'changeModel', value: 'gpt-4o' }
  ↓
ChatViewProvider updates _currentModel
  ↓
ChatViewProvider saves to workspaceState
  ↓
Next chat request uses new model
```

## Testing

### Manual Testing Steps
1. Open the Yuangs AI sidebar
2. Verify the model selector displays "GPT-4o Mini" (default)
3. Click the model selector to open the dropdown
4. Select a different model (e.g., "GPT-4o")
5. Verify the system message shows the model change
6. Send a chat message
7. Check console logs to confirm the model is being used
8. Restart VS Code
9. Verify the selected model persists

### Expected Behavior
- Model selector appears in the sidebar header
- Clicking opens a dropdown with 5 model options
- Selecting a model updates the display immediately
- System message confirms the change
- Model preference is saved and restored
- All subsequent AI requests use the selected model

## Future Enhancements
- Add custom model configuration
- Display model pricing information
- Add model comparison feature
- Support for additional AI providers
- Model-specific context limits
