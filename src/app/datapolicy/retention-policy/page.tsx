"use client";

import React from "react";
import { FaTrashAlt, FaHistory, FaFolderOpen, FaClock, FaExclamationTriangle, FaUserShield } from "react-icons/fa";

const DataRetentionDeletionPolicy = () => {
  return (
    <main className="min-h-screen bg-[#FFF4E5] font-sans">
      {/* 🌑 Hero / Header Section */}
      <section className="bg-[#08101E] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative 3D Glows */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF7819]/10 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-0" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF7819] text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            <FaHistory className="animate-pulse" /> Lifecycle Management
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 italic uppercase leading-none">
            Retention & <span className="text-[#FF7819]">Deletion</span>
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
            "This policy outlines how we manage, store, and securely dispose of information 
            to ensure compliance with legal and regulatory standards."
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
                The purpose of this policy is to define how CoverMantra Services Pvt.
                Ltd. (“Company”, “we”, “our”) retains, manages, and deletes customer,
                employee, and business data in compliance with applicable legal,
                regulatory, and contractual requirements. This ensures protection of
                personal and financial information, while balancing operational needs.
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
                    "All personal & financial data processed by CoverMantra.",
                    "Employees & third-party service providers.",
                    "All digital and physical storage mediums.",
                    "Transactional and technical data logs."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#FF7819]/20 transition-all">
                      <FaFolderOpen className="text-[#FF7819] shrink-0" />
                      <span className="text-sm font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Data Retention Guidelines */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">03</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Retention Guidelines</h2>
              </div>
              <div className="pl-2 md:pl-16 space-y-6">
                <p className="text-gray-600 font-medium">Data is retained only as long as required for business, legal, and regulatory purposes:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "KYC Records", time: "5–10 Years", desc: "As per RBI/DCA laws." },
                    { label: "Financial Data", time: "7–10 Years", desc: "For audit & compliance." },
                    { label: "Communications", time: "3 Years", desc: "Emails and chat logs." },
                    { label: "Employee Records", time: "Duration + Statutory", desc: "Employment period +." },
                    { label: "Technical Logs", time: "Up to 2 Years", desc: "For security monitoring." },
                    { label: "Marketing Data", time: "Until Withdrawal", desc: "Or until no longer needed." }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-3xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-[#08101E] font-black text-[10px] uppercase tracking-widest">{item.label}</h4>
                        <span className="bg-[#FFF4E5] text-[#FF7819] text-[9px] px-2 py-1 rounded-full font-black uppercase"><FaClock className="inline mr-1" /> {item.time}</span>
                      </div>
                      <p className="text-gray-500 text-xs font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Data Deletion & Disposal */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl shadow-sm italic font-black"><FaTrashAlt /></div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Deletion & Disposal</h2>
              </div>
              <ul className="pl-2 md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Secure Digital Deletion", text: "Records are wiped using industry-standard techniques to prevent reconstruction." },
                  { title: "Physical Disposal", text: "Paper records are shredded or securely destroyed when no longer required." },
                  { title: "Third-Party Compliance", text: "Service providers follow secure deletion practices as per contractual agreements." },
                  { title: "Customer Requests", text: "Verified requests are processed subject to regulatory requirements." }
                ].map((item, i) => (
                  <li key={i} className="space-y-2">
                    <h4 className="text-sm font-black text-[#08101E] uppercase">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Exceptions */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl shadow-sm italic font-black"><FaExclamationTriangle /></div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">5. Exceptions</h2>
              </div>
              <div className="pl-2 md:pl-16">
                <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-100">
                  <p className="text-amber-900/70 font-bold text-xs uppercase tracking-widest mb-4">Data may be retained longer if:</p>
                  <ul className="space-y-3">
                    {["Required by law, regulators, or court order.", "Needed for fraud prevention or dispute resolution.", "Necessary for legitimate business interests."].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-amber-900/80 font-medium italic">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Policy Review */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black">06</div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">Review & Updates</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium pl-2 md:pl-16">
                This policy will be reviewed periodically (at least annually) and
                updated in line with legal, regulatory, or operational requirements.
              </p>
            </div>

            {/* 7. Contact Info */}
            <div className="relative group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center text-xl shadow-sm italic font-black"><FaUserShield /></div>
                <h2 className="text-2xl font-black text-[#08101E] uppercase tracking-tighter italic">7. Contact Information</h2>
              </div>
              <div className="pl-2 md:pl-16">
                <div className="bg-[#08101E] p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                   <p className="text-[#FF7819] font-black uppercase text-[10px] tracking-[0.2em] mb-4 italic">Data Protection Officer (DPO)</p>
                   <div className="space-y-2 font-bold text-sm md:text-base">
                      <p className="text-white/40 font-medium">Company: <span className="text-white">CoverMantra Services Pvt. Ltd</span></p>
                      <p className="text-white/40 font-medium">Email: <span className="text-[#FF7819]">info@covermantra.in</span></p>
                      <p className="text-white/40 font-medium">Phone: <span className="text-white tracking-[0.1em]">8901229195</span></p>
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

export default DataRetentionDeletionPolicy;