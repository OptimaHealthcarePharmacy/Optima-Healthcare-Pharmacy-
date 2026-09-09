import React from 'react';
import { Phone, MapPin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/translations';

interface CTASectionProps {
  lang: Language;
}

export const CTASection: React.FC<CTASectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white relative overflow-hidden">
      {/* Subtle visual ambient pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" strokeDasharray="3,3" />
        </svg>
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-xs border border-white/15">
            <Clock className="w-4 h-4 text-emerald-300" />
            <span>
              {isNepali
                ? 'हप्ताको ७ दिन खुला: बिहान ७:०० – बेलुका ८:३०'
                : 'Open 7 Days a Week: 7:00 AM – 8:30 PM'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {isNepali
              ? 'औषधि वा फार्मेसी परामर्श आवश्यक छ?'
              : 'Need a Medicine or Pharmacy Guidance?'}
          </h2>

          <p className="text-lg sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
            {isNepali
              ? '“अप्टिमा हेल्थकेयर फार्मेसीलाई सम्पर्क गर्नुहोस् वा मिलन चोक, अमही बेल्हामा रहेको हाम्रो फार्मेसीमा आउनुहोस्।”'
              : '“Contact Optima Healthcare Pharmacy or visit us at Milan Chowk, Amahi Belha.”'}
          </p>

          {/* Action Buttons Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            {/* Call button 1 */}
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              id="cta-call-btn-1"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 active:bg-emerald-100 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-emerald-700" />
              <span>{isNepali ? 'कल: ९७०५१४६५००' : 'Call 9705146500'}</span>
            </a>

            {/* Call button 2 */}
            <a
              href={`tel:${SITE_INFO.phone2Raw}`}
              id="cta-call-btn-2"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-emerald-950 text-white hover:bg-black active:bg-slate-900 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl border border-emerald-500/30 transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>{isNepali ? 'कल: ९८०७०१८७३१' : 'Call 9807018731'}</span>
            </a>

            {/* Get Directions button */}
            <a
              href={SITE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-directions-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl bg-emerald-700/80 hover:bg-emerald-700 text-white font-semibold text-base sm:text-lg border border-emerald-500/40 backdrop-blur-xs shadow-md transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-emerald-300" />
              <span>{isNepali ? 'फार्मेसी दिशा' : 'Directions'}</span>
            </a>

            {/* Contact Us button */}
            <a
              href="#contact"
              id="cta-contact-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-200" />
              <span>{isNepali ? 'सम्पर्क विवरण' : 'Details'}</span>
            </a>

          </div>

          {/* Trust Footnote with DDA & PAN */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-emerald-200/90">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                {isNepali
                  ? '१००% आधिकारिक औषधि र भरपर्दो सामुदायिक सेवा'
                  : '100% Genuine Medicines & Caring Community Service'}
              </span>
            </div>
            <span className="text-emerald-400/50">•</span>
            <span className="font-mono text-emerald-300">
              DDA: <strong>{SITE_INFO.ddaNumber}</strong>
            </span>
            <span className="text-emerald-400/50">•</span>
            <span className="font-mono text-emerald-300">
              PAN: <strong>{SITE_INFO.panNumber}</strong>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
