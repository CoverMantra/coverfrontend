"use client";
import { useState, useEffect } from "react";
import api from "../../../lib/axios";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const VIVIFI_REDIRECT_URL = "https://online.flexsalary.com/CustomerLogin/Index?CampaignID=9192300#x";

export default function VivifiLeadPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    pan: "",
    dob: "",
    pincode: "",
    monthly_income: "",
    employment_type: "",
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<null | { type: "success" | "error"; message: string }>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (!storedPhone) return;

      try {
        const res = await api.post("/api/user/profile", { phone: storedPhone });
        const user = res.data.user;
        if (user) {
          const names = user.name ? user.name.split(" ") : ["", ""];
          setFormData((prev) => ({
            ...prev,
            first_name: names[0] || "",
            last_name: names.slice(1).join(" ") || "",
            mobile: user.phone || "",
            email: user.email || "",
            pan: user.pan || "",
            dob: user.dob || "",
            pincode: user.pincode || "",
            employment_type: user.employment || "",
          }));
        }
      } catch (err) {
        console.error("Error pre-filling data", err);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        firstName: formData.first_name,
        lastName: formData.last_name,
        phone: formData.mobile,
        email: formData.email,
        pan: formData.pan,
        dob: formData.dob,
        pincode: formData.pincode,
        income: formData.monthly_income,
        employmentType: formData.employment_type,
        gender: 'male', // default
      };
      await api.post("/api/vivifi/register", payload);
      setResponseMessage({ type: "success", message: "Details Verified! Redirecting to FlexSalary..." });
      setTimeout(() => { window.location.href = VIVIFI_REDIRECT_URL; }, 2000);
    } catch (err: any) {
      setResponseMessage({ 
        type: "error", 
        message: "Not eligible for this lender. Try other lenders."
      });
      setTimeout(() => { window.location.href = "/personal-loans"; }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans">
      {/* Dark Header Part */}
      <div className="h-64 bg-[#08101E] w-full absolute top-0 left-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#1a2a44] to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 pt-24 md:pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 border border-white"
        >
          
          <div className="text-center mb-10">
            <div className="bg-[#FFF4E5] inline-block p-4 rounded-2xl mb-4 shadow-inner">
               <img src="/image/flexsalary-color-black.webp" alt="FlexSalary" className="h-8 mx-auto" />
            </div>
            <h2 className="text-2xl font-black text-[#08101E] tracking-tight">Complete Application</h2>
            <p className="text-gray-500 text-sm mt-1">Verify your info for <span className="text-[#FF7819] font-bold">Instant Credit</span></p>
          </div>

          {responseMessage && (
            <motion.div 
              initial={{ scale: 0.9 }} 
              animate={{ scale: 1 }}
              className={`mb-6 p-4 rounded-2xl text-center text-sm font-bold shadow-sm border ${
                responseMessage.type === 'success' 
                ? 'bg-green-50 text-green-700 border-green-100' 
                : 'bg-red-50 text-red-700 border-red-100'
              }`}
            >
              {responseMessage.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">First Name</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Last Name</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required maxLength={10} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Date of Birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Pincode</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required maxLength={6} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Employment Type</label>
              <select name="employment_type" value={formData.employment_type} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#FF7819] transition-all">
                <option value="">Select</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
              <input 
                type="checkbox" 
                checked={formData.consent} 
                required 
                className="mt-1 accent-[#FF7819] w-4 h-4" 
                onChange={(e) => setFormData({...formData, consent: e.target.checked})} 
              />
              <p className="text-[11px] text-gray-500 leading-snug">
                I authorize <span className="font-bold text-[#08101E]">CoverMantra</span> to share my details with Vivifi India Finance Pvt Ltd (FlexSalary) for secure loan processing and credit assessment.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !formData.consent}
              className={`w-full py-5 text-white font-black rounded-3xl shadow-xl shadow-[#FF7819]/20 transition-all active:scale-95 ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF7819] hover:bg-[#e66a15]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Verifying...
                </span>
              ) : "Confirm & Apply Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}