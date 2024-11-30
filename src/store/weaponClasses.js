const state = () => ({
  tooltip: null,
})

const actions = {
  showTooltip: ({ state }, { hook, name }) => {
    state.tooltip = { hook, name }
  },
  hideTooltip: ({ state }) => {
    state.tooltip = null
  },
}

export default {
  namespaced: true,
  state,
  actions,
}
