"use client";

import React from "react";
import Lottie from "lottie-react";
import { AlertTriangle, ShieldCheck, Lock, Zap, Globe } from "lucide-react";
import DataSecurity from "../../animations/data.json";

export default function DataEncryptionPage() {
  return (
    // Background ko soft neutral rakha hai taaki Saffron aur Dark elements pop karein
    <div className="min-h-screen bg-[#FFF9F2] text-gray-800 font-sans selection:bg-orange-200">
      
      {/* Section 1: Hero Banner - Modern 3D Mesh Gradient */}
      <section className="relative flex flex-col items-center justify-center py-24 sm:py-32 px-4 text-center bg-[#0F172A] overflow-hidden">
        {/* Background 3D Glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-500 text-sm font-bold tracking-wide uppercase mb-6 inline-block border border-orange-500/20">
            Secure Banking Standard
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-2xl">
            🔐 Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Data Encryption</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base sm:text-xl leading-relaxed">
            Protecting your financial assets with military-grade 256-bit encryption. 
            Because your trust is our most valuable currency.
          </p>
        </div>
      </section>

      {/* Section 2: What is Encryption - 3D Glass Card */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 px-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src="https://cdn-icons-gif.flaticon.com/19014/19014137.gif"
            alt="Encryption"
            className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 flex items-center gap-3">
            <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
            What is Data Encryption?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-gray-200 pl-6">
            "Encryption is the process of scrambling information so that it can only be read by someone who has the right magic key."
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            In finance, we convert your sensitive transaction data into complex ciphertext using 
            advanced algorithms. Even if intercepted, the data remains a useless puzzle to hackers.
          </p>
        </div>
      </section>

      {/* Section 3: How It Works - Neumorphic Dark Section */}
      <section className="bg-[#111827] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-8 text-white">How Our Security Engine Works</h2>
            <div className="space-y-6">
              {[
                { title: "Key Generation", desc: "Unique cryptographic keys created per session." },
                { title: "Safe Storage", desc: "Encrypted data stored in sharded cloud vaults." },
                { title: "Authorized Access", desc: "Multi-factor decryption protocols." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="text-white font-bold">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 bg-white/5 p-8 rounded-[40px] border border-white/10 shadow-inner">
             <Lottie animationData={DataSecurity} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 4: Real-Life Apps - Floating 3D Cards */}
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-black mb-16 text-gray-900">Ironclad Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Online Banking", icon: <Globe className="text-blue-500" /> },
            { name: "Digital Payments", icon: <Zap className="text-orange-500" /> },
            { name: "eKYC Systems", icon: <ShieldCheck className="text-emerald-500" /> }
          ].map((item, i) => (
            <div
              key={i}
              className="group p-10 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_40px_80px_rgba(255,153,51,0.15)] hover:-translate-y-4 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Risks - Floating Alert */}
      <section className="mx-6">
        <div className="max-w-4xl mx-auto py-16 px-8 bg-red-50/50 rounded-[2.5rem] border-2 border-dashed border-red-200 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle size={120} />
          </div>
          <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl font-black mb-4 text-red-900">Challenges & Strategic Risks</h2>
          <p className="text-red-700/80 text-lg max-w-2xl mx-auto">
            Encryption isn't a silver bullet. We actively manage "Key Sprawl" and 
            performance overhead to ensure your app remains fast and unhackable.
          </p>
        </div>
      </section>

      {/* Section 7: Best Practices - The "Vault" Look */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="bg-[#FF9933] rounded-[3rem] p-8 md:p-16 shadow-[0_30px_60px_rgba(255,153,51,0.3)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
           <h2 className="text-3xl md:text-5xl font-black text-white mb-12 relative z-10">Best Practices for <br/>Financial Safety</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                "Deploy AES-256 for Rest Data",
                "Automated Key Rotation",
                "Hardware Security Modules (HSM)",
                "Zero-Trust Access Logics"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/20 backdrop-blur-md p-5 rounded-2xl border border-white/30 text-white font-bold">
                  <Lock className="w-5 h-5" />
                  {text}
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}