const fb = require("@/firebaseConfig.js");

const userConnexion = {
  state: {
    currentUser: null,
    userProfile: {},
    wantToLogin: false
  },
  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
      commit("setUserProfile", {});
    },

    fetchUserProfile({ commit, state }) {
      fb.usersCollection
        .doc(state.currentUser.uid)
        .get()
        .then(res => {
          commit("setUserProfile", res.data());
        })
        .catch(err => {
          console.log(err);
        });
    },

    login({commit}, val) {
      commit("setWantToLogin", val);
    }
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
  }
};

export default userConnexion;
