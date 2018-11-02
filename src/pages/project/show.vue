<template>
  <form>
    <h1>{{ title }}</h1>
    <mdc-textfield
      v-model="description"
      label="Description"
      multiline
      rows="8"
      readonly
      fullwidth />
    <mdc-button>Approve</mdc-button>
    <mdc-button>Reject</mdc-button>
  </form>
</template>

<script>

import ProjectConsumer from '../../mixins/project-consumer'

export default {

  props: {
    id: String // Project ID
  },
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {

  },
  mixins: [ProjectConsumer],

  mounted () {
    this.getProject(this.id).then((project) => {
      this.title = project['title']
      this.description = project['description']
    })
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
  }
</style>
