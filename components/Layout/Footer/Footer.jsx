import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full h-max bg-color-[#202020] flex justify-center items-center">
      <div className="w-[80%] bg-color-black h-[80%] rounded-md px-10 py-5 flex flex-col gap-7 justify-center items-center">
        <div className="text-5xl flex gap-5">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-color-black w-[70px] h-[70px] rounded-full pt-2 transition-all"
          >
            <i className="ri-github-fill"></i>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-color-black w-[70px] h-[70px] rounded-full pt-2 transition-all"
          >
            <i className="ri-instagram-line"></i>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-color-black w-[70px] h-[70px] rounded-full pt-2 transition-all"
          >
            <i className="ri-telegram-fill"></i>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-color-black w-[70px] h-[70px] rounded-full pt-2 transition-all"
          >
            <i className="ri-twitter-fill"></i>
          </motion.button>
        </div>

        <div className="text-center flex gap-14 flex-col md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <i className="ri-mail-send-line text-xl"></i>
            ali.programer.1999@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-phone-fill text-xl"></i>
            09379534460
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-xl"></i>
            Iran/Mazandran/Babol
          </div>
        </div>
        <h1 className="w-full text-center bg-color-gray rounded">CarboFilm © 2023</h1>
      </div>
    </footer>
  );
}

export default Footer;
