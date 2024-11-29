<template>
  <Panel>
    <PanelSection title="Tiers" :resetable="tierResetable" @reset="resetTier">
      <Checkbox text="All tiers" v-model="allTiers" />
      <PanelSeparator />
      <Checkbox textClass="text-gray-400" text="Tier I" v-model="tier1" />
      <Checkbox textClass="text-blue-400" text="Tier II" v-model="tier2" />
      <Checkbox textClass="text-purple-400" text="Tier III" v-model="tier3" />
      <Checkbox textClass="text-red-400" text="Tier IV" v-model="tier4" />
    </PanelSection>
    <PanelSection title="Tags" :resetable="tagResetable" @reset="resetTag">
      <FilterMode class="mx-4 mb-4" v-model="tagInclusive" />
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
      <Checkbox
        :text="`${stat('critChance')} Crit Chance`"
        v-model="critChance"
      />
      <Checkbox :text="`${stat('curse')} Curse`" v-model="curse" />
      <Checkbox :text="`${stat('damage')} Damage`" v-model="damage" />
      <Checkbox :text="`${stat('dodge')} Dodge`" v-model="dodge" />
      <Checkbox
        :text="`${stat('harvesting')} Harvesting`"
        v-model="harvesting"
      />
      <Checkbox
        :text="`${stat('hpRegeneration')} HP Regeneration`"
        v-model="hpRegeneration"
      />
      <Checkbox :text="`${stat('lifeSteal')} Life Steal`" v-model="lifeSteal" />
      <Checkbox :text="`${stat('luck')} Luck`" v-model="luck" />
      <Checkbox :text="`${stat('maxHP')} Max HP`" v-model="maxHP" />
      <Checkbox :text="`${stat('range')} Range`" v-model="range" />
      <Checkbox :text="`${stat('speed')} Speed`" v-model="speed" />
      <Checkbox :text="`${stat('level')} XP Gain`" v-model="xpGain" />
      <PanelSeparator />
      <Checkbox text="Consumable" v-model="consumable" />
      <Checkbox text="Economy" v-model="economy" />
      <Checkbox text="Exploration" v-model="exploration" />
      <Checkbox text="Explosive" v-model="explosive" />
      <Checkbox text="Knockback" v-model="knockback" />
      <Checkbox text="Lock" v-model="lock" />
      <Checkbox text="Pickup" v-model="pickup" />
      <Checkbox text="Stand Still" v-model="standStill" />
      <Checkbox text="Structure" v-model="structure" />
      <PanelSeparator />
      <Checkbox text="More Enemies" v-model="moreEnemies" />
      <Checkbox text="Less Enemies" v-model="lessEnemies" />
      <Checkbox text="Less Enemy Speed" v-model="lessEnemySpeed" />
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
import useItemsFilter from './useItemsFilter'

const store = useStore()

const stat = (v) => `<span class="stat ${v}"></span>`

const allTiers = useItemsFilter('tier', 'allTiers')
const tier1 = useItemsFilter('tier', 'tier1')
const tier2 = useItemsFilter('tier', 'tier2')
const tier3 = useItemsFilter('tier', 'tier3')
const tier4 = useItemsFilter('tier', 'tier4')

const tagInclusive = computed({
  get: () => store.state.items.tagInclusive,
  set: (value) => store.dispatch('items/setTagInclusive', value),
})
const maxHP = useItemsFilter('tag', 'maxHP')
const dodge = useItemsFilter('tag', 'dodge')
const hpRegeneration = useItemsFilter('tag', 'hpRegeneration')
const pickup = useItemsFilter('tag', 'pickup')
const knockback = useItemsFilter('tag', 'knockback')
const meleeDamage = useItemsFilter('tag', 'meleeDamage')
const rangedDamage = useItemsFilter('tag', 'rangedDamage')
const engineering = useItemsFilter('tag', 'engineering')
const critChance = useItemsFilter('tag', 'critChance')
const elementalDamage = useItemsFilter('tag', 'elementalDamage')
const attackSpeed = useItemsFilter('tag', 'attackSpeed')
const damage = useItemsFilter('tag', 'damage')
const range = useItemsFilter('tag', 'range')
const luck = useItemsFilter('tag', 'luck')
const exploration = useItemsFilter('tag', 'exploration')
const economy = useItemsFilter('tag', 'economy')
const armor = useItemsFilter('tag', 'armor')
const curse = useItemsFilter('tag', 'curse')
const xpGain = useItemsFilter('tag', 'xpGain')
const standStill = useItemsFilter('tag', 'standStill')
const lifeSteal = useItemsFilter('tag', 'lifeSteal')
const speed = useItemsFilter('tag', 'speed')
const moreEnemies = useItemsFilter('tag', 'moreEnemies')
const harvesting = useItemsFilter('tag', 'harvesting')
const lessEnemies = useItemsFilter('tag', 'lessEnemies')
const structure = useItemsFilter('tag', 'structure')
const explosive = useItemsFilter('tag', 'explosive')
const lock = useItemsFilter('tag', 'lock')
const consumable = useItemsFilter('tag', 'consumable')
const lessEnemySpeed = useItemsFilter('tag', 'lessEnemySpeed')

const tierResetable = computed(() => store.getters['items/tierResetable'])
const tagResetable = computed(() => store.getters['items/tagResetable'])

const resetTier = () => store.dispatch('items/resetTier')
const resetTag = () => store.dispatch('items/resetTag')
</script>
