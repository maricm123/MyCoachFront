import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/coach/Dashboard.vue'
import Programs from '../views/Programs.vue'
import Program from '../views/coach/Program.vue'
import Welcome from '../views/Welcome.vue'
import AddProgram from '../views/coach/AddProgram.vue'
import MyAccount from '../views/coach/MyAccount.vue'

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/coach/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
        requireLogin: false
      }
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs,
    meta: {
      requireLogin: false
    }
},
  {
    path: '/coach/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// if some of these routes above have argument require login true
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
