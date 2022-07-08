<template>
  <div class="input-group">
    <textarea
      class="form-control"
      readonly
      rows="20"
      aria-label="With textarea"
      v-model="source"
      v-once
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      source:
        'Now -- as Russia\'s economic isolation in the wake of its invasion of Ukraine pushes it closer to Beijing -- that is changing, with fanfare. The bridge would "create a new channel connecting the two countries," Xi said during the call, which took place on his 69th birthday. "The Chinese side stands ready to work with the Russian side to push for steady and long-term development of practical bilateral cooperation," Xi said.',
    };
  },
};
</script>

<style></style>
