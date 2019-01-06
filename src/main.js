import Vue from 'vue'
import App from './App.vue'
import { sync } from "vuex-router-sync";
import router from './router'
import { store } from './store'
import './registerServiceWorker'
const fb = require("./firebaseConfig.js");
import "./assets/scss/main.scss";

// Vue.config.productionTip = true;

const unsync = sync(store, router);

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})

unsync() // Unsyncs store from router

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});