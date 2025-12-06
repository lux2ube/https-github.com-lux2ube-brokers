import { GoogleGenAI, Type } from "@google/genai";
import { BROKERS } from '../constants';
import { AiMatchResponse } from '../types';

// Initialize Gemini Client
// Note: process.env.API_KEY is expected to be available in the build environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getGeminiRecommendations = async (userQuery: string): Promise<AiMatchResponse> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini.");
    return {
      recommendedBrokerIds: [],
      reasoning: "مفتاح API مفقود. عرض القائمة الافتراضية."
    };
  }

  // Create a simplified list of brokers for the context to save tokens and reduce noise
  const brokerContext = BROKERS.map(b => ({
    id: b.id,
    name: b.name,
    types: b.types,
    minDeposit: b.minDeposit,
    features: b.features,
    paymentMethods: b.paymentMethods,
    description: b.description
  }));

  const prompt = `
    أنت مستشار مالي خبير في وسطاء التداول (Brokers).
    إليك قائمة الوسطاء المتاحين: ${JSON.stringify(brokerContext)}.

    المستخدم يسأل عن توصية بناءً على هذا المدخل: "${userQuery}".

    قم بتحليل طلب المستخدم (الميزانية، الخبرة، الأصول المفضلة، طريقة الدفع) واختر أفضل 1-3 وسطاء مناسبين من القائمة.
    
    أعد كائن JSON يحتوي على:
    1. 'recommendedBrokerIds': مصفوفة نصوص تحتوي على IDs الوسطاء المطابقين بدقة.
    2. 'reasoning': ملخص مقنع ومختصر (جملتان كحد أقصى) باللغة العربية يشرح سبب اختيار هؤلاء الوسطاء لهذا المستخدم.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedBrokerIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            reasoning: { type: Type.STRING }
          },
          required: ["recommendedBrokerIds", "reasoning"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from Gemini");
    }

    const data = JSON.parse(resultText) as AiMatchResponse;
    return data;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      recommendedBrokerIds: [],
      reasoning: "لم نتمكن من الوصول للمستشار الذكي حالياً. يرجى تصفح القائمة الكاملة أدناه."
    };
  }
};