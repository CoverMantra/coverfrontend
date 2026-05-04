"use client";

import React from "react";
import { 
  FaGavel, FaInfoCircle, FaCheckCircle, FaUserShield, 
  FaExclamationTriangle, FaBalanceScale, FaEnvelopeOpenText, 
  FaShieldAlt, FaUserCheck, FaLock, FaFileContract, 
  FaEye, FaTimesCircle, FaHandshake, FaGlobe 
} from "react-icons/fa";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] font-sans selection:bg-[#FF7819]/20 text-[#08101E]">
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF7819]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-[100px]" />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-[#08101E] tracking-tighter uppercase italic leading-[0.9] mb-6">
          Terms & <span className="text-[#FF7819]">Conditions</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 font-medium md:text-lg">
          Official legal guidelines and user agreement for CoverMantra Services Private Limited.
        </p>
      </section>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          <div className="space-y-16">
            
            {/* 1. Introduction */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4E5] flex items-center justify-center text-[#FF7819] flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaInfoCircle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">1. Introduction</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra Services Private Limited (“CoverMantra,” “Company,” “We,” or “Us”) is a company incorporated under Indian law. These Terms & Conditions, along with our Privacy Policy, govern your use of our website and mobile application (collectively, the “Platform”).
                </p>
              </div>
            </div>

            {/* 2. General Information */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaBalanceScale size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">2. General Information</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra acts as a facilitator between users seeking financial products and financial partners such as banks and NBFCs. The Company does not provide financial services directly; the final decision resides with the respective financial partner.
                </p>
              </div>
            </div>

            {/* 3. Services Provided */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaCheckCircle size={20} />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">3. Services Provided</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Loan Product Aggregation", "Credit Report Access", "Expense Analysis via SMS", "Digital Social Scoring"].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm font-bold flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF7819]" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. User Eligibility */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaUserCheck size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">4. User Eligibility</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You must be at least 18 years of age and legally competent to contract under the Indian Contract Act, 1872. CoverMantra reserves the right to restrict access if eligibility is not met.
                </p>
              </div>
            </div>

            {/* 5. Acceptance of Terms */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaFileContract size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">5. Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  By accessing or using the Platform, you agree to abide by these Terms. CoverMantra may update these terms periodically. Continued use after updates signifies your acceptance of the revised terms.
                </p>
              </div>
            </div>

            {/* 6. User Accounts */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaLock size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">6. User Accounts</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Users must provide accurate personal data during registration. You are responsible for maintaining the security of your account credentials. We may suspend accounts with false information.
                </p>
              </div>
            </div>

            {/* 7. Privacy */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaShieldAlt size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">7. Privacy</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Data collection and usage are handled as per our Privacy Policy. By using CoverMantra, you consent to sharing necessary data with our financial partners to process your requests.
                </p>
              </div>
            </div>

            {/* 8. License to Use */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaGlobe size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">8. License to Use</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  We grant you a limited, non-exclusive license for personal use only. Commercial exploitation, data scraping, or reverse engineering of the Platform is strictly prohibited.
                </p>
              </div>
            </div>

            {/* 9. Monitoring */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaEye size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">9. Monitoring of Platform</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra reserves the right to monitor usage to ensure compliance with legal standards and to remove any content deemed harmful or objectionable.
                </p>
              </div>
            </div>

            {/* 10. Service Suspension */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaTimesCircle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">10. Service Suspension</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  We may terminate or suspend your access to the Platform at any time, without notice, for conduct that violates these Terms or is harmful to other users or the Company.
                </p>
              </div>
            </div>

            {/* 11. Limitation of Liability */}
            <div className="flex gap-6 group p-8 rounded-3xl bg-red-50/50 border border-red-100">
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaExclamationTriangle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-red-800">11. Limitation of Liability</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  CoverMantra is not liable for any direct or indirect damages resulting from the use of our services. We provide the Platform "as is" without warranties of any kind.
                </p>
              </div>
            </div>

            {/* 12. Indemnity */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaUserShield size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">12. Indemnity</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You agree to indemnify and hold CoverMantra harmless from any claims, losses, or legal expenses arising from your misuse of the Platform or breach of these Terms.
                </p>
              </div>
            </div>

            {/* 13. Third-Party Links */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaHandshake size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">13. Third-Party Content</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Our Platform may contain links to third-party websites. CoverMantra is not responsible for the content, accuracy, or privacy practices of these external sites.
                </p>
              </div>
            </div>

            {/* 14. Acknowledgements */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaCheckCircle size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">14. Acknowledgements</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  You acknowledge that CoverMantra is purely a technology platform and does not guarantee the disbursement of loans or specific outcomes for financial applications.
                </p>
              </div>
            </div>

            {/* 15. Governing Law */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaGavel size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">15. Governing Law</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  These Terms are governed by the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts located in **Delhi**.
                </p>
              </div>
            </div>

            {/* 16. Grievance Redressal */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-[#08101E] flex items-center justify-center text-white flex-shrink-0 group-hover:rotate-6 transition-transform">
                <FaEnvelopeOpenText size={18} />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 text-[#08101E]">16. Grievance Redressal</h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  For any complaints, feedback, or queries, please reach out to our support team. We value your input and aim for swift resolution.
                </p>
                <a
                  href="mailto:info@covermantra.in"
                  className="inline-flex items-center justify-center gap-3 bg-[#08101E] text-white font-black uppercase tracking-tighter italic px-8 py-4 rounded-2xl shadow-lg hover:bg-[#FF7819] transition-all active:scale-95"
                >
                  Email Us: info@covermantra.in
                </a>
              </div>
            </div>

          </div>

          {/* Decorative Background Icon */}
          <FaGavel className="absolute -bottom-10 -right-10 text-gray-100 text-[15rem] -rotate-12 pointer-events-none" />
        </div>
      </div>

      {/* Bottom Footer Decor */}
      <footer className="py-12 border-t border-gray-100 text-center">
         <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
           <FaUserShield className="text-blue-500" /> Legally Binding Agreement • © 2026 CoverMantra Services Private Limited
         </div>
      </footer>
    </main>
  );
}