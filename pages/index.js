import React , {useState , useEffect} from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import tmdbRequest from "@/pages/api/tmdb.request";
import { HomeSlider } from "@/components/Slider/HomeSlider";
import ItemSlider from '@/components/Slider/ItemSlider'

function Home({ Trand , pupoler }) {
  const [MoviePoster , setMoviePoster] = useState([])

  useEffect(()=>{
    const filterMoviePoster = Trand.results.filter(item => item.media_type === "movie")
    setMoviePoster(filterMoviePoster)
  } , [Trand ])

  return (
    <>
      <Head>
        <title>CarboMovies</title>
        <meta name="description" content="webapp for watch movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CarbonFilm.png" />
      </Head>
      <Layout>
        <main className="h-[200vh]">
          {/*movie poster*/}
          <section className="w-full">
            <HomeSlider poster={MoviePoster}/>
          </section>

          {/*populer Movie , Tv*/}
          <section  className="h-max w-[90%] mx-auto my-14">
             <ItemSlider data={pupoler.results}/>
          </section>

        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const [TrandRes, pupolerRes ] = await Promise.all([
    fetch(tmdbRequest.Trending),
    fetch(tmdbRequest.pupoler)
  ]);

  const [Trand, pupoler] = await Promise.all([
    TrandRes.json(),
    pupolerRes.json()
  ]);

  return {
    props: { Trand , pupoler }, // will be passed to the page component as props
  };
}

export default Home;
