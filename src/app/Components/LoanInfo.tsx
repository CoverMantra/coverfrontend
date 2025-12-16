'use client';

import React from 'react';
import {
  CreditCard,
  HandCoins,
  Landmark,
  User2,
  Banknote,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoanProductsGrid() {
  const router = useRouter();

  const features = [
    {
      title: 'Personal Loan',
      icon: <User2 className="h-10 w-10 text-blue-600" />,
      description:
        'Flexible personal loans with attractive interest rates and quick disbursal. Perfect for urgent financial needs like weddings, travel, or medical emergencies.',
      link: '/personal-loans',
    },
    {
      title: 'Small Amount Loan',
      icon: <Banknote className="h-10 w-10 text-green-600" />,
      description:
        'Get instant access to small-ticket loans with minimal documentation and super-fast approval for your short-term financial needs.',
    link: '/personal-loans',
    },
    {
      title: 'Credit Card',
      icon: <CreditCard className="h-10 w-10 text-purple-600" />,
      description:
        'Choose from a wide range of credit cards with rewards, cashback, and exclusive offers. Compare and apply with leading banks in one place.',
    link: '/personal-loans',
    },
    {
      title: 'Business Loan',
      icon: <Landmark className="h-10 w-10 text-orange-600" />,
      description:
        'Support your business growth with our customized business loan solutions. From working capital to equipment purchase, we’ve got you covered.',
    link: '/personal-loans',
    },
  ];

  return (
    <section className="bg-white py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
          Our Products
        </h2>
        <p className="text-lg text-[#5b4637]">
          Explore our financial offerings to meet your every need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-green-50 p-8 rounded-2xl shadow-md border border-[#e6d5c3] hover:shadow-lg transition duration-300 flex flex-col justify-between "
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#e2d5c3] p-3 rounded-full">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#3f2d21]">{item.title}</h3>
            </div>

            <p className="text-[#5b4637] mb-4  text-sm leading-relaxed">
              {item.description}
            </p>

            
          </div>
        ))}
      </div>
    </section>
  );
}
