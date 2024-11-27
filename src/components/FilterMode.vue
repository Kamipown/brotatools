<template>
  <div
    class="flex divide-x border divide-gray-800 border-gray-800 rounded-lg overflow-hidden"
  >
    <div
      class="flex justify-center flex-[1] py-1"
      :class="{
        'hover:bg-gray-900 active:bg-gray-800 cursor-pointer':
          props.modelValue === false,
        'bg-blue-950': props.modelValue === true,
      }"
      @click="update(true)"
    >
      <p class="font-medium text-sm">Inclusive</p>
    </div>
    <div
      class="flex justify-center flex-[1] py-1"
      :class="{
        'hover:bg-gray-900 active:bg-gray-800 cursor-pointer':
          props.modelValue === true,
        'bg-blue-950': props.modelValue === false,
      }"
      @click="update(false)"
    >
      <p class="font-medium text-sm">Exclusive</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
})

const emits = defineEmits(['update:modelValue'])

const update = (value) => {
  if (value !== props.modelValue) emits('update:modelValue', value)
}
</script>
