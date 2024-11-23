<template>
  <FontAwesomeIcon :icon="icon" v-bind="attrs" />
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const attrs = useAttrs()
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const icon = computed(() => `fas fa-${props.name}`)
</script>
