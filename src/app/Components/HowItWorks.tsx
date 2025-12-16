"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCheckCircle, FaMoneyBillWave } from "react-icons/fa"; 
import "swiper/css";
import "swiper/css/pagination";

const steps = [
  {
    title: "Apply Online",
    desc: "Easily fill out your business loan application with a few simple steps online. No paperwork required.",
    image: "https://cdn-icons-png.flaticon.com/512/4359/4359754.png",
    bgColor: "bg-green-100", 
  },
  {
    title: "Quick Verification",
    desc: "We verify your details quickly through secure digital channels to ensure speedy approval.",
    image: "https://cdn-icons-png.flaticon.com/512/2329/2329073.png",
    bgColor: "bg-green-100",
  },
  {
    title: "Get Approval",
    desc: "Our team evaluates your application and approves loans within hours for eligible businesses.",
    image: <FaCheckCircle className="text-green-600 w-12 h-12" />,
    bgColor: "bg-green-100",
  },
  {
    title: "Receive Funds",
    desc: "Funds are transferred directly to your business account so you can start using them right away.",
    image: <FaMoneyBillWave className="text-green-600 w-12 h-12" />,
    bgColor: "bg-green-100",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          How It Works
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Follow these simple steps to get your business loan approved quickly and securely.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="px-2"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 ${step.bgColor}`} // use bgColor here
            >
              <div className="w-20 h-20 mb-3 flex items-center justify-center bg-white/25 rounded-full p-3">
                {typeof step.image === "string" ? (
                  <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                ) : (
                  step.image
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
