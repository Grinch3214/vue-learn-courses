import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:() => ({
        admin: {
            name: 'Max',
            password: 12345,
            login: 'max-dev-super'
        },
        posts: [
            {
                id: 1,
                title: "Good",
                body: "Lorem",
              },
              {
                id: 2,
                title: "Not Good",
                body: "Lorem insput bla-bla",
              },
        ],
        activePostId: null,
        users: [],
        activeUser: {},
    }),
    getters: {
        activePost(state) {
            return state.posts.find(post => post.id === state.activePostId)
        }
    },
    mutations: {
        setActivePostId(state, payload) {
            state.activePostId = payload.id
        },
        setUsers(state, payload) {
            state.users = payload
        },
        setUser(state, payload) {
            state.activeUser = payload
        }
    },
    actions: {
        async getUsers({ commit }) {
            let response = await(await fetch('https://api.github.com/users')).json()
            commit('setUsers', response)
        },
        async getMaxim({ commit }) {
            let response = await(await fetch('https://api.github.com/users/Grinch3214')).json()
            commit('setUser', response)
        }
        
    },
})