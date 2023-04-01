import axiosClient from "./axiosClient";
// HTTP requests to specific API endpoints

const authApi = {
  signup: (params) => axiosClient.post("api/user/signup", params), // accept params obj as an argument
  login: (params) => axiosClient.post("api/user/login", params), // which is passed as a JSON payload
  verifyToken: (params) => axiosClient.post("api/user/verify-token", params)
};

export default authApi;
