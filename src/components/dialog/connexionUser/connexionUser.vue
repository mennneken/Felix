<template>
  <components
    :is="currentTabConnexion"
    @switchConnexion="switchConnexionUserTo($event)"
    @closeDialog="closeDialog()"
  ></components>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";
import loginUser from "@/components/dialog/connexionUser/loginUser.vue";
import resetPasswordUser from "@/components/dialog/connexionUser/resetPasswordUser.vue";
import signUpUser from "@/components/dialog/connexionUser/signUpUser.vue";

// FIREBASE
const fb = require("@/firebaseConfig.js");

export default {
  components: {
    svgIcon,
    loginUser,
    resetPasswordUser,
    signUpUser
  },

  data() {
    return {
      currentTabConnexion: "login-user"
    };
  },

  methods: {
    // Close The Dialog
    closeDialog() {
      this.$emit("closeDialog");
    },

    // switch between the differents tabs of connexionUser
    switchConnexionUserTo(destination) {
      this.currentTabConnexion = destination;
    }
  }
};
</script>
