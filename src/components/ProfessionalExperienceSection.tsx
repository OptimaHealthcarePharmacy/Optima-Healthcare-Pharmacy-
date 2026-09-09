import React from 'react';
import {
  Building2,
  Store,
  ClipboardCheck,
  MessageCircleQuestion,
  Compass,
  Sparkles,
  Award,
} from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCE_HIGHLIGHTS } from '../data/translations';

interface ProfessionalExperienceSectionProps {
  lang: Language;
}

export const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const getExperienceIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-emerald-700" />;
      case 'Store':
        return <Store className="w-6 h-6 text-emerald-700" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-emerald-700" />;
      case 'MessageCircleQuestion':
        return <MessageCircleQuestion className="w-6 h-6 text-emerald-700" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-700" />;
      case 'Sparkles':
      case 'Sparkle':
        return <Sparkles className="w-6 h-6 text-emerald-700" />;
      default:
        return <Award className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/80 mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isNepali ? 'व्यावसायिक दक्षता' : 'Clinical & Community Competence'}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali
              ? 'तपाईंले भरोसा गर्न सक्ने व्यावसायिक अनुभव'
              : 'Professional Experience You Can Trust'}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            {isNepali
              ? '“अस्पताल तथा सामुदायिक फार्मेसी सेवाको प्रत्यक्ष कार्य–अनुभव, जसले औषधिहरूको सुरक्षित, प्रभावकारी र विवेकपूर्ण प्रयोगलाई सुनिश्चित गर्दछ।”'
              : '“Extensive hands-on experience in hospital and community pharmacy services, supporting safe, effective and rational use of medicines.”'}
          </p>
        </div>

        {/* 6 Experience Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.id}
              id={`experience-card-${item.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {getExperienceIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isNepali ? item.titleNe : item.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {isNepali ? item.descriptionNe : item.descriptionEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{isNepali ? 'व्यावसायिक मापदण्ड' : 'Professional Practice'}</span>
                <span className="text-emerald-700 font-semibold">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on Rational Medicine Use */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900">
              {isNepali
                ? 'औषधिको सही प्रयोग र सुरक्षा हाम्रो पहिलो प्राथमिकता हो'
                : 'Safe Medication Therapy & Patient Safety is Our Utmost Priority'}
            </h4>
            <p className="text-sm text-slate-600">
              {isNepali
                ? 'कुनै पनि औषधिको प्रयोग, मात्रा वा समयबारे द्विविधा भएमा निसङ्कोच फार्मेसीमा सम्पर्क गर्नुहोस्।'
                : 'Have questions about your prescription, dosage, or timing? Feel free to contact our pharmacist directly.'}
            </p>
          </div>

          <a
            href="tel:+9779705146500"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm shrink-0 transition-colors"
          >
            <span>{isNepali ? 'परामर्शका लागि कल गर्नुहोस्' : 'Call for Guidance'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
