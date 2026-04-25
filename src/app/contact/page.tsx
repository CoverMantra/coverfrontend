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

  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3D Mouse Parallax Logic
  const constraintsRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await api.post("/api/user/contact-us", form);
      if (res.status === 200 || res.status === 201) {
        toast.success("We appreciate you contacting Cover Mantra. Our support team will be in touch shortly.", {
          position: "top-right",
          style: { background: "#08101E", color: "#fff", borderRadius: "15px" }
        });
        setForm({ name: "", email: "", phone: "", message: "" });
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
                      className="w-full bg-[#FFF4E5] border-2 border-transparent focus:border-[#FF7819] focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner" 
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Email Address</label>
                    <input 
                      suppressHydrationWarning={true}
                      type="email" id="email" value={form.email} onChange={handleChange} required placeholder="rahul@business.com"
                      className="w-full bg-[#FFF4E5] border-2 border-transparent focus:border-[#FF7819] focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="phone" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Phone Number</label>
                  <input 
                    suppressHydrationWarning={true}
                    type="tel" id="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                    className="w-full bg-[#FFF4E5] border-2 border-transparent focus:border-[#FF7819] focus:bg-white rounded-[1.5rem] py-4 px-8 text-[#08101E] font-bold outline-none transition-all shadow-inner" 
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-black text-[#08101E] uppercase tracking-[0.3em] ml-2">Your Message</label>
                  <textarea 
                    suppressHydrationWarning={true}
                    id="message" rows={4} value={form.message} onChange={handleChange} required placeholder="Tell us how we can help you thrive..."
                    className="w-full bg-[#FFF4E5] border-2 border-transparent focus:border-[#FF7819] focus:bg-white rounded-[2rem] py-5 px-8 text-[#08101E] font-bold outline-none transition-all resize-none shadow-inner" 
                  />
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