<template>
  <div
    v-if="user"
    class="user-name"
  >
    <p class="user-name__item">{{ user.name }}</p>
    <p class="user-name__item">{{ user.surname }}</p>
    <p class="user-name__item">{{ user.email }}</p>
  </div>
</template>
 
<script>

export default {
  name: "UserCard",
  components: {
  },
  // props: ['user', 'isAdmin'],
  props: {
      user: {
          type: Object,
          default: function() {
              return { name: 'Tania' }
          }
      },
      isAdmin: {
          type: Boolean,
          default: false,
          required: true,
      },
      startValue: {
          type: Number,
          default: 4,
          validator: (value) => value > 15,
      },
  },
  data: () => {
      return {
      }
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
