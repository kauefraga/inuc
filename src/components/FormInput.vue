<script setup lang="ts">
import { toRefs, type InputTypeHTMLAttribute } from 'vue';

const model = defineModel<string>();

const props = defineProps<{
  type: InputTypeHTMLAttribute
  placeholder?: string
  id: string
  label: string
}>();

const { label, placeholder, type, id } = toRefs(props);

</script>

<template>
  <label
    :for="id"
    class="select-none font-medium"
  >
    {{ label }}
  </label>
  <input
    :type="type"
    :placeholder="placeholder"
    :id="id"
    v-model="model"
    required="true"
    class="
      border-2 p-2 rounded-sm outline-none
      focus:border-indigo-800 hover:border-indigo-500 transition
    "
  />
</template>
