<template>
  <div
    class="flex px-2 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 active:bg-blue-900 cursor-pointer"
  >
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
})
</script>
