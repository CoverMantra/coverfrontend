"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const BASE_URL = "https://www.covermantra.com";

// Fetch User Data API
const fetchUserData = async (storedPhone: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/user/profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: storedPhone }),
    });
    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error("Fetch User API Error:", error);
    return null;
  }
};
export default function LendersPage() {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    dob: "",
    email: "",
    employment_type_id: "",
    pan: "",
    consent: false,
    consent_timestamp: "",
    income: "",
  });

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<
    null | { type: "success" | "error" | "info"; message: string }
  >(null);

  const showModal = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setResponseMessage({ type, message });
  };

  // Fetch user data on load
  useEffect(() => {
    const fetchAndSetUser = async () => {
      setIsLoading(true);
      const storedPhone =
        Cookies.get("co_phone") || localStorage.getItem("co_phone");
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
        const mappedEmployment =
          employmentMap[user.employment as keyof typeof employmentMap] || "";

        setFormData((prev) => ({
          ...prev,
          mobile: user.phone || "",
          name: user.name || "",
          dob: user.dob || "",
          email: user.email || "",
          pan: user.pan || "",
          employment_type_id: mappedEmployment,
        }));
        // showModal("Existing user data pre-filled. Please review and submit.");
      } else {
        showModal("User data not found");
      }
      setIsLoading(false);
    };

    fetchAndSetUser();
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.consent) {
      showModal("⚠️ Please provide consent before submitting.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/zype/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: formData.mobile,
          name: formData.name,
          dob: formData.dob,
          email: formData.email,
          employmentType: formData.employment_type_id.toLowerCase(),
          pan: formData.pan,
          income: Number(formData.income),
        }),
      });
      if (!response.ok) throw new Error(`API error: ${response.statusText}`);
      const data = await response.json();
      if (
        data?.totalresponse?.deduperesponse?.status === "ACCEPT" &&
        data?.totalresponse?.apires?.status === "ACCEPT"
      ) {
        const offer = data.totalresponse.apires.offer;
        showModal(`✅ Registration processed successfully! Offer: ₹${offer}`, "success");
        setTimeout(() => {
          window.location.href =
            "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Spiraea";
        }, 2000);
      } else {
        showModal("Sorry, your application was rejected", "error");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      }
    } catch (error: any) {
      console.error("Zype API Error:", error);
      showModal("Something went wrong while submitting the form.", "error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {responseMessage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60 p-4"
          role="alert"
          aria-live="assertive"
        >
          <div
            className={`flex flex-col items-center max-w-md w-full p-8 rounded-3xl shadow-2xl bg-white select-none space-y-4 ${responseMessage.type === "success"
                ? "border-4 border-green-500 text-green-900"
                : "border-4 border-red-600 text-red-900"
              } animate-fadeInUp`}
          >
            <div>
              {responseMessage.type === "success" ? (
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5 4a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="mx-auto mb-4 h-16 w-16 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-3xl font-semibold">
              {responseMessage.type === "success"
                ? "Success"
                : responseMessage.type === "error"
                  ? "Error"
                  : "Information"}
            </h3>
            <p className="whitespace-pre-line text-lg leading-relaxed text-center">
              {responseMessage.message}
            </p>
            {(responseMessage.type === "success" || responseMessage.type === "error") && (
              <p className={`mt-6 text-sm ${responseMessage.type === "success" ? "text-green-600 animate-pulse" : "text-red-600"}`}>
                {responseMessage.type === "success" ? "Redirecting shortly…" : "Redirecting to Home…"}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl w-full mx-auto p-8 mt-20 border rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Zype Application</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="PAN Number"
              type="text"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <select
              name="employment_type_id"
              value={formData.employment_type_id}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">Select Employment Type</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed">Self-Employed</option>
            </select>
            <input
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="Monthly Income"
              type="number"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <label className="flex items-center mt-4 mb-4 text-gray-700">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            I consent to provide my details.
          </label>

          <button
            type="submit"
            className={`w-full p-3 text-white rounded-lg transition duration-200 shadow 
              ${formData.consent ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"}
              disabled:cursor-not-allowed`}
            disabled={!formData.consent || loading || isLoading}
          >
            {loading || isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}