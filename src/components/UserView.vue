<template>
  <div class="user-view">{{ message }}</div>
</template>
 
<script>
export default {
  name: "UserView",
  data: () => ({
    message: "User View Here",
  }),
  created() {
    console.log("User View Here");
  },
};
</script>

<style>
</style>