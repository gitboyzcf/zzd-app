import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// import Information from '../views/Home/Information.vue'
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
    component: ()=>import('../views/Home/components/Information.vue'),
  },
  {
    path: '/countAnalysis',
    name: 'CountAnalysis',
    component: ()=>import('../views/Home/components/CountAnalysis.vue'),
  },
  {
    path: '/enterpriseList',
    name: 'EnterpriseList',
    component: ()=>import('../views/Home/components/enterpriseList.vue'),
  },
  {    path: '/toDoReminder',
    name: 'ToDoReminder',
    component: ()=>import('../views/Home/components/ToDoReminder.vue'),
  },
 
]

const router = new VueRouter({
  routes
})

export default router
