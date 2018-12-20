// VUE
import Vue from "vue";
import Vuex from "vuex";

// MODULES
import userConnexion from "./store/userConnexion";
import prototypesStore from "./store/prototypesStore";

// FIREBASE
const fb = require("@/firebaseConfig.js");

Vue.use(Vuex);

// Handling reload for login user.
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('userConnexion/setCurrentUser', user);
    store.dispatch('userConnexion/fetchUserProfile');
  }
});

export const store = new Vuex.Store({
  modules: {
    userConnexion,
    prototypesStore
  }
});
