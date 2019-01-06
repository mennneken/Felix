<template>
  <section>
    <h3 class="title title--upp h5">Taille Modulaire</h3>
    <div>
      <h4 class="title title--upp title--alt h5">Taille de Base</h4>
      <input
        type="range"
        :min="rangeMin(fontSize.base.unit)"
        :max="rangeMax(fontSize.base.unit)"
        :step="rangeStep(fontSize.base.unit)"
        v-model="fontSize.base.value"
      >
      <input
        type="number"
        :min="rangeMin(fontSize.base.unit)"
        :max="rangeMax(fontSize.base.unit)"
        :step="rangeStep(fontSize.base.unit)"
        v-model="fontSize.base.value"
      >
      <select v-model="fontSize.base.unit">
        <optgroup label="Relative">
          <option value="em">Em</option>
          <option value="rem">Rem</option>
        </optgroup>
        <optgroup label="Fixe">
          <option value="px" selected>{{ fontSize.base.value > 1 ? 'Pixels' : 'Pixel'}}</option>
        </optgroup>
      </select>
    </div>
    <div>
      <h4 class="title title--upp title--alt h5">Ratio de Multiplication</h4>
      <select v-model="fontSize.ratio">
        <option value="1.067">1.067</option>
        <option value="1.125">1.125</option>
        <option value="1.2">1.2</option>
        <option value="1.25" selected>1.25</option>
        <option value="1.333">1.333</option>
        <option value="1.414">1.414</option>
        <option value="1.500">1.500</option>
        <option value="1.618">1.618</option>
        <option value="1.778">1.778</option>
        <option value="1.875">1.875</option>
      </select>
    </div>
  </section>
</template>

<script>

// VUEX
import { mapState } from "vuex";

export default {
  methods: {
    rangeMin(unit) {
      switch (unit) {
        case "em":
          return 0.94;
          break;

        case "rem":
          return 0.94;
          break;

        case "px":
          return 15;
          break;
      }
    },
    rangeMax(unit) {
      switch (unit) {
        case "em":
          return 1.6;
          break;

        case "rem":
          return 1.6;
          break;

        case "px":
          return 25;
          break;
      }
    },
    rangeStep(unit) {
      switch (unit) {
        case "em":
          return 0.01;
          break;

        case "rem":
          return 0.01;
          break;

        case "px":
          return 1;
          break;
      }
    }
  },

  computed: {
    ...mapState ({
      fontSize: state => state.prototypesStore.prototype.prototype.typography.format.size,
    })
  }
};
</script>

<style>
</style>
