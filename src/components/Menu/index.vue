<template>
  <header class="flex items-center h-16 gap-16 px-4 bg-black">
    <img class="h-8" src="/logo.png" draggable="false" />
    <nav class="flex h-full">
      <Link name="Characters" text="Characters" />
      <Link name="Weapons" text="Weapons" />
      <Link name="WeaponClasses" text="Classes" />
      <Link name="Items" text="Items" />
    </nav>
  </header>
</template>

<script setup>
import Link from './Link.vue'
</script>
