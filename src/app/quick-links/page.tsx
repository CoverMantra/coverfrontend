"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoginModal from "../Components/LoginModal";
import { registerUser } from "../APIs/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShieldAlt, 
  FaBolt, 
  FaHandHoldingUsd, 
  FaChartLine, 
  FaCheckCircle 
} from "react-icons/fa";

const lenders = [
   {
    id: 1,
    name: "Money View",
    logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
    approval: "95%",
    amount: "Upto 10L",
    rate: "8% / mo",
    tenure: "6-18 months",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://moneyview.in/personal-loan?utm_source=covermantra",
  },
  {
    id: 2,
    name: "Zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
    approval: "95%",
    amount: "Upto 3L",
    rate: "1.5% / mo",
    tenure: "6-18 months",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea",
  },
  {
    id: 5,
    name: "FlexSalary (Vivifi)",
    logo: "https://www.flexsalary.com/images/global/flexsalary-color-black.webp",
    approval: "92%",
    amount: "Upto 3L",
    rate: "1.5% / mo",
    tenure: "Flexible",
    features: ["Credit Line", "Instant Transfer", "No Fixed EMI"],
    url: "https://online.flexsalary.com/CustomerLogin/Index?CampaignID=9192300#x",
  },
  {
    id: 3,
    name: "FatakPay Personal Loans",
    logo: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5L",
    rate: "12% - 35.95% p.a",
    tenure: "3-24 months",
    features: ["Instant Cash", "Digital KYC", "Flexible EMI"],
    url: "https://web.fatakpay.com/authentication/login?utm_source=651_TT83W?utm_medium=",
  },
  {
    id: 4,
    name: "FatakPay Short Term",
    logo: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5000",
    rate: "12% - 35.95% p.a",
    tenure: "3-24 months",
    features: ["Zero Paperwork", "Small Credit", "Instant Disbursal"],
    url: "https://web.fatakpay.com/authentication/login?utm_source=651_TT83W?utm_medium=",
  }
  
];

const emptyForm = {
  name: "", phone: "", email: "", employeeType: "", pan: "",
  pincode: "", loanAmount: "", income: "", dob: "", city: "", state: "", gender: ""
};

export default function Page() {
  const [form, setForm] = useState({ ...emptyForm });
  const [consent, setConsent] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedPhone = Cookies.get("co_phone");
    if (savedPhone) setForm(prev => ({ ...prev, phone: savedPhone }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return alert("Please agree to terms.");
    const isLoggedIn = !!Cookies.get("co_token");
    isLoggedIn ? await handleRegisterUser() : setLoginModalOpen(true);
  };

  const handleRegisterUser = async () => {
    try {
      await registerUser({ ...form, pan: form.pan.toUpperCase() });
      router.push("/personal-loans");
    } catch (err) {
      router.push("/personal-loans");
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF4E5] pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#FF7819] selection:text-white relative overflow-hidden">
      
      {/* 🔮 Background 3D Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF7819]/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ✨ Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#08101E] text-[#FF7819] text-[10px] md:text-xs font-black tracking-widest uppercase mb-6 shadow-2xl">
            <FaShieldAlt className="animate-pulse" /> Verified RBI Lenders
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-[#08101E] tracking-tighter mb-6 leading-tight uppercase italic">
            Compare & Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] to-[#FF690B]">Instant Loans</span> 💰
          </h2>
          <p className="text-[#08101E]/60 text-sm md:text-xl font-bold max-w-2xl mx-auto italic">
            Get instant access to verified lenders and apply online in minutes. No hidden charges, just pure transparency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* 🚀 LENDERS LIST SECTION */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lenders.map((lender, index) => (
                <motion.div 
                  key={lender.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ rotateY: -3, rotateX: 3, scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group bg-white p-8 rounded-[3rem] border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(255,120,25,0.15)] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Subtle 3D Depth Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/5 rounded-full -mr-16 -mt-16 group-hover:bg-[#FF7819]/10 transition-colors"></div>

                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center h-16 w-32 group-hover:scale-105 transition-transform">
                      <img src={lender.logo} alt={lender.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500 text-white px-4 py-1.5 rounded-full font-black shadow-lg shadow-green-500/20 text-[10px] tracking-tighter">
                      {lender.approval} SUCCESS Rate
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#08101E] mb-6 tracking-tight uppercase italic">{lender.name}</h3>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#FFF4E5]/50 p-4 rounded-2xl border border-[#FF7819]/5">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Max Amount</p>
                      <p className="text-sm font-black text-[#FF7819] flex items-center gap-1"><FaHandHoldingUsd /> {lender.amount}</p>
                    </div>
                    <div className="bg-[#FFF4E5]/50 p-4 rounded-2xl border border-[#FF7819]/5">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Interest</p>
                      <p className="text-[11px] font-black text-[#08101E] flex items-center gap-1"><FaChartLine /> {lender.rate}</p>
                    </div>
                  </div>

                  <div className="mb-10">
                    <div className="flex flex-wrap gap-2">
                      {lender.features.map((feature, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-[9px] font-black bg-gray-50 text-gray-500 px-3 py-2 rounded-xl border border-gray-100 uppercase tracking-wider group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-100 transition-all">
                          <FaCheckCircle className="text-[10px]" /> {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={lender.url} target="_blank" rel="noopener noreferrer" className="block relative z-10">
                    <motion.button 
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#08101E] hover:bg-[#FF7819] text-white font-black py-5 rounded-[1.8rem] shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px]"
                    >
                      Apply Instantly <FaBolt className="text-[#FF7819] group-hover:text-white" />
                    </motion.button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 📝 ELIGIBILITY FORM SECTION (Glass Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border border-white"
            >
              <h2 className="text-3xl font-black text-[#08101E] mb-2 uppercase tracking-tighter italic text-center">Eligibility Check</h2>
              <p className="text-[11px] text-gray-400 text-center font-bold uppercase tracking-[0.2em] mb-10">Takes less than 60 seconds</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-[#08101E] uppercase tracking-widest ml-3">Full Name (PAN)</label>
                  <input name="name" placeholder="Ex: John Doe" value={form.name} onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#FF7819] outline-none transition-all font-bold shadow-inner" required />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-[#08101E] uppercase tracking-widest ml-3">Phone</label>
                    <input name="phone" placeholder="+91" value={form.phone} onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-[#08101E] uppercase tracking-widest ml-3">PAN Card</label>
                    <input name="pan" placeholder="ABCDE1234F" value={form.pan} onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner uppercase" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select name="employeeType" value={form.employeeType} onChange={handleChange} className="bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner text-gray-500 appearance-none focus:border-[#FF7819] focus:bg-white" required>
                    <option value="" disabled>Emp Type</option>
                    <option value="Salaried">Salaried</option>
                    <option value="Self-Employed">Self-Employed</option>
                  </select>
                  <select name="gender" value={form.gender} onChange={handleChange} className="bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner text-gray-500 appearance-none focus:border-[#FF7819] focus:bg-white" required>
                    <option value="" disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['City', 'State', 'Pincode'].map(item => (
                    <input key={item} name={item.toLowerCase()} placeholder={item} onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-xl py-4 text-center outline-none font-black shadow-inner text-[10px] uppercase focus:border-[#FF7819] focus:bg-white" required />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-[#08101E] uppercase tracking-widest ml-3">Loan Amt</label>
                    <input name="loanAmount" type="number" placeholder="₹" onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-[#08101E] uppercase tracking-widest ml-3">Monthly Income</label>
                    <input name="income" type="number" placeholder="₹" onChange={handleChange} className="w-full bg-[#FFF4E5] border-2 border-transparent rounded-2xl px-6 py-4 outline-none font-bold shadow-inner" required />
                  </div>
                </div>

                <div className="flex items-start gap-4 py-6 mt-6 border-t border-[#08101E]/5">
                  <input type="checkbox" id="consent" checked={consent} onChange={() => setConsent(!consent)} className="mt-1 w-5 h-5 accent-[#FF7819] cursor-pointer" required />
                  <label htmlFor="consent" className="text-[10px] text-[#08101E]/50 font-black uppercase tracking-tight leading-relaxed italic cursor-pointer">
                    I authorize CoverMantra to share my details with lenders and contact me for application updates.
                  </label>
                </div>

                <motion.button 
                  whileHover={consent ? { scale: 1.02 } : {}}
                  whileTap={consent ? { scale: 0.98 } : {}}
                  type="submit" 
                  disabled={!consent}
                  className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all ${
                    consent ? 'bg-[#FF7819] text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit Request 🏁
                </motion.button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-2 text-[#08101E]/30 font-black text-[9px] uppercase tracking-[0.2em]">
                <FaShieldAlt /> 256-Bit Encrypted & Safe
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} onSuccess={handleRegisterUser} suppressGlobalModal={true} />
    </main>
  );
}