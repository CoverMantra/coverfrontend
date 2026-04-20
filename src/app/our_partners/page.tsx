"use client";
import { motion } from "framer-motion";

export default function OurPartners() {
  const partners = [
    {
      name: "MoneyView",
      logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
      link: "https://moneyview.in/"
    },
     {
      name: "FDPL Finance",
      logo: "https://www.fdplfinance.com/assets/images/logo/Logo.svg",
      link: "https://fatakpay.com/"
    },
    {
      name: "Zype",
      logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
      link: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea"
    },
    {
      name: "Vivifi",
      logo: "https://www.vivifin.com/images/vivifi-logo.png",
      link: "https://www.vivifin.com/"
    },
  ];
// https://www.vivifin.com/images/vivifi-logo.png
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-300 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-12 text-green-800 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Trusted Partners
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 flex flex-col items-center transform hover:scale-105 border border-gray-100 hover:bg-green-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ boxShadow: "0px 4px 20px rgba(16, 185, 129, 0.4)" }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 mb-4 object-contain transition-transform duration-300 hover:scale-110"
              />
              <span className="text-lg font-semibold text-gray-700">
                {partner.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
