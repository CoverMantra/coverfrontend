"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoginModal from "../Components/LoginModal";
import { registerUser } from "../APIs/utils";

const lenders = [
  {
    id: 2,
    name: "Zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
    approval: "95%",
    amount: "Upto 3L",
    rate: "Starting from 1.5% per month",
    tenure: "6-18 months",
    support: "24x7",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea",
  },
  {
    id: 3,
    name: "FatakPay Personal Loans",
    logo: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5L",
    rate: "Range 12% to 35.95% per annum",
    tenure: "3-24 months",
    support: "24x7",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://web.fatakpay.com/authentication/login?utm_source=651_TT83W?utm_medium=",
  },
  {
    id: 4,
    name: "FatakPay Short Term Loans",
    logo: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5000",
    rate: "Range 12% to 35.95% per annum",
    tenure: "3-24 months",
    support: "24x7",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://fatakpay.onelink.me/2uSI/652_IUXYC?utm_medium=",
  },
  {
    id: 5,
    name: "FlexSalary (Vivifi)",
    logo: "https://www.flexsalary.com/images/global/flexsalary-color-black.webp",
    approval: "92%",
    amount: "Upto 3L",
    rate: "Starting from 1.5% per month",
    tenure: "Flexible",
    support: "24x7",
    features: ["Credit Line", "Instant Transfer", "No Fixed EMI"],
    url: "https://online.flexsalary.com/CustomerLogin/Index?CampaignID=9192300#x",
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
    <main className="min-h-screen bg-[#FFF4E5] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-[#08101E] tracking-tighter">
          Compare & Get <span className="text-[#FF7819]">Instant Loans</span> 💰
        </h2>
        <p className="text-gray-600 mt-4 font-medium max-w-xl mx-auto">
          Get instant access to verified lenders and apply online in minutes.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LENDERS LIST SECTION */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lenders.map((lender) => (
              <div 
                key={lender.id} 
                className="bg-white p-7 rounded-[2.5rem] border border-white shadow-[0_15px_45px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(255,120,25,0.2)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                {/* Logo & Approval Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-gray-50 p-2.5 rounded-2xl border border-gray-100 flex items-center justify-center h-14 w-28">
                    <img src={lender.logo} alt={lender.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-100 font-bold shadow-sm">
                    <span className="text-[11px]">{lender.approval}</span>
                    <span className="text-xs">🌟</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-[#08101E] mb-5 tracking-tight leading-tight">{lender.name}</h3>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-50 shadow-inner">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Max Loan</p>
                    <p className="text-xs font-bold text-[#08101E]">{lender.amount}</p>
                  </div>
                  <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-50 shadow-inner">
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Interest</p>
                    <p className="text-[10px] font-bold text-[#08101E] leading-tight">{lender.rate}</p>
                  </div>
                </div>

                {/* --- SHOWING ALL FEATURES HERE --- */}
                <div className="mb-8 mt-auto">
                   <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-3 px-1">Highlights</p>
                   <div className="flex flex-wrap gap-2">
                    {lender.features.map((feature, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[10px] font-bold bg-green-50/70 text-green-700 px-3 py-1.5 rounded-xl border border-green-100/50">
                        <span className="text-xs">✅</span> {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modern Action Button */}
                <a href={lender.url} target="_blank" rel="noopener noreferrer" className="block mt-2">
                  <button className="w-full bg-gradient-to-r from-[#21C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white font-black py-4.5 rounded-2xl shadow-[0_12px_25px_-5px_rgba(22,163,74,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-[0.98] uppercase tracking-widest text-xs">
                    Apply Now 🚀
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ELIGIBILITY FORM SECTION */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit">
          <div className="bg-white p-8 sm:p-10 rounded-[3rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)] border border-white">
            <h2 className="text-2xl font-black text-[#08101E] mb-10 text-center uppercase tracking-tighter">Check Your Eligibility</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Full Name (As per PAN)" value={form.name} onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-5 py-4 focus:bg-white focus:border-[#FF7819]/20 outline-none transition-all font-semibold shadow-inner" required />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner" required />
                <input name="pan" placeholder="PAN Number" value={form.pan} onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner uppercase" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select name="employeeType" value={form.employeeType} onChange={handleChange} className="bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner text-gray-500" required>
                  <option value="" disabled>Emp Type</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed">Self-Employed</option>
                </select>
                <select name="gender" value={form.gender} onChange={handleChange} className="bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner text-gray-500" required>
                  <option value="" disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {['City', 'State', 'Pincode'].map(item => (
                  <input key={item} name={item.toLowerCase()} placeholder={item} onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-2 py-4 text-center outline-none font-bold shadow-inner text-[10px]" required />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input name="loanAmount" type="number" placeholder="Loan Required" onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner" required />
                <input name="income" type="number" placeholder="Income" onChange={handleChange} className="w-full bg-gray-50 border border-transparent rounded-xl px-5 py-4 outline-none font-semibold shadow-inner" required />
              </div>

              <div className="flex items-start gap-3 py-4 mt-4 px-2 border-t border-gray-100">
                <input type="checkbox" id="consent" checked={consent} onChange={() => setConsent(!consent)} className="mt-1 w-4 h-4 accent-[#FF7819]" required />
                <label htmlFor="consent" className="text-[10px] text-gray-500 font-medium leading-relaxed">
                  I authorize CoverMantra to contact me regarding my loan application through Call, SMS, or WhatsApp.
                </label>
              </div>

              <button type="submit" className="w-full bg-[#08101E] hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-widest text-xs mt-2">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} onSuccess={handleRegisterUser} suppressGlobalModal={true} />
    </main>
  );
}