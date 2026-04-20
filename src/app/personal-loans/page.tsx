"use client";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
  // {
  //   provider: "MoneyView",
  //   approval: "Good",
  //   loanAmount: "Up to ₹10,00,000",
  //   interestRate: "Starting from 1.33% per month",
  //   processingFee: "Starting from 2% of the approved loan amount",
  //   support: "24/7 customer support",
  //   ratings: 4.8,
  //   logo: "/image/MNView.png",
  //   applyLink: "/LenderAPI/moneyView",
  //   features: [
  //     "Quick disbursement", "Paperless process", "Low processing fee", "Instant approval", "No hidden charges", "24/7 customer support"
  //   ]
  // },
  {
    provider: "FlexSalary (Vivifi)",
    approval: "Good",
    loanAmount: "Up to ₹3,00,000",
    interestRate: "Starting from 1.5% per month",
    processingFee: "Starting from 2% of the approved loan amount",
    support: "24/7 customer support",
    ratings: 4.2,
    logo: "/public/image/flexsalary-color-black.webp", 
    applyLink: "/LenderAPI/vivifi", 
    features: [
      "Credit Line Facility", "Instant Disbursal", "Flexible Repayment", "No Fixed EMI", "Minimal Documentation", "24/7 support"
    ]
  },
  {
    provider: "FatakPay Personal Loans",
    approval: "Good",
    loanAmount: "Up to ₹2,00,000",
    interestRate: "Starting from 12% to 35.95% per month",
    processingFee: "Starting from 2.5% of the approved loan amount",
    support: "24/7 customer support",
    ratings: 4.0,
    logo: "/image/fatak.webp",
    applyLink: "/LenderAPI/fatakPay",
    features: [
      "Quick disbursement", "Paperless process", "Low processing fee", "Instant approval", "No hidden charges", "24/7 customer support"
    ]
  },
 {
    provider: "FatakPay Short Term Loans",
    approval: "Good",
    loanAmount: "Up to ₹2,00,000",
    interestRate: "Starting from 12% to 35.95% per month",
    processingFee: "Starting from 2.5% of the approved loan amount",
    support: "24/7 customer support",
    ratings: 4.0,
    logo: "/image/fatak.webp",
    applyLink: "/LenderAPI/fatakPaydcl",
    features: [
      "Quick disbursement", "Paperless process", "Low processing fee", "Instant approval", "No hidden charges", "24/7 customer support"
    ]
  },

  {
    provider: "Zype",
    approval: "Good",
    loanAmount: "Up to ₹3,00,000",
    interestRate: "Starting from 1.5% per month",
    processingFee: "Starting from 2% to 6% on every loan",
    support: "24/7 customer support",
    ratings: 4.0,
    logo: "/image/Zype.jpeg",
    applyLink: "/LenderAPI/zype",
    features: [
      "Quick disbursement", "Paperless process", "Low processing fee", "Instant approval", "No hidden charges", "24/7 customer support"
    ]
  },

];

function StarRating({ value }: { value: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= Math.round(value) ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    );
  }
  return <div className="flex items-center">{stars}</div>;
}

export default function PersonalLoansPage() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [openFeatures, setOpenFeatures] = useState<number | null>(null);

  const openLoginModal = () => setLoginOpen(true);
  const closeLoginModal = () => setLoginOpen(false);

  const toggleFeatures = (idx: number) => {
    setOpenFeatures(openFeatures === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>Personal Loans | YourBank</title>
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-14 md:py-20 px-4 text-center relative overflow-hidden">
          <div className="max-w-6xl mx-auto mt-6 md:mt-18 relative z-10">
            <h1 className="mt-5 md:mt-0 text-3xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-green-400 tracking-wide drop-shadow-md">
              Get Personal Loans at Low Interest Rates
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-4 text-gray-200 leading-relaxed">
              Flexible repayment terms. Quick approval. Trusted by thousands.
            </p>
          </div>
        </div>


        {/* Lenders Section */}
        <section className="py-18 md:py-18 px-4 w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6">
            {cardsData.map((card, idx) => (
              <div
                key={idx}
                className=" bg-gradient-to-r from-pink-200 to-blue-300 text-green-900 rounded-2xl shadow-xl p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-100 hover:to-green-800 transform hover:-translate-y-1 relative min-h-[180px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4 shadow-lg flex-shrink-0">
                      <Image
                        src={card.logo}
                        alt={`${card.provider} logo`}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-xl font-bold text-black">
                        {card.provider}
                      </h3>
                      <p className="text-sm text-gray-800 mt-1 font-bold ">
                        {card.approval} Approval
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-green-100 text-green-800 rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base font-semibold">
                    <span className="mr-1 sm:mr-2">{card.ratings}</span>
                    <StarRating value={card.ratings} />
                  </div>
                </div>

                {/* Loan Details */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 text-sm text-gray-700 mt-4">
                  <div>
                    <p className="font-semibold text-gray-900 md:pl-8">Loan Amount</p>
                    <p className="text-sm md:pl-8">{card.loanAmount}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Interest Rate</p>
                    <p className="text-sm">{card.interestRate}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Processing Fee</p>
                    <p className="text-sm">{card.processingFee}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Support</p>
                    <p className="text-sm">{card.support}</p>
                  </div>
                </div>


                {/* Key Features Dropdown */}
                <div className="w-full pt-4 border-t border-black mt-4">
                  <div
                    className="flex items-center justify-between cursor-pointer sm:cursor-default"
                    onClick={() => toggleFeatures(idx)}
                  >
                    <p className="text-md sm:text-base font-semibold text-gray-900">
                      Key Features
                    </p>
                    <span className="sm:hidden">
                      {openFeatures === idx ? "▲" : "▼"}
                    </span>
                  </div>

                  {/* Mobile View: Collapsible */}
                  {openFeatures === idx && (
                    <ul className="flex flex-col gap-2 mt-2 sm:hidden">
                      {card.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start">
                          <span className="text-green-700 font-bold mr-2 text-xl leading-none">
                            ✓
                          </span>
                          <p className="text-sm">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Desktop View: Always visible */}
                  <ul className="hidden sm:flex flex-wrap gap-2 mt-2">
                    {card.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-start w-full sm:w-auto"
                      >
                        <span className="text-green-700 font-bold mr-2 text-xl leading-none">
                          ✓
                        </span>
                        <p className="text-sm sm:text-base">{feature}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="text-right align-items-end justify-end">
                    <Link href={card.applyLink}>
                      <button
                        onClick={openLoginModal}
                        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 mt-3"
                      >
                        Apply Now
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
