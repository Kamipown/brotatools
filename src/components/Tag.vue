<template>
  <p
    class="leading-8 px-2 rounded bg-black/70 hover:bg-black/40 active:bg-black/20 font-medium text-sm text-gray-400 hover:text-gray-50"
  >
    {{ props.text }}
  </p>
</template>

<script setup>
const props = defineProps({
  text: String,
})
</script>
