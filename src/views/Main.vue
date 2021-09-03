<template>
  <div v-for="(item, idx) in questions.slice(0, 1)" :key="idx">
    <span class="mt-6 text-xl text-green-700 text-center"
      >Questions left:{{ questions.length }}</span
    >
    <SurveyCard
      :question="item.question"
      :answers="[...item.incorrect_answers, item.correct_answer]"
      @selAnswer="currentAnswer"
      @sendAnswerEvent="sendAnswer"
    >
    </SurveyCard>
  </div>
  <div
    v-if="!questions.length"
    class="fixed inset-0 flex flex-col justify-around items-center bg-gray-300"
  >
    <span class="text-3xl font-bold text-green-700">Congratulations!</span>
    <span class="text-xl text-green-600 text-center"
      >You answered all the questions</span
    >
    <BaseButton @click="checkAnswers" color="green" to="result"
      >See results</BaseButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import SurveyCard from "@/components/common/SurveyCard.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Main",
  components: {
    SurveyCard
  },
  setup() {
    const store = useStore();
    const questions = computed(() => {
      return store.getters["questions/questions"];
    });
    const answerForSend = ref("");
    function currentAnswer(answer) {
      answerForSend.value = answer;
    }
    const answersToSend = ref([]);
    function sendAnswer() {
      //@ts-ignore
      const currentOptions = {
        answer: "",
        question: "",
        accuracy: false
      };
      currentOptions.answer = answerForSend.value;
      currentOptions.question = questions.value[0].question;
      if (answerForSend.value === questions.value[0].correct_answer) {
        currentOptions.accuracy = true;
      }
      //@ts-ignore
      answersToSend.value.push(currentOptions);
      questions.value.shift();
    }

    function checkAnswers() {
      store.commit("answers/setAnswers", answersToSend.value);
    }

    return {
      questions,
      answerForSend,
      answersToSend,
      currentAnswer,
      sendAnswer,
      checkAnswers
    };
  }
});
</script>
