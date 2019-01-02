<template>
  <div id="dashboard">
    <f-nav></f-nav>

    <f-dialog v-show="dialog.enable" :dialog-type="dialog.type" @closeDialog="closeDialog()"></f-dialog>

    <div class="container">
      <ul class="not-a-list dashboard__list">
        <!-- <li v-if="userConnected === null || userIsAnonyme === true">
          <span>{{ examples.fonts.font_1.name }}</span>
          <span>{{ examples.fonts.font_2.name }}</span>
          <span>{{ examples.name }}</span>
        </li> -->

        <prototype-card
          v-if="userConnected !== null"
          v-for="prototype in prototypes"
          :key="prototype.id"
          :prototype="prototype"
          @callDialog="enableDialog($event)"
        ></prototype-card>
      </ul>

      <button
        class="btn btn--main-action"
        v-show="!dialog.enable"
        @click="callDialog('new-prototype')"
      >
        <svg-icon :name="'add_sign'"></svg-icon>
      </button>
    </div>
  </div>
</template>

<script>

// COMPONENTS
import fNav from "@/components/navigation";
import svgIcon from "@/components/svgIcon.vue";
import prototypeCard from "@/components/prototypeCard.vue";
import fDialog from "@/components/dialog/dialog.vue";

// STORE
import { mapState } from "vuex";

// FIREBASE
const fb = require("../firebaseConfig.js");

export default {
  components: {
    fNav,
    svgIcon,
    prototypeCard,
    fDialog
  },

  data() {
    return {
      // examples: exampleProto,
      prototype: {
        name: ""
      }
    };
  },

  methods: {
    // Create a new prototype
    createPrototype() {
      this.$store.dispatch("prototypesStore/createNewPrototype", {
        uid: this.userUid,
        name: this.prototype.name
      });
    },

    goPrototyping() {
      this.$router.push({
        name: "Tool",
        params: { prototypeName: this.prototype.name }
      });
    },

    callDialog(dialogType, data) {
      this.$store.dispatch("dialogStore/callDialog", { type: dialogType , data: data });
    },
  },

  computed: mapState({
    userConnexion: state => state.userConnexion,
    showLogin: state => state.userConnexion.wantToLogin,
    userConnected: state => state.userConnexion.currentUser,
    userUid: state => state.userConnexion.currentUser.uid,
    userIsAnonyme: state => state.userConnexion.currentUser.isAnonymous,
    prototypes: state => state.prototypesStore.userPrototypes,
    dialog: state => state.dialogStore.dialog,
  })

  // updated() {
  //   this.$store.dispatch("prototypesStore/getPrototypes", {
  //     uid: this.userUid
  //   });
  // }
};
</script>
