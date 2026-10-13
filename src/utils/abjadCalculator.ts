import { AbjadResult } from '../types';

export const ABJAD_MAP: Record<string, number> = {
  // Arabic & Urdu Letters
  'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1, 'ء': 1,
  'ب': 2, 'پ': 2,
  'ج': 3, 'چ': 3,
  'د': 4, 'ڈ': 4,
  'ه': 5, 'ہ': 5, 'ة': 5, 'ھ': 5,
  'و': 6, 'ؤ': 6,
  'ز': 7, 'ژ': 7,
  'ح': 8,
  'ط': 9,
  'ی': 10, 'ي': 10, 'ے': 10, 'ئ': 10,
  'ك': 20, 'ک': 20, 'گ': 20,
  'ل': 30,
  'م': 40,
  'ن': 50, 'ں': 50,
  'س': 60,
  'ع': 70,
  'ف': 80,
  'ص': 90,
  'ق': 100,
  'ر': 200, 'ڑ': 200,
  'ش': 300,
  'ت': 400, 'ٹ': 400,
  'ث': 500,
  'خ': 600,
  'ذ': 700,
  'ض': 800,
  'ظ': 900,
  'غ': 1000,
};

// Phonetic English to Arabic letter approximation for English input
const PHONETIC_MAP: Record<string, string> = {
  'a': 'ا', 'b': 'ب', 'c': 'ک', 'd': 'د', 'e': 'ی',
  'f': 'ف', 'g': 'گ', 'h': 'ح', 'i': 'ی', 'j': 'ج',
  'k': 'ک', 'l': 'ل', 'm': 'م', 'n': 'ن', 'o': 'و',
  'p': 'پ', 'q': 'ق', 'r': 'ر', 's': 'س', 't': 'ت',
  'u': 'و', 'v': 'و', 'w': 'و', 'x': 'کس', 'y': 'ی', 'z': 'ز'
};

export function calculateStringAdad(input: string): number {
  if (!input) return 0;
  const clean = input.trim();
  let total = 0;

  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    if (ABJAD_MAP[char]) {
      total += ABJAD_MAP[char];
    } else {
      const lower = char.toLowerCase();
      if (PHONETIC_MAP[lower]) {
        for (const subChar of PHONETIC_MAP[lower]) {
          total += ABJAD_MAP[subChar] || 0;
        }
      }
    }
  }

  return total > 0 ? total : 100; // Fallback minimal non-zero
}

const BURUJ_NAMES = [
  'Hoot (Pisces / حوت)',
  'Hamal (Aries / حمل)',
  'Saur (Taurus / ثور)',
  'Jauza (Gemini / جوزاء)',
  'Saratan (Cancer / سرطان)',
  'Asad (Leo / اسد)',
  'Sunbula (Virgo / سنبلہ)',
  'Mizan (Libra / میزان)',
  'Aqrab (Scorpio / عقرب)',
  'Qaus (Sagittarius / قوس)',
  'Jadi (Capricorn / جدی)',
  'Dalw (Aquarius / دلو)'
];

const ASMA_UL_HUSNA_LIST = [
  { arabic: 'يَا رَحْمَٰنُ', transliteration: 'Ya Rahman', meaning: 'The Most Gracious (الرحمن)', adad: 298 },
  { arabic: 'يَا رَحِيمُ', transliteration: 'Ya Raheem', meaning: 'The Most Merciful (الرحيم)', adad: 258 },
  { arabic: 'يَا فَتَّاحُ', transliteration: 'Ya Fattah', meaning: 'The Opener of Paths (الفتاح)', adad: 489 },
  { arabic: 'يَا رَزَّاقُ', transliteration: 'Ya Razzaq', meaning: 'The Sustainer & Provider (الرزاق)', adad: 308 },
  { arabic: 'يَا وَدُودُ', transliteration: 'Ya Wadood', meaning: 'The Loving One (الودود)', adad: 20 },
  { arabic: 'يَا لَطِيفُ', transliteration: 'Ya Latif', meaning: 'The Subtly Kind (اللطيف)', adad: 129 },
  { arabic: 'يَا كَرِيمُ', transliteration: 'Ya Kareem', meaning: 'The Bountiful & Generous (الكريم)', adad: 270 },
  { arabic: 'يَا حَفِيظُ', transliteration: 'Ya Hafeez', meaning: 'The Ultimate Protector (الحفيظ)', adad: 998 },
  { arabic: 'يَا نُورُ', transliteration: 'Ya Noor', meaning: 'The Divine Light (النور)', adad: 256 },
  { arabic: 'يَا شَافِي', transliteration: 'Ya Shafi', meaning: 'The Curer of Illnesses (الشافي)', adad: 391 },
  { arabic: 'يَا قُدُّوسُ', transliteration: 'Ya Quddoos', meaning: 'The Pure & Holy (القدوس)', adad: 170 },
  { arabic: 'يَا مُجِيبُ', transliteration: 'Ya Mujeeb', meaning: 'The Responsive to Prayers (المجيب)', adad: 55 }
];

export function performAbjadAnalysis(personName: string, motherName: string): AbjadResult {
  const pAdad = calculateStringAdad(personName);
  const mAdad = calculateStringAdad(motherName);
  const total = pAdad + mAdad;

  // Four Elements according to Ilm-e-Jafar (Aatish, Khaak, Baad, Aab)
  const elementMod = total % 4;
  let element = 'Aab (Water / آب - پرسکون، جذباتی، فیاض)';
  let elementUrdu = 'آب (پانی - پرسکون و فیاض مزاج)';
  if (elementMod === 1) {
    element = 'Aatish (Fire / آتش - پُرعزم، شجاع، قائدانہ)';
    elementUrdu = 'آتش (آگ - بلند ہمت اور خود اعتماد)';
  } else if (elementMod === 2) {
    element = 'Khaak (Earth / خاک - صابر، وفادار، مستقل مزاج)';
    elementUrdu = 'خاک (مٹی - مخلص، حقیقت پسند اور بردبار)';
  } else if (elementMod === 3) {
    element = 'Baad (Air / باد - ذہین، متجسس، تیز فہم)';
    elementUrdu = 'باد (ہوا - بلند سوچ، متحرک اور خوش اخلاق)';
  }

  // Buruj remainder (out of 12)
  const burujIndex = total % 12;
  const dominantStar = BURUJ_NAMES[burujIndex];

  // Lucky single-digit root
  let rootNum = total;
  while (rootNum > 9) {
    rootNum = rootNum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  const luckyNumber = rootNum === 0 ? 7 : rootNum;

  // Selected divine Asma-ul-Husna
  const asmaIndex = total % ASMA_UL_HUSNA_LIST.length;
  const asmaUlHusna = ASMA_UL_HUSNA_LIST[asmaIndex];

  // Specific spiritual recommendation
  const advice = `حروفِ ابجد کے حساب سے آپ کا غالب عنصر ${elementUrdu} ہے اور کل عدد ${total} برآمد ہوا ہے۔ آپ کے لیے اسمِ اعظم "${asmaUlHusna.arabic}" (${asmaUlHusna.transliteration}) کا روزانہ بعد از نمازِ فجر یا عشاء ${asmaUlHusna.adad} مرتبہ ورد انتہائی بابرکت اور کشادگی کا باعث ہوگا۔ صدقہ خیرات اور باوضو رہنے سے زندگی میں آسانی اور حاسدین سے امان نصیب ہوگی۔`;

  return {
    personName,
    motherName,
    personAdad: pAdad,
    motherAdad: mAdad,
    totalAdad: total,
    element,
    elementUrdu,
    dominantStar,
    compatibleZodiac: BURUJ_NAMES[(burujIndex + 4) % 12],
    luckyNumber,
    asmaUlHusna,
    advice
  };
}

export function calculateMarriageCompatibility(name1: string, mother1: string, name2: string, mother2: string) {
  const total1 = calculateStringAdad(name1) + calculateStringAdad(mother1);
  const total2 = calculateStringAdad(name2) + calculateStringAdad(mother2);
  const combined = total1 + total2;

  // Classical Ilm-e-Jafar compatibility rule (combined % 4 or % 7)
  const element1 = total1 % 4; // 0=water, 1=fire, 2=earth, 3=air
  const element2 = total2 % 4;

  let harmonyScore = 75;
  let summary = 'موافق اور متوازن رشتہ (Balanced & Harmonious Match)';

  // Friendly elements: Fire+Air, Earth+Water, Water+Water
  if ((element1 === 1 && element2 === 3) || (element1 === 3 && element2 === 1)) {
    harmonyScore = 92;
    summary = 'انتہائی موافق اور برکت والا رشتہ (Highly Blessed & Supportive Union)';
  } else if ((element1 === 0 && element2 === 2) || (element1 === 2 && element2 === 0)) {
    harmonyScore = 88;
    summary = 'پائیدار، بااعتماد اور مضبوط ازدواجی تعلق (Firm, Loyal and Peaceful Match)';
  } else if (element1 === element2) {
    harmonyScore = 84;
    summary = 'یکساں مزاج اور فکری ہم آہنگی (Shared Temperament & Natural Understanding)';
  } else if ((element1 === 1 && element2 === 0) || (element1 === 0 && element2 === 1)) {
    harmonyScore = 68;
    summary = 'مزاج میں فرق، صبر اور استخارہ کی تاکید (Contrasting Temperaments: Patience and Istikhara Recommended)';
  }

  return {
    total1,
    total2,
    combined,
    harmonyScore,
    summary,
    recommendation: harmonyScore >= 80 
      ? 'شرعی استخارہ کے بعد آگے بڑھنا بابرکت رہے گا۔ دونوں فریق باہمی احترام اور درگزر کا رویہ رکھیں۔' 
      : 'قبل از حتمی فیصلہ نمازِ استخارہ ضرور ادا کریں اور "یَا وَدُودُ يَا لَطِيفُ" کا کثرت سے ورد کریں۔'
  };
}
