import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Program from '../views/Program.vue'
import Contact from '../views/Contact.vue'
import Author from '../views/Author.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/program',
    name: 'Program',
    component: Program
  },
  {
    path: '/kontakt',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/autor',
    name: 'Author',
    component: Author
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
