<template>
  <section class="tool__elem color-palette">
    <h3 class="title title--upp p">Palette de couleur</h3>
    <div class="tool__field color-palette__palette">
      <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.lightShade}"></div>
      <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.lightAccent}"></div>
      <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.main}"></div>
      <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.darkAccent}"></div>
      <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.darkShade}"></div>
    </div>

    <div class="tool__field color-palette__harmony">
      <select @change="updateHarmony">
        <option
          v-for="(harmony, id) in colorHarmonies"
          :key="id"
          :value="harmony.value"
          :selected="harmony.value === actualHarmony"
        >{{ harmony.name }}</option>
      </select>
    </div>
    <div class="tool__field color-palette__generate">
      <button class="btn btn--icon-right" @click="regenerateRandomColors()">Générer
        <svg-icon :name="'regenerate'"></svg-icon>
      </button>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon";

// MODULES
import chroma from "chroma-js";

// VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    svgIcon
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      colors: state => state.prototypesStore.prototype.color.colors,
      actualHarmony: state => state.prototypesStore.prototype.color.harmony,
      colorHarmonies: state => state.toolsStore.colorHarmonies
    }),

    ...mapGetters({
      colorHSLA: "prototypesStore/getColorHSLA"
    })
  },

  methods: {
    regenerateRandomColors() {
      this.$store.dispatch("prototypesStore/generateSchemeColor");
    },

    updateHarmony(e) {
      this.$store.commit("prototypesStore/updateColorHarmony", e.target.value);
      this.$store.dispatch("prototypesStore/generateSchemeColor");
    }
  }
};
</script>

