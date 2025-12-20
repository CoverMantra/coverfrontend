"use client";

import React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope } from "react-icons/fa";

const lenders = [
  {
    name: "Money View",
    logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
    officer: "Rishov Bhattacharjee",
    address: `17/1, 1st and 2nd Floor, The Address Building,
Outer Ring Road, Marathahalli, Kadubeesanahalli,
Bangalore – 560103`,
    email: "grievance@moneyview.in",
    phone: "08069390476",
    timings: "9:00 AM - 6:00 PM (Mon - Fri, excluding public holidays)",
  },

   {
    name: "FDPL Finance Private Limited",
    logo: "https://www.fdplfinance.com/assets/images/logo/Logo.svg",
    officer: " Ms. Vaishnavi Batulkar",
    address: ` Office Number 623, 6th floor, B-Wing, Chintamani Plaza, Andheri kurla road, Near to Western express metro, Mumbai - 400099`,
    email: " escalation@fdplfinance.com, help@fdplfinance.com",
    phone: " +91-9076058709",
    timings: "9:00 AM - 6:00 PM (Mon - Fri, excluding public holidays)",
  },
];

export default function LenderGrievance() {
  return (
    <main className="min-h-screen mt-16 bg-gray-100 text-gray-800 px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
        Lender Grievance
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lenders.map((lender, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-green-50 shadow-lg rounded-2xl w-full max-w-sm p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              
              <div className="flex justify-center mb-6">
                <Image
                  src={lender.logo}
                  alt={`${lender.name} Logo`}
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>

              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <FaUser className="text-green-600" />
                  <p>
                    <span className="font-semibold text-green-700">
                      Grievance Officer:
                    </span>{" "}
                    {lender.officer}
                  </p>
                </div>

                <p className="text-gray-700 whitespace-pre-line">
                  <span className="font-semibold text-green-700">Address:</span>
                  {"\n"}
                  {lender.address}
                </p>

                <div className="flex items-center justify-center space-x-2">
                  <FaEnvelope className="text-green-600" />
                  <a
                    href={`mailto:${lender.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {lender.email}
                  </a>
                </div>

                <p className="text-green-700">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href={`tel:${lender.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {lender.phone}
                  </a>
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold text-green-700">Timings:</span>{" "}
                  {lender.timings}
                </p>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={`mailto:${lender.email}`}
                  className="block bg-green-100 text-green-700 font-medium rounded-lg py-3 hover:bg-green-600 hover:text-white transition duration-300"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
