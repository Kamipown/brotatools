<template>
  <div class="flex h-full">
    <Filters />
    <div class="flex flex-col flex-[1]">
      <Header />
      <div
        v-if="searchApplied.length"
        class="flex flex-col basis-full p-4 gap-2 overflow-auto"
      >
        <Row v-for="weapon in searchApplied" :weapon="weapon" />
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center flex-[1] gap-2"
      >
        <p>No weapon found.</p>
        <Button text="Reset filters" @click="resetFilters" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components'
import { Filters, Header, Row } from '@/components/pages/weapons'

const store = useStore()

const searchApplied = computed(() => store.getters['weapons/searchApplied'])

const resetFilters = () => {
  store.dispatch('weapons/resetTier')
  store.dispatch('weapons/resetType')
  store.dispatch('weapons/resetDamageScaling')
  store.dispatch('weapons/resetWeaponClass')
  store.dispatch('weapons/setSearch', '')
}
</script>
