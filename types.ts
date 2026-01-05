
export interface GroundingSource {
  title: string;
  uri: string;
}

export interface CleaningSuggestion {
  problem: string;
  summary: string;
  tools: string[];
  products: string[];
  steps: string[];
  sources: GroundingSource[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  suggestion?: CleaningSuggestion;
  timestamp: Date;
}

export type CleaningCategory = 'kitchen' | 'bathroom' | 'living-room' | 'laundry' | 'outdoor' | 'specialty';

export interface CategoryInfo {
  id: CleaningCategory;
  label: string;
  icon: string;
  description: string;
}

export type AppView = 'home' | 'advisor' | 'safety';
