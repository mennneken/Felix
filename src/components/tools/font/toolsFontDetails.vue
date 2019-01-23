<template>
  <div class="tools__font-details font-details">
    <header>
      <h1 class="title title--alt">{{ font.family }}</h1>
      <span class="title h3">{{ numberOfStyle }}</span>
    </header>

    <input type="text" v-model="previewString" :placeholder="previewPlaceholder">

    <ul class="not-a-list">
      <li class="font-details__preview" v-for="(style, id) in font.variants" :key="id">
        <p
          :style="{
            fontFamily: `${font.family}, ${font.category}`, 
            fontWeight: `${weightIs(style)}`,
            fontStyle: `${styleIs(style)}`,
          }"
        >{{ previewString || `${font.family} ${styleToString(style)}` }}</p>

        <button
          class="font-list__action btn btn--icon"
          @click="addFont(weightIs(style), styleIs(style))"
        >
          <svg-icon class="font-list__action" :name="'add'"></svg-icon>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
// VUEX
import { mapState } from "vuex";

// COMPONENTS
import svgIcon from "@/components/svgIcon";

export default {
  components: {
    svgIcon
  },

  data() {
    return {
      previewString: "",
      previewPlaceholder: "Aperçu du texte"
    };
  },

  methods: {
    styleToString(style) {
      let weightString = "";
      const regx = new RegExp("(^\\d{3}italic$)");

      if ((style === "regular") | (style === "italic")) {
        weightString = style;
      } else {
        switch (Number.parseInt(style)) {
          case 100:
            weightString = "Thin";
            break;
          case 200:
            weightString = "Extra-Light";
            break;
          case 300:
            weightString = "Light";
            break;
          case 400:
            weightString = "Regular";
            break;
          case 500:
            weightString = "Medium";
            break;
          case 600:
            weightString = "Semi-Bold";
            break;
          case 700:
            weightString = "Bold";
            break;
          case 800:
            weightString = "Extra-Bold";
            break;
          case 900:
            weightString = "Black";
            break;
        }

        if (regx.test(style)) {
          weightString += " Italic";
        }
      }

      return weightString;
    },

    weightIs(style) {
      let weight;
      if (style === "regular" || style === "italic") {
        weight = 400;
      } else {
        weight = Number.parseInt(style);
      }

      return weight;
    },

    styleIs(style) {
      let fontStyle;
      const regx = new RegExp("(^\\d{3}italic$)");
      if (regx.test(style) || style === "italic") {
        fontStyle = "italic";
      } else {
        fontStyle = "normal";
      }

      return fontStyle;
    },

    cssStyle(style) {
      let obj = {};
      let regx = new RegExp("(^\\d{3}(italic)$)");
      if (style === "italic" || regx.test(style)) {
        obj.style = "italic";
      } else {
        obj.style = "normal";
      }

      if (style === "regular" || style === "italic") {
        obj.weight = 400;
      } else {
        obj.weight = Number.parseInt(style);
      }

      return obj;
    },

    // add font to the state
    addFont(fontWeight, fontStyle) {
      // set new font
      this.$store.commit("prototypesStore/setFontFamily", {
        target: this.target,
        fontFamily: this.font.family
      });
      this.$store.commit("prototypesStore/setFontWeight", {
        target: this.target,
        weight: fontWeight
      });
      this.$store.commit("prototypesStore/setFontStyle", {
        target: this.target,
        style: fontStyle
      });
      this.$store.commit("toolsStore/setToolsDisplay", "typo");
      this.$store.commit("toolsStore/setPreviewDisplay", "preview");
    }
  },

  computed: {
    ...mapState({
      font: state => state.toolsStore.fontInDetails,
      target: state => state.toolsStore.fontList.target
    }),

    computedStyle() {
      return {
        fontFamily: `${this.font.family}, ${this.font.category}`
      };
    },

    numberOfStyle() {
      if (this.font) {
        return `${this.font.variants.length} style${
          this.font.variants.length > 1 ? "s" : ""
        }`;
      }
    }
  },

  created() {
    this.$store.dispatch(
      "googleFontStore/loadSpecificFonts",
      `${this.font.family}:${this.font.variants.join(",")}:latin`
    );
  }
};
</script>
