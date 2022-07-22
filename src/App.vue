<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DoTranslation from "./components/DoTranslation/DoTranslation.vue";
import ApiTranslation from "./components/ApiTranslation/ApiTranslation.vue";
import { reactive } from "@vue/reactivity";

const states = reactive({
  currentMenu: "ApiTranslation",
});
</script>

<template>
  <component :is="states.currentMenu"></component>
</template>

<style>
#app {
  font-size: 10px;
}
</style>
