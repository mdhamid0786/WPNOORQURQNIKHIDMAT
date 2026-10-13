import React from 'react';
import { Sparkles, Moon, BookOpen, Compass, Shield, Users, HeartHandshake, PhoneCall } from 'lucide-react';
import { Language, SOCIAL_LINKS } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenTasbeeh: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  onOpenTasbeeh,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#060c1a]/90 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Title */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-600/30 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-300 transition-all">
              <span className="text-2xl select-none">🌙</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif-title flex items-center gap-1.5">
                  NOOR QURANI <span className="text-amber-400 font-arabic text-lg font-normal">نورِ قرآنی</span>
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 rounded-full">
                  HALAL SPIRITUAL TECH
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-2 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('istikhara')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'istikhara'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🤲</span> AI Istikhara
            </button>
            <button
              onClick={() => setActiveTab('tabeer')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'tabeer'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🌙</span> Khwabon Ki Tabeer
            </button>
            <button
              onClick={() => setActiveTab('buruj')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'buruj'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>♈</span> Ilm-ul-Buruj
            </button>
            <button
              onClick={() => setActiveTab('abjad')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'abjad'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>🔢</span> Abjad &amp; Jafar
            </button>
            <button
              onClick={() => setActiveTab('scholars')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'scholars'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>👳</span> AI Scholars
            </button>
            <button
              onClick={() => setActiveTab('wazaif')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTab === 'wazaif'
                  ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>📿</span> Wazaif &amp; Stones
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Digital Tasbeeh button */}
            <button
              onClick={onOpenTasbeeh}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 rounded-lg hover:bg-emerald-900/60 transition-all shadow-sm"
              title="Open Digital Tasbeeh Counter"
            >
              <span>📿</span>
              <span className="hidden sm:inline">Digital Tasbeeh</span>
            </button>

            {/* Language Switcher */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-2 text-xs text-white focus:outline-none"
            >
              <option value="en">English</option>
              <option value="ur">اردو</option>
              <option value="hi">हिन्दी</option>
              <option value="ar">العربية</option>
              <option value="bn">বাংলা</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
              <option value="gu">ગુજરાતી</option>
              <option value="mr">मराठी</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="or">ଓଡ଼ିଆ</option>
              <option value="fa">فارسی</option>
              <option value="tr">Türkçe</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="ms">Bahasa Melayu</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="ru">Русский</option>
            </select>

            {/* Community & Donate controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('community')}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all"
              >
                Community
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-lg shadow-md hover:from-amber-400 hover:to-amber-500 transition-all"
              >
                Donate
              </button>
            </div>
          </div>

        </div>

        {/* Mobile secondary tab bar */}
        <div className="xl:hidden flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-800/80 text-xs">
          {[
            { id: 'overview', label: 'Overview', icon: '✨' },
            { id: 'istikhara', label: 'Istikhara', icon: '🤲' },
            { id: 'tabeer', label: 'Dream Tabeer', icon: '🌙' },
            { id: 'buruj', label: 'Ilm-ul-Buruj', icon: '♈' },
            { id: 'abjad', label: 'Abjad Calculator', icon: '🔢' },
            { id: 'scholars', label: 'AI Scholars', icon: '👳' },
            { id: 'wazaif', label: 'Wazaif & Duas', icon: '📿' },
            { id: 'community', label: 'Community', icon: '💬' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center gap-1.5 transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

      </div>
    </header>
  );
};
