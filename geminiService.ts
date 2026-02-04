
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSmartCaption = async (topic: string, platform: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a high-engagement ${platform} caption about: ${topic}. Include relevant emojis and hashtags. Keep it concise.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "Failed to generate caption.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI service.";
  }
};

export const getPostInsights = async (content: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze this social media post for engagement potential and suggest 2 improvements: "${content}"`,
    });
    return response.text || "No insights available.";
  } catch (error) {
    return "Insight generation currently unavailable.";
  }
};
