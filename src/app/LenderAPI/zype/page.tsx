"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../../lib/axios";

// Logic remains identical to your provided code
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
    name: "",
    dob: "",
    email: "",
    employment_type_id: "",
    pan: "",
    consent: false,
    consent_timestamp: "",
    income: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showModal = (message: string, type: "success" | "error" | "info" = "info") => {
    setResponseMessage({ type, message });
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
          name: user.name || "",
          dob: user.dob || "",
          email: user.email || "",
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
    if (!formData.consent) {
      showModal("⚠️ Please provide consent before submitting.", "info");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post("/api/zype/register", {
        phone: formData.mobile,
        name: formData.name,
        dob: formData.dob,
        email: formData.email,
        employmentType: formData.employment_type_id.toLowerCase(),
        pan: formData.pan,
        income: Number(formData.income),
      });
      if (
        data?.totalresponse?.deduperesponse?.status === "ACCEPT" &&
        data?.totalresponse?.apires?.status === "ACCEPT"
      ) {
        const offer = data.totalresponse.apires.offer;
        showModal(`✅ Application Success! Your Offer: ₹${offer}`, "success");
        setTimeout(() => {
          window.location.href = "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea";
        }, 2000);
      } else {
        showModal("Not eligible for this lender. Try other lenders.", "error");
        setTimeout(() => { window.location.href = "/personal-loans"; }, 3000);
      }
    } catch (error: any) {
      showModal("Not eligible for this lender. Try other lenders.", "error");
      setTimeout(() => { window.location.href = "/personal-loans"; }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans">
      
      {/* Premium 3D Modal */}
      <AnimatePresence>
        {responseMessage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#08101E]/70 backdrop-blur-md z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className={`flex flex-col items-center max-w-sm w-full p-8 rounded-[3rem] shadow-2xl bg-white border-b-[10px] ${
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
              <p className="text-center text-gray-500 font-bold mt-2 leading-tight">{responseMessage.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="h-72 bg-[#08101E] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FF7819] rounded-full blur-[120px] opacity-20"></div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl md:text-5xl font-black text-white italic tracking-tighter"
        >
          ZYPE<span className="text-[#FF7819]">LOAN</span>
        </motion.h1>
        <p className="relative text-gray-400 text-xs md:text-sm tracking-[0.3em] uppercase mt-3 font-bold">Fast-Track Your Credit</p>
      </div>

      {/* Glassmorphism Form */}
      <div className="relative z-10 flex justify-center px-4 -mt-20 pb-20">
        <motion.form
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="max-w-2xl w-full bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter phone" required />
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="As per PAN" required />
            <InputField label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} type="date" required />
            <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" type="email" required />
            <InputField label="PAN Card" name="pan" value={formData.pan} onChange={handleChange} placeholder="ABCDE1234F" className="uppercase tracking-[0.2em] font-mono" maxLength={10} required />
            <InputField label="Monthly Income" name="income" value={formData.income} onChange={handleChange} placeholder="e.g. 25000" type="number" required />
            
            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase font-black text-[#FF7819] ml-4 tracking-widest">Employment Type</label>
              <select
                name="employment_type_id"
                value={formData.employment_type_id}
                onChange={handleChange}
                className="w-full p-4.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF7819] focus:bg-white outline-none transition-all font-bold text-sm text-[#08101E]"
                required
              >
                <option value="">Select Type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </div>
          </div>

          {/* Consent Checkbox */}
          <motion.label 
            whileTap={{ scale: 0.98 }}
            className="mt-10 flex items-center gap-4 p-5 bg-[#08101E]/5 rounded-3xl border-2 border-transparent hover:border-[#FF7819]/20 transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-6 h-6 accent-[#FF7819] shrink-0"
              required
            />
            <span className="text-[11px] md:text-xs text-gray-600 font-bold leading-snug">
              I certify that the information provided is accurate and I authorize <b>CoverMantra</b> to process my <b>Zype</b> credit application.
            </span>
          </motion.label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.consent || loading || isLoading}
            className={`w-full mt-10 py-6 rounded-[2rem] font-black text-white text-xl tracking-tighter shadow-2xl transition-all active:scale-95 ${
              !formData.consent || loading || isLoading 
                ? "bg-gray-300 cursor-not-allowed shadow-none" 
                : "bg-[#FF7819] hover:bg-[#08101E] shadow-[#FF7819]/30"
            }`}
          >
            {loading || isLoading ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                VERIFYING...
              </span>
            ) : "SUBMIT APPLICATION"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

// Reusable 3D-styled Input
function InputField({ label, className = "", ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase font-black text-[#FF7819] ml-4 tracking-widest">{label}</label>
      <input
        {...props}
        className={`w-full p-4.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF7819] focus:bg-white outline-none transition-all font-bold text-sm text-[#08101E] placeholder:text-gray-300 ${className}`}
      />
    </div>
  );
}