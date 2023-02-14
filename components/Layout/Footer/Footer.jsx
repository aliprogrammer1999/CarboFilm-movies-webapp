import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-max bg-color-[#202020] flex items-center">
      <h1 className="w-full text-center rounded">CarboFilm {"<--->"} alirg1999 © 2023</h1>

      <div className="w-[80%] bg-black rounded-md px-10 py-5 flex gap-7 justify-center items-center">
        <div className="text-xl flex gap-5">
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://github.com/aliprogrammer1999/CarboFilm-movies-webapp.git">
              <i className="ri-github-fill text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://gitlab.com/ali.programer.1999/carbofilm-nextjs-javascript.git">
              <i className="ri-gitlab-fill text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://www.instagram.com/ali.r.g.1999">
              <i className="ri-instagram-line text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://telegram.me/ali_rezapour_gatabi">
              <i className="ri-telegram-fill text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="mailto:ali.programer.1999@gmail.com">
              <i className="ri-mail-fill text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
          >
            <Link href="tel:09379534460">
              <i className="ri-phone-fill text-2xl p-2 transition-all w-[50px] h-[50px] hover:bg-color-black rounded-full"></i>
            </Link>
          </motion.button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
