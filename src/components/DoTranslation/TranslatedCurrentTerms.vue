<template>
  <div>
    <div class="h6" @click="takeTranslatedTerm('byGoogle')">
      google : {{ props.translatedTerms.byGoogle[props.translatingTermsLine] }}
    </div>
  </div>
  <div>
    <div class="h6" @click="takeTranslatedTerm('byPapago')">
      papago : {{ props.translatedTerms.byPapago[props.translatingTermsLine] }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from "vue";
const emits = defineEmits(["takeTranslatedTerm"]);

function takeTranslatedTerm(key) {
  emits("takeTranslatedTerm", key);
}
const props = defineProps({
  translatedTerms: {
    type: Object,
  },
  translatingTermsLine: {
    type: Number,
  },
});

// const { translatedTerms, translatingTermsLine } = toRefs(props);
</script>

<style></style>
