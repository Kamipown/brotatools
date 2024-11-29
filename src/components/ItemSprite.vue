<template>
  <div
    ref="container"
    class="flex-shrink-0 ring-inset"
    :class="className"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup>
import { items } from '@/constants'
import { getSprite } from '@/lib'

const props = defineProps({
  name: String,
  mouseEvents: Boolean,
})

const container = ref(null)
const { width, height } = useElementSize(container)

const item = computed(() => items[props.name])

const classNames = [
  'bg-gray-800 ring-2 ring-gray-900',
  'bg-blue-950 ring-2 ring-blue-900',
  'bg-purple-950 ring-2 ring-purple-900',
  'bg-red-950 ring-2 ring-red-900',
]
const classNamesEvents = [
  'hover:bg-gray-700 active:bg-gray-600',
  'hover:bg-blue-900 active:bg-blue-800',
  'hover:bg-purple-900 active:bg-purple-800',
  'hover:bg-red-900 active:bg-red-800',
]

const className = computed(() => {
  const index = item.value.tier - 1
  return props.mouseEvents
    ? `${classNames[index]} ${classNamesEvents[index]}`
    : classNames[index]
})

const style = computed(() =>
  getSprite(
    'items',
    width.value,
    height.value,
    item.value.position[0],
    item.value.position[1]
  )
)
</script>
