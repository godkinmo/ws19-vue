import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
