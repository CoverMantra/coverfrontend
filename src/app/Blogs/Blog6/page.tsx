
"use client";

import React from "react";
import img from "next/image";
import { FaSmile, FaFrown, FaBrain, FaHeartbeat } from "react-icons/fa";

export default function SocialMediaBlog() {
  const sections = [
    {
      icon: <FaSmile className="text-yellow-500 text-2xl mr-3" />,
      title: "Positive Effects of Social Media",
      content: [
        "Social media can help people stay connected with friends and family, build communities, and access support networks.",
        "It allows users to express themselves creatively, share achievements, and gain recognition, which can boost self-esteem and motivation."
      ]
    },
    {
      icon: <FaFrown className="text-red-500 text-2xl mr-3" />,
      title: "Negative Effects on Emotions",
      content: [
        "Excessive use of social media can lead to feelings of loneliness, envy, and anxiety, especially when comparing oneself to others.",
        "Cyberbullying and online negativity can significantly impact emotional well-being."
      ]
    },
    {
      icon: <FaBrain className="text-blue-500 text-2xl mr-3" />,
      title: "Impact on Mental Health",
      content: [
        "Studies show a correlation between heavy social media use and mental health issues like depression, anxiety, and stress.",
        "The constant need for validation and fear of missing out (FOMO) can lead to emotional exhaustion."
      ]
    },
    {
      icon: <FaHeartbeat className="text-pink-500 text-2xl mr-3" />,
      title: "Tips to Use Social Media Mindfully",
      content: [
        "Limit daily usage and take regular breaks from screens.",
        "Unfollow accounts that trigger negative emotions and follow pages that inspire positivity.",
        "Engage in offline activities like exercise, meditation, or hobbies to maintain a balanced lifestyle."
      ]
    }
  ];
return (
    <main className="bg-gray-50 min-h-screen py-12 px-6 mt-12 md:px-12 flex justify-center">
      <article className="max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Social Media and Mental Wellness</h1>
          <p className="text-gray-600 text-lg">
            Understanding the impact of social media on mental health and ways to use it mindfully.
          </p>
          <img
            src="https://www.newportacademy.com/wp-content/uploads/NA-Website-Resources-Image-EffectsSocialMedia-1386x640-Hero.jpg"
            alt="Social Media Impact"
            width={800}
            height={400}
            className="rounded-2xl mt-4"
          />
        </header>
        {/* Sections */}
        <section className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="flex items-start space-x-4">
              {section.icon}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
                {section.content.map((para, i) => (
                  <p key={i} className="text-gray-600 mb-2">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <footer className="mt-10 text-center text-gray-700">
          <p>
            Social media is a powerful tool that can affect our emotions and mental health. By using it mindfully and balancing online and offline life, we can enjoy its benefits without letting it harm our well-being.
          </p>
        </footer>
      </article>
    </main>
  );
}
