"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { sendOtp, verifyOtp, getUser } from "../APIs/utils";
import { useRouter } from "next/navigation";
import { useModal } from "../context/modelcontext";
import { triggerLoginStatusChange } from "./Navbar";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => Promise<void>;
  suppressGlobalModal?: boolean;
  onOtpVerified?: () => void; // new optional prop
   
}

export default function LoginModal({ isOpen, onClose , onSuccess, suppressGlobalModal}: Props) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false); // Added consent state
  const router = useRouter();
  const { openModal } = useModal();

  // Reset state whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep("phone");
      setPhone("");
      setOtp("");
      setErrorMsg("");
      setConsent(false);
    }
  }, [isOpen]);

  // Login helper
  const login = ({ phone, token }: { phone: string; token: string }) => {
    router.push("/");
  };

  // Send OTP
  const handleSendOtp = async () => {
    setErrorMsg("");

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setErrorMsg("Enter a valid 10-digit mobile number");
      return;
    }

    // NOTE: Removed 'if (!consent)' check here to rely on button 'disabled' state.
    // However, I'm re-adding it below for robustness in case the button's disabled state fails.
    if (!consent) {
      setErrorMsg("Please agree to the contact terms to proceed.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await sendOtp(phone);

      if (
        res?.success === true ||
        res?.status === true ||
        res?.status === "success" ||
        res?.message?.toLowerCase().includes("otp sent")
      ) {
        setStep("otp");
      } else {
        setErrorMsg(res?.message || "Failed to send OTP!");
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to send OTP!";
      setErrorMsg(msg);
      console.error("Send OTP Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP + Check user existence
  const handleVerifyOtp = async () => {
    setErrorMsg("");

    if (otp.length !== 6) {
      setErrorMsg("Please enter a valid 6-digit OTP");
      return;
    }

    if (!consent) {
      setErrorMsg("Please agree to the contact terms to proceed.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await verifyOtp(phone, otp);
      const token = response?.token;

      if (
        response?.success === true ||
        response?.status === true ||
        response?.message?.toLowerCase().includes("otp verified")
      ) {
        // Save cookies
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
              // Instead of opening global modal, call onSuccess directly only for suppressGlobalModal pages
              if (onSuccess) {
                await onSuccess();
              }
              onClose();
            } else {
              // Default behavior — open global modal as before
              openModal();
              setTimeout(() => onClose(), 50);
            }
          }
        } catch (userErr) {
          console.error("getUser API failed", userErr);
          if (suppressGlobalModal) {
            if (onSuccess) {
              await onSuccess();
            }
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
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to verify OTP!";
      setErrorMsg(msg);
      console.error("OTP verification failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  // Helper function to check if the phone number is valid
  const isPhoneValid = /^[6-9]\d{9}$/.test(phone);

  // Helper function to check if the OTP is valid
  const isOtpValid = otp.length === 6;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-black backdrop-blur-sm bg-black/40 px-4">
      <div className="w-full max-w-sm bg-gradient-to-br from-green-300 via-lime-300 to-green-600 p-6 rounded-2xl shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-600 text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
          {step === "phone" ? "Login with OTP" : "Enter OTP"}
        </h2>

        {/* Error message */}
        {errorMsg && (
          <div className="bg-red-100 text-red-700 text-sm p-2 rounded mb-3">
            {errorMsg}
          </div>
        )}

        {step === "phone" ? (
          <>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            />

            {/* Consent checkbox for 'phone' step */}
            <div className="mb-4 flex items-start text-sm">
              <input
                type="checkbox"
                id="consent-phone"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mr-2 mt-1 accent-green-800"
                required
              />
              <label htmlFor="consent-phone">I agree to be contacted via Email, WhatsApp, SMS, or Call.</label>
            </div>

            <button
              onClick={handleSendOtp}
              // ✅ UPDATED: Disabled if loading OR (phone is invalid OR consent is false)
              disabled={isLoading || !isPhoneValid || !consent}
              className="w-full bg-white text-green-800 font-medium py-2 rounded-md hover:bg-green-400 hover:text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength={6}
              className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            />

            {/* Consent checkbox for 'otp' step */}
            <div className="mb-4 flex items-start text-sm">
              <input
                type="checkbox"
                id="consent-otp"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mr-2 mt-1 accent-green-800"
                required
              />
              <label htmlFor="consent-otp">I agree to be contacted via Email, WhatsApp, SMS, or Call.</label>
            </div>

            <button
              onClick={handleVerifyOtp}
              // ✅ UPDATED: Disabled if loading OR (OTP is invalid OR consent is false)
              disabled={isLoading || !isOtpValid || !consent}
              className="w-full bg-white text-green-800 font-medium py-2 rounded-md hover:bg-green-400 hover:text-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={() => setStep("phone")}
              className="text-xs text-green-800 mt-2 underline hover:text-green-900"
            >
              Edit mobile number
            </button>
          </>
        )}
      </div>
    </div>
  );
}