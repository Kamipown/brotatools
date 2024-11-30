<template>
  <RouterLink
    class="flex items-center h-full p-6"
    :class="{
      'hover:bg-gray-900 active:bg-gray-800': !active,
      'bg-blue-950': active,
    }"
    :to="{ name: props.name }"
  >
    <p class="font-semibold">{{ props.text }}</p>
  </RouterLink>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
  name: String,
  text: String,
})

const active = computed(() => route.name === props.name)
</script>
