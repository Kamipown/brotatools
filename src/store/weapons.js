const state = () => ({
  tier: {
    lowerTier: true,
    allTiers: false,
    tier1: false,
    tier2: false,
    tier3: false,
    tier4: false,
  },
  weaponClass: {
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
  },
  type: {
    melee: true,
    ranged: true,
  },
})

const actions = {
  set: ({ state }, filters) => {
    state.filters = filters
  },
  clear: ({ state }) => {
    state.filters = {}
  },
}

export default {
  namespaced: true,
  state,
  actions,
}
