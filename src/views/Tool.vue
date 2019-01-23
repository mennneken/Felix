<template>
  <div id="tools" class="tools">
    <f-nav></f-nav>
    <f-tools></f-tools>
    <f-preview v-if="previewToDisplay === 'preview'"></f-preview>
    <font-list v-if="previewToDisplay === 'fontList'"></font-list>
    <font-details v-if="previewToDisplay === 'fontDetails'"></font-details>
  </div>
</template>

<script>
// COMPONENTS
import fTools from "@/components/tools/toolsTool";
import fPreview from "@/components/tools/toolsPreview";
import fontList from "@/components/tools/font/toolsFontList";
import fontDetails from "@/components/tools/font/toolsFontDetails";
import fNav from "@/components/navigation";

//VUEX
import { mapState } from "vuex";

// FIREBASE
const fb = require("../firebaseConfig.js");

export default {
  components: {
    fontList,
    fontDetails,
    fTools,
    fPreview,
    fNav
  },
  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapState({
      previewToDisplay: state => state.toolsStore.previewDisplayed
    })
  },

  created() {
    // if (this.$store.prototype.)
    // this.$store.commit();
    this.$store.commit("toolsStore/setPreviewDisplay", "preview");
    this.$store.commit("toolsStore/setToolsDisplay", "typo");
  },

  destroyed() {
    this.$store.dispatch("prototypesStore/updatePrototype");
  }
};
</script>
