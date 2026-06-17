"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../lib/axios";

interface FormField {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "number" | "date" | "select";
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  uppercase?: boolean;
  options?: Array<{ label: string; value: string }>;
}

interface FormConfig {
  title: string;
  logo: string;
  fields: FormField[];
  consentText: string;
  redirectUrlOnSuccess: string;
}

interface LenderFormContainerProps {
  lenderId: string;
}

export default function LenderFormContainer({ lenderId }: LenderFormContainerProps) {
  // Normalize lenderId to lowercase for API calls
  const normalizedLenderId = lenderId.toLowerCase();

  const [config, setConfig] = useState<FormConfig | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isLoadingConfig, setIsLoadingConfig] = useState(true);
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showModal = (message: string, type: "success" | "error" | "info" = "info") => {
    setResponseMessage({ type, message });
  };

  // Fetch form schema config
  useEffect(() => {
    if (!normalizedLenderId) return;

    const fetchConfigAndUser = async () => {
      setIsLoadingConfig(true);
      try {
        const { data: formConfig } = await api.get(`/api/partners/${normalizedLenderId}/form-config`);
        setConfig(formConfig);

        // Fetch User profile to auto-fill fields
        const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
        if (storedPhone) {
          try {
            const { data: userData } = await api.post("/api/user/profile", { phone: storedPhone });
            const user = userData.user;
            if (user) {
              const filledData = autoFillFields(formConfig.fields, user);
              setFormData(filledData);
            }
          } catch (profileError) {
            console.error("Failed to pre-populate user profile:", profileError);
          }
        } else {
          // Initialize empty fields if no user profile
          const initialData: Record<string, any> = {};
          formConfig.fields.forEach((f: FormField) => {
            initialData[f.name] = "";
          });
          setFormData(initialData);
        }
      } catch (error) {
        console.error("Failed to load lender form configuration:", error);
        showModal("Could not load form configuration. Please try again later.", "error");
      } finally {
        setIsLoadingConfig(false);
      }
    };

    fetchConfigAndUser();
  }, [normalizedLenderId]);

  // Dynamic Form Field Pre-fill Mapper
  const autoFillFields = (fields: FormField[], user: any) => {
    const data: Record<string, any> = {};
    const employmentMap: Record<string, string> = {
      Salaried: "Salaried",
      "Self-Employed": "Self-Employed",
      "Salaried Employee": "Salaried",
    };

    fields.forEach((field) => {
      const name = field.name;
      if (name === "phone" || name === "mobile") {
        data[name] = user.phone || "";
      } else if (name === "name") {
        data[name] = user.name || "";
      } else if (name === "first_name") {
        data[name] = user.name?.split(" ")[0] || "";
      } else if (name === "last_name") {
        data[name] = user.name?.split(" ").slice(1).join(" ") || "";
      } else if (name === "dob") {
        data[name] = user.dob || "";
      } else if (name === "email") {
        data[name] = user.email || "";
      } else if (name === "pan") {
        data[name] = user.pan || "";
      } else if (name === "pincode") {
        data[name] = user.pincode || "";
      } else if (name === "employmentType" || name === "employment_type_id") {
        data[name] = employmentMap[user.employment as string] || "";
      } else {
        data[name] = "";
      }
    });
    return data;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      showModal("⚠️ Please provide consent before submitting.", "info");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post(`/api/partners/${normalizedLenderId}/register`, {
        ...formData,
        consent: true,
        consent_timestamp: new Date().toISOString(),
      });

      if (data?.success) {
        showModal(
          `✅ Application Success! ${data.offer ? `Your Offer: ${data.offer}` : "You are eligible."}`,
          "success"
        );
        setTimeout(() => {
          window.location.href = data.redirectUrl || config?.redirectUrlOnSuccess || "/personal-loans";
        }, 3000);
      } else {
        showModal(data?.message || "Not eligible for this lender. Try other lenders.", "error");
        setTimeout(() => {
          window.location.href = "/personal-loans";
        }, 4000);
      }
    } catch (error: any) {
      const errMessage = error.response?.data?.message || "Not eligible for this lender. Try other lenders.";
      showModal(errMessage, "error");
      setTimeout(() => {
        window.location.href = "/personal-loans";
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingConfig) {
    return (
      <div className="min-h-screen bg-[#FFF4E5] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#FF7819]/20 border-t-[#FF7819] rounded-full animate-spin"></div>
          <p className="text-[#08101E] font-bold text-sm tracking-widest uppercase">Loading Application Form...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-[#FFF4E5] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center max-w-md w-full">
          <h2 className="text-2xl font-black text-red-600 mb-2">Error</h2>
          <p className="text-gray-500 font-bold mb-6">Could not load form configuration for this lender.</p>
          <a
            href="/personal-loans"
            className="inline-block bg-[#FF7819] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#08101E] transition-all"
          >
            Back to Lenders
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans">
      {/* Dynamic Alert Popup */}
      <AnimatePresence>
        {responseMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#08101E]/70 backdrop-blur-md z-[100] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`flex flex-col items-center max-w-sm w-full p-8 rounded-[3rem] shadow-2xl bg-white border-b-[10px] ${
                responseMessage.type === "success" ? "border-green-500" : "border-red-600"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${
                  responseMessage.type === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                }`}
              >
                {responseMessage.type === "success" ? (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-black text-[#08101E] tracking-tight">
                {responseMessage.type.toUpperCase()}
              </h3>
              <p className="text-center text-gray-500 font-bold mt-2 leading-tight">
                {responseMessage.message}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Banner */}
      <div className="h-72 bg-[#08101E] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#FF7819] rounded-full blur-[120px] opacity-20"></div>

        {config.logo && (
          <div className="relative h-12 w-48 mb-3 flex items-center justify-center">
            <img src={config.logo} alt={config.title} className="max-h-full max-w-full object-contain brightness-0 invert" />
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-3xl md:text-4xl font-black text-white italic tracking-tighter"
        >
          {config.title.toUpperCase()}
        </motion.h1>
        <p className="relative text-gray-400 text-[10px] md:text-xs tracking-[0.3em] uppercase mt-2 font-bold">
          Config-Driven Secure Application Flow
        </p>
      </div>

      {/* Dynamic Form Content */}
      <div className="relative z-10 flex justify-center px-4 -mt-20 pb-20">
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="max-w-2xl w-full bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.fields.map((field) => {
              const val = formData[field.name] || "";

              if (field.type === "select") {
                return (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase font-black text-[#FF7819] ml-4 tracking-widest">
                      {field.label}
                    </label>
                    <select
                      name={field.name}
                      value={val}
                      onChange={handleChange}
                      className="w-full p-4.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF7819] focus:bg-white outline-none transition-all font-bold text-sm text-[#08101E]"
                      required={field.required}
                    >
                      <option value="">Select Option</option>
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase font-black text-[#FF7819] ml-4 tracking-widest">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={val}
                    onChange={handleChange}
                    placeholder={field.placeholder || ""}
                    pattern={field.pattern || undefined}
                    required={field.required}
                    maxLength={field.name === "pan" ? 10 : undefined}
                    className={`w-full p-4.5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-[#FF7819] focus:bg-white outline-none transition-all font-bold text-sm text-[#08101E] placeholder:text-gray-300 ${
                      field.uppercase ? "uppercase tracking-[0.2em] font-mono" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Consent Checkbox */}
          <motion.label
            whileTap={{ scale: 0.98 }}
            className="mt-10 flex items-center gap-4 p-5 bg-[#08101E]/5 rounded-3xl border-2 border-transparent hover:border-[#FF7819]/20 transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              name="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-6 h-6 accent-[#FF7819] shrink-0"
              required
            />
            <span className="text-[11px] md:text-xs text-gray-600 font-bold leading-snug">
              {config.consentText}
            </span>
          </motion.label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!consent || loading}
            className={`w-full mt-10 py-6 rounded-[2rem] font-black text-white text-xl tracking-tighter shadow-2xl transition-all active:scale-95 ${
              !consent || loading
                ? "bg-gray-300 cursor-not-allowed shadow-none"
                : "bg-[#FF7819] hover:bg-[#08101E] shadow-[#FF7819]/30"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                SUBMITTING...
              </span>
            ) : (
              "SUBMIT APPLICATION"
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
