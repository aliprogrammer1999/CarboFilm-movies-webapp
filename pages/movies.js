/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import SliderHead from "@/components/Slider/SliderHead";
import { tmdbRequestMovie } from "./api/tmdb.request";

function movies({ Trand, pupoler, upcome, top, newPlayData }) {
  const [trandMovie, setTrandMovie] = useState(Trand);
  useEffect(() => {
    const filterMovie = Trand.results.filter(
      (movie) => movie.media_type === "movie"
    );
    setTrandMovie(Trand);
  }, [Trand]);

  return (
    <Layout>
      <section className="h-[120vh] w-full">
        <div className="w-[90%] mx-auto">
          <SliderHead data={trandMovie.results} />
        </div>
      </section>
    </Layout>
  );
}

// api request for movie
export async function getServerSideProps() {
  const [TrandRes, pupolerRes, upcomingRes, toprateRes, newPlayRes] =
    await Promise.all([
      fetch(tmdbRequestMovie.Trending),
      fetch(tmdbRequestMovie.pupoler),
      fetch(tmdbRequestMovie.upComing),
      fetch(tmdbRequestMovie.topRate),
      fetch(tmdbRequestMovie.NewPlay),
    ]);

  const [Trand, pupoler, upcome, top, newPlayData] = await Promise.all([
    TrandRes.json(),
    pupolerRes.json(),
    upcomingRes.json(),
    toprateRes.json(),
    newPlayRes.json(),
  ]);

  return {
    props: { Trand, pupoler, upcome, top, newPlayData }, // will be passed to the page component as props
  };
}

export default movies;
