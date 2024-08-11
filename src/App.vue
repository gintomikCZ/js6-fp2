<template>
  <div class="container">
    <TAside />
    <RouterView />
  </div>

</template>

<script>
import TAside from '@/components/TAside.vue'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('fetchProjects')
      .then(() => {
        console.log('projects fetched')
      })
  },
  components: { TAside }
}

</script>

<style scoped>
div {
  display: flex;
}

div > aside {
  flex-basis: 150px;
  border-right: 1px solid #cdcdcd;
}
div > *:nth-child(2) {
  flex-grow:1;
}

</style>