<template>
  <div id="app" class="app">
    <h1>APP</h1>

    <UserCard
      v-for="item in users"
      :key="item.id"
      :user="item"
      isAdmin
      :startValue="10"
    />

    <ChildComponent
      :users="users"
    />

  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
import UserCard from './components/UserCard.vue'


export default {

  name: "App",
  components: {
    // 'UserCard': () => import('./components/UserCard.vue'),
    UserCard,
    ChildComponent,
  },
  data: () => ({
    message: 'Hello',
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
