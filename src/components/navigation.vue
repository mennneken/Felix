<template>
  <header class="navigation" v-if="$route.name === 'Dashboard'">
    <router-link to="/dashboard" tag="a" class="logo logo--brand">
      <svg-icon :name="'brand'"></svg-icon>
    </router-link>
    <h1>{{$route.name }}</h1>

    <!-- <nav class="navigation__nav">
      <ul>
        <li>hello</li>
      </ul>
    </nav>-->
    <a @click="logout">Se deconnecter</a>
  </header>
  
  <header class="navigation" v-else-if="$route.name === 'Tool'">
    <router-link to="/dashboard" tag="a" class="logo logo--brand">
      <svg-icon :name="'brand'"></svg-icon>
    </router-link>
    <h1>{{ $route.params.prototypeName }}</h1>

    <!-- <nav class="navigation__nav">
      <ul>
        <li>hello</li>
      </ul>
    </nav>-->
  </header>
</template>

<script>
const fb = require('../firebaseConfig.js')
import svgIcon from '@/components/svgIcon.vue'


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
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>