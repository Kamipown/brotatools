<template>
  <div
    id="app"
    class="flex flex-col h-screen bg-gray-900 text-gray-50 select-none"
  >
    <Menu ref="menu" />
    <div :style="contentStyle">
      <RouterView />
    </div>
    <WeaponDetails v-if="weaponDetails" :name="weaponDetails" />
  </div>
</template>

<script setup>
import { Menu, WeaponDetails } from '@/components'

const store = useStore()

const weaponDetails = computed(() => store.state.weaponDetails)

const menu = ref(null)
const { height } = useElementBounding(menu)
const contentStyle = computed(() => ({
  height: `calc(100vh - ${height.value}px)`,
}))
</script>
