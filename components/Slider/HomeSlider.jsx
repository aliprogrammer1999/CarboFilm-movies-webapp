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

  const [movie , setMovie] = useState([])
    useEffect(()=>{
       const moviesFilter = poster.filter(item=> item.media_type === 'movie')
        setMovie(moviesFilter)
    } , [])


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
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[95vh]"
      >
        {movie.map((item) => (
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
    </div>
  );
}
