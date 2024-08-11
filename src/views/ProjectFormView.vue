<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="project">project name</label>
      <input id="project" v-model="project">
    </div>
    <div>
      <label for="description">description</label>
      <input id="description" v-model="description">
    </div>
    <div>
      <button>submit</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'ProjectFormView',
  data () {
    return {
      project: '',
      description: '',
      id: null
    }
  },
  created () {
    // rozpoznat - editujeme nebo přidáváme nový ???
    // console.log(this.$store.state.projects)
    // if (this.$route.params.id) {
    //   this.id = this.$route.params.id
    //   const record = this.$store.state.projects.find((project) => '' + project.id === '' + this.id)
    //   this.project = record.project
    //   this.description = record.description
    // }
    // pokud editujeme - sehnat záznam projektu, který editujeme
                // někam uložit jeho id
    // pokud needitujeme, kašlu na vše a jdu vocáď
    if (this.$route.params.id) {
      this.$store.dispatch('fetchProjectToEdit', this.$route.params.id)
        .then(() => {
          this.project = this.$store.state.projectToEdit.project
          this.description = this.$store.state.projectToEdit.description
          this.id = this.$route.params.id
          console.log(this.$store.state.projectToEdit)
          console.log(this.project, this.description)
        })
    }

  },
  methods: {
    onSubmit() {
      const body = {
        project: this.project,
        description: this.description
      }
      if(this.id) {
        body.id = this.id
      }
      const action = this.id ? 'editProject' : 'addProject'
      this.$store.dispatch(action, body)
        .then(() => {
          this.$router.push('/projects')
        })
    }
  }
}

</script>