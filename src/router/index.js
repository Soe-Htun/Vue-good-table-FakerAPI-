import Vue from 'vue'
import VueRouter from 'vue-router'
// import EditTable from '../views/EditTable.vue'
import good from '../views/good.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'good',
    component: good
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
