<template>
  <div class="app">
    <felix-menu></felix-menu>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    
    <footer>
      <router-link to="/credits">Crédits</router-link>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import felixMenu from "../components/felixMenu.vue";

export default {
  name: 'home',
  components: {
    felixMenu,
  }
}
</script>
