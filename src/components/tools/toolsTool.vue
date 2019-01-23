<template>
  <section class="tools__tools tool">
    <navigation-tool></navigation-tool>

    <button v-if="$mq === 'mobile'" class="tool__fold-action btn btn--icon">
      <svg-icon :name="'arrow-down'"></svg-icon>
    </button>

    <div class="tool__content" v-if="$mq === 'mobile'">
      <typo-choice v-if="toolsDisplayed === 'typo'"></typo-choice>
      <typo-size v-if="toolsDisplayed === 'size'"></typo-size>
      <typo-format v-if="toolsDisplayed === 'format'"></typo-format>
      <typo-spaces v-if="toolsDisplayed === 'space'"></typo-spaces>
      <color-palette v-if="toolsDisplayed === 'color'"></color-palette>
      <colot-adjust v-if="toolsDisplayed === 'adjust'"></colot-adjust>
      <!-- <tools-font-filter v-if="toolsDisplayed === 'fontList'"></tools-font-filter>
      <typo-comp v-if="toolsDisplayed === 'fontList'"></typo-comp>-->
    </div>

    <div class="tool__content" v-else>
      <typo-choice v-if="toolsDisplayed === 'typo'"></typo-choice>
      <typo-size v-if="toolsDisplayed === 'typo'"></typo-size>
      <typo-format v-if="toolsDisplayed === 'format'"></typo-format>
      <typo-spaces v-if="toolsDisplayed === 'format'"></typo-spaces>
      <color-palette v-if="toolsDisplayed === 'color'"></color-palette>
      <colot-adjust v-if="toolsDisplayed === 'color'"></colot-adjust>
      <tools-font-filter v-if="toolsDisplayed === 'fontList'"></tools-font-filter>
      <typo-comp v-if="toolsDisplayed === 'fontList'"></typo-comp>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon";
import fNav from "@/components/navigation";
import TypoChoice from "./typography/typoChoice.vue";
import TypoComp from "./typography/typoComparison.vue";
import TypoFormat from "./typography/typoFormat.vue";
import TypoSize from "./typography/typoSize.vue";
import TypoSpaces from "./typography/typoSpaces.vue";
import ColorPalette from "./colors/colorPalette.vue";
import ColotAdjust from "./colors/colorAdjust.vue";
import toolsFontFilter from "./font/toolsFontFilter.vue";
import navigationTool from "./navigationTool.vue";

//VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon,
    fNav,
    TypoChoice,
    TypoComp,
    TypoFormat,
    TypoSize,
    TypoSpaces,
    ColorPalette,
    ColotAdjust,
    navigationTool,
    toolsFontFilter
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      toolsDisplayed: state => state.toolsStore.toolsDisplayed,
      previewDisplayed: state => state.toolsStore.previewDisplayed
    })
  }
};
</script>