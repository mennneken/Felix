<template>
  <div id="tools" class="tools">
    <div class="tools__side-bar">
      <f-nav></f-nav>
      <f-tools></f-tools>
    </div>
    <font-list v-if="fontListEnable"></font-list>
    <f-preview v-if="!fontListEnable"></f-preview>
  </div>
</template>

<script>
// COMPONENTS
import fTools from "@/components/tools/toolsTool";
import fPreview from "@/components/tools/toolsPreview";
import fontList from "@/components/tools/toolsFontList";
import fNav from "@/components/navigation";

//VUEX
import { mapState } from "vuex";

export default {
  components: {
    fontList,
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
      fontListEnable: state => state.prototypesStore.prototype.prototype.typography.format.size,
    }),
  }
};
</script>
