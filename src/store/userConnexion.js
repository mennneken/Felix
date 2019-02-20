const fb = require("@/firebaseConfig.js");

import router from "@/router.js";

const userConnexion = {
  namespaced: true,
  state: {
    currentUser: null,
    userProfile: {},
    wantToLogin: false,
    errorMessage: "",
  },

  getters: {
    isConnected: state => (state.currentUser ? true : false),
  },

  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
      commit("setUserProfile", {});
      commit("prototypesStore/setAllPrototypes", [], { root: true });
    },

    fetchUserProfile({ dispatch, commit, state }) {
      fb.usersCollection
        .doc(state.currentUser.uid)
        .get()
        .then(res => {
          commit("setUserProfile", res.data());
          dispatch(
            "prototypesStore/getPrototypes",
            { uid: state.currentUser.uid },
            { root: true }
          );
        })
        .catch(err => {
          console.log(err);
        });
    },

    signIn({ state, dispatch, commit }, { email, password }) {
      state.errorMessage = "";

      fb.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setCurrentUser", user.user);
          dispatch("fetchUserProfile");
          commit("setWantToLogin", false);

          dispacth("dialogStore/closeDialog", { root: true });

          router.push("/dashboard");
        })
        .catch(err => {
          state.errorMsg = err.message;
          state.performingRequest = false;
        });
    },

    signInAnonymously({ commit, dispatch }) {
      fb.auth
        .signInAnonymously()
        .then(user => {
          commit("setCurrentUser", user.user);
        })
        .then(() => {
          dispatch("fetchUserProfile");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(errorMessage);
        });
    },
  },

  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },

    setUserProfile(state, val) {
      state.userProfile = val;
    },

    setWantToLogin(state, val) {
      state.wantToLogin = val;
    },
  },
};

export default userConnexion;
