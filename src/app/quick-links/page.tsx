"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import LoginModal from "../Components/LoginModal";
import { registerUser } from "../APIs/utils";

const lenders = [
  // {
  //   id: 1,
  //   name: "MoneyView",
  //   logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
  //   approval: "98%",
  //   amount: "Upto 10L",
  //   rate: "Starting from 1.33% per month(16% Annually)",
  //   tenure: "6-18 months",
  //   support: "24x7",
  //   features: ["Quick Approval", "Low Interest", "Flexible Repayment"],
  //   url: " https://moneyview.in/personal-loan?utm_source=covermantra",
  // },
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
    url: " https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea",
  },
  {
    id: 3,
    name: "FatakPay Personal Loans",
    logo: "https://fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5L",
    rate: "Range 12% to 35.95% per annum",
    tenure: "3-24 months",
    support: "24x7",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: " https://web.fatakpay.com/authentication/login?utm_source=651_TT83W?utm_medium=",
  },
  {
    id: 4,
    name: "FatakPay Short Term Loans",
    logo: "https://fatakpay.com/assets/images/logo/Logo.svg",
    approval: "90%",
    amount: "Upto 5000",
    rate: "Range 12% to 35.95% per annum",
    tenure: "3-24 months",
    support: "24x7",
    features: ["Quick Approval", "Low Interest", "No Hidden Fees"],
    url: "https://fatakpay.onelink.me/2uSI/652_IUXYC?utm_medium=",
  },{
    id: 5, // Unique ID
    name: "FlexSalary (Vivifi)",
    logo: "https://www.flexsalary.com/assets/images/logo.png", // Vivifi/FlexSalary logo URL
    approval: "92%",
    amount: "Upto 2L",
    rate: "Starting from 1.5% per month",
    tenure: "Flexible",
    support: "24x7",
    features: ["Credit Line", "Instant Transfer", "No Fixed EMI"],
    url: "https://online.flexsalary.com/CustomerLogin/Index?CampaignID=9192300#x", // Internal Page Link
  }
];

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  employeeType: "",
  pan: "",
  pincode: "",
  loanAmount: "",
  income: "",
  dob: "",
  city: "",
  state: "",
  gender: ""
};

export default function Page() {
  const [form, setForm] = useState({ ...emptyForm });
  const [consent, setConsent] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedFormData = Cookies.get("loanFormData");
    const savedPhone = Cookies.get("co_phone");
    if (savedPhone && savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      if (parsedData.phone !== savedPhone) {
        setForm({ ...emptyForm, phone: savedPhone });
      } else {
        setForm({ ...emptyForm, ...parsedData, phone: savedPhone });
      }
    } else {
      setForm({ ...emptyForm, phone: savedPhone || "" });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    Cookies.set("loanFormData", JSON.stringify(updatedForm));
  };

  const closeLoginModal = () => setLoginModalOpen(false);
  const openLoginModal = () => setLoginModalOpen(true);

  const isLoggedIn =
    !!Cookies.get("co_token") || Cookies.get("co_login") === "true";

  const handleRegisterUser = async () => {
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        pan: form.pan.toUpperCase(),
        dob: form.dob,
        email: form.email,
        employment: form.employeeType,
        income: form.income,
        pincode: form.pincode,
        loanAmount: form.loanAmount,
        city: form.city,
        state: form.state,
        gender: form.gender,
      };
      await registerUser(payload);
      Cookies.set("loanFormData", JSON.stringify(form), { expires: 7 });
      Cookies.set("loanFormSubmitted", "true", { expires: 7 });
      closeLoginModal();
      router.push("/personal-loans");
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message?.toLowerCase() || err?.message || "";

      if (errorMsg.includes("User already exists.") || errorMsg.includes("Please sign in")) {

        console.log("User already registered, redirecting...");
        closeLoginModal();
        router.push("/personal-loans");
      } else {
        console.error("Registration failed:", err);
        alert("User Already Exits. Please try again.");
      }
    }
  };

  const validateMandatoryFields = () => {
    const mandatoryFields = [
      "name",
      "phone",
      "email",
      "employeeType",
      "pan",
      "pincode",
      "loanAmount",
      "income",
      "dob",
      "city",
      "state",
      "gender"
    ];
    for (const field of mandatoryFields) {
      if (!form[field as keyof typeof form] || form[field as keyof typeof form] === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert("Please agree to the terms to proceed.");
      return;
    }

    if (!validateMandatoryFields()) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isLoggedIn) {
      await handleRegisterUser();
    } else {
      openLoginModal();
    }
  };

 return (
  <section className="bg-gradient-to-r from-green-200 via-lime-200 to-green-700 py-12 px-4 md:px-6 mt-10 rounded-xl shadow-md">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10 mt-6">
      <h2 className="text-4xl font-extrabold text-green-800">
        Explore Top Loan Offers 💰
      </h2>
      <p className="text-lg text-gray-800 mt-3 max-w-3xl mx-auto">
        Get instant access to verified lenders and apply online in minutes.
      </p>
    </div>

  
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     
      <div className="lg:col-span-2">
         <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {lenders.map((lender) => (
            <div
              key={lender.id}
              className="relative bg-gradient-to-br from-green-50 to-green-300 backdrop-blur-xl border border-green-200 p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 group h-auto"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-300/40 via-lime-200/30 to-green-400/40 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
              <div className="relative z-10">
          
                <div className="flex items-center gap-3 mb-4 ">
                  <img
                    src={lender.logo}
                    alt={`${lender.name} logo`}
                    className="w-20 h-16 rounded-lg object-contain shadow-sm border border-green-200 bg-white p-2"
                  />
                  <div>
                    <h3 className="font-semibold text-xl md:text-2xl text-green-900 group-hover:text-green-700 transition ml-3">
                      {lender.name}
                    </h3>
                    <p className="text-sm text-gray-600 ml-3">{lender.approval} 🌟</p>
                  </div>
                </div>

                {/* Loan Details: text-xs is ideal for mobile density. */}
                <div className="text-xs grid grid-cols-2 gap-2 mb-3">
                  <p className="bg-green-50 px-2 py-1 rounded-md shadow-sm transition transform hover:bg-green-100 hover:scale-105 hover:shadow-md cursor-pointer">
                    <strong>Loan:</strong> {lender.amount}
                  </p>
                  <p className="bg-green-50 px-2 py-1 rounded-md shadow-sm transition transform hover:bg-green-100 hover:scale-105 hover:shadow-md cursor-pointer">
                    <strong>Rate:</strong> {lender.rate}
                  </p>
                  <p className="bg-green-50 px-2 py-1 rounded-md shadow-sm transition transform hover:bg-green-100 hover:scale-105 hover:shadow-md cursor-pointer">
                    <strong>Tenure:</strong> {lender.tenure}
                  </p>
                  <p className="bg-green-50 px-2 py-1 rounded-md shadow-sm transition transform hover:bg-green-100 hover:scale-105 hover:shadow-md cursor-pointer">
                    <strong>Support:</strong> {lender.support}
                  </p>
                </div>

              
                <div className="flex gap-2 text-[11px] mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  {lender.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-2 py-1 rounded-full shadow-sm inline-block flex-shrink-0"
                    >
                      ✅ {feature}
                    </span>
                  ))}
                </div>

           <a href={lender.url} target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white text-sm font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Apply Now 🚀
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:block">
        <div className="w-full max-w-md lg:max-w-none bg-white p-6 rounded-xl shadow-2xl lg:sticky lg:top-4">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Check Your Eligibility
          </h3>
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <select
              name="employeeType"
              value={form.employeeType}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            >
              <option value="" disabled>
                Employment Type *
              </option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-employed</option>
            </select>
            <input
              type="text"
              name="pan"
              placeholder="PAN Number"
              value={form.pan}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 uppercase focus:ring-green-500 focus:border-green-500"
              required
            />
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
            >
              <option value="">Gender *</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <input
              type="number"
              name="loanAmount"
              placeholder="Loan Amount Required"
              value={form.loanAmount}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
              min={0}
            />
            <input
              type="number"
              name="income"
              placeholder="Monthly Income"
              value={form.income}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500"
              required
              min={0}
            />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            />
            
            <div className="flex items-start text-xs pt-2">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={() => setConsent(!consent)}
                className="mr-2 mt-1 accent-green-800 flex-shrink-0"
                required
              />
              <label htmlFor="consent" className="text-gray-600">
                I agree to be contacted via Email, WhatsApp, SMS, or Call.
              </label>
            </div>
            <button
              type="submit"
              className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition shadow-md hover:shadow-lg ${!consent ? "disabled:opacity-50 disabled:cursor-not-allowed" : ""
                }`}
              disabled={!consent}
            >
              Submit Request
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>

  {/* Login Modal */}
  <LoginModal
    isOpen={loginModalOpen}
    onClose={closeLoginModal}
    onSuccess={handleRegisterUser}
    suppressGlobalModal={true}
  />
</section>
);
}