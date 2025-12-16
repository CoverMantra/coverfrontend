"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Footer from "../Components/Footer";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    salaryMode: "",
    bankName: "",
    salarySlip: "",
    address: "",
    state: "",
    city: "",
    businessName: "",
    businessType: "",
    doesFileITR: "",
    doesFileGST: "",
    dob: "",
  });

  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files && files.length > 0 ? files[0].name : "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    localStorage.setItem("userInfo", JSON.stringify(formData));
    router.push("/dashboard");
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4 mt-15 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">Personal Info</h2>

        {[
          { name: "name", placeholder: "Full Name" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "phone", placeholder: "Phone", type: "tel" },
          { name: "pan", placeholder: "PAN" },
          { name: "pincode", placeholder: "Pincode" },
          { name: "loanAmount", placeholder: "Loan Amount", type: "number" },
          { name: "income", placeholder: "Monthly Income", type: "number" },
          { name: "bankName", placeholder: "Bank Name" },
          { name: "address", placeholder: "Address" },
          { name: "state", placeholder: "State" },
          { name: "city", placeholder: "City" },
          { name: "businessName", placeholder: "Business Name" },
          { name: "businessType", placeholder: "Business Type" },
          { name: "dob", placeholder: "Date of Birth", type: "date" },
        ].map(({ name, placeholder, type = "text" }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            className="w-full border px-4 py-2 mb-4 rounded-md text-black"
          />
        ))}

        <select
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded-md text-black"
        >
          <option value="">Select Employee Type</option>
          <option value="salaried">Salaried</option>
          <option value="self-employed">Self-Employed</option>
        </select>

        <select
          name="salaryMode"
          value={formData.salaryMode}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded-md text-black"
        >
          <option value="">Select Salary Mode</option>
          <option value="bank">Bank Transfer</option>
          <option value="cash">Cash</option>
          <option value="cheque">Cheque</option>
        </select>

        <select
          name="doesFileITR"
          value={formData.doesFileITR}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded-md text-black"
        >
          <option value="">Do you file ITR?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <select
          name="doesFileGST"
          value={formData.doesFileGST}
          onChange={handleChange}
          className="w-full border px-4 py-2 mb-4 rounded-md text-black"
        >
          <option value="">Do you file GST?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label className="block mb-4 text-black">
          Upload Salary Slip
          <input
            type="file"
            name="salarySlip"
            onChange={handleChange}
            className="w-full border px-4 py-2 mt-2 rounded-md"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Continue to Dashboard
        </button>
      </form>

     
    </div>
    </>
  );
}
