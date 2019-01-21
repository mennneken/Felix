<template>
  <section class="tools__tool tools__tool--font-comparator font-comparator">
    <h3 class="title title--upp p">Comparaison de Fonts</h3>
    <div class="tools__elem">
      <input
        class="font-comparator__input"
        type="text"
        :placeholder="letterBackup"
        v-model.trim="letter"
        maxlength="1"
      >
      <div class="font-comparator__letters">
        <span
          class="font-comparator__letters-elem"
          :class="{ 'font-comparator__letters-elem--overlay': positionOverlay }"
          :style="{
            fontFamily: this.fontTitle.family,
            fontStyle: this.fontTitle.style,
            fontWeight: this.fontTitle.weight
          }"
        >{{ letter || letterBackup }}</span>
        <span
          class="font-comparator__letters-elem"
          :class="{ 'font-comparator__letters-elem--overlay': positionOverlay }"
          :style="{
            fontFamily: this.fontText.family,
            fontStyle: this.fontText.style,
            fontWeight: this.fontText.weight
          }"
        >{{ letter || letterBackup }}</span>
      </div>
    </div>

    <div class="tools__tab">
      <button
        @click="setOverlay(false)"
        class="tools__tab-elem btn btn--tab"
        :class="{ 'btn--tab-active': !positionOverlay}"
      >Côte à côte</button>
      <button
        @click="setOverlay(true)"
        class="tools__tab-elem btn btn--tab"
        :class="{ 'btn--tab-active': positionOverlay}"
      >Superposition</button>
    </div>
  </section>
</template>

<script>
// VUEX
import { mapState } from "vuex";

export default {
  data() {
    return {
      positionOverlay: false,
      letter: "x",
      letterBackup: "x",
      regx: new RegExp("[a-zA-Z0-9]")
    };
  },

  methods: {
    setOverlay(flag) {
      if (flag) {
        this.positionOverlay = true;
      } else {
        this.positionOverlay = false;
      }
    }
  },

  computed: {
    ...mapState({
      fontTitle: state =>
        state.prototypesStore.prototype.typography.fontChoices.fontTitle,
      fontText: state =>
        state.prototypesStore.prototype.typography.fontChoices.fontText
    })
  }
};
</script>