import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
function Home() {
  return (
    <>
      <Head>
        <title>CarboMovies</title>
        <meta name="description" content="webapp for watch movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>ali</Layout>
    </>
  );
}

export default Home;
