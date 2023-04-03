import authApi from '../api/authApi'

// methods for HTTP req to server auth endpoints with verifyToken method
const authUtils = {
  isAuthenticated: async () => { // checks whether user is auth by verifying token stored in broswer's local storage
    const token = localStorage.getItem('token') // retrieve token
    if (!token) return false // no token, return false
    try {
      const res = await authApi.verifyToken() // if token found, verify token
      return res.user
    } catch(error) {
      console.log(error)
      return false
    }
  }
}

export default authUtils