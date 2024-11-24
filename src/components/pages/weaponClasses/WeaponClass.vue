<template>
  <div class="rounded-lg bg-gray-950">
    <header
      class="flex items-center justify-between p-4 border-b border-gray-700"
    >
      <p class="font-bold">{{ props.weaponClass.nameText }}</p>
      <p class="text-gray-400">
        {{ props.weaponClass.weapons.length }} weapons
      </p>
    </header>
    <div class="flex flex-col divide-y divide-gray-900">
      <div
        v-for="(bonusList, index) in props.weaponClass.bonuses"
        class="flex items-center gap-4 px-4 py-2"
      >
        <p class="w-6 font-semibold text-gray-400">{{ index + 2 }}:</p>
        <p v-for="bonus in bonusList" v-html="bonus" />
      </div>
    </div>
    <div class="flex flex-wrap gap-2 p-4 border-t border-gray-700">
      <WeaponSprite
        v-for="weapon in availableWeapons"
        class="w-12 h-12 rounded-lg cursor-pointer"
        :name="weapon.name"
        :tier="Number(5 - (weapon.t1 + weapon.t2 + weapon.t3 + weapon.t4))"
        @click="openWeaponDetails(weapon.name)"
        mouseEvents
      />
    </div>
  </div>
</template>

<script setup>
import { WeaponSprite } from '@/components'
import { weapons } from '@/constants'

const store = useStore()

const props = defineProps({
  weaponClass: Object,
})

const availableWeapons = computed(() =>
  props.weaponClass.weapons.map((name) => weapons[name])
)

const openWeaponDetails = (name) => store.dispatch('openWeaponDetails', name)
</script>
