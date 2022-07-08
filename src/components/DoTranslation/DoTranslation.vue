<template>
  <!-- title doc to translate it. -->
  <div class="container">
    <!-- current Terms -->
    <div>
      <CurrentTerms />
    </div>

    <!-- text areas -->
    <div class="row">
      <TextAreas />
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
export default {
  data() {
    return {};
  },
  components: {
    ProgressState,
    CurrentTerms,
    TextAreas,
  },
};
</script>

<style></style>
