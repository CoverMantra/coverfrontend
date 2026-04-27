"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/useAuthStore";
import LoginModal from "./LoginModal";
import GlobalModal from "./globalmodel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

// Swiper CSS (Next.js 13+ standard)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleApplyNow = () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      router.push("/personal-loans");
    } else {
      setLoginOpen(true);
    }
  };

  const images = [
    "/image/Home1.png",
    "/image/Home2.png",
    "/image/Home3.png"
  ];

  return (
    <section className="relative bg-[#08101E] min-h-[100svh] flex flex-col pt-20 sm:pt-24 md:pt-32 text-white overflow-hidden">
      
      {/* 🔱 Mantra Strip */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 opacity-100 hidden lg:block pointer-events-none">
        <div className="flex items-center gap-4 text-white font-serif tracking-[0.4em] uppercase text-xs font-bold">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/50 to-white" />
          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">सत्यम शिवम सुंदरम</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-white/50 to-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pb-16 md:pb-48 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-20 w-full flex-1 mt-4 md:mt-0">
        
        {/* RIGHT SIDE IMAGE SLIDER - Fixed Stack Issue */}
        <div className="w-full md:w-1/2 flex justify-center relative order-2 h-[280px] sm:h-[350px] md:h-[600px] mt-4 md:mt-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF690B]/10 rounded-full blur-[100px] -z-10" />
          
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }} // Isse images ek ke peeche ek nahi rahengi
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={true}
            className="h-full w-full"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center bg-transparent">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={src}
                    alt="CoverMantra Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain drop-shadow-[0_20px_60px_rgba(255,105,11,0.2)]"
                    priority={i === 0}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Floating RBI Badge */}
          <div className="absolute top-4 right-0 bg-[#1A2332]/80 p-3 rounded-2xl border border-white/10 z-40 flex items-center gap-3 backdrop-blur-md shadow-2xl">
            <div className="w-8 h-8 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 font-bold">✓</div>
            <div>
              <p className="text-[8px] font-black text-white/40 uppercase leading-none">Status</p>
              <p className="text-xs font-black text-white">RBI Registered</p>
            </div>
          </div>
        </div>

        {/* LEFT CONTENT SECTION */}
        <div className="w-full md:w-1/2 text-center md:text-left z-30 order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#FF690B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF690B]"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60">India's Trusted Finance Partner</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Finance ka <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF690B] to-[#FFD700]">
              Smart Mantra
            </span>
          </h1>

          <p className="mt-6 text-sm md:text-lg text-white/70 max-w-lg mx-auto md:mx-0 font-medium">
            Experience seamless personal loans, instant insurance covers, and 
            tailored financial growth — all in one secure platform.
          </p>

          {/* 3D Stats Grid */}
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
            {[{ val: "50M+", lbl: "Users" }, { val: "4.8★", lbl: "Rating" }, { val: "2Cr+", lbl: "Disbursed" }].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
                <p className="text-xl font-black text-[#FF690B]">{stat.val}</p>
                <p className="text-[8px] font-bold text-white/40 uppercase tracking-tighter mt-1">{stat.lbl}</p>
              </div>
            ))}
          </div>

          {/* APPLY NOW BUTTON - CHOTTA TEXT VERSION */}
          <div className="mt-8 md:mt-10">
            <button
              onClick={handleApplyNow}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-white text-[#08101E] font-bold text-base rounded-2xl shadow-xl hover:scale-105 transition-all"
            >
              <span className="tracking-tight uppercase">Apply Now</span>
              <div className="w-7 h-7 bg-[#FF690B] rounded-full flex items-center justify-center group-hover:translate-x-1.5 transition-transform shadow-lg">
                <span className="text-white text-sm">→</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-30">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path d="M0 120L1440 120L1440 0C1100 60 700 60 0 0L0 120Z" fill="white" />
        </svg>
      </div>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <GlobalModal />

      <style jsx global>{`
        .swiper-fade .swiper-slide { pointer-events: none; transition-property: opacity; }
        .swiper-fade .swiper-slide-active { pointer-events: auto; }
        .swiper-pagination-bullet { background: white !important; opacity: 0.3; }
        .swiper-pagination-bullet-active { background: #FF690B !important; opacity: 1; width: 20px !important; border-radius: 10px; }
      `}</style>
    </section>
  );
}