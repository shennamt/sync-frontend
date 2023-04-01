import axiosClient from "./axiosClient";

const columnsApi = {
  create: (projectId) => axiosClient.post(`projects/${projectId}/column`),
  update: (projectId, columnId, params) =>
    axiosClient.put(`projects/${projectId}/columns/${columnId}`, params),
  delete: (projectId, columnId) =>
    axiosClient.delete(`projects/${projectId}/columns/${columnId}`)
};

export default columnsApi;
