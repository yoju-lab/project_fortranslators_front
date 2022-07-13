<template>
  <!-- title doc to translate it. -->
  <div class="container">
    <!-- current Terms -->
    <div>
      <CurrentTerms />
    </div>

    <!-- text areas -->
    <div class="row">
      <TextAreas :propSourceTerms="this.translatedTerms.source" />
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
      translatedDoc: {
        source:
          'Now -- as Russia\'s economic isolation in the wake of its invasion of Ukraine pushes it closer to Beijing -- that is changing, with fanfare. The bridge would "create a new channel connecting the two countries," Xi said during the call, which took place on his 69th birthday. "The Chinese side stands ready to work with the Russian side to push for steady and long-term development of practical bilateral cooperation," Xi said.',
        byGoogle:
          '이제 -- 우크라이나 침공으로 인한 러시아의 경제적 고립으로 인해 러시아가 베이징에 더 가까워짐에 따라 -- 팡파르와 함께 변화하고 있습니다. 시 주석은 69세 생일에 열린 통화에서 "이 다리는 두 나라를 연결하는 새로운 통로를 만들 것"이라고 말했다. 시 주석은 “중국 측은 러시아 측과 함께 실질적인 양국 협력의 안정적이고 장기적인 발전을 추진할 준비가 돼 있다”고 말했다.',
        byPapago:
          '이제 -- 우크라이나의 침공 이후 러시아의 경제적 고립이 중국을 베이징에 더 가깝게 만들면서 -- 그것은 팡파르와 함께 변화하고 있습니다. 시 주석은 69번째 생일에 열린 전화통화에서 "두 나라를 연결하는 새로운 채널을 만들 것"이라고 말했다. 시 주석은 "중국 측은 러시아 측과 협력해 실질적이고 장기적인 양자 협력 발전을 추진할 준비가 돼 있다"고 말했다.',
      },
      translatedTerms: {
        source: [],
        byGoogle: [],
        byPapago: [],
        byMe: [],
      },
      translatingTermsLine: 0, // line of the textarea to translate
      translatingTerm: [], // term to translating in the textarea
      currentTermArray: [], // currentTermArray[0] is currentTerm
    };
  },
  components: {
    ProgressState,
    CurrentTerms,
    TextAreas,
  },
  setup() {
    function getDocToTerms(key) {
      const regexToTerms = ".";
      console.log(this.translatedDoc[key]);
      const result = this.translatedDoc[key].split(regexToTerms);
      return result;
    }
    onMounted(() => {
      this.translatedTerms.source = this.getDocToTerms("source");
      this.translatedTerms.byGoogle = this.getDocToTerms("byGoogle");
      this.translatedTerms.byPapago = getDocToTerms("byPapago");
      console.log(
        `this.translatedTerms[byGoogle] : ${this.translatedTerms.byGoogle}`
      );
      console.log(
        `this.translatedTerms[byGoogle] length : ${this.translatedTerms.byGoogle.length}`
      );
      // this.writeTranslatingTerm(this.translatingTermsLine);
      this.translatingTermsLine = 0;
      // this.setFromIndexArray();
    });
  },
};
</script>

<style></style>
