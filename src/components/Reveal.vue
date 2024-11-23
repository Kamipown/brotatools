<template>
  <div
    class="grid transition-all duration-300"
    :class="props.show ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
  >
    <div class="overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
})
</script>
