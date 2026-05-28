'use client';

import React, { useEffect, useState } from 'react';

// Genuine and Realistic FinTech Market Statistics
const stats = [
  { label: 'Verified Users', value: 25000 },
  { label: 'App Downloads', value: 1000},
  { label: 'Financial Partners', value: 15 },
  { label: 'Customer Rating', value: 4.3, isRating: true },
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
    <section className="bg-[#FFF4E5] py-12 px-4 sm:py-20 sm:px-8 md:px-10 font-sans antialiased">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Trust & Security Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08101E] tracking-tight mb-4 sm:mb-6">
            Your Security. Our Priority.
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#08101E]/70 max-w-2xl mx-auto leading-relaxed font-medium">
            When it comes to data and security, we implement enterprise-grade 
            protection protocols to ensure your financial identity remains safe 24/7.
          </p>
        </div>

        {/* Trust Badges / Highlights Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#FF690B]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-3xl sm:text-4xl">🔒</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-[#08101E] mb-2 sm:mb-3">256-Bit Encryption</h4>
            <p className="text-[#5b4637] text-xs sm:text-sm font-medium leading-relaxed">Military-grade protection barrier for all secure financial computations</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#FF690B]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-3xl sm:text-4xl">🏦</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-[#08101E] mb-2 sm:mb-3">RBI Compliant</h4>
            <p className="text-[#5b4637] text-xs sm:text-sm font-medium leading-relaxed">Strict adherence to national data compliance & regulatory lending standards</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:border-[#FF690B]/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-3xl sm:text-4xl">🛡️</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-[#08101E] mb-2 sm:mb-3">Zero Data Sharing</h4>
            <p className="text-[#5b4637] text-xs sm:text-sm font-medium leading-relaxed">Your profile data is strictly firewalled. We never trade or share logs.</p>
          </div>
        </div>

        {/* Achievements Live Counter Box */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-16 border border-gray-50">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#08101E] tracking-tight mb-2 sm:mb-4">
              Your Trust, Our Achievements
            </h2>
            <p className="text-[#08101E]/60 text-sm sm:text-base font-bold uppercase tracking-wider">Metrics backing our digital integrity</p>
          </div>

          {/* Core Numbers - Smart Mobile Wrapping Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {stats.map((item, idx) => (
              <div 
                key={idx} 
                className="text-center group flex flex-col justify-center"
              >
                <div className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FF690B] mb-2 sm:mb-3 transition-all group-hover:scale-105 duration-300 tracking-tight">
                  {item.isRating 
                    ? `${counts[idx].toFixed(1)} ★` 
                    : counts[idx].toLocaleString("en-IN") + '+'}
                </div>
                <p className="text-[#5b4637] font-bold text-xs sm:text-base uppercase tracking-wide">
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