"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoginModal from "./LoginModal";
import GlobalModal from "./globalmodel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';


export default function HeroSection() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleApplyNow = () => {
    const co_phone = Cookies.get("co_phone");
    const co_token = Cookies.get("co_token");

    if (co_phone && co_token) {
      router.push("/personal-loans");
    } else {
      setLoginOpen(true);
    }
  };
   const images = [
    "./image/man1img.png",
    "./image/Woman.png",
    "./image/manimage.png"
  ];
  return (
    <section className="relative bg-green-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-18 flex flex-col md:flex-row items-center relative">
      <div className="md:w-1/2 text-center md:text-left py-12 text-black">
        <h1 className="text-4xl font-bold mb-6 ">
            Finance ka Smart Solution <br />
            <span className="text-green-600">CoverMantra</span>
          </h1>
          <p className="text-lg mb-5 text-black">
            Empowering your financial journey with personalized loans,<br />
            credit scores, and digital banking tools.
          </p>
          <div className="flex justify-center md:justify-start space-x-8 mb-6 text-sm">
            <div>
              <p className="font-bold text-xl text-green-600">50 Million+</p>
              <p className="text-black">Users</p>
            </div>
            <div>
              <p className="font-bold text-xl text-green-600">4.7★</p>
              <p className="text-black">Google rating</p>
            </div>
            <div>
              <p className="font-bold text-xl text-green-600">2 Cr+</p>
              <p className="text-black">Downloads</p>
            </div>
          </div>
          <div className="mt-6 z-20 relative">
            <button
              onClick={handleApplyNow}
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center  items-end mt-8 md:mt-0 relative h-auto">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 25000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            className=" w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-[-20px] mt-2"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Carousel slide ${i + 1}`}
                  className="w-full h-auto object-contain transition-transform duration-1000"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mt-10 overflow-hidden">
        <svg
        className="absolute bottom-0 left-0 z-10 w-full h-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L30,213.3C60,203,120,181,180,192C240,203,300,245,360,245.3C420,245,480,203,540,197.3C600,192,660,224,720,218.7C780,213,840,171,900,165.3C960,160,1020,192,1080,208C1140,224,1200,224,1260,213.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <GlobalModal />
    </section>
  );
}
