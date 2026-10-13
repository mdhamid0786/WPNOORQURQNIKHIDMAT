import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Moon, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  Send,
  Eye,
  Filter
} from 'lucide-react';
import { DREAMS_DATA } from '../data/dreamsData';
import { DreamItem, Language } from '../types';

interface DreamInterpretationModuleProps {
  language: Language;
}

export const DreamInterpretationModule: React.FC<DreamInterpretationModuleProps> = ({ language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [customDreamText, setCustomDreamText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customAnalysis, setCustomAnalysis] = useState<{
    meaning: string;
    ibnSirinQuote: string;
    isGood: boolean;
    remedy: string;
  } | null>(null);

  const categories = ['All', 'Spiritual', 'Nature', 'Creatures', 'Life Events', 'Objects'];

  // Filtered dictionary dreams
  const filteredDreams = useMemo(() => {
    return DREAMS_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesText = 
        item.symbol.toLowerCase().includes(q) ||
        item.symbolUrdu.includes(q) ||
        item.generalMeaning.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q));
      return matchesCat && matchesText;
    });
  }, [searchQuery, selectedCategory]);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDreamText.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const q = customDreamText.toLowerCase();
      let matchedMeaning = '';
      let quote = '';
      let isGood = true;
      let remedy = '';

      if (q.includes('water') || q.includes('pani') || q.includes('river') || q.includes('dariya')) {
        matchedMeaning = 'خواب میں پانی دیکھنا عموماً رزقِ حلال، علم اور پاکیزہ زندگی کی علامت ہے۔ صاف پانی خیر و برکت ہے جبکہ گدلا پانی عارضی آزمائش کا عندیہ دیتا ہے۔';
        quote = 'قال ابن سيرين: الماء الصافي حياة طيبة ورزق مبارك.';
        isGood = true;
        remedy = 'اللہ کا شکر ادا کریں اور نماز کے بعد سجدہ شکر بجا لائیں۔';
      } else if (q.includes('snake') || q.includes('saanp') || q.includes('bichhu') || q.includes('scorpio')) {
        matchedMeaning = 'سانپ کا خواب میں آنا پوشیدہ حاسد یا دشمن کی طرف اشارہ ہے۔ اگر سانپ کو قابو کر لیا یا مار دیا تو باطل پر فتح کی بشارت ہے۔';
        quote = 'قال ابن سيرين: الحية عدو ذو مكر وكيد، وقتلها ظفر به.';
        isGood = false;
        remedy = 'آیت الکرسی اور چاروں قل کا حصار کریں اور کچھ صدقہ نکالیں۔';
      } else if (q.includes('gold') || q.includes('sona') || q.includes('money') || q.includes('paisa')) {
        matchedMeaning = 'خواتین کے لیے سونا باعثِ مسرت و عزت ہے۔ مرد کے لیے یہ ذمہ داریوں کا بوجھ ہو سکتا ہے۔ چاندی دیکھنا زیادہ پرامن اور خالص مانا گیا ہے۔';
        quote = 'الذهب للنساء نعمة وزينة وللرجال هم أو دَيْن إلا أن يكون هبة.';
        isGood = true;
        remedy = 'اپنے مال کی پاکیزگی کے لیے زکوٰۃ و صدقات کی پابندی کریں۔';
      } else if (q.includes('dead') || q.includes('marhoom') || q.includes('grave') || q.includes('qabar')) {
        matchedMeaning = 'فوت شدہ بزرگ یا والدین کو اچھے حال میں دیکھنا ان کی مغفرت کی خوشخبری ہے۔ اگر وہ پریشان ہوں تو وہ آپ سے دعا اور ایصالِ ثواب کے طلبگار ہیں۔';
        quote = 'رؤية الميت على هيئة حسنة تدل على حسن حاله عند ربه.';
        isGood = true;
        remedy = 'ان کے لیے سورہ یٰسین پڑھ کر ایصالِ ثواب کریں اور غریبوں کو کھانا کھلائیں۔';
      } else if (q.includes('kaaba') || q.includes('namaz') || q.includes('masjid') || q.includes('quran')) {
        matchedMeaning = 'مقدس مقامات دیکھنا سچی توبہ قبول ہونے، حج و عمرہ کی سعادت اور دونوں جہانوں میں امن و سلامتی کی واضح علامت ہے۔';
        quote = 'رؤية الكعبة أمان من الخوف وبشارة بالحج والهدى.';
        isGood = true;
        remedy = 'شکرانے کے نوافل ادا کریں اور احکامِ الٰہی پر استقامت مانگیں۔';
      } else {
        matchedMeaning = 'آپ کے خواب کے عناصر ابن سیرین کی تعبیرات کے مطابق مثبت تبدیلی، نئے دور کے آغاز اور نیت کی سچائی کی طرف اشارہ کرتے ہیں۔ اپنے ارادوں کو نیک رکھیں اور رب پر بھروسہ رکھیں۔';
        quote = 'الرؤيا الصالحة جزء من ستة وأربعين جزءاً من النبوة.';
        isGood = true;
        remedy = 'سونے سے قبل باوضو رہیں اور آیت الکرسی پڑھ کر سوئیں۔';
      }

      setCustomAnalysis({
        meaning: matchedMeaning,
        ibnSirinQuote: quote,
        isGood,
        remedy
      });
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <span>🌙</span>
          <span>IBN SIRIN CLASSICAL DREAM SCIENCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          KHWABON KI TABEER (خوابوں کی تعبیر)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Instant Islamic dream analysis based on authentic classical traditions and Allama Ibn Sirin dream science in Urdu, Hindi &amp; English.
        </p>
      </div>

      {/* Slide 6: Instant AI Dream Interpreter Form */}
      <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg">
              🔮
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Interpret Your Dream with AI Scholar (خواب کی تعبیر پوچھیں)
              </h2>
              <p className="text-xs text-slate-400">
                Type what you saw in your dream (water, flying, snake, gold, relative, Kaaba...)
              </p>
            </div>
          </div>
          <span className="text-xs font-arabic text-amber-400 font-semibold hidden sm:inline">
            علم تعبیر الرؤیا
          </span>
        </div>

        <form onSubmit={handleCustomSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Describe your dream in detail (خواب کے حالات و تفصیل بیان کریں):
            </label>
            <textarea
              rows={3}
              value={customDreamText}
              onChange={(e) => setCustomDreamText(e.target.value)}
              placeholder="مثال: میں نے خواب میں دیکھا کہ میں ایک خوبصورت دریا کے کنارے کھڑا ہوں اور صاف پانی پی رہا ہوں..."
              className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Quick dream shortcuts */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Tags:</span>
              {['Water/Pani', 'Snake/Saanp', 'Moon/Chand', 'Gold/Sona', 'Holy Kaaba', 'Relative/Marhoom'].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => setCustomDreamText(`I saw ${tag} in my dream.`)}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px]"
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={isAnalyzing || !customDreamText.trim()}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 disabled:opacity-50 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all ml-auto"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing Classical Texts...</span>
                </>
              ) : (
                <>
                  <span>🌙</span>
                  <span>Interpret Dream</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Custom Analysis Display */}
        {customAnalysis && (
          <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#071329] border border-cyan-500/40 text-slate-200 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 font-bold text-sm text-cyan-300">
                <span>📖</span>
                <span>Allama Ibn Sirin Islamic Tabeer</span>
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                customAnalysis.isGood 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {customAnalysis.isGood ? 'Auspicious Sign (بشارت و خیر)' : 'Cautionary Sign (ہدایت و توبہ)'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <p className="text-base font-arabic leading-relaxed text-right text-amber-100" dir="rtl">
                {customAnalysis.meaning}
              </p>
            </div>

            <div className="text-xs text-slate-400 italic font-serif">
              Classical Reference: {customAnalysis.ibnSirinQuote}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-start gap-2 text-xs text-emerald-300">
              <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
              <span><strong>Spiritual Action / وظیفہ:</strong> {customAnalysis.remedy}</span>
            </div>
          </div>
        )}
      </div>

      {/* Classical Dream Dictionary Search & Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📚</span> Classical Dream Dictionary (مستند تعبیرات کی ڈکشنری)
            </h2>
            <p className="text-xs text-slate-400">
              Search by symbol or filter by category to read authentic Ibn Sirin principles
            </p>
          </div>

          {/* Search Box */}
          <div className="relative sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dream symbol (e.g. water, snake)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dream Items Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDreams.map((item) => (
            <div
              key={item.id}
              className="bg-[#091326] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 space-y-3 transition-all hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-white flex items-center gap-1.5">
                      {item.symbol}
                    </h3>
                    <p className="text-xs text-cyan-400 font-arabic mt-0.5" dir="rtl">
                      {item.symbolUrdu}
                    </p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase ${
                    item.goodSign 
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                  }`}>
                    {item.goodSign ? 'Good Omen' : 'Alert'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.generalMeaning}
                </p>

                <div className="mt-3 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                  <p className="text-xs font-arabic leading-relaxed text-right text-amber-200/90" dir="rtl">
                    {item.ibnSirinInterpretation}
                  </p>
                </div>
              </div>

              {item.spiritualRemedy && (
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="text-amber-400 font-semibold">وظیفہ:</span>
                  <span>{item.spiritualRemedy}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prophetic Sunnah Etiquette for Dreams */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-[#071328] border border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <span>✨</span> Sunnah Etiquette for Seeing Dreams (خواب دیکھنے کے نبوی آداب)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
            <span className="font-bold text-emerald-400 block mb-1">When Seeing a Good Dream (رؤیا صالحہ):</span>
            Praise Allah (say Al-Hamdulillah) and share it only with those you love and trust who will wish you well.
          </div>
          <div className="p-3 bg-slate-950/50 rounded-lg border border-slate-800">
            <span className="font-bold text-amber-400 block mb-1">When Seeing a Troubling Dream (حلم شیطانی):</span>
            Spit dryly three times to your left, seek refuge in Allah from Satan (recite Ta'awwuz), do not mention it to anyone, and change your sleeping side.
          </div>
        </div>
      </div>

    </div>
  );
};
