import { reactive } from "vue";

function useTranslatedDoc() {
  const translatedDoc = reactive({
    source: "",
    byGoogle: "",
    byPapago: "",
  });

  return { translatedDoc };
}

export default useTranslatedDoc;
