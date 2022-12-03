import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import CoachSignup from '../views/coach/CoachSignup.vue'
import CoachLogin from '../views/coach/CoachLogin.vue'
import Dashboard from '../views/coach/Dashboard.vue'
import Programs from '../views/Programs.vue'
import Program from '../views/coach/Program.vue'
import Welcome from '../views/Welcome.vue'
import AddProgram from '../views/coach/AddProgram.vue'
import MyAccount from '../views/coach/MyAccount.vue'
import ClientLogin from '../views/client/ClientLogin.vue'
import ClientSignup from '../views/client/ClientSignup.vue'


const routes = [
// General routes
{
  path: '/',
  name: 'Welcome',
  component: Welcome,
},
{
  path: '/programs',
  name: 'Programs',
  component: Programs,
  meta: {
    requireLogin: false
  }
},
// COACH ROUTES
  {
    path: '/coachsignup',
    name: 'SignUp',
    component: CoachSignup
  },
  {
    path: '/coachlogin',
    name: 'CoachLogin',
    component: CoachLogin
  },
  {
    path: '/coach/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true,
      requireCoachRole: true
    }
  },

  {
    path: '/coach/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true,
      requireCoachRole: true
    }
  },
  {
    path: '/coach/programs/add',
    name: 'AddProgram',
    component: AddProgram,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/coach/programs/:id',
    name: 'Program',
    component: Program,
    meta: {
      requireLogin: true
    }
  },
// CLIENT routes
{
  path: '/clientlogin',
  name: 'ClientLogin',
  component: ClientLogin
},
{
  path: '/clientsignup',
  name: 'ClientSignup',
  component: ClientSignup
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// if some of these routes above have argument require login true
// if is authenticated (if it is client or coach)
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})


// for COACH routes
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireCoachRole) && !store.getters.coachAuth) {
    next('/coachlogin')
  } else {
    next()
  }
})

// for CLIENT routes
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireClientRole) && !store.getters.clientAuth) {
    next('/clientlogin')
  } else {
    next()
  }
})


export default router
