"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import { fetchUserData, updateUserProfile } from "../APIs/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  phone: string;
  email: string;
  employeeType: string;
  pan: string;
  pincode: string;
  loanAmount: string;
  income: string;
  salaryMode: string;
  bankName: string;
  salarySlip: string;
  address: string;
  state: string;
  city: string;
  businessName: string;
  businessType: string;
  doesFileITR: string;
  doesFileGST: string;
  dob: string;
}

export default function Dashboard() {
  const [userData, setUserData] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetUser = async () => {
      const storedPhone =
        Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (storedPhone) {
        setLoading(true);
        const user = await fetchUserData(storedPhone);
        setUserData(user || null);
        setLoading(false);
      } else {
        console.warn("No phone found in cookies or localStorage");
        setLoading(false);
      }
    };

    fetchAndSetUser();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (userData) {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSave = async () => {
    if (userData) {
      try {
        const res = await updateUserProfile(userData);

        localStorage.setItem("userInfo", JSON.stringify(res.user || userData));
        setUserData(res.user || userData);
        setIsEditing(false);

     
        toast.success("Profile updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (err) {
        console.error("Update failed:", err);
      toast.error("Failed to update profile. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const handleCancel = () => {
    const storedData = localStorage.getItem("userInfo");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-xl">Loading profile...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-gray-700 text-xl">No user data found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex mt-6 items-center justify-center text-black font-sans py-14">
      <ToastContainer />
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-100 to-green-400 p-6 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        {/* Left - Profile */}
        <div className="bg-indigo-300 h-70 p-6 rounded-lg shadow-sm flex flex-col items-center">
          <Image
            src="https://cdn-icons-gif.flaticon.com/19008/19008647.gif"
            alt="Profile"
            width={120}
            height={120}
            unoptimized
            className="rounded-full object-cover border-4 mt-2"
          />
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-xl mt-2 font-semibold text-gray-800 mb-4 text-center">
              User Information
            </h2>
            <div className="space-y-3">
              <p className="flex text-gray-700">
                <span className="font-medium text-green-700">Name:</span>
                <span className="font-semibold pl-2">{userData.name || "N/A"}</span>
              </p>
              <p className="flex text-gray-700">
                <span className="font-medium text-green-700">Phone:</span>
                <span className="font-semibold pl-2">{userData.phone || "N/A"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right - Edit Form */}
        <div className="md:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-700">User Profile</h2>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-md border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200"
              >
                Edit
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 text-black gap-2 p-2 overflow-y-auto">
            {Object.entries(userData)
              .slice(1, 12)
              .map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type={key === "dob" ? "date" : "text"}
                    name={key}
                    value={value || ""}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className={`w-full border border-gray-300 rounded-md px-4 py-1 ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "bg-gray-100 text-gray-800 cursor-not-allowed"
                    }`}
                  />
                </div>
              ))}
          </form>
        </div>
      </div>
    </div>
  );
}
