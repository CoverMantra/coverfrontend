"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../context/modelcontext";
import Cookies from "js-cookie";
import { registerUser } from "../APIs/utils";

interface GlobalModalProps {
  onFormSubmit?: () => void;
 isOpen?: boolean;
  onClose?: () => void;
}

const GlobalModal: React.FC<GlobalModalProps> = ({ onFormSubmit }) => {
  const { isOpen, closeModal } = useModal();

  const emptyForm = React.useMemo(() => ({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    state: "",
    city: "",
    dob: "",
    gender: "",
    salaryMode: "",
    bankName: "",
    salarySlip: "",
    businessName: "",
    businessType: "",
    doesITR: "",
    doesGST: "",
  }), []);

  const [form, setForm] = useState(emptyForm);
  const [consent, setConsent] = useState(false);

  // Load cookies if available
  useEffect(() => {
    if (isOpen) {
      const savedFormData = Cookies.get("loanFormData");
      const savedPhone = Cookies.get("co_phone");
      if (savedPhone && savedFormData) {
        const parsedData = JSON.parse(savedFormData);
        if (parsedData.phone !== savedPhone) {
          setForm({ ...emptyForm, phone: savedPhone });
        } else {
          setForm({ ...emptyForm, ...parsedData, phone: savedPhone });
        }
      } else {
        setForm({ ...emptyForm, phone: savedPhone || "" });
      }
    }
  }, [isOpen, emptyForm]);
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Autofill city/state from pincode
    if (name === "pincode" && value.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await res.json();
        if (
          data?.[0]?.Status === "Success" &&
          data?.[0]?.PostOffice?.length > 0
        ) {
          const postOffice = data[0].PostOffice[0];
          setForm((prev) => ({
            ...prev,
            city: postOffice.District || "",
            state: postOffice.State || "",
          }));
        }
      } catch (err) {
        console.error("Postal lookup failed:", err);
      }
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert("Please agree to the terms to proceed.");
      return;
    }

    try {
      const payload: any = {
        name: form.name,
        phone: form.phone,
        pan: form.pan.toUpperCase(),
        dob: form.dob,
        email: form.email,
        city: form.city,
        state: form.state,
        gender: form.gender,
        employment: form.employeeType,
        income: form.income,
        pincode: form.pincode,
        loanAmount: form.loanAmount,
        doesITR: form.doesITR,
        doesGST: form.doesGST,
      };
      if (form.employeeType === "salaried") {
        payload.salaryMode = form.salaryMode;
        payload.bankName = form.bankName;
        payload.salarySlip = form.salarySlip;
      } else if (form.employeeType === "self-employed") {
        payload.businessName = form.businessName;
        payload.businessType = form.businessType;
      }
      console.log("📤 Sending Payload:", payload);
      const response = await registerUser(payload);
      console.log("✅ Registration Success:", response);
      Cookies.set("loanFormData", JSON.stringify(form), { expires: 7 });
      Cookies.set("loanFormSubmitted", "true", { expires: 7 });
      onFormSubmit?.();
      closeModal();
    } catch (err: any) {
      console.error("❌ Registration failed:", err.response?.data || err.message);
      alert("Failed to register. Please try again.");
    }
  };
  if (!isOpen) return null;
  const isFormValid =
    form.name &&
    form.phone &&
    form.email &&
    form.employeeType &&
    form.pan &&
    form.pincode &&
    form.loanAmount &&
    form.income &&
    form.state &&
    form.city &&
    form.dob &&
    form.gender;

  // Check employment-specific fields as well
  const isSalariedValid = form.employeeType === "salaried" ? (form.salaryMode && form.bankName) : true;
  const isSelfEmployedValid = form.employeeType === "self-employed" ? (form.businessName && form.businessType && form.doesITR && form.doesGST) : true;

  const isSubmitDisabled = !isFormValid || !isSalariedValid || !isSelfEmployedValid || !consent;


  return (
    <div className="fixed inset-0 flex items-center mt-20 justify-center backdrop-blur z-40 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="custom-box p-6 rounded-2xl bg-white shadow-2xl w-full max-w-3xl border border-gray-300 relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 font-bold text-xl"
        >
          ✕
        </button>

        <div className="flex justify-center items-center mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-green-700">
            Loan Application Form
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Common Fields */}
            <input
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              name="phone"
              placeholder="Phone *"
              value={form.phone}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
              readOnly
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <select
              name="employeeType"
              value={form.employeeType}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Employee Type *</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self Employed</option>
            </select>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Gender *</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              name="pan"
              placeholder="PAN *"
              value={form.pan}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              name="pincode"
              placeholder="Pincode *"
              value={form.pincode}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              name="loanAmount"
              placeholder="Loan Amount *"
              value={form.loanAmount}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              name="income"
              placeholder="Income *"
              value={form.income}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />

            {/* Salaried */}
            {form.employeeType === "salaried" && (
              <>
                <select
                  name="salaryMode"
                  value={form.salaryMode}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                >
                  <option value="">Salary Mode *</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                </select>
                <select
                  name="bankName"
                  value={form.bankName}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                >
                  <option value="">Bank Name *</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="PNB">Punjab National Bank</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="BoB">Bank of Baroda</option>
                  <option value="UBI">Union Bank of India</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="Kotak">Kotak Mahindra Bank</option>
                  <option value="IDFC">IDFC First Bank</option>
                  <option value="Indus">IndusInd Bank</option>
                  <option value="Yes">Yes Bank</option>
                  <option value="BOI">Bank of India</option>
                  <option value="CBI">Central Bank of India</option>
                  <option value="UCO">UCO Bank</option>
                  <option value="South">South Indian Bank</option>
                  <option value="Federal">Federal Bank</option>
                  <option value="Bandhan">Bandhan Bank</option>
                  <option value="RBL">RBL Bank</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="salarySlip"
                  value={form.salarySlip}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Did you get a salary slip from your company?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>

              </>
            )}

            {/* Self-employed */}
            {form.employeeType === "self-employed" && (
              <>
                <input
                  name="businessName"
                  placeholder="Business Name *"
                  value={form.businessName}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
                <input
                  name="businessType"
                  placeholder="Business Type *"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                />
                <select
                  name="doesITR"
                  value={form.doesITR}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                >
                  <option value="" disabled hidden>
                    ITR Filed? *
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <select
                  name="doesGST"
                  value={form.doesGST}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded w-full"
                >
                  <option value="" disabled hidden>
                    GST Filed? *
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </>
            )}

            <input
              name="state"
              placeholder="State *"
              value={form.state}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              name="city"
              placeholder="City *"
              value={form.city}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />

            <input
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>


          {/* Submit */}
          <div className="mb-4 mt-4 flex items-start text-sm">
            <input
              type="checkbox"
              id="consent-phone"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="mr-2 mt-1 accent-green-800"
              required
            />
            <label htmlFor="consent-phone">I agree to be contacted via Email, WhatsApp, SMS, or Call.</label>
          </div>

          <div className="mt-6">
            <button
              type="submit"

              disabled={isSubmitDisabled}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default GlobalModal;
