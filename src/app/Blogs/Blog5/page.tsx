"use client";

import React, { useEffect } from "react";
import { FaPiggyBank, FaCreditCard, FaChartLine, FaWallet, FaArrowUp, FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmartMoneyBlog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* 💰 SAFFRON FINANCE HEADER */}
      <header className="relative pt-32 pb-44 px-6 overflow-hidden bg-gradient-to-br from-[#08101E] via-[#121A26] to-[#08101E] rounded-b-[4rem] md:rounded-b-[8rem] shadow-2xl">
        {/* Abstract Saffron Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7819]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] font-black uppercase tracking-[0.5em] mb-8">
             Financial Sovereignty 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic mb-8">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] via-[#FFB347] to-white">Money</span> <br /> 
            Blueprints
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
            Start your financial journey with precision. Build generational wealth, eliminate debt traps, and engineer your long-term success.
          </p>
        </div>
      </header>

      {/* 💳 CONTENT GRID */}
      <article className="max-w-6xl mx-auto -mt-20 px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Save */}
            <section className="group p-8 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500" data-aos="fade-up">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="shrink-0 w-16 h-16 bg-[#FF7819] rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-orange-200 -rotate-3 group-hover:rotate-0 transition-transform">
                  <FaPiggyBank />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#08101E] uppercase italic tracking-tighter mb-4">1. Save Before You Spend</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    Many young professionals make the mistake of spending first and saving what's left. Instead, <span className="text-[#FF690B] font-bold">flip the script</span>—save a fixed percentage (at least 20%) of your income before spending on anything else. Automating savings ensures consistency.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Budget */}
            <section className="p-8 md:p-12 bg-orange-50/50 rounded-[3.5rem] border border-orange-100 relative overflow-hidden" data-aos="fade-up">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/30 rounded-full" />
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-[#08101E] uppercase italic tracking-tighter mb-6 flex items-center gap-3">
                  <FaWallet className="text-[#FF7819]" /> 2. Create a Realistic Budget
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Budgeting isn't about restricting yourself; it's about knowing where your money goes. Use the <span className="font-black text-orange-700 underline decoration-2 underline-offset-4">50/30/20 rule</span>:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-orange-50">
                    <p className="text-2xl font-black text-[#FF690B]">50%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Needs</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-orange-50">
                    <p className="text-2xl font-black text-orange-400">30%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Wants</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-center border border-orange-50">
                    <p className="text-2xl font-black text-indigo-600">20%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Savings</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Debt */}
            <section className="p-8 md:p-12 bg-white rounded-[3rem] border-l-[12px] border-[#FF690B] shadow-xl" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-black text-[#08101E] uppercase italic tracking-tighter mb-6 flex items-center gap-4">
                <FaCreditCard className="text-[#FF7819]" /> 3. Avoid Unnecessary Debt
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Credit cards can build your credit score if used wisely—but they can also trap you in high-interest debt. Always pay your credit card bills in full each month and avoid loans for lifestyle purchases.
              </p>
            </section>

            {/* Section 4: Investing */}
            <section className="group p-8 md:p-12 bg-[#08101E] rounded-[3rem] text-white shadow-2xl relative overflow-hidden" data-aos="fade-up">
              <FaArrowUp className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64 -rotate-45" /> 
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-6 flex items-center gap-4 text-[#FF7819]">
                  <FaChartLine /> 4. Start Investing Early
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  The earlier you invest, the more you benefit from <span className="text-white font-bold">compound interest</span>. Even small amounts in mutual funds, stocks, or retirement accounts can grow significantly over time.
                </p>
                <div className="inline-block px-6 py-3 bg-[#FF7819]/10 border border-[#FF7819]/20 rounded-xl text-[#FFB347] font-black uppercase tracking-widest text-xs">
                   Time in the market {'>'} Timing the market
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-12 space-y-8">
              {/* Wealth Stats Widget */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50">
                <h3 className="text-lg font-black text-[#08101E] uppercase italic mb-6 flex items-center gap-2">
                  <FaShieldAlt className="text-[#FF7819]" /> Wealth Factor
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Discipline", val: "95%" },
                    { label: "Compound Growth", val: "88%" },
                    { label: "Risk Management", val: "72%" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-[#FF690B]">{stat.val}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#FF7819] to-[#FF690B] rounded-full" style={{ width: stat.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion Card */}
              <div className="bg-gradient-to-br from-[#FF690B] to-[#E65100] p-8 rounded-[2.5rem] text-white shadow-2xl">
                <h3 className="text-xl font-black uppercase italic mb-4">Final Thoughts</h3>
                <p className="text-sm text-orange-50 font-medium leading-relaxed italic opacity-90">
                  Smart money habits aren't about being rich instantly—they're about building financial discipline. Secure your freedom and peace of mind through consistent action.
                </p>
                <button className="w-full mt-8 py-4 bg-white text-[#FF690B] rounded-2xl font-black uppercase tracking-tighter hover:bg-[#08101E] hover:text-white transition-all duration-300">
                   Generate Plan
                </button>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* 🏁 CORPORATE FOOTER */}
      <footer className="bg-white py-20 px-6 text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto space-y-6">
           <div className="w-16 h-1 bg-gradient-to-r from-[#FF7819] to-[#FF690B] mx-auto rounded-full" />
           <p className="text-2xl font-black text-[#08101E] uppercase italic tracking-tighter">
             Master Your <span className="text-[#FF7819]">Capital</span>
           </p>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
             Finance Pro Editorial © 2026 • Secure Assets
           </p>
        </div>
      </footer>
    </main>
  );
}