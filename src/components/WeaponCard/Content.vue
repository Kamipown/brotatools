<template>
  <div class="flex flex-col h-full">
    <header class="flex gap-4 p-3">
      <WeaponSprite
        class="w-[4.5rem] h-[4.5rem] rounded-lg"
        :name="props.weapon.name"
        :tier="props.tier"
      />
      <div class="flex flex-col gap-2" style="flex: 1">
        <div class="flex items-center justify-between">
          <p class="leading-8 text-xl font-bold">{{ nameText }}</p>
        </div>
        <div class="flex items-center gap-2">
          <WeaponClassTag
            v-for="name in props.weapon.weaponClasses"
            :name="name"
          />
        </div>
      </div>
    </header>
    <div class="">
      <Row left="Damage:" :right="damage" />
      <Row left="Critical:" :right="critical" />
      <Row left="Cooldown:" :right="cooldown" />
      <Row left="Range:" :right="range" />
      <Row
        v-if="showKnockback"
        left="Knockback:"
        :right="props.weapon.knockback[index]"
      />
      <Row
        v-if="showLifeSteal"
        left="Life Steal:"
        :right="props.weapon.lifeSteal[index]"
      />
      <Row v-if="showBounces" left="Bounces:" :right="bounces" />
      <Row v-if="showPiercing" left="Piercing:" :right="piercing" />
    </div>
    <p class="px-3 py-2" v-html="props.weapon.effects[index]"></p>
    <p class="mt-auto p-3 font-semibold text-end">
      {{ props.weapon.price[index] }}<span class="material" />
    </p>
  </div>
</template>

<script setup>
import { WeaponClassTag, WeaponSprite } from '@/components'
import Row from './Row.vue'
import {
  getCooldownText,
  getCriticalText,
  getDamageText,
  getRangeText,
} from '@/lib'

const props = defineProps({
  weapon: Object,
  tier: Number,
})

const index = computed(() => props.tier - 1)

const nameText = computed(
  () => `${props.weapon.nameText} ${['I', 'II', 'III', 'IV'][props.tier - 1]}`
)

const damage = computed(() =>
  getDamageText(
    props.weapon.damageBase[index.value],
    props.weapon.projectiles[index.value],
    props.weapon.damageMultiplier[index.value],
    props.weapon.damageScaling
  )
)

const critical = computed(() =>
  getCriticalText(
    props.weapon.critMultiplier[index.value],
    props.weapon.critChance[index.value]
  )
)

const cooldown = computed(() =>
  getCooldownText(props.weapon.cooldown[index.value])
)

const range = computed(() =>
  getRangeText(props.weapon.range[index.value], props.weapon.rangeScaling)
)

const showKnockback = computed(() => props.weapon.knockback.some((k) => k > 0))

const showLifeSteal = computed(() => props.weapon.lifeSteal.some((l) => l > 0))

const showBounces = computed(() => props.weapon.bounces.some((b) => b > 0))
const bounces = computed(() => props.weapon.bounces[index.value])

const showPiercing = computed(
  () =>
    props.weapon.piercing.some((b) => b > 0) ||
    props.weapon.piercingScaling.some((b) => b !== -50)
)
const piercing = computed(
  () =>
    `${props.weapon.piercing[index.value]} (${
      props.weapon.piercingScaling[index.value] === 0
        ? '-0'
        : props.weapon.piercingScaling[index.value]
    }% damage)`
)
</script>
