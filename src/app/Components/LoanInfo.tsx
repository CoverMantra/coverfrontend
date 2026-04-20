'use client';

import React from 'react';
import { 
  CreditCard, 
  HandCoins, 
  Landmark, 
  User2, 
  Banknote 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoanProductsGrid() {
  const router = useRouter();

  const products = [
    {
      title: 'Personal Loan',
      icon: <User2 className="h-9 w-9" />,
      description: 'Flexible personal loans with quick approval and competitive interest rates. Ideal for weddings, travel, education or medical needs.',
      link: '/personal-loans',
      color: 'from-[#FF690B] to-[#FF8C00]',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
    },
    {
      title: 'Small Amount Loan',
      icon: <Banknote className="h-9 w-9" />,
      description: 'Instant small-ticket loans with minimal documentation. Get money in minutes for your urgent short-term requirements.',
      link: '/personal-loans',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    },
    {
      title: 'Credit Card',
      icon: <CreditCard className="h-9 w-9" />,
      description: 'Compare and apply for premium credit cards with amazing rewards, cashback, and lifestyle benefits from top banks.',
      link: '/personal-loans',
      color: 'from-violet-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
    },
    {
      title: 'Business Loan',
      icon: <Landmark className="h-9 w-9" />,
      description: 'Fuel your business growth with customized working capital, equipment, or expansion loans. Fast & hassle-free process.',
      link: '/business-loans',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    },
  ];

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF4E5] rounded-full mb-4">
            <div className="w-2 h-2 bg-[#FF690B] rounded-full animate-pulse" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[#FF690B]">
              Our Offerings
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight">
            Smart Financial Products
          </h2>
          <p className="mt-4 text-lg text-[#5b4637] max-w-2xl mx-auto">
            Choose from our range of tailored financial solutions designed to meet your personal and business needs.
          </p>
        </div>

        {/* Products Grid - Modern 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(product.link)}
              className={`group relative ${product.bgColor} p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full hover:-translate-y-2`}
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${product.color} rounded-t-3xl`} />

              {/* Icon Container - 3D Style */}
              <div className="mb-8">
                <div className={`w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white`}>
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${product.color}`}>
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#08101E] mb-4 tracking-tight">
                  {product.title}
                </h3>
                
                <p className="text-[#5b4637] leading-relaxed text-[15px]">
                  {product.description}
                </p>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-10">
                <button className="w-full py-3.5 bg-white hover:bg-[#FF690B] hover:text-white text-[#08101E] font-semibold rounded-2xl border border-[#FF690B]/20 hover:border-[#FF690B] transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  Know More
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div> */}

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}