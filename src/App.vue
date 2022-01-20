<template>
  <div id="app" class="app">
    <h1>APP</h1>
    <button @click="show = true">Click me bro</button>
    <PopUp v-if="show" @closePopUp="closePopUp" >
      <!-- <p>{{user.name}}</p> -->
      <template v-slot:header>
        <p>Header</p>
      </template>
      <template>
        <p>Body</p>
      </template>
      <template v-slot:footer>
        Footer
      </template>
    </PopUp>
    <!-- <p v-html="htmlServer" /> -->

    <!-- <input :value="commentText" @input="onInput($event)" type="text">
    <button @click="commentText = ''">Clear</button> -->



  </div>
</template>

<script>
import PopUp from './components/PopUp.vue'
import myMixin from './mixins/index'

export default {

  name: "App",
  mixins: [myMixin],
  components: {
    PopUp,
  },
  data: () => ({
    message: 'Hello',
    show: false,
    user: {
      name: 'Alex',
      job: 'Frontend developer'
    },
    posts: [
      {
        id: 1,
        title: 'Hello',
        body: 'Lorem inpus'
      }
    ],
    commentText: '',
    // htmlServer: ''
  }),
  // watch: {
  //   commentText(newVal, oldVal) {
  //     console.log('watch: ', newVal, oldVal)
  //   },
  //   user: {
  //     deep: true,
  //     immediate: true,
  //     handler() {
  //       console.log(this.user.name)
  //     }
  //   },
  // },
  methods: {
    onInput(event) {
      this.commentText = event.target.value
      console.log(this.commentText)
    },

    closePopUp(event) {
      this.show = false;
      console.log(event);
    },
    addNewProperty() {
      // this.$set(this.user, 'age', 18)
      // this.user = Object.assign({}, this.user, {
      //   age: 18,
      //   hobby: 'dev'
      // })

      // this.$set(this.posts, 1, {id: 2, title: 'Nothello', body: 'text this'})

      // this.posts.splice(1, 0, {id: 2, title: 'Nothello', body: 'text this'})
    }
  },
  created() {
    console.log('App.vue')
  },
  async mounted() {
    // this.addNewProperty()

    // this.htmlServer = '<span style="color:red;">Текст с сервера</span>'
    // await this.$nextTick()
    // console.log(document.getElementById('app').offsetHeight)

  }
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
