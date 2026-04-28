"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper.css';
//import 'swiper/core/pagination.css';

const testimonials = [
  {
    name: 'Pallabi Das',
    description: 'Salaried Professional, Mumbai',
    text: 'CoverMantra truly understands its customers. The loan process was smooth, and the executive followed up diligently at every step. I received the amount in my bank within 24 hours!',
    rating: 5,
  },
  {
    name: 'Shubham Sharma',
    description: 'Freelance Designer, Delhi',
    text: 'Very professional and reliable. The support team guided me with every detail and resolved all my queries. The experience felt personal and supportive. Great service!',
    rating: 5,
  },
  {
    name: 'Divya Kapoor',
    description: 'Graduate Student, Bangalore',
    text: 'The app is amazing for checking your credit score and history instantly. Though I haven’t applied for a loan yet, the transparency and UI give me the confidence to go ahead soon.',
    rating: 4,
  },
  {
    name: 'Rakesh Mehta',
    description: 'Small Business Owner, Pune',
    text: 'The loan options were flexible and clearly explained. CoverMantra made the entire process hassle-free, with minimal documentation. Definitely recommending to my friends.',
    rating: 4.8,
  },
  {
    name: 'Sneha Verma',
    description: 'IT Professional, Hyderabad',
    text: 'Excellent experience. From eligibility check to disbursal, everything was done online and quickly. Loved the transparency and efficiency of the app.',
    rating: 3,
  },
  {
    name: 'Amit Raj',
    description: 'Entrepreneur, Kolkata',
    text: 'CoverMantra helped me get a business loan quickly. The process was simple, and the team was very supportive throughout.',
    rating: 4.9,
  },
  {
    name: 'Neha Singh',
    description: 'Software Engineer, Chennai',
    text: 'The platform is intuitive and fast. CoverMantra’s guidance made my loan application stress-free. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram Joshi',
    description: 'Consultant, Jaipur',
    text: 'Great service and very transparent. CoverMantra provided all the information I needed upfront and made the loan process very easy.',
    rating: 4.2,
  },
  {
    name: 'Priya Nair',
    description: 'Teacher, Kochi',
    text: 'CoverMantra made financial management easy for me. The team answered all my questions and helped me choose the right loan option.',
    rating: 4.8,
  },
  {
    name: 'Karan Mehra',
    description: 'Marketing Professional, Gurgaon',
    text: 'Fast, efficient, and reliable. CoverMantra’s app and customer service exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Ritu Sharma',
    description: 'Doctor, Lucknow',
    text: 'CoverMantra made applying for a personal loan quick and hassle-free. Very impressed with the professionalism.',
    rating: 4.9,
  },
  {
    name: 'Ankit Verma',
    description: 'Freelancer, Ahmedabad',
    text: 'Smooth process and excellent support. CoverMantra explained everything clearly and guided me throughout the application.',
    rating: 4.8,
  },
  {
    name: 'Simran Kaur',
    description: 'MBA Student, Chandigarh',
    text: 'The app is simple to use and very reliable. CoverMantra gave me confidence to apply for my first loan without stress.',
    rating: 4.7,
  },
  {
    name: 'Rajesh Khanna',
    description: 'Retail Business Owner, Indore',
    text: 'CoverMantra’s flexible loan options helped my business grow. The team was supportive and responsive at every step.',
    rating: 4.9,
  },
  {
    name: 'Tanya Gupta',
    description: 'Bank Employee, Bhopal',
    text: 'Excellent experience with CoverMantra. Quick responses, clear communication, and seamless loan disbursal. Highly recommended!',
    rating: 5,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-[#FFF4E5] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#08101E] tracking-tight mb-4">
            Our Happy Customers
          </h2>
          <p className="text-lg text-[#08101E]/70">
            Real stories from real people who trusted CoverMantra
          </p>
        </div>

        <Swiper
          spaceBetween={28}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-[#FF690B]/30",
            bulletActiveClass: "!bg-[#FF690B] !w-3 !h-3"
          }}
          autoplay={{ 
            delay: 4500, 
            disableOnInteraction: false 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-white/60 
                            hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 
                            min-h-80 flex flex-col relative">
                
                {/* Quote Icon */}
                <div className="text-6xl text-[#FF690B]/20 absolute top-6 right-6">“</div>

                {/* Testimonial Text */}
                <p className="text-[#5b4637] text-[15.5px] leading-relaxed grow mb-8">
                  {testimonial.text}
                </p>

                {/* User Info */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#FF690B] to-[#FF8C00] 
                                rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-white text-xl font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#08101E] text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#5b4637]">
                      {testimonial.description}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${i < Math.floor(testimonial.rating) 
                            ? "text-[#FF690B]" 
                            : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}