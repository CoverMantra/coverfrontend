'use client';
import React, { useState, useEffect } from 'react';
import { Lightbulb, Zap, Feather, Sparkles, Brain, Users, Globe, Palette, Clock, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogContent = () => {
  return (
    <div className="max-w-4xl mx-auto relative group">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-colors duration-700" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] group-hover:bg-purple-500/20 transition-colors duration-700" />

      <div className="relative bg-white/70 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[3rem] border border-white/50 overflow-hidden">
        
        {/* Progress Bar Top */}
        <div className="h-1.5 w-full bg-gray-100">
            <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 w-1/3 animate-pulse" />
        </div>

        <div className="px-6 sm:px-12 py-12 md:py-20">
            {/* 🏷️ CATEGORY & META */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8" data-aos="fade-down">
                <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-black uppercase tracking-widest border border-indigo-100">
                    Creative Strategy
                </span>
                <div className="flex items-center text-gray-400 text-xs font-bold gap-1.5">
                    <Clock size={14} /> 6 MIN READ
                </div>
            </div>

            {/* 🎭 HEADER SECTION */}
            <header className="text-center mb-16" data-aos="fade-up">
                <h1 className="text-4xl sm:text-6xl font-black mb-8 text-[#08101E] tracking-tighter leading-[1.1] italic uppercase">
                    The Art of <span className="text-indigo-600">Staying Creative</span> <br />
                    <span className="relative inline-block mt-2">
                        In the Age of AI
                        <div className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-100 -z-10 rounded-full" />
                    </span>
                </h1>
                <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
            </header>

            {/* 📖 BODY CONTENT */}
            <div className="space-y-12 text-[#1A1F2B] text-lg sm:text-xl leading-relaxed">
                
                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left font-medium leading-relaxed" data-aos="fade-up">
                    We live in an extraordinary time — a world where <strong>art meets algorithms</strong>, and creativity is no longer limited to brushes, words, or instruments. In 2025, creativity is being redefined by the rise of AI tools, social media, and global collaboration. But amidst all this tech, one truth remains — real creativity still begins with a human spark.
                </p>

                {/* Section 1: Inspiration */}
                <section className="group/sec" data-aos="fade-right">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#08101E] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 group-hover/sec:rotate-12 transition-transform">
                            <Globe size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight">1. Inspiration is Everywhere</h2>
                    </div>
                    <p className="pl-2 border-l-4 border-gray-100 group-hover/sec:border-indigo-600 transition-colors duration-500">
                        The creative world today is borderless. A designer in India can collaborate with a musician in Spain, and an AI tool can turn your doodle into a 3D concept. Inspiration isn’t rare — it’s overflowing. What’s rare is <em className="text-indigo-600 font-bold italic underline decoration-indigo-200 decoration-4">focus</em> — the ability to pause and let an idea breathe before moving to the next one.
                    </p>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-6 rounded-[2rem] mt-8 flex items-start gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-amber-500"><Lightbulb /></div>
                        <div>
                            <p className="text-amber-900 font-black uppercase text-xs tracking-widest mb-1">PRO STRATEGY</p>
                            <p className="text-amber-800 font-medium italic">Go on a “digital detox day” every week. Creativity thrives in silence as much as in chaos.</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: AI Partner */}
                <section className="group/sec" data-aos="fade-left">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-200 group-hover/sec:-rotate-12 transition-transform">
                            <Brain size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight">2. When AI Becomes Your Partner</h2>
                    </div>
                    <p className="pl-2 border-l-4 border-gray-100 group-hover/sec:border-indigo-600 transition-colors duration-500">
                        AI can’t replace creativity — but it can <strong>enhance</strong> it. Writers use AI for brainstorming, artists use it to explore new styles, and developers use it to generate ideas in seconds. The trick is not to fear AI, but to <em className="text-indigo-600 font-bold italic">collaborate</em> with it.
                    </p>
                    <div className="bg-indigo-900 text-white p-8 rounded-[2.5rem] mt-8 relative overflow-hidden shadow-2xl shadow-indigo-200">
                        <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
                        <p className="text-indigo-300 font-black uppercase text-xs tracking-[0.3em] mb-3">AI INTEGRATION</p>
                        <p className="font-medium text-lg leading-relaxed relative z-10">
                            Use tools like ChatGPT, Midjourney, or Runway ML to visualize your imagination faster — but keep your unique voice intact.
                        </p>
                    </div>
                </section>

                {/* Section 3: Multi-Creator */}
                <section data-aos="fade-up">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
                            <Feather size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight">3. The Rise of Multi-Creator</h2>
                    </div>
                    <p className="mb-6">
                        The 2025 creator isn’t “just” a writer or “just” a designer — they’re everything. A coder who paints. A marketer who podcasts. A photographer who writes poetry.
                    </p>
                    <div className="p-10 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200 text-center italic relative group">
                        <div className="absolute inset-0 bg-indigo-50 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 rounded-[3rem] -z-10" />
                        <span className="text-4xl text-indigo-200 block mb-4">“</span>
                        <p className="text-2xl sm:text-3xl font-black text-gray-500 group-hover:text-indigo-600 transition-colors tracking-tighter">
                            Creativity is connecting the unconnected.
                        </p>
                    </div>
                </section>

                {/* Section 4: Consistency */}
                <section data-aos="fade-right">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-amber-100">
                            <Zap size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight">4. Consistency Beats Perfection</h2>
                    </div>
                    <p className="pl-6 border-l-8 border-amber-400">
                        In a world obsessed with viral success, consistency is your superpower. Perfection kills progress. Creativity grows only when you <strong className="text-indigo-600 underline decoration-4 underline-offset-4">keep creating</strong> — even when no one’s watching.
                    </p>
                </section>

                {/* Section 5: Community */}
                <section className="bg-[#FFF4E5] p-10 rounded-[3rem] border-2 border-[#08101E]" data-aos="zoom-in">
                    <div className="flex items-center gap-4 mb-6">
                        <Users className="text-[#08101E]" size={32} />
                        <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tight underline decoration-[#FF7819]">5. Community Canvas</h2>
                    </div>
                    <p className="text-[#08101E] font-medium">
                        Modern creativity is social. Online communities on platforms like <strong>Discord, Behance, and X</strong> are the new studios. Collaboration breeds innovation — and feedback fuels growth.
                    </p>
                </section>

                {/* Conclusion */}
                <section className="pt-12 border-t-2 border-gray-50" data-aos="fade-up">
                    <h2 className="text-4xl font-black text-indigo-600 uppercase italic mb-8 flex items-center gap-4">
                        Final Thoughts <Sparkles />
                    </h2>
                    <p className="text-2xl font-bold tracking-tight leading-relaxed">
                        The creative life in 2025 is a blend of <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg rotate-2 inline-block">imagination</span>, <span className="px-3 py-1 bg-purple-600 text-white rounded-lg -rotate-2 inline-block">technology</span>, and <span className="px-3 py-1 bg-amber-500 text-white rounded-lg rotate-1 inline-block">courage</span>.
                    </p>
                    <p className="mt-8 text-center bg-gray-50 py-10 rounded-[2rem] border border-gray-100 font-black uppercase text-xl text-indigo-600 tracking-[0.2em] italic">
                        Creativity is not about being the best; <br/> it’s about being yourself.
                    </p>
                </section>
            </div>

            {/* 🏁 CTA FOOTER */}
            <footer className="mt-16 text-center" data-aos="fade-up">
                <button className="group flex items-center gap-4 mx-auto bg-[#08101E] text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-200">
                    Share Your Thoughts <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                {/* <p className="mt-10 text-gray-400 font-bold text-xs tracking-widest uppercase">
                    © 2026 Editorial Studio • Curated by Premium UI
                </p> */}
            </footer>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans p-4 sm:p-10 selection:bg-indigo-600 selection:text-white">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-indigo-600"></div>
            <Palette className="absolute inset-0 m-auto text-indigo-600 animate-pulse" size={32} />
          </div>
          <p className="text-indigo-600 font-black uppercase tracking-[0.5em] text-sm italic animate-bounce">
            Igniting Creativity...
          </p>
        </div>
      ) : (
        <BlogContent />
      )}
    </div>
  );
};

export default App;