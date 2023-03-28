import authApi from "api/authApi";

//authUtils.isAuthenticated() checks if the user is currently authenticated
// by verifying their authentication token with the server.

const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem('token')
    if (!token) return false
    try {
      const res = await authApi.verifyToken()
      return res.user
    } catch {
      return false
    }
  }
}

export default authUtils;