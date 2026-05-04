"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Partners from "../our_partners/page";
// LucideProps import kiya hai type casting ke liye
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  EyeOff, 
  Shield, 
  Zap, 
  Target, 
  ArrowRight,
  ShieldCheck,
  LucideProps 
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Icons ko explicitly React.ReactElement<LucideProps> define kiya hai
  const differences = [
    { icon: <CheckCircle />, title: "Fast Approval", desc: "Get approved within minutes with our quick verification process." },
    { icon: <Clock />, title: "Quick Disbursal", desc: "Funds are transferred promptly, ensuring access when you need it most." },
    { icon: <FileText />, title: "100% Paperless", desc: "Say goodbye to tedious paperwork with our fully digital process." },
    { icon: <EyeOff />, title: "No Hidden Charges", desc: "Transparent pricing with no surprise fees—ever." },
    { icon: <ShieldCheck />, title: "Safe Ecosystem", desc: "Secured in a highly protected and reliable digital environment." },
  ];

  const principles = [
    { title: "Integrity", desc: "Upholding the highest standards of transparency and trust in every interaction." },
    { title: "Innovation", desc: "Continuously evolving technology to provide the smartest and most efficient solutions." },
    { title: "Empowerment", desc: "Equipping our users with tools to take control of their financial future." },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans selection:bg-[#FF7819]/30 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative text-center pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 bg-[#08101E] overflow-hidden">
        {/* 🔱 Mantra Strip */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 opacity-100 hidden lg:block pointer-events-none">
          <div className="flex items-center gap-4 text-white font-serif tracking-[0.4em] uppercase text-xs font-bold">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/50 to-white" />
            <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">सत्यम शिवम सुंदरम</span>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-white/50 to-white" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FF7819]/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#FF7819]/5 rounded-full blur-[70px] md:blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 md:mb-8"
          >
            <Zap size={14} /> Shaping The Future of Fintech
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter">
            Driving Innovation in <br className="hidden sm:block"/> 
            <span className="text-[#FF7819]">Global Finance</span>
          </h1>

          <p className="text-base md:text-xl max-w-3xl mx-auto text-gray-400 leading-relaxed font-medium px-2">
            At <span className="text-white font-bold">CoverMantra</span>, we are redefining how people interact with money. Our cutting-edge financial technology delivers seamless and intelligent solutions.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="relative bg-white rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#FF7819]/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div data-aos="fade-right">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFF4E5] rounded-xl md:rounded-2xl flex items-center justify-center text-[#FF7819] mb-6 md:mb-8 shadow-inner">
                <Target size={32} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-[#08101E]/70 text-base md:text-lg leading-relaxed font-medium mb-6">
                We aim to bridge the gap between technology and finance by providing cutting-edge fintech solutions. 
              </p>
              <p className="text-[#08101E]/70 text-base md:text-lg leading-relaxed font-medium">
                Whether you are an individual or a business, we deliver tools that drive innovation and create financial freedom.
              </p>
            </div>
            
            <div className="relative order-first md:order-last" data-aos="zoom-in">
              <div className="absolute inset-0 bg-[#FF7819]/10 blur-[40px] md:blur-[80px] rounded-full"></div>
              <img
                src="https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-7963.jpg"
                alt="Our Mission"
                className="relative w-full max-w-sm md:max-w-md mx-auto rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-8 border-white"
              />
            </div>
          </div>
        </div>
      </section>
{/* MISSION SECTION ENDS */}

{/* 🗺️ JOURNEY CHART SECTION */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24" data-aos="fade-up">
  <div className="text-center mb-10 md:mb-16">
    <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4">
      Timeline
    </div>
    <h2 className="text-3xl md:text-6xl font-black text-[#08101E] tracking-tight">
      The <span className="text-[#FF7819]">CoverMantra</span> Story
    </h2>
    <div className="w-20 h-1.5 bg-[#FF7819] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(255,120,25,0.3)]"></div>
  </div>

  <div className="relative group">
    {/* Glassmorphism Frame */}
    <div className="relative bg-white p-3 md:p-6 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-[#FF7819]/10 overflow-hidden">
      
      {/* Scrollable Container for Mobile Readability */}
      <div className="overflow-x-auto custom-scrollbar rounded-[1.5rem] md:rounded-[3rem]"> 
        <motion.img
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          src="/image/CM-Poster.jpeg" // Update with your actual image path
          alt="CoverMantra Journey: Shuruaat se Bharosa tak"
          className="w-full h-auto min-w-[800px] md:min-w-full cursor-zoom-in"
          onClick={() => window.open('/path-to-your-image/journey-poster.jpg', '_blank')}
        />
      </div>

      {/* Subtle Overlay Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none border-[12px] md:border-[20px] border-white rounded-[2.5rem] md:rounded-[4rem]"></div>
    </div>

    {/* Decorative Background Elements */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF7819]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF7819]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
  </div>

  {/* Mobile Interactivity Hint */}
  <div className="flex flex-col items-center gap-3 mt-8 md:hidden">
    <div className="flex items-center gap-2 text-[#08101E]/40 font-bold text-[10px] uppercase tracking-widest">
      <span>← Scroll to explore</span>
      <div className="w-1 h-1 rounded-full bg-[#FF7819]"></div>
      <span>Tap to zoom →</span>
    </div>
  </div>
</section>

{/* WHY DIFFERENT SECTION STARTS */}
      {/* WHY DIFFERENT */}
      <section className="bg-[#08101E] py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 data-aos="fade-up" className="text-3xl md:text-6xl font-black text-white tracking-tight">
              Why We’re <span className="text-[#FF7819]">Different</span>
            </h2>
            <div className="w-20 md:w-24 h-1 md:h-1.5 bg-[#FF7819] mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_20px_rgba(255,120,25,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differences.map((item, i) => (
              <motion.div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -10 }}
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-[1.5rem] md:rounded-[2.5rem] border border-white/10 text-center group hover:bg-[#FF7819] transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-[#FF7819]/20 text-[#FF7819] rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-white transition-colors">
                  {/* FIX: Type casting to React.ReactElement<LucideProps> */}
                  {React.cloneElement(item.icon as React.ReactElement<LucideProps>, { size: 24 })}
                </div>
                <h3 className="text-base md:text-lg font-black text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed group-hover:text-white/80">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="py-6 md:py-10">
        <Partners />
      </div>

      {/* PRINCIPLES */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-black text-[#08101E] mb-6 md:mb-8 tracking-tight">
            Our Guiding Principles
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-base md:text-lg text-[#08101E]/60 max-w-3xl mx-auto mb-12 md:mb-16 font-medium">
            Financial success is about empowering lives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {principles.map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 200}
                className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border-b-4 md:border-b-8 border-[#FF7819] transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-black text-[#08101E] mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#08101E]/60 text-sm md:text-base font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto mb-16 md:mb-24 px-4 sm:px-6">
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="relative bg-gradient-to-br from-[#FF7819] to-[#E65C00] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 text-white text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-10 -right-10 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 data-aos="fade-up" className="relative z-10 text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">
            Empower Your <br className="hidden sm:block"/> Financial Journey
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="relative z-10 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-xl text-white/90 font-medium leading-relaxed">
            Take control of your future with smart tools designed for your confidence.
          </p>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-8 py-4 md:px-10 md:py-5 bg-[#08101E] text-white text-sm md:text-base font-black rounded-xl md:rounded-2xl flex items-center gap-3 mx-auto shadow-2xl"
          >
            Get Started Now <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-[#FF7819] py-6 md:py-8 text-center text-white font-black text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase px-4">
        CoverMantra — Empowering Digital Wealth © 2026
      </div>
    </div>
  );
}