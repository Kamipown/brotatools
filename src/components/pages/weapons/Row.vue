<template>
  <div
    class="flex items-center gap-4 p-2 border-2 border-gray-800 rounded-lg bg-gray-950 hover:bg-gray-800 active:bg-gray-700 cursor-pointer"
    @click="() => store.dispatch('openWeaponDetails', props.weapon.name)"
  >
    <WeaponSprite
      class="w-16 h-16 rounded-lg cursor-pointer"
      :name="props.weapon.name"
      mouseEvents
    />
    <div class="flex flex-col gap-1">
      <p class="font-bold">{{ props.weapon.nameText }}</p>
      <div class="flex gap-2">
        <p
          v-for="c in props.weapon.classes"
          class="leading-8 px-2 rounded bg-black/70 hover:bg-black/40 active:bg-black/20 font-medium text-sm text-gray-400 hover:text-gray-50"
          @click.stop
        >
          {{ c }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { WeaponSprite } from '@/components'

const store = useStore()

const props = defineProps({
  weapon: Object,
})
</script>
