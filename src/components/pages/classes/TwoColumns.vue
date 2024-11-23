<template>
  <div class="flex h-full gap-8 p-8 overflow-auto">
    <div class="flex flex-col gap-8" style="flex: 1">
      <Class :c="classes[0]" />
      <Class :c="classes[2]" />
      <Class :c="classes[4]" />
      <Class :c="classes[6]" />
      <Class :c="classes[8]" />
      <Class :c="classes[10]" />
      <Class :c="classes[12]" />
      <Class :c="classes[14]" />
      <Class :c="classes[16]" />
    </div>
    <div class="flex flex-col gap-8" style="flex: 1">
      <Class :c="classes[1]" />
      <Class :c="classes[3]" />
      <Class :c="classes[5]" />
      <Class :c="classes[7]" />
      <Class :c="classes[9]" />
      <Class :c="classes[11]" />
      <Class :c="classes[13]" />
      <Class :c="classes[15]" />
    </div>
  </div>
</template>

<script setup>
import Class from './Class.vue'
import { classes } from '@/constants'
</script>
