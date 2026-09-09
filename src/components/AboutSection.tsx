import React from 'react';
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Users,
  Compass,
} from 'lucide-react';
import { Language } from '../types';
import aboutImg from '../assets/images/pharmacy_counsel_1788014263212.jpg';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const pillars = [
    {
      en: 'Professional pharmacy service',
      ne: 'व्यावसायिक फार्मेसी सेवा',
      descEn: 'Strict adherence to pharmaceutical standards & accurate handling.',
      descNe: 'फार्मेसीका उच्चतम मापदण्ड र सतर्कतापूर्वक औषधि व्यवस्थापन।',
      icon: Stethoscope,
    },
    {
      en: 'Patient-centered care',
      ne: 'बिरामी–केन्द्रित सेवा',
      descEn: 'Empathetic listening and tailored medication understanding.',
      descNe: 'बिरामीको कुरा ध्यानपूर्वक सुन्ने र आत्मीय हेरचाह।',
      icon: HeartHandshake,
    },
    {
      en: 'Quality and genuine medicines',
      ne: 'गुणस्तरीय तथा आधिकारिक औषधि',
      descEn: '100% authentic medicines sourced strictly from trusted channels.',
      descNe: 'आधिकारिक र गुणस्तर प्रमाणित स्रोतबाट मात्र प्राप्त औषधिहरू।',
      icon: ShieldCheck,
    },
    {
      en: 'Medication guidance',
      ne: 'औषधिसम्बन्धी सही मार्गदर्शन',
      descEn: 'Clear instructions regarding dosage, timing, and storage.',
      descNe: 'औषधिको मात्रा, समय र उचित भण्डारणबारे स्पष्ट जानकारी।',
      icon: Compass,
    },
    {
      en: 'Community healthcare',
      ne: 'सामुदायिक स्वास्थ्य प्रवर्द्धन',
      descEn: 'Active support for local residents across Barju & Amahi Belha.',
      descNe: 'बर्जु र अमही बेल्हाका बासिन्दाहरूको स्वास्थ्यमा निरन्तर सहयोग।',
      icon: Users,
    },
    {
      en: 'Responsible medicine use',
      ne: 'जिम्मेवार तथा विवेकपूर्ण औषधि प्रयोग',
      descEn: 'Advocating rational usage to prevent drug misuse & resistance.',
      descNe: 'औषधिको दुरुपयोग र एन्टिबायोटिक प्रतिरोध रोक्न विवेकपूर्ण प्रयोग।',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>{isNepali ? 'हाम्रो परिचय' : 'About Optima Healthcare Pharmacy'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali
              ? 'अप्टिमा हेल्थकेयर फार्मेसीको बारेमा'
              : 'About Optima Healthcare Pharmacy'}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-emerald-800 font-semibold font-nepali">
            {isNepali
              ? '“हेरचाह, करुणा र समुदायप्रति समर्पित”'
              : '“Committed to Care, Compassion & Community”'}
          </p>
        </div>

        {/* Two-Column Grid: Text & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-600/10 to-teal-500/10 rounded-3xl transform rotate-1"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
                <img
                  src={aboutImg}
                  alt={
                    isNepali
                      ? 'अप्टिमा हेल्थकेयर फार्मेसीमा बिरामी परामर्श र औषधि मार्गदर्शन'
                      : 'Pharmacist providing patient counseling and medication guidance at Optima Healthcare Pharmacy'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Experience Callout */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md">
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    {isNepali ? 'व्यावसायिक अनुभव' : 'Professional Experience'}
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {isNepali
                      ? 'अस्पताल तथा सामुदायिक फार्मेसी सेवाको प्रत्यक्ष कार्य–अनुभव'
                      : 'Hands-on experience in hospital and community pharmacy services'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Pillars Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="prose prose-slate max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {isNepali
                  ? 'अप्टिमा हेल्थकेयर फार्मेसी बर्जु र आसपासका क्षेत्रका सर्वसाधारणलाई समर्पित एक भरपर्दो सामुदायिक फार्मेसी हो। अस्पताल तथा सामुदायिक फार्मेसी सेवाको प्रत्यक्ष कार्य–अनुभवका साथ हामी औषधिहरूको सुरक्षित, प्रभावकारी र विवेकपूर्ण प्रयोग सुनिश्चित गर्न पूर्ण रूपमा प्रतिबद्ध छौं।'
                  : 'Optima Healthcare Pharmacy is a community-focused pharmacy serving the local population of Barju and surrounding areas. With extensive hands-on experience in hospital and community pharmacy services, we are committed to ensuring the safe, effective and rational use of medicines.'}
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>{isNepali ? 'हाम्रा मुख्य आधारहरू (Our Core Pillars)' : 'Our Core Pillars'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/40 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {isNepali ? pillar.ne : pillar.en}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                          {isNepali ? pillar.descNe : pillar.descEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom summary highlight note */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-emerald-950">
                {isNepali
                  ? 'हाम्रो उद्देश्य केवल औषधि बिक्री गर्नु मात्र नभई, बिरामीको समग्र स्वास्थ्य र सुरक्षालाई प्राथमिकता दिनु हो।'
                  : 'Our goal goes beyond dispensing: we prioritize patient safety, clear understanding, and rational medicine therapy.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
