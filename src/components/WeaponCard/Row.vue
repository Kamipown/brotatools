<template>
  <div class="flex items-center gap-2 px-3 py-1 even:bg-black/30">
    <p class="font-semibold text-amber-200">{{ props.left }}</p>
    <p class="font-medium" v-html="props.right" />
  </div>
</template>

<script setup>
const props = defineProps({
  left: String,
  right: [Number, String],
})
</script>
