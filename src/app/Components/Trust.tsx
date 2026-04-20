'use client';

import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Happy Users', value: 25000 },
  { label: 'App Downloads', value: 15000 },
  { label: 'Financial Partners', value: 15 },
  { label: 'Customer Rating', value: 4.5, isRating: true },
];

export default function TrustSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 30);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = stat.isRating
            ? parseFloat(start.toFixed(1))
            : Math.floor(start);
          return updated;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="bg-[#FFF4E5] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Trust & Security Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight mb-6">
            Your Security. Our Priority.
          </h3>
          <p className="text-lg text-[#08101E]/70 max-w-2xl mx-auto leading-relaxed">
            When it comes to data and security, we implement the latest techniques 
            to ensure your information remains protected at all times.
          </p>
        </div>

        {/* Trust Badges / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/60 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🔒</span>
            </div>
            <h4 className="text-2xl font-bold text-[#08101E] mb-3">256-Bit Encryption</h4>
            <p className="text-[#5b4637]">Military-grade security for all your financial data</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/60 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🏦</span>
            </div>
            <h4 className="text-2xl font-bold text-[#08101E] mb-3">RBI Compliant</h4>
            <p className="text-[#5b4637]">Fully regulated and transparent lending practices</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white/60 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🛡️</span>
            </div>
            <h4 className="text-2xl font-bold text-[#08101E] mb-3">Zero Data Sharing</h4>
            <p className="text-[#5b4637]">Your data stays with you. Never sold or shared.</p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight mb-4">
              Your Trust, Our Achievements
            </h2>
            <p className="text-[#08101E]/70 text-lg">Numbers that speak louder than words</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((item, idx) => (
              <div 
                key={idx} 
                className="text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#FF690B] mb-3 transition-all group-hover:scale-110">
                  {item.isRating 
                    ? `${counts[idx]} ★` 
                    : counts[idx].toLocaleString() + '+'}
                </div>
                <p className="text-[#5b4637] font-medium text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}