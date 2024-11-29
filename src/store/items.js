import { items } from '@/constants'

const defaultTier = {
  allTiers: true,
  tier1: false,
  tier2: false,
  tier3: false,
  tier4: false,
}

const defaultTag = {
  maxHP: false,
  dodge: false,
  hpRegeneration: false,
  pickup: false,
  knockback: false,
  meleeDamage: false,
  rangedDamage: false,
  engineering: false,
  critChance: false,
  elementalDamage: false,
  attackSpeed: false,
  damage: false,
  range: false,
  luck: false,
  exploration: false,
  economy: false,
  armor: false,
  curse: false,
  xpGain: false,
  standStill: false,
  lifeSteal: false,
  speed: false,
  moreEnemies: false,
  harvesting: false,
  lessEnemies: false,
  structure: false,
  explosive: false,
  lock: false,
  consumable: false,
  lessEnemySpeed: false,
}

const sortMap = {
  basePrice: (items) =>
    items.toSorted((a, b) =>
      a.price !== b.price
        ? b.price - a.price
        : a.nameText.localeCompare(b.nameText)
    ),
  name: (items) =>
    items.toSorted((a, b) => a.nameText.localeCompare(b.nameText)),
}

const state = () => ({
  search: '',
  ordering: { text: 'Name', value: 'name' },
  tier: { ...defaultTier },
  tagInclusive: true,
  tag: { ...defaultTag },
})

const getters = {
  tiersApplied: (state) => {
    const ret = []
    Object.values(items).forEach((item) => {
      if (state.tier.allTiers) {
        ret.push(item)
      } else {
        if (item.tier === 1 && state.tier.tier1) ret.push(item)
        else if (item.tier === 2 && state.tier.tier2) ret.push(item)
        else if (item.tier === 3 && state.tier.tier3) ret.push(item)
        else if (item.tier === 4 && state.tier.tier4) ret.push(item)
      }
    })
    return ret
  },
  tagsApplied: (state, getters) => {
    const entries = Object.entries(state.tag)
    if (!entries.some((entry) => entry[1])) {
      return getters.tiersApplied
    }
    const included = entries
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
    return getters.tiersApplied.filter((item) => {
      if (state.tagInclusive) {
        return !included.some((value) => !item.tags.includes(value))
      } else {
        return included.some((value) => item.tags.includes(value))
      }
    })
  },
  sortApplied: (state, getters) => {
    return sortMap[state.ordering.value](getters.tagsApplied)
  },
  searchApplied: (state, getters) => {
    return getters.sortApplied.filter(({ nameText }) =>
      nameText.toLowerCase().includes(state.search.toLowerCase())
    )
  },
  tierResetable: (state) => {
    return state.tier.allTiers !== true
  },
  tagResetable: (state) => {
    return (
      !state.tagInclusive || Object.values(state.tag).some((value) => value)
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
        tag: 'setTag',
      }[section],
      { field, value }
    )
  },
  setTier: ({ state }, { field, value }) => {
    if (field === 'allTiers') {
      if (value === false) return
      state.tier.allTiers = true
      state.tier.tier1 = false
      state.tier.tier2 = false
      state.tier.tier3 = false
      state.tier.tier4 = false
    } else {
      state.tier[field] = value
      state.tier.allTiers = false
      if (
        !state.tier.tier1 &&
        !state.tier.tier2 &&
        !state.tier.tier3 &&
        !state.tier.tier4
      ) {
        state.tier.allTiers = true
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
      }
    }
  },
  setTagInclusive: ({ state }, value) => {
    state.tagInclusive = value
  },
  setTag: ({ state }, { field, value }) => {
    state.tag[field] = value
  },
  resetTier: ({ state }) => {
    state.tier = { ...defaultTier }
  },
  resetTag: ({ state }) => {
    state.tagInclusive = true
    state.tag = { ...defaultTag }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
}
