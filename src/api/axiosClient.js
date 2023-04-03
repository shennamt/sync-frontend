import axios from 'axios'
import queryString from 'query-string'

const baseURL = 'http://127.0.0.1:6001'
const getToken = () => localStorage.getItem('token')

// allow parameters to be sent as URL query string
// by default, axios serializes parameters using JSON.stringify method with results in a key-value pair format.
// i.e. {"name":"John","age":30} is not a valid URL query string but name=John&age=30 is. 
const axiosClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params) // serealise URL parameters
  }
})

// interceptor adds bearer token to req headers obtained form getToken()
// by adding the token to header, server can verify user making req is ath to access req source.
axiosClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    }
  }
})

// adds interceptor that returns res.data if it exists or res object otherwise
axiosClient.interceptors.request.use(response => {
  if (response && response.data) return response.data // 1st argument recieves res{} and checks if {} and data exists
  return response
}, err => {
  if (!err.response) { //checks if err{} has response property.
    return alert(err)
  }
  throw err.response
})

export default axiosClient