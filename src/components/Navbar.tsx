import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe, MapPin } from 'lucide-react';
import { Language } from '../types';
import { NAV_ITEMS, SITE_INFO } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNepali = lang === 'ne';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top micro banner on desktop */}
      <div className="hidden lg:block border-b border-slate-100 pb-1.5 mb-1.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {isNepali ? 'खुला छ: बिहान ७:०० – बेलुका ८:३०' : 'Open: 7:00 AM – 8:30 PM (7 Days)'}
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {isNepali ? SITE_INFO.addressNe : SITE_INFO.addressEn}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">
              <strong className="text-slate-700">DDA Reg:</strong> {SITE_INFO.ddaNumber}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">
              <strong className="text-slate-700">PAN:</strong> {SITE_INFO.panNumber}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">
              {isNepali ? 'सम्पर्क:' : 'Call:'}
            </span>
            <a
              href={`tel:${SITE_INFO.phone1Raw}`}
              className="font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              9705146500
            </a>
            <span className="text-slate-300">/</span>
            <a
              href={`tel:${SITE_INFO.phone2Raw}`}
              className="font-bold text-emerald-800 hover:text-emerald-950 transition-colors"
            >
              9807018731
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo Area */}
        <a
          href="#home"
          id="nav-brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
            {/* Custom Healthcare Medical Cross Symbol with Rx Leaf */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3h4v6h6v4h-6v6h-4v-6H4V9h6V3z" fill="white" />
              <circle cx="17.5" cy="6.5" r="2.5" fill="#a7f3d0" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight">
              Optima Healthcare Pharmacy
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-800 leading-tight">
              अप्टिमा हेल्थकेयर फार्मेसी
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-800 bg-emerald-50/80 font-semibold'
                    : 'text-slate-600 hover:text-emerald-800 hover:bg-slate-50'
                }`}
              >
                {isNepali ? item.labelNe : item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Area (Language toggle + Call button) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <div
            id="nav-lang-toggle"
            className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200/80"
          >
            <button
              onClick={() => onToggleLang('en')}
              id="lang-btn-en"
              type="button"
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                lang === 'en'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onToggleLang('ne')}
              id="lang-btn-ne"
              type="button"
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                lang === 'ne'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              नेपाली
            </button>
          </div>

          {/* Prominent Call Now button */}
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            id="nav-call-btn-desktop"
            className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-150"
          >
            <Phone className="w-4 h-4 text-emerald-200 animate-pulse" />
            <span>{isNepali ? 'फोन गर्नुहोस्' : 'Call Now'}</span>
          </a>
        </div>

        {/* Mobile controls: Lang toggle + Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onToggleLang(lang === 'en' ? 'ne' : 'en')}
            id="mobile-lang-quick-switch"
            type="button"
            className="flex items-center gap-1 text-xs font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200"
          >
            <Globe className="w-3 h-3 text-emerald-700" />
            <span>{lang === 'en' ? 'नेपाली' : 'EN'}</span>
          </button>

          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            id="mobile-call-quick-btn"
            className="p-2 bg-emerald-700 text-white rounded-lg active:scale-95 transition-transform"
            aria-label="Call Optima Healthcare Pharmacy"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            type="button"
            className="p-2 text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200 mt-2"
        >
          <div className="flex flex-col space-y-1 mb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-emerald-800 bg-emerald-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{isNepali ? item.labelNe : item.label}</span>
                <span className="text-slate-300 text-xs font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl">
              <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-700" />
                {isNepali ? 'भाषा छनौट गर्नुहोस्:' : 'Select Language:'}
              </span>
              <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    lang === 'en'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('ne')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    lang === 'ne'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  नेपाली
                </button>
              </div>
            </div>

            {/* Regulatory & Phone numbers in mobile drawer */}
            <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/70 text-xs text-slate-700 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">{isNepali ? 'DDA दर्ता नं:' : 'DDA Reg No:'}</span>
                <span className="font-mono font-bold text-emerald-900">{SITE_INFO.ddaNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">{isNepali ? 'प्यान नं (PAN):' : 'PAN No:'}</span>
                <span className="font-mono font-bold text-emerald-900">{SITE_INFO.panNumber}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SITE_INFO.phone1Raw}`}
                id="mobile-menu-call-1"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center p-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-center shadow-xs"
              >
                <div className="flex items-center gap-1 font-semibold text-xs text-emerald-100">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isNepali ? 'लाइन १' : 'Line 1'}</span>
                </div>
                <span className="text-xs font-bold font-mono mt-0.5">9705146500</span>
              </a>

              <a
                href={`tel:${SITE_INFO.phone2Raw}`}
                id="mobile-menu-call-2"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-center shadow-xs"
              >
                <div className="flex items-center gap-1 font-semibold text-xs text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isNepali ? 'लाइन २' : 'Line 2'}</span>
                </div>
                <span className="text-xs font-bold font-mono mt-0.5">9807018731</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
