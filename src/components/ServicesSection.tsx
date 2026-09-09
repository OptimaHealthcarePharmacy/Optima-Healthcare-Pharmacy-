import React from 'react';
import {
  FileText,
  PackageCheck,
  MessageSquareHeart,
  BookOpenCheck,
  Activity,
  BadgeCheck,
  AlertCircle,
  Phone,
} from 'lucide-react';
import { Language } from '../types';
import { SERVICES, SITE_INFO } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-emerald-700" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-emerald-700" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-6 h-6 text-emerald-700" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-6 h-6 text-emerald-700" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-700" />;
      case 'BadgeCheck':
        return <BadgeCheck className="w-6 h-6 text-emerald-700" />;
      default:
        return <FileText className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>{isNepali ? 'फार्मेसी सेवाहरू' : 'Comprehensive Pharmacy Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali ? 'हाम्रा सेवाहरू' : 'Our Services'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            {isNepali
              ? '“हेरचाह, मार्गदर्शन र जिम्मेवारीसहितको व्यावसायिक फार्मेसी सेवा।”'
              : '“Professional pharmacy services with care, guidance and responsibility.”'}
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100/90 flex items-center justify-center transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                    {isNepali ? service.badgeNe : service.badgeEn}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-400 font-mono">0{index + 1}.</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {isNepali ? service.titleNe : service.titleEn}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {isNepali ? service.descriptionNe : service.descriptionEn}
                </p>
              </div>

              {/* Bottom Card Action / Detail */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {isNepali ? 'फार्मासिस्ट परामर्श उपलब्ध' : 'Pharmacist Guided'}
                </span>
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{isNepali ? 'सोधपुछ गर्नुहोस्' : 'Inquire'}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Practice Clarification Box */}
        <div className="mt-12 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                {isNepali ? 'जिम्मेवार फार्मेसी अभ्यास' : 'Responsible Pharmacy Practice'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-3xl">
                {isNepali
                  ? 'हाम्रो फार्मेसी आधिकारिक प्रेस्क्रिप्सन अनुसार औषधि वितरण, बिरामी परामर्श र आधारभूत स्वास्थ्य सचेतनामा केन्द्रित छ। हामी कुनै पनि प्रकारको डाक्टरी रोग–निदान (Diagnosis) वा विशेषज्ञ उपचार सेवा दाबी गर्दैनौं।'
                  : 'Optima Healthcare Pharmacy focuses on ethical dispensing, patient counseling, and medication guidance according to applicable healthcare regulations.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-semibold shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{isNepali ? 'फार्मेसीमा कल गर्नुहोस्' : 'Call Pharmacy'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
