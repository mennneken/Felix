<template>
  <li class="card">
    <div class="card__header"></div>
    <div class="card__content" @click="callPrototyping()">
      <h2 class="card__name title title--m0 h4">{{ prototype.name || 'Sans Titre'}}</h2>
      <p class="card__date p">{{ dateOfModification }}</p>

      <ul class="not-a-list">
        <li>
          <button class="btn btn--icon"  @click.stop="dropdownActive = !dropdownActive">
            <svg-icon :name="'more'"></svg-icon>
          </button>
          <ul
            class="not-a-list dropdown dropdown--active"
            :class="{ 'dropdown--open': dropdownActive }"
            v-click-outside="isDropdownActive"
          >
            <li class="dropdown__elem">
              <button @click.stop="callDialog('rename-prototype', prototype)">
                <svg-icon :name="'edit'"></svg-icon>Renommer
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click.stop="duplicatePrototype()">
                <svg-icon :name="'duplicate'"></svg-icon>Dupliquer
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click.stop="callDialog('share-prototype', prototype)">
                <svg-icon :name="'share'"></svg-icon>Partager
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click.stop="callDialog('export-prototype', prototype)">
                <svg-icon :name="'export'"></svg-icon>Exporter
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click.stop="callDialog('delete-prototype', prototype)">
                <svg-icon :name="'delete'"></svg-icon>Supprimer
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
// COMPONENTS
import svgIcon from "@/components/svgIcon.vue";

// VUEX
import { mapState } from "vuex";

// JS PLUGIN
const moment = require("moment");

export default {
  components: {
    svgIcon
  },
  data() {
    return {
      dropdownActive: false
    };
  },

  props: {
    prototype: { type: Object }
  },

  methods: {
    isDropdownActive: function() {
      this.dropdownActive = false;
    },

    // Open a prototype
    callPrototyping() {
      this.$store.dispatch("prototypesStore/continutePrototype", {
        prototypeId: this.prototype.id
      });
      this.$router.push({ name: "Tool", params: { uid: this.prototype.id } });
    },

    // Open the corresponding dialog
    callDialog(dialogType, data) {
      this.$store.dispatch("dialogStore/callDialog", {
        type: dialogType,
        data: data
      });
    },

    // Close dialog element
    closeDialog() {
      this.$store.dispatch("dialogStore/closeDialog");
    },

    // Close Dropdown
    closeDropdown() {
      this.dropdownEnable = false;
    },

    // Duplicate Element
    duplicatePrototype() {
      this.$store.dispatch("prototypesStore/duplicatePrototype", {
        uid: this.uid,
        id: this.prototype.id
      });
    }
  },

  computed: {
    dateOfModification() {
      let timeOfMod = moment.unix(this.prototype.lastModification.seconds);
      return moment(timeOfMod)
        .locale("fr")
        .startOf()
        .fromNow();
    },

    ...mapState({
      uid: state => state.userConnexion.currentUser.uid
    })
  }
};
</script>
