"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://www.covermantra.com";
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

  // 1. Fetch User Data to Pre-fill
  useEffect(() => {
    const fetchUser = async () => {
      const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (!storedPhone) return;

      try {
        const res = await axios.post(`${BASE_URL}/api/user/profile`, { phone: storedPhone });
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

  // 2. Submit Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // NOTE: Make sure this endpoint exists on your backend
      const response = await axios.post(`${BASE_URL}/api/vivifi/register`, formData);

      setResponseMessage({ type: "success", message: "Details Verified! Redirecting to FlexSalary..." });
      
      setTimeout(() => {
        window.location.href = VIVIFI_REDIRECT_URL;
      }, 2000);
    } catch (err: any) {
      setResponseMessage({ 
        type: "error", 
        message: err.response?.data?.message || "Something went wrong. Redirecting anyway..." 
      });
      setTimeout(() => { window.location.href = VIVIFI_REDIRECT_URL; }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        
        <div className="text-center mb-8">
          <img src="https://www.flexsalary.com/assets/images/logo.png" alt="FlexSalary" className="h-10 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">FlexSalary Application</h2>
          <p className="text-gray-500 text-sm">Verify your details to get instant credit line</p>
        </div>

        {responseMessage && (
          <div className={`mb-6 p-4 rounded-xl text-center font-medium ${responseMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {responseMessage.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          
          <input type="text" name="pan" placeholder="PAN Card Number" value={formData.pan} onChange={handleChange} required maxLength={10} className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 uppercase" />

          <div className="relative">
            <label className="text-[10px] absolute -top-2 left-3 bg-white px-1 text-gray-400">Monthly Income</label>
            <input type="number" name="monthly_income" placeholder="Monthly Income" value={formData.monthly_income} onChange={handleChange} required className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" checked={formData.consent} required className="mt-1" onChange={(e) => setFormData({...formData, consent: e.target.checked})} />
            <p className="text-[10px] text-gray-400 leading-tight">
              I authorize CoverMantra to share my details with Vivifi India Finance Pvt Ltd for loan processing.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || !formData.consent}
            className={`w-full py-4 text-white font-bold rounded-2xl shadow-lg transition-all ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Verifying..." : "Confirm & Apply"}
          </button>
        </form>
      </div>
    </div>
  );
}