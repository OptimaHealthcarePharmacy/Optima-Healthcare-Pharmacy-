import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { Language } from '../types';
import { SITE_INFO } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
    inquiryType: 'general',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate clean WhatsApp message
    const msg = encodeURIComponent(
      `Namaste Optima Healthcare Pharmacy,\nName: ${formState.name}\nPhone: ${formState.phone}\nInquiry Type: ${formState.inquiryType}\nMessage: ${formState.message}`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsappRaw}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/60 mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isNepali ? 'हाम्रो ठेगाना र सम्पर्क' : 'Location & Contacts'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isNepali ? 'सम्पर्क गर्नुहोस् (Get in Touch)' : 'Get in Touch'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {isNepali
              ? 'हामी तपाईंलाई सहयोग गर्न सधैं तत्पर छौं। फोन गर्नुहोस् वा फार्मेसीमा आउनुहोस्।'
              : 'We are here to assist you with genuine medicines, counseling and guidance.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Contact Details & Quick Inquiry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/90 flex items-center justify-center shrink-0 text-emerald-800">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {isNepali ? '📍 फार्मेसीको ठेगाना' : '📍 Pharmacy Address'}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800">
                    {isNepali ? SITE_INFO.addressNe : SITE_INFO.addressEn}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isNepali ? 'मिलन चोकको मुख्य सडक नजिक' : 'Near Main Road, Milan Chowk'}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/90 flex items-center justify-center shrink-0 text-emerald-800">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="space-y-2 w-full">
                  <h3 className="text-base font-bold text-slate-900">
                    {isNepali ? '📞 सम्पर्क फोन नम्बरहरू' : '📞 Contact Numbers'}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                      <div>
                        <span className="text-[11px] font-semibold text-emerald-800 block">
                          {isNepali ? 'मुख्य लाइन (Call / WhatsApp):' : 'Primary (Call & WhatsApp):'}
                        </span>
                        <a
                          href={`tel:${SITE_INFO.phone1Raw}`}
                          className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-emerald-800 font-mono transition-colors"
                        >
                          9705146500
                        </a>
                      </div>
                      <a
                        href={`tel:${SITE_INFO.phone1Raw}`}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {isNepali ? 'कल' : 'Call'}
                      </a>
                    </div>

                    <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                      <div>
                        <span className="text-[11px] font-semibold text-slate-600 block">
                          {isNepali ? 'दोस्रो सम्पर्क लाइन:' : 'Secondary Line:'}
                        </span>
                        <a
                          href={`tel:${SITE_INFO.phone2Raw}`}
                          className="text-base sm:text-lg font-extrabold text-slate-900 hover:text-emerald-800 font-mono transition-colors"
                        >
                          9807018731
                        </a>
                      </div>
                      <a
                        href={`tel:${SITE_INFO.phone2Raw}`}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        {isNepali ? 'कल' : 'Call'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Registration & Legal Details Card */}
            <div className="bg-emerald-50/60 rounded-2xl p-5 sm:p-6 border border-emerald-200/80 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-700 flex items-center justify-center shrink-0 text-white shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-emerald-100" />
                </div>
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">
                      {isNepali ? 'दर्ता तथा कानुनी विवरण' : 'Official Registrations'}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-200/80 text-emerald-900 uppercase">
                      {isNepali ? 'प्रमाणित' : 'Verified'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80">
                      <span className="text-slate-500 font-medium block">
                        {isNepali ? 'औषधि व्यवस्था विभाग दर्ता नं (DDA):' : 'DDA Registration No:'}
                      </span>
                      <span className="text-sm font-extrabold text-emerald-950 font-mono tracking-wide mt-0.5 block">
                        {SITE_INFO.ddaNumber}
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-emerald-200/80">
                      <span className="text-slate-500 font-medium block">
                        {isNepali ? 'स्थायी लेखा नम्बर (PAN):' : 'PAN Number:'}
                      </span>
                      <span className="text-sm font-extrabold text-emerald-950 font-mono tracking-wide mt-0.5 block">
                        {SITE_INFO.panNumber}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-800 leading-tight">
                    {isNepali
                      ? 'नेपाल सरकारको औषधि व्यवस्था विभाग अन्तर्गत विधिवत दर्ता भएको फार्मेसी।'
                      : 'Officially registered with the Department of Drug Administration (DDA), Nepal.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/90 flex items-center justify-center shrink-0 text-emerald-800">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {isNepali ? '⏰ सेवा समय (Opening Hours)' : '⏰ Opening Hours'}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800">
                    {isNepali ? SITE_INFO.openingHoursNe : SITE_INFO.openingHoursEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    {isNepali ? 'प्रत्येक दिन निरन्तर सेवा' : 'Open Everyday'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Dual Call & Get Directions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${SITE_INFO.phone1Raw}`}
                id="contact-call-btn-1"
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>{isNepali ? 'कल: ९७०५१४६५००' : 'Call: 9705146500'}</span>
              </a>

              <a
                href={SITE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>{isNepali ? 'दिशा हेर्नुहोस्' : 'Get Directions'}</span>
              </a>
            </div>

          </div>

          {/* Map Location & Quick WhatsApp Inquiry (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Interactive Map Visualizer / Embed */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              
              <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-slate-800">
                    {isNepali
                      ? 'फार्मेसीको नक्सा (Milan Chowk, Amahi Belha)'
                      : 'Pharmacy Map Location (Milan Chowk, Amahi Belha)'}
                  </span>
                </div>
                <a
                  href={SITE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Map View Frame */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-200">
                <iframe
                  title="Optima Healthcare Pharmacy Location Map"
                  src="https://maps.google.com/maps?q=Milan+Chowk,+Amahi+Belha,+Barju,+Sunsari,+Nepal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                {/* Overlay Badge to open native directions */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-xs font-bold text-slate-900">
                    {isNepali ? 'बर्जु–०५, मिलन चोक' : 'Barju–05, Milan Chowk'}
                  </span>
                  <a
                    href={SITE_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-xs font-extrabold text-white bg-emerald-700 px-2.5 py-1 rounded-md hover:bg-emerald-800 transition-colors"
                  >
                    {isNepali ? 'नेभिगेसन' : 'Navigate'}
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Inquiry Form / Messaging Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-bold text-slate-900">
                  {isNepali ? 'छिटो सोधपुछ वा सन्देश पठाउनुहोस्' : 'Quick Inquiry / Medicine Availability'}
                </h3>
              </div>

              {submitted ? (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-bold">
                      {isNepali ? 'सन्देश पठाइयो!' : 'Inquiry Prepared!'}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {isNepali
                        ? 'हाम्रो फार्मासिस्टले तपाईंलाई शीघ्र प्रतिक्रिया दिनुहुनेछ।'
                        : 'Our pharmacist will assist you promptly.'}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {isNepali ? 'तपाईंको नाम *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={isNepali ? 'उदा. राम शर्मा' : 'e.g. Ram Sharma'}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {isNepali ? 'सम्पर्क नम्बर *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder={isNepali ? '९८...' : '9800000000'}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isNepali ? 'सोधपुछ वा औषधिको नाम' : 'Question or Medicine Name'}
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={
                        isNepali
                          ? 'औषधि उपलब्धता वा परामर्शबारे लेख्नुहोस्...'
                          : 'Inquire about medicine availability, timing, or dosage guidance...'
                      }
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl text-sm transition-colors shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isNepali ? 'ह्वाट्सएप / सन्देशमार्फत पठाउनुहोस्' : 'Send via WhatsApp / Message'}
                    </span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
