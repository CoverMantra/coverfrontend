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

  // ✅ Handle navigation with login check
  const handleProtectedNavigation = (path: string) => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");

    if (co_phone && co_token) {
      router.push(path);
    } else {
      setLoginOpen(true);
    }
  };

  // ✅ Called when OTP verified successfully
  const handleOtpVerified = () => {
    setLoginOpen(false);
    setGlobalModalOpen(true);
  };

  return (
    <footer className="bg-green-900 rounded-t-md">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <p className="max-w-md mt-6 leading-relaxed text-center text-white sm:text-left">
              <strong className="text-2xl">CoverMantra</strong>
              <br />
              <br />
              2nd floor, MK Flex, Sanyash Aashram Road, Old Fatehabad, Fatehabad
              <br />
              Haryana - 125050
            </p>
            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              <li>
                <a
                  href="https://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-400"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cover_mantra_pvt_ltd"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-400"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/covermantra/about"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-white hover:text-white/75">
                    About CoverMantra
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-white/75"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link
                    href="/business-loans"
                    className="text-white hover:text-white/75"
                  >
                    Business Loans
                  </Link>
                </li>

                {/* ✅ Personal Loans with login check */}
                <li>
                  <button
                    onClick={() => handleProtectedNavigation("/personal-loans")}
                    className="text-white hover:text-white/75"
                  >
                    Personal Loans
                  </button>
                </li>

                <li>
                  <Link
                    href="/insurance"
                    className="text-white hover:text-white/75"
                  >
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <Link href="/faq" className="text-white hover:text-white/75">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-white/75">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/Blogs" className="text-white hover:text-white/75">
                    Our Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/datapolicy" className="text-white hover:text-white/75">
                    Data Policy
                  </Link>
                </li>
                 <li>
                  <Link href="/delete-account" className="text-white hover:text-white/75">
                    Account Deletion Request
                  </Link>
                </li>
                <li>
                  <Link
                    href="/LenderGrievances"
                    className="text-white hover:text-white/75"
                  >
                    Lender Grievances
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 
                      8M5 19h14a2 2 0 002-2V7a2 2 
                      0 00-2-2H5a2 2 0 00-2 2v10a2 
                      2 0 002 2z"
                    />
                  </svg>
                  <span className="text-white">info@covermantra.in</span>
                </li>
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 
                      1.998 0 01-2.827 0l-4.244-4.243a8 
                      8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 
                      0 3 3 0 016 0z"
                    />
                  </svg>
                  <address className="not-italic text-white">
                    2nd floor, MK Flex, Sanyash Aashram Road,
                    Old Fatehabad, Fatehabad <br />
                    Haryana - 125050
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 mt-8 border-t border-gray-800">
          <div className="text-center flex flex-col items-center gap-1">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} CoverMantra Services Private Limited.
              All Rights Reserved <br />
              <Link
                href="/terms"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Terms & Conditions
              </Link>{" "}
              ·{" "}
              <Link
                href="/privacy"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-2 text-sm text-white">
              CIN: U46109DL2024PTC438732
            </p>
            <p className="mt-1 text-sm text-white">&copy; 2025 CoverMantra</p>
          </div>
        </div>
      </div>

      {/* ✅ Modals */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOtpVerified={handleOtpVerified} // call this when OTP verified
      />
      <GlobalModal isOpen={globalModalOpen} onClose={() => setGlobalModalOpen(false)} />
    </footer>
  );
}

export default Footer;
