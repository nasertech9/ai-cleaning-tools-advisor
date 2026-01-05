
import React from 'react';
import { CategoryInfo } from './types';

export const CATEGORIES: CategoryInfo[] = [
  { id: 'kitchen', label: 'Kitchen', icon: '🍳', description: 'Grease, appliances, and countertops' },
  { id: 'bathroom', label: 'Bathroom', icon: '🛁', description: 'Soap scum, mold, and tile grout' },
  { id: 'living-room', label: 'Living Room', icon: '🛋️', description: 'Upholstery, carpets, and dusting' },
  { id: 'laundry', label: 'Laundry', icon: '🧺', description: 'Stain removal and machine care' },
  { id: 'outdoor', label: 'Outdoor', icon: '🏡', description: 'Patios, grills, and windows' },
  { id: 'specialty', label: 'Specialty', icon: '✨', description: 'Electronics, pets, and antiques' },
];

export const APP_CONFIG = {
  MODEL: 'gemini-3-flash-preview',
  SYSTEM_INSTRUCTION: `You are an expert cleaning consultant with deep knowledge of chemistry, mechanical tools, and domestic engineering. 
  When a user asks for cleaning help:
  1. Analyze the surface and the contaminant (the mess).
  2. Suggest specific tools (e.g., microfiber cloths, pumice stones, HEPA vacuums).
  3. Suggest specific cleaning products (including eco-friendly alternatives).
  4. Provide a step-by-step procedure.
  5. Use Google Search to find current, highly-rated products and safety warnings.
  Always emphasize safety (e.g., don't mix bleach and ammonia).`,
};
