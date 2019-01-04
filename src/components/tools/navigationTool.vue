<template>
  <nav>
    <ul>
      <li>
        <button>
          <svg-icon :name="'typo'"></svg-icon>
          <span>typo</span>
        </button>
      </li>
      <li>
        <button>
          <svg-icon :name="'format'"></svg-icon>
          <span>format</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import svgIcon from "@/components/svgIcon";

export default {
  components: {
    svgIcon
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: row;
  }

  li:not(:last-child) {
    margin-right: 1em;
  }
</style>
