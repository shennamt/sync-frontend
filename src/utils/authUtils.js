import authApi from "api/authApi";

// authUtils.isAuthenticated() checks if the user is currently authenticated
// by verifying their authentication token with the server.

const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem("token");

    if (!token) return false;
    try {
      console.log("authUtils ln 12: typeof token\n", typeof token);

      const res = await authApi.verifyToken({
        headers: { Authorization: `Bearer ${token}` }
      });
      // const res = await authApi.verifyToken(token);
      console.log("authUtils: res -", res);
      return res.email;
    } catch (e) {
      console.log("authUtils: e -", e);
      // console.error(e);
      return false;
    }
  }
};

export default authUtils;
