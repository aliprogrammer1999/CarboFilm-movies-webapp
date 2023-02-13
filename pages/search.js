import Layout from "../components/Layout/Layout.jsx";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router.js";

function Search(props) {
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("movie")
  const router = useRouter()
  const searchHandler = (e) => {
    e.preventDefault()
    router.push
  }

  return <Layout>
    <section className="h-[100vh] flex flex-col items-center">
      <div className="h-[100px] w-[full]"></div>
      <form className="flex justify-center items-center w-[85%]" onSubmit={searchHandler}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-black transition-all py-[11px] px-3 rounded-tl-md">
          <option value="tv">Tv</option>
          <option value="movie">Movie</option>
        </select>

        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type='text' placeholder="Enter keyword search movie" className="py-3 px-5 w-[100%] text-black mx-auto" />
        <button className="bg-color-red py-3 px-5 rounded-tr-md" >Search</button>
      </form>
    </section>
  </Layout>;
}


export async function getServerSideProps() {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`)
  const data = await res.json()

  return { props: { data } }
}


export default Search;
