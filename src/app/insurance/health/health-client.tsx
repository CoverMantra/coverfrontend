"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CheckCircle, ShieldPlus, Activity, FileText, ArrowRight } from "lucide-react";
import health from "../../../animations/health.json";
import AOS from "aos";
import "aos/dist/aos.css";
import InsuranceCalculator from "../AllCalculators/healthcalculator";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HealthInsurancePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF4E5] text-[#08101E] overflow-x-hidden">
      
      {/* 🚀 PREMIUM HERO SECTION */}
      <section className="relative bg-[#08101E] text-white pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10" data-aos="fade-down">
          <div className="w-48 h-48 bg-white/5 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/10 mb-8 shadow-2xl">
            <Player
              autoplay
              loop
              src={health}
              style={{ height: "180px", width: "180px" }}
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#FF7819]/10 border border-[#FF7819]/25 rounded-full backdrop-blur-md shadow-lg select-none animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#FF7819]" />
            <span className="text-[10px] font-black tracking-widest text-[#FF7819] uppercase">Product Launching Soon</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Health Coverage
            </span>
          </motion.h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Get comprehensive health coverage for you and your loved ones with
            flexible, affordable, and reliable plans designed for the modern world.
          </p>
        </div>
      </section>

      {/* 💎 WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Why Choose <span className="text-green-600">Health Insurance?</span>
          </h2>
          <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cashless hospital network",
            "Coverage for critical illnesses",
            "Free annual health check-ups",
            "Tax benefits under Section 80D",
            "Affordable premiums",
            "24x7 customer support",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-8 flex gap-4 items-start group transition-all hover:border-green-200"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="p-3 bg-green-50 rounded-2xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <CheckCircle size={24} />
              </div>
              <p className="text-lg font-bold text-[#08101E] mt-1">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧮 CALCULATOR SECTION */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#08101E]/5">
        <div className="max-w-5xl mx-auto relative z-10" data-aos="fade-up">
          <div className="text-center mb-12">
            <Activity className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-[#08101E]">
              Premium <span className="text-green-600">Calculator</span>
            </h2>
          </div>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white p-2 md:p-8">
             <InsuranceCalculator />
          </div>
        </div>
      </section>

      {/* 🏷️ OUR PLANS */}
      <section className="py-24 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16" data-aos="fade-up">
          Our Health <span className="text-green-600">Plans</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Individual Plan", desc: "Best for single person coverage", icon: "👤" },
            { title: "Family Floater", desc: "Covers entire family under one plan", icon: "👨‍👩‍👧‍👦" },
            { title: "Senior Citizen Plan", desc: "Special plan for 60+ age group", icon: "👴" },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10 text-center relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="text-5xl mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-[#08101E]">{plan.title}</h3>
              <p className="text-gray-500 font-medium mb-8">{plan.desc}</p>
              <button className="w-full bg-[#08101E] text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                View Details <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📑 DOCUMENTS & BENEFITS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Documents */}
            <div className="bg-[#FFF4E5] rounded-[3rem] p-10 border border-orange-100" data-aos="fade-right">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-orange-100 rounded-2xl text-orange-600">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#08101E]">Documents Required</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Identity Proof (Aadhar, PAN, Passport)",
                  "Address Proof (Bills, License)",
                  "Age Proof (Birth Certificate)",
                  "Medical Reports (Pre-existing)",
                  "Passport Photographs",
                  "Income Proof",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-green-900 rounded-[3rem] p-10 text-white shadow-2xl" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 rounded-2xl text-green-400">
                  <ShieldPlus size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black">Key Benefits</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Financial protection in emergencies",
                  "Cashless treatment globally",
                  "Hospitalization & surgeries cover",
                  "Tax benefits under Section 80D",
                  "Preventive health checkups",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-green-100">
                    <CheckCircle size={20} className="text-green-400" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🛤️ HOW IT WORKS */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          Simple <span className="text-green-600">4-Step</span> Process
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {["Choose Plan", "Submit Details", "Pay Premium", "Get Policy"].map((step, idx) => (
            <div key={idx} className="relative group" data-aos="flip-up" data-aos-delay={idx * 100}>
              <div className="bg-white rounded-[2rem] p-8 text-center border border-gray-100 shadow-xl group-hover:bg-green-600 transition-all duration-500">
                <div className="text-4xl font-black text-green-100 mb-4 group-hover:text-white/50">0{idx + 1}</div>
                <p className="font-bold text-lg group-hover:text-white transition-colors">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📣 FINAL CTA */}
      <section className="py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-600 opacity-5" />
        <div className="relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-[#08101E]">
            Ready to Secure Your Health?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
            Start your journey today. Get the right coverage for you and your family.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/apply-insurance"
            className="inline-flex items-center gap-3 bg-[#08101E] text-white px-12 py-5 rounded-[2rem] font-black text-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all"
          >
            Apply Now <ArrowRight />
          </motion.a>
        </div>
      </section>
    </main>
  );
}
