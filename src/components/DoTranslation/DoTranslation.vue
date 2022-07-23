<template>
  <!-- title doc to translate it. -->
  <div class="container">
    <!-- current Terms -->
    <div>
      <div>{{ states.translatingTermsLine }}</div>
      <TranslatedCurrentTerms
        :translatedTerms="translatedTerms"
        :translatingTermsLine="states.translatingTermsLine"
        @takeTranslatedTerm="takeTranslatedTerm"
      />
    </div>

    <!-- Translate text areas -->
    <div class="row">
      <TranslatePlace
        :sourceTerms="translatedTerms.source"
        :translatingTermsLine="states.translatingTermsLine"
        :takeTranslatedTerm="states.takeTranslatedTerm"
        @changeTranslatingTermsLine="changeTranslatingTermsLine"
      />
    </div>

    <!-- progress states -->
    <div>
      <Progressstates :translatingTermsLine="states.translatingTermsLine" />
    </div>
  </div>
</template>

<script setup>
import TranslatedCurrentTerms from "./TranslatedCurrentTerms.vue";
import TranslatePlace from "./TranslatePlace.vue";
import Progressstates from "./ProgressState.vue";
import { onMounted, reactive } from "vue";

const props = defineProps({
  translatedDoc: {
    type: Object,
  },
});

const translatedTerms = reactive({
  source: [],
  byGoogle: [],
  byPapago: [],
  byMe: [],
});

const states = reactive({
  translatingTermsLine: 0, // line of the textarea to translate
  takeTranslatedTerm: "", // take Translated Term by any
});

function getDocToTerms(key) {
  const regexToTerms = ".";
  // console.log(props.translatedDoc[key]);
  const result = props.translatedDoc[key].split(regexToTerms);
  // remove index with empty value
  if (result[result.length - 1] == "") {
    result.pop();
  }
  return result;
}

function takeTranslatedTerm(key) {
  // console.log(`takeTranslatedTerm(key) : ${key}`);
  states.takeTranslatedTerm = translatedTerms[key][states.translatingTermsLine];
}

onMounted(() => {
  translatedTerms.source = getDocToTerms("source");
  translatedTerms.byGoogle = getDocToTerms("byGoogle");
  translatedTerms.byPapago = getDocToTerms("byPapago");
  // console.log(
  //   `translatedTerms[byGoogle] : ${translatedTerms.byGoogle}`
  // );
  // console.log(`translatedTerms[byGoogle] length : ${translatedTerms.byGoogle.length}`);
});

function changeTranslatingTermsLine(index) {
  // console.log(`changeTranslatingTermsLine(index) : ${index}`);
  states.translatingTermsLine = index;
}
</script>

<style></style>
