"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Personal Loans",
    description: "Get pre-approved offers with zero hidden charges",
    slug: "personal-loans",
  },
  {
    title: "Businness loans",
    description: "Completely digital and hassle-free loan process",
    slug: "business-loans",
  },
  {
    title: "Credit Cards",
    description: "Multiple lenders, one platform.",
    slug: "business-loans",
  },
  {
    title: "Small Amount loans",
    description: "Over 25 million satisfied customers",
    slug: "business-loans",
  },
  {
    title: "Loan Against Mutual funds",
    description: "Over 25 million satisfied customers",
    slug: "business-loans",
  },
  {
    title: "Gold Loan",
    description: "Over 25 million satisfied customers",
    slug: "business-loans",
  }

];

export default function FeatureSlider() {
  const router = useRouter();

  const handleReadMore = (slug: string) => {
    router.push(`/features/${slug}`);
  };

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      className="w-full"
    >
      {features.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="p-6 bg-white rounded-xl shadow-md h-100 w-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <button
              onClick={() => handleReadMore(item.slug)}
              className="mt-4 text-blue-500 hover:underline font-medium self-start"
            >
              Read more →
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
