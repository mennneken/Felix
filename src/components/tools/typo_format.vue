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
          :min="rangeMin(titleLineWidth.unit)"
          :max="rangeMax(titleLineWidth.unit)"
          :step="rangeStep(titleLineWidth.unit)"
          v-model="titleLineWidth.value"
        >
        <input
          type="number"
          :min="rangeMin(titleLineWidth.unit)"
          :max="rangeMax(titleLineWidth.unit)"
          :step="rangeStep(titleLineWidth.unit)"
          v-model.number="titleLineWidth.value"
        >
        <select v-model="titleLineWidth.unit">
          <optgroup label="Relative">
            <option value="em">Em</option>
            <option value="ch" selected>{{ titleLineWidth.value > 1 ? 'Characters' : 'Character'}}</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="rem">Rem</option>
            <option value="px">{{ titleLineWidth.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
      <div>
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <input type="range" min="1.2" max="1.45" step="0.01" v-model="titleLineHeight">
        <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="titleLineHeight">
      </div>
    </div>

    <!-- Texts -->
    <div v-show="!firstTab">
      <div>
        <h4 class="title title--upp title--alt h5">Longueur de ligne</h4>

        <!-- Set the value  of the line width -->
        <input
          type="range"
          :min="rangeMin(textLineWidth.unit)"
          :max="rangeMax(textLineWidth.unit)"
          :step="rangeStep(textLineWidth.unit)"
          v-model="textLineWidth.value"
        >
        <input
          type="number"
          :min="rangeMin(textLineWidth.unit)"
          :max="rangeMax(textLineWidth.unit)"
          :step="rangeStep(textLineWidth.unit)"
          v-model.number="textLineWidth.value"
        >
        <!-- Set the unit for the line width value -->
        <select v-model="textLineWidth.unit">
          <optgroup label="Relative">
            <option value="em">Em</option>
            <option value="ch" selected>{{ textLineWidth.value > 1 ? 'Characters' : 'Character'}}</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="rem">Rem</option>
            <option value="px">{{ textLineWidth.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
      <div>
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <input type="range" min="1.2" max="1.45" step="0.05" v-model="textLineHeight">
        <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="textLineHeight">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Flag for toggling the "tabs".
      firstTab: true
    };
  },

  computed: {
    titleLineWidth: {
      get() {
        return this.$store.state.protoParams.title.linewidth;
      },
      set() {}
    },
    titleLineHeight: {
      get() {
        return this.$store.state.protoParams.text.lineheight;
      },
      set() {}
    },
    textLineWidth: {
      get() {
        return this.$store.state.protoParams.title.linewidth;
      },
      set() {}
    },
    textLineHeight: {
      get() {
        return this.$store.state.protoParams.text.lineheight;
      },
      set() {}
    }
  },

  methods: {
    rangeMin(unit) {
      switch (unit) {
        case "em":
          return 5;
          break;

        case "rem":
          return 5;
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
