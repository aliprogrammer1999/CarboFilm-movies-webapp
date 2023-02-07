/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";
import { motion } from "framer-motion";
import { Navigation, Thumbs } from "swiper";
import Link from "next/link";
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
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs]}
        className="mySwiper h-[100vh]"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id} className={style.postercss}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            />
            <div className="flex flex-col items-center gap-1 md:gap-8 absolute left-[50%] translate-x-[-50%]">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-center">
                {item.title}
              </h1>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.3 }}
              >
                <Link href="#">
                  <i class="ri-play-circle-line text-6xl text-color-red"></i>
                </Link>
              </motion.button>
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
        modules={[Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id} className={style.poster_small}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
            <div>
              <h2 className="font-bold border-color-red border-b text-xl">
                {item.title}
              </h2>
              <span className="text-10 absolute top-2 left-3 bg-color-red rounded-full flex justify-center items-center w-7 h-7">
                {Math.round(item.vote_average)}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
