/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState , useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";

import { Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export function HomeSlider({ poster }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
    <div>
      {" "}
      <Swiper
          style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
          modules={[ Navigation, Thumbs]}
        className="mySwiper h-[95vh]"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id} className={style.postercss}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
            <div className=" absolute left-[50%] translate-x-[-50%]">
              <h1 className="text-6xl font-bold text-center mb-4">
                {item.title}
              </h1>
              <p className="text-center">{item.overview}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[ Navigation, Thumbs]}
            className="mySwiper"
        >
            {poster.map(item=> <SwiperSlide key={item.id} className="relative flex justify-center items-center mt-3 bg-black rounded overflow-hidden transition-all border hover:border border-black hover:border-color-gray">
                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="hover:opacity-10 transition-all cursor-pointer"/>
                <div className="absolute text-center text-white flex items-center justify-center  top-50 w-full h-full">
                    <h4>{item.title}</h4>
                </div>
            </SwiperSlide>)}

        </Swiper>
    </div>
  );
}
