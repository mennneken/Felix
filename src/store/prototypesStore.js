const fb = require("@/firebaseConfig.js");
import { usersCollection } from "@/firebaseConfig";

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

    // get
    getPrototypes: ({commit}, { uid }) => {
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            commit("setPrototypes", doc.data());
          });
        });
    }
  },

  mutations: {
    // Set all the user prototypes
    setPrototypes(state, data) {
      state.userPrototypes.push(data);
    }
  }
};

export default prototypesStore;
