"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import GlobalModal from "./globalmodel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

// Swiper Essential Styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleApplyNow = () => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");
    if (co_phone && co_token) {
      router.push("/personal-loans");
    } else {
      setLoginOpen(true);
    }
  };

  const images = [
    "/image/man1img.png",
    "/image/Woman.png",
    "/image/manimage.png",
  ];

  return (
    <section className="relative bg-[#08101E] overflow-hidden min-h-screen md:min-h-0 flex flex-col pt-20 sm:pt-24 md:pt-28 text-white">
      
      {/* 🔱 Satyam Shivam Sundaram - Subtle Dark Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 opacity-20 pointer-events-none hidden md:block">
         <div className="flex items-center gap-4 text-white font-serif tracking-[0.4em] uppercase text-xs font-bold">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white" />
            सत्यम शिवम सुंदरम
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-32 md:pb-48 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-20 w-full">
        
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left z-30 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF690B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF690B]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60">India's Trusted Finance Partner</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
          >
            Finance ka <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF690B] via-[#FF8C00] to-[#FFD700] drop-shadow-[0_0_30px_rgba(255,105,11,0.3)]">
              Smart Mantra
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base md:text-xl text-white/70 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed"
          >
            Experience seamless personal loans, instant insurance covers, and 
            tailored financial growth — all in one secure platform.
          </motion.p>

          {/* 3D Stats Grid - Glassmorphism Style */}
          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
            {[
              { val: "50M+", lbl: "Users" },
              { val: "4.8★", lbl: "Rating" },
              { val: "2Cr+", lbl: "Disbursed" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/10 shadow-2xl group hover:scale-105 hover:bg-white/10 transition-all duration-300">
                <p className="text-xl md:text-2xl font-black text-[#FF690B]">{stat.val}</p>
                <p className="text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-tighter mt-1">{stat.lbl}</p>
              </div>
            ))}
          </div>

          <motion.div className="mt-10 md:mt-12">
            <button
              onClick={handleApplyNow}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-4 px-10 py-4 bg-white text-[#08101E] font-black text-lg rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-all"
            >
              <span>APPLY NOW</span>
              <div className="w-8 h-8 bg-[#FF690B] rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg">
                <span className="text-white">→</span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Side Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center relative order-1 md:order-2 h-[380px] sm:h-[480px] md:h-[580px]">
          {/* Main Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FF690B]/20 rounded-full blur-[120px] -z-10" />
          
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            className="h-full w-full custom-swiper"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={src}
                    alt="CoverMantra Hero"
                    fill
                    className="object-contain drop-shadow-[0_20px_80px_rgba(255,105,11,0.2)]"
                    priority={i === 0}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating RBI Badge - Dark Version */}
          <div className="absolute top-0 right-0 md:top-10 md:-right-5 bg-[#1A2332] p-3 md:p-4 rounded-2xl shadow-2xl border border-white/10 z-40 flex items-center gap-3 backdrop-blur-md">
            <div className="w-8 h-8 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 font-bold">✓</div>
            <div>
              <p className="text-[10px] font-black text-white/40 uppercase leading-none">Status</p>
              <p className="text-xs md:text-sm font-black text-white">RBI Registered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Wave Divider - Blends into Next White Section */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-30">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L1440 120L1440 0C1100 60 700 60 0 0L0 120Z" fill="white" />
        </svg>
      </div>

      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet { background: #white; opacity: 0.2; }
        .custom-swiper .swiper-pagination-bullet-active { background: #FF690B !important; opacity: 1; width: 24px; border-radius: 10px; }
        .custom-swiper { padding-bottom: 40px !important; }
      `}</style>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <GlobalModal />
    </section>
  );
}