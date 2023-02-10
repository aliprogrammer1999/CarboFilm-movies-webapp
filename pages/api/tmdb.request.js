const key = process.env.API_KEY;

const tmdbRequest = {
  upComing: `https://api.themoviedb.org/3/${
    "tv" && "movie"
  }/upcoming?api_key=${key}&language=en-US&page=1`,
  topRate: `https://api.themoviedb.org/3/${
    "tv" && "movie"
  }/top_rated?api_key=${key}&language=en-US&page=1`,
  pupoler: `https://api.themoviedb.org/3/${
    "tv" && "movie"
  }/popular?api_key=${key}&language=en-US&page=1`,
  NewPlay: `https://api.themoviedb.org/3/${
    "tv" && "movie"
  }/now_playing?api_key=${key}&language=en-US&page=1`,
  Lastes: `https://api.themoviedb.org/3/${
    "tv" && "movie"
  }/latest?api_key=${key}&language=en-US`,
  Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};
// Movie api
const tmdbRequestMovie = {
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  topRate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  pupoler: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  NewPlay: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  Lastes: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

// Tv api
const tmdbRequestTv = {
  topRate: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  pupoler: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  on_the_air: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
  airing_today: `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`,
  Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

// eslint-disable-next-line import/no-anonymous-default-export
export { tmdbRequest, tmdbRequestMovie, tmdbRequestTv };
