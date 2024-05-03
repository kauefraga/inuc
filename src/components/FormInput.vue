<script setup lang="ts">
import { toRefs, type InputTypeHTMLAttribute } from 'vue';

const model = defineModel<string>();

const props = defineProps<{
  type: InputTypeHTMLAttribute
  placeholder: string
  id: string
}>();

const { placeholder, type } = toRefs(props);

</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :id="id"
    v-model="model"
    required="true"
    class="
      border-2 focus:border-indigo-800 hover:border-indigo-500
      p-2 rounded-sm outline-none
    "
  />
</template>
