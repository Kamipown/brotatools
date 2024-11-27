<template>
  <div class="flex flex-shrink-0 h-12 bg-gray-950 border-b border-gray-700">
    <label class="flex items-center flex-[1] gap-2 px-2 cursor-text">
      <div
        v-if="search.length"
        class="flex items-center justify-center p-2 rounded hover:bg-gray-900 active:bg-gray-800 cursor-pointer"
        @click="search = ''"
      >
        <Icon name="xmark" size="sm" />
      </div>
      <Icon
        v-else
        class="mx-2 text-gray-400"
        name="magnifying-glass"
        size="sm"
      />
      <input
        class="flex-[1] h-full bg-transparent border-none"
        type="text"
        spellcheck="false"
        v-model="search"
      />
    </label>
    <div
      ref="select"
      class="relative flex items-center w-64 gap-4 p-4 border-l border-gray-700 hover:bg-gray-900 active:bg-gray-800 cursor-pointer"
      @click="toggle"
    >
      <Icon class="text-gray-400" name="arrow-up-wide-short" />
      <p class="flex-[1] font-semibold">{{ ordering }}</p>
      <Icon class="text-gray-400" name="chevron-down" size="xs" />
      <ul
        v-if="opened"
        class="absolute top-full right-0 left-[-1px] bg-gray-950 rounded-bl-lg border-b border-l border-gray-700 divide-y divide-gray-700"
      >
        <Option value="Attack speed" />
        <Option value="Base damage" />
        <Option value="Base price" />
        <Option value="Crit chance" />
        <Option value="Crit multiplier" />
        <Option value="Damage scaling" />
        <Option value="Name" />
        <Option value="Range" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/components'
import Option from './Option.vue'

const store = useStore()

const search = computed({
  get: () => store.state.weapons.search,
  set: (value) => store.dispatch('weapons/setSearch', value),
})

const select = ref(null)
const opened = ref(false)
const toggle = () => {
  opened.value = !opened.value
}
onClickOutside(select, () => {
  {
    opened.value = false
  }
})
useEventListener(window, 'keydown', ({ key }) => {
  if (key === 'Escape') {
    opened.value = false
  }
})

const ordering = computed(() => store.state.weapons.ordering)
</script>
