import axiosClient from "./axiosClient";
// const mongoose = require("mongoose");

const boardApi = {
  create: () => axiosClient.post("boards"),
  getAll: () => axiosClient.get("boards"),
  updatePosition: (params) => axiosClient.put("boards", params),
  delete: (id) => axiosClient.delete(`boards/${id}`),
  getOne: (id) => {
    // Based on the result of your MongoDB query,
    // it looks like the id field for each board is an ObjectId.
    // In this case, when you make a request to get a specific board by id,
    // you'll need to convert the provided id value to an ObjectId before passing it to the MongoDB query.
    // const boardId = mongoose.Types.ObjectId(id);
    return axiosClient.get(`boards/${id}`);
  },
  update: (id, params) => axiosClient.put(`boards/${id}`, params),
  getFavourites: () => axiosClient.get("boards/favourites"),
  updateFavouritePosition: (params) =>
    axiosClient.put("boards/favourites", params)
};

export default boardApi;
