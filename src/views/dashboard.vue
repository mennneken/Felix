<template>
  <div id="dashboard">
    <f-nav></f-nav>

    <f-login v-if="showLogin"></f-login>

    <ul>
      <li v-if="userConnected === null || userIsAnonyme === true">
        <span>{{ examples.fonts.font_1.name }}</span>
        <span>{{ examples.fonts.font_2.name }}</span>
        <span>{{ examples.name }}</span>
      </li>
      <li v-if="userConnected !== null" v-for="prototype in prototypes" :key="prototype.id">
        {{ prototype.name }}
        {{ prototype.lastModified }}
      </li>
    </ul>

    <button
      class="btn btn--main-action"
      v-show="!dialogPrototypeEnable"
      @click.prevent="showDialogNewPrototype"
    >
      <svg-icon :name="'add_sign'"></svg-icon>
    </button>
    
    <div class="dialog__hollow" @click="cancelProto" v-show="dialogPrototypeEnable">
      <div class="dialog dialog--new-proto">
        <h2 class="title p title--upp title--main">Nouveau Prototype</h2>
        <input
          type="text"
          v-model="prototype.name"
          placeholder="Nom du Prototype"
          @keyup.enter="createPrototype"
        >

        <div class="dialog__action">
          <div class="dialog__action-elem dialog__action-elem--primary">
            <button class="btn btn--outline" @click="cancelProto">Annuler</button>
            <button class="btn btn--plain" @click="createPrototype">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fNav from "@/components/navigation";
import fLogin from "@/components/login";
import svgIcon from "@/components/svgIcon.vue";

import { mapState } from "vuex";

import exampleProto from "@/store/examplePrototype";

const fb = require("../firebaseConfig.js");

export default {
  components: {
    fNav,
    fLogin,
    svgIcon
  },

  data() {
    return {
      dialogPrototypeEnable: false,
      examples: exampleProto,
      prototype: {
        name: ""
      }
    };
  },

  methods: {
    // Show the dialog to create a new prototype
    showDialogNewPrototype() {
      this.dialogPrototypeEnable = true;
    },

    // Create a new prototype
    createPrototype() {
      this.$store.dispatch("prototypesStore/createNewPrototype", {
        uid: this.userUid,
        name: this.prototype.name
      });
    },

    cancelProto() {
      this.prototype.name = "";
      this.dialogPrototypeEnable = false;
    },

    goPrototyping() {
      this.$router.push({
        name: "Tool",
        params: { prototypeName: this.prototype.name }
      });
    }
  },

  computed: mapState({
    userConnexion: state => state.userConnexion,
    showLogin: state => state.userConnexion.wantToLogin,
    userConnected: state => state.userConnexion.currentUser,
    userUid: state => state.userConnexion.currentUser.uid,
    userIsAnonyme: state => state.userConnexion.currentUser.isAnonymous,
    prototypes: state => state.prototypesStore.userPrototypes
  })

  // updated() {
  //   this.$store.dispatch("prototypesStore/getPrototypes", {
  //     uid: this.userUid
  //   });
  // }
};
</script>
