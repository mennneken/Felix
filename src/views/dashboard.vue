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
      <!-- <li v-for="example in examples" :key="example.id">Prototype 1</li> -->
    </ul>

    <button
      class="btn btn--main-action"
      v-show="!creatingNewProto"
      @click.prevent="createNewPrototype"
    >
      <svg-icon :name="'add_sign'"></svg-icon>
    </button>

    <div class="dialog" v-show="creatingNewProto">
      <form @submit.prevent>
        <h2 class="title p title--upp title--main">Nouveau Prototype</h2>
        <input type="text" v-model="prototype.name" placeholder="Nom du Prototype">
        <button class="btn btn--outline" @click="cancelProto">Annuler</button>
        <button class="btn btn--plain" @click.prevent="goPrototyping">Suivant</button>
      </form>
    </div>
  </div>
</template>

<script>
import fNav from "@/components/navigation";
import fLogin from "@/components/login";
import svgIcon from "@/components/svgIcon.vue";

import exampleProto from "@/store/examplePrototype"

const fb = require("../firebaseConfig.js");

export default {
  components: {
    fNav,
    fLogin,
    svgIcon
  },

  data() {
    return {
      creatingNewProto: false,
      examples: exampleProto,
      prototype: {
        name: ""
      }
    };
  },

  methods: {
    createNewPrototype() {
      this.creatingNewProto = !this.creatingNewProto;
    },

    cancelProto() {
      this.prototype.name = "";
      this.creatingNewProto = false;
    },

    goPrototyping() {
      this.$router.push({ name: 'Tool', params: { prototypeName: this.prototype.name }})
    }
  },

  computed: {
    showLogin() {
      return this.$store.state.userConnexion.wantToLogin;
    },

    userConnected() {
      return this.$store.state.userConnexion.currentUser;
    },

    userIsAnonyme() {
      return this.$store.state.userConnexion.currentUser.isAnonymous;
    }
  }
};
</script>
