<template>
  <div id="app" class="app">
    <!-- <div>{{ activePost }}</div> -->
    <button style="cursor: pointer;" @click="getAllUsers()">Show all users</button>
    <div v-for="user in users" :key="user.id">
      {{ user.id }}: {{ user.login }}
    </div>
    <div>
      <p>{{ activeUser.id }}: {{ activeUser.login }}</p>
      <p>{{ activeUser.bio }}</p>
      <p>{{ activeUser.location }}</p>
      </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {

  name: "App",
  components: {
  },
  data: () => ({
  }),
  computed: {
    ...mapState( ['admin', 'users', 'activeUser'] ),
    ...mapGetters(['activePost']),
    // activePost() {
    //   return this.$store.getters.activePost
    // },
  },
  methods: {
    ...mapMutations(['setActivePostId']),
    ...mapActions(['getMaxim']),
    setNewActivePostId() {
      this.setActivePostId({
        id: 1,
      })
      // this.$store.commit({
      //   type: 'setActivePostId',
      //   id: 1
      // })
    },
    getAllUsers() {
      // this.getUsers()
      this.$store.dispatch('getUsers')
    },
  },
  created() {
    console.log(this.admin)
    this.setNewActivePostId()
    this.getMaxim()
    // this.getAllUsers()
  },
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
