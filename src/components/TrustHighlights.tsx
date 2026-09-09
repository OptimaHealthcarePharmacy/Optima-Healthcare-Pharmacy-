import React from 'react';
import { ShieldCheck, Stethoscope, HeartHandshake, Pill } from 'lucide-react';
import { Language } from '../types';
import { TRUST_CARDS } from '../data/translations';

interface TrustHighlightsProps {
  lang: Language;
}

export const TrustHighlights: React.FC<TrustHighlightsProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-700" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-emerald-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {TRUST_CARDS.map((card, index) => (
          <div
            key={card.id}
            id={`trust-card-${card.id}`}
            className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors duration-200">
                  {getIcon(card.iconName)}
                </div>
                <span className="text-xs font-bold text-slate-300 group-hover:text-emerald-500 font-mono transition-colors">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                {isNepali ? card.titleNe : card.titleEn}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isNepali ? card.descriptionNe : card.descriptionEn}
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
              <span>{isNepali ? 'विश्वसनीय प्रतिबद्धता' : 'Core Commitment'}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
