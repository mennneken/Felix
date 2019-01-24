const fb = require("@/firebaseConfig.js");

import { db } from "@/firebaseConfig";

import chroma from "chroma-js";

import router from "@/router.js";

const prototypesStore = {
  namespaced: true,
  state: {
    prototypesList: [],
    prototype: {
      meta: {
        name: "Prototype",
        id: "",
      },
      typography: {
        fontChoices: {
          fontTitle: {
            family: "Sans-serif",
            style: "normal",
            weight: "600",
          },
          fontText: {
            family: "Serif",
            style: "normal",
            weight: "400",
          },
        },
        format: {
          size: {
            base: {
              value: 16,
              unit: "px",
            },
            ratio: 1.25,
          },
          titles: {
            line: {
              height: 1.2,
              length: {
                value: 65,
                unit: "ch",
              },
            },
            spaces: {
              before: {
                value: 1,
                unit: "em",
              },
              after: {
                value: 1,
                unit: "em",
              },
            },
          },
          texts: {
            line: {
              height: 1.2,
              length: {
                value: 65,
                unit: "ch",
              },
            },
            spaces: {
              before: {
                value: 1,
                unit: "em",
              },
              after: {
                value: 1,
                unit: "em",
              },
            },
          },
        },
      },
      color: {
        harmony: "monochromatic",
        colors: {
          lightShade: { h: 0, s: 0, l: 87.5, a: 1 },
          lightAccent: { h: 0, s: 0, l: 75, a: 1 },
          main: { h: 0, s: 0, l: 50, a: 1 },
          darkAccent: { h: 0, s: 0, l: 25, a: 1 },
          darkShade: { h: 0, s: 0, l: 12.5, a: 1 },
        },
      },
    },
    basePrototype: {
      typography: {
        fontChoices: {
          fontTitle: {
            family: "Sans-serif",
            style: "normal",
            weight: "600",
          },
          fontText: {
            family: "Serif",
            style: "normal",
            weight: "400",
          },
        },
        format: {
          size: {
            base: {
              value: 16,
              unit: "px",
            },
            ratio: 1.25,
          },
          titles: {
            line: {
              height: 1.2,
              length: {
                value: 65,
                unit: "ch",
              },
            },
            spaces: {
              before: {
                value: 1,
                unit: "em",
              },
              after: {
                value: 1,
                unit: "em",
              },
            },
          },
          texts: {
            line: {
              height: 1.2,
              length: {
                value: 65,
                unit: "ch",
              },
            },
            spaces: {
              before: {
                value: 1,
                unit: "em",
              },
              after: {
                value: 1,
                unit: "em",
              },
            },
          },
        },
      },
      color: {
        harmony: "monochromatic",
        colors: {
          lightShade: { h: 0, s: 0, l: 87.5, a: 1 },
          lightAccent: { h: 0, s: 0, l: 75, a: 1 },
          main: { h: 0, s: 0, l: 50, a: 1 },
          darkAccent: { h: 0, s: 0, l: 25, a: 1 },
          darkShade: { h: 0, s: 0, l: 12.5, a: 1 },
        },
      },
    },
  },

  getters: {
    sortPrototypesByDate: state => {
      return state.prototypesList.sort(function(a, b) {
        a = new Date(a.lastModification.seconds * 1000);
        b = new Date(b.lastModification.seconds * 1000);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    },

    findAPrototype: state => id => {
      return state.prototypesList.find(
        userPrototype => userPrototype.id === id
      );
    },

    getColorHSLA: state => {
      let dA = state.prototype.color.colors.darkAccent;
      let dS = state.prototype.color.colors.darkShade;
      let lA = state.prototype.color.colors.lightAccent;
      let lS = state.prototype.color.colors.lightShade;
      let main = state.prototype.color.colors.main;

      return {
        darkAccent: `hsla(${dA.h}, ${dA.s}%, ${dA.l}%, ${dA.a})`,
        darkShade: `hsla(${dS.h}, ${dS.s}%, ${dS.l}%, ${dS.a})`,
        lightAccent: `hsla(${lA.h}, ${lA.s}%, ${lA.l}%, ${lA.a})`,
        lightShade: `hsla(${lS.h}, ${lS.s}%, ${lS.l}%, ${lS.a})`,
        main: `hsla(${main.h}, ${main.s}%, ${main.l}%, ${main.a})`,
      };
    },
  },

  actions: {
    // Add a new prototype to the db
    createNewPrototype: ({ commit, state }, { uid, name }) => {
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .add({
          name: name,
          lastModification: new Date(),
          parameters: state.basePrototype,
        })
        .then(docRef => {
          commit("resetPrototype");
          commit("setPrototypeMeta", { name: name, id: docRef.id });
          return docRef;
        })
        .then(docRef => {
          router.push({ name: "Tool", params: { uid: docRef.id } });
        })
        .catch(error => {
          console.error(error);
        });
    },

    continutePrototype: ({ commit }, prototype) => {
      commit("resetPrototype");
      commit("setPrototype", prototype.prototype);
      commit("setPrototypeMeta", { name: prototype.name, id: prototype.id });
    },

    // Rename a prototype
    renamePrototype: ({ rootState }, { id, newName }) => {
      let docPrototype = fb.usersCollection
        .doc(rootState.userConnexion.currentUser.uid)
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
              lastModification: new Date(),
            });
          });
        })
        .catch(error => {
          console.error("Transaction failed: ", error);
        });
    },

    // UPDATE TO THE DATABASE
    updatePrototype: ({ state, rootState }, id = state.prototype.meta.id) => {
      let docPrototype = fb.usersCollection
        .doc(rootState.userConnexion.currentUser.uid)
        .collection("prototypes")
        .doc(id);

      docPrototype.update({
        lastModification: new Date(),
        "parameters.color": state.prototype.color,
        "parameters.typography": state.prototype.typography,
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
              lastModification: new Date(),
            });
          } else {
            console.error(`No document with the id "${id}" exists ;/`);
          }
        })
        .catch(error => {
          console.error("Error getting document:", error);
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
        .catch(error => {
          console.error("Error removing document: ", error);
        });
    },

    // Get all the user's prototypes
    getPrototypes: ({ commit }, { uid }) => {
      fb.usersCollection
        .doc(uid)
        .collection("prototypes")
        .onSnapshot(querySnapshot => {
          commit("clearPrototypeList");

          querySnapshot.forEach(doc => {
            commit("addPrototypeToList", {
              id: doc.id,
              name: doc.data().name,
              lastModification: doc.data().lastModification,
              prototype: doc.data().parameters,
            });
          });
        });
    },

    // set the font
    setFont({ commit, dispatch, rootState }, font) {
      let fontToload = `${font.family}:${font.variants.join(",")}:latin`;

      dispatch("googleFontStore/loadSpecificFonts", fontToload, {
        root: true,
      });

      commit("setFontFamily", {
        target: rootState.toolsStore.fontList.target,
        fontFamily: font.family,
      });

      let normalRegex = new RegExp("(^\\d{3}$)|((^regular$))");
      let reguOrItalRegex = new RegExp("(^regular$)|(^italic$)");
      let style;
      let weight;

      /* Define style by
       * Checking if a regular weight exist
       * if true --> style is normal
       * else --> style is italic
       */
      if (font.variants.find(variant => normalRegex.test(variant))) {
        style = "normal";
      } else {
        style = "italic";
      }

      /* Define weight by
       * Checking if regular or italic weight
       * if true --> weight is 400
       * else --> weight is the closest to 400
       */
      if (font.variants.find(variant => reguOrItalRegex.test(variant))) {
        weight = 400;
      } else {
        let weightArr = [];

        function closest(num, arr) {
          var curr = arr[0];

          var diff = Math.abs(num - curr);
          for (var val = 0; val < arr.length; val++) {
            var newdiff = Math.abs(num - arr[val]);
            if (newdiff < diff) {
              diff = newdiff;
              curr = arr[val];
            }
          }
          return curr;
        }

        font.variants.forEach(variant => {
          if (!reguOrItalRegex.test(variant)) {
            weightArr = [
              ...new Set([...weightArr, ...[Number.parseInt(variant)]]),
            ];
          }
        });

        weight = closest(400, weightArr);
      }

      commit("setFontStyle", {
        target: rootState.toolsStore.fontList.target,
        style,
      });

      commit("setFontWeight", {
        target: rootState.toolsStore.fontList.target,
        weight,
      });
    },

    // reset the font
    resetFont({ commit, state, rootState }) {
      let target = rootState.toolsStore.fontList.target;
      commit("setFont", {
        target,
        font: state.basePrototype.typography.fontChoices[target],
      });
    },

    //
    randomColor({ commit }, { colorName = "main", h, s, l, a = [1, 1] }) {
      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

      let hue = getRandomNumber(h[0], h[1]);
      let saturation = getRandomNumber(s[0], s[1]);
      let lightness = getRandomNumber(l[0], l[1]);
      let alpha = getRandomNumber(a[0] * 100, a[1] * 100) / 100;

      commit("setColor", {
        colorName,
        h: hue,
        s: saturation,
        l: lightness,
        a: alpha,
      });
    },

    generateSchemeColor(
      { state, dispatch },
      harmony = state.prototype.color.harmony
    ) {
      let schemeColor = state.prototype.color.colors;
      dispatch(
        "prototypesStore/randomColor",
        {
          h: [0, 360],
          s: [20, 80],
          l: [35, 65],
          a: [1, 1],
        },
        { root: true }
      );

      if (harmony === "monochromatic") {
        dispatch("generateSchemeColorMonochromatic");
      } else if (harmony === "analogous") {
        dispatch("generateSchemeColorAnalogous");
      } else if (harmony === "complementary") {
        dispatch("generateSchemeColorComplementary");
      } else if (harmony === "split-complementary") {
        dispatch("generateSchemeColorSplitComplementary");
      } else if (harmony === "triadic") {
        dispatch("generateSchemeColorTriadic");
      } else if (harmony === "tetradic") {
        dispatch("generateSchemeColorTetradic");
      }
    },

    generateSchemeColorMonochromatic(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h - 5, color.h + 5],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h - 5, color.h + 5],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h - 5, color.h + 5],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h - 5, color.h + 5],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * 30],
        l: [10, 20],
      };

      dispatch("randomColor", {
        colorName: "lightShade",
        h: lightShade.h,
        s: lightShade.s,
        l: lightShade.l,
      });

      dispatch("randomColor", {
        colorName: "lightAccent",
        h: lightAccent.h,
        s: lightAccent.s,
        l: lightAccent.l,
      });

      dispatch("randomColor", {
        colorName: "darkAccent",
        h: darkAccent.h,
        s: darkAccent.s,
        l: darkAccent.l,
      });

      dispatch("randomColor", {
        colorName: "darkShade",
        h: darkShade.h,
        s: darkShade.s,
        l: darkShade.l,
      });
    },

    generateSchemeColorAnalogous(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h - 30, color.h - 30],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h + 30, color.h + 30],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h + 30, color.h + 30],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h - 30, color.h - 30],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * 30],
        l: [10, 20],
      };

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightShade",
          h: lightShade.h,
          s: lightShade.s,
          l: lightShade.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightAccent",
          h: lightAccent.h,
          s: lightAccent.s,
          l: lightAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkAccent",
          h: darkAccent.h,
          s: darkAccent.s,
          l: darkAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkShade",
          h: darkShade.h,
          s: darkShade.s,
          l: darkShade.l,
        },
        { root: true }
      );
    },

    generateSchemeColorComplementary(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h, color.h],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h - 180, color.h - 180],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * -30],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h - 180, color.h - 180],
        s: [color.s + (color.s / 100) * -30, color.s + (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h, color.h],
        s: [color.s - (color.s / 100) * 75, color.s - (color.s / 100) * 25],
        l: [10, 20],
      };

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightShade",
          h: lightShade.h,
          s: lightShade.s,
          l: lightShade.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightAccent",
          h: lightAccent.h,
          s: lightAccent.s,
          l: lightAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkAccent",
          h: darkAccent.h,
          s: darkAccent.s,
          l: darkAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkShade",
          h: darkShade.h,
          s: darkShade.s,
          l: darkShade.l,
        },
        { root: true }
      );
    },

    generateSchemeColorSplitComplementary(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h + 30, color.h + 150],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h - 150, color.h - 150],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h - 150, color.h - 150],
        s: [color.s - (color.s / 100) * 50, color.s - (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h + 150, color.h + 150],
        s: [color.s - (color.s / 100) * 75, color.s - (color.s / 100) * 50],
        l: [10, 20],
      };

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightShade",
          h: lightShade.h,
          s: lightShade.s,
          l: lightShade.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightAccent",
          h: lightAccent.h,
          s: lightAccent.s,
          l: lightAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkAccent",
          h: darkAccent.h,
          s: darkAccent.s,
          l: darkAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkShade",
          h: darkShade.h,
          s: darkShade.s,
          l: darkShade.l,
        },
        { root: true }
      );
    },

    generateSchemeColorTriadic(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h + 120, color.h + 120],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h - 120, color.h - 120],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h - 120, color.h - 120],
        s: [color.s - (color.s / 100) * 50, color.s - (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h + 120, color.h + 120],
        s: [color.s - (color.s / 100) * 75, color.s - (color.s / 100) * 50],
        l: [10, 20],
      };

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightShade",
          h: lightShade.h,
          s: lightShade.s,
          l: lightShade.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightAccent",
          h: lightAccent.h,
          s: lightAccent.s,
          l: lightAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkAccent",
          h: darkAccent.h,
          s: darkAccent.s,
          l: darkAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkShade",
          h: darkShade.h,
          s: darkShade.s,
          l: darkShade.l,
        },
        { root: true }
      );
    },

    generateSchemeColorTetradic(
      { state, dispatch },
      color = state.prototype.color.colors.main
    ) {
      let lightShade = {
        h: [color.h + 60, color.h + 60],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [78, 95],
      };
      let lightAccent = {
        h: [color.h, color.h],
        s: [color.s + (color.s / 100) * -15, color.s + (color.s / 100) * 15],
        l: [68, 75],
      };
      let darkAccent = {
        h: [color.h - 120, color.h - 120],
        s: [color.s - (color.s / 100) * 50, color.s - (color.s / 100) * 30],
        l: [22, 32],
      };
      let darkShade = {
        h: [color.h - 180, color.h - 180],
        s: [color.s - (color.s / 100) * 75, color.s - (color.s / 100) * 50],
        l: [10, 20],
      };

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightShade",
          h: lightShade.h,
          s: lightShade.s,
          l: lightShade.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "lightAccent",
          h: lightAccent.h,
          s: lightAccent.s,
          l: lightAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkAccent",
          h: darkAccent.h,
          s: darkAccent.s,
          l: darkAccent.l,
        },
        { root: true }
      );

      dispatch(
        "prototypesStore/randomColor",
        {
          colorName: "darkShade",
          h: darkShade.h,
          s: darkShade.s,
          l: darkShade.l,
        },
        { root: true }
      );
    },
  },

  mutations: {
    // Clear all Prototype
    clearPrototypeList(state) {
      state.prototypesList = [];
    },

    // Set (current)prototype to is default.
    resetPrototype(state) {
      state.prototype.meta = {
        name: "Prototype",
        id: "",
      };
      state.prototype.typography = state.basePrototype.typography;
      state.prototype.color = state.basePrototype.color;
    },

    // Set (current)prototype to a personalyse prototype.
    setPrototype(state, prototype) {
      state.prototype = prototype;
    },

    // Set (current)prototype to a personalyse prototype.
    setPrototypeMeta(state, meta) {
      state.prototype.meta = meta;
    },

    // Add a prototype to the list of prototypes
    addPrototypeToList(state, prototype) {
      state.prototypesList.push(prototype);
    },

    // Set all the user prototypes
    setAllPrototypes(state, data) {
      state.prototypesList = data;
    },

    setFont(state, { target, font }) {
      state.prototype.typography.fontChoices[target] = font;
    },

    setFontFamily(state, { target, fontFamily }) {
      state.prototype.typography.fontChoices[target].family = fontFamily;
    },

    setFontStyle(state, { target, style }) {
      state.prototype.typography.fontChoices[target].style = style;
    },

    setFontWeight(state, { target, weight }) {
      state.prototype.typography.fontChoices[target].weight = weight;
    },

    setColors(state, colors) {
      state.prototype.color.colors = colors;
    },

    setColor(state, { colorName, h, s, l, a }) {
      state.prototype.color.colors[colorName] = {
        h: h,
        s: s,
        l: l,
        a: a,
      };
    },

    setHue(state, { colorName, h }) {
      state.prototype.color.colors[colorName].h = h;
    },

    setSaturation(state, { colorName, s }) {
      state.prototype.color.colors[colorName].s = s;
    },

    setLightness(state, { colorName, l }) {
      state.prototype.color.colors[colorName].l = l;
    },

    setAlpha(state, { colorName, a }) {
      state.prototype.color.colors[colorName].a = a;
    },

    updateColorHarmony(state, harmony) {
      state.prototype.color.harmony = harmony;
    },
  },
};

export default prototypesStore;
