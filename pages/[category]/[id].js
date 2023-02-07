/* eslint-disable @next/next/no-head-element */
import Layout from "@/components/Layout/Layout";
import React from "react";
import Image from "next/image";
import style from "./Detile.module.css";

function MediaType({ detail }) {
  console.log(detail);
  return (
    <Layout>
      <head>
        <title>CarboFilm : {detail.title}</title>
      </head>
      <div
        className="h-[100vh] bg-black flex justify-center items-end"
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`})`,
          backgroundPosition: "center",
          backgroundOrigin: "unset",
          backgroundSize: "cover",
        }}
      >
        <div className={style.detileInfo}>
          <div className="p-3 mr-2">
            <Image
              src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
              className="h-full object-continer rounded-lg"
              alt={detail.title}
              width={300}
              height={200}
            />
          </div>

          <div className="w-full p-3 py-4 relative flex flex-col gap-2">
            <div className="w-[200px] h-[100px] bg-black right-3 top-1/4"></div>

            <div>
              <div className=" absolute right-4 text-bold w-[30px] flex justify-center items-center pt-1 h-[30px] bg-color-red rounded-full">
                {Math.round(detail.vote_average)}
              </div>
              <div className="flex items-center gap-3 border-b-2 pb-2 mb-1">
                <h1 className="text-3xl font-bold">{detail.title}</h1>
                <h4 className="text-xs">({detail.tagline})</h4>
              </div>
              <div className="flex gap-2 w-max px-3 py-1 rounded-xl text-md items-center">
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
            <div className=" border-t-2 pt-2 mt-3">
              <p className="text-center">{detail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
