<template>
  <!-- title doc to translate it. -->
  <div class="container">
    <!-- current Terms -->
    <div>
      <CurrentTerms />
    </div>

    <!-- text areas -->
    <div class="row">
      <TextAreas sourceTexts="sourceTexts" />
    </div>

    <!-- progress state -->
    <div>
      <ProgressState />
    </div>
  </div>
</template>

<script>
import CurrentTerms from "./TranslatedCurrentTerms.vue";
import TextAreas from "./TranslatePlace.vue";
import ProgressState from "./ProgressState.vue";
import { onMounted } from "vue";
export default {
  data() {
    return {
      sourceTexts:
        'Now -- as Russia\'s economic isolation in the wake of its invasion of Ukraine pushes it closer to Beijing -- that is changing, with fanfare. The bridge would "create a new channel connecting the two countries," Xi said during the call, which took place on his 69th birthday. "The Chinese side stands ready to work with the Russian side to push for steady and long-term development of practical bilateral cooperation," Xi said.',
    };
  },
  components: {
    ProgressState,
    CurrentTerms,
    TextAreas,
  },
};
</script>

<style></style>
