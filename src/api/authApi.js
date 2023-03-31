import axiosClient from "./axiosClient"
// HTTP requests to specific API endpoints

const authApi = {
  signup: params => axiosClient.post('auth/signup', params), // accept params obj as an argument
  login: params => axiosClient.post('auth/login', params), // which is passed as a JSON payload
  verifyToken: () => axiosClient.post('auth/verify-token') 
}

export default authApi