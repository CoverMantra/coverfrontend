"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, Briefcase, User, Search, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: { personal: FAQItem[]; business: FAQItem[] } = {
  personal: [
    { q: "What is a personal loan?", a: "A personal loan is an unsecured loan that can be used for various personal needs such as education, travel, or emergencies." },
    { q: "What are typical interest rates?", a: "Interest rates vary depending on credit score and bank policies, usually between 10% to 24% per annum." },
    { q: "How long can I repay?", a: "You can choose repayment tenures ranging from 12 to 60 months." },
    { q: "How much can I borrow?", a: "Loan amounts depend on income and credit profile, typically from ₹50,000 to ₹25 lakhs." },
    { q: "Are there any processing fees?", a: "Yes, processing fees may range between 1% to 3% of the loan amount." },
    { q: "Can I prepay my loan?", a: "Yes, most lenders allow prepayment after a certain period, sometimes with small charges." },
  ],
  business: [
    { q: "What is a business loan?", a: "A business loan is financial assistance to help businesses with expansion, equipment, or working capital." },
    { q: "What's the loan amount range?", a: "Business loans typically range from ₹1 lakh to ₹50 lakhs or more depending on the lender." },
    { q: "What interest rates apply?", a: "Rates vary, usually between 12% to 20% per annum depending on business stability." },
    { q: "What documents are needed?", a: "Documents usually include business proof, ITR, financial statements, and identity proof." },
    { q: "How do I apply?", a: "You can apply online through our website or visit the nearest branch." },
    { q: "Is collateral required?", a: "Many business loans are unsecured, but higher amounts may require collateral." },
  ],
};

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"personal" | "business">("personal");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Filter Logic
  const filteredFaqs = (activeTab === "personal" ? faqs.personal : faqs.business).filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  const focusSearch = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] font-sans selection:bg-[#FF7819] selection:text-white">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative bg-[#08101E] pt-28 pb-40 md:pt-40 md:pb-52 px-6 rounded-b-[3rem] md:rounded-b-[6rem] shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7819]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FF7819] text-sm font-bold mb-6 italic">
            <HelpCircle size={16} /> 24/7 Support Intelligence
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic">
            Got <span className="text-[#FF7819]">Questions?</span>
          </h1>

          {/* 🔍 SEARCH BOX */}
          <div className="mt-12 max-w-xl mx-auto relative group">
             <div className="absolute inset-0 bg-[#FF7819]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 shadow-inner">
                <Search className="text-[#FF7819] mr-3 cursor-pointer" size={24} onClick={focusSearch} />
                <input 
                  ref={searchInputRef}
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for queries (e.g. interest, documents)..." 
                  className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 font-medium"
                />
                {searchQuery && (
                  <X 
                    className="text-gray-400 cursor-pointer hover:text-white transition" 
                    size={20} 
                    onClick={() => setSearchQuery("")} 
                  />
                )}
             </div>
          </div>
        </div>
      </section>

      {/* 📁 TABBED CONTENT SECTION */}
      <section className="max-w-5xl mx-auto px-6 -mt-24 relative z-20 pb-24">
        
        {/* Tab Switcher */}
        <div className="flex p-2 bg-white rounded-3xl shadow-2xl mb-12 border border-gray-100 max-w-md mx-auto" data-aos="zoom-in">
          <button 
            onClick={() => { setActiveTab("personal"); setOpen(null); }}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${activeTab === 'personal' ? 'bg-[#FF7819] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <User size={18} /> Personal
          </button>
          <button 
            onClick={() => { setActiveTab("business"); setOpen(null); }}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${activeTab === 'business' ? 'bg-[#FF7819] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Briefcase size={18} /> Business
          </button>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-8 px-2">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#08101E] rounded-xl flex items-center justify-center text-[#FF7819]">
                   {activeTab === 'personal' ? <User size={20} /> : <Briefcase size={20} />}
                </div>
                <h2 className="text-2xl font-black uppercase italic tracking-tight text-[#08101E]">
                  {activeTab} Loan <span className="text-[#FF7819]">Knowledge</span>
                </h2>
             </div>
             {searchQuery && (
               <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                 Showing {filteredFaqs.length} results
               </span>
             )}
          </div>

          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const id = `${activeTab}-${idx}`;
              const isActive = open === id;
              return (
                <div
                  key={id}
                  className={`bg-white rounded-[2rem] border-2 transition-all duration-300 overflow-hidden ${isActive ? 'border-[#FF7819] shadow-2xl scale-[1.01]' : 'border-gray-50 shadow-sm hover:border-gray-200'}`}
                >
                  <div
                    className="flex justify-between items-center p-6 md:p-8 cursor-pointer"
                    onClick={() => toggle(id)}
                  >
                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-[#FF7819]' : 'text-[#08101E]'}`}>
                      {item.q}
                    </h3>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-[#FF7819] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-300 ease-in-out ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 md:p-8 pt-0 border-t border-gray-50">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-200" data-aos="zoom-in">
               <div className="text-gray-300 mb-4 flex justify-center"><Search size={48} /></div>
               <h3 className="text-xl font-bold text-gray-500">No matching questions found.</h3>
               <p className="text-gray-400 mt-2">Try different keywords or check another category.</p>
               <button 
                 onClick={() => setSearchQuery("")}
                 className="mt-6 text-[#FF7819] font-bold underline"
               >
                 Clear Search
               </button>
            </div>
          )}
        </div>

        {/* 📞 CONTACT SECTION */}
        <div className="mt-20 bg-[#08101E] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-[#FF7819]/10">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6">Still Need <span className="text-[#FF7819]">Help?</span></h2>
            <button className="bg-[#FF7819] text-white px-10 py-4 rounded-2xl font-black text-lg hover:shadow-[0_15px_40px_rgba(255,120,25,0.4)] transition-all transform hover:scale-105">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
