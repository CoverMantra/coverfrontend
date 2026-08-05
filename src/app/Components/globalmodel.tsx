"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/modelcontext";
import Cookies from "js-cookie";
import Link from "next/link";
import { registerUser } from "../APIs/utils";
import { 
  X, ShieldCheck, MapPin, Briefcase, IndianRupee, User, 
  Mail, Phone, Calendar, Landmark, ArrowRight, ArrowLeft 
} from "lucide-react";

interface GlobalModalProps {
  onFormSubmit?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ onFormSubmit }) => {
  const { isOpen, closeModal } = useModal();
  const [currentStep, setCurrentStep] = useState(1);

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1); // Reset to step 1 when modal opens
      setErrorMsg(""); // Clear error message
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
    
    if (name === "pan") {
      const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
      setForm(prev => ({ ...prev, [name]: cleaned }));
      return;
    }

    if (name === "pincode") {
      const cleaned = value.replace(/\D/g, "").slice(0, 6);
      setForm(prev => ({ ...prev, [name]: cleaned }));
      if (cleaned.length === 6) {
        try {
          const res = await fetch(`https://api.postalpincode.in/pincode/${cleaned}`);
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
      return;
    }

    if (name === "loanAmount" || name === "income") {
      const cleaned = value.replace(/\D/g, "");
      setForm(prev => ({ ...prev, [name]: cleaned }));
      return;
    }

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || isSubmitting) return;
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const payload: any = { 
        ...form, 
        pan: form.pan.toUpperCase(),
        employment: form.employeeType,
        city: form.city || "Unknown",
        state: form.state || "Unknown",
        consent: true,
        consentMessage: "I agree to the Terms & Conditions & Privacy Policy and to be contacted via Email, WhatsApp, SMS,RCS or Call regarding my dynamic loan application."
      };
      await registerUser(payload);
      Cookies.set("loanFormData", JSON.stringify(form), { expires: 7 });
      Cookies.set("loanFormSubmitted", "true", { expires: 7 });
      Cookies.set("isNewUserRegistration", "true", { expires: 1 });
      setIsSubmitting(false);
      onFormSubmit?.();
      closeModal();
      window.location.href = "/apply-success";
    } catch (err: any) {
      setIsSubmitting(false);
      const serverError = err.response?.data?.message || err.response?.data || "Failed to register. Please check your details.";
      setErrorMsg(serverError);
    }
  };

  if (!isOpen) return null;

  // Real-time format validators
  const isValidEmail = (emailStr: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailStr.trim());
  };

  const isValidPAN = (panStr: string) => {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panStr.trim().toUpperCase());
  };

  // Step Validation Real-time Checkers
  const isStep1Valid = form.name.trim().length >= 2 && isValidEmail(form.email) && form.phone && form.gender && form.dob;
  const isStep2Valid = isValidPAN(form.pan) && form.pincode.length === 6 && form.city && form.state && Number(form.loanAmount) >= 10000 && Number(form.income) > 0;

  // Max date for DOB input (18 years ago)
  const getMaxDobDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return maxDate.toISOString().split("T")[0];
  };

  // Dynamic validation helper error messages for UI feedback
  const nameError = form.name && form.name.trim().length < 2 ? "Name must be at least 2 characters long" : "";
  const emailError = form.email && !isValidEmail(form.email) ? "Invalid email format" : "";
  const panError = form.pan && !isValidPAN(form.pan) ? "PAN format must be ABCDE1234F" : "";
  const pincodeError = form.pincode && form.pincode.length < 6 ? "Pincode must be exactly 6 digits" : "";
  const loanAmountError = form.loanAmount && Number(form.loanAmount) < 10000 ? "Minimum loan amount is ₹10,000" : "";
  const incomeError = form.income && Number(form.income) < 5000 ? "Minimum monthly income is ₹5,000" : "";
  
  const isSalariedValid = form.employeeType === "salaried" ? (form.salaryMode && form.bankName) : true;
  const isSelfEmployedValid = form.employeeType === "self-employed" ? (form.businessName && form.businessType && form.doesITR && form.doesGST) : true;
  const isStep3Valid = form.employeeType && isSalariedValid && isSelfEmployedValid && consent;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-[100000] p-3 sm:p-4 bg-[#08101E]/60 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          className="relative w-full max-w-4xl bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20 flex flex-col max-h-[92vh]"
        >
          {/* Header Banner */}
          <div className="bg-[#08101E] px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="bg-[#FF7819] p-2 rounded-xl text-white shadow-[0_4px_12px_rgba(255,120,25,0.3)]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-white font-black tracking-tight text-lg sm:text-xl">Loan Application</h3>
                <p className="text-[#FF7819] text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Secure 256-bit Encryption</p>
              </div>
            </div>
            <button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/75 hover:text-white">
              <X size={22} />
            </button>
          </div>

          {/* Premium Multi-Step Progress Tracker */}
          <div className="bg-[#FFF4E5]/40 px-6 sm:px-12 py-4 border-b border-[#FF7819]/10 flex justify-between items-center relative select-none shrink-0">
            <div className="absolute left-12 right-12 top-1/2 h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
            <div 
              className="absolute left-12 top-1/2 h-[2px] bg-[#FF7819] -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${currentStep === 1 ? 0 : currentStep === 2 ? 50 : 100}%` }}
            />
            
            {[
              { step: 1, label: "Personal" },
              { step: 2, label: "Financial" },
              { step: 3, label: "Verification" }
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border transition-all duration-300 ${
                    currentStep >= s.step 
                      ? "bg-[#FF7819] border-[#FF7819] text-white shadow-[0_4px_10px_rgba(255,120,25,0.3)]" 
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {s.step}
                </div>
                <span className={`text-[10px] font-black uppercase tracking-wider mt-1.5 hidden sm:block ${currentStep >= s.step ? "text-[#08101E]" : "text-gray-400"}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form Area with Scroll Support */}
          <div className="p-5 sm:p-8 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-gradient-to-b from-white to-[#FFF4E5]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
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
              
              {/* STEP 1: PERSONAL PARAMETERS */}
              {currentStep === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} icon={<User size={18}/>} placeholder="As per PAN" error={nameError} />
                  <InputField label="Email Address" name="email" value={form.email} onChange={handleChange} icon={<Mail size={18}/>} type="email" placeholder="example@domain.com" error={emailError} />
                  <InputField label="Phone" name="phone" value={form.phone} onChange={handleChange} icon={<Phone size={18}/>} readOnly={true} />
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1">Gender *</label>
                    <div className="relative">
                      <select name="gender" value={form.gender} onChange={handleChange} className="select-style" required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <InputField label="Date of Birth" name="dob" value={form.dob} onChange={handleChange} icon={<Calendar size={18}/>} type="date" max={getMaxDobDate()} />
                </motion.div>
              )}

              {/* STEP 2: FINANCIAL PARAMETERS */}
              {currentStep === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <InputField label="PAN Number" name="pan" value={form.pan} onChange={handleChange} icon={<ShieldCheck size={18}/>} placeholder="ABCDE1234F" className="uppercase tracking-widest font-mono" maxLength={10} error={panError} />
                  <InputField label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} icon={<MapPin size={18}/>} placeholder="110001" maxLength={6} error={pincodeError} />
                  <InputField label="City" name="city" value={form.city} onChange={handleChange} icon={<MapPin size={18}/>} placeholder="Auto-fetched" />
                  <InputField label="State" name="state" value={form.state} onChange={handleChange} icon={<MapPin size={18}/>} placeholder="Auto-fetched" />
                  <InputField label="Loan Amount" name="loanAmount" value={form.loanAmount} onChange={handleChange} icon={<IndianRupee size={18}/>} type="number" placeholder="Min ₹10,000" error={loanAmountError} />
                  <InputField label="Monthly Income" name="income" value={form.income} onChange={handleChange} icon={<IndianRupee size={18}/>} type="number" placeholder="Net take-home salary" error={incomeError} />
                </motion.div>
              )}

              {/* STEP 3: EMPLOYMENT VERIFICATION & CONSENT */}
              {currentStep === 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1">Employee Type *</label>
                      <select name="employeeType" value={form.employeeType} onChange={handleChange} className="select-style" required>
                        <option value="">Select Type</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self Employed</option>
                      </select>
                    </div>
                  </div>

                  {/* Salaried Sub-Form */}
                  {form.employeeType === "salaried" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 sm:p-6 bg-[#FF7819]/5 rounded-[2rem] border border-[#FF7819]/10">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black text-[#08101E]/50 uppercase tracking-widest ml-1">Bank Name *</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7819]"><Landmark size={18} /></span>
                          <select name="bankName" value={form.bankName} onChange={handleChange} className="select-style !bg-white pl-12" required>
                            <option value="">Select Bank</option>
                            <option value="HDFC">HDFC Bank</option>
                            <option value="SBI">SBI</option>
                            <option value="ICICI">ICICI</option>
                            <option value="AXIS">Axis Bank</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black text-[#08101E]/50 uppercase tracking-widest ml-1">Salary Mode *</label>
                        <select name="salaryMode" value={form.salaryMode} onChange={handleChange} className="select-style !bg-white" required>
                          <option value="">Select Mode</option>
                          <option value="bank-transfer">Bank Transfer</option>
                          <option value="cash">Cash</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Self-Employed Sub-Form (Preserving fields map architecture) */}
                  {form.employeeType === "self-employed" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 sm:p-6 bg-[#FF7819]/5 rounded-[2rem] border border-[#FF7819]/10">
                      <InputField label="Business Name" name="businessName" value={form.businessName} onChange={handleChange} icon={<Briefcase size={18}/>} placeholder="Company / Shop Name" className="!bg-white" />
                      <InputField label="Business Type" name="businessType" value={form.businessType} onChange={handleChange} icon={<Briefcase size={18}/>} placeholder="Trader / Manufacturer / Service" className="!bg-white" />
                      
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black text-[#08101E]/50 uppercase tracking-widest ml-1">ITR Filed? *</label>
                        <select name="doesITR" value={form.doesITR} onChange={handleChange} className="select-style !bg-white" required>
                          <option value="">Select Option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-black text-[#08101E]/50 uppercase tracking-widest ml-1">GST Filed? *</label>
                        <select name="doesGST" value={form.doesGST} onChange={handleChange} className="select-style !bg-white" required>
                          <option value="">Select Option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Global Verification Elements */}
                  <div className="pt-4 border-t border-gray-100">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} className="mt-1 w-5 h-5 accent-[#FF7819] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-500 font-medium group-hover:text-[#08101E] transition-colors leading-relaxed">
                        I agree to the <Link href="/terms" target="_blank" onClick={(e) => e.stopPropagation()} className="text-[#FF7819] hover:underline font-bold">Terms & Conditions</Link> & <Link href="/privacy" target="_blank" onClick={(e) => e.stopPropagation()} className="text-[#FF7819] hover:underline font-bold">Privacy Policy</Link> and to be contacted via Email, WhatsApp, SMS,RCS or Call regarding my dynamic loan application.
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4 shrink-0">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-gray-200 rounded-2xl font-bold text-sm text-[#08101E] bg-white hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    disabled={currentStep === 1 ? !isStep1Valid : !isStep2Valid}
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF7819] text-white rounded-2xl font-black uppercase tracking-wider text-xs shadow-[0_4px_12px_rgba(255,120,25,0.2)] disabled:opacity-40 disabled:shadow-none transition-all hover:bg-[#e66a15]"
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                ) : (
                  <motion.button
                    whileHover={isStep3Valid && !isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={isStep3Valid && !isSubmitting ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={!isStep3Valid || isSubmitting}
                    className="inline-flex items-center justify-center px-10 py-3.5 bg-[#FF7819] text-white rounded-2xl font-black uppercase tracking-wider text-xs shadow-[0_6px_20px_rgba(255,120,25,0.3)] disabled:opacity-40 disabled:shadow-none transition-all hover:bg-[#e66a15] min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Submit Application"
                    )}
                  </motion.button>
                )}
              </div>

            </form>
          </div>
        </motion.div>
      </div>

      {/* Global CSS Inject */}
      <style jsx global>{`
        .select-style {
          width: 100%;
          padding: 0.875rem 1rem;
          background-color: rgba(255, 244, 229, 0.5);
          border: 1px solid transparent;
          border-radius: 1rem;
          outline: none;
          font-weight: 700;
          font-size: 0.875rem;
          color: #08101E;
          transition: all 0.2s;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2308101E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1rem;
        }
        .select-style:focus {
          border-color: rgba(255, 120, 25, 0.3);
          background-color: white;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF7819; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </AnimatePresence>
  );
};

// Reusable Sub-Component for Clean Input Fields
function InputField({ label, icon, error, className = "", ...props }: any) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[10px] font-black text-[#08101E]/40 uppercase tracking-widest ml-1">{label} *</label>
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7819] pointer-events-none">
          {icon}
        </span>
        <input
          {...props}
          className={`w-full bg-[#FFF4E5]/50 border ${error ? 'border-red-500' : 'border-transparent focus:border-[#FF7819]/30'} focus:bg-white rounded-2xl px-12 py-3.5 text-[#08101E] font-bold text-sm outline-none transition-all shadow-inner placeholder:text-gray-300 ${className}`}
          required
        />
      </div>
      {error && <p className="text-red-500 text-[9px] font-bold uppercase tracking-wider ml-1">{error}</p>}
    </div>
  );
}

export default GlobalModal;