import Vue from "vue";
import Vuex from "vuex";
import protoParams from './store/protoParams';
import userConnexion from "./store/userConnexion";
const fb = require("@/firebaseConfig.js");

Vue.use(Vuex);

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
  }
})

export const store = new Vuex.Store({
  modules: { 
    userConnexion, 
    protoParams
  }
});
