<template>
  <section class="tools__tool tools__tool--color-palette color-palette">
    <h3 class="title title--upp p">Ajuster la Palette</h3>

    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Hue, Saturation &amp; Lightness</h4>
      <div class="color-palette__adjust">
        <!-- HUE -->
        <div class="color-palette__adjust-elem">
          <input
            type="range"
            :value="main.h"
            min="0"
            max="360"
            step="1"
            name="hueRange"
            @change="updateColorsHue"
          >
          <input
            type="number"
            :value="Math.round(main.h)"
            min="0"
            max="360"
            step="1"
            name="hueRange"
            @change="updateColorsHue"
          >
          <span>deg</span>
        </div>

        <!-- SATURATION -->
        <div class="color-palette__adjust-elem">
          <input
            type="range"
            :value="Math.round(main.s)"
            min="0"
            max="100"
            step="1"
            name="saturationRange"
            @change="updateColorsSaturation"
          >
          <input
            type="number"
            :value="Math.round(main.s)"
            min="0"
            max="100"
            step="1"
            name="saturationRange"
            @change="updateColorsSaturation"
          >
          <span>%</span>
        </div>

        <!-- LIGHTNESS -->
        <div class="color-palette__adjust-elem">
          <input
            type="range"
            :value="Math.round(main.l)"
            min="0"
            max="100"
            step="1"
            name="lightnessRange"
            @change="updateColorsLightness"
          >
          <input
            type="number"
            :value="Math.round(main.l)"
            min="0"
            max="100"
            step="1"
            name="lightnessRange"
            @change="updateColorsLightness"
          >
          <span>%</span>
        </div>
      </div>
    </div>

    <!-- CONTRAST -->
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Contraste</h4>
      <div class="color-palette__adjust">
        <button>-</button>
        <span>Contraste</span>
        <button>+</button>
      </div>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon";

// VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    svgIcon
  },

  methods: {
    updateColorsHue(e) {
      let hueDifference = e.target.value - this.main.h;

      this.$store.commit("prototypesStore/setHue", {
        colorName: "main",
        h: this.main.h + hueDifference
      });
      this.$store.commit("prototypesStore/setHue", {
        colorName: "lightShade",
        h: this.lightShade.h + hueDifference
      });
      this.$store.commit("prototypesStore/setHue", {
        colorName: "lightAccent",
        h: this.lightAccent.h + hueDifference
      });
      this.$store.commit("prototypesStore/setHue", {
        colorName: "darkShade",
        h: this.darkShade.h + hueDifference
      });
      this.$store.commit("prototypesStore/setHue", {
        colorName: "darkAccent",
        h: this.darkAccent.h + hueDifference
      });
    },
    updateColorsSaturation(e) {
      let saturationDifference = e.target.value - this.main.s;

      this.$store.commit("prototypesStore/setSaturation", {
        colorName: "main",
        s: this.main.s + saturationDifference
      });
      this.$store.commit("prototypesStore/setSaturation", {
        colorName: "lightShade",
        s: this.lightShade.s + saturationDifference
      });
      this.$store.commit("prototypesStore/setSaturation", {
        colorName: "lightAccent",
        s: this.lightAccent.s + saturationDifference
      });
      this.$store.commit("prototypesStore/setSaturation", {
        colorName: "darkShade",
        s: this.darkShade.s + saturationDifference
      });
      this.$store.commit("prototypesStore/setSaturation", {
        colorName: "darkAccent",
        s: this.darkAccent.s + saturationDifference
      });
    },
    updateColorsLightness(e) {
      let lightnessDifference = e.target.value - this.main.l;

      this.$store.commit("prototypesStore/setLightness", {
        colorName: "main",
        l: this.main.l + lightnessDifference
      });
      this.$store.commit("prototypesStore/setLightness", {
        colorName: "lightShade",
        l: this.lightShade.l + lightnessDifference
      });
      this.$store.commit("prototypesStore/setLightness", {
        colorName: "lightAccent",
        l: this.lightAccent.l + lightnessDifference
      });
      this.$store.commit("prototypesStore/setLightness", {
        colorName: "darkShade",
        l: this.darkShade.l + lightnessDifference
      });
      this.$store.commit("prototypesStore/setLightness", {
        colorName: "darkAccent",
        l: this.darkAccent.l + lightnessDifference
      });
    }
  },

  computed: {
    // main: {
    //   get() {
    //     return this.$store.state.prototypesStore.prototype.prototype.color
    //       .colors.main;
    //   },
    //   set(value) {
    //     console.log("value :", value);
    //     this.store.commit("prototypesStore/setSaturation", main, value);
    //   }
    // },

    ...mapState({
      colors: state => state.prototypesStore.prototype.prototype.color.colors,
      main: state =>
        state.prototypesStore.prototype.prototype.color.colors.main,
      lightShade: state =>
        state.prototypesStore.prototype.prototype.color.colors.lightShade,
      lightAccent: state =>
        state.prototypesStore.prototype.prototype.color.colors.lightAccent,
      darkShade: state =>
        state.prototypesStore.prototype.prototype.color.colors.darkShade,
      darkAccent: state =>
        state.prototypesStore.prototype.prototype.color.colors.darkAccent
    })
  }
};
</script>
