/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// Import Swiper React components and dependency
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Thumbs } from "swiper";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import style from "./Slider.module.css";
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
            <Image
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              width={1600}
              height={900}
              alt="image poster"
            />
            {/* title and link poster top home page  */}
            <div className="flex flex-col items-center gap-1 md:gap-8 absolute left-[50%] translate-x-[-50%]">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-center">
                {item.title}
              </h1>

              {/* link to detail  */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.3 }}
              >
                <Link
                  href={`/${
                    item.media_type == undefined ? "movie" : item.media_type
                  }/${item.id}`}
                >
                  <i className="ri-play-circle-line text-6xl text-color-red"></i>
                </Link>
              </motion.button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* small poster  */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id} className={style.poster_small}>
            <Image
              className="w-full"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="poster movie"
              width={200}
              height={100}
            />
            <div className="px-3">
              <h2 className="font-bold border-color-red border-b text-md text-center">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
