import Vue from 'vue'
import VueRouter from 'vue-router'
import deviceDetailA from '../views/deviceDetailA.vue'
import deviceDetailB from '../views/deviceDetailB.vue'
import deviceDetailC from '../views/deviceDetailC.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/deviceDetailA',
    name: 'deviceDetailA',
    component: deviceDetailA
  },
  {
    path: '/deviceDetailB',
    name: 'deviceDetailB',
    component: deviceDetailB
  },
  {
    path: '/deviceDetailC',
    name: 'deviceDetailC',
    component: deviceDetailC
  }
]

const router = new VueRouter({
  routes
})

export default router
