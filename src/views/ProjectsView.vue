<template>
  <div class="container">
    <h1>list of all projects</h1>
    <ul>
      <li
        v-for="project in projects"
        @click="$router.push('/project-form/' + project.id)"
      >{{ project.project }}</li>
    </ul>
    <div>
      <button @click="onAddClick">add new project</button>
    </div>

  </div>

</template>

<script>
import db from '@/utilities/db.js'
export default {
  name: 'ProjectsView',
  // data () {
  //   return {
  //     projects: []
  //   }
  // },
  // created () {
  //   this.fetchProjects()
  // },
  // methods: {
  //   fetchProjects () {
  //     db.get('js6projects').then(projects => {
  //       this.projects = projects
  //     })
  //   }
  // }
  computed: {
    projects () {
      return this.$store.state.projects
    }
  },
  methods: {
    onAddClick () {
      this.$router.push('/project-form')
    }
  }
}

</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>