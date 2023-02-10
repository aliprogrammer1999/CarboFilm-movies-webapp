/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout/Layout";
import { tmdbRequestTv } from "@/pages/api/tmdb.request";
import SliderHead from "@/components/Slider/SliderHead";
import RowItem from "@/components/RowItem/RowItem";

function tv({ Trand, pupoler, top, airing_todayData, on_the_airData }) {
  const [trandTv, setTrandTv] = useState([]);
  useEffect(() => {
    const filterTv = Trand.results.filter((Tv) => Tv.media_type === "tv");
    setTrandTv(filterTv);
  }, [Trand]);

  return (
    <Layout>
      <section className="h-max w-full">
        <div className="w-[95%] lg:w-[95%] mx-auto">
          <SliderHead data={trandTv} />
        </div>
      </section>
      <section className="h-max">
        {/*populer Movie , Tv*/}
        <RowItem title="Pupoler Tv" DataRow={pupoler.results} />

        {/*New Play Movie , Tv*/}
        <RowItem
          title="Airing TodayData Tv"
          DataRow={airing_todayData.results}
        />

        {/*UpComing Movie , Tv*/}
        <RowItem title="On the AirData Tv" DataRow={on_the_airData.results} />

        {/*TopRate Movie , Tv*/}
        <RowItem title="TopRate Tv" DataRow={top.results} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const [TrandRes, pupolerRes, toprateRes, airing_todayRes, on_the_airRes] =
    await Promise.all([
      fetch(tmdbRequestTv.Trending),
      fetch(tmdbRequestTv.pupoler),
      fetch(tmdbRequestTv.airing_today),
      fetch(tmdbRequestTv.topRate),
      fetch(tmdbRequestTv.on_the_air),
    ]);

  const [Trand, pupoler, top, airing_todayData, on_the_airData] =
    await Promise.all([
      TrandRes.json(),
      pupolerRes.json(),
      on_the_airRes.json(),
      toprateRes.json(),
      airing_todayRes.json(),
    ]);

  return {
    props: { Trand, pupoler, top, airing_todayData, on_the_airData }, // will be passed to the page component as props
  };
}
export default tv;
