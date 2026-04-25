"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ShieldCheck, 
  Wallet, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Landmark,
  Calculator
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Interfaces
interface LoanTypeItem {
  heading: string;
  points: string[];
}

interface ComparisonItem {
  heading: string;
  content: string;
  subPoints?: string[];
}

interface BlogData {
  title: string;
  introduction: string;
  section1Title: string;
  loanTypes: LoanTypeItem[];
  section2Title: string;
  comparisonFactors: ComparisonItem[];
  section3Title: string;
  selectionSteps: string[];
  conclusion: string;
}

const blogContent: BlogData = {
  title: "पैसा बर्बाद करना बंद करें: सही लोन चुनने के लिए एक शुरुआती गाइड",
  introduction: "लोन लेना अक्सर ज़िंदगी के बड़े फैसलों में से एक होता है—चाहे वह घर खरीदना हो, गाड़ी लेना हो या किसी व्यापार में निवेश करना हो। एक गलत लोन का चुनाव आपको अनावश्यक ब्याज़ (interest) और फीस के रूप में हज़ारों रुपये का नुकसान करा सकता है। इस गाइड का उद्देश्य आपको ऐसे बुनियादी सिद्धांत सिखाना है जिससे आप अपनी वित्तीय ज़रूरतों के लिए सबसे सही और सस्ता लोन चुन सकें।",
  section1Title: "मुख्य लोन के प्रकारों को समझें",
  loanTypes: [
    {
      heading: "सुरक्षित लोन (Secured Loan) बनाम असुरक्षित लोन (Unsecured Loan)",
      points: [
        "सुरक्षित लोन: इनमें आपको गारंटी (collateral), जैसे कि घर या कार, गिरवी रखनी पड़ती है। अगर आप लोन नहीं चुका पाते हैं, तो बैंक आपकी संपत्ति ले सकता है। फ़ायदा यह है कि इनकी ब्याज़ दरें (interest rates) अक्सर कम होती हैं (जैसे: होम लोन)।",
        "असुरक्षित लोन: इनमें किसी गारंटी की ज़रूरत नहीं होती, लेकिन आपकी क्रेडिट हिस्ट्री (credit history) देखी जाती है। जोखिम ज़्यादा होने के कारण इनकी ब्याज़ दरें ज़्यादा होती हैं (जैसे: पर्सनल लोन, क्रेडिट कार्ड)।",
      ],
    },
    {
      heading: "निश्चित दर (Fixed Rate) बनाम परिवर्तनीय दर (Variable Rate)",
      points: [
        "निश्चित दर: ब्याज़ दर पूरे लोन की अवधि के दौरान समान रहती है। यह आपको मासिक किस्तों (EMIs) में स्थिरता और भविष्य की निश्चितता देती है।",
        "परिवर्तनीय दर: ब्याज़ दर बाज़ार की स्थितियों के अनुसार बदलती रहती है। यह शुरू में कम हो सकती है, लेकिन बढ़ने का जोखिम भी होता है।",
      ],
    },
  ],
  section2Title: "तुलना के लिए तीन ज़रूरी कारक",
  comparisonFactors: [
    {
      heading: "A. वार्षिक प्रतिशत दर (APR)",
      content: "सिर्फ़ 'ब्याज़ दर' न देखें, बल्कि **APR** देखें। APR में केवल ब्याज़ ही नहीं, बल्कि लोन से जुड़े सभी अन्य शुल्क (fees) भी शामिल होते हैं। यह लोन की **वास्तविक वार्षिक लागत** जानने का सबसे अच्छा तरीका है।",
    },
    {
      heading: "B. शुल्क और जुर्माना (Fees)",
      content: "कम ब्याज़ दर वाला लोन भी महँगा हो सकता है अगर उसमें ओरिजिनेशन फीस, पूर्व भुगतान जुर्माना या विलंब शुल्क अधिक हों।",
      subPoints: ["ओरिजिनेशन फीस", "पूर्व भुगतान जुर्माना", "विलंब शुल्क"],
    },
    {
      heading: "C. लोन की अवधि (Loan Term)",
      content: "लंबी अवधि में EMIs कम होती हैं लेकिन कुल ब्याज़ अधिक चुकाना पड़ता है। सही संतुलन ढूँढना ज़रूरी है।",
    },
  ],
  section3Title: "सही लोन चुनने की सरल प्रक्रिया",
  selectionSteps: [
    "ज़रूरत तय करें: राशि और उद्देश्य का निर्धारण करें।",
    "क्रेडिट स्कोर जाँचें: अच्छा स्कोर कम APR के लिए ज़रूरी है।",
    "कई संस्थानों से तुलना करें: बैंक और ऑनलाइन लेंडर्स को परखें।",
    "कुल लागत का हिसाब लगाएँ: ऑनलाइन कैलकुलेटर का उपयोग करें।",
    "बारीक़ी से पढ़ें: लोन एग्रीमेंट के नियमों को ध्यान से पढ़ें।",
  ],
  conclusion: "याद रखें, सबसे अच्छा लोन वह है जो आपकी ज़रूरतें पूरी करते हुए **सबसे कम कुल लागत** पर उपलब्ध हो। सोच-समझकर तुलना करने की यह प्रक्रिया आपको वित्तीय बोझ से बचाएगी और पैसा बर्बाद होने से रोकेगी।",
};

export default function LoanGuidePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#FFF4E5] min-h-screen font-sans selection:bg-[#FF7819] selection:text-white pb-20">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#FF7819] z-50 origin-left" style={{ scaleX }} />

      {/* 🏛 HERO HEADER */}
      <header className="relative pt-32 pb-48 px-6 bg-[#08101E] rounded-b-[4rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7819]/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] font-black uppercase tracking-widest mb-8">
            <Landmark className="w-3 h-3" /> Financial Education 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
            Stop Wasting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] to-[#FF690B]">Money</span> <br />
            Choose The Right Loan
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-3xl mx-auto italic leading-relaxed">
            {blogContent.introduction}
          </p>
        </div>
      </header>

      {/* 📖 MAIN CONTENT */}
      <main className="max-w-6xl mx-auto -mt-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* SECTION 1: LOAN TYPES */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tighter mb-8 flex items-center gap-3">
                <Wallet className="text-[#FF7819]" /> {blogContent.section1Title}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {blogContent.loanTypes.map((type, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ translateZ: 20, rotateX: 2 }}
                    className="p-8 bg-white rounded-[2.5rem] shadow-xl border border-white hover:border-[#FF7819]/20 transition-all"
                  >
                    <h3 className="text-xl font-black text-[#FF690B] uppercase mb-4 tracking-tight italic">{type.heading}</h3>
                    <ul className="space-y-4">
                      {type.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex gap-3 text-gray-600 font-medium leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-[#FF7819] shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* SECTION 2: COMPARISON FACTORS */}
            <section data-aos="fade-up">
              <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tighter mb-8 flex items-center gap-3">
                <TrendingUp className="text-[#FF7819]" /> {blogContent.section2Title}
              </h2>
              <div className="space-y-6">
                {blogContent.comparisonFactors.map((factor, idx) => (
                  <div key={idx} className="group p-8 bg-white/60 backdrop-blur-md rounded-[3rem] border-l-[10px] border-[#FF7819] shadow-lg">
                    <h3 className="text-2xl font-black text-[#08101E] uppercase italic mb-3">{factor.heading}</h3>
                    <p className="text-gray-600 font-medium mb-4">{factor.content}</p>
                    {factor.subPoints && (
                      <div className="flex flex-wrap gap-3">
                        {factor.subPoints.map((sp, sIdx) => (
                          <span key={sIdx} className="px-4 py-2 bg-[#FF7819]/10 text-[#FF690B] text-xs font-black rounded-xl uppercase tracking-tighter">
                            {sp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* SIDEBAR: SELECTION STEPS */}
          <aside className="lg:col-span-4">
            <div className="sticky top-12 space-y-8">
              <div className="p-8 bg-[#08101E] rounded-[3rem] text-white shadow-2xl overflow-hidden relative" data-aos="fade-left">
                <Calculator className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 -rotate-12" />
                <h3 className="text-2xl font-black uppercase italic mb-8 text-[#FF7819] relative z-10">
                  {blogContent.section3Title}
                </h3>
                <div className="space-y-6 relative z-10">
                  {blogContent.selectionSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#FF7819] text-white font-black text-sm shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </span>
                      <p className="text-gray-300 text-sm font-medium leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONCLUSION CARD */}
              <div className="p-8 bg-white rounded-[3rem] shadow-xl border-t-[8px] border-[#FF690B]" data-aos="fade-up">
                 <AlertCircle className="w-12 h-12 text-[#FF7819] mb-4" />
                 <h4 className="text-xl font-black text-[#08101E] uppercase italic mb-4">निष्कर्ष</h4>
                 <p className="text-gray-600 text-sm font-medium italic leading-relaxed">
                   {blogContent.conclusion}
                 </p>
                 <button className="w-full mt-8 py-4 bg-[#FF690B] text-white font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-[#08101E] transition-all flex items-center justify-center gap-2">
                   Check Eligibility <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* 🏁 FOOTER */}
      <footer className="mt-32 py-20 bg-white border-t border-[#FF7819]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
           <div className="w-16 h-1 bg-gradient-to-r from-[#FF7819] to-[#FF690B] mx-auto rounded-full" />
           <p className="text-3xl font-black text-[#08101E] uppercase italic tracking-tighter">
             Financial <span className="text-[#FF7819]">Freedom</span>
           </p>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
             © 2026 LOAN ADVISORY PORTAL • SMART DECISIONS
           </p>
        </div>
      </footer>
    </div>
  );
}