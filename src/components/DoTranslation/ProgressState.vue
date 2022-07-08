<template>
  <small> current term : {{ currentTermArray }} </small><br />
</template>

<script>
export default {
  data() {
    return {
      currentTermArray: [], // currentTermArray[0] is currentTerm
    };
  },
};
</script>

<style></style>
