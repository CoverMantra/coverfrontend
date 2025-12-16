"use client";
import React, { useState, useMemo } from "react";
import { ShieldCheck, Calendar, Car, Info } from "lucide-react";

// Get the current year for dynamic age calculation
const CURRENT_YEAR = new Date().getFullYear();

export default function TwoWheelerInsuranceCalculator() {
  const [form, setForm] = useState({
    vehicleValue: 50000,
    registrationYear: CURRENT_YEAR - 2, // New field: to calculate age dynamically
    cubicCapacity: 150, // New field: CC for engine size
    manufacturer: "hero", // New field: influence premium
    city: "metro",
    coverageType: "comprehensive", // **FIXED: Changed to lowercase for consistent logic**
    addOns: {
      roadsideAssistance: false,
      engineProtection: false,
      zeroDepreciation: false, // Added a new popular add-on
    },
    noClaimBonus: 25, // Updated default to a more common NCB
  });

  const handle = (key: string, val: any) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleAddOn = (key: string, val: boolean) =>
    setForm((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [key]: val },
    }));

  // Calculate vehicle age based on registration year
  const vehicleAge = useMemo(
    () => CURRENT_YEAR - form.registrationYear,
    [form.registrationYear]
  );

  const premium = useMemo(() => {
    let base = form.vehicleValue * 0.025; // Adjusted base rate

    // Vehicle Age adjustment
    if (vehicleAge >= 10) base *= 1.3;
    else if (vehicleAge >= 5) base *= 1.2;
    else if (vehicleAge >= 3) base *= 1.1;

    // CC adjustment (Higher CC = Higher risk/premium)
    if (form.cubicCapacity >= 350) base *= 1.3;
    else if (form.cubicCapacity >= 150) base *= 1.15;

    // Manufacturer adjustment (simplified for demo)
    if (form.manufacturer === "premium") base *= 1.1;

    // City adjustment
    if (form.city === "metro") base *= 1.2;
    else if (form.city === "urban") base *= 1.1;

    // Coverage Type
    if (form.coverageType === "third-party") base *= 0.4; // Third-party is significantly cheaper

    // Add-Ons
    if (form.addOns.roadsideAssistance) base += 500;
    if (form.addOns.engineProtection) base += 1000;
    if (form.addOns.zeroDepreciation) base += form.vehicleValue * 0.01; // Zero Dep is based on IDV

    // No Claim Bonus (NCB) Discount
    // Ensure NCB is between 0 and 50%
    const ncbDiscount = Math.max(0, Math.min(50, form.noClaimBonus)) / 100;
    base *= 1 - ncbDiscount;

    // Minimum premium just in case of very low inputs
    return Math.round(Math.max(1500, base));
  }, [form, vehicleAge]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl font-bold text-center text-sky-800 mb-6">
        🏍️ Two-Wheeler Insurance Calculator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Enter Vehicle Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Vehicle Value */}
            <label className="block text-sm font-medium text-gray-800">
              Insured Declared Value (IDV / Value in INR)
              <input
                type="number"
                min={10000}
                value={form.vehicleValue}
                onChange={(e) => handle("vehicleValue", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-sm"
              />
            </label>

            {/* Registration Year */}
            <label className="block text-sm font-medium text-gray-800">
              Registration Year
              <input
                type="number"
                min={CURRENT_YEAR - 20}
                max={CURRENT_YEAR}
                value={form.registrationYear}
                onChange={(e) => handle("registrationYear", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Calculated Vehicle Age - Display only */}
            <div className="block text-sm font-medium text-gray-800">
              Vehicle Age (Years)
              <div className="w-full p-2 border rounded-md mt-1 shadow-sm bg-gray-50 text-gray-600 flex items-center h-[38px] text-sm">
                <Calendar className="w-4 h-4 mr-2" /> {vehicleAge}
              </div>
            </div>

            {/* Cubic Capacity (CC) */}
            <label className="block text-sm font-medium text-gray-800">
              Engine Capacity (CC)
              <input
                type="number"
                min={50}
                max={1500}
                value={form.cubicCapacity}
                onChange={(e) => handle("cubicCapacity", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>

            {/* Manufacturer/Brand */}
            <label className="block text-sm font-medium text-gray-800">
              Manufacturer
              <select
                value={form.manufacturer}
                onChange={(e) => handle("manufacturer", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="hero">Hero/Honda/Bajaj (Standard)</option>
                <option value="tvs">TVS/Suzuki (Standard)</option>
                <option value="premium">KTM/Royal Enfield/Yamaha (Premium)</option>
              </select>
            </label>

            {/* City */}
            <label className="block text-sm font-medium text-gray-800">
              City Tier
              <select
                value={form.city}
                onChange={(e) => handle("city", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="metro">Metro (Tier 1)</option>
                <option value="urban">Urban (Tier 2)</option>
                <option value="rural">Rural (Tier 3)</option>
              </select>
            </label>

            {/* Coverage Type */}
            <label className="block text-sm font-medium text-gray-800">
              Coverage Type
              <select
                value={form.coverageType}
                onChange={(e) => handle("coverageType", e.target.value)}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              >
                <option value="comprehensive">Comprehensive (Own Damage + Third Party)</option>
                <option value="third-party">Third-Party Only</option>
              </select>
            </label>

            {/* No Claim Bonus */}
            <label className="block text-sm font-medium text-gray-800">
              No Claim Bonus (%)
              <input
                type="number"
                min={0}
                max={50}
                step={5}
                value={form.noClaimBonus}
                onChange={(e) => handle("noClaimBonus", Number(e.target.value))}
                className="w-full p-2 border rounded-md mt-1 shadow-sm focus:ring-2 focus:ring-sky-400 text-sm"
              />
            </label>
          </div>

          {/* Add-Ons */}
          <div className="mt-4">
            <span className="block text-sm font-medium text-gray-800 mb-2">
              Select Add-Ons (Available with Comprehensive Only)
            </span>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.addOns.roadsideAssistance}
                  disabled={form.coverageType === "third-party"}
                  onChange={(e) =>
                    handleAddOn("roadsideAssistance", e.target.checked)
                  }
                  className="rounded text-sky-600 focus:ring-sky-500"
                />
                Roadside Assistance (+₹500)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.addOns.engineProtection}
                  disabled={form.coverageType === "third-party"}
                  onChange={(e) =>
                    handleAddOn("engineProtection", e.target.checked)
                  }
                  className="rounded text-sky-600 focus:ring-sky-500"
                />
                Engine Protection (+₹1000)
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={form.addOns.zeroDepreciation}
                  disabled={form.coverageType === "third-party"}
                  onChange={(e) =>
                    handleAddOn("zeroDepreciation", e.target.checked)
                  }
                  className="rounded text-sky-600 focus:ring-sky-500"
                />
                Zero Depreciation (Approx. +1% of IDV)
              </label>
            </div>
            {form.coverageType === "third-party" && (
              <p className="text-xs text-red-500 mt-2">
                * Add-ons are generally only available with a Comprehensive policy.
              </p>
            )}
          </div>
        </div>

        {/* Right: Estimate Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-gradient-to-br from-sky-500/90 to-indigo-700/90 backdrop-blur-md text-white p-4 rounded-xl shadow-xl border border-white/20 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-lg font-bold mb-4 text-center">
              📊 Estimated Premium
            </h2>
            <div className="space-y-3">
              {/* Total Premium - FIX APPLIED: Ensured correct sizing/weight */}
              <div className="flex items-center justify-between bg-white/20 p-3 rounded-lg border-2 border-white/50">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="w-5 h-5 text-green-300" /> Total Premium
                </span>
                <span className="font-extrabold text-2xl">
                  ₹ {premium.toLocaleString('en-IN')}
                </span>
              </div>
              
              {/* Vehicle Value */}
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                <span className="flex items-center gap-1 text-sm">
                  <Car className="w-4 h-4 text-yellow-300" /> Insured Value (IDV)
                </span>
                <span className="font-bold text-base">
                  ₹ {form.vehicleValue.toLocaleString('en-IN')}
                </span>
              </div>
              
              {/* Coverage Type */}
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                <span className="flex items-center gap-1 text-sm">
                  <Info className="w-4 h-4 text-pink-300" /> Coverage Type
                </span>
                {/* FIX APPLIED: Ensure consistent capitalization and separation for display */}
                <span className="font-bold text-base capitalize">
                  {form.coverageType.replace('-', ' ')}
                </span>
              </div>
               {/* Vehicle Age */}
              <div className="flex items-center justify-between bg-white/10 p-2 rounded-lg">
                <span className="flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-300" /> Vehicle Age
                </span>
                <span className="font-bold text-base">
                  {vehicleAge} Years
                </span>
              </div>

              <p className="text-[13px] text-indigo-100 text-center mt-2 leading-snug">
                * Premiums are estimates based on simplified logic and may vary with insurers, taxes, and final vehicle details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}