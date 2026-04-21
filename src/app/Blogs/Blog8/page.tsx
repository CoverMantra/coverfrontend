"use client";

import React, { useEffect, useState } from "react";
import { 
  FaLightbulb, FaLaptop, FaBrain, FaClock, 
  FaHeart, FaBook, FaChartLine, FaCheckCircle, 
  FaQuoteLeft, FaChevronDown, FaShareAlt 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (totalScroll / windowHeight) * 100;
      setScroll(scrollValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-gray-100">
      <div className="h-full bg-blue-600 transition-all duration-150" style={{ width: `${scroll}%` }} />
    </div>
  );
};

export default function CompleteBlog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-[#FCFAFA] font-serif text-[#1A1A1A] selection:bg-blue-100">
      <ProgressBar />

      {/* 🏛️ HERO SECTION: The Hook */}
      <header className="relative pt-24 pb-20 px-6 md:px-12 text-center max-w-5xl mx-auto">
        <div data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
            Mindfulness & Productivity
          </span>
          <h1 className="text-4xl md:text-7xl font-black font-sans leading-[1.1] mb-8 text-[#08101E]">
            How Minimalism in a Digital World <br /> 
            <span className="italic text-blue-600 underline decoration-blue-100">Boosts Creativity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            "Your mind is for having ideas, not holding them." Discover how simplifying your digital landscape can free your creative genius.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-sans font-bold text-gray-400">
            <span>BY DIGITAL EDITORIAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <span>12 MIN READ</span>
          </div>
        </div>
        <div className="mt-16 animate-bounce text-gray-300">
          <FaChevronDown className="mx-auto" size={24} />
        </div>
      </header>

      {/* 📖 READING SECTION */}
      <article className="max-w-3xl mx-auto px-6 pb-32">
        
        {/* Intro Image/Placeholder */}
        <div className="w-full h-96 bg-[#08101E] rounded-[2rem] mb-16 flex items-center justify-center overflow-hidden shadow-2xl relative" data-aos="zoom-in">
           <FaLaptop className="text-white/10 text-[15rem] absolute rotate-12" />
           <div className="relative z-10 text-center px-10">
              <FaLightbulb className="text-yellow-400 text-5xl mx-auto mb-6 animate-pulse" />
              <p className="text-white text-2xl font-sans font-bold tracking-tight">Simplify to Create.</p>
           </div>
        </div>

        {/* Section 1: Definition */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-sans font-black mb-6 flex items-center gap-3 text-[#08101E]">
            <span className="text-blue-600">01.</span> What is Digital Minimalism?
          </h2>
          <div className="space-y-6 text-lg md:text-xl leading-[1.8] text-gray-700">
            <p>
              Digital minimalism isn't about living in a cave or throwing your smartphone away. It’s a philosophy of technology use in which you focus your online time on a small number of carefully selected and optimized activities that strongly support the things you value.
            </p>
            <p>
              It’s about **intentionality**. It means reducing digital clutter—unused apps, constant notifications, and endless scrolling—to ensure that your tools work for you, not the other way around.
            </p>
          </div>
        </section>

        {/* 💡 CALLOUT BOX: Why Creativity? */}
        <section className="my-16 bg-blue-600 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden" data-aos="fade-right">
          <FaBrain className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-12" />
          <h2 className="text-3xl font-sans font-black mb-6 italic flex items-center gap-3">
             Why Minimalism Boosts Creativity
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-medium italic">
            "Creativity thrives in the gaps."
          </p>
          <p className="mt-6 text-lg opacity-80 leading-relaxed">
            When your brain isn't jumping from one notification to another, it enters the **'Default Mode Network'**—the state where it makes unexpected connections between ideas. By removing noise, you give your mind the silence it needs to innovate.
          </p>
        </section>

        {/* Section 3: Practical Tips (Bento Style) */}
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-sans font-black mb-10 text-[#08101E]">
            <span className="text-blue-600 font-serif italic">Practical</span> Steps to Digital Freedom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans font-bold">
             {[
               { icon: <FaClock className="text-purple-500" />, text: "Uninstall apps you haven't used in 30 days." },
               { icon: <FaHeart className="text-red-500" />, text: "Set 'No-Screen' zones in your house." },
               { icon: <FaChartLine className="text-teal-500" />, text: "Batch check emails only twice a day." },
               { icon: <FaCheckCircle className="text-blue-500" />, text: "Declutter your desktop—keep it empty." }
             ].map((tip, i) => (
               <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl flex items-center gap-4 hover:shadow-lg transition-all cursor-default">
                  <div className="p-3 bg-gray-50 rounded-2xl">{tip.icon}</div>
                  <span className="text-sm uppercase tracking-tight">{tip.text}</span>
               </div>
             ))}
          </div>
        </section>

        {/* Section 4: Mental Benefits */}
        <section className="mb-20" data-aos="fade-up">
           <div className="border-l-4 border-blue-600 pl-8 space-y-6">
              <h2 className="text-3xl font-sans font-black text-[#08101E]">Mental & Emotional Clarity</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Constant digital stimulation leads to **Decision Fatigue**. By simplifying your environment, you save your mental energy for what matters—your craft. You'll notice reduced anxiety, better sleep, and a significant boost in your emotional well-being.
              </p>
           </div>
        </section>

        {/* 📚 QUOTE SECTION */}
        <section className="my-20 py-10 border-y border-gray-200 text-center" data-aos="zoom-in">
           <FaQuoteLeft className="text-blue-100 text-6xl mx-auto mb-6" />
           <p className="text-3xl md:text-4xl font-black tracking-tighter leading-tight italic text-[#08101E]">
             "The ability to stay focused will be the superpower of the 21st century."
           </p>
           <p className="mt-6 font-sans font-black text-blue-600 uppercase tracking-widest text-sm">— CAL NEWPORT</p>
        </section>

        {/* Section 6: Measuring Success */}
        <section className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-sans font-black mb-8 text-[#08101E]">Measuring Your Success</h2>
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 space-y-6 font-sans">
             <p className="text-gray-600 font-medium italic mb-4 text-lg">Are you actually becoming a digital minimalist? Track these:</p>
             <ul className="space-y-4">
                {[
                  "Deep Work Hours: Did you hit 4 hours of focus today?",
                  "Notification Count: Is it under 20 per day?",
                  "Creative Output: Have you produced more this week?",
                  "Mindfulness: Do you feel less 'rushed'?"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                    <span className="text-blue-600">→</span> {item}
                  </li>
                ))}
             </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="pt-10 space-y-6" data-aos="fade-up">
           <h2 className="text-3xl font-sans font-black text-[#08101E]">The Ripple Effect</h2>
           <p className="text-lg md:text-xl leading-[1.8] text-gray-700">
             Embracing minimalism in a digital world doesn’t just help your creativity—it transforms your entire life. It gives you the freedom to innovate, the peace to explore, and the courage to create something that only you can. 
           </p>
           <p className="text-lg md:text-xl font-bold text-blue-600 italic">
             Start small, declutter today, and watch your mind expand.
           </p>
        </section>

        {/* Share Section */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#08101E] rounded-full" />
              <div>
                 <p className="font-sans font-black text-sm uppercase">Digital Editorial</p>
                 <p className="text-xs text-gray-400">Thought Leadership in Tech</p>
              </div>
           </div>
           <button className="p-4 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              <FaShareAlt />
           </button>
        </div>
      </article>

      {/* 🏁 MINIMALIST FOOTER */}
      <footer className="bg-[#08101E] py-24 px-6 text-center text-white rounded-t-[3rem] md:rounded-t-[6rem]">
        <div className="max-w-2xl mx-auto space-y-8">
          <FaLightbulb className="text-yellow-400 text-4xl mx-auto" />
          <h2 className="text-3xl md:text-5xl font-sans font-black uppercase italic tracking-tighter">
            Build with <span className="text-blue-500">Intent.</span> <br /> 
            Create with <span className="text-blue-500">Clarity.</span>
          </h2>
          {/* <p className="text-gray-500 font-sans font-bold tracking-[0.4em] uppercase text-xs pt-10">
            © 2026 ZEN EDITORIAL • MINIMALISM IS FREEDOM
          </p> */}
        </div>
      </footer>
    </main>
  );
}