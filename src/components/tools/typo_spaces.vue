<template>
  <section>
    <h3 class="title title--upp h5">Espaces Avant &amp; Après</h3>

    <!-- TABS -->
    <button @click="firstTab = true" class="btn" :class="{ active: firstTab}">Titres</button>
    <button @click="firstTab = false" class="btn" :class="{ active: !firstTab}">Textes</button>
    
    <!-- TITLES -->
    <div v-show="firstTab">
      <div>
        <h4 class="title title--upp title--alt h5">Espace Avant</h4>
        <input type="range" :min="rangeMin(title.spaces.unit)" :max="rangeMax(title.spaces.unit)" :step="rangeStep(title.spaces.unit)" v-model="title.spaces.before">
        <input type="number" :min="rangeMin(title.spaces.unit)" :max="rangeMax(title.spaces.unit)" :step="rangeStep(title.spaces.unit)" v-model="title.spaces.before">
        <select v-model="title.spaces.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ title.spaces.before > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
      <div>
        <h4 class="title title--upp title--alt h5">Espace Après</h4>
        <input type="range" :min="rangeMin(title.spaces.unit)" :max="rangeMax(title.spaces.unit)" :step="rangeStep(title.spaces.unit)" v-model="title.spaces.after">
        <input type="number" :min="rangeMin(title.spaces.unit)" :max="rangeMax(title.spaces.unit)" :step="rangeStep(title.spaces.unit)" v-model="title.spaces.after">
        <select v-model="title.spaces.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ title.spaces.after > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
    </div>
    
    <!-- TEXTS -->
    <div v-show="!firstTab">
      <div>
        <h4 class="title title--upp title--alt h5">Espace Avant</h4>
        <input type="range" :min="rangeMin(text.spaces.unit)" :max="rangeMax(text.spaces.unit)" :step="rangeStep(text.spaces.unit)" v-model="text.spaces.before">
        <input type="number" :min="rangeMin(text.spaces.unit)" :max="rangeMax(text.spaces.unit)" :step="rangeStep(text.spaces.unit)" v-model="text.spaces.before">
        <select v-model="text.spaces.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ text.spaces.before > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
     
      <div>
        <h4 class="title title--upp title--alt h5">Espace Après</h4>
        <input type="range" :min="rangeMin(text.spaces.unit)" :max="rangeMax(text.spaces.unit)" :step="rangeStep(text.spaces.unit)" v-model="text.spaces.after">
        <input type="number" :min="rangeMin(text.spaces.unit)" :max="rangeMax(text.spaces.unit)" :step="rangeStep(text.spaces.unit)" v-model="text.spaces.after">
        <select v-model="text.spaces.unit">
          <optgroup label="Relative">
            <option value="em" selected>Em</option>
            <option value="rem">Rem</option>
          </optgroup>
          <optgroup label="Fixe">
            <option value="px">{{ text.spaces.after > 1 ? 'Pixels' : 'Pixel'}}</option>
          </optgroup>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstTab: true,
      title: {
        spaces: {
          before: '0.75',
          after: '0.75',
          unit: 'em'
        }
      },
      text: {
        spaces: {
          before: '0.75',
          after: '0.75',
          unit: 'em'
        }
      }
    }
  },

  methods: {
    rangeMin(unit) {
      switch (unit) {
        case 'em':
          return 0.5
          break;

        case 'rem':
          return 0.5
          break;

        case 'px':
          return 0
          break;
      }
    },
    rangeMax(unit) {
      switch (unit) {
        case 'em':
          return 1
          break;

        case 'rem':
          return 1
          break;

        case 'px':
          return 100
          break;
      }
    },
    rangeStep(unit) {
      switch (unit) {
        case 'em':
          return 0.01
          break;

        case 'rem':
          return 0.01
          break;

        case 'px':
          return 1
          break;
      }
    }
  }

};
</script>

<style>
</style>
