<template>
  <div class="flex h-full">
    <Filters />
    <div class="flex flex-col flex-[1]">
      <Header />
      <div v-if="searchApplied.length" class="basis-full overflow-auto">
        <div
          class="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-2 p-4"
        >
          <ItemCard v-for="item in searchApplied" :item="item" />
        </div>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center flex-[1] gap-2"
      >
        <p>No item found.</p>
        <Button text="Reset filters" @click="resetFilters" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button, ItemCard } from '@/components'
import { Filters, Header } from '@/components/pages/items'

const store = useStore()

const searchApplied = computed(() => store.getters['items/searchApplied'])

const resetFilters = () => {
  store.dispatch('items/resetTier')
  store.dispatch('items/resetTag')
  store.dispatch('items/setSearch', '')
}
</script>
