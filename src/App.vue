<template>
  <div id="app" class="app">
    <header>
      Header App component

      <button 
        @click="$router.push({
          name: 'articlePage',
          params: {
            userId: 12,
            id: 4
          },
          query: {
            plan: 'private'
          }
        })"
        style="margin-left: auto; cursor: pointer; display: block;"
      >
        POST
      </button>

    </header>

  <router-view />
  </div>
</template>

<script>

export default {

  name: "App",
  components: {
  },
  data: () => ({
  }),
  created() {
    console.log('AppVue-router:  ', this.$router)
    console.log('AppVue-route:  ',this.$route)
  },
  methods: {
    // toAboutMe() {
    //   console.log(2 + 5)
    //   this.$router.push({
    //     name: 'AboutMePage'
    //   })
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 20px;
}
.app {
  text-align: center;
}
.ml-2 {
  margin-left: 5px;
}
</style>
