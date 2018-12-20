const fb = require("@/firebaseConfig.js");

const prototypesStore = {
  namespaced: true,
  state: {
    userPrototypes: []
  },

  getters: {},

  actions: {
    // Add a new prototype to the db
    createNewPrototype: ({}, { uid, name }) => {
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .add({ name: name, lastModified: new Date() })
        .then(() => {
          console.log("Prototype successfully written!");
        })
        .catch(error => {
          console.error("Error writing prototype: ", error);
        });
    },

    // Get all the user's prototypes
    getPrototypes: ({ commit }, { uid }) => {
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .onSnapshot(querySnapshot => {
          let prototypes = [];
          querySnapshot.forEach(doc => {
            prototypes.push(doc.data());
          })
          commit("setPrototypes", prototypes);
        })
    }
  },

  mutations: {
    // Set all the user prototypes
    setPrototypes(state, data) {
      state.userPrototypes = data;
    }
  }
};

export default prototypesStore;
