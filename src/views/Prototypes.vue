<template>
  <div id="prototypes">
    <felix-menu></felix-menu>
    <ul>
      <li>
        <router-link :to="{name: 'tool', params: {prototypeName : 'Prototype 1'}}">Prototype 1</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tool', params: {prototypeName : 'Prototype 3'}}">Prototype 3</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tool', params: {prototypeName : 'Prototype 5'}}">Prototype 5</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tool', params: {prototypeName : 'Prototype 7'}}">Prototype 7</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import felixMenu from "../components/felixMenu.vue";

export default {
  name: 'prototypes',
  components: {
    felixMenu,
  }
}
</script>

<style lang="scss">

</style>
