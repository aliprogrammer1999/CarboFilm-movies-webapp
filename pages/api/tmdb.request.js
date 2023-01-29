const key = process.env.API_KEY;

const tmdbRequest = {
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  topRate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  pupoler: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  NewPlay: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  Lastes: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

export default tmdbRequest;
