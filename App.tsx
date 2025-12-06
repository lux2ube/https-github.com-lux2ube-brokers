import React from 'react';
import { BROKERS } from './constants';
import { BrokerCard } from './components/BrokerCard';
import { Sparkles, ThumbsUp, Timer, Gift, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  // Split brokers: First 2 are top recommendations, rest are others
  const topPicks = BROKERS.slice(0, 2);
  const otherPicks = BROKERS.slice(2);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-6 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Compact Psychological Offer Banner with Embedded CTA */}
        <div className="mb-8 animate-in slide-in-from-top-4 duration-500">
          <div className="relative overflow-hidden bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl shadow-lg shadow-brand-100/50 p-0.5">
             <div className="bg-white/10 backdrop-blur-[2px] rounded-[10px] py-2.5 px-3 sm:px-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white">
                
                {/* Icon & Main Text */}
                <div className="flex items-center gap-3 text-center md:text-right w-full md:w-auto justify-center md:justify-start">
                   <div className="bg-white/20 p-1.5 rounded-lg flex-shrink-0">
                      <Gift className="w-4 h-4 text-amber-200" />
                   </div>
                   <div>
                      <p className="text-sm font-medium leading-tight">
                         <span className="bg-amber-400/20 text-amber-100 text-[10px] font-bold px-1.5 py-0.5 rounded ml-2 align-middle border border-amber-400/30">
                            خاص لعملائنا
                         </span>
                         إيداع وسحب <span className="text-amber-200 font-bold border-b border-amber-200/50">بعمولة تصل حتى 0%</span>
                      </p>
                   </div>
                </div>

                {/* Right Side: Timer & Embedded CTA */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                   {/* Timer */}
                   <div className="flex items-center gap-1.5 text-[10px] font-medium text-brand-100 bg-black/10 px-2.5 py-1.5 rounded-full whitespace-nowrap">
                      <Timer className="w-3 h-3" />
                      <span>ينتهي العرض بنهاية الأسبوع</span>
                   </div>

                   {/* Embedded CTA */}
                   <a
                      href="https://wa.me/967739032432?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84%20%D9%88%D8%B9%D9%85%D9%88%D9%84%D8%A9%20%D8%A7%D9%84%D9%80%200%25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-brand-600 hover:bg-brand-50 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap ring-1 ring-white/50"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      تواصل معنا
                    </a>
                </div>

             </div>
          </div>
        </div>

        {/* Header - Redesigned */}
        <div className="text-center mb-8">
           <div className="inline-flex items-center justify-center relative">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 relative z-10 px-2">
                خيارات تم اقتراحها لك بعناية
              </h1>
              {/* Subtle decorative underline */}
              <div className="absolute bottom-1 left-0 w-full h-2 bg-brand-200/40 -z-0 rounded-full"></div>
           </div>
        </div>

        {/* Top Picks Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-3">
            <Sparkles className="w-5 h-5 text-brand-500 fill-brand-500" />
            <h2 className="text-xl font-bold text-slate-900">
              أفضل الخيارات للبدء
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {topPicks.map(broker => (
              <BrokerCard 
                key={broker.id} 
                broker={broker} 
                isRecommended={true}
              />
            ))}
          </div>
        </div>

        {/* Other Picks Section */}
        {otherPicks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-5 border-b border-slate-200 pb-3">
               <ThumbsUp className="w-5 h-5 text-slate-400" />
               <h2 className="text-lg font-bold text-slate-700">
                 خيارات قد تعجبك
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPicks.map(broker => (
                <BrokerCard 
                  key={broker.id} 
                  broker={broker} 
                  isRecommended={false}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;