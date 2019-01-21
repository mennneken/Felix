<template>
  <div id="credits">
    <f-nav></f-nav>
    <f-dialog v-show="dialog.enable" :dialog-type="dialog.type" @closeDialog="closeDialog()"></f-dialog>
    <main class="container">
      <h2>Ressources &amp; Inspirations</h2>
      <ul>
        <li>
          <a href="https://vuejs.org/">VueJS</a>
        </li>
        <li>
          <a href="https://fonts.google.com/">Google Font</a>
        </li>
        <li>
          <a href="https://type-scale.com/">TypeScale</a>
        </li>
        <li>
          <a href="https://tiff.herokuapp.com/">Tiff</a>
        </li>
        <li>
          <a href="http://colormind.io/">ColorMind</a>
        </li>
      </ul>
      <h2>Photos, Illustrations &amp; Icônes</h2>
      <ul>
        <li>
          <a
            href="https://unsplash.com/photos/F_y8J9Ftwi0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Brooke Cagle</a>,
          <a
            href="https://unsplash.com/photos/Ci5AysW87o4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Sunyu</a>,
          <a
            href="https://unsplash.com/photos/Ci5AysW87o4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Daiga Ellaby</a>,
          <a
            href="https://unsplash.com/photos/Ci5AysW87o4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Howling Red</a> sur
          <a
            href="https://unsplash.com/photos/Ci5AysW87o4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a>.
        </li>
        <li>
          <a
            href="http://www.paramountpictures.fr/film/le-petit-prince/"
          >Capture du film “Le Petit Prince” de Mark Osborne</a>, 2015, © Paramount Picture.
        </li>
        <li>
          <a
            href="https://fr.wikipedia.org/wiki/Le_Corbeau_et_le_Renard#/media/File:1-2_Le-corbeau-et-le-renard.jpg"
          >Illustration</a> de la fable “Le Corbeau et le Renard” de Jean de la Fontaine par Grandville - Wikimedia Commons
        </li>
        <li>
          <a href="https://material.io/tools/icons/?style=baseline">Material Icon</a> par Google Design
        </li>
      </ul>
      <h2>Remerciements</h2>
      <p>À Katherini, à Victoria, à Zack, à Qûan,
        <br>À ma famille, à mes amis,
        <br>À mes professeurs, à mon école,
        <br>merci.
      </p>

      <a class="logo logo--heaj" href="https://www.heaj.be/fr/">
        <object type="image/svg+xml" data="/assets/images/logos/logo_heaj.svg">Félix</object>
      </a>
    </main>
  </div>
</template>

<script>
// COMPONENTS
import fNav from "@/components/navigation";
import fDialog from "@/components/dialog/dialog.vue";

// STORE
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    fNav,
    fDialog
  },

  computed: {
    ...mapState({
      showLogin: state => state.userConnexion.wantToLogin,
      dialog: state => state.dialogStore.dialog
    })
  }
};
</script>

<style>
</style>
