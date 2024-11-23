<template>
  <div class="flex items-center justify-center h-full">
    <p class="font-semibold text-gray-700">
      Weapon not available in tier
      {{ ['I', 'II', 'III', 'IV'][props.tier - 1] }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  tier: Number,
})
</script>
