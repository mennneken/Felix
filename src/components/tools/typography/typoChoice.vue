<template>
  <section class="tools__tool tools__tool--typo">
    <h3 class="title title--upp h5">Choix typographique &amp; Style</h3>
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Titres</h4>
      <!-- Set font 1 -->
      <button class="btn btn--card" @click="callFontList(1)" v-if="!font_1.name">
        <span>Ajouter une font</span>
        <svg-icon :name="'add'"></svg-icon>
      </button>

      <button class="btn btn--card" @click="callFontList(1)" v-else>
        {{ font_1.name }}
      </button>
      
      <!-- Set Style for font 1 -->
      <select>
        <option value=""></option>
      </select>
      
      <!-- Set Weight for font 1 -->
      <select>
        <option value=""></option>
      </select>

    </div>
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Textes</h4>
      <!-- Set font 2 -->
      <button class="btn btn--card" @click="callFontList(2)" v-if="!font_2.name">
        <span>Ajouter une font</span>
        <svg-icon :name="'add'"></svg-icon>
      </button>

      <button class="btn btn--card" @click="callFontList(2)" v-else>
        {{ font_2.name }}
      </button>
      <!-- Set Style for font 2 -->
      <select>
        <option value=""></option>
      </select>
      <!-- Set Weight for font 2 -->
      <select>
        <option value=""></option>
      </select>
    </div>
  </section>
</template>

<script>
// COMPONENTS 
import svgIcon from "@/components/svgIcon";

// VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon
  },

  methods: {
    callFontList(target) {
      this.$store.dispatch('toolsStore/changeFontListTarget', `font_${target}`);
      this.$store.dispatch('toolsStore/changeFontListEnable', true);
    }
  },

  computed: {
    ...mapState ({
      font_1: state => state.prototypesStore.prototype.prototype.typography.fontChoices.font_1,
      font_2:  state => state.prototypesStore.prototype.prototype.typography.fontChoices.font_2,
    })
  }
};
</script>
