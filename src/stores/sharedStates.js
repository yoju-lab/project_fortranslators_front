import { reactive, readonly } from "vue";

const translatestates = reactive({
  source: "",
  byGoogle: "",
  byPapago: "",
  byMe: "",
});

export default { translatestates };
