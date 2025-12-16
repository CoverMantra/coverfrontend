"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function MoneyViewPage() {
  const [formData, setFormData] = useState({
    mobile: "",
    first_name: "",
    last_name: "",
    dob: "",
    email: "",
    employment_type_id: "",
    pincode: "",
    pan: "",
    consent: false,
    consent_timestamp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showPopup = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setResponseMessage({ type, message });
  };

  // Fetch user profile API
  const fetchUserData = async (storedPhone: string) => {
    try {
      const response = await fetch("https://www.covermantra.com/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: storedPhone })
      });

      if (!response.ok) throw new Error(`API error: ${response.statusText}`);

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error("Fetch User API Error:", error);
      return null;
    }
  };

  // Auto-fetch profile on mount
  useEffect(() => {
    const fetchAndSetUser = async () => {
      setIsLoading(true);
      const storedPhone = Cookies.get("co_phone") || localStorage.getItem("co_phone");
      if (!storedPhone) {
        setIsLoading(false);
        return;
      }

      const user = await fetchUserData(storedPhone);
      if (user) {
        const employmentMap = {
          Salaried: "Salaried",
          "Self-Employed": "Self-Employed",
          "Salaried Employee": "Salaried",
        };
        const mappedEmployment = employmentMap[user.employment as keyof typeof employmentMap] || "";

        setFormData((prev) => ({
          ...prev,
          mobile: user.phone || "",
          first_name: user.name?.split(" ")[0] || "",
          last_name: user.name?.split(" ")[1] || "",
          dob: user.dob || "",
          email: user.email || "",
          pincode: user.pincode || "",
          pan: user.pan || "",
          employment_type_id: mappedEmployment,
        }));
      } else {
        showPopup("User data not found", "error");
      }
      setIsLoading(false);
    };

    fetchAndSetUser();
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage(null);
    try {
      const payload = {
        phone: formData.mobile,
        name: `${formData.first_name} ${formData.last_name}`,
        dob: formData.dob,
        email: formData.email,
        employment_type_id: formData.employment_type_id,
        pan: formData.pan,
        pincode: formData.pincode,
        consent: formData.consent,
        consent_timestamp: new Date().toISOString(),
      };

      const res = await fetch("https://covermantra.com/api/moneyview/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const response = await res.json();

      if (response?.pwa) {
        window.location.href = response.pwa;
        return;
      }

      if (
        response?.leadSubmission?.status === "reject" ||
        response?.offers?.status === "reject" ||
        response?.journey?.status === "reject"
      ) {
        showPopup("Oops! Sorry, you are not eligible.", "error");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
        return;
      }

      if (
        response?.leadSubmission?.status === "success" &&
        response?.offers?.status === "success" &&
        response?.journey?.url
      ) {
        showPopup("Success\nYou are eligible for Money View.", "success");
        setTimeout(() => {
          window.location.href = "https://moneyview.in/";
        }, 10000);
        return;
      }

      showPopup("Unexpected response from MoneyView API.", "error");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      return;
    } catch (error) {
      console.error("MoneyView API Error:", error);
      showPopup("Something went wrong. Please try again.", "error");
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-15">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full p-8 border rounded-2xl shadow-2xl bg-white space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700">MoneyView Application</h2>
          <p className="mt-2 text-gray-600">Please fill in the details below to complete your application.</p>
        </div>
        {errorMessage && (
          <div className="text-center text-red-600 font-medium p-4 rounded-lg bg-red-50">{errorMessage}</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <input
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            type="date"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <input
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="PAN Number"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          />
          <select
            name="employment_type_id"
            value={formData.employment_type_id}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none disabled:bg-gray-200"
            required
            disabled={isLoading}
          >
            <option value="">Select Employment Type</option>
            <option value="Salaried">Salaried</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>
        </div>
        <label className="flex items-center mb-4 text-gray-700">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
            disabled={isLoading}
          />
          I consent to provide my details.
        </label>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition duration-200 shadow-lg disabled:bg-blue-300"
          disabled={isLoading || !formData.consent}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>

      {responseMessage && (
       <div
       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60 p-4"
       role="alert"
        aria-live="assertive"
>
          <div
            className={`bg-white p-8 rounded-xl shadow-xl max-w-sm w-full text-center select-none whitespace-pre-line ${
              responseMessage.type === "success"
                ? "text-green-700"
                : responseMessage.type === "error"
                ? "text-red-700"
                : "text-gray-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              {responseMessage.type === "success"
                ? "Success"
                : responseMessage.type === "error"
                ? "Error"
                : "Info"}
            </h3>
            <p className="text-lg">{responseMessage.message}</p>
            {(responseMessage.type === "success" ||
              responseMessage.type === "error") && (
              <p className="mt-4 text-sm text-gray-500">
                {responseMessage.type === "success"
                  ? "Redirecting shortly…"
                  : "Please wait…"}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
