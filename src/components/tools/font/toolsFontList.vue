<template>
  <section id="font-list">
    <header>
      <h1 class="title h3">Choix de la typographie pour les {{ whyIamHerefor }}</h1>
    </header>
    <ul class="tools__font-list font-list">
      <li v-for="(font, index) in fontListFilteredByFamilies" :key="index">
        <font-card :font="font" :textPreview="textsPreview[index % textsPreview.length]"></font-card>
      </li>
    </ul>
  </section>
</template>

<script>
// COMPONENTS
import fontCard from "@/components/tools/font/toolsFontCard";

//VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    fontCard
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      fonts: state => state.googleFontStore.googleFontList,
      textsPreview: state => state.googleFontStore.textsPreview,
      fontListTarget: state => state.toolsStore.fontList.target
    }),

    whyIamHerefor() {
      if (this.fontListTarget === "fontTitle") {
        return "titres";
      } else {
        return "textes";
      }
    },

    ...mapGetters({
      fontListFilteredByFamilies: "googleFontStore/fontListFilteredByFamilies"
    })
  },

  beforeCreate() {
    this.$store.dispatch("googleFontStore/fetchGoogleFontList");
  }
};
</script>
