"use client";

import React, { useEffect } from "react";
import { FaSmile, FaFrown, FaBrain, FaHeartbeat, FaQuoteRight, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SocialMediaBlog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      icon: <FaSmile />,
      color: "from-yellow-400 to-orange-500",
      title: "Positive Effects of Social Media",
      content: [
        "Social media can help people stay connected with friends and family, build communities, and access support networks.",
        "It allows users to express themselves creatively, share achievements, and gain recognition, which can boost self-esteem and motivation."
      ]
    },
    {
      icon: <FaFrown />,
      color: "from-red-400 to-rose-600",
      title: "Negative Effects on Emotions",
      content: [
        "Excessive use of social media can lead to feelings of loneliness, envy, and anxiety, especially when comparing oneself to others.",
        "Cyberbullying and online negativity can significantly impact emotional well-being."
      ]
    },
    {
      icon: <FaBrain />,
      color: "from-blue-400 to-indigo-600",
      title: "Impact on Mental Health",
      content: [
        "Studies show a correlation between heavy social media use and mental health issues like depression, anxiety, and stress.",
        "The constant need for validation and fear of missing out (FOMO) can lead to emotional exhaustion."
      ]
    },
    {
      icon: <FaHeartbeat />,
      color: "from-teal-400 to-emerald-600",
      title: "Tips to Use Social Media Mindfully",
      content: [
        "Limit daily usage and take regular breaks from screens.",
        "Unfollow accounts that trigger negative emotions and follow pages that inspire positivity.",
        "Engage in offline activities like exercise, meditation, or hobbies to maintain a balanced lifestyle."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 🌿 ZEN HEADER */}
      <header className="relative pt-28 pb-40 px-6 overflow-hidden bg-gradient-to-b from-[#08101E] to-[#111827] rounded-b-[3rem] md:rounded-b-[6rem]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-down">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Wellness Guide 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] uppercase italic mb-8">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-teal-200 to-white">Soul</span> <br /> 
            & Social Media
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic">
            Understanding the impact of social media on mental health and mastering the art of digital mindfulness.
          </p>
        </div>
      </header>

      {/* 🖼️ HERO IMAGE OVERLAP */}
      <div className="max-w-5xl mx-auto -mt-20 px-6 relative z-20" data-aos="zoom-in">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-[2.5rem] blur opacity-20" />
          <img
            src="https://www.newportacademy.com/wp-content/uploads/NA-Website-Resources-Image-EffectsSocialMedia-1386x640-Hero.jpg"
            alt="Social Media Impact"
            className="relative rounded-[2.5rem] shadow-2xl w-full max-h-[450px] object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* 📖 ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto py-24 px-6">
        
        {/* Intro Quote */}
        <div className="mb-24 text-center" data-aos="fade-up">
           <FaQuoteRight className="text-indigo-100 text-6xl mx-auto mb-6" />
           <p className="text-2xl md:text-3xl font-black italic tracking-tight text-[#08101E] leading-snug">
             "Don't compare your behind-the-scenes with everyone else's highlight reel."
           </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section 
              key={index} 
              className="group p-8 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* 3D Icon Box */}
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white text-3xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                  {section.icon}
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-[#08101E] uppercase italic tracking-tighter">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-gray-600 text-lg leading-relaxed font-medium">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 🧘 MINDFULNESS CHECKLIST (Logic preserved from last section) */}
        <section className="mt-12 p-8 md:p-12 bg-[#08101E] rounded-[3rem] text-white overflow-hidden relative" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-black uppercase italic mb-8 flex items-center gap-3">
               <FaCheckCircle className="text-teal-400" /> Daily Check-in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-sm text-gray-300">
                  "Am I scrolling because I'm bored, or am I looking for something specific?"
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic text-sm text-gray-300">
                  "How does my body feel after 30 minutes on this app?"
               </div>
            </div>
        </section>

        {/* Conclusion */}
        <footer className="mt-24 pt-12 border-t border-gray-100 text-center space-y-6" data-aos="fade-up">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
            Social media is a powerful tool that can affect our emotions and mental health. By using it mindfully and balancing online and offline life, we can enjoy its benefits without letting it harm our well-being.
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-black uppercase tracking-widest hover:bg-[#08101E] transition-colors shadow-xl">
             Share Mindfulness
          </button>
        </footer>
      </article>

      {/* 🏁 MINIMALIST FOOTER */}
      <footer className="bg-white py-16 px-6 text-center border-t border-gray-50">
        <div className="max-w-2xl mx-auto space-y-4">
           <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
             Wellness Editorial © 2026 • Mindful Living
           </p>
        </div>
      </footer>
    </main>
  );
}