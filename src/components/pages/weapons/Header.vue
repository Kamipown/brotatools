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
  get: () => store.state.weapons.search,
  set: (value) => store.dispatch('weapons/setSearch', value),
})
const ordering = computed({
  get: () => store.state.weapons.ordering,
  set: (value) => store.dispatch('weapons/setOrdering', value),
})

const orderingOptions = [
  { text: 'Attack speed', value: 'attackSpeed' },
  { text: 'Base damage', value: 'baseDamage' },
  { text: 'Base price', value: 'basePrice' },
  { text: 'Crit chance', value: 'critChance' },
  { text: 'Crit multiplier', value: 'critMultiplier' },
  { text: 'Damage scaling', value: 'damageScaling' },
  { text: 'Name', value: 'name' },
  { text: 'Range', value: 'range' },
]
</script>
