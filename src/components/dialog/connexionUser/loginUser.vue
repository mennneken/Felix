<template>
  <div class="dialog" @keyup.enter="login()" @keyup.esc="closeDialog()">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Se Connecter</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    
    <div class="dialog__content">
      <form @submit.prevent>
        <fieldset>
          <label for="email1">Email</label>
          <input
            v-model.trim="loginForm.email"
            type="text"
            placeholder="gigibesson@felix.com"
            id="email1"
          >
        </fieldset>

        <fieldset>
          <label for="password1">Mot de Passe</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="************"
            id="password1"
          >
        </fieldset>
      </form>
    </div>
    
    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--plain" @click="login()">Se Connecter</button>
        </div>
        <div class="dialog__action-elem dialog__action-elem--secondary">
          <button class="btn btn--invisible" @click="callSwitchTo('reset-password-user')">Mot de passe oublié</button>
          <button class="btn btn--invisible" @click="callSwitchTo('sign-up-user')">S’inscrire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";

// FIREBASE
const fb = require("@/firebaseConfig.js");

export default {
  name: 'loginUser',
  components: {
    svgIcon
  },

  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      errorMsg: ""
    }
  },

  methods: {
    // Log the user in and fetch his prototypes.
    login() {
      this.performingRequest = true;

      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit("userConnexion/setCurrentUser", user.user);
          this.$store.dispatch("userConnexion/fetchUserProfile");
          this.$store.dispatch("userConnexion/login", false);
          this.closeDialog();
          this.performingRequest = false;

          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },

    // Close the dialog
    closeDialog() {
      this.$emit('closeDialog');
    },

    // Emit a to the parent the switch methods
    callSwitchTo(destination) {
      this.$emit('switchConnexion', destination)
    }
  }
}
</script>

<style>

</style>
