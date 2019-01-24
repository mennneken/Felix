<template>
  <section class="font-list__card card">
    <header>
      <div class="font-list__details" @click="callFontDetails(font)">
        <h2 class="title title--alt h4">{{ font.family || 'Nom de la typographie' }}</h2>
        <p
          class="title h5 font-list__variants"
        >{{ `${font.variants.length} variante${font.variants.length > 1 ? 's' : ''}` || 'Nombre de Style' }}</p>
      </div>

      <button v-show="!isSelected" class="font-list__action btn btn--icon" @click.stop="addFont()">
        <svg-icon class="font-list__action" :name="'add'"></svg-icon>
      </button>
      <button
        v-show="isSelected"
        class="font-list__action btn btn--icon"
        @click.stop="removeFont()"
      >
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

  data() {
    return {
      selected: false
    };
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
      if (this.font.family === this.fontChoices[this.fontTarget].family) {
        return true;
      } else {
        return false;
      }
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
      this.selected = true;
      this.$store.dispatch("prototypesStore/setFont", this.font);
    },
    // add font to the state
    removeFont() {
      this.selected = false;
      this.$store.dispatch("prototypesStore/resetFont");
    }
  }
};
</script>