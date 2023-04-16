import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:5000/api/v1";
const getToken = () => localStorage.getItem("token");
// creates an instance of the Axios HTTP client configured to send to the
// specific base URL
const axiosClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params)
  }
});
// this is triggered before a request is sent
// adds `Authorization` header to the request that includes a JWT token
// obtained from local storage
/* prettier-ignore */
axiosClient.interceptors.request.use(async (config) => {
  return {
    // spread the properties of `config` object and then additional properties
    // like `headers` are added to the object before return by the
    // `interceptors.request` method
    ...config,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    }
  };
});
// triggered when a response is received
// checks response for a `data` property, and if yes, returns only that property
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    // otherwise return the entire response
    return response;
  },
  (err) => {
    if (!err.response) {
      console.log("axiosClient.js: interceptors.response err\n", err);
      return alert(err);
    }
    // console.log("axiosClient.js: err.response\n", err.response);
    throw err.response;
  }
);

export default axiosClient;
