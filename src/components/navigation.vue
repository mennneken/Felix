<template>
  <header class="navigation navigation--main" v-if="$route.name === 'Dashboard'">
    <div class="container navigation__container">
      <router-link to="/dashboard" tag="a" class="logo logo--brand">
        <svg-icon :name="'brand'"></svg-icon>
      </router-link>

      <h1>{{ $route.name }}</h1>

      <nav class="navigation__nav">
        <ul>
          <li class="navigation__elem" tabindex="0" v-show="userConnected !== null && userIsAnonyme !== true">
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

          <li class="navigation__elem" tabindex="0" v-show="userConnected === null">
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
      <h1>{{ prototypeName }}</h1>
      <nav class="navigation__nav">
        <ul>
          <li></li>
        </ul>
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
import { mapState } from "vuex";

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
    },
  },
  
  computed: {
    userConnected() {
      return this.$store.state.userConnexion.currentUser;
    },
    userIsAnonyme() {
      return this.$store.state.userConnexion.currentUser.isAnonymous;
    },
    ...mapState({
      prototypeName: state => state.prototypesStore.prototype.name
    })
  }
};
</script>