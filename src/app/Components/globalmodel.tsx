"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/modelcontext";
import Cookies from "js-cookie";
import { registerUser } from "../APIs/utils";
import { X, ShieldCheck, MapPin, Briefcase, IndianRupee, User, Mail, Phone, Calendar, Landmark } from "lucide-react";

interface GlobalModalProps {
  onFormSubmit?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ onFormSubmit }) => {
  const { isOpen, closeModal } = useModal();

  const emptyForm = React.useMemo(() => ({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    state: "",
    city: "",
    dob: "",
    gender: "",
    salaryMode: "",
    bankName: "",
    salarySlip: "",
    businessName: "",
    businessType: "",
    doesITR: "",
    doesGST: "",
  }), []);

  const [form, setForm] = useState(emptyForm);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const savedFormData = Cookies.get("loanFormData");
      const savedPhone = Cookies.get("co_phone");
      if (savedPhone && savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        setForm(prev => ({ 
          ...emptyForm, 
          ...parsedData, 
          phone: savedPhone 
        }));
      } else {
        setForm(prev => ({ ...emptyForm, phone: savedPhone || "" }));
      }
    }
  }, [isOpen, emptyForm]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (name === "pincode" && value.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await res.json();
        if (data?.[0]?.Status === "Success" && data?.[0]?.PostOffice?.length > 0) {
          const postOffice = data[0].PostOffice[0];
          setForm(prev => ({
            ...prev,
            city: postOffice.District || "",
            state: postOffice.State || "",
          }));
        }
      } catch (err) {
        console.error("Postal lookup failed:", err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    try {
      const payload: any = { 
        ...form, 
        pan: form.pan.toUpperCase(),
        employment: form.employeeType,
        city: form.city || "Unknown",
        state: form.state || "Unknown"
      };
      await registerUser(payload);
      Cookies.set("loanFormData", JSON.stringify(form), { expires: 7 });
      Cookies.set("loanFormSubmitted", "true", { expires: 7 });
      onFormSubmit?.();
      closeModal();
      window.location.href = "/profile";
    } catch (err: any) {
      alert("Failed to register. Please check your details.");
    }
  };

  if (!isOpen) return null;

  const isSubmitDisabled = !form.name || !form.email || !form.phone || !consent;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 bg-[#08101E]/60 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20"
        >
          {/* Header Banner */}
          <div className="bg-[#08101E] px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#FF7819] p-2 rounded-xl text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-white font-black tracking-tight text-xl">Loan Application</h3>
                <p className="text-[#FF7819] text-[10px] font-bold uppercase tracking-widest">Secure 256-bit Encryption</p>
              </div>
            </div>
            <button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
              <X size={24} />
            </button>
          </div>

          <div className="p-8 md:p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Inputs Group */}
                {[
                  { name: "name", label: "Full Name", icon: <User size={18}/>, placeholder: "As per PAN" },
                  { name: "email", label: "Email", icon: <Mail size={18}/>, type: "email" },
                  { name: "phone", label: "Phone", icon: <Phone size={18}/>, readOnly: true },
                  { name: "pan", label: "PAN Number", icon: <ShieldCheck size={18}/>, placeholder: "ABCDE1234F" },
                  { name: "loanAmount", label: "Loan Amount", icon: <IndianRupee size={18}/>, type: "number" },
                  { name: "income", label: "Monthly Income", icon: <IndianRupee size={18}/>, type: "number" },
                  { name: "pincode", label: "Pincode", icon: <MapPin size={18}/> },
                  { name: "dob", label: "Date of Birth", icon: <Calendar size={18}/>, type: "date" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1 mb-1.5 block">{field.label}</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7819]">{field.icon}</span>
                      <input
                        {...field}
                        value={(form as any)[field.name]}
                        onChange={handleChange}
                        className="w-full bg-[#FFF4E5]/50 border border-transparent focus:border-[#FF7819]/30 focus:bg-white rounded-2xl px-12 py-3.5 text-[#08101E] font-bold outline-none transition-all shadow-inner"
                        required
                      />
                    </div>
                  </div>
                ))}

                {/* Dropdowns */}
                <div className="space-y-5 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div>
                    <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1 mb-1.5 block">Employee Type</label>
                    <select name="employeeType" value={form.employeeType} onChange={handleChange} className="w-full bg-[#FFF4E5]/50 rounded-2xl px-4 py-3.5 font-bold outline-none border border-transparent focus:border-[#FF7819]/30" required>
                      <option value="">Select Type</option>
                      <option value="salaried">Salaried</option>
                      <option value="self-employed">Self Employed</option>
                    </select>
                   </div>
                   <div>
                    <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1 mb-1.5 block">Gender</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className="w-full bg-[#FFF4E5]/50 rounded-2xl px-4 py-3.5 font-bold outline-none border border-transparent focus:border-[#FF7819]/30" required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                   </div>
                </div>

                {/* Conditional Fields: Salaried */}
                {form.employeeType === "salaried" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 p-6 bg-[#FF7819]/5 rounded-[2rem] border border-[#FF7819]/10">
                    <div className="relative">
                      <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest mb-1.5 block">Bank Name</label>
                      <div className="relative">
                        <Landmark size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7819]" />
                        <select name="bankName" value={form.bankName} onChange={handleChange} className="w-full bg-white rounded-2xl px-12 py-3.5 font-bold outline-none shadow-sm" required>
                          <option value="">Select Bank</option>
                          <option value="HDFC">HDFC Bank</option>
                          <option value="SBI">SBI</option>
                          <option value="ICICI">ICICI</option>
                          <option value="AXIS">Axis Bank</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest mb-1.5 block">Salary Mode</label>
                      <select name="salaryMode" value={form.salaryMode} onChange={handleChange} className="w-full bg-white rounded-2xl px-4 py-3.5 font-bold outline-none shadow-sm" required>
                        <option value="">Mode</option>
                        <option value="bank-transfer">Bank Transfer</option>
                        <option value="cash">Cash</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Consent & Submit */}
              <div className="pt-6 border-t border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} className="mt-1 w-5 h-5 accent-[#FF7819]" />
                  <span className="text-sm text-gray-500 font-medium group-hover:text-[#08101E] transition-colors">
                    I agree to be contacted via Email, WhatsApp, SMS, or Call regarding my loan application.
                  </span>
                </label>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitDisabled}
                  className="w-full mt-8 bg-[#FF7819] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(255,120,25,0.3)] disabled:opacity-50 disabled:shadow-none transition-all"
                >
                  Submit Application
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GlobalModal;