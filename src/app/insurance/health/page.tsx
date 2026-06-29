import type { Metadata } from "next";
import HealthInsurancePage from "./health-client";

export const metadata: Metadata = {
  title: "Best Health Insurance Plans Online in India | CoverMantra",
  description:
    "Protect your health and wealth with CoverMantra's comprehensive health insurance plans. Compare individual plans, family floater plans, and senior citizen plans with cashless hospitalization.",
  keywords: [
    "Health Insurance",
    "Cashless Health Insurance",
    "Family Floater Plan",
    "Individual Health Insurance",
    "Senior Citizen Health Plan",
    "80D Tax Benefits Insurance",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/health",
  },
};

export default function Page() {
  return <HealthInsurancePage />;
}