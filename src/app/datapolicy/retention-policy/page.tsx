"use client";

import React from "react";

const DataRetentionDeletionPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-green-100 to-white min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 mb-5 tracking-wide">
            Data Retention & Deletion Policy
          </h1>
          <div className="flex flex-col items-center text-gray-600 space-y-1">
            <p className="font-semibold text-lg text-green-700">CoverMantra Services Private Limited</p>
            <p>Effective Date: Sept 24, 2025 | Version: 1.0</p>
          </div>
          <hr className="mt-8 border-green-100" />
          <p className="text-gray-600 text-center mt-8 text-lg max-w-3xl mx-auto">
            This policy outlines how we manage, store, and securely dispose of information 
            to ensure compliance with legal and regulatory standards.
          </p>
        </div>

        <div className="space-y-10">
          {/* 1. Purpose */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">1. Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              The purpose of this policy is to define how CoverMantra Services Pvt.
              Ltd. (“Company”, “we”, “our”) retains, manages, and deletes customer,
              employee, and business data in compliance with applicable legal,
              regulatory, and contractual requirements. This ensures protection of
              personal and financial information, while balancing operational needs.
            </p>
          </div>

          {/* 2. Scope */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">2. Scope</h2>
            <p className="text-gray-700 mb-3">This policy applies to:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>All personal, financial, transactional, and technical data collected or processed by CoverMantra.</li>
              <li>All employees, contractors, and third-party service providers handling data on behalf of the Company.</li>
              <li>All systems, applications, and storage mediums (digital or physical) used by the Company.</li>
            </ul>
          </div>

          {/* 3. Data Retention Guidelines */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">3. Data Retention Guidelines</h2>
            <p className="text-gray-700 mb-4">Data is retained only as long as required for business, legal, and regulatory purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
              <li><strong>KYC & Regulatory Records:</strong> Retained as per RBI/DCA/other applicable laws (generally 5–10 years).</li>
              <li><strong>Financial Transactions:</strong> Loan applications, disbursals, and repayments are retained for audit and compliance (7–10 years).</li>
              <li><strong>Customer Communications:</strong> Emails and chat logs are retained for service quality (3 years unless longer is required).</li>
              <li><strong>Employee Records:</strong> Retained for the duration of employment and for statutory periods thereafter.</li>
              <li><strong>Technical/Log Data:</strong> Retained for security monitoring (up to 2 years, unless required longer).</li>
              <li><strong>Marketing Data:</strong> Retained until consent is withdrawn or it is no longer necessary.</li>
            </ul>
          </div>

          {/* 4. Data Deletion & Disposal */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">4. Data Deletion & Disposal</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3">
              <li><strong>Secure Deletion (Digital):</strong> Electronic records are wiped using industry-standard techniques to ensure they cannot be reconstructed.</li>
              <li><strong>Physical Records:</strong> Paper-based records are shredded or securely destroyed when no longer required.</li>
              <li><strong>Third-Party Systems:</strong> We ensure authorized service providers follow secure deletion practices as per contractual agreements.</li>
              <li><strong>Customer Requests:</strong> Data may be deleted upon verified request, subject to regulatory requirements.</li>
            </ul>
          </div>

          {/* 5. Exceptions */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">5. Exceptions</h2>
            <p className="text-gray-700 mb-3">Certain data may be retained longer if:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Required by law, regulators, or court order.</li>
              <li>Needed for fraud prevention, dispute resolution, or ongoing investigations.</li>
              <li>Necessary for legitimate business interests, complying with privacy laws.</li>
            </ul>
          </div>

          {/* 6. Policy Review & Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">6. Policy Review & Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy will be reviewed periodically (at least annually) and
              updated in line with legal, regulatory, or operational requirements.
            </p>
          </div>

          {/* 7. Contact Information */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">7. Contact Information</h2>
            <p className="text-gray-700 mb-4">For questions, clarifications, or requests related to data retention and deletion, contact:</p>
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

export default DataRetentionDeletionPolicy;