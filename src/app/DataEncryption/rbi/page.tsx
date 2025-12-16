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
} from "lucide-react";

export default function RBICompliancePage() {
  const banks = [
    { name: "State Bank of India (SBI)", logo: "https://logos-world.net/wp-content/uploads/2023/02/SBI-Logo.png" },
    { name: "Punjab National Bank (PNB)", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Punjab_National_Bank_new_logo.svg" },
    { name: "HDFC Bank", logo: "https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png" },
    { name: "ICICI Bank", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Yfl3u_FGS0L-sfnzW1kBeUqtwZnmAoztlg&s" },
    { name: "Axis Bank", logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg" },
    { name: "Bank of Baroda", logo: "https://1000logos.net/wp-content/uploads/2021/06/Bank-of-Baroda-logo.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative text-center mt-15 py-24 bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          🏦 RBI & Registered Banks
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          The Reserve Bank of India regulates and supervises banks to ensure
          trust, compliance, and financial stability across the country.
        </motion.p>
      </section>




      {/* RBI  */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <Landmark className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Regulation",
            desc: "RBI sets policies to ensure smooth banking operations and fair practices.",
          },
          {
            icon: <ShieldCheck className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Supervision",
            desc: "RBI supervises banks and NBFCs to ensure compliance with laws.",
          },
          {
            icon: <FileText className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Guidelines",
            desc: "It issues IT & cybersecurity guidelines to protect customer data.",
          },
          {
            icon: <Users className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Customer Protection",
            desc: "Safeguards customer rights and ensures secure transactions.",
          },
          {
            icon: <Banknote className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Monetary Stability",
            desc: "Ensures financial stability and secure monetary transactions.",
          },
          {
            icon: <TrendingUp className="w-14 h-14 text-green-700 mx-auto" />,
            title: "Growth",
            desc: "Encourages digital banking & financial inclusion in India.",
          },
        ].map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.08 }}
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            {item.icon}
            <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* RBI Registered Banks Showcase */}
      <section className="bg-green-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
          RBI Registered Major Banks
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {banks.map((bank, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-lg font-semibold text-black">{bank.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-green-800 mb-6"
        >
          RBI Banking Compliance
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          All RBI-registered banks must follow strict compliance rules
          including customer protection, IT security, and fair lending practices
          to ensure India’s financial system remains strong and trustworthy.
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-green-700 text-white">
        <h2 className="text-3xl font-extrabold mb-6">
          RBI — Building Trust in Banking
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          From public banks to private sector leaders, RBI ensures financial
          stability, secure banking, and growth for the Indian economy.
        </p>
        {/* <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-full shadow hover:bg-gray-100 transition">
          Explore More
        </button> */}
      </section>
    </div>
  );
}
