// VUE
import Vue from "vue";
import Vuex from "vuex";

// PLUGIN
import VuexPersist from "vuex-persist";

// MODULES
import userConnexion from "./store/userConnexion";
import prototypesStore from "./store/prototypesStore";
import dialogStore from "./store/dialogStore";
import toolsStore from "./store/toolsStore";

// FIREBASE
const fb = require("@/firebaseConfig.js");

Vue.use(Vuex);

// Handling reload for login user.
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit("userConnexion/setCurrentUser", user);
    store.dispatch("userConnexion/fetchUserProfile");
  }
});

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
  reducer: state => ({
    prototypesStore: state.prototypesStore
  })
});

export const store = new Vuex.Store({
  modules: {
    userConnexion,
    prototypesStore,
    dialogStore,
    toolsStore
  },
  plugins: [vuexLocalStorage.plugin]
});
