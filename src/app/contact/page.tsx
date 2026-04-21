"use client";

import React, { useState, useEffect } from "react";
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
  FaHeadset
} from "react-icons/fa";
import { motion } from "framer-motion";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://covermantra.com/api/user/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("We appreciate you contacting Cover Mantra. Our support team will be in touch shortly.", {
          position: "top-right",
          style: { background: "#08101E", color: "#fff", borderRadius: "10px" }
        });
        setForm({ name: "", email: "", phone: "", message: "" });
        setConsent(false);
      } else {
        const responseText = await res.text();
        toast.error(responseText || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#FFF4E5] py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#FF7819]/30">
      <Toaster />
      
      <div className="max-w-7xl mx-auto mt-6 md:mt-12">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16" data-aos="fade-down">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7819]/10 border border-[#FF7819]/20 text-[#FF7819] text-[10px] md:text-xs font-black tracking-widest uppercase mb-4"
          >
            <FaHeadset /> 24/7 Priority Support
          </motion.div>
          <h2 className="text-3xl md:text-6xl font-black text-[#08101E] tracking-tighter mb-4 leading-tight">
            Let’s Start a <span className="text-[#FF7819]">Conversation</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-lg text-[#08101E]/60 font-medium px-2">
            Have questions about our financial solutions? Our team is here to provide expert guidance and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1" data-aos="fade-right">
            
            {/* Info Card */}
            <div className="bg-[#08101E] text-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7819]/20 rounded-full blur-3xl"></div>
               
               <h3 className="text-xl md:text-2xl font-black mb-8 border-l-4 border-[#FF7819] pl-4 tracking-tight">Contact Information</h3>
               
               <div className="space-y-6 md:space-y-8">
                 <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Our Office</p>
                      <p className="text-sm md:text-lg leading-snug">2nd Floor MK, Flex, Sanyas Ashram Road, Old Fatehabad, Haryana-125050</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:info@covermantra.in" className="text-sm md:text-lg hover:text-[#FF7819] transition-colors break-all">info@covermantra.in</a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Call Anytime</p>
                      <p className="text-lg md:text-xl font-black">+91 9729509967</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7819] group-hover:bg-[#FF7819] group-hover:text-white transition-all">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">Working Hours</p>
                      <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                        Mon - Fri: 9:00 AM - 5:00 PM <br/>
                        Sat & Sun: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                 </div>
               </div>

               <a 
                 href="https://wa.me/919729509967" 
                 target="_blank"
                 className="mt-8 md:mt-10 flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-black hover:scale-[1.02] active:scale-95 transition-all shadow-lg text-sm md:text-base"
               >
                 <FaWhatsapp size={20} /> Chat on WhatsApp
               </a>
            </div>

            {/* Map Card */}
            <div className="bg-white p-2 md:p-3 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden h-[200px] md:h-[240px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.935817812239!2d75.452668576185!3d29.50854497519965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39116323c509530d%3A0xc074744d081297e5!2sFatehabad%2C%20Haryana%20125050!5e0!3m2!1sen!2sin!4v1713430000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7 order-1 lg:order-2" data-aos="fade-left">
            <div className="bg-white p-6 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-[#FF7819]/10">
              <h3 className="text-2xl md:text-3xl font-black text-[#08101E] mb-2 tracking-tight">Send a Message</h3>
              <p className="text-sm md:text-base text-[#08101E]/50 font-medium mb-8 md:mb-10">We usually respond within 2 business hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] md:text-sm font-black text-[#08101E] uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" id="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                      className="w-full bg-[#FFF4E5]/50 border-2 border-transparent focus:border-[#FF7819] rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 text-sm md:text-base text-[#08101E] font-medium outline-none transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] md:text-sm font-black text-[#08101E] uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" id="email" value={form.email} onChange={handleChange} required placeholder="john@example.com"
                      className="w-full bg-[#FFF4E5]/50 border-2 border-transparent focus:border-[#FF7819] rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 text-sm md:text-base text-[#08101E] font-medium outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] md:text-sm font-black text-[#08101E] uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" id="phone" value={form.phone} onChange={handleChange} required placeholder="+91 00000 00000"
                    className="w-full bg-[#FFF4E5]/50 border-2 border-transparent focus:border-[#FF7819] rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 text-sm md:text-base text-[#08101E] font-medium outline-none transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] md:text-sm font-black text-[#08101E] uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    id="message" rows={4} value={form.message} onChange={handleChange} required placeholder="How can we help you today?"
                    className="w-full bg-[#FFF4E5]/50 border-2 border-transparent focus:border-[#FF7819] rounded-xl md:rounded-2xl py-3 md:py-4 px-5 md:px-6 text-sm md:text-base text-[#08101E] font-medium outline-none transition-all resize-none" 
                  />
                </div>

                <div className="flex items-center gap-3 p-3 md:p-4 bg-[#FFF4E5]/30 rounded-xl md:rounded-2xl border border-[#FF7819]/10">
                  <input 
                    type="checkbox" id="consent" checked={consent} onChange={() => setConsent(!consent)}
                    className="w-4 h-4 md:w-5 md:h-5 rounded-md accent-[#FF7819] cursor-pointer" required 
                  />
                  <label htmlFor="consent" className="text-[10px] md:text-sm text-[#08101E]/70 font-medium cursor-pointer leading-tight">
                    I agree to be contacted via Email, WhatsApp, SMS, or Call.
                  </label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={!consent || isSubmitting}
                  className={`w-full py-4 md:py-5 rounded-xl md:rounded-[1.5rem] font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all shadow-xl ${
                    consent 
                    ? 'bg-[#FF7819] text-white hover:bg-[#E65C00] shadow-[#FF7819]/20' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message <FaPaperPlane className="text-sm md:text-base" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;