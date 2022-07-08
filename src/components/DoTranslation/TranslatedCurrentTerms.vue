<template>
  <div>
    <small @click="takeTranslatedTerm('google')"> google : {{}} </small>
  </div>
  <div>
    <small @click="takeTranslatedTerm('papago')"> papago : {{}} </small>
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
