<template>
  <TransitionAppear v-if="showSearchbar">
    <div>
      <input
        ref="inputRef"
        class="w-full h-14 p-4 bg-gray-950 rounded-lg border border-gray-700"
        type="text"
        placeholder="Search"
        v-model="input"
      />
    </div>
  </TransitionAppear>
</template>

<script setup>
import { TransitionAppear } from '@/components'
import { searchInCharacters } from '@/lib'

const emits = defineEmits(['found'])

const showSearchbar = ref(false)
const inputRef = ref(null)
useEventListener(window, 'keydown', async (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault()
    showSearchbar.value = true
    await nextTick()
    inputRef.value.focus()
  }
})

const input = defineModel({ default: '' })

watch(input, (_value) => {
  const match = searchInCharacters(_value)
  if (match) emits('found', match)
})
</script>
