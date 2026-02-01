
import { GoogleGenAI, Type } from "@google/genai";
import { StyleRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getStyleRecommendation(query: string): Promise<StyleRecommendation> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a high-end luxury salon consultant at "Cre8 Salon". 
      A client has asked the following: "${query}".
      Provide a professional style recommendation including a catchy title, a detailed description, and 3 specific styling tips.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "description", "tips"]
        }
      }
    });

    const result = JSON.parse(response.text);
    return result as StyleRecommendation;
  } catch (error) {
    console.error("Error fetching style recommendation:", error);
    return {
      title: "The Signature Cre8 Look",
      description: "We couldn't reach our digital scout, but our master stylists recommend a timeless, high-gloss finish tailored to your unique features.",
      tips: [
        "Consult with our lead stylist for personalized color mapping.",
        "Use sulfate-free products to maintain brilliance.",
        "Hydrate your hair weekly with our custom treatments."
      ]
    };
  }
}
