<template>
  <div class="dialog dialog--alert">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Supprimer le Prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <p>Êtes-vous sûr de supprimer le prototype <span>{{ prototype.name }}</span> ?</p>
    </div>
    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--invisible" @click="closeDialog()">Annuler</button>
          <button class="btn btn--plain" @click="deletePrototype()">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";

// VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon
  },
  
  methods: {
    // Close the dialog
    closeDialog() {
      this.$emit('closeDialog');
    },

    // Delete the selected prototype
    deletePrototype() {
      this.$store.dispatch('prototypesStore/deletePrototype', {
        uid: this.uid,
        id: this.prototype.id
      }) 
    },
  },
  
  computed: mapState({
    uid: state => state.userConnexion.currentUser.uid,
    prototype: state => state.dialogStore.dialog.data,
  })
}
</script>
