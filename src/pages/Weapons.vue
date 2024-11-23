<template>
  <div class="flex h-full">
    <Filters />
    <div class="flex flex-col p-8 gap-3 basis-full overflow-auto">
      <Row v-for="weapon in weapons" :weapon="weapon" />
    </div>
  </div>
</template>

<script setup>
import { Filters, Row } from '@/components/pages/weapons'
import { weapons } from '@/constants'

const store = useStore()
</script>
