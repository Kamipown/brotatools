<template>
  <div
    class="flex items-center gap-3 px-4 py-1 hover:bg-gray-900 cursor-pointer"
    @click.stop="toggle"
  >
    <div
      class="flex items-center justify-center w-5 h-5 gap-3 border rounded"
      :class="{
        'border-gray-600': !props.modelValue,
        'border-blue-900 bg-blue-950': props.modelValue,
      }"
    >
      <Icon v-if="props.modelValue" name="check" size="xs" />
    </div>
    <p :class="props.textClass" v-html="props.text" />
  </div>
</template>

<script setup>
import { Icon } from '@/components'

const props = defineProps({
  text: String,
  textClass: String,
  modelValue: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const toggle = () => {
  emits('update:modelValue', !props.modelValue)
}
</script>
