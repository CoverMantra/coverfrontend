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
          responsive: true,
          maintainAspectRatio: false,
          cutout: "65%",
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: { size: 14, weight: 600 },
                padding: 16,
                usePointStyle: true,
              },
            },
            tooltip: {
              backgroundColor: "#08101E",
              titleFont: { size: 14 },
              bodyFont: { size: 16, weight: "bold" },
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
    <section className="min-h-screen bg-[#FFF4E5] py-6 px-4 sm:py-12 md:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
          
          {/* Heading */}
          <div className="bg-gradient-to-r from-[#08101E] to-[#1a2538] text-white py-8 px-4 sm:py-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              EMI Calculator
            </h1>
            <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base md:text-lg max-w-md mx-auto font-medium">
              Calculate your monthly EMI instantly with real-time breakdowns
            </p>
          </div>

          <div className="p-4 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Sliders Section */}
              <div className="md:col-span-7 space-y-6 sm:space-y-8 w-full">
                
                {/* Loan Amount Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#08101E]">Loan Amount</h3>
                    <div className="font-mono text-xl sm:text-2xl font-black text-[#FF690B]">
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
                    className="w-full accent-[#FF690B] h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                    <span>₹10,000</span>
                    <span>₹10,00,000</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#08101E]">Interest Rate (p.a)</h3>
                    <div className="font-mono text-xl sm:text-2xl font-black text-[#FF690B]">
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
                    className="w-full accent-[#FF690B] h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-[#08101E]">Loan Tenure</h3>
                    <div className="font-mono text-xl sm:text-2xl font-black text-[#FF690B]">
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
                    className="w-full accent-[#FF690B] h-2 bg-gray-100 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                    <span>3 Months</span>
                    <span>60 Months (5 Years)</span>
                  </div>
                </div>
              </div>

              {/* Doughnut Chart Container */}
              <div className="md:col-span-5 flex justify-center items-center w-full mt-4 md:mt-0">
                <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-50 w-full max-w-[340px] h-[340px] relative flex flex-col justify-center">
                  <div className="relative w-full h-full">
                    <canvas ref={canvasRef} />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Results Breakdown */}
            <div className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-black text-center text-[#08101E] mb-6 sm:mb-8 tracking-tight">
                Detailed Breakdown
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                {/* EMI Output Card */}
                <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-[#FF690B] to-[#FF8C00] text-white rounded-2xl p-5 sm:p-6 text-center shadow-lg hover:scale-[1.03] transition-all duration-300 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider opacity-90">Monthly EMI</p>
                  <p className="text-2xl sm:text-3xl font-black mt-2 tracking-tight">
                    ₹{Number(emi.toFixed(0)).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Principal Amount Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">Principal Amount</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#08101E] mt-2 tracking-tight">
                    ₹{loanAmount.toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Total Interest Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">Total Interest</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#FF690B] mt-2 tracking-tight">
                    ₹{Number(interest.toFixed(0)).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Total Payable Output Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">Total Payable</p>
                  <p className="text-2xl sm:text-3xl font-black text-[#08101E] mt-2 tracking-tight">
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