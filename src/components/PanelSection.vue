<template>
  <section>
    <header
      class="sticky top-0 flex items-center justify-between px-4 py-3 bg-gray-950 hover:bg-gray-900 border-b border-gray-700 text-gray-400 hover:text-gray-50 cursor-pointer"
      @click="toggle"
    >
      <p class="font-bold text-sm">{{ props.title }}</p>
      <Icon name="chevron-down" size="sm" />
    </header>
    <Reveal :show="show">
      <div class="pt-4 pb-8">
        <slot />
      </div>
    </Reveal>
  </section>
</template>

<script setup>
import { Icon, Reveal } from '@/components'

const props = defineProps({
  title: String,
})

const show = ref(true)

const toggle = () => {
  show.value = !show.value
}
</script>
