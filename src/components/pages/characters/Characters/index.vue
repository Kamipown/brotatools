<template>
  <div ref="container" class="flex flex-wrap gap-2">
    <Character :style="getCharacterStyle()" />
    <Character
      v-for="character in characters"
      :selected="props.selected === character.name"
      :style="getCharacterStyle(character)"
      :hide="
        selectedStartingWeapon
          ? !character.weapons.includes(selectedStartingWeapon)
          : false
      "
      @pointerdown="emits('change', character.name)"
    />
  </div>
</template>

<script setup>
import Character from './Character.vue'
import { characters } from '@/constants'
import { getSprite } from '@/lib'

const store = useStore()

const props = defineProps({
  selected: String,
})

const emits = defineEmits(['change'])

const selectedStartingWeapon = computed(
  () => store.state.selectedStartingWeapon
)

const container = ref(null)
const { width } = useElementSize(container)

const getCharacterStyle = (character) => {
  const size = (width.value - 20 * 8) / 21
  const style = {
    width: size + 'px',
    height: size + 'px',
  }

  if (character) {
    const { backgroundImage, backgroundPosition, backgroundSize } = getSprite(
      'characters',
      size,
      size,
      character.position[0],
      character.position[1]
    )
    style.backgroundImage = backgroundImage
    style.backgroundSize = backgroundSize
    style.backgroundPosition = backgroundPosition
  }
  return style
}
</script>
