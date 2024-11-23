<template>
  <div class="flex h-full">
    <Filters />
    <div
      ref="content"
      class="flex items-center justify-center basis-full gap-8 overflow-auto"
    >
      <div class="flex flex-col gap-8" :style="contentInnerStyle">
        <Character :selected="state.characterName" />
        <CharacterFinder @found="onCharacterChange" />
        <Characters
          ref="characters"
          :selected="state.characterName"
          @change="onCharacterChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Filters,
  Character,
  CharacterFinder,
  Characters,
} from '@/components/pages/characters'

const state = reactive({
  characterName: 'WellRounded',
})

const content = ref(null)
const { width } = useElementSize(content)
const contentInnerStyle = computed(
  () => `width: ${Math.min(width.value - 64, 21 * 80 + 20 * 8)}px`
)

const onCharacterChange = (name) => {
  state.characterName = name
}
</script>
