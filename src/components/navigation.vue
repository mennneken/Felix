<template>
  <header
    class="navigation navigation--main"
    v-if="$route.name === 'Dashboard' || $route.name === 'Credits'"
  >
    <div class="container navigation__container">
      <router-link to="/dashboard" tag="a" class="logo logo--brand">
        <svg-icon :name="'brand'"></svg-icon>
      </router-link>

      <h1>{{ $route.name }}</h1>

      <nav class="navigation__nav">
        <ul>
          <li class="navigation__elem" tabindex="0" v-if="isConnected && !isAnonymous">
            <a class="navigation__nav-elem">
              <svg-icon :name="'login_user'"></svg-icon>
            </a>
            <ul class="dropdown dropdown--passive">
              <li class="dropdown__elem">
                <a>
                  <svg-icon :name="'parameters'"></svg-icon>Paramètres
                </a>
              </li>
              <li class="dropdown__elem">
                <a @click="logout">
                  <svg-icon :name="'logout_user'"></svg-icon>Se deconnecter
                </a>
              </li>
            </ul>
          </li>

          <li class="navigation__elem" tabindex="0" v-else>
            <a class="navigation__nav-elem" @click="callDialog('connexion-user')">
              <svg-icon :name="'user'"></svg-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <header class="navigation navigation--main" v-else-if="$route.name === 'Tool'">
    <div class="container navigation__container">
      <router-link to="/dashboard" tag="a" class="logo logo--brand">
        <svg-icon :name="'brand'"></svg-icon>
      </router-link>
      <h1>{{ prototypeName || 'Sans Titre' }}</h1>
      <!-- <nav class="navigation__nav">
        <ul>
          <li></li>
        </ul>
      </nav>-->
    </div>
  </header>

  <header class="navigation navigation--main" v-else-if="$route.name === 'About'">
    <div class="container navigation__container">
      <router-link to="/dashboard" tag="a" class="logo logo--brand">
        <svg-icon :name="'brand'"></svg-icon>
      </router-link>
      <nav class="navigation__nav">
        <router-link tag="a" class="link link--outline" to="/dashboard">Passer</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
// FIREBASE
const fb = require("../firebaseConfig.js");

// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";

// VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    svgIcon
  },

  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("userConnexion/clearData");
          this.$router.push({ path: "/dashboard", props: { login: false } });
        })
        .catch(err => {
          console.log(err);
        });
    },

    login() {
      this.$store.dispatch("userConnexion/login", true);
    },

    // Open the corresponding dialog
    callDialog(dialogType, data) {
      this.$store.dispatch("dialogStore/callDialog", {
        type: dialogType,
        data: data
      });
    }
  },

  computed: {
    ...mapGetters({
      isConnected: "userConnexion/isConnected"
    }),
    ...mapState({
      prototypeName: state => state.prototypesStore.prototype.meta.name,
      isAnonymous: state => state.userConnexion.currentUser.isAnonymous
    })
  }
};
</script>