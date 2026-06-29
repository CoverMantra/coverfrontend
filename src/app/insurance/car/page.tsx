import type { Metadata } from "next";
import CarInsurancePage from "./car-client";

export const metadata: Metadata = {
  title: "Best Car Insurance Plans - Compare & Buy Online | CoverMantra",
  description:
    "Protect your car with CoverMantra's elite car insurance plans. Compare third-party liability, comprehensive car insurance, and zero depreciation plans from top providers with cashless repairs.",
  keywords: [
    "Car Insurance",
    "Compare Car Insurance",
    "Zero Depreciation Insurance",
    "Comprehensive Car Insurance",
    "Third Party Car Insurance",
    "Cashless Garage Repair",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/car",
  },
};

export default function Page() {
  return <CarInsurancePage />;
}