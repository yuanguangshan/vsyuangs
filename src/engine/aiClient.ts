import { askAI, addToConversationHistory, getConversationHistory, clearConversationHistory } from './ai/client';
import { AIRequestMessage } from './core/validation';

export class YuangsEngine {
  async send(options: {
    messages: AIRequestMessage[];
    stream?: boolean;
    onToken?: (token: string) => void;
  }): Promise<string> {
    // For now, we'll use the existing askAI function which takes a single prompt
    // In the future, this could be expanded to handle the full message history

    // Extract the user's message from the options
    const userMessage = options.messages.find(msg => msg.role === 'user');
    if (!userMessage) {
      throw new Error('No user message found in options');
    }

    try {
      // Call the existing AI function
      const result = await askAI(userMessage.content);

      // Add to conversation history
      addToConversationHistory('user', userMessage.content);
      addToConversationHistory('assistant', result);

      return result;
    } catch (error) {
      console.error('Error calling AI:', error);
      throw error;
    }
  }
}

export const yuangsEngine = new YuangsEngine();