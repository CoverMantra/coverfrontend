"use client";

import { useEffect, useState, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
} from "chart.js";

// Register necessary elements for the Doughnut chart
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(6);
  const [tenure, setTenure] = useState<number>(12);
  const [emi, setEmi] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // EMI and Total Interest Calculation
    const months = tenure;
    const r = interestRate / (12 * 100); // monthly interest rate
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);

    const totalInterest = emiCalc * months - loanAmount;
    const totalAmount = loanAmount + totalInterest;

    setEmi(emiCalc);
    setInterest(totalInterest);
    setTotal(totalAmount);

    // Destroy previous chart instance before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      const config: ChartConfiguration<"doughnut", number[], string> = {
        type: "doughnut",
        data: {
          labels: ["Principal", "Interest"],
          datasets: [
            {
              data: [loanAmount, totalInterest],
              backgroundColor: ["#08101E", "#FF690B"],
              borderColor: "#ffffff",
              borderWidth: 4,
              hoverOffset: 15,
            },
          ],
        },
        options: {
          cutout: "65%",
          plugins: {
            legend: {
              position: "bottom", // Already type 'const'
              labels: {
                // FIXED: Changed weight: "600" (string) to 600 (number)
                font: { size: 15, weight: 600 },
                padding: 20,
                usePointStyle: true,
              },
            },
            tooltip: {
              backgroundColor: "#08101E",
              titleFont: { size: 14 },
              bodyFont: { size: 16, weight: "bold" }, // Already correct type
            },
          },
        },
      };

      chartRef.current = new Chart(canvasRef.current, config);
    }

    // Clean-up function to destroy chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <section className="min-h-screen bg-[#FFF4E5] py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Satyam Shivam Sundaram Bar */}
        <div className="w-full flex justify-center items-center py-3 bg-white/70 backdrop-blur-md border-b border-[#FF690B]/20 mb-8 rounded-2xl">
          <p className="text-lg md:text-xl font-serif text-[#08101E] tracking-[0.25em] font-semibold opacity-90">
            🔱 सत्यम शिवम सुंदरम 🔱
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Heading */}
          <div className="bg-gradient-to-r from-[#08101E] to-[#1a2538] text-white py-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              EMI Calculator
            </h1>
            <p className="mt-3 text-white/80 text-lg">Calculate your monthly EMI instantly</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-10">
              
              {/* Sliders Section */}
              <div className="md:col-span-7 space-y-8">
                
                {/* Loan Amount Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#08101E]">Loan Amount</h3>
                    <div className="font-mono text-xl font-bold text-[#FF690B]">
                      ₹{loanAmount.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#FF690B]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹10,000</span>
                    <span>₹10,00,000</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#08101E]">Interest Rate (p.a)</h3>
                    <div className="font-mono text-xl font-bold text-[#FF690B]">
                      {interestRate}%
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#FF690B]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#08101E]">Loan Tenure</h3>
                    <div className="font-mono text-xl font-bold text-[#FF690B]">
                      {tenure} Months
                    </div>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={60}
                    step={1}
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full accent-[#FF690B]"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3 Months</span>
                    <span>60 Months (5 Years)</span>
                  </div>
                </div>
              </div>

              {/* Doughnut Chart Container */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/70 w-full max-w-[320px]">
                  <canvas ref={canvasRef} className="mx-auto" />
                </div>
              </div>
            </div>

            {/* Detailed Results Breakdown */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center text-[#08101E] mb-8">Detailed Breakdown</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                
                {/* EMI Output Card */}
                <div className="bg-gradient-to-br from-[#FF690B] to-[#FF8C00] text-white rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform">
                  <p className="text-sm opacity-90">Monthly EMI</p>
                  <p className="text-3xl font-bold mt-2">
                    ₹{Number(emi.toFixed(0)).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Principal Amount Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                  <p className="text-sm text-gray-600">Principal Amount</p>
                  <p className="text-3xl font-bold text-[#08101E] mt-2">
                    ₹{loanAmount.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Total Interest Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-3xl font-bold text-[#FF690B] mt-2">
                    ₹{Number(interest.toFixed(0)).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Total Payable Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                  <p className="text-sm text-gray-600">Total Payable</p>
                  <p className="text-3xl font-bold text-[#08101E] mt-2">
                    ₹{Number(total.toFixed(0)).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}