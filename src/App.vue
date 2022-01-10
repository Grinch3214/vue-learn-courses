<template>
  <div id="app" class="app">
    <child-component />
    <!-- <admin-view /> -->
    <keep-alive>
      <component :is="componentName" />
    </keep-alive>

    <button @click="admin = true">Admin</button>
    <button @click="admin = false">User</button>
    <br />
    <pop-up v-if="show" @closePopUp="closePopUp" />
    <p v-once>Vue once: {{ message.length }}</p>
    <p>Vue: {{ message.length }}</p>
    <button @click="show = true">Show</button>

    <div v-html="string"></div>
  </div>
</template>
 
<script>
import AdminView from "./components/AdminView.vue";
// import UserView from "./components/UserView.vue";

export default {
  name: "App",
  components: {
    AdminView,
    UserView: () => import("./components/UserView.vue"),
    PopUp: () => import("./components/PopUp.vue"),
  },
  data: () => ({
    admin: true,
    show: false,
    message: "Vue once lorem insput...",
    string: "<button style='color: red;'>String btn</button>",
  }),
  computed: {
    componentName() {
      if (this.admin) {
        return "AdminView";
      }
      return "UserView";
    },
  },
  methods: {
    closePopUp(event) {
      this.show = false;
      console.log(event);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 15px;
  font-size: 20px;
}
.ml-2 {
  margin-left: 5px;
}
</style>
