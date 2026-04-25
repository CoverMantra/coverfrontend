"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, Target, Zap, Heart, ShieldCheck, Compass, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LivingAloneBlog() {
  // Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const articleData = {
    headline: "The Quiet Revolution: Why Living Alone Is Your Greatest Opportunity",
    subhead: "Solitude can unlock unmatched independence, focus, and inner peace.",
    sections: [
      {
        title: "Discover Yourself",
        icon: <Compass className="w-8 h-8 text-[#FF7819]" />,
        content: "Living alone provides the headspace to truly understand your own priorities and values. It removes external noise, allowing you to develop a clear sense of direction."
      },
      {
        title: "Unshakeable Independence",
        icon: <ShieldCheck className="w-8 h-8 text-[#FF7819]" />,
        content: "From fixing a leaky faucet to managing a budget, taking ownership builds self-reliance. Every small challenge overcome compounds into profound confidence."
      },
      {
        title: "Elevate Productivity",
        icon: <Zap className="w-8 h-8 text-[#FF7819]" />,
        content: "Solitude minimizes distractions. Dedicate undisturbed energy to professional work or deep creative thinking in a focused environment."
      },
      {
        title: "Peaceful Solitude",
        icon: <Heart className="w-8 h-8 text-[#FF7819]" />,
        content: "Being alone teaches you to genuinely enjoy your own company. This cultivated inner peace is a powerful tool against modern-day stress."
      },
      {
        title: "Emotional Resilience",
        icon: <Target className="w-8 h-8 text-[#FF7819]" />,
        content: "You develop coping mechanisms without an immediate crutch. Navigating setbacks with patience and clarity is an invaluable life skill."
      },
      {
        title: "Authentic Lifestyle",
        icon: <Sparkles className="w-8 h-8 text-[#FF7819]" />,
        content: "The freedom to design your routines and space is the ultimate luxury. Set a schedule that serves your highest self for a truly intentional life."
      }
    ]
  };

  return (
    <div className="bg-[#FFF4E5] text-gray-900 min-h-screen font-sans selection:bg-[#FF7819] selection:text-white">
      
      {/* 🚀 TOP PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#FF7819] z-50 origin-left" style={{ scaleX }} />

      {/* 🏔 HERO SECTION */}
      <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Solitude"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF4E5]/50 to-[#FFF4E5]" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center" data-aos="zoom-out">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            Personal Evolution
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 italic uppercase text-[#08101E]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] to-[#FF690B]">Quiet</span> <br /> 
            Revolution
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            {articleData.subhead}
          </p>
        </div>
      </header>

      {/* 📖 CONTENT BODY */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* QUOTE SECTION */}
        <div className="mb-24" data-aos="fade-up">
          <div className="bg-white/60 backdrop-blur-xl border border-white p-10 md:p-16 rounded-[4rem] relative overflow-hidden group shadow-xl">
             <Quote className="absolute -top-10 -left-10 w-48 h-48 text-[#FF7819]/5 group-hover:rotate-12 transition-transform" />
             <p className="text-3xl md:text-5xl font-serif italic text-center relative z-10 leading-snug text-gray-800">
               "Loneliness is the poverty of self; <span className="text-[#FF7819]">solitude</span> is the richness of self."
             </p>
          </div>
        </div>

        {/* 3D GLASS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articleData.sections.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotateY: 8, rotateX: 4, translateZ: 10 }}
              className="group p-8 rounded-[2.5rem] bg-white/50 backdrop-blur-sm border border-white shadow-lg hover:shadow-[#FF7819]/10 transition-all cursor-default"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-6 p-4 inline-block rounded-2xl bg-[#FF7819]/10 group-hover:bg-[#FF7819] transition-colors duration-500">
{React.cloneElement(item.icon as React.ReactElement<any>, { 
  className: "w-8 h-8 text-[#FF7819] group-hover:text-white transition-colors" 
})}              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-[#08101E]">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🖼 CALL TO ACTION SECTION */}
        <section className="mt-32 relative rounded-[4rem] overflow-hidden h-[450px] shadow-2xl" data-aos="fade-up">
           <img 
            src="https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[4s]"
            alt="Calmness"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#08101E]/90 via-[#08101E]/40 to-transparent flex items-center p-8 md:p-20">
             <div className="max-w-md space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">
                  Embrace <br /> <span className="text-[#FF7819]">The Silence</span>
                </h2>
                <p className="text-gray-300 font-medium italic">Living alone is an active creation of a sanctuary where you grow without noise.</p>
                <button className="px-10 py-4 bg-[#FF7819] text-white font-black rounded-2xl hover:bg-white hover:text-[#FF7819] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs">
                   Start Your Journey
                </button>
             </div>
           </div>
        </section>

      </main>

      {/* 🏁 FOOTER */}
      <footer className="py-20 border-t border-[#FF7819]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <p className="text-3xl font-black italic tracking-tighter uppercase text-[#08101E]">
            Live <span className="text-[#FF7819]">Authentically</span>
          </p>
          <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <span>Focus</span>
            <span>•</span>
            <span>Freedom</span>
            <span>•</span>
            <span>Growth</span>
          </div>
          <p className="text-[10px] font-bold opacity-30 mt-10 tracking-widest uppercase">
            © 2026 Solo Living Perspectives • Master Your Space
          </p>
        </div>
      </footer>
    </div>
  );
}