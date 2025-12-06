
import React from 'react';
import { Broker } from '../types';
import { X, CheckCircle, ExternalLink, Shield, Monitor, Users, Layers, Zap } from 'lucide-react';
import { BrokerRadarChart } from './RadarChart';

interface BrokerModalProps {
  broker: Broker | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BrokerModal: React.FC<BrokerModalProps> = ({ broker, isOpen, onClose }) => {
  if (!isOpen || !broker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20 shadow-sm"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        {/* Sidebar / Left Column (Visuals) */}
        <div className="w-full md:w-1/3 bg-slate-50 p-6 md:p-8 border-l border-slate-100 flex flex-col">
          <div className={`w-24 h-24 rounded-2xl ${broker.logoUrl ? 'bg-white border border-slate-100 p-2' : broker.logoColor} flex items-center justify-center shadow-lg mb-6 overflow-hidden mx-auto md:mx-0`}>
            {broker.logoUrl ? (
              <img src={broker.logoUrl} alt={broker.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-white font-bold text-3xl">{broker.name.substring(0, 2).toUpperCase()}</span>
            )}
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center md:text-right">{broker.name}</h2>
          <div className="flex items-center justify-center md:justify-start text-sm text-slate-500 mb-6">
            <Shield className="w-4 h-4 ml-1.5 text-slate-400" />
            {broker.regulation}
          </div>

          <div className="mb-6 hidden md:block">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">مقياس الأداء</h4>
            <BrokerRadarChart metrics={broker.metrics} color={broker.logoColor} />
          </div>

          <div className="mt-auto hidden md:block">
            <a 
              href={broker.link}
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-brand-200 hover:shadow-brand-300 transform hover:-translate-y-0.5"
            >
              افتح حساب الآن
              <ExternalLink className="w-5 h-5 mr-2" />
            </a>
          </div>
        </div>

        {/* Main Content / Right Column */}
        <div className="w-full md:w-2/3 p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3 border-r-4 border-brand-500 pr-3">عن المنصة</h3>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line text-base">{broker.description}</p>
          </div>

          {/* WikiFX Information Section */}
          {broker.wikiFxInfo && (
            <div className="mb-8 p-6 bg-slate-50/80 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-brand-100 p-1.5 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-brand-600" />
                </span>
                تفاصيل التداول (WikiFX)
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                
                {/* Platforms */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wide">
                    <Monitor className="w-4 h-4" />
                    منصات التداول
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {broker.wikiFxInfo.platforms.map((p, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 shadow-sm flex items-center">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Accounts */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wide">
                    <Users className="w-4 h-4" />
                    أنواع الحسابات
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {broker.wikiFxInfo.accounts.map((acc, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-emerald-700 shadow-sm">
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Assets */}
                <div className="space-y-3 sm:col-span-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wide">
                    <Layers className="w-4 h-4" />
                    الأصول المتاحة
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {broker.wikiFxInfo.assets.map((asset, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>

                 {/* Leverage (Optional) */}
                 {broker.wikiFxInfo.leverage && (
                  <div className="space-y-3 sm:col-span-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wide">
                      <Zap className="w-4 h-4" />
                      الرافعة المالية
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg text-sm font-bold text-amber-800 shadow-sm">
                        <Zap className="w-4 h-4 fill-amber-500 text-amber-600" />
                        {broker.wikiFxInfo.leverage}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Pros */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-r-4 border-emerald-500 pr-3">
              المميزات
            </h3>
            {broker.cons.length === 0 ? (
                // Full width grid if no cons
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {broker.pros.map((pro, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-emerald-900 font-medium">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {pro}
                    </div>
                  ))}
                </div>
            ) : (
                <ul className="space-y-3">
                {broker.pros.map((pro, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 ml-2 flex-shrink-0" />
                    {pro}
                    </li>
                ))}
                </ul>
            )}
          </div>

          {/* Mobile Only: CTA Button */}
          <div className="md:hidden mt-4">
             <a 
              href={broker.link}
              target="_blank" 
              rel="noreferrer"
              className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg shadow-brand-200"
            >
              افتح حساب الآن
              <ExternalLink className="w-5 h-5 mr-2" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
