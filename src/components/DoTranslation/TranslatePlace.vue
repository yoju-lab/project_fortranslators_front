<template>
  <div class="col-6">
    <!-- source texts -->
    <SourceTexts
      :sourceTerms="sourceTerms"
      :translatingTermsLine="translatingTermsLine"
    />
  </div>
  <div class="col-6">
    <!-- translate Texts -->
    <TranslateTexts />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

import SourceTexts from "./SourceTexts.vue";
import TranslateTexts from "./TranslatingTexts.vue";
const props = defineProps({
  sourceTerms: {
    type: Array,
  },
  translatingTermsLine: {
    type: Number,
  },
});

// const { sourceTerms, translatingTermsLine } = toRefs(props);
</script>

<style></style>
