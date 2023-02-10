/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// dependency;
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CartShow from "../Cart/CartShow";

function ItemSlider({ data }) {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setShowData(data);
  }, [data]);

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
          425: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          720: {slidesPerView: 3,},

          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper h-[400px] max-w-[1440px]  sm:w-full md:h-[500px] select-none"
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
