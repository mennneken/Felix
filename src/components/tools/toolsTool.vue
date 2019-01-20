<template>
  <section class="tools__tools">
    <nav>
      <ul class="navigation navigation--secondary">
        <li>
          <button
            class="btn btn--icon-label"
            :class="{ 'btn--active': toolsDisplayed === 'typo' }"
            @click="switchTo('typo')"
          >
            <svg-icon :name="'typo'"></svg-icon>
            <span class="title title--upp">CHOIX TYPOGRAPHIQUE</span>
          </button>
        </li>

        <li v-show="fontChoices">
          <button
            class="btn btn--icon-label"
            :class="{ 'btn--active': toolsDisplayed === 'comp' }"
            @click="switchTo('comp')"
          >
            <svg-icon :name="'comp'"></svg-icon>
            <span class="title title--upp">COMPARATEUR FONT</span>
          </button>
        </li>

        <li>
          <button
            class="btn btn--icon-label"
            :class="{ 'btn--active': toolsDisplayed === 'format' }"
            @click="switchTo('format')"
          >
            <svg-icon :name="'format'"></svg-icon>
            <span class="title title--upp">MISE EN FORME</span>
          </button>
        </li>

        <li>
          <button
            class="btn btn--icon-label"
            :class="{ 'btn--active': toolsDisplayed === 'color' }"
            @click="switchTo('color')"
          >
            <svg-icon :name="'palette'"></svg-icon>
            <span class="title title--upp">COULEURS</span>
          </button>
        </li>
      </ul>
    </nav>

    <div class="tools__content">
      <typo-choice v-show="toolsDisplayed === 'typo'"></typo-choice>
      <typo-size v-show="toolsDisplayed === 'typo'"></typo-size>
      <typo-comp v-show="toolsDisplayed === 'comp'"></typo-comp>
      <typo-format v-show="toolsDisplayed === 'format'"></typo-format>
      <typo-spaces v-show="toolsDisplayed === 'format'"></typo-spaces>
      <color-palette v-show="toolsDisplayed === 'color'"></color-palette>
      <colot-adjust v-show="toolsDisplayed === 'color'"></colot-adjust>
      <tools-font-filter v-show="toolsDisplayed === 'fontList'"></tools-font-filter>
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

  methods: {
    // Navigation switch to targeted tool
    switchTo(target) {
      this.$store.dispatch("toolsStore/changeToolsDisplay", target);
    }
  },

  computed: mapState({
    fontChoices: state =>
      state.prototypesStore.prototype.prototype.typography.fontChoices,
    fontSize: state =>
      state.prototypesStore.prototype.prototype.typography.format.size,
    fontListEnable: state => state.toolsStore.fontList.enable,
    toolsDisplayed: state => state.toolsStore.toolsDisplayed,

    twoFontChoice() {
      if (
        this.fontChoices.fontTitle.family &&
        this.fontChoices.fontText.family
      ) {
        return true;
      } else {
        return false;
      }
    }
  })

  // beforeMount() {
  //   if (!this.$store.state.prototypesStore.prototype.prototype) {

  //     console.log(this.store.state.prototype)
  //     // this.store.commit('prototypesStore/setActualPrototype', )
  //   }
  // }
};
</script>