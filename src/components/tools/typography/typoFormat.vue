<template>
  <section class="tool__elem typo-format" v-if="$mq === 'mobile'">
    <h3 class="title title--upp p">Format de ligne</h3>

    <div class="tool__tabs">
      <button
        @click="titleTab = true"
        class="btn btn--tab"
        :class="{ 'btn--tab-active': titleTab}"
      >Titres</button>
      <button
        @click="titleTab = false"
        class="btn btn--tab"
        :class="{ 'btn--tab-active': !titleTab}"
      >Textes</button>
    </div>

    <div class="tool__field-groups" v-if="titleTab">
      <!-- Titles -->
      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Longueur de ligne</h4>
        <div class="tool__field-action">
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
              <option value="rem">Rem</option>
              <option
                value="ch"
                selected
              >{{ title.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
            </optgroup>
            <optgroup label="Fixe">
              <option value="px">{{ title.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <div class="tool__field-action">
          <input type="range" min=".9" max="1.45" step="0.01" v-model="title.line.height">
          <input type="number" min=".9" max="1.45" step="0.01" v-model.number="title.line.height">
        </div>
      </div>
    </div>

    <div class="tool__field-groups" v-else>
      <!-- Texts -->
      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Longueur de ligne de Textes</h4>
        <!-- Set the value  of the line width -->
        <div class="tool__field-action">
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
              <option value="rem">Rem</option>
              <option
                value="ch"
                selected
              >{{ text.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
            </optgroup>
            <optgroup label="Fixe">
              <option value="px">{{ text.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <div class="tool__field-action">
          <input type="range" min="1.2" max="1.45" step="0.05" v-model="text.line.height">
          <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="text.line.height">
        </div>
      </div>
    </div>
  </section>

  <section class="tool__elem typo-format" v-else>
    <h3 class="title title--upp p">Format de ligne</h3>

    <div class="tool__field-groups">
      <!-- Titles -->
      <h4 class="title title--upp title--alt p">Titres</h4>
      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Longueur de ligne</h4>
        <div class="tool__field-action">
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
              <option value="rem">Rem</option>
              <option
                value="ch"
                selected
              >{{ title.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
            </optgroup>
            <optgroup label="Fixe">
              <option value="px">{{ title.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <div class="tool__field-action">
          <input type="range" min=".9" max="1.45" step="0.01" v-model="title.line.height">
          <input type="number" min=".9" max="1.45" step="0.01" v-model.number="title.line.height">
        </div>
      </div>
    </div>

    <div class="tool__field-groups">
      <h4 class="title title--upp title--alt p">Textes</h4>
      <!-- Texts -->
      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Longueur de ligne de Textes</h4>
        <!-- Set the value  of the line width -->
        <div class="tool__field-action">
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
              <option value="rem">Rem</option>
              <option
                value="ch"
                selected
              >{{ text.line.length.value > 1 ? 'Characters' : 'Character'}}</option>
            </optgroup>
            <optgroup label="Fixe">
              <option value="px">{{ text.line.length.value > 1 ? 'Pixels' : 'Pixel'}}</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="tool__field">
        <h4 class="title title--upp title--alt h5">Hauteur de ligne</h4>
        <div class="tool__field-action">
          <input type="range" min="1.2" max="1.45" step="0.05" v-model="text.line.height">
          <input type="number" min="1.2" max="1.45" step="0.01" v-model.number="text.line.height">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// VUEX
import { mapState } from "vuex";

export default {
  data() {
    return {
      // Flag for toggling the "tabs".
      titleTab: true
    };
  },

  computed: mapState({
    title: state => state.prototypesStore.prototype.typography.format.titles,
    text: state => state.prototypesStore.prototype.typography.format.texts
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