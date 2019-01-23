<template>
  <nav class="tool__navigation" v-if="$mq === 'mobile'">
    <ul class="navigation navigation--secondary" v-show=" previewDisplayed === 'preview'">
      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'typo' }"
          @click="switchToolTo('typo')"
        >
          <svg-icon :name="'typo'"></svg-icon>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'size' }"
          @click="switchToolTo('size')"
        >
          <svg-icon :name="'size'"></svg-icon>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'format' }"
          @click="switchToolTo('format')"
        >
          <svg-icon :name="'format'"></svg-icon>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'space' }"
          @click="switchToolTo('space')"
        >
          <svg-icon :name="'spaces'"></svg-icon>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'color' }"
          @click="switchToolTo('color')"
        >
          <svg-icon :name="'palette'"></svg-icon>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon"
          :class="{ 'btn--active': toolsDisplayed === 'adjust' }"
          @click="switchToolTo('adjust')"
        >
          <svg-icon :name="'adjust'"></svg-icon>
        </button>
      </li>
    </ul>

    <ul
      class="navigation navigation--secondary navigation--secondary-alone"
      v-show="previewDisplayed !== 'preview'"
    >
      <li v-if="previewDisplayed === 'fontList'">
        <button
          class="btn btn--icon-left"
          @click="[switchToolTo('typo'), switchPreviewTo('preview')]"
        >
          <svg-icon :name="'arrow-left'"></svg-icon>
          <span class="title title--upp">Revenir à Choix Typographique</span>
        </button>
      </li>
      <li v-else>
        <button class="btn btn--icon-left" @click="switchPreviewTo('fontList')">
          <svg-icon :name="'arrow-left'"></svg-icon>
          <span class="title title--upp">Retour</span>
        </button>
      </li>
    </ul>
  </nav>

  <nav class="tool__navigation" v-else>
    <ul class="navigation navigation--secondary" v-show=" previewDisplayed === 'preview'">
      <li>
        <button
          class="btn btn--icon-label"
          :class="{ 'btn--active': toolsDisplayed === 'typo' }"
          @click="switchToolTo('typo')"
        >
          <svg-icon :name="'typo'"></svg-icon>
          <span class="title title--upp">CHOIX TYPOGRAPHIQUE</span>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon-label"
          :class="{ 'btn--active': toolsDisplayed === 'format' }"
          @click="switchToolTo('format')"
        >
          <svg-icon :name="'format'"></svg-icon>
          <span class="title title--upp">MISE EN FORME</span>
        </button>
      </li>

      <li>
        <button
          class="btn btn--icon-label"
          :class="{ 'btn--active': toolsDisplayed === 'color' }"
          @click="switchToolTo('color')"
        >
          <svg-icon :name="'palette'"></svg-icon>
          <span class="title title--upp">COULEURS</span>
        </button>
      </li>
    </ul>

    <ul
      class="navigation navigation--secondary navigation--secondary-alone"
      v-show="previewDisplayed !== 'preview'"
    >
      <li v-if="previewDisplayed === 'fontList'">
        <button
          class="btn btn--icon-left"
          @click="[switchToolTo('typo'), switchPreviewTo('preview')]"
        >
          <svg-icon :name="'arrow-left'"></svg-icon>
          <span class="title title--upp">Revenir à Choix Typographique</span>
        </button>
      </li>
      <li v-else>
        <button class="btn btn--icon-left" @click="switchPreviewTo('fontList')">
          <svg-icon :name="'arrow-left'"></svg-icon>
          <span class="title title--upp">Retour</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon";

//VUEX
import { mapState } from "vuex";

export default {
  components: {
    svgIcon
  },

  methods: {
    // Navigation switch to targeted tool
    switchToolTo(target) {
      this.$store.dispatch("toolsStore/changeToolsDisplay", target);
    },

    switchPreviewTo(target) {
      this.$store.dispatch("toolsStore/changePreviewDisplay", target);
    }
  },

  computed: {
    ...mapState({
      fontChoices: state =>
        state.prototypesStore.prototype.typography.fontChoices,
      previewDisplayed: state => state.toolsStore.previewDisplayed,
      toolsDisplayed: state => state.toolsStore.toolsDisplayed
    })
  }
};
</script>
