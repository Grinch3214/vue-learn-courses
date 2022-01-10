<template>
  <div>{{ message }}</div>
</template>
 
<script>
export default {
  name: "ChildComponent",
  data: () => ({
    message: "Child Component Here",
  }),
  created() {
    console.log("Child Component Here");
  },
};
</script>

<style>
</style>