"use client";

import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { CheckCircle, FileText, Shield } from "lucide-react";
import AOS from "aos";
import HomeCalculator from "../AllCalculators/HomeCalculator";

import home from "../../../animations/Home1.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HomeInsurancePage() {
  // ✅ Init AOS
  useEffect(() => {
    import("aos/dist/aos.css").then(() => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home Insurance | YourBank</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">
        {/* Hero Section */}
        <section
          className="bg-green-900 text-white px-6 py-16 text-center flex flex-col items-center mt-10"
          data-aos="fade-up"
        >
          <Player
            autoplay
            loop
            src={JSON.stringify(home)}
            style={{ height: "120px", width: "120px" }}
          />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">
            Home Insurance Plans
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Secure your house and valuables from fire, theft, and natural
            disasters with our trusted home insurance policies.
          </p>
        </section>

        {/* Why Home Insurance */}
        <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-right">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Why Do You Need Home Insurance?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Protection against fire & natural disasters",
              "Coverage for burglary & theft",
              "Covers accidental damages (short circuit, gas explosion)",
              "Structural protection (walls, roof, foundation)",
              "Liability protection for accidents inside your home",
              "Peace of mind for homeowners & tenants",
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
            Types of Home Insurance Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Basic Fire & Perils Policy",
                desc: "Covers damages due to fire, floods, storms, and earthquakes.",
              },
              {
                title: "Comprehensive Home Policy",
                desc: "Full protection for house structure + household contents.",
              },
              {
                title: "Tenant's Insurance",
                desc: "Protects your personal belongings in a rented home.",
              },
              {
                title: "Landlord's Insurance",
                desc: "Covers property damage and loss of rental income.",
              },
              {
                title: "Contents-Only Policy",
                desc: "Safeguards furniture, appliances, electronics, and jewelry.",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
                data-aos="flip-left"
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

        {/* Documents & Benefits */}
        <section className="py-16 px-6 bg-green-100" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Documents & Benefits of Home Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Documents */}
            <div className="bg-white shadow rounded-xl p-6 border" data-aos="fade-right">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="text-green-600" /> Documents Required
              </h3>
              <ul className="space-y-3 text-green-800">
                {[
                  "Proof of Identity (Aadhar, PAN, Passport)",
                  "Proof of Address (Utility Bill, Rental Agreement)",
                  "Property Ownership Documents / Sale Deed",
                  "Property Tax Receipts",
                  "Previous Insurance Policy (if any)",
                  "Photographs of the Property",
                ].map((doc, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle className="text-green-600" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white shadow rounded-xl p-6 border" data-aos="fade-left">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-green-600" /> Benefits of Home Insurance
              </h3>
              <ul className="space-y-3 text-green-800">
                {[
                  "Financial protection against unforeseen damages",
                  "Covers both structure & contents of home",
                  "Protection against burglary, theft & disasters",
                  "Low premium, high-value coverage",
                  "Peace of mind for homeowners & tenants",
                  "Additional riders for electronics & valuables",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-2 items-center">
                    <CheckCircle className="text-green-600" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Home Insurance Premium Calculator
          </h2>
          <div className="bg-green-50 p-4 rounded-xl shadow border mt-0">
            <HomeCalculator />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            How to Get Your Home Insured?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Choose Plan", "Enter Property Details", "Pay Premium", "Download Policy"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
                  data-aos="zoom-in"
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
            Protect Your Dream Home Today!
          </h2>
          <p className="text-green-800 mb-6 max-w-2xl mx-auto">
            Get the right coverage for your house and belongings. Choose a plan
            that fits your needs and secure your home.
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
