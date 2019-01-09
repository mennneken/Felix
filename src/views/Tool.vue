<template>
  <div id="tools" class="tools">
    <div class="tools__side-bar">
      <f-nav></f-nav>
      <f-tools></f-tools>
    </div>
    <f-preview></f-preview>
  </div>
</template>

<script>
// COMPONENTS
import fTools from "@/components/tools/toolsTool";
import fPreview from "@/components/tools/toolsPreview";
import fNav from "@/components/navigation";

export default {
  components: {
    fTools,
    fPreview,
    fNav
  }
}
</script>
