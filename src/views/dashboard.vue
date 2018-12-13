<template>
  <div id="dashboard">
    <f-nav></f-nav>

    <f-login v-if="showLogin"></f-login>

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
// import { prototype } from 'module';

export default {
  components: {
    fNav,
    fLogin,
    svgIcon
  },

  data() {
    return {
      creatingNewProto: false,
      prototype: {
        name: "" || 'prototype 1'
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
    }
  }
};
</script>
