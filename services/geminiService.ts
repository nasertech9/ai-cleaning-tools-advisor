
import { GoogleGenAI } from "@google/genai";
import { APP_CONFIG } from "../constants";
import { CleaningSuggestion, GroundingSource } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getCleaningAdvice(prompt: string): Promise<CleaningSuggestion> {
    try {
      const response = await this.ai.models.generateContent({
        model: APP_CONFIG.MODEL,
        contents: prompt,
        config: {
          systemInstruction: APP_CONFIG.SYSTEM_INSTRUCTION,
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "I couldn't generate a response. Please try again.";
      
      // Extract grounding sources
      const sources: GroundingSource[] = [];
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      
      if (groundingChunks) {
        groundingChunks.forEach((chunk: any) => {
          if (chunk.web) {
            sources.push({
              title: chunk.web.title,
              uri: chunk.web.uri
            });
          }
        });
      }

      // Simplified parsing logic for the demonstration
      // In a real app, we might use JSON response mode, but with Search Grounding, 
      // sometimes a structured markdown response is more reliable for direct text generation.
      
      return {
        problem: prompt,
        summary: text,
        tools: [], // We'll let the text carry the detail for now or parse specifically if needed
        products: [],
        steps: [],
        sources: Array.from(new Set(sources.map(s => s.uri))).map(uri => sources.find(s => s.uri === uri)!)
      };
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
