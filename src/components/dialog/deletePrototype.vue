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
          <button class="btn btn--outline" @click="closeDialog()">Annuler</button>
          <button class="btn btn--plain">Supprimer</button>
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
    closeDialog() {
      this.$emit('closeDialog');
    }
  },
  
  computed: mapState({
    prototype: state => state.dialogStore.dialog.data,
  })
}
</script>

<style lang="scss" scoped>
.dialog__content {
  span {
    padding: .05em .25em .15em;
    background-color: lightgray;
    border-radius: .25em;
  }
}
</style>
