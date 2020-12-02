import Vue from 'vue'
import VueRouter from 'vue-router'
import deviceDetail from '../views/deviceDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'deviceDetail',
    component: deviceDetail
  }
 
]

const router = new VueRouter({
  routes
})

export default router
