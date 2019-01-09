<template>
  <section class="tools__tool">
    <h3 class="title title--upp h5">Espaces Avant &amp; Après</h3>

    <!-- TABS -->
    <div class="tools__tab">
      <button
        @click="titleTab = true"
        class="tools__tab-elem btn btn--tab"
        :class="{ 'btn--tab-active': titleTab}"
      >Titres</button>
      <button
        @click="titleTab = false"
        class="tools__tab-elem btn btn--tab"
        :class="{ 'btn--tab-active': !titleTab}"
      >Textes</button>
    </div>

    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5">Espace Avant</h4>
      
      <!-- TITLES -->
      <div v-show="titleTab">
        <input
          type="range"
          :min="rangeMin(titleSpace.before.unit)"
          :max="rangeMax(titleSpace.before.unit)"
          :step="rangeStep(titleSpace.before.unit)"
          v-model="titleSpace.before.value"
        >
        <input
          type="number"
          :min="rangeMin(titleSpace.before.unit)"
          :max="rangeMax(titleSpace.before.unit)"
          :step="rangeStep(titleSpace.before.unit)"
          v-model="titleSpace.before.value"
        >
        <select v-model="titleSpace.before.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ titleSpace.before.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>

      <!-- TEXTS -->
      <div v-show="!titleTab">
        <input
          type="range"
          :min="rangeMin(textSpace.before.unit)"
          :max="rangeMax(textSpace.before.unit)"
          :step="rangeStep(textSpace.before.unit)"
          v-model="textSpace.before.value"
        >
        <input
          type="number"
          :min="rangeMin(textSpace.before.unit)"
          :max="rangeMax(textSpace.before.unit)"
          :step="rangeStep(textSpace.before.unit)"
          v-model="textSpace.before.value"
        >
        <select v-model="textSpace.before.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ textSpace.before.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
    </div>

    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5">Espace Après</h4>
      
      <!-- TITLES -->
      <div v-show="titleTab">
        <input
          type="range"
          :min="rangeMin(titleSpace.after.unit)"
          :max="rangeMax(titleSpace.after.unit)"
          :step="rangeStep(titleSpace.after.unit)"
          v-model="titleSpace.after.value"
        >
        <input
          type="number"
          :min="rangeMin(titleSpace.after.unit)"
          :max="rangeMax(titleSpace.after.unit)"
          :step="rangeStep(titleSpace.after.unit)"
          v-model="titleSpace.after.value"
        >
        <select v-model="titleSpace.after.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ titleSpace.after.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>

      <!-- TEXTS -->
      <div v-show="!titleTab">
        <input
          type="range"
          :min="rangeMin(textSpace.after.unit)"
          :max="rangeMax(textSpace.after.unit)"
          :step="rangeStep(textSpace.after.unit)"
          v-model="textSpace.after.value"
        >
        <input
          type="number"
          :min="rangeMin(textSpace.after.unit)"
          :max="rangeMax(textSpace.after.unit)"
          :step="rangeStep(textSpace.after.unit)"
          v-model="textSpace.after.value"
        >
        <select v-model="textSpace.after.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ textSpace.after.value > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
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
      titleTab: true
    };
  },

  methods: {
    rangeMin(unit) {
      switch (unit) {
        case "em":
          return 0.5;
          break;

        case "rem":
          return 0.5;
          break;

        case "px":
          return 0;
          break;
      }
    },
    rangeMax(unit) {
      switch (unit) {
        case "em":
          return 1;
          break;

        case "rem":
          return 1;
          break;

        case "px":
          return 100;
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
    ...mapState({
      titleSpace: state =>
        state.prototypesStore.prototype.prototype.typography.format.titles
          .spaces,
      textSpace: state =>
        state.prototypesStore.prototype.prototype.typography.format.texts.spaces
    })
  }
};
</script>

<style>
</style>
