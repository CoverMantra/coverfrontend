"use client";

import React, { useEffect } from "react";
import { 
  FaStar, FaRunning, FaTrophy, FaSmile, 
  FaLightbulb, FaCheckCircle, FaQuoteLeft, FaArrowRight, FaChartLine 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmallWinsBlog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF4E5] font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* 🚀 PREMIUM HERO HEADER */}
      <header className="relative bg-[#08101E] pt-32 pb-40 px-6 rounded-b-[3rem] md:rounded-b-[6rem] overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-bold mb-6 italic">
            <FaChartLine size={16} /> The Compound Effect of Progress
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic leading-[1.1]">
            The Power of <span className="text-emerald-500">Small Wins</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Tiny achievements are the fuel for big success. Learn how recognizing daily victories can transform your trajectory.
          </p>
        </div>
      </header>

      {/* 🧩 BENTO GRID CONTENT */}
      <section className="max-w-6xl mx-auto px-6 -mt-24 relative z-20 pb-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Section 1: What Are Small Wins */}
          <div 
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-emerald-50 group hover:shadow-2xl transition-all"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#08101E] rounded-2xl flex items-center justify-center text-emerald-500 shadow-lg group-hover:rotate-12 transition-transform">
                <FaRunning size={28} />
              </div>
              <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight">What Are Small Wins?</h2>
            </div>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="indent-8">
                Small wins are <strong className="text-emerald-600">tiny achievements you accomplish every day</strong>—like finishing a task, learning a skill, or sticking to a routine. Though minor individually, <span className="underline decoration-emerald-200 decoration-4 underline-offset-4 font-bold text-[#08101E]">they build momentum</span> toward bigger goals.
              </p>
              <p className="flex items-center gap-3 font-medium bg-emerald-50 p-4 rounded-2xl text-emerald-800">
                <FaStar className="text-emerald-500 shrink-0" />
                Think of small wins as stepping stones; each one strengthens your confidence and moves you closer to success.
              </p>
            </div>
          </div>

          {/* Section 2: Why Small Wins Matter */}
          <div 
            className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-emerald-200"
            data-aos="fade-left"
          >
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <FaSmile size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase italic mb-6">Why It Matters</h2>
            <div className="space-y-6 opacity-90">
              <p className="text-lg leading-relaxed">
                Celebrating small victories triggers <span className="font-black text-emerald-200">positive reinforcement</span> in your brain, boosting motivation and focus.
              </p>
              <p className="text-base italic bg-white/10 p-5 rounded-2xl border border-white/10">
                When we focus on progress rather than perfection, stress reduces, and a sense of accomplishment grows.
              </p>
            </div>
          </div>

          {/* Section 3: Tips & Checklist */}
          <div 
            className="lg:col-span-1 bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-8">
              <FaTrophy className="text-emerald-500" size={24} />
              <h2 className="text-xl font-black text-[#08101E] uppercase italic">Harness The Power</h2>
            </div>
            <ul className="space-y-5">
              {[
                "Break big goals into smaller steps.",
                "Celebrate every small victory.",
                "Track progress with a journal.",
                "Treat setbacks as lessons.",
                "Share achievements with friends."
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <div className="mt-1 bg-emerald-100 text-emerald-600 p-1.5 rounded-full group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                    <FaCheckCircle size={14} />
                  </div>
                  <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Real-Life Examples */}
          <div 
            className="lg:col-span-2 bg-[#08101E] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl"
            data-aos="fade-up"
          >
            <FaLightbulb className="absolute -top-10 -right-10 text-white/5 w-64 h-64 rotate-12 group-hover:text-emerald-500/10 transition-colors" />
            <h2 className="text-3xl font-black uppercase italic mb-8 relative z-10">Real-World <span className="text-emerald-500">Impact</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-emerald-400 font-black mb-2 tracking-widest text-xs uppercase">Deep Work</p>
                <p className="text-sm text-gray-300">Authors like Cal Newport use daily focus blocks.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-emerald-400 font-black mb-2 tracking-widest text-xs uppercase">Momentum</p>
                <p className="text-sm text-gray-300">Entrepreneurs break projects into tiny tasks.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-emerald-400 font-black mb-2 tracking-widest text-xs uppercase">Creativity</p>
                <p className="text-sm text-gray-300">Designers declutter for clarity and focus.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Quote */}
          <div 
            className="lg:col-span-3 bg-white p-10 rounded-[3rem] border-2 border-dashed border-emerald-200 flex flex-col md:flex-row items-center gap-8 shadow-inner"
            data-aos="zoom-in"
          >
            <div className="bg-emerald-500 text-white p-6 rounded-full shadow-xl shadow-emerald-100">
              <FaQuoteLeft size={30} />
            </div>
            <p className="text-2xl md:text-4xl font-black text-[#08101E] italic tracking-tighter leading-tight text-center md:text-left">
              "Success is the sum of small efforts, repeated day in and day out."
              <span className="block text-emerald-500 text-lg mt-2 not-italic font-bold uppercase tracking-widest">— Robert Collier</span>
            </p>
          </div>

          {/* Section 6: Long-Term Impact */}
          <div 
            className="lg:col-span-3 bg-emerald-50 rounded-[3rem] p-12 md:p-16 border border-emerald-100 text-center relative overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-[#08101E] uppercase italic mb-6">The <span className="text-emerald-600">Long-Term</span> Compound</h2>
              <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
                Small wins compound over time. By consistently achieving little victories, you <span className="text-[#08101E] font-black">build habits, confidence, and momentum</span> that lead to extraordinary results.
              </p>
              <button className="bg-[#08101E] text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-emerald-600 transition-all flex items-center gap-4 mx-auto group shadow-2xl">
                Start Your Journey <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 FINAL FOOTER */}
      <footer className="bg-[#08101E] text-white py-16 px-6 text-center rounded-t-[3rem] md:rounded-t-[6rem]">
        <div className="max-w-2xl mx-auto space-y-6">
          <FaTrophy className="text-emerald-500 text-5xl mx-auto animate-bounce" />
          <p className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">
            Small victories pave the way for big success!
          </p>
          {/* <p className="text-gray-500 text-sm font-bold tracking-widest uppercase">
            © 2026 Peak Productivity Studio • Build One Win at a Time
          </p> */}
        </div>
      </footer>
    </main>
  );
}