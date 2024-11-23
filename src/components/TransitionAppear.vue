<template>
  <transition
    enter-active-class="transition-appear"
    leave-active-class="transition-appear"
    enter-from-class="scale-90 opacity-0"
    leave-to-class="scale-90 opacity-0"
    appear
  >
    <slot />
  </transition>
</template>
