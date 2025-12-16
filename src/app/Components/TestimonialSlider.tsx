'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
    <section className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500  to-green-900 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 inline-block">
          Our Happy Customers
        </h2>
        <p className="text-gray-800 text-xl sm:text-base mt-2">
          What they say about us
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className={`min-h-[280px] flex flex-col  mb-2 justify-between rounded-xl p-6 sm:p-8 bg-white hover:bg-green-50 transition-all duration-500 shadow-md hover:shadow-lg cursor-pointer`}
            >
              <p className="text-gray-700 text-sm sm:text-base mb-4 relative leading-relaxed">
                <span className="text-2xl text-gray-400 absolute top-[-10px] left-[-10px]">“</span>
                {testimonial.text}
                <span className="text-2xl text-gray-400 absolute bottom-[-10px] right-[-10px]">”</span>
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">{testimonial.description}</p>
                <div className="text-sm sm:text-base mt-1 flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                 </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
