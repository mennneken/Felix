const fb = require("@/firebaseConfig.js");

const userConnexion = {
  namespaced: true,
  state: {
    currentUser: null,
    userProfile: {},
    wantToLogin: false
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
    }
  },

  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
      commit("setUserProfile", {});
      commit("prototypesStore/setPrototypes", [], { root: true });
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

    login({ commit }, val) {
      commit("setWantToLogin", val);
    }
  }
};

export default userConnexion;
