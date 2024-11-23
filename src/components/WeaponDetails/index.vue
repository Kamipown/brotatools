<template>
  <div
    class="absolute z-10 top-0 left-0 flex items-center justify-center gap-8 w-full h-full bg-black/70"
    @click="close"
  >
    <WeaponCard :name="weaponDetails" :tier="1" @click.stop />
    <WeaponCard :name="weaponDetails" :tier="2" @click.stop />
    <WeaponCard :name="weaponDetails" :tier="3" @click.stop />
    <WeaponCard :name="weaponDetails" :tier="4" @click.stop />
  </div>
</template>

<script setup>
import { WeaponCard } from '@/components'
import { weapons } from '@/constants'

const store = useStore()

const weaponDetails = computed(() => store.state.weaponDetails)
const weapon = weapons.find(({ name }) => name === weaponDetails)

const close = () => store.dispatch('closeWeaponDetails')

useEventListener(window, 'keydown', ({ key }) => {
  if (key === 'Escape') close()
})
</script>
