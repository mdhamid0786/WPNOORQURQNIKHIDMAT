import React, { useState } from 'react';
import { 
  BURUJ_DATA, 
  SAAT_HOURS 
} from '../data/burujData';
import { BurujSign, Language } from '../types';
import { 
  Sparkles, 
  Compass, 
  Clock, 
  Flame, 
  Droplets, 
  Wind, 
  Shield, 
  Calendar, 
  BookOpen, 
  RefreshCw,
  Gem
} from 'lucide-react';

interface BurujModuleProps {
  language: Language;
}

export const BurujModule: React.FC<BurujModuleProps> = ({ language }) => {
  const [selectedSign, setSelectedSign] = useState<BurujSign>(BURUJ_DATA[0]);
  const [birthDate, setBirthDate] = useState('');
  const [falnamaPrompt, setFalnamaPrompt] = useState('');
  const [falnamaResult, setFalnamaResult] = useState<{
    omen: string;
    advice: string;
    verse: string;
  } | null>(null);
  const [isConsultingFalnama, setIsConsultingFalnama] = useState(false);

  // Auto-determine Buruj by birthdate
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBirthDate(val);
    if (!val) return;

    const date = new Date(val);
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();

    let foundId = 1;
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) foundId = 1; // Hamal
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) foundId = 2; // Saur
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) foundId = 3; // Jauza
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) foundId = 4; // Saratan
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) foundId = 5; // Asad
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) foundId = 6; // Sunbula
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) foundId = 7; // Mizan
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) foundId = 8; // Aqrab
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) foundId = 9; // Qaus
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) foundId = 10; // Jadi
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) foundId = 11; // Dalw
    else foundId = 12; // Hoot

    const found = BURUJ_DATA.find(b => b.id === foundId);
    if (found) setSelectedSign(found);
  };

  const handleGenerateFalnama = (e: React.FormEvent) => {
    e.preventDefault();
    if (!falnamaPrompt.trim()) return;

    setIsConsultingFalnama(true);
    setTimeout(() => {
      const omens = [
        {
          omen: 'فالِ سعد و کشادگی (Favorable & Blessed Omen)',
          advice: 'کام شروع کرنے کا وقت مبارک ہے۔ اپنے ارادے کو پختہ رکھیں، سچائی اور دیانت کے ساتھ قدم بڑھائیں، اور صدقہ نکال کر شروعات کریں۔',
          verse: 'إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ — اگر اللہ تمہاری مدد فرمائے تو کوئی تم پر غالب نہیں آ سکتا۔'
        },
        {
          omen: 'فالِ صبر و توقف (Patience & Deliberation Omen)',
          advice: 'فیصلے میں جلد بازی نہ کریں۔ چند روز مزید غور و خوض کریں، بزرگوں سے مشورہ لیں اور نمازِ استخارہ کا اہتمام کریں۔ بعد ازاں راہیں کھلیں گی۔',
          verse: 'وَاصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ — اور صبر کیجیے، بیشک اللہ نیکی کرنے والوں کا اجر ضائع نہیں کرتا۔'
        },
        {
          omen: 'فالِ احتیاط و حفاظت (Caution & Spiritual Armor)',
          advice: 'اس معاملے میں لوگوں پر اندھا اعتماد کرنے سے گریز کریں۔ باہمی شرائط کو تحریری شکل دیں اور روزانہ آیۃ الکرسی کا حصار رکھیں۔',
          verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا خُذُوا حِذْرَكُمْ — اے ایمان والو! اپنی احتیاط اور بچاؤ کا سامان رکھو۔'
        }
      ];

      const chosen = omens[Math.floor(Math.random() * omens.length)];
      setFalnamaResult(chosen);
      setIsConsultingFalnama(false);
    }, 800);
  };

  const getElementBadgeColor = (elem: string) => {
    if (elem.includes('Fire')) return 'bg-rose-500/15 text-rose-300 border-rose-500/30';
    if (elem.includes('Earth')) return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    if (elem.includes('Air')) return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';
    return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <span>♈</span>
          <span>12 BURUJ, CELESTIAL SCIENCE &amp; FALNAMA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          ILM-UL-BURUJ (علم البروج و سیارگان)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Explore the 12 celestial Buruj constellations, classical planetary temperaments, lucky gemstones, and auspicious timings (Sa’at).
        </p>
      </div>

      {/* Date Finder Bar */}
      <div className="bg-[#091326] border border-amber-500/20 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h3 className="font-bold text-sm text-white">Find Your Islamic Buruj by Birth Date</h3>
            <p className="text-xs text-slate-400">Select your date of birth to automatically reveal your constellation</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="date"
            value={birthDate}
            onChange={handleDateChange}
            className="px-4 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          />
          {birthDate && (
            <span className="text-xs text-amber-300 font-bold whitespace-nowrap">
              Matched: {selectedSign.nameUrdu}
            </span>
          )}
        </div>
      </div>

      {/* 12 Buruj Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
        {BURUJ_DATA.map((sign) => {
          const isSelected = selectedSign.id === sign.id;
          return (
            <button
              key={sign.id}
              onClick={() => setSelectedSign(sign)}
              className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <span className="text-lg font-bold font-arabic text-amber-300">
                {sign.nameArabic}
              </span>
              <span className="text-xs font-bold text-white">{sign.name}</span>
              <span className="text-[10px] text-slate-400">{sign.dates.split(' - ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Buruj Deep Detail Card */}
      <div className="bg-gradient-to-b from-[#0b1730] to-[#070e1f] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-3xl shadow-inner text-amber-300 font-bold font-arabic">
              {selectedSign.nameArabic}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white font-serif-title">
                  {selectedSign.name}
                </h2>
                <span className="text-lg text-amber-400 font-arabic font-normal">
                  {selectedSign.nameUrdu}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Dates: {selectedSign.dates}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getElementBadgeColor(selectedSign.element)}`}>
              Element: {selectedSign.element}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Planet: {selectedSign.rulingPlanet}
            </span>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Gem className="w-3.5 h-3.5 text-amber-400" /> Lucky Gemstone (نگینہ)
            </div>
            <div className="text-sm font-bold text-amber-300">
              {selectedSign.luckyGemstone}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Lucky Day (مبارک دن)
            </div>
            <div className="text-sm font-bold text-emerald-300">
              {selectedSign.luckyDay}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Lucky Number (موافق عدد)
            </div>
            <div className="text-sm font-bold text-cyan-300">
              Number {selectedSign.luckyNumber}
            </div>
          </div>
        </div>

        {/* Personality & Spiritual Advice */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
              Temperament &amp; Character Traits (مزاج و خصوصیات):
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {selectedSign.personality}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Spiritual Prescription &amp; Dhikr (روحانی وظیفہ):
            </h4>
            <p className="text-sm font-arabic text-right text-amber-100 leading-relaxed" dir="rtl">
              {selectedSign.spiritualGuidance}
            </p>
          </div>
        </div>
      </div>

      {/* Slide 7: Auspicious Timing (Sa'at Hours) & Falnama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Planetary Hours (ساعاتِ شب و روز) */}
        <div className="bg-[#091326] border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-base text-white">Sa’at (ساعات - Auspicious Hours)</h3>
            </div>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              Current Cycle Active
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Classical timing rules for initiating projects, signing contracts, travel, and marriage.
          </p>

          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {SAAT_HOURS.map((hour, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-3 text-xs"
              >
                <div>
                  <div className="font-bold text-slate-200">{hour.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{hour.bestFor}</div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                  hour.nature.includes('Sa’ad') 
                    ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    : hour.nature.includes('Nahas')
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                    : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                }`}>
                  {hour.nature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Falnama & Spiritual Omen Generator */}
        <div className="bg-[#091326] border border-slate-800 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-base text-white">Falnama &amp; Omens (فالنامہ)</h3>
              </div>
              <span className="text-xs text-cyan-400 font-arabic font-semibold">
                فالنامہ قرآنی
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3">
              Seek spiritual contemplated guidance before starting a journey, enterprise, or new venture.
            </p>

            <form onSubmit={handleGenerateFalnama} className="mt-4 space-y-3">
              <input
                type="text"
                value={falnamaPrompt}
                onChange={(e) => setFalnamaPrompt(e.target.value)}
                placeholder="Enter your venture (e.g. buying land, new trade, foreign trip)..."
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={isConsultingFalnama || !falnamaPrompt.trim()}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 disabled:opacity-50 text-white font-bold text-xs shadow flex items-center justify-center gap-2"
              >
                {isConsultingFalnama ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Contemplating Falnama...</span>
                  </>
                ) : (
                  <>
                    <span>📖</span>
                    <span>Generate Falnama Guidance</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {falnamaResult && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2 animate-fadeIn text-xs">
              <div className="font-bold text-cyan-300">{falnamaResult.omen}</div>
              <p className="text-slate-200 leading-relaxed">{falnamaResult.advice}</p>
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-amber-200/90 font-arabic text-right" dir="rtl">
                {falnamaResult.verse}
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
