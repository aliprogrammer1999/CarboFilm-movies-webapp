/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";

import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function HomeSlider({ poster }) {
  console.log(poster);
  return (
    <div>
      {" "}
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[95vh]"
      >
        {poster.map((item) => (
          <SwiperSlide key={item.id} className={style.postercss}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
            />
            <div className=" absolute left-[50%] translate-x-[-50%]">
              <h1 className="text-4xl font-bold text-center mb-4">
                {item.original_title}
              </h1>
              <p className="text-center">{item.overview}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
