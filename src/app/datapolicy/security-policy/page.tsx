"use client";

import React from "react";

const InformationSecurityPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-green-100 to-white min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 mb-5 tracking-wide">
            Information Security Policy
          </h1>
          <div className="flex flex-col items-center text-gray-600 space-y-1">
            <p className="font-semibold text-lg text-green-700">CoverMantra Services Private Limited</p>
            <p>Effective Date: Sept 24, 2025 | Version: 1.0</p>
          </div>
          <hr className="mt-8 border-green-100" />
          <p className="text-gray-600 text-center mt-8 text-lg max-w-3xl mx-auto">
            Establishing a robust framework to protect our information assets, 
            customer data, and technology resources against evolving digital threats.
          </p>
        </div>

        <div className="space-y-10">
          {/* 1. Purpose */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">1. Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy establishes the framework for protecting information
              assets, customer data, and technology resources. It ensures adherence
              to applicable legal, regulatory, and contractual requirements while
              maintaining the highest standards of confidentiality, integrity, and
              availability.
            </p>
          </div>

          {/* 2. Scope */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">2. Scope</h2>
            <p className="text-gray-700 mb-3">This policy applies to:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>All employees, contractors, and authorized third parties.</li>
              <li>All systems, networks, applications, and cloud environments used for business operations.</li>
              <li>All forms of information, whether digital, printed, or verbal.</li>
            </ul>
          </div>

          {/* 3. Principles */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">3. Principles of Information Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Confidentiality</h4>
                <p className="text-sm text-gray-700">Access to information is restricted to authorized individuals only.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Integrity</h4>
                <p className="text-sm text-gray-700">Information must remain accurate and protected against unauthorized modification.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Availability</h4>
                <p className="text-sm text-gray-700">Systems must remain accessible for authorized use when required.</p>
              </div>
            </div>
          </div>

          {/* 4. Roles & Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">4. Roles & Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Management:</strong> Ensure implementation and compliance with this policy.</li>
              <li><strong>Information Security Officer (ISO):</strong> Oversee security operations, monitor risks, and maintain controls.</li>
              <li><strong>Employees & Contractors:</strong> Protect information assets, follow security guidelines, and report incidents.</li>
              <li><strong>Third-Party Vendors:</strong> Must comply with the company’s security requirements through contractual obligations.</li>
            </ul>
          </div>

          {/* 5. Security Controls */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">5. Security Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Access Management:</strong> Role-based access and multi-factor authentication.</li>
                <li><strong>Data Security:</strong> Encryption at rest and in transit, and secure storage.</li>
                <li><strong>Endpoint Protection:</strong> Antivirus, firewalls, and timely patching.</li>
                <li><strong>Network Security:</strong> Intrusion prevention and VPN-controlled access.</li>
              </ul>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cloud Security:</strong> Use of secure and certified cloud service providers.</li>
                <li><strong>Incident Management:</strong> Defined process for reporting and resolution.</li>
                <li><strong>Business Continuity:</strong> Regular data backups and disaster recovery planning.</li>
                <li><strong>Physical Security:</strong> Restricted office access and surveillance.</li>
              </ul>
            </div>
          </div>

          {/* 6. Data Privacy & Compliance */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">6. Data Privacy & Compliance</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Compliance with applicable regulatory guidelines, data protection laws, and industry standards.</li>
              <li>Personal and financial information is processed only for legitimate business purposes.</li>
              <li>No unauthorized disclosure or misuse of customer data.</li>
            </ul>
          </div>

          {/* 7. Training & Awareness */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">7. Training & Awareness</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>All employees receive regular training on information security and data privacy.</li>
              <li>Awareness sessions cover phishing, password security, and safe handling of data.</li>
            </ul>
          </div>

          {/* 8. Review & Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">8. Review & Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy will be reviewed annually or whenever significant changes
              occur in business, technology, or regulatory requirements.
            </p>
          </div>

          {/* 9. Enforcement */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">9. Enforcement</h2>
            <p className="text-gray-700 leading-relaxed">
              All employees, contractors, and partners are required to comply with
              this policy. Any violation will be addressed in accordance with
              company rules and contractual obligations. 
              <br /><br />
              For any security-related queries, please contact the <strong>ISO</strong> at <span className="text-green-700 font-medium text-lg">info@covermantra.in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSecurityPolicy;