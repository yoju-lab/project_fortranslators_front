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
    <TranslateTexts
      :takeTranslatedTerm="props.takeTranslatedTerm"
      :translatingTermsLine="props.translatingTermsLine"
      :termsLength="props.sourceTerms.length"
      @changeTranslatingTermsLine="changeTranslatingTermsLine"
    />
  </div>
</template>

<script setup>
import SourceTexts from "./SourceTexts.vue";
import TranslateTexts from "./TranslatingTexts.vue";
import { defineProps, defineEmits } from "vue";

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

const emits = defineEmits(["changeTranslatingTermsLine"]);

function changeTranslatingTermsLine(index) {
  console.log(`changeTranslatingTermsLine(index) : ${index}`);
  // props.translatingTermsLine = index;
  emits("changeTranslatingTermsLine", index);
}
</script>

<style></style>
