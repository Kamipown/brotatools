import { weapons } from '@/constants'

const defaultTier = {
  lowestTier: true,
  allTiers: false,
  tier1: false,
  tier2: false,
  tier3: false,
  tier4: false,
}
const defaultType = {
  melee: false,
  ranged: false,
}
const defaultDamageScaling = {
  meleeDamage: false,
  rangedDamage: false,
  elementalDamage: false,
  engineering: false,
  armor: false,
  attackSpeed: false,
  curse: false,
  harvesting: false,
  level: false,
  lifeSteal: false,
  luck: false,
  maxHP: false,
  range: false,
  speed: false,
}
const defaultWeaponClass = {
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
}

const sortMap = {
  attackSpeed: (weapons) =>
    weapons.toSorted((a, b) => {
      const aCooldown = a.cooldown[a.tier - 1]
      const bCooldown = b.cooldown[b.tier - 1]
      if (aCooldown !== bCooldown) {
        return aCooldown - bCooldown
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  baseDamage: (weapons) =>
    weapons.toSorted((a, b) => {
      const aDamageBase = a.damageBase[a.tier - 1]
      const bDamageBase = b.damageBase[b.tier - 1]
      if (aDamageBase !== bDamageBase) {
        return bDamageBase - aDamageBase
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  basePrice: (weapons) =>
    weapons.toSorted((a, b) => {
      const aPrice = a.price[a.tier - 1]
      const bPrice = b.price[b.tier - 1]
      if (aPrice !== bPrice) {
        return bPrice - aPrice
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  critChance: (weapons) =>
    weapons.toSorted((a, b) => {
      const aCritChance = a.critChance[a.tier - 1]
      const bCritChance = b.critChance[b.tier - 1]
      if (aCritChance !== bCritChance) {
        return bCritChance - aCritChance
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  critMultiplier: (weapons) =>
    weapons.toSorted((a, b) => {
      const aCritMultiplier = a.critMultiplier[a.tier - 1]
      const bCritMultiplier = b.critMultiplier[b.tier - 1]
      if (aCritMultiplier !== bCritMultiplier) {
        return bCritMultiplier - aCritMultiplier
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  damageScaling: (weapons) =>
    weapons.toSorted((a, b) => {
      const aDamageMultiplier = a.damageMultiplier[a.tier - 1].reduce(
        (acc, v) => acc + Math.abs(v),
        0
      )
      const bDamageMultiplier = b.damageMultiplier[b.tier - 1].reduce(
        (acc, v) => acc + Math.abs(v),
        0
      )
      if (aDamageMultiplier !== bDamageMultiplier) {
        return bDamageMultiplier - aDamageMultiplier
      }
      return a.nameText.localeCompare(b.nameText)
    }),
  name: (weapons) =>
    weapons.toSorted((a, b) => {
      return a.nameText.localeCompare(b.nameText)
    }),
  range: (weapons) =>
    weapons.toSorted((a, b) => {
      const aRange = a.range[a.tier - 1]
      const bRange = b.range[b.tier - 1]
      if (aRange !== bRange) {
        return bRange - aRange
      }
      return a.nameText.localeCompare(b.nameText)
    }),
}

const state = () => ({
  search: '',
  ordering: { text: 'Name', value: 'name' },
  tier: { ...defaultTier },
  type: { ...defaultType },
  damageScalingInclusive: true,
  damageScaling: { ...defaultDamageScaling },
  weaponClassInclusive: true,
  weaponClass: { ...defaultWeaponClass },
})

const getters = {
  tiersApplied: (state) => {
    const ret = []
    Object.values(weapons).forEach((weapon) => {
      if (state.tier.lowestTier) {
        ret.push({
          ...weapon,
          tier: Number(5 - (weapon.t1 + weapon.t2 + weapon.t3 + weapon.t4)),
        })
      } else if (state.tier.allTiers) {
        if (weapon.t1) ret.push({ ...weapon, tier: 1 })
        if (weapon.t2) ret.push({ ...weapon, tier: 2 })
        if (weapon.t3) ret.push({ ...weapon, tier: 3 })
        if (weapon.t4) ret.push({ ...weapon, tier: 4 })
      } else {
        if (weapon.t1 && state.tier.tier1) ret.push({ ...weapon, tier: 1 })
        if (weapon.t2 && state.tier.tier2) ret.push({ ...weapon, tier: 2 })
        if (weapon.t3 && state.tier.tier3) ret.push({ ...weapon, tier: 3 })
        if (weapon.t4 && state.tier.tier4) ret.push({ ...weapon, tier: 4 })
      }
    })
    return ret
  },
  typesApplied: (state, getters) => {
    if (state.type.melee === state.type.ranged) {
      return getters.tiersApplied
    }
    if (state.type.melee) {
      return getters.tiersApplied.filter(
        (weapon) => weapon.rangeScaling === 'melee'
      )
    }
    if (state.type.ranged) {
      return getters.tiersApplied.filter(
        (weapon) => weapon.rangeScaling === 'ranged'
      )
    }
  },
  damageScalingsApplied: (state, getters) => {
    const entries = Object.entries(state.damageScaling)
    if (!entries.some((entry) => entry[1])) {
      return getters.typesApplied
    }
    const included = entries
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
    return getters.typesApplied.filter((weapon) => {
      if (state.damageScalingInclusive) {
        return !included.some((value) => !weapon.damageScaling.includes(value))
      } else {
        return included.some((value) => weapon.damageScaling.includes(value))
      }
    })
  },
  weaponClassesApplied: (state, getters) => {
    const entries = Object.entries(state.weaponClass)
    if (!entries.some((entry) => entry[1])) {
      return getters.damageScalingsApplied
    }
    const included = entries
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
    return getters.damageScalingsApplied.filter((weapon) => {
      if (state.weaponClassInclusive) {
        return !included.some((value) => !weapon.weaponClasses.includes(value))
      } else {
        return included.some((value) => weapon.weaponClasses.includes(value))
      }
    })
  },
  sortApplied: (state, getters) => {
    return sortMap[state.ordering.value](getters.weaponClassesApplied)
  },
  searchApplied: (state, getters) => {
    return getters.sortApplied.filter(({ nameText }) =>
      nameText.toLowerCase().includes(state.search.toLowerCase())
    )
  },
  tierResetable: (state) => {
    return state.tier.lowestTier !== true
  },
  typeResetable: (state) => {
    return state.type.melee !== state.type.ranged
  },
  damageScalingResetable: (state) => {
    return (
      !state.damageScalingInclusive ||
      Object.values(state.damageScaling).some((value) => value)
    )
  },
  weaponClassResetable: (state) => {
    return (
      !state.weaponClassInclusive ||
      Object.values(state.weaponClass).some((value) => value)
    )
  },
}

const actions = {
  setSearch: ({ state }, value) => {
    state.search = value
  },
  setOrdering: ({ state }, value) => {
    state.ordering = value
  },
  setFilter: ({ dispatch }, { section, field, value }) => {
    dispatch(
      {
        tier: 'setTier',
        type: 'setType',
        damageScaling: 'setDamageScaling',
        weaponClass: 'setWeaponClass',
      }[section],
      { field, value }
    )
  },
  setTier: ({ state }, { field, value }) => {
    if (field === 'lowestTier') {
      if (value === false) return
      state.tier.lowestTier = true
      state.tier.allTiers = false
      state.tier.tier1 = false
      state.tier.tier2 = false
      state.tier.tier3 = false
      state.tier.tier4 = false
    } else if (field === 'allTiers') {
      if (value === false) return
      state.tier.lowestTier = false
      state.tier.allTiers = true
      state.tier.tier1 = false
      state.tier.tier2 = false
      state.tier.tier3 = false
      state.tier.tier4 = false
    } else {
      state.tier[field] = value
      if (
        !state.tier.tier1 &&
        !state.tier.tier2 &&
        !state.tier.tier3 &&
        !state.tier.tier4
      ) {
        state.tier.lowestTier = true
      } else if (
        state.tier.tier1 &&
        state.tier.tier2 &&
        state.tier.tier3 &&
        state.tier.tier4
      ) {
        state.tier.allTiers = true
        state.tier.tier1 = false
        state.tier.tier2 = false
        state.tier.tier3 = false
        state.tier.tier4 = false
      } else {
        state.tier.lowestTier = false
        state.tier.allTiers = false
      }
    }
  },
  setType: ({ state }, { field, value }) => {
    state.type[field] = value
  },
  setDamageScalingInclusive: ({ state }, value) => {
    state.damageScalingInclusive = value
  },
  setDamageScaling: ({ state }, { field, value }) => {
    state.damageScaling[field] = value
  },
  setWeaponClassInclusive: ({ state }, value) => {
    state.weaponClassInclusive = value
  },
  setWeaponClass: ({ state }, { field, value }) => {
    state.weaponClass[field] = value
  },
  resetTier: ({ state }) => {
    state.tier = { ...defaultTier }
  },
  resetType: ({ state }) => {
    state.type = { ...defaultType }
  },
  resetDamageScaling: ({ state }) => {
    state.damageScalingInclusive = true
    state.damageScaling = { ...defaultDamageScaling }
  },
  resetWeaponClass: ({ state }) => {
    state.weaponClassInclusive = true
    state.weaponClass = { ...defaultWeaponClass }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
}
