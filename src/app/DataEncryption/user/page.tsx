"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, Star, ThumbsUp, Globe } from "lucide-react";

export default function UserTrustPage() {
  const trustStatements = [
    {
      icon: <ShieldCheck className="w-14 h-14 text-green-700" />,
      title: "Data Security First",
      desc: "We prioritize the security of your personal and financial information with enterprise-grade protection.",
    },
    {
      icon: <Lock className="w-14 h-14 text-green-700" />,
      title: "End-to-End Encryption",
      desc: "Your data is encrypted at rest and in transit, ensuring privacy at all stages of communication.",
    },
    {
      icon: <Users className="w-14 h-14 text-green-700" />,
      title: "Trusted by Millions",
      desc: "Our platform is trusted by thousands of users and organizations worldwide for secure transactions.",
    },
    {
      icon: <Star className="w-14 h-14 text-green-700" />,
      title: "Proven Track Record",
      desc: "High uptime, compliance with global standards, and positive customer feedback prove our reliability.",
    },
    {
      icon: <ThumbsUp className="w-14 h-14 text-green-700" />,
      title: "Transparency & Integrity",
      desc: "We follow transparent policies with no hidden practices, building long-term trust with our users.",
    },
    {
      icon: <Globe className="w-14 h-14 text-green-700" />,
      title: "Global Compliance",
      desc: "We comply with RBI, PCI DSS, GDPR, and international data protection regulations.",
    },
  ];

  return (

    
    <div className="min-h-screen mt-15 bg-gradient-to-br from-white via-green-50 to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          🤝 Why Users Trust Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Building confidence with security, compliance, and transparency at
          every step of your journey.
        </motion.p>
      </section>

      {/* Trust Statements */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {trustStatements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6 bg-green-700 text-white">
        <h2 className="text-3xl font-extrabold mb-6">
          Trust is Earned, Not Claimed
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          With secure systems, compliance, and transparency, we ensure that your
          trust is always well-placed.
        </p>
        {/* <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-full shadow hover:bg-gray-100 transition">
          Learn More About Our Policies
        </button> */}
      </section>
    </div>
  );
}
