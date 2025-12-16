"use client";

import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HomeInsuranceCalculator = () => {
  const [formData, setFormData] = useState({
    propertyValue : 0 ,
    contentsPercentage: 20,
    propertyAge: 0,
    constructionType: "rcc",
    locationRisk: 1,
    policyTerm: 1,
    addOns: { earthquake: false, burglary: false, flood: false, fire: false },
  });

  const [premium, setPremium] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: isNaN(Number(value)) ? value : Number(value),
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [name]: checked },
    }));
  };

  const calculatePremium = () => {
    const {
      propertyValue,
      contentsPercentage,
      addOns,
      locationRisk,
      propertyAge,
      constructionType,
      policyTerm,
    } = formData;

    const contentsCoverage = (contentsPercentage / 100) * propertyValue;
    const basePremium = propertyValue * 0.0015;
    const ageFactor = propertyAge > 30 ? 1.25 : propertyAge > 20 ? 1.1 : 1;
    const constructionFactor = constructionType === "kutcha" ? 1.3 : 1;

    let addOnPremium = 0;
    for (const key in addOns) {
      const k = key as keyof typeof addOns;
      if (addOns[k]) addOnPremium += propertyValue * 0.0005;
    }

    const contentsPremium = contentsCoverage * 0.001;

    const totalPremium =
      (basePremium + addOnPremium + contentsPremium) *
      locationRisk *
      ageFactor *
      constructionFactor *
      policyTerm;

    setPremium(totalPremium);
  };

  const pieData = {
    labels: ["Base Premium", "Contents", "Add-ons", "Location Factor"],
    datasets: [ 
      {
        data: [
          formData.propertyValue * 0.0015,
          (formData.contentsPercentage / 100) * formData.propertyValue * 0.001,
          Object.values(formData.addOns).filter(Boolean).length *
            formData.propertyValue *
            0.0005,
          formData.locationRisk === 1 ? 500 : 1000,
        ],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
        hoverOffset: 8,
      },
    ],
  };

  const pieOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: { size: 14 }, // smaller legend font
        },
      },
      tooltip: {
        bodyFont: { size: 14 },
        titleFont: { size: 16 },
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-green-50 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4 text-indigo-700">
        🏠 Home Insurance Calculator
      </h2>

      <div className="flex flex-col md:flex-row gap-3 items-start">
        {/* Left Side Form */}
        <div className="flex-1 space-y-2 text-sm p-3 border rounded-lg shadow-sm bg-gray-50">
          <div>
            <label className="block font-semibold text-gray-700 text-sm">
              Property Value (₹)
            </label>
            <input
              type="number"
              name="propertyValue"
              value={formData.propertyValue}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 text-sm">
              Contents Coverage (%)
            </label>
            <input
              type="number"
              name="contentsPercentage"
              value={formData.contentsPercentage}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-700 text-sm">
                Property Age (Years)
              </label>
              <input
                type="number"
                name="propertyAge"
                value={formData.propertyAge}
                onChange={handleChange}
                className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 text-sm">
                Construction Type
              </label>
              <select
                name="constructionType"
                value={formData.constructionType}
                onChange={handleChange}
                className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
              >
                <option value="rcc">RCC / Concrete</option>
                <option value="kutcha">Kutcha / Non-RCC</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 text-sm">
              Location Risk
            </label>
            <select
              name="locationRisk"
              value={formData.locationRisk}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
            >
              <option value={1}>Low Risk</option>
              <option value={1.2}>High Risk</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 text-sm">
              Policy Term (Years)
            </label>
            <select
              name="policyTerm"
              value={formData.policyTerm}
              onChange={handleChange}
              className="mt-1 block w-full px-2 py-1 border rounded-md text-sm"
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Years</option>
              <option value={3}>3 Years</option>
              <option value={5}>5 Years</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 text-sm">
              Add-ons
            </label>
            <div className="grid grid-cols-2 gap-1 mt-1 text-sm">
              {Object.keys(formData.addOns).map((addon) => (
                <label key={addon} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    name={addon}
                    checked={formData.addOns[addon as keyof typeof formData.addOns]}
                    onChange={handleCheckboxChange}
                    className="h-3 w-3"
                  />
                  {addon.charAt(0).toUpperCase() + addon.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-3">
            <button
              onClick={calculatePremium}
              className="px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm shadow hover:bg-indigo-700"
            >
              Calculate
            </button>
          </div>

          {premium > 0 && (
            <h3 className="text-sm font-semibold text-center text-green-700 mt-3">
              💰 Estimated Premium: ₹{premium.toFixed(2)}
            </h3>
          )}
        </div>

        {/* Right Side Pie Chart */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10">
          <div style={{ width: "300px", height: "300px" }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInsuranceCalculator;
