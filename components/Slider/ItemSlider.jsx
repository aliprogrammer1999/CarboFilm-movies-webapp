import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import style from './Slider.module.css'
// import required modules

function ItemSlider ({data}) {
console.log(data)
return(
    <div>
        <h1 className='text-3xl font-bold border-b-2 border-color-red w-max mb-8 '>
            Pupoler Movie & Tv
        </h1>

        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            className="mySwiper h-[300px] select-none"
        >
            {data.map(item=>
                <SwiperSlide key={item.id} className={style.ItemSlider}>
                    <img  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={style.ItemSliderImg}/>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
)
}

export default ItemSlider