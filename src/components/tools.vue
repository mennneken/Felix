<template>
  <div id="tools">
    <f-nav></f-nav>

    <f-typo-choice></f-typo-choice>
    <f-typo-comp></f-typo-comp>
    <f-typo-format></f-typo-format>
    <f-typo-size></f-typo-size>
    <f-typo-spaces></f-typo-spaces>
    <f-color-palette></f-color-palette>
    <f-colot-adjust></f-colot-adjust>
    <f-tools-nav></f-tools-nav>
  </div>
</template>

<script>
import fNav from "@/components/navigation";
import fTypoChoice from "./tools/typo_choice.vue";
import fTypoComp from "./tools/typo_comparison.vue";
import fTypoFormat from "./tools/typo_format.vue";
import fTypoSize from "./tools/typo_size.vue";
import fTypoSpaces from "./tools/typo_spaces.vue";
import fColorPalette from "./tools/color_palette.vue";
import fColotAdjust from "./tools/color_adjust.vue";
import fToolsNav from "./tools/tools_nav.vue";

export default {
  components: {
    fNav,
    fTypoChoice,
    fTypoComp,
    fTypoFormat,
    fTypoSize,
    fTypoSpaces,
    fColorPalette,
    fColotAdjust,
    fToolsNav
  }
};
</script>

<style lang="scss" scoped>
  #tools {
    overflow-y: scroll;
  }
</style>

