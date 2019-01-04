import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from "vuex-router-sync";
import { store } from './store'
import './registerServiceWorker'
const fb = require("./firebaseConfig.js");
import "./assets/scss/main.scss";

Vue.config.productionTip = false

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
