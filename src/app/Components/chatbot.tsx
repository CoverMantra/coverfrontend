"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useModal } from "../context/modelcontext";
import dynamic from "next/dynamic";
import animationData from "../../animations/chatbot.json";
//  import introAnimation from "../../animations/Bot.json";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPaperPlane, FaTimes, FaRobot, FaWhatsapp } from "react-icons/fa";
import FloatingMessage from "./FloatingMessage";
import LoginModal from "../Components/LoginModal";

export const fetchUserData = async (phone: string) => {
  try {
    const res = await fetch("https://www.covermantra.com/api/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status} for user profile`);
      return null;
    }
    const data = await res.json();
    return data.user || data;
  } catch (err) {
    console.error("Failed to fetch user data", err);
    return null;
  }
};

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
type ChatMessage = {
  type: "bot" | "user" | "signup" | "options" | "form" | "submit_button" | "employment_options" | "prefilled_options";
  text: string;
};
type FormData = {
  name: string;
  phone: string;
  email: string;
  pan: string;
  pincode: string;
  loanAmount: string;
  income: string;
  dob: string;
  city: string;
  state: string;
  gender: string;
  employment: string;
};
type FormField = {
  key: keyof FormData;
  question: string;
  validation: (value: string) => boolean;
};
const BASE_URL = "https://www.covermantra.com";
export default function Bot() {
  const router = useRouter();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [showLottieIntro, setShowLottieIntro] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isCollectingForm, setIsCollectingForm] = useState(false);
  const [currentFormField, setCurrentFormField] = useState<keyof FormData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    dob: "",
    city: "",
    state: "",
    gender: "",
    employment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [applyButtonText, setApplyButtonText] = useState("Yes, apply for loan");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isInitialPromptDisplayed, setIsInitialPromptDisplayed] = useState(false);
 
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  // useEffect(() => {
  //   const hasInteracted = localStorage.getItem("chatbot_interacted_timestamp");
  //   if (hasInteracted) {
  //     const now = new Date().getTime();
  //     const timestamp = parseInt(hasInteracted, 10);
  //     const oneHourInMs = 60*60* 1000;
  //     if (now - timestamp > oneHourInMs) {
  //       localStorage.removeItem("chatbot_interacted_timestamp");
  //       setShowLottieIntro(true);
  //     } else {
  //       setShowLottieIntro(false);
  //     }
  //   } else {
  //     const timer = setTimeout(() => {
  //       setShowLottieIntro(true);
  //     }, 10000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addBotMessage = useCallback((text: string, type: ChatMessage['type'] = "bot") => {
    setChatMessages(prev => {
      if (prev.length > 0 && prev[prev.length - 1].text === text && prev[prev.length - 1].type === type) {
        return prev;
      }
      return [...prev, { type, text }];
    });
  }, []);

  const addBotMessageWithDelay = useCallback((text: string, type: ChatMessage['type'] = "bot", delay = 500) => {
    setTimeout(() => addBotMessage(text, type), delay);
  }, [addBotMessage]);
const validateDate = useCallback((value: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;
    const [day, month, year] = value.split('/').map(Number);
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }, []);

const getFullFormFields = useCallback((): FormField[] => {
    const baseFormFields: FormField[] = [
      { key: "name", question: "What's your full name?", validation: (value: string) => value.trim().length > 0 },
      { key: "phone", question: "What's your phone number? (10 digits)", validation: (value: string) => /^\d{10}$/.test(value) },
      { key: "email", question: "What's your email address?", validation: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) },
      { key: "pan", question: "Please provide your PAN card number", validation: (value: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value) },
      { key: "dob", question: "What's your date of birth? Please select using the date picker below.", validation: validateDate },
      { key: "city", question: "In which city do you live?", validation: (value: string) => value.trim().length > 0 },
      { key: "state", question: "Which state are you in?", validation: (value: string) => value.trim().length > 0 },
      { key: "pincode", question: "What's your pincode? (6 digits)", validation: (value: string) => /^\d{6}$/.test(value) },
      { key: "gender", question: "What is your gender? (Male/Female/Other)", validation: (value: string) => ["male", "female", "other"].includes(value.toLowerCase()) },
      { key: "employment", question: "What's your employment type?", validation: (value: string) => ["salaried", "self-employed"].includes(value.toLowerCase()) },
      { key: "income", question: "What's your monthly income? (INR)", validation: (value: string) => !isNaN(Number(value.replace(/,/g, ''))) && Number(value.replace(/,/g, '')) > 0 },
      { key: "loanAmount", question: "How much loan amount are you looking for? (INR)", validation: (value: string) => !isNaN(Number(value.replace(/,/g, ''))) && Number(value.replace(/,/g, '')) > 0 },
    ];
    return baseFormFields;
  }, [validateDate]);
    const advanceForm = useCallback(() => {
    const formFields = getFullFormFields();
    const currentData = { ...formData };
    const nextField = formFields.find(field => {
      const value = currentData[field.key];
      return !value || (typeof value === 'string' && value.trim() === '') || !field.validation(value as string);
    });

    if (nextField) {
      setCurrentFormField(nextField.key);
      addBotMessage(nextField.question);
      if (nextField.key === "dob") {
        setShowDatePicker(true);
      } else if (nextField.key === "employment") {
        addBotMessage("Salaried or Self-employed?", "employment_options");
      } else {
        setShowDatePicker(false);
      }
    } else {
      setIsCollectingForm(false);
      setCurrentFormField(null);
      addBotMessage("Thanks! You have provided all the required information.");
      addBotMessage("Submit Application", "submit_button");
    }
  }, [formData, getFullFormFields, addBotMessage]);

  const handleInitialPrompt = useCallback(async (isFullyLoggedIn: boolean, hasFormData: boolean) => {
    if (isInitialPromptDisplayed) return;

    setChatMessages([]);
    setIsInitialPromptDisplayed(true);

    if (isFullyLoggedIn && hasFormData) {
      addBotMessage("Hey! Welcome back. We already have your personal information. Thank you!");
      addBotMessageWithDelay("You can apply for lenders now.", "prefilled_options");
    } else if (isFullyLoggedIn && !hasFormData) {
      addBotMessage("Hey! How can I help you?");
      addBotMessageWithDelay("Would you like to apply for a loan?");
      addBotMessageWithDelay("Choose an option:", "options");
    } else {
      addBotMessage("Hey! How can I help you?");
      addBotMessageWithDelay("Please log in to continue.");
      addBotMessageWithDelay("", "signup");
    }
  }, [addBotMessage, addBotMessageWithDelay, isInitialPromptDisplayed]);

useEffect(() => {
  const checkUserStatus = async () => {
    if (isInitialPromptDisplayed) return;

    // Keep login check
    const loginStatus = Cookies.get("co_login");
    const tokenStatus = Cookies.get("co_token");
    const phoneFromCookie = Cookies.get("co_phone");
    const userIsFullyLoggedIn = loginStatus === "true" && !!tokenStatus;
    setIsLoggedIn(userIsFullyLoggedIn);

    let hasFormData = false;

    // Fetch data if phone exists, regardless of login
    if (phoneFromCookie) {
      const fetchedData = await fetchUserData(phoneFromCookie);
      if (fetchedData && Object.keys(fetchedData).length > 0) {
        const formattedData: FormData = {
          name: fetchedData.name || "",
          phone: fetchedData.phone || "",
          email: fetchedData.email || "",
          pan: fetchedData.pan || "",
          pincode: fetchedData.pincode || "",
          loanAmount: fetchedData.loanAmount || "",
          income: fetchedData.income || "",
          dob: fetchedData.dob || "",
          city: fetchedData.city || "",
          state: fetchedData.state || "",
          gender: fetchedData.gender || "",
          employment: fetchedData.employment || "",
        };
        setFormData(formattedData);
    // Check if any field has data
        const hasAnyData = Object.values(formattedData).some(
          (val) => val && val.toString().trim() !== ""
        );
        if (hasAnyData) {
          Cookies.set("loanFormData", JSON.stringify(formattedData), { expires: 7 });
          hasFormData = true;
        }
      }
    }
    // Pass login state along with form data state
    handleInitialPrompt(userIsFullyLoggedIn, hasFormData);
  };

  checkUserStatus();
}, [handleInitialPrompt, isInitialPromptDisplayed]);

const startFormCollection = useCallback(() => {
    setIsOpen(true);
    setIsCollectingForm(true);
    const formFields = getFullFormFields();
    const currentData = { ...formData };
    const nextField = formFields.find(field => {
      const value = currentData[field.key];
      return !value || (typeof value === 'string' && value.trim() === '') || !field.validation(value as string);
    });

    if (nextField) {
      setCurrentFormField(nextField.key);
      addBotMessage(nextField.question);
      if (nextField.key === "dob") {
        setShowDatePicker(true);
      } else if (nextField.key === "employment") {
        addBotMessage("Salaried or Self-employed?", "employment_options");
      } else {
        setShowDatePicker(false);
      }
    } else {

      addBotMessage("Thanks! You have provided all the required information.");
      addBotMessage("Submit Application", "submit_button");
    }
  }, [addBotMessage, formData, getFullFormFields]);


  const addUserMessage = (text: string) => {
    setChatMessages(prev => [...prev, { type: "user", text }]);
  };

  const submitFormData = async () => {
    setIsSubmitting(true);
    setChatMessages(prev => prev.filter(msg => msg.type !== "submit_button"));
    addBotMessage("Thank you for providing the information. Submitting your details...");

    const missingOrInvalidFields = getFullFormFields().filter(field => {
      const value = formData[field.key];
      return !value || (typeof value === 'string' && value.trim() === '') || !field.validation(value as string);
    });

    if (missingOrInvalidFields.length > 0) {
      setIsSubmitting(false);
      setIsCollectingForm(true);
      addBotMessage(`It seems some information is missing or invalid. Let's re-verify.`);
      setCurrentFormField(missingOrInvalidFields[0].key);
      addBotMessageWithDelay(missingOrInvalidFields[0].question);
      if (missingOrInvalidFields[0].key === "dob") setShowDatePicker(true);
      return;
    }

    try {
      const [day, month, year] = formData.dob.split('/');
      const apiFormattedDob = `${year}-${month}-${day}`;
      const payload = {
        ...formData,
        dob: apiFormattedDob,
        pan: formData.pan.toUpperCase(),
        loanAmount: formData.loanAmount.replace(/,/g, ''),
        income: formData.income.replace(/,/g, ''),
      };

      const response = await fetch(`${BASE_URL}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === "success") {
        Cookies.set("loanFormSubmitted", "yes", { expires: 7 });
        Cookies.set("loanFormData", JSON.stringify(formData), { expires: 7 });
        addBotMessage("Congratulations! Your application has been submitted successfully.");
        addBotMessageWithDelay("Now, you can find the best lenders for you.");
        addBotMessageWithDelay("Apply for Lenders", "submit_button");
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        addBotMessage(result.message || "There was an error submitting your information. Please try again later.");
        if (result.missingFields && result.missingFields.length > 0) {
          setIsCollectingForm(true);
          const firstApiMissingField = getFullFormFields().find(f => result.missingFields.includes(f.key));
          if (firstApiMissingField) {
            setCurrentFormField(firstApiMissingField.key);
            addBotMessageWithDelay(`The server needs a valid ${firstApiMissingField.key}. Please provide your ${firstApiMissingField.question}`);
            if (firstApiMissingField.key === "dob") setShowDatePicker(true);
          }
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      addBotMessage("There was an error connecting to our servers. Please check your internet and try again.");
      addBotMessageWithDelay("Submit Application", "submit_button");
    }
  };

  const handleDateSelect = (date: Date | null) => {
    if (!date) {
      addBotMessage("Please select a valid date of birth.");
      return;
    }
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setSelectedDate(date);
    setShowDatePicker(false);
    addUserMessage(`DOB: ${formattedDate}`);
    setFormData(prev => ({ ...prev, dob: formattedDate }));
  };
useEffect(() => {
    if (isCollectingForm) {
      const currentField = getFullFormFields().find(field => field.key === currentFormField);
      if (currentField && formData[currentField.key] && currentField.validation(formData[currentField.key] as string)) {
        setTimeout(() => {
          addBotMessage("Got it!");
          setTimeout(() => advanceForm(), 500);
        }, 500);
      }
    }
  }, [formData, isCollectingForm, currentFormField, advanceForm, getFullFormFields, addBotMessage]);
const handleUserMessage = (message: string) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    if (isCollectingForm && currentFormField === "dob" && showDatePicker) {
      addBotMessage("Please use the date picker to select your date of birth.");
      setInput("");
      return;
    }
    addUserMessage(trimmedMessage);
    setChatMessages(prev => prev.filter(msg => msg.type !== "options" && msg.type !== "signup" && msg.type !== "prefilled_options"));
    setInput("");
    if (isCollectingForm && currentFormField) {
      const currentField = getFullFormFields().find(field => field.key === currentFormField);
      if (currentField) {
        let valueToValidate = trimmedMessage;
        if (currentField.key === "pan") valueToValidate = trimmedMessage.toUpperCase();
        if (currentField.key === "gender") valueToValidate = trimmedMessage.charAt(0).toUpperCase() + trimmedMessage.slice(1).toLowerCase();
        if (!currentField.validation(valueToValidate)) {
          addBotMessage(`Invalid input. Please provide a valid ${currentField.key}. ${currentField.question}`);
          return;
        }
        setFormData(prev => ({ ...prev, [currentField.key]: valueToValidate }));
        return;
      }
    }
     setTimeout(() => {
      const userFormData = Cookies.get("loanFormData");
      let hasFormData = false;
      if (userFormData) {
        try {
          const parsedData = JSON.parse(userFormData);
          hasFormData = Object.keys(parsedData).length > 0;
        } catch (e) {
          console.error("Failed to parse loanFormData cookie:", e);
        }
      }
      const tokenStatus = Cookies.get("co_token");
      const isFullyLoggedIn = Cookies.get("co_login") === 'true' && !!tokenStatus;

      if (!isFullyLoggedIn) {
        addBotMessage("You need to be registered to apply for a loan.");
        addBotMessageWithDelay("Please log in to continue.");
        addBotMessageWithDelay("", "signup");
      } else {
        if (hasFormData) {
          addBotMessage("Thanks for being a valued customer!");
          addBotMessageWithDelay("You can apply for lenders now.", "prefilled_options");
        } else {
          addBotMessage("Would you like to apply for a loan?");
          addBotMessageWithDelay("Choose an option:", "options");
        }
      }
    }, 500);
  };
   const handleOptionSelect = (option: string) => {
    addUserMessage(option === "apply" ? "Yes, apply for loan" : option === "apply_lenders" ? "Apply for Lenders" : option);
    if (option === "apply") {
      setChatMessages(prev => prev.filter(msg => msg.type !== "options"));
      setApplyButtonText("Loading...");
      setIsCollectingForm(true);
      setTimeout(() => startFormCollection(), 500);
    } else if (option === "apply_lenders") {
      setChatMessages(prev => prev.filter(msg => msg.type !== "prefilled_options" && msg.type !== "options"));
      addBotMessageWithDelay("Redirecting you to the eligible lenders page...", "bot", 500);
      setTimeout(() => {
        setIsOpen(false);
        router.push("/personal-loans");
      }, 2000);
    } else if (currentFormField === "employment" && (option === "Salaried" || option === "Self-employed")) {
      setChatMessages(prev => prev.filter(msg => msg.type !== "employment_options"));
      setFormData(prev => ({ ...prev, employment: option }));
      addUserMessage(option);
    } else {
      addBotMessageWithDelay("How can I assist you with that?", "bot", 500);
    }
  };

  const inputDisabled = isSubmitting || showDatePicker || currentFormField === "employment";
  const sendButtonDisabled = inputDisabled || input.trim() === "";

  const renderMessageContent = (msg: ChatMessage) => {
    switch (msg.type) {
      case "bot":
        return (
          <div className="flex items-start gap-2 max-w-[85%]">
            <div className="p-1 rounded-full bg-indigo-600 text-white">
              <FaRobot size={12} />
            </div>
            <p className="inline-block px-4 py-2 rounded-xl rounded-tl-none bg-gray-200 text-gray-800 text-left shadow-sm">
              {msg.text}
            </p>
          </div>
        );
      case "user":
        return (
          <div className="flex items-start justify-end">
            <div className="inline-block px-4 py-2 rounded-xl rounded-tr-none bg-indigo-500 text-white text-right shadow-md">
              {msg.text}
            </div>
          </div>
        );
      case "signup":
        if (isLoggedIn) return null;
        return (
          <button
            className="p-3 my-2 text-sm font-semibold rounded-lg bg-teal-500 text-white w-full transition-all duration-200 hover:bg-teal-600"
            onClick={() => setIsLoginOpen(true)}
          >
            Sign Up to Apply
          </button>
        );
      case "prefilled_options":
        return (
          <div className="flex flex-col gap-3 my-2">
            <button
              onClick={() => handleOptionSelect("apply_lenders")}
              className="px-4 py-3 text-sm font-semibold rounded-lg bg-indigo-500 text-white transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Apply for Lenders
            </button>
            <button
              onClick={() => window.open("https://wa.me/91", "_blank")}
              className="px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-green-500 text-white transition-all duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <FaWhatsapp /> Other Query
            </button>
          </div>
        );
      case "options":
        return (
          <div className="flex flex-col gap-3 my-2">
            <button
              onClick={() => handleOptionSelect("apply")}
              className="px-4 py-3 text-sm font-semibold rounded-lg bg-indigo-500 text-white transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={applyButtonText === "Loading..."} // Disable button while loading
            >
             {applyButtonText}
              
               </button>
            <button
              onClick={() => window.open("https://wa.me/91", "_blank")}
              className="px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-lg bg-green-500 text-white transition-all duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <FaWhatsapp /> Other Query
            </button>
          </div>
        );
      case "employment_options":
        return (
          <div className="flex flex-col gap-3 my-2">
            <button
              onClick={() => handleOptionSelect("Salaried")}
              className="px-4 py-3 text-sm font-semibold rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Salaried
            </button>
            <button
              onClick={() => handleOptionSelect("Self-employed")}
              className="px-4 py-3 text-sm font-semibold rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Self-employed
            </button>
          </div>
        );
        
      case "submit_button":
        return (
          <button
            onClick={submitFormData}
            className="p-3 mt-4 text-sm font-semibold bg-green-500 text-white rounded-lg w-full transition-all duration-200 hover:bg-green-600 disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        );
      default:
        return null;
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <div className="font-sans">
      {/* <AnimatePresence>
        {showLottieIntro && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 flex flex-col items-center justify-center z-[9999] text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Lottie animationData={introAnimation} loop autoplay className="w-48 h-48" />
              <p className="mt-4 text-lg font-semibold text-white">Hey! Do you Need Any Help?</p>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {
                    localStorage.setItem("chatbot_interacted_timestamp", new Date().getTime().toString());
                    setShowLottieIntro(false);
                    setIsOpen(true);
                  }}
                  className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    localStorage.setItem("chatbot_interacted_timestamp", new Date().getTime().toString());
                    setShowLottieIntro(false);
                  }}
                  className="px-6 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
                >
                  NO
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence> */}
        <FloatingMessage/>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed bottom-4 right-4 flex items-end justify-end z-[9999] mb-16"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
            >
              <div className="w-90 h-[400px] rounded-4xl shadow-xl bg-green-100 flex flex-col">
                <div className="p-4 bg-indigo-700 rounded-t-xl text-white flex justify-between items-center">
                  <h3 className="text-lg font-bold">LoanBot 🤖</h3>
                  <button onClick={() => setIsOpen(false)}>
                    <FaTimes size={16} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                  <AnimatePresence initial={false}>
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {renderMessageContent(msg)}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {showDatePicker && (
                    <div className="mt-2 text-sm flex justify-center">
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateSelect}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date()}
                        placeholderText="Select your date of birth"
                        className="p-2 border rounded-lg w-full text-center focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        inline
                      />
                    </div>
                  )}
                  {isSubmitting && (
                    <div className="flex justify-center my-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 bg-gray-100 flex items-center border-t rounded-xl border-gray-200">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                    placeholder="Type a message..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && input.trim() !== "") {
                        handleUserMessage(input);
                      }
                    }}
                    disabled={inputDisabled}
                  />
                  <button
                    onClick={() => handleUserMessage(input)}
                    className="ml-3 p-3 bg-indigo-600 text-white rounded-full transition-all duration-200 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={sendButtonDisabled}
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white rounded-full w-15 h-15 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <Lottie animationData={animationData} loop autoplay className="w-15 h-15" />
      </button>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={async () => {
          setIsLoginOpen(false);
        }}
      />
    </div>
  );
}