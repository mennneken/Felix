const fb = require("@/firebaseConfig.js");

import { db } from "@/firebaseConfig";

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
          this.$router.push({ name: "Tool", params: { uid: '123' } });
        })
        .catch(error => {
          console.error("Error writing prototype: ", error);
        });
    },

    // Rename a prototype
    renamePrototype: ({}, { uid, id, newName }) => {
      let docPrototype = fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .doc(id);

      return db
        .runTransaction(function(transaction) {
          return transaction.get(docPrototype).then(function(docProto) {
            if (!docProto.exists) {
              throw `Document ${id} does not exist!`;
            }
            transaction.update(docPrototype, {
              name: newName,
              lastModification: new Date()
            });
          });
        })
        .catch(function(error) {
          console.log("Transaction failed: ", error);
        });
    },

    // Duplicate a Prototype
    duplicatePrototype: ({}, { uid, id }) => {
      let docPrototype = fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .doc(id);

      let collectionPrototype = fb.usersCollection
        .doc(uid)
        .collection("prototypes");

      docPrototype
        .get()
        .then(doc => {
          if (doc.exists) {
            collectionPrototype.add({
              name: doc.data().name + " copie",
              lastModification: new Date()
            });
          } else {
            console.log(`No document with the id "${id}" exists ;/`);
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },

    // Share a prototype with other people
    sharePrototype: ({}, { uid, id }) => {},

    // Export a Prototype as file (.css or .json)
    exportPrototype: ({}, { uid, id }) => {},

    // Delete a prototype from the database
    deletePrototype: ({ dispatch }, { uid, id }) => {
      let docPrototype = fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .doc(id);

      docPrototype
        .delete()
        .then(function() {
          dispatch("dialogStore/closeDialog", [], { root: true });
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
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
              lastModification: doc.data().lastModification
            });
          });
          commit("setPrototypes", prototypes);
        });
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
