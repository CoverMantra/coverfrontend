"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaTrashAlt, FaEnvelope, FaPhoneAlt, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";
import api from "../../lib/axios";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/api/user/delete-profile", { email, phone, message: "Delete my account" });

      if (res.status === 200 || res.status === 201) {
        toast.success("✅ Account deletion request sent successfully!");
        setShowForm(false);
        setEmail("");
        setPhone("");
      } else {
        toast.error(`❌ ${res.data?.message || "Something went wrong."}`);
      }
    } catch (err: any) {
      console.error("Delete error:", err);
      toast.error(`❌ ${err.response?.data?.message || "Failed to send request. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF4E5] font-sans flex flex-col items-center justify-center p-4 sm:p-8">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#FF7819]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl w-full">
        {/* Main Info Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-white p-8 md:p-12 transition-all duration-500 hover:shadow-xl relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner mb-6 animate-bounce-slow">
              <FaTrashAlt />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#08101E] tracking-tighter uppercase italic leading-none mb-4">
              Account <span className="text-[#FF7819]">Deletion</span>
            </h1>
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF4E5] text-[#FF7819] text-[10px] font-black tracking-widest uppercase">
              <FaShieldAlt /> Regulatory Compliance
            </div>
          </div>

          <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
            <p className="text-center md:text-lg">
              You can request the deletion of your information from{" "}
              <span className="font-black text-[#08101E] italic">CoverMantra</span> at any stage. 
              Our policy ensures alignment with <span className="text-blue-600 font-bold">RBI guidelines</span> and applicable laws.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Option 1: Email */}
              <a 
                href="mailto:info@covermantra.in?subject=Delete%20my%20account"
                className="group flex flex-col p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#FF7819]/30 transition-all duration-300"
              >
                <FaEnvelope className="text-2xl text-[#FF7819] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-[#08101E] font-black text-xs uppercase tracking-widest mb-1">Via Registered Email</h4>
                <p className="text-[11px] text-gray-500">Send "Delete my account" with phone number to info@covermantra.in</p>
              </a>

              {/* Option 2: Form Trigger */}
              <div 
                onClick={() => setShowForm(true)}
                className="group cursor-pointer flex flex-col p-6 bg-[#08101E] rounded-3xl border border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <FaTrashAlt className="text-2xl text-red-500 mb-4 group-hover:rotate-12 transition-transform" />
                <h4 className="text-white font-black text-xs uppercase tracking-widest mb-1">Instant Request</h4>
                <p className="text-[11px] text-gray-400">Submit your request directly through our secure deletion portal.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-50 text-center">
             <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(220,38,38,0.4)] font-black uppercase italic tracking-tighter transition-all active:scale-95"
              >
                Delete My Account
              </button>
          </div>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-[#08101E]/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <div className="text-center mb-8">
              <FaExclamationTriangle className="text-4xl text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-black text-[#08101E] uppercase italic tracking-tighter">
                Final Confirmation
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase mt-2">This action is irreversible</p>
            </div>

            <form onSubmit={handleDelete} className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#08101E] uppercase tracking-widest ml-4">Email Address</label>
                <div className="relative">
                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all font-semibold text-gray-800"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-[#08101E] uppercase tracking-widest ml-4">Phone Number</label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all font-semibold text-gray-800"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-200 transition active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] px-8 py-4 bg-[#08101E] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:shadow-red-500/20 hover:bg-red-600 transition-all disabled:opacity-50 active:scale-95"
                >
                  {loading ? "Wiping Data..." : "Confirm Deletion"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}