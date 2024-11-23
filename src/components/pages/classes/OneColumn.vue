<template>
  <div class="flex flex-col h-full gap-8 p-8 overflow-auto">
    <Class v-for="c in classes" :c="c" />
  </div>
</template>

<script setup>
import Class from './Class.vue'
import { classes } from '@/constants'
</script>
