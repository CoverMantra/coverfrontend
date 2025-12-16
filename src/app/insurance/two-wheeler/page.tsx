"use client";

import Head from "next/head";
import { ShieldCheck, Wrench, Clock, CheckCircle, Heart, FileCheck, Star } from "lucide-react";
import bike from "../../../animations/Bike Riding.json";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TwoWheeler from "../AllCalculators/TwoWheeler";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function TwoWheelerInsurancePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>2-Wheeler Insurance | YourBank</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">

        {/* Hero Section */}
        <section
          className="bg-green-900 text-white px-6 py-16 text-center flex flex-col items-center mt-10"
          data-aos="fade-up"
        >
          <Player autoplay loop src={JSON.stringify(bike)} style={{ height: "120px", width: "120px" }} />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Two-Wheeler Insurance</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Protect your bike or scooter with our fast, affordable and reliable insurance plans.
          </p>
        </section>

        {/* Why Riders Choose Us */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">Why Riders Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-7 h-7 text-green-600" />, text: "Third-Party Liability Cover" },
              { icon: <Heart className="w-7 h-7 text-green-600" />, text: "Personal Accident Protection" },
              { icon: <Wrench className="w-7 h-7 text-green-600" />, text: "Cashless Garage Repairs" },
              { icon: <FileCheck className="w-7 h-7 text-green-600" />, text: "Instant Digital Policy" },
              { icon: <Clock className="w-7 h-7 text-green-600" />, text: "Quick Claim Settlement" },
              { icon: <Star className="w-7 h-7 text-green-600" />, text: "No Claim Bonus Benefits" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-xl shadow p-6 flex flex-col items-center hover:shadow-md transition"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                {item.icon}
                <p className="mt-3 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Plans */}
        <section className="py-16 px-6 bg-green-100" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Types of Two-Wheeler Insurance Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Third-Party Liability", desc: "Mandatory cover for damages or injuries to third parties." },
              { title: "Comprehensive Cover", desc: "Protects your own vehicle plus third-party liability." },
              { title: "Own Damage Policy", desc: "Covers only damages to your own 2-wheeler." },
              { title: "Long-Term Policy", desc: "Secure your bike for 2–3 years with a single premium." },
              { title: "Zero Depreciation Add-On", desc: "Get full claim without depreciation cuts." },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border p-6 text-center hover:shadow-lg transition"
                data-aos="flip-right"
                data-aos-delay={idx * 100}
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
          <section className="py-12 px-6 max-w-4xl mx-auto" data-aos="fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                    Two Wheeler Insurance Premium Calculator
                  </h2>
                  <div className="bg-green-50 p-0 rounded-xl shadow border">
                   <TwoWheeler/>
                  </div>
                </section>

        {/* Documents & Benefits Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
            Documents & Benefits of Two-Wheeler Insurance
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Documents Required */}
            <div className="bg-green-50 border rounded-xl shadow p-6" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-4 text-green-900">Documents Required</h2>
              <ul className="list-none text-green-800 space-y-2">
                {[
                  "Driving License",
                  "Vehicle Registration Certificate (RC)",
                  "Previous Insurance (if any)",
                  "ID Proof (Aadhar/PAN/Passport)",
                  "Address Proof",
                ].map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center"
                    data-aos="fade-right"
                    data-aos-delay={idx * 100}
                  >
                    <ShieldCheck className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits of This Insurance */}
            <div className="bg-green-50 border rounded-xl shadow p-6" data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-4 text-green-900">Benefits of 2-Wheeler Insurance</h2>
              <ul className="list-none text-green-800 space-y-2">
                {[
                  "Financial protection against accidents & theft",
                  "Cashless repairs at network garages",
                  "Quick and hassle-free claim settlement",
                  "Personal accident cover for rider & pillion",
                  "No claim bonus for claim-free years",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center"
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            </div>
        </section>
       {/* How It Works */}
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">How to Get Your Bike Covered?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Choose Plan", "Share Vehicle Details", "Make Payment", "Get Instant Policy"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="text-green-600 text-3xl font-bold mb-2">{idx + 1}</div>
                  <p>{step}</p>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Secure Your Ride Today!</h2>
          <p className="text-green-800 mb-6">
            Get 2-wheeler insurance in just a few clicks. Ride worry-free with our trusted protection.
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
