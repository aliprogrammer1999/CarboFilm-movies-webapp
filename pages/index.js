// dependency
import React, { useState, useEffect } from "react";
import Head from "next/head";
// api
import tmdbRequest from "@/pages/api/tmdb.request";
// component
import { HomeSlider } from "@/components/Slider/HomeSlider";
import ItemSlider from "@/components/Slider/ItemSlider";
import Layout from "../components/Layout/Layout";

function Home({ Trand, pupoler, upcome, top, newPlayData }) {
  const [MoviePoster, setMoviePoster] = useState([]); // state for filter movie
  console.log(pupoler);

  // home filter movie from tv
  useEffect(() => {
    const filterMoviePoster = Trand.results.filter(
      (item) => item.media_type === "movie"
    );
    setMoviePoster(filterMoviePoster);
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
          <section className="h-max w-[90%] mx-auto my-14">
            <h1 className="text-3xl font-bold border-b-2 border-color-red w-max mb-8 ">
              Pupoler Movie & Tv
            </h1>
            <ItemSlider data={pupoler.results} />
          </section>

          {/*New Play Movie , Tv*/}
          <section className="h-max w-[90%] mx-auto my-14">
            <h1 className="text-3xl font-bold border-b-2 border-color-red w-max mb-8 ">
              New Play Movie & Tv
            </h1>
            <ItemSlider data={newPlayData.results} />
          </section>

          {/*UpComing Movie , Tv*/}
          <section className="h-max w-[90%] mx-auto my-14">
            <h1 className="text-3xl font-bold border-b-2 border-color-red w-max mb-8 ">
              Upcoming Movie & Tv
            </h1>
            <ItemSlider data={upcome.results} />
          </section>

          {/*TopRate Movie , Tv*/}
          <section className="h-max w-[90%] mx-auto my-14">
            <h1 className="text-3xl font-bold border-b-2 border-color-red w-max mb-8 ">
              TopRate Movie & Tv
            </h1>
            <ItemSlider data={top.results} />
          </section>
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
