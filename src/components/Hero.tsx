import React from 'react';
import { Phone, MapPin, MessageSquare, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/translations';
import heroImg from '../assets/images/pharmacy_hero_1788014244821.jpg';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50/50"
    >
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Location & Official Registration Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span>
                  {isNepali
                    ? '📍 बर्जु–०५, मिलन चोक, अमही बेल्हा, सुनसरी'
                    : '📍 Milan Chowk, Amahi Belha, Barju–05, Sunsari'}
                </span>
              </div>

              {/* Official DDA & PAN Verification Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-slate-800 border border-emerald-300/80 text-xs font-semibold shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>
                  <strong className="text-emerald-950 font-bold">DDA Reg:</strong> {SITE_INFO.ddaNumber}
                </span>
                <span className="text-slate-300">|</span>
                <span>
                  <strong className="text-emerald-950 font-bold">PAN:</strong> {SITE_INFO.panNumber}
                </span>
              </div>
            </div>

            {/* Main Brand Headings */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Optima Healthcare Pharmacy
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-emerald-800 font-nepali">
                अप्टिमा हेल्थकेयर फार्मेसी
              </p>
            </div>

            {/* Tagline Callout */}
            <div className="border-l-4 border-emerald-600 pl-4 py-1">
              <p className="text-lg sm:text-xl font-bold text-emerald-900 italic">
                {isNepali
                  ? `“${SITE_INFO.taglineNe}”`
                  : `“${SITE_INFO.taglineEn}”`}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {isNepali
                ? 'अमही बेल्हामा तपाईंको विश्वासिलो सामुदायिक फार्मेसी। हामी गुणस्तरीय औषधि, बिरामी परामर्श, औषधिको उचित प्रयोग र सहज स्वास्थ्य सेवा उपलब्ध गराउन पूर्ण समर्पित छौं।'
                : 'Your trusted community pharmacy in Amahi Belha, dedicated to quality medicines, patient counseling and accessible healthcare.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Call Us Button 1 */}
              <a
                href={`tel:${SITE_INFO.phone1Raw}`}
                id="hero-call-btn-1"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-800/15 hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <Phone className="w-4 h-4 text-emerald-200 animate-pulse" />
                <span>{isNepali ? 'कल: ९७०५१४६५००' : 'Call 9705146500'}</span>
              </a>

              {/* Call Us Button 2 */}
              <a
                href={`tel:${SITE_INFO.phone2Raw}`}
                id="hero-call-btn-2"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-sm sm:text-base shadow-md transition-all duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{isNepali ? 'कल: ९८०७०१८७३१' : 'Call 9807018731'}</span>
              </a>

              {/* Get Directions Button */}
              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm sm:text-base shadow-2xs hover:border-slate-400 transition-all duration-150"
              >
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>{isNepali ? 'फार्मेसी दिशा' : 'Directions'}</span>
              </a>

              {/* Contact Us Button */}
              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold text-sm sm:text-base border border-emerald-200/60 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>{isNepali ? 'सम्पर्क विवरण' : 'Details'}</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{isNepali ? '१००% आधिकारिक औषधि' : '100% Genuine Medicines'}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{isNepali ? 'बिरामी–केन्द्रित परामर्श' : 'Patient-Centered Guidance'}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{isNepali ? 'अनुभवी सेवा' : 'Experienced Care'}</span>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-3xl opacity-15 blur-lg transform -rotate-1"></div>
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
                <img
                  src={heroImg}
                  alt={
                    isNepali
                      ? 'अप्टिमा हेल्थकेयर फार्मेसी - आधुनिक र भरपर्दो सामुदायिक फार्मेसी'
                      : 'Optima Healthcare Pharmacy interior and patient care'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Photo Overlay Badge at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0">
                        <ShieldCheck className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          {isNepali ? 'समुदायको स्वास्थ्य, हाम्रो जिम्मेवारी' : 'Trusted Community Pharmacy'}
                        </p>
                        <p className="text-[11px] sm:text-xs text-emerald-700 font-medium leading-tight">
                          {isNepali ? 'अमही बेल्हा, बर्जु–०५, सुनसरी' : 'Amahi Belha, Barju–05, Sunsari'}
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-2 py-1 rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider border border-emerald-200/60">
                      {isNepali ? 'खुला छ' : 'Active Care'}
                    </span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>DDA: <strong className="text-slate-800 font-sans">{SITE_INFO.ddaNumber}</strong></span>
                    <span>PAN: <strong className="text-slate-800 font-sans">{SITE_INFO.panNumber}</strong></span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
