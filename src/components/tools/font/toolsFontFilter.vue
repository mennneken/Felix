<template>
  <section class="tool__elem font-filter">
    <h3 class="title title--upp p">Filtre Typographies</h3>
    <h4 class="title title--upp title--alt h5">{{ fontListFilteredLength }} sur {{ fontListLength }}</h4>
    <ul class="not-a-list tool__field-groups">
      <li class="tool__field" v-for="filter in familiesFilters" :key="filter.id">
        <label class="h4" :for="filter.name">{{ filter.name }}</label>
        <input type="checkbox" :name="filter.name" :id="filter.name" v-model="filter.active">
      </li>
    </ul>
  </section>
</template>

<script>
//VUEX
import { mapState, mapGetters } from "vuex";

// COMPONENTS
import svgIcon from "@/components/svgIcon";
import TypoComp from "../typography/typoComparison.vue";

export default {
  components: {
    svgIcon
  },

  methods: {},

  computed: {
    familiesFilters: {
      get() {
        return this.$store.state.googleFontStore.familiesFilters;
      },
      set(e) {}
    },
    ...mapState({
      // familiesFilters: state => state.googleFontStore.familiesFilters
    }),
    ...mapGetters({
      fontListLength: "googleFontStore/fontListLength",
      fontListFilteredLength: "googleFontStore/fontListFilteredLength"
    })
  }
};
</script>
