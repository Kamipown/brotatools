<template>
  <ul class="divide-y divide-gray-900">
    <li
      v-for="weapon in availableStartingWeapons"
      class="flex items-center gap-3 px-2 py-1 cursor-pointer"
      :class="{
        'hover:bg-gray-900': selectedStartingWeapon !== weapon.name,
        'bg-blue-950': selectedStartingWeapon === weapon.name,
      }"
      @click="() => store.dispatch('setSelectedStartingWeapon', weapon.name)"
    >
      <WeaponSprite class="w-8 h-8" :name="weapon.name" />
      <p class="basis-full">{{ weapon.nameText }}</p>
      <p class="font-semibold text-xs text-gray-400">{{ weapon.count }}</p>
    </li>
  </ul>
</template>

<script setup>
import flatten from 'ramda/src/flatten'
import uniq from 'ramda/src/uniq'
import { WeaponSprite } from '@/components'
import { characters, weapons } from '@/constants'

const store = useStore()
const selectedStartingWeapon = computed(
  () => store.state.selectedStartingWeapon
)

const allStartingWeapons = computed(() =>
  flatten(Object.values(characters).map(({ weapons }) => weapons))
)

const names = computed(() => uniq(allStartingWeapons.value).sort())

const availableStartingWeapons = computed(() =>
  names.value.map((name) => {
    const weapon = weapons[name]
    return {
      name: weapon.name,
      nameText: weapon.nameText,
      count: allStartingWeapons.value.reduce(
        (acc, n) => acc + (n === name ? 1 : 0),
        0
      ),
    }
  })
)
</script>
