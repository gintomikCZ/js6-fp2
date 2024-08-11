<template>
  <aside>
    <ul>
      <li v-for="project in projects">{{ project.project }}</li>
    </ul>
  </aside>
</template>

<script>
import db from '@/utilities/db.js'
export default {
  name: 'TAside',
  // data() {
  //   return {
  //     projects: []
  //   }
  // },
  // created() {
  //   this.fetchProjects()
  // },
  // methods: {
  //   fetchProjects() {
  //     db.get('js6projects').then(projects => {
  //       this.projects = projects
  //     })
  //   }
  // }
  computed: {
    projects () {
      return this.$store.state.projects
    }
  }
}


</script>