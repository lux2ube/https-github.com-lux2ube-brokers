
export enum BrokerType {
  FOREX = 'Forex',
  STOCKS = 'Stocks',
  CRYPTO = 'Crypto',
  CFD = 'CFD',
  OPTIONS = 'Options',
  MULTI_ASSET = 'Multi-Asset'
}

export interface BrokerMetrics {
  fees: number;       // 0-100 score (Higher is better/cheaper)
  usability: number;  // 0-100 score
  assets: number;     // 0-100 score
  research: number;   // 0-100 score
  support: number;    // 0-100 score
}

export interface WikiFxInfo {
  platforms: string[];
  accounts: string[];
  assets: string[];
  leverage?: string;
}

export interface Broker {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoColor: string;
  logoUrl?: string;
  types: BrokerType[];
  minDeposit: number;
  rating: number; // 0.0 to 5.0
  features: string[];
  pros: string[];
  cons: string[];
  metrics: BrokerMetrics;
  regulation: string;
  link: string;
  paymentMethods: string[];
  wikiFxInfo?: WikiFxInfo;
}

export interface AiMatchResponse {
  recommendedBrokerIds: string[];
  reasoning: string;
}
