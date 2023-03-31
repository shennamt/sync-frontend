import axiosClient from "./axiosClient";

const taskApi = {
  // sends a POST request to create a new task with the given parameters in a
  // specific board identified by boardId
  create: (boardId, params) =>
    axiosClient.post(`boards/${boardId}/tasks`, params),

  // sends a PUT request to update the position of a task in a specific board
  // identified by boardId, using the parameters in the params object.
  updatePosition: (boardId, params) =>
    axiosClient.put(`boards/${boardId}/tasks/update-position`, params),

  // sends a DELETE request to remove a specific task with the given taskId
  // from a specific board identified by boardId
  delete: (boardId, taskId) =>
    axiosClient.delete(`boards/${boardId}/tasks/${taskId}`),

  // sends a PUT request to update a specific task with the given taskId in a
  // specific board identified by boardId, using the parameters in the params object
  update: (boardId, taskId, params) =>
    axiosClient.put(`boards/${boardId}/tasks/${taskId}`, params)
};

export default taskApi;
