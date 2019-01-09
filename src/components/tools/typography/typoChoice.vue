<template>
  <section class="tools__tool tools__tool--typo">
    <h3 class="title title--upp h5">Choix typographique &amp; Style</h3>
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Titres</h4>
      <!-- Set font 1 -->
      <button class="btn btn--card">
        <svg-icon :name="'add'"></svg-icon>
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
      <button class="btn btn--card">Ajouter une font</button>
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
import svgIcon from "@/components/svgIcon";

// VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon
  },

  computed: {
    ...mapState ({
      titleSpace: state => state.prototypesStore.prototype.prototype.typography.format.titles.spaces,
      textSpace:  state => state.prototypesStore.prototype.prototype.typography.format.texts.spaces,
    })
  }
};
</script>

<style>
</style>
