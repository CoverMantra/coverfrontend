import type { Metadata } from "next";
import TravelInsurancePage from "./travel-client";

export const metadata: Metadata = {
  title: "Premium Travel Insurance Plans Online | CoverMantra",
  description:
    "Secure your international and domestic journeys with CoverMantra's premium travel insurance. Get emergency medical care abroad, loss of passport cover, and flight delay protection.",
  keywords: [
    "Travel Insurance",
    "International Travel Insurance",
    "Compare Travel Insurance",
    "Flight Delay Coverage",
    "Passport Loss Insurance",
    "Student Travel Insurance",
  ],
  alternates: {
    canonical: "https://www.covermantra.com/insurance/travel",
  },
};

export default function Page() {
  return <TravelInsurancePage />;
}