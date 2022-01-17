<template>
  <div id="app" class="app">
    <h1>APP</h1>
    <button @click="show = true">Click me bro</button>
    <PopUp v-if="show" @closePopUp="closePopUp" />

  </div>
</template>

<script>
import PopUp from './components/PopUp.vue'

export default {

  name: "App",
  components: {
    PopUp
  },
  data: () => ({
    message: 'Hello',
    show: false,
    user: {
      name: 'Alex',
      job: 'Frontend developer'
    },
    users: [
      {
        id: 1,
        name: 'Leanne',
        surname: 'Graham',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin',
        surname: 'Howell',
        email: 'Shanna@melissa.tv'
      },
      {
        id: 3,
        name: 'Clementine',
        surname: 'Bauch',
        email: 'Nathan@yesenia.net'
      }
    ],
  }),
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
