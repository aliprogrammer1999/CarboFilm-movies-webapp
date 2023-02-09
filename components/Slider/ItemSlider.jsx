/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// dependency;
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import style from "@/styles/Slider.module.css";
import CartShow from "../Cart/CartShow";

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
        {/* item info  */}
        {data.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <CartShow data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ItemSlider;
