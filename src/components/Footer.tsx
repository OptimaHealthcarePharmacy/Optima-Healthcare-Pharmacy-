import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Facebook,
  Instagram,
  Heart,
} from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M10 3h4v6h6v4h-6v6h-4v-6H4V9h6V3z" fill="white" />
                  <circle cx="17.5" cy="6.5" r="2.5" fill="#a7f3d0" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                  Optima Healthcare Pharmacy
                </h3>
                <p className="text-sm font-semibold text-emerald-400 font-nepali">
                  अप्टिमा हेल्थकेयर फार्मेसी
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-300 font-medium italic">
              {isNepali ? `“${SITE_INFO.taglineNe}”` : `“${SITE_INFO.taglineEn}”`}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {isNepali
                ? 'अमही बेल्हा, बर्जुमा भरपर्दो सामुदायिक फार्मेसी सेवा। गुणस्तरीय औषधि, बिरामी परामर्श तथा जिम्मेवार औषधि प्रयोगका लागि समर्पित।'
                : 'Dedicated to genuine medicines, patient counseling, and rational medicine use in Barju, Sunsari, Nepal.'}
            </p>

            {/* Registration Box */}
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 font-medium">{isNepali ? 'DDA दर्ता नं:' : 'DDA Reg No:'}</span>
                <span className="font-mono font-bold text-emerald-400">{SITE_INFO.ddaNumber}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 font-medium">{isNepali ? 'स्थायी लेखा नं (PAN):' : 'PAN No:'}</span>
                <span className="font-mono font-bold text-emerald-400">{SITE_INFO.panNumber}</span>
              </div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-medium">
                {isNepali ? 'सामाजिक सञ्जाल:' : 'Connect with Us:'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  title="Facebook Page (Optima Healthcare Pharmacy)"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-700"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  title="Instagram (Optima Healthcare Pharmacy)"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-700"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {isNepali ? 'द्रुत लिङ्कहरू' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'गृहपृष्ठ (Home)' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'हाम्रो बारेमा (About Us)' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'हाम्रा सेवाहरू (Services)' : 'Our Services'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'हामीलाई किन रोज्ने?' : 'Why Choose Us'}
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'सामुदायिक प्रतिबद्धता' : 'Community Commitment'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {isNepali ? 'सम्पर्क विवरण' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {isNepali ? 'सम्पर्क तथा ठेगाना' : 'Contact Details'}
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{isNepali ? SITE_INFO.addressNe : SITE_INFO.addressEn}</span>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${SITE_INFO.phone1Raw}`}
                    className="font-bold text-white hover:text-emerald-400 font-mono transition-colors"
                  >
                    9705146500
                  </a>
                  <span className="text-slate-500">•</span>
                  <a
                    href={`tel:${SITE_INFO.phone2Raw}`}
                    className="font-bold text-white hover:text-emerald-400 font-mono transition-colors"
                  >
                    9807018731
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{isNepali ? SITE_INFO.openingHoursNe : SITE_INFO.openingHoursEn}</span>
            </div>

            <div className="pt-2">
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-300 border border-slate-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isNepali ? 'गुगल नक्सामा खोल्नुहोस्' : 'Open in Google Maps'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Row */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-300 block mb-0.5">
              {isNepali ? 'चिकित्सीय तथा कानुनी अस्वीकरण (Medical Disclaimer):' : 'Medical Disclaimer:'}
            </span>
            <p>{isNepali ? SITE_INFO.disclaimerNe : SITE_INFO.disclaimerEn}</p>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>{SITE_INFO.copyright}</p>
          <div className="flex items-center gap-1">
            <span>{isNepali ? 'सेवा र समर्पणसहित' : 'Committed to Care with'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>{isNepali ? 'बर्जु, सुनसरी' : 'in Barju, Sunsari, Nepal'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
