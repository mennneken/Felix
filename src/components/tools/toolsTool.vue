<template>
  <section class="tools">
    <f-nav></f-nav>
    <nav>
      <ul class="navigation navigation--secondary">
        <li>
          <button class="btn btn--icon-label" @click="switchTo('typo')">
            <svg-icon :name="'typo'"></svg-icon>
            <span>TYPO</span>
          </button>
        </li>

        <!-- <li v-show="fontChoices"> -->
        <li v-show="fontChoices">
          <button class="btn btn--icon-label" @click="switchTo('comp')">
            <svg-icon :name="'comp'"></svg-icon>
            <span>COMPARAISON</span>
          </button>
        </li>

        <li>
          <button class="btn btn--icon-label" @click="switchTo('format')">
            <svg-icon :name="'format'"></svg-icon>
            <span>FORMAT</span>
          </button>
        </li>
      </ul>
    </nav>
    
    <div class="tools__content">
      <typo-choice v-show="display === 'typo'"></typo-choice>
      <typo-size v-show="display === 'typo'"></typo-size>
      <typo-comp v-show="display === 'comp'"></typo-comp>
      <typo-format v-show="display === 'format'"></typo-format>
      <typo-spaces v-show="display === 'format'"></typo-spaces>
      <color-palette v-show="display === 'color'"></color-palette>
      <colot-adjust v-show="display === 'color'"></colot-adjust>
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
    navigationTool
  },

  data() {
    return {
      display: 'typo',
    }
  },

  methods: {
    switchTo(target) {
      this.display = target;
    }
  },

  computed: mapState({
    fontChoices:  state => state.prototypesStore.prototype.prototype.typography.fontChoices,
    fontSize:     state => state.prototypesStore.prototype.prototype.typography.format.size,
    
    // twoFontChoice() {
    //   if (this.fontChoices.font_1.name && this.fontChoices.font_2.name) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
  }),

};
</script>