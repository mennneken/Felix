<template>
  <connexion-user v-if="dialogType === 'connexion-user'" @closeDialog="closeDialog()"></connexion-user>

  <new-prototype v-else-if="dialogType === 'new-prototype'" @closeDialog="closeDialog()"></new-prototype>

  <rename-prototype v-else-if="dialogType === 'rename-prototype'" @closeDialog="closeDialog()"></rename-prototype>

  <duplicate-prototype
    v-else-if="dialogType === 'duplicate-prototype'"
    @closeDialog="closeDialog()"
  ></duplicate-prototype>

  <share-prototype v-else-if="dialogType === 'share-prototype'" @closeDialog="closeDialog()"></share-prototype>

  <export-prototype v-else-if="dialogType === 'export-prototype'" @closeDialog="closeDialog()"></export-prototype>

  <delete-prototype v-else-if="dialogType === 'delete-prototype'" @closeDialog="closeDialog()"></delete-prototype>

  <div class="dialog dialog--default" v-else>
    <h1>Oups :/</h1>
    <button @click="closeDialog()" class="dialog__close btn btn--icon">
      <svg-icon :name="'close'"></svg-icon>
    </button>
  </div>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";
import connexionUser from "@/components/dialog/connexionUser/connexionUser.vue";
import newPrototype from "@/components/dialog/newPrototype.vue";
import renamePrototype from "@/components/dialog/renamePrototype.vue";
import duplicatePrototype from "@/components/dialog/duplicatePrototype.vue";
import sharePrototype from "@/components/dialog/sharePrototype.vue";
import exportPrototype from "@/components/dialog/exportPrototype.vue";
import deletePrototype from "@/components/dialog/deletePrototype.vue";


// VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon,
    connexionUser,
    newPrototype,
    renamePrototype,
    duplicatePrototype,
    sharePrototype,
    exportPrototype,
    deletePrototype
  },
  props: {
    dialogType: {
      default: "none",
      type: String
    }
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("dialogStore/closeDialog");
    }
  },
  computed: mapState({
    dialog: state => state.dialogStore.dialog
  })
};
</script>

<style lang="scss" scoped>
.dialog--default {
  overflow: hidden;
  & h1 {
    text-align: center;
    font-size: 5em;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    transform: rotateZ(10deg) scale(1.5);
  }
}
</style>
