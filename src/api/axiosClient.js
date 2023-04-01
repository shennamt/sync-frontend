import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:6001/";
const getToken = () => localStorage.getItem("token"); // for authenticating HTTP requests

const axiosClient = axios.create({
  // creates a new Axios instance with default settings
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params) // serialize query parameters
  }
});

// request interceptor modifies the HTTP headers of outgoing HTTP requests
// includes an authorization header with a bearer token.
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`
    }
  };
});

// if the response contains data, it extracts the data property from the response.
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;
