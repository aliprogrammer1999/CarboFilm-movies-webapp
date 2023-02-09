/* eslint-disable @next/next/no-head-element */

// dependency;
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

// style css
import style from "@/styles/Detail.module.css";

// component
import Layout from "@/components/Layout/Layout";
import ItemSlider from "@/components/Slider/ItemSlider";

// user save item
import { UserAuth } from "@/context/Auth.context";
import { db } from "@/firebase/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import TrailerVideo from "@/components/Video/TrailerVideo";

function MediaType({ detail, similarShow, category, trailerVideo }) {
  const { user } = UserAuth({});
  const [save, setSave] = useState(false);

  const MovieId = doc(db, "users", `${user?.email}`);

  // watch list handler
  const saveShow = async () => {
    if (user?.email) {
      setSave(true);
      await updateDoc(MovieId, {
        saveShow: arrayUnion({
          id: detail.id,
          title: detail.title,
          img: detail.poster_path,
        }),
      });
      toast.success("Success add to watch list");
    } else {
      toast.error("Please login !!!");
    }
  };

  // -----------------

  return (
    <>
      <Layout>
        <section className="h-[135vh] md:h-[125vh] lg:h-[105vh] bg-black flex justify-center items-end relative">
          {/* trailer Video  */}
          <div className=" absolute">
            <TrailerVideo />
          </div>
          {/* background poster item  background image*/}

          <div
            className="h-full w-full absolute flex items-center justify-center"
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`})`,
              backgroundPosition: "center",
              backgroundOrigin: "unset",
              backgroundSize: "cover",
              opacity: 0.5,
            }}
          ></div>

          {/* box Image  and triler movie*/}
          <div className={style.detileInfo}>
            <div className="p-3 mr-2">
              <Image
                src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
                className="h-full hidden md:block object-continer rounded-lg w-[370px]"
                alt={detail?.title}
                width={250}
                height={100}
              />
            </div>

            {/* information about movie and tv  */}
            <div className="md:w-full p-3 py-4 flex flex-col gap-2 justify-between text-sm lg:text-lg">
              {/* show title and top section  */}

              <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                <h1 className="text-3xl font-bold">{detail?.title}</h1>
                {detail.tagline ? (
                  <h4 className="text-xs ml-4">({detail?.tagline})</h4>
                ) : null}
              </div>
              {/* ---------------- */}
              <div className="w-[300px] flex gap-10 justify-center items-center ml-4">
                <div className=" text-bold w-[30px] text-sm lg:text-lg flex justify-center items-center rounded-full ">
                  <i className="ri-heart-fill text-color-red text-sm lg:text-2xl"></i>
                  {Math.round(detail?.vote_average)}/10
                </div>
                {/* ---------------- */}
                <div className="flex items-center text-sm lg:text-lg">
                  <i className="ri-timer-line text-color-red text-sm lg:text-2xl"></i>
                  {detail?.runtime}
                </div>
                {/* --------------- */}
                <div className="flex items-center text-sm lg:text-lg">
                  <i className="ri-calendar-event-line text-color-red text-sm lg:text-2xl"></i>
                  {detail?.release_date}
                </div>
              </div>

              {/* language and Countries middle section*/}

              <div className="flex gap-2 w-max px-3 rounded-xl items-center">
                Genres :
                {detail?.genres.map((item, index) => (
                  <h3
                    key={index}
                    className="border-color-red border-2 px-2 py-1 text-xs"
                  >
                    {item.name}
                  </h3>
                ))}
              </div>
              <div className="flex gap-2 w-max px-3 rounded-xl items-center flex-wrap">
                Production Countries :
                {detail?.production_countries.map((item, index) => (
                  <h3
                    key={index}
                    className="border-color-red border-2 px-2 py-1 text-xs"
                  >
                    {item.iso_3166_1}
                  </h3>
                ))}
              </div>
              {/* ---------------- */}
              <div className="flex gap-2 w-max px-3 rounded-xl items-center">
                Language :
                {detail?.spoken_languages.map((item, index) => (
                  <h3
                    key={index}
                    className="border-color-red border-2 px-2 py-1 text-xs"
                  >
                    {item.english_name}
                  </h3>
                ))}
              </div>

              {/* discriptin about movie and tv  */}
              <div className=" border-t-2 pt-2 mt-3">
                <p className="text-center md:text-start text-sm">
                  {detail?.overview}
                </p>
              </div>

              {/*button add to list and download section  */}
              <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center items-center w-full sm:justify-start">
                <motion.button
                  whileTap={{ scale: 1 }}
                  onClick={saveShow}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 text-sm bg-yellow-600 p-1 px-2 rounded-md w-full sm:w-[170px] justify-center"
                >
                  Add to Watch List{" "}
                  <i className="ri-add-circle-line text-lg"></i>
                </motion.button>
                {/* ------------------ */}
                <motion.button
                  whileTap={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 text-sm bg-color-red p-1 px-2 rounded-md w-full sm:w-[150px] justify-center"
                >
                  Download <i className="ri-download-2-line text-lg"></i>
                </motion.button>
                {/* ------------------ */}
                <motion.button
                  whileTap={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 text-sm bg-white text-color-red p-1 px-2 rounded-md w-full sm:w-[150px] justify-center"
                >
                  Trailer <i className="ri-play-line text-lg"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* similar section  */}

        <section className="h-max w-[90%] mx-auto my-14">
          <h1 className="  mb-3 pb-3 text-2xl font-bold text-center border-color-red  uppercase">
            similar {category}
          </h1>
          {similarShow.results.length == 0 ? (
            <h1 className=" text-center text-color-red font-bold">Not Found Please Try again</h1>
          ) : (
            <ItemSlider data={similarShow.results} />
          )}
        </section>
      </Layout>

      {/* alert  */}
      <ToastContainer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { category } = context.query;

  const [DetailRes, similarShowRes, trailerVideoRes] = await Promise.all([
    // detail request
    fetch(
      `https://api.themoviedb.org/3/${category}/${id}?api_key=${process.env.API_KEY}&language=en-US`
    ),
    // similar data request
    fetch(
      `https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ),
    // video trailer movie and tv
    fetch(
      `https://api.themoviedb.org/3/${category}/${id}//watch/providers?api_key=${process.env.API_KEY}&language=en-US`
    ),
  ]);

  const [detail, similarShow, trailerVideo] = await Promise.all([
    DetailRes.json(),
    similarShowRes.json(),
    trailerVideoRes.json(),
  ]);

  return {
    props: { detail, similarShow, trailerVideo, category }, // will be passed to the page component as props
  };
}

export default MediaType;
