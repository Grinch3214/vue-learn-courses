<template>
  <div>
      <h1>Child component</h1>
      <!-- <p>{{ filter[0].name }}</p> -->
      <!-- <p>{{ myFirstProp }}</p>
      <p>{{ mySecondProp }}</p>
      <p v-if="userInfo">{{ userInfo.name }}</p> -->
  </div>
</template>
 
<script>

export default {
  name: "ChildComponent",
  components: {
  },
  // props: ['myFirstProp', 'mySecondProp', 'userInfo'],
  props: {
    users: {
      type: [Array, Object, String],
      default: () => [1, 2, 3],
    },
  },
  data: () => ({
  }),
  computed: {
    filter() {
      return this.users.filter(user => user.id === 1)
    }
  },
};
</script>

<style scoped>
h1{
  margin-top: 10px;
}
</style>
