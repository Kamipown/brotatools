<template>
  <Panel>
    <PanelSection title="Tiers" :resetable="tierResetable" @reset="resetTier">
      <Checkbox text="Lowest tier" v-model="lowestTier" />
      <Checkbox text="All tiers" v-model="allTiers" />
      <PanelSeparator />
      <Checkbox textClass="text-gray-400" text="Tier I" v-model="tier1" />
      <Checkbox textClass="text-blue-400" text="Tier II" v-model="tier2" />
      <Checkbox textClass="text-purple-400" text="Tier III" v-model="tier3" />
      <Checkbox textClass="text-red-400" text="Tier IV" v-model="tier4" />
    </PanelSection>
    <PanelSection title="Types" :resetable="typeResetable" @reset="resetType">
      <Checkbox text="Melee" v-model="melee" />
      <Checkbox text="Ranged" v-model="ranged" />
    </PanelSection>
    <PanelSection
      title="Damage scaling"
      :resetable="damageScalingResetable"
      @reset="resetDamageScaling"
    >
      <FilterMode class="mx-4 mb-4" v-model="damageScalingInclusive" />
      <Checkbox
        :text="`${stat('meleeDamage')} Melee Damage`"
        v-model="meleeDamage"
      />
      <Checkbox
        :text="`${stat('rangedDamage')} Ranged Damage`"
        v-model="rangedDamage"
      />
      <Checkbox
        :text="`${stat('elementalDamage')} Elemental Damage`"
        v-model="elementalDamage"
      />
      <Checkbox
        :text="`${stat('engineering')} Engineering`"
        v-model="engineering"
      />
      <PanelSeparator />
      <Checkbox :text="`${stat('armor')} Armor`" v-model="armor" />
      <Checkbox
        :text="`${stat('attackSpeed')} Attack Speed`"
        v-model="attackSpeed"
      />
      <Checkbox :text="`${stat('curse')} Curse`" v-model="curse" />
      <Checkbox
        :text="`${stat('harvesting')} Harvesting`"
        v-model="harvesting"
      />
      <Checkbox :text="`${stat('level')} Level`" v-model="level" />
      <Checkbox :text="`${stat('lifeSteal')} Life Steal`" v-model="lifeSteal" />
      <Checkbox :text="`${stat('luck')} Luck`" v-model="luck" />
      <Checkbox :text="`${stat('maxHP')} Max HP`" v-model="maxHP" />
      <Checkbox :text="`${stat('range')} Range`" v-model="range" />
      <Checkbox :text="`${stat('speed')} Speed`" v-model="speed" />
    </PanelSection>
    <PanelSection
      title="Classes"
      :resetable="weaponClassResetable"
      @reset="resetWeaponClass"
    >
      <FilterMode class="mx-4 mb-4" v-model="weaponClassInclusive" />
      <Checkbox text="Blade" v-model="blade" />
      <Checkbox text="Blunt" v-model="blunt" />
      <Checkbox text="Elemental" v-model="elemental" />
      <Checkbox text="Ethereal" v-model="ethereal" />
      <Checkbox text="Explosive" v-model="explosive" />
      <Checkbox text="Gun" v-model="gun" />
      <Checkbox text="Heavy" v-model="heavy" />
      <Checkbox text="Legendary" v-model="legendary" />
      <Checkbox text="Medical" v-model="medical" />
      <Checkbox text="Medieval" v-model="medieval" />
      <Checkbox text="Musical" v-model="musical" />
      <Checkbox text="Naval" v-model="naval" />
      <Checkbox text="Precise" v-model="precise" />
      <Checkbox text="Primitive" v-model="primitive" />
      <Checkbox text="Support" v-model="support" />
      <Checkbox text="Tool" v-model="tool" />
      <Checkbox text="Unarmed" v-model="unarmed" />
    </PanelSection>
  </Panel>
</template>

<script setup>
import {
  Checkbox,
  FilterMode,
  Panel,
  PanelSection,
  PanelSeparator,
} from '@/components'
import useWeaponsFilter from './useWeaponsFilter'

const store = useStore()

const stat = (v) => `<span class="stat ${v}"></span>`

const lowestTier = useWeaponsFilter('tier', 'lowestTier')
const allTiers = useWeaponsFilter('tier', 'allTiers')
const tier1 = useWeaponsFilter('tier', 'tier1')
const tier2 = useWeaponsFilter('tier', 'tier2')
const tier3 = useWeaponsFilter('tier', 'tier3')
const tier4 = useWeaponsFilter('tier', 'tier4')

const melee = useWeaponsFilter('type', 'melee')
const ranged = useWeaponsFilter('type', 'ranged')

const damageScalingInclusive = computed({
  get: () => store.state.weapons.damageScalingInclusive,
  set: (value) => store.dispatch('weapons/setDamageScalingInclusive', value),
})
const meleeDamage = useWeaponsFilter('damageScaling', 'meleeDamage')
const rangedDamage = useWeaponsFilter('damageScaling', 'rangedDamage')
const elementalDamage = useWeaponsFilter('damageScaling', 'elementalDamage')
const engineering = useWeaponsFilter('damageScaling', 'engineering')
const armor = useWeaponsFilter('damageScaling', 'armor')
const attackSpeed = useWeaponsFilter('damageScaling', 'attackSpeed')
const curse = useWeaponsFilter('damageScaling', 'curse')
const harvesting = useWeaponsFilter('damageScaling', 'harvesting')
const level = useWeaponsFilter('damageScaling', 'level')
const lifeSteal = useWeaponsFilter('damageScaling', 'lifeSteal')
const luck = useWeaponsFilter('damageScaling', 'luck')
const maxHP = useWeaponsFilter('damageScaling', 'maxHP')
const range = useWeaponsFilter('damageScaling', 'range')
const speed = useWeaponsFilter('damageScaling', 'speed')

const weaponClassInclusive = computed({
  get: () => store.state.weapons.weaponClassInclusive,
  set: (value) => store.dispatch('weapons/setWeaponClassInclusive', value),
})
const blade = useWeaponsFilter('weaponClass', 'blade')
const blunt = useWeaponsFilter('weaponClass', 'blunt')
const elemental = useWeaponsFilter('weaponClass', 'elemental')
const ethereal = useWeaponsFilter('weaponClass', 'ethereal')
const explosive = useWeaponsFilter('weaponClass', 'explosive')
const gun = useWeaponsFilter('weaponClass', 'gun')
const heavy = useWeaponsFilter('weaponClass', 'heavy')
const legendary = useWeaponsFilter('weaponClass', 'legendary')
const medical = useWeaponsFilter('weaponClass', 'medical')
const medieval = useWeaponsFilter('weaponClass', 'medieval')
const musical = useWeaponsFilter('weaponClass', 'musical')
const naval = useWeaponsFilter('weaponClass', 'naval')
const precise = useWeaponsFilter('weaponClass', 'precise')
const primitive = useWeaponsFilter('weaponClass', 'primitive')
const support = useWeaponsFilter('weaponClass', 'support')
const tool = useWeaponsFilter('weaponClass', 'tool')
const unarmed = useWeaponsFilter('weaponClass', 'unarmed')

const tierResetable = computed(() => store.getters['weapons/tierResetable'])
const typeResetable = computed(() => store.getters['weapons/typeResetable'])
const damageScalingResetable = computed(
  () => store.getters['weapons/damageScalingResetable']
)
const weaponClassResetable = computed(
  () => store.getters['weapons/weaponClassResetable']
)

const resetTier = () => store.dispatch('weapons/resetTier')
const resetType = () => store.dispatch('weapons/resetType')
const resetDamageScaling = () => store.dispatch('weapons/resetDamageScaling')
const resetWeaponClass = () => store.dispatch('weapons/resetWeaponClass')
</script>
