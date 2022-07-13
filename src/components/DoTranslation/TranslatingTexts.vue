<template>
  <div class="input-group">
    <textarea
      class="form-control"
      rows="20"
      @keypress="writeTranslatingTerm"
      placeholder="Choose a term to translate..."
      v-model="states.takeTranslatedTerm"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, reactive, toRefs, watch, computed } from "vue";

const props = defineProps({
  translatingTermsLine: {
    type: Number,
  },
  takeTranslatedTerm: {
    type: String,
  },
});

const states = reactive({
  translatingTermsLine: 0,
  takeTranslatedTerm: "",
});
const { translatingTermsLine, takeTranslatedTerm } = toRefs(props);

const addElementWithTakeTerm = function () {
  states.takeTranslatedTerm = `<span>${props.takeTranslatedTerm}</span>`;
};

watch(
  takeTranslatedTerm,
  (newValue, oldValue) => {
    console.log("new : ", newValue, "old : ", oldValue);
    addElementWithTakeTerm();
  }
  // { deep: true }
);
</script>

<style></style>
