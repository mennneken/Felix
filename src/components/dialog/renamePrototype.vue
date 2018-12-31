<template>
  <div class="dialog" >
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Renommer le prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>
    <div class="dialog__content">
      <input
        type="text"
        v-model="prototype.name"
        placeholder="Nouveau Nom"
      >

      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button class="btn btn--outline">Annuler</button>
          <button class="btn btn--plain">Renommer</button>
        </div>
      </div>
    </div>
    <div class="dialog__footer">
      
    </div>
  </div>
</template>

<script>
import svgIcon from "@/components/svgIcon.vue";

import { mapState } from "vuex";

export default {
  components: {
    svgIcon
  },

  data() {
    return {
      prototype: {
        name: '',
      }
    }
  },
  
  methods: {
    closeDialog() {
      this.prototype.name = "";
      this.$emit('closeDialog');
    }
  },
  computed: mapState({
    prototype: state => state.dialogStore.dialog.data,
  })
};
</script>