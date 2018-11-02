import axios from 'axios'

export default {

  methods: {
    getStations () {
      const stations = 'stations'
      return axios.get('http://localhost:9000/station').then((response) => {
        const def = []
        if (response.status !== 200) {
          return def
        }
        const data = response.data
        if (stations in data) {
          return data[stations]
        }
        return def
      })
    }
  }
}
