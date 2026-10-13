import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Briefcase, 
  Plane, 
  HelpCircle, 
  Volume2, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  Copy,
  Check,
  RefreshCw
} from 'lucide-react';
import { Language } from '../types';

interface IstikharaModuleProps {
  language: Language;
}

export const IstikharaModule: React.FC<IstikharaModuleProps> = ({ language }) => {
  const [selectedTopic, setSelectedTopic] = useState<'nikah' | 'career' | 'travel' | 'general'>('nikah');
  const [userQuery, setUserQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const DUA_ARABIC = `اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أَوْ قَالَ: عَاجِلِ أَمْرِي وَآجِلِهِ - فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي - أَوْ قَالَ: فِي عَاجِلِ أَمْرِي وَآجِلِهِ - فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ`;

  const DUA_TRANSLITERATION = `Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min fadlikal-'azim, fa'innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa Anta 'Allamul-ghuyub. Allahumma in kunta ta'lamu anna hadhal-amra khayrun li fi deeni wa ma'ashi wa 'aqibati amri faqdurhu li wa yassirhu li thumma barik li feeh. Wa in kunta ta'lamu anna hadhal-amra sharrun li fi deeni wa ma'ashi wa 'aqibati amri fasrifhu 'anni wasrifni 'anhu, waqdur liyal-khayra haythu kana thumma ardini bih.`;

  const DUA_URDU = `اے اللہ! میں تیرے علم کی برکت سے تجھ سے بھلائی طلب کرتا ہوں اور تیری قدرت کے ذریعے تجھ سے طاقت مانگتا ہوں، اور تیرے بڑے فضل کا سوال کرتا ہوں، کیونکہ تو قدرت رکھتا ہے اور میں بے بس ہوں، تو سب کچھ جانتا ہے اور میں نہیں جانتا، اور تو تمام پوشیدہ باتوں کا جاننے والا ہے۔ اے اللہ! اگر تو جانتا ہے کہ یہ کام میرے دین، میری زندگی اور میرے انجام کے لحاظ سے میرے حق میں بہتر ہے، تو اسے میرے لیے مقدر فرما اور میرے لیے آسان فرما، پھر اس میں میرے لیے برکت ڈال دے۔ اور اگر تیرے علم میں یہ کام میرے دین، میری زندگی اور میرے انجام کے حق میں برا ہے، تو اس کو مجھ سے دور کر دے اور مجھے اس سے پھیر دے، اور میرے لیے بھلائی مقدر فرما جہاں بھی ہو، پھر مجھے اس پر راضی کر دے۔`;

  const DUA_ENGLISH = `O Allah, I seek Your counsel through Your knowledge, and I seek ability through Your power, and I ask You from Your great favor. For surely You have power and I have none, and You know and I know not, and You are the Knower of the unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood, and the outcome of my affairs, then decree it for me, facilitate it for me, and grant me barakah in it. And if You know that this matter is bad for me in my religion, my livelihood, and the outcome of my affairs, then turn it away from me and turn me away from it, and ordain for me that which is good wherever it may be, and make me pleased with it.`;

  const handleConsult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      let advice = '';
      if (selectedTopic === 'nikah') {
        advice = `استخارہ نکاح کے سلسلے میں آپ کا معاملہ شرعی لحاظ سے انتہائی اہم ہے۔ سب سے پہلے باہمی دینی رویہ اور اخلاق کو پرکھیں (جیسا کہ حدیث نبوی میں دینداری کو ترجیح دینے کا حکم ہے)۔ دو رکعت نفل استخارہ رات سونے سے قبل باوضو ادا کریں اور دعا کے وقت "هَذَا الْأَمْرَ" پر اپنے مطلوبہ رشتے کا دھیان رکھیں۔ یاد رکھیں: خواب میں کسی خاص رنگ کا آنا لازمی نہیں ہے، بلکہ دل کا اطمینان اور رشتے میں بغیر حیل و حجت کے آسانی و رکاوٹ کا دور ہونا ہی استخارہ کا اصل جواب ہوتا ہے۔`;
      } else if (selectedTopic === 'career') {
        advice = `ملازمت، کاروبار یا نوکری کی تبدیلی میں استخارہ کے ساتھ اہل علم و تجربہ کار افراد سے مشورہ (استشارہ) کرنا سنت ہے۔ آپ 3 یا 7 دن متواتر نمازِ استخارہ ادا کریں۔ اگر معاملات خود بخود حل ہونے لگیں، راستے کھلیں اور دل پر بوجھ محسوس نہ ہو تو بسم اللہ پڑھ کر قدم آگے بڑھائیں۔ اگر بے جا رکاوٹیں آئیں یا دل بدستور مضطرب رہے تو یہ اللہ کی طرف سے حفاظت کا اشارہ ہو سکتا ہے۔`;
      } else if (selectedTopic === 'travel') {
        advice = `سفر اور ہجرت یا ویزا کے فیصلے میں استخارہ اللہ کے سپرد کرنے کا بہترین ذریعہ ہے۔ دورانِ سفر رزقِ حلال اور ایمان کی حفاظت کی نیت رکھیں۔ استخارہ کے ساتھ صدقہ خیرات دیں تاکہ سفر میں سلامتی اور برکت نصیب ہو۔`;
      } else {
        advice = `کسی بھی اہم فیصلے میں دل کے تردد کو مٹانے کے لیے استخارہ مسنونہ تحفہ الٰہی ہے۔ استخارہ کے بعد انسان خسارے سے محفوظ رہتا ہے کیونکہ انجام کی باگ ڈور رب العالمین کے ہاتھ میں آ جاتی ہے۔ نماز کے بعد دل میں جو بھی جانب راحت و سکون کی ہو، اس کو اختیار فرمائیں۔`;
      }

      setAnalysisResult(advice);
      setIsAnalyzing(false);
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(DUA_ARABIC);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const playSynthesizedDua = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(DUA_ARABIC);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Audio playback is not supported on this browser.');
    }
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Module Title Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <span>🤲</span>
          <span>SUNNAH ISTIKHARA &amp; DECISION GUIDANCE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          AI ISTIKHARA &amp; DIVINE DECISION MAKING
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Seek Allah’s counsel and barakah for Marriage &amp; Nikah, Career, Business, and Major Decisions with authentic Sunnah prayer guidance.
        </p>
      </div>

      {/* Slide 5 Categories Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 'nikah', label: 'Marriage & Nikah', icon: '💍', desc: 'Life Partner Match' },
          { id: 'career', label: 'Career & Business', icon: '💼', desc: 'Job Deals & Growth' },
          { id: 'travel', label: 'Travel & Relocation', icon: '✈️', desc: 'Foreign Visa & Moves' },
          { id: 'general', label: 'Major Life Choice', icon: '🌟', desc: 'Education & Assets' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedTopic(tab.id as any);
              setAnalysisResult(null);
            }}
            className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
              selectedTopic === tab.id
                ? 'bg-amber-500/15 border-amber-400 text-white shadow-md shadow-amber-500/10'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-2xl mb-2">{tab.icon}</div>
            <div>
              <div className="font-bold text-sm text-white">{tab.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{tab.desc}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Interactive AI Istikhara Query Assistant */}
      <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-lg">
              ✨
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                Seek Istikhara Guidance for {selectedTopic.toUpperCase()}
              </h2>
              <p className="text-xs text-slate-400">
                Describe your current situation, options, or doubts for tailored Islamic advice
              </p>
            </div>
          </div>
          <span className="text-xs font-arabic text-amber-400 font-semibold hidden sm:inline">
            استخارہ و استشارہ
          </span>
        </div>

        <form onSubmit={handleConsult} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Your Question or Dilemma (سوال یا صورتحال درج کریں):
            </label>
            <textarea
              rows={3}
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder={
                selectedTopic === 'nikah'
                  ? 'E.g., I have received a marriage proposal from a family, but I am confused about their lifestyle and distant city. How should I perform Istikhara and judge the outcome?'
                  : selectedTopic === 'career'
                  ? 'E.g., I have an offer to switch to a new firm with higher salary but more risk. Seeking divine clarity.'
                  : 'Enter your question here in Urdu, English or Hindi...'
              }
              className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isAnalyzing || !userQuery.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 disabled:opacity-50 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Consulting Scholarly Wisdom...</span>
                </>
              ) : (
                <>
                  <span>🤲</span>
                  <span>Get Istikhara Clarity</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Result advice box */}
        {analysisResult && (
          <div className="mt-6 p-5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-slate-200 space-y-3 animate-fadeIn">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Scholarly Istikhara Clarity &amp; Action Plan</span>
            </div>
            <p className="text-sm leading-relaxed font-arabic text-right text-amber-100 text-base">
              {analysisResult}
            </p>
            <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Now, follow the authentic Sunnah prayer method detailed below.</span>
            </div>
          </div>
        )}
      </div>

      {/* Step-by-Step Prayer Method (Slide 5) */}
      <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
        <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📖</span> Step-by-Step Sunnah Istikhara Method
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              According to Sahih Al-Bukhari (Narrated by Jabir ibn Abdullah RA)
            </p>
          </div>
          <span className="text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold self-start sm:self-auto">
            100% Authentic Sunnah
          </span>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-sm text-white">Pure Wudu &amp; Intention</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Perform fresh ablution (وضو) and make pure intention in your heart to seek Allah's counsel for your matter.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-sm text-white">2 Rak'at Nafl Prayer</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pray two voluntary rak'ahs. It is recommended to recite Surah Al-Kafirun in 1st rak'ah and Surah Al-Ikhlas in 2nd.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-sm text-white">Recite Dua-e-Istikhara</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              After Salaam, praise Allah, send Darood on Prophet Muhammad (SAW), and recite the prescribed Dua with devotion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-bold text-sm text-white">Observe Heart &amp; Ease</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sleep with wudu or proceed with decisions. Whatever path opens with ease and peace is Allah's chosen answer.
            </p>
          </div>
        </div>

        {/* Dua Box with Audio, Arabic and Translations */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0c1933] to-[#070e1e] border border-amber-400/40 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                The Sacred Prophetic Words
              </span>
              <h3 className="text-lg font-bold text-white font-serif-title">
                DUA-E-ISTIKHARA (دعائے استخارہ)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={playSynthesizedDua}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  isPlayingAudio
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>{isPlayingAudio ? 'Stop Recitation' : 'Play Audio Recitation'}</span>
              </button>
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Arabic'}</span>
              </button>
            </div>
          </div>

          {/* Arabic Text with Vocalization */}
          <div className="p-6 rounded-xl bg-slate-950/70 border border-amber-500/20">
            <p className="font-arabic text-xl sm:text-2xl leading-loose text-right text-amber-200 select-all" dir="rtl">
              {DUA_ARABIC}
            </p>
          </div>

          {/* Transliteration */}
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase text-slate-400">Transliteration:</div>
            <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
              {DUA_TRANSLITERATION}
            </p>
          </div>

          {/* Urdu Translation */}
          <div className="space-y-1 pt-2 border-t border-slate-800">
            <div className="text-xs font-bold uppercase text-amber-400 font-arabic text-right">
              اردو ترجمہ (مفہوم):
            </div>
            <p className="text-sm font-arabic text-right leading-relaxed text-slate-200" dir="rtl">
              {DUA_URDU}
            </p>
          </div>

          {/* English Translation */}
          <div className="space-y-1 pt-2 border-t border-slate-800">
            <div className="text-xs font-bold uppercase text-slate-400">English Translation:</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {DUA_ENGLISH}
            </p>
          </div>
        </div>

        {/* Authentic Clarifications: Myths vs Sunnah */}
        <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
          <div className="text-sm font-bold text-amber-300 flex items-center gap-2">
            <span>💡</span> Common Myth vs Authentic Sunnah Clarification
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Many people believe that you MUST see a green or white dream to know the answer. In authentic Hadith scholarship, seeing a dream is <strong>not a requirement</strong> of Istikhara. The true signs of Istikhara are feelings of inner peace, obstacles clearing away naturally, or an unburdened decision taking place.
          </p>
        </div>

      </div>

    </div>
  );
};
