import authApi from "api/authApi";

// authUtils.isAuthenticated() checks if the user is currently authenticated
// by verifying their authentication token with the server.

const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem("token");

    if (!token) return false;
    try {
      // console.log("authUtils: token\n", token);

      const res = await authApi.verifyToken({ token });
      return res.user;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
};

export default authUtils;
