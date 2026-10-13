export type Language = 
  | 'en' | 'ur' | 'hi' | 'ar' | 'bn' | 'pa' | 'gu' | 'mr' | 'ta' | 'te' 
  | 'kn' | 'ml' | 'or' | 'fa' | 'tr' | 'id' | 'ms' | 'fr' | 'es' | 'ru';

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/your-number',
  facebook: 'https://facebook.com/noorqurani',
  instagram: 'https://instagram.com/noorqurani',
  youtube: 'https://youtube.com/@noorqurani'
};

export interface Scholar {
  id: string;
  name: string;
  title: string;
  urduName: string;
  expertise: string[];
  description: string;
  avatarIcon: string;
  systemPrompt: string;
  badges: string[];
  accentColor: string;
}

export interface DreamItem {
  id: string;
  symbol: string;
  symbolUrdu: string;
  category: 'Spiritual' | 'Nature' | 'Creatures' | 'Life Events' | 'Objects';
  generalMeaning: string;
  ibnSirinInterpretation: string;
  goodSign: boolean;
  spiritualRemedy?: string;
  tags: string[];
}

export interface BurujSign {
  id: number;
  name: string;
  nameUrdu: string;
  nameArabic: string;
  dates: string;
  element: 'Aatish (Fire)' | 'Khaak (Earth)' | 'Baad (Air)' | 'Aab (Water)';
  rulingPlanet: string;
  luckyGemstone: string;
  luckyNumber: number;
  luckyDay: string;
  personality: string;
  spiritualGuidance: string;
  symbolIcon: string;
}

export interface WazifaItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'Rizq & Wealth' | 'Marriage & Love' | 'Protection & Nazar' | 'Health & Shifa' | 'Peace & Anxiety';
  arabicText: string;
  transliteration: string;
  urduMeaning: string;
  englishMeaning: string;
  recommendedCount: number;
  bestTime: string;
  authenticity: string;
}

export interface AbjadResult {
  personName: string;
  motherName: string;
  personAdad: number;
  motherAdad: number;
  totalAdad: number;
  element: string;
  elementUrdu: string;
  dominantStar: string;
  compatibleZodiac: string;
  luckyNumber: number;
  asmaUlHusna: {
    arabic: string;
    transliteration: string;
    meaning: string;
    adad: number;
  };
  advice: string;
}
