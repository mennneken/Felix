<template>
  <div class="dialog" >
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Dupliquer le prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--outline" @click="closeDialog()">Annuler</button>
          <button class="btn btn--plain">Dupliquer</button>
        </div>
      </div>
    </div>
    <div class="dialog__footer">
      
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
    data: state => state.dialogStore.dialog.data,
  })
}
</script>

<style lang="scss" scoped>

</style>
