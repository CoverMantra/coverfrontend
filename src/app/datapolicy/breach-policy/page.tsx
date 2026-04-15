"use client";

import React from "react";

const DataBreachPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-green-100 to-white min-h-screen px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-800 mb-5 tracking-wide">
            Data Breach Policy
          </h1>
          <div className="flex flex-col items-center text-gray-600 space-y-1">
            <p className="font-semibold text-lg text-green-700">CoverMantra Services Private Limited</p>
            <p>Effective Date: Sept 24, 2025 | Version: 1.0</p>
          </div>
          <hr className="mt-8 border-green-100" />
        </div>

        <div className="space-y-10">
          {/* 1. Purpose */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">1. Purpose</h2>
            <p className="text-gray-700 leading-relaxed">
              The purpose of this Data Breach Policy is to establish a structured
              approach for identifying, reporting, managing, and mitigating any
              incidents that may compromise the confidentiality, integrity, or
              availability of data. CoverMantra Services Pvt. Ltd. (“Company”,
              “we”, “our”) is committed to handling all data breaches responsibly
              and in compliance with applicable laws and regulations.
            </p>
          </div>

          {/* 2. Scope */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">2. Scope</h2>
            <p className="text-gray-700 mb-3">This policy applies to:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>All employees, contractors, and third-party service providers handling company or customer data.</li>
              <li>All types of data (personal, financial, transactional, technical, and operational) collected or processed by the Company.</li>
              <li>All systems, applications, networks, cloud platforms, and physical records.</li>
            </ul>
          </div>

          {/* 3. Definition */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">3. Definition of a Data Breach</h2>
            <p className="text-gray-700 mb-3">
              A data breach is any confirmed or suspected incident that leads to
              authorized access, disclosure, alteration, destruction, or loss of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1 mb-4">
              <li>Customer personal or financial information.</li>
              <li>Business-critical or confidential company data.</li>
              <li>IT systems or networks impacting availability and integrity.</li>
            </ul>
            <p className="font-semibold text-green-600 mt-4 mb-2">Examples include:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              <li>Unauthorized access to systems or databases.</li>
              <li>Loss or theft of devices containing sensitive data.</li>
              <li>Accidental disclosure of customer information.</li>
              <li>Malware, ransomware, or cyberattacks impacting systems.</li>
            </ul>
          </div>

          {/* 4. Roles & Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">4. Roles & Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><b>Employees/Contractors</b> – Immediately report suspected or actual breaches.</li>
              <li><b>Information Security Officer (ISO)</b> – Lead investigation, coordinate response, and implement corrective measures.</li>
              <li><b>Incident Response Team (IRT)</b> – Handle containment, forensics, and recovery activities.</li>
              <li><b>Management</b> – Ensure resources, oversight, and regulatory reporting.</li>
              <li><b>Third-Party Vendors</b> – Must notify the Company immediately of any breach involving shared data.</li>
            </ul>
          </div>

          {/* 5. Breach Response Procedure */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">5. Breach Response Procedure</h2>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-3 font-medium">
              <li>Identification – <span className="font-normal text-gray-600 text-sm">Detect or report a potential breach.</span></li>
              <li>Containment – <span className="font-normal text-gray-600 text-sm">Isolate affected systems, stop unauthorized access, and prevent further damage.</span></li>
              <li>Assessment – <span className="font-normal text-gray-600 text-sm">Determine the scope, type of data affected, and potential impact.</span></li>
              <li>Notification – 
                <ul className="list-disc pl-6 mt-2 font-normal text-gray-600 space-y-1">
                  <li>Inform senior management and relevant stakeholders.</li>
                  <li>Notify regulators (RBI/DCA or applicable authority) within legally mandated timelines.</li>
                  <li>Inform affected customers promptly with guidance on protective measures.</li>
                </ul>
              </li>
              <li>Eradication & Recovery – <span className="font-normal text-gray-600 text-sm">Remove threats, restore systems from backups, and validate security.</span></li>
              <li>Post-Incident Review – <span className="font-normal text-gray-600 text-sm">Analyze root cause, document lessons learned, and strengthen controls.</span></li>
            </ol>
          </div>

          {/* 6. Data Breach Notification */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">6. Data Breach Notification</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Customers will be informed transparently if their personal or financial data is affected.</li>
              <li>Notifications will include nature of breach, type of data compromised, corrective steps taken, and recommended customer actions.</li>
              <li>All notifications will be clear, timely, and compliant with applicable data protection and regulatory requirements.</li>
            </ul>
          </div>

          {/* 7. Prevention & Preparedness */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">7. Prevention & Preparedness</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Regular security audits and penetration testing.</li>
              <li>Ongoing employee awareness training on phishing, social engineering, and data handling.</li>
              <li>Strong encryption, access controls, and monitoring tools to detect anomalies.</li>
              <li>Business Continuity & Disaster Recovery (BC/DR) plans tested periodically.</li>
            </ul>
          </div>

          {/* 8. Policy Review */}
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">8. Policy Review & Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              This policy will be reviewed annually or upon major changes in
              technology, regulations, or business operations.
            </p>
          </div>

          {/* 9. Contact */}
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h2 className="text-2xl font-semibold text-green-700 mb-3">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For reporting incidents or raising concerns regarding data security, contact:
            </p>
            <ul className="list-none text-gray-700 space-y-1">
              <li className="font-bold text-green-800 uppercase text-sm tracking-wide mb-2">Data Protection Officer (DPO)</li>
              <li><strong>Company:</strong> CoverMantra Services Pvt. Ltd</li>
              <li><strong>Email:</strong> <span className="text-green-700 font-medium">info@covermantra.in</span></li>
              <li><strong>Phone:</strong> <span className="text-green-700 font-medium">9729509967</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBreachPolicy;