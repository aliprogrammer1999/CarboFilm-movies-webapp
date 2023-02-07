/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import style from "./Slider.module.css";
// import required modules
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function ItemSlider({ data }) {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-fontsize": "10px",
        }}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[500px] select-none"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={style.ItemSlider}>
            <Image
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className={style.ItemSliderImg}
              alt="image poster"
              width={300}
              height={200}
            />
            <div className={style.ItemInfo}>
              <div className="whitespace-pre-line px-2 gap-5 flex flex-col">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <span className="text-xs">{item.overview}</span>
              </div>
              <div className="flex gap-7 items-center mt-10 mb-5">
                <span className="flex items-center gap-1">
                  <i className="ri-heart-fill text-color-red text-xl"></i>
                  {item.vote_average}{" "}
                </span>
                <span className="flex items-center gap-1">
                  <i className="ri-calendar-event-line text-color-red text-xl"></i>
                  {item.release_date}
                </span>
                <span className="border-2 p-1 px-2 border-color-red flex items-center gap-1">
                  <i className="ri-global-fill"></i>
                  {item.original_language}
                </span>
              </div>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.3 }}
              >
                <Link href="#">
                  <i className="ri-play-circle-line text-6xl text-color-red"></i>
                </Link>
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ItemSlider;
