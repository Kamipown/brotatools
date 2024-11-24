<template>
  <div class="flex h-full">
    <Filters />
    <div class="flex flex-col flex-[1]">
      <Header />
      <div class="flex flex-col basis-full p-4 gap-2 overflow-auto">
        <Row v-for="weapon in sortApplied" :weapon="weapon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Filters, Header, Row } from '@/components/pages/weapons'

const store = useStore()

const sortApplied = computed(() => store.getters['weapons/sortApplied'])
</script>
