"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiLightningBolt, HiChartBar, HiClipboardCheck } from "react-icons/hi";
import { FaRocket, FaBuilding, FaCity, FaTools, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";

export default function BusinessLoansPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF4E5] text-[#08101E] font-sans selection:bg-[#FF7819]/30 overflow-x-hidden">

      {/* 🚀 HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#08101E] text-white py-20 px-4">
        {/* 3D Decorative Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF7819]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] animate-bounce duration-[10s]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* COMING SOON Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,120,25,0.2)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7819] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF7819]"></span>
            </span>
            <span className="text-sm font-black tracking-[0.2em] text-[#FF7819] uppercase">
              Coming Soon
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
            Empower Your Business with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] to-[#FFB076]">
              Flexible Funding
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-16 text-gray-400 max-w-3xl mx-auto font-medium">
            Tailored loan solutions for Startups, MSMEs, and Enterprises. <br className="hidden md:block"/>
            Faster approvals. Lower interest. Zero hassle.
          </p>

          {/* Target Cards Row */}
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {[
              { icon: <FaRocket />, title: "For Startups", desc: "Instant working capital and funds to build and scale your product." },
              { icon: <FaBuilding />, title: "For SMEs", desc: "Grow your business with machinery, marketing, and team expansion loans." },
              { icon: <FaCity />, title: "For Enterprises", desc: "Large-scale funding with flexible repayment and premium support." },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 transition-all duration-500 shadow-2xl group"
              >
                <div className="text-3xl text-[#FF7819] mb-5 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 📖 EDUCATIONAL SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#08101E] tracking-tight">
          What is a <span className="text-[#FF7819]">Business Loan?</span>
        </h2>
        <div className="p-1 bg-gradient-to-r from-transparent via-[#FF7819]/20 to-transparent mb-8" />
        <p className="text-[#08101E]/70 text-lg md:text-xl leading-relaxed font-medium">
          A business loan provides financial support for growth, working capital, expansion,
          equipment, or other operational needs. Whether you're launching a startup or growing
          an enterprise, our business loans fuel your vision.
        </p>
      </section>

      {/* 💎 TYPES SECTION */}
      <section className="py-24 px-4 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-[#08101E] tracking-tight">
            Types of <span className="text-[#FF7819]">Business Loans</span>
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <FaTools />, title: "Working Capital Loans", desc: "Short-term loans for everyday operations." },
              { icon: <FaRocket />, title: "Startup Loans", desc: "Capital to launch and scale your startup." },
              { icon: <FaBuilding />, title: "Equipment Financing", desc: "Buy or lease essential business equipment." },
              { icon: <FaFileInvoiceDollar />, title: "Invoice Financing", desc: "Convert pending invoices into quick cash." },
              { icon: <FaChartLine />, title: "Term Loans", desc: "Long-term funds for expansion or investment." },
              { icon: <HiChartBar />, title: "Business Line of Credit", desc: "Flexible revolving credit for recurring needs." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#FF7819]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF4E5] flex items-center justify-center text-[#FF7819] mb-6 group-hover:bg-[#FF7819] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#08101E]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 WHY CHOOSE US */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-20 text-center text-[#08101E] tracking-tight">
          Why Choose Our <br className="md:hidden"/> <span className="text-[#FF7819]">Business Loans?</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              icon: <HiLightningBolt />,
              title: "Fast Disbursal",
              desc: "Quick approval and instant fund transfer for urgent needs.",
            },
            {
              icon: <HiChartBar />,
              title: "Custom Loan Plans",
              desc: "Tailored funding solutions crafted for every business model.",
            },
            {
              icon: <HiClipboardCheck />,
              title: "Minimal Documentation",
              desc: "Quick, hassle-free process with simple paperwork.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="relative p-10 bg-[#08101E] rounded-[3rem] text-center group overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/10 rounded-full blur-3xl group-hover:bg-[#FF7819]/20 transition-all" />
              <div className="relative z-10">
                <div className="text-5xl text-[#FF7819] flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📣 CTA SECTION */}
      <section className="py-20 px-6">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto rounded-[4rem] p-12 md:p-24 bg-gradient-to-br from-[#FF7819] to-[#E65C00] text-center text-white shadow-[0_30px_100px_-20px_rgba(255,120,25,0.4)] relative overflow-hidden"
        >
          {/* Glass Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 tracking-tighter">
            Ready to Grow Your <br className="hidden md:block"/> Business?
          </h2>
          <p className="mb-12 text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium relative z-10">
            Apply today and get funding designed to help your business thrive. 
            Join 10,000+ happy entrepreneurs.
          </p>

          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/business-loans"
            className="inline-flex items-center gap-3 bg-[#08101E] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-2xl relative z-10"
          >
            Apply for Business Loan <FaPaperPlane className="text-sm" />
          </motion.a>
        </motion.div>
      </section>

    </main>
  );
}

const FaPaperPlane = ({className}: {className?: string}) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
  </svg>
);
