"use client";

import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { CheckCircle, FileText, Shield, Home, Zap, ArrowRight, Award } from "lucide-react";
import AOS from "aos";
import HomeCalculator from "../AllCalculators/HomeCalculator";
import "aos/dist/aos.css";

import home from "../../../animations/Home1.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HomeInsurancePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, disable: 'phone' });
  }, []);

  return (
    <>
      <Head>
        <title>Premium Home Insurance | Secure Your Sanctuary</title>
      </Head>

      <main className="min-h-screen bg-[#FFF4E5] text-[#08101E] overflow-x-hidden font-sans">
        
        {/* 🏠 LUXURY HERO SECTION */}
        <section className="relative bg-[#08101E] text-white pt-28 pb-24 px-6 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -ml-20 -mb-20" />

          <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10" data-aos="fade-down">
            <div className="w-32 h-32 md:w-44 md:h-44 bg-white/5 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center border border-white/10 mb-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Player
                autoplay
                loop
                src={home}
                style={{ height: "140px", width: "140px" }}
              />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight italic">
              Elite <span className="text-[#FF7819]">Home Protection</span> <br />
              Beyond Boundaries
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
              Secure your legacy and valuables from fire, theft, and natural 
              catastrophes with our next-generation premium insurance policies.
            </p>
          </div>
        </section>

        {/* 🛡️ WHY HOME INSURANCE - 3D Card Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#08101E] text-center">
              Maximum <span className="text-[#FF7819]">Security</span> Features
            </h2>
            <div className="w-24 h-2 bg-[#FF7819] mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fire & Natural Disaster Shield",
              "Advanced Burglary & Theft Cover",
              "Accidental Damage Protection",
              "Full Structural Fortification",
              "Comprehensive Liability Shield",
              "Absolute Peace for Homeowners",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-8 flex flex-col gap-4 hover:bg-[#08101E] transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="w-14 h-14 bg-[#FFF4E5] rounded-2xl flex items-center justify-center text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                  <Shield size={28} />
                </div>
                <p className="text-xl font-bold text-[#08101E] group-hover:text-white">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 💎 TIERED PLANS - Modern Bento Style */}
        <section className="py-24 px-6 bg-[#08101E] rounded-[4rem] mx-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">
            Protection <span className="text-[#FF7819]">Tiers</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[90rem] mx-auto">
            {[
              { title: "Basic Fire & Perils", desc: "Covers damages due to fire, floods, and earthquakes." },
              { title: "Comprehensive Home", desc: "Full protection for house structure + contents." },
              { title: "Tenant's Shield", desc: "Protects your personal belongings in rented space." },
              { title: "Landlord's Cover", desc: "Covers property damage and loss of rental income." },
              { title: "Contents Only", desc: "Safeguards appliances, electronics, and jewelry." },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 transition-all group"
                data-aos="flip-right"
                data-aos-delay={idx * 100}
              >
                <div>
                  <Zap className="text-[#FF7819] mb-6 w-10 h-10 group-hover:scale-125 transition-transform" />
                  <h3 className="text-xl font-black mb-3 text-white">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.desc}</p>
                </div>
                <button className="w-full bg-[#FF7819] text-white py-3 rounded-2xl font-bold hover:shadow-[0_10px_20px_rgba(255,120,25,0.3)] transition-all flex items-center justify-center gap-2">
                  Explore <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 📄 DOCS & BENEFITS - Elevated Split View */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Documents */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-50" data-aos="fade-right">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-[#FFF4E5] rounded-3xl text-[#FF7819]">
                  <FileText size={36} />
                </div>
                <h3 className="text-3xl font-black">Digital Vault <br /><span className="text-gray-400 text-lg">Documents Required</span></h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Proof of Identity (Aadhar, PAN)",
                  "Proof of Address (Utility Bills)",
                  "Property Sale Deed Documents",
                  "Property Tax Receipts",
                  "Previous Policy Records",
                  "High-Res Property Photos",
                ].map((doc, idx) => (
                  <li key={idx} className="flex gap-4 items-center font-bold text-[#08101E]">
                    <CheckCircle className="text-[#FF7819]" size={22} /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-[#FF7819] rounded-[3rem] p-10 text-white shadow-[0_30px_60px_rgba(255,120,25,0.2)]" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-white/20 rounded-3xl text-white">
                  <Award size={36} />
                </div>
                <h3 className="text-3xl font-black">Core Rewards <br /><span className="text-orange-100 text-lg">Member Benefits</span></h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Global damage repair coverage",
                  "Structure & interior contents protection",
                  "Zero-theft liability rider",
                  "Ultra-low premium rates",
                  "Tenant-specific belonging cover",
                  "24/7 dedicated claim concierge",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-4 items-center font-bold">
                    <CheckCircle className="text-white" size={22} /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 🧮 CALCULATOR - Floating Glassmorphism */}
        <section className="py-20 px-6" data-aos="fade-up">
          <div className="max-w-5xl mx-auto bg-white rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden relative">
             <div className="bg-[#08101E] p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
                  Premium <span className="text-[#FF7819]">Calculator</span>
                </h2>
                <p className="text-gray-400 font-medium">Real-time estimation for your dream sanctuary.</p>
             </div>
             <div className="p-6 md:p-12 bg-white">
                <HomeCalculator />
             </div>
          </div>
        </section>

        {/* 🛤️ HOW IT WORKS - Process Flow */}
        <section className="py-24 px-6 bg-[#08101E]/5 rounded-[4rem] mx-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black mb-16">The Seamless <span className="text-[#FF7819]">Process</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {["Select Tier", "Property Scan", "Vault Payment", "Policy Genesis"].map((step, idx) => (
              <div key={idx} className="relative group" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="bg-white rounded-[2.5rem] p-10 h-full shadow-lg border border-gray-100 group-hover:bg-[#FF7819] group-hover:translate-y-[-10px] transition-all duration-500">
                  <div className="text-5xl font-black text-gray-100 group-hover:text-white/20 mb-6 transition-colors">0{idx + 1}</div>
                  <p className="font-black text-xl text-[#08101E] group-hover:text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📣 FINAL CTA - Impact Section */}
        <section className="py-32 px-6 text-center" data-aos="fade-up">
          <div className="max-w-5xl mx-auto bg-[#08101E] rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7819]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Ready to Secure <br /> Your <span className="text-[#FF7819]">Safe Haven?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Join thousands of homeowners who trust our elite structural and content protection layers.
              </p>
              <a
                href="/apply-insurance"
                className="inline-flex items-center gap-4 bg-[#FF7819] text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-[0_20px_40px_rgba(255,120,25,0.4)] hover:scale-105 transition-all"
              >
                Apply For Coverage <ArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}