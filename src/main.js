import Vue from "vue";
import App from "./App.vue";
import { sync } from "vuex-router-sync";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
const fb = require("./firebaseConfig.js");
require("firebase/auth");
require("firebase/firestore");
import "./assets/scss/main.scss";

import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    mobile: 896,
    desktop: Infinity,
  },
  defaultBreakpoint: "mobile",
});

// Vue.config.productionTip = true;

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

const unsync = sync(store, router);

let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      store,
      render: h => h(App),
    });
  }
});

unsync(); // Unsyncs store from router
