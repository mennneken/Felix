import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

// import { store } from './store'

// VIEWS
import Settings from "@/views/settings";
import Tool from "@/views/Tool";
import Dashboard from "@/views/dashboard";
import About from "@/views/About";
import Credits from "@/views/Credits";
// import { isEmpty } from '@firebase/util';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: "/Felix/",
  routes: [
    {
      path: "/",
      redirect: { name: "About" },
    },
    {
      path: "*",
      redirect: { name: "About" },
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/credits",
      name: "Credits",
      component: Credits,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/tool/:uid",
      name: "Tool",
      component: Tool,
      meta: { requiresAuth: true },
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next({ path: "/dashboard" });
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
