"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import GlobalModal from "./globalmodel";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);
  const [globalModalOpen, setGlobalModalOpen] = useState(false);

  const handleProtectedNavigation = (path: string) => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");

    if (co_phone && co_token) {
      router.push(path);
    } else {
      setLoginOpen(true);
    }
  };

  const handleOtpVerified = () => {
    setLoginOpen(false);
    setGlobalModalOpen(true);
  };

  return (
    <footer className="bg-[#08101E] border-t-4 border-[#FF7819] rounded-t-[2rem] sm:rounded-t-[3rem]">
      <div className="max-w-screen-xl px-6 pt-12 pb-8 mx-auto lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Company Info + Logo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-xl flex items-center justify-center text-[#08101E] font-black text-2xl shadow-md">
                C
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">Cover</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#FF690B]">Mantra</span>
              </div>
            </div>

            <p className="mt-6 text-white/80 leading-relaxed max-w-xs sm:max-w-md">
              Smart financial solutions for loans and insurance. 
              Making finance simple, fast and trustworthy.
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold text-[#FF690B] uppercase tracking-wider">Registered Office</p>
              <p className="text-white/90 mt-2 text-sm leading-relaxed">
                2nd Floor, MK Flex, Sanyash Aashram Road,<br />
                Old Fatehabad, Fatehabad,<br />
                Haryana - 125050
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/cover_mantra_pvt_ltd", label: "Instagram" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/covermantra/about", label: "LinkedIn" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-[#FF690B] text-white rounded-xl transition-all duration-300 hover:-translate-y-1 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            
            {/* About Us */}
            <div className="col-span-1">
              <p className="text-base font-bold text-white mb-6 border-l-4 border-[#FF690B] pl-3">About Us</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-[#FF690B] transition-colors">About CoverMantra</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF690B] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="col-span-1">
              <p className="text-base font-bold text-white mb-6 border-l-4 border-[#FF690B] pl-3">Services</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/business-loans" className="hover:text-[#FF690B] transition">Business Loans</Link></li>
                <li>
                  <button
                    onClick={() => handleProtectedNavigation("/personal-loans")}
                    className="hover:text-[#FF690B] transition text-left"
                  >
                    Personal Loans
                  </button>
                </li>
                <li><Link href="/insurance" className="hover:text-[#FF690B] transition">Insurance</Link></li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="col-span-1">
              <p className="text-base font-bold text-white mb-6 border-l-4 border-[#FF690B] pl-3">Resources</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/faq" className="hover:text-[#FF690B] transition">FAQs</Link></li>
                <li><Link href="/Blogs" className="hover:text-[#FF690B] transition">Our Blogs</Link></li>
                <li><Link href="/datapolicy" className="hover:text-[#FF690B] transition">Data Policy</Link></li>
                <li><Link href="/delete-account" className="hover:text-[#FF690B] transition">Account Deletion</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <p className="text-base font-bold text-white mb-6 border-l-4 border-[#FF690B] pl-3">Support</p>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF690B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href="mailto:info@covermantra.in" className="hover:text-white break-all">info@covermantra.in</a>
                </li>
                <li><Link href="/LenderGrievances" className="hover:text-[#FF690B] transition">Lender Grievances</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-xs sm:text-sm text-white/50">
                © {new Date().getFullYear()} CoverMantra Services Private Limited. 
                <span className="block sm:inline ml-0 sm:ml-1 text-white/30 italic">All Rights Reserved.</span>
              </p>
              <p className="text-[10px] mt-2 text-white/40 tracking-widest uppercase">
                CIN: U46109DL2024PTC438732
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 order-1 lg:order-2">
              <Link href="/terms" className="text-sm text-white/60 hover:text-[#FF690B] transition">Terms</Link>
              <Link href="/privacy" className="text-sm text-white/60 hover:text-[#FF690B] transition">Privacy</Link>
              {/* <Link href="/cookies" className="text-sm text-white/60 hover:text-[#FF690B] transition">Cookies</Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOtpVerified={handleOtpVerified}
      />
      <GlobalModal 
        isOpen={globalModalOpen} 
        onClose={() => setGlobalModalOpen(false)} 
      />
    </footer>
  );
}

export default Footer;