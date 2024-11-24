<template>
  <div class="flex flex-col h-full gap-8 p-8 overflow-auto">
    <WeaponClass
      v-for="weaponClass in Object.values(weaponClasses)"
      :weaponClass="weaponClass"
    />
  </div>
</template>

<script setup>
import WeaponClass from './WeaponClass.vue'
import { weaponClasses } from '@/constants'
</script>
