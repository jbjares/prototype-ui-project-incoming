import axios from 'axios'

export default {

  methods: {
    // Return all projects that target one station
    getProjects (station) {
      const projects = 'projects'
      return axios.get('http://localhost:9000/project?station=' + station).then((response) => {
        const def = []
        if (response.status !== 200) {
          return def
        }
        const data = response.data
        if (projects in data) {
          return data[projects]
        }
        return def
      })
    },
    // Return project with the specified ID
    getProject (projectId) {
      return axios.get('http://localhost:9000/project/' + projectId).then((response) => {
        console.log(response.data)
        return response.data
      })
    }
  }
}
