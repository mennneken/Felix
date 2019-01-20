<template>
  <section class="tools__tool tools__tool--typo typo-choice">
    <h3 class="title title--upp p">Choix typographique &amp; Style</h3>
    
    <!-- FONT TITLE -->
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Titres</h4>
      <div class="typo-choice__elem" v-if="dataFontTitle">
        <button class="btn btn--card" @click="callFontList('Title')">{{ fontTitle.family }}</button>
        
        <select v-model="fontTitle.style">
          <option disabled>{{ fontTitle.style.length > 1 ? 'Styles' : 'Style' }}</option>
          <option
            v-for="(style, id) in dataFontTitleStyle"
            :key="id"
            :value="style"
            :selected="fontTitle.style === style"
          >{{ style }}</option>
        </select>
        
        <select v-if="fontTitle.style === 'normal'" v-model="fontTitle.weight">
          <option disabled>{{ dataFontTitleWeight.normal.length > 1 ? 'Graisses' : 'Graisse' }}</option>
          <option
            v-for="(weight, id) in dataFontTitleWeight.normal"
            :key="id"
            :value="weight"
            :selected="fontTitle.weight === weight"
          >{{ weight }}</option>
        </select>
        
        <select v-if="fontTitle.style === 'italic'" v-model="fontTitle.weight">
          <option disabled>{{ dataFontTitleWeight.normal.length > 1 ? 'Graisses' : 'Graisse' }}</option>
          <option
            v-for="(weight, id) in dataFontTitleWeight.italic"
            :key="id"
            :value="weight"
            :selected="fontTitle.weight === weight"
          >{{ weight }}</option>
        </select>
      </div>

      <div class="typo-choice__elem" v-else>
        <button class="btn btn--card" @click="callFontList('Title')">
          <span>{{ fontTitle.family }}</span>
          <svg-icon :name="'add'"></svg-icon>
        </button>
        
        <select>
          <option disabled>Styles</option>
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
        </select>
        
        <select v-model="fontTitle.weight">
          <option disabled>Graisses</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </div>
    </div>
    
    <!-- FONT TEXT -->
    <div class="tools__elem">
      <h4 class="title title--upp title--alt h5 tools__label">Textes</h4>
      
      <div class="typo-choice__elem" v-if="dataFontText">
        <button class="btn btn--card" @click="callFontList('Text')">{{ fontText.family }}</button>
        
        <select v-model="fontText.style">
          <option disabled>{{ dataFontTextStyle.length > 1 ? 'Styles' : 'Style' }}</option>
          <option v-for="(style, id) in dataFontTextStyle" :key="id" :value="style" :selected="fontText.style === style">{{ style }}</option>
        </select>

        
        
        <select v-if="fontText.style === 'normal'" v-model="fontText.weight">
          <option disabled>{{ dataFontTextWeight.normal.length > 1 ? 'Graisses' : 'Graisse' }}</option>
          <option
            v-for="(weight, id) in dataFontTextWeight.normal"
            :key="id"
            :value="weight"
            :selected="fontText.weight === weight"
          >{{ weight }}</option>
        </select>

        
        <select v-if="fontText.style === 'italic'" v-model="fontText.weight">
          <option disabled>{{ dataFontTextWeight.italic.length > 1 ? 'Graisses' : 'Graisse' }}</option>
          <option
            v-for="(weight, id) in dataFontTextWeight.italic"
            :key="id"
            :value="weight"
            :selected="fontText.weight === weight"
          >{{ weight }}</option>
        </select>
      </div>

      <div class="typo-choice__elem" v-else>
        <button class="btn btn--card" @click="callFontList('Text')">
          <span>Serif</span>
          <svg-icon :name="'add'"></svg-icon>
        </button>
        
        <select v-model="fontText.style">
          <option disabled>Styles</option>
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
        </select>
        
        <select v-model="fontText.weight">
          <option disabled>Graisses</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon";

// VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    svgIcon
  },

  methods: {
    callFontList(target) {
      this.$store.dispatch('toolsStore/changeFontListTarget', `font${target}`);
      this.$store.dispatch('toolsStore/callPreviews', {
        toolsDisplay: 'fontList',
        previewDisplay: 'fontList'
      });
    }
  },

  computed: {
    dataFontTitle() {
      if (this.fontTitle.family !== "sans-serif") {
        return this.$store.getters["googleFontStore/getFontFromList"](
          this.fontTitle.family
        );
      }
    },

    dataFontText() {
      if (this.fontText.family !== "sans-serif") {
        return this.$store.getters["googleFontStore/getFontFromList"](
          this.fontText.family
        );
      }
    },

    dataFontTitleStyle() {
      const numRegx = new RegExp("(^regular$)|(^\\d{3}$)");
      const italicRegx = new RegExp("(^italic$)|(^\\d{3}(italic)$)");
      const variants = this.dataFontTitle.variants;

      let styles = [];

      variants.forEach(variant => {
        let res;
        if (numRegx.test(variant)) {
          res = ["normal"];
        } else if (italicRegx.test(variant)) {
          res = ["italic"];
        }

        styles = [...new Set([...styles, ...res])];
      });
      return styles;
    },

    dataFontTextStyle() {
      const numRegx = new RegExp("(^regular$)|(^\\d{3}$)");
      const italicRegx = new RegExp("(^italic$)|(^\\d{3}(italic)$)");
      const variants = this.dataFontText.variants;

      let styles = [];
      variants.forEach(variant => {
        let res;
        if (numRegx.test(variant)) {
          res = ["normal"];
        } else if (italicRegx.test(variant)) {
          res = ["italic"];
        }

        styles = [...new Set([...styles, ...res])];
      });
      return styles;
    },

    dataFontTitleWeight() {
      const numRegx = new RegExp("(^regular$)|(^\\d{3}$)");
      const italicRegx = new RegExp("(^italic$)|(^\\d{3}(italic)$)");
      const variants = this.dataFontTitle.variants;

      let weights = {
        normal: [],
        italic: []
      };

      variants.forEach(variant => {
        let wei;
        if (numRegx.test(variant)) {
          if (variant === "regular") {
            wei = [400];
          } else {
            wei = [Number.parseInt(variant)];
          }
          weights.normal = [...new Set([...weights.normal, ...wei])];
        } else if (italicRegx.test(variant)) {
          if (variant === "italic") {
            wei = [400];
          } else {
            wei = [Number.parseInt(variant)];
          }
          weights.italic = [...new Set([...weights.italic, ...wei])];
        }
      });

      return weights;
    },

    dataFontTextWeight() {
      const numRegx = new RegExp("(^regular$)|(^\\d{3}$)");
      const italicRegx = new RegExp("(^italic$)|(^\\d{3}(italic)$)");
      const variants = this.dataFontText.variants;

      let weights = {
        normal: [],
        italic: []
      };

      variants.forEach(variant => {
        let wei;
        if (numRegx.test(variant)) {
          if (variant === "regular") {
            wei = [400];
          } else {
            wei = [Number.parseInt(variant)];
          }
          weights.normal = [...new Set([...weights.normal, ...wei])];
        } else if (italicRegx.test(variant)) {
          if (variant === "italic") {
            wei = [400];
          } else {
            wei = [Number.parseInt(variant)];
          }
          weights.italic = [...new Set([...weights.italic, ...wei])];
        }
      });

      return weights;
    },

    ...mapState({
      fontTitle: state =>
        state.prototypesStore.prototype.prototype.typography.fontChoices.fontTitle,
      fontText: state =>
        state.prototypesStore.prototype.prototype.typography.fontChoices.fontText,
    })
  }
};
</script>
