<template>
  <section>
    <h3 class="title title--upp h5">Format de ligne</h3>

    <div class="action">
      <button @click="firstTab = true" class="btn" :class="{ active: firstTab}">Titres</button>
      <button @click="firstTab = false" class="btn" :class="{ active: !firstTab}">Textes</button>
    </div>


    <!-- Titles -->
    <div v-show="firstTab">
      <div>
        <h4 class="title title--upp title--alt h5">Longueur de ligne</h4>
        <input
          type="range"
          :min="rangeMin(title.line.length.unit)"
          :max="rangeMax(title.line.length.unit)"
          :step="rangeStep(title.line.length.unit)"
          v-model="title.line.length.value"
        >
        <input
          type="number"
          :min="rangeMin(title.line.length.unit)"
          :max="rangeMax(title.line.length.unit)"
          :step="rangeStep(title.line.length.unit)"
          v-model.number="title.line.length.value"
        >
        <select v-model="title.line.length.unit">
          <optgroup label="Relative">
            <option value="em">Em</option>
            <option value="ch" selected>{{ title.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="rem">Rem</option>
            <option value="px">{{ title.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
      <div>
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <input type="range" min="1.2" max="1.45" step="0.01" v-model="title.line.height">
        <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="title.line.height">
      </div>
    </div>

    <!-- Texts -->
    <div v-show="!firstTab">
      <div>
        <h4 class="title title--upp title--alt h5">Longueur de ligne</h4>

        <!-- Set the value  of the line width -->
        <input
          type="range"
          :min="rangeMin(text.line.length.unit)"
          :max="rangeMax(text.line.length.unit)"
          :step="rangeStep(text.line.length.unit)"
          v-model="text.line.length.value"
        >
        <input
          type="number"
          :min="rangeMin(text.line.length.unit)"
          :max="rangeMax(text.line.length.unit)"
          :step="rangeStep(text.line.length.unit)"
          v-model.number="text.line.length.value"
        >
        <!-- Set the unit for the line width value -->
        <select v-model="text.line.length.unit">
          <optgroup label="Relative">
            <option value="em">Em</option>
            <option value="ch" selected>{{ text.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="rem">Rem</option>
            <option value="px">{{ text.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
      <div>
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <input type="range" min="1.2" max="1.45" step="0.05" v-model="text.line.height">
        <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="text.line.height">
      </div>
    </div>
  </section>
</template>

<script>

// VUEX
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // Flag for toggling the "tabs".
      firstTab: true
    };
  },

  computed: mapState({
    title:  state => state.prototypesStore.prototype.prototype.typography.format.titles,
    text:   state => state.prototypesStore.prototype.prototype.typography.format.texts,
  }),

  methods: {
    rangeMin(unit) {
      switch (unit) {
        case "em":
          return 10;
          break;

        case "rem":
          return 10;
          break;

        case "px":
          return 400;
          break;

        case "ch":
          return 45;
          break;
      }
    },
    rangeMax(unit) {
      switch (unit) {
        case "em":
          return 50;
          break;

        case "rem":
          return 50;
          break;

        case "px":
          return 1000;
          break;

        case "ch":
          return 90;
          break;
      }
    },
    rangeStep(unit) {
      switch (unit) {
        case "em":
          return 0.1;
          break;

        case "rem":
          return 0.1;
          break;

        case "px":
          return 5;
          break;

        case "ch":
          return 1;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.action {
  display: flex;
}

.btn {
  background-color: transparent;
  box-sizing: border-box;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px 0;
  border-bottom: 3px solid transparent;
  &.active {
    color: orange;
    border-bottom: 3px solid orange;

    &:active,
    &:hover,
    &:focus {
      outline: none;
      outline-color: none;
      outline-width: 0;
    }
  }
}

*:focus {
  outline: none;
}
</style>
