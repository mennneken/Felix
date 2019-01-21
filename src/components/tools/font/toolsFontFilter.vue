<template>
  <section class="tools__tool tools__tool--font-list">
    <h3 class="title title--upp p">{{ fontListFilteredLength }} sur {{ fontListLength }} typographie</h3>
    <div class="tools__elem">
      <ul class="not-a-list">
        <li v-for="filter in familiesFilters" :key="filter.id">
          <label :for="filter.name">{{ filter.name }}</label>
          <input type="checkbox" :name="filter.name" :id="filter.name" v-model="filter.active">
          <!-- <button class="font-list__action btn btn--icon" @click="!filter.active">
            <svg-icon v-show="filter.active" class="font-list__action" :name="'checkbox-check'"></svg-icon>
            <svg-icon v-show="!filter.active" class="font-list__action" :name="'checkbox-uncheck'"></svg-icon>
          </button>-->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
//VUEX
import { mapState, mapGetters } from "vuex";

// COMPONENTS
import svgIcon from "@/components/svgIcon";

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
