<template>
  <div
    class="fixed inset-0 flex flex-col justify-around items-center bg-gray-300"
  >
    <h1 class="text-3xl font-bold text-green-700">Welcome!</h1>
    <p class="text-xl font-medium text-green-600">
      Pass the test and find out the number of the correct answer
    </p>
    <BaseButton to="main" color="green">Start testing!</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Welcome"
});
</script>
