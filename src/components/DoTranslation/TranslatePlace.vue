<template>
  <div class="col-6">
    <!-- source texts -->
    <SourceTexts sourceTexts=/>
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
  props: [sourceTexts],
  components: {
    SourceTexts,
    TranslateTexts,
  },
};
</script>

<style></style>
