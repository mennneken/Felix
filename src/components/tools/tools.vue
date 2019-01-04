<template>
  <section class="tools">
    <f-nav></f-nav>
    <nav>
      <ul>
        <li>
          <button>
            <svg-icon :name="'typo'"></svg-icon>
            <span>TYPO</span>
          </button>
        </li>
        <li>
          <button>
            <svg-icon :name="'format'"></svg-icon>
            <span>FORMAT</span>
          </button>
        </li>
      </ul>
    </nav>
    
    <div class="tools__content">
      <typo-choice></typo-choice>
      <typo-comp></typo-comp>
      <typo-size></typo-size>
      <typo-format></typo-format>
      <typo-spaces></typo-spaces>
      <color-palette></color-palette>
      <colot-adjust></colot-adjust>
    </div>
  </section>
</template>

<script>
import svgIcon from "@/components/svgIcon";
import fNav from "@/components/navigation";
import TypoChoice from "./typography/typoChoice.vue";
import TypoComp from "./typography/typoComparison.vue";
import TypoFormat from "./typography/typoFormat.vue";
import TypoSize from "./typography/typoSize.vue";
import TypoSpaces from "./typography/typoSpaces.vue";
import ColorPalette from "./colors/colorPalette.vue";
import ColotAdjust from "./colors/colorAdjust.vue";
import navigationTool from "./navigationTool.vue";

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
    navigationTool
  }
};
</script>