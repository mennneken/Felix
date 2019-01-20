<template>
  <div id="tools" class="tools">
    <div class="tools__side-bar">
      <f-nav></f-nav>
      <f-tools></f-tools>
    </div>
    <f-preview v-show="previewToDisplay === 'preview'"></f-preview>
    <font-list v-show="previewToDisplay === 'fontList'"></font-list>
    <font-details v-show="previewToDisplay === 'fontDetails'"></font-details>
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
    ...mapState ({
      previewToDisplay: state => state.toolsStore.previewDisplayed,
    }),
  },

  beforeCreated() {
    this.$store.commit('toolsStore/setPreviewDisplay', 'preview')
    this.$store.commit('toolsStore/setToolsDisplay', 'typo')
  }
};
</script>
