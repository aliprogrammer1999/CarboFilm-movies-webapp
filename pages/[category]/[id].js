/* eslint-disable @next/next/no-head-element */
import Layout from "@/components/Layout/Layout";
import React from "react";
import Image from "next/image";
import style from "./Detile.module.css";
import { motion } from "framer-motion";

function MediaType({ detail }) {
  return (
    <>
      <Layout>
        {/* background poster item  background image*/}
        <div
          className="h-[100vh] bg-black flex justify-center items-end"
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`})`,
            backgroundPosition: "center",
            backgroundOrigin: "unset",
            backgroundSize: "cover",
          }}
        >
          {/* box Image  and triler movie*/}
          <div className={style.detileInfo}>
            <div className="p-3 mr-2">
              <Image
                src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                className="h-full object-continer rounded-lg"
                alt={detail.title}
                width={250}
                height={100}
              />
            </div>

            {/* information about movie and tv  */}
            <div className="w-full p-3 py-4 flex flex-col gap-2 justify-between text-xl">
              {/* show title and top section  */}
              <div className="flex items-center justify-between border-b-2 pb-2 mb-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{detail.title}</h1>
                  <h4 className="text-xs">({detail.tagline})</h4>
                </div>
                {/* ---------------- */}
                <div className="w-[300px] h-[50px] flex gap-10 justify-center items-center">
                  <div className=" text-bold w-[30px] text-xl flex justify-center items-center rounded-full ">
                    <i className="ri-heart-fill text-color-red text-2xl"></i>
                    {Math.round(detail.vote_average)}/10
                  </div>
                  {/* ---------------- */}
                  <div className="flex items-center text-xl">
                    <i className="ri-timer-line text-color-red text-2xl"></i>
                    {detail.runtime}
                  </div>
                  {/* --------------- */}
                  <div className="flex items-center text-xl">
                    <i className="ri-calendar-event-line text-color-red text-2xl"></i>
                    {detail.release_date}
                  </div>
                </div>
              </div>

              {/* language and Countries middle section*/}
              <div className="flex gap-2 justify-between mr-5 items-center flex-wrap">
                <div className="flex gap-2 w-max px-3 py-1 rounded-xl text-md items-center flex-wrap">
                  Production Countries :
                  {detail.production_countries.map((item, index) => (
                    <h3
                      key={index}
                      className="border-color-red border-2 px-2 py-1 text-xs"
                    >
                      {item.iso_3166_1}
                    </h3>
                  ))}
                </div>
                {/* ---------------- */}
                <div className="flex gap-2 w-max px-3 py-1 rounded-xl text-md items-center">
                  Language :
                  {detail.spoken_languages.map((item, index) => (
                    <h3
                      key={index}
                      className="border-color-red border-2 px-2 py-1 text-xs"
                    >
                      {item.english_name}
                    </h3>
                  ))}
                </div>
                {/* ------------------- */}
                <div className="flex gap-2 w-max px-3 py-1 rounded-xl text-md items-center">
                  Genres :
                  {detail.genres.map((item, index) => (
                    <h3
                      key={index}
                      className="border-color-red border-2 px-2 py-1 text-xs"
                    >
                      {item.name}
                    </h3>
                  ))}
                </div>
              </div>

              {/* discriptin about movie and tv  */}
              <div className=" border-t-2 pt-2 mt-3">
                <p className="text-center text-sm">{detail.overview}</p>
              </div>

              {/*button add to list and download section  */}
              <div className="flex gap-3 mt-5 justify-end">
                <motion.button
                  whileTap={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 text-sm bg-yellow-600 p-1 px-2 rounded-md w-[170px] justify-center"
                >
                  Add to Watch List{" "}
                  <i className="ri-add-circle-line text-lg"></i>
                </motion.button>
                {/* ------------------ */}
                <motion.button
                  whileTap={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 text-sm bg-color-red p-1 px-2 rounded-md w-[150px] justify-center"
                >
                  Download <i className="ri-download-2-line text-lg"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { category } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/${category}/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const detail = await res.json();

  return {
    props: { detail }, // will be passed to the page component as props
  };
}

export default MediaType;
