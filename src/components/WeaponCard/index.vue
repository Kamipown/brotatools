<template>
  <div class="rounded-lg backdrop-blur" :class="containerClassName">
    <div
      class="w-[24rem] h-[40rem] bg-black/50 border-2 rounded-lg"
      :class="contentClassName"
    >
      <Content v-if="exists" :weapon="weapon" :tier="props.tier" />
      <NoContent v-else :tier="props.tier" />
    </div>
  </div>
</template>

<script setup>
import Content from './Content.vue'
import NoContent from './NoContent.vue'

import { weapons } from '@/constants'

const props = defineProps({
  name: String,
  tier: Number,
})

const containerClassName = computed(
  () =>
    ['bg-gray-800/70', 'bg-blue-950/70', 'bg-purple-950/70', 'bg-red-950/70'][
      props.tier - 1
    ]
)
const contentClassName = computed(
  () =>
    [
      'border-gray-700',
      'border-blue-900',
      'border-purple-900',
      'border-red-900',
    ][props.tier - 1]
)

const weapon = computed(() => weapons[props.name])

const exists = computed(() => weapon.value[`t${props.tier}`])
</script>
