<template>
  <li class="card" >
    <div class="card__header"></div>
    <div class="card__content" @click="callPrototyping()">
      <p class="card__name title">{{ prototype.name || 'Sans Titre'}}</p>
      <p class="card__date h5">{{ dateOfModification }}</p>
      
      <ul class="not-a-list" @click.stop>
        <li>
          <button class="btn btn--icon">
            <svg-icon :name="'more'"></svg-icon>
          </button>
          <ul class="not-a-list dropdown dropdown--active">
            <li class="dropdown__elem">
              <button @click="callDialog('rename-prototype', prototype)">
                <svg-icon :name="'edit'"></svg-icon>Renommer
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click="duplicatePrototype()">
                <svg-icon :name="'duplicate'"></svg-icon>Dupliquer
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click="callDialog('share-prototype', prototype)">
                <svg-icon :name="'share'"></svg-icon>Partager
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click="callDialog('export-prototype', prototype)">
                <svg-icon :name="'export'"></svg-icon>Exporter
              </button>
            </li>
            <li class="dropdown__elem">
              <button @click="callDialog('delete-prototype', prototype)">
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
const moment = require('moment');

export default {
  components: {
    svgIcon
  },

  props: {
    prototype: { type: Object }
  },

  methods: {
    showDropdown() {}, 


    // Open a prototype
    callPrototyping() {
      this.$store.dispatch('prototypesStore/continutePrototype', { prototypeId: this.prototype.id})
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
      this.$store.dispatch('prototypesStore/duplicatePrototype', {
        uid: this.uid,
        id: this.prototype.id,
      })
    }
  },

  computed: {
    dateOfModification() {
      let timeOfMod = moment.unix(this.prototype.lastModification.seconds);
      return moment(timeOfMod).locale('fr').startOf().fromNow();
    },

    ...mapState({
      uid: state => state.userConnexion.currentUser.uid
    })
  }
};
</script>

