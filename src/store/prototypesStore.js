const prototypesStore = {
  state: {
    protoList: []
  },

  getters: {},

  actions: {
    fetchPrototypes({ commit, state }) {
      fb.prototypesCollection
        .doc(state.protoList.uid)
        .get()
        .then(res => {
          commit("setUserProfile", res.data());
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  
  mutations: {}
};