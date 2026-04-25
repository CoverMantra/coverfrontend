"use client";

import React from "react";
import { FaLock, FaShieldAlt, FaUserShield, FaNetworkWired, FaServer, FaUserGraduate, FaSyncAlt, FaExclamationCircle } from "react-icons/fa";

const InformationSecurityPolicy = () => {
  return (
    <main className="min-h-screen bg-[#FFF4E5] font-sans">
      {/* 🌑 Cyber-Security Header Section */}
      <section className="bg-[#08101E] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract Security Patterns */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7819]/10 rounded-full blur-[130px] -z-0" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[110px] -z-0" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF7819] text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            <FaLock className="animate-pulse" /> Advanced Security Framework
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 italic uppercase leading-[0.9]">
            Information <br /> Security <span className="text-[#FF7819]">Policy</span>
          </h1>
          
          <div className="flex flex-col items-center space-y-2 mb-8">
            <p className="text-white/90 font-black text-lg tracking-tight uppercase">CoverMantra Services Private Limited</p>
            <div className="flex items-center gap-4 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <span>Effective: Sept 24, 2025</span>
              <span className="text-[#FF7819]">|</span>
              <span>Version: 1.0</span>
            </div>
          </div>

          <p className="text-gray-400 text-center text-sm md:text-lg max-w-3xl mx-auto font-medium leading-relaxed italic border-t border-white/10 pt-8">
            "Establishing a robust framework to protect our information assets, 
            customer data, and technology resources against evolving digital threats."
          </p>
        </div>
      </section>

      {/* 📄 Policy Content Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 -mt-12 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-white p-8 md:p-16 transition-all duration-500">
          
          <div className="space-y-16">
            
            {/* 1. Purpose */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">01</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Purpose</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium pl-2 md:pl-16">
                This policy establishes the framework for protecting information
                assets, customer data, and technology resources. It ensures adherence
                to applicable legal, regulatory, and contractual requirements while
                maintaining the highest standards of confidentiality, integrity, and
                availability.
              </p>
            </div>

            {/* 2. Scope */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">02</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Scope</h2>
              </div>
              <div className="pl-2 md:pl-16">
                <p className="text-gray-600 mb-6 font-bold uppercase text-[10px] tracking-widest text-[#FF7819]">This policy applies to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "All employees, contractors, and third parties.",
                    "All networks, apps, and cloud environments.",
                    "Digital, printed, or verbal information.",
                    "All business operation systems."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-gray-700 text-sm">
                      <FaShieldAlt className="text-[#FF7819] shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Principles */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">03</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Principles of Security</h2>
              </div>
              <div className="pl-2 md:pl-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Confidentiality", desc: "Access restricted to authorized individuals only." },
                  { title: "Integrity", desc: "Information remains accurate and unmodified." },
                  { title: "Availability", desc: "Systems remain accessible for authorized use." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#08101E] rounded-3xl text-center group-hover:scale-105 transition-transform">
                    <h4 className="text-[#FF7819] font-black text-[11px] uppercase tracking-widest mb-3">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Roles & Responsibilities */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">04</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Roles & Responsibilities</h2>
              </div>
              <div className="pl-2 md:pl-16 space-y-4">
                {[
                  { role: "Management", work: "Ensure implementation and compliance with this policy." },
                  { role: "ISO", work: "Oversee security operations, monitor risks, and maintain controls." },
                  { role: "Employees", work: "Protect information assets, follow guidelines, and report incidents." },
                  { role: "Vendors", work: "Must comply through strict contractual obligations." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start p-4 border-b border-gray-100 last:border-0">
                    <FaUserShield className="text-[#FF7819] mt-1" />
                    <div>
                      <h5 className="text-[#08101E] font-black text-xs uppercase tracking-tight">{item.role}</h5>
                      <p className="text-gray-500 text-sm font-medium">{item.work}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Security Controls */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">05</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Security Controls</h2>
              </div>
              <div className="pl-2 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   {[
                     { t: "Access Management", i: <FaLock /> },
                     { t: "Data Security", i: <FaShieldAlt /> },
                     { t: "Endpoint Protection", i: <FaServer /> },
                     { t: "Network Security", i: <FaNetworkWired /> }
                   ].map((ctrl, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 p-3 bg-gray-50 rounded-xl">
                       <span className="text-[#FF7819]">{ctrl.i}</span> {ctrl.t}
                     </div>
                   ))}
                </div>
                <div className="space-y-4">
                   {[
                     "Cloud Security (Secure & Certified)",
                     "Incident Management Process",
                     "Business Continuity (Backups)",
                     "Physical Security (Surveillance)"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700 p-3 bg-gray-50 rounded-xl italic">
                       <div className="w-1.5 h-1.5 bg-[#FF7819] rounded-full" /> {item}
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* 6. Privacy & Compliance */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">06</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Privacy & Compliance</h2>
              </div>
              <ul className="pl-2 md:pl-16 space-y-4">
                 {[
                   "Compliance with regulatory guidelines, protection laws, and standards.",
                   "Information processed only for legitimate business purposes.",
                   "No unauthorized disclosure or misuse of customer data."
                 ].map((text, i) => (
                   <li key={i} className="flex gap-4 p-4 rounded-2xl bg-[#FFF4E5]/50 border border-[#FF7819]/10 text-gray-700 text-sm font-medium">
                     <span className="text-[#FF7819] font-black">✓</span> {text}
                   </li>
                 ))}
              </ul>
            </div>

            {/* 7. Training */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">07</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Training & Awareness</h2>
              </div>
              <div className="pl-2 md:pl-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-6 border border-gray-100 rounded-3xl flex flex-col items-center text-center">
                    <FaUserGraduate className="text-3xl text-[#FF7819] mb-4" />
                    <p className="text-gray-600 text-xs font-bold uppercase tracking-tight leading-relaxed">Regular training on information security and data privacy for all employees.</p>
                 </div>
                 <div className="p-6 border border-gray-100 rounded-3xl flex flex-col items-center text-center">
                    <FaExclamationCircle className="text-3xl text-[#FF7819] mb-4" />
                    <p className="text-gray-600 text-xs font-bold uppercase tracking-tight leading-relaxed">Awareness on phishing, passwords, and safe handling of sensitive data.</p>
                 </div>
              </div>
            </div>

            {/* 8. Review */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">08</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Review & Updates</h2>
              </div>
              <div className="pl-2 md:pl-16 flex items-center gap-4">
                 <FaSyncAlt className="text-gray-300 text-xl animate-spin-slow" />
                 <p className="text-gray-600 font-medium text-sm leading-relaxed">This policy will be reviewed annually or whenever significant changes occur in business, technology, or regulatory requirements.</p>
              </div>
            </div>

            {/* 9. Enforcement */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl shadow-sm italic font-black">09</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Enforcement</h2>
              </div>
              <div className="pl-2 md:pl-16">
                <div className="bg-[#08101E] p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                   <p className="text-gray-400 text-sm leading-relaxed font-medium mb-8">
                      All employees, contractors, and partners are required to comply with
                      this policy. Any violation will be addressed in accordance with
                      company rules and contractual obligations. 
                   </p>
                   <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <p className="text-white font-black uppercase text-xs tracking-widest">Contact ISO for Queries:</p>
                      <a href="mailto:info@covermantra.in" className="text-[#FF7819] font-black text-xl tracking-tighter hover:underline">info@covermantra.in</a>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default InformationSecurityPolicy;