"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react"; // Added icons for better UX
import LoginModal from "./LoginModal";
import Cookies from "js-cookie";
import GlobalModal from "./globalmodel";
import { useModal } from "../context/modelcontext";
import Image from "next/image";

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
  const [isClient, setIsClient] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    const updateLoginStatus = () => {
      setIsLoggedIn(Cookies.get("co_login") === "true");
    };
    updateLoginStatus();
    window.addEventListener("loginStatusChanged", updateLoginStatus);
    return () => window.removeEventListener("loginStatusChanged", updateLoginStatus);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    ["co_login", "co_phone", "co_token", "loanFormData", "loanFormSubmitted"].forEach(c => Cookies.remove(c));
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    triggerLoginStatusChange();
    router.push("/");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Personal Loans", modal: true, path: "/personal-loans" },
    { name: "Smart Access", modal: true, path: "/quick-links" },
    { name: "Contact", modal: true, path: "/contact" },
  ];

  const handleMenuClick = (item: any) => {
    const excludedModals = ["/quick-links", "/contact"];
    if (!isLoggedIn && item.modal && !excludedModals.includes(item.path)) {
      setLoginOpen(true);
    } else {
      router.push(item.path);
    }
    setMobileMenuOpen(false);
  };

  if (!isClient) return <div className="h-20 bg-[#08101E]" />;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
          ? "py-3 bg-[#08101E]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative z-[110]">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF690B] to-[#FFB900] rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#08101E] rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF690B] to-[#FFB900] font-black text-2xl sm:text-3xl">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl leading-none tracking-tight">
                <span className="text-white">Cover</span>
                <span className="text-[#FF690B]">Mantra</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-white/50 tracking-[2px] uppercase font-bold mt-1">Smart Cover</span>
            </div>
          </Link>

          {/* Desktop & Tablet Menu (lg:flex for laptops, md:flex for tabs) */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className={`px-4 lg:px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  pathname === item.path 
                  ? "bg-gradient-to-r from-[#FF690B] to-[#FFB900] text-[#08101E] shadow-lg shadow-orange-600/20" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Side: Login/Profile */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-2 bg-[#1A2332] p-1 pr-4 rounded-full border border-white/10">
                <div 
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#FF690B] cursor-pointer"
                  onClick={() => router.push("/dashboard")}
                >
                  <Image src="/image/user.png" alt="User" width={36} height={36} className="object-cover" />
                </div>
                <button onClick={handleLogout} className="text-white/60 hover:text-white text-xs font-black uppercase tracking-wider">Logout</button>
              </div>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-white text-[#08101E] px-6 py-2.5 rounded-xl font-black text-sm hover:bg-[#FF690B] hover:text-white transition-all shadow-xl active:scale-95"
              >
                LOGIN
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-[110] p-2 bg-white/5 rounded-xl border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#08101E] z-[100] transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 gap-4">
          {navItems.map((item, i) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={`w-full text-left p-5 rounded-2xl text-2xl font-black border transition-all ${
                mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              } ${
                pathname === item.path 
                ? "bg-gradient-to-r from-[#FF690B] to-[#FFB900] text-[#08101E] border-transparent" 
                : "bg-white/5 text-white border-white/10"
              }`}
            >
              {item.name}
            </button>
          ))}

          {isLoggedIn ? (
            <div className="mt-auto mb-10 grid grid-cols-2 gap-4">
               <button onClick={() => router.push("/dashboard")} className="p-5 bg-white/5 rounded-2xl border border-white/10 text-white flex flex-col items-center gap-2">
                  <LayoutDashboard size={24} />
                  <span className="text-xs font-bold uppercase">Dashboard</span>
               </button>
               <button onClick={handleLogout} className="p-5 bg-red-500/10 rounded-2xl border border-red-500/20 text-red-500 flex flex-col items-center gap-2">
                  <LogOut size={24} />
                  <span className="text-xs font-bold uppercase">Logout</span>
               </button>
            </div>
          ) : (
            <button
              onClick={() => { setMobileMenuOpen(false); setLoginOpen(true); }}
              className="mt-auto mb-10 w-full bg-white text-[#08101E] p-6 rounded-2xl font-black text-xl shadow-2xl"
            >
              LOGIN TO ACCOUNT
            </button>
          )}
        </div>
      </div>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <GlobalModal />
    </>
  );
}