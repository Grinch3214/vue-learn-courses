<template>
  <div class="user-name">
    <input v-model="editableUser.name" type="text" />

    <input v-model="editableUser.surname" type="text" />

    <input v-model="editableUser.email" type="text" />

    <button @click="$emit('update:user', editableUser)">Click</button>
  </div>
</template>
 
<script>
export default {
  name: "UserCard",
  components: {},
  // props: ['user', 'isAdmin'],
  props: {
    user: {
      type: Object,
      default: function () {
        return {};
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data: () => ({
    editableUser: {
      name: "",
      surname: "",
      email: "",
    },
  }),
  created() {
    this.editableUser = Object.assign({}, this.user);
  },
};
</script>

<style scoped>
div .user-name {
  padding: 10px 0 0 0;
  margin: 0 15px;
}
p .user-name__item {
  color: #004;
}
button {
  cursor: pointer;
  color: #fff;
  box-shadow: 0px 0px 1px 0px #000;
  background: #552822;
}
</style>
