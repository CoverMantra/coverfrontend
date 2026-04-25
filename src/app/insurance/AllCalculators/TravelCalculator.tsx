"use client";
import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

// Define a type for the breakdown to ensure consistency
interface BreakdownItem {
  name: string;
  value: number;
}

const TravelInsuranceCalculator = () => {
  const [formData, setFormData] = useState({
    age: 30,
    tripDuration: 7,
    destination: "domestic",
    coverageType: "basic",
    addOns: {
      covidCoverage: false,
      luggageLoss: false,
      medicalEmergency: false,
      tripCancellation: false,
    },
  });

  const [premium, setPremium] = useState(0);
  const [breakdown, setBreakdown] = useState<BreakdownItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        addOns: { ...prev.addOns, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }));
    }
  };

  useEffect(() => {
    let base = 1200; 
    if (formData.age < 18) base *= 0.8;
    else if (formData.age > 60) base *= 1.5;
    const durationCharge = formData.tripDuration * 60;
    base += durationCharge;
    const destinationCharge = formData.destination === "international" ? 800 : 200;
    base += destinationCharge;
    const coverageCharge = formData.coverageType === "premium" ? 700 : 300;
    base += coverageCharge;

    // Add-ons
    let addOnCharges = 0;
    if (formData.addOns.covidCoverage) addOnCharges += 400;
    if (formData.addOns.luggageLoss) addOnCharges += 250;
    if (formData.addOns.medicalEmergency) addOnCharges += 500;
    if (formData.addOns.tripCancellation) addOnCharges += 350;

    base += addOnCharges;

    // Breakdown for chart
    setBreakdown([
      { name: "Duration", value: durationCharge },
      { name: "Destination", value: destinationCharge },
      { name: "Coverage", value: coverageCharge },
      { name: "Add-ons", value: addOnCharges },
    ]);

    setPremium(base);
  }, [formData]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="max-w-5xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-800">
        ✈️ Travel Insurance Calculator
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Form */}
        <div className="flex-1 bg-green-50 p-5 rounded-xl shadow-md space-y-2 text-sm">
          <div>
            <label className="block font-semibold text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              min="1"
              max="100"
              value={formData.age}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Trip Duration (Days)</label>
            <input
              type="number"
              name="tripDuration"
              min="1"
              max="365"
              value={formData.tripDuration}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Destination</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            >
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Coverage Type</label>
            <select
              name="coverageType"
              value={formData.coverageType}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            >
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Add-Ons</label>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              {Object.keys(formData.addOns).map((addon) => (
                <label key={addon} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={addon}
                    checked={formData.addOns[addon as keyof typeof formData.addOns]}
                    onChange={handleChange}
                  />
                  {addon.charAt(0).toUpperCase() + addon.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold text-green-700">
              💰 Estimated Premium: <span className="text-2xl">₹{premium}</span>
            </h3>
          </div>
        </div>

        {/* Right Side Chart */}
        <div className="flex-1 bg-green-50 p-5 rounded-xl shadow-md">
          <h3 className="text-center font-semibold text-gray-700 mb-4">Premium Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={breakdown}>
              <XAxis dataKey="name" />
              <YAxis />
              {/* ✅ FIXED: Handled potential undefined or non-number values for TypeScript build */}
              <Tooltip formatter={(value: any) => `₹${value}`} />
              <Legend />
              <Bar dataKey="value" barSize={40}>
                {breakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TravelInsuranceCalculator;
