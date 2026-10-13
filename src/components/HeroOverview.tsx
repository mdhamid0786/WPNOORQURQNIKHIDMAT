import React from 'react';
import { 
  Sparkles, 
  Moon, 
  Compass, 
  BookOpen, 
  HeartHandshake, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  Flame,
  Award
} from 'lucide-react';
import { Language } from '../types';

interface HeroOverviewProps {
  setActiveTab: (tab: string) => void;
  language: Language;
}

export const HeroOverview: React.FC<HeroOverviewProps> = ({ setActiveTab, language }) => {
  return (
    <div className="space-y-12">
      
      {/* Hero Banner (Slide 1 & Slide 2) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#0b162c] via-[#091224] to-[#050a15] border border-amber-500/25 p-8 sm:p-12 lg:p-16 shadow-2xl">
        {/* Glow backdrop effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="text-amber-400">☪</span>
            <span>VEDIC &amp; ISLAMIC FUTURE GUIDANCE SCIENCE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-title text-white">
            NOOR QURANI <span className="block text-2xl sm:text-3xl lg:text-4xl text-amber-400 font-arabic mt-2 font-normal">نورِ قرآنی — راہنمائی و حکمت</span>
          </h1>

          {/* Subtitle from Slide 1 & 2 */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            AI Vedic Astrology, Istikhara, Khwabon Ki Tabeer &amp; Ilm-ul-Buruj. Combining ancient wisdom with authentic Islamic guidance science.
          </p>

          <p className="text-sm text-amber-200/80 italic font-arabic text-base">
            "وَشَاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ" — مشورہ اور استخارہ کے ساتھ اللہ پر توکل کریں
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('istikhara')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>🤲</span>
              <span>Start AI Istikhara</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => setActiveTab('tabeer')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>🌙</span>
              <span>Analyze My Dream (Tabeer)</span>
            </button>
            <button
              onClick={() => setActiveTab('scholars')}
              className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 font-semibold text-base border border-emerald-500/40 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>👳</span>
              <span>Consult Islamic Scholars</span>
            </button>
          </div>

          {/* Quick Notice regarding Scholar Roster */}
          <div className="pt-2 text-xs text-slate-400 bg-slate-900/50 rounded-xl p-3 border border-slate-800 max-w-xl mx-auto">
            <span className="text-amber-400 font-semibold">Authentic Islamic Consultation Roster:</span> All scholars feature Muslim scholarly backgrounds (Maulana Tariq, Alimah Fatima Zahra, Mufti Zeeshan Qadri, Hakim Salman, Peer Syed Sahab, and Sheikh Roohani Razi).
          </div>
        </div>
      </section>

      {/* Slide 10: User Scale & Traction Stats */}
      <section className="bg-[#081022] rounded-2xl border border-amber-500/20 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="md:col-span-1 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="text-4xl sm:text-5xl font-black text-amber-400 font-serif-title tracking-tight">
              10M+
            </div>
            <div className="text-sm font-semibold text-slate-300 mt-1 uppercase tracking-wider">
              Total Downloads &amp; Seekers
            </div>
          </div>
          <div className="md:col-span-3 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              RAPIDLY GROWING SPIRITUAL PLATFORM
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Serving over 10 million believers and truth-seekers across India, UAE, Saudi Arabia, Pakistan, UK, and worldwide regions — providing 24/7 instant guidance grounded in authentic Sunnah, Ibn Sirin dream science, and mathematical Ilm-e-Jafar.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Halal Adherence</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Authentic Ibn Sirin Tabeer</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant 24/7 Availability</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Urdu, Hindi &amp; English</span>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3 & 4: Core Features Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-title flex items-center gap-2">
              <span className="text-amber-400">⚜</span> ISLAMIC GUIDANCE MODULES
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Explore key features designed for decision-making, dreams, destiny, and peace of mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: AI Istikhara Guidance */}
          <div 
            onClick={() => setActiveTab('istikhara')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🤲
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>AI Istikhara Guidance</span>
                <span className="text-xs text-emerald-400 font-arabic font-normal">استخارہ مسنونہ</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Guided Istikhara for Shadi/Nikah, business deals, career decisions, and major life choices. Complete step-by-step prayer method, audio/text Dua, and interpretation.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Seek Divine Clarity</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Khwabon Ki Tabeer */}
          <div 
            onClick={() => setActiveTab('tabeer')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🌙
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Khwabon Ki Tabeer</span>
                <span className="text-xs text-cyan-400 font-arabic font-normal">خوابوں کی تعبیر</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Instant Islamic dream analysis based on authentic classical traditions and Allama Ibn Sirin dream science. Interpret seeing water, snakes, moon, gold, and Kaaba.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Analyze Your Dream</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Ilm-ul-Buruj */}
          <div 
            onClick={() => setActiveTab('buruj')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                ♈
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Ilm-ul-Buruj &amp; Falnama</span>
                <span className="text-xs text-amber-400 font-arabic font-normal">علم البروج و فالنامہ</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Detailed 12 Buruj analysis (Hamal, Saur, Jauza, Saratan, Asad, Sunbula, etc.), elements (Aatish, Khaak, Baad, Aab), and Sa'at auspicious timings.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Explore Your Star &amp; Sa'at</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Specialized AI Scholars */}
          <div 
            onClick={() => setActiveTab('scholars')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                👳
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Specialized AI Scholars</span>
                <span className="text-xs text-purple-400 font-arabic font-normal">علمائے کرام مشورہ</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Consult Maulana Tariq, Alimah Fatima Zahra (Family &amp; Marriage), Mufti Zeeshan, Hakim Salman, Peer Syed Sahab, and Sheikh Roohani Razi.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Talk to Scholars</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Ilm-e-Jafar & Abjad */}
          <div 
            onClick={() => setActiveTab('abjad')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                🔢
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Ilm-e-Jafar &amp; Abjad Calculator</span>
                <span className="text-xs text-blue-400 font-arabic font-normal">حروفِ ابجد و جفر</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Calculate Abjad value of your name and mother's name (Naam Ba Khabar). Calculate marriage compatibility percentage and Asma-ul-Husna wazaif.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Calculate Name Adad</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Remedies: Wazifa & Gemstones */}
          <div 
            onClick={() => setActiveTab('wazaif')}
            className="group relative bg-[#091326] hover:bg-[#0d1a33] border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                📿
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between">
                <span>Wazifa, Duas &amp; Gemstones</span>
                <span className="text-xs text-rose-400 font-arabic font-normal">ادعیہ، وظائف و نگینے</span>
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Authentic prayers for job stress, debt, marriage hurdles, and evil eye (Nazar). Recommendations for gemstones (Aqeeq, Yaqoot, Firoza) with digital Tasbeeh.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>View Remedies &amp; Tasbeeh</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* Slide 11: Noor Qurani vs Traditional Astrology Comparison */}
      <section className="bg-gradient-to-b from-[#091329] to-[#060c1c] border border-amber-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-title">
            NOOR QURANI VS TRADITIONAL CONSULTATIONS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Why millions choose Noor Qurani for authentic, instant, and trustworthy spiritual guidance.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-amber-500/20 bg-slate-900/60 text-xs font-semibold uppercase text-amber-300">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4 text-emerald-300">Noor Qurani App (نور قرآنی)</th>
                <th className="py-3 px-4 text-slate-400">Traditional Consultations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300 text-xs sm:text-sm">
              <tr className="hover:bg-slate-800/30">
                <td className="py-3.5 px-4 font-semibold text-white">Islamic Features</td>
                <td className="py-3.5 px-4 text-emerald-300 font-medium">Istikhara, Khwab Tabeer, Ilm-e-Jafar &amp; Authentic Sunnah Duas</td>
                <td className="py-3.5 px-4 text-slate-400">Rarely available together under one roof</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3.5 px-4 font-semibold text-white">Star &amp; Buruj Guidance</td>
                <td className="py-3.5 px-4 text-emerald-300 font-medium">Instant Buruj temperament, element calculation, &amp; compatibility</td>
                <td className="py-3.5 px-4 text-slate-400">Manual charts taking 1–2 days with expensive fees</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3.5 px-4 font-semibold text-white">Availability</td>
                <td className="py-3.5 px-4 text-emerald-300 font-medium">Instant 24/7 AI Scholars guidance whenever you need clarity</td>
                <td className="py-3.5 px-4 text-slate-400">Prior appointments required with long queues</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3.5 px-4 font-semibold text-white">Languages</td>
                <td className="py-3.5 px-4 text-emerald-300 font-medium">Urdu, Hindi, English, Hinglish + Regional Arabic support</td>
                <td className="py-3.5 px-4 text-slate-400">Severe language and geographical constraints</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="py-3.5 px-4 font-semibold text-white">Spiritual Authenticity</td>
                <td className="py-3.5 px-4 text-emerald-300 font-medium">Clear distinction between Halal Sunnah practices and superstition</td>
                <td className="py-3.5 px-4 text-slate-400">High risk of unverified advice or superstition</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
