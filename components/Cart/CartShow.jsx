/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/Cart.module.css";

function CartShow({ data }) {
  const truncate = (string) => {
    if (string.length > 100) {
      return string.slice(0, 60) + "...";
    }
    return string;
  };

  return (
    <div className={style.ItemSlider}>
      {" "}
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        className={style.ItemSliderImg}
        alt={data.original_name}
        width={300}
        height={200}
      />
      <div className={style.ItemInfo}>
        {/* title and overview  */}
        <div className="whitespace-pre-line px-2 gap-5 flex flex-col">
          <h1 className="text-lg md:text-3xl font-bold">
            {data.title || data.name}
          </h1>
          <span className="hidden md:block text-md">
            {truncate(data.overview)}
          </span>
        </div>

        {/* ---------------- */}

        {/* icons and coont info  */}
        <div className="flex md:gap-7 md:items-center flex-col md:flex-row mt-10 mb-5">
          <span className="flex items-center gap-1">
            <i className="ri-heart-fill text-color-red text-sm md:text-xl"></i>
            {data.vote_average}{" "}
          </span>

          {/* ------------------  */}
          {data.release_date ? (
            <span className="flex items-center gap-1">
              <i className="ri-calendar-event-line text-color-red text-sm md:text-xl"></i>
              {data.release_date}
            </span>
          ) : null}
          {/* ------------------  */}
          <span className="border-2 p-1 px-2 border-color-red flex items-center gap-1 text-sm md:text-xl justify-center">
            <i className="ri-global-fill"></i>
            {data.original_language}
          </span>
        </div>

        {/* btn and link to detail  */}
        <motion.button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.3 }}>
          <Link
            href={`/${
              data.media_type == undefined ? "movie" : data.media_type
            }/${data.id}`}
          >
            <i className="ri-play-circle-line text-6xl text-color-red"></i>
          </Link>
        </motion.button>
      </div>
    </div>
  );
}

export default CartShow;
