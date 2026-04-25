"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  Landmark,
  ShieldCheck,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  ShieldAlert,
  LucideIcon, // Icon type import kiya
} from "lucide-react";

// Icon definition ko update kiya taaki props pass ho sakein
interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function RBICompliancePage() {
  const banks = [
    { name: "State Bank of India (SBI)", logo: "https://sbi.bank.in/o/SBI-Theme/images/custom/logo.png", h: "h-10 md:h-12" },
    { name: "Punjab National Bank (PNB)", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Punjab_National_Bank_new_logo.svg", h: "h-12 md:h-14" },
    { name: "HDFC Bank", logo: "https://s7ap1.scene7.com/is/content/hdfcbankPWS/hdfc-bank-logo?fmt=webp", h: "h-8 md:h-10" },
    { name: "ICICI Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Yfl3u_FGS0L-sfnzW1kBeUqtwZnmAoztlg&s", h: "h-12 md:h-14" },
    { name: "Axis Bank", logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg", h: "h-10 md:h-12" },
    { name: "Bank of Baroda", logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.jpg", h: "h-10 md:h-12" },
  ];

  const features: Feature[] = [
    { icon: Landmark, title: "Regulation", desc: "RBI sets policies to ensure smooth banking operations and fair practices." },
    { icon: ShieldCheck, title: "Supervision", desc: "RBI supervises banks and NBFCs to ensure compliance with laws." },
    { icon: FileText, title: "Guidelines", desc: "It issues IT & cybersecurity guidelines to protect customer data." },
    { icon: Users, title: "Customer Protection", desc: "Safeguards customer rights and ensures secure transactions." },
    { icon: Banknote, title: "Monetary Stability", desc: "Ensures financial stability and secure monetary transactions." },
    { icon: TrendingUp, title: "Growth", desc: "Encourages digital banking & financial inclusion in India." },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans selection:bg-[#FF7819]/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#08101E] overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7819]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF7819]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-xs font-black tracking-widest uppercase mb-8"
          >
            <ShieldCheck size={14} /> Official Regulatory Framework
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            RBI & Registered <br/> 
            <span className="text-[#FF7819]">Banking Partners</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            The Reserve Bank of India regulates and supervises banks to ensure
            trust, compliance, and financial stability across the country.
          </motion.p>
        </div>
      </section>

      {/* Core Functions - Fixed Error Part */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const IconComponent = item.icon; // Assigned to a local variable
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#FF7819]/5 group hover:border-[#FF7819]/20 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center mb-6 group-hover:bg-[#FF7819] group-hover:text-white transition-all duration-500 shadow-inner">
                  {/* Fixed size passing */}
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Banks Showcase Section */}
      <section className="bg-white py-24 border-y border-[#FF7819]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#08101E] tracking-tight">Major Registered Banks</h2>
            <div className="w-24 h-1.5 bg-[#FF7819] mx-auto mt-6 rounded-full shadow-[0_2px_10px_rgba(255,120,25,0.3)]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {banks.map((bank, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255,120,25,0.1)" }}
                className="flex flex-col items-center justify-center p-10 bg-[#FFF4E5]/40 rounded-[2.5rem] border border-transparent hover:border-[#FF7819]/20 hover:bg-white transition-all duration-300 group cursor-default"
              >
                <div className="relative h-16 w-full flex items-center justify-center mb-4">
                  <img 
                    src={bank.logo} 
                    alt={bank.name} 
                    className={`${bank.h} w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:opacity-100`}
                  />
                </div>
                <span className="text-xs font-bold text-[#08101E]/40 group-hover:text-[#FF7819] uppercase tracking-widest transition-colors">
                  Verified Partner
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Box */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-1 md:p-2 bg-gradient-to-br from-[#FF7819]/20 to-transparent rounded-[3rem]"
        >
          <div className="relative bg-[#08101E] rounded-[2.8rem] p-10 md:p-20 overflow-hidden shadow-2xl text-center">
            <ShieldAlert size={300} className="absolute -right-20 -bottom-20 text-[#FF7819] opacity-[0.03] rotate-12 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                RBI Banking <span className="text-[#FF7819]">Compliance</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                All RBI-registered banks must follow strict compliance rules
                including <span className="text-white font-bold">customer protection</span>, 
                IT security, and fair lending practices to ensure India’s financial 
                system remains strong and trustworthy.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#FF7819] text-white font-black rounded-2xl shadow-[0_15px_30px_rgba(255,120,25,0.3)] flex items-center gap-3 mx-auto group transition-all"
              >
                Check Trust Protocols <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Branding Banner */}
      <div className="bg-[#FF7819] py-6 text-center text-white font-black text-xs md:text-sm tracking-[0.3em] uppercase">
        CoverMantra — Smart Cover, Sure Trust
      </div>
    </div>
  );
}