"use client";
import React from "react";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="mt-20">
        <section className="bg-gradient-to-b from-green-100 to-white pt-12 pb-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-green-100 p-8 md:p-12 transition-all duration-300 hover:shadow-xl">
            
            {/* Title Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold text-green-800 mb-5 tracking-wide">
                Data Privacy Policy
              </h1>
              <div className="flex flex-col items-center text-gray-600 space-y-1">
                <p className="font-semibold text-lg text-green-700">CoverMantra Services Private Limited</p>
                <p>Effective Date: Sept 24, 2025 | Version: 1.0</p>
              </div>
              <hr className="mt-8 mb-8 border-green-100 w-full" />
              <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
                Your privacy matters to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>

            <div className="space-y-10">
              {/* 1. Overview */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  1. Overview & Applicability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Last updated: 24 Sept, 2025. This Privacy Policy (“Policy”) explains how CoverMantra, and its affiliates (“we,” “us,” or “our”) collect, use, store, and disclose personal information through our website and mobile application (collectively, the “Platform”). By accessing or using the Platform, you (“you,” “your,” or “User”) consent to the practices described herein. If you do not agree, please do not use our services.
                </p>
              </div>

              {/* 2. Services & Data Use */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  2. Services & Data Use
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600">Credit Reports</h4>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                      <li>
                        <strong>Data Collected:</strong> Name, contact details, PAN, gender, age, and date of birth—collected with your explicit consent to fetch credit information.
                      </li>
                      <li>
                        <strong>Purpose:</strong> To provide insight into your financial profile.
                      </li>
                      <li>
                        <strong>Sharing:</strong> These reports are not shared with any third parties, unless required by law.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600">Loans & Credit Card Applications</h4>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                      <li>
                        <strong>What We Do:</strong> We connect you with RBI-registered NBFCs and banks that match your eligibility.
                      </li>
                      <li>
                        <strong>Information Obtained:</strong> Aadhaar, income details, KYC documents, and banking information—collected only with your consent.
                      </li>
                      <li>
                        <strong>Sharing:</strong> Your data is shared with lending partners strictly to process your application.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600">Marketing & Notifications</h4>
                    <p className="text-gray-700 leading-relaxed">
                      By providing your information, you consent to receiving communications via SMS, email, WhatsApp, or calls for promotional offers from us and our lending partners. You can opt out at any time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600">Customer Support</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect information, including recorded calls, when you reach out to customer support to help us improve our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Cookies */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  3. Cookies & Tracking
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tools to identify users, improve your experience, and serve relevant ads. You may disable cookies via your browser settings, though this could affect functionality.
                </p>
              </div>

              {/* 4. Your Rights */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  4. Your Rights
                </h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                  <li>You may refuse or withdraw consent, though features may become unavailable.</li>
                  <li>Request correction, access, or deletion of your data (subject to legal retention requirements).</li>
                </ul>
              </div>

              {/* 5. Storage & Security */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  5. Storage & Security
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your data is stored securely in India using trusted cloud providers with strong safeguards, but internet transmission cannot be guaranteed completely safe.
                </p>
              </div>

              {/* 6. Confidentiality */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  6. Confidentiality & Third-Party Agreements
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We only share your information with trusted third parties and lending partners under strict confidentiality, ensuring they use it only for agreed purposes.
                </p>
              </div>

              {/* 7. Grievance */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  7. Grievance Redressal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For any privacy concerns or requests, contact our Grievance Officer:
                </p>
                <ul className="list-none pl-6 text-gray-700 space-y-2 border-l-4 border-green-200">
                  <li><strong>Name:</strong> Mandeep Phulia</li>
                  <li><strong>Email:</strong> info@covermantra.in</li>
                  <li><strong>Phone:</strong> 9996327316</li>
                  <li><strong>Address:</strong> 2nd Floor MK, Flex, Sanyas Ashram Road, Old Fatehabad, Haryana-125050</li>
                  <li><strong>Response time:</strong> Within 48 hours.</li>
                </ul>
              </div>

              {/* 8. Anti-Phishing */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  8. Anti-Phishing Notice
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We will never ask for passwords, bank details, or OTPs via email or message. If you receive such a request, do not respond and reach out to us.
                </p>
              </div>

              {/* 9. Law */}
              <div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  9. Governing Law
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  This Policy is governed by the laws of India. Any disputes shall be subject to jurisdiction in India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}