"use client";
import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import DataSecurity from "../../animations/data.json";
import Rupee from "../../animations/Image.json";
import Loan from "../../animations/Loan.json";

const Cards = () => {
  return (
    <div className="px-6 py-14 bg-gray-100">

      <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent inline-block">
          Security & Privacy
        </span>
      </h1>



      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        <div className="lg:col-span-2 flex flex-col lg:flex-row gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex-1 bg-blue-100 border border-blue-200 rounded-xl shadow-md flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300">
            <Lottie animationData={DataSecurity} className="h-24 w-24" />
            <h6 className="mt-3 text-lg font-semibold text-gray-800 whitespace-nowrap">
              Data Encryption
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Secures sensitive information like credit scores, bank details,
              and IDs from cyber threats with strong encryption methods.
            </p>
            <Link
              href="/DataEncryption"
              className="mt-5 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
            >
              Know More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>


          <div className="flex-1 bg-blue-100 border border-blue-200 rounded-xl shadow-md flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300">
            <Lottie animationData={Rupee} className="h-24 w-24" />
            <h6 className="mt-3 text-lg font-semibold text-gray-800 whitespace-nowrap">
              RBI Registered Banks
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Partner banks comply with RBI regulations ensuring transparency,
              consumer protection, and secure loan services.
            </p>
            <Link
              href="/DataEncryption/rbi"
              className="mt-5 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
            >
              Know More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>


          <div className="flex-1 bg-blue-100 border border-blue-200 rounded-xl shadow-md flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300">
            <Lottie animationData={Loan} className="h-24 w-24" />
            <h6 className="mt-3 text-lg font-semibold text-gray-800 whitespace-nowrap">
              User Trust Statements
            </h6>
            <p className="text-sm text-gray-600 mt-3">
              Your personal data remains encrypted & never shared without
              consent, ensuring trust and privacy protection.
            </p>
            <Link
              href="/DataEncryption/user"
              className="mt-5 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
            >
              Know More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>


        <div className="lg:col-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent inline-block mb-6">
            Why Security & Privacy Matters?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            In today’s digital-first world, financial data is one of the most
            valuable assets. Protecting it not only prevents fraud but also
            builds long-term trust with customers.
          </p>
          <p className="text-lg text-gray-600">
            By using{" "}
            <span className="font-semibold text-blue-700">
              industry-standard encryption
            </span>{" "}
            and collaborating with{" "}
            <span className="font-semibold text-blue-700">
              RBI registered banks
            </span>
            , we ensure your sensitive data stays safe while offering you a
            smooth and transparent loan experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
