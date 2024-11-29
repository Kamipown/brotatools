<template>
  <li
    class="flex items-center justify-between px-4 py-2 hover:bg-gray-900 active:bg-gray-800"
  >
    <p>{{ props.text }}</p>
    <Icon v-if="props.active" name="check" size="sm" />
  </li>
</template>

<script setup>
import { Icon } from '@/components'

const props = defineProps({
  text: String,
  active: Boolean,
})
</script>
