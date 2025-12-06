import { AiMatchResponse } from '../types';

// AI service is currently disabled to remove dependency on environment variables.
// This ensures the application runs without "process is not defined" errors in client-side deployments.

export const getGeminiRecommendations = async (userQuery: string): Promise<AiMatchResponse> => {
  return {
    recommendedBrokerIds: [],
    reasoning: "AI service is disabled."
  };
};