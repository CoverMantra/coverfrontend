import type { Metadata } from "next";
import LifeInsurancePage from "./life-client";

export const metadata: Metadata = {
  title: "Best Life Insurance Plans & Term Insurance | CoverMantra",
  description:
    "Secure your family's future with CoverMantra's life insurance and term insurance policies. Compare plans with high claim settlement ratios (99.8%), critical illness shields, and milestone security.",
  keywords: [
    "Life Insurance",
    "Term Insurance",
    "Best Term Insurance Plan",
    "Family Financial Shield",
    "High Claim Payout Ratio Insurance",
    "Tax Savings 80C Insurance",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/life",
  },
};

export default function Page() {
  return <LifeInsurancePage />;
}