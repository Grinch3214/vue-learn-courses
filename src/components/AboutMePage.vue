<template>
  <div class="about-me-page">
      <h1>About Me Page</h1>
  </div>
</template>

<script>

export default {
  name: 'AboutMePage',
  props: ['sideBar', 'name'],
  // beforeRouteLeave (to, from, next) {
  //     console.log(this)
  //     console.log('beforeRouteLeave: ', to)
  //     next()
  //   },
  created() {
    console.log(this.$route)
  }
}

</script>
