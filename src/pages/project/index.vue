<template>
<div>
  <vue-multiselect @input="updateProjects"
                   :options="stationOptions"
                   label="name"
                   v-model="stationValue"></vue-multiselect>

  <project-table :data="data" :columns="columns" id-route="project"></project-table>

</div>
</template>

<script>
import StationConsumer from '../../mixins/station-consumer'
import ProjectConsumer from '../../mixins/project-consumer'

import VueMultiselect from 'vue-multiselect/src/Multiselect'
import ProjectTable from '../../components/project-table'
export default {
  name: 'projects',
  components: {ProjectTable, VueMultiselect},
  data () {
    return {
      stationValue: [],
      stationOptions: [],
      data: [],
      columns: ['Project ID', 'Title']
    }
  },
  mixins: [StationConsumer, ProjectConsumer],

  methods: {

    // Updates the project for the selected station
    updateProjects () {
      if (this.stationValue !== null) {
        const stationId = this.stationValue['id']
        this.getProjects(stationId).then((projects) => {
          this.data = projects
          this.columns = Object.keys(projects[0]).filter(column => column !== 'stations' && column !== 'description')
        })
      }
    }
  },

  mounted () {
    this.getStations().then((stations) => {
      this.stationOptions = stations
    })
  }
}
</script>
