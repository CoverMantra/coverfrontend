"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  Star, 
  ThumbsUp, 
  Globe, 
  ChevronRight,
  ShieldAlert,
  LucideIcon // Type import for TS
} from "lucide-react";

// interface for type safety
interface TrustStatement {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function UserTrustPage() {
  const trustStatements: TrustStatement[] = [
    {
      icon: ShieldCheck,
      title: "Data Security First",
      desc: "We prioritize your personal and financial information with enterprise-grade protection protocols.",
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "Advanced encryption at rest and in transit, ensuring total privacy at every stage of communication.",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      desc: "Our ecosystem is powered by thousands of daily users and organizations worldwide.",
    },
    {
      icon: Star,
      title: "Proven Track Record",
      desc: "Industry-leading uptime and compliance standards backed by consistent user satisfaction.",
    },
    {
      icon: ThumbsUp,
      title: "Pure Transparency",
      desc: "No hidden agendas. We follow clear, ethical policies to build lasting digital partnerships.",
    },
    {
      icon: Globe,
      title: "Global Compliance",
      desc: "Fully aligned with RBI, PCI DSS, GDPR, and international data protection regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans selection:bg-[#FF7819]/30">
      
      {/* Hero Section - Dark & Premium */}
      <section className="relative pt-32 pb-24 px-6 bg-[#08101E] overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7819]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF7819]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-xs font-black tracking-widest uppercase mb-8"
          >
            <ShieldCheck size={14} /> Security Standards 2.0
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            Why Users <br/> 
            <span className="text-[#FF7819]">Trust Our Ecosystem</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            Building digital confidence through relentless security, global compliance, 
            and absolute transparency at every touchpoint.
          </motion.p>
        </div>
      </section>

      {/* Trust Grid - Fixed Icon Rendering */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustStatements.map((item, i) => {
            const IconComponent = item.icon; // Assigned for TS safety
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px -15px rgba(255,120,25,0.1)" }}
                className="group p-10 bg-white rounded-[3rem] border border-[#FF7819]/5 hover:border-[#FF7819]/20 transition-all duration-500 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-[#FFF4E5] text-[#FF7819] flex items-center justify-center mb-8 group-hover:bg-[#FF7819] group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-inner">
                  <IconComponent size={36} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-[#FF7819] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group p-1 bg-gradient-to-br from-[#FF7819]/20 to-transparent rounded-[4rem]"
        >
          <div className="relative bg-[#08101E] rounded-[3.9rem] p-12 md:p-24 overflow-hidden shadow-2xl text-center">
            <ShieldAlert size={400} className="absolute -right-20 -bottom-20 text-[#FF7819] opacity-[0.03] rotate-12 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                Trust is <span className="text-[#FF7819]">Earned</span>, <br className="hidden md:block" /> Not Just Claimed.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                With real-time monitoring and state-of-the-art encryption, we ensure 
                your digital assets and trust are protected by the best-in-class 
                Indian financial standards.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-[#FF7819] text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(255,120,25,0.3)] flex items-center gap-3 mx-auto group transition-all"
              >
                Explore Our Security Whitepaper <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Branding Banner */}
      <div className="bg-[#FF7819] py-8 text-center text-white font-black text-xs md:text-sm tracking-[0.4em] uppercase">
        CoverMantra — Integrity in every transaction
      </div>
    </div>
  );
}