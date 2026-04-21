"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import { CheckCircle, Car, ShieldCheck, Zap, FileText, ArrowRight } from "lucide-react";
import car from "../../../animations/Car1.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import CarCalculator from "../AllCalculators/carcalculator";
import "aos/dist/aos.css";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function CarInsurancePage() {
  useEffect(() => {
    AOS.init({ disable: 'phone', duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Car Insurance | Premium Protection</title>
      </Head>

      <main className="min-h-screen bg-[#FFF4E5] text-[#08101E] overflow-x-hidden">
        
        {/* 🏎️ HIGH-SPEED HERO SECTION */}
        <section className="relative bg-[#08101E] text-white pt-24 pb-20 px-6 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF7819]/10 rounded-full blur-[100px] -ml-24 -mb-24" />

          <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10" data-aos="fade-down">
            <div className="w-48 h-48 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] flex items-center justify-center border border-white/10 mb-8 rotate-3 shadow-2xl">
              <Player
                autoplay
                loop
                src={car}
                style={{ height: "160px", width: "160px" }}
              />
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight"
            >
              Elite <span className="text-[#FF7819]">Car Insurance</span> <br />
              Plans For You
            </motion.h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              Protect your vehicle and yourself from financial losses with our 
              next-generation trusted car insurance policies.
            </p>
          </div>
        </section>

        {/* 🛡️ WHY CAR INSURANCE - Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4" data-aos="fade-right">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#08101E]">
                Why Do You <span className="text-[#FF7819]">Need It?</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#FF7819] mt-4 rounded-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Mandatory by law (Third-Party)",
              "Covers damages to your car",
              "Protection against theft",
              "Covers natural disasters",
              "Cashless repair at partner garages",
              "Personal accident cover",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-8 flex gap-4 items-center group transition-all"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="p-4 bg-[#FFF4E5] rounded-2xl text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                  <ShieldCheck size={28} />
                </div>
                <p className="text-lg font-bold text-[#08101E]">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 📦 TYPES OF PLANS - Modern Stack */}
        <section className="py-24 px-6 bg-[#08101E]/5 rounded-[4rem] mx-4" data-aos="fade-left">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            Choose Your <span className="text-[#FF7819]">Tier</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Third-Party Liability", desc: "Mandatory by law; covers damages to others." },
              { title: "Comprehensive Plan", desc: "Full protection for your car & third-party." },
              { title: "Zero Depreciation Plan", desc: "Get full claim without depreciation cuts." },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10 text-center relative overflow-hidden group"
                data-aos="flip-up"
              >
                <Zap className="w-12 h-12 text-[#FF7819] mx-auto mb-6 group-hover:scale-125 transition-transform" />
                <h3 className="text-2xl font-black mb-4 text-[#08101E]">{plan.title}</h3>
                <p className="text-gray-500 font-medium mb-8">{plan.desc}</p>
                <button className="w-full bg-[#08101E] text-white py-4 rounded-2xl font-bold hover:bg-[#FF7819] transition-all flex items-center justify-center gap-2 group">
                  View Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🧮 CALCULATOR - Glassmorphism */}
        <section className="py-20 px-6 max-w-5xl mx-auto" data-aos="fade-right">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-[#08101E]">
              Premium <span className="text-[#FF7819]">Estimator</span>
            </h2>
            <CarCalculator />
          </div>
        </section>

        {/* 📑 DOCUMENTS & BENEFITS - Pro Split */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
            {/* Documents */}
            <div className="bg-[#FFF4E5] rounded-[3rem] p-10 border border-orange-100 shadow-sm" data-aos="fade-right">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-orange-100 rounded-2xl text-[#FF7819]">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black">Docs Required</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "RC (Registration Certificate)",
                  "Identity Proof (Aadhar, PAN)",
                  "Address Proof (License, Bills)",
                  "Valid Driving License",
                  "Previous Policy Copy",
                  "Passport Photographs",
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <CheckCircle className="text-[#FF7819]" size={20} /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-[#08101E] rounded-[3rem] p-10 text-white shadow-2xl" data-aos="fade-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 rounded-2xl text-[#FF7819]">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#FF7819]">Core Benefits</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Financial coverage for repairs",
                  "Cashless network globally",
                  "Theft & fire protection",
                  "Personal accident cover",
                  "Third-party liability cover",
                  "Peace of mind driving",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-gray-300">
                    <CheckCircle size={20} className="text-[#FF7819]" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 🛤️ HOW TO GET INSURED - Steps */}
        <section className="py-24 px-6 bg-[#FFF4E5]/50 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black mb-16">
            Get Insured In <span className="text-[#FF7819]">Minutes</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {["Choose Plan", "Enter Vehicle Details", "Pay Premium", "Download Policy"].map((step, idx) => (
              <div key={idx} className="relative group" data-aos="zoom-in">
                <div className="bg-white rounded-[2rem] p-8 h-full border border-gray-100 shadow-xl hover:bg-[#08101E] hover:text-white transition-all duration-500">
                  <div className="text-4xl font-black text-[#FF7819]/20 mb-4 group-hover:text-[#FF7819]">0{idx + 1}</div>
                  <p className="font-black text-lg leading-tight">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📊 COMPARISON SECTION - Bento */}
        <section className="py-24 px-6 max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            Trusted <span className="text-[#FF7819]">Partners</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "HDFC Ergo", desc: "Affordable premium with wide coverage." },
              { name: "ICICI Lombard", desc: "Trusted partner with cashless garages." },
              { name: "Bajaj Allianz", desc: "Comprehensive coverage at best rates." },
            ].map((plan, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-10 text-center group">
                <h3 className="text-2xl font-black mb-4 group-hover:text-[#FF7819] transition-colors">{plan.name}</h3>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed">{plan.desc}</p>
                <button className="bg-gray-50 text-[#08101E] px-8 py-3 rounded-xl font-bold border border-gray-200 hover:bg-[#08101E] hover:text-white transition-all">
                  Compare Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 📣 FINAL CTA */}
        <section className="py-28 px-6 text-center bg-[#08101E] relative overflow-hidden m-4 rounded-[4rem]">
          <div className="absolute inset-0 bg-[#FF7819] opacity-5 pointer-events-none" />
          <div className="relative z-10" data-aos="fade-up">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Secure Your Car Today
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Get peace of mind while driving. Choose a plan that fits your needs 
              and protect your vehicle with our elite coverage.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/apply-insurance"
              className="inline-flex items-center gap-4 bg-[#FF7819] text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(255,120,25,0.3)] transition-all"
            >
              Start Protection Now <ArrowRight />
            </motion.a>
          </div>
        </section>
      </main>
    </>
  );
}