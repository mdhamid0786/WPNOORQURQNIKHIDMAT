import React, { useState } from 'react';
import { 
  Calculator, 
  HeartHandshake, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { 
  ABJAD_MAP, 
  calculateStringAdad, 
  performAbjadAnalysis, 
  calculateMarriageCompatibility 
} from '../utils/abjadCalculator';
import { AbjadResult, Language } from '../types';

interface AbjadCalculatorModuleProps {
  language: Language;
}

export const AbjadCalculatorModule: React.FC<AbjadCalculatorModuleProps> = ({ language }) => {
  const [activeSubTab, setActiveSubTab] = useState<'individual' | 'marriage'>('individual');

  // Single person state
  const [personName, setPersonName] = useState('محمد حامد (Mohammad Hamid)');
  const [motherName, setMotherName] = useState('فاطمہ (Fatima)');
  const [abjadResult, setAbjadResult] = useState<AbjadResult | null>(() => 
    performAbjadAnalysis('محمد حامد', 'فاطمہ')
  );

  // Marriage compatibility state
  const [partner1Name, setPartner1Name] = useState('علی (Ali)');
  const [partner1Mother, setPartner1Mother] = useState('مریم (Maryam)');
  const [partner2Name, setPartner2Name] = useState('عائشہ (Ayesha)');
  const [partner2Mother, setPartner2Mother] = useState('زینب (Zainab)');
  const [compatibilityResult, setCompatibilityResult] = useState<any | null>(() => 
    calculateMarriageCompatibility('علی', 'مریم', 'عائشہ', 'زینب')
  );

  const handleCalculateSingle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!personName.trim()) return;
    const res = performAbjadAnalysis(personName, motherName || 'حوا (Eve)');
    setAbjadResult(res);
  };

  const handleCalculateMarriage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partner1Name.trim() || !partner2Name.trim()) return;
    const res = calculateMarriageCompatibility(
      partner1Name, 
      partner1Mother || 'حوا', 
      partner2Name, 
      partner2Mother || 'حوا'
    );
    setCompatibilityResult(res);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      
      {/* Title Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold">
          <span>🔢</span>
          <span>ILM-E-JAFAR &amp; ABJAD-E-KABEER CALCULATOR</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          ABJAD VALUE &amp; NAME COMPATIBILITY
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Calculate Islamic Adad of your name and mother's name (Naam Ba Khabar) to reveal dominant element, lucky stars, and marriage compatibility.
        </p>
      </div>

      {/* Sub Tabs Bar */}
      <div className="flex justify-center">
        <div className="bg-slate-900/80 border border-slate-700/80 p-1 rounded-xl flex gap-1">
          <button
            onClick={() => setActiveSubTab('individual')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'individual'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>👤</span>
            <span>Naam Ba Khabar (نام باخبر)</span>
          </button>
          <button
            onClick={() => setActiveSubTab('marriage')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'marriage'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>💍</span>
            <span>Marriage Compatibility (حسابِ نکاح)</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Individual Naam Ba Khabar */}
      {activeSubTab === 'individual' && (
        <div className="space-y-8">
          
          {/* Input Form */}
          <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🧮</span> Calculate Your Abjad Values
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Enter your name and your mother's name in Arabic, Urdu, or English. If mother's name is not known, enter 'Hawwa' (حوا).
            </p>

            <form onSubmit={handleCalculateSingle} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Your Full Name (آپ کا نام):
                </label>
                <input
                  type="text"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  placeholder="e.g. محمد حامد or Mohammad Hamid"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Mother's Name (والدہ کا نام):
                </label>
                <input
                  type="text"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  placeholder="e.g. فاطمہ or Fatima"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Compute Abjad Analysis</span>
                </button>
              </div>
            </form>
          </div>

          {/* Results Display */}
          {abjadResult && (
            <div className="bg-gradient-to-b from-[#0b1733] to-[#070e1f] border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase text-amber-400 tracking-wider">
                    Abjad-e-Kabeer Calculation Complete
                  </span>
                  <h3 className="text-2xl font-bold text-white font-serif-title mt-0.5">
                    Total Adad: <span className="text-amber-300">{abjadResult.totalAdad}</span>
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 flex gap-3">
                    <span>Name Adad: <strong className="text-white">{abjadResult.personAdad}</strong></span>
                    <span>Mother's Adad: <strong className="text-white">{abjadResult.motherAdad}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                    Root Number: {abjadResult.luckyNumber}
                  </span>
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Dominant Element (غالب عنصر)
                  </div>
                  <div className="text-sm font-bold text-cyan-300">
                    {abjadResult.element}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Dominant Star / Buruj (برجِ طالع)
                  </div>
                  <div className="text-sm font-bold text-amber-300">
                    {abjadResult.dominantStar}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Best Compatible Zodiac (موافق برج)
                  </div>
                  <div className="text-sm font-bold text-emerald-300">
                    {abjadResult.compatibleZodiac}
                  </div>
                </div>
              </div>

              {/* Matching Asma-ul-Husna Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Matching Divine Name (اسمِ اعظم مطابقت)</span>
                  </div>
                  <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                    Adad: {abjadResult.asmaUlHusna.adad}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-2xl font-bold font-arabic text-amber-300 block">
                      {abjadResult.asmaUlHusna.arabic}
                    </span>
                    <span className="text-sm text-white font-semibold">
                      {abjadResult.asmaUlHusna.transliteration} — {abjadResult.asmaUlHusna.meaning}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 bg-slate-950/70 p-3 rounded-xl border border-slate-800 max-w-xs">
                    Recite daily after Fajr or Isha for abundance and divine protection.
                  </div>
                </div>
              </div>

              {/* Scholarly Advice */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Peer Syed Sahab (AI) Ilm-e-Jafar Guidance:</span>
                </h4>
                <p className="text-sm font-arabic text-right leading-relaxed text-amber-100" dir="rtl">
                  {abjadResult.advice}
                </p>
              </div>

            </div>
          )}

        </div>
      )}

      {/* Tab 2: Marriage Compatibility by Abjad */}
      {activeSubTab === 'marriage' && (
        <div className="space-y-8">
          
          <div className="bg-[#091326] border border-amber-500/25 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-400" />
              <span>Marriage &amp; Nikah Harmony by Abjad (حسابِ نکاح و موافقت)</span>
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Compare the numerical harmony and elemental balance between prospective bride and groom.
            </p>

            <form onSubmit={handleCalculateMarriage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Partner 1 */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                    Person 1 (Proposer / Groom)
                  </span>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Name:</label>
                    <input
                      type="text"
                      value={partner1Name}
                      onChange={(e) => setPartner1Name(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Mother's Name:</label>
                    <input
                      type="text"
                      value={partner1Mother}
                      onChange={(e) => setPartner1Mother(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Partner 2 */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block">
                    Person 2 (Proposed / Bride)
                  </span>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Name:</label>
                    <input
                      type="text"
                      value={partner2Name}
                      onChange={(e) => setPartner2Name(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-rose-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Mother's Name:</label>
                    <input
                      type="text"
                      value={partner2Mother}
                      onChange={(e) => setPartner2Mother(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-rose-400"
                    />
                  </div>
                </div>

              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-500 hover:to-pink-600 text-white font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Evaluate Nikah Compatibility</span>
                </button>
              </div>
            </form>
          </div>

          {compatibilityResult && (
            <div className="bg-gradient-to-b from-[#121c38] to-[#070e21] border border-rose-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-semibold uppercase text-rose-400 tracking-wider">
                    Nikah Harmony Result
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {compatibilityResult.summary}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Harmony Score</span>
                    <span className="text-3xl font-black text-emerald-400 font-serif-title">
                      {compatibilityResult.harmonyScore}%
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-emerald-400/30 flex items-center justify-center font-bold text-lg text-emerald-300 bg-emerald-500/10">
                    💍
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${compatibilityResult.harmonyScore}%` }}
                />
              </div>

              {/* Advice */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Alimah Fatima Zahra &amp; Scholar Recommendation:</span>
                </h4>
                <p className="text-sm font-arabic text-right leading-relaxed text-amber-100" dir="rtl">
                  {compatibilityResult.recommendation}
                </p>
              </div>

            </div>
          )}

        </div>
      )}

      {/* Abjad Alphabet Reference Table */}
      <div className="p-6 rounded-2xl bg-[#091326] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>📜</span> Abjad-e-Kabeer Letter Value Reference (جدول حروفِ ابجد کبیر)
          </h3>
          <span className="text-xs text-slate-400">Classical Numerical Tradition</span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-2 text-center text-xs">
          {[
            { l: 'ا', v: 1 }, { l: 'ب', v: 2 }, { l: 'ج', v: 3 }, { l: 'د', v: 4 }, { l: 'ه', v: 5 },
            { l: 'و', v: 6 }, { l: 'ز', v: 7 }, { l: 'ح', v: 8 }, { l: 'ط', v: 9 }, { l: 'ی', v: 10 },
            { l: 'ک', v: 20 }, { l: 'ل', v: 30 }, { l: 'م', v: 40 }, { l: 'ن', v: 50 }, { l: 'س', v: 60 },
            { l: 'ع', v: 70 }, { l: 'ف', v: 80 }, { l: 'ص', v: 90 }, { l: 'ق', v: 100 }, { l: 'ر', v: 200 },
            { l: 'ش', v: 300 }, { l: 'ت', v: 400 }, { l: 'ث', v: 500 }, { l: 'خ', v: 600 }, { l: 'ذ', v: 700 },
            { l: 'ض', v: 800 }, { l: 'ظ', v: 900 }, { l: 'غ', v: 1000 }
          ].map((item, idx) => (
            <div key={idx} className="p-2 bg-slate-950/70 border border-slate-800 rounded-lg">
              <span className="font-arabic text-base text-amber-300 font-bold block">{item.l}</span>
              <span className="text-[11px] text-slate-400 font-mono">{item.v}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
