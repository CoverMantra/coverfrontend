"use client";

import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import DataSecurity from "../../animations/data.json";
import Rupee from "../../animations/Image.json";
import Loan from "../../animations/Loan.json";

const Cards = () => {
  return (
    <section className="bg-[#FFF4E5] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight">
            Security & Privacy
          </h1>
          <p className="mt-4 text-lg text-[#08101E]/70 max-w-2xl mx-auto">
            Your trust is our top priority. We protect your data with military-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Three Security Cards - lg:col-span-8 */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Data Encryption */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-28 h-28 mb-6 bg-gradient-to-br from-[#FF690B]/10 to-transparent rounded-2xl flex items-center justify-center">
                <Lottie animationData={DataSecurity} className="h-24 w-24" />
              </div>
              <h6 className="text-2xl font-bold text-[#08101E] mb-4">Data Encryption</h6>
              <p className="text-[#5b4637] leading-relaxed text-[15px] flex-grow">
                Secures sensitive information like credit scores, bank details, and IDs from cyber threats with strong encryption methods.
              </p>
              <Link
                href="/DataEncryption"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF690B] to-[#FF8C00] text-white font-semibold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 14 10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>

            {/* Card 2 - RBI Registered Banks */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-28 h-28 mb-6 bg-gradient-to-br from-[#FF690B]/10 to-transparent rounded-2xl flex items-center justify-center">
                <Lottie animationData={Rupee} className="h-24 w-24" />
              </div>
              <h6 className="text-2xl font-bold text-[#08101E] mb-4">RBI Registered Banks</h6>
              <p className="text-[#5b4637] leading-relaxed text-[15px] flex-grow">
                Partner banks comply with RBI regulations ensuring transparency, consumer protection, and secure loan services.
              </p>
              <Link
                href="/DataEncryption/rbi"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF690B] to-[#FF8C00] text-white font-semibold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 14 10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>

            {/* Card 3 - User Trust */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-28 h-28 mb-6 bg-gradient-to-br from-[#FF690B]/10 to-transparent rounded-2xl flex items-center justify-center">
                <Lottie animationData={Loan} className="h-24 w-24" />
              </div>
              <h6 className="text-2xl font-bold text-[#08101E] mb-4">User Trust Statements</h6>
              <p className="text-[#5b4637] leading-relaxed text-[15px] flex-grow">
                Your personal data remains encrypted & never shared without consent, ensuring trust and privacy protection.
              </p>
              <Link
                href="/DataEncryption/user"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF690B] to-[#FF8C00] text-white font-semibold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 14 10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side Content - Why Security Matters */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-10 shadow-xl border border-white/60 h-full flex flex-col">
            <h2 className="text-3xl font-bold text-[#08101E] leading-tight mb-8">
              Why Security & Privacy Matters?
            </h2>
            
            <div className="space-y-6 text-[#5b4637] text-[15.5px] leading-relaxed flex-grow">
              <p>
                In today’s digital-first world, financial data is one of the most valuable assets. 
                Protecting it not only prevents fraud but also builds long-term trust with customers.
              </p>
              <p>
                By using <span className="font-semibold text-[#FF690B]">industry-standard encryption</span> 
                and collaborating with <span className="font-semibold text-[#FF690B]">RBI registered banks</span>, 
                we ensure your sensitive data stays safe while offering you a smooth and transparent loan experience.
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-[#FF690B]/20">
              <div className="flex items-center gap-3 text-sm text-[#FF690B] font-medium">
                <div className="w-2 h-2 bg-[#FF690B] rounded-full animate-pulse" />
                256-Bit SSL Encryption • RBI Compliant • Zero Data Sharing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;