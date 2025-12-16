"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ShieldCheck, Users, HeartPulse, CheckCircle } from "lucide-react";
import life from "../../../animations/family.json";
import AOS from "aos";
import "aos/dist/aos.css";
import LifeCalculator from "../AllCalculators/LifeCalculator";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function LifeInsurancePage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    dob: "",
    gender: "",
    sumAssured: 1000000,
    term: 20,
  });

  const [premium, setPremium] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculatePremium = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { dob, gender, sumAssured, term, name, mobile } = formData;

    if (!name || !mobile || !dob) {
      setPremium("⚠️ Please fill all fields correctly.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

    if (age < 18 || age > 65) {
      setPremium("⚠️ Age must be between 18 and 65 for this policy.");
      return;
    }

    let ratePerThousand = 0;
    if (age >= 18 && age <= 25) ratePerThousand = 6;
    else if (age <= 35) ratePerThousand = 8;
    else if (age <= 45) ratePerThousand = 12;
    else if (age <= 55) ratePerThousand = 18;
    else if (age <= 65) ratePerThousand = 28;

    const genderMultiplier = gender === "male" ? 1.1 : 1;
    const termMultiplier = term <= 10 ? 1 : term <= 20 ? 1.05 : 1.1;

    const basePremium = (Number(sumAssured) / 1000) * ratePerThousand;
    const totalPremium = basePremium * genderMultiplier * termMultiplier;

    setPremium(`💰 Estimated Life Insurance Premium: ₹${Math.round(totalPremium)}`);
  };

  return (
    <>
      <Head>
        <title>Life Insurance | YourBank</title>
      </Head>

      <main className="min-h-screen bg-green-50 text-green-900">
        {/* Hero Section */}
        <section
          className="bg-green-900 text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10"
          data-aos="fade-right"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <Player autoplay loop src={life} style={{ height: "300px", width: "300px" }} />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mt-6">Life Insurance</h1>
            <p className="mt-4 text-lg max-w-xl mx-auto md:mx-0">
              Protect your family's future with a secure life insurance plan. Get peace of mind with
              comprehensive coverage.
            </p>
          </div>
        </section>

        {/* Why Life Insurance */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">Why Choose Life Insurance?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-10 h-10 text-green-600" />, text: "Financial Security for Family" },
              { icon: <Users className="w-10 h-10 text-green-600" />, text: "Support for Education & Marriage" },
              { icon: <HeartPulse className="w-10 h-10 text-green-600" />, text: "Coverage for Critical Illness & Death" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
              >
                {item.icon}
                <p className="mt-4 font-semibold text-green-900">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Calculator */}
        {/* <section className="py-16 px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Calculate Your Life Insurance Premium
          </h2>
          <form onSubmit={calculatePremium} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Others</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-2">Sum Assured (₹)</label>
                <input
                  type="number"
                  name="sumAssured"
                  min={100000}
                  value={formData.sumAssured}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Policy Term (Years)</label>
                <input
                  type="number"
                  name="term"
                  min={5}
                  max={40}
                  value={formData.term}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full md:w-auto"
            >
              Calculate Premium
            </button>
          </form>

          {premium && (
            <div
              className="mt-6 text-center font-semibold text-green-800 p-6 bg-green-100 border border-green-400 rounded-xl"
              data-aos="zoom-in"
            >
              {premium}
            </div>
          )}
        </section> */}
        <section className="pt-4 pb-12 px-6 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Life Insurance Premium Calculator
          </h2>
          <div className="bg-green-50 p-0 rounded-xl shadow border mt-0">
            <LifeCalculator />
          </div>
        </section>

        {/* Documents & Benefits */}
        <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
            Documents & Benefits of Life Insurance
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Documents Required */}
            <div className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col" data-aos="fade-right">
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">Documents Required</h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Identity Proof (Aadhar/PAN/Passport)",
                  "Address Proof",
                  "Income Proof",
                  "Medical History/Reports",
                  "Passport Size Photograph",
                ].map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2"
                    data-aos="fade-right"
                    data-aos-delay={idx * 100}
                  >
                    <ShieldCheck className="text-green-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="flex-1 bg-white border rounded-xl shadow p-6 flex flex-col" data-aos="fade-left">
              <h3 className="text-xl font-bold mb-4 text-green-700 text-center">Benefits of Life Insurance</h3>
              <ul className="space-y-3 text-left flex-1">
                {[
                  "Financial security for family",
                  "Coverage for critical illnesses",
                  "Tax benefits on premium paid",
                  "Lump-sum payout on maturity or death",
                  "Peace of mind for future planning",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2"
                    data-aos="fade-left"
                    data-aos-delay={idx * 100}>
                    <CheckCircle className="text-green-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="py-16 px-6 bg-green-100 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">How to Get Your Life Insured?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Choose Plan", "Fill Details", "Pay Premium", "Get Policy"].map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
              >
                <div className="text-green-600 text-3xl font-bold mb-2">{idx + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Secure Your Future Today!</h2>
          <p className="text-green-800 mb-6">
            Ensure your family's financial stability with a reliable life insurance plan.
          </p>
          <a
            href="/apply-insurance"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition text-lg"
          >
            Apply Now
          </a>

        </section>
      </main>
    </>
  );
}
