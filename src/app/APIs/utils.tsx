import api from "../../lib/axios";

export const sendOtp = async (phone: string): Promise<any> => {
  try {
    const { data } = await api.post("/api/user/send-otp", { phone });
    return data;
  } catch (error: any) {
    console.error("Send OTP API Error:", error?.response?.data || error.message);
    throw error;
  }
};

export const verifyOtp = async (phone: string, otp: string): Promise<any> => {
  try {
    const { data } = await api.post("/api/user/verify-otp", { phone, otp });
    return data;
  } catch (error: any) {
    console.error("Verify OTP API Error:", error?.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (userData: any) => {
  try {
    const { data } = await api.post("/api/user/register", userData);
    return data;
  } catch (error: any) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const getUserDetails = async (phone: any) => {
  try {
    const { data } = await api.post("/api/user/profile", { phone });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserData = async (phone: string) => {
  try {
    const { data } = await api.post("/api/user/profile", { phone });
    return data.user || data;
  } catch (err) {
    console.error("Failed to fetch user data", err);
    return null;
  }
};

export const getUser = async (phone: string): Promise<any> => {
  try {
    const { data } = await api.post("/api/user/profile", { phone });
    return data;
  } catch (error: any) {
    console.error("Get User API Error:", error?.response?.data || error.message);
    throw error;
  }
};

export const updateUserProfile = async (userData: {
  phone: string;
  name?: string;
  pan?: string;
  dob?: string;
  email?: string;
  city?: string;
  state?: string;
  gender?: string;
  employment?: string;
  income?: string;
  pincode?: string;
}) => {
  try {
    const { data } = await api.put("/api/user/update-profile", userData);
    return data;
  } catch (error: any) {
    console.error("Update User Profile API Error:", error?.response?.data || error.message);
    throw error;
  }
};

export const registerLender = async (lenderData: any) => {
  try {
    const { data } = await api.post("/api/register/fatakPay/PL", lenderData);
    return data;
  } catch (error: any) {
    console.error("Register Lender API Error:", error?.response?.data || error.message);
    throw error;
  }
};
