<template>
  <ul class="tools__font-list font-list">
    <li v-for="(font, index) in fontListFilteredByFamilies" :key="index">
      <font-card :font="font" :textPreview="textsPreview[index % textsPreview.length]"></font-card>
    </li>
  </ul>
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
      textsPreview: state => state.googleFontStore.textsPreview
    }),

    ...mapGetters({
      fontListFilteredByFamilies: "googleFontStore/fontListFilteredByFamilies"
    })
  },

  beforeCreate() {
    this.$store.dispatch("googleFontStore/fetchGoogleFontList");
  }
};
</script>
