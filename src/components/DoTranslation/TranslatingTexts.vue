<template>
  <div class="input-group">
    <textarea
      class="form-control"
      rows="20"
      @keypress="writeTranslatingTerms"
      placeholder="Choose a term to translate..."
      v-model="states.translatingTerms"
    ></textarea>
  </div>
</template>

<script setup>
import { defineProps, reactive, watch, defineEmits } from "vue";

const props = defineProps({
  translatingTermsLine: {
    type: Number,
  },
  takeTranslatedTerm: {
    type: String,
  },
});

const emits = defineEmits(["changeTranslatingTermsLine"]);

function changeTranslatingTermsLine(index) {
  console.log(`changeTranslatingTermsLine:${index}`);
  emits("changeTranslatingTermsLine", index);
}

const states = reactive({
  translatingTermsLine: 0,
  takeTranslatedTerm: "",
  translatingTerms: [],
});

const addTakeTermOnTranslatingTerms = function (newValue, oldValue) {
  const addElement = `<span>${newValue.takeTranslatedTerm}</span>`;
  if (newValue.translatingTermsLine === oldValue.translatingTermsLine) {
    states.translatingTerms.pop();
  }
  states.translatingTerms.push(addElement);
  console.log(states.translatingTerms);
};

function writeTranslatingTerms(event) {
  if (event.key === ".") {
    console.log(`writeTranslatingTerms : ${event.key}, ${event.key === "."}`);
    emits("changeTranslatingTermsLine", ++states.translatingTermsLine);
  }
}
watch(
  () => {
    return { ...props };
  },
  (newValue, oldValue) => {
    console.log(
      "new : ",
      newValue.translatingTermsLine,
      "old : ",
      oldValue.translatingTermsLine
    );
    addTakeTermOnTranslatingTerms(newValue, oldValue);
  },
  { deep: true }
);

watch();
</script>

<style></style>
