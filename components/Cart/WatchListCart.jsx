import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "@/styles/Cart.module.css";

function WatchListCart({ data }) {
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className={style.watchlistBox}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${item?.img}`}
            alt={item.title}
            width={200}
            height={200}
            className="rounded-md"
          />
          <div className={style.watchListstyle}>
            <h1 className="text-sm text-center">{item.title}</h1>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.3 }}
            >
              <Link
                href={`/${
                  item.media_type == undefined ? "movie" : item.media_type
                }/${item.id}`}
              >
                <i className="ri-play-circle-line text-4xl text-color-red"></i>
              </Link>
            </motion.button>
            <motion.button
              className=" absolute top-3 left-2 bg-white px-1 rounded-md"
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <i className="ri-delete-bin-line text-xl text-color-red"></i>
            </motion.button>
          </div>
        </div>
      ))}
    </>
  );
}

export default WatchListCart;
