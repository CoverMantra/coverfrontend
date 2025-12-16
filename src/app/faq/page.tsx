"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: { personal: FAQItem[]; business: FAQItem[] } = {
  personal: [
    {
      q: "What is a personal loan?",
      a: "A personal loan is an unsecured loan that can be used for various personal needs such as education, travel, or emergencies.",
    },
    {
      q: "What are typical interest rates?",
      a: "Interest rates vary depending on credit score and bank policies, usually between 10% to 24% per annum.",
    },
    { q: "How long can I repay?", a: "You can choose repayment tenures ranging from 12 to 60 months." },
    {
      q: "How much can I borrow?",
      a: "Loan amounts depend on income and credit profile, typically from ₹50,000 to ₹25 lakhs.",
    },
    {
      q: "Are there any processing fees?",
      a: "Yes, processing fees may range between 1% to 3% of the loan amount.",
    },
    {
      q: "Can I prepay my loan?",
      a: "Yes, most lenders allow prepayment after a certain period, sometimes with small charges.",
    },
  ],
  business: [
    {
      q: "What is a business loan?",
      a: "A business loan is financial assistance to help businesses with expansion, equipment, or working capital.",
    },
    {
      q: "What's the loan amount range?",
      a: "Business loans typically range from ₹1 lakh to ₹50 lakhs or more depending on the lender.",
    },
    {
      q: "What interest rates apply?",
      a: "Rates vary, usually between 12% to 20% per annum depending on business stability.",
    },
    {
      q: "What documents are needed?",
      a: "Documents usually include business proof, ITR, financial statements, and identity proof.",
    },
    { q: "How do I apply?", a: "You can apply online through our website or visit the nearest branch." },
    {
      q: "Is collateral required?",
      a: "Many business loans are unsecured, but higher amounts may require collateral.",
    },
  ],
};

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (idx: string) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="mt-20">
      <section className="bg-gradient-to-b from-green-100  to-green-200 pt-14 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">❓Customer Queries</h1>
          <p className="text-lg text-gray-600 mb-12">
            Frequently Asked Questions about our Personal and Business Loans
          </p>
        </div>

        {/* Personal Loan FAQs */}
        <div className="max-w-4xl mx-auto mb-12 ">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">💳 Personal Loan FAQs</h2>
          <div className="space-y-4">
            {faqs.personal.map((item, idx) => {
              const id = `personal-${idx}`;
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-md p-5 cursor-pointer transition hover:shadow-lg"
                  onClick={() => toggle(id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-800 font-medium">{item.q}</h3>
                    {open === id ? (
                      <ChevronUp className="text-green-600" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>
                  {open === id && <p className="mt-3 text-gray-600 text-sm">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Loan FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">🏢 Business Loan FAQs</h2>
          <div className="space-y-4">
            {faqs.business.map((item, idx) => {
              const id = `business-${idx}`;
              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-md p-5 cursor-pointer transition hover:shadow-lg"
                  onClick={() => toggle(id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-gray-800 font-medium">{item.q}</h3>
                    {open === id ? (
                      <ChevronUp className="text-green-600" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>
                  {open === id && <p className="mt-3 text-gray-600 text-sm">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
