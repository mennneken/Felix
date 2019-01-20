<template>
  <section class="tools__tool tools__tool--comp">
    <h3 class="title title--upp p">Comparaison de Fonts</h3>
    <div class="comp">
      <div v-for="(letter, id) in letters" :key="id" class="letter">
        <input
          type="text"
          class="letter__input"
          :placeholder="lettersBackup[id]"
          v-model="letters[id]"
          minlength="1"
          maxlength="1"
          pattern="/[a-zA-Z0-9]/"
          @change="checkInput(id)"
        >
        <span
          class="letter__font letter__font--1"
          :style="{fontFamily: fontTitle.family, fontSize: '90px',fontWeight: fontTitle.weight}"
        >{{ letter || lettersBackup[id] }}</span>
        <span
          class="letter__font letter__font--2"
          :style="{fontFamily: fontText.family, fontSize: '90px',fontWeight: fontText.weight}"
        >{{ letter || lettersBackup[id] }}</span>
      </div>
      <!-- <div class="letter letter--2">
        <input type="text" class="letter__input" placeholder="o" v-model="letters[1]" maxlength="1" pattern="[A-Za-z]">
        <span class="letter__font letter__font--1">{{ letters[1] || 'o' }}</span>
        <span class="letter__font letter__font--2">{{ letters[1] || 'o' }}</span>
      </div>
      <div class="letter letter--3">
        <input type="text" class="letter__input" placeholder="g" v-model="letters[2]" maxlength="1" pattern="[A-Za-z]">
        <span class="letter__font letter__font--1">{{ letters[2] || 'g' }}</span>
        <span class="letter__font letter__font--2">{{ letters[2] || 'g' }}</span>
      </div>
      <div class="letter letter--4">
        <input type="text" class="letter__input" placeholder="t" v-model="letters[3]" maxlength="1" pattern="[A-Za-z]">
        <span class="letter__font letter__font--1">{{ letters[3] || 'h' }}</span>
        <span class="letter__font letter__font--2">{{ letters[3] || 'h' }}</span>
      </div>-->
    </div>
  </section>
</template>

<script>
// VUEX
import { mapState } from "vuex";

export default {
  data() {
    return {
      letters: ["x", "o", "g", "h"],
      lettersBackup: ["x", "o", "g", "h"],
      regx: new RegExp("[a-zA-Z0-9]")
    };
  },

  methods: {
    checkInput(id) {
      if (!this.regx.test(this.letters[id])) {
        this.letters[id] = this.lettersBackup[id];
      }
    }
  },

  computed: {
    ...mapState({
      fontTitle: state =>
        state.prototypesStore.prototype.prototype.typography.fontChoices
          .fontTitle,
      fontText: state =>
        state.prototypesStore.prototype.prototype.typography.fontChoices
          .fontText
    })
  }
};
</script>

<style lang="scss" scoped>
.comp {
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
  padding-bottom: 30px;
}

.letter {
  position: relative;
  height: 20%;

  &__input {
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  &__font {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    pointer-events: none;

    &:first-child {
      color: rgba(255, 0, 0, 0.5);
    }

    &:last-child {
      color: rgba(0, 255, 0, 0.5);
    }
  }
}
</style>

