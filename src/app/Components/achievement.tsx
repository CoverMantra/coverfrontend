'use client';

import React from 'react';
import {
  FaUsers,
  FaEnvelopeOpenText,
  FaMousePointer,
  FaAward,
} from 'react-icons/fa';

export default function Home() {
  const achievements = [
    {
      title: 'Users',
      subtitle: '10,000+ Active',
      icon: <FaUsers className="text-5xl text-white" />,
      gradient: 'from-[#FF690B] to-[#FF8C00]',
    },
    {
      title: 'Messages',
      subtitle: '5K+ Sent',
      icon: <FaEnvelopeOpenText className="text-5xl text-white" />,
      gradient: 'from-[#FF690B] to-[#FF8C00]',
    },
    {
      title: 'Clicks',
      subtitle: '20K+ Interactions',
      icon: <FaMousePointer className="text-5xl text-white" />,
      gradient: 'from-[#FF690B] to-[#FF8C00]',
    },
    {
      title: 'Awards',
      subtitle: 'Best Startup 2025',
      icon: <FaAward className="text-5xl text-white" />,
      gradient: 'from-[#FF690B] to-[#FF8C00]',
    },
  ];

  return (
    <section className="bg-[#FFF4E5] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#08101E]">
            Our Achievements
          </h1>
          <p className="mt-4 text-lg text-[#08101E]/70">
            Trusted by thousands and growing stronger every day
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-xl border border-white/60 
                         hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 
                         flex flex-col items-center text-center overflow-hidden"
            >
              {/* 3D Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Icon Container - Premium 3D Look */}
              <div className="relative mb-8 p-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] 
                            rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold text-[#08101E] mb-3 tracking-tight">
                {item.title}
              </h2>

              <p className="text-[#5b4637] text-xl font-medium">
                {item.subtitle}
              </p>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}