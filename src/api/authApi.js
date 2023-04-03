import axiosClient from './axiosClient'

// methods for HTTP req to server using axiosClient
const authApi = {
  signup: params => axiosClient.post('auth/signup', params),
  login: params => axiosClient.post('auth/login', params),
  verifyToken: () => axiosClient.post('auth/verify-token') // no need params cos its used to verify auth of existing token
}

export default authApi