<template>
  <main>
    <button @click="onClick">projects</button>
  </main>
</template>

<script>
  export default {
    name: 'HomeView',
    computed: {
      testStore () {
        return this.$store.state.testStore
      }
    },
    methods: {
      onClick () {
        this.$router.push('/projects')
      }
    }
  }
</script>
