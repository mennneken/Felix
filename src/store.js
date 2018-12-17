// VUE
import Vue from "vue";
import Vuex from "vuex";

// MODULES
import protoParams from "./store/protoParams";
import userConnexion from "./store/userConnexion";
import examplesStore from "./store/examplePrototype";

// VUEXFIRE
import { firebaseMutations } from "vuexfire";

// FIREBASE
const fb = require("@/firebaseConfig.js");

Vue.use(Vuex);

// Handling reload for login user.
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit("setCurrentUser", user);
    store.dispatch("fetchUserProfile");
  }
});

export const store = new Vuex.Store({
  modules: {
    userConnexion,
    protoParams,
    examplesStore
  }
});
