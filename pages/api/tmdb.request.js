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

export default tmdbRequest;
