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

// ✅ Utility function
export const triggerLoginStatusChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("loginStatusChanged"));
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);   // ← Hydration fix ke liye

  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  // Hydration safe login status
  useEffect(() => {
    setIsClient(true);

    const updateLoginStatus = () => {
      setIsLoggedIn(Cookies.get("co_login") === "true");
    };

    updateLoginStatus();
    window.addEventListener("loginStatusChanged", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);

  // Scroll + Outside click
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

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || loginOpen ? "hidden" : "auto";
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
      }
      if (item.path) {
        router.push(item.path);
        setMobileMenuOpen(false);
      }
    } else {
      // Agar formCompleted check chahiye toh yahan add kar sakte ho
      if (item.path) {
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
    { name: "Contact", modal: true, path: "/contact" },
  ];

  // Server pe initial render safe rakhne ke liye
  if (!isClient) {
    return (
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 py-4 z-50 bg-[#08101E] backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo skeleton */}
          <div className="h-10 w-40 bg-white/10 rounded" />
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-4 sm:px-6 py-3 sm:py-4 z-50 transition-all duration-300 backdrop-blur-lg border-b border-white/20 ${
          scrolled ? "bg-[#08101E] shadow-lg" : "bg-[#08101E]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo - Modern 3D Bhagwa Style */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0">
              <span className="absolute inset-0 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all" />
              <span className="absolute inset-0.5 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] rounded-lg flex items-center justify-center text-[#08101E] font-black text-3xl shadow-inner">
                C
              </span>
            </div>

            <div className="flex flex-col">
              <div className="font-extrabold text-2xl leading-none tracking-tight">
                <span className="text-[#C9CBCC]">Cover</span>
                <span className="text-[#FF690B]">Mantra</span>
              </div>
              <span className="text-[10px] mt-1 text-white/80 tracking-[1px] uppercase font-medium">
                Smart Cover, Sure Trust
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className={`text-sm lg:text-base px-5 py-2.5 rounded-2xl font-medium transition-all hover:bg-white/10 hover:text-white ${
                    isActive
                      ? "bg-gradient-to-r from-[#FFB900] to-[#FF690B] text-black shadow-md"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            {/* Login / Profile */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#FFB900] to-[#FF690B] pl-2 pr-5 py-1.5 rounded-full text-black font-semibold shadow-md">
                <div
                  className="w-8 h-8 cursor-pointer rounded-full overflow-hidden border-2 border-white/50"
                  onClick={() => router.push("/dashboard")}
                >
                  <Image
                    src="/image/user.png"
                    alt="User"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <button onClick={handleLogout} className="text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#FFB900] to-[#FF690B] px-6 py-2.5 rounded-full font-semibold text-black hover:scale-105 transition shadow-md"
              >
                <Image src="/image/profile.png" alt="Login" width={22} height={22} />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-[#08101E] z-50 flex flex-col items-center justify-center gap-8 text-xl md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleMenuClick(item)}
            className="hover:text-[#FF690B] transition-colors"
          >
            {item.name}
          </button>
        ))}

        {isLoggedIn ? (
          <div className="flex flex-col items-center gap-6 mt-8">
            <Image
              src="/image/user.png"
              alt="User"
              width={70}
              height={70}
              className="rounded-full border-4 border-[#FF690B]"
              onClick={() => {
                router.push("/dashboard");
                setMobileMenuOpen(false);
              }}
            />
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="px-8 py-3 border border-white/50 rounded-full hover:bg-[#FF690B] hover:text-black transition"
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
            className="mt-8 px-10 py-3 border border-[#FF690B] rounded-full hover:bg-[#FF690B] hover:text-black transition font-medium"
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