<template>
  <div class="mt-20 space-y-4">
    <span class="mt-10 text-xl text-green-700 font-bold">{{ question }}</span>
    <BaseRadioGroup @selectAnswer="selectedAnswer" :options="answers" />
    <BaseButton @click.stop="sendAnswer" color="green" :disabled="!answer"
      >Select</BaseButton
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { postAnswer } from "@/api/postAnswer.api";

export default defineComponent({
  name: "SurveyCard",
  props: {
    question: String,
    answers: {
      type: Array
    }
  },
  setup(_, { emit }) {
    const answer = ref(null);

    function selectedAnswer(selected) {
      answer.value = selected;
    }

    function sendAnswer() {
      emit("sendAnswerEvent");
      postAnswer(answer.value);
      answer.value = null;
    }

    watchEffect(() => {
      emit("selAnswer", answer.value);
    });

    return {
      answer,
      selectedAnswer,
      sendAnswer
    };
  }
});
</script>
