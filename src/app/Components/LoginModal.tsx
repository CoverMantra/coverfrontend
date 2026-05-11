"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useAuthStore } from "../../store/useAuthStore";
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
  const { setAuth } = useAuthStore();
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
    setAuth(phone, token);
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
      const responseData = err?.response?.data;
      let message =
        responseData?.message ||
        (typeof responseData === "string" ? responseData : null) ||
        err?.message ||
        "Failed to send OTP!";

      if (responseData?.details && !message.includes(responseData.details)) {
        message += ` (${JSON.stringify(responseData.details)})`;
      }

      setErrorMsg(message);
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
        if (token) setAuth(phone, token);
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
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
        {/* Premium Glass Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#08101E]/60 backdrop-blur-xl"
        />

        {/* Premium Modal Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-[380px] bg-white/95 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20"
        >
          {/* Subtle top gradient bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF7819] via-[#FFB800] to-[#FF7819] opacity-90" />

          <div className="p-7 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-[#FF7819] rounded-full transition-colors"
            >
              <FaTimes size={12} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center mb-8 mt-2">
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                className="w-16 h-16 bg-gradient-to-br from-[#FFF4E5] to-white rounded-2xl flex items-center justify-center text-[#FF7819] shadow-[0_10px_20px_-5px_rgba(255,120,25,0.2)] mb-4 border border-[#FF7819]/10"
              >
                {step === "phone" ? <FaPhoneAlt size={22} /> : <FaLock size={22} />}
              </motion.div>
              <h2 className="text-[22px] font-black text-[#08101E] tracking-tight">
                {step === "phone" ? "Secure Access" : "Verify OTP"}
              </h2>
              <p className="text-[11px] font-bold text-gray-400 mt-2 uppercase tracking-widest text-center">
                {step === "phone" ? "Login or create an account" : `OTP sent to +91 ${phone}`}
              </p>
            </div>

            {/* Form Area */}
            <div className="space-y-5">
              <AnimatePresence>
                {errorMsg && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, y: -10 }} 
                    animate={{ opacity: 1, height: "auto", y: 0 }} 
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    className="bg-red-50 text-red-600 text-[11px] font-bold p-3 rounded-xl border border-red-100/50 flex items-center gap-2 shadow-sm"
                  >
                    <span>⚠️</span> {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {step === "phone" ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">+91</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter mobile number"
                      maxLength={10}
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7819] focus:ring-4 focus:ring-[#FF7819]/10 rounded-2xl py-4 pl-12 pr-5 text-[#08101E] font-bold outline-none transition-all text-sm placeholder:text-gray-400 placeholder:font-medium shadow-inner"
                    />
                  </div>

                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex items-start gap-3">
                    <div className="relative flex items-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={() => setConsent(!consent)}
                        className="peer w-4 h-4 cursor-pointer opacity-0 absolute"
                        id="consent-check"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${consent ? 'bg-[#FF7819] border-[#FF7819]' : 'bg-white border-gray-300'}`}>
                         {consent && <FaCheckCircle className="text-white w-2.5 h-2.5" />}
                      </div>
                    </div>
                    <label htmlFor="consent-check" className="text-[10px] font-semibold text-gray-500 leading-relaxed cursor-pointer select-none">
                      I agree to the Terms & Conditions and allow contact via Email, WhatsApp, SMS, or Call.
                    </label>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendOtp}
                    disabled={isLoading || !isPhoneValid || !consent}
                    className={`w-full py-4 rounded-2xl font-black text-sm tracking-wide shadow-lg transition-all flex justify-center items-center gap-2 ${
                      isPhoneValid && consent && !isLoading
                        ? "bg-gradient-to-r from-[#FF7819] to-[#e66a15] text-white shadow-[0_10px_20px_-10px_rgba(255,120,25,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(255,120,25,0.7)]"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                    }`}
                  >
                    {isLoading ? <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : "PROCEED SECURELY"}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    placeholder="••••••"
                    maxLength={6}
                    className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FF7819] focus:ring-4 focus:ring-[#FF7819]/10 rounded-2xl py-5 text-center text-3xl font-black tracking-[1rem] text-[#08101E] outline-none transition-all shadow-inner"
                  />
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={handleVerifyOtp}
                    disabled={isLoading || !isOtpValid}
                    className={`w-full py-4 rounded-2xl font-black text-sm tracking-wide shadow-lg transition-all flex justify-center items-center gap-2 ${
                      isOtpValid && !isLoading
                        ? "bg-[#08101E] text-white hover:bg-[#16253d] shadow-[0_10px_20px_-10px_rgba(8,16,30,0.6)]"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                    }`}
                  >
                    {isLoading ? <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : "VERIFY & CONTINUE"}
                  </motion.button>
                  <button onClick={() => setStep("phone")} className="w-full flex items-center justify-center gap-1.5 text-[10px] font-black text-[#FF7819] uppercase tracking-widest hover:opacity-70 transition-opacity">
                    Edit Number
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer Trust Badge */}
            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-center gap-2 opacity-80">
               <FaShieldAlt className="text-green-500" size={12}/>
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Verified & 256-bit Encrypted</span>
            </div>
          </div>
        </motion.div> 
      </div>
    </AnimatePresence>
  );
}