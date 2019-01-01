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
        .add({ 
          name: name, 
          lastModification: new Date()
        })
        .then(() => {
          console.log("Prototype successfully written!");
        })
        .catch(error => {
          console.error("Error writing prototype: ", error);
        });
    },

    // Rename a prototype
    renamePrototype: ({}, { uid, name, newName }) =>{
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .doc()
        .add({ 
          name: name, 
          lastModification: new Date()
        })
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
            prototypes.push({
              id: doc.id,
              name: doc.data().name,
              lastModification: doc.data().lastModification,
            });
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
