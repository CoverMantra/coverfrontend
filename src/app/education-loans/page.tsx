"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GraduationCap, ShieldCheck, CheckCircle } from "lucide-react";

export default function EducationLoansComingSoon() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#08101E] to-[#030712] text-white pt-32 pb-24 px-6 overflow-hidden flex flex-col justify-center relative">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7819]/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#FF690B] transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-8 pb-12 border-b border-white/5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#FF690B]/10 rounded-[2rem] flex items-center justify-center text-[#FF690B] border border-[#FF690B]/20 shadow-lg shadow-[#FF690B]/5 shrink-0">
            <GraduationCap size={48} className="animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF690B]/10 border border-[#FF690B]/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF690B] animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-[#FF690B] uppercase">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-4">
              Education Loans
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              We are currently integrating with top banks and financial institutions to bring you custom Education & Career Loan products with low interest rates, flexible repayment structures, and quick online approval.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          
          {/* Product Highlights */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-2 border-[#FF690B] pl-3">Expected Benefits</h3>
            <ul className="space-y-4">
              {[
                { title: "Global Study Coverage", desc: "Finance studies in India or top global universities." },
                { title: "Flexible Repayment", desc: "Moratorium options during course period plus six months." },
                { title: "No Collateral Options", desc: "Collateral-free loans for select premier colleges." },
                { title: "Fast Sanction Process", desc: "Fully online application and direct university pay-out." }
              ].map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-[#FF690B] shrink-0 mt-1" size={18} />
                  <div>
                    <h4 className="text-sm font-bold text-white">{highlight.title}</h4>
                    <p className="text-xs text-white/50 mt-1">{highlight.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration Form */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF690B]/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#FF690B]/10 rounded-full flex items-center justify-center text-[#FF690B] mx-auto mb-4 border border-[#FF690B]/20">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-lg font-bold">Thank You!</h4>
                <p className="text-xs text-white/50 mt-2 max-w-xs mx-auto">
                  We have registered your interest. Our finance team will notify you as soon as Education Loans go live.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold mb-2">Register Interest</h3>
                <p className="text-xs text-white/50 mb-6 leading-relaxed">Be the first to know when we launch and get exclusive early-bird processing fee waivers.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-white/50 tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:border-[#FF690B] focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-white/50 tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="rahul@example.com" 
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:border-[#FF690B] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-white/50 tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="9876543210" 
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:border-[#FF690B] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#FF690B] to-[#FF8C00] hover:shadow-[0_0_20px_rgba(255,105,11,0.3)] text-white text-sm font-bold rounded-xl transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    Notify Me on Launch
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
