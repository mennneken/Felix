<template>
  <div class="dialog">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Nouveau Prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <input
        type="text"
        v-model="prototype.name"
        placeholder="Nom du Prototype"
        @keyup.enter="createPrototype"
        @keyup.esc="cancelProto"
      >
    </div>

    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--outline" @click="closeDialog()">Annuler</button>
          <button class="btn btn--plain" @click="createPrototype()">Suivant</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import svgIcon from "@/components/svgIcon.vue";

import { mapState, mapGetters } from "vuex";

export default {
  components: {
    svgIcon
  },

  data() {
    return {
      prototype: {
        name: ""
      }
    };
  },

  methods: {
    // Create a new prototype
    createPrototype() {
      if (this.isConnected) {
        this.$store.dispatch("prototypesStore/createNewPrototype", {
          uid: this.userUid,
          name: this.prototype.name
        });
        this.$store.dispatch("dialogStore/closeDialog");
      } else {
        this.$store.dispatch("userConnexion/signInAnonymously");
      }
    },

    closeDialog() {
      this.prototype.name = "";
      this.$emit("closeDialog");
    }
  },
  computed: {
    ...mapGetters({
      isConnected: "userConnexion/isConnected"
    }),
    ...mapState({
      currentUser: state => state.userConnexion.currentUser,
      userUid: state => state.userConnexion.currentUser.uid
    })
  }
};
</script>