import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Prototypes from './views/Prototypes.vue'
import Tool from './views/Tool.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/prototypes",
      name: "prototypes",
      component: Prototypes
    },
    {
      path: "/prototypes/:prototypeName",
      name: "tool",
      component: Tool
    }
  ]
});
