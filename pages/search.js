/* eslint-disable jsx-a11y/alt-text */
import Layout from "../components/Layout/Layout.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image.js";
import Link from "next/link.js";


function Search() {
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("movie")
  const [finded, setFinded] = useState([])


  const searchHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=1f75df4bb6023c5bf7cc24a9ff3e2ffe&query=${keyword}&page=1`).then((res) => setFinded(res.data.results))
    } catch (error) {
      console.error(error);
    }
    console.log(finded)
  }


  const truncate = (string) => {
    if (string.length > 100) {
      return string.slice(0, 100) + "...";
    }
    return string;
  };



  return <Layout>
    <section className="h-[100vh] flex flex-col items-center">
      <div className="h-[100px] w-[full]"></div>

      {/* search box item  */}
      <form className="flex justify-center items-center w-[85%]" onSubmit={searchHandler}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-black transition-all py-[11px] px-3 rounded-tl-md">
          <option value="tv">Tv</option>
          <option value="movie">Movie</option>
        </select>

        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} type='text' placeholder="Enter keyword search movie" className="py-3 px-5 w-[100%] text-black mx-auto" required />
        <button className="bg-color-red py-3 px-5 rounded-tr-md" >Search</button>
      </form>


      {/* show item section  */}
      <section className="flex flex-col w-[85%]">
        {finded?.length == 0 ? <h1 className="mt-20 font-bold text-5xl">Not Found !!!</h1> : finded.map(item => <Link href={`/${item.media_type == undefined ? "movie" : item.media_type
          }/${item.id}`} className="flex w-full px-5 py-2 gap-5 rounded-sm items-center hover:bg-color-black transition-all mt-2" key={item.id}>
          <Image src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} width={100} height={100} className="h-[100px] w-max" alt='search poster' />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{item.title}</h1>
            <div className="flex gap-5">
              <h4 className="text-sm flex items-center gap-1"><i className="ri-calendar-event-fill"></i> {item.release_date}</h4>
              <span className="text-sm flex items-center gap-1">
                <i className="ri-heart-fill"></i>
                {item.vote_average}
              </span>
            </div>
            <span className="text-sm">
              {truncate(item.overview)}
            </span>
          </div>
        </Link>)}
      </section>
    </section>

  </Layout >;
}




export default Search;
