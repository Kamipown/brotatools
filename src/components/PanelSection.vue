<template>
  <section>
    <header
      class="sticky top-0 flex items-center justify-between h-12 px-4 bg-gray-950 hover:bg-gray-900 border-b border-gray-700 text-gray-400 hover:text-gray-50 cursor-pointer"
      @click="toggle"
    >
      <p class="font-bold text-sm">{{ props.title }}</p>
      <div
        v-if="resetable"
        class="flex items-center justify-center -mr-2 p-2 rounded hover:bg-gray-800 active:bg-gray-700"
        @click.stop="reset"
      >
        <Icon name="arrow-rotate-left" size="sm" />
      </div>
      <Icon v-else name="chevron-down" size="sm" />
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
  resetable: Boolean,
})

const emits = defineEmits(['reset'])

const show = ref(true)

const toggle = () => {
  show.value = !show.value
}

const reset = () => {
  emits('reset')
}
</script>
