"use client";

import React from "react";

const DataProtectionPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-green-100 to-white min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 mb-5 tracking-wide">
            Data Protection Policy
          </h1>
          <div className="flex flex-col items-center text-gray-600 space-y-1">
            <p className="font-semibold text-lg text-green-700">CoverMantra Services Private Limited</p>
            <p>Effective Date: Sept 24, 2025 | Version: 1.0</p>
          </div>
          <hr className="mt-8 border-green-100" />
          <p className="text-gray-600 text-center mt-8 text-lg max-w-3xl mx-auto">
            We are committed to processing your personal and financial data securely and lawfully, 
            ensuring full compliance with regulatory guidelines.
          </p>
        </div>

        <div className="space-y-10">
          {/* 1. Purpose */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">1. Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              The purpose of this Data Protection Policy is to ensure that personal,
              financial, and confidential data handled by CoverMantra Services Pvt.
              Ltd. (“Company”, “we”, “our”) is collected, processed, stored, and
              disposed of in a secure and lawful manner, in line with applicable
              laws, RBI/DCA guidelines, and industry best practices.
            </p>
          </div>

          {/* 2. Scope */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">2. Scope</h2>
            <p className="text-gray-700 mb-3">This policy applies to:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>All employees, contractors, vendors, and third-party partners of the Company.</li>
              <li>All forms of data, including electronic, paper-based, or verbal information.</li>
              <li>All systems, applications, and platforms (internal and third-party) used for processing or storing data.</li>
            </ul>
          </div>

          {/* 3. Data We Protect */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">3. Data We Protect</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Personal Identification Data:</strong> Name, address, date of birth, phone number, email.</li>
              <li><strong>KYC & Financial Data:</strong> Aadhaar, PAN, bank account details, income records, credit history.</li>
              <li><strong>Transactional Data:</strong> Loan applications, disbursals, repayments.</li>
              <li><strong>Employment Data:</strong> Employee records, payroll, and HR information.</li>
              <li><strong>Technical Data:</strong> Device details, IP addresses, logs.</li>
            </ul>
          </div>

          {/* 4. Data Protection Principles */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">4. Data Protection Principles</h2>
            <p className="text-gray-700 mb-4 font-medium">We adhere to the following principles:</p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-3">
              <li><b>Lawfulness, Fairness & Transparency</b> – Data is collected with consent and used for legitimate purposes only.</li>
              <li><b>Purpose Limitation</b> – Data is processed only for stated business or regulatory purposes.</li>
              <li><b>Data Minimization</b> – Only relevant and necessary data is collected.</li>
              <li><b>Accuracy</b> – Data is maintained up-to-date and corrected when required.</li>
              <li><b>Storage Limitation</b> – Data is retained only as long as necessary for legal and business needs.</li>
              <li><b>Integrity & Confidentiality</b> – Strong security controls protect data from unauthorized access, loss, or misuse.</li>
              <li><b>Accountability</b> – All employees and partners are responsible for complying with this policy.</li>
            </ol>
          </div>

          {/* 5. Security Measures */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">5. Security Measures</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Encryption of sensitive data at rest and in transit.</li>
              <li>Multi-factor authentication and access control.</li>
              <li>Regular system patching and vulnerability assessments.</li>
              <li>Secure data storage with compliant service providers.</li>
              <li>Continuous monitoring of IT systems to detect anomalies.</li>
              <li>Physical security at offices and restricted access to sensitive areas.</li>
            </ul>
          </div>

          {/* 6. Data Sharing */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">6. Data Sharing & Third Parties</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Data is shared only with authorized NBFCs, banks, credit bureaus, and service providers for legitimate purposes.</li>
              <li>All third-party partners must sign confidentiality and data protection agreements.</li>
              <li>No data is sold or misused under any circumstances.</li>
            </ul>
          </div>

          {/* 7. Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">7. Data Retention & Deletion</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Data is retained only as long as required for business, regulatory, or contractual needs.</li>
              <li>Secure deletion or anonymization is applied when data is no longer needed.</li>
              <li>Customers can request data deletion in line with applicable laws.</li>
            </ul>
          </div>

          {/* 8. Employee Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">8. Employee Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Handle data responsibly and only for authorized purposes.</li>
              <li>Report any data security incidents immediately.</li>
              <li>Maintain confidentiality at all times, even after employment ends.</li>
            </ul>
          </div>

          {/* 9. Customer Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">9. Customer Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Access and review their personal information.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Withdraw consent (subject to regulatory requirements).</li>
              <li>Request deletion of personal data where legally permissible.</li>
            </ul>
          </div>

          {/* 10. Breach Management */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">10. Breach Management</h2>
            <p className="text-gray-700 leading-relaxed">
              Any data breach or suspected breach will be reported, investigated,
              and addressed as per the Data Breach Policy. Customers and regulators
              will be notified in compliance with legal requirements.
            </p>
          </div>

          {/* 11. Review & Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">11. Review & Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy will be reviewed annually, or earlier if required due to
              regulatory, technological, or operational changes.
            </p>
          </div>

          {/* 12. Contact */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">For queries, requests, or concerns regarding data protection, contact:</p>
            <ul className="list-none text-gray-700 space-y-1">
              <li className="font-bold text-green-800 uppercase text-sm tracking-wide mb-2">Data Protection Officer (DPO)</li>
              <li><strong>Company:</strong> CoverMantra Services Pvt. Ltd</li>
              <li><strong>Email:</strong> <span className="text-green-700 font-medium">info@covermantra.in</span></li>
              <li><strong>Phone:</strong> <span className="text-green-700 font-medium">8901229195</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProtectionPolicy;