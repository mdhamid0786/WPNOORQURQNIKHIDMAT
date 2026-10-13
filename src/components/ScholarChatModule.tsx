import React, { useState } from 'react';
import { 
  SCHOLARS_DATA 
} from '../data/scholarsData';
import { Scholar, Language } from '../types';
import { 
  Send, 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  RefreshCw, 
  MessageSquare, 
  BookOpen, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface ScholarChatModuleProps {
  language: Language;
}

interface Message {
  id: string;
  sender: 'user' | 'scholar';
  text: string;
  timestamp: string;
}

export const ScholarChatModule: React.FC<ScholarChatModuleProps> = ({ language }) => {
  const [selectedScholar, setSelectedScholar] = useState<Scholar>(SCHOLARS_DATA[0]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initial welcome message per scholar
  const [messages, setMessages] = useState<Record<string, Message[]>>({
    'maulana-tariq': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم ورحمۃ اللہ وبرکاتہ! میں مولانا طارق ہوں۔ آپ استخارہ مسنونہ، خوابوں کی تعبیر (علامہ ابن سیرین کے اصولوں کے مطابق) یا کسی بھی روحانی و دینی الجھن کے متعلق رہنمائی حاصل فرما سکتے ہیں۔ فرمائیے، میں آپ کی کیا مدد کروں؟',
        timestamp: 'Just now'
      }
    ],
    'alimah-fatima': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم! میں عالمہ فاطمہ زہراء ہوں۔ نکاح، رشتے کے انتخاب، سسرال و ازدواجی محبت اور خاندانی سکون کے متعلق شرعی و قلبی رہنمائی کے لیے حاضر ہوں۔ اپنے سوالات بلا جھجک پوچھیے۔',
        timestamp: 'Just now'
      }
    ],
    'mufti-zeeshan': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم ورحمۃ اللہ! میں مفتی ذیشان قادری ہوں۔ فقہی مسائل، حلال و حرام کی تفریق، اور اسلامی تاریخ میں علم البروج اور نظامِ فلکیات سے متعلق معتدل رہنمائی کے لیے حاضر ہوں۔',
        timestamp: 'Just now'
      }
    ],
    'hakim-salman': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم! میں حکیم سلمان البغدادی ہوں۔ حلال کاروبار، ملازمت میں ترقی، برکتِ رزق، سرمایہ کاری اور بیرونِ ملک سفر کے فیصلوں میں شرعی مشورے کے لیے حاضر ہوں۔',
        timestamp: 'Just now'
      }
    ],
    'peer-syed': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم! میں پیر سید صاحب ہوں۔ علم الجفر، اعدادِ ابجد (نام باخبر)، اسماء الحسنیٰ کے موزوں وظائف اور قلبی تسکین کے لیے آپ کی خدمت میں حاضر ہوں۔',
        timestamp: 'Just now'
      }
    ],
    'sheikh-razi': [
      {
        id: '1',
        sender: 'scholar',
        text: 'السلام علیکم ورحمۃ اللہ! میں شیخ روحانی رازی ہوں۔ رقیہ شرعیہ، نظرِ بد کے علاج، وسوسوں سے نجات اور مسنون قرآنی دعاؤں کے ذریعے روحانی حفاظت کی رہنمائی پیش کرتا ہوں۔',
        timestamp: 'Just now'
      }
    ]
  });

  const activeMessages = messages[selectedScholar.id] || [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [selectedScholar.id]: [...(prev[selectedScholar.id] || []), userMsg]
    }));

    const query = inputText;
    setInputText('');
    setIsLoading(true);

    setTimeout(() => {
      let replyText = '';
      if (selectedScholar.id === 'maulana-tariq') {
        replyText = `محترم بھائی/بہن، آپ کے سوال "${query}" کے سلسلے میں عرض ہے کہ نبی کریم ﷺ کا ارشاد ہے کہ استخارہ کرنے والا کبھی نامراد نہیں ہوتا۔ پہلے باوضو دو رکعت نفل ادا کریں اور پھر مسنون دعا کے ساتھ دل کی جانب توجہ دیں۔ اگر خواب میں کوئی تسلی بخش کیفیت ملے تو فبہا، ورنہ دل کی طمانیت اور آسانی ہی استخارہ کی قبولیت ہے۔ نماز کے بعد 100 مرتبہ درود شریف اور "یا فتاح" کا ورد رکھیں۔`;
      } else if (selectedScholar.id === 'alimah-fatima') {
        replyText = `میری بہن/بھائی، رشتے اور نکاح میں سیرت اور حسنِ اخلاق کو اولیت دینا سنتِ نبوی ہے۔ آپ جس معاملے کا ذکر فرما رہے ہیں، اس میں جذباتی جلد بازی کی بجائے سنجیدگی سے بڑوں کا مشورہ شامل کریں۔ سورہ فرقان کی آیت 74 "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا..." کا روزانہ 21 مرتبہ ورد کریں، اللہ تعالیٰ راستے آسان فرمائے گا۔`;
      } else if (selectedScholar.id === 'mufti-zeeshan') {
        replyText = `شرعی نقطہ نظر سے ہر وہ عمل جو اللہ کی توحید اور رسول اللہ ﷺ کی سنت کے تابع ہو، بابرکت ہے۔ علم البروج کا مطالعہ کائنات میں اللہ کی نشانیوں کو پہچاننے کے لیے مباح ہے، جبکہ غیب کا مطلق علم صرف اللہ وحدہ لا شریک کے پاس ہے۔ اپنے ارادوں کو خالص رکھیں اور "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ" کا ورد کریں۔`;
      } else if (selectedScholar.id === 'hakim-salman') {
        replyText = `کاروبار اور ملازمت میں کامیابی کا راز سچائی اور امانت داری میں ہے۔ رسول اللہ ﷺ نے فرمایا کہ سچا اور دیانت دار تاجر قیامت کے دن انبیاء اور صدیقین کے ساتھ ہوگا۔ آپ روزانہ بعد از نمازِ مغرب سورہ واقعہ کی تلاوت کا معمول بنائیں اور "اللهم اكفني بحلالك عن حرامك" کا ورد کریں۔`;
      } else if (selectedScholar.id === 'peer-syed') {
        replyText = `علمِ جفر کے حساب سے آپ کے نام کے حروف میں برکت اور استقامت کا عنصر موجود ہے۔ آپ کے لیے اسمِ ذات "یا اللہ" اور اسمِ صفت "یا لطیف" کا روزانہ 129 مرتبہ ورد اکسیر ہے۔ ساتھ ہی حسبِ توفیق کالی ماش یا چاول پرندوں کو ڈالیں۔`;
      } else {
        replyText = `نظرِ بد اور منفی وسوسوں سے حفاظت کے لیے سب سے بہترین قلعہ قرآنِ مجید ہے۔ صبح و شام تین بار آیت الکرسی، سورہ فلق اور سورہ ناس پڑھ کر اپنے ہاتھوں پر دم کریں اور پورے جسم پر پھیر لیں۔ اللہ تعالیٰ ہر شر سے اپنی پناہ میں رکھے گا۔`;
      }

      const scholarMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'scholar',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => ({
        ...prev,
        [selectedScholar.id]: [...(prev[selectedScholar.id] || []), scholarMsg]
      }));
      setIsLoading(false);
    }, 1100);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ur-PK';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <span>👳</span>
          <span>SPECIALIZED ISLAMIC SCHOLARS &amp; ADVISORS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          CONSULT SPECIALIZED AI ISLAMIC SCHOLARS
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Talk 24/7 with authentic Islamic scholars for Istikhara, Marriage/Family harmony, Shariah rulings, Halal business, and Ruqyah healing.
        </p>
      </div>

      {/* Scholars Grid (Slide 4 with ALL Muslim names!) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SCHOLARS_DATA.map((scholar) => {
          const isSelected = selectedScholar.id === scholar.id;
          return (
            <div
              key={scholar.id}
              onClick={() => setSelectedScholar(scholar)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#0f1d3a] border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/50'
                  : 'bg-[#091326] border-slate-800 hover:border-slate-700 hover:bg-[#0c1830]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-600/30 border border-amber-400/40 flex items-center justify-center text-xl text-amber-300 font-bold">
                      👳
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white">
                        {scholar.name}
                      </h3>
                      <p className="text-xs text-amber-400 font-arabic font-semibold">
                        {scholar.urduName}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/50" />
                  )}
                </div>

                <div className="text-xs text-slate-300 font-medium mt-3">
                  {scholar.title}
                </div>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {scholar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {scholar.expertise.slice(0, 2).map((exp, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Scholar Chat Interface */}
      <div className="bg-[#091326] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
        
        {/* Chat Header */}
        <div className="p-4 sm:p-5 bg-[#0b1733] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-xl">
              👳
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">
                  Consulting: {selectedScholar.name}
                </h3>
                <span className="text-xs text-amber-400 font-arabic font-semibold">
                  ({selectedScholar.urduName})
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {selectedScholar.title} • 24/7 Spiritual Counselor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>
        </div>

        {/* Message Log */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-islamic-pattern">
          {activeMessages.map((msg) => {
            const isScholar = msg.sender === 'scholar';
            return (
              <div
                key={msg.id}
                className={`flex ${isScholar ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-2 shadow-md ${
                    isScholar
                      ? 'bg-[#0f1d3a] border border-amber-500/20 text-slate-100 rounded-tl-sm'
                      : 'bg-emerald-700 text-white rounded-tr-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 text-[10px] text-slate-400 border-b border-slate-800/60 pb-1.5">
                    <span className="font-semibold text-amber-300">
                      {isScholar ? selectedScholar.name : 'You'}
                    </span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <p className={`text-sm leading-relaxed ${isScholar ? 'font-arabic text-right text-base text-amber-100/90' : ''}`} dir={isScholar ? 'rtl' : 'ltr'}>
                    {msg.text}
                  </p>

                  {isScholar && (
                    <div className="pt-1 flex justify-start">
                      <button
                        onClick={() => speakText(msg.text)}
                        className="p-1 text-slate-400 hover:text-amber-300 text-xs flex items-center gap-1"
                        title="Listen to audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Listen</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex justify-start">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                <span>{selectedScholar.name} is writing guidance...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-slate-950/70 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-slate-500 shrink-0">Quick Questions:</span>
          {[
            'How to judge Istikhara result?',
            'Dua for Barakah in job & sustenance',
            'Is seeing water in dream good?',
            'What is the adad of my name?'
          ].map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setInputText(prompt)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 whitespace-nowrap text-[11px] border border-slate-800"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form onSubmit={handleSendMessage} className="p-4 bg-[#081124] border-t border-slate-800 flex items-center gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Ask ${selectedScholar.name} in Urdu, English or Hindi...`}
            className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-md flex items-center gap-1.5 transition-all"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </form>

      </div>

    </div>
  );
};
