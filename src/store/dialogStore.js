const dialogStore = {
  namespaced: true,
  state: {
    dialog: {
      enable: false,
      type: "",
      data: ""
    }
  },

  getters: {},

  mutations: {
    setDialogEnable(state, enableStatus) {
      state.dialog.enable = enableStatus;
    },

    setDialogData(state, data) {
      state.dialog.data = data;
    },

    setDialogType(state, DialogType) {
      typeof DialogType === "string"
        ? (state.dialog.type = DialogType)
        : (state.dialog.type = DialogType.toString());
    }
  },

  actions: {
    callDialog({ commit }, payload) {
      commit("setDialogType", payload.type);
      commit("setDialogData", payload.data);
      commit("setDialogEnable", true);
    },

    closeDialog({ commit }) {
      commit("setDialogType", "");
      commit("setDialogEnable", false);
    }
  }
};

export default dialogStore;
