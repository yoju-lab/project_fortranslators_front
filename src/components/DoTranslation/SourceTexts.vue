<template>
  <div class="input-group">
    <div>{{ props.translatingTermsLine }}</div>
    <textarea
      class="form-control"
      readonly
      rows="20"
      aria-label="With textarea"
      v-model="props.sourceTerms"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

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
