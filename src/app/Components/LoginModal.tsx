"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { sendOtp, verifyOtp, getUser } from "../APIs/utils";
import { useRouter } from "next/navigation";
import { useModal } from "../context/modelcontext";
import { triggerLoginStatusChange } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaLock, FaCheckCircle, FaShieldAlt, FaTimes } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => Promise<void>;
  suppressGlobalModal?: boolean;
  onOtpVerified?: () => void;
}

export default function LoginModal({ isOpen, onClose, onSuccess, suppressGlobalModal }: Props) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);
  const router = useRouter();
  const { openModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      setStep("phone");
      setPhone("");
      setOtp("");
      setErrorMsg("");
      setConsent(false);
    }
  }, [isOpen]);

  const login = ({ phone, token }: { phone: string; token: string }) => {
    router.push("/");
  };

  const handleSendOtp = async () => {
    setErrorMsg("");
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setErrorMsg("Invalid 10-digit number");
      return;
    }
    if (!consent) {
      setErrorMsg("Agreement required to proceed");
      return;
    }

    setIsLoading(true);
    try {
      const res = await sendOtp(phone);
      if (res?.success || res?.status === "success" || res?.message?.toLowerCase().includes("otp sent")) {
        setStep("otp");
      } else {
        setErrorMsg(res?.message || "Failed to send OTP!");
      }
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Failed to send OTP!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setErrorMsg("");
    if (otp.length !== 6) {
      setErrorMsg("Enter 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const response = await verifyOtp(phone, otp);
      const token = response?.token;

      if (response?.success || response?.status || response?.message?.toLowerCase().includes("otp verified")) {
        if (token) Cookies.set("co_token", token, { expires: 7 });
        Cookies.set("co_phone", phone, { expires: 7 });
        Cookies.set("co_login", "true", { expires: 7 });
        Cookies.set("showRegistrationModal", "true", { expires: 1 });

        triggerLoginStatusChange();

        try {
          const userData = await getUser(phone);
          if (userData?.user) {
            login({ phone, token });
            onClose();
          } else {
            if (suppressGlobalModal) {
              if (onSuccess) await onSuccess();
              onClose();
            } else {
              openModal();
              setTimeout(() => onClose(), 50);
            }
          }
        } catch (userErr) {
          if (suppressGlobalModal) {
            if (onSuccess) await onSuccess();
            onClose();
          } else {
            openModal();
            setTimeout(() => onClose(), 50);
          }
        }
      } else {
        setErrorMsg(response?.message || "OTP verification failed!");
      }
    } catch (err: any) {
      setErrorMsg(err?.response?.data?.message || "Failed to verify OTP!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const isPhoneValid = /^[6-9]\d{9}$/.test(phone);
  const isOtpValid = otp.length === 6;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08101E]/40 backdrop-blur-md"
        />

        {/* Compact 3D Modal Card */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 10 }}
          className="relative w-full max-w-[380px] bg-white rounded-[2rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-white"
        >
          {/* Brand Line */}
          <div className="h-1.5 bg-gradient-to-r from-[#FF7819] to-[#FFB800]" />

          <div className="p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-300 hover:text-[#FF7819] transition-colors"
            >
              <FaTimes size={14} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 bg-[#FFF4E5] rounded-2xl flex items-center justify-center text-[#FF7819] shadow-inner mb-4">
                {step === "phone" ? <FaPhoneAlt size={20} /> : <FaLock size={20} />}
              </div>
              <h2 className="text-2xl font-black text-[#08101E] tracking-tight">
                {step === "phone" ? "Welcome Back" : "Security Check"}
              </h2>
              <p className="text-[12px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">
                {step === "phone" ? "Enter your mobile number" : `OTP sent to +91 ${phone}`}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {errorMsg && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-50 text-red-600 text-[11px] font-black p-3 rounded-xl border border-red-100 text-center">
                  ⚠️ {errorMsg}
                </motion.div>
              )}

              {step === "phone" ? (
                <>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number"
                    maxLength={10}
                    className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF7819] rounded-xl py-3 px-5 text-[#08101E] font-bold outline-none transition-all text-sm"
                  />

                  <div className="p-4 bg-[#FFF4E5]/30 rounded-xl border border-[#FF7819]/5">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={() => setConsent(!consent)}
                        className="w-4 h-4 rounded accent-[#FF7819] mt-0.5 shrink-0"
                      />
                      <span className="text-[10px] font-semibold text-gray-500 leading-tight">
I agree to be contacted via Email, WhatsApp, SMS, or Call.                      </span>
                    </label>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSendOtp}
                    disabled={isLoading || !isPhoneValid || !consent}
                    className={`w-full py-4 rounded-xl font-black text-sm tracking-wider shadow-lg transition-all ${
                      isPhoneValid && consent && !isLoading
                        ? "bg-[#FF7819] text-white shadow-[#FF7819]/20"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? "Sending..." : "GET OTP"}
                  </motion.button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="••••••"
                    maxLength={6}
                    className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#FF7819] rounded-xl py-4 text-center text-2xl font-black tracking-[0.8rem] text-[#08101E] outline-none transition-all"
                  />
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleVerifyOtp}
                    disabled={isLoading || !isOtpValid}
                    className={`w-full py-4 rounded-xl font-black text-sm tracking-wider shadow-lg transition-all ${
                      isOtpValid && !isLoading
                        ? "bg-[#08101E] text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? "Verifying..." : "SECURE LOGIN"}
                  </motion.button>
                  <button onClick={() => setStep("phone")} className="w-full text-[10px] font-black text-[#FF7819] uppercase tracking-widest hover:opacity-70">
                    Change Number
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-gray-50 flex items-center justify-center gap-2">
               <FaShieldAlt className="text-green-500" size={10}/>
               <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-400">Verified & Encrypted</span>
            </div>
          </div>
        </motion.div> 
      </div>
    </AnimatePresence>
  );
}