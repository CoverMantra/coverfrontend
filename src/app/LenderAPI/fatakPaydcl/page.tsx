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
    home_address: "",
    office_address: "",
    emp_code: "",
    type_of_residence: "",
    company_name: "",
    consent: false,
    consent_timestamp: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showModal = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setResponseMessage({ type, message });
  };

  const submitLenderAPI = async (payload: typeof formData) => {
    setLoading(true);
    try {
      const response = await api.post("/api/fatakPay/register/dcl", payload);
      const apiData = response.data?.data;
      if (apiData?.success && apiData?.message === "You are eligible.") {
        showModal("✅ You are eligible!", "success");
        setTimeout(() => {
          window.location.href = "https://fatakpay.onelink.me/2uSI/652_IUXYC?utm_medium=";
        }, 2000);
      } else {
        showModal("Not eligible for this lender. Try other lenders.", "error");
        setTimeout(() => { window.location.href = "/personal-loans"; }, 2000);
      }
    } catch (err: any) {
      showModal("Not eligible for this lender. Try other lenders.", "error");
      setTimeout(() => { window.location.href = "/personal-loans"; }, 2000);
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
        const mappedEmployment = employmentMap[user.employment as keyof typeof employmentMap] || "";

        setFormData((prev) => ({
          ...prev,
          mobile: user.phone || "",
          first_name: user.name || "",
          dob: user.dob || "",
          email: user.email || "",
          pincode: user.pincode || "",
          pan: user.pan || "",
          employment_type_id: mappedEmployment,
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
    <div className="min-h-screen bg-[#FFF4E5] font-sans">
      
      {/* Modal / Feedback Overlay */}
      <AnimatePresence>
        {responseMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#08101E]/80 backdrop-blur-md z-[100] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex flex-col items-center max-w-sm w-full p-8 rounded-[2.5rem] shadow-2xl bg-white border-4 ${
                responseMessage.type === "success" ? "border-green-500" : "border-red-500"
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
              <h3 className="text-2xl font-black text-[#08101E] mb-2">
                {responseMessage.type === "success" ? "Great!" : "Oops!"}
              </h3>
              <p className="text-center text-gray-600 font-medium leading-relaxed">
                {responseMessage.message}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-400">
                <div className="w-4 h-4 border-2 border-gray-200 border-t-[#FF7819] rounded-full animate-spin"></div>
                Redirecting...
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <div className="h-72 bg-[#08101E] w-full absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white">FatakPay <span className="text-[#FF7819]">Credit Line</span></h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">Quick verification for instant credit access</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center p-4 pt-48 md:pt-56 pb-20">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="max-w-2xl w-full bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormGroup label="Mobile Number">
              <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="98XXXXXXXX" type="text" className="input-style" required />
            </FormGroup>
            
            <FormGroup label="First Name">
              <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="John" type="text" className="input-style" required />
            </FormGroup>

            <FormGroup label="Last Name">
              <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Doe" type="text" className="input-style" required />
            </FormGroup>

            <FormGroup label="Date of Birth">
              <input name="dob" value={formData.dob} onChange={handleChange} type="date" className="input-style" required />
            </FormGroup>

            <FormGroup label="Email Address">
              <input name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" type="email" className="input-style" required />
            </FormGroup>

            <FormGroup label="PAN Card Number">
              <input name="pan" value={formData.pan} onChange={handleChange} placeholder="ABCDE1234F" type="text" className="input-style uppercase tracking-widest font-mono" required maxLength={10} />
            </FormGroup>

            <FormGroup label="Area Pincode">
              <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="110001" type="text" className="input-style" required maxLength={6} />
            </FormGroup>

            <FormGroup label="Employment Status">
              <select name="employment_type_id" value={formData.employment_type_id} onChange={handleChange} className="input-style bg-gray-50" required>
                <option value="">Select Type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </FormGroup>
          </div>

          <div className="mt-8 p-4 bg-[#FFF4E5] rounded-2xl border border-[#FF7819]/10 flex items-start gap-3">
            <input 
              type="checkbox" 
              name="consent" 
              checked={formData.consent} 
              onChange={handleChange} 
              className="mt-1 w-5 h-5 accent-[#FF7819]" 
              required 
            />
            <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
              I authorize <span className="font-bold text-[#08101E]">CoverMantra</span> and its partner <span className="font-bold text-[#08101E]">FatakPay</span> to verify my details and check my credit eligibility for financial products.
            </p>
          </div>

          <button
            type="submit"
            disabled={!formData.consent || loading || isLoading}
            className={`w-full mt-8 py-5 text-white font-black text-lg rounded-[1.5rem] shadow-xl shadow-[#FF7819]/30 transition-all active:scale-95 ${
              !formData.consent || loading || isLoading 
              ? "bg-gray-300 cursor-not-allowed shadow-none" 
              : "bg-[#FF7819] hover:bg-[#e66a15]"
            }`}
          >
            {loading || isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : "Check Eligibility"}
          </button>
        </motion.form>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 1rem;
          background-color: #f9fafb;
          border: 1px solid #f3f4f6;
          border-radius: 1rem;
          outline: none;
          transition: all 0.2s;
          color: #08101E;
          font-weight: 500;
        }
        .input-style:focus {
          border-color: #FF7819;
          background-color: white;
          box-shadow: 0 0 0 4px rgba(255, 120, 25, 0.1);
        }
      `}</style>
    </div>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] uppercase font-black text-gray-400 ml-2 tracking-wider">{label}</label>
      {children}
    </div>
  );
}