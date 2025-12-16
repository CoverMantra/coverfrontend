// app/insurance-calculator/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InsuranceCalculator() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [purchasePrice, setPurchasePrice] = useState<number>(500000);
  const [purchaseYear, setPurchaseYear] = useState<number>(2020);
  const [fuelType, setFuelType] = useState("petrol");
  const [coverageType, setCoverageType] = useState("basic");
  const [driverExperience, setDriverExperience] = useState<number>(3);
  const [citations, setCitations] = useState<number>(0);

  const calculatePremium = () => {
    let premium = 0;
    if (purchasePrice) premium += purchasePrice * 0.05;
    if (purchaseYear) premium += (new Date().getFullYear() - purchaseYear) * 20;
    premium -= driverExperience * 5;
    if (fuelType === "electric") premium -= 50;
    else if (fuelType === "diesel") premium += 20;
    if (coverageType === "comprehensive") premium += 100;
    else premium += 50;
    premium += citations * 20;
    return Math.max(Math.round(premium), 0);
  };

  const total = calculatePremium();

  return (
    <div className="flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white p-4 rounded-3xl shadow-2xl border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          🚗 Car Insurance Calculator
        </h2>

        <div className="grid gap-2">
          {/* Row 1: Brand & Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <div>
              <label className="block font-medium text-sm mb-1">Car Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-lg transition"
              >
                <option value="" disabled hidden>Select Brand</option>
                <option value="Maruti">Maruti</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Honda">Honda</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Tata">Tata</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Car Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g., Swift, Creta"
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-lg transition"
              />
            </div>
          </div>

          {/* Row 2: Purchase Price & Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <div>
              <label className="block font-medium text-sm mb-1">Purchase Price (₹)</label>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={10000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <p className="text-xs mt-1 text-gray-600">₹{purchasePrice}</p>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Year of Purchase</label>
              <input
                type="number"
                min={1990}
                max={2025}
                value={purchaseYear}
                onChange={(e) => setPurchaseYear(Number(e.target.value))}
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none hover:shadow-lg transition"
              />
            </div>
          </div>

          {/* Row 3: Fuel Type & Coverage Type */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <div>
              <label className="block font-medium text-sm mb-1">Fuel Type</label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none hover:shadow-lg transition"
              >
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="cng">CNG</option>
              </select>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Coverage Type</label>
              <select
                value={coverageType}
                onChange={(e) => setCoverageType(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none hover:shadow-lg transition"
              >
                <option value="basic">Basic</option>
                <option value="comprehensive">Comprehensive</option>
              </select>
            </div>
          </div>

          {/* Row 4: Driver Experience & Citations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
            <div>
              <label className="block font-medium text-sm mb-1">Driver Experience (years)</label>
              <input
                type="range"
                min={0}
                max={20}
                value={driverExperience}
                onChange={(e) => setDriverExperience(Number(e.target.value))}
                className="w-full accent-red-500"
              />
              <p className="text-xs mt-1 text-gray-600">{driverExperience} years</p>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Citations in past year</label>
              <input
                type="number"
                min={0}
                max={10}
                value={citations}
                onChange={(e) => setCitations(Number(e.target.value))}
                className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none hover:shadow-lg transition"
              />
            </div>
          </div>

          {/* Animated Total Premium */}
          <AnimatePresence>
            <motion.p
              key={total}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-lg font-bold text-center mt-4 p-3 rounded-xl ${
                total > 50000
                  ? "bg-red-300 text-red-900"
                  : total > 20000
                  ? "bg-yellow-300 text-yellow-900"
                  : "bg-green-300 text-green-900"
              } shadow-lg`}
            >
              💰 Estimated Premium: ₹{total}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
