<template>
  <section class="tools__tool">
    <h3 class="title title--upp h5">Comparaison de Fonts</h3>
    <div class="comp">
      <div class="letter letter--1">
        <input type="text" class="letter__input" placeholder="x" v-model="letters[0]" maxlength="1" pattern="/\S/">
        <span class="letter__font letter__font--1">{{ letters[0] || 'x' }}</span>
        <span class="letter__font letter__font--2">{{ letters[0] || 'x' }}</span>
      </div>
      <div class="letter letter--2">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letters: ['' || 'x', '' || 'o', '' || 'g', '' || 'h'],
    }
  },
};
</script>

<style>
</style>
