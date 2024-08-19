import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./slidesconstants";


const HeroSlider = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col border-0 mt-3  ">
      <Swiper
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 15,
            margin: "auto",
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50, // Increased space between slides
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} className="flex justify-center py-6">
            <div className="flex flex-col mb-10 group relative shadow-lg text-white rounded-xl px-1 w-full h-[250px] lg:h-[500px] lg:w-[100%] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
