<template>
  <section class="tools__tool tools__tool--font-list">
    <h3 class="title title--upp p">{{ fontListFilteredLength }} sur {{ fontListLength }} typographie</h3>
    <div class="tools__elem">
      <ul class="not-a-list">
        <li v-for="filter in familiesFilters" :key="filter.id">
          <label :for="filter.name">{{ filter.name }}</label>
          <input
            type="checkbox"
            :name="filter.name"
            :id="filter.name"
            :value="filter.value"
            @change="updateFilters()"
            v-model="filter.active"
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
//VUEX
import { mapState, mapGetters } from "vuex";

export default {
  components: {},

  methods: {
    doSomething() {
      console.log(true);
    },

    updateFilters() {
      // this.$store.commit(
      //   "googleFontStore/updateFontFamiliesFilters",
      //   this.familiesFiltersActive
      // );
    }
  },

  computed: {
    ...mapState({
      familiesFilters: state => state.googleFontStore.familiesFilters,
    }),
    ...mapGetters({
      familiesFiltersActive: 'googleFontStore/familiesFiltersActive',
      fontListLength: 'googleFontStore/fontListLength',
      fontListFilteredLength: 'googleFontStore/fontListFilteredLength',
    }),
  }
};
</script>
