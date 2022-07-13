<template>
  <div>
    <div class="h5" @click="takeTranslatedTerm('google')">google : {{}}</div>
  </div>
  <div>
    <div class="h5" @click="takeTranslatedTerm('papago')">papago : {{}}</div>
  </div>
</template>

<script>
export default {
  methods: {
    takeTranslatedTerm(translator) {
      return true;
    },
  },
};
</script>

<style></style>
