"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";
import GlobalModal from "./globalmodel";
import { useModal } from "../context/modelcontext";
import Image from "next/image";
import path from "path";

// ✅ Utility function to trigger login status change event
export const triggerLoginStatusChange = () => {
  if (typeof window !== "undefined") {
    const event = new Event("loginStatusChanged");
    window.dispatchEvent(event);
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formCompleted, setFormCompleted] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  // ✅ Run only client-side
  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(Cookies.get("co_login") === "true");
    };

    updateLoginStatus();

    window.addEventListener("loginStatusChanged", updateLoginStatus);
    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);

  // ✅ Handle scroll + outside clicks safely
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Prevent hydration mismatch with scroll lock
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow =
        mobileMenuOpen || loginOpen ? "hidden" : "auto";
    }
  }, [mobileMenuOpen, loginOpen]);

  const handleLogout = () => {
    Cookies.remove("co_login");
    Cookies.remove("co_phone");
    Cookies.remove("co_token");
    localStorage.removeItem("userInfo");
    Cookies.remove("loanFormData");
    Cookies.remove("loanFormSubmitted");
    setIsLoggedIn(false);
    triggerLoginStatusChange();
    router.push("/");
  };

  const handleMenuClick = (item: any) => {
    const excludedModals = ["/quick-links", "/contact"];

    if (!isLoggedIn) {
      if (item.modal && !excludedModals.includes(item.path)) {
        setLoginOpen(true);
        return;
      } else if (item.path) {
        router.push(item.path);
        setMobileMenuOpen(false);
        return;
      }
    } else {
      if (item.modal && !formCompleted) {
        openModal();
      } else if (item.path) {
        router.push(item.path);
        setMobileMenuOpen(false);
      }
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Personal Loans", modal: true, path: "/personal-loans" },
    { name: "Smart Access", modal: true, path: "/quick-links" },
    // { name: "Business Loans", modal: true, path: "/business-loans" },
    // { name: "Insurance", modal: true, path: "/insurance" },
    { name: "Contact", modal: true, path: "/contact" }

  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-3 sm:py-4 z-50 transition-all duration-300 backdrop-blur-lg border-b border-white/20 ${scrolled ? "bg-green-900 shadow-lg" : "bg-green-900"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
<div>
  <Link href="/" className="inline-block font-bold text-xl sm:text-xl lg:text-xl relative">
    <span className="text-xl lg:text-2xl bg-clip-text text-transparent bg-white font-bold">
      Cover
    </span>
    <span className="text-amber-400 text-xl lg:text-2xl">Mantra</span>
    <span className="block text-[10px] px-2 sm:text-[12px] md:text-[8px] lg:text-[8px] text-white border border-white/50 bg-gradient-to-r from-green-400 to-green-600 uppercase tracking-wide transform -skew-x-12 shadow-sm text-center mt-0 sm:mt-1 md:mt-0 lg:mt-0">
  Smart Cover, Sure Trust
</span>

  </Link>
</div>

     {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className={`text-white text-sm lg:text-base px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl transition-all hover:bg-green-600 hover:-translate-y-1 hover:shadow-md ${isActive
                      ? "bg-gradient-to-r from-green-400 to-green-600 shadow-md"
                      : ""
                    }`}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Profile / Login Section */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-400 to-green-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-white shadow-md w-full md:w-auto justify-between md:justify-start">
                <div
                  className="w-7 sm:w-8 h-7 sm:h-8 cursor-pointer flex-shrink-0"
                  onClick={() => router.push("/dashboard")}
                >
                  <Image
                    src="/image/user.png"
                    alt="User Icon"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-green-400 to-green-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-white shadow-md hover:scale-105 transition w-full md:w-auto justify-center md:justify-start"
              >
                <Image
                  src="/image/profile.png"
                  alt="User Icon"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-xs sm:text-sm md:text-base">Login</span>
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full h-full bg-green-950 bg-opacity-95 flex flex-col items-center justify-center gap-6 sm:gap-8 text-white text-lg sm:text-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleMenuClick(item)}
            className="hover:text-green-300 transition"
          >
            {item.name}
          </button>
        ))}

        {/* Mobile Profile / Login */}
        {isLoggedIn ? (
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/image/profile.png"
              alt="User Icon"
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
              onClick={() => {
                router.push("/dashboard");
                setMobileMenuOpen(false);
              }}
            />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogout();
              }}
              className="border border-green-400 px-6 py-2 rounded-full hover:bg-green-600 transition text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setLoginOpen(true);
            }}
            className="border border-green-400 px-6 py-2 rounded-full hover:bg-green-600 transition text-white"
          >
            Login
          </button>
        )}
      </div>

      {/* Modals */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <GlobalModal />
    </>
  );
}
