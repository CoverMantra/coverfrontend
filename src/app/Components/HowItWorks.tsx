"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import 'swiper/swiper.css';
import 'swiper/css/pagination';

const steps = [
  {
    title: "Apply Online",
    desc: "Easily fill out your business loan application with a few simple steps online. No paperwork required.",
    image: "https://cdn-icons-png.flaticon.com/512/4359/4359754.png",
    bgColor: "bg-white",
  },
  {
    title: "Quick Verification",
    desc: "We verify your details quickly through secure digital channels to ensure speedy approval.",
    image: "https://cdn-icons-png.flaticon.com/512/2329/2329073.png",
    bgColor: "bg-white",
  },
  {
    title: "Get Approval",
    desc: "Our team evaluates your application and approves loans within hours for eligible businesses.",
    image: <FaCheckCircle className="text-[#08101E] w-14 h-14" />,
    bgColor: "bg-white",
  },
  {
    title: "Receive Funds",
    desc: "Funds are transferred directly to your business account so you can start using them right away.",
    image: <FaMoneyBillWave className="text-[#08101E] w-14 h-14" />,
    bgColor: "bg-white",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FFF4E5] py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-[#08101E]/70 max-w-2xl mx-auto">
          Get your business loan approved in just 4 simple steps — fast, secure, and paperless.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 28 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-[#FF690B]/30",
          bulletActiveClass: "!bg-[#FF690B]",
        }}
        className="pb-12"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <div
              className={`group h-full bg-white rounded-3xl p-8 shadow-lg border border-white/60 
                         hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
                         flex flex-col items-center text-center relative overflow-hidden`}
            >
              {/* Subtle Background Glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#FF690B]/10 to-transparent rounded-full group-hover:scale-125 transition-transform duration-700" />

              {/* Icon Container - 3D Style */}
              <div className="w-24 h-24 mb-8 flex items-center justify-center bg-gradient-to-br from-[#FF690B] to-[#FF8C00] 
                            rounded-2xl shadow-inner relative z-10">
                {typeof step.image === "string" ? (
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-14 h-14 object-contain drop-shadow-md" 
                  />
                ) : (
                  step.image
                )}
              </div>

              {/* Step Number */}
              <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center 
                            bg-[#FF690B] text-white text-sm font-bold rounded-full shadow">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#08101E] mb-4 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#5b4637] text-[15.2px] leading-relaxed flex-grow">
                {step.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}