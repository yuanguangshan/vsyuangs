/**
 * Smart Stage Explainability Protocol
 * 
 * Defines how classification explanations are formatted for UI/Chat display
 */

import { GroupExplanation } from '../guard/types';

export interface ExplanationDisplayData {
  category: string;
  confidence: number;
  confidencePercentage: string;
  confidenceLabel: 'High' | 'Medium' | 'Low';
  reasons: string[];
  behavior: 'auto' | 'suggest' | 'needs-confirmation';
  displayReasons: DisplayReason[];
}

export interface DisplayReason {
  text: string;
  source: string;
  weight: number;
}

/**
 * Format explanation for UI display
 */
export function formatExplanationForDisplay(explanation: GroupExplanation): ExplanationDisplayData {
  const confidencePercentage = `${Math.round(explanation.confidence * 100)}%`;
  let confidenceLabel: 'High' | 'Medium' | 'Low' = 'Low';
  let behavior: 'auto' | 'suggest' | 'needs-confirmation' = 'needs-confirmation';
  
  if (explanation.confidence >= 0.6) {
    confidenceLabel = 'High';
    behavior = 'auto';
  } else if (explanation.confidence >= 0.3) {
    confidenceLabel = 'Medium';
    behavior = 'suggest';
  } else {
    confidenceLabel = 'Low';
    behavior = 'needs-confirmation';
  }
  
  const displayReasons = explanation.votes.map(vote => ({
    text: vote.reason,
    source: vote.source,
    weight: vote.weight
  }));
  
  return {
    category: explanation.category,
    confidence: explanation.confidence,
    confidencePercentage,
    confidenceLabel,
    reasons: explanation.reasons,
    behavior,
    displayReasons
  };
}

/**
 * Generate display text for explanation
 */
export function generateExplanationDisplayText(explanation: GroupExplanation): string {
  const displayData = formatExplanationForDisplay(explanation);
  
  const parts = [
    `**${displayData.category.charAt(0).toUpperCase() + displayData.category.slice(1)}** (${displayData.confidencePercentage} confidence)`
  ];
  
  if (displayData.reasons.length > 0) {
    parts.push('');
    parts.push('• ' + displayData.reasons.join('\n• '));
  }
  
  parts.push('');
  switch (displayData.behavior) {
    case 'auto':
      parts.push('✅ Auto-grouped');
      break;
    case 'suggest':
      parts.push('💡 Suggested for this group');
      break;
    case 'needs-confirmation':
      parts.push('❌ Needs confirmation');
      break;
  }
  
  return parts.join('\n');
}