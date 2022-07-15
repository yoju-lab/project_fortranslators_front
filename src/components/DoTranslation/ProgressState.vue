<template>
  <div>
    <div class="h6">current terms line : {{ props.translatingTermsLine }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  translatingTermsLine: {
    type: Number,
  },
});
</script>

<style></style>
