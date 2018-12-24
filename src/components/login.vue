<template>
  <div id="login" class="dialog">
    <section>
      <button class="btn btn--icon" @click="close">
        <svg-icon :name="'close'"></svg-icon>
      </button>

      <div class="col2" :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
        <form v-if="showLoginForm" @submit.prevent>
          <h2 class="title p title--upp title--main">Se Connecter</h2>

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

          <div class="dialog__action">
            <div class="dialog__action-elem dialog__action-elem--secondary">
              <button class="btn btn--invisible" @click="togglePasswordReset">Mot de passe oublié</button>
              <button class="btn btn--invisible" @click="toggleForm">S’inscrire</button>
            </div>
            <div class="dialog__action-elem dialog__action-elem--primary">
              <button class="btn btn--plain" @click="login">Se Connecter</button>
            </div>
          </div>
        </form>
        <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>
          <h2 class="title p title--upp title--main">S’inscrire</h2>

          <fieldset>
            <label for="name">Nom</label>
            <input v-model.trim="signupForm.lastname" type="text" placeholder="Ginette" id="name">
          </fieldset>
          
          <fieldset>
            <label for="name">Prénom</label>
            <input v-model.trim="signupForm.firstname" type="text" placeholder="Besson" id="name">
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

          <div class="dialog__action">
            <div class="dialog__action-elem dialog__action-elem--secondary">
              <button class="btn btn--invisible" @click="toggleForm">Se Connecter</button>
            </div>
            <div class="dialog__action-elem dialog__action-elem--primary">
              <button class="btn btn--plain" @click="signup">S’inscrire</button>
            </div>
          </div>
        </form>

        <form v-if="showForgotPassword" @submit.prevent>
          <div v-if="!passwordResetSuccess">
            <h2 class="title p title--upp title--main">Réinitialisé le mot de passe</h2>

            <label for="email3">Email</label>
            <input
              v-model.trim="passwordForm.email"
              type="text"
              placeholder="you@email.com"
              id="email3"
            >

            <div class="dialog__action">
              <div class="dialog__action-elem dialog__action-elem--secondary">
                <button class="btn btn--invisible" @click="togglePasswordReset">Revenir</button>
              </div>
              <div class="dialog__action-elem dialog__action-elem--primary">
                <button class="btn btn--plain" @click="resetPassword">Envoyer</button>
              </div>
            </div>
          </div>
          <div v-else>
            <h2 class="title p title--upp title--main">Email envoyer !</h2>
            <p>Vérifiez vos emails pour réinitialisé le mot de passe.</p>
            <button @click="togglePasswordReset">Revenir</button>
          </div>
        </form>
        <transition name="fade">
          <div v-if="errorMsg !== ''" class="error-msg">
            <p>{{ errorMsg }}</p>
          </div>
        </transition>

        <transition name="fade">
          <div v-if="performingRequest" class="loading">
            <p>Chargement...</p>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import svgIcon from "@/components/svgIcon.vue";
const fb = require("../firebaseConfig.js");

export default {
  components: {
    svgIcon
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: ""
      },
      passwordForm: {
        email: ""
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ""
    };
  },
  methods: {
    toggleForm() {
      this.errorMsg = "";
      this.showLoginForm = !this.showLoginForm;
    },

    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true;
        this.showForgotPassword = false;
        this.passwordResetSuccess = false;
      } else {
        this.showLoginForm = false;
        this.showForgotPassword = true;
      }
    },

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
          this.performingRequest = false;
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },

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

    resetPassword() {
      this.performingRequest = true;

      fb.auth
        .sendPasswordResetEmail(this.passwordForm.email)
        .then(() => {
          this.performingRequest = false;
          this.passwordResetSuccess = true;
          this.passwordForm.email = "";
        })
        .catch(err => {
          console.log(err);
          this.performingRequest = false;
          this.errorMsg = err.message;
        });
    },

    // close Login form
    close() {
      this.$store.dispatch("userConnexion/login", false);
    }
  }
};
</script>