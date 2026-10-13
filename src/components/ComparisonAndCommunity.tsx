import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  CheckCircle2, 
  ExternalLink, 
  MessageCircle, 
  ThumbsUp, 
  Video, 
  Camera, 
  Gift, 
  ShieldCheck, 
  Copy, 
  Check 
} from 'lucide-react';
import { Language, SOCIAL_LINKS } from '../types';

interface ComparisonAndCommunityProps {
  language: Language;
}

export const ComparisonAndCommunity: React.FC<ComparisonAndCommunityProps> = ({ language }) => {
  const [donateAmount, setDonateAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const copyAppShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* Title Banner (Slide 12 & 14) */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <span>🤝</span>
          <span>CONNECT, SADAQAH &amp; GLOBAL COMMUNITY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-title">
          CONNECT WITH NOOR QURANI (نورِ قرآنی)
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Follow, share, and support our mission to spread authentic beneficial knowledge, Sunnah guidance, and free spiritual tools worldwide.
        </p>
      </div>

      {/* Slide 14: Social Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* WhatsApp */}
        <a 
          href={SOCIAL_LINKS.whatsapp}  
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-[#071322] border border-emerald-500/40 hover:border-emerald-400 text-center transition-all group shadow-lg hover:shadow-emerald-500/10 flex flex-col items-center justify-between"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
            💬
          </div>
          <div>
            <h3 className="font-bold text-base text-white group-hover:text-emerald-300">WhatsApp</h3>
            <p className="text-xs text-slate-400 mt-1">Official Daily Wazifa Broadcast &amp; Helpline</p>
          </div>
          <span className="mt-4 text-xs font-semibold text-emerald-400 flex items-center gap-1">
            Join Channel <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* Facebook */}
        <a 
          href={SOCIAL_LINKS.facebook}  
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/80 to-[#071322] border border-blue-500/40 hover:border-blue-400 text-center transition-all group shadow-lg hover:shadow-blue-500/10 flex flex-col items-center justify-between"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
            👍
          </div>
          <div>
            <h3 className="font-bold text-base text-white group-hover:text-blue-300">Facebook</h3>
            <p className="text-xs text-slate-400 mt-1">Official Islamic Discussions &amp; Articles</p>
          </div>
          <span className="mt-4 text-xs font-semibold text-blue-400 flex items-center gap-1">
            Follow Page <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* Instagram */}
        <a 
          href={SOCIAL_LINKS.instagram}  
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-gradient-to-br from-pink-950/80 to-[#071322] border border-pink-500/40 hover:border-pink-400 text-center transition-all group shadow-lg hover:shadow-pink-500/10 flex flex-col items-center justify-between"
        >
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
            📸
          </div>
          <div>
            <h3 className="font-bold text-base text-white group-hover:text-pink-300">Instagram</h3>
            <p className="text-xs text-slate-400 mt-1">Daily Dream Interpretations &amp; Visual Duas</p>
          </div>
          <span className="mt-4 text-xs font-semibold text-pink-400 flex items-center gap-1">
            Follow Feed <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* YouTube */}
        <a 
          href={SOCIAL_LINKS.youtube}  
          target="_blank" 
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-gradient-to-br from-rose-950/80 to-[#071322] border border-rose-500/40 hover:border-rose-400 text-center transition-all group shadow-lg hover:shadow-rose-500/10 flex flex-col items-center justify-between"
        >
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
            ▶️
          </div>
          <div>
            <h3 className="font-bold text-base text-white group-hover:text-rose-300">YouTube</h3>
            <p className="text-xs text-slate-400 mt-1">Video Explanations &amp; Istikhara Tutorials</p>
          </div>
          <span className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
            Subscribe <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </a>

      </div>

      {/* Slide 14: Donate Now & Sadaqah Jariyah Section */}
      <div className="bg-gradient-to-b from-[#0b1b36] via-[#09152b] to-[#071022] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Sadaqah Jariyah (صدقہ جاریہ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-title">
            DONATE NOW • صدقہ و عطیہ
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Support the maintenance of free 24/7 Islamic guidance servers, continuous research into authentic classical texts, and scholarship outreach.
          </p>
        </div>

        {!showThankYou ? (
          <form onSubmit={handleDonate} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Select Sadaqah / Contribution Amount:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[100, 500, 1000, 2500].map(amt => (
                  <button
                    type="button"
                    key={amt}
                    onClick={() => {
                      setDonateAmount(amt);
                      setCustomAmount('');
                    }}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      donateAmount === amt && !customAmount
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    ₹ / ${amt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Or Custom Amount:
              </label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  if (e.target.value) setDonateAmount(Number(e.target.value));
                }}
                placeholder="Enter amount (e.g. 5000)"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Donor Name (Optional / گمنام صدقہ):
              </label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="e.g. Abdullah or Anonymous"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <Heart className="w-4 h-4 fill-slate-950" />
              <span>Contribute Sadaqah (₹ / ${customAmount || donateAmount})</span>
            </button>

            <p className="text-[11px] text-center text-slate-400 italic">
              "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ" — صدقہ دینے سے مال کبھی کم نہیں ہوتا (مسلم شریف)
            </p>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3 max-w-md mx-auto animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400 flex items-center justify-center text-2xl mx-auto">
              🤲
            </div>
            <h3 className="text-lg font-bold text-white">
              جَزَاكُمُ اللَّهُ خَيْرًا (May Allah Reward You)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you {donorName ? donorName : 'Noble Believer'}! Your intention of Sadaqah ({customAmount || donateAmount}) has been recorded. May Allah grant immense Barakah in your health, wealth, and family.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="text-xs font-semibold text-emerald-400 hover:underline pt-2"
            >
              Make another contribution
            </button>
          </div>
        )}

      </div>

      {/* Share & Mobile App Info (Slide 12) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#091326] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-serif-title">
            Share Noor Qurani with Family &amp; Friends
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Whoever guides someone to a good deed gets the reward equal to the doer. Spread the light of beneficial Islamic knowledge.
          </p>
        </div>

        <button
          onClick={copyAppShare}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-2 whitespace-nowrap"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          <span>{copiedLink ? 'Link Copied!' : 'Share Noor Qurani'}</span>
        </button>
      </div>

    </div>
  );
};
