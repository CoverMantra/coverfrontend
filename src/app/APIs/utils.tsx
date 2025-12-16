import axios from "axios";

const BASE_URL = "https://www.covermantra.com"; 
//  const STATIC_OTP = "112233"; 

export const sendOtp = async (phone: string): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/user/send-otp`,
      { phone },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (error: any) {
    console.error("Send OTP API Error:", error?.response?.data || error.message);
    throw error;
  } 
};

export const verifyOtp = async (phone: string, otp: string): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/user/verify-otp`,
      { phone, otp },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (error: any) {
    console.error("Verify OTP API Error:", error?.response?.data || error.message);
    throw error;
  }
};


// Set your static OTP here

// export const sendOtp = async (phone: string): Promise<any> => {
//   console.log(`Sending static OTP to ${phone}: ${STATIC_OTP}`);
//   // Simulate API delay
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         success: true,
//         message: `OTP sent to ${phone}`,
//         otp: STATIC_OTP, 
//       });
//     }, 500);
//   });
// };
// export const verifyOtp = async (phone: string, otp: string): Promise<any> => {
//   console.log(`Verifying OTP for ${phone}: ${otp}`);
//   // Simulate API delay
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (otp === STATIC_OTP) {
//         resolve({
//           success: true,
//           message: "OTP verified successfully",
//           token: "static-token-for-testing", 
//         });
//       } else {
//         resolve({
//           success: false,
//           message: "Invalid OTP",
//         });
//       }
//     }, 500); 
//   });
// };

//register User

export const registerUser = async (userData: any) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; 
  } catch (error: any) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const getUserDetails = async (phone:any)=>{
try{
    const res = await axios.post(`${BASE_URL}/api/user/profile`,phone,{
      headers:{"Content-Type":"application/json"},
    });
  }catch(error){
    console.error(error);
  }
}
 
export const fetchUserData = async (phone: string) => {
  try {
    const res = await fetch(`${BASE_URL}/api/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    } 
    const data = await res.json();
    return data.user || data;
  } catch (err) {
    console.error("Failed to fetch user data", err);
    return null;
  }
};
export const getUser = async (phone: string): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/user/profile`,
      { phone },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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
    const { data } = await axios.put(
      `${BASE_URL}/api/user/update-profile`,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (error: any) {
    console.error("Update User Profile API Error:", error?.response?.data || error.message);
    throw error;
  }
};

// Register Lender API
export const registerLender = async (lenderData: {
  mobile: number;
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  employment_type_id: string;
  pincode: string;
  consent: boolean;
  consent_timestamp: string;
}) => {
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/register/fatakPay/PL`,
      lenderData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return data;
  } catch (error: any) {
    console.error("Register Lender API Error:", error?.response?.data || error.message);
    throw error;
  }
};
