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
      icon: <FaUsers className="text-4xl text-green animate-bounce" />,
      gradient: 'bg-indigo-400',
    },
    {
      title: 'Messages',  
      subtitle: '5K+ Sent',
      icon: <FaEnvelopeOpenText className="text-4xl  animate-bounce" />,
      gradient: 'bg-teal-400',
    },
    {
      title: 'Clicks',
      subtitle: '20K+ Interactions',
      icon: <FaMousePointer className="text-4xl  animate-bounce" />,
      gradient: 'bg-green-400',
    },
    {
      title: 'Awards',
      subtitle: 'Best Startup 2025',
      icon: <FaAward className="text-4xl  animate-bounce" />,
      gradient: 'bg-blue-400',
    },
  ];

  return (
    <div className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-[-5]">
        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Our Achievements
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 ${item.gradient}`}
          >
            <div className="mb-4 p-4 rounded-full bg-white/20">{item.icon}</div>
            <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-white/90 text-lg">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
