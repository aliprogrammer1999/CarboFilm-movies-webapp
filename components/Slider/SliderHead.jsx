/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import style from "@/styles/Slider.module.css";

// import required modules
import { Autoplay } from "swiper";

function SliderHead({ data }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="mt-20 relative">
            <Image
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              width={1600}
              height={900}
              alt="head slider"
              className="h-[300px] md:h-[500px]  rounded-lg object-cover transition-all hover:opacity-75"
            />
            {/* title and link poster top home page  */}
            <div className=" absolute top-0 w-full h-full flex flex-col transition-all hover:bg-[#0000009e] gap-6 justify-center items-center">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center px-3">
                {item.name || item.title}
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
    </>
  );
}
export default SliderHead;
