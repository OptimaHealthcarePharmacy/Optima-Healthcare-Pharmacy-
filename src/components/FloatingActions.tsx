import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/translations';

interface FloatingActionsProps {
  lang: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ lang }) => {
  const isNepali = lang === 'ne';
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="floating-scroll-top"
          type="button"
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-5 h-5 text-slate-600" />
        </button>
      )}

      {/* Floating WhatsApp / Message Button */}
      <a
        href={`https://wa.me/${SITE_INFO.whatsappRaw}?text=${encodeURIComponent(
          isNepali
            ? 'नमस्ते अप्टिमा हेल्थकेयर फार्मेसी, मलाई औषधिसम्बन्धी सोधपुछ गर्नु थियो।'
            : 'Namaste Optima Healthcare Pharmacy, I have an inquiry regarding medicines/counseling.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-emerald-500/50"
        aria-label="Chat on WhatsApp with Optima Healthcare Pharmacy"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="hidden sm:inline text-xs font-bold">
          {isNepali ? 'ह्वाट्सएप' : 'WhatsApp'}
        </span>
      </a>

      {/* Dual Call Popup Menu */}
      {showCallOptions && (
        <div
          id="floating-call-menu"
          className="bg-white rounded-2xl p-3 shadow-2xl border border-emerald-200 flex flex-col gap-2 min-w-[210px] animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="flex items-center justify-between pb-1 border-b border-slate-100 text-[11px] font-semibold text-slate-500">
            <span>{isNepali ? 'सम्पर्क नम्बर रोज्नुहोस्' : 'Select Phone Line'}</span>
            <button
              type="button"
              onClick={() => setShowCallOptions(false)}
              className="text-slate-400 hover:text-slate-600 text-xs px-1"
            >
              ✕
            </button>
          </div>

          <a
            href={`tel:${SITE_INFO.phone1Raw}`}
            className="flex items-center justify-between px-3 py-2 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-xs text-emerald-950 font-bold transition-colors"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>9705146500</span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-200/60 px-1.5 py-0.5 rounded">
              Line 1
            </span>
          </a>

          <a
            href={`tel:${SITE_INFO.phone2Raw}`}
            className="flex items-center justify-between px-3 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs text-slate-900 font-bold transition-colors"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-700" />
              <span>9807018731</span>
            </div>
            <span className="text-[10px] font-semibold text-slate-600 bg-slate-200 px-1.5 py-0.5 rounded">
              Line 2
            </span>
          </a>
        </div>
      )}

      {/* Floating Call Button */}
      <button
        onClick={() => setShowCallOptions(!showCallOptions)}
        id="floating-call-btn"
        type="button"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-emerald-700"
        aria-label="Call Optima Healthcare Pharmacy"
      >
        <div className="relative">
          <Phone className="w-5 h-5 text-emerald-200 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <span className="text-xs sm:text-sm font-bold">
          {isNepali ? 'कल गर्नुहोस्' : 'Call Us'}
        </span>
      </button>

    </div>
  );
};
