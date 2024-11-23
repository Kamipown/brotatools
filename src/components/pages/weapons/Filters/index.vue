<template>
  <Panel>
    <PanelSection title="Tiers">
      <Checkbox text="Lowest tier" v-model="tier.lowestTier" />
      <Checkbox text="All tiers" v-model="tier.allTiers" />
      <Checkbox text="Tier I" v-model="tier.tier1" />
      <Checkbox text="Tier II" v-model="tier.tier2" />
      <Checkbox text="Tier III" v-model="tier.tier3" />
      <Checkbox text="Tier IV" v-model="tier.tier4" />
    </PanelSection>
    <PanelSection title="Classes">
      <Checkbox text="Blade" v-model="weaponClass.blade" />
      <Checkbox text="Blunt" v-model="weaponClass.blunt" />
      <Checkbox text="Elemental" v-model="weaponClass.elemental" />
      <Checkbox text="Ethereal" v-model="weaponClass.ethereal" />
      <Checkbox text="Explosive" v-model="weaponClass.explosive" />
      <Checkbox text="Gun" v-model="weaponClass.gun" />
      <Checkbox text="Heavy" v-model="weaponClass.heavy" />
      <Checkbox text="Legendary" v-model="weaponClass.legendary" />
      <Checkbox text="Medical" v-model="weaponClass.medical" />
      <Checkbox text="Medieval" v-model="weaponClass.medieval" />
      <Checkbox text="Musical" v-model="weaponClass.musical" />
      <Checkbox text="Naval" v-model="weaponClass.naval" />
      <Checkbox text="Precise" v-model="weaponClass.precise" />
      <Checkbox text="Primitive" v-model="weaponClass.primitive" />
      <Checkbox text="Support" v-model="weaponClass.support" />
      <Checkbox text="Tool" v-model="weaponClass.tool" />
      <Checkbox text="Unarmed" v-model="weaponClass.unarmed" />
    </PanelSection>
    <PanelSection title="Types">
      <Checkbox text="Melee" :value="type.melee" />
      <Checkbox text="Ranged" :value="type.ranged" />
    </PanelSection>
  </Panel>
</template>

<script setup>
import { Checkbox, Panel, PanelSection } from '@/components'

const tier = reactive({
  lowestTier: true,
  allTiers: false,
  tier1: false,
  tier2: false,
  tier3: false,
  tier4: false,
})

const weaponClass = reactive({
  blade: false,
  blunt: false,
  elemental: false,
  ethereal: false,
  explosive: false,
  gun: false,
  heavy: false,
  legendary: false,
  medical: false,
  medieval: false,
  musical: false,
  naval: false,
  precise: false,
  primitive: false,
  support: false,
  tool: false,
  unarmed: false,
})

const type = reactive({
  melee: true,
  ranged: true,
})
</script>
