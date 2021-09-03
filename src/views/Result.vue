<template>
  <h1 class="text-2xl font-bold text-green-700">Results</h1>
  <ul class="flex flex-col rounded-t-xl rounded-xl">
    <li
      v-for="(Item, idx) in Ianswers"
      :key="idx"
      :class="Item.accuracy ? 'bg-green-300' : 'bg-red-300'"
      class="border rounded-xl py-1 px-4"
    >
      <div class="flex justify-between">
        <span class="text-left font-bold text-green-800">{{
          Item.question
        }}</span>
        <span class="text-right" v-if="Item.accuracy">Correct</span>
        <span class="text-right" v-else>Incorrect</span>
      </div>
      <span class="text-xl font-medium text-base"
        >Your answer: {{ Item.answer }}</span
      >
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Result",
  setup() {
    const store = useStore();
    const Ianswers = computed(() => {
      return store.getters["answers/answers"];
    });

    return {
      Ianswers
    };
  }
});
</script>
