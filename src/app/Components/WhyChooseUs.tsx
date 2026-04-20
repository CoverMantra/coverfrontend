"use client";

import React from "react";
import { BadgeCheck, FileText, ClipboardList, Users } from "lucide-react";

const features = [
  {
    title: "Quick Disbursal",
    description:
      "Get personal loans disbursed within 24 hours through our fast digital process.",
    icon: <BadgeCheck className="h-8 w-8 text-white" />,
  },
  {
    title: "100% Online Process",
    description:
      "No paperwork or branch visits—experience a completely online loan journey.",
    icon: <FileText className="h-8 w-8 text-white" />,
  },
  {
    title: "No Hidden Charges",
    description:
      "Full transparency in fees. Pay only what is shown, with no surprises.",
    icon: <ClipboardList className="h-8 w-8 text-white" />,
  },
  {
    title: "Credit Score Support",
    description:
      "Track and improve your credit score with our expert assistance.",
    icon: <Users className="h-8 w-8 text-white" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FFF4E5] py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight mb-4">
            Why Choose CoverMantra?
          </h1>
          <p className="text-lg text-[#08101E]/70 max-w-2xl mx-auto">
            Fast, easy, and smart financial solutions tailored for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 shadow-xl border border-white/60 
                         hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                         flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF690B]/10 to-transparent 
                            rounded-full group-hover:scale-150 transition-transform duration-700" />

              {/* Icon Container - 3D Style */}
              <div className="mb-8 w-20 h-20 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] 
                            rounded-2xl flex items-center justify-center shadow-lg 
                            group-hover:rotate-12 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#08101E] mb-4 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#5b4637] leading-relaxed text-[15.2px]">
                {feature.description}
              </p>

              {/* Subtle Bottom Line */}
              <div className="mt-auto pt-8 w-12 h-0.5 bg-gradient-to-r from-[#FF690B] to-transparent mx-auto 
                            group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}