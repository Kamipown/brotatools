<template>
  <ToolBar
    v-model:search="search"
    v-model:ordering="ordering"
    :orderingOptions="orderingOptions"
  />
</template>

<script setup>
import { ToolBar } from '@/components'

const store = useStore()

const search = computed({
  get: () => store.state.items.search,
  set: (value) => store.dispatch('items/setSearch', value),
})
const ordering = computed({
  get: () => store.state.items.ordering,
  set: (value) => store.dispatch('items/setOrdering', value),
})

const orderingOptions = [
  { text: 'Base price', value: 'basePrice' },
  { text: 'Name', value: 'name' },
]
</script>
