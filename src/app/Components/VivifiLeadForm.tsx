"use client";
import React, { useState, useEffect } from "react";
import api from "@/lib/axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const VivifiLeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "", 
    gender: "male",
    pan: "",
    pincode: "",
    income: "",
    employmentType: "salaried",
    consent: false,
  });

  // --- LOGIC: Pre-fill User Data (Aapke reference code se) ---
  useEffect(() => {
    const fetchExistingUser = async () => {
      const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (!storedPhone) return;

      setIsLoadingUser(true);
      try {
        const { data } = await api.post("/api/user/profile", { phone: storedPhone });
        const user = data.user;
        if (user) {
          // Name split logic (First Name & Last Name)
          const nameParts = user.name ? user.name.split(" ") : ["", ""];
          setFormData((prev) => ({
            ...prev,
            phone: user.phone || "",
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            email: user.email || "",
            dob: user.dob || "",
            pan: user.pan || "",
            pincode: user.pincode || "",
          }));
          toast.success("Details pre-filled from your profile!");
        }
      } catch (err) {
        console.error("Auto-fill error", err);
      } finally {
        setIsLoadingUser(false);
      }
    };
    fetchExistingUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return toast.error("Please accept the consent");
    
    setLoading(true);
    try {
      // API call to our Next.js backend
      const { data } = await api.post("/api/vivifi/register", formData);

      if (data.success && data.redirectUrl) {
        toast.success("Eligible! Redirecting...");
        window.location.href = data.redirectUrl;
      } else {
        toast.error(data.message || "Currently not eligible.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Apply for FlexSalary</h2>
      
      {isLoadingUser && <p className="text-center text-blue-500 text-sm animate-pulse mb-4">Loading your profile...</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Mobile</label>
          <input type="tel" name="phone" value={formData.phone} maxLength={10} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">PAN</label>
          <input type="text" name="pan" value={formData.pan} maxLength={10} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg uppercase" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Email</label>
          <input type="email" name="email" value={formData.email} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} maxLength={6} required onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase">Employment Type</label>
          <select name="employmentType" value={formData.employmentType} onChange={handleChange} className="w-full p-3 bg-gray-50 border rounded-lg">
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self-Employed</option>
          </select>
        </div>

        <div className="md:col-span-2 flex items-start gap-2 py-2">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1" required />
          <label className="text-xs text-gray-600">
            I agree to share my details with Vivifi India Finance Pvt. Ltd. and authorize them to check my credit report.
          </label>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading || !formData.consent}
            className={`w-full p-4 text-white font-bold rounded-xl shadow-lg transition-all ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? "Checking Eligibility..." : "Instant Approval"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VivifiLeadForm;