const toolsStore = {
  namespaced: true,
  state() {
    return {
      fontList: {
        target: "titleFont", // titleFont or textFont
      },
      fontInDetails: "",
      previewDisplayed: "preview",
      toolsDisplayed: "typo",
      colorHarmonies: [
        {
          name: "Monochrome",
          value: "monochromatic",
        },
        {
          name: "Analogue",
          value: "analogous",
        },
        {
          name: "Complémentaire",
          value: "complementary",
        },
        {
          name: "Complémentaires adjacentes",
          value: "split-complementary",
        },
        {
          name: "Triadiques",
          value: "triadic",
        },
        {
          name: "Tétradiques",
          value: "tetradic",
        },
      ],
    };
  },

  getters: {},

  actions: {
    // Show font list in place of preview
    callPreviews({ dispatch }, { toolsDisplay, previewDisplay }) {
      dispatch("toolsStore/changeToolsDisplay", toolsDisplay, { root: true });
      dispatch("toolsStore/changePreviewDisplay", previewDisplay, {
        root: true,
      });
    },

    // Check and commit new value to fontList.enable
    changeFontListEnable({ commit }, enableStatus) {
      if (typeof enableStatus == "boolean") {
        commit("setFontListEnableTo", enableStatus);
      } else {
        console.error(`
          The action 'setFontListEnableTo' failed due to the wrong type of enableStatus.
          Type of enableStatus submited is: ${typeof enableStatus}.`);
      }
    },

    // Check the font target and commit the mutation to change the target.
    changeFontListTarget({ commit }, target) {
      if (target == "fontTitle" || target == "fontText") {
        commit("setFontTarget", target);
      } else {
        console.error(`The target font '${target}' is uncorrect.`);
      }
    },

    // Check and commit change to toolsDiplay
    changeToolsDisplay({ commit }, target) {
      commit("setToolsDisplay", target);
    },

    // Check and commi change to previewDispay
    changePreviewDisplay({ commit }, target) {
      const valideTargets = ["preview", "fontList", "fontDetails"];
      if (valideTargets.find(valideTarget => valideTarget === target)) {
        commit("setPreviewDisplay", target);
      } else {
        console.error(`${target} isn't a valide target.`);
      }
    },

    // Check and commi change to previewDispay
    changefontInDetails({ commit }, font) {
      commit("setfontInDetails", font);
    },
  },

  mutations: {
    // Set the fontList.enable to new status.
    setFontListEnableTo(state, enableStatus) {
      state.fontList.enable = enableStatus;
    },

    // Set the state of fontList.target to new target.
    setFontTarget(state, target) {
      state.fontList.target = target;
    },

    // set the value of the tool to display.
    setToolsDisplay(state, target) {
      state.toolsDisplayed = target;
    },

    // set the value of the preview to display.
    setPreviewDisplay(state, target) {
      state.previewDisplayed = target;
    },

    // set the value of the preview to display.
    setfontInDetails(state, font) {
      state.fontInDetails = font;
    },
  },
};

export default toolsStore;
