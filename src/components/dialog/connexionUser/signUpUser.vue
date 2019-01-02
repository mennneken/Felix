<template>
  <div class="dialog">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">S'inscrire</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>

    </div>
    
    <div class="dialog__content">
      <form @submit.prevent>

        <fieldset>
          <label for="name">Nom</label>
          <input v-model.trim="signupForm.lastname" type="text" placeholder="Ginette" id="name">
        </fieldset>

        <fieldset>
          <label for="firstname">Prénom</label>
          <input v-model.trim="signupForm.firstname" type="text" placeholder="Besson" id="firstname">
        </fieldset>

        <fieldset>
          <label for="email2">Email</label>
          <input
            v-model.trim="signupForm.email"
            type="text"
            placeholder="gigibesson@mail.com"
            id="email2"
          >
        </fieldset>

        <fieldset>
          <label for="password2">Mot de passe</label>
          <input
            v-model.trim="signupForm.password"
            type="password"
            placeholder="min 6 characters"
            id="password2"
          >
        </fieldset>    
      </form>
    </div>
    
    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--secondary">
          <button class="btn btn--invisible" @click="callSwitchTo('login-user')">Se Connecter</button>
        </div>
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--plain" @click="signup()">S’inscrire</button>
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
  name: 'signUpUser',
  components: {
    svgIcon
  },

  data() {
    return {
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: ""
      },
      errorMsg: ""
    }
  },

  methods: {
    // Add the user to the database.
    signup() {
      this.performingRequest = true;

      fb.auth
        .createUserWithEmailAndPassword(
          this.signupForm.email,
          this.signupForm.password
        )
        .then(user => {
          this.$store.commit("userConnexion/setCurrentUser", user.user);

          // create user obj
          fb.usersCollection
            .doc(user.user.uid)
            .set({
              name: this.signupForm.name
            })
            .then(() => {
              this.$store.dispatch("userConnexion/fetchUserProfile");
              this.performingRequest = false;
              this.$router.push("/dashboard");
            })
            .catch(err => {
              console.log(err);
              this.performingRequest = false;
              this.errorMsg = err.message;
            });
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
};
</script>
