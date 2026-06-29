import type { Metadata } from "next";
import BusinessLoansPage from "./business-loans-client";

export const metadata: Metadata = {
  title: "Business Loans - Flexible Funding & Quick Disbursal | CoverMantra",
  description:
    "Get flexible business funding solutions for startups, MSMEs, and enterprises with CoverMantra. Compare term loans, working capital loans, and equipment financing with minimal documentation.",
  keywords: [
    "Business Loan",
    "MSME Loan",
    "Startup Funding",
    "Working Capital Loan",
    "Equipment Financing",
    "Term Loan",
    "Flexible Repayment Loans",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/business-loans",
  },
};

export default function Page() {
  return <BusinessLoansPage />;
}