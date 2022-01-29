import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../components/StartPage'
import SignInPage from '../components/SignInPage'
import AboutMePage from '../components/AboutMePage'
import ArticlePage from '../components/ArticlePage'
import AdminPanelPage from '../components/AdminPanelPage'
import StartAdminPanel from '../components/adminPanel/StartAdminPanel'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: StartPage
  },
  {
    path: '/sign-in',
    component: SignInPage,
    // redirect: { 
    //   name: 'AboutMePage'
    // }
    beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from)
      next()
    }
  },
  {
    path: '/about-me',
    name: 'AboutMePage',
    component: AboutMePage,
    // meta: {
    //   isAdmin: true,
    //   age: 28
    // },
    // query: {

    // },
    props: {
      sideBar: true,
      name: 'Maxon'
    },
  },
  {
    path: '/post/:userId/:id',
    name: 'articlePage',
    component: ArticlePage,
    props: true,
  },
  {
    path: '/admin-panel',
    component: AdminPanelPage,
    children: [
      {
        path: '',
        name: 'StartAdminPanel',
        component: StartAdminPanel,
      },
      {
        path: 'posts',
        name: 'PostsAdminPanel',
        component: () => import('../components/adminPanel/PostsAdminPanel')
      },
      {
        path: 'autor-info',
        name: 'AutorInfoAdminPanel',
        component: () => import('../components/adminPanel/AutorInfoAdminPanel')
      },
      {
        path: 'users',
        name: 'UsersAdminPanel',
        component: () => import('../components/adminPanel/UsersAdminPanel')
      },
      {
        path: 'comments',
        name: 'CommentsAdminPanel',
        component: () => import('../components/adminPanel/CommentsAdminPanel')
      },
    ],
  },
  {
    path: '*',
    component: () => import('../components/NotFoundPage')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log('to: ', to)
//   console.log('from: ', from)
//   next()
//   console.log('HELLO from beforeEach')
// })

// router.afterEach(() => {
//   console.log('afterEach')
// })

// router.beforeResolve((to, from, next) => {
//   console.log('to: ', to)
//   console.log('from: ', from)
//   next()
// })



export default router