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
          <label for="email">Email</label>
          <input
            v-model.trim="loginForm.email"
            type="email"
            placeholder="gigibesson@felix.com"
            id="email"
          >
        </fieldset>

        <fieldset>
          <label for="password">Mot de Passe</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="************"
            id="password"
          >
        </fieldset>
      </form>
    </div>

    <p class="alert" v-show="errorMsg">{{ errorMsg }}</p>

    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--plain" @click="login()">Se Connecter</button>
        </div>
        <div class="dialog__action-elem dialog__action-elem--secondary">
          <button
            class="btn btn--invisible"
            @click="callSwitchTo('reset-password-user')"
          >Mot de passe oublié</button>
          <button class="btn btn--invisible" @click="callSwitchTo('sign-up-user')">S’inscrire</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";

//VUEX
import { mapState } from "vuex";

export default {
  name: "loginUser",
  components: {
    svgIcon
  },

  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },

  computed: {
    ...mapState({
      errorMsg: state => state.userConnexion.errorMsg
    })
  },

  methods: {
    // Log the user in and fetch his prototypes.
    login() {
      this.performingRequest = true;
      this.$store.dispatch("userConnexion/signIn", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
      this.closeDialog;
    },

    // Close the dialog
    closeDialog() {
      this.$emit("closeDialog");
    },

    // Emit a to the parent the switch methods
    callSwitchTo(destination) {
      this.$emit("switchConnexion", destination);
    }
  }
};
</script>