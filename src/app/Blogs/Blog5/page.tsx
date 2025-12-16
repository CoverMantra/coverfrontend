"use client";

import React from "react";
import { FaPiggyBank, FaCreditCard, FaChartLine, FaWallet } from "react-icons/fa";

export default function SmartMoneyBlog() {
  return (
    <main className="bg-green-50 min-h-screen mt-10 py-12 px-6 md:px-16 flex justify-center">
      <article className="max-w-4xl bg-green-50 rounded-3xl shadow-xl p-8 md:p-12 space-y-10">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-4xl font-extrabold text-green-600">
            Smart Money Habits for Young Professionals
          </h1>
          <p className="text-gray-600 text-lg">
            Start your financial journey the right way. Build wealth, avoid debt, 
            and set yourself up for long-term success.
          </p>
        </header>

        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
            <FaPiggyBank /> 1. Save Before You Spend
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Many young professionals make the mistake of spending first and 
            saving what's left. Instead, flip the script—save a fixed percentage 
            (at least 20%) of your income before spending on anything else. 
            Automating savings ensures consistency.
          </p>
        </section>

       <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
            <FaWallet /> 2. Create a Realistic Budget
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Budgeting isn't about restricting yourself; it's about knowing where 
            your money goes. Use the 50/30/20 rule: 50% for needs, 30% for wants, 
            and 20% for savings/investments. Apps like Mint or YNAB can help you 
            stay on track.
          </p>
        </section>
          <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
            <FaCreditCard /> 3. Avoid Unnecessary Debt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Credit cards can build your credit score if used wisely—but they can 
            also trap you in high-interest debt. Always pay your credit card 
            bills in full each month and avoid loans for lifestyle purchases.
          </p>
        </section>

        {/* Investment Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-green-500 flex items-center gap-2">
            <FaChartLine /> 4. Start Investing Early
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The earlier you invest, the more you benefit from compound interest. 
            Even small amounts in mutual funds, stocks, or retirement accounts 
            can grow significantly over time. Remember: time in the market beats 
            timing the market.
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-green-50 p-6 rounded-2xl border border-green-200">
          <h2 className="text-2xl font-bold text-green-600 mb-3">
            Final Thoughts
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Smart money habits aren't about being rich instantly—they're about 
            building financial discipline. By saving consistently, budgeting 
            wisely, avoiding unnecessary debt, and investing early, young 
            professionals can secure financial freedom and peace of mind.
          </p>
        </section>
      </article>
    </main>
  );
}
