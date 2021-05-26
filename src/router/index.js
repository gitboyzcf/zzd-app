import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Information from '../views/Home/Information.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
 
]

const router = new VueRouter({
  routes
})

export default router
