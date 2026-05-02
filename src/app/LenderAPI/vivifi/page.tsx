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
        lastName: formData.last_name, // Optional now
        phone: formData.mobile,
        email: formData.email,
        pan: formData.pan,
        dob: formData.dob,
        pincode: formData.pincode,
        income: formData.monthly_income,
        employmentType: formData.employment_type,
        gender: 'male',
      };
      await api.post("/api/vivifi/register", payload);
      setResponseMessage({ type: "success", message: "Details Verified! Redirecting..." });
      setTimeout(() => { window.location.href = VIVIFI_REDIRECT_URL; }, 2000);
    } catch (err: any) {
      setResponseMessage({ 
        type: "error", 
        message: "Not eligible for this lender."
      });
      setTimeout(() => { window.location.href = "/personal-loans"; }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans">
      <div className="h-48 bg-[#08101E] w-full absolute top-0 left-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a44] to-transparent opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center p-4 pt-12 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white"
        >
          <div className="text-center mb-6">
            <img src="/image/flexsalary-color-black.webp" alt="FlexSalary" className="h-6 mx-auto mb-2" />
            <h2 className="text-xl font-black text-[#08101E]">Complete Application</h2>
            <p className="text-gray-500 text-xs mt-1">Verify for <span className="text-[#FF7819] font-bold">Instant Credit</span></p>
          </div>

          {responseMessage && (
            <div className={`mb-4 p-3 rounded-xl text-center text-xs font-bold border ${
              responseMessage.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'
            }`}>
              {responseMessage.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Row 1: Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">First Name</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Last Name (Optional)</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
            </div>

            {/* Row 2: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Mobile Number</label>
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required maxLength={10} className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
            </div>

            {/* Row 3: Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required maxLength={6} className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]" />
              </div>
            </div>

            {/* Row 4: Employment */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Employment Type</label>
              <select name="employment_type" value={formData.employment_type} onChange={handleChange} required className="w-full p-3 text-sm bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#FF7819]">
                <option value="">Select Type</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
              </select>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-start gap-2">
              <input 
                type="checkbox" 
                checked={formData.consent} 
                required 
                className="mt-1 accent-[#FF7819] w-3 h-3" 
                onChange={(e) => setFormData({...formData, consent: e.target.checked})} 
              />
              <p className="text-[10px] text-gray-500 leading-tight">
                I authorize <span className="font-bold text-[#08101E]">CoverMantra</span> to share my details with Vivifi (FlexSalary) for loan processing.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !formData.consent}
              className={`w-full py-4 text-white text-sm font-black rounded-2xl transition-all active:scale-95 ${
                loading ? "bg-gray-400" : "bg-[#FF7819] hover:bg-[#e66a15] shadow-lg shadow-[#FF7819]/20"
              }`}
            >
              {loading ? "Verifying..." : "Confirm & Apply Now"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}