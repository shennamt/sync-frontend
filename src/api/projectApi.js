import axiosClient from "./axiosClient";

const projectApi = {
  create: () => axiosClient.post("projects"),
  getAll: () => axiosClient.get("projects"),
  updatePositoin: (params) => axiosClient.put("projects", params),
  getOne: (id) => axiosClient.get(`projects/${id}`),
  delete: (id) => axiosClient.delete(`projects/${id}`),
  update: (id, params) => axiosClient.put(`projects/${id}`, params),
  getFavourites: () => axiosClient.get("projects/favourites"),
  updateFavouritePosition: (params) =>
    axiosClient.put("projects/favourites", params)
};

export default projectApi;
