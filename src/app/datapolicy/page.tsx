"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaUserLock, 
  FaFileContract, 
  FaHandshake, 
  FaInfoCircle,
  FaArrowRight
} from "react-icons/fa";

const DataPolicyPage = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Data Breach Policy",
      description: "Outlines the steps we take to detect, respond to, and notify you in the event of a data breach.",
      icon: <FaShieldAlt />,
      link: "/datapolicy/breach-policy",
      gradient: "from-blue-500 to-blue-700",
      shadow: "shadow-blue-500/20"
    },
    {
      id: 2,
      title: "Data Privacy Policy",
      description: "Explains how we collect, use, and safeguard your personal information to protect your privacy.",
      icon: <FaUserLock />,
      link: "/datapolicy/privacy-policy",
      gradient: "from-emerald-500 to-emerald-700",
      shadow: "shadow-emerald-500/20"
    },
    {
      id: 3,
      title: "Data Protection Policy",
      description: "Details the security measures and compliance standards we follow to protect your data.",
      icon: <FaFileContract />,
      link: "/datapolicy/protection-policy",
      gradient: "from-rose-500 to-rose-700",
      shadow: "shadow-rose-500/20"
    },
    {
      id: 4,
      title: "Data Retention & Deletion",
      description: "Clarifies how long we store your data and the process for safely deleting it when no longer needed.",
      icon: <FaHandshake />,
      link: "/datapolicy/retention-policy",
      gradient: "from-purple-500 to-purple-700",
      shadow: "shadow-purple-500/20"
    },
    {
      id: 5,
      title: "Information Security",
      description: "Covers the practices, tools, and protocols we use to ensure your data remains safe and secure.",
      icon: <FaInfoCircle />,
      link: "/datapolicy/security-policy",
      gradient: "from-amber-500 to-amber-700",
      shadow: "shadow-amber-500/20"
    }
  ];

  return (
    <section className="relative py-20 min-h-screen bg-[#FFF4E5] overflow-hidden font-sans">
      {/* 3D Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#FF7819]/10 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.3em] uppercase bg-[#08101E] text-[#FF7819] rounded-full shadow-xl">
            Security Center
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#08101E] tracking-tighter mb-6 italic uppercase">
            Our Data <span className="text-[#FF7819]">Policies</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 font-medium text-lg leading-relaxed">
            A comprehensive overview of how we handle, protect, and value your information at CoverMantra. Your trust is our core protocol.
          </p>
        </motion.div>

        {/* Grid Section with 3D Perspective */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                rotateY: 5, 
                rotateX: -5, 
                scale: 1.02,
                z: 50 
              }}
              onClick={() => router.push(card.link)}
              className={`group cursor-pointer relative flex flex-col p-8 rounded-[2.5rem] bg-gradient-to-br ${card.gradient} ${card.shadow} shadow-2xl transition-all duration-500 h-full overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Glass Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container with 3D Pop */}
              <div 
                className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-3xl text-white shadow-lg"
                style={{ transform: "translateZ(30px)" }}
              >
                {card.icon}
              </div>

              <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-white font-bold text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  View Policy <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full animate-pulse text-[10px]">
                  Secure
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: subtle-float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DataPolicyPage;