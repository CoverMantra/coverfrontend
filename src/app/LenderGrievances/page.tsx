import React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope } from "react-icons/fa";

const lenders = [
  {
    name: "Money View",
    logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
    officer: "Rishov Bhattacharjee",
    address: `17/1, 1st and 2nd Floor, The Address Building, Outer Ring Road, Marathahalli, Kadubeesanahalli, Bangalore – 560103`,
    email: "grievance@moneyview.in",
    phone: "08069390476",
    timings: "9:00 AM - 6:00 PM (Mon - Fri, excluding public holidays)",
  },
  {
    name: "FDPL Finance Private Limited",
    logo: "https://www.fdplfinance.com/assets/images/logo/Logo.svg",
    officer: "Ms. Vaishnavi Batulkar",
    address: `Office Number 623, 6th floor, B-Wing, Chintamani Plaza, Andheri kurla road, Near to Western express metro, Mumbai - 400099`,
    // Comma ke beech se space hataya taaki mailto: sahi chale
    email: "escalation@fdplfinance.com,help@fdplfinance.com", 
    phone: "+91-9076058709",
    timings: "9:00 AM - 6:00 PM (Mon - Fri, excluding public holidays)",
  },
  {
    name: "Vivifi India Finance Pvt Ltd",
    logo: "https://www.vivifin.com/images/vivifi-logo.png",
    officer: "Mr. Srinath",
    address: `Unit A, 9th Floor, MJR Magnifique, Survey No 75 & 76, Khajaguda X Roads, Raidurgam, Hyderabad – 500008`,
    email: "grievance@vivifinance.com",
    phone: "+91-40-4617-5151",
    timings: "10:00 AM - 7:00 PM (Mon - Sat, excluding public holidays)",
  },
  {
    name: "Zype", // Zype ka lending partner bhi aksar Vivifi hi hota hai
    logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
    officer: "Mr. Jayanta Borah",
    address: `Zype, 5th Floor, Enzyme Anthurium, 
IBLUR Junction, Outer Ring Road, 
Bellandur, Bangalore - 560103`,
    email: "support@getzype.com",
    phone: "080-4718-5511",
    timings: "9:00 AM - 6:00 PM (Mon - Sat)",
  },
];

export default function LenderGrievance() {
  return (
    <main className="min-h-screen mt-16 bg-gray-100 text-gray-800 px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">
        Lender Grievance
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lenders.map((lender, index) => (
          <div key={index} className="flex justify-center">
            <div className="bg-green-50 shadow-lg rounded-2xl w-full max-w-sm p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              
              <div>
                <div className="flex justify-center mb-6 h-16 relative">
                  <Image
                    src={lender.logo}
                    alt={`${lender.name} Logo`}
                    fill
                    className="object-contain"
                    // Priority is good for the first few images
                    priority={index < 3} 
                  />
                </div>

                <div className="space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <FaUser className="text-green-600 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-semibold text-green-700">Officer:</span>{" "}
                      {lender.officer}
                    </p>
                  </div>

                  <div className="text-sm text-gray-700">
                    <p className="font-semibold text-green-700 mb-1">Address:</p>
                    <p className="whitespace-pre-line leading-relaxed italic">
                      {lender.address}
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <FaEnvelope className="text-green-600 flex-shrink-0" />
                    <a
                      href={`mailto:${lender.email}`}
                      className="text-blue-600 hover:underline text-sm break-all"
                    >
                      {lender.email}
                    </a>
                  </div>

                  <p className="text-sm">
                    <span className="font-semibold text-green-700">Phone:</span>{" "}
                    <a href={`tel:${lender.phone}`} className="text-blue-600 hover:underline">
                      {lender.phone}
                    </a>
                  </p>

                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-green-700">Timings:</span><br/>
                    {lender.timings}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`mailto:${lender.email}`}
                  className="block bg-green-600 text-white font-medium rounded-lg py-3 hover:bg-green-700 text-center transition duration-300"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}