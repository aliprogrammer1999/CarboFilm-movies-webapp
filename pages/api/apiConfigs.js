const apiConfigs = {
  baseURL: "https://api.themoviedb.org/3/",
  apiKey: process.env.API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/orginal/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/orginal/${imgPath}`,
};

export default apiConfigs;
