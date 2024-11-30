<template>
  <Tag
    :text="weaponClasses[props.name].nameText"
    @mouseenter="(e) => showWeaponClassTooltip(e, props.name)"
    @mouseleave="hideWeaponClassTooltip"
  />
</template>

<script setup>
import { Tag } from '@/components'
import { weaponClasses } from '@/constants'

const store = useStore()

const props = defineProps({
  name: String,
})

const showWeaponClassTooltip = ({ target }, name) => {
  store.dispatch('weaponClasses/showTooltip', { hook: target, name })
}

const hideWeaponClassTooltip = () => {
  store.dispatch('weaponClasses/hideTooltip')
}
</script>
