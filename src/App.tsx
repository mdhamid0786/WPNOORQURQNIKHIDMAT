import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroOverview } from './components/HeroOverview';
import { IstikharaModule } from './components/IstikharaModule';
import { DreamInterpretationModule } from './components/DreamInterpretationModule';
import { BurujModule } from './components/BurujModule';
import { AbjadCalculatorModule } from './components/AbjadCalculatorModule';
import { ScholarChatModule } from './components/ScholarChatModule';
import { WazaifModule } from './components/WazaifModule';
import { ComparisonAndCommunity } from './components/ComparisonAndCommunity';
import { TasbeehModal } from './components/TasbeehModal';
import { Language, SOCIAL_LINKS } from './types';
import { Heart, ShieldCheck, Sparkles, PhoneCall, Facebook, Instagram, Youtube } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [language, setLanguage] = useState<Language>('ur');
  const [isTasbeehOpen, setIsTasbeehOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050a15] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        onOpenTasbeeh={() => setIsTasbeehOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'overview' && (
          <HeroOverview 
            setActiveTab={setActiveTab} 
            language={language} 
          />
        )}

        {activeTab === 'istikhara' && (
          <IstikharaModule 
            language={language} 
          />
        )}

        {activeTab === 'tabeer' && (
          <DreamInterpretationModule 
            language={language} 
          />
        )}

        {activeTab === 'buruj' && (
          <BurujModule 
            language={language} 
          />
        )}

        {activeTab === 'abjad' && (
          <AbjadCalculatorModule 
            language={language} 
          />
        )}

        {activeTab === 'scholars' && (
          <ScholarChatModule 
            language={language} 
          />
        )}

        {activeTab === 'wazaif' && (
          <WazaifModule 
            language={language} 
          />
        )}

        {activeTab === 'community' && (
          <ComparisonAndCommunity 
            language={language} 
          />
        )}
      </main>

      {/* Floating Tasbeeh Modal */}
      <TasbeehModal
        isOpen={isTasbeehOpen}
        onClose={() => setIsTasbeehOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-[#040812] border-t border-amber-500/20 py-10 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌙</span>
              <div>
                <span className="text-base font-bold text-white font-serif-title">
                  NOOR QURANI <span className="text-amber-400 font-arabic font-normal">نورِ قرآنی</span>
                </span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  AI Islamic Future Guidance, Sunnah Istikhara, Ibn Sirin Tabeer &amp; Ilm-ul-Buruj
                </p>
              </div>
            </div>

            {/* Quick Links in Footer */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
              <button onClick={() => setActiveTab('overview')} className="hover:text-amber-300">Overview</button>
              <button onClick={() => setActiveTab('istikhara')} className="hover:text-amber-300">Istikhara</button>
              <button onClick={() => setActiveTab('tabeer')} className="hover:text-amber-300">Khwabon Ki Tabeer</button>
              <button onClick={() => setActiveTab('buruj')} className="hover:text-amber-300">Ilm-ul-Buruj</button>
              <button onClick={() => setActiveTab('abjad')} className="hover:text-amber-300">Abjad Calculator</button>
              <button onClick={() => setActiveTab('scholars')} className="hover:text-amber-300">Islamic Scholars</button>
              <button onClick={() => setActiveTab('community')} className="hover:text-amber-300">Sadaqah &amp; Connect</button>
            </div>
          </div>
          
          {/* Social Media Footer Row */}
          <div className="flex justify-center gap-4 pt-4 border-t border-slate-800">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300"><PhoneCall className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"><Facebook className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300"><Instagram className="w-5 h-5" /></a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300"><Youtube className="w-5 h-5" /></a>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} Noor Qurani. All guidance provided under Islamic principles of Quran and authentic Hadith.
            </p>
            <p className="text-[11px] text-amber-400/90 font-medium">
              Noor Qurani • Knowledge • Guidance • Community
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
