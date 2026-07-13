"use client";

import React from "react";
import LoanCalculator from "@/app/Components/EmiCalculator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EmiCalculatorClient() {
  return (
    <div className="pt-24 bg-[#FFF4E5] min-h-screen">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF690B] transition-colors group font-semibold text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>
      
      {/* EMI Calculator Component */}
      <LoanCalculator />
    </div>
  );
}
