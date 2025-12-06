import React, { useState } from 'react';
import { Broker } from '../types';
import { 
  Star, 
  ArrowLeft, 
  CheckCircle2, 
  Coins, 
  Banknote, 
  Bitcoin, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Monitor,
  Users,
  Layers,
  Zap,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { BrokerRadarChart } from './RadarChart';

interface BrokerCardProps {
  broker: Broker;
  isRecommended?: boolean;
}

export const BrokerCard: React.FC<BrokerCardProps> = ({ broker, isRecommended }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check for specific payment types
  const paymentMethodsLower = broker.paymentMethods.map(m => m.toLowerCase());
  const hasCoinCash = paymentMethodsLower.some(m => m.includes('coincash'));
  const hasCrypto = paymentMethodsLower.some(m => 
    m.includes('crypto') || 
    m.includes('trc20') || 
    m.includes('bep20') || 
    m.includes('عملات رقمية') ||
    m.includes('bitcoin')
  );

  return (
    <div className={`
      relative group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 
      hover:shadow-xl transition-all duration-300 overflow-hidden
      ${isRecommended ? 'ring-2 ring-brand-500 shadow-brand-100' : ''}
    `}>
      {isRecommended && (
        <div className="absolute top-0 left-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10 shadow-sm">
          خيار مميز
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 pb-2">
        <div className="flex justify-between items-start mb-4">
          <div className={`w-16 h-16 rounded-2xl ${broker.logoUrl ? 'bg-white border border-slate-100 p-1' : broker.logoColor} flex items-center justify-center shadow-lg shadow-slate-200 transform group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
            {broker.logoUrl ? (
              <img src={broker.logoUrl} alt={broker.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-white font-bold text-xl">{broker.name.substring(0, 2).toUpperCase()}</span>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-100 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-bold text-amber-900">{broker.rating}</span>
            </div>
            {/* Show Regulation in header for quick trust check */}
            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
               <Shield className="w-3 h-3" />
               {broker.regulation}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-1">{broker.name}</h3>
        <p className="text-sm text-slate-500 line-clamp-2 min-h-[40px] leading-relaxed mb-5">{broker.tagline}</p>
        
        {/* Highlighted Min Deposit Section */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 mb-2">
            <div className="p-2.5 bg-white rounded-xl shadow-sm text-brand-500 ring-1 ring-slate-100">
                <Banknote className="w-6 h-6" />
            </div>
            <div>
                <p className="text-xs text-slate-400 font-bold mb-0.5">الحد الأدنى للإيداع</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-800 tracking-tight">
                       {broker.minDeposit === 0 ? 'مجاني' : `$${broker.minDeposit}`}
                    </span>
                    <span className="text-xs font-medium text-slate-500">فقط</span>
                </div>
            </div>
        </div>
      </div>

      {/* Features Section - Only for Recommended (First Two) */}
      {isRecommended && (
        <div className="px-6 py-2">
          <div className="flex flex-wrap gap-2">
            {broker.features.slice(0, 3).map((feat, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors border bg-brand-50 text-brand-700 border-brand-100/50"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Payment Methods Section - CoinCash & General Crypto Only */}
      {(hasCoinCash || hasCrypto) && (
        <div className="mt-4 px-6 py-3 bg-slate-50/50 border-t border-slate-100 min-h-[50px] flex items-center">
          <div className="flex flex-wrap gap-2 w-full">
            {hasCoinCash && (
               <a 
                 href="https://wa.me/967739032432?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84%20%D9%88%D8%B9%D9%85%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D9%80%200%25"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-md shadow-brand-200 transform hover:scale-105 transition-transform cursor-pointer ring-1 ring-brand-300 hover:no-underline flex-grow sm:flex-grow-0 justify-center"
               >
                 <Coins className="w-3.5 h-3.5 text-brand-100" />
                 كوين كاش ايداع مباشر
                 <MessageCircle className="w-3.5 h-3.5 mr-1 opacity-90" />
               </a>
            )}
            
            {hasCrypto && (
              <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-600">
                 <Bitcoin className="w-3 h-3 text-slate-400" />
                عملات رقمية
              </span>
            )}
          </div>
        </div>
      )}

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="px-6 py-6 bg-slate-50/80 border-t border-slate-200 animate-in slide-in-from-top-4 fade-in duration-300">
            {/* Description */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 mb-2">عن المنصة</h4>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{broker.description}</p>
            </div>

            {/* WikiFX Info */}
            {broker.wikiFxInfo && (
              <div className="grid grid-cols-1 gap-4 mb-6">
                 {/* Platforms */}
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                      <Monitor className="w-3.5 h-3.5" />
                      المنصات
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {broker.wikiFxInfo.platforms.map((p, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-semibold text-slate-700">
                          {p}
                        </span>
                      ))}
                    </div>
                 </div>

                 {/* Accounts */}
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                      <Users className="w-3.5 h-3.5" />
                      الحسابات
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {broker.wikiFxInfo.accounts.map((acc, i) => (
                        <span key={i} className="px-2 py-1 bg-emerald-50 border border-emerald-100 rounded text-xs font-semibold text-emerald-700">
                          {acc}
                        </span>
                      ))}
                    </div>
                 </div>

                 {/* Assets & Leverage */}
                 <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                     <div className="flex flex-wrap gap-4">
                        <div className="flex-1 min-w-[120px]">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                              <Layers className="w-3.5 h-3.5" />
                              الأصول
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {broker.wikiFxInfo.assets.slice(0, 4).map((asset, i) => (
                                <span key={i} className="text-xs text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded">
                                  {asset}
                                </span>
                              ))}
                            </div>
                        </div>
                        {broker.wikiFxInfo.leverage && (
                           <div className="min-w-[80px]">
                              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                                <Zap className="w-3.5 h-3.5" />
                                الرافعة
                              </div>
                              <span className="text-sm font-bold text-amber-600">{broker.wikiFxInfo.leverage}</span>
                           </div>
                        )}
                     </div>
                 </div>
              </div>
            )}

            {/* Pros List */}
            <div className="mb-6">
               <h4 className="text-sm font-bold text-slate-900 mb-3">المميزات الرئيسية</h4>
               <div className="space-y-2">
                  {broker.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{pro}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Radar Chart (Compact) */}
            <div className="bg-white rounded-xl border border-slate-100 p-2">
                <h4 className="text-xs font-bold text-slate-400 text-center uppercase tracking-wide mb-1">تقييم الأداء</h4>
                <div className="h-48">
                   <BrokerRadarChart metrics={broker.metrics} color={broker.logoColor} />
                </div>
            </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="p-5 pt-4 flex gap-3 mt-auto border-t border-slate-50 bg-white relative z-10">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 py-3 px-4 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              أقل
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              التفاصيل
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
        <a 
          href={broker.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] py-3 px-4 bg-brand-500 text-white rounded-xl text-sm font-bold hover:bg-brand-600 shadow-lg shadow-brand-200 hover:shadow-brand-300 transition-all flex items-center justify-center group/btn"
        >
          ابـدأ التداول
          <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};
