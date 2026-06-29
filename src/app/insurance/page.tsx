import type { Metadata } from "next";
import InsurancePage from "./insurance-client";

export const metadata: Metadata = {
  title: "Compare & Buy Insurance Plans Online | CoverMantra",
  description:
    "Compare and buy the best insurance plans with CoverMantra. Protect your family with comprehensive Health, Life, Car, Travel, Home, and Two-Wheeler insurance plans at affordable rates.",
  keywords: [
    "Insurance Plans",
    "Compare Insurance",
    "Buy Insurance Online",
    "Health Insurance",
    "Car Insurance",
    "Life Insurance",
    "Travel Insurance",
    "Home Insurance",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance",
  },
};

export default function Page() {
  return <InsurancePage />;
}