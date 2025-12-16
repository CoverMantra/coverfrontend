"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CheckCircle } from "lucide-react";
import health from "../../../animations/health.json";
import AOS from "aos";

import InsuranceCalculator from "../AllCalculators/healthcalculator";
import "aos/dist/aos.css";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HealthInsurancePage() {
  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <>
      <Head>
        <title>Health Insurance | YourBank</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">
        {/* Hero */}
        <section
          className="bg-green-900 text-white px-6 py-16 text-center flex flex-col items-center mt-6"
          data-aos="fade-down"
        >
          <Player
            autoplay
            loop
            src={JSON.stringify(health)}
            style={{ height: "160px", width: "160px" }}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Health Insurance Plans
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Get comprehensive health coverage for you and your loved ones with
            flexible, affordable, and reliable plans.
          </p>
        </section>

        {/* Why Health Insurance */}
        <section className="py-14 px-6 max-w-6xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Why Choose Health Insurance?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cashless hospital network",
              "Coverage for critical illnesses",
              "Free annual health check-ups",
              "Tax benefits under Section 80D",
              "Affordable premiums",
              "24x7 customer support",
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

        <section className="py-12 px-6 max-w-4xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Health Insurance Premium Calculator
          </h2>
          <div className="bg-white rounded-xl shadow border mt-0 ">
            <InsuranceCalculator />
          </div>
        </section>

        {/* Plans We Offer */}
        <section className="py-16 px-6 bg-green-100" data-aos="fade-left">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Our Health Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Individual Plan", desc: "Best for single person coverage" },
              { title: "Family Floater", desc: "Covers entire family under one plan" },
              { title: "Senior Citizen Plan", desc: "Special plan for 60+ age group" },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
                data-aos="zoom-in"
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

        {/* ✅ Documents & Benefits in One Section */}
        <section className="py-16 px-6 bg-green-50" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Documents & Benefits of Health Insurance
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
            {/* Documents */}
            <div
              className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Documents Required
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Identity Proof (Aadhar, PAN, Passport)",
                  "Address Proof (Utility Bills, Driving License)",
                  "Age Proof (Birth Certificate, School Certificate)",
                  "Medical Reports (if any pre-existing conditions)",
                  "Passport-size Photographs",
                  "Income Proof (if required for higher coverage)",
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div
              className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Benefits of Health Insurance
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Financial protection against medical emergencies",
                  "Cashless treatment in network hospitals",
                  "Covers hospitalization & surgeries",
                  "Tax benefits under Section 80D",
                  "Peace of mind for you and your family",
                  "Better healthcare access & preventive checkups",
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

        {/* How It Works */}
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="zoom-in">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            How to Get Insured?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Choose Plan", "Submit Details", "Pay Premium", "Get Policy"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-6"
                  data-aos="flip-left"
                >
                  <div className="text-green-600 text-3xl font-bold mb-2">
                    {idx + 1}
                  </div>
                  <p>{step}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Health?
          </h2>
          <p className="text-green-800 mb-6">
            Start your journey today. Get the right coverage for you and your family.
          </p>
          <a
            href="/apply-insurance"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition text-lg"
            data-aos="zoom-in"
          >
            Apply Now
          </a>
        </section>
      </main>
    </>
  );
}
