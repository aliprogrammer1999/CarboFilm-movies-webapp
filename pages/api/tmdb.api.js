import axiosClient from "./axiosClient";

export const Category = {
  movie: "movise",
  tv: "tv",
};

export const MovieType = {
  upcoming: "upcoming",
  populer: "popular",
  top_rate: "top_rated",
};

export const TvType = {
  populer: "popular",
  top_rate: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbAip = {
  getMoviesList: (type, parmas) => {
    const url = `movie/${MovieType[type]}`;
    return axiosClient.get(url, parmas);
  },
  getTvList: (type, parmas) => {
    const url = `tv/${TvType[type]}`;
    return axiosClient.get(url, parmas);
  },
  getVideos: (item, id) => {
    const url = `${Category[item]}/${id}/videos`;
    return axiosClient.get(url, { parmas: {} });
  },
  getSearch: (finded, parmas) => {
    const url = `search/${Category[finded]}`;
    return axiosClient.get(url, parmas);
  },
  getDetail: (item, id, parmas) => {
    const url = `${Category[item]}/${id}/credits`;
    return axiosClient.get(url, parmas);
  },
  getSimilar: (item, id) => {
    const url = `${Category[item]}/${id}/similar`;
    return axiosClient.get(url, parmas);
  },
};

export default tmdbAip;
