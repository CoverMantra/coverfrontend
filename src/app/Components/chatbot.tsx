"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Cookies from "js-cookie";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/modelcontext";
import api from "../../lib/axios";
import dynamic from "next/dynamic";
import animationData from "../../animations/chatbot.json";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPaperPlane, FaTimes, FaRobot, FaWhatsapp, FaUserCircle } from "react-icons/fa";
import FloatingMessage from "./FloatingMessage";
import LoginModal from "../Components/LoginModal";

// --- Logic Helpers ---
export const fetchUserData = async (phone: string) => {
  try {
    const { data } = await api.post("/api/user/profile", { phone });
    return data?.user || data;
  } catch (err) {
    console.error("Failed to fetch user data", err);
    return null;
  }
};

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type ChatMessage = {
  type: "bot" | "user" | "signup" | "options" | "form" | "submit_button" | "employment_options" | "prefilled_options" | "lender_recommendations";
  text: string;
  timestamp?: string;
};

type FormData = {
  name: string; phone: string; email: string; pan: string; pincode: string;
  loanAmount: string; income: string; dob: string; city: string;
  state: string; gender: string; employment: string;
};

type FormField = {
  key: keyof FormData;
  question: string;
  validation: (value: string) => boolean;
};

// Theme Constants
const COLORS = {
  primary: "#FF7819", // Saffron
  accent: "#3C8291",  // Blue
  bg: "#08101E",      // Deep Navy
  text: "#C9CBCC"     // Greyish Text
};

export default function Bot() {
  const router = useRouter();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCollectingForm, setIsCollectingForm] = useState(false);
  const [formMode, setFormMode] = useState<"idle" | "guest_hook" | "logged_in_hook" | "full_apply">("idle");
  const [currentFormField, setCurrentFormField] = useState<keyof FormData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", pan: "", pincode: "",
    loanAmount: "", income: "", dob: "", city: "",
    state: "", gender: "", employment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isInitialPromptDisplayed, setIsInitialPromptDisplayed] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getTimestamp = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // --- Core Logic Implementation ---
  useEffect(() => { scrollToBottom(); }, [chatMessages]);
  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };

  const addBotMessage = useCallback((text: string, type: ChatMessage['type'] = "bot") => {
    setChatMessages(prev => {
      if (prev.length > 0 && prev[prev.length - 1].text === text && prev[prev.length - 1].type === type) return prev;
      return [...prev, { type, text, timestamp: getTimestamp() }];
    });
  }, []);

  const addBotMessageWithDelay = useCallback((text: string, type: ChatMessage['type'] = "bot", delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(text, type);
    }, delay);
  }, [addBotMessage]);

  const validateDate = useCallback((value: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;
    const [day, month, year] = value.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  }, []);

  const getFullFormFields = useCallback((): FormField[] => [
    { key: "name", question: "What's your full name?", validation: (v) => v.trim().length > 0 },
    { key: "phone", question: "What's your phone number? (10 digits)", validation: (v) => /^\d{10}$/.test(v) },
    { key: "email", question: "What's your email address?", validation: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { key: "pan", question: "Please provide your PAN card number", validation: (v) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(v) },
    { key: "dob", question: "What's your date of birth?", validation: validateDate },
    { key: "city", question: "In which city do you live?", validation: (v) => v.trim().length > 0 },
    { key: "state", question: "Which state are you in?", validation: (v) => v.trim().length > 0 },
    { key: "pincode", question: "What's your pincode? (6 digits)", validation: (v) => /^\d{6}$/.test(v) },
    { key: "gender", question: "What is your gender?", validation: (v) => ["male", "female", "other"].includes(v.toLowerCase()) },
    { key: "employment", question: "What's your employment type?", validation: (v) => ["salaried", "self-employed"].includes(v.toLowerCase()) },
    { key: "income", question: "What's your monthly income?", validation: (v) => !isNaN(Number(v.replace(/,/g, ''))) },
    { key: "loanAmount", question: "How much loan amount are you looking for?", validation: (v) => !isNaN(Number(v.replace(/,/g, ''))) },
  ], [validateDate]);

  const advanceForm = useCallback((currentData = formData, mode = formMode) => {
    let formFields = getFullFormFields();
    if (mode === "guest_hook" || mode === "logged_in_hook") {
       formFields = formFields.filter(f => f.key === "dob" || f.key === "loanAmount");
    }

    const nextField = formFields.find(field => !currentData[field.key] || !field.validation(currentData[field.key] as string));
    
    if (nextField) {
      setCurrentFormField(nextField.key);
      
      let question = nextField.question;
      if (mode === "guest_hook" && nextField.key === "dob") {
         question = "Aapko best loan advice dene ke liye, kya aap apni Date of Birth aur required Loan Amount bata sakte hain?";
      } else if (mode === "guest_hook" && nextField.key === "loanAmount") {
         question = "Shukriya! Aur aapko kitne loan amount ki requirement hai?";
      } else if (mode === "logged_in_hook" && nextField.key === "dob") {
         const userName = currentData.name?.split(" ")[0] || "User";
         question = `${userName}, help me personalize your experience. Aapki Date of Birth kya hai?`;
      } else if (mode === "logged_in_hook" && nextField.key === "loanAmount") {
         question = "Aap kitne amount ka loan plan kar rahe hain ya abhi kitna loan chal raha hai?";
      }
      
      addBotMessage(question);
      if (nextField.key === "dob") setShowDatePicker(true);
      else if (nextField.key === "employment") addBotMessage("Salaried or Self-employed?", "employment_options");
      else setShowDatePicker(false);
    } else {
      setIsCollectingForm(false);
      setCurrentFormField(null);
      
      if (mode === "guest_hook") {
         addBotMessage("Thanks! In details ke basis par mere paas kuch ache plans hain.");
         addBotMessageWithDelay("Unhe dekhne ke liye please ek baar Login/Sign-up karein taaki hum process start kar sakein.", "signup", 1000);
      } else if (mode === "logged_in_hook") {
         addBotMessage(`Main dekh raha hoon aapka ₹${currentData.loanAmount} ka loan process mein hai. Kya main isme aapki help karoon?`, "options");
      } else {
         addBotMessage("Thanks! You have provided all information.");
         addBotMessage("Submit Application", "submit_button");
      }
    }
  }, [formData, getFullFormFields, addBotMessage, formMode, addBotMessageWithDelay]);

  const handleInitialPrompt = useCallback(async (isFullyLoggedIn: boolean, data: any) => {
    if (isInitialPromptDisplayed) return;
    setChatMessages([]);
    setIsInitialPromptDisplayed(true);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (isFullyLoggedIn) {
        setFormMode("logged_in_hook");
        const userName = data?.name?.split(" ")[0] || "User";
        addBotMessage(`Hello ${userName}! Welcome back to CoverMantra.`);
        
        if (!data?.dob || !data?.loanAmount) {
           setTimeout(() => {
              setIsCollectingForm(true);
              advanceForm(data, "logged_in_hook");
           }, 1000);
        } else {
           addBotMessageWithDelay(`Main dekh raha hoon aapka ₹${data.loanAmount} ka loan process mein hai. Kya main isme aapki help karoon?`, "options", 1000);
        }
      } else {
        setFormMode("guest_hook");
        addBotMessage("Namaste! Main CoverMantra AI hoon. Aapka data CoverMantra ke saath bilkul safe hai.");
        setTimeout(() => {
           setIsCollectingForm(true);
           advanceForm(data, "guest_hook");
        }, 1000);
      }
    }, 1000);
  }, [addBotMessage, addBotMessageWithDelay, isInitialPromptDisplayed, advanceForm]);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (isInitialPromptDisplayed) return;
      const userIsFullyLoggedIn = Cookies.get("co_login") === "true" && !!Cookies.get("co_token");
      setIsLoggedIn(userIsFullyLoggedIn);
      let currentData = {
          name: "", phone: "", email: "", pan: "", pincode: "",
          loanAmount: "", income: "", dob: "", city: "",
          state: "", gender: "", employment: "",
      };
      
      const phoneFromCookie = Cookies.get("co_phone");
      if (phoneFromCookie) {
        const fetchedData = await fetchUserData(phoneFromCookie);
        if (fetchedData) {
          currentData = { ...currentData, ...fetchedData };
        }
      }
      setFormData(currentData);
      handleInitialPrompt(userIsFullyLoggedIn, currentData);
    };
    checkUserStatus();
  }, [handleInitialPrompt, isInitialPromptDisplayed]);

  // Listen to global login status changes to update the bot dynamically
  useEffect(() => {
    const handleLoginChange = () => {
      setIsInitialPromptDisplayed(false);
    };
    window.addEventListener("loginStatusChanged", handleLoginChange);
    return () => window.removeEventListener("loginStatusChanged", handleLoginChange);
  }, []);

  const handleUserMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed) return;
    setChatMessages(prev => [...prev, { type: "user", text: trimmed, timestamp: getTimestamp() }]);
    setInput("");
    
    if (isCollectingForm && currentFormField) {
      const field = getFullFormFields().find(f => f.key === currentFormField);
      if (field) {
        if (field.validation(trimmed)) {
          const newData = { ...formData, [field.key]: trimmed };
          setFormData(newData);
          setTimeout(() => advanceForm(newData), 600);
        } else {
          addBotMessage(`Invalid input. ${field.question}`);
        }
        return;
      }
    }
    setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            addBotMessage("I'm a virtual assistant trained specifically to help you with loan applications. Please use the options provided.");
        }, 1500);
    }, 500);
  };

  const handleOptionSelect = (option: string) => {
    if (option === "apply") {
      setFormMode("full_apply");
      setIsCollectingForm(true);
      advanceForm(formData, "full_apply");
    } else if (option === "apply_lenders") {
      router.push("/personal-loans");
    } else if (option === "Salaried" || option === "Self-employed") {
        setChatMessages(p => [...p, { type: "user", text: option, timestamp: getTimestamp() }]);
        const newData = { ...formData, employment: option.toLowerCase() };
        setFormData(newData);
        setTimeout(() => advanceForm(newData), 600);
    }
  };

  const submitFormData = async () => {
    setIsSubmitting(true);
    // API logic simulation
    setTimeout(() => {
        setIsSubmitting(false);
        addBotMessage("Application verified successfully! Analyzing your profile for the best lenders...", "bot");
        addBotMessageWithDelay("", "lender_recommendations", 2000);
    }, 2000);
  };

  const handleDateSelect = (date: Date | null) => {
    if (!date) return;
    const formatted = `${date.getDate().toString().padStart(2,'0')}/${(date.getMonth()+1).toString().padStart(2,'0')}/${date.getFullYear()}`;
    const newData = { ...formData, dob: formatted };
    setFormData(newData);
    setShowDatePicker(false);
    setChatMessages(p => [...p, { type: "user", text: `DOB: ${formatted}`, timestamp: getTimestamp() }]);
    setTimeout(() => advanceForm(newData), 600);
  };

  const inputDisabled = isSubmitting || showDatePicker || currentFormField === "employment";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased">
      <FloatingMessage />
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#08101E]/60 backdrop-blur-sm z-[9998] lg:hidden"
            />

            {/* Chatbot Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative z-[9999] w-[92vw] sm:w-[400px] h-[600px] max-h-[85vh] bg-[#08101E] rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col border border-[#3C8291]/30 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-[#08101E] to-[#16253d] text-white flex justify-between items-center border-b border-[#3C8291]/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden p-1">
                      <img src="/image/logo.png" alt="Bot" className="w-full h-full object-contain" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#08101E] rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">CoverMantra Bot</h3>
                    <p className="text-[10px] text-[#3C8291] font-black uppercase tracking-tighter">AI Assistant Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => window.open("https://wa.me/919729509967", "_blank")} className="p-2 bg-green-900/20 hover:bg-green-900/50 rounded-full transition-colors text-green-400 border border-green-900/50" title="Contact on WhatsApp">
                    <FaWhatsapp size={20} />
                  </button>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors text-[#C9CBCC]">
                    <FaTimes size={20} />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-[#08101E]">
                <AnimatePresence initial={false}>
                  {chatMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.type === "bot" ? (
                        <div className="flex gap-3 max-w-[85%]">
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">
                            <img src="/image/logo.png" alt="Bot" className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <div className="px-4 py-3 bg-[#1a2a44] text-[#C9CBCC] rounded-2xl rounded-tl-none border border-[#3C8291]/20 text-sm leading-relaxed shadow-sm">
                              {msg.text}
                            </div>
                            {msg.timestamp && <p className="text-[10px] text-gray-500 mt-1 ml-1">{msg.timestamp}</p>}
                          </div>
                        </div>
                      ) : msg.type === "user" ? (
                        <div className="flex gap-3 max-w-[85%]">
                          <div className="flex flex-col items-end">
                            <div className="px-4 py-3 bg-[#FF7819] text-white rounded-2xl rounded-tr-none shadow-lg text-sm font-medium">
                              {msg.text}
                            </div>
                            {msg.timestamp && <p className="text-[10px] text-gray-500 mt-1 mr-1">{msg.timestamp}</p>}
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-[#FF7819] flex items-center justify-center text-white shrink-0 shadow-md">
                            <FaUserCircle size={16} />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full space-y-3">
                          {/* Bot Action Components */}
                          {msg.type === "signup" && !isLoggedIn && (
                            <button
                              onClick={() => setIsLoginOpen(true)}
                              className="w-full p-4 rounded-2xl bg-gradient-to-br from-[#FF7819] to-[#e66a15] text-white font-bold shadow-xl hover:scale-[1.02] transition-transform"
                            >
                              Get Started / Log In
                            </button>
                          )}
                          {msg.type === "options" && (
                            <div className="grid grid-cols-1 gap-3 w-full">
                              <button onClick={() => handleOptionSelect("apply")} className="p-4 bg-[#1a2a44] text-white rounded-2xl font-bold border border-[#3C8291]/40 hover:border-[#FF7819] transition-all flex items-center justify-between group text-sm">
                                Apply for Personal Loan <span className="text-[#FF7819] group-hover:translate-x-1 transition-transform">→</span>
                              </button>                
                              <button onClick={() => window.open("https://wa.me/919729509967", "_blank")} className="p-4 bg-[#0d2a1c] text-green-400 rounded-2xl font-bold border border-green-900/50 hover:bg-green-900/20 transition-all flex items-center justify-center gap-2 text-sm">
                                <FaWhatsapp /> Talk on WhatsApp
                              </button>
                            </div>
                          )}
                          {msg.type === "employment_options" && (
                            <div className="flex gap-2">
                              {["Salaried", "Self-employed"].map(opt => (
                                <button key={opt} onClick={() => handleOptionSelect(opt)} className="flex-1 p-3 bg-[#1a2a44] border border-[#3C8291]/30 rounded-xl text-[#C9CBCC] font-bold hover:border-[#FF7819] hover:text-white transition-all text-xs">
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                          {msg.type === "submit_button" && (
                             <button onClick={submitFormData} className="w-full p-4 bg-[#FF7819] text-white rounded-2xl font-black shadow-2xl hover:bg-[#e66a15] disabled:bg-gray-700 transition-all">
                               {isSubmitting ? "PROCESSING..." : "CONFIRM & SUBMIT"}
                             </button>
                          )}
                          {msg.type === "prefilled_options" && (
                             <div className="grid grid-cols-1 gap-3 w-full">
                               <button onClick={() => handleOptionSelect("apply")} className="w-full p-4 bg-[#3C8291] text-white rounded-2xl font-bold shadow-lg hover:bg-[#34717d] transition-all">
                                 Update Details & Re-apply
                               </button>
                               <button onClick={() => handleOptionSelect("apply_lenders")} className="w-full p-4 bg-[#1a2a44] border border-[#3C8291]/40 text-white rounded-2xl font-bold shadow-lg hover:bg-[#1f3352] transition-all">
                                 View Lender Offers
                               </button>
                               <button onClick={() => window.open("https://wa.me/919729509967", "_blank")} className="p-4 bg-[#0d2a1c] text-green-400 rounded-2xl font-bold border border-green-900/50 hover:bg-green-900/20 transition-all flex items-center justify-center gap-2 text-sm">
                                 <FaWhatsapp /> Talk on WhatsApp
                               </button>
                             </div>
                          )}
                          {msg.type === "lender_recommendations" && (
                            <div className="space-y-3 w-full">
                                <p className="text-[#3C8291] text-xs font-bold uppercase tracking-widest">Recommended For You</p>
                                <div className="grid grid-cols-1 gap-3">
                                  {Number(formData.income?.replace(/,/g, '')) > 25000 && (
                                    <div className="bg-[#1a2a44] p-4 rounded-2xl border border-green-500/30">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-white">Zype</h4>
                                            <span className="text-[10px] font-bold uppercase bg-green-900/50 text-green-400 px-2 py-1 rounded-full">Pre-approved</span>
                                        </div>
                                        <p className="text-xs text-[#C9CBCC] mb-4">Up to ₹5,00,000 at lowest interest rates based on your income.</p>
                                        <button onClick={() => router.push("/LenderAPI/zype")} className="w-full py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-xs transition-colors">Complete Zype Application</button>
                                    </div>
                                  )}
                                  <div className="bg-[#1a2a44] p-4 rounded-2xl border border-[#3C8291]/30">
                                      <div className="flex justify-between items-center mb-2">
                                          <h4 className="font-bold text-white">Vivifi</h4>
                                          <span className="text-[10px] font-bold uppercase bg-[#FF7819]/20 text-[#FF7819] px-2 py-1 rounded-full">High Chances</span>
                                      </div>
                                      <p className="text-xs text-[#C9CBCC] mb-4">Instant credit line, ideal for your professional profile.</p>
                                      <button onClick={() => router.push("/LenderAPI/vivifi")} className="w-full py-2.5 bg-[#FF7819] hover:bg-[#e66a15] text-white rounded-xl font-bold text-xs transition-colors">Apply with Vivifi</button>
                                  </div>
                                </div>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {showDatePicker && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-2 bg-white rounded-2xl shadow-2xl">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateSelect}
                      inline
                      showYearDropdown
                      dropdownMode="select"
                      maxDate={new Date()}
                    />
                  </motion.div>
                )}

                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 max-w-[85%]">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">
                      <img src="/image/logo.png" alt="Bot" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex gap-1.5 p-4 bg-[#1a2a44] rounded-2xl rounded-tl-none border border-[#3C8291]/20 items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#3C8291] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#3C8291] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#3C8291] rounded-full animate-bounce"></div>
                    </div>
                  </motion.div>
                )}
                
                {isSubmitting && (
                  <div className="flex justify-center py-4">
                    <div className="w-10 h-10 border-4 border-[#3C8291]/20 border-t-[#FF7819] rounded-full animate-spin"></div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-5 bg-[#16253d] border-t border-[#3C8291]/20 flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={inputDisabled}
                  onKeyDown={(e) => e.key === "Enter" && handleUserMessage(input)}
                  placeholder={inputDisabled ? "Please use options above..." : "Type your query..."}
                  className="flex-1 px-5 py-4 bg-[#08101E] border border-[#3C8291]/30 rounded-2xl text-white text-sm focus:outline-none focus:border-[#FF7819] transition-all disabled:opacity-40"
                />
                <button
                  onClick={() => handleUserMessage(input)}
                  disabled={!input.trim() || inputDisabled}
                  className="p-4 bg-[#FF7819] text-white rounded-2xl shadow-lg hover:scale-105 active:scale-95 disabled:bg-gray-800 disabled:text-gray-500 transition-all"
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-16 h-16 bg-[#08101E] border-2 border-[#FF7819] rounded-2xl flex items-center justify-center shadow-[0_10px_40px_rgba(255,120,25,0.3)] z-[10000]"
      >
        <Lottie animationData={animationData} loop autoplay className="w-12 h-12" />
        <div className="absolute inset-0 bg-[#FF7819] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </motion.button>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #3C8291; border-radius: 10px; }
        .react-datepicker { border: none !important; font-family: inherit !important; width: 100% !important; background: white !important; }
        .react-datepicker__header { background: #f8fafc !important; border-bottom: 1px solid #e2e8f0 !important; }
        .react-datepicker__day--selected { background-color: #FF7819 !important; border-radius: 0.5rem !important; }
        .react-datepicker__day:hover { border-radius: 0.5rem !important; }
      `}</style>
    </div>
  );
}