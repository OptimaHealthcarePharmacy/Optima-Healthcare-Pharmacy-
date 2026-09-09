import React from 'react';
import { HeartHandshake, Sparkles, Home, Heart } from 'lucide-react';
import { Language } from '../types';
import { MISSION_CARDS } from '../data/translations';

interface MissionSectionProps {
  lang: Language;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const getMissionIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-emerald-700" />;
      case 'Home':
        return <Home className="w-7 h-7 text-emerald-700" />;
      default:
        return <Heart className="w-7 h-7 text-emerald-700" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/60 mb-3">
            <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>{isNepali ? 'हाम्रो उद्देश्य र दृष्टिकोण' : 'Our Guiding Philosophy'}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali ? 'हाम्रो मिसन (Our Mission)' : 'Our Mission'}
          </h2>

          {/* Main Statement Banner */}
          <div className="mt-6 p-6 sm:p-8 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 rounded-3xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
            <p className="text-xs uppercase tracking-widest text-emerald-200 font-bold mb-2">
              {isNepali ? 'मुख्य मिसन वक्तव्य' : 'Core Mission Statement'}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug tracking-tight text-white">
              {isNepali
                ? '“हाम्रो स्थानीय समुदायलाई सुलभ, पहुँचयोग्य र गुणस्तरीय स्वास्थ्य सेवा प्रदान गर्नु।”'
                : '“To provide affordable, accessible and quality healthcare services to our local community.”'}
            </p>
          </div>
        </div>

        {/* 3 Highlighted Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MISSION_CARDS.map((card, index) => (
            <div
              key={card.id}
              id={`mission-card-${card.id}`}
              className="bg-slate-50/80 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-100/90 flex items-center justify-center mb-6 shadow-2xs">
                  {getMissionIcon(card.iconName)}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono">
                  {isNepali ? `पहल ०${index + 1}` : `Pillar 0${index + 1}`}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  {isNepali ? card.titleNe : card.titleEn}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {isNepali ? card.descriptionNe : card.descriptionEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                <span>{isNepali ? 'हृदयदेखिको सेवा' : 'Heartfelt Care'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
