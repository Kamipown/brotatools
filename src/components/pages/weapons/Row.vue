<template>
  <div
    class="flex items-center gap-4 p-2 border border-gray-700 rounded-lg bg-gray-950 hover:bg-gray-900 active:bg-gray-800 cursor-pointer"
    @click="() => store.dispatch('openWeaponDetails', props.weapon.name)"
  >
    <WeaponSprite
      class="w-16 h-16 rounded-lg cursor-pointer"
      :name="props.weapon.name"
      :tier="props.weapon.tier"
      mouseEvents
    />
    <div class="flex items-center justify-between flex-[1] gap-2">
      <div class="flex flex-col flex-[4] gap-1 pr-8">
        <p class="font-bold">{{ props.weapon.nameText }}</p>
        <div class="flex gap-2">
          <p
            v-for="weaponClass in props.weapon.weaponClasses"
            class="leading-8 px-2 rounded bg-black/70 hover:bg-black/40 active:bg-black/20 font-medium text-sm text-gray-400 hover:text-gray-50"
            @click.stop
          >
            {{ weaponClasses[weaponClass].nameText }}
          </p>
        </div>
      </div>
      <p class="flex-[5] font-medium" v-html="damage" />
      <p class="flex-[4] font-medium" v-html="critical" />
      <p class="flex-[4] font-medium" v-html="cooldown" />
      <p class="flex-[4] font-medium" v-html="range" />
      <p class="flex-[2] font-medium text-right" v-html="price" />
    </div>
  </div>
</template>

<script setup>
import { WeaponSprite } from '@/components'
import { weaponClasses } from '@/constants'
import {
  getCooldownText,
  getCriticalText,
  getDamageText,
  getRangeText,
  getSpan,
} from '@/lib'

const store = useStore()

const props = defineProps({
  weapon: Object,
})

const tier = computed(() => props.weapon.tier - 1)

const damage = computed(() =>
  getDamageText(
    props.weapon.damageBase[tier.value],
    props.weapon.projectiles[tier.value],
    props.weapon.damageMultiplier[tier.value],
    props.weapon.damageScaling
  )
)

const critical = computed(() =>
  getCriticalText(
    props.weapon.critMultiplier[tier.value],
    props.weapon.critChance[tier.value]
  )
)

const cooldown = computed(() =>
  getCooldownText(props.weapon.cooldown[tier.value])
)

const range = computed(() =>
  getRangeText(props.weapon.range[tier.value], props.weapon.rangeScaling)
)

const price = computed(
  () => `${props.weapon.price[tier.value]}${getSpan('material', '')}`
)
</script>
