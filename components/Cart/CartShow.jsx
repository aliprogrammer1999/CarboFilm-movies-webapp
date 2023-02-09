import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/Cart.module.css";

function CartShow({ data }) {
  return (
    <div className={style.ItemSlider}>
      {" "}
      <Image
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        className={style.ItemSliderImg}
        alt="image poster"
        width={300}
        height={200}
      />
      <div className={style.ItemInfo}>
        {/* title and overview  */}
        <div className="whitespace-pre-line px-2 gap-5 flex flex-col">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <span className="text-xs">{data.overview}</span>
        </div>

        {/* ---------------- */}

        {/* icons and coont info  */}
        <div className="flex gap-7 items-center mt-10 mb-5">
          <span className="flex items-center gap-1">
            <i className="ri-heart-fill text-color-red text-xl"></i>
            {data.vote_average}{" "}
          </span>

          {/* ------------------  */}
          <span className="flex items-center gap-1">
            <i className="ri-calendar-event-line text-color-red text-xl"></i>
            {data.release_date}
          </span>
          {/* ------------------  */}
          <span className="border-2 p-1 px-2 border-color-red flex items-center gap-1">
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