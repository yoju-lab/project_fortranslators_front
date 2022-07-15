<template>
  <div class="input-group">
    <div>{{ props.translatingTermsLine }}</div>
    <textarea
      class="form-control"
      rows="20"
      @keydown="writeTranslatingTerms"
      @click="moveTranslatingTerms"
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
  termsLength: {
    type: Number,
  },
});

const emits = defineEmits(["changeTranslatingTermsLine"]);

function changeTranslatingTermsLine(index) {
  console.log(`changeTranslatingTermsLine:${index}`);
  emits("changeTranslatingTermsLine", index);
}

const states = reactive({
  translatingTermsLine: 0,
  translatingTermArray: [],
  translatingTerms: "",
});

function generateArrayToStringForTerms(termsArray) {
  const result = termsArray.join(". ");
  return result;
}

const addTakeTermOnTerms = function (newValue, oldValue) {
  // const addElement = `<span>${newValue.takeTranslatedTerm}</span>`;
  const addElement = `${newValue.takeTranslatedTerm}`;
  if (newValue.translatingTermsLine === oldValue.translatingTermsLine) {
    states.translatingTermArray.pop();
  }
  states.translatingTermArray.push(addElement);
  console.log(`${typeof states.translatingTerms}, ${states.translatingTerms}`);

  states.translatingTerms = generateArrayToStringForTerms(states.translatingTermArray);
};

let period_index = -2;
function writeTranslatingTerms(event) {
  // console.log(`writeTranslatingTerms() : ${event.keyCode}`);
  switch (event.keyCode) {
    case 190: // Period
      // console.log(`writeTranslatingTerms : ${event.key}, ${event.key === "."}`);
      console.log(
        `writeTranslatingTerms period : ${props.termsLength}, ${states.translatingTermsLine}`
      );
      if (props.termsLength >= states.translatingTermsLine) {
        changeTranslatingTermsLine(++states.translatingTermsLine);
      }
      break;
    case 8: // BACKSPACE was pressed
      // console.log(
      //   `BACKSPACE - period_index : ${period_index}, ${
      //     states.translatingTerms.length - 1
      //   }`
      // );
      if (
        (states.translatingTermsLine > 0) &
        (period_index == states.translatingTerms.length - 1)
      ) {
        changeTranslatingTermsLine(--states.translatingTermsLine);
      }
      period_index = states.translatingTerms.lastIndexOf(".");

      break;
    case 46: // 'DELETE was pressed
      break;
    default:
  }
}

function moveTranslatingTerms(event) {}

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
    if (newValue.takeTranslatedTerm !== oldValue.takeTranslatedTerm) {
      addTakeTermOnTerms(newValue, oldValue);
    }
  },
  { deep: true }
);
</script>

<style></style>
