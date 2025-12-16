"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import dynamic from "next/dynamic";
import health from "../../animations/health.json";
import car from "../../animations/Car1.json";
import home from "../../animations/Home1.json";
import aeroplane from "../../animations/AeroplaneFlying.json";
import bike from "../../animations/Bike Riding.json";
import family from "../../animations/family.json";
import Link from "next/link";
import { useState } from "react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const insuranceCards = [
  {
    title: "Health Insurance",
    badge: "FREE Home Visit",
    badgeColor: "bg-green-100 text-green-600",
    lottie: health,
    link: "/insurance/health",
  },
  {
    title: "Car Insurance",
    badge: "Upto 25% Discount",
    badgeColor: "bg-green-100 text-green-700",
    lottie: car,
    link: "/insurance/car",
  },
  {
    title: "Home Insurance",
    badge: "Upto 25% Discount",
    badgeColor: "bg-green-100 text-green-700",
    lottie: home,
    link: "/insurance/home",
  },
  {
    title: "Travel Insurance",
    badge: "Upto 25% Discount",
    badgeColor: "bg-green-100 text-green-700",
    lottie: aeroplane,
    link: "/insurance/travel",
  },
  {
    title: "Life Insurance",
    badge: "Upto 25% Discount",
    badgeColor: "bg-green-100 text-green-700",
    lottie: family,
    link: "/insurance/life",
  },
  {
    title: "Two Wheeler Insurance",
    badge: "Upto 25% Discount",
    badgeColor: "bg-green-100 text-green-700",
    lottie: bike,
    link: "/insurance/two-wheeler",
  },

];
export default function InsurancePage() {
  const [activeTab, setActiveTab] = useState("Health Insurance");

  return (
    <>
      <Head>
        <title>Insurance Plans | YourBank</title>
      </Head>
      <main className="min-h-screen mt-15 bg-green-50 text-green-900">
        {/* Hero Section */}
        <section className="bg-green-900 text-white min-h-[150px] px-4 py-10 text-center flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 mb-4"
          >
            <Clock className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
              Coming Soon
            </h2>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 px-2">
            Secure Your Future with Our Insurance Plans
          </h1>
          <p className="text-base md:text-xl max-w-3xl mx-auto mb-6 px-3">
            Protect yourself and your loved ones with flexible, reliable, and
            comprehensive insurance solutions.
          </p>
        </section>

        {/* Types of Insurance */}
        <section className="py-12 px-4 bg-green-50 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">
            Types of Insurance We Offer
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-stretch">
            {insuranceCards.map((item, idx) => (
              <Link key={idx} href={item.link} className="h-full">
                <div className="h-full bg-green-100 border rounded-xl shadow hover:shadow-lg p-3 flex flex-col items-center justify-between transition cursor-pointer">
                  {item.badge && (
                    <span
                      className={`text-sm font-semibold px-2 py-1 rounded-full mb-2 ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {/* Lottie Animation */}
                  <Player
                    autoplay
                    loop
                    src={item.lottie}
                    style={{ height: "95px", width: "100px" }}
                  />
                  <h3 className="text-xl md:text-base font-bold text-center mt-3">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}

          </div>
        </section>

      
        <section className="py-16 bg-green-100 text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-green-900">
            Get Insured Today
          </h2>
          <p className="mb-6 text-green-800 text-base md:text-lg max-w-2xl mx-auto">
            Start your journey to a safer tomorrow. Choose the right plan for
            your needs and secure peace of mind for your family.
          </p>
          <a
            href="/apply-insurance"
            className="inline-block bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-green-700 transition text-lg"
          >
            Apply for Insurance
          </a>

        </section>
      </main>
    </>
  );
}
