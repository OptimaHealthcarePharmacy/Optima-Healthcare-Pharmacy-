import React from 'react';
import { Heart, Users, Sparkles, HandHeart, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import communityImg from '../assets/images/community_care_1788014280746.jpg';

interface CommunityCommitmentSectionProps {
  lang: Language;
}

export const CommunityCommitmentSection: React.FC<CommunityCommitmentSectionProps> = ({ lang }) => {
  const isNepali = lang === 'ne';

  return (
    <section id="community" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual & Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide border border-emerald-200/60">
              <Heart className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>{isNepali ? 'सामुदायिक प्रतिबद्धता' : 'Social Responsibility & Care'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {isNepali ? 'हाम्रो समुदायको लागि स्वास्थ्य सेवा' : 'Healthcare for Our Community'}
            </h2>

            {/* Powerful Core Message Quote */}
            <div className="p-5 sm:p-6 bg-emerald-50/80 rounded-2xl border-l-4 border-emerald-700">
              <p className="text-lg sm:text-xl font-bold text-emerald-950 italic">
                {isNepali
                  ? '“हाम्रो विश्वास छ, स्वास्थ्य सेवा विशेषाधिकार होइन, आधारभूत अधिकार हो।”'
                  : '“We believe healthcare is a right, not a privilege.”'}
              </p>
            </div>

            {/* Supporting Content */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {isNepali
                ? 'अप्टिमा हेल्थकेयर फार्मेसी सामाजिक उत्तरदायित्व र सामुदायिक सेवाप्रति सधैं प्रतिबद्ध छ। हामी विपन्न तथा पहुँचविहीन वर्गलाई स्वास्थ्य सहयोग पुर्याउने, स्वास्थ्य सचेतना अभिवृद्धि गर्ने र अमही बेल्हा तथा वरपरका क्षेत्रका सम्पूर्ण नागरिकहरूको सुखद स्वास्थ्य र दीर्घायुमा सकारात्मक योगदान पुर्याउन समर्पित छौं।'
                : 'Optima Healthcare Pharmacy is committed to social responsibility and community service. We focus on supporting underserved populations, improving health awareness and contributing positively to the health and wellbeing of people in Amahi Belha and surrounding areas.'}
            </p>

            {/* Key Community Action Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <HandHeart className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isNepali ? 'विपन्न वर्गलाई सहुलियत' : 'Support for Underserved'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {isNepali ? 'सक्दो मानवीय सहयोग र मार्गदर्शन' : 'Assisting needy patients wherever possible'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <Users className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isNepali ? 'गाउँले सचेतना कार्यक्रम' : 'Grassroots Health Education'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {isNepali ? 'स्वच्छता र औषधि प्रयोगबारे नियमित चेतना' : 'Promoting hygiene & medicine safety'}
                  </p>
                </div>
              </div>
            </div>

            {/* Prominent Callout Banner */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                    {isNepali ? 'हाम्रो मूल मन्त्र' : 'Our Guiding Motto'}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white leading-tight">
                    {isNepali
                      ? 'मानिसहरूको हेरचाह। समुदायको सेवा। राम्रो स्वास्थ्य प्रवर्द्धन।'
                      : 'Care for People. Serve the Community. Promote Better Health.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600 to-teal-600 rounded-3xl opacity-15 blur-lg"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src={communityImg}
                  alt={
                    isNepali
                      ? 'अमही बेल्हामा सामुदायिक स्वास्थ्य सेवा र हेरचाह'
                      : 'Community healthcare service in Amahi Belha, Sunsari'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center hover:scale-105 transition-transform duration-500"
                />

                {/* Micro Stat Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-900">
                    {isNepali ? 'अमही बेल्हा, बर्जु–०५' : 'Amahi Belha, Barju–05'}
                  </span>
                </div>

                {/* Bottom pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-md">
                  <p className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>{isNepali ? 'स्थानिय बासिन्दाको साथमा' : 'Standing with our local community'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
