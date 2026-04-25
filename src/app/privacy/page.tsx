"use client";

import React from "react";
import { 
  FaUserSecret, FaDatabase, FaCookieBite, FaUserShield, 
  FaLock, FaHandshake, FaHeadset, FaFileContract, FaMapMarkerAlt,
  FaShieldAlt, FaMobileAlt, FaLaptop, FaCheckCircle, FaExclamationTriangle
} from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-[#FF7819]/20 text-[#08101E]">
      
      {/* 🌑 DARK HERO SECTION (Premium Military Grade Look) */}
      <section className="pt-32 pb-32 md:pb-44 px-6 text-center relative overflow-hidden bg-[#08101E]">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-40">
          <div className="absolute top-[-10%] left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#FF7819]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-black text-[#FF7819] uppercase tracking-[0.3em] mb-8">
            <FaShieldAlt className="animate-bounce" /> Secure Data Protocol
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-8">
            Privacy <span className="text-[#FF7819]">Policy</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-medium text-sm md:text-xl leading-relaxed px-4">
            Your trust is our priority. Learn how we handle your data with transparency and military-grade security across all your devices.
          </p>
          
          {/* Device Icons Indicators */}
          <div className="mt-12 flex justify-center gap-6 text-white/20 text-2xl">
            <FaMobileAlt title="Mobile Optimized" />
            <FaLaptop title="Desktop Secure" />
            <FaShieldAlt title="Encrypted" />
          </div>
        </div>
      </section>

      {/* Main Content Container (Responsive Overlap) */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-24 -mt-16 md:-mt-24 relative z-20">
        <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 p-6 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden">
          
          <div className="space-y-16 md:space-y-24">
            
            {/* 1. Overview */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF4E5] flex items-center justify-center text-[#FF7819] flex-shrink-0 shadow-lg md:group-hover:rotate-12 transition-transform duration-500">
                <FaFileContract size={24} />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-[#08101E]">1. Overview & Applicability</h3>
                <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-lg">
                  Last updated: April 22, 2026. This Privacy Policy (“Policy”) explains how CoverMantra collect, use, store, and disclose personal information through our Platform. By accessing the Platform on any device, you consent to these practices.
                </p>
              </div>
            </div>

            {/* 2. Services & Data Use (Responsive Grid) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-lg md:group-hover:rotate-12 transition-transform duration-500">
                <FaDatabase size={24} />
              </div>
              <div className="w-full">
                <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 text-[#08101E]">2. Services & Data Use</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-[#FF7819]/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <FaCheckCircle className="text-[#FF7819]" />
                      <h4 className="font-black text-[#08101E] uppercase text-sm tracking-widest">Credit Reports</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed">
                      We collect PAN, Name, and DOB with explicit consent to fetch credit info. This data is strictly for user insight.
                    </p>
                  </div>
                  
                  <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <FaCheckCircle className="text-blue-500" />
                      <h4 className="font-black text-[#08101E] uppercase text-sm tracking-widest">Lending Partners</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed">
                      KYC and Aadhaar details are shared only with RBI-registered NBFCs to process your specific loan applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Tracking & 4. Rights (Split Row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <FaCookieBite size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase italic text-[#08101E] mb-2">3. Cookies</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed">We use tracking tools to identify users and optimize cross-device experiences.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <FaUserShield size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase italic text-[#08101E] mb-2">4. Your Rights</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-bold leading-relaxed">You have the right to withdraw consent or request data deletion at any time.</p>
                </div>
              </div>
            </div>

            {/* 7. Grievance Redressal (Responsive Contact Card) */}
            <div className="relative p-6 md:p-12 rounded-[2.5rem] bg-[#08101E] text-white overflow-hidden shadow-2xl">
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7819]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-20 h-20 rounded-3xl bg-[#FF7819] flex items-center justify-center text-white mx-auto lg:mx-0 shadow-xl mb-6">
                    <FaHeadset size={32} />
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Grievance<br/><span className="text-[#FF7819]">Redressal</span></h3>
                </div>

                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-[#FF7819] font-black mb-1">Nodal Officer</p>
                      <p className="text-lg font-bold">Mandeep Phulia</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Address</p>
                      <p className="text-[11px] leading-relaxed text-gray-300 font-medium italic">
                        2nd Floor MK, Flex, Sanyas Ashram Road, Old Fatehabad, Haryana-125050
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a href="mailto:info@covermantra.in" className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-[#FF7819] text-white font-black uppercase tracking-tighter italic hover:scale-[1.02] transition-transform shadow-lg">
                      info@covermantra.in
                    </a>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Response Time</p>
                      <p className="text-sm font-bold text-white/80">Within 48 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Anti-Phishing Warning */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-[2rem] border-2 border-dashed border-red-100 bg-red-50/50">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                <FaExclamationTriangle size={24} />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-black text-red-800 uppercase italic mb-1">Anti-Phishing Notice</h4>
                <p className="text-xs md:text-sm text-red-700/80 font-bold leading-relaxed">
                  CoverMantra will NEVER ask for passwords, bank details, or OTPs via email/SMS. Protect your identity—do not share sensitive credentials.
                </p>
              </div>
            </div>

          </div>

          {/* Decorative Watermark */}
          <FaUserSecret className="absolute -bottom-20 -right-20 text-gray-50 text-[20rem] md:text-[30rem] -rotate-12 pointer-events-none opacity-50 md:opacity-100" />
        </div>
      </div>

      {/* Trust Footer */}
      <footer className="py-16 border-t border-gray-100 text-center px-6">
         <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <FaShieldAlt size={30} />
            <FaLock size={30} />
            <FaCheckCircle size={30} />
         </div>
         <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> ISO 27001 Certified • 256-bit SSL Protection
         </div>
         <p className="mt-6 text-[9px] font-bold text-gray-300 uppercase tracking-widest">
           © 2026 CoverMantra Services Pvt Ltd. All Rights Reserved.
         </p>
      </footer>
    </main>
  );
}