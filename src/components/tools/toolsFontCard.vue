<template>
  <section class="font-list__card card">
    <header>
      <div class="font-list__details">
        <h2 class="title title--alt p">{{ font.family || 'Nom de la typographie' }}</h2>
        <p class="title title--alt h5 font-list__variants">
        {{ `${font.variants.length} style${font.variants.length > 1 ? 's' : ''}` || 'Nombre de Style' }}</p>
      </div>

      <button class="font-list__action btn btn--icon" @click="addFont()">
        <svg-icon class="font-list__action" :name="'add'"></svg-icon>
      </button>
    </header>
    <div class="font-list__content">
      <p class="font-list__preview" :style="{fontFamily: font.family}">{{ textPreview.string }}</p>
    </div>
  </section>
</template>

<script>
// // Modules
// const WebFont = require('webfontloader');

// COMPONENTS
import svgIcon from "@/components/svgIcon";

export default {
  components: {
    svgIcon
  },

  props: {
    font: {
      type: Object
    },
    textPreview: {
      type: Object
    }
  },

  methods: {
    // add font to the state
    addFont() {
      this.$store.dispatch('prototypesStore/setFontPrincipal', this.font.family)
    }
  },

  // beforeMount() {
  // Load font
  //   WebFont.load({
  //     classes: false,
  //     google: {
  //       families: new Array(this.font.family),
  //       text: this.textPreview.letters
  //     }
  //   })
  // },
};
</script>