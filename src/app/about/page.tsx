"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Partners from "../our_partners/page";
import { CheckCircle, Clock, FileText, EyeOff, Shield } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // run only once
    });
  }, []);

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-green-50 to-green-400 text-gray-800">
      {/* HERO */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-r from-green-800 via-green-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/patterns/finance-bg.svg')] bg-cover bg-center" />
        <h1
        
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Driving Innovation in Global Finance
        </h1>

        <p
          data-aos-delay="200"
          className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 leading-relaxed"
        >
          At <span className="font-extrabold text-green-300">CoverMantra</span>, we
          are redefining how people interact with money. Our cutting-edge
          financial technology delivers seamless, secure, and intelligent
          solutions for modern banking and investments.
        </p>
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We aim to bridge the gap between technology and finance by providing
            cutting-edge fintech solutions. Whether you are an individual looking
            to grow your savings or a business aiming to streamline payments, we
            deliver tools that drive innovation and create financial freedom.
          </p>
        </div>
        {/* Removed Lottie animation → replaced with an image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-7963.jpg"
            alt="Our Mission"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-gradient-to-r from-green-300 to-green-800 py-16 px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
        >
          Why We’re Different
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <CheckCircle className="mx-auto text-green-600 w-12 h-12 mb-4" />
              ),
              title: "Fast Approval",
              desc: "Get your applications approved within minutes with our quick verification process.",
            },
            {
              icon: (
                <Clock className="mx-auto text-green-600 w-12 h-12 mb-4" />
              ),
              title: "Quick Disbursal",
              desc: "Funds are transferred promptly, ensuring you have access when you need it most.",
            },
            {
              icon: (
                <FileText className="mx-auto text-green-600 w-12 h-12 mb-4" />
              ),
              title: "100% Paperless",
              desc: "Say goodbye to tedious paperwork with our fully digital process.",
            },
            {
              icon: (
                <EyeOff className="mx-auto text-green-600 w-12 h-12 mb-4" />
              ),
              title: "No Hidden Charges",
              desc: "Transparent pricing with no surprise fees—ever.",
            },
            {
              icon: (
                <Shield className="mx-auto text-green-600 w-12 h-12 mb-4" />
              ),
              title: "Safe Data Ecosystem",
              desc: "Your information is secured in a highly protected and reliable digital environment.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* PRINCIPLES */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-100 to-green-400">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-green-900 mb-6"
          >
            Our Guiding Principles
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10"
          >
            We believe financial success is more than just transactions—it's
            about empowering lives. Our approach is built on three core pillars:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                desc: "Upholding the highest standards of transparency and trust in every interaction.",
              },
              {
                title: "Innovation",
                desc: "Continuously evolving our technology to provide the smartest and most efficient solutions.",
              },
              {
                title: "Empowerment",
                desc: "Equipping our users with tools and knowledge to take control of their financial future.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 200}
                className="p-8 bg-white rounded-2xl shadow-md border-t-4 border-green-600 hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 bg-gradient-to-r from-green-300 to-green-600 text-green-800 text-center px-6">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg"
        >
          Empower Your Financial Journey
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-3xl mx-auto mb-6 text-base md:text-lg text-gray-700"
        >
          Take control of your future with smart tools, expert insights, and a
          trusted platform designed to help you grow, save, and invest with
          confidence.
        </p>
      </section>
    </div>
  );
}
