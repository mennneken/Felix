<template>
  <div class="dialog">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Mot de passe oublier</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <form @submit.prevent>
        <div v-if="!passwordResetSuccess">
          <label for="email">Email</label>
          <input
            v-model.trim="passwordForm.email"
            type="email"
            placeholder="you@email.com"
            id="email"
          >
        </div>
        <div v-else>
          <h2 class="title p title--upp title--main">Email envoyer !</h2>
          <p>Vérifiez vos emails pour réinitialisé le mot de passe.</p>
        </div>
      </form>
    </div>
    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--plain" @click="resetPassword()">Envoyer</button>
        </div>
        <div class="dialog__action-elem dialog__action-elem--secondary">
          <button class="btn btn--invisible" @click="callSwitchTo('login-user')">Revenir</button>
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
  name: "resetPasswordUser",
  components: {
    svgIcon
  },

  data() {
    return {
      passwordForm: {
        email: ""
      },

      passwordResetSuccess: false,
      errorMsg: ""
    };
  },

  methods: {
    // Send the user an email to reset is password.
    resetPassword() {
      this.performingRequest = true;

      fb.auth
        .sendPasswordResetEmail(this.passwordForm.email)
        .then(() => {
          this.performingRequest = false;
          this.passwordResetSuccess = true;
          this.passwordForm.email = "";
          this.closeDialog();
        })
        .catch(err => {
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
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