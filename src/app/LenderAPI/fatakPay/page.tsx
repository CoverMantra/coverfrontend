"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../../lib/axios";

// Logic as it is
const fetchUserData = async (storedPhone: string) => {
  try {
    const { data } = await api.post("/api/user/profile", { phone: storedPhone });
    return data.user;
  } catch (error) {
    console.error("Fetch User API Error:", error);
    return null;
  }
};

export default function LendersPage() {
  const [formData, setFormData] = useState({
    mobile: "",
    first_name: "",
    last_name: "",
    dob: "",
    email: "",
    employment_type_id: "",
    pincode: "",
    pan: "",
    consent: false,
    consent_timestamp: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showModal = (message: string, type: "success" | "error" | "info" = "info") => {
    setResponseMessage({ type, message });
  };

  const submitLenderAPI = async (payload: typeof formData) => {
    setLoading(true);
    try {
      const response = await api.post("/api/fatakPay/register/Pl", payload);
      const apiData = response.data?.data;

      if (apiData?.success && apiData?.message === "You are eligible.") {
        showModal("✅ You are eligible! Redirecting...", "success");
        setTimeout(() => { window.location.href = "https://fatakpay.com/"; }, 2000);
      } else {
        showModal(apiData?.message || "Not eligible, redirecting...", "error");
        setTimeout(() => { window.location.href = "/"; }, 3000);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.data?.message || "Something went wrong. Please try again.";
      showModal(errorMessage, "error");
      setTimeout(() => { window.location.href = "/"; }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAndSetUser = async () => {
      setIsLoading(true);
      const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (!storedPhone) {
        setIsLoading(false);
        return;
      }
      const user = await fetchUserData(storedPhone);
      if (user) {
        const employmentMap = {
          Salaried: "Salaried",
          "Self-Employed": "Self-Employed",
          "Salaried Employee": "Salaried",
        };
        setFormData((prev) => ({
          ...prev,
          mobile: user.phone || "",
          first_name: user.name || "",
          dob: user.dob || "",
          email: user.email || "",
          pincode: user.pincode || "",
          pan: user.pan || "",
          employment_type_id: employmentMap[user.employment as keyof typeof employmentMap] || "",
        }));
      } else {
        showModal("User data not found", "error");
      }
      setIsLoading(false);
    };
    fetchAndSetUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      consent_timestamp: formData.consent
        ? new Date().toISOString().slice(0, 19).replace("T", " ")
        : "",
    };
    await submitLenderAPI(payload);
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans overflow-x-hidden">
      
      {/* 3D Animated Modal */}
      <AnimatePresence>
        {responseMessage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#08101E]/60 backdrop-blur-sm z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }}
              className={`flex flex-col items-center max-w-sm w-full p-8 rounded-[2.5rem] shadow-2xl bg-white border-b-8 ${
                responseMessage.type === "success" ? "border-green-500" : "border-red-600"
              }`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                responseMessage.type === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
              }`}>
                {responseMessage.type === "success" ? (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                ) : (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                )}
              </div>
              <h3 className="text-2xl font-black text-[#08101E] tracking-tight">{responseMessage.type.toUpperCase()}</h3>
              <p className="text-center text-gray-500 font-medium mt-2">{responseMessage.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Header */}
      <div className="h-64 bg-[#08101E] relative flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <h1 className="relative text-3xl md:text-4xl font-black text-white italic tracking-tighter">
          FATAK<span className="text-[#FF7819]">PAY</span>
        </h1>
        <p className="relative text-gray-400 text-xs md:text-sm tracking-widest uppercase mt-2">Personal Loan Application</p>
      </div>

      {/* Form Section */}
      <div className="relative z-10 flex justify-center px-4 -mt-16 pb-20">
        <motion.form
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="max-w-2xl w-full bg-white/95 backdrop-blur-md p-6 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="9876543210" required />
            <InputField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Aarav" required />
            <InputField label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Sharma" required />
            <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" required />
            <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="aarav@example.com" type="email" required />
            <InputField label="PAN Card" name="pan" value={formData.pan} onChange={handleChange} placeholder="ABCDE1234F" className="uppercase font-mono tracking-widest" maxLength={10} required />
            <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="110001" maxLength={6} required />
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-black text-gray-400 ml-3 tracking-widest">Employment</label>
              <select
                name="employment_type_id"
                value={formData.employment_type_id}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#FF7819] outline-none transition-all font-bold text-sm text-[#08101E]"
                required
              >
                <option value="">Select Type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 p-4 bg-[#FFF4E5] rounded-2xl border border-[#FF7819]/10">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-5 h-5 accent-[#FF7819] cursor-pointer"
              required
            />
            <p className="text-[10px] md:text-xs text-gray-600 leading-tight">
              I authorize <b>CoverMantra</b> to share my details with <b>FatakPay</b> for loan eligibility check.
            </p>
          </div>

          <button
            type="submit"
            disabled={!formData.consent || loading || isLoading}
            className={`w-full mt-8 py-5 rounded-[1.5rem] font-black text-white text-lg tracking-tighter shadow-xl transition-all active:scale-95 ${
              !formData.consent || loading || isLoading 
                ? "bg-gray-300 cursor-not-allowed" 
                : "bg-[#FF7819] hover:bg-[#e66a15] shadow-[#FF7819]/20"
            }`}
          >
            {loading || isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                PROCESSING...
              </span>
            ) : "SUBMIT APPLICATION"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

// Reusable Input Component for cleaner code
function InputField({ label, className = "", ...props }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] uppercase font-black text-gray-400 ml-3 tracking-widest">{label}</label>
      <input
        {...props}
        className={`w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#FF7819] focus:bg-white outline-none transition-all font-bold text-sm text-[#08101E] placeholder:text-gray-300 ${className}`}
      />
    </div>
  );
}