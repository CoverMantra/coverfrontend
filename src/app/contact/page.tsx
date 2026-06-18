"use client";

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster, toast } from "react-hot-toast";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock, 
  FaPhoneAlt, 
  FaPaperPlane,
  FaWhatsapp,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import api from "../../lib/axios";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3D Mouse Parallax Logic
  const constraintsRef = useRef(null);

  const validateField = (id: string, value: string) => {
    let errorMsg = "";
    if (id === "name") {
      const trimmed = value.trim();
      if (!trimmed) {
        errorMsg = "Full name is required";
      } else if (trimmed.length < 2) {
        errorMsg = "Name must be at least 2 characters long";
      } else if (trimmed.length > 100) {
        errorMsg = "Name cannot exceed 100 characters";
      }
    } else if (id === "email") {
      const trimmed = value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!trimmed) {
        errorMsg = "Email address is required";
      } else if (!emailRegex.test(trimmed)) {
        errorMsg = "Please enter a valid email address";
      }
    } else if (id === "phone") {
      const trimmed = value.trim();
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!trimmed) {
        errorMsg = "Phone number is required";
      } else if (trimmed.length !== 10) {
        errorMsg = "Phone number must be exactly 10 digits";
      } else if (!phoneRegex.test(trimmed)) {
        errorMsg = "Please enter a valid 10-digit Indian mobile number (starts with 6-9)";
      }
    } else if (id === "message") {
      const trimmed = value.trim();
      if (!trimmed) {
        errorMsg = "Message is required";
      } else if (trimmed.length < 10) {
        errorMsg = "Message must be at least 10 characters long";
      } else if (trimmed.length > 1000) {
        errorMsg = "Message cannot exceed 1000 characters";
      }
    }
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    if (id === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [id]: cleaned }));
      validateField(id, cleaned);
    } else {
      setForm((prev) => ({ ...prev, [id]: value }));
      validateField(id, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation check on all fields
    const nameError = !form.name.trim() 
      ? "Full name is required" 
      : form.name.trim().length < 2 
        ? "Name must be at least 2 characters long" 
        : form.name.trim().length > 100 
          ? "Name cannot exceed 100 characters" 
          : "";
          
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = !form.email.trim() 
      ? "Email address is required" 
      : !emailRegex.test(form.email.trim()) 
        ? "Please enter a valid email address" 
        : "";
        
    const phoneRegex = /^[6-9]\d{9}$/;
    const phoneError = !form.phone.trim() 
      ? "Phone number is required" 
      : form.phone.trim().length !== 10 
        ? "Phone number must be exactly 10 digits" 
        : !phoneRegex.test(form.phone.trim()) 
          ? "Please enter a valid 10-digit Indian mobile number (starts with 6-9)" 
          : "";
          
    const messageError = !form.message.trim() 
      ? "Message is required" 
      : form.message.trim().length < 10 
        ? "Message must be at least 10 characters long" 
        : form.message.trim().length > 1000 
          ? "Message cannot exceed 1000 characters" 
          : "";

    if (nameError || emailError || phoneError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
        message: messageError,
      });
      toast.error("Please correct the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await api.post("/api/user/contact-us", form);
      if (res.status === 200 || res.status === 201) {
        toast.success("We appreciate you contacting Cover Mantra. Our support team will be in touch shortly.", {
          position: "top-right",
          style: { background: "#08101E", color: "#fff", borderRadius: "15px" }
        });
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.response?.data || "Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#FFF4E5] py-12 md:py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#FF7819] selection:text-white overflow-hidden relative">
      {/* 🔱 Mantra Strip */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 opacity-100 hidden lg:block pointer-events-none">
        <div className="flex items-center gap-4 text-[#08101E]/80 font-serif tracking-[0.4em] uppercase text-xs font-bold">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#08101E]/40 to-[#08101E]/80" />
          <span className="drop-shadow-[0_0_8px_rgba(8,16,30,0.1)]">सत्यम शिवम सुंदरम</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent via-[#08101E]/40 to-[#08101E]/80" />
        </div>
      </div>
      <Toaster />
      
      {/* 🔮 Background 3D Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FF7819]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto mt-6 md:mt-12 relative z-10">
        
        {/* ✨ Header Section */}
        <div className="text-center mb-16 md:mb-24" data-aos="zoom-in">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#08101E] text-[#FF7819] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-xl"
          >
            <FaHeadset className="animate-bounce" /> 24/7 Priority Support
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-black text-[#08101E] tracking-tighter mb-6 leading-tight uppercase italic">
            Let’s Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7819] to-[#FF690B]">Conversation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-xl text-[#08101E]/60 font-semibold italic">
            Have questions about our financial solutions? Our team is here to provide expert guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 📱 Contact Info Sidebar (3D Card) */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1" data-aos="fade-right">
            
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, translateZ: 20 }}
              style={{ transformStyle: "preserve-3d" }}
              className="bg-[#08101E] text-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7819]/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-[#FF7819]/30"></div>
               
               <h3 className="text-2xl md:text-3xl font-black mb-10 border-l-[6px] border-[#FF7819] pl-6 tracking-tight uppercase italic">Contact Info</h3>
               
               <div className="space-y-8 relative z-10">
                 {[
                   { icon: <FaMapMarkerAlt />, label: "Our Office", val: "2nd Floor MK, Flex, Sanyas Ashram Road, Old Fatehabad, Haryana-125050" },
                   { icon: <FaEnvelope />, label: "Email Us", val: "info@covermantra.in", isLink: true, link: "mailto:info@covermantra.in" },
                   { icon: <FaPhoneAlt />, label: "Call Anytime", val: "+91 9729509967", isBold: true }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-start gap-5 group/item">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF7819] group-hover/item:bg-[#FF7819] group-hover/item:text-white group-hover/item:rotate-[15deg] transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                        {item.isLink ? (
                          <a href={item.link} className="text-sm md:text-lg font-bold hover:text-[#FF7819] transition-colors">{item.val}</a>
                        ) : (
                          <p className={`text-sm md:text-lg leading-snug font-bold ${item.isBold ? 'text-2xl font-black text-[#FF7819]' : ''}`}>{item.val}</p>
                        )}
                      </div>
                   </div>
                 ))}

                 <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF7819]">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Working Hours</p>
                      <div className="grid grid-cols-2 gap-4 text-xs font-bold opacity-80 leading-relaxed uppercase italic">
                        <span>Mon - Fri<br/><span className="text-white">9:00 - 5:00</span></span>
                        <span>Sat - Sun<br/><span className="text-white">9:00 - 1:00</span></span>
                      </div>
                    </div>
                 </div>
               </div>

               <motion.a 
                 whileHover={{ y: -5 }}
                 whileTap={{ scale: 0.95 }}
                 href="https://wa.me/919729509967" 
                 target="_blank"
                 className="mt-12 flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-[2rem] font-black shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all text-sm md:text-base uppercase italic tracking-widest"
               >
                 <FaWhatsapp size={24} className="animate-pulse" /> Chat on WhatsApp
               </motion.a>
            </motion.div>

            {/* 🗺 Map Card (3D Feel) */}
            <div className="bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden h-[280px] md:h-[320px] transform hover:scale-[1.02] transition-transform duration-500">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.565809462226!2d75.03154881504938!3d29.51096738208426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913cf06d4e2a9b3%3A0x673468504f5e0a6d!2sOld%20Fatehabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1625648584852!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '2.2rem' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* ✍️ Form Container (Glassmorphism 3D) */}
          <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-left">
            <motion.div 
              whileHover={{ rotateY: 2 }}
              className="bg-white/80 backdrop-blur-xl p-8 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] border border-white"
            >
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-3xl md:text-5xl font-black text-[#08101E] tracking-tighter uppercase italic">Send a <span className="text-[#FF7819]">Message</span></h3>
              </div>
              <p className="text-sm md:text-lg text-[#08101E]/50 font-bold mb-12 italic">We usually respond within 2 business hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Full Name</label>
                    <input 
                      suppressHydrationWarning={true}
                      type="text" id="name" value={form.name} onChange={handleChange} required placeholder="Ex. Rahul Kumar"
                      className={`w-full bg-[#FFF4E5] border-2 ${errors.name ? 'border-red-500' : 'border-transparent focus:border-[#FF7819]'} focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mt-1 ml-2">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Email Address</label>
                    <input 
                      suppressHydrationWarning={true}
                      type="email" id="email" value={form.email} onChange={handleChange} required placeholder="rahul@business.com"
                      className={`w-full bg-[#FFF4E5] border-2 ${errors.email ? 'border-red-500' : 'border-transparent focus:border-[#FF7819]'} focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mt-1 ml-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Phone Number</label>
                  <input 
                    suppressHydrationWarning={true}
                    type="tel" id="phone" value={form.phone} onChange={handleChange} required placeholder="9876543210"
                    maxLength={10}
                    className={`w-full bg-[#FFF4E5] border-2 ${errors.phone ? 'border-red-500' : 'border-transparent focus:border-[#FF7819]'} focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mt-1 ml-2">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Your Message</label>
                  <textarea 
                    suppressHydrationWarning={true}
                    id="message" rows={4} value={form.message} onChange={handleChange} required placeholder="Tell us how we can help you thrive..."
                    className={`w-full bg-[#FFF4E5] border-2 ${errors.message ? 'border-red-500' : 'border-transparent focus:border-[#FF7819]'} focus:bg-white rounded-[2rem] py-5 px-8 text-[#08101E] font-bold outline-none transition-all resize-none shadow-inner`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[10px] font-black uppercase tracking-wider mt-1 ml-2">{errors.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-4 p-5 bg-[#08101E]/5 rounded-[2rem] border border-[#FF7819]/10 transform hover:scale-[1.01] transition-transform">
                  <input 
                    type="checkbox" id="consent" checked={consent} onChange={() => setConsent(!consent)}
                    className="w-6 h-6 rounded-lg accent-[#FF7819] cursor-pointer" required 
                  />
                  <label htmlFor="consent" className="text-[10px] md:text-xs text-[#08101E]/70 font-black uppercase tracking-wider cursor-pointer leading-tight italic">
                    I authorize Cover Mantra to contact me via Email, WhatsApp, or Call for expert financial guidance.
                  </label>
                </div>

                <motion.button 
                  suppressHydrationWarning={true}
                  whileHover={consent ? { scale: 1.02, boxShadow: "0 30px 60px -15px rgba(255, 120, 25, 0.4)" } : {}}
                  whileTap={consent ? { scale: 0.98 } : {}}
                  type="submit" 
                  disabled={!consent || isSubmitting}
                  className={`w-full py-6 rounded-[2rem] font-black text-lg md:text-xl flex items-center justify-center gap-4 transition-all uppercase tracking-[0.2em] italic ${
                    consent 
                    ? 'bg-gradient-to-r from-[#FF7819] to-[#FF690B] text-white shadow-2xl' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message <FaPaperPlane className="group-hover:translate-x-2 transition-transform" /></>
                  )}
                </motion.button>
              </form>

              {/* 🛡️ Secure Note */}
              <div className="mt-8 flex items-center justify-center gap-2 text-[#08101E]/40 font-black text-[9px] uppercase tracking-widest">
                <FaShieldAlt /> 128-bit SSL Secured Connection
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;