"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import { Plane, HeartPulse, Wallet, MapPin, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import travel from "../../../animations/AeroplaneFlying.json";
import TravelCalculator from "../AllCalculators/TravelCalculator";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function TravelInsurancePage() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Travel Insurance</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">
        {/* Hero Section */}
        <section className="bg-green-900 text-white px-6 py-16 flex flex-col items-center text-center mt-10" data-aos="fade-down">
          <div className="w-full flex justify-center mb-6">
            <Player
              autoplay
              loop
              src={JSON.stringify(travel)}
              style={{ height: "120px", width: "120px" }}
            />
          </div>
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold">
              Travel Insurance
            </h1>
            <p className="mt-4 text-lg">
              Wherever you go, we make sure your journey stays protected.
            </p>
          </div>
        </section>

        {/* Why Choose Travel Insurance */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-10" data-aos="fade-up">
            Why Choose Travel Insurance?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <HeartPulse className="text-green-600 w-7 h-7" />, text: "Emergency Medical Assistance", aos: "fade-right" },
              { icon: <Wallet className="text-green-600 w-7 h-7" />, text: "Loss of Baggage & Documents", aos: "fade-up" },
              { icon: <Plane className="text-green-600 w-7 h-7" />, text: "Flight Delays & Cancellations", aos: "fade-left" },
              { icon: <ShieldCheck className="text-green-600 w-7 h-7" />, text: "Personal Accident Cover", aos: "zoom-in" },
              { icon: <MapPin className="text-green-600 w-7 h-7" />, text: "Global Protection", aos: "flip-left" },
              { icon: <Clock className="text-green-600 w-7 h-7" />, text: "24x7 Assistance", aos: "flip-right" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow p-6 flex flex-col items-center hover:shadow-md transition"
                data-aos={item.aos}
              >
                {item.icon}
                <p className="mt-3 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Insurance Plans */}
        <section className="py-16 px-6 bg-green-100">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
            Our Travel Insurance Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Solo Traveler", desc: "Affordable plans for individuals on domestic or international trips.", aos: "fade-right" },
              { title: "Family Plan", desc: "One policy that covers the entire family while traveling together.", aos: "fade-up" },
              { title: "Student Plan", desc: "Special coverage for students studying or traveling abroad.", aos: "fade-left" },
              { title: "Corporate Travel", desc: "Business trip protection with quick claims & global support.", aos: "zoom-in" },
              { title: "Senior Citizen Plan", desc: "Extra care and medical support for senior travelers.", aos: "flip-left" },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
                data-aos={plan.aos}
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
        {/* Calculator Section */}
        <section className="py-10 px-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Travel Insurance Premium Calculator
          </h2>
          <div className="bg-green-50 p-0 rounded-xl shadow border mt-0">
            <TravelCalculator />
          </div>
        </section>


        {/* Documents & Benefits Section */}
        <section className="py-12 px-6 bg-green-50 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8" data-aos="fade-up">
            Documents & Benefits of Travel Insurance
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Documents Required */}
            <div className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full" data-aos="fade-right" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Documents Required
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Passport copy",
                  "Visa copy (if required)",
                  "ID Proof (Aadhar, PAN, Passport)",
                  "Travel itinerary",
                  "Previous insurance policy (if renewal)",
                  "Passport-size photographs",
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2" data-aos="fade-right" data-aos-delay={idx * 100}>
                    <ShieldCheck className="text-green-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col h-full" data-aos="fade-left" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">
                Benefits of Travel Insurance
              </h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Emergency medical coverage",
                  "Trip cancellation & interruption",
                  "Loss of baggage & documents",
                  "Accidental death & disability coverage",
                  "24x7 global assistance",
                  "Peace of mind during travel",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2" data-aos="fade-left" data-aos-delay={idx * 100}>
                    <CheckCircle className="text-green-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            How to Get Covered?
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Select Plan", "Enter Trip Details", "Pay Online", "Get Instant Policy"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
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
            Ready to Travel Worry-Free?
          </h2>
          <p className="text-green-800 mb-6">
            Buy travel insurance in minutes and explore the world with peace of mind.
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
