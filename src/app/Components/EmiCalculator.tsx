"use client";
import { useEffect, useState, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(6);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [total, setTotal] = useState(0);

  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const months = tenure;
    const r = interestRate / (12 * 100);
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);

    const totalInterest = emiCalc * months - loanAmount;
    const totalAmount = loanAmount + totalInterest;

    setEmi(emiCalc);
    setInterest(totalInterest);
    setTotal(totalAmount);

    // Destroy previous chart if exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, {
        type: "doughnut",
        data: {
          labels: ["Principal", "Interest"],
          datasets: [
            {
              data: [loanAmount, totalInterest],
              backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
              hoverOffset: 12,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: "bottom" as const,
              labels: { font: { size: 14 } },
            },
          },
        },
      });
    }
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-5xl bg-green-50 rounded-2xl shadow-xl p-4 md:p-10">
        <h1 className="text-3xl sm:text-3xl md:text-4xl text-center font-bold text-green-600 mt-[-5] mb-4">
          EMI Calculator
        </h1>
            <div className="grid md:grid-cols-3 gap-8">
          {/* Sliders */}
          <div className="md:col-span-2 space-y-2">
            <div className="p-3 rounded-xl border hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Loan Amount</h2>
                <div className="flex items-center border rounded px-2">
                  <span>₹</span>
                  <input
                    type="number"
                    min={10000}
                    max={1000000}
                    step={10000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-28 text-right outline-none"
                  />
                </div>
              </div>
              <input
                type="range"
                min={10000}
                max={1000000}
                step={10000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>10K</span>
                <span>10L</span>
              </div>
            </div>

            {/* Interest */}
            <div className="p-4 rounded-xl border hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Interest Rate (p.a)</h2>
                <div className="flex items-center border rounded px-2">
                  <input
                    type="number"
                    min={1}
                    max={50}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-20 text-right outline-none"
                  />
                  <span>%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="p-4 rounded-xl border hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Loan Tenure</h2>
                <div className="flex items-center border rounded px-2">
                  <input
                    type="number"
                    min={3}
                    max={60}
                    step={1}
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-20 text-right outline-none"
                  />
                  <span>Months</span>
                </div>
              </div>
              <input
                type="range"
                min={3}
                max={60}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>3M</span>
                <span>60M (5Yr)</span>
              </div>
            </div>
          </div>
          {/* Chart */}
          <div className="bg-gradient-to-br from-blue-100 to-pink-300 rounded-2xl p-6 flex justify-center items-center">
            <canvas ref={canvasRef} width="200" height="200"></canvas>
          </div>
        </div>

        {/* Details */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Detailed Calculation
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="bg-green-500 text-white rounded-xl p-4 text-center shadow hover:scale-105 transition">
              <p>Monthly EMI</p>
              <p className="text-2xl font-bold">
                ₹{Number(emi.toFixed(0)).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="bg-indigo-400 text-white rounded-xl p-4 text-center shadow hover:scale-105 transition">
              <p>Principal</p>
              <p className="text-2xl font-bold">
                ₹{loanAmount.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="bg-teal-400 text-white rounded-xl p-4 text-center shadow hover:scale-105 transition">
              <p>Total Interest</p>
              <p className="text-2xl font-bold">
                ₹{Number(interest.toFixed(0)).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="bg-blue-400 text-white rounded-xl p-4 text-center shadow hover:scale-105 transition">
              <p>Total Amount</p>
              <p className="text-2xl font-bold">
                ₹{Number(total.toFixed(0)).toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
