"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function SeoFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "loans",
      title: "Popular Loans",
      links: [
        { name: "Personal Loan", href: "/personal-loans" },
        { name: "Business Loan", href: "/business-loans" },
        { name: "Home Loan", href: "/#emi-calculator" },
        { name: "Education Loan", href: "/#emi-calculator" },
        { name: "Gold Loan", href: "/#emi-calculator" },
        { name: "Loan Against Property", href: "/#emi-calculator" },
      ],
    },
    {
      id: "insurance",
      title: "Insurance Plans",
      links: [
        { name: "Health Insurance", href: "/insurance/health" },
        { name: "Life Insurance", href: "/insurance/life" },
        { name: "Car Insurance", href: "/insurance/car" },
        { name: "Travel Insurance", href: "/insurance/travel" },
        { name: "Home Insurance", href: "/insurance/home" },
        { name: "Two Wheeler Insurance", href: "/insurance/two-wheeler" },
      ],
    },
    {
      id: "calculators",
      title: "Financial Calculators",
      links: [
        { name: "EMI Calculator", href: "/#emi-calculator" },
        { name: "Eligibility Calculator", href: "/#emi-calculator" },
      ],
    },
  ];

  return (
    <div className="border-t border-white/10 pt-10 pb-6 w-full select-none">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {sections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="border-b border-white/5 lg:border-none pb-4 lg:pb-0">
              {/* Header */}
              <button
                onClick={() => toggle(section.id)}
                className="w-full flex justify-between items-center text-left lg:pointer-events-none lg:cursor-default py-2 lg:py-0 focus:outline-none"
              >
                <h4 className="text-base font-bold text-white border-l-4 border-[#FF690B] pl-3">
                  {section.title}
                </h4>
                <ChevronDown
                  size={16}
                  className={`text-[#FF690B] transition-transform duration-300 lg:hidden ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Links list */}
              <ul
                className={`mt-4 space-y-3 pl-4 lg:pl-3 text-sm text-white/60 transition-all duration-300 overflow-hidden lg:block ${
                  isOpen ? "block max-h-96 opacity-100" : "hidden lg:max-h-none lg:opacity-100"
                }`}
              >
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-[#FF690B] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
