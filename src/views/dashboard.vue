<template>
  <div id="dashboard">
    <f-nav></f-nav>

    <f-dialog v-show="dialog.enable" :dialog-type="dialog.type" @closeDialog="closeDialog()"></f-dialog>

    <div class="container">
      <ul class="not-a-list dashboard__list" v-if="userConnected !== null">
        <!-- <li v-if="userConnected === null || userIsAnonyme === true">
          <span>{{ examples.fonts.font_1.name }}</span>
          <span>{{ examples.fonts.font_2.name }}</span>
          <span>{{ examples.name }}</span>
        </li>-->
        <prototype-card
          v-for="prototype in prototypesByDate"
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
import svgIcon from "@/components/svgIcon.vue";
import prototypeCard from "@/components/prototypeCard.vue";
import fDialog from "@/components/dialog/dialog.vue";
import fNav from "@/components/navigation";

// STORE
import { mapState, mapGetters } from "vuex";

// FIREBASE
const fb = require("../firebaseConfig.js");

export default {
  components: {
    svgIcon,
    prototypeCard,
    fDialog,
    fNav
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
    goPrototyping() {
      this.$router.push({
        name: "Tool",
        params: { prototypeName: this.prototype.name }
      });
    },

    callDialog(dialogType, data) {
      this.$store.dispatch("dialogStore/callDialog", {
        type: dialogType,
        data: data
      });
    }
  },

  computed: {
    ...mapGetters({
      prototypesByDate: "prototypesStore/sortPrototypesByDate"
    }),
    ...mapState({
      showLogin: state => state.userConnexion.wantToLogin,
      userConnected: state => state.userConnexion.currentUser,
      userUid: state => state.userConnexion.currentUser.uid,
      userIsAnonyme: state => state.userConnexion.currentUser.isAnonymous,
      prototypes: state => state.prototypesStore.prototypesList,
      dialog: state => state.dialogStore.dialog
    })
  }

  // updated() {
  //   this.$store.dispatch("prototypesStore/getPrototypes", {
  //     uid: this.userUid
  //   });
  // }
};
</script>
