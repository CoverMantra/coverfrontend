"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://covermantra.com/api/user/delete-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          message: "Delete my account", // ✅ required by API
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Account deletion request sent successfully!");
        setShowForm(false);
        setEmail("");
        setPhone("");
      } else {
        toast.error(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("❌ Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="border-2 border-green-300 p-10 rounded-2xl text-sm leading-relaxed space-y-3 max-w-2xl bg-white">
        <p>
          You can request the deletion of your information from{" "}
          <span className="font-semibold text-green-700">CoverMantra</span> at
          any stage. This data retention and deletion policy is in line with the
          applicable laws and guidelines of the RBI.
        </p>

        <p>You have two ways to request account deletion:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>
            Send an email to{" "}
            <a
              href="mailto:info@covermantra.in?subject=Delete%20my%20account"
              className="font-semibold text-blue-600 hover:underline"
            >
              info@covermantra.in
            </a>{" "}
            from your registered email with the subject{" "}
            <span className="italic">"Delete my account"</span> and your phone
            number.
          </li>
          <li>
            Or submit a deletion request below using the{" "}
            <span className="font-semibold">Delete My Account</span> button.
          </li>
        </ul>

        <div className="mt-4 text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl shadow-md font-semibold"
          >
            Delete My Account
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 relative">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
              Confirm Account Deletion
            </h2>

            <form onSubmit={handleDelete} className="space-y-5">
              <div>
                <label className="block text-sm text-black font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 text-black px-4 py-2 border-amber-400 border rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-black font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full mt-1 text-black px-4 py-2 border-amber-400 border rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 bg-gray-300 rounded-lg font-medium hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition"
                >
                  {loading ? "Processing..." : "Confirm & Delete"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
