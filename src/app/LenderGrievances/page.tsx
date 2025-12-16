"use client";

import React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function LenderGrievance() {
  return (
    <main className="min-h-screen mt-15 bg-gray-100 text-gray-800 px-4 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
        Lender Grievance
      </h1>
       {/* Card Container */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="flex justify-center">
        <div className="bg-green-50 shadow-lg rounded-2xl w-full max-w-sm p-3 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
          
        <div className="flex justify-center mb-6">
            <Image
              src="https://moneyview.in/images/mv-green-logo-v3Compressed.svg"
              alt="Money View Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
         
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center space-x-1">
              <FaUser className="text-green-600" />
              <p className="text-gray-700">
                <span className="font-semibold text-green-700">Grievance Officer:</span> Rishov Bhattacharjee
              </p>
            </div>

            <div className="text-gray-700">
              <span className="font-semibold text-green-700">Address:</span><br />
              17/1, 1st and 2nd Floor, The Address Building,<br />
              Outer Ring Road, Marathahalli, Kadubeesanahalli,<br />
              Bangalore – 560103
            </div>

            <div className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-green-600" />
              <a
                href="mailto:grievance@moneyview.in"
                className="text-blue-600 hover:underline"
              >
                grievance@moneyview.in
              </a>
            </div>

            <div className="text-green-700">
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:08069390476" className="text-blue-600 hover:underline">
                080 6939 0476
              </a>
            </div>

            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Timings:</span> 9:00 AM - 6:00 PM<br />
              (Mon - Fri, excluding public holidays)
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href="mailto:grievance@moneyview.in"
              className="block bg-green-100 text-green-700 font-medium rounded-lg py-3 hover:bg-green-600 hover:text-white transition duration-300"
            >
              Contact Now
            </a>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
