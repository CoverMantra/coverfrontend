// app/page.js
"use client";

import React from "react";
import { FaStar, FaRunning, FaTrophy, FaSmile, FaLightbulb, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

export default function SmallWinsBlog() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-4 md:px-16 py-12">
      {/* Header */}
      <header className="text-center mb-16 mt-15">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <FaStar className="text-yellow-400" /> 
          The Power of Small Wins: Tiny Achievements, Big Success
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Learn how recognizing daily victories can boost confidence, motivation, and help you achieve your biggest goals.
        </p>
      </header>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto space-y-12">

        {/* Section 1: What Are Small Wins */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaRunning className="text-blue-500" /> What Are Small Wins?
          </h2>
          <p className="mb-2">
            Small wins are **tiny achievements you accomplish every day**—like finishing a task, learning a skill, or sticking to a routine. Though minor individually, **they build momentum** toward bigger goals.
          </p>
          <p>
            Think of small wins as stepping stones; each one strengthens your confidence and moves you closer to success.
          </p>
        </div>

        {/* Section 2: Why Small Wins Matter */}
        <div className="bg-gradient-to-r from-green-100 to-green-200 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaSmile className="text-green-500" /> Why Small Wins Matter
          </h2>
          <p className="mb-2">
            Celebrating small victories triggers **positive reinforcement in your brain**, boosting motivation, focus, and self-confidence.
          </p>
          <p>
            When we focus on progress rather than perfection, stress reduces, and a sense of accomplishment grows, keeping us motivated for the next challenge.
          </p>
        </div>

        {/* Section 3: Tips & Checklist */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaTrophy className="text-purple-500" /> Tips to Harness the Power of Small Wins
          </h2>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" /> Break big goals into **smaller, achievable steps**.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" /> Celebrate **every small victory**, no matter how tiny.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" /> Track progress with a **journal, app, or checklist**.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" /> Treat setbacks as **learning opportunities**, not failures.
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" /> Share your achievements with **friends or colleagues** for encouragement.
            </li>
          </ul>
        </div>

        {/* Section 4: Real-Life Examples */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" /> Real-Life Examples of Small Wins
          </h2>
          <p className="mb-2">
            Successful people often rely on small wins to stay motivated:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Authors like Cal Newport use **daily focus blocks** to produce deep work.</li>
            <li>Entrepreneurs break huge projects into small tasks to maintain momentum.</li>
            <li>Designers declutter their workspace to **boost creativity and clarity**.</li>
          </ul>
        </div>

        {/* Section 5: Inspirational Quote */}
        <div className="bg-white shadow-md rounded-lg p-8 italic text-gray-700 flex items-center gap-4">
          <FaQuoteLeft className="text-2xl text-gray-400" />
          <p>
            "Success is the sum of small efforts, repeated day in and day out." – Robert Collier
          </p>
        </div>

        {/* Section 6: Long-Term Impact */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">The Long-Term Impact of Small Wins</h2>
          <p className="mb-2">
            Small wins compound over time. By consistently achieving little victories, you **build habits, confidence, and momentum** that lead to extraordinary results.
          </p>
          <p>
            Remember, success is not just about giant leaps—it's about **every small step forward** that gradually transforms your life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-600 space-y-3">
        <p>
          Start today by celebrating one small win, and watch how these tiny steps transform your life.
        </p>
        <p className="font-semibold">Small victories pave the way for big success!</p>
      </footer>
    </main>
  );
}
