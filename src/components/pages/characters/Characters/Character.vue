<template>
  <div
    class="rounded-lg ring-2 ring-inset cursor-pointer"
    :class="{
      'opacity-30': props.hide,
      'ring-gray-700 bg-gray-950 hover:bg-gray-800': !props.selected,
      'ring-gray-100 bg-gray-700': props.selected,
    }"
  ></div>
</template>

<script setup>
const props = defineProps({
  hide: Boolean,
  selected: Boolean,
})
</script>
