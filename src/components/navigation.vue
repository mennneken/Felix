<template>
  <header class="navigation" v-if="$route.name === 'Dashboard'">
    <div class="container navigation__container">
      <router-link to="/dashboard" tag="a" class="logo logo--brand">
        <svg-icon :name="'brand'"></svg-icon>
      </router-link>

      <h1>{{ $route.name }}</h1>

      <nav class="navigation__nav">
        <ul>
          <li tabindex="0" v-if="userConnected !== null">
            <a class="navigation__nav-elem">
              <svg-icon :name="'login_user'"></svg-icon>
            </a>
            <ul class="dropdown">
              <li class="dropdown__elem">
                <svg-icon :name="'parameters'"></svg-icon>Paramètres
              </li>
              <li class="dropdown__elem">
                <svg-icon :name="'logout_user'"></svg-icon>Se deconnecter
              </li>
            </ul>
          </li>

          <li v-else>
            <a @click="login">
              <svg-icon :name="'user'"></svg-icon>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <header class="navigation" v-else-if="$route.name === 'Tool'">
    <router-link to="/dashboard" tag="a" class="logo logo--brand">
      <svg-icon :name="'brand'"></svg-icon>
    </router-link>
    <h1>{{ $route.params.prototypeName }}</h1>

    <nav class="navigation__nav">
      <ul>
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
const fb = require("../firebaseConfig.js");
import svgIcon from "@/components/svgIcon.vue";

export default {
  components: {
    svgIcon
  },
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push({ path: "/dashboard", props: { login: false } });
        })
        .catch(err => {
          console.log(err);
        });
    },

    login() {
      this.$store.dispatch("login", true);
    }
  },
  computed: {
    userConnected() {
      return this.$store.state.userConnexion.currentUser;
    }
  }
};
</script>