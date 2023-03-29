import axiosClient from "./axiosClient";

const boardApi = {
  create: () => axiosClient.post('projects'),
  getAll: () => axiosClient.get('projects')
}

export default boardApi;