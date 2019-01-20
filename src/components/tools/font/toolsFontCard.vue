<template>
  <section class="font-list__card card" @click="callFontDetails(font)">
    <header>
      <div class="font-list__details">
        <h2 class="title title--alt h4">{{ font.family || 'Nom de la typographie' }}</h2>
        <p class="title h5 font-list__variants">
        {{ `${font.variants.length} variante${font.variants.length > 1 ? 's' : ''}` || 'Nombre de Style' }}</p>
      </div>

      <button class="font-list__action btn btn--icon" @click.stop="addFont()">
        <svg-icon class="font-list__action" :name="'add'"></svg-icon>
      </button>
    </header>
    <div class="font-list__content">
      <p class="font-list__preview" :style="{fontFamily: font.family}">{{ textPreview }}</p>
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
      type: String
    }
  },

  methods: {
    callFontDetails(font) {
      this.$store.dispatch('toolsStore/changefontInDetails', font)
      this.$store.dispatch('toolsStore/callPreviews', {
        toolsDisplay: 'fontList',
        previewDisplay: 'fontDetails'
      })
    },

    // add font to the state
    addFont() {
      // set new font
      this.$store.dispatch('prototypesStore/setFont', this.font);
      this.$store.commit('toolsStore/setToolsDisplay', 'typo');
      this.$store.commit('toolsStore/setPreviewDisplay', 'preview');
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