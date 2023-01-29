import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import tmdbRequest from "@/pages/api/tmdb.request";
import { HomeSlider } from "@/components/Slider/HomeSlider";

function Home({ data }) {

  return (
    <>
      <Head>
        <title>CarboMovies</title>
        <meta name="description" content="webapp for watch movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CarbonFilm.png" />
      </Head>
      <Layout>
        <main className="h-[100vh]">
          <section className="h-[50vh] w-full">
            <HomeSlider poster={data.results}/>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(tmdbRequest.Trending);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
