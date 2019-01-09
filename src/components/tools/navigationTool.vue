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
// COMPONENTS
import svgIcon from "@/components/svgIcon";

export default {
  components: {
    svgIcon
  }
}
</script>
