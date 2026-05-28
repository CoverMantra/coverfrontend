"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { 
  CheckCircle, 
  Smartphone, 
  ShieldCheck, 
  Coins, 
  Zap, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

export default function ApplySuccessPage() {
  const router = useRouter();
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  useEffect(() => {
    const isNew = Cookies.get("isNewUserRegistration");
    setIsNewUser(isNew === "true");
  }, []);

  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.covermantra.loan";

  // Framer Motion animation configurations (Kept Exactly As Provided)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      } 
    }
  };

  const benefits = [
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Fast-Track Approval",
      titleHi: "तेज़ अप्रूवल",
      desc: "Get instant approval decisions in under 5 minutes.",
      descHi: "सिर्फ 5 मिनट में अपनी पात्रता और अप्रूवल जानें।"
    },
    {
      icon: <Smartphone className="text-white w-6 h-6" />,
      title: "Real-time Tracking",
      titleHi: "लाइव ट्रैकिंग",
      desc: "Track every step of your application status in real-time.",
      descHi: "अपने लोन स्टेटस को लाइव ट्रैक करें।"
    },
    {
      icon: <Coins className="text-white w-6 h-6" />,
      title: "Direct Disbursal",
      titleHi: "सीधे बैंक खाते में",
      desc: "Fastest bank transfers directly via mobile e-signatures.",
      descHi: "बिना किसी रुकावट सीधे bank अकाउंट में ट्रांसफर।"
    },
    {
      icon: <ShieldCheck className="text-white w-6 h-6" />,
      title: "100% Safe & Secure",
      titleHi: "पूर्णतः सुरक्षित",
      desc: "ISO Certified 256-bit bank-grade encryption security.",
      descHi: "आपकी जानकारी पूरी तरह सुरक्षित और एन्क्रिप्टेड है।"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans flex flex-col justify-between overflow-x-hidden select-none">
      
      {/* ========================================================================= */}
      {/* PART 1: TOP HERO SECTION (DARK DEEP NAVY BACKGROUND) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#08101E] pt-24 pb-20 px-4 text-center border-b border-[#FF7819]/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
        {/* Subtle Brand Ambient Glow */}
        <div className="absolute top-[-20%] left-[20%] w-[350px] h-[350px] bg-[#FF7819] opacity-10 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto relative z-10 flex flex-col items-center"
        >
          {/* Success Animated Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF7819] to-[#e66a15] rounded-[2.2rem] shadow-[0_20px_40px_rgba(255,120,25,0.4)] text-white mb-6 border-2 border-white/10"
          >
            <CheckCircle className="w-10 h-10 stroke-[2.5]" />
          </motion.div>

          {/* Heading Matrix */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {isNewUser === null ? (
                "Application Submitted!"
              ) : isNewUser ? (
                "Registration Successful!"
              ) : (
                "Welcome Back! Applied Successfully!"
              )}
            </h1>
            <p className="text-[#FF7819] font-black text-xs sm:text-sm uppercase tracking-widest">
              {isNewUser === null ? (
                "बधाई हो! आपकी जानकारी सुरक्षित सबमिट कर दी गई है।"
              ) : isNewUser ? (
                "बधाई हो! आपका नया अकाउंट बन गया है और लोन एप्लीकेशन सबमिट हो गई है।"
              ) : (
                "आपका स्वागत है! आपकी लोन एप्लीकेशन सफलतापूर्वक सबमिट कर दी गई है।"
              )}
            </p>
          </motion.div>

          {/* Push Message */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-xs sm:text-sm text-gray-400 font-medium max-w-xl leading-relaxed"
          >
            {isNewUser === null ? (
              "लेंडर ऑफर्स का मिलान और कागजी कार्रवाई पूरी करने के लिए हमारा मोबाइल ऐप डाउनलोड करें। ऐप पर आपको तेज़ और पेपरलेस लोन प्रक्रिया मिलेगी।"
            ) : isNewUser ? (
              "आपका नया अकाउंट सफलतापूर्वक रजिस्टर हो गया है। लेंडर ऑफर्स का मिलान और कागजी कार्रवाई पूरी करने के लिए हमारा मोबाइल ऐप डाउनलोड करें।"
            ) : (
              "आपके पुराने प्रोफाइल के साथ लोन एप्लीकेशन सबmit हो गई है। लेटेस्ट ऑफर्स ट्रैक करने और इंस्टेंट डिस्बर्सल के लिए मोबाइल ऐप पर लॉगिन करें।"
            )}
          </motion.p>

          {/* Core Action Button (CTA) */}
          <motion.div variants={itemVariants} className="mt-8 w-full sm:w-auto flex flex-col items-center gap-3">
            <motion.a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-[#08101E] hover:bg-gray-100 font-extrabold px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all cursor-pointer border border-transparent group text-sm"
            >
              <Smartphone className="w-5 h-5 text-[#FF7819] group-hover:scale-110 transition-transform" />
              <div className="text-left leading-none">
                <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400 block mb-0.5">Download for Android</span>
                <span className="font-black text-xs sm:text-sm md:text-base tracking-tight">DOWNLOAD APP ON GOOGLE PLAY</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#08101E] transition-colors ml-1 hidden sm:block" />
            </motion.a>

            <button 
              type="button"
              onClick={() => router.push("/profile")}
              className="mt-2 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase text-[#FF7819] tracking-widest hover:text-[#e66a15] transition-colors focus:outline-none"
            >
              Continue to Web Profile <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* PART 2: BOTTOM DETAILS SECTION (LIGHT SAND CREAM BACKGROUND) */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto w-full flex-grow flex flex-col items-center justify-center px-4 py-12 sm:py-16 relative z-10">
        <div className="w-full text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-[#08101E] tracking-tight uppercase">
            Exclusive Mobile Benefits
          </h3>
          <div className="w-12 h-1 bg-[#FF7819] mx-auto mt-2 rounded-full" />
        </div>

        {/* Dynamic Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
          {benefits.map((b, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="flex gap-4 p-5 bg-white border border-white hover:border-[#FF7819]/20 rounded-[2rem] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.02)] group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7819] to-[#e66a15] rounded-2xl flex items-center justify-center shadow-md shadow-[#FF7819]/10 shrink-0">
                {b.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-[#08101E] text-base flex flex-wrap items-center gap-1.5 leading-tight">
                  {b.title} <span className="text-gray-400 text-[10px] font-black">({b.titleHi})</span>
                </h4>
                <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                  {b.desc}
                </p>
                <p className="text-[10px] text-[#FF7819] font-bold leading-relaxed">
                  {b.descHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Static Infrastructure Footer */}
      <div className="text-center text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest py-5 border-t border-gray-200/50 w-full px-4 bg-white/50 backdrop-blur-sm">
        © 2026 CoverMantra • Verified ISO Security • Secure 256-bit Encryption
      </div>

    </div>
  );
}