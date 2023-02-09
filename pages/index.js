// dependency
import React, { useState, useEffect } from "react";
import Head from "next/head";
// api
import {tmdbRequest} from "@/pages/api/tmdb.request";
// component
import { HomeSlider } from "@/components/Slider/HomeSlider";
import Layout from "../components/Layout/Layout";
import RowItem from "@/components/RowItem/RowItem";

function Home({ Trand, pupoler, upcome, top, newPlayData }) {
  const [MoviePoster, setMoviePoster] = useState([]); // state for filter movie

  // home filter movie from tv
  useEffect(() => {
    setMoviePoster(Trand.results);
  }, [Trand]);

  return (
    <>
      <Head>
        <title>CarboMovies</title>
        <meta name="description" content="webapp for watch movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CarbonFilm.png" />
      </Head>
      <Layout>
        <main className="h-max">
          {/*movie poster*/}
          <section className="w-full mb-10">
            <HomeSlider poster={MoviePoster} />
          </section>

          {/*populer Movie , Tv*/}
          <RowItem title="Pupoler Movie & Tv" DataRow={pupoler.results} />

          {/*New Play Movie , Tv*/}
          <RowItem title="New Play Movie & Tv" DataRow={newPlayData.results} />

          {/*UpComing Movie , Tv*/}
          <RowItem title="Upcoming Movie & Tv" DataRow={upcome.results} />

          {/*TopRate Movie , Tv*/}
          <RowItem title="TopRate Movie & Tv" DataRow={top.results} />
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const [TrandRes, pupolerRes, upcomingRes, toprateRes, newPlayRes] =
    await Promise.all([
      fetch(tmdbRequest.Trending),
      fetch(tmdbRequest.pupoler),
      fetch(tmdbRequest.upComing),
      fetch(tmdbRequest.topRate),
      fetch(tmdbRequest.NewPlay),
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

export default Home;
