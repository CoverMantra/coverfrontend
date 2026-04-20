"use client";

import React, { useEffect } from "react"; // FIXED: React import added
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Partners from "../our_partners/page";
import { 
  CheckCircle, 
  Clock, 
  FileText, 
  EyeOff, 
  Shield, 
  Zap, 
  Target, 
  ArrowRight,
  ShieldCheck
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
    <div className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans selection:bg-[#FF7819]/30">
      
      {/* HERO SECTION - DARK PREMIUM LOOK */}
      <section className="relative text-center pt-32 pb-24 px-6 bg-[#08101E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF7819]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF7819]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-xs font-black tracking-widest uppercase mb-8"
          >
            <Zap size={14} /> Shaping The Future of Fintech
          </motion.div>

          <h1 className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Driving Innovation in <br/> 
            <span className="text-[#FF7819]">Global Finance</span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 leading-relaxed font-medium">
            At <span className="text-white font-bold">CoverMantra</span>, we are redefining how people interact with money. Our cutting-edge financial technology delivers seamless, secure, and intelligent solutions for modern banking and investments.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-white rounded-[3.5rem] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#FF7819]/10 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="w-16 h-16 bg-[#FFF4E5] rounded-2xl flex items-center justify-center text-[#FF7819] mb-8 shadow-inner">
                <Target size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#08101E] mb-6 tracking-tight">
                Our Mission
              </h2>
              <p className="text-[#08101E]/70 text-lg leading-relaxed font-medium mb-6">
                We aim to bridge the gap between technology and finance by providing cutting-edge fintech solutions. 
              </p>
              <p className="text-[#08101E]/70 text-lg leading-relaxed font-medium">
                Whether you are an individual looking to grow your savings or a business aiming to streamline payments, we deliver tools that drive innovation and create financial freedom.
              </p>
            </div>
            
            <div className="relative" data-aos="zoom-in">
                <div className="absolute inset-0 bg-[#FF7819]/10 blur-[80px] rounded-full"></div>
                <img
                src="https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-7963.jpg"
                alt="Our Mission"
                className="relative w-full max-w-md mx-auto rounded-[2.5rem] shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-[#08101E] py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 data-aos="fade-up" className="text-3xl md:text-6xl font-black text-white tracking-tight">
              Why We’re <span className="text-[#FF7819]">Different</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#FF7819] mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(255,120,25,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differences.map((item, i) => (
              <motion.div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -15 }}
                className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center group hover:bg-[#FF7819] transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto bg-[#FF7819]/20 text-[#FF7819] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-[#FF7819] transition-colors">
                  {/* React.cloneElement fixed with import above */}
                  {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-lg font-black text-white mb-3 tracking-tight group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-white/80">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="py-10">
        <Partners />
      </div>

      {/* PRINCIPLES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-black text-[#08101E] mb-8 tracking-tight">
            Our Guiding Principles
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-[#08101E]/60 max-w-3xl mx-auto mb-16 font-medium">
            Financial success is about empowering lives. Our approach is built on three core pillars:
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {principles.map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 200}
                className="p-10 bg-white rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border-b-8 border-[#FF7819] hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-black text-[#08101E] mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#08101E]/60 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-6xl mx-auto mb-24 px-6">
        <motion.div 
           whileHover={{ scale: 1.02 }}
           className="relative bg-gradient-to-br from-[#FF7819] to-[#E65C00] rounded-[4rem] p-12 md:p-20 text-white text-center overflow-hidden shadow-[0_30px_60px_-15px_rgba(255,120,25,0.4)]"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 data-aos="fade-up" className="relative z-10 text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Empower Your <br/> Financial Journey
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="relative z-10 max-w-3xl mx-auto mb-10 text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            Take control of your future with smart tools, expert insights, and a trusted platform designed to help you grow, save, and invest with confidence.
          </p>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="relative z-10 px-10 py-5 bg-[#08101E] text-white font-black rounded-2xl flex items-center gap-3 mx-auto shadow-2xl hover:bg-black transition-colors"
          >
            Get Started Now <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER STRIP */}
      <div className="bg-[#FF7819] py-8 text-center text-white font-black text-xs md:text-sm tracking-[0.4em] uppercase">
        CoverMantra — Empowering Digital Wealth © 2026
      </div>
    </div>
  );
}