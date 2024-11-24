<template>
  <WeaponSprite
    class="w-16 h-16 rounded-lg cursor-pointer"
    :name="props.name"
    :tier="
      Math.max(
        props.minWeaponTier,
        Number(5 - (weapon.t1 + weapon.t2 + weapon.t3 + weapon.t4))
      )
    "
    @click="openWeaponDetails"
    mouseEvents
  />
</template>

<script setup>
import { WeaponSprite } from '@/components'
import { weapons } from '@/constants'

const store = useStore()

const props = defineProps({
  name: String,
  minWeaponTier: Number,
})

const weapon = computed(() => weapons[props.name])

const openWeaponDetails = () => store.dispatch('openWeaponDetails', props.name)
</script>
