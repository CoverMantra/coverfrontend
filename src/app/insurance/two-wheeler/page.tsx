import type { Metadata } from "next";
import TwoWheelerInsurancePage from "./two-wheeler-client";

export const metadata: Metadata = {
  title: "Best Two-Wheeler & Bike Insurance Plans Online | CoverMantra",
  description:
    "Compare and buy bike & scooter insurance policies online with CoverMantra. Protect your two-wheeler with third-party liability cover, comprehensive plans, cashless repairs, and NCB rewards.",
  keywords: [
    "Two Wheeler Insurance",
    "Bike Insurance Online",
    "Scooter Insurance",
    "Comprehensive Bike Insurance",
    "Third Party Bike Insurance",
    "No Claim Bonus Bike Insurance",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/two-wheeler",
  },
};

export default function Page() {
  return <TwoWheelerInsurancePage />;
}