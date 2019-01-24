<template>
  <div class="dialog">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Exporter le prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <a href="./demo.zip" download>Télécharger</a>
    </div>
    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--outline" @click="closeDialog()">Fermer</button>
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
      this.$emit("closeDialog");
    }
  },

  computed: mapState({
    prototype: state => state.dialogStore.dialog.data
  })
};
</script>

<style lang="scss" scoped>
.dialog__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

a[download] {
  margin-top: 30px;
}
</style>

