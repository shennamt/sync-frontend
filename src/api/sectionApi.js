import axiosClient from "./axiosClient";

const sectionApi = {
  create: (projectId) => axiosClient.post(`projects/${projectId}/sections`),
  update: (projectId, sectionId, params) =>
    axiosClient.put(`projects/${projectId}/sections/${sectionId}`, params),
  delete: (projectId, sectionId) =>
    axiosClient.delete(`projects/${projectId}/sections/${sectionId}`)
};

export default sectionApi;
