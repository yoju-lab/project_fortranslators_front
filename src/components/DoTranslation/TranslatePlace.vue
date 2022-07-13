<template>
  <div class="col-6">
    <!-- source texts -->
    <SourceTexts
      :sourceTerms="props.sourceTerms"
      :translatingTermsLine="props.translatingTermsLine"
    />
  </div>
  <div class="col-6">
    <!-- translate Texts -->
    <TranslateTexts :takeTranslatedTerm="props.takeTranslatedTerm" />
  </div>
</template>

<script setup>
import SourceTexts from "./SourceTexts.vue";
import TranslateTexts from "./TranslatingTexts.vue";
import { defineProps, toRefs } from "vue";

const props = defineProps({
  sourceTerms: {
    type: Array,
  },
  translatingTermsLine: {
    type: Number,
  },
  takeTranslatedTerm: {
    type: String,
  },
});
</script>

<style></style>
