<template>
  <div>
      <h1>Child component</h1>
      <input 
        v-model="name"
        type="text"
        :placeholder="placeholder"
        @change="$emit('update:userName', name)"
      />
  </div>
</template>
 
<script>

export default {
  name: "ChildComponent",
  components: {
  },
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    placeholder: 'Edit your name',
    name: ''
  }),
  computed: {
  },
  created() {
    this.name = this.userName
  }
};
</script>

<style scoped>
h1{
  margin-top: 10px;
}
</style>
