<template>
  <li
    class="flex items-center justify-between px-4 py-2 hover:bg-gray-900 active:bg-gray-800"
    @click="setOrdering(props.value)"
  >
    <p>{{ props.value }}</p>
    <Icon v-if="ordering === props.value" name="check" size="sm" />
  </li>
</template>

<script setup>
import { Icon } from '@/components'

const store = useStore()

const props = defineProps({
  value: String,
})

const ordering = computed(() => store.state.weapons.ordering)
const setOrdering = (value) => store.dispatch('weapons/setOrdering', value)
</script>
