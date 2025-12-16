"use client";

import React from "react";
import { BadgeCheck, FileText, ClipboardList, Users } from "lucide-react";

const features = [
  {
    title: "Quick Disbursal",
    description:
      "Get personal loans disbursed within 24 hours through our fast digital process.",
    icon: <BadgeCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "100% Online Process",
    description:
      "No paperwork or branch visits—experience a completely online loan journey.",
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    title: "No Hidden Charges",
    description:
      "Full transparency in fees. Pay only what is shown, with no surprises.",
    icon: <ClipboardList className="h-6 w-6 text-white" />,
  },
  {
    title: "Credit Score Support",
    description:
      "Track and improve your credit score with our expert assistance.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 rounded-xl mt-2 md:px-18 bg-gray-50 text-center mb-10 overflow-hidden">
      <h1 className="text-3xl sm:text-3xl md:text-4xl mt-4 py-3 font-bold bg-gradient-to-r from-green-500  to-green-600 bg-clip-text text-transparent hover:scale-110 transition-transform">
        Why Choose CoverMantra?
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Fast, easy, and smart financial solutions tailored for you.
      </p>

      <div className="grid grid-cols-1 mb-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md transition-all duration-300 p-6 flex flex-col items-center text-center 
                      hover:bg-green-100 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-green-400"
          >
            <div className="bg-green-600 p-3 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
