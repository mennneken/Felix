const toolsStore = {
  namespaced: true,
  state: {
    fontList: {
      enable: false,
      target: "font_1" // font_1 or font_2
    }
  },

  getters: {},

  actions: {
    callFontList({ dispatch }, enableStatus, target) {
      return dispatch("changeFontTarget", target)
        .then(() => {
          dispatch("changeFontListEnableTo", enableStatus);
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
      if (target == "font_1" || target == "font_2") {
        commit("setFontTarget", target);
      } else {
        console.error(`The target font '${target}' is uncorrect.`);
      }
    }
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
  }
};

export default toolsStore;
