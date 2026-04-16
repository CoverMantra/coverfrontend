"use client";

import React, { useState } from "react";
import { FaGooglePlay, FaApple, FaCheckCircle, FaShieldAlt, FaBolt, FaMobileAlt } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function DownloadAppSection() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  const features = [
    { icon: <FaBolt />, text: "Instant Approval" },
    { icon: <FaShieldAlt />, text: "100% Secure" },
    { icon: <FaMobileAlt />, text: "Paperless" },
    { icon: <FaCheckCircle />, text: "Easy EMI" },
  ];

  const handleDownloadClick = () => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");

    if (!co_phone || !co_token) {
      setLoginOpen(true);
    } else {
      window.open("https://play.google.com/store/apps/details?id=com.covermantra.loan", "_blank");
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
                Get The <span className="text-green-600">Covermantra</span> App
              </h2>
              <p className="text-gray-600 text-lg">
                Download our app for instant loans, secure transactions, and seamless financial management.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <div className="text-green-600 text-lg">{feature.icon}</div>
                  </div>
                  <span className="font-medium text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleDownloadClick}
                className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-base">Google Play</div>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95">
                <FaApple className="text-xl" />
                <div className="text-left">
                  <div className="text-xs opacity-80">COMING SOON</div>
                  <div className="text-base">App Store</div>
                </div>
              </button>
            </div>

            
           
          </div>

          {/* Right Section - App Preview */}
         <div className="relative flex justify-center lg:justify-end">
  <div className="relative max-w-xs sm:max-w-sm lg:max-w-sm rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500">
    <img
      src="/App.jpg" // your image path in public folder
      alt="CoverMantra App Screenshot"
      className="w-full h-auto object-cover rounded-3xl"
    />
  </div>
</div>

        </div>
        <div className="w-full flex justify-center items-center mt-12 pt-2  opacity-80">
          <p className="text-sm md:text-lg font-serif text-green-900 tracking-[0.2em] font-semibold">
             <span className="mx-1 md:mx-2">🔱सत्यम शिवम सुंदरम🔱</span> 
          </p>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </section>
  );
}