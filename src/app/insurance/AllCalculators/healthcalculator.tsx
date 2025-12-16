
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

export default function InsuranceCalculator() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        age: "",
        gender: "",
        smoker: "",
        diseases: "",
        coverage: "",
        term: "",
    });
    const [result, setResult] = useState<any>(null);
    const steps = 3;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const nextStep = () => setStep((prev) => Math.min(prev + 1, steps));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
    const calculatePremium = () => {
        const age = parseInt(userData.age);
        const coverage = parseInt(userData.coverage);
        const term = parseInt(userData.term);
        const basePremium = (coverage / 1000) * 5;
        let riskFactor = 1;
        if (age > 40) riskFactor += 0.3;
        if (age > 55) riskFactor += 0.6;
        if (userData.smoker === "yes") riskFactor += 0.25;
        if (userData.diseases === "yes") riskFactor += 0.2;
        if (userData.gender === "male") riskFactor += 0.05;
        const finalPremium = Math.round((basePremium * riskFactor) / term);
        const breakdown = [
            { name: "Base Premium", value: Math.round(basePremium) },
            { name: "Risk Loading", value: Math.round(basePremium * (riskFactor - 1)) },
            { name: "Final Premium", value: finalPremium },
        ];

        // Yearly data for bar chart
        const yearlyData = Array.from({ length: term }, (_, i) => ({
            year: `Year ${i + 1}`,
            premium: finalPremium,
        }));
        setResult({ finalPremium, breakdown, yearlyData });
        setStep(steps + 1);
    };
    const totalFields = 6;
    const filledFields = [
        userData.age,
        userData.gender,
        userData.smoker,
        userData.diseases,
        userData.coverage,
        userData.term,
    ].filter((field) => field !== "" && field !== null).length;
    const profileCompletion = Math.round((filledFields / totalFields) * 100);
    return (
        <div className="max-w-2xl mx-auto p-3 sm:p-4 md:p-6">
            <h1 className="text-xl md:text-3xl font-bold text-center mb-2">
                🏥 Health Insurance Calculator
            </h1>
           <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <motion.div
                    className="bg-blue-500 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${profileCompletion}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <p className="text-center mb-4 font-medium">{profileCompletion}% Profile Completed</p>
            {/* Step forms */}
            {step === 1 && (
                <div className="space-y-2">
                    <select
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded text-gray-700`}
                    >
                        {/* Placeholder-like option */}
                        <option value="" disabled hidden>
                            Select Age
                        </option>
                        {Array.from({ length: 53 }, (_, i) => 18 + i).map((age) => (
                            <option
                                key={age}
                                value={age}
                                className="text-black"
                            >
                                {age} Years
                            </option>
                        ))}
                    </select>
                    <select
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-gray-700"
                    >
                        <option value="" disabled hidden>
                            Select Gender
                        </option>
                        <option value="male" className="text-black">Male</option>
                        <option value="female" className="text-black">Female</option>
                    </select>

                    <button
                        onClick={nextStep}
                        className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Next →
                    </button>
                </div>
            )}
            {step === 2 && (
                <div className="space-y-4">
                    <select
                        name="smoker"
                        value={userData.smoker}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="" disabled hidden>
                            Are You Smoker?
                        </option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                    <select
                        name="diseases"
                        value={userData.diseases}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="" disabled hidden>Do you have pre-existing diseases?</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <button
                            onClick={prevStep}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={nextStep}
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-4">
                    <select
                        name="coverage"
                        value={userData.coverage}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="" disabled hidden>
                            Coverage Amount
                        </option>
                        {Array.from({ length: 20 }, (_, i) => {
                            const amount = (i + 1) * 100000;
                            return (
                                <option key={amount} value={amount}>
                                    ₹{amount.toLocaleString()}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        name="term"
                        value={userData.term}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="" disabled hidden>
                            Term (Years)
                        </option>
                        {Array.from({ length: 10 }, (_, i) => {
                            const year = i + 1;
                            return (
                                <option key={year} value={year}>
                                    {year} {year === 1 ? "Year" : "Years"}
                                </option>
                            );
                        })}
                    </select>

                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                        <button
                            onClick={prevStep}
                            className="px-4 py-2 bg-gray-400 text-white rounded"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={calculatePremium}
                            className="px-4 py-2 bg-green-500 text-white rounded"
                        >
                            Calculate ✅
                        </button>
                    </div>
                </div>
            )}

            {/* Results */}
            {step === steps + 1 && result && (
                <div className="mt-4 p-4 border rounded bg-green-50">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">📊 Result</h2>
                    <p className="mb-4 text-center">
                        Estimated Premium:{" "}
                        <span className="font-bold text-green-600">₹{result.finalPremium} / year</span>
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                      <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={result.breakdown}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                >
                                    <Cell fill="#3B82F6" />
                                    <Cell fill="#F97316" /> 
                                    <Cell fill="#10B981" /> 
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Bar Chart */}
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={result.yearlyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="premium" fill="#3B82F6" name="Yearly Premium" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => {
                                setStep(1);
                                setUserData({
                                    age: "",
                                    gender: "",
                                    smoker: "",
                                    diseases: "",
                                    coverage: "",
                                    term: "",
                                });
                                setResult(null);
                            }}
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            🔄 Recalculate
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
