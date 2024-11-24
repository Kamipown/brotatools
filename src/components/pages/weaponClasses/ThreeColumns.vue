<template>
  <div class="flex h-full gap-8 p-8 overflow-auto">
    <div class="flex flex-col flex-[1] gap-8">
      <WeaponClass :weaponClass="weaponClasses['blade']" />
      <WeaponClass :weaponClass="weaponClasses['ethereal']" />
      <WeaponClass :weaponClass="weaponClasses['heavy']" />
      <WeaponClass :weaponClass="weaponClasses['medieval']" />
      <WeaponClass :weaponClass="weaponClasses['precise']" />
      <WeaponClass :weaponClass="weaponClasses['tool']" />
    </div>
    <div class="flex flex-col flex-[1] gap-8">
      <WeaponClass :weaponClass="weaponClasses['blunt']" />
      <WeaponClass :weaponClass="weaponClasses['explosive']" />
      <WeaponClass :weaponClass="weaponClasses['legendary']" />
      <WeaponClass :weaponClass="weaponClasses['musical']" />
      <WeaponClass :weaponClass="weaponClasses['primitive']" />
      <WeaponClass :weaponClass="weaponClasses['unarmed']" />
    </div>
    <div class="flex flex-col flex-[1] gap-8">
      <WeaponClass :weaponClass="weaponClasses['elemental']" />
      <WeaponClass :weaponClass="weaponClasses['gun']" />
      <WeaponClass :weaponClass="weaponClasses['medical']" />
      <WeaponClass :weaponClass="weaponClasses['naval']" />
      <WeaponClass :weaponClass="weaponClasses['support']" />
    </div>
  </div>
</template>

<script setup>
import WeaponClass from './WeaponClass.vue'
import { weaponClasses } from '@/constants'
</script>
