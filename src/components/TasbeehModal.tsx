import React, { useState } from 'react';
import { X, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

interface TasbeehModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDua?: string;
  initialTarget?: number;
}

export const TasbeehModal: React.FC<TasbeehModalProps> = ({
  isOpen,
  onClose,
  initialDua = 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
  initialTarget = 33,
}) => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(initialTarget);
  const [dhikr, setDhikr] = useState(initialDua);

  if (!isOpen) return null;

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#0e1b38] to-[#070e1f] border-2 border-amber-500/40 p-6 shadow-2xl text-center space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-700"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Digital Tasbeeh • تسبیح مبارک
          </span>
          <h3 className="text-xl font-bold font-arabic text-amber-200 mt-2" dir="rtl">
            {dhikr}
          </h3>
        </div>

        {/* Target Buttons */}
        <div className="flex justify-center gap-1.5">
          {[33, 100, 313, 1000].map(t => (
            <button
              key={t}
              onClick={() => {
                setTarget(t);
                setCount(0);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                target === t
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {t}x
            </button>
          ))}
        </div>

        {/* Big Clickable Bead Button */}
        <button
          onClick={handleIncrement}
          className="w-44 h-44 mx-auto rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-1 shadow-2xl shadow-amber-500/20 active:scale-95 transition-all transform hover:scale-105 cursor-pointer flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-[#081124] flex flex-col items-center justify-center p-4">
            <span className="text-4xl font-black text-amber-300 font-serif-title">
              {count}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">
              Target: {target}
            </span>
          </div>
        </button>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 pt-1">
          <button
            onClick={handleReset}
            className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <span className="text-xs font-semibold text-emerald-400">
            {count >= target ? '✨ Completed! ماشاءاللہ' : `${target - count} to go`}
          </span>
        </div>

      </div>
    </div>
  );
};
