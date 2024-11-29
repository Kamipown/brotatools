<template>
  <div class="flex gap-4 p-4 rounded-lg bg-gray-950 border border-gray-700">
    <ItemSprite
      class="w-[3.75rem] h-[3.75rem] rounded-lg"
      :name="props.item.name"
    />
    <div class="flex flex-col flex-[1] gap-3">
      <div class="flex items-center justify-between">
        <p class="font-bold">{{ props.item.nameText }}</p>
        <p v-if="limit" class="font-medium text-gray-400">{{ limit }}</p>
      </div>
      <p class="flex-[1] leading-6" v-html="props.item.effect" />
      <p class="self-end font-semibold text-right">
        {{ props.item.price }}<span class="material" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { ItemSprite } from '@/components'

const props = defineProps({
  item: Object,
})

const limit = computed(() => {
  if (props.item.limit === 1) return 'Unique'
  if (props.item.limit > 1) return `0/${props.item.limit}`
})
</script>
