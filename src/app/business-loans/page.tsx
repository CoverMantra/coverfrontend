"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { HiLightningBolt, HiChartBar, HiClipboardCheck } from "react-icons/hi";

export default function BusinessLoansPage() {
  return (
    <>
      <Head>
        <title>Business Loans | YourBank</title>
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900">

        {/* =========================================================== */}
        {/* ⭐ HERO SECTION — Premium, Gradient, Animated, Glass Effects */}
        {/* =========================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-24 px-4 text-center">

          {/* Animated Blur Lights */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-ping" />
          </div>

          {/* COMING SOON Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block px-6 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
          >
            <span className="text-xl font-semibold text-yellow-300 tracking-wide">
              🚀 COMING SOON 
            </span>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-green-200"
            >
              Empower Your Business with Flexible Funding
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-lg md:text-xl mb-12 text-green-100"
            >
              Tailored loan solutions for Startups, MSMEs, and Enterprises. Faster approvals. Lower interest. Zero hassle.
            </motion.p>

            {/* Cards Row hrhrh */}
            <div className="grid gap-6 md:grid-cols-3 text-left px-4">
              {[
                {
                  title: "🚀 For Startups",
                  desc: "Instant working capital and funds to build and scale your product.",
                },
                {
                  title: "🏢 For SMEs",
                  desc: "Grow your business with machinery, marketing, team expansion loans.",
                },
                {
                  title: "🏙️ For Enterprises",
                  desc: "Large-scale funding with flexible repayment and premium support.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition duration-300 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-green-100">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-700">
            What is a Business Loan?
          </h2>
          <p className="text-gray-700 text-lg">
            A business loan provides financial support for growth, working capital, expansion,
            equipment, or other operational needs. Whether you're launching a startup or growing
            an enterprise, our business loans fuel your vision.
          </p>
        </section>
      
        <section className="py-20 px-4 bg-green-100 max-w-7xl mx-auto rounded-2xl border border-green-200">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-700">
            Types of Business Loans
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Working Capital Loans", desc: "Short-term loans for everyday operations." },
              { title: "Startup Loans", desc: "Capital to launch and scale your startup." },
              { title: "Equipment Financing", desc: "Buy or lease essential business equipment." },
              { title: "Invoice Financing", desc: "Convert pending invoices into quick cash." },
              { title: "Term Loans", desc: "Long-term funds for expansion or investment." },
              { title: "Business Line of Credit", desc: "Flexible revolving credit for recurring needs." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-3 text-green-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-700">
            Why Choose Our Business Loans?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <HiLightningBolt size={40} className="text-green-700" />,
                title: "Fast Disbursal",
                desc: "Quick approval and instant fund transfer for urgent needs.",
              },
              {
                icon: <HiChartBar size={40} className="text-green-700" />,
                title: "Custom Loan Plans",
                desc: "Tailored funding solutions crafted for every business model.",
              },
              {
                icon: <HiClipboardCheck size={40} className="text-green-700" />,
                title: "Minimal Documentation",
                desc: "Quick, hassle-free process with simple paperwork.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-green-100 rounded-xl shadow hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
         <section className="py-24 px-4 bg-gradient-to-r from-green-700 to-green-900 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="mb-8 text-lg text-green-200">
            Apply today and get funding designed to help your business thrive.
          </p>

          <a
            href="/apply-business-loan"
            className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition shadow-lg"
          >
            Apply for Business Loan
          </a>
        </section>

      </main>
    </>
  );
}
