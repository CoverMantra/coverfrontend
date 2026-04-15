"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  FaShieldAlt, 
  FaUserLock, 
  FaFileContract, 
  FaHandshake, 
  FaInfoCircle 
} from "react-icons/fa";

const DataPolicyPage = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Data Breach Policy",
      description: "Outlines the steps we take to detect, respond to, and notify you in the event of a data breach.",
      icon: <FaShieldAlt className="text-white text-3xl" />,
      link: "/datapolicy/breach-policy",
      color: "bg-[#3b82f6]" // Blue
    },
    {
      id: 2,
      title: "Data Privacy Policy",
      description: "Explains how we collect, use, and safeguard your personal information to protect your privacy.",
      icon: <FaUserLock className="text-white text-3xl" />,
      link: "/datapolicy/privacy-policy",
      color: "bg-[#22c55e]" // Green
    },
    {
      id: 3,
      title: "Data Protection Policy",
      description: "Details the security measures and compliance standards we follow to protect your data.",
      icon: <FaFileContract className="text-white text-3xl" />,
      link: "/datapolicy/protection-policy",
      color: "bg-[#ef4444]" // Red
    },
    {
      id: 4,
      title: "Data Retention & Deletion Policy",
      description: "Clarifies how long we store your data and the process for safely deleting it when no longer needed.",
      icon: <FaHandshake className="text-white text-3xl" />,
      link: "/datapolicy/retention-policy",
      color: "bg-[#a855f7]" // Purple
    },
    {
      id: 5,
      title: "Information Security Policy",
      description: "Covers the practices, tools, and protocols we use to ensure your data remains safe and secure.",
      icon: <FaInfoCircle className="text-white text-3xl" />,
      link: "/datapolicy/security-policy",
      color: "bg-[#eab308]" // Yellow/Gold
    }
  ];

  return (
    <section className="py-16 mt-5 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-3xl mt-2 font-extrabold text-[#111827] ">
            Our Data Policies
          </h1>
          <p className="mt-4 text-lg sm:text-xl  max-w-3xl mx-auto text-gray-600">
            Learn about how we handle your data and keep it secure at CoverMantra.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => router.push(card.link)}
              className={`group cursor-pointer flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${card.color}`}
            >
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {card.icon}
              </div>

              <div className="text-center flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                
                <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-wider mb-4 animate-pulse">
                  Click to View
                </span>

                <p className="text-white/90 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Styles for Blink (Optional) */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default DataPolicyPage;