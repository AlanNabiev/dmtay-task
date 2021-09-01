<template>
  <SurveyCard question="What is it?" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SurveyCard from "@/components/common/SurveyCard.vue";

export default defineComponent({
  name: "Main",
  components: {
    SurveyCard
  }
});
</script>
