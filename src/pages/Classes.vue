<template>
  <OneColumn v-if="width <= 1610" />
  <TwoColumns v-else-if="width <= 2394" />
  <ThreeColumns v-else />
</template>

<script setup>
import { OneColumn, TwoColumns, ThreeColumns } from '@/components/pages/classes'

const { width } = useWindowSize()
</script>
