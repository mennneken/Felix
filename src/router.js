import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import { store } from './store'

// VIEWS
import Settings from '@/views/Settings'
import Tool from '@/views/Tool'
import Dashboard from '@/views/Dashboard'
import About from '@/views/About'
import { isEmpty } from '@firebase/util';

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/about"
    },
    {
      path: "*",
      redirect: { name: "Dashboard" }
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
      // props: true
    },
    {
      path: "/tool/:uid",
      name: "Tool",
      component: Tool,
      meta: { requiresAuth: true }
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser
  
  if (requiresAuth && !currentUser) {
    next({ path: "/dashboard" });
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router