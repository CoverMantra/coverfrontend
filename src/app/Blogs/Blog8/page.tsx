// app/page.js
"use client";

import React from "react";
import { FaLightbulb, FaLaptop, FaBrain, FaClock, FaHeart, FaBook, FaChartLine } from "react-icons/fa";

export default function DigitalMinimalismBlog() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-4 md:px-16 py-12">
      {/* Header */}
      <header className="text-center mb-12 mt-15">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <FaLightbulb className="text-yellow-500" /> 
          How Minimalism in a Digital World Can Boost Creativity
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how simplifying your digital life can free your mind and unlock new creative potential.
        </p>
      </header>

      {/* Content */}
      <section className="space-y-8 max-w-4xl mx-auto">

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaLaptop className="text-blue-500" /> What is Digital Minimalism?
          </h2>
          <p>
            Digital minimalism is about **keeping only what’s essential in your digital life**. This means reducing clutter like unused apps, constant notifications, and unnecessary online distractions. By doing this, you focus on what truly matters, both online and offline.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaBrain className="text-green-500" /> Why Minimalism Boosts Creativity
          </h2>
          <p>
            When your mind isn’t overloaded with constant notifications, social media, and digital noise, it has **more space to think deeply and imagine freely**. Creativity thrives in environments where focus and clarity are prioritized.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaClock className="text-purple-500" /> Practical Tips to Practice Digital Minimalism
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Uninstall apps you rarely use to reduce distractions.</li>
            <li>Set specific times for checking emails or social media.</li>
            <li>Organize your files and digital workspace to be clutter-free.</li>
            <li>Turn off non-essential notifications on your phone.</li>
            <li>Schedule “no-screen” periods to let your mind rest and wander.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaHeart className="text-red-500" /> The Mental and Emotional Benefits
          </h2>
          <p>
            Digital minimalism not only boosts creativity but also **reduces stress and anxiety**. Constant digital stimulation can overwhelm your brain, leading to burnout. Simplifying your digital environment allows you to focus on meaningful activities, foster mindfulness, and improve your overall emotional well-being.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaBook className="text-orange-500" /> Case Studies & Real-Life Examples
          </h2>
          <p>
            Many successful creatives follow digital minimalism principles:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Authors like Cal Newport advocate for **deep work** and limiting digital distractions.</li>
            <li>Designers often declutter their digital tools to enhance focus on creative projects.</li>
            <li>Entrepreneurs schedule offline periods to think strategically without constant notifications.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <FaChartLine className="text-teal-500" /> How to Measure Your Digital Minimalism Success
          </h2>
          <p>
            You can track the impact of digital minimalism by monitoring:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Time spent on social media and unnecessary apps.</li>
            <li>Number of notifications received per day.</li>
            <li>Hours of uninterrupted deep work achieved.</li>
            <li>Improvement in creative output or problem-solving efficiency.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">The Ripple Effect</h2>
          <p>
            Embracing minimalism in a digital world doesn’t just help your creativity—it can improve focus, reduce stress, and lead to better decision-making. By simplifying your digital life, you give yourself the freedom to innovate, explore, and create like never before.
          </p>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <footer className="text-center mt-12 text-gray-600 space-y-2">
        <p>
          Start small, declutter your digital world, and watch your creativity flourish.
        </p>
        <p>
          Remember: **digital minimalism is a journey, not a one-time task.** Be patient, and enjoy the mental clarity that follows.
        </p>
      </footer>
    </main>
  );
}
