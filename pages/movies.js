/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import SliderHead from "@/components/Slider/SliderHead";
import RowItem from "@/components/RowItem/RowItem";
import { tmdbRequestMovie } from "./api/tmdb.request";

function movies({ Trand, pupoler, upcome, top, newPlayData }) {
  const [trandMovie, setTrandMovie] = useState([]);

  useEffect(() => {
    const filterMovie = Trand.results.filter(
      (movie) => movie.media_type === "movie"
    );
    console.log(filterMovie);
    setTrandMovie(filterMovie);
  }, [Trand.results]);

  return (
    <Layout>
      {/* head slider  */}
      <section className="h-max w-full">
        <div className="w-[95%] lg:w-[95%] mx-auto">
          <SliderHead data={trandMovie} />
        </div>
      </section>
      <section className="h-max">
        {/*populer Movie , Tv*/}
        <RowItem title="Pupoler Movie" DataRow={pupoler.results} />

        {/*New Play Movie , Tv*/}
        <RowItem title="New Play Movie" DataRow={newPlayData.results} />

        {/*UpComing Movie , Tv*/}
        <RowItem title="Upcoming Movie" DataRow={upcome.results} />

        {/*TopRate Movie , Tv*/}
        <RowItem title="TopRate Movie" DataRow={top.results} />
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
