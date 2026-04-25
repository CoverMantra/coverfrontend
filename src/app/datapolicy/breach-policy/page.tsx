"use client";

import React from "react";
import { FaShieldAlt, FaExclamationTriangle, FaLock, FaSyncAlt } from "react-icons/fa";

const DataBreachPolicy = () => {
  return (
    <main className="min-h-screen bg-[#FFF4E5] font-sans">
      {/* 🌑 Dark Header Section */}
      <section className="bg-[#08101E] pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative 3D Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7819]/10 rounded-full blur-[100px] -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-0" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF7819] text-[10px] font-black tracking-[0.2em] uppercase mb-6">
            <FaShieldAlt className="animate-pulse" /> Security Protocol
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 italic uppercase">
            Data Breach <span className="text-[#FF7819]">Policy</span>
          </h1>
          <div className="flex flex-col items-center text-gray-400 space-y-1 font-bold text-xs uppercase tracking-widest">
            <p className="text-white/80">CoverMantra Services Private Limited</p>
            <p className="flex items-center gap-4">
              <span>Effective: Sept 24, 2025</span>
              <span className="text-[#FF7819]">|</span>
              <span>Version: 1.0</span>
            </p>
          </div>
        </div>
      </section>

      {/* 📄 Content Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white p-8 md:p-16 transition-all duration-500 hover:shadow-[0_50px_120px_-30px_rgba(255,120,25,0.15)]">
          
          <div className="space-y-16">
            {/* 1. Purpose */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">1</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Purpose</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium pl-14">
                The purpose of this Data Breach Policy is to establish a structured
                approach for identifying, reporting, managing, and mitigating any
                incidents that may compromise the confidentiality, integrity, or
                availability of data. CoverMantra Services Pvt. Ltd. (“Company”,
                “we”, “our”) is committed to handling all data breaches responsibly
                and in compliance with applicable laws and regulations.
              </p>
            </div>

            {/* 2. Scope */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">2</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Scope</h2>
              </div>
              <div className="pl-14 space-y-4">
                <p className="text-gray-600 font-bold uppercase text-[10px] tracking-widest">This policy applies to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Employees & Contractors", "Personal & Financial Data", "Network & Systems", "Cloud Platforms"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-sm font-bold text-gray-700">
                      <FaLock className="text-[#FF7819] text-xs" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Definition */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">3</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Definition of a Data Breach</h2>
              </div>
              <div className="pl-14">
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  A data breach is any confirmed or suspected incident that leads to
                  authorized access, disclosure, alteration, destruction, or loss of sensitive data assets.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                  <h4 className="flex items-center gap-2 text-red-700 font-black uppercase text-xs tracking-widest mb-4">
                    <FaExclamationTriangle /> Critical Examples:
                  </h4>
                  <ul className="space-y-2 text-sm text-red-900/70 font-bold">
                    <li>• Unauthorized access to systems or databases.</li>
                    <li>• Loss or theft of devices containing sensitive data.</li>
                    <li>• Accidental disclosure of customer information.</li>
                    <li>• Malware, ransomware, or cyberattacks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Roles */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">4</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Roles & Responsibilities</h2>
              </div>
              <div className="pl-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { role: "Employees", desc: "Immediate reporting of suspected breaches." },
                  { role: "ISO", desc: "Lead investigation and coordinate response." },
                  { role: "IRT", desc: "Containment, forensics, and recovery." },
                  { role: "Vendors", desc: "Notify company immediately of shared data breaches." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[#FF7819]/30 transition-colors">
                    <p className="text-[#FF7819] font-black uppercase text-[10px] tracking-widest mb-1">{item.role}</p>
                    <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Breach Response Procedure */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">5</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Response Procedure</h2>
              </div>
              <div className="pl-14 space-y-6">
                {[
                  { step: "Identification", text: "Detect or report a potential breach." },
                  { step: "Containment", text: "Isolate systems and stop unauthorized access." },
                  { step: "Assessment", text: "Determine scope, data type, and impact." },
                  { step: "Notification", text: "Inform senior management, regulators, and customers." },
                  { step: "Recovery", text: "Remove threats and restore from secure backups." },
                  { step: "Review", text: "Analyze root cause and document lessons learned." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group/step">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7819] mt-2 group-hover/step:scale-150 transition-transform" />
                    <div>
                      <p className="text-[#08101E] font-black text-sm uppercase tracking-tight">{item.step}</p>
                      <p className="text-gray-500 text-sm font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Notification */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">6</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Data Breach Notification</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium pl-14">
                Customers will be informed transparently if their personal or financial data is affected. 
                Notifications will include nature of breach, type of data compromised, and recommended protective measures.
              </p>
            </div>

            {/* 7. Prevention */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">7</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Prevention & Preparedness</h2>
              </div>
              <div className="pl-14 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Regular Security Audits", "Employee Phishing Training", "Strong Access Controls", "Tested BC/DR Plans"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-xs font-black text-gray-500 uppercase tracking-widest">
                    <FaSyncAlt className="text-[#FF7819]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Review */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">8</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Policy Review</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium pl-14">
                This policy will be reviewed annually or upon major changes in
                technology, regulations, or business operations.
              </p>
            </div>

            {/* 9. Contact */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 rounded-xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center font-black shadow-sm group-hover:scale-110 transition-transform">9</span>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Contact Information</h2>
              </div>
              <div className="pl-14">
                <div className="bg-[#08101E] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <p className="text-[#FF7819] font-black uppercase text-xs tracking-[0.2em] mb-4">Data Protection Officer (DPO)</p>
                  <div className="space-y-2 font-bold text-sm">
                    <p className="text-white/60">Company: <span className="text-white">CoverMantra Services Pvt. Ltd</span></p>
                    <p className="text-white/60">Email: <span className="text-[#FF7819]">info@covermantra.in</span></p>
                    <p className="text-white/60">Phone: <span className="text-white tracking-widest">9729509967</span></p>
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

export default DataBreachPolicy;