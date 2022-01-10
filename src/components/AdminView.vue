<template>
  <div class="admin-view">{{ message }}</div>
</template>
 
<script>
export default {
  name: "AdminView",
  data: () => ({
    message: "Admin View Here",
  }),
  created() {
    console.log("Admin View Here");
  },
};
</script>

<style>
</style>