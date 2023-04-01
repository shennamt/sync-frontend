import axiosClient from "./axiosClient";

const taskApi = {
  // sends a POST request to create a new task with the given parameters in a
  // specific board identified by projectId
  create: (projectId, params) =>
    axiosClient.post(`projects/${projectId}/tasks`, params),

  // sends a PUT request to update the position of a task in a specific board
  // identified by projectId, using the parameters in the params object.
  updatePosition: (projectId, params) =>
    axiosClient.put(`projects/${projectId}/tasks/update-position`, params),

  // sends a DELETE request to remove a specific task with the given taskId
  // from a specific board identified by projectId
  delete: (projectId, taskId) =>
    axiosClient.delete(`projects/${projectId}/tasks/${taskId}`),

  // sends a PUT request to update a specific task with the given taskId in a
  // specific board identified by projectId, using the parameters in the params object
  update: (projectId, taskId, params) =>
    axiosClient.put(`projects/${projectId}/tasks/${taskId}`, params)
};

export default taskApi;
