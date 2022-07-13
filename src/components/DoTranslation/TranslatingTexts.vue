<template>
  <div class="input-group">
    <textarea
      class="form-control"
      rows="20"
      @keypress="writeTranslatingTerm"
      placeholder="Choose a term to translate..."
      v-model="props.takeTranslatedTerm"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  translatingTermsLine: {
    type: Number,
  },
  takeTranslatedTerm: {
    type: String,
  },
});
</script>

<style></style>
