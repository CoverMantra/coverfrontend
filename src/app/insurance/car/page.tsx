"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import { CheckCircle } from "lucide-react";
import car from "../../../animations/Car1.json";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import CarCalculator from "../AllCalculators/carcalculator";
import "aos/dist/aos.css";

// ✅ Dynamic import for Lottie Player
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function CarInsurancePage() {
  const currentYear = new Date().getFullYear();

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({disable:'phone', duration: 1000 });
  }, []);

 return (
    <>
      <Head>
        <title>Car Insurance</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">
        {/* Hero Section */}
        <section
          className="bg-green-900 text-white px-6 py-16 text-center flex flex-col items-center mt-6"
          data-aos="fade-up"
        >
          <Player
            autoplay
            loop
            src={JSON.stringify(car)}
            style={{ height: "120px", width: "120px" }}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Car Insurance Plans
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Protect your vehicle and yourself from financial losses with our
            trusted car insurance policies.
          </p>
        </section>

        {/* Why Car Insurance */}
        <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Why Do You Need Car Insurance?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mandatory by law (Third-Party Insurance)",
              "Covers damages to your car",
              "Protection against theft",
              "Covers natural disasters & accidents",
              "Cashless repair at partner garages",
              "Personal accident cover",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow p-6 flex gap-3 items-start"
                data-aos="zoom-in"
              >
                <CheckCircle className="text-green-600 mt-1" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Plans */}
        <section className="py-16 px-6 bg-green-100" data-aos="fade-left">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Types of Car Insurance Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Third-Party Liability",
                desc: "Mandatory by law; covers damages to others.",
              },
              {
                title: "Comprehensive Plan",
                desc: "Full protection for your car & third-party.",
              },
              {
                title: "Zero Depreciation Plan",
                desc: "Get full claim without depreciation cuts.",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
                data-aos="flip-up"
              >
                <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                <p className="text-green-700 mb-4">{plan.desc}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 px-6 max-w-3xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Car Insurance Premium Calculator
          </h2>
         <CarCalculator />
             </section>
      {/* 📑 Documents & Benefits Section */}
        <section className="py-16 px-6 bg-green-50">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Documents & Benefits of Car Insurance
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          <div
              className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Documents Required
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "RC (Registration Certificate) of the car",
                  "Identity Proof (Aadhar, PAN, Passport)",
                  "Address Proof (Utility Bills, Driving License)",
                  "Driving License",
                  "Previous insurance policy (if renewal)",
                  "Passport-size Photographs",
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

        
           <div
              className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Benefits of Car Insurance
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Financial coverage for damages & repairs",
                  "Cashless repair at partner garages",
                  "Coverage against theft & fire",
                  "Personal accident cover",
                  "Third-party liability protection",
                  "Peace of mind while driving",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            How to Get Your Car Insured?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Choose Plan",
              "Enter Vehicle Details",
              "Pay Premium",
              "Download Policy",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6"
                data-aos="zoom-in"
              >
                <div className="text-green-600 text-3xl font-bold mb-2">
                  {idx + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      
        <section className="py-16 px-6 bg-green-50" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            📊 Compare Insurance Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "HDFC Ergo", desc: "Affordable premium with wide coverage." },
              { name: "ICICI Lombard", desc: "Trusted partner with cashless garages." },
              { name: "Bajaj Allianz", desc: "Comprehensive coverage at best rates." },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                <p className="text-green-700 mb-4">{plan.desc}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  View Plan
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Secure Your Car Today!
          </h2>
          <p className="text-green-800 mb-6">
            Get peace of mind while driving. Choose a plan that fits your needs
            and protect your vehicle.
          </p>
          <a
            href="/apply-insurance"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition text-lg"
          >
            Apply Now
          </a>
        </section>
      </main>
    </>
  );
}
