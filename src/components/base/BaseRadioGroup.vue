<template>
  <div class="w-full px-4 py-16">
    <div class="w-full max-w-md mx-auto">
      <RadioGroup v-model="selected">
        <div class="space-y-2">
          <RadioGroupOption
            as="template"
            v-for="(option, idx) in options"
            :key="idx"
            :value="option"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-offset-2 ring-offset-blue-300 ring-white ring-opacity-60'
                  : '',
                checked ? 'bg-green-900 bg-opacity-75 text-white ' : 'bg-white '
              ]"
              class="
                relative
                flex
                px-5
                py-4
                rounded-lg
                shadow-md
                cursor-pointer
                focus:outline-none
              "
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium"
                    >
                      {{ option }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-blue-100' : 'text-gray-500'"
                      class="inline"
                    >
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="flex-shrink-0 text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupOption
} from "@headlessui/vue";

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupOption
  },
  name: "BaseRadioGroup",
  props: {
    options: Array
  },

  setup(props, { emit }) {
    const selected = ref(props.options[0]);

    watch(() => {
      emit("selectAnswer", selected.value);
    });

    return { selected };
  }
};
</script>
