<template>
  <div class="dialog">
    <div class="dialog__header">
      <h1 class="title p title--upp title--alt dialog__title">Partager le prototype</h1>
      <button @click="closeDialog()" class="dialog__close btn btn--icon">
        <svg-icon :name="'close'"></svg-icon>
      </button>
    </div>

    <div class="dialog__content" v-show="messageEnable === false">
      <label for="email">Partager le prototype par email:</label>
      <input
        :invalid="email"
        v-model.trim="email"
        type="email"
        placeholder="gigibesson@felix.com"
        id="email"
      >
    </div>

    <div class="dialog__content" v-show="messageEnable === true">
      <p>Le prototype a bien été partager avec {{email}}</p>
    </div>

    <div class="dialog__footer">
      <div class="dialog__action">
        <div class="dialog__action-elem dialog__action-elem--primary">
          <button
            class="btn btn--outline"
            @click="closeDialog()"
          >{{messageEnable ? 'Fermer' : 'Annuler'}}</button>
          <button
            v-show="!messageEnable"
            class="btn btn--plain"
            :class="{'btn--loading': loading}"
            @click="share()"
            :disabled="loading"
          >{{'Partager'}}</button>
        </div>
      </div>
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
      email: "",
      messageEnable: false,
      loading: false
    };
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    share() {
      let regx = new RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      if (regx.test(this.email)) {
        this.loading = true;
        setTimeout(() => {
          this.messageEnable = true;
          this.loading = false;
        }, 1000);

        setTimeout(() => {}, 10000);
      }
    }
  },
  computed: mapState({
    data: state => state.dialogStore.dialog.data
  })
};
</script>

