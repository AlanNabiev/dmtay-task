<template>
  <div class="mt-20 space-y-8">
    <span class="mt-10 text-xl text-green-700 font-bold">{{ question }}</span>
    <BaseRadioGroup @selectAnswer="selectedAnswer" :options="answers" />
    <BaseButton color="green">Select</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SurveyCard",
  props: {
    question: String,
    answers: {
      type: Array,
      default: function () {
        return ["Startup", "Business", "Enterprise"];
      }
    }
  },
  setup() {
    const answer = ref(null);

    function selectedAnswer(selected) {
      answer.value = selected;
    }

    return {
      answer,
      selectedAnswer
    };
  }
});
</script>
