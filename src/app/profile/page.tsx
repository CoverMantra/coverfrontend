"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/useAuthStore";
import { fetchUserData } from "../APIs/utils";
import Cookies from "js-cookie";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Briefcase, 
  IndianRupee, 
  ShieldCheck, 
  LogOut,
  X
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { isAuthenticated, phone, logout } = useAuthStore();
  
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If not authenticated, check cookies before redirecting
    const hasLoginCookie = Cookies.get("co_login") === "true";
    const storedPhone = Cookies.get("co_phone");
    
    if ((!isAuthenticated && !hasLoginCookie) || (!phone && !storedPhone)) {
      router.push("/");
      return;
    }

    const currentPhone = phone || storedPhone;

    const loadProfile = async () => {
      try {
        const data = await fetchUserData(currentPhone!);
        if (data) {
          setUserData(data);
        } else {
          // Fallback if user data fails to load
          setUserData(null);
        }
      } catch (error) {
        console.error("Failed to load profile", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [isAuthenticated, phone, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#08101E] flex flex-col items-center justify-center font-sans">
        <div className="w-16 h-16 border-4 border-[#FF7819]/20 border-t-[#FF7819] rounded-full animate-spin"></div>
        <p className="mt-4 text-[#FF7819] font-black tracking-widest uppercase text-sm animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-[#08101E] flex flex-col items-center justify-center font-sans text-center px-4">
        <h2 className="text-3xl font-black text-white mb-2">Profile Not Found</h2>
        <p className="text-gray-400 mb-8">We couldn't fetch your profile details. Please try logging in again.</p>
        <button 
          onClick={() => { 
            logout(); 
            localStorage.removeItem("userInfo");
            window.dispatchEvent(new Event("loginStatusChanged"));
            window.location.href = "/"; 
          }}
          className="px-8 py-4 bg-[#FF7819] text-white font-bold rounded-2xl hover:bg-[#e66a15] transition-all"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans pb-20 overflow-x-hidden">
      {/* Decorative Header */}
      <div className="h-80 bg-[#08101E] relative flex flex-col items-center pt-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#FF7819] rounded-full blur-[120px] opacity-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#FF7819] to-[#d65a0b] rounded-[2rem] shadow-[0_20px_40px_rgba(255,120,25,0.4)] flex items-center justify-center mb-4 border-2 border-white/20"
        >
          <User size={40} className="text-white" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-3xl md:text-4xl font-black text-white tracking-tight text-center"
        >
          Welcome, {userData.name?.split(" ")[0] || "User"}
        </motion.h1>

        {/* Close Button */}
        <button 
          onClick={() => router.push("/")}
          className="absolute top-8 right-8 z-[100] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all active:scale-90 border border-white/10 shadow-lg cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex justify-center px-4 -mt-16">
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-6">
          
          {/* Left Column: Quick Info & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/3 flex flex-col gap-6"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 border border-white">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Account Status</h3>
              
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-900">Verified Profile</p>
                  <p className="text-xs text-green-700 font-medium">Phone & OTP Secured</p>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => router.push("/personal-loans")}
                  className="w-full py-4 bg-[#08101E] text-white font-bold rounded-2xl shadow-lg hover:bg-[#1a2a44] transition-all flex items-center justify-center gap-2"
                >
                  <Briefcase size={18} /> Apply for New Loan
                </button>
                <button 
                  onClick={() => { 
                    logout(); 
                    localStorage.removeItem("userInfo");
                    window.dispatchEvent(new Event("loginStatusChanged"));
                    window.location.href = "/"; 
                  }}
                  className="w-full py-4 bg-red-50 text-red-600 font-bold rounded-2xl hover:bg-red-100 transition-all flex items-center justify-center gap-2 border border-red-100"
                >
                  <LogOut size={18} /> Logout Securely
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Info Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="md:w-2/3 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 border border-white"
          >
            <h3 className="text-sm font-black text-[#FF7819] uppercase tracking-widest mb-8 border-b border-gray-100 pb-4">Personal Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProfileField icon={<User />} label="Full Name" value={userData.name} />
              <ProfileField icon={<Phone />} label="Phone Number" value={`+91 ${userData.phone}`} />
              <ProfileField icon={<Mail />} label="Email Address" value={userData.email} />
              <ProfileField icon={<Calendar />} label="Date of Birth" value={userData.dob} />
              <ProfileField icon={<User />} label="Gender" value={userData.gender} className="capitalize" />
              <ProfileField icon={<ShieldCheck />} label="PAN Card" value={userData.pan} className="uppercase font-mono tracking-widest" />
            </div>

            <h3 className="text-sm font-black text-[#FF7819] uppercase tracking-widest mt-12 mb-8 border-b border-gray-100 pb-4">Professional & Location</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProfileField icon={<Briefcase />} label="Employment Type" value={userData.employment} className="capitalize" />
              <ProfileField icon={<IndianRupee />} label="Monthly Income" value={`₹ ${Number(userData.income).toLocaleString('en-IN')}`} />
              <ProfileField icon={<MapPin />} label="City" value={userData.city} className="capitalize" />
              <ProfileField icon={<MapPin />} label="State" value={userData.state} className="capitalize" />
              <ProfileField icon={<MapPin />} label="Pincode" value={userData.pincode} />
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

// Helper component for uniform data display
function ProfileField({ icon, label, value, className = "" }: any) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="flex items-start gap-4">
      <div className="mt-1 w-10 h-10 rounded-xl bg-[#FFF4E5] flex items-center justify-center text-[#FF7819] border border-[#FF7819]/20 shrink-0">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <div>
        <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-sm font-bold text-[#08101E] ${className}`}>{value || "Not Provided"}</p>
      </div>
    </motion.div>
  );
}
