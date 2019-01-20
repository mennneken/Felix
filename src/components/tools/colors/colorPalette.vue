<template>
  <section class="tools__tool tools__tool--color-palette color-palette">
    <h3 class="title title--upp p">Palette de couleur</h3>

    <div class="tools__elem">
      <div class="color-palette__palette">
        <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.lightShade}"></div>
        <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.lightAccent}"></div>
        <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.main}"></div>
        <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.darkAccent}"></div>
        <div class="color-palette__palette-elem" :style="{backgroundColor: colorHSLA.darkShade}"></div>
      </div>

      <div class="color-palette__action">
        <select @change="updateHarmony">
          <option
            v-for="(harmony, id) in colorHarmonies"
            :key="id"
            :value="harmony.value"
            :selected="harmony.value === actualHarmony"
          >{{ harmony.name }}</option>
        </select>
        
        <button class="btn btn--icon-right" @click="regenerateRandomColors()">Générer
          <svg-icon :name="'regenerate'"></svg-icon>
        </button>
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

  data() {
    return {};
  },

  computed: {
    ...mapState({
      actualHarmony: state =>
        state.prototypesStore.prototype.prototype.color.harmony,
      colorHarmonies: state => state.toolsStore.colorHarmonies
    }),
    ...mapGetters({
      colorHSLA: "prototypesStore/getColorHSLA"
    })
  },

  methods: {
    regenerateRandomColors() {
      this.$store.dispatch("prototypesStore/generateSchemeColor");
      // this.$store.dispatch("prototypesStore/randomColor", {
      //   h: [0, 360],
      //   s: [20, 100],
      //   l: [20, 80],
      //   a: [1, 1]
      // });
    },

    updateHarmony(e) {
      this.$store.commit("prototypesStore/updateColorHarmony", e.target.value);
      this.$store.dispatch("prototypesStore/generateSchemeColor");
    }
  }
};
</script>

<style lang="scss" scoped>
.color-palette {
  &__palette {
    display: flex;
    flex-direction: row;
    align-content: stretch;

    margin-bottom: 10px;
  }

  &__palette-elem {
    height: 150px;
    width: 20%;

    background-color: rgb(179, 179, 179);
    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }

    &:nth-child(even) {
      background-color: rgb(201, 201, 201);
    }
  }

  &__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
