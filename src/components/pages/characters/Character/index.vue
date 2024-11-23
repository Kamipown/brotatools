<template>
  <div
    class="flex flex-col gap-4 p-4 rounded-lg border border-gray-700 bg-gray-950"
  >
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 bg-cover" :style="imageStyle" />
      <p class="font-bold text-lg">{{ character.nameText }}</p>
    </div>
    <div class="flex flex-col min-h-[248px] gap-1">
      <p v-for="text in character.texts" v-html="text" />
    </div>
    <div class="flex flex-col justify-end gap-2 min-h-[168px]">
      <div class="font-semibold">Starting weapons:</div>
      <div class="flex flex-wrap items-end gap-2">
        <template v-if="character.startWeapon">
          <Weapon :name="character.startWeapon" :minWeaponTier="1" />
          <div
            class="flex items-center justify-center w-16 h-16 font-bold text-xl"
          >
            +
          </div>
        </template>
        <Weapon
          v-for="weapon in character.weapons"
          :name="weapon"
          :minWeaponTier="
            ['Dwarf', 'King', 'Knight'].includes(character.name) ? 2 : 1
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { characters } from '@/constants'
import { getSprite } from '@/lib'
import Weapon from './Weapon.vue'

const props = defineProps({
  selected: String,
})

// const emits = defineEmits(['change'])

const character = computed(() =>
  characters.find(({ name }) => name === props.selected)
)

const imageStyle = computed(() =>
  getSprite(
    'characters',
    32,
    32,
    character.value.position[0],
    character.value.position[1]
  )
)
</script>
