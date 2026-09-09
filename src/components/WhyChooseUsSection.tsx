import React from 'react';
import {
  GraduationCap,
  UsersRound,
  ShieldCheck,
  Trees,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { WHY_CHOOSE_CARDS } from '../data/translations';

interface WhyChooseUsSectionProps {
  lang: Language;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const getWhyChooseIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-700" />;
      case 'UsersRound':
        return <UsersRound className="w-6 h-6 text-emerald-700" />;
      case 'ShieldAlert':
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-700" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-emerald-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>{isNepali ? 'हाम्रो विशेषता' : 'Our Key Distinctions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali
              ? 'अप्टिमा हेल्थकेयर फार्मेसी किन रोज्ने?'
              : 'Why Choose Optima Healthcare Pharmacy?'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {isNepali
              ? 'हामी तपाईं र तपाईंको परिवारको स्वास्थ्य सुरक्षाका लागि उच्च प्राथमिकताका साथ सेवा प्रदान गर्दछौं।'
              : 'Dedicated to your family’s well-being with qualified expertise, authentic medicines, and genuine care.'}
          </p>
        </div>

        {/* 4 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_CARDS.map((item, idx) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                  {getWhyChooseIcon(item.iconName)}
                </div>

                <span className="text-xs font-bold text-slate-300 font-mono">
                  #0{idx + 1}
                </span>

                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2.5">
                  {isNepali ? item.titleNe : item.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {isNepali ? item.descriptionNe : item.descriptionEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isNepali ? 'प्रमाणित सेवा' : 'Verified Standard'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
