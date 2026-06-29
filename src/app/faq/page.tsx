import type { Metadata } from "next";
import FAQPage from "./faq-client";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | CoverMantra",
  description:
    "Find answers to frequently asked questions about personal loans, business loans, and insurance plans with CoverMantra. Get info on interest rates, disbursal time, and documents required.",
  keywords: [
    "CoverMantra FAQs",
    "Loan Questions Answered",
    "Insurance FAQs India",
    "Personal Loan Interest Rates FAQ",
    "Business Loan Documents FAQ",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/faq",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a personal loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A personal loan is an unsecured loan that can be used for various personal needs such as education, travel, or emergencies."
        }
      },
      {
        "@type": "Question",
        "name": "What is a business loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A business loan is financial assistance to help businesses with expansion, equipment, or working capital."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any processing fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, processing fees may range between 1% to 3% of the loan amount."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for a business loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Documents usually include business proof, ITR, financial statements, and identity proof."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPage />
    </>
  );
}