"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster, toast } from "react-hot-toast";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhoneAlt } from "react-icons/fa";

function Contact() {
useEffect(() => {
  AOS.init({
    duration: 1500,
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
      });
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
    } else {
      const responseText = await res.text();
      toast.error(responseText || "Something went wrong!", {
        position: "top-right",
      });
    }
  } catch (error) {
    toast.error("Network error. Please try again later.", {
      position: "top-right",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
 <section id="contact" className="bg-gradient-to-r from-green-300 via-lime-300 to-green-600 py-8"> 
  <Toaster />
  <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 " data-aos="fade-down">
      <h2 className="font-heading font-bold mt-20 text-blue-700 text-3xl  sm:text-4xl">Contact Us</h2>
      <p className="mx-auto max-w-xl text-base text-gray-600 mt-2">
        Have questions? Reach out to our team today.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Contact Form */}
      <div className="bg-white p-6 rounded-xl text-black shadow-lg">
        <h3 className="text-xl font-bold mb-4 ">Send us a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" id="name" value={form.name} onChange={handleChange} required
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" id="email" value={form.email} onChange={handleChange} required
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="phone" value={form.phone} onChange={handleChange} required
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" rows={3} value={form.message} onChange={handleChange} required
              className="w-full rounded-md border border-gray-300 py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-sm" />
          </div>

          <div className="mb-4 flex items-start text-sm">
            <input type="checkbox" id="consent" checked={consent} onChange={() => setConsent(!consent)}
              className="mr-2 mt-1" required />
            <label htmlFor="consent">I agree to be contacted via Email, WhatsApp, SMS, or Call.</label>
          </div>

          <button type="submit" disabled={!consent || isSubmitting}
            className={`w-full px-4 py-2 text-sm rounded-md text-white font-medium transition ${consent ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Contact Info hehehheheheh*/}
      <div className="space-y-4 ">
        <div className="bg-white  text-black p-6 rounded-xl shadow-lg h-[260px]">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <div className="flex">
              <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
              <span>2nd Floor MK, Flex, Sanyas Ashram Road, Old Fatehabad, Haryana-125050</span>
            </div>
            <div className="flex">
              <FaEnvelope className="text-blue-600 mt-1 mr-3" />
              <a href="mailto:info@covermantra.in" className="text-blue-600 hover:underline">info@covermantra.in</a>
            </div>
            <div className="flex">
              <FaPhoneAlt className="text-blue-600 mt-1 mr-3" />
              <span>Coming soon</span>
            </div>
            <div className="flex">
              <FaClock className="text-blue-600 mt-1 mr-3" />
              <span>
                Mon - Fri: 9:00 AM - 5:00 PM<br />
                Sat & Sun: 9:00 AM - 1:00 PM
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl shadow-lg overflow-hidden h-[260px]">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5786016027584!2d75.44976451543788!3d29.516562081977717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39137025c862d51b%3A0x6b74b1e5d3269b22!2sThakar%20Basti%2C%20Fatehabad%2C%20Haryana%20125050!5e0!3m2!1sen!2sin!4v1678987654321!5m2!1sen!2sin"
            width="100%"
            height="240"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;