import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

async function guardMyroute(to, from, next) {
  const isAuth = await JSON.parse(localStorage.getItem('isAuth'))
  console.log(isAuth)
  isAuth
    ? next()
    : next({
        path: from.path
      })
}

const routes = [
  {
    path: '/table',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    beforeEnter: guardMyroute
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('@/views/Edit.vue'),
    beforeEnter: guardMyroute
  },
  {
    path: '/add',
    name: 'Added',
    component: () => import('@/views/Added.vue'),
    beforeEnter: guardMyroute
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
