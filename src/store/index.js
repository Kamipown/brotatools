import { createStore } from 'vuex'

import weapons from './weapons'

const state = () => ({
  weaponDetails: '',
  selectedStartingWeapon: '',
})

const actions = {
  openWeaponDetails: ({ state }, name) => {
    state.weaponDetails = name
  },
  closeWeaponDetails: ({ state }) => {
    state.weaponDetails = ''
  },
  setSelectedStartingWeapon: ({ state }, name) => {
    if (state.selectedStartingWeapon === name) {
      state.selectedStartingWeapon = ''
    } else {
      state.selectedStartingWeapon = name
    }
  },
}

const store = createStore({
  state,
  actions,
  modules: {
    weapons,
  },
})

export default store
