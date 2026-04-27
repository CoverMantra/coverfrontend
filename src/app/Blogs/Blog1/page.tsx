"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ShieldCheck, TrendingUp, Heart, Briefcase, AlertTriangle, ArrowRight, Zap } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InsuranceBlogPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* 🚀 PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-red-600 z-50 origin-left" style={{ scaleX }} />

      {/* 🏔 HERO SECTION (3D Background Feel) */}
      <header className="relative pt-32 pb-56 px-6 bg-[#08101E] rounded-b-[5rem] shadow-2xl overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF7819]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">
            <AlertTriangle className="w-3 h-3" /> Critical Life Choice
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
            What If You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500">Had To Choose</span> <br />
            Savings or Future?
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto italic leading-relaxed opacity-90">
            The Quiet Power of Being Prepared
          </p>
        </div>
      </header>

      {/* 📖 MAIN CONTENT AREA */}
      <main className="max-w-5xl mx-auto -mt-32 px-6 pb-32 relative z-20">
        
        {/* 3D PERSPECTIVE QUOTE CARD */}
        <motion.div 
          initial={{ rotateX: 15 }}
          whileInView={{ rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-16 bg-white rounded-[3rem] shadow-2xl border border-gray-100 mb-16 transform-gpu"
          data-aos="fade-up"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900 border-l-[12px] border-red-600 pl-8 italic leading-snug">
            Every day, you work hard, save diligently, and plan for a brighter tomorrow. You're building a life—a home, a career, a legacy. But nestled within this beautiful construction is a quiet, powerful fear: <span className="text-red-600 underline decoration-red-200">the unexpected.</span>
          </p>
        </motion.div>

        <section className="space-y-16">
          
          {/* THE CHOICE SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-right">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                A sudden illness, a major accident, a natural disaster—these events don't just happen to "other people." They are the random moments that force you to make a heartbreaking choice.
              </p>
              <div className="flex flex-col gap-4 text-red-700 font-black italic uppercase tracking-tighter text-xl">
                <span>- Empty hard-earned savings?</span>
                <span>- Sell cherished assets?</span>
                <span>- Sacrifice family needs?</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />
              <div className="relative bg-[#08101E] p-8 rounded-[2.5rem] border border-red-600/30 transform hover:rotate-3 transition-transform duration-500">
                <ShieldCheck className="w-16 h-16 text-red-600 mb-4" />
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">
                  The Safety Net Isn't a Luxury—It's a Strategy.
                </h2>
              </div>
            </div>
          </div>

          {/* RISK TRANSFER BLOCK */}
          <div className="p-10 bg-white/40 backdrop-blur-md rounded-[3.5rem] border border-white shadow-xl" data-aos="fade-up">
            <p className="text-xl text-gray-800 font-medium mb-6">
              This isn't a conversation about buying a "policy." This is a discussion about buying <span className="text-red-600 font-bold uppercase">time</span>, <span className="text-red-600 font-bold uppercase">stability</span>, and <span className="text-red-600 font-bold uppercase">unshakeable peace of mind</span>.
            </p>
            <div className="flex items-start gap-4 p-6 bg-[#08101E] rounded-2xl text-gray-300">
               <Zap className="text-orange-500 shrink-0 w-8 h-8" />
               <p className="italic">
                 Think of your insurance as the **ultimate financial risk transfer.** You pay a small, predictable fee today so you never have to face a devastating, unpredictable cost tomorrow.
               </p>
            </div>
          </div>

          {/* TRUE COST OF GOING WITHOUT (3D CARDS) */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-black text-red-700 uppercase italic tracking-tighter">The True Cost of "Going Without"</h3>
              <p className="text-gray-600 mt-2">The real cost isn't the premium you saved. It's the cost of:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Lost Momentum", desc: "Watching years of saving vanish in weeks, forcing you to start building from zero again." },
                { title: "Forced Sacrifice", desc: "Having to pull a child out of college or sell the family home due to medical bills." },
                { title: "Weight of Worry", desc: "The constant, low-level anxiety that distracts you from enjoying the present moment." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, rotateY: 10 }}
                  className="p-8 bg-white rounded-3xl border border-red-50 shadow-lg hover:shadow-red-200/50 transition-all cursor-default"
                >
                  <h4 className="text-red-600 font-black uppercase italic mb-4">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ARCHITECT SECTION */}
          <section className="bg-gradient-to-br from-[#08101E] to-[#121A26] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden" data-aos="zoom-in">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Briefcase className="w-10 h-10 text-red-600" />
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                    Architect of Your <br /> Own Unstoppable Future
                  </h2>
                </div>
                <p className="text-xl text-gray-400 italic mb-12">Insurance is the bedrock of a confident life. It allows you to:</p>
                
                <div className="space-y-8">
                  {[
                    { icon: <TrendingUp className="text-red-500" />, label: "Be Audacious", desc: "Take that career risk, start that business, or move into that dream home, knowing your foundation is protected." },
                    { icon: <Heart className="text-red-500" />, label: "Be Present", desc: "Stop checking your bank account with dread after a major event and focus entirely on recovery." },
                    { icon: <ShieldCheck className="text-red-500" />, label: "Be Generational", desc: "Secure your legacy, ensuring that your dreams for your children are protected, regardless of what happens." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="text-xl font-black uppercase italic text-red-500">{benefit.label}</h5>
                        <p className="text-gray-400 font-medium">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* FINAL CTA */}
          <div className="text-center space-y-10 py-20" data-aos="fade-up">
            <p className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter max-w-3xl mx-auto leading-snug">
              Choosing the right protection is an act of <span className="text-red-600">courage</span>, a declaration that you value your future enough to shield it.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/contact" 
                className="inline-flex items-center gap-4 px-12 py-6 text-xl md:text-2xl font-black text-white bg-red-600 rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-[#08101E] transition-all duration-500 group"
              > 
                Fortify Your Future Today <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
            <p className="text-sm font-black uppercase tracking-[0.4em] text-gray-400">
              Don't let a single unforeseen event define your story.
            </p>
          </div>

        </section>
      </main>

      {/* 🏁 FOOTER */}
      <footer className="bg-white py-20 border-t border-red-100 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
           <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
           <p className="text-2xl font-black text-[#08101E] uppercase italic tracking-tighter">
             Secure <span className="text-red-600">Legacy</span>
           </p>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
             Financial Foundation © 2026 • Protection First
           </p>
        </div>
      </footer>
    </div>
  );
}