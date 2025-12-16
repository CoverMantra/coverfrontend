'use client';

import React, { useEffect, useState } from 'react';

// Moved outside to avoid ESLint dependency warning
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
      const duration = 2000; // total animation time in ms
      const increment = end / (duration / 30); // step size

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
  }, []); // Safe since stats is outside component

  return (
    <div>
      <div className="bg-green-50 py-10 px-4 sm:px-6 md:py-16 lg:px-10 rounded-xl">
        {/* Section 1: Trust & Security */}
        <div className="text-center mt-6 px-4">
          <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent mb-3">
            Your Security. Our Priority.
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            When it comes to data and security, we implement the latest techniques
            to ensure your information remains protected at all times.
          </p>
        </div>


        <br />
        <hr />

        {/* Section 2: Achievements */}
        <div className="text-center mt-12 mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent mb-4">
            Your Trust, Our Achievements.
          </h2>
          <br />
          <div className="grid grid-cols-2 mt-6 gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-4 md:gap-x-6 lg:gap-x-12 text-center">
            {stats.map((item, idx) => (
              <div key={idx}>
                <p className="text-xl font-bold text-blue-700 sm:text-2xl lg:text-3xl">
                  {item.isRating
                    ? `${counts[idx]} / 5`
                    : counts[idx].toLocaleString() + '+'}
                </p>
                <p className="text-sm text-gray-600 mt-1 sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
