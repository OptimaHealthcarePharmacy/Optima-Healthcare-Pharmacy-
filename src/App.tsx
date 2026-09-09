import { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MissionSection } from './components/MissionSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CommunityCommitmentSection } from './components/CommunityCommitmentSection';
import { ProfessionalExperienceSection } from './components/ProfessionalExperienceSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('optima_pharmacy_lang');
      if (saved === 'ne' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('optima_pharmacy_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans ${lang === 'ne' ? 'font-nepali' : ''}`}>
      {/* Sticky Navigation */}
      <Navbar lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* 4 Trust Highlights */}
        <TrustHighlights lang={lang} />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* Our Services Section */}
        <ServicesSection lang={lang} />

        {/* Our Mission Section */}
        <MissionSection lang={lang} />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection lang={lang} />

        {/* Community Commitment Section */}
        <CommunityCommitmentSection lang={lang} />

        {/* Professional Experience Section */}
        <ProfessionalExperienceSection lang={lang} />

        {/* Call to Action (CTA) Banner */}
        <CTASection lang={lang} />

        {/* Contact Section with Maps */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions lang={lang} />
    </div>
  );
}
