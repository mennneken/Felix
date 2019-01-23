<template>
  <section class="font-list__card card">
    <header>
      <div class="font-list__details" @click="callFontDetails(font)">
        <h2 class="title title--alt h4">{{ font.family || 'Nom de la typographie' }}</h2>
        <p
          class="title h5 font-list__variants"
        >{{ `${font.variants.length} variante${font.variants.length > 1 ? 's' : ''}` || 'Nombre de Style' }}</p>
      </div>

      <button v-if="!isSelected" class="font-list__action btn btn--icon" @click.stop="addFont()">
        <svg-icon class="font-list__action" :name="'add'"></svg-icon>
      </button>
      <button v-else class="font-list__action btn btn--icon" @click.stop="removeFont()">
        <svg-icon class="font-list__action" :name="'remove'"></svg-icon>
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

// VUEX
import { mapState } from "vuex";

export default {
  components: {
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

  computed: {
    // fontSelected() {

    //   return this.fonts[this.fontTaregt]
    // },
    isSelected() {
      return this.font.family === this.fontChoices[this.fontTarget].family
        ? true
        : false;
    },

    ...mapState({
      fontChoices: state =>
        state.prototypesStore.prototype.typography.fontChoices,
      fontTarget: state => state.toolsStore.fontList.target
    })
  },

  methods: {
    callFontDetails(font) {
      this.$store.dispatch("toolsStore/changefontInDetails", font);
      this.$store.dispatch("toolsStore/callPreviews", {
        toolsDisplay: "fontList",
        previewDisplay: "fontDetails"
      });
    },

    // add font to the state
    addFont() {
      // set new font
      this.$store.dispatch("prototypesStore/setFont", this.font);
      // this.$store.commit("toolsStore/setToolsDisplay", "typo");
      // this.$store.commit("toolsStore/setPreviewDisplay", "preview");
    },
    // add font to the state
    removeFont() {
      // set new font
      this.$store.dispatch("prototypesStore/resetFont", this.font);
      // this.$store.commit("toolsStore/setToolsDisplay", "typo");
      // this.$store.commit("toolsStore/setPreviewDisplay", "preview");
    }
  }
};
</script>