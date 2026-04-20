"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import GlobalModal from "./globalmodel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

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
    <section className="relative bg-[#FFF4E5] overflow-hidden pt-16 md:pt-20">
      {/* Satyam Shivam Sundaram Bar - As per your instruction */}
      <div className="w-full flex justify-center items-center py-3 bg-[#FFF4E5] border-b border-[#FF690B]/20">
        <p className="text-sm md:text-lg font-serif text-[#138808] tracking-[0.15em] font-semibold flex items-center gap-2">
          🔱 सत्यम शिवम सुंदरम 🔱
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-20 flex flex-col md:flex-row items-center gap-12 relative">
        
        {/* Left Content - Modern 3D Card Style */}
        <div className="md:w-1/2 text-center md:text-left z-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-md rounded-3xl border border-white shadow-sm mb-6">
            <div className="w-2 h-2 bg-[#FF690B] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#08101E]">India's Trusted Finance Partner</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#08101E] tracking-tighter">
            Finance ka <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF690B] via-[#FF8C00] to-[#FF9933]">Smart Mantra</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#08101E]/80 max-w-lg mx-auto md:mx-0">
            Personalized loans, instant insurance, and smart credit solutions — 
            all in one secure platform.
          </p>

          {/* Trust Stats - 3D Card Style */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/60 hover:-translate-y-1 transition-all">
              <p className="text-3xl font-bold text-[#FF690B]">50M+</p>
              <p className="text-xs text-[#08101E]/70 mt-1">Happy Users</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/60 hover:-translate-y-1 transition-all">
              <p className="text-3xl font-bold text-[#FF690B]">4.8★</p>
              <p className="text-xs text-[#08101E]/70 mt-1">Rating</p>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/60 hover:-translate-y-1 transition-all">
              <p className="text-3xl font-bold text-[#FF690B]">2Cr+</p>
              <p className="text-xs text-[#08101E]/70 mt-1">Downloads</p>
            </div>
          </div>

          {/* CTA Button - 3D Modern Style */}
          <div className="mt-12">
            <button
              onClick={handleApplyNow}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#FF690B] to-[#FF9933] text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Apply Now
                <span className="text-xl group-hover:rotate-12 transition">→</span>
              </span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </div>
        </div>

        {/* Right Side - 3D Floating Images with Swiper */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md md:max-w-lg">
            {/* Subtle Glow Background */}
            <div className="absolute -inset-10 bg-gradient-to-br from-[#FF690B]/10 to-transparent rounded-[4rem] blur-3xl -z-10" />

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2800,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={800}
              className="w-full aspect-[4/3.5] rounded-3xl overflow-hidden shadow-2xl"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i} className="relative">
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Financial Journey ${i + 1}`}
                      fill
                      className="object-contain drop-shadow-2xl scale-95 hover:scale-100 transition-transform duration-700"
                      priority={i === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-white/70 flex items-center gap-2 text-sm font-medium">
              <span className="text-[#FF690B]">✅</span>
              RBI Registered Partners
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider - Modern Clean */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-24 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L30,213.3C60,203,120,181,180,192C240,203,300,245,360,245.3C420,245,480,203,540,197.3C600,192,660,224,720,218.7C780,213,840,171,900,165.3C960,160,1020,192,1080,208C1140,224,1200,224,1260,213.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Modals */}
      <LoginModal 
        isOpen={loginOpen} 
        onClose={() => setLoginOpen(false)} 
      />
      <GlobalModal />
    </section>
  );
}