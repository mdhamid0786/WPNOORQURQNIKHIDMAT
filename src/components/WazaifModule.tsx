import React, { useState } from 'react';
import { 
  WAZAIF_DATA, 
  GEMSTONE_GUIDE 
} from '../data/wazaifData';
import { WazifaItem, Language } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Volume2, 
  Check, 
  Copy, 
  RotateCcw, 
  Gem, 
  ShieldCheck, 
  Heart,
  Plus
} from 'lucide-react';

interface WazaifModuleProps {
  language: Language;
  onOpenTasbeehWithDua?: (title: string, count: number) => void;
}

export const WazaifModule: React.FC<WazaifModuleProps> = ({ 
  language, 
  onOpenTasbeehWithDua 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Digital Tasbeeh state in page
  const [tasbeehCount, setTasbeehCount] = useState<number>(0);
  const [targetCount, setTargetCount] = useState<number>(33);
  const [activeDhikrText, setActiveDhikrText] = useState('سُبْحَانَ اللَّهِ (SubhanAllah)');

  const categories = [
    'All',
    'Rizq & Wealth',
    'Marriage & Love',
    'Protection & Nazar',
    'Health & Shifa',
    'Peace & Anxiety'
  ];

  const filteredWazaif = WAZAIF_DATA.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleIncrement = () => {
    setTasbeehCount(prev => prev + 1);
  };

  const handleReset = () => {
    setTasbeehCount(0);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
          <span>📿</span>
          <span>MASNOON REMEDIES, WAZAIF &amp; GEMSTONES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          AUTHENTIC WAZAIF, DUAS &amp; GEMSTONES
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Quranic verses and Masnoon prayers for debt relief, rizq abundance, marriage, evil eye protection, and Sunnah gemstone guidance.
        </p>
      </div>

      {/* Interactive Digital Tasbeeh Counter Banner */}
      <div className="bg-gradient-to-r from-[#0c1833] via-[#09152a] to-[#081224] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center md:text-left max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
              <span>📿</span>
              <span>DIGITAL TASBEEH COUNTER (تسبیحِ فاطمہ)</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              {activeDhikrText}
            </h2>
            <p className="text-xs text-slate-300">
              Tap the counter button to count your daily recitation. Automatically alerts when target is reached.
            </p>

            {/* Dhikr Selector shortcuts */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {[
                { label: 'SubhanAllah (33)', text: 'سُبْحَانَ اللَّهِ', count: 33 },
                { label: 'Alhamdulillah (33)', text: 'الْحَمْدُ لِلَّهِ', count: 33 },
                { label: 'Allahu Akbar (34)', text: 'اللَّهُ أَكْبَرُ', count: 34 },
                { label: 'Astaghfirullah (100)', text: 'أَسْتَغْفِرُ اللَّهَ', count: 100 },
                { label: 'Darood Sharif (100)', text: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ', count: 100 },
              ].map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveDhikrText(`${d.text} (${d.label.split(' ')[0]})`);
                    setTargetCount(d.count);
                    setTasbeehCount(0);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs border border-slate-700/80"
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Counter Ring */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleIncrement}
              className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-1 shadow-2xl shadow-amber-500/20 active:scale-95 transition-all transform hover:scale-105 cursor-pointer flex items-center justify-center group"
            >
              <div className="w-full h-full rounded-full bg-[#070e1f] flex flex-col items-center justify-center p-2">
                <span className="text-3xl font-black text-amber-300 font-serif-title tracking-tight">
                  {tasbeehCount}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
                  Target: {targetCount}
                </span>
              </div>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
              <span className="text-xs text-emerald-400 font-semibold">
                {tasbeehCount >= targetCount ? '✨ Target Completed!' : `${targetCount - tasbeehCount} Remaining`}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Wazaif Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredWazaif.map((item) => (
          <div
            key={item.id}
            className="bg-[#091326] border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-base text-white mt-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-400 font-arabic font-semibold mt-0.5" dir="rtl">
                    {item.titleUrdu}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.id, item.arabicText)}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  title="Copy Arabic"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Arabic vocalized box */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 mt-3">
                <p className="font-arabic text-lg leading-loose text-right text-amber-200" dir="rtl">
                  {item.arabicText}
                </p>
              </div>

              {/* Transliteration */}
              <div className="text-xs text-slate-300 italic mt-3">
                {item.transliteration}
              </div>

              {/* Urdu Translation */}
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 mt-3">
                <p className="text-xs font-arabic text-right text-slate-200 leading-relaxed" dir="rtl">
                  {item.urduMeaning}
                </p>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <strong>Count:</strong> {item.recommendedCount}x
              </span>
              <span><strong>Timing:</strong> {item.bestTime.split('(')[0]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Gemstones & Ring Advice (Slide 9) */}
      <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Gem className="w-5 h-5 text-amber-400" />
              <span>Authentic Gemstone &amp; Ring Advice (نگینوں کی فضیلت)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              According to Sunnah traditions and classical Muslim mineralogy (Ibn Sina &amp; Al-Biruni)
            </p>
          </div>
          <span className="text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full self-start sm:self-auto">
            Prophetic Sunnah (سنتِ نبوی)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GEMSTONE_GUIDE.map((gem, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-amber-300">{gem.name}</h3>
                <span className="text-[10px] text-slate-400">{gem.color}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {gem.benefit}
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold pt-1">
                Best For: {gem.bestFor}
              </div>
            </div>
          ))}
        </div>

        {/* Ring wearing etiquette */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-300 space-y-1">
          <strong className="text-amber-300 block">Etiquette of Wearing a Ring in Islam:</strong>
          Men should only wear silver rings (weighing less than one mithqal / ~4.37g) on the little finger (خِنْصِر) of the right or left hand. Pure gold rings are strictly prohibited for men and allowed for women.
        </div>
      </div>

    </div>
  );
};
