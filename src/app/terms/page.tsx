"use client";

import React from "react";
import { FaGavel, FaInfoCircle, FaCheckCircle, FaUserShield, FaExclamationTriangle, FaBalanceScale, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-[#FF7819]/20 text-[#08101E]">
      
      {/* 🚀 MODERN DARK TOP BAR (Consistent with Lender Page) */}
      {/* <header className="fixed top-0 left-0 w-full bg-[#08101E] z-[100] border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF7819] rounded-xl flex items-center justify-center text-white shadow-lg rotate-3">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <h2 className="text-white font-black text-xl tracking-tighter leading-none italic uppercase">
                COVER<span className="text-[#FF7819]">MANTRA</span>
              </h2>
              <p className="text-gray-500 text-[9px] uppercase font-bold tracking-[0.2em] mt-1">Legal Documents</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            Last Updated: April 2026
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF7819]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-[#08101E] tracking-tighter uppercase italic leading-[0.9] mb-6">
          Terms & <span className="text-[#FF7819]">Conditions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 font-medium md:text-lg">
          Please read these terms carefully before using the CoverMantra platform. By accessing our services, you agree to comply with these rules.
        </p>
      </section>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="space-y-16">
            
            {/* Section 1: Introduction */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] flex items-center justify-center text-[#FF7819] flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaInfoCircle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">1. Introduction</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra Services Private Limited (“CoverMantra,” “the Company,” “we,” or “us”) is incorporated under Indian law. The term “Platform” refers to our website and mobile application. By using the Platform, you (“User”) agree to these Terms & Conditions and our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 2: Facilitator Role */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaBalanceScale size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">2. General Information</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra acts solely as a facilitator between users and financial partners such as banks and NBFCs. We do not provide any financial products directly. Final decisions are made by the User and the partner; CoverMantra is not responsible for those outcomes.
                </p>
              </div>
            </div>

            {/* Section 3: Services Provided (Bullet Points) */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaCheckCircle size={20} />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">3. Services Provided</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Lender connections for loans/insurance",
                    "Access to credit reports via vendors",
                    "Spend analysis using SMS data (with consent)",
                    "Social score calculation services"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#FF7819]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 11: Liability (Critical) */}
            <div className="flex gap-6 group p-8 rounded-3xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaExclamationTriangle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-red-800">11. Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra is not liable for indirect, incidental, or consequential damages. We make no warranties regarding accuracy or completeness of content. Any agreements with financial partners are solely between you and them.
                </p>
              </div>
            </div>

            {/* Section 16: Grievance */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-[#08101E] flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaEnvelopeOpenText size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">16. Grievance Redressal</h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  If you have complaints or feedback, please send them to our dedicated support desk. We endeavor to address concerns promptly.
                </p>
                <a
                  href="mailto:info@covermantra.in"
                  className="inline-flex items-center justify-center gap-3 bg-[#08101E] text-white font-black uppercase tracking-tighter italic px-8 py-4 rounded-2xl shadow-lg hover:bg-[#FF7819] transition-all active:scale-95"
                >
                  Email Us: info@covermantra.in
                </a>
              </div>
            </div>

          </div>

          {/* Decorative Background Icon */}
          <FaGavel className="absolute -bottom-10 -right-10 text-gray-100 text-[15rem] -rotate-12 pointer-events-none" />
        </div>
      </div>

      {/* Bottom Footer Decor */}
      <footer className="py-12 border-t border-gray-100 text-center">
         <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
           <FaUserShield className="text-blue-500" /> Legally Binding Agreement • Subject to Delhi Jurisdiction
         </div>
      </footer>
    </main>
  );
}