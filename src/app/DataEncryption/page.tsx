"use client";

import React from "react";
import Lottie from "lottie-react";
import { AlertTriangle } from "lucide-react";
import DataSecurity from "../../animations/data.json";

export default function DataEncryptionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-gray-800 font-sans">

      {/* Section 1: Hero Banner */}
      <section className="relative flex flex-col items-center justify-center py-16 sm:py-28 px-4 sm:px-6 text-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 mt-6 sm:mt-10 drop-shadow-lg">
          🔐 Data Encryption in Finance
        </h1>
        <p className="relative max-w-xl text-sm sm:text-lg md:text-xl leading-relaxed opacity-90">
          Protecting sensitive data with modern encryption methods to ensure
          trust, compliance, and security in financial systems.
        </p>
      </section>

      {/* Section 2: Introduction */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-12 sm:py-20 px-4 sm:px-6">
        <img
          src="https://cdn-icons-gif.flaticon.com/19014/19014137.gif"
          alt="Encryption Illustration"
          className="rounded-2xl shadow-2xl w-100 max-w-sm sm:max-w-md  h-100 mx-auto border-4 border-green-200 hover:scale-105 transition-transform duration-500"
        />

        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-900">
            What is Data Encryption?
          </h2>
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
            Encryption converts readable data into an unreadable format using
            algorithms and keys. Only authorized parties with the correct key
            can decrypt and access the original information.
          </p>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-100 to-green-500 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-green-900">
            How Encryption Works
          </h2>
          <ol className="space-y-2 sm:space-y-4 text-sm sm:text-lg text-gray-700 list-decimal list-inside">
            <li>Data is encrypted using unique encryption keys.</li>
            <li>Encrypted data is stored securely.</li>
            <li>Authorized users decrypt using valid keys.</li>
            <li>Ongoing monitoring prevents unauthorized access.</li>
          </ol>
        </div>
        <Lottie animationData={DataSecurity} className="w-60 sm:w-80 h-60 sm:h-80 mx-auto" />
      </section>

      {/* Section 4: Real-Life Applications */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-green-900">
          Real-Life Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {["Online Banking", "Digital Payments", "eKYC & Identity Verification"].map((item, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-green-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Challenges */}
      <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="w-12 sm:w-16 h-12 sm:h-16 text-red-600 mx-auto mb-4 sm:mb-6 animate-bounce" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-red-700">
            Challenges & Risks
          </h2>
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
            High costs, complex key management, and potential performance issues
            are common challenges organizations face when implementing encryption.
          </p>
        </div>
      </section>

      {/* Section 6: Compliance */}
      <section className="bg-gradient-to-r from-green-100 to-green-400 py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-green-900">
          Regulatory Compliance
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {["RBI IT Guidelines", "PCI DSS", "GDPR"].map((compliance, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 bg-white/90 rounded-2xl shadow-lg border border-green-500 text-center hover:bg-green-50 hover:scale-105 transition-transform duration-300"
            >
              {compliance}
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Best Practices */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-green-900">
          Best Practices
        </h2>
        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-lg text-gray-800 max-w-3xl mx-auto list-disc list-inside bg-white/70 p-6 sm:p-8 rounded-2xl shadow-md">
          <li>Use strong algorithms (AES, RSA).</li>
          <li>Regularly rotate and update keys.</li>
          <li>Secure storage and management of keys.</li>
          <li>Encrypt data both in transit and at rest.</li>
          <li>Perform regular security audits.</li>
        </ul>
      </section>
    </div>
  );
}
