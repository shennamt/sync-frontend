import axiosClient from "./axiosClient";

const authApi = {
  // method to send a `POST` request to the `/auth/signup` endpoint
  // with `params` as the request body
  // `params` argument is an object containing username, password
  // and confirmPassword fields to create a new user account
  signup: (params) => axiosClient.post("auth/signup", params),
  // `params` argument is an object containing the username and password fields
  // to authenticate user and generate a JSON web token (JWT)
  login: (params) => axiosClient.post("auth/login", params),
  // sends a `POST` request to the `auth/-token` endpoint
  // checks if the JWT in the request header is valid and returns the user
  // object if valid
  // does not take arguments, because method is making a request to the server
  // to verify a token stored in local storage
  // token is sent to the server as HTTP request header or payload in the
  // request body and if decoded successfully, there'll be status code 200 OK
  // with user data associated with the token
  verifyToken: () => axiosClient.post("auth/verify-token")
};

export default authApi;
