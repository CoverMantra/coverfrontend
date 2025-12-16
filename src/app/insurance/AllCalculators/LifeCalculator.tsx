"use client";
import React, { useState, useMemo } from "react";
import { ShieldCheck, Heart, Calendar } from "lucide-react";

export default function LifeInsuranceCalculator() {
  const [form, setForm] = useState({
    age: 30,
    gender: "male",
    annualIncome: 600000,
    dependents: 1,
    termYears: 20,
    smoker: false,
    health: "good",
    occupationRisk: "low",
    coverageType: "term",
  });

  const handle = (key: string, val: any) =>
    setForm((p) => ({ ...p, [key]: val }));

  // --- Recommended Coverage ---
  const recommendedCoverage = useMemo(() => {
    const base = form.annualIncome * 12;
    const dependentBuffer = form.dependents * 800000;
    return Math.round((base + dependentBuffer) / 1000) * 1000;
  }, [form]);

  // --- Base Rate ---
  const baseRatePer1000 = (age: number) => {
    if (age < 30) return 0.9;
    if (age < 40) return 1.4;
    if (age < 50) return 3.0;
    if (age < 60) return 6.0;
    return 12.0;
  };

  // --- Premium Estimate ---
  const annualPremium = useMemo(() => {
    let rate = baseRatePer1000(form.age);
    if (form.smoker) rate *= 1.8;
    if (form.health === "average") rate *= 1.2;
    if (form.health === "poor") rate *= 1.6;
    if (form.occupationRisk === "medium") rate *= 1.15;
    if (form.occupationRisk === "high") rate *= 1.4;
    if (form.coverageType === "whole") rate *= 1.5;
    if (form.coverageType === "ulip") rate *= 1.8;

    const termFactor = 1 + (form.termYears - 10) * 0.02;
    return Math.round((recommendedCoverage / 1000) * rate * termFactor);
  }, [form, recommendedCoverage]);

  const monthlyPremium = Math.round(annualPremium / 12);
  const formatINR = (n: number) => n.toLocaleString("en-IN");

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-5">
      <h1 className="text-2xl font-bold text-center text-sky-800 mb-4">
        🛡️ Life Insurance Calculator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white/95 p-3 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Enter Your Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Age */}
            <label className="block text-sm font-medium text-gray-800">
              Age
              <input
                type="number"
                value={form.age}
                min={18}
                max={80}
                onChange={(e) => handle("age", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Gender */}
            <label className="block text-sm font-medium text-gray-800">
              Gender
              <select
                value={form.gender}
                onChange={(e) => handle("gender", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            {/* Income */}
            <label className="block text-sm font-medium text-gray-800">
              Annual Income (INR)
              <input
                type="number"
                value={form.annualIncome}
                onChange={(e) =>
                  handle("annualIncome", Number(e.target.value))
                }
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Dependents */}
            <label className="block text-sm font-medium text-gray-800">
              Dependents
              <input
                type="number"
                min={0}
                value={form.dependents}
                onChange={(e) => handle("dependents", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Term */}
            <label className="block text-sm font-medium text-gray-800">
              Term (Years)
              <input
                type="number"
                min={5}
                max={40}
                value={form.termYears}
                onChange={(e) => handle("termYears", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Coverage Type */}
            <label className="block text-sm font-medium text-gray-800">
              Coverage Type
              <select
                value={form.coverageType}
                onChange={(e) => handle("coverageType", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="term">Term Insurance</option>
                <option value="whole">Whole Life</option>
                <option value="ulip">ULIP</option>
              </select>
            </label>

            {/* Health */}
            <label className="block text-sm font-medium text-gray-800">
              Health Condition
              <select
                value={form.health}
                onChange={(e) => handle("health", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </label>

            {/* Occupation Risk */}
            <label className="block text-sm font-medium text-gray-800">
              Occupation Risk
              <select
                value={form.occupationRisk}
                onChange={(e) => handle("occupationRisk", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </label>
          </div>
           <div className="mt-3">
            <span className="block text-sm font-medium text-gray-800 mb-1">
              Smoker
            </span>
            <div className="flex gap-4">
              <label className="flex items-center gap-1 cursor-pointer text-sm">
                <input
                  type="radio"
                  checked={form.smoker === true}
                  onChange={() => handle("smoker", true)}
                  className="h-3 w-3 text-sky-600 focus:ring-sky-400"
                />
                Yes
              </label>
              <label className="flex items-center gap-1 cursor-pointer text-sm">
                <input
                  type="radio"
                  checked={form.smoker === false}
                  onChange={() => handle("smoker", false)}
                  className="h-3 w-3 text-sky-600 focus:ring-sky-400"
                />
                No
              </label>
            </div>
          </div>
        </div>
          <div className="lg:col-span-1">
          <div className="sticky top-6 bg-gradient-to-br from-sky-500/95 to-indigo-700/95 backdrop-blur-md text-white p-5 rounded-xl shadow-xl border border-white/20 hover:scale-[1.01] transition-transform duration-300 w-[95%] mx-auto">
            <h2 className="text-lg font-bold mb-3 text-center">
              📊 Your Estimate
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-md">
                <span className="flex items-center gap-1 text-sm">
                  <ShieldCheck className="w-4 h-4 text-green-300" /> Coverage
                </span>
                <span className="font-bold text-sm">
                  ₹ {formatINR(recommendedCoverage)}
                </span>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-md">
                <span className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4 text-yellow-300" /> Annual Premium
                </span>
                <span className="font-bold text-sm">
                  ₹ {formatINR(annualPremium)}
                </span>
              </div>
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-md">
                <span className="flex items-center gap-1 text-sm">
                  <Heart className="w-4 h-4 text-pink-300" /> Monthly Premium
                </span>
                <span className="font-bold text-sm">
                  ₹ {formatINR(monthlyPremium)}
                </span>
              </div>
              <p className="text-[12px] text-indigo-100 text-center mt-1 leading-snug">
                * Premiums are estimates and may vary with insurers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
