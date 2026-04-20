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

  // Handle navigation with login check
  const handleProtectedNavigation = (path: string) => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");

    if (co_phone && co_token) {
      router.push(path);
    } else {
      setLoginOpen(true);
    }
  };

  // Called when OTP is successfully verified
  const handleOtpVerified = () => {
    setLoginOpen(false);
    setGlobalModalOpen(true);
  };

  return (
    <footer className="bg-[#08101E] border-t-4 border-[#FF7819] rounded-t-3xl">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          
          {/* Company Info + Logo */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-xl flex items-center justify-center text-[#08101E] font-black text-3xl shadow-md">
                C
              </div>
              <div>
                <span className="text-3xl font-extrabold text-white">Cover</span>
                <span className="text-3xl font-extrabold text-[#FF690B]">Mantra</span>
              </div>
            </div>

            <p className="mt-6 text-white/80 leading-relaxed max-w-md mx-auto sm:mx-0">
              Smart financial solutions for loans and insurance. 
              Making finance simple, fast and trustworthy.
            </p>

            <div className="mt-8">
              <p className="text-sm text-white/70">Registered Office:</p>
              <p className="text-white mt-1 text-sm leading-relaxed">
                2nd Floor, MK Flex, Sanyash Aashram Road,<br />
                Old Fatehabad, Fatehabad,<br />
                Haryana - 125050
              </p>
            </div>

            {/* Social Icons - Updated with Bhagwa theme */}
            <div className="flex justify-center sm:justify-start gap-4 mt-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-[#FF690B] text-white hover:text-white rounded-2xl transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cover_mantra_pvt_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-[#FF690B] text-white hover:text-white rounded-2xl transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/covermantra/about"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-[#FF690B] text-white hover:text-white rounded-2xl transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            
            {/* About Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-white mb-6">About Us</p>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link href="/about" className="hover:text-[#FF690B] transition">About CoverMantra</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF690B] transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-white mb-6">Our Services</p>
              <ul className="space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/business-loans" className="hover:text-[#FF690B] transition">
                    Business Loans
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => handleProtectedNavigation("/personal-loans")}
                    className="hover:text-[#FF690B] transition text-left"
                  >
                    Personal Loans
                  </button>
                </li>
                <li>
                  <Link href="/insurance" className="hover:text-[#FF690B] transition">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-white mb-6">Helpful Links</p>
              <ul className="space-y-3 text-sm text-white/80">
                <li><Link href="/faq" className="hover:text-[#FF690B] transition">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF690B] transition">Support</Link></li>
                <li><Link href="/Blogs" className="hover:text-[#FF690B] transition">Our Blogs</Link></li>
                <li><Link href="/datapolicy" className="hover:text-[#FF690B] transition">Data Policy</Link></li>
                <li><Link href="/delete-account" className="hover:text-[#FF690B] transition">Account Deletion</Link></li>
                <li><Link href="/LenderGrievances" className="hover:text-[#FF690B] transition">Lender Grievances</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-white mb-6">Contact Us</p>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#FF690B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@covermantra.in" className="hover:text-white">info@covermantra.in</a>
                </li>

                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 text-[#FF690B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="not-italic leading-relaxed">
                    2nd Floor, MK Flex,<br />
                    Sanyash Aashram Road,<br />
                    Old Fatehabad,<br />
                    Fatehabad, Haryana - 125050
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} CoverMantra Services Private Limited. 
              All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 text-sm">
              <Link href="/terms" className="text-white/70 hover:text-white transition">Terms & Conditions</Link>
              <Link href="/privacy" className="text-white/70 hover:text-white transition">Privacy Policy</Link>
            </div>

            <p className="text-sm text-white/70">
              CIN: U46109DL2024PTC438732
            </p>
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