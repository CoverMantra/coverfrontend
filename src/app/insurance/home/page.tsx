import type { Metadata } from "next";
import HomeInsurancePage from "./home-client";

export const metadata: Metadata = {
  title: "Home Insurance - Secure Your Property & Valuables | CoverMantra",
  description:
    "Compare the best home insurance policies online with CoverMantra. Protect your house structure and contents against fire, theft, earthquakes, and natural disasters.",
  keywords: [
    "Home Insurance",
    "House Structure Insurance",
    "Compare Home Insurance",
    "Disaster Home Insurance Coverage",
    "Burglary Protection Home Insurance",
    "Property Insurance India",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/home",
  },
};

export default function Page() {
  return <HomeInsurancePage />;
}