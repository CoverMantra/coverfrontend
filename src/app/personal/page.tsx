"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Briefcase, IndianRupee, Calendar, ShieldCheck, Upload } from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    salaryMode: "",
    bankName: "",
    salarySlip: "",
    address: "",
    state: "",
    city: "",
    businessName: "",
    businessType: "",
    doesFileITR: "",
    doesFileGST: "",
    dob: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      setFormData((prev) => ({
        ...prev,
        [name]: files && files.length > 0 ? files[0].name : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify(formData));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#FF7819]/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#08101E] text-[#FF7819] mb-4 shadow-xl">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#08101E] tracking-tight">Complete Application</h2>
          <p className="text-gray-500 mt-2 font-medium">Please provide your personal and financial details to continue</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#FF7819]/10 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Fields */}
            {[
              { name: "name", placeholder: "Full Name", icon: <User size={18} /> },
              { name: "email", placeholder: "Email Address", type: "email", icon: <Mail size={18} /> },
              { name: "phone", placeholder: "Phone Number", type: "tel", icon: <Phone size={18} /> },
              { name: "pan", placeholder: "PAN Card Number", icon: <ShieldCheck size={18} /> },
              { name: "dob", placeholder: "Date of Birth", type: "date", icon: <Calendar size={18} /> },
              { name: "loanAmount", placeholder: "Requested Loan Amount", type: "number", icon: <IndianRupee size={18} /> },
              { name: "income", placeholder: "Monthly Income", type: "number", icon: <IndianRupee size={18} /> },
              { name: "bankName", placeholder: "Primary Bank Name", icon: <Briefcase size={18} /> },
              { name: "pincode", placeholder: "Pincode", icon: <MapPin size={18} /> },
              { name: "city", placeholder: "City", icon: <MapPin size={18} /> },
              { name: "state", placeholder: "State", icon: <MapPin size={18} /> },
              { name: "businessName", placeholder: "Business Name (If any)", icon: <Briefcase size={18} /> },
            ].map((field) => (
              <div key={field.name} className="relative group">
                <label className="text-xs font-bold text-[#08101E]/40 uppercase tracking-widest ml-1 mb-2 block">
                  {field.placeholder}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF7819] transition-colors">
                    {field.icon}
                  </span>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full bg-[#FFF4E5]/30 border border-transparent focus:border-[#FF7819]/20 focus:bg-white rounded-2xl px-12 py-4 text-[#08101E] font-medium outline-none transition-all duration-300 shadow-inner"
                  />
                </div>
              </div>
            ))}

            {/* Address Field - Span 2 columns */}
            <div className="md:col-span-2 group">
              <label className="text-xs font-bold text-[#08101E]/40 uppercase tracking-widest ml-1 mb-2 block">Full Address</label>
              <input
                name="address"
                placeholder="Complete Residential Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-[#FFF4E5]/30 border border-transparent focus:border-[#FF7819]/20 focus:bg-white rounded-2xl px-6 py-4 text-[#08101E] font-medium outline-none transition-all duration-300 shadow-inner"
              />
            </div>

            {/* Select Menus */}
            {[
              { name: "employeeType", label: "Employee Type", options: ["Salaried", "Self-Employed"] },
              { name: "salaryMode", label: "Salary Mode", options: ["Bank Transfer", "Cash", "Cheque"] },
              { name: "doesFileITR", label: "File ITR?", options: ["Yes", "No"] },
              { name: "doesFileGST", label: "File GST?", options: ["Yes", "No"] },
            ].map((select) => (
              <div key={select.name}>
                <label className="text-xs font-bold text-[#08101E]/40 uppercase tracking-widest ml-1 mb-2 block">{select.label}</label>
                <select
                  name={select.name}
                  value={formData[select.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full bg-[#FFF4E5]/30 border border-transparent focus:border-[#FF7819]/20 focus:bg-white rounded-2xl px-6 py-4 text-[#08101E] font-medium outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Select {select.label}</option>
                  {select.options.map(opt => <option key={opt} value={opt.toLowerCase()}>{opt}</option>)}
                </select>
              </div>
            ))}

            {/* File Upload */}
            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#08101E]/40 uppercase tracking-widest ml-1 mb-2 block">Proof of Income</label>
              <div className="relative flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#FF7819]/20 rounded-[2rem] bg-[#FFF4E5]/20 hover:bg-[#FFF4E5]/40 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 text-[#FF7819] mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-[#08101E] font-bold">
                      {formData.salarySlip ? formData.salarySlip : "Upload Salary Slip / Income Proof"}
                    </p>
                  </div>
                  <input type="file" name="salarySlip" className="hidden" onChange={handleChange} />
                </label>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,120,25,0.2)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full mt-10 bg-[#FF7819] text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#e66a12] transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Continue to Dashboard
          </motion.button>
        </form>

        <p className="text-center mt-8 text-gray-400 text-sm font-medium">
          © 2026 CoverMantra. All your data is encrypted and 100% secure.
        </p>
      </motion.div>
    </div>
  );
}