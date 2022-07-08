<template>
  <div class="col-6">
    <!-- source texts -->
    <SourceTexts />
  </div>
  <div class="col-6">
    <!-- translate Texts -->
    <TranslateTexts />
  </div>
</template>

<script>
import SourceTexts from "./SourceTexts.vue";
import TranslateTexts from "./TranslatingTexts.vue";
export default {
  components: {
    SourceTexts,
    TranslateTexts,
  },
};
</script>

<style></style>
