import axiosClient from "./axiosClient"

const projectApi = {
  create: () => axiosClient.post('projects'),
  getAll: () => axiosClient.get('projects')
}

export default projectApi