"use client";

import React, { useEffect } from "react";
import { FaCloud, FaLock, FaRocket, FaUniversity, FaGlobe, FaArrowRight, FaServer, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CloudComputingBlog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-blue-500 selection:text-white">
      
      {/* ☁️ DYNAMIC CLOUD HERO */}
      <header className="relative bg-[#08101E] pt-32 pb-48 px-6 overflow-hidden rounded-b-[4rem]">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="zoom-out">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <FaServer className="animate-spin-slow" /> Infrastructure Evolution
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.95] uppercase italic">
            The Power of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
              Cloud Computing
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed italic">
            Transforming businesses, education, and daily lives through innovation, flexibility, and infinite scalability.
          </p>
        </div>
      </header>

      {/* 🖼️ PREMIUM HERO IMAGE OVERLAP */}
      <div className="max-w-6xl mx-auto -mt-24 px-6 relative z-20" data-aos="fade-up">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
            alt="Cloud computing concept"
            className="relative rounded-[2.5rem] shadow-2xl w-full max-h-[500px] object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* 📑 ARTICLE BODY */}
      <article className="max-w-5xl mx-auto mt-20 px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* What is Cloud? */}
            <section data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <FaCloud size={20} />
                </div>
                <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tighter">What Is Cloud Computing?</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                Cloud computing is the delivery of computing services—like servers, storage, databases, software, and analytics—over the Internet. It allows users to access technology resources on-demand, without the need for owning physical servers. Companies such as <span className="text-blue-600 font-bold underline decoration-blue-100">AWS</span>, <span className="text-blue-600 font-bold underline decoration-blue-100">Microsoft Azure</span>, and <span className="text-blue-600 font-bold underline decoration-blue-100">Google Cloud</span> power much of today’s digital world.
              </p>
            </section>

            {/* Why Matters 2025 */}
            <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem]" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#08101E] rounded-2xl flex items-center justify-center text-white">
                    <FaRocket />
                  </div>
                  <h2 className="text-2xl font-black text-[#08101E] uppercase italic tracking-tighter">Why Cloud Matters in 2026</h2>
                </div>
                <p className="text-gray-600 mb-8 font-medium">
                  Cloud computing is the backbone of modern innovation. From startups to multinational corporations, it provides flexibility, efficiency, and global reach.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {[
                    { title: "Scalability", desc: "Instant power adjustment.", icon: <FaRocket className="text-blue-500"/> },
                    { title: "Cost Efficiency", desc: "Pay for what you use.", icon: <FaServer className="text-cyan-500"/> },
                    { title: "Remote Access", desc: "Work from anywhere.", icon: <FaGlobe className="text-indigo-500"/> },
                    { title: "Security", desc: "Advanced protection.", icon: <FaLock className="text-red-500"/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl group hover:bg-blue-600 transition-all duration-300">
                      <div className="group-hover:text-white">{item.icon}</div>
                      <div>
                        <p className="font-black text-[#08101E] group-hover:text-white uppercase italic text-xs tracking-tighter">{item.title}</p>
                        <p className="text-gray-500 group-hover:text-blue-100 text-[10px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education & Security */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="p-8 bg-blue-50 rounded-[2.5rem]" data-aos="fade-right">
                <FaUniversity className="text-blue-600 mb-4" size={30} />
                <h3 className="text-xl font-black text-[#08101E] uppercase italic mb-4">Education</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Collaboration in real-time through platforms like <span className="font-bold">Google Classroom</span> and <span className="font-bold">Teams</span>. Virtual learning is now borderless.
                </p>
              </section>
              <section className="p-8 bg-indigo-50 rounded-[2.5rem]" data-aos="fade-left">
                <FaShieldAlt className="text-indigo-600 mb-4" size={30} />
                <h3 className="text-xl font-black text-[#08101E] uppercase italic mb-4">Security</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Encryption, 2FA, and AI-based threat detection keep data safe. Users must manage permissions and strong passwords.
                </p>
              </section>
            </div>

            {/* Conclusion */}
            <section className="pt-8 border-t border-gray-100" data-aos="fade-up">
              <h2 className="text-3xl font-black text-[#08101E] uppercase italic tracking-tighter mb-6">Final Verdict</h2>
              <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                Cloud computing has revolutionized how we work, learn, and innovate. The cloud isn’t just a trend—it’s the foundation of today’s digital transformation and the key to our connected future.
              </p>
            </section>
          </div>

          {/* Sidebar / Future Tech Column */}
          <aside className="lg:col-span-4">
            <div className="sticky top-10 space-y-8">
              <div className="bg-[#08101E] rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden relative">
                <FaGlobe className="absolute -bottom-10 -right-10 text-white/5 w-40 h-40" />
                <h2 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                  <FaGlobe className="text-cyan-400" /> The Future
                </h2>
                <div className="space-y-6">
                  {[
                    { label: "AI Integration", color: "bg-blue-500" },
                    { label: "Edge Computing", color: "bg-cyan-500" },
                    { label: "Green Cloud", color: "bg-green-500" },
                    { label: "Hybrid Cloud", color: "bg-purple-500" }
                  ].map((tech, i) => (
                    <div key={i} className="group cursor-default">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-cyan-400 transition-colors">{tech.label}</span>
                        <FaArrowRight size={10} className="text-gray-600 group-hover:text-white" />
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${tech.color} w-2/3 group-hover:w-full transition-all duration-700`} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-[11px] text-gray-400 italic">
                  Advancements shaping how we connect, store, and analyze data across the globe.
                </p>
              </div>

              {/* Newsletter/Action */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 text-white">
                <h3 className="text-lg font-black uppercase italic mb-4">Stay Connected</h3>
                <p className="text-xs text-blue-100 mb-6 font-medium">Get the latest insights on cloud infrastructure delivered to your inbox.</p>
                <div className="flex bg-white/10 rounded-xl p-1 border border-white/20">
                  <input type="text" placeholder="Email..." className="bg-transparent border-none text-xs w-full px-3 outline-none placeholder:text-blue-200" />
                  <button className="bg-white text-blue-600 p-2 rounded-lg"><FaArrowRight size={12}/></button>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </article>

      {/* 🏁 FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-20 px-6 text-center rounded-t-[4rem]">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          <p className="text-2xl font-black text-[#08101E] uppercase italic tracking-tighter">
            Build the <span className="text-blue-600">Connected Future</span>
          </p>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
            Cloud Pulse Editorial © 2026 • Sky-High Innovation
          </p>
        </div>
      </footer>
    </main>
  );
}